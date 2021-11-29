import { defineEvent } from "./EventsTypes"
import { lawIsAccepted, linear } from "../laws/lawTools"

export default defineEvent({
  title: "Debatte über CO2-Preise",
  description:
    "Eine marktliberale Kampagne ist sehr erfolgreich darin, Dich als Verbots-Kanzler hinzustellen. Aus allen Richtungen prasseln Forderungen nach einem adäquaten CO2-Preis auf Dich ein. Nur leider gehen die Vorstellungen über den genauen Preis sehr weit auseinander.",
  laws: ["CO2PreisErhoehen", "WirksamerCO2Preis", "VollerCO2Preis"],

  apply() {
    return []
  },

  probability(game) {
    const count =
      (lawIsAccepted(game, "AutosInInnenstaedtenVerbieten") ? 1 : 0) +
      (lawIsAccepted(game, "KohleverstromungEinstellen") ? 1 : 0) +
      (lawIsAccepted(game, "SolarAufAllenDaechernVerpflichtend") ? 1 : 0) +
      (lawIsAccepted(game, "Tempolimit130AufAutobahnen") ? 1 : 0) +
      (lawIsAccepted(game, "Tempolimit120AufAutobahnen") ? 1 : 0) +
      (lawIsAccepted(game, "Tempolimit100AufAutobahnen") ? 1 : 0)
    return linear(1, 3, count) / 100
  },
})
