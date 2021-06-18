export const allEvents = await Promise.all(
  ["SocialMedia", "bestechung", "WahlVerloren", "FinanzKollaps", "TimesUp", "Hitzehölle"].map(
    async (name) => (await import("./" + name)).default
  )
)
