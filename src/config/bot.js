import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT PRESENCE (Sleek & Aesthetic)
  // =========================
  presence: {
    // "idle" (yellow moon) or "dnd" (red dot) look much cleaner for aesthetic bots than standard green
    status: "idle",

    activities: [
      {
        // Minimalist custom text status
        name: "🌸 | /help",
        // 4 = Custom Status type
        type: 4,
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
  commands: {
    owners: process.env.OWNER_IDS?.split(",") || [],
    defaultCooldown: 3,
    deleteCommands: false,
    testGuildId: process.env.TEST_GUILD_ID,
    prefix: process.env.PREFIX || "!",
  },

  // =========================
  // APPLICATIONS SYSTEM
  // =========================
  applications: {
    defaultQuestions: [
      { question: "🪐 ── What is your name/alias?", required: true },
      { question: "☁️ ── How old are you?", required: true },
      { question: "🌿 ── What draws you to our community?", required: true },
    ],

    // Muted, vaporwave/pastel inspired colors instead of harsh full neon
    statusColors: {
      pending: "#FFB3BA",   // Pastel Soft Pink
      approved: "#BFFCC6",  // Pastel Sage Green
      denied: "#FFC6FF",    // Pastel Lavender
    },

    applicationCooldown: 24,
    deleteDeniedAfter: 7,
    deleteApprovedAfter: 30,
    managerRoles: [], 
  },

  // =========================
  // EMBED COLORS & BRANDING (The "Aesthetic" Core)
  // =========================
  // Out with neon Red/Green, in with Dark Mode blending shades and soft pastels
  embeds: {
    colors: {
      // Main brand colors matching Discord's dark UI themes
      primary: "#2F3136",      // "Invisible" Embed Canvas (blends into Dark Mode chat seamlessly)
      secondary: "#1A1C1E",    // Extra deep charcoal line color

      // Soft Sage, Rose Muted Pink, Soft Gold, and Periwinkle Blue
      success: "#A8E6CF",      // Sage Green
      error: "#FF8B94",        // Rose Quartz Red
      warning: "#FFF3B0",      // Soft Amber Yellow
      info: "#DED2F9",         // Pale Lavender/Blue

      // Neutral utility colors matching Discord's exact palette specs
      light: "#F6F6F7",
      dark: "#2F3136",
      gray: "#4F545C",

      // Discord palette modern aesthetic variants
      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#0F1012",

      // Feature palettes
      giveaway: {
        active: "#FFB7B2",     // Pastel Coral
        ended: "#2F3136",      // Blends away when completed
      },
      ticket: {
        open: "#A8E6CF",
        claimed: "#FFF3B0",
        closed: "#FF8B94",
        pending: "#4F545C",
      },
      economy: "#E2C2C6",      // Rose Gold Metallic
      birthday: "#FFC6FF",     // Pastel Orchid
      moderation: "#D8B4F8",   // Soft Violet

      priority: {
        none: "#4F545C",
        low: "#BFFCC6",
        medium: "#FFFCFF",
        high: "#FFC6FF",
        urgent: "#FF8B94",
      },
    },
    footer: {
      // Cleaner lowercase layout or symbolic splitters look highly aesthetic
      text: "🌙 ── Titan Bot",
      icon: null,
    },
    thumbnail: null,
    author: {
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // ECONOMY SETTINGS
  // =========================
  economy: {
    currency: {
      name: "star",
      namePlural: "stars",
      symbol: "✧", // Custom aesthetic symbol instead of standard cash "$"
    },

    startingBalance: 0,
    baseBankCapacity: 100000,
    dailyAmount: 100,
    workMin: 10,
    workMax: 100,
    begMin: 5,
    begMax: 50,
    robSuccessRate: 0.4,
    robFailJailTime: 3600000,
  },

  // =========================
  // SHOP SETTINGS
  // =========================
  shop: {},

  // =========================
  // TICKET SYSTEM
  // =========================
  tickets: {
    defaultCategory: null,
    supportRoles: [],

    // Swapped standard emoji shapes for clean, minimal astronomical/neutral symbols
    priorities: {
      none: {
        emoji: "🪐",
        color: "#4F545C",
        label: "Routine",
      },
      low: {
        emoji: "☁️",
        color: "#BFFCC6",
        label: "Low Priority",
      },
      medium: {
        emoji: "✨",
        color: "#FFF3B0",
        label: "Medium Priority",
      },
      high: {
        emoji: "💫",
        color: "#FFC6FF",
        label: "High Priority",
      },
      urgent: {
        emoji: "🔮",
        color: "#FF8B94",
        label: "Urgent Care",
      },
    },

    defaultPriority: "none",
    archiveCategory: null,
    logChannel: null,
  },

  // =========================
  // GIVEAWAY SETTINGS
  // =========================
  giveaways: {
    defaultDuration: 86400000,
    minimumWinners: 1,
    maximumWinners: 10,
    minimumDuration: 300000,
    maximumDuration: 2592000000,
    allowedRoles: [],
    bypassRoles: [],
  },

  // =========================
  // BIRTHDAY SETTINGS
  // =========================
  birthday: {
    defaultRole: null,
    announcementChannel: null,
