import { Events, ActivityType } from "discord.js";
import { logger, startupLog } from "../utils/logger.js";
import config from "../config/application.js";
import { reconcileReactionRoleMessages } from "../services/reactionRoleService.js";
import { reconcileTicketPanels, reconcileVerificationPanels, reconcileReactionRolePanelHealth } from "../services/panelHealthService.js";
import { reconcileLevelRoles } from "../services/levelRoleSyncService.js";
import { initRiffyAfterReady } from "../services/music/riffySetup.js";

export default {
  name: Events.ClientReady,
  once: true,

  async execute(client) {
    try {
      const presence = config.bot.presence;

      // ==========================================================
      // STABLE ROTATING PURE TEXT CUSTOM STATUS LOOP
      // ==========================================================
      let currentStatusIndex = 0;

      const setBotPresence = () => {
        const serverCount = client.guilds.cache.size || 1;

        // Custom list of clean text statuses
        const customStatuses = [
          "🌸 Powered by Clawny",
          "👑 Chudogi?",
          `📊 over ${serverCount} servers`,
          "✦ Focus Ecosystem ✦"
        ];

        // Correctly pass Custom status using ActivityType.Custom (type: 4)
        client.user.setPresence({
          status: presence.status || "online",
          activities: [{
            type: ActivityType.Custom,
            name: "custom",
            state: customStatuses[currentStatusIndex]
          }]
        });

        // Rotate index safely
        currentStatusIndex = (currentStatusIndex + 1) % customStatuses.length;
      };

      // Fire once immediately on boot
      setBotPresence();

      // Rotate every 20 seconds to prevent Discord from blocking it
      setInterval(setBotPresence, 20000);
      // ==========================================================

      startupLog(`Ready! Logged in as ${client.user.tag}`);
      if (client.config?.features?.music) {
        initRiffyAfterReady(client);
      }

      const reconciliationSummary = await reconcileReactionRoleMessages(client);
      startupLog(
        `Reaction role reconciliation: scanned ${reconciliationSummary.scannedMessages}, removed ${reconciliationSummary.removedMessages}, errors ${reconciliationSummary.errors}`
      );

      const ticketPanelSummary = await reconcileTicketPanels(client);
      startupLog(
        `Ticket panel health: scanned ${ticketPanelSummary.scannedGuilds} guilds, healthy ${ticketPanelSummary.healthyPanels}, deleted ${ticketPanelSummary.deletedPanels}, missing channel ${ticketPanelSummary.missingChannels}, recovered ${ticketPanelSummary.recoveredIds}, errors ${ticketPanelSummary.errors}`
      );

      const verificationPanelSummary = await reconcileVerificationPanels(client);
      startupLog(
        `Verification panel health: scanned ${verificationPanelSummary.scannedGuilds} guilds, healthy ${verificationPanelSummary.healthyPanels}, deleted ${verificationPanelSummary.deletedPanels}, missing channel ${verificationPanelSummary.missingChannels}, recovered ${verificationPanelSummary.recoveredIds}, errors ${verificationPanelSummary.errors}`
      );

      const reactionRolePanelSummary = await reconcileReactionRolePanelHealth(client);
      startupLog(
        `Reaction role panel health: scanned ${reactionRolePanelSummary.scannedPanels} panels, healthy ${reactionRolePanelSummary.healthyPanels}, deleted ${reactionRolePanelSummary.deletedPanels}, missing channel ${reactionRolePanelSummary.missingChannels}, recovered ${reactionRolePanelSummary.recoveredIds}, errors ${reactionRolePanelSummary.errors}`
      );

      const levelRoleSummary = await reconcileLevelRoles(client);
      startupLog(
        `Level role sync: scanned ${levelRoleSummary.scannedGuilds} guilds, pruned ${levelRoleSummary.prunedRewardEntries} stale rewards, re-awarded ${levelRoleSummary.rolesReAwarded} roles, errors ${levelRoleSummary.errors}`
      );
    } catch (error) {
      logger.error("Error in ready event:", error);
    }
  },
};
