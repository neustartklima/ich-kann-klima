import { Source } from "../types"

export const umweltrat2020Umweltgutachten = new Source({
  url:
    "https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=22",
  title: "Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",
  publisher: "Umweltrat",
})

export const fraunhoferISE2020ElectricityGeneration = new Source({
  url: "https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",
  title: "Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",
  publisher: "Fraunhofer ISE",
  archiveNotPossible: true,
  localCopy: "Bar Charts Electricity Generation Energy-Charts.pdf",
})

export const welt2018BundKassiertMineraloelsteuer = new Source({
  url:
    "https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",
  title: "Bund kassiert so viel Mineralölsteuer wie seit Jahren nicht",
  publisher: "welt.de",
  authors: "Birger Nicolai, Korrespondent, Welt",
  date: "2018-02-04",
  archiveUrl:
    "https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",
})

export const uba2020DeutscheTreibhausgasEmissionen = new Source({
  url:
    "https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",
  referringUrl:
    "https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",
  title: "Vorjahreschätzung der deutschen Treibhausgas-Emissionen für das Jahr 2020",
  publisher: "Umweltbundesamt",
  date: "2021-03-15",
  archiveUrl:
    "https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",
  internalComment: /*html*/ `
    In most cases values from sheet "THG" row 2019 are used.
  `,
})

export const vdv2019Statistik = new Source({
  url: "https://www.vdv.de/vdv-statistik-2019.pdfx",
  title: "2019 Statistik",
  publisher: "VDV",
  date: "2020-10-01",
  archiveUrl: "https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",
  internalComment: /*html*/ `Page 11 contains g/Pkm values for several transport types.`,
})

export const ubaEmissionenDesVerkehrs = new Source({
  url: "https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",
  title: "Emissionen des Verkehrs - Straßengüterverkehr",
  publisher: "UBA",
  archiveUrl:
    "https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",
})
