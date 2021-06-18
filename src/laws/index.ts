import { createLaw } from "../Factory"

export const allLaws = await Promise.all(
  [
    "KohleverstromungEinstellen",
    "EnergiemixRegeltDerMarkt",
    "KernenergienutzungVerlaengern",
    "InitialAtomausstieg",
    "WindenergieSubventionieren",
    "DaemmungVonWohngebaeudenFoerdern",
    "NahverkehrAusbauen",
    "FoerderungFuerTierhaltungAbschaffen",
    "NahverkehrKostenlos",
  ].map(async (name) => createLaw(name, (await import("./" + name)).default))
)
