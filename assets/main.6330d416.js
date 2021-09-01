var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,l=(e,t)=>{for(var i in t||(t={}))r.call(t,i)&&s(e,i,t[i]);if(n)for(var i of n(t))a.call(t,i)&&s(e,i,t[i]);return e},o=(e,n)=>t(e,i(n));import{s as c,v as u,d,m as h,p as m,a as p,c as g,b,e as v,t as f,w,o as y,F as k,r as S,f as A,g as D,h as W,i as T,j as z,k as P,u as V,l as L,n as C,q as M}from"./vendor.f89ad69f.js";function O(e){return Object.entries(e).map((([e,t])=>o(l({},t),{id:e.replace(/\W/g,"_")})))}var U={title:"Abstandsregeln für Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erhöht wird. Das führte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply(){},probability:()=>Math.random()},E={title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bewährt. Wir lassen sie so, wie sie sind.",effects:()=>[],priority:e=>Math.random()};const B=new Intl.DateTimeFormat("de-DE");class G{constructor(e){this.url=new URL(e.url),this.title=e.title,this.publisher=e.publisher,this.authors=e.authors,this.date=e.date?new Date(e.date):void 0,this.comment=e.comment,this.internalComment=e.internalComment,this.localCopy=e.localCopy,this.referringUrl=e.referringUrl?new URL(e.referringUrl):void 0,this.archiveUrl=e.archiveUrl?new URL(e.archiveUrl):void 0,this.archiveNotPossible=e.archiveNotPossible}dateString(){const e=this.date;return e?" ("+B.format(e)+")":""}toString(){return[this.authors?this.authors+this.dateString():void 0,this.title?'"'+this.title+'"':void 0,this.url,this.publisher].filter((e=>e)).join(", ")}}function I(e){const t=e.publisher||e.authors;return`[[${null!=t?t+": ":""}${e.title||e.url.toString()}](${e.url.toString()})]`}const _=new G({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=22",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat"}),x=new G({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),K=new G({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineralölsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),N=new G({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile für wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),F=new G({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahreschätzung der deutschen Treibhausgas-Emissionen für das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),H=new G({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen für das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),j=new G({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enthält CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] für mehrere Verkehrsmittel"}),$=new G({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),J=new G({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Straßengüterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),R=new G({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enthält Personenkilometer-Jahreswerte für mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),Z=new G({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung ÖPNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),Q=new G({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),Y=new G({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle für 160g CO2 pro kWh Fernwärme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new G({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren für Fernwärme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle für 160g CO2 pro kWh Fernwärme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const q=new G({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),X=new G({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),ee=new G({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle wäre besser."}),te=new G({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bevölkerung nach Nationalität und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),ie=new G({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur für Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),ne=new G({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische Ämter des Bundes und der Länder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new G({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const re=new G({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgemäß - Interview mit Prof. Stefan Gössling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""});class ae{constructor(e){this.unit=e.unit,this.citations=e.citations?e.citations:[],this.details=e.details?e.details:"",this.internals=e.internals?e.internals:""}citationsDesc(){return this.citations.map((e=>e.toString())).join("; ")}}const se={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class le extends ae{constructor(e){super(e),this.writable=!0,this.initialValue=e.initialValue,this.applyBounds=se[e.unit]}}class oe extends ae{constructor(e){super(e),this.writable=!1,this.valueGetter=e.valueGetter,this.shouldInitiallyBe=e.shouldInitiallyBe}}const ce=new c.exports.Converter;function ue(e){return e>0?[...Array(e)].map(((e,t)=>t)):[]}function de(e,t){const i=e-t-1;return[...ue(t),Math.max(t,i),...ue(i).reverse()]}function he(e,...t){let i=e.map(((e,i)=>e+(t[i]||""))).join("").split("\n");0===i[0].length&&i.shift();const n=i[0].match(/^(\s+)/);return n&&!i.filter((e=>e.trim())).some((e=>!e.startsWith(n[1])))&&(i=i.map((e=>e.replace(n[1],"")))),ce.makeHtml(i.join("\n"))}function me(e){return t=>!e(t)}const pe=new le({unit:"MioTons",initialValue:6700,citations:[_],details:he`

  `,internals:he`

  `}),ge=new le({unit:"MioTons",initialValue:186.793,citations:[F],details:he`

  `,internals:he`

  `}),be=new oe({unit:"MioTons",valueGetter:e=>e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4,shouldInitiallyBe:159.696,citations:[F,J],details:he`

  `,internals:he`
    ${I(F)}: 159.696 as MioTons

    ${I(J)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),ve=new oe({unit:"MioTons",valueGetter:e=>e.co2emissionsStreetVehicles+65*e.publicLocalCapacity/1e6+32*e.publicNationalCapacity/1e6+222*e.airDomesticUsage/1e6+1.641,citations:[j,F],details:he`

  `,internals:he`
    ${I(j)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${I(F)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${I(F)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.
  `}),fe=new oe({unit:"MioTons",valueGetter:e=>0*e.buildingsSourceBio+.247*e.buildingsSourceGas+.318*e.buildingsSourceOil+.16*e.buildingsSourceTele,citations:[F,Q],details:he`

  `,internals:he`
    TODO: #91 Gibt es hier bessere Quellen?

    ${I(Q)}: 247g CO2 pro kWh Erdgas.

    ${I(Q)}: 318g CO2 pro kWh Erdöl.

    ${I(Y)}: 160g CO2 pro kWh Fernwärme.

    ${I(F)}: Gesamtemissionenen addieren sich auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),we={co2budget:pe,co2emissionsIndustry:ge,co2emissionsStreetVehicles:be,co2emissionsMobility:ve,co2emissionsAgriculture:new le({unit:"MioTons",initialValue:67.936,citations:[F],details:he`

  `,internals:he`

  `}),co2emissionsBuildings:fe,co2emissionsOthers:new le({unit:"MioTons",initialValue:9.243,citations:[F],details:he`

  `,internals:he`

  `}),co2emissionsEnergy:new oe({unit:"MioTons",valueGetter:e=>.399*e.electricityGas+.058*e.electricitySolar+.005*e.electricityWind+.02*e.electricityWater+.835*e.electricityHardCoal+1.137*e.electricityBrownCoal+.03*e.electricityBiomass+.005*e.electricityNuclear,citations:[q,F],details:he`

  `,internals:he`
    ${I(q)}:
    - 0.5     kg CO2e / kWh durch Gaskraftwerke, (verwendet: 0.399)
    - 0.058   kg CO2e / kWh durch Photovoltaikanlagen,
    - 0.00464 kg CO2e / kWh durch onshore Windräder, (verwendet: 0.005)
    - 0.00525 kg CO2e / kWh durch offshore Windräder, (verwendet: 0.005)
    - 0.02    kg CO2e / kWh durch Pumpspeicherkraftwerke, (nicht verwendet)
    - 0.005   kg CO2e / kWh durch Wasserkraftwerke, (verwendet: 0.02)
    - 0.9     kg CO2e / kWh durch Kohlekraftwerke, (verwendet: 0.835 für Stein-, bzw. 1.137 für Braunkohle)
    - 0.005   kg CO2e / kWh durch Kernkraftwerke,

    TODO: #78 Diverse Punkte:
    - Diskrepanzen zur Quelle klären.
    - Diskrepanz zu ${I(X)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${I(F)}: 258.043 as MioTons in 2019.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),co2emissions:new oe({unit:"MioTons",valueGetter:e=>e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers,details:he`

  `,internals:he`Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.`,citations:[H]}),electricityDemand:new le({unit:"TWh",initialValue:480.54,citations:[x],details:he`

  `,internals:he`

  `}),electricitySolar:new le({unit:"TWh",initialValue:51.42,citations:[x],details:he`

  `,internals:he`

  `}),electricityWind:new le({unit:"TWh",initialValue:131.85,citations:[x],details:he`

  `,internals:he`

  `}),electricityWindOnshoreMaxNew:new le({unit:"TWh",initialValue:6,citations:[x],details:he`

  `,internals:he`

  `}),electricityWater:new le({unit:"TWh",initialValue:14.99,citations:[x],details:he`

  `,internals:he`

  `}),electricityBiomass:new le({unit:"TWh",initialValue:43.19,citations:[x],details:he`

  `,internals:he`

  `}),electricityNuclear:new le({unit:"TWh",initialValue:60.91,citations:[x],details:he`

  `,internals:he`

  `}),electricityHardCoal:new le({unit:"TWh",initialValue:35.46,citations:[x],details:he`

  `,internals:he`

  `}),electricityBrownCoal:new le({unit:"TWh",initialValue:82.13,citations:[x],details:he`

  `,internals:he`

  `}),electricityCoal:new oe({unit:"TWh",valueGetter:e=>e.electricityHardCoal+e.electricityBrownCoal,details:he`

  `,internals:he`

  `}),electricityGas:new oe({unit:"TWh",valueGetter:e=>e.electricityDemand-e.electricitySolar-e.electricityWind-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear,details:he`

  `,internals:he`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),carEmissionFactor:new le({unit:"GramPerPsgrKm",initialValue:160,citations:[j],details:he`

  `,internals:he`
    ${I(j)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),carUsage:new le({unit:"MioPsgrKm",initialValue:917e3,citations:[R],details:he`

  `,internals:he`

  `}),carRenewablePercentage:new le({unit:"Percent",initialValue:.5,citations:[ee],details:he`

  `,internals:he`
    Die verschiedenen Zahlen in ${I(ee)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),publicLocalUsage:new le({unit:"MioPsgrKm",initialValue:112600,citations:[R],details:he`

  `,internals:he`

  `}),publicLocalCapacity:new le({unit:"MioPsgrKm",initialValue:112600,citations:[R],details:he`

  `,internals:he`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),publicNationalUsage:new le({unit:"MioPsgrKm",initialValue:67300,citations:[R],details:he`

  `,internals:he`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),publicNationalCapacity:new le({unit:"MioPsgrKm",initialValue:67300,citations:[R],details:he`

  `,internals:he`
Siehe \`publicLocalCapacity\`.
  `}),airDomesticUsage:new le({unit:"MioPsgrKm",initialValue:10100,citations:[R],details:he`

  `,internals:he`

  `}),airIntlUsage:new le({unit:"MioPsgrKm",initialValue:61700,citations:[R],details:he`

  `,internals:he`

  `}),passengerTransportUsage:new oe({unit:"MioPsgrKm",valueGetter:e=>e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage,shouldInitiallyBe:1168700,citations:[R],details:he`

  `,internals:he`

  `}),buildingsIndustryDemand:new le({unit:"TWh",initialValue:226,citations:[],details:he`

  `,internals:he`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),buildingsPrivateDemand:new le({unit:"TWh",initialValue:544,citations:[],details:he`

  `,internals:he`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),buildingsDemand:new oe({unit:"TWh",valueGetter:e=>e.buildingsPrivateDemand+e.buildingsIndustryDemand,details:he`

  `,internals:he`

  `}),buildingsSourceBio:new le({unit:"TWh",initialValue:130,citations:[],details:he`

  `,internals:he`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),buildingsSourceOil:new le({unit:"TWh",initialValue:219,citations:[],details:he`

  `,internals:he`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),buildingsSourceTele:new le({unit:"TWh",initialValue:58,citations:[],details:he`

  `,internals:he`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),buildingsSourceGas:new oe({unit:"TWh",valueGetter:e=>e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele),details:he`

  `,internals:he`
TODO: #78 Anfangswert mit Quelle.
  `}),popularity:new le({unit:"Percent",initialValue:50,citations:[],details:he`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:he`

  `}),numberOfCitizens:new le({unit:"TsdPeople",initialValue:83155.031,citations:[te],details:he`

  `,internals:he`
Anfangswert ist der Stand 31.12.2020.
  `}),unemployment:new le({unit:"TsdPeople",initialValue:2695,citations:[ie],details:he`

  `,internals:he`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),gdp:new le({unit:"MrdEuro",initialValue:3332,citations:[ne],details:he`

  `,internals:he`
Anfangswert ist das BIP 2020.
  `}),stateDebt:new le({unit:"MrdEuro",initialValue:1899,citations:[],details:he`

  `,internals:he`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `})},ye=Object.entries(we).filter((e=>e[1]instanceof le)).map((e=>e)).reduce(((e,t)=>(e[t[0]]=t[1],e)),{}),ke=Object.entries(we).filter((e=>e[1]instanceof oe)).map((e=>e)).reduce(((e,t)=>(e[t[0]]=t[1],e)),{});class Se extends le{constructor(e,t){super(e),this.name=t}}const Ae=Object.entries(ye).map((e=>new Se(e[1],e[0])));class De extends oe{constructor(e,t){super(e),this.name=t}}Object.entries(ke).map((e=>new De(e[1],e[0])));const We=Object.entries(we).map((e=>e[1]instanceof le?new Se(e[1],e[0]):new De(e[1],e[0]))),Te=Ae.reduce(((e,t)=>o(l({},e),{[t.name]:t.initialValue})),{});function ze(e){const t=l({},e);return Object.entries(ke).forEach((e=>Object.defineProperty(t,e[0],{get:()=>e[1].valueGetter(t)}))),t}function Pe(e){return{name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(e){return this.percent=e,this},byValue(e){return this.value=e,this},setValue(e){return this.absolute=e,this},if(e){return this.condition=e,this},getOldNew(e){const t=this.name,i=e[t];if(!this.condition)return{oldVal:i,newVal:i};const n=we[t],r=null!=this.absolute?this.absolute:i+(this.value||i*this.percent/100);return{oldVal:i,newVal:n.applyBounds(r)}},getChange(e){if(!this.condition)return 0;const{oldVal:t,newVal:i}=this.getOldNew(e);return i-t},getNewVal(e){return this.condition?this.getOldNew(e).newVal:e[this.name]}}}function Ve(e,t){return t.filter((e=>e.condition)).forEach((t=>{e[t.name]=t.getNewVal(e)})),e}var Le={title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,i){const n=i-t,r=n<18?4.3/18:0,a=(10-n)/55,s=Math.max(50*a,0);return[Pe("electricityHardCoal").setValue(0),Pe("electricityBrownCoal").setValue(0),Pe("stateDebt").byValue(2.5-r),Pe("unemployment").byValue(s)]},priority:e=>e.values.electricityCoal/e.values.electricityDemand<=.1?0:tt(1e4,0,e.values.unemployment),citations:[],details:he`

  `,internals:he`
    # Happy Path 5

    Muss nicht als erstes gewählt werden, weil es sich sofort auswirkt. Andere vorbereitende Maßnahmen sind ggf wichtiger.

    # Folgen

    - [x] Ab Inkrafttreten geht jährliche Braun- und Steinkohle Stromproduktion auf 0 TWh.
    - [ ] Ab dem Zeitpunkt, zu dem das Gesetz in Kraft tritt, werden pro Jahr 200 Mio t CO2 weniger ausgestoßen. (Das sollte sich indirekt ergeben.)
    - [x] Der fehlende Strom wird im Zweifel mit Gas erzeugt.
      - Wenn keine Alternative dann? (Gas oder doch Ausland?)
      - Abhängig vom Ausbau der erneuerbaren Energien wird durch Gas ersetzt oder durch mehr Strom aus dem Ausland kompensiert.
    - [x] Aufgrund der erteilten Lizenzen muss den Kraftwerksbetreibern eine Entschädigung von 4.3 Mrd € über 18 Jahre verteilt gezahlt werden.
    - [x] Kohlesubvention vn 2.5 Mrd € wird abgeschafft. (TODO #78: Quellen?)
    - [x] Über die nächsten 10 Jahre werden 50000 Arbeitsplätze abgebaut.
      - 20000 Arbeitsplätze in der Kohleindustrie
      - Die Hälfte von 60.000 indirekt betroffenen Arbeitsplätzen (TODO #78: (Quellen?)
    - [x] Beliebtheit unverändert
      - Aufteilen in Gruppen? Kaum Mehrkosten für Endverbraucher, Berücksichtigung der öffentlichen Diskussion, Freude bei Klimaaktivisten
    - [x] Versteckte Faktoren: Arbeitsplätze, Verärgerung der alten Industrie

    # Vorbedingungen

    - Kohle liefert mehr als 10% des Stroms.
    - Arbeitslosigkeit < 10 000 000.

    # Priorität

    - Arbeitslosigkeit 10 000 000 => 0%. (Aktuell 2 695 999 => 73%)
    - Arbeitslosigkeit 0 => 100%
    - linear dazwischen
  `},Ce={title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effects:e=>[Pe("stateDebt").byValue(-37),Pe("electricityHardCoal").byPercent(-10),Pe("electricityBrownCoal").byPercent(-5),Pe("electricityWind").byValue(5),Pe("electricitySolar").byValue(3),Pe("electricityWater").byValue(.5)],priority:e=>tt(2050,2021,e.currentYear)};const Me=ze(Te).electricityGas;var Oe={title:"Kernenergienutzung verlängern",description:"Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effects:e=>[Pe("electricityNuclear").setValue(104.3),Pe("stateDebt").byValue(-2.5),Pe("popularity").byValue(-4)],priority:e=>tt(Me,1.1*Me,e.values.electricityGas)},Ue={title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,i){const n={2021:60.45,2022:30.21}[i]||0;return[Pe("electricityNuclear").setValue(n)]},priority:e=>0},Ee={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit vergünstigten Krediten gefördert.",effects(e,t,i){const n=i-t>2;return[Pe("stateDebt").byValue(.5),Pe("buildingsSourceBio").byPercent(-1).if(n),Pe("buildingsSourceOil").byPercent(-1).if(n),Pe("buildingsSourceTele").byPercent(-1).if(n),Pe("buildingsPrivateDemand").byPercent(-1).if(n)]},priority:e=>tt(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100)},Be={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gefördert.",effects(e,t,i){const n=i-t>2;return[Pe("stateDebt").byValue(1),Pe("buildingsSourceBio").byPercent(-2).if(n),Pe("buildingsSourceOil").byPercent(-2).if(n),Pe("buildingsSourceTele").byPercent(-2).if(n),Pe("buildingsPrivateDemand").byPercent(-2).if(n),Pe("popularity").byValue(5).if(n)]},priority:e=>tt(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100)},Ge={title:"Dämmung von Wohngebäuden sehr stark fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungsplätze im Handwerk geschaffen durch einen Zuschuss von 500€ pro Monat, damit der zu erwartende Bauboom bewältigt werden kann.",effects(e,t,i){const n=i-t,r=n>=2;return[Pe("stateDebt").byValue(3),Pe("buildingsSourceBio").byPercent(-4).if(r),Pe("buildingsSourceOil").byPercent(-4).if(r),Pe("buildingsSourceTele").byPercent(-4).if(r),Pe("buildingsPrivateDemand").byPercent(-4).if(r),Pe("popularity").byValue(10).if(1===n),Pe("popularity").byValue(5).if(r)]},priority:e=>tt(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100),citations:[],details:he`

  `,internals:he`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `},Ie={title:"Dämmung von Wohngebäuden abschaffen",description:"Wir geben den Bürgern die Freiheit zurück, selbst zu entscheiden, ob sie ihr Haus dämmen wollen und lassen die Förderung auslaufen",effects:()=>[Pe("stateDebt").byValue(-.5),Pe("buildingsSourceBio").byPercent(-.5),Pe("buildingsSourceOil").byPercent(-.5),Pe("buildingsSourceTele").byPercent(-.5),Pe("buildingsPrivateDemand").byPercent(-.5)],priority(e){const t=function(e,t){const i=e.sort(((e,t)=>t.effectiveSince-e.effectiveSince)).find((e=>t.test(e.lawId)));return null==i?void 0:i.lawId}(e.acceptedLaws,/^DaemmungAltbau/);if(!t||"DaemmungAltbauAbschaffen"===t)return 0;return tt(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100)}},_e={title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",effects(e,t,i){const n=e.publicLocalCapacity/e.publicLocalUsage*100,r=Pe("carUsage").byValue(-.01*e.publicLocalUsage).if(n>=105),a=r.getChange(e),s=i-t;return[Pe("stateDebt").byValue(3),Pe("publicLocalCapacity").byPercent(1),Pe("publicLocalUsage").byValue(-a),r,Pe("popularity").byValue(2).if(s>=5)]},priority:e=>tt(20,35,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[Z],details:he`

  `,internals:he`
    # Happy Path 18

    # Folgen

    - Der Staatshaushalt wird jährlich mit 3 Mrd € mehr belastet. (${I(Z)})
    - Nahverkehr Kapazität steigt jährlich um 1%
    - (Umstieg von individual Verkehr auf ÖPNV wird vereinfacht)
        - (Geringere Verkehrsbelastung in städtischen Gebieten / auf Kurzstrecken)
        - Nahverkehr Nutzung steigt jährlich um 1%, sobald die relative Kapazität 105% erreicht hat.
        - PKW Nutzung sinkt um denselben Wert.
    - Langfristig: 5 Jahre nach Inkrafttreten:
        - (CO2 Emissionen des Mobilitätssektors sinken um 2 Mio t pro Jahr.) (Indirekt)
        - Beliebtheit steigt um 2% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität:

    - 0 bei 20% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 35% Anteil
    - linear interpoliert
  `},xe={title:"Förderung für Tierhaltung abschaffen",description:"Subventionen für Tierhaltung werden ersatzlos gestrichen",effects:(e,t,i)=>[Pe("stateDebt").byValue(-10),Pe("co2emissionsAgriculture").byValue(-10).if(t===i),Pe("popularity").byValue(-20).if(t===i)],priority:e=>tt(1e4,0,e.values.unemployment)},Ke={title:"Nahverkehr Kostenlos",description:"Die Kosten für den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr benötigt werden.",effects(e,t,i){const n=t===i?10:1,r=Pe("carUsage").byValue(-n/100*e.publicLocalUsage),a=r.getChange(e);return[Pe("stateDebt").byValue(10),Pe("publicLocalUsage").byValue(-a),r,Pe("popularity").byValue(10).if(t===i),Pe("unemployment").byValue(20).if(t===i)]},priority:e=>tt(0,10,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[$],details:he`

  `,internals:he`
    # Happy Path 19

    # Folgen

    - Der Staatshaushalt wird jährlich mit 10 Mrd € stärker belastet.
        - 13.3 Mrd € Ticketeinnahmen pro Jahr (${I($)})
        - Annahme: Einsparung durch Ticketverkauf und Personal.
    - (CO2 Emissionen für Mobilität singenk jährlich um 2 MioTonnen) (indirekt)
    - Umstieg von individual Verkehr auf ÖPNV lohnt sich mehr
        - Geringere Verkehrsbelastung in gut angeschlossenen Gebieten.
        - CO2 Emissionen werden indirekt verbessert.
        - Nahverkehr Nutzung steigt im ersten Jahr um 10%, danach um 1% jährlich.
        - Auto Nutzung sinkt entsprechend.
    - Arbeitslosigkeit steigt im ersten Jahr um 20 000 Menschen.
    - Popularität steigt im ersten Jah um 10%
        - (Sozial benachteiligte Personen profitieren)

    # Vorbedingungen:

    - Priorität über 0%.

    # Priorität

    - 0 bei 0% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 10% Anteil
    - linear interpoliert
  `},Ne={title:"Autos in Innenstädten verbieten",description:"Die Innenstädte der großen Städte werden zu Autofreien Zonen erklärt und begrünt, sowie Fahrrad und Fußgängerzonen eingerichtet.",effects(e,t,i){var n=-2;e.publicLocalCapacity>1.2*e.publicLocalUsage&&(n=-1,t+2<i&&(n=2));const r=Pe("carUsage").byValue(-.1*e.publicLocalUsage).if(t===i),a=r.getChange(e);return[Pe("popularity").byValue(n),r,Pe("publicLocalUsage").byValue(-a)]},priority:e=>tt(90,120,e.values.publicLocalCapacity/e.values.publicLocalUsage*100)},Fe={title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des öffentlichen Fernverkehrs wird bundesweit stärker Bezuschusst und Vorangetrieben",effects(e){const t=e.publicNationalCapacity/e.publicNationalUsage*100,i=Pe("carUsage").byValue(.015*e.publicNationalUsage).if(t>=105),n=i.getChange(e);return[Pe("stateDebt").byValue(6),Pe("publicNationalCapacity").byPercent(1),i,Pe("publicNationalUsage").byValue(.667*-n),Pe("publicLocalUsage").byValue(.333*-n),Pe("popularity").byValue(2)]},priority:e=>tt(150,80,e.values.publicNationalCapacity/e.values.publicNationalUsage*100)},He={title:"Wasserstofftechnologie fördern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie wird stark gefördert.",effects:(e,t,i)=>[Pe("stateDebt").byValue(3),Pe("carRenewablePercentage").byValue(1).if(t+5<=i)],priority(e){const t=e.values;return tt(40,90,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)}},je={title:"Abschaffung der Mineralölsteuer",description:"Die Steuer auf sämtliche erdölbasierten Treibstoffe wird abgeschafft.",effects(e,t,i){const n=Pe("publicLocalUsage").byPercent(-20).if(t===i),r=Pe("publicNationalUsage").byPercent(-20).if(t===i),a=n.getChange(e),s=r.getChange(e);return[Pe("stateDebt").byValue(41),Pe("popularity").byValue(5).if(t===i),Pe("popularity").byValue(-3).if(t<i),Pe("carUsage").byValue(-a-s).if(t===i),n,r]},priority(e){const t=e.values;return tt(60,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[K],details:"",internals:he`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${I(K)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `},$e={title:"Ausbau von Straßen",description:"Autobahnen und Straßen werden intensiver ausgebaut.",effects(e){const t=Pe("publicLocalUsage").byPercent(-1),i=Pe("publicNationalUsage").byPercent(-1),n=t.getChange(e),r=i.getChange(e);return[Pe("stateDebt").byValue(5),Pe("popularity").byValue(.5),Pe("carUsage").byValue(-n-r),t,i]},priority(e){const t=e.values;return tt(60,100,t.carUsage/t.passengerTransportUsage*100)}},Je={title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effects:(e,t,i)=>[Pe("stateDebt").byValue(-7.35),Pe("popularity").byValue(-1).if(t===i)],priority(e){const t=e.values;return tt(10,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)}},Re={title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen für Dienstwagen werden abgeschafft.",effects(e,t,i){const n=Pe("carUsage").byPercent(-.05),r=n.getChange(e);return[Pe("stateDebt").byValue(-18),Pe("popularity").byValue(-1).if(t===i),n,Pe("publicLocalUsage").byValue(-r)]},priority(e){const t=e.values;return tt(50,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[N,re],details:he`

  `,internals:he`
    # Happy Path 20

    Zunächst sollte Nah- und Fernverkehr attraktiver gemacht werden.
    TODO: Folgen sollten davon abhängen, ob es attraktive Alternativen gibt.

    # Folgen

    - Steuermehreinnahmen: 18 mrd€ / Jahr (${I(N)})
    - -0.05% Fahleistung pro Jahr (Anreiz für Auto fällt weg Gebrauchte Wagen werden teuerer).
        - ${I(re)} sagt es gibt keine echte Schätzung dafür.
    - Entsprechend mehr Nahverkehrnutzung
    - Zufriedenheit sinkt einmalig um 1%

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 50%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `},Ze={title:"Abstandsregeln für Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln für Windkraftanlagen sowie Bauerlaubniss in Wäldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects:(e,t,i)=>[Pe("popularity").byValue(-3).if(t===i),Pe("electricityWindOnshoreMaxNew").setValue(30)],priority(e){const t=e.values;return tt(70,30,t.electricityWind/t.electricityDemand*100)},citations:[],details:he`

  `,internals:he`
    # Happy Path 2

    # Priorität

    - 0% bei einem Anteil von Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 30%.
    - linear interpoliert
  `},Qe={title:"Ausschreibungsverfahren für Windkraft vervierfachen",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Math.min(27.6,e.electricityWindOnshoreMaxNew);return[Pe("popularity").byValue(-2).if(t===i),Pe("unemployment").byValue(-100).if(t===i),Pe("electricityWind").byValue(n+4.8)]},priority(e){if(!it(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln"))return 0;return tt(100,40,(e.values.electricityWind+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100)},citations:[],details:he`
    Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung
    von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen
    Subventionierung umsetzen kann bekommt den Zuschlag.
  `,internals:he`
    # Happy Path 3

    # Folgen

    - [x] Schulden +-0
    - [x] Popularität: -2%
    - [x] Arbeitsplätze: 500.000 also Arbeitslosigkeit -100 Tausend Menschen im ersten Jahr
    - [ ] Abhängigkeit, ob das Budget ausgeschöpft wird, ist schwierig.)
    - [x] CO2 Emissionen: Zubau Windkraftonshore +27,6 TWh (es sei den gedeckelt durch Abstandsregeln), Windkraftoffshore + 4,8 TWh.

    # Vorbedingungen

    - Nur wenn "verdoppeln" schon beschlossen wurde.
    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil der erneuerbaren Stromquellen von 100%. (Zu Beginn: 50%)
    - 100% bei einem Anteil der erneuerbaren Stromquellen von 40%.
    - linear interpoliert
  `};const Ye=O({AllesBleibtBeimAlten:E,InitialAtomausstieg:Ue,KohleverstromungEinstellen:Le,EnergiemixRegeltDerMarkt:Ce,KernenergienutzungVerlaengern:Oe,AbstandsregelnFuerWindkraftVerschaerfen:{title:"Abstandsregeln für Windkraft verschärfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngebäuden im Innenbereich muss das Zehnfache der Gesamthöhe der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects:(e,t,i)=>[Pe("popularity").byValue(5).if(t===i),Pe("electricityWindOnshoreMaxNew").setValue(.42)],priority(e){const t=e.values;return tt(0,100,t.electricityWind/t.electricityDemand*100)}},AbstandsregelnFuerWindkraftWieBisher:{title:"Abstandsregeln für Windkraft wie bisher",description:"Das Land / Die Kommune bestimmem über Abstände zwischen den Windkraftanlagen und Wohngebäuden.",labels:["initial","hidden","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects:e=>[Pe("electricityWindOnshoreMaxNew").setValue(6)],priority(e){const t=e.values;return tt(30,100,t.electricityWind/t.electricityDemand*100)}},AbstandsregelnFuerWindkraftLockern:Ze,AbstandsregelnFuerWindkraftAbschaffen:{title:"Abstandsregeln für Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects:(e,t,i)=>[Pe("popularity").byValue(-40).if(t===i),Pe("electricityWindOnshoreMaxNew").setValue(1e3)],priority(e){const t=e.values;return tt(80,40,t.electricityWind/t.electricityDemand*100)}},AusschreibungsverfahrenfuerWindkraftWieBisher:{title:"Ausschreibungsverfahren für Windkraft wie bisher",description:"Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e){const t=Math.min(6.9,e.electricityWindOnshoreMaxNew);return[Pe("electricityWind").byValue(t+1.2)]},priority:e=>tt(100,30,(e.values.electricityWind+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100)},AusschreibungsverfahrenfuerWindkraftVerdoppeln:{title:"Ausschreibungsverfahren für Windkraft verdoppeln",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Math.min(13.8,e.electricityWindOnshoreMaxNew);return[Pe("popularity").byValue(-1).if(t===i),Pe("unemployment").byValue(-20).if(t===i),Pe("electricityWind").byValue(n+2.4)]},priority(e){if(!it(e,"AusschreibungsverfahrenfuerWindkraftWieBisher"))return 0;return tt(100,50,(e.values.electricityWind+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100)}},AusschreibungsverfahrenfuerWindkraftVervierfachen:Qe,AusschreibungsverfahrenfuerWindkraftVerachtfachen:{title:"Ausschreibungsverfahren für Windkraft verachtfachen",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Math.min(55.2,e.electricityWindOnshoreMaxNew);return[Pe("popularity").byValue(-20).if(t===i),Pe("unemployment").byValue(-100).if(t===i),Pe("electricityWind").byValue(n+9.6)]},priority(e){if(!it(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen"))return 0;return tt(100,0,(e.values.electricityWind+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100)}},DaemmungAltbau1Percent:Ee,DaemmungAltbau2Percent:Be,DaemmungAltbau4Percent:Ge,DaemmungAltbauAbschaffen:Ie,NahverkehrKostenlos:Ke,AutosInInnenstaedtenVerbieten:Ne,WasserstofftechnologieFoerdern:He,NahverkehrAusbauen:_e,FernverkehrVerbindungenAusbauen:Fe,AusbauVonStrassen:$e,AbschaffungDerMineraloelsteuer:je,DieselPrivilegAbgeschaffen:Je,DienstwagenPrivilegAbgeschaffen:Re,Tempolimit130AufAutobahnen:{title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=Pe("carEmissionFactor").byValue(157.9),i=t.getChange(e);return[Pe("popularity").byValue(2).if(i<0),t]},priority(e){if(!it(e,"Tempolimit100AufAutobahnen"))return 0;const t=e.values;return tt(10,60,t.carUsage/t.passengerTransportUsage*100)}},Tempolimit120AufAutobahnen:{title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=Pe("carEmissionFactor").byValue(157.1),i=t.getChange(e);return[Pe("popularity").byValue(2).if(i<0),t]},priority(e){if(!it(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values;return tt(10,60,t.carUsage/t.passengerTransportUsage*100)}},Tempolimit100AufAutobahnen:{title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=Pe("carEmissionFactor").byValue(154.1),i=t.getChange(e);return[Pe("popularity").byValue(-1).if(i<0),t]},priority(e){if(!it(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values;return tt(10,60,t.carUsage/t.passengerTransportUsage*100)}},TempolimitAufAutobahnenAussitzen:{title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das könnte zwar Strafen oder gar Zwangsmaßnahmen bewirken, aber das Risiko der gefährdeten Wiederwahl ist zu groß.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects:()=>[Pe("stateDebt").byValue(-10),Pe("popularity").byValue(-2)],priority(e){const t=e.values;return tt(10,60,t.carUsage/t.passengerTransportUsage*100)}},FoerderungFuerTierhaltungAbschaffen:xe});function qe(e){const t=Ye.find((t=>t.id===e));if(t)return t;throw Error(`Law #${e} not found`)}function Xe(e){const t=qe(e.lawId);if(t)return o(l({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function et(e){return e.map((e=>{const t=Ye.find((t=>t.id===e));return t||console.error(`Inconsistency: Proposed law #${e} not found`),t})).filter((e=>e))}function tt(e,t,i){const n=i-e,r=t-e;if(0===r)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return n/r*100}function it(e,t){if(!Ye.map((e=>e.id)).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some((i=>i.lawId===t&&i.effectiveSince<=e.currentYear))}function nt(e){return e.find((e=>e.title.match(/subvention/i)&&e.title.match(/abbau/i)))}const rt=O({AbstandsregelnWindkraft:U,Altbausanierung:{title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es für unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply(){},probability:e=>tt(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100)/100},Bestechung:{title:"Anruf von befreundetem Unternehmer",description:"Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine\n    Ferienvilla auf Sardinien einladen. Er verlässt sich natürlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen\n    nicht zustimmen wirst.\n  ",apply(e){const t=e.state.game;if(!t)return;const i=nt(et(t.proposedLaws));i&&e.dispatch("rejectLaw",{lawId:i.id})},probability:e=>nt(et(e.proposedLaws))?Math.random():0},EnergieStrategie:{title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute über die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply(){},probability:()=>Math.random()},FinanzKollaps:{title:"Zusammenbruch des Finanzsystems",description:"Deine Staatsfinanzen sind desaströs. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden\n    jemals wieder wirst zurückahlen können. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen\n    könntest. Das Spiel ist damit leider beendet.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.values.stateDebt>2*Te.stateDebt?1:0},"Hitzehölle":{title:"Hitzehölle",description:"Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen Küstenregionen\n  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr wächst.\n  Um die verbleibdenden Teile sind erbitterte Kämpfe ausgebrochen.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.values.co2budget<=0?1:0},NewYear:{title:"Happy New Year!",description:"Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen Tätigkeit aufgestellt\n    und kommt zu dem nicht weiter überraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -\n    ebenfalls nicht überraschend - sieht die Sache anders und verurteilt die Regierungserklärung als haltlos.\n  ",apply(e){e.dispatch("advanceYear")},probability(e){const t=null==e?void 0:e.acceptedLaws.map(Xe).filter((t=>{var i;return!(null==(i=t.labels)?void 0:i.includes("initial"))&&t.effectiveSince==e.currentYear+1})),i=t&&t.length||0;if(i<3)return 0;const n=Math.round(33.3*(i-2))/100;return Math.min(1,n)}},SocialMedia:{title:"Social Media Alarm!",description:"Deine Wahlkampfberaterin ruft dich völlig aufgelöst an. Ob denn an den Geschichten was dran sein, die da im\n    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.\n    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.\n  ",apply(e){e.dispatch("applyEffects",[Pe("popularity").byPercent(-20)])},probability:()=>Math.random()},TempolimitAufAutobahnen:{title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland müssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply(){},probability:()=>Math.random()},TimesUp:{title:"Du hast durchgehalten",description:"Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,\n    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Maßnahmen waren zu finanzieren\n    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!\n  ",apply(e){e.dispatch("gameOver")},probability:e=>2050===e.currentYear?1:0},WahlVerloren:{title:"Wahl verloren",description:"Deine Beliebtheit in der Bevölkerung ist katastrophal, lieber würde man Mao Zedong wählen als dich.\n    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du gehörst) und ist damit unter\n    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon länger kein vernünftiger Mensch mehr geglaubt.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.values.popularity<=0?1:0},WindkraftAusschreibung:{title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Kindkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply(){},probability:()=>Math.random(),citations:[],details:he`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:he`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `}}),at={currentYear:2021,values:Te,acceptedLaws:[],proposedLaws:[],rejectedLaws:[]};function st(e=at,t=u()){return{id:t,currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:ze(e.values),events:[],over:!1}}function lt(e,t=Ye,i=rt,n=Math.random){const r=function(e,t){for(const i of e)if((t-=i.prob)<0)return i;return}(function(e,t){const i=t.map((t=>o(l({},t),{prob:t.probability(e)}))).filter((e=>e.prob&&e.prob>0)),n=i.map((e=>e.prob)).reduce(((e,t)=>e+t),0)+.3;return i.map((e=>o(l({},e),{prob:e.prob/n})))}(e,i),n());r&&e.events.unshift(r);const a=function(e,t,i){const n=t=>{var i;return null==(i=e.acceptedLaws)?void 0:i.some((e=>e.lawId===t.id))},r=t=>{var i;return null==(i=e.rejectedLaws)?void 0:i.includes(t.id)},a=e=>{var t;return(null==(t=e.labels)?void 0:t.includes("hidden"))||!1},s=t=>({law:t,priority:t.priority(e)}),l=e=>({law:e.law,priority:e.priority+(i.includes(e.law.id)?100:0)});return t.filter(me(n)).filter(me(r)).filter(me(a)).map(s).filter((e=>e.priority>0)).map(l).sort(((e,t)=>t.priority-e.priority)).map((e=>e.law.id)).slice(0,6)}(e,t,(null==r?void 0:r.laws)?r.laws:[]);return e.proposedLaws=function(e,t){const i=[...e],n=t.filter((e=>i.includes(e))),r=t.filter((e=>!n.includes(e)));var a=0;for(;a<i.length;)n.includes(i[a])?a++:0!==r.length?(i[a]=r.shift(),a++):i.splice(a,1);return i.push(...r.slice(0,6-i.length)),i}(e.proposedLaws,a),r}function ot(e){return Math.max(0,Math.min(100,e))}var ct=d({props:{law:{type:Object,required:!0},selectable:{type:Boolean,required:!0},numCards:{type:Number,required:!0}},setup:()=>({store:Ni()}),data:()=>({accepted:!1}),computed:o(l({},h(["proposedLaws"])),{zIndex(){return this.law.zIndex},transform(){return`rotate(${2*(this.law.pos-this.numCards/2)}deg) translate(${20*Math.abs(this.numCards/2-this.law.pos)}px, -50%)`}}),methods:{select(){this.$emit("selected")},accept(){this.accepted=!0},sendAccept(e){e.animationName.match(/^twistOut-/)&&this.$emit("accepted",this.law.id)}}});const ut=w("data-v-c57832f8");m("data-v-c57832f8");const dt={key:0,type:"radio"},ht={key:0,class:"button-bar"};p();const mt=ut(((e,t,i,n,r,a)=>(y(),g("div",{class:["Law",{accepted:e.accepted}],style:{zIndex:e.zIndex},onClick:t[2]||(t[2]=(...t)=>e.select&&e.select(...t)),onAnimationend:t[3]||(t[3]=(...t)=>e.sendAccept&&e.sendAccept(...t))},[b("label",null,[e.selectable?(y(),g("input",dt)):v("",!0),b("div",null,[b("h3",null,f(e.law.title),1),b("div",null,f(e.law.description),1),e.selectable?(y(),g("div",ht,[b("button",{class:"accept",onClick:t[1]||(t[1]=(...t)=>e.accept&&e.accept(...t))},"✓")])):v("",!0)])])],38))));ct.render=mt,ct.__scopeId="data-v-c57832f8";var pt=d({components:{LawCard:ct},setup:()=>({store:Ni()}),data:()=>({zIndexes:[],poppedUp:!1}),computed:o(l({},h(["proposedLaws"])),{lawsToShow(){return this.zIndexes.length||(this.zIndexes=de(this.proposedLaws.length,0)),this.proposedLaws.map(((e,t)=>o(l({},e),{zIndex:this.zIndexes[t],pos:t})))}}),methods:{accept(e){this.store.dispatch("acceptLaw",{lawId:e}),this.poppedUp=!1},select(e){this.zIndexes=de(this.proposedLaws.length,e)}}});const gt=w("data-v-edd9edfa")(((e,t,i,n,r,a)=>{const s=A("LawCard");return y(),g("div",{class:["ProposedLaws",{poppedUp:e.poppedUp}],onClick:t[1]||(t[1]=t=>e.poppedUp=!0)},[(y(!0),g(k,null,S(e.lawsToShow,((t,i)=>(y(),g(s,{key:i,law:t,selectable:e.poppedUp,numCards:e.lawsToShow.length,onAccepted:()=>e.accept(t.id),onSelected:()=>e.select(i)},null,8,["law","selectable","numCards","onAccepted","onSelected"])))),128))],2)}));pt.render=gt,pt.__scopeId="data-v-edd9edfa";var bt=d({props:{title:String,text:String},methods:{acknowledge(){this.$emit("acknowledge")}}});const vt=w("data-v-2df6be4d");m("data-v-2df6be4d");const ft={key:0};p();const wt=vt(((e,t,i,n,r,a)=>e.text?(y(),g("div",{key:0,onClick:t[1]||(t[1]=(...t)=>e.acknowledge&&e.acknowledge(...t))},[e.title?(y(),g("h2",ft,f(e.title),1)):v("",!0),b("p",null,f(e.text),1)])):v("",!0)));bt.render=wt,bt.__scopeId="data-v-2df6be4d";var yt=d({props:{value:{type:Number,required:!0}},computed:{isShort(){return this.value<20},isLess(){return this.value>=20&&this.value<50},isMore(){return this.value>=50&&this.value<80},isMuch(){return this.value>=80}}});const kt=w("data-v-df0e905e");m("data-v-df0e905e");const St={id:"finances"},At={key:0,src:"/assets/money-short.7ce9dbed.png",id:"short"},Dt={key:1,src:"/assets/money-less.c10d45f8.png",id:"less"},Wt={key:2,src:"/assets/money-more.a1c17d8d.png",id:"more"},Tt={key:3,src:"/assets/money-much.ad651475.png",id:"much"};p();const zt=kt(((e,t,i,n,r,a)=>(y(),g("div",St,[e.isShort?(y(),g("img",At)):v("",!0),e.isLess?(y(),g("img",Dt)):v("",!0),e.isMore?(y(),g("img",Wt)):v("",!0),e.isMuch?(y(),g("img",Tt)):v("",!0)]))));yt.render=zt,yt.__scopeId="data-v-df0e905e";var Pt=d({props:{value:{type:Number,required:!0}},computed:{areHappy(){return this.value>=50},areAngry(){return this.value<50}}});const Vt=w("data-v-a375dc26");m("data-v-a375dc26");const Lt={id:"popularity"},Ct={key:0,src:"/assets/people-happy.1e9e529c.png",id:"happy"},Mt={key:1,src:"/assets/people-angry.495e0425.png",id:"angry"};p();const Ot=Vt(((e,t,i,n,r,a)=>(y(),g("div",Lt,[e.areHappy?(y(),g("img",Ct)):v("",!0),e.areAngry?(y(),g("img",Mt)):v("",!0)]))));Pt.render=Ot,Pt.__scopeId="data-v-a375dc26";var Ut=d({data:()=>({levels:{healthy:"/assets/plant-healthy.1c912fd2.png",sick:"/assets/plant-sick.05726ebf.png",withered:"/assets/plant-withered.2d8ffb21.png"}}),props:{value:{type:Number,required:!0}},computed:{status(){return this.value>66?"healthy":this.value>33?"sick":"withered"},imgSrc(){return this.levels[this.status]}}});const Et=w("data-v-c0f87ac2");m("data-v-c0f87ac2");const Bt={id:"plant"};p();const Gt=Et(((e,t,i,n,r,a)=>(y(),g("div",Bt,[b("img",{src:e.imgSrc,id:e.status},null,8,["src","id"])]))));Ut.render=Gt,Ut.__scopeId="data-v-c0f87ac2";var It=d({props:{year:Number}});const _t=w("data-v-38fe5c52");m("data-v-38fe5c52");const xt={id:"calendar"};p();const Kt=_t(((e,t,i,n,r,a)=>(y(),g("div",xt,f(e.year),1))));It.render=Kt,It.__scopeId="data-v-38fe5c52";var Nt=d({});const Ft=w("data-v-5952ab5a");m("data-v-5952ab5a");const Ht={id:"heater"},jt=b("img",{src:"/assets/heater.5a77e425.png"},null,-1);p();const $t=Ft(((e,t,i,n,r,a)=>(y(),g("div",Ht,[jt]))));Nt.render=$t,Nt.__scopeId="data-v-5952ab5a";var Jt=d({});const Rt=w("data-v-3902beeb");m("data-v-3902beeb");const Zt={id:"table"},Qt=b("img",{src:"/assets/table-top.c87bd2fd.png",id:"table-top"},null,-1),Yt=b("img",{src:"/assets/table-front.78c0f8c6.png",id:"table-front"},null,-1),qt=b("img",{src:"/assets/table-front.78c0f8c6.png",id:"table-back"},null,-1),Xt=b("img",{src:"/assets/table-side.49774a53.png",id:"table-left-side"},null,-1),ei=b("img",{src:"/assets/table-side.49774a53.png",id:"table-right-side"},null,-1);p();const ti=Rt(((e,t,i,n,r,a)=>(y(),g("div",Zt,[Qt,Yt,qt,Xt,ei]))));Jt.render=ti,Jt.__scopeId="data-v-3902beeb";var ii=d({props:{withNews:Boolean}}),ni="/assets/board-side.d7181ded.png",ri="/assets/tvset-legs.78b387df.png";const ai=w("data-v-118e7bdf");m("data-v-118e7bdf");const si={id:"tvset"},li=b("div",{id:"board"},[b("img",{id:"board-front",src:"/assets/board-front.41330f02.png"}),b("img",{id:"board-left",src:ni}),b("img",{id:"board-right",src:ni}),b("div",{id:"board-top"})],-1),oi={id:"tv"},ci=b("img",{id:"tv-front",src:"/assets/tv-front.82df5c0c.png"},null,-1),ui={key:0,id:"news",src:"/assets/news.c4bbc2d0.png"},di=b("div",{id:"legs"},[b("img",{id:"legs-front",src:ri}),b("img",{id:"legs-back",src:ri})],-1);p();const hi=ai(((e,t,i,n,r,a)=>(y(),g("div",si,[li,b("div",oi,[ci,e.withNews?(y(),g("img",ui)):v("",!0)]),di]))));ii.render=hi,ii.__scopeId="data-v-118e7bdf";const mi=[{id:"start",title:"Stell dir vor...",text:he`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du auswählen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die Wähler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine Wähler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];var pi={};const gi=w("data-v-2419943a");m("data-v-2419943a");const bi={class:"dialog"},vi={class:"buttons"};p();const fi=gi(((e,t,i,n,r,a)=>(y(),g("div",bi,[D(e.$slots,"default",{},void 0,!0),b("div",vi,[D(e.$slots,"buttons",{},void 0,!0)])]))));pi.render=fi,pi.__scopeId="data-v-2419943a";var wi=d({setup(){const e=Ni();return e.dispatch("setupTour"),{store:e}},components:{Dialog:pi},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return mi.find((e=>e.id===this.$store.state.tour.step))},title(){var e;return null==(e=this.currentStep)?void 0:e.title},text(){var e;return null==(e=this.currentStep)?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var t;const i=document.querySelector(".highlighted");i&&i.classList.remove("highlighted"),e&&e.highlight&&(null==(t=document.querySelector(`#${e.highlight}`))||t.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}});wi.render=function(e,t,i,n,r,a){const s=A("Dialog");return e.title&&e.text?(y(),g(s,{key:0},{buttons:W((()=>[b("button",{onClick:t[1]||(t[1]=(...t)=>e.stop&&e.stop(...t))},"Tour beenden"),b("button",{onClick:t[2]||(t[2]=(...t)=>e.next&&e.next(...t))},"Weiter")])),default:W((()=>[b("h2",null,f(e.title),1),b("div",{innerHTML:e.text},null,8,["innerHTML"])])),_:1})):v("",!0)};var yi=d({components:{Calendar:It,ClimateIndicator:Ut,Heater:Nt,LawProposals:pt,SpeechBubble:bt,FinanceIndicator:yt,PopularityIndicator:Pt,Table:Jt,Tour:wi,TVSet:ii},data:()=>({store:Ni()}),computed:{eventTitle(){var e;return(null==(e=this.eventToShow())?void 0:e.title)||""},eventText(){var e;return(null==(e=this.eventToShow())?void 0:e.description)||""},currentYear(){var e;return(null==(e=this.store.state.game)?void 0:e.currentYear)||2021},finance(){const e=this.store.state.game;return e?function(e){return ot(100-e.values.stateDebt/Te.stateDebt*50)}(e):0},popularity(){var e;return(null==(e=this.store.state.game)?void 0:e.values.popularity)||100},climate(){const e=this.store.state.game;return e?function(e){return 0===e.values.co2emissions?100:ot(e.values.co2budget*ze(Te).co2emissions/Te.co2budget/e.values.co2emissions*50)}(e):0}},methods:{eventToShow(){var e;const t=null==(e=this.$store.state.game)?void 0:e.events[0];return t&&!t.acknowledged?t:null},acknowledge(){this.$store.dispatch("acknowledgeEvent",this.eventToShow())}}});const ki={class:"game-setup"},Si=b("h1",null,"#ich-kann-klima",-1),Ai=b("div",{id:"walls"},[b("div",{id:"wall-back"}),b("div",{id:"wall-left"}),b("div",{id:"wall-right"})],-1);yi.render=function(e,t,i,n,r,a){const s=A("Calendar"),l=A("Heater"),o=A("PopularityIndicator"),c=A("TVSet"),u=A("ClimateIndicator"),d=A("Table"),h=A("FinanceIndicator"),m=A("LawProposals"),p=A("SpeechBubble"),v=A("Tour");return y(),g("div",ki,[Si,Ai,b(s,{year:e.currentYear},null,8,["year"]),b(l),b(o,{value:e.popularity},null,8,["value"]),b(c,{"with-news":!!e.eventText},null,8,["with-news"]),b(u,{value:e.climate},null,8,["value"]),b(d),b(h,{value:e.finance},null,8,["value"]),b(m),b(p,{title:e.eventTitle,text:e.eventText,onAcknowledge:e.acknowledge},null,8,["title","text","onAcknowledge"]),b(v)])};var Di=d({setup(){const e=Ni();return{store:e,acceptedLaws:T((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({opened:void 0}),computed:{visibleAccepted(){return Ye.filter((e=>{var t,i;return(null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id)))&&!(null==(i=e.labels)?void 0:i.includes("hidden"))}))}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}});const Wi=w("data-v-aace6332")(((e,t,i,n,r,a)=>(y(!0),g(k,null,S(e.visibleAccepted,((t,i)=>(y(),g("div",{key:i,class:["Law",{opened:i===e.opened}],onClick:t=>e.toggleOpen(i)},[b("h3",null,f(t.title),1),b("div",null,f(t.description),1)],10,["onClick"])))),128))));Di.render=Wi,Di.__scopeId="data-v-aace6332";var Ti=d({components:{GameSetup:yi,AcceptedLaws:Di},setup:()=>({store:Ni()}),methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,i){i((t=>t.startGame(e.params.id)))}});const zi=w("data-v-3637ce73")(((e,t,i,n,r,a)=>{const s=A("GameSetup");return y(),g(s)}));Ti.render=zi,Ti.__scopeId="data-v-3637ce73";var Pi=d({components:{Dialog:pi},setup:()=>({store:Ni()}),computed:{co2(){var e,t;const i=null==(e=this.store.state.game)?void 0:e.values.co2budget;return(null==(t=this.store.state.game)?void 0:t.values.co2emissions)>0?i>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. Hätte die AfD nicht besser hinbekommen.":i>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken können. Punktlandung."},debt(){var e;return(null==(e=this.store.state.game)?void 0:e.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilitätskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var e;const t=null==(e=this.store.state.game)?void 0:e.values.popularity;return t<20?"entspricht dem, was man von einem langhährigen Diktator erwarten kann.":t<50?"ist nicht berauschend, wiedergewählt würdest du wohl eher nicht.":t<80?"reicht aus, dass du noch länger am Ruder bleiben könntest. Gratulation!":"ist völlig unglaubwürdig - war das wirklich eine freie Wahl?"}},methods:{loadGame(e){this.store.dispatch("loadGame",{gameId:e})},newGame(){this.$router.push("/games")}},beforeRouteEnter(e,t,i){i((t=>{t.loadGame(e.params.id)}))}});const Vi=b("h2",null,"Das Spiel ist leider zu Ende",-1),Li=b("p",null,"Deine Entscheidungen haben etwas verändert - soviel kann man sagen.",-1),Ci=b("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Mi={class:"button-bar"};Pi.render=function(e,t,i,n,r,a){const s=A("Dialog");return y(),g(s,null,{default:W((()=>[Vi,Li,b("ul",null,[b("li",null,"Die CO2-Emmissionen "+f(e.co2),1),b("li",null,"Die Staatsfinanzen "+f(e.debt),1),b("li",null,"Deine Beliebtheit "+f(e.popularity),1)]),Ci,b("div",Mi,[b("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Neuer Versuch")])])),_:1})};const Oi=[{path:"/",redirect:"/games"},{path:"/games",component:Ti},{path:"/games/:id",component:Ti},{path:"/games/:id/over",component:Pi}],Ui=z({history:P(),routes:Oi});const Ei=function(e,t){let i,n=[];async function r(){if(i&&(clearTimeout(i),i=void 0),n.length){const{method:s,path:l,data:o,retry:c,resolve:u,reject:d}=n[0];try{if((null==t?void 0:t.navigator)&&!(null==t?void 0:t.navigator.onLine))throw Error("Browser is offline");const i=await e(s,l,o);n.shift(),u(i)}catch(a){c?n[0].retry=Math.max(-1,c-1):(n.shift(),d(a))}n.length&&(i=setTimeout(r,(null==t?void 0:t.timeout)||1e4))}}return{add:(e,t,a,s=-1)=>new Promise(((l,o)=>{n.push({method:e,path:t,data:a,retry:s,resolve:l,reject:o}),i||r()})),remove(e,t){n=n.filter((i=>i.method.toLowerCase()!==e.toLowerCase()||i.path!==t))},callsPending:()=>n.length>0}}(function(e,t,i=console){return async function(n,r,a){var s;try{const i={method:n};["post","put","patch"].includes(n)&&(i.body=JSON.stringify(a),i.headers={"content-type":"application/json"});const l=await t(e+r,i),o=(null==(s=l.headers.get("Content-Type"))?void 0:s.match(/json/))?await l.json():await l.text();if(l.ok)return o;throw Error(o.message||o)}catch(l){throw i.error(l),l}}}("https://api.ich-kann-klima.de/api",fetch));var Bi;const Gi=function({api:e,logger:t=console,storage:i=localStorage}){return{async createGame(n){i.setItem("game",JSON.stringify(n));try{e.createGame(n)}catch(r){t.warn("Cannot save new game - trying again later",r)}return n},async loadGame(t){const n=i.getItem("game");if(n){const e=JSON.parse(n);if(e.id===t)return st(e,t)}return st(await e.loadGame(t),t)},async saveGame(n){i.setItem("game",JSON.stringify(n));try{e.saveGame(n)}catch(r){t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",r)}},async decisionMade(t,i,n){e.decisionMade(t.id,i.id,n)},async eventOccurred(t,i){e.eventOccurred(t.id,i.id)}}}({api:(Bi=Ei,{createGame:e=>Bi.add("post","/games",e),loadGame:e=>Bi.add("get","/games/"+e,void 0,0),saveGame:e=>(Bi.remove("put","/games/"+e.id),Bi.add("put","/games/"+e.id,e)),decisionMade:(e,t,i)=>Bi.add("post","/games/"+e+"/decisions/"+t,{accepted:i}),eventOccurred:(e,t)=>Bi.add("post","/games/"+e+"/events/"+t)})}),Ii={async startGame(e){const t=function(e=Ye,t=at){const i=st(t);return i.acceptedLaws=e.filter((e=>{var t;return null==(t=e.labels)?void 0:t.includes("initial")})).map((e=>({lawId:e.id,effectiveSince:i.currentYear}))),i}(),i=lt(t);await Gi.createGame(t),e.commit("setGameState",{game:t}),e.dispatch("applyEvent",{event:i}),Ui.push("/games/"+t.id)},async loadGame(e,t){try{const i=await Gi.loadGame(t.gameId);await Gi.saveGame(i),Ui.push("/games/"+i.id),e.commit("setGameState",{game:i})}catch(i){e.dispatch("error",{error:i})}},gameOver(e){var t;e.commit("gameOver",void 0),Ui.push("/games/"+(null==(t=e.state.game)?void 0:t.id)+"/over")},async acceptLaw(e,t){const i=l({},e.state.game),n={lawId:t.lawId,effectiveSince:i.currentYear+1},r=Xe(n),a=r.removeLawsWithLabels,s=i.acceptedLaws.map(Xe).filter((e=>!(null==a?void 0:a.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)}))))).map((e=>({lawId:e.id,effectiveSince:e.effectiveSince})));i.acceptedLaws=[...s,n];const o=lt(i);await Gi.saveGame(i),e.commit("setGameState",{game:i}),e.dispatch("applyEvent",{event:o}),await Gi.decisionMade(i,r,!0)},async rejectLaw(e,t){const i=l({},e.state.game);i.rejectedLaws=[...i.rejectedLaws,t.lawId],await Gi.decisionMade(i,qe(t.lawId),!1),await Gi.saveGame(i),e.commit("setGameState",{game:i})},async advanceYear(e){const t=l({},e.state.game),i=t.acceptedLaws.map(Xe);t.currentYear++,t.values=function(e,t,i){const n=ze(e);return t.sort(((e,t)=>{var i,n;return(null==(i=e.treatAfterLabels)?void 0:i.some((e=>{var i;return null==(i=t.labels)?void 0:i.includes(e)})))?1:(null==(n=t.treatAfterLabels)?void 0:n.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)})))?-1:0})).forEach((e=>{const t=e.effects(n,e.effectiveSince,i);Ve(n,t)})),n.co2budget-=n.co2emissions,n}(t.values,i,t.currentYear),await Gi.saveGame(t),e.commit("setGameState",{game:t})},async applyEvent(e,t){if(!t.event)return;const i=l({},e.state.game);await Gi.eventOccurred(i,t.event),t.event.apply(e)},acknowledgeEvent(e,t){const i=l({},e.state.game);i.events.find((e=>e.id===t.id)).acknowledged=!0,Gi.saveGame(i),e.commit("setGameState",{game:i})},applyEffects(e,t){var i;const n=Ve(l({},null==(i=e.state.game)?void 0:i.values),t),r=o(l({},e.state.game),{values:n});Gi.saveGame(r),e.commit("setGameState",{game:r})},setupTour(e){const t=localStorage.getItem("tour")||mi[0].id,i=mi.find((e=>t===e.id));i?e.commit("setTour",{step:i.id,active:!0}):Ii.stopTour(e)},nextTourStep(e){const t=mi.findIndex((t=>e.state.tour.step===t.id));if(t<0||t==mi.length-1)Ii.stopTour(e);else{const i=mi[t+1];e.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(e){e.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},async error(e,t){e.commit("error",t)}},_i={setGameState(e,t){e.game=t.game},gameOver(e){e.game=o(l({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},xi={proposedLaws:e=>e.game&&e.game.proposedLaws?et(e.game.proposedLaws):[]},Ki=Symbol();function Ni(){return V(Ki)}const Fi=L({state:{game:void 0,tour:{active:!0,step:"start"}},mutations:_i,actions:Ii,getters:xi});function Hi(e,t){return e<t?-1:e>t?1:0}function ji(e,t){const i=ze(e);function n(e){return(e>0?"+":"")+e.toFixed(2)}function r(r){const a=function(e){const i=t.find((t=>t.name===e));return i&&i.condition?i.value:0}(r),s=i[r]-e[r];return a&&Math.abs(a-s)<.001?n(a):a?n(a)+" / "+n(s):0!=s?n(s):""}Ve(i,t);return We.map((t=>{return{id:t.name,unit:t.unit,value:(i=t.name,e[i].toFixed(2)),effect:r(t.name),class:t.writable?"writable":"calculated"};var i}))}var $i=d({props:{citation:{type:Object,required:!0},showInternals:{type:Boolean,default:!1}},computed:{href(){return this.citation.url.toString()},title(){return this.citation.title||this.citation.url.toString()}}});const Ji={key:0},Ri=C(". "),Zi={key:1},Qi={key:2},Yi=C("Bemerkung: "),qi=C(". "),Xi={key:3},en=C("Internes: "),tn=C(". "),nn={key:4},rn=C(". "),an={key:5},sn=C(". "),ln={key:6},on=C(". ");$i.render=function(e,t,i,n,r,a){return y(),g("p",null,[e.citation.authors?(y(),g("span",Ji,f(e.citation.authors+e.citation.dateString())+". ",1)):v("",!0),b("a",{target:"_blank",rel:"noreferrer noopener",href:e.href},'"'+f(e.title)+'"',9,["href"]),Ri,e.citation.publisher?(y(),g("span",Zi,f(e.citation.publisher)+". ",1)):v("",!0),e.citation.comment?(y(),g("span",Qi,[Yi,b("span",{innerHTML:e.citation.comment},null,8,["innerHTML"]),qi])):v("",!0),e.showInternals&&e.citation.internalComment?(y(),g("span",Xi,[en,b("span",{innerHTML:e.citation.internalComment},null,8,["innerHTML"]),tn])):v("",!0),e.citation.referringUrl?(y(),g("span",nn,[b("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,["href"]),rn])):v("",!0),e.citation.archiveUrl?(y(),g("span",an,[b("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,["href"]),sn])):v("",!0),e.citation.localCopy?(y(),g("span",ln,[b("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,["href"]),on])):v("",!0)])};var cn=d({components:{Citation:$i},setup(){const e=Ni();return{store:e,game:T((()=>e.state.game))}},data:()=>({selectedTable:"laws",lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0}),methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},selectLaw(e){this.unselect(),this.lawSelected=e},selectEvent(e){this.unselect(),this.eventSelected=e},selectParam(e){this.unselect(),this.paramSelected=e},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0}},computed:{startYearOfSelected(){if(!this.lawSelected||!this.game)return 2021;const e=this.game.acceptedLaws.find((e=>e.lawId===this.lawSelected));return e?e.effectiveSince:2021},selectedLaw(){return Ye.find((e=>e.id===this.lawSelected))},selectedEvent(){return rt.find((e=>e.id===this.eventSelected))},selectedParam(){return this.paramSelected?we[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof le?e:void 0},cParam(){const e=this.selectedParam;return e instanceof oe?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},effectsOfSelected(){if(!this.lawSelected||!this.game)return[];this.game;const e=this.selectedLaw;return e?e.effects(this.game.values,this.startYearOfSelected,this.game.currentYear):[]},sortedValues(){return this.game?ji(this.game.values,this.effectsOfSelected):[]},sortedLaws(){return this.game?function(e,t,i,n){const r=e.proposedLaws,a=e.acceptedLaws.map((e=>e.lawId)),s=e.rejectedLaws;return n.map((t=>{return{id:t.id,priority:t.priority(e),state:(i=t.id,a.includes(i)?"a":r.includes(i)?"p":s.includes(i)?"r":"x")};var i})).sort(((e,n)=>Hi(e[t],n[t])*i)).map((e=>o(l({},e),{priority:e.priority.toFixed(2)})))}(this.game,this.lawsSortCol,this.lawsSortDir,Ye):[]},sortedEvents(){return this.game?(e=this.game,t=this.eventsSortCol,i=this.eventsSortDir,rt.map((t=>({id:t.id,probability:t.probability(e)}))).sort(((e,n)=>Hi(e[t],n[t])*i)).map((e=>o(l({},e),{probability:(100*e.probability).toFixed(2)})))):[];var e,t,i}}});const un=w("data-v-da8c4d08");m("data-v-da8c4d08");const dn={class:"peekData"},hn={key:0,class:"Details"},mn={class:"Title"},pn={class:"Description"},gn=b("div",{class:"SectionHead"},"Details:",-1),bn=b("div",{class:"SectionHead"},"Internes:",-1),vn=b("div",{class:"SectionHead"},"Referenzen:",-1),fn={key:1,class:"Details"},wn={class:"Title"},yn={class:"Description"},kn=b("div",{class:"SectionHead"},"Details:",-1),Sn=b("div",{class:"SectionHead"},"Internes:",-1),An=b("div",{class:"SectionHead"},"Referenzen:",-1),Dn={key:2,class:"Details"},Wn={class:"Title"},Tn={key:0},zn={key:1},Pn={key:2},Vn=b("div",{class:"SectionHead"},"Details:",-1),Ln=b("div",{class:"SectionHead"},"Internes:",-1),Cn=b("div",{class:"SectionHead"},"Referenzen:",-1),Mn={class:"paramsList"},On={class:"numbercol"},Un={class:"effcol"},En={class:"buttonlist"},Bn={key:0,class:"lawlist"},Gn={class:"priocol"},In={key:1,class:"lawlist"},_n={class:"priocol"};p();const xn=un(((e,t,i,n,r,a)=>{var s;const l=A("Citation");return y(),g("details",dn,[b("summary",{onClick:t[1]||(t[1]=t=>e.unselect()),class:"clickable"},"Peek"),e.selectedLaw?(y(),g("div",hn,[b("div",mn,f(e.selectedLaw.title),1),b("div",pn,f(e.selectedLaw.description),1),gn,b("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,["innerHTML"]),bn,b("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,["innerHTML"]),vn,(y(!0),g(k,null,S(e.citationsOfLaw,((e,t)=>(y(),g(l,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):v("",!0),e.selectedEvent?(y(),g("div",fn,[b("div",wn,f(e.selectedEvent.title),1),b("div",yn,f(e.selectedEvent.description),1),kn,b("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,["innerHTML"]),Sn,b("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,["innerHTML"]),An,(y(!0),g(k,null,S(null==(s=e.selectedEvent)?void 0:s.citations,((e,t)=>(y(),g(l,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):v("",!0),e.selectedParam?(y(),g("div",Dn,[b("div",Wn,f(e.paramSelected)+" ["+f(e.selectedParam.unit)+"]",1),e.wParam?(y(),g("div",Tn,"Initial value: "+f(e.wParam.initialValue)+" "+f(e.wParam.unit),1)):v("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(y(),g("div",zn," Should initially be: "+f(e.cParam.shouldInitiallyBe)+" "+f(e.cParam.unit),1)):v("",!0),e.cParam?(y(),g("div",Pn," Calculation: "+f(e.cParam.valueGetter),1)):v("",!0),Vn,b("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,["innerHTML"]),Ln,b("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,["innerHTML"]),Cn,(y(!0),g(k,null,S(e.selectedParam.citations,((e,t)=>(y(),g(l,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):v("",!0),b("table",Mn,[(y(!0),g(k,null,S(e.sortedValues,(t=>(y(),g("tr",{key:t.id,class:["clickable",t.class],onClick:i=>e.selectParam(t.id)},[b("td",null,f(t.id),1),b("td",On,f(t.value),1),b("td",Un,f(t.effect),1),b("td",null,f(t.unit),1)],10,["onClick"])))),128))]),b("div",null,[b("table",En,[b("tr",null,[b("td",{class:["clickable lawButton",e.selectedTable],onClick:t[2]||(t[2]=t=>e.selectedTable="laws")},"Laws",2),b("td",{class:["clickable eventButton",e.selectedTable],onClick:t[3]||(t[3]=t=>e.selectedTable="events")},"Events",2)])]),"laws"===e.selectedTable?(y(),g("table",Bn,[b("tr",null,[b("th",{onClick:t[4]||(t[4]=t=>e.sortLaws("state")),class:"clickable"},"S"),b("th",{onClick:t[5]||(t[5]=t=>e.sortLaws("id")),class:"clickable"},"ID"),b("th",{onClick:t[6]||(t[6]=t=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(y(!0),g(k,null,S(e.sortedLaws,(t=>(y(),g("tr",{key:t.id,class:["clickable",t.state],onClick:i=>e.selectLaw(t.id)},[b("td",null,f(t.state),1),b("td",null,f(t.id),1),b("td",Gn,f(t.priority),1)],10,["onClick"])))),128))])):v("",!0),"events"===e.selectedTable?(y(),g("table",In,[b("tr",null,[b("th",{onClick:t[7]||(t[7]=t=>e.sortEvents("id")),class:"clickable"},"ID"),b("th",{onClick:t[8]||(t[8]=t=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(y(!0),g(k,null,S(e.sortedEvents,(t=>(y(),g("tr",{key:t.id,class:"clickable",onClick:i=>e.selectEvent(t.id)},[b("td",null,f(t.id),1),b("td",_n,f(t.probability),1)],8,["onClick"])))),128))])):v("",!0)])])}));cn.render=xn,cn.__scopeId="data-v-da8c4d08";var Kn=d({components:{PeekInside:cn},setup:()=>({store:Ni(),devMode:"true"===localStorage.getItem("devMode")}),methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,i=Math.min(e/800,t/1e3),n=(t-1e3*i)/2;document.documentElement.style.setProperty("--scale",`${i}`),document.documentElement.style.setProperty("--translateX",`${n}px`)}},mounted(){setTimeout(this.updateStyle,0),window.addEventListener("resize",this.updateStyle)}});const Nn={class:"perspective"},Fn={class:"peek"};Kn.render=function(e,t,i,n,r,a){const s=A("router-view"),l=A("PeekInside");return y(),g(k,null,[b("div",Nn,[b(s)]),b("div",Fn,[e.devMode?(y(),g(l,{key:0})):v("",!0)])],64)};const Hn=M(Kn);Hn.use(Fi,Ki),Hn.use(Ui),Hn.mount("#app");
