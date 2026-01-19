export const DISCORD_USER_ID = import.meta.env.VITE_Discord_ID;

export const TIME_FORMAT_OPTIONS = {
  timeZone: "Europe/Copenhagen",
  hour: "numeric",
  minute: "numeric",
} as const satisfies Intl.DateTimeFormatOptions;


export const LINKS = {
  Discord: `https://discordapp.com/users/${DISCORD_USER_ID}`,
} as const;