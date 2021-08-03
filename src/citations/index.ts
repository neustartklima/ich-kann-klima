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
  comment: `Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet`,
})

export const vdv2019Statistik = new Citation({
  url: "https://www.vdv.de/vdv-statistik-2019.pdfx",
  title: "2019 Statistik",
  publisher: "VDV",
  date: "2020-10-01",
  archiveUrl: "https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",
  comment: `Seite 11 enthält CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] für mehrere Verkehrsmittel`,
})

export const ubaEmissionenDesVerkehrs = new Citation({
  url: "https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",
  title: "Emissionen des Verkehrs - Straßengüterverkehr",
  publisher: "Umweltbundesamt",
  archiveUrl:
    "https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",
})

export const bmvi2020VerkehrInZahlen = new Citation({
  url: "https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",
  title: "Verkehr in Zahlen 2020/2021",
  publisher: "BMVI",
  date: "2021-04-13",
  archiveUrl:
    "https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",
  comment: `Seite 219 enthält Personenkilometer-Jahreswerte für mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet`,
})

export const polarstern2021CO2nachBrennstoff = new Citation({
  url: "https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",
  title: "Heizung: Wie viel CO2 dein Brennstoff verursacht",
  publisher: "Polarstern Magazin",
  date: "2021-07-26",
  archiveUrl:
    "https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",
  comment: ``,
  internalComment: ``,
})

export const emse2021CO2Rechner = new Citation({
  url: "https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",
  title: "CO2-Rechner",
  authors: "Horst Emse",
  date: "2021-08-03",
  archiveUrl:
    "https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",
  comment: `Quelle für 160g CO2 pro kWh Fernwärme.`,
  internalComment: `TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]`,
})

export const uba2008Fernwaerme = new Citation({
  url: "https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",
  title: "Bestimmung spezifischer Treibhausgas-Emissionsfaktoren für Fernwärme",
  authors: "Uwe R. Fritsche, Lothar Rausch",
  publisher: "Umweltbundesamt",
  date: "2008-05-01",
  archiveUrl:
    "https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",
  comment: ``,
  internalComment: `Angebliche Quelle für 160g CO2 pro kWh Fernwärme. TODO #91: Zahl nicht gefunden. Quelle recht alt.`,
})

export const rensmart2021kWhToCO2 = new Citation({
  url: "https://www.rensmart.com/Calculators/KWH-to-CO2",
  title: "CO2(eq) emissions due to electricity generation (by source)",
  publisher: "RenSMART",
  date: "2021-01-01",
  archiveNotPossible: true,
  localCopy: "Rensmart-KWH-to-CO2.pdf",
  comment: ``,
  internalComment: `Refers to [ukgov2018kWhtoCO2].`,
})

export const ukgov2018kWhToCO2 = new Citation({
  url: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",
  referringUrl: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",
  title: "CO2(eq) emissions due to electricity generation (by source)",
  publisher: "UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",
  date: "2018-06-08",
  archiveUrl:
    "https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",
  comment: ``,
  internalComment: ``,
})

export const motor12020AutosInDeutschland = new Citation({
  url: "https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",
  title: "Autos in Deutschland: Zahlen und Fakten",
  authors: "Roland Hildebrandt",
  publisher: "motor1.com",
  date: "2020-03-02",
  archiveUrl:
    "https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",
  comment: ``,
  internalComment: `TODO #91: KBA als direkte Quelle wäre besser.`,
})

export const sb2020Bevoelkerung = new Citation({
  url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",
  title: "Bevölkerung nach Nationalität und Geschlecht 2020",
  publisher: "Statistisches Bundesamt",
  date: "2021-07-21",
  archiveUrl:
    "https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",
  comment: ``,
  internalComment: ``,
})

export const ba2020Arbeitslosenzahlen = new Citation({
  url: "https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",
  title: "Entwicklung des Arbeitsmarkts 2020 in Deutschland",
  publisher: "Bundesagentur für Arbeit",
  date: "2021-01-05",
  archiveUrl: "https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",
  comment: ``,
  internalComment: ``,
})

export const statAemter2021BIP = new Citation({
  url: "https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",
  title: "Bruttoinlandsprodukt (VGR)",
  publisher: "Statistische Ämter des Bundes und der Länder",
  date: "2021-03-30",
  archiveUrl: "https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",
  comment: ``,
  internalComment: ``,
})

export const wp2021Staatsverschuldung = new Citation({
  url: "https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",
  title: "Staatsverschuldung Deutschlands",
  publisher: "Wikipedia",
  date: "2021-06-30",
  archiveUrl:
    "https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",
  comment: ``,
  internalComment: ``,
})
