import { markdown } from "../lib/utils"
import { Citation } from "./CitationsTypes"

export type Citations = Citation[]

export function cite(cit: Citation): string {
  const pa = cit.publisher || cit.authors
  const prefix = pa != undefined ? pa + ": " : ""
  const title = cit.title || cit.url.toString()
  const url = cit.url.toString()
  return `[[${prefix}${title}](${url})]`
}

export const citationsDescription = (citations: Citations) =>
  citations.map((citation) => citation.toString()).join("; ")

export const umweltrat2020Umweltgutachten = new Citation({
  url: "https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=22",
  title: "Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",
  publisher: "Umweltrat",
})

export const fraunhoferISE2020ElectricityGeneration = new Citation({
  url: "https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",
  title: "Energy-Charts: Annual electricity generation in Germany in 2020",
  publisher: "Fraunhofer ISE",
  archiveNotPossible: true,
  localCopy: "Bar Charts Electricity Generation Energy-Charts.pdf",
})

export const welt2018BundKassiertMineraloelsteuer = new Citation({
  url: "https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",
  title: "Bund kassiert so viel Mineralölsteuer wie seit Jahren nicht",
  publisher: "welt.de",
  authors: "Birger Nicolai",
  date: "2018-02-04",
  archiveUrl:
    "https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",
})

export const uba2020DeutscheTreibhausgasEmissionen = new Citation({
  url: "https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",
  referringUrl:
    "https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",
  title: "Vorjahreschätzung der deutschen Treibhausgas-Emissionen für das Jahr 2020",
  publisher: "Umweltbundesamt",
  date: "2021-03-15",
  archiveUrl:
    "https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",
  comment: /*html*/ `Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet`,
})

export const vdv2019Statistik = new Citation({
  url: "https://www.vdv.de/vdv-statistik-2019.pdfx",
  title: "2019 Statistik",
  publisher: "VDV",
  date: "2020-10-01",
  archiveUrl: "https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",
  comment: /*html*/ `Seite 11 enthält CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] für mehrere Verkehrsmittel`,
})

export const ubaEmissionenDesVerkehrs = new Citation({
  url: "https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",
  title: "Emissionen des Verkehrs - Straßengüterverkehr",
  publisher: "UBA",
  archiveUrl:
    "https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",
})

export const bmvi2020VerkehrInZahlen = new Citation({
  url: "https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",
  title: "Emissionen des Verkehrs - Straßengüterverkehr",
  publisher: "BMVI",
  date: "2021-04-13",
  archiveUrl:
    "https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",
  comment: /*html*/ `Seite 219 enthält Personenkilometer-Jahreswerte für mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet`,
})
