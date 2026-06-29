export default {
  // =========================
  // EMBED COLORS & BRANDING
  // =========================
  embeds: {
    colors: {
      primary: "#2B2D31",    // Seamless Discord dark mode look
      secondary: "#FFB6C1",  // Soft pastel pink accent
      success: "#A3E4D7",
      error: "#F1948A",
      warning: "#F9E79F",
      info: "#AED6F1",
      light: "#FFFFFF",
      dark: "#2B2D31",
      gray: "#99AAB5",
      blurple: "#5865F2",
      green: "#A3E4D7",
      yellow: "#F9E79F",
      fuchsia: "#EB459E",
      red: "#F1948A",
      black: "#000000",
      giveaway: {
        active: "#A3E4D7",
        ended: "#F1948A",
      },
      ticket: {
        open: "#A3E4D7",
        claimed: "#FAA61A",
        closed: "#F1948A",
        pending: "#99AAB5",
      },
      economy: "#F9E79F",
      birthday: "#E91E63",
      moderation: "#BB8FCE",
      priority: {
        none: "#95A5A6",
        low: "#AED6F1",
        medium: "#A3E4D7",
        high: "#F9E79F",
        urgent: "#F1948A",
      },
    },
    footer: {
      text: "✦ Focus Ecosystem ✦",
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
      name: "coins",
      namePlural: "coins",
      symbol: "$",
    },
    robFailJailTime: 3600000,
  },

  // =========================
  // SHOP SETTINGS
  // =========================
  shop: {},
};
