var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,l=(e,t)=>{for(var i in t||(t={}))r.call(t,i)&&s(e,i,t[i]);if(n)for(var i of n(t))a.call(t,i)&&s(e,i,t[i]);return e},o=(e,n)=>t(e,i(n));import{s as u,a as c,v as d,d as h,m as g,p as m,b as p,c as b,e as f,f as v,t as w,w as y,o as k,F as S,r as z,g as P,h as D,i as A,j as W,k as V,l as T,u as L,n as O,q as C,x as E,y as F,z as I,A as M,B,V as U}from"./vendor.8ea3cdcd.js";function x(e){return Object.entries(e).map((([e,t])=>o(l({},t),{id:e.replace(/\W/g,"_")})))}var N={title:"Abstandsregeln für Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erhöht wird. Das führte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply:()=>[]};let G=u("",{state:!0}),K=()=>Math.abs(G());function _(e){G=u(e.id,{state:e.prngState})}var j={title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bewährt. Wir lassen sie so, wie sie sind.",effects:()=>[],priority:e=>K()};const J=new c.exports.Converter;function H(e){return e>0?[...Array(e)].map(((e,t)=>t)):[]}function Z(e,t){const i=e-t-1;return[...H(t),Math.max(t,i),...H(i).reverse()]}function R(e,...t){let i=e.map(((e,i)=>e+(t[i]||""))).join("").split("\n");0===i[0].length&&i.shift();const n=i[0].match(/^(\s+)/);return n&&!i.filter((e=>e.trim())).some((e=>!e.startsWith(n[1])))&&(i=i.map((e=>e.replace(n[1],"")))),J.makeHtml(i.join("\n"))}function $(e){return t=>!e(t)}const Q=new Intl.DateTimeFormat("de-DE");class q{constructor(e){this.url=new URL(e.url),this.title=e.title,this.publisher=e.publisher,this.authors=e.authors,this.date=e.date?new Date(e.date):void 0,this.comment=e.comment,this.internalComment=e.internalComment,this.localCopy=e.localCopy,this.referringUrl=e.referringUrl?new URL(e.referringUrl):void 0,this.archiveUrl=e.archiveUrl?new URL(e.archiveUrl):void 0,this.archiveNotPossible=e.archiveNotPossible}dateString(){const e=this.date;return e?" ("+Q.format(e)+")":""}toString(){return[this.authors?this.authors+this.dateString():void 0,this.title?'"'+this.title+'"':void 0,this.url,this.publisher].filter((e=>e)).join(", ")}}function Y(e){const t=e.publisher||e.authors;return`[[${null!=t?t+": ":""}${e.title||e.url.toString()}](${e.url.toString()})]`}const X=new q({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),ee=new q({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),te=new q({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"}),ie=new q({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineralölsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),ne=new q({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile für wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),re=new q({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-°C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),ae=new q({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schlüsselergebnisse der Studie des Wuppertal Instituts für Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-°C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${Y(re)}.`});re.comment=R`Zusammengefasst in ${Y(ae)}.`;const se=new q({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahreschätzung der deutschen Treibhausgas-Emissionen für das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),le=new q({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen für das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),oe=new q({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enthält CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] für mehrere Verkehrsmittel"}),ue=new q({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),ce=new q({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Straßengüterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),de=new q({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enthält Personenkilometer-Jahreswerte für mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),he=new q({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung ÖPNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),ge=new q({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),me=new q({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle für 160g CO2 pro kWh Fernwärme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new q({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren für Fernwärme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle für 160g CO2 pro kWh Fernwärme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const pe=new q({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),be=new q({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),fe=new q({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle wäre besser."}),ve=new q({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bevölkerung nach Nationalität und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),we=new q({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur für Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),ye=new q({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische Ämter des Bundes und der Länder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new q({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const ke=new q({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgemäß - Interview mit Prof. Stefan Gössling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""}),Se=new q({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),ze=new q({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),Pe=new q({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),De=new q({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten für die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class Ae{constructor(e){this.unit=e.unit,this.citations=e.citations?e.citations:[],this.details=e.details?e.details:"",this.internals=e.internals?e.internals:""}citationsDesc(){return this.citations.map((e=>e.toString())).join("; ")}}const We={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class Ve extends Ae{constructor(e){super(e),this.writable=!0,this.initialValue=e.initialValue,this.applyBounds=We[e.unit]}}class Te extends Ae{constructor(e){super(e),this.writable=!1,this.valueGetter=e.valueGetter,this.shouldInitiallyBe=e.shouldInitiallyBe}}const Le=new Ve({unit:"MioTons",initialValue:6700,citations:[X],details:R`

  `,internals:R`

  `}),Oe=new Ve({unit:"MioTons",initialValue:186.793,citations:[se],details:R`

  `,internals:R`

  `}),Ce=new Te({unit:"MioTons",valueGetter:e=>e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4,shouldInitiallyBe:159.696,citations:[se,ce],details:R`

  `,internals:R`
    ${Y(se)}: 159.696 as MioTons

    ${Y(ce)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Ee=new Te({unit:"MioTons",valueGetter:e=>e.co2emissionsStreetVehicles+65*e.publicLocalCapacity/1e6+32*e.publicNationalCapacity/1e6+222*e.airDomesticUsage/1e6+1.641,citations:[oe,se],details:R`

  `,internals:R`
    ${Y(oe)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${Y(se)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${Y(se)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${Y(se)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),Fe=new Te({unit:"MioTons",valueGetter:e=>0*e.buildingsSourceBio+.247*e.buildingsSourceGas+.318*e.buildingsSourceOil+.16*e.buildingsSourceTele,citations:[se,ge],details:R`

  `,internals:R`
    TODO: #91 Gibt es hier bessere Quellen?

    ${Y(ge)}: 247g CO2 pro kWh Erdgas.

    ${Y(ge)}: 318g CO2 pro kWh Erdöl.

    ${Y(me)}: 160g CO2 pro kWh Fernwärme.

    ${Y(se)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),Ie=new Ve({unit:"MioTons",initialValue:67.936,citations:[se],details:R`

  `,internals:R`

  `}),Me=new Ve({unit:"MioTons",initialValue:9.243,citations:[se],details:R`

  `,internals:R`

  `}),Be=new Te({unit:"MioTons",valueGetter:e=>.399*e.electricityGas+.058*e.electricitySolar+.005*e.electricityWind+.02*e.electricityWater+.835*e.electricityHardCoal+1.137*e.electricityBrownCoal+.03*e.electricityBiomass+.005*e.electricityNuclear,citations:[pe,se],details:R`

  `,internals:R`
    ${Y(pe)}:
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
    - Diskrepanz zu ${Y(be)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${Y(se)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),Ue=new Te({unit:"MioTons",valueGetter:e=>e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers,details:R`

  `,internals:R`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${Y(se)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[le]}),xe=new Ve({unit:"TWh",initialValue:480.54,citations:[ee],details:R`

  `,internals:R`

  `}),Ne=new Ve({unit:"Percent",initialValue:50,citations:[],details:R`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:R`

  `}),Ge=new Ve({unit:"TWh",initialValue:51.42,citations:[ee],details:R`

  `,internals:R`

  `}),Ke=new Ve({unit:"TWh",initialValue:131.85,citations:[ee],details:R`

  `,internals:R`

  `});const _e=new Te({unit:"TWh",valueGetter(e){const t=Ke.initialValue,i=e.electricityGridQuality,n=function(e,t){const i=e.value-t.value;return n=>e.result*(n-t.value)/i-t.result*(n-e.value)/i}({value:50,result:t},{value:100,result:e.electricityDemand})(i);return Math.min(n,e.electricityWind)},shouldInitiallyBe:Ke.initialValue,citations:[],details:R`
The electrical energy produced by wind and not impaired by poor quality of the grid.
  `,internals:R`

  `}),je=new Ve({unit:"TWh",initialValue:6,citations:[ee],details:R`

  `,internals:R`

  `}),Je=new Ve({unit:"Percent",initialValue:100,citations:[Pe],details:R`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),He=new Ve({unit:"TWh",initialValue:14.99,citations:[ee],details:R`

  `,internals:R`

  `}),Ze=new Ve({unit:"TWh",initialValue:43.19,citations:[ee],details:R`

  `,internals:R`

  `}),Re=new Ve({unit:"TWh",initialValue:60.91,citations:[ee],details:R`

  `,internals:R`

  `}),$e=new Ve({unit:"TWh",initialValue:35.46,citations:[ee],details:R`

  `,internals:R`

  `}),Qe=new Ve({unit:"TWh",initialValue:82.13,citations:[ee],details:R`

  `,internals:R`

  `}),qe=new Te({unit:"TWh",valueGetter:e=>e.electricityHardCoal+e.electricityBrownCoal,details:R`

  `,internals:R`

  `}),Ye=new Te({unit:"TWh",valueGetter:e=>e.electricityDemand-e.electricitySolar-e.electricityWindUsable-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear,details:R`

  `,internals:R`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),Xe=new Ve({unit:"GramPerPsgrKm",initialValue:160,citations:[oe],details:R`

  `,internals:R`
    ${Y(oe)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),et=new Ve({unit:"MioPsgrKm",initialValue:917e3,citations:[de],details:R`

  `,internals:R`

  `}),tt=new Ve({unit:"Percent",initialValue:.5,citations:[fe],details:R`

  `,internals:R`
    Die verschiedenen Zahlen in ${Y(fe)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),it=new Ve({unit:"MioPsgrKm",initialValue:112600,citations:[de],details:R`

  `,internals:R`

  `}),nt=new Ve({unit:"MioPsgrKm",initialValue:112600,citations:[de],details:R`

  `,internals:R`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),rt=new Ve({unit:"MioPsgrKm",initialValue:67300,citations:[de],details:R`

  `,internals:R`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),at=new Ve({unit:"MioPsgrKm",initialValue:67300,citations:[de],details:R`

  `,internals:R`
Siehe \`publicLocalCapacity\`.
  `}),st=new Ve({unit:"MioPsgrKm",initialValue:10100,citations:[de],details:R`

  `,internals:R`

  `}),lt=new Ve({unit:"MioPsgrKm",initialValue:61700,citations:[de],details:R`

  `,internals:R`

  `}),ot=new Te({unit:"MioPsgrKm",valueGetter:e=>e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage,shouldInitiallyBe:1168700,citations:[de],details:R`

  `,internals:R`

  `}),ut=new Ve({unit:"TWh",initialValue:226,citations:[],details:R`

  `,internals:R`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),ct=new Ve({unit:"TWh",initialValue:544,citations:[],details:R`

  `,internals:R`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),dt=new Te({unit:"TWh",valueGetter:e=>e.buildingsPrivateDemand+e.buildingsIndustryDemand,shouldInitiallyBe:770,citations:[],details:R`

  `,internals:R`
    TODO: #78 Quelle ${Y(De)} gibt diese Zahlen nicht her.
  `}),ht=new Ve({unit:"TWh",initialValue:130,citations:[],details:R`

  `,internals:R`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),gt=new Ve({unit:"TWh",initialValue:219,citations:[],details:R`

  `,internals:R`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),mt=new Ve({unit:"TWh",initialValue:58,citations:[],details:R`

  `,internals:R`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),pt=new Te({unit:"TWh",valueGetter:e=>e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele),citations:[],details:R`

  `,internals:R`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${Y(De)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),bt=new Ve({unit:"Percent",initialValue:50,citations:[],details:R`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:R`

  `}),ft=new Ve({unit:"TsdPeople",initialValue:83155.031,citations:[ve],details:R`

  `,internals:R`
Anfangswert ist der Stand 31.12.2020.
  `}),vt=new Ve({unit:"TsdPeople",initialValue:2695,citations:[we],details:R`

  `,internals:R`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),wt=new Ve({unit:"MrdEuro",initialValue:3332,citations:[ye],details:R`

  `,internals:R`
Anfangswert ist das BIP 2020.
  `}),yt=new Ve({unit:"MrdEuro",initialValue:1899,citations:[],details:R`

  `,internals:R`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),kt={co2budget:Le,co2emissionsIndustry:Oe,co2emissionsStreetVehicles:Ce,co2emissionsMobility:Ee,co2emissionsAgriculture:Ie,co2emissionsBuildings:Fe,co2emissionsOthers:Me,co2emissionsEnergy:Be,co2emissions:Ue,electricityDemand:xe,electricityGridQuality:Ne,electricitySolar:Ge,electricityWind:Ke,electricityWindUsable:_e,electricityWindOnshoreMaxNew:je,electricityWindEfficiency:Je,electricityWater:He,electricityBiomass:Ze,electricityNuclear:Re,electricityHardCoal:$e,electricityBrownCoal:Qe,electricityCoal:qe,electricityGas:Ye,carEmissionFactor:Xe,carUsage:et,carRenewablePercentage:tt,publicLocalUsage:it,publicLocalCapacity:nt,publicNationalUsage:rt,publicNationalCapacity:at,airDomesticUsage:st,airIntlUsage:lt,passengerTransportUsage:ot,buildingsIndustryDemand:ut,buildingsPrivateDemand:ct,buildingsDemand:dt,buildingsSourceBio:ht,buildingsSourceOil:gt,buildingsSourceTele:mt,buildingsSourceGas:pt,popularity:bt,numberOfCitizens:ft,unemployment:vt,gdp:wt,stateDebt:yt},St=Object.entries(kt).filter((e=>e[1]instanceof Ve)).map((e=>e)).reduce(((e,t)=>(e[t[0]]=t[1],e)),{}),zt=Object.entries(kt).filter((e=>e[1]instanceof Te)).map((e=>e)).reduce(((e,t)=>(e[t[0]]=t[1],e)),{});class Pt extends Ve{constructor(e,t){super(e),this.name=t}}const Dt=Object.entries(St).map((e=>new Pt(e[1],e[0])));class At extends Te{constructor(e,t){super(e),this.name=t}}Object.entries(zt).map((e=>new At(e[1],e[0])));const Wt=Object.entries(kt).map((e=>e[1]instanceof Ve?new Pt(e[1],e[0]):new At(e[1],e[0]))),Vt=Dt.reduce(((e,t)=>o(l({},e),{[t.name]:t.initialValue})),{});function Tt(e){const t=l({},e);return Object.entries(zt).forEach((e=>Object.defineProperty(t,e[0],{get:()=>e[1].valueGetter(t)}))),t}function Lt(e,t){return{type:"dispatch",condition:!0,if(e){return this.condition=e,this},apply(i){this.condition&&i.dispatch(e,t)}}}function Ot(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(e){return this.percent=e,this},byValue(e){return this.value=e,this},setValue(e){return this.absolute=e,this},if(e){return this.condition=e,this},getOldNew(e){const t=this.name,i=e[t];if(!this.condition)return{oldVal:i,newVal:i};const n=kt[t],r=null!=this.absolute?this.absolute:i+(this.value||i*this.percent/100);return{oldVal:i,newVal:n.applyBounds(r)}},getChange(e){if(!this.condition)return 0;const{oldVal:t,newVal:i}=this.getOldNew(e);return i-t},apply(e){if(this.condition){const{newVal:t}=this.getOldNew(e.values);e.values[this.name]=t}return this}}}function Ct(e,t){if(kt[e].unit!=kt[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(e){return this.percent=e,this},byValue(e){return this.value=e,this},if(e){return this.condition=e,this},getEffect(e){const t=e[this.to],i=e[this.from];if(!this.condition)return{oldTo:t,oldFrom:i,newTo:t,newFrom:i};const n=kt[this.to],r=kt[this.from],a=this.value||t*this.percent/100,s=n.applyBounds(t+a)-t,l=-r.applyBounds(i-s)+i;return{oldTo:t,newTo:t+l,oldFrom:i,newFrom:i-l}},apply(e){if(this.condition){const{newTo:t,newFrom:i}=this.getEffect(e.values);e.values[this.to]=t,e.values[this.from]=i}return this}}}function Et(e,t){t.filter((e=>e.condition)).forEach((t=>t.apply(e)))}var Ft={title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,i){const n=i-t,r=n<18?4.3/18:0,a=(10-n)/55,s=Math.max(50*a,0);return[Ot("electricityHardCoal").setValue(0),Ot("electricityBrownCoal").setValue(0),Ot("stateDebt").byValue(2.5-r),Ot("unemployment").byValue(s)]},priority:e=>e.values.electricityCoal/e.values.electricityDemand<=.1?0:yi(1e4,0,e.values.unemployment),citations:[],details:R`

  `,internals:R`
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
  `},It={title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effects:()=>[Ot("stateDebt").byValue(-37),Ot("electricityHardCoal").byPercent(-10),Ot("electricityBrownCoal").byPercent(-5),Ot("electricityWind").byValue(5),Ot("electricitySolar").byValue(3),Ot("electricityWater").byValue(.5)],priority:e=>yi(2050,2021,e.currentYear)};const Mt=Tt(Vt).electricityGas;var Bt={title:"Kernenergienutzung verlängern",description:"Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effects:()=>[Ot("electricityNuclear").setValue(104.3),Ot("stateDebt").byValue(-2.5),Ot("popularity").byValue(-4)],priority:e=>yi(Mt,1.1*Mt,e.values.electricityGas)},Ut={title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,i){const n={2021:60.45,2022:30.21}[i]||0;return[Ot("electricityNuclear").setValue(n)]},priority:e=>0},xt={title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren für den Ausbau des Stromnetzes",effects:(e,t,i)=>[Ot("popularity").byValue(-3).if(t===i),Ot("electricityGridQuality").byValue(1)],priority:e=>yi(70,27,zi(e)),citations:[],details:R`

  `,internals:R`
    # Happy Path 1

    # Folgen

    - [x] Im ersten Jahr machen BIs schlechte Stimmung: 3% Popularität weniger.
    - [x] Die Netzqualität steigt jährlich um 1%.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    - 0% bei einem Anteil von nutzbarem Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von nutzbarem Windstrom von 27%.
    - linear interpoliert
  `},Nt={title:"Netzausbau fördern",description:"Ausbau des Stromnetzes mit Steuermitteln fördern",effects:(e,t,i)=>[Ot("popularity").byValue(-1).if(t===i),Ot("stateDebt").byValue(2),Ot("electricityGridQuality").byValue(5).if(Si(e,"NetzausbauErleichtern"))],priority:e=>yi(70,27,zi(e)),citations:[],details:R`

  `,internals:R`
    # Happy Path 8

    # Folgen

    - [x] Im ersten Jahr machen BIs schlechte Stimmung: 1% Popularität weniger.
    - [x] Kostet 2 Mrd Euro im Jahr.
    - [x] Die Netzqualität steigt jährlich um 5%, aber nur, wenn auch die Planungsverfahren vereinfacht wurden.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    - 0% bei einem Anteil von nutzbarem Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von nutzbarem Windstrom von 27%.
    - linear interpoliert
  `},Gt={title:"Stromspeicherung erleichtern",description:"Bürokratische Hürden für den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effects:(e,t,i)=>[Ot("electricityGridQuality").byValue(.2)],priority:e=>yi(80,45,e.values.electricityGridQuality),citations:[],details:R`

  `,internals:R`
    # Happy Path 1.7

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    - [x] Die Netzqualität steigt jährlich um 0.2%.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Identisch zu "StromspeicherungFoerdern".

    - 0% bei einer Netzqualität von 80%. (Zu Beginn: 50%)
    - 100% bei einer Netzqualität von 45%.
    - linear interpoliert
  `},Kt={title:"Stromspeicherung fördern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln fördern. 2 Mrd € pro Jahr.",effects(e,t,i){const n=i>=t+(Si(e,"StromspeicherungErleichtern")?0:5),r=Si(e,"ForschungUndEntwicklungStromspeicherung",3);return[Ot("stateDebt").byValue(1),Ot("popularity").byValue(.2).if(n),Ot("stateDebt").byValue(1).if(n),Ot("electricityGridQuality").byValue(2).if(n),Ot("electricityGridQuality").byValue(2).if(r),Ot("electricityGridQuality").byValue(2).if(n&&r)]},priority:e=>yi(80,45,e.values.electricityGridQuality),citations:[],details:R`

  `,internals:R`
    # Happy Path 8.5

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    - [x] Kostet 1 MrdEuro im Jahr.
    - Wenn "StromspeicherungErleichtern" angenommen oder dieses Gesetz vor mehr als 5 Jahren beschlossen:
      - [x] Weitere 1 MrdEuro im Jahr
      - [x] Viele verdienen Geld mit kleinen Batteriespeichern: Popularität steigt um 0,2% pro Jahr.
      - [x] Die Netzqualität steigt jährlich um 2%.
    - Wenn "ForschungUndEntwicklungStromspeicherung" vor 3 oder mehr Jahren angenommen:
      - [x] Die Netzqualität steigt jährlich um 2% (zusätzlich).
    - Wenn "StromspeicherungErleichtern" und "ForschungUndEntwicklungStromspeicherung" angenommen:
      - [x] Die Netzqualität steigt jährlich um 2% (zusätzlich).

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Identisch zu "StromspeicherungErleichtern".

    - 0% bei einer Netzqualität von 80%. (Zu Beginn: 50%)
    - 100% bei einer Netzqualität von 45%.
    - linear interpoliert
  `},_t={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit vergünstigten Krediten gefördert.",effects(e,t,i){const n=i-t>2;return[Ot("stateDebt").byValue(.5),Ot("buildingsSourceBio").byPercent(-1).if(n),Ot("buildingsSourceOil").byPercent(-1).if(n),Ot("buildingsSourceTele").byPercent(-1).if(n),Ot("buildingsPrivateDemand").byPercent(-1).if(n)]},priority:e=>yi(15,40,e.values.co2emissionsBuildings/e.values.co2emissions*100)},jt={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gefördert.",effects(e,t,i){const n=i-t>2;return[Ot("stateDebt").byValue(1),Ot("buildingsSourceBio").byPercent(-2).if(n),Ot("buildingsSourceOil").byPercent(-2).if(n),Ot("buildingsSourceTele").byPercent(-2).if(n),Ot("buildingsPrivateDemand").byPercent(-2).if(n),Ot("popularity").byValue(5).if(n)]},priority:e=>yi(15,40,e.values.co2emissionsBuildings/e.values.co2emissions*100)},Jt={title:"Dämmung von Wohngebäuden sehr stark fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungsplätze im Handwerk geschaffen durch einen Zuschuss von 500€ pro Monat, damit der zu erwartende Bauboom bewältigt werden kann.",effects(e,t,i){const n=i-t,r=n>=2;return[Ot("stateDebt").byValue(3),Ot("buildingsSourceBio").byPercent(-4).if(r),Ot("buildingsSourceOil").byPercent(-4).if(r),Ot("buildingsSourceTele").byPercent(-4).if(r),Ot("buildingsPrivateDemand").byPercent(-4).if(r),Ot("popularity").byValue(10).if(1===n),Ot("popularity").byValue(5).if(r)]},priority:e=>yi(15,40,e.values.co2emissionsBuildings/e.values.co2emissions*100),citations:[],details:R`

  `,internals:R`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `},Ht={title:"Dämmung von Wohngebäuden abschaffen",description:"Wir geben den Bürgern die Freiheit zurück, selbst zu entscheiden, ob sie ihr Haus dämmen wollen und lassen die Förderung auslaufen",effects:()=>[Ot("stateDebt").byValue(-.5),Ot("buildingsSourceBio").byPercent(-.5),Ot("buildingsSourceOil").byPercent(-.5),Ot("buildingsSourceTele").byPercent(-.5),Ot("buildingsPrivateDemand").byPercent(-.5)],priority(e){const t=function(e,t){const i=e.sort(((e,t)=>t.effectiveSince-e.effectiveSince)).find((e=>t.test(e.lawId)));return null==i?void 0:i.lawId}(e.acceptedLaws,/^DaemmungAltbau/);if(!t||"DaemmungAltbauAbschaffen"===t)return 0;return yi(15,40,e.values.co2emissionsBuildings/e.values.co2emissions*100)}},Zt={title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",effects(e,t,i){const n=e.values.publicLocalCapacity/e.values.publicLocalUsage*100,r=i-t;return[Ot("stateDebt").byValue(3),Ot("publicLocalCapacity").byPercent(1),Ct("publicLocalUsage","carUsage").byPercent(1).if(n>=105),Ot("popularity").byValue(2).if(r>=5)]},priority:e=>yi(150,80,e.values.publicLocalCapacity/e.values.publicLocalUsage*100),citations:[he],details:R`

  `,internals:R`
    # Happy Path 18

    # Folgen

    - Der Staatshaushalt wird jährlich mit 3 Mrd € mehr belastet. (${Y(he)})
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

    Sollte erst vorgeschlagen werden, wenn genügend Nachfrage da ist.

    - 0 bei 150% relativer Kapazität. (Zu Beginn: 100%)
    - 100 bei 80% relativer Kapazität.
    - linear interpoliert
  `},Rt={title:"Nahverkehr Modernisieren",description:"Anschaffung Moderner, bequemer, emissionsfreier Fahrzeuge für den Nahverkehr wird gefördert.",effects:(e,t,i)=>[Ot("stateDebt").byValue(3),Ot("publicLocalCapacity").byPercent(1),Ct("publicLocalUsage","carUsage").byPercent(1),Ot("popularity").byValue(3)],priority(e){if(!Si(e,"FernverkehrModernisieren"))return 0;return yi(0,24,e.values.co2emissionsMobility/e.values.co2emissions*100)},citations:[ue],details:R`

  `,internals:R`
    # Happy Path 16

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Der Staatshaushalt wird jährlich mit 3 Mrd € stärker belastet.
    - Die "Kapazität" des Nahverkehrs steigt jährlich um 1%.
    - Umstieg von individual Verkehr auf Nahverkehr ist attraktiver:
      - Nahverkehr Nutzung steigt 1% jährlich.
      - Auto Nutzung sinkt entsprechend.
    - Popularität steigt jährlich um 3%.

    # Vorbedingungen:

    - "FernverkehrModernisieren" wurde beschlossen. (Damit nicht zu viele ähnliche Vorschläge gleichzeitig da sind.)
    - Priorität über 0%.

    # Priorität

    - 0 bei 0% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 24% Anteil
    - linear interpoliert
  `},$t={title:"Förderung für Tierhaltung abschaffen",description:"Subventionen für Tierhaltung werden ersatzlos gestrichen",effects:(e,t,i)=>[Ot("stateDebt").byValue(-10),Ot("co2emissionsAgriculture").byValue(-10).if(t===i),Ot("popularity").byValue(-20).if(t===i)],priority:e=>yi(1e4,0,e.values.unemployment)},Qt={title:"Nahverkehr Kostenlos",description:"Die Kosten für den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr benötigt werden.",effects(e,t,i){const n=t===i?10:1;return[Ot("stateDebt").byValue(10),Ct("publicLocalUsage","carUsage").byPercent(n),Ot("popularity").byValue(10).if(t===i),Ot("unemployment").byValue(20).if(t===i)]},priority:e=>yi(90,120,e.values.publicLocalCapacity/e.values.publicLocalUsage*100),citations:[ue],details:R`

  `,internals:R`
    # Happy Path 19

    # Folgen

    - Der Staatshaushalt wird jährlich mit 10 Mrd € stärker belastet.
        - 13.3 Mrd € Ticketeinnahmen pro Jahr (${Y(ue)})
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

    Sollte erst vorgeschlagen werden, wenn genügend Kapazität da ist.

    - 0 bei 90% relativer Kapazität. (Zu Beginn: 100%)
    - 100 bei 120% relativer Kapazität.
    - linear interpoliert
  `},qt={title:"Autos in Innenstädten verbieten",description:"Die Innenstädte der großen Städte werden zu Autofreien Zonen erklärt und begrünt, sowie Fahrrad und Fußgängerzonen eingerichtet.",effects(e,t,i){var n=-2;return e.values.publicLocalCapacity>1.2*e.values.publicLocalUsage&&(n=-1,t+2<i&&(n=2)),[Ot("popularity").byValue(n),Ct("publicLocalUsage","carUsage").byPercent(10).if(t===i)]},priority:e=>yi(90,120,e.values.publicLocalCapacity/e.values.publicLocalUsage*100)},Yt={title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des öffentlichen Fernverkehrs wird bundesweit stärker Bezuschusst und Vorangetrieben",effects(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return[Ot("stateDebt").byValue(6),Ot("publicNationalCapacity").byPercent(1),Ct("publicNationalUsage","carUsage").byPercent(1).if(t>=105),Ct("publicNationalUsage","carUsage").byPercent(.5).if(t>=105),Ot("popularity").byValue(2).if(t>=105)]},priority:e=>yi(150,80,e.values.publicNationalCapacity/e.values.publicNationalUsage*100),citations:[],details:R`

  `,internals:R`
    # Happy Path 17

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Der Staatshaushalt wird jährlich mit 6 Mrd € mehr belastet. (Analog zu Nahverkehr)
    - Fernverkehr Kapazität steigt jährlich um 1%
    - Sobald die Kapazität um 5% gestiegen ist (relative Kapazität >= 105%):
      - Fernverkehr Nutzung steigt jährlich um 1%.
      - Nahverkehr Nutzung steigt jährlich um die Hälfte der Steigerung des Fernverkehrs.
      - PKW Nutzung sinkt entsprechend um die Summe der Steigerungen von Fern- und Nahverkehr
      - Die Popularität steigt um 2% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität:

    Sollte erst vorgeschlagen werden, wenn genügend Nachfrage da ist.

    - 0 bei 150% relativer Kapazität. (Zu Beginn: 100%)
    - 100 bei 80% relativer Kapazität.
    - linear interpoliert
  `},Xt={title:"Fernverkehr Modernisieren",description:"Moderne, bequeme und weniger anfällige Züge werden für den Fernverkehr angeschafft.",effects:(e,t,i)=>[Ot("stateDebt").byValue(3),Ot("publicNationalCapacity").byPercent(1),Ct("publicNationalUsage","carUsage").byPercent(1),Ot("popularity").byValue(3)],priority:e=>yi(0,24,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[],details:R`

  `,internals:R`
    # Happy Path 15

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Der Staatshaushalt wird jährlich mit 3 Mrd € stärker belastet.
    - Die "Kapazität" des Fernverkehrs steigt jährlich um 1%.
    - Umstieg von individual Verkehr auf Fernverkehr ist attraktiver:
      - Fernverkehr Nutzung steigt 1% jährlich.
      - Auto Nutzung sinkt entsprechend.
    - Popularität steigt jährlich um 3%.

    # Vorbedingungen:

    - Priorität über 0%.

    # Priorität

    - 0 bei 0% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 24% Anteil
    - linear interpoliert
  `},ei={title:"Wasserstofftechnologie fördern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gefördert. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+5;return[Ot("stateDebt").byValue(2).if(n),Ot("carRenewablePercentage").byValue(1).if(r)]},priority(e){const t=e.values;return yi(40,90,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[],details:R`

  `,internals:R`
    # Happy Path 9

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    - [x] Konsten: 2 Mrd Euro pro Jahr für die ersten 5 Jahre
    - [x] Nach 5 Jahren zahlt es sich aus und der Anteil der erneuerbaren PKW steigt um 1% pro Jahr.
    - [x] Voraussetzung für weitere Wasserstoffbasierte Gesetze.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Je höher der Anteil nicht-erneuerbaren PKW am gesamt Pasagiertransport is, desto eher

    - 0% bei einem Anteil von von 90%.
    - 100% bei einer Netzqualität von 40%.
    - linear interpoliert
  `},ti={title:"Wasserstoffmobilität fördern",description:"Wasserstoffbasierte Fahrzeuge werden gefördert.",effects:(e,t,i)=>Si(e,"WasserstofftechnologieFoerdern")?[Ot("stateDebt").byValue(3),Ot("carRenewablePercentage").byValue(1),Ot("popularity").byValue(1).if(t===i)]:[],priority:e=>yi(0,26,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[],details:R`

  `,internals:R`
    # Happy Path 21

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    Nur wenn "WasserstofftechnologieFoerdern" beschlossen wurde:

    - Der Staatshaushalt wird jährlich mit 3 Mrd € stärker belastet.
    - Anteil erneuerbar betrieber PKW steigt um 1% pro Jahr.
    - Popularität steigt im ersten Jah um 1%

    # Vorbedingungen:

    - Priorität über 0%.

    # Priorität

    - 0 bei 0% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 26% Anteil
    - linear interpoliert
  `},ii={title:"Abschaffung der Mineralölsteuer",description:"Die Steuer auf sämtliche erdölbasierten Treibstoffe wird abgeschafft.",effects:(e,t,i)=>[Ot("stateDebt").byValue(41),Ot("popularity").byValue(5).if(t===i),Ot("popularity").byValue(-3).if(t<i),Ct("publicLocalUsage","carUsage").byPercent(-20).if(t===i),Ct("publicNationalUsage","carUsage").byPercent(-20).if(t===i)],priority(e){const t=e.values;return yi(60,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[ie],details:"",internals:R`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${Y(ie)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `},ni={title:"Ausbau von Straßen",description:"Autobahnen und Straßen werden intensiver ausgebaut.",effects:e=>[Ot("stateDebt").byValue(5),Ot("popularity").byValue(.5),Ct("publicLocalUsage","carUsage").byPercent(-1),Ct("publicNationalUsage","carUsage").byPercent(-1)],priority(e){const t=e.values;return yi(60,100,t.carUsage/t.passengerTransportUsage*100)}},ri={title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effects:(e,t,i)=>[Ot("stateDebt").byValue(-7.35),Ot("popularity").byValue(-1).if(t===i)],priority(e){const t=e.values;return yi(10,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)}},ai={title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen für Dienstwagen werden abgeschafft.",effects:(e,t,i)=>[Ot("stateDebt").byValue(-18),Ot("popularity").byValue(-1).if(t===i),Ct("carUsage","publicLocalUsage").byPercent(-.05)],priority(e){const t=e.values;return yi(50,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[ne,ke],details:R`

  `,internals:R`
    # Happy Path 20

    Zunächst sollte Nah- und Fernverkehr attraktiver gemacht werden.
    TODO: Folgen sollten davon abhängen, ob es attraktive Alternativen gibt.

    # Folgen

    - Steuermehreinnahmen: 18 mrd€ / Jahr (${Y(ne)})
    - -0.05% Fahleistung pro Jahr (Anreiz für Auto fällt weg Gebrauchte Wagen werden teuerer).
        - ${Y(ke)} sagt es gibt keine echte Schätzung dafür.
    - Entsprechend mehr Nahverkehrnutzung
    - Zufriedenheit sinkt einmalig um 1%

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 50%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `},si={title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=Ot("carEmissionFactor").setValue(157.9),i=t.getChange(e.values);return[Ot("popularity").byValue(2).if(i<0),t]},priority(e){if(Si(e,"Tempolimit100AufAutobahnen")||Si(e,"Tempolimit120AufAutobahnen")||Si(e,"TempolimitAufAutobahnenAussitzen"))return 0;const t=e.values;return yi(10,100,t.carUsage/t.passengerTransportUsage*100)}},li={title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=Ot("carEmissionFactor").setValue(157.1),i=t.getChange(e.values);return[Ot("popularity").byValue(2).if(i<0),t]},priority(e){if(!Si(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values;return yi(10,100,t.carUsage/t.passengerTransportUsage*100)}},oi={title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=Ot("carEmissionFactor").setValue(154.1),i=t.getChange(e.values);return[Ot("popularity").byValue(-1).if(i<0),t]},priority(e){if(!Si(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values;return yi(10,100,t.carUsage/t.passengerTransportUsage*100)}},ui={title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das könnte zwar Strafen oder gar Zwangsmaßnahmen bewirken, aber das Risiko der gefährdeten Wiederwahl ist zu groß.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects:()=>[Ot("stateDebt").byValue(-10),Ot("popularity").byValue(-2)],priority(e){if(Si(e,"Tempolimit100AufAutobahnen")||Si(e,"Tempolimit120AufAutobahnen")||Si(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values;return yi(10,100,t.carUsage/t.passengerTransportUsage*100)}},ci={title:"Elektromobilität Fördern",description:"Höhere Kaufprämien, Steuerbefreiung, günstiges Laden für E-Autos.",effects:(e,t,i)=>Si(e,"LadeinfrastrukturAusbauen")?[Ot("stateDebt").byValue(5),Ot("carRenewablePercentage").byValue(1),Ot("popularity").byValue(4).if(t===i)]:[],priority(e){if(!Si(e,"LadeinfrastrukturAusbauen"))return 0;return yi(0,25,e.values.co2emissionsMobility/e.values.co2emissions*100)},citations:[],details:R`

  `,internals:R`
    # Happy Path 20.5

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    Nur wenn "LadeinfrastrukturAusbauen" beschlossen wurde:

    - Der Staatshaushalt wird jährlich mit 5 Mrd € stärker belastet.
    - Anteil erneuerbar betrieber PKW steigt um 1% pro Jahr.
    - Popularität steigt im ersten Jah um 4%

    # Vorbedingungen:

    - "LadeinfrastrukturAusbauen" ist beschlossen.
    - Priorität über 0%.

    # Priorität

    - 0 bei 0% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 25% Anteil
    - linear interpoliert
  `},di={title:"Ladeinfrastruktur ausbauen",description:"Ausbau der Ladeinfrastruktur wird mit Steuermitteln stark gefördert.",effects:(e,t,i)=>[Ot("stateDebt").byValue(5),Ot("carRenewablePercentage").byValue(1),Ot("popularity").byValue(2).if(t===i)],priority:e=>yi(0,25,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[ue],details:R`

  `,internals:R`
    # Happy Path 18.5

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Der Staatshaushalt wird jährlich mit 5 Mrd € stärker belastet.
    - Anteil erneuerbar betrieber PKW steigt um 1% pro Jahr.
    - Popularität steigt im ersten Jah um 2%

    # Vorbedingungen:

    - Priorität über 0%.

    # Priorität

    - 0 bei 0% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 25% Anteil
    - linear interpoliert
  `},hi={title:"CO2 Preis Erhöhen",description:"Die Preise werden schneller erhöht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=ki(50,0,Pi(e),-1),r=ki(50,0,e.values.carRenewablePercentage,-1),a=-.5;return[Ot("stateDebt").byValue(-.045*e.values.co2emissions).if(i>=t+2),Ot("stateDebt").byValue(-.03*e.values.co2emissions).if(i>=t+4),Ot("popularity").byValue(n+r),Ot("co2emissionsIndustry").byPercent(a),Ot("co2emissionsAgriculture").byPercent(a),Ot("co2emissionsOthers").byPercent(a),Ct("electricityBrownCoal","electricityWind").byPercent(-.35),Ct("electricityHardCoal","electricityWind").byPercent(-.35),Ct("electricityBrownCoal","electricitySolar").byPercent(-.15),Ct("electricityHardCoal","electricitySolar").byPercent(-.15),Ct("buildingsSourceOil","buildingsSourceBio").byPercent(a),Ct("carUsage","publicNationalUsage").byPercent(-.25),Ct("carUsage","publicLocalUsage").byPercent(-.25)]},priority:e=>Si(e,"VollerCO2Preis")||Si(e,"WirksamerCO2Preis")?0:50,citations:[ze],details:R`

  `,internals:R`
    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    ## Staatsschulden

    sinken um die zusätzlich eingenommene CO2-Steuer: Nach 2 Jahren um 45€, nach 4 Jahren um 75€ pro emittierter Tonne CO2.

    ## Popularität

    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren an der Stromerzeugung.
    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren am Straßenverkehr.

    Abhängigkeit vom jeweiligen Anteil der Erneuerbaren wie folgt:

    - Anteil >= 50%: Popularität sinkt nicht.
    - Anteil = 25%: Popularität sinkt um 0.5% pro Jahr.
    - Anteil = 0%: Pooularität sinkt um 1% pro Jahr.
      (dazwischen linear interpoliert.)

    ## Fossile

    - [x] Nutzungen, die fossile Energieträger verwenden, reduzieren sich jährlich um 0,5%.

    - Es werden 0,5% von allen CO2 Emissionen bzw. emittierenden Größen abgezogen.
    - Nicht mehr erzeugter Kohlestrom wird zu 70% aus Windkraft udn 30% Solar erzeugt.
    - Erdöl wird ersetzt durch biologische Quellen.
    - KFZ wird je zur Hälfte durch Fernverkehr und Nahverkehr ersetzt.

    TODO #78: Dies ist ein sehr grobes Modell.

    # Voraussetzungen

    - Kein anderes CO2 Preis Gesetz wurde bisher beschlossen.

    # Priorität

    - 50%
  `},gi={title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=ki(80,50,Pi(e),-3),r=ki(80,50,e.values.carRenewablePercentage,-3),a=-2;return[Ot("stateDebt").byValue(-.125*e.values.co2emissions),Ot("popularity").byValue(n+r),Ot("co2emissionsIndustry").byPercent(a),Ot("co2emissionsAgriculture").byPercent(a),Ot("co2emissionsOthers").byPercent(a),Ct("electricityBrownCoal","electricityWind").byPercent(-1.4),Ct("electricityHardCoal","electricityWind").byPercent(-1.4),Ct("electricityBrownCoal","electricitySolar").byPercent(-.6),Ct("electricityHardCoal","electricitySolar").byPercent(-.6),Ct("buildingsSourceOil","buildingsSourceBio").byPercent(a),Ct("carUsage","publicNationalUsage").byPercent(-1),Ct("carUsage","publicLocalUsage").byPercent(-1)]},priority:e=>Si(e,"CO2PreisErhoehen")?50:0,citations:[ze],details:R`

  `,internals:R`
    # Happy Path 5.5

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    ## Staatsschulden

    sinken um die zusätzlich eingenommene CO2-Steuer von 125€ pro Tonne CO2.

    ## Popularität

    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren an der Stromerzeugung.
    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren am Straßenverkehr.

    Abhängigkeit vom jeweiligen Anteil der Erneuerbaren wie folgt:

    - Anteil >= 80%: Popularität sinkt nicht.
    - Anteil = 65%: Popularität sinkt um 1,5% pro Jahr.
    - Anteil = 50%: Popularität sinkt um 3% pro Jahr.
    - Anteil = 20%: Pooularität sinkt um 6% pro Jahr.
      (dazwischen linear interpoliert.)

    ## Fossile

    - [x] Nutzungen, die fossile Energieträger verwenden, reduzieren sich jährlich um 2%.

    - Es werden 2% von allen CO2 Emissionen bzw. emittierenden Größen abgezogen.
    - Nicht mehr erzeugter Kohlestrom wird zu 70% aus Windkraft udn 30% Solar erzeugt.
    - Erdöl wird ersetzt durch biologische Quellen.
    - KFZ wird je zur Hälfte durch Fernverkehr und Nahverkehr ersetzt.

    TODO #78: Dies ist ein sehr grobes Modell.

    # Voraussetzungen

    - "CO2PreisErhoehen" wurde beschlossen.

    # Priorität

    - 50%
  `},mi={title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=ki(90,50,Pi(e),-10),r=ki(90,50,e.values.carRenewablePercentage,-10),a=-5;return[Ot("stateDebt").byValue(-3*e.values.co2emissions),Ot("popularity").byValue(n+r),Ot("co2emissionsIndustry").byPercent(a),Ot("co2emissionsAgriculture").byPercent(a),Ot("co2emissionsOthers").byPercent(a),Ct("electricityBrownCoal","electricityWind").byPercent(-3.5),Ct("electricityHardCoal","electricityWind").byPercent(-3.5),Ct("electricityBrownCoal","electricitySolar").byPercent(-1.5),Ct("electricityHardCoal","electricitySolar").byPercent(-1.5),Ct("buildingsSourceOil","buildingsSourceBio").byPercent(a),Ct("carUsage","publicNationalUsage").byPercent(-2.5),Ct("carUsage","publicLocalUsage").byPercent(-2.5)]},priority:e=>Si(e,"WirksamerCO2Preis")?50:0,citations:[Se],details:R`

  `,internals:R`
    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    ## Staatsschulden

    sinken um die eingenommene CO2-Steuer von 150€ pro Tonne CO2.

    ## Popularität

    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren an der Stromerzeugung.
    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren am Straßenverkehr.

    Abhängigkeit vom jeweiligen Anteil der Erneuerbaren wie folgt:

    - Anteil >= 90%: Popularität sinkt nicht.
    - Anteil = 70%: Popularität sinkt um 5% pro Jahr.
    - Anteil = 50%: Popularität sinkt um 10% pro Jahr.
    - Anteil = 10%: Pooularität sinkt um 20% pro Jahr.
      (dazwischen linear interpoliert.)

    ## Fossile

    - [x] Nutzungen, die fossile Energieträger verwenden, reduzieren sich jährlich um 5%.

    - Es werden 5% von allen CO2 Emissionen bzw. emittierenden Größen abgezogen.
    - Nicht mehr erzeugter Kohlestrom wird zu 70% aus Windkraft udn 30% Solar erzeugt.
    - Erdöl wird ersetzt durch biologische Quellen.
    - KFZ wird je zur Hälfte durch Fernverkehr und Nahverkehr ersetzt.

    TODO #78: Dies ist ein sehr grobes Modell.

    # Voraussetzungen

    - "WirksamerCO2Preis" wurde beschlossen.

    # Priorität

    - 50%
  `};const pi={AllesBleibtBeimAlten:j,InitialAtomausstieg:Ut,KohleverstromungEinstellen:Ft,EnergiemixRegeltDerMarkt:It,KernenergienutzungVerlaengern:Bt,NetzausbauErleichtern:xt,NetzausbauFoerdern:Nt,ForschungUndEntwicklungStromspeicherung:{title:"Forschung und Entwicklung zur Stromspeicherung fördern",description:"Ein Förderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+3;return[Ot("stateDebt").byValue(2).if(n),Ot("electricityGridQuality").byValue(.2).if(r)]},priority:e=>yi(80,45,e.values.electricityGridQuality),citations:[],details:R`

  `,internals:R`
    # Happy Path 4

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    - [x] Konsten: 2 Mrd Euro pro Jahr für die ersten 5 Jahre
    - [x] Nach 2 Jahren zahlt es sich aus und die Netzqualität steigt (ohne Förderung) jährlich um 0.2%.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Identisch zu "StromspeicherungErleichtern".

    - 0% bei einer Netzqualität von 80%. (Zu Beginn: 50%)
    - 100% bei einer Netzqualität von 45%.
    - linear interpoliert
  `},StromspeicherungErleichtern:Gt,StromspeicherungFoerdern:Kt,ForschungDezentraleStromerzeugung:{title:"Erforschung und Umsetzung dezentraler Stromerzeugung fördern",description:"Ein Förderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur für die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+1;return[Ot("stateDebt").byValue(2).if(n),Ot("electricityGridQuality").byValue(1).if(r)]},priority:e=>yi(80,45,e.values.electricityGridQuality),citations:[],details:R`

  `,internals:R`
    # Happy Path 4.5

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - [x] Konsten: 2 Mrd Euro pro Jahr für die ersten 5 Jahre
    - [x] Nach 1 Jahr zahlt es sich aus und die Netzqualität steigt (ohne Förderung) jährlich um 1%.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Identisch zu "StromspeicherungErleichtern".

    - 0% bei einer Netzqualität von 80%. (Zu Beginn: 50%)
    - 100% bei einer Netzqualität von 45%.
    - linear interpoliert
  `},WindkraftVereinfachen:{title:"Windkraft vereinfachen",description:"Genehmigungen für Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effects:(e,t,i)=>[],priority:e=>yi(80,27,zi(e)),citations:[],details:R`

  `,internals:R`
    # Happy Path 1.3

    # Folgen

    - Popularität unverändert: Einige freuen sich, andere ärgern die Windräder.
    - Kostenneutral.
    - Änderungen in den Ausschreibungsverfahren und Abstandsregeln wirken sich schneller aus.

    # Priorität

    - 0% bei einem Anteil von Windstrom von 80%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert
  `},AbstandsregelnFuerWindkraftVerschaerfen:{title:"Abstandsregeln für Windkraft verschärfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngebäuden im Innenbereich muss das Zehnfache der Gesamthöhe der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects:(e,t,i)=>[Ot("popularity").byValue(5).if(t===i),Ot("electricityWindOnshoreMaxNew").setValue(.42)],priority:e=>Si(e,"AbstandsregelnFuerWindkraftWieBisher")?yi(0,100,zi(e)):0},AbstandsregelnFuerWindkraftWieBisher:{title:"Abstandsregeln für Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem über Abstände zwischen den Windkraftanlagen und Wohngebäuden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Si(e,"WindkraftVereinfachen")?0:5;return[Ot("electricityWindOnshoreMaxNew").setValue(6).if(i>=t+n)]},priority:e=>Si(e,"AbstandsregelnFuerWindkraftLockern")?yi(30,100,zi(e)):Si(e,"AbstandsregelnFuerWindkraftVerschaerfen")?yi(70,27,zi(e)):0},AbstandsregelnFuerWindkraftLockern:{title:"Abstandsregeln für Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln für Windkraftanlagen sowie Bauerlaubniss in Wäldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Si(e,"WindkraftVereinfachen")?0:5;return[Ot("popularity").byValue(-3).if(t===i),Ot("electricityWindOnshoreMaxNew").setValue(30).if(i>=t+n)]},priority:e=>Si(e,"AbstandsregelnFuerWindkraftWieBisher")?yi(70,27,zi(e)):Si(e,"AbstandsregelnFuerWindkraftAbschaffen")?yi(30,100,zi(e)):0,citations:[],details:R`

  `,internals:R`
    # Happy Path 2

    # Priorität

    Zu Beginn und wenn "WieBisher" ausgewählt:

    - 0% bei einem Anteil von Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert

    Wenn Abstandsregeln abgeschafft wurden:

    - 0% bei einem Anteil von Windstrom von 30%.
    - 100% bei einem Anteil von Windstrom von 100%.
  `},AbstandsregelnFuerWindkraftAbschaffen:{title:"Abstandsregeln für Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Si(e,"WindkraftVereinfachen")?0:5;return[Ot("popularity").byValue(-40).if(t===i),Ot("electricityWindOnshoreMaxNew").setValue(1e3).if(i>=t+n)]},priority:e=>Si(e,"AbstandsregelnFuerWindkraftLockern")?yi(80,25,zi(e)):0},AusschreibungsverfahrenfuerWindkraftWieBisher:{title:"Ausschreibungsverfahren für Windkraft wie zu Beginn",description:"Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Si(e,"WindkraftVereinfachen")?0:5,r=Math.min(6.9,e.values.electricityWindOnshoreMaxNew);return[Ot("electricityWind").byValue((r+1.2)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>Si(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?yi(60,100,Pi(e)):0},AusschreibungsverfahrenfuerWindkraftVerdoppeln:{title:"Ausschreibungsverfahren für Windkraft verdoppeln",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Si(e,"WindkraftVereinfachen")?0:5,r=Math.min(13.8,e.values.electricityWindOnshoreMaxNew);return[Ot("popularity").byValue(-1).if(t===i),Ot("unemployment").byValue(-20).if(t===i),Ot("electricityWind").byValue((r+2.4)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>Si(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?yi(100,50,Pi(e)):Si(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?yi(40,100,Pi(e)):0},AusschreibungsverfahrenfuerWindkraftVervierfachen:{title:"Ausschreibungsverfahren für Windkraft vervierfachen",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Si(e,"WindkraftVereinfachen")?0:5,r=Math.min(27.6,e.values.electricityWindOnshoreMaxNew);return[Ot("popularity").byValue(-2).if(t===i),Ot("unemployment").byValue(-100).if(t===i),Ot("electricityWind").byValue((r+4.8)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>Si(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?yi(100,50,Pi(e)):Si(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?yi(0,100,Pi(e)):0,citations:[],details:R`
    Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung
    von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen
    Subventionierung umsetzen kann bekommt den Zuschlag.
  `,internals:R`
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

    Wenn bisher "verdoppeln":

    - 0% bei einem Anteil der erneuerbaren Stromquellen von 100%. (Zu Beginn: 50%)
    - 100% bei einem Anteil der erneuerbaren Stromquellen von 40%.
      Wenn bisher "verachtfachen":
    - 0% bei einem Anteil der erneuerbaren Stromquellen von 0%. (Zu Beginn: 50%)
    - 100% bei einem Anteil der erneuerbaren Stromquellen von 100%.
    - linear interpoliert
  `},AusschreibungsverfahrenfuerWindkraftVerachtfachen:{title:"Ausschreibungsverfahren für Windkraft verachtfachen",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Si(e,"WindkraftVereinfachen")?0:5,r=Math.min(55.2,e.values.electricityWindOnshoreMaxNew);return[Ot("popularity").byValue(-20).if(t===i),Ot("unemployment").byValue(-100).if(t===i),Ot("electricityWind").byValue((r+9.6)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>Si(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?yi(100,50,Pi(e)):0},SolarstromFoerderungAbschaffen:{title:"Solarstrom Förderung einstellen",description:"Mittlere bis große Solaranlagen sollten sich selbst tragen. Die Förderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:()=>[Ot("electricitySolar").byValue(2)],priority:e=>Si(e,"SolarstromFoerderungWieZuBeginn")?yi(0,100,Pi(e)):0,details:R`

  `},SolarstromFoerderungWieZuBeginn:{title:"Solarstrom Förderung wie zu Beginn",description:"Subventionierung für mittlere bis große Solaranlagen wie bisher",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:()=>[Ot("electricitySolar").byValue(5)],priority:e=>Si(e,"SolarstromFoerdernx8")?yi(70,100,Pi(e)):0,details:R`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `},SolarstromFoerdernx2:{title:"Solarstrom Förderung x2",description:"Subventionierung für mittlere bis große Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[Ot("popularity").byValue(10).if(t===i),Ot("unemployment").byValue(-31e3).if(t===i),Ot("electricitySolar").byValue(10)],priority:e=>Si(e,"SolarstromFoerderungWieZuBeginn")?yi(100,30,Pi(e)):0,details:R`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `},SolarstromFoerdernx4:{title:"Solarstrom Förderung x4",description:"Subventionierung für mittlere bis große Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[Ot("popularity").byValue(20).if(t===i),Ot("unemployment").byValue(-89e3).if(t===i),Ot("electricitySolar").byValue(20)],priority:e=>Si(e,"SolarstromFoerdernx2")?yi(100,30,Pi(e)):0,details:R`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:R`
    # Happy path 10

    ${Y(re)}
  `,citations:[re]},SolarstromFoerdernx8:{title:"Solarstrom Förderung x8",description:"Subventionierung für mittlere bis große Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[Ot("popularity").byValue(-10).if(t===i),Ot("unemployment").byValue(-209e3).if(t===i),Ot("electricitySolar").byValue(40)],priority:e=>Si(e,"SolarstromFoerdernx4")?yi(100,30,Pi(e)):0,details:R`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.`},SolarAufAllenDaechernVerpflichtend:{title:"Solar auf neuen Dächern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die Dächer.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[Ot("popularity").byValue(-3).if(t===i),Ot("electricitySolar").byValue(2)],priority:e=>Si(e,"SolarstromFoerderungWieZuBeginn")?yi(100,30,Pi(e)):0,details:R`

  `,internals:R`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `},DaemmungAltbau1Percent:_t,DaemmungAltbau2Percent:jt,DaemmungAltbau4Percent:Jt,DaemmungAltbauAbschaffen:Ht,NahverkehrKostenlos:Qt,AutosInInnenstaedtenVerbieten:qt,WasserstofftechnologieFoerdern:ei,WasserstoffmobilitaetFoerdern:ti,NahverkehrAusbauen:Zt,NahverkehrModernisieren:Rt,FernverkehrVerbindungenAusbauen:Yt,FernverkehrModernisieren:Xt,AusbauVonStrassen:ni,AbschaffungDerMineraloelsteuer:ii,DieselPrivilegAbgeschaffen:ri,DienstwagenPrivilegAbgeschaffen:ai,Tempolimit130AufAutobahnen:si,Tempolimit120AufAutobahnen:li,Tempolimit100AufAutobahnen:oi,TempolimitAufAutobahnenAussitzen:ui,ElektromobilitaetFoerdern:ci,LadeinfrastrukturAusbauen:di,FoerderungFuerTierhaltungAbschaffen:$t,CO2PreisErhoehen:hi,WirksamerCO2Preis:gi,VollerCO2Preis:mi,ForschungEmissionsfreieStahlproduktion:{title:"Forschung zur emissionsfreien Stahlproduktion fördern",description:"Forschung und Entwicklung von Technologien zur Produktion von Stahl mit stark reduzierten CO2-Emissionen wird stark gefördert. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+3,a=Si(e,"WasserstofftechnologieFoerdern",3)?Pi(e)-70:0,s=Si(e,"WirksamerCO2Preis");return[Ot("stateDebt").byValue(2).if(n),Ot("co2emissionsIndustry").byValue(-2).if(r),Ot("co2emissionsIndustry").byValue(-2).if(s),Ot("co2emissionsIndustry").byValue(-a).if(a>0)]},priority(e){const t=e.values;return yi(0,80,t.co2emissionsIndustry/t.co2emissions*100)},citations:[],details:R`

  `,internals:R`
    # Happy Path 12

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    Derzeit identisch zu \`ForschungEmissionsfreieZementproduktion\`, weil Emissionen Beider in
    \`co2emissionsIndustry\` zusammengefasst sind.

    - [x] Konsten: 2 Mrd Euro pro Jahr für die ersten 5 Jahre
    - [x] Nach 3 Jahren zahlt es sich aus und die Industrieemissionen werden um 2 MioTons pro Jahr reduziert.
    - [x] Ein wirksamer CO2-Preis erzeugt ökonomischen Druck, der eine Reduktion um weitere 2 MioTons bewirkt.
    - [x] Falls "WasserstofftechnologieFoerdern" vor 3 oder mehr Jahren beschlossen wurde und
          mehr als 70% der Stromproduktion erneuerbar sind, kann genügend Wasserstoff erzeugt werden und
          pro weiteres Prozent werden die Industrieemmissionen um 1 MioTons pro Jahr reduziert.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Je höher der Anteil der Industrieemmissionen ist, desto höher die Priorität: (24% zu Beginn.)

    - 0% bei einem Anteil von von 0%.
    - 100% bei einem Anteil von 80%.
    - linear interpoliert
  `},ForschungEmissionsfreieZementproduktion:{title:"Forschung zur emissionsfreien Zementproduktion fördern",description:"Forschung und Entwicklung von Technologien zur Produktion von Zement mit stark reduzierten CO2-Emissionen wird stark gefördert. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+3,a=Si(e,"WasserstofftechnologieFoerdern",3)?Pi(e)-70:0,s=Si(e,"WirksamerCO2Preis");return[Ot("stateDebt").byValue(2).if(n),Ot("co2emissionsIndustry").byValue(-2).if(r),Ot("co2emissionsIndustry").byValue(-2).if(s),Ot("co2emissionsIndustry").byValue(-a).if(a>0)]},priority(e){const t=e.values;return yi(0,80,t.co2emissionsIndustry/t.co2emissions*100)},citations:[],details:R`

  `,internals:R`
    # Happy Path 7

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    Derzeit identisch zu \`ForschungEmissionsfreieStahlproduktion\`, weil Emissionen Beider in
    \`co2emissionsIndustry\` zusammengefasst sind.

    - [x] Konsten: 2 Mrd Euro pro Jahr für die ersten 5 Jahre
    - [x] Nach 3 Jahren zahlt es sich aus und die Industrieemissionen werden um 2 MioTons pro Jahr reduziert.
    - [x] Ein wirksamer CO2-Preis erzeugt ökonomischen Druck, der eine Reduktion um weitere 2 MioTons bewirkt.
    - [x] Falls "WasserstofftechnologieFoerdern" vor 3 oder mehr Jahren beschlossen wurde und
          mehr als 70% der Stromproduktion erneuerbar sind, kann genügend Wasserstoff erzeugt werden und
          pro weiteres Prozent werden die Industrieemmissionen um 1 MioTons pro Jahr reduziert.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Je höher der Anteil der Industrieemmissionen ist, desto höher die Priorität: (24% zu Beginn.)

    - 0% bei einem Anteil von von 0%.
    - 100% bei einem Anteil von 80%.
    - linear interpoliert
  `}},bi=Object.keys(pi),fi=x(pi);function vi(e){const t=function(e){const t=fi.find((t=>t.id===e));if(t)return t;throw Error(`Law #${e} not found`)}(e.lawId);if(t)return o(l({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function wi(e){return e.map((e=>{const t=fi.find((t=>t.id===e));return t||console.error(`Inconsistency: Proposed law #${e} not found`),t})).filter((e=>e))}function yi(e,t,i){const n=i-e,r=t-e;if(0===r)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return n/r*100}function ki(e,t,i,n){return Math.max(0,yi(e,t,i))/100*n}function Si(e,t,i=0){if(!fi.map((e=>e.id)).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some((n=>n.lawId===t&&n.effectiveSince<=e.currentYear+i))}function zi(e){const t=e.values;return t.electricityWindUsable/t.electricityDemand*100}function Pi(e){return(e.values.electricityWindUsable+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}var Di={title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es für unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply:()=>[],probability(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return Math.min(1,yi(15,30,t)/100)}};function Ai(e){return e.find((e=>e.title.match(/subvention/i)&&e.title.match(/abbau/i)))}var Wi={title:"Anruf von befreundetem Unternehmer",description:"Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine\n    Ferienvilla auf Sardinien einladen. Er verlässt sich natürlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen\n    nicht zustimmen wirst.\n  ",apply(e){if(e){const t=Ai(wi(e.proposedLaws));if(t)return[Lt("rejectLaw",{lawId:t.id})]}return[]},probability:e=>Ai(wi(e.proposedLaws))?.5:0},Vi={title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute über die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply:()=>[]};const Ti=2,Li=3,Oi=4,Ci=5,Ei=6;var Fi={title:"Zusammenbruch des Finanzsystems",description:"Deine Staatsfinanzen sind desaströs. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden\n    jemals wieder wirst zurückahlen können. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen\n    könntest. Das Spiel ist damit leider beendet.\n  ",apply:()=>[Lt("gameOver")],probability:e=>e.values.stateDebt>2*Vt.stateDebt?Oi:0},Ii={title:"Hitzehölle",description:"Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen Küstenregionen\n  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr wächst.\n  Um die verbleibdenden Teile sind erbitterte Kämpfe ausgebrochen.\n  ",apply:()=>[Lt("gameOver")],probability:e=>e.values.co2budget<=0?Ei:0},Mi={title:"Happy New Year!",description:"Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen Tätigkeit aufgestellt\n    und kommt zu dem nicht weiter überraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -\n    ebenfalls nicht überraschend - sieht die Sache anders und verurteilt die Regierungserklärung als haltlos.\n  ",apply:()=>[Lt("advanceYear")],probability(e){const t=4*(e.currentYear-2021),i=e.actionCount-t;if(i<3)return 0;if(i>=5)return Ti;const n=Math.round(33.3*(i-2))/100;return Math.min(1,n)}},Bi={title:"Social Media Alarm!",description:"Deine Wahlkampfberaterin ruft dich völlig aufgelöst an. Ob denn an den Geschichten was dran sein, die da im\n    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.\n    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.\n  ",apply:()=>[Ot("popularity").byPercent(-20)]},Ui={title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland müssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply:()=>[]},xi={title:"Du hast durchgehalten",description:"Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,\n    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Maßnahmen waren zu finanzieren\n    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!\n  ",apply:()=>[Lt("gameOver")],probability:e=>2050===e.currentYear?Li:0},Ni={title:"Wahl verloren",description:"Deine Beliebtheit in der Bevölkerung ist katastrophal, lieber würde man Mao Zedong wählen als dich.\n    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du gehörst) und ist damit unter\n    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon länger kein vernünftiger Mensch mehr geglaubt.\n  ",apply:()=>[Lt("gameOver")],probability:e=>e.values.popularity<=0?Ci:0},Gi={title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply:()=>[],citations:[],details:R`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:R`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `},Ki={title:"Bürgerinitiative fordert stärkere Solarförderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply:()=>[],probability(e){const t=Si(e,"SolarstromFoerderungAbschaffen"),i=Si(e,"SolarstromFoerderungWieZuBeginn"),n=Si(e,"SolarstromFoerdernx2");return t||i||n?.5:0},citations:[te],details:R`

  `,internals:R`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${Y(te)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `},_i={title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply:()=>[Lt("gameOver")],probability:e=>e.acceptedLaws.find((e=>"KernenergienutzungVerlaengern"===e.lawId))?.5:0,laws:[],citations:[],details:R`

  `,internals:R`

  `},ji={title:"Staatsoberhaupt verstorben",description:"Du stirbst an der neuen BSE Variante. Tja, hättest du dich mal besser um das Tierwohl gekümmert...",apply:()=>[Lt("gameOver")],probability:e=>wi(e.acceptedLaws.map((e=>e.lawId))).find((e=>e.title.match(/tierwohl/i)))?0:.5,laws:[],citations:[],details:R`

  `,internals:R`

  `},Ji={title:"Dürreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausfälle sind enorm.",apply:()=>[Ot("gdp").byValue(-100),Ot("popularity").byValue(-10)],probability:e=>Math.min(1,yi(400,0,e.values.co2budget)/100),laws:[],citations:[],details:R`

  `,internals:R`
  `},Hi={title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und führt zu einer neuen Diskussion über Lobbyismus.",apply:()=>[Ot("popularity").byValue(-2)],probability:e=>Si(e,"WirksamerCO2Preis")||Si(e,"KohleverstromungEinstellen")?0:.3,laws:[],citations:[],details:R`

  `,internals:R`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `},Zi={title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply:()=>[Ot("popularity").byValue(-2)],probability:()=>.3,laws:[],citations:[],details:R`

  `,internals:R`

  `},Ri={title:"Klimaflüchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimaflüchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply:()=>[Ot("stateDebt").byValue(10)],probability:e=>e.values.co2budget<500?.2:0,laws:[],citations:[],details:R`

  `,internals:R`

  `},$i={title:"Plagiatsaffäre",description:"Während des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet Wählerstimmen.",apply:()=>[Ot("popularity").byValue(-10)],probability:e=>.5,laws:[],citations:[],details:R`

  `,internals:R`

  `};const Qi=()=>.5,qi=x({AbstandsregelnWindkraft:N,Altbausanierung:Di,Bestechung:Wi,EnergieStrategie:Vi,FinanzKollaps:Fi,Hitzehoelle:Ii,NewYear:Mi,SocialMedia:Bi,TempolimitAufAutobahnen:Ui,TimesUp:xi,WahlVerloren:Ni,WindkraftAusschreibung:Gi,SolarstromFoerderung:Ki,AtomKatastrophe:_i,BSE:ji,Duerrewelle:Ji,PRKohleindustrie:Hi,PRInnenminister:Zi,Klimafluechtlinge:Ri,Plagiatsaffaere:$i,CO2PreisDebatte:{title:"Debatte über CO2-Preise",description:"Eine marktliberale Kampagne ist sehr erfolgreich darin, Dich als Verbots-Kanzler hinzustellen. Aus allen Richtungen prasseln Forderungen nach einem adäquaten CO2-Preis auf Dich ein. Nur leider gehen die Vorstellungen über den genauen Preis sehr weit auseinander.",laws:["CO2PreisErhoehen","WirksamerCO2Preis","VollerCO2Preis"],apply:()=>[],probability:e=>yi(1,3,(Si(e,"AutosInInnenstaedtenVerbieten")?1:0)+(Si(e,"KohleverstromungEinstellen")?1:0)+(Si(e,"SolarAufAllenDaechernVerpflichtend")?1:0)+(Si(e,"Tempolimit130AufAutobahnen")?1:0)+(Si(e,"Tempolimit120AufAutobahnen")?1:0)+(Si(e,"Tempolimit100AufAutobahnen")?1:0))/100}}).map((e=>o(l({},e),{probability:e.probability||Qi}))),Yi={currentYear:2021,values:Vt,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],actionCount:0,over:!1,prngState:{}};function Xi(e=Yi,t=d()){return{id:t,currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:Tt(e.values),events:e.events,actionCount:e.actionCount,over:e.over,prngState:{}}}function en(e=fi,t=Yi){const i=Xi(t);return i.acceptedLaws=e.filter((e=>{var t;return null==(t=e.labels)?void 0:t.includes("initial")})).map((e=>({lawId:e.id,effectiveSince:i.currentYear}))),i}const tn=[...Array(30).keys()].map((e=>e+2021));function nn(e,t=fi,i=qi,n=K){const r=function(e,t,i){const n=function(e,t){return t.map((t=>o(l({},t),{prob:t.probability(e)}))).filter((e=>e.prob>0))}(e,t),r=function(e){return e.filter((e=>e.prob>1)).reduce(((e,t)=>t.prob>((null==e?void 0:e.prob)||0)?t:e),void 0)}(n);if(r)return r;return function(e,t){for(const i of e)if((t-=i.prob)<0)return i;return}(function(e){const t=e.map((e=>e.prob)).reduce(((e,t)=>e+t),0),i=.6/t;return e.map((e=>o(l({},e),{prob:e.prob*i})))}(n),i())}(e,i,n);if(r){const t={id:r.id,occuredIn:e.currentYear,acknowledged:!1};e.events.unshift(t)}const a=function(e,t,i){const n=t=>{var i;return null==(i=e.acceptedLaws)?void 0:i.some((e=>e.lawId===t.id))},r=t=>{var i;return null==(i=e.rejectedLaws)?void 0:i.includes(t.id)},a=e=>{var t;return(null==(t=e.labels)?void 0:t.includes("hidden"))||!1},s=t=>({law:t,priority:t.priority(e)}),l=e=>({law:e.law,priority:e.priority+(i.includes(e.law.id)?100:0)});return t.filter($(n)).filter($(r)).filter($(a)).map(s).filter((e=>e.priority>0)).map(l).sort(((e,t)=>t.priority-e.priority)).map((e=>e.law.id)).slice(0,6)}(e,t,(null==r?void 0:r.laws)?r.laws:[]);return e.proposedLaws=function(e,t){const i=[...e],n=t.filter((e=>i.includes(e))),r=t.filter((e=>!n.includes(e)));var a=0;for(;a<i.length;)n.includes(i[a])?a++:0!==r.length?(i[a]=r.shift(),a++):i.splice(a,1);return i.push(...r.slice(0,6-i.length)),i}(e.proposedLaws,a),e.actionCount++,r}function rn(e,t,i){const n=Tt(e.values);return t.sort(((e,t)=>{var i,n;return(null==(i=e.treatAfterLabels)?void 0:i.some((e=>{var i;return null==(i=t.labels)?void 0:i.includes(e)})))?1:(null==(n=t.treatAfterLabels)?void 0:n.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)})))?-1:0})).filter((e=>e.effectiveSince<=i)).forEach((t=>{const r=t.effects(o(l({},e),{values:n}),t.effectiveSince,i);Et({dispatch:()=>{},values:n},r)})),n.co2budget-=n.co2emissions,n}function an(e){return Math.max(0,Math.min(100,e))}const sn=[{id:"start",title:"Stell dir vor...",text:R`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du auswählen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die Wähler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine Wähler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];const ln={setGameState(e,t){e.game=t.game},gameOver(e){e.game=o(l({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},on={proposedLaws:e=>e.game&&e.game.proposedLaws?wi(e.game.proposedLaws):[]};var un=h({props:{law:{type:Object,required:!0},selectable:{type:Boolean,required:!0},numCards:{type:Number,required:!0}},setup:()=>({store:Jr()}),data:()=>({accepted:!1}),computed:o(l({},g(["proposedLaws"])),{zIndex(){return this.law.zIndex},transform(){return`rotate(${2*(this.law.pos-this.numCards/2)}deg) translate(${20*Math.abs(this.numCards/2-this.law.pos)}px, -50%)`}}),methods:{select(){this.$emit("selected")},accept(){this.accepted=!0},sendAccept(e){e.animationName.match(/^twistOut-/)&&this.$emit("accepted",this.law.id)}}});const cn=y("data-v-c57832f8");m("data-v-c57832f8");const dn={key:0,type:"radio"},hn={key:0,class:"button-bar"};p();const gn=cn(((e,t,i,n,r,a)=>(k(),b("div",{class:["Law",{accepted:e.accepted}],style:{zIndex:e.zIndex},onClick:t[2]||(t[2]=(...t)=>e.select&&e.select(...t)),onAnimationend:t[3]||(t[3]=(...t)=>e.sendAccept&&e.sendAccept(...t))},[f("label",null,[e.selectable?(k(),b("input",dn)):v("",!0),f("div",null,[f("h3",null,w(e.law.title),1),f("div",null,w(e.law.description),1),e.selectable?(k(),b("div",hn,[f("button",{class:"accept",onClick:t[1]||(t[1]=(...t)=>e.accept&&e.accept(...t))},"✓")])):v("",!0)])])],38))));un.render=gn,un.__scopeId="data-v-c57832f8";var mn=h({components:{LawCard:un},setup:()=>({store:Jr()}),data:()=>({zIndexes:[],poppedUp:!1}),computed:o(l({},g(["proposedLaws"])),{lawsToShow(){return this.zIndexes.length||(this.zIndexes=Z(this.proposedLaws.length,0)),this.proposedLaws.map(((e,t)=>o(l({},e),{zIndex:this.zIndexes[t],pos:t})))}}),methods:{accept(e){this.store.dispatch("acceptLaw",{lawId:e})},select(e){this.zIndexes=Z(this.proposedLaws.length,e)},sitOut(){this.store.dispatch("sitOut")}}});const pn=y("data-v-290d8620")(((e,t,i,n,r,a)=>{const s=P("LawCard");return k(),b(S,null,[f("div",{class:["ProposedLaws",{poppedUp:e.poppedUp}],onClick:t[1]||(t[1]=t=>e.poppedUp=!0)},[(k(!0),b(S,null,z(e.lawsToShow,((t,i)=>(k(),b(s,{key:t.id,law:t,selectable:e.poppedUp,numCards:e.lawsToShow.length,onAccepted:()=>e.accept(t.id),onSelected:()=>e.select(i)},null,8,["law","selectable","numCards","onAccepted","onSelected"])))),128))],2),f("div",{class:"sitOutButton",onClick:t[2]||(t[2]=()=>e.sitOut())},"Aussitzen")],64)}));mn.render=pn,mn.__scopeId="data-v-290d8620";var bn=h({props:{title:String,text:String},methods:{acknowledge(){this.$emit("acknowledge")}}});const fn=y("data-v-2df6be4d");m("data-v-2df6be4d");const vn={key:0};p();const wn=fn(((e,t,i,n,r,a)=>e.text?(k(),b("div",{key:0,onClick:t[1]||(t[1]=(...t)=>e.acknowledge&&e.acknowledge(...t))},[e.title?(k(),b("h2",vn,w(e.title),1)):v("",!0),f("p",null,w(e.text),1)])):v("",!0)));bn.render=wn,bn.__scopeId="data-v-2df6be4d";var yn=h({props:{title:{type:String,required:!0},value:{type:Number,required:!0},zoom:{type:Number,default:1}},computed:{titleStyle(){return{fontSize:.5*this.zoom+"em"}},progressBarStyle(){return{width:50*this.zoom+"px",height:5*this.zoom+"px"}},indicatorStyle(){const e=this.value>40?"green":this.value>20?"goldenrod":"red";return{width:this.value+"%",backgroundColor:e}}}});const kn=y("data-v-37cfebf9");m("data-v-37cfebf9");const Sn={class:"container"};p();const zn=kn(((e,t,i,n,r,a)=>(k(),b("div",Sn,[f("div",{class:"title",style:e.titleStyle},w(e.title),5),f("div",{class:"progress-bar",style:e.progressBarStyle},[f("div",{class:"indicator",style:e.indicatorStyle},null,4)],4)]))));yn.render=zn,yn.__scopeId="data-v-37cfebf9";var Pn=h({props:{value:{type:Number,required:!0}},components:{IndicatorBar:yn},computed:{isShort(){return this.value<20},isLess(){return this.value>=20&&this.value<50},isMore(){return this.value>=50&&this.value<80},isMuch(){return this.value>=80}}});const Dn=y("data-v-791f01dd");m("data-v-791f01dd");const An={id:"finances"},Wn={key:0,src:"/assets/money-short.7ce9dbed.png",id:"short"},Vn={key:1,src:"/assets/money-less.c10d45f8.png",id:"less"},Tn={key:2,src:"/assets/money-more.a1c17d8d.png",id:"more"},Ln={key:3,src:"/assets/money-much.ad651475.png",id:"much"};p();const On=Dn(((e,t,i,n,r,a)=>{const s=P("IndicatorBar");return k(),b("div",An,[f(s,{title:"Finanzen",value:e.value,zoom:.9},null,8,["value","zoom"]),e.isShort?(k(),b("img",Wn)):v("",!0),e.isLess?(k(),b("img",Vn)):v("",!0),e.isMore?(k(),b("img",Tn)):v("",!0),e.isMuch?(k(),b("img",Ln)):v("",!0)])}));Pn.render=On,Pn.__scopeId="data-v-791f01dd";var Cn=h({props:{value:{type:Number,required:!0}},components:{IndicatorBar:yn},computed:{areHappy(){return this.value>=50},areAngry(){return this.value<50}}});const En=y("data-v-e5acad4c");m("data-v-e5acad4c");const Fn={id:"popularity"},In={key:0,src:"/assets/people-happy.1e9e529c.png",id:"happy"},Mn={key:1,src:"/assets/people-angry.495e0425.png",id:"angry"};p();const Bn=En(((e,t,i,n,r,a)=>{const s=P("IndicatorBar");return k(),b("div",Fn,[f(s,{title:"Beliebtheit",value:e.value,zoom:2.8,style:{margin:"-80px 0 0 200px"}},null,8,["value","zoom"]),e.areHappy?(k(),b("img",In)):v("",!0),e.areAngry?(k(),b("img",Mn)):v("",!0)])}));Cn.render=Bn,Cn.__scopeId="data-v-e5acad4c";var Un=h({data:()=>({levels:{healthy:"/assets/plant-healthy.1c912fd2.png",sick:"/assets/plant-sick.05726ebf.png",withered:"/assets/plant-withered.2d8ffb21.png"}}),props:{value:{type:Number,required:!0}},components:{IndicatorBar:yn},computed:{status(){return this.value>66?"healthy":this.value>33?"sick":"withered"},imgSrc(){return this.levels[this.status]}}});const xn=y("data-v-8ae17ad2");m("data-v-8ae17ad2");const Nn={id:"plant"};p();const Gn=xn(((e,t,i,n,r,a)=>{const s=P("IndicatorBar");return k(),b("div",Nn,[f(s,{title:"CO2-Budget",value:e.value,zoom:2.5,style:{margin:"-50px 0 0 60px"}},null,8,["value","zoom"]),f("img",{src:e.imgSrc,id:e.status},null,8,["src","id"])])}));Un.render=Gn,Un.__scopeId="data-v-8ae17ad2";var Kn=h({props:{year:Number}});const _n=y("data-v-38fe5c52");m("data-v-38fe5c52");const jn={id:"calendar"};p();const Jn=_n(((e,t,i,n,r,a)=>(k(),b("div",jn,w(e.year),1))));Kn.render=Jn,Kn.__scopeId="data-v-38fe5c52";var Hn=h({});const Zn=y("data-v-5952ab5a");m("data-v-5952ab5a");const Rn={id:"heater"},$n=f("img",{src:"/assets/heater.5a77e425.png"},null,-1);p();const Qn=Zn(((e,t,i,n,r,a)=>(k(),b("div",Rn,[$n]))));Hn.render=Qn,Hn.__scopeId="data-v-5952ab5a";var qn=h({});const Yn=y("data-v-3902beeb");m("data-v-3902beeb");const Xn={id:"table"},er=f("img",{src:"/assets/table-top.c87bd2fd.png",id:"table-top"},null,-1),tr=f("img",{src:"/assets/table-front.78c0f8c6.png",id:"table-front"},null,-1),ir=f("img",{src:"/assets/table-front.78c0f8c6.png",id:"table-back"},null,-1),nr=f("img",{src:"/assets/table-side.49774a53.png",id:"table-left-side"},null,-1),rr=f("img",{src:"/assets/table-side.49774a53.png",id:"table-right-side"},null,-1);p();const ar=Yn(((e,t,i,n,r,a)=>(k(),b("div",Xn,[er,tr,ir,nr,rr]))));qn.render=ar,qn.__scopeId="data-v-3902beeb";var sr=h({props:{withNews:Boolean}}),lr="/assets/board-side.d7181ded.png",or="/assets/tvset-legs.78b387df.png";const ur=y("data-v-118e7bdf");m("data-v-118e7bdf");const cr={id:"tvset"},dr=f("div",{id:"board"},[f("img",{id:"board-front",src:"/assets/board-front.41330f02.png"}),f("img",{id:"board-left",src:lr}),f("img",{id:"board-right",src:lr}),f("div",{id:"board-top"})],-1),hr={id:"tv"},gr=f("img",{id:"tv-front",src:"/assets/tv-front.82df5c0c.png"},null,-1),mr={key:0,id:"news",src:"/assets/news.c4bbc2d0.png"},pr=f("div",{id:"legs"},[f("img",{id:"legs-front",src:or}),f("img",{id:"legs-back",src:or})],-1);p();const br=ur(((e,t,i,n,r,a)=>(k(),b("div",cr,[dr,f("div",hr,[gr,e.withNews?(k(),b("img",mr)):v("",!0)]),pr]))));sr.render=br,sr.__scopeId="data-v-118e7bdf";var fr={};const vr=y("data-v-2419943a");m("data-v-2419943a");const wr={class:"dialog"},yr={class:"buttons"};p();const kr=vr(((e,t,i,n,r,a)=>(k(),b("div",wr,[D(e.$slots,"default",{},void 0,!0),f("div",yr,[D(e.$slots,"buttons",{},void 0,!0)])]))));fr.render=kr,fr.__scopeId="data-v-2419943a";var Sr=h({setup(){const e=Jr();return e.dispatch("setupTour"),{store:e}},components:{Dialog:fr},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return sn.find((e=>e.id===this.$store.state.tour.step))},title(){var e;return null==(e=this.currentStep)?void 0:e.title},text(){var e;return null==(e=this.currentStep)?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var t;const i=document.querySelector(".highlighted");i&&i.classList.remove("highlighted"),e&&e.highlight&&(null==(t=document.querySelector(`#${e.highlight}`))||t.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}});Sr.render=function(e,t,i,n,r,a){const s=P("Dialog");return e.title&&e.text?(k(),b(s,{key:0},{buttons:A((()=>[f("button",{onClick:t[1]||(t[1]=(...t)=>e.stop&&e.stop(...t))},"Tour beenden"),f("button",{onClick:t[2]||(t[2]=(...t)=>e.next&&e.next(...t))},"Weiter")])),default:A((()=>[f("h2",null,w(e.title),1),f("div",{innerHTML:e.text},null,8,["innerHTML"])])),_:1})):v("",!0)};var zr=h({components:{Calendar:Kn,ClimateIndicator:Un,Heater:Hn,LawProposals:mn,SpeechBubble:bn,FinanceIndicator:Pn,PopularityIndicator:Cn,Table:qn,Tour:Sr,TVSet:sr},data:()=>({store:Jr()}),computed:{eventToShow(){var e;const t=(null==(e=this.store.state.game)?void 0:e.events)||[];if(0===t.length)return;const i=t[0];return i.acknowledged?void 0:qi.find((e=>e.id===i.id))},eventTitle(){var e;return(null==(e=this.eventToShow)?void 0:e.title)||""},eventText(){var e;return(null==(e=this.eventToShow)?void 0:e.description)||""},currentYear(){var e;return(null==(e=this.store.state.game)?void 0:e.currentYear)||2021},finance(){const e=this.store.state.game;return e?function(e){return an(100-e.values.stateDebt/Vt.stateDebt*50)}(e):0},popularity(){var e;return(null==(e=this.store.state.game)?void 0:e.values.popularity)||100},climate(){const e=this.store.state.game;return e?function(e){return 0===e.values.co2emissions?100:an(e.values.co2budget*Tt(Vt).co2emissions/Vt.co2budget/e.values.co2emissions*50)}(e):0}},methods:{acknowledge(){this.$store.dispatch("acknowledgeEvent",this.eventToShow)}}});const Pr={class:"game-setup"},Dr=f("h1",null,"#ich-kann-klima",-1),Ar=f("div",{id:"walls"},[f("div",{id:"wall-back"}),f("div",{id:"wall-left"}),f("div",{id:"wall-right"})],-1);zr.render=function(e,t,i,n,r,a){const s=P("Calendar"),l=P("Heater"),o=P("PopularityIndicator"),u=P("TVSet"),c=P("ClimateIndicator"),d=P("Table"),h=P("FinanceIndicator"),g=P("LawProposals"),m=P("SpeechBubble"),p=P("Tour");return k(),b("div",Pr,[Dr,Ar,f(s,{year:e.currentYear},null,8,["year"]),f(l),f(o,{value:e.popularity},null,8,["value"]),f(u,{"with-news":!!e.eventText},null,8,["with-news"]),f(c,{value:e.climate},null,8,["value"]),f(d),f(h,{value:e.finance},null,8,["value"]),f(g),f(m,{title:e.eventTitle,text:e.eventText,onAcknowledge:e.acknowledge},null,8,["title","text","onAcknowledge"]),f(p)])};var Wr=h({setup(){const e=Jr();return{store:e,acceptedLaws:W((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({opened:void 0}),computed:{visibleAccepted(){return fi.filter((e=>{var t,i;return(null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id)))&&!(null==(i=e.labels)?void 0:i.includes("hidden"))}))}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}});const Vr=y("data-v-aace6332")(((e,t,i,n,r,a)=>(k(!0),b(S,null,z(e.visibleAccepted,((t,i)=>(k(),b("div",{key:i,class:["Law",{opened:i===e.opened}],onClick:t=>e.toggleOpen(i)},[f("h3",null,w(t.title),1),f("div",null,w(t.description),1)],10,["onClick"])))),128))));Wr.render=Vr,Wr.__scopeId="data-v-aace6332";var Tr=h({components:{GameSetup:zr,AcceptedLaws:Wr},setup:()=>({store:Jr()}),methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,i){i((t=>t.startGame(e.params.id)))}});const Lr=y("data-v-3637ce73")(((e,t,i,n,r,a)=>{const s=P("GameSetup");return k(),b(s)}));Tr.render=Lr,Tr.__scopeId="data-v-3637ce73";var Or=h({components:{Dialog:fr},setup:()=>({store:Jr()}),computed:{co2(){var e,t;const i=null==(e=this.store.state.game)?void 0:e.values.co2budget;return(null==(t=this.store.state.game)?void 0:t.values.co2emissions)>0?i>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. Hätte die AfD nicht besser hinbekommen.":i>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken können. Punktlandung."},debt(){var e;return(null==(e=this.store.state.game)?void 0:e.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilitätskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var e;const t=null==(e=this.store.state.game)?void 0:e.values.popularity;return t<20?"entspricht dem, was man von einem langhährigen Diktator erwarten kann.":t<50?"ist nicht berauschend, wiedergewählt würdest du wohl eher nicht.":t<80?"reicht aus, dass du noch länger am Ruder bleiben könntest. Gratulation!":"ist völlig unglaubwürdig - war das wirklich eine freie Wahl?"}},methods:{loadGame(e){this.store.dispatch("loadGame",{gameId:e})},newGame(){this.$router.push("/games")}},beforeRouteEnter(e,t,i){i((t=>{t.loadGame(e.params.id)}))}});const Cr=f("h2",null,"Das Spiel ist leider zu Ende",-1),Er=f("p",null,"Deine Entscheidungen haben etwas verändert - soviel kann man sagen.",-1),Fr=f("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Ir={class:"button-bar"};Or.render=function(e,t,i,n,r,a){const s=P("Dialog");return k(),b(s,null,{default:A((()=>[Cr,Er,f("ul",null,[f("li",null,"Die CO2-Emmissionen "+w(e.co2),1),f("li",null,"Die Staatsfinanzen "+w(e.debt),1),f("li",null,"Deine Beliebtheit "+w(e.popularity),1)]),Fr,f("div",Ir,[f("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Neuer Versuch")])])),_:1})};const Mr=[{path:"/",redirect:"/games"},{path:"/games",component:Tr},{path:"/games/:id",component:Tr},{path:"/games/:id/over",component:Or}],Br=V({history:T(),routes:Mr});const Ur=function(e,t){let i,n=[];async function r(){if(i&&(clearTimeout(i),i=void 0),n.length){const{method:s,path:l,data:o,retry:u,resolve:c,reject:d}=n[0];try{if((null==t?void 0:t.navigator)&&!(null==t?void 0:t.navigator.onLine))throw Error("Browser is offline");const i=await e(s,l,o);n.shift(),c(i)}catch(a){u?n[0].retry=Math.max(-1,u-1):(n.shift(),d(a))}n.length&&(i=setTimeout(r,(null==t?void 0:t.timeout)||1e4))}}return{add:(e,t,a,s=-1)=>new Promise(((l,o)=>{n.push({method:e,path:t,data:a,retry:s,resolve:l,reject:o}),i||r()})),remove(e,t){n=n.filter((i=>i.method.toLowerCase()!==e.toLowerCase()||i.path!==t))},callsPending:()=>n.length>0}}(function(e,t,i=console){return async function(n,r,a){var s;try{const i={method:n};["post","put","patch"].includes(n)&&(i.body=JSON.stringify(a),i.headers={"content-type":"application/json"});const l=await t(e+r,i),o=(null==(s=l.headers.get("Content-Type"))?void 0:s.match(/json/))?await l.json():await l.text();if(l.ok)return o;throw Error(o.message||o)}catch(l){throw i.error(l),l}}}(localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",fetch));var xr;const Nr=function({api:e,logger:t=console,storage:i=localStorage}){return{async createGame(n){_(n),i.setItem("game",JSON.stringify(n));try{e.createGame(n)}catch(r){t.warn("Cannot save new game - trying again later",r)}return n},async loadGame(t){const n=i.getItem("game");if(n){const e=JSON.parse(n);if(e.id===t)return _(e),Xi(e,t)}const r=await e.loadGame(t);return _(r),Xi(r,t)},async saveGame(n){n.prngState=G.state(),i.setItem("game",JSON.stringify(n));try{e.saveGame(n)}catch(r){t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",r)}},async decisionMade(t,i,n){e.decisionMade(t.id,i,n)},async eventOccurred(t,i){e.eventOccurred(t.id,i.id)}}}({api:(xr=Ur,{createGame:e=>xr.add("post","/games",e),loadGame:e=>xr.add("get","/games/"+e,void 0,0),saveGame:e=>(xr.remove("put","/games/"+e.id),xr.add("put","/games/"+e.id,e)),decisionMade:(e,t,i)=>xr.add("post","/games/"+e+"/decisions/"+t,{accepted:i}),eventOccurred:(e,t)=>xr.add("post","/games/"+e+"/events/"+t)})}),Gr=(Kr=Br,_r=Nr,{async startGame(e){const t=en();await _r.createGame(t);const i=nn(t);e.commit("setGameState",{game:t}),e.dispatch("applyEvent",{event:i}),Kr.push("/games/"+t.id)},async loadGame(e,t){try{const i=await _r.loadGame(t.gameId);await _r.saveGame(i),Kr.push("/games/"+i.id+(i.over?"/over":"")),e.commit("setGameState",{game:i})}catch(i){e.dispatch("error",{error:i})}},gameOver(e){var t;e.commit("gameOver",void 0),Kr.push("/games/"+(null==(t=e.state.game)?void 0:t.id)+"/over")},async acceptLaw(e,t){const i=l({},e.state.game),n={lawId:t.lawId,effectiveSince:i.currentYear+1},r=vi(n),a=r.removeLawsWithLabels,s=i.acceptedLaws.map(vi).filter((e=>!(null==a?void 0:a.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)}))))).map((e=>({lawId:e.id,effectiveSince:e.effectiveSince})));i.acceptedLaws=[...s,n];const o=nn(i);await _r.saveGame(i),e.commit("setGameState",{game:i}),e.dispatch("applyEvent",{event:o}),await _r.decisionMade(i,r.id,!0)},async rejectLaw(e,t){const i=l({},e.state.game);i.rejectedLaws=[...i.rejectedLaws,t.lawId],await _r.decisionMade(i,t.lawId,!1),await _r.saveGame(i),e.commit("setGameState",{game:i})},async sitOut(e){const t=l({},e.state.game);await _r.decisionMade(t,"sitOut",!0);const i=nn(t);await _r.saveGame(t),e.commit("setGameState",{game:t}),e.dispatch("applyEvent",{event:i})},async advanceYear(e){const t=l({},e.state.game),i=t.acceptedLaws.map(vi);t.currentYear++,t.values=rn(t,i,t.currentYear),await _r.saveGame(t),e.commit("setGameState",{game:t})},async applyEvent(e,t){if(!t.event)return;const i=l({},e.state.game);await _r.eventOccurred(i,t.event);const n=t.event.apply(i);e.dispatch("applyEffects",{changes:n})},acknowledgeEvent(e,t){const i=l({},e.state.game);i.events.find((e=>e.id===t.id)).acknowledged=!0,_r.saveGame(i),e.commit("setGameState",{game:i})},applyEffects(e,t){const i={dispatch:e.dispatch,values:Tt(e.state.game.values)};Et(i,t.changes);const n=o(l({},e.state.game),{values:i.values});_r.saveGame(n),e.commit("setGameState",{game:n})},setupTour(e){const t=localStorage.getItem("tour")||sn[0].id,i=sn.find((e=>t===e.id));i?e.commit("setTour",{step:i.id,active:!0}):e.dispatch("stopTour")},nextTourStep(e){const t=sn.findIndex((t=>e.state.tour.step===t.id));if(t<0||t==sn.length-1)e.dispatch("stopTour");else{const i=sn[t+1];e.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(e){e.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},async error(e,t){e.commit("error",t)}});var Kr,_r;const jr=Symbol();function Jr(){return L(jr)}const Hr=O({state:{game:void 0,tour:{active:!0,step:"start"}},mutations:ln,actions:Gr,getters:on});function Zr(e,t,...i){for(const n of i){if(e[n]<t[n])return-1;if(e[n]>t[n])return 1}return 0}function Rr(e,t){const i=Tt(e.values);function n(e){return(e>0?"+":"")+e.toFixed(2)}function r(r){const a=function(e){const i=t.find((t=>"modify"===t.type&&t.name===e));return i&&i.condition?i.value:0}(r),s=i[r]-e.values[r];return a&&Math.abs(a-s)<.001?n(a):a?n(a)+" / "+n(s):0!=s?n(s):""}Et({dispatch:()=>{},values:i},t);return Wt.map((t=>{return{id:t.name,unit:t.unit,value:(i=t.name,e.values[i].toFixed(2)),effect:r(t.name),class:t.writable?"writable":"calculated"};var i}))}var $r=h({props:{citation:{type:Object,required:!0},showInternals:{type:Boolean,default:!1}},computed:{href(){return this.citation.url.toString()},title(){return this.citation.title||this.citation.url.toString()}}});const Qr={key:0},qr=C(". "),Yr={key:1},Xr={key:2},ea=C("Bemerkung: "),ta=C(". "),ia={key:3},na=C("Internes: "),ra=C(". "),aa={key:4},sa=C(". "),la={key:5},oa=C(". "),ua={key:6},ca=C(". ");$r.render=function(e,t,i,n,r,a){return k(),b("p",null,[e.citation.authors?(k(),b("span",Qr,w(e.citation.authors+e.citation.dateString())+". ",1)):v("",!0),f("a",{target:"_blank",rel:"noreferrer noopener",href:e.href},'"'+w(e.title)+'"',9,["href"]),qr,e.citation.publisher?(k(),b("span",Yr,w(e.citation.publisher)+". ",1)):v("",!0),e.citation.comment?(k(),b("span",Xr,[ea,f("span",{innerHTML:e.citation.comment},null,8,["innerHTML"]),ta])):v("",!0),e.showInternals&&e.citation.internalComment?(k(),b("span",ia,[na,f("span",{innerHTML:e.citation.internalComment},null,8,["innerHTML"]),ra])):v("",!0),e.citation.referringUrl?(k(),b("span",aa,[f("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,["href"]),sa])):v("",!0),e.citation.archiveUrl?(k(),b("span",la,[f("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,["href"]),oa])):v("",!0),e.citation.localCopy?(k(),b("span",ua,[f("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,["href"]),ca])):v("",!0)])};var da=h({props:{simulatedValues:{type:Array,required:!0},paramId:{type:String,required:!0}},setup:(e,t)=>({chartOptions:W((()=>({chart:{id:e.paramId+"-withLawEffects",animations:{enabled:!1}},xaxis:{categories:tn,labels:{rotate:-90}}}))),series:W((()=>[{name:"Simulated "+e.paramId,data:e.simulatedValues.map((t=>Math.round(t[e.paramId])))}]))})});da.render=function(e,t,i,n,r,a){const s=P("apexchart");return k(),b("div",null,[f("div",null,w(e.paramId),1),f(s,{type:"bar",options:e.chartOptions,series:e.series},null,8,["options","series"])])};const ha=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"DaemmungAltbau4Percent",effectiveSince:2022},{lawId:"ForschungEmissionsfreieZementproduktion",effectiveSince:2023},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024},{lawId:"ForschungEmissionsfreieStahlproduktion",effectiveSince:2024},{lawId:"FernverkehrModernisieren",effectiveSince:2025},{lawId:"NahverkehrModernisieren",effectiveSince:2026},{lawId:"FernverkehrVerbindungenAusbauen",effectiveSince:2026},{lawId:"NahverkehrAusbauen",effectiveSince:2026},{lawId:"LadeinfrastrukturAusbauen",effectiveSince:2026},{lawId:"NahverkehrKostenlos",effectiveSince:2027},{lawId:"DienstwagenPrivilegAbgeschaffen",effectiveSince:2027},{lawId:"ElektromobilitaetFoerdern",effectiveSince:2027},{lawId:"WasserstoffmobilitaetFoerdern",effectiveSince:2027}]}];var ga=h({directives:{ClickAway:E},components:{Citation:$r,PeekChart:da},setup(){const e=Jr();return{store:e,game:W((()=>e.state.game)),gameYears:tn,presets:ha}},data:()=>({lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1,simulatedLaws:[],presetsOpen:!1}),methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){this.unselect(),this.lawSelected=e},selectEvent(e){this.unselect(),this.eventSelected=e},selectParam(e){this.unselect(),this.paramSelected=e},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0},dragStart(e,t){const{lawId:i,year:n}=t;e.dataTransfer&&(e.dataTransfer.dropEffect="link",i&&e.dataTransfer.setData("lawId",i),n&&e.dataTransfer.setData("year",n.toString()))},onDrop(e,t){const{lawId:i,year:n}=t;if(e.dataTransfer)if(n){const t=e.dataTransfer.getData("lawId"),i=bi.find((e=>e===t));i&&this.simulateLaw(i,n)}else if(i){const t=e.dataTransfer.getData("year"),n=this.gameYears.find((e=>e==Number(t)));n&&this.simulateLaw(i,n)}},simulateLaw(e,t){this.simulatedLaws=this.simulatedLaws.filter((t=>t.lawId!=e)).concat({lawId:e,effectiveSince:t})},presetsToggle(){this.presetsOpen=!this.presetsOpen},presetsClose(){this.presetsOpen=!1},loadPreset(e){this.simulatedLaws=e.laws}},computed:{startYearOfSelected(){if(!this.lawSelected||!this.game)return 2021;const e=this.game.acceptedLaws.find((e=>e.lawId===this.lawSelected));return e?e.effectiveSince:2021},selectedLaw(){return fi.find((e=>e.id===this.lawSelected))},selectedEvent(){return qi.find((e=>e.id===this.eventSelected))},selectedParam(){return this.paramSelected?kt[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof Ve?e:void 0},cParam(){const e=this.selectedParam;return e instanceof Te?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},effectsOfSelected(){if(!this.lawSelected||!this.game)return[];this.game;const e=this.selectedLaw;return e?e.effects(this.game,this.startYearOfSelected,this.game.currentYear):[]},sortedValues(){return this.game?Rr(this.game,this.effectsOfSelected):[]},sortedLaws(){return this.game?function(e,t,i,n){const r=e.proposedLaws,a=e.acceptedLaws.map((e=>e.lawId)),s=e.rejectedLaws;return n.map((t=>{return{id:t.id,priority:t.priority(e),state:(i=t.id,a.includes(i)?"a":r.includes(i)?"p":s.includes(i)?"r":"x")};var i})).sort(((e,n)=>Zr(e,n,t,"id")*i)).map((e=>o(l({},e),{priority:e.priority.toFixed(2)})))}(this.game,this.lawsSortCol,this.lawsSortDir,fi):[]},sortedEvents(){return this.game?(e=this.game,t=this.eventsSortCol,i=this.eventsSortDir,qi.map((t=>({id:t.id,probability:t.probability(e)}))).sort(((e,n)=>Zr(e,n,t,"id")*i)).map((e=>o(l({},e),{probability:(100*e.probability).toFixed(2)})))):[];var e,t,i},combinedLaws(){var e;const t=this.simulatedLaws.map((e=>o(l({},e),{cls:"simulated"})));return((null==(e=this.game)?void 0:e.acceptedLaws)||[]).filter((e=>!t.some((t=>t.lawId===e.lawId)))).map((e=>o(l({},e),{cls:"accepted"}))).concat(t)},lawsToSimulate(){return this.combinedLaws.map((e=>vi(e)))},simulatedValues(){const e=this.lawsToSimulate,t=en();return this.gameYears.map((i=>{for(;i>t.currentYear;)t.currentYear++,t.values=rn(t,e,t.currentYear);return t.values}))},lawsInYear(){return e=>this.combinedLaws.filter((t=>t.effectiveSince===e))}}});const ma=y("data-v-8db03eb8");m("data-v-8db03eb8");const pa={class:"peekData"},ba={class:"Menu"},fa=C("  "),va=C("  "),wa=C("  "),ya=C("  "),ka=C("  "),Sa=C("  "),za={key:0,class:"Details sidebyside"},Pa={key:1,class:"Details sidebyside"},Da={class:"Title"},Aa={class:"Description"},Wa=f("div",{class:"SectionHead"},"Details:",-1),Va=f("div",{class:"SectionHead"},"Internes:",-1),Ta=f("div",{class:"SectionHead"},"Referenzen:",-1),La={key:2,class:"Details sidebyside"},Oa={class:"Title"},Ca={class:"Description"},Ea=f("div",{class:"SectionHead"},"Details:",-1),Fa=f("div",{class:"SectionHead"},"Internes:",-1),Ia=f("div",{class:"SectionHead"},"Referenzen:",-1),Ma={key:3,class:"Details sidebyside"},Ba={class:"Title"},Ua={key:0},xa={key:1},Na={key:2},Ga=f("div",{class:"SectionHead"},"Details:",-1),Ka=f("div",{class:"SectionHead"},"Internes:",-1),_a=f("div",{class:"SectionHead"},"Referenzen:",-1),ja={key:4,class:"paramsList sidebyside"},Ja={class:"numbercol"},Ha={class:"effcol"},Za={key:5,class:"lawList sidebyside"},Ra={class:"priocol"},$a={key:6,class:"eventList sidebyside"},Qa={class:"priocol"},qa={key:7,class:"yearList sidebyside"},Ya=f("a",null,"Presets",-1),Xa={class:"dropdown"};p();const es=ma(((e,t,i,n,r,a)=>{var s;const l=P("PeekChart"),o=P("Citation"),u=I("click-away");return k(),b("details",pa,[f("summary",{onClick:t[1]||(t[1]=t=>e.unselect()),class:"clickable"},"Peek"),f("div",ba,[f("a",{onClick:t[2]||(t[2]=t=>e.showCharts=!e.showCharts),class:["clickable",e.showCharts?"selected":""]},"Charts",2),fa,f("a",{onClick:t[3]||(t[3]=t=>e.showDetails=!e.showDetails),class:["clickable",e.showDetails?"selected":""]},"Details",2),va,f("a",{onClick:t[4]||(t[4]=t=>e.showParams=!e.showParams),class:["clickable",e.showParams?"selected":""]},"Params",2),wa,f("a",{onClick:t[5]||(t[5]=t=>e.toggleLawList()),class:["clickable",e.showLaws?"selected":""]},"Laws",2),ya,f("a",{onClick:t[6]||(t[6]=t=>e.toggleEventList()),class:["clickable",e.showEvents?"selected":""]},"Events",2),ka,f("a",{onClick:t[7]||(t[7]=t=>e.showYears=!e.showYears),class:["clickable",e.showYears?"selected":""]},"Years",2),Sa]),e.showCharts?(k(),b("div",za,[f(l,{simulatedValues:e.simulatedValues,paramId:"co2emissions"},null,8,["simulatedValues"]),f(l,{simulatedValues:e.simulatedValues,paramId:"popularity"},null,8,["simulatedValues"]),f(l,{simulatedValues:e.simulatedValues,paramId:"stateDebt"},null,8,["simulatedValues"]),f(l,{simulatedValues:e.simulatedValues,paramId:"co2budget"},null,8,["simulatedValues"])])):v("",!0),e.selectedLaw&&e.showDetails?(k(),b("div",Pa,[f("div",Da,w(e.selectedLaw.title),1),f("div",Aa,w(e.selectedLaw.description),1),Wa,f("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,["innerHTML"]),Va,f("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,["innerHTML"]),Ta,(k(!0),b(S,null,z(e.citationsOfLaw,((e,t)=>(k(),b(o,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):v("",!0),e.selectedEvent&&e.showDetails?(k(),b("div",La,[f("div",Oa,w(e.selectedEvent.title),1),f("div",Ca,w(e.selectedEvent.description),1),Ea,f("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,["innerHTML"]),Fa,f("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,["innerHTML"]),Ia,(k(!0),b(S,null,z(null==(s=e.selectedEvent)?void 0:s.citations,((e,t)=>(k(),b(o,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):v("",!0),e.selectedParam&&e.showDetails?(k(),b("div",Ma,[f("div",Ba,w(e.paramSelected)+" ["+w(e.selectedParam.unit)+"]",1),e.wParam?(k(),b("div",Ua,"Initial value: "+w(e.wParam.initialValue)+" "+w(e.wParam.unit),1)):v("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(k(),b("div",xa," Should initially be: "+w(e.cParam.shouldInitiallyBe)+" "+w(e.cParam.unit),1)):v("",!0),e.cParam?(k(),b("div",Na," Calculation: "+w(e.cParam.valueGetter),1)):v("",!0),Ga,f("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,["innerHTML"]),Ka,f("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,["innerHTML"]),_a,(k(!0),b(S,null,z(e.selectedParam.citations,((e,t)=>(k(),b(o,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):v("",!0),e.showParams?(k(),b("div",ja,[f("table",null,[(k(!0),b(S,null,z(e.sortedValues,(t=>(k(),b("tr",{key:t.id,class:["clickable",t.class],onClick:i=>e.selectParam(t.id)},[f("td",null,w(t.id),1),f("td",Ja,w(t.value),1),f("td",Ha,w(t.effect),1),f("td",null,w(t.unit),1)],10,["onClick"])))),128))])])):v("",!0),e.showLaws?(k(),b("div",Za,[f("table",null,[f("tr",null,[f("th",{onClick:t[8]||(t[8]=t=>e.sortLaws("state")),class:"clickable"},"S"),f("th",{onClick:t[9]||(t[9]=t=>e.sortLaws("id")),class:"clickable"},"ID"),f("th",{onClick:t[10]||(t[10]=t=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(k(!0),b(S,null,z(e.sortedLaws,(i=>(k(),b("tr",{key:i.id,class:["clickable",i.state],onClick:t=>e.selectLaw(i.id),draggable:"true",onDragstart:t=>e.dragStart(t,{lawId:i.id}),onDrop:M((t=>e.onDrop(t,{lawId:i.id})),["prevent"]),onDragover:t[11]||(t[11]=M((()=>{}),["prevent"])),onDragenter:t[12]||(t[12]=M((()=>{}),["prevent"]))},[f("td",null,w(i.state),1),f("td",null,w(i.id),1),f("td",Ra,w(i.priority),1)],42,["onClick","onDragstart","onDrop"])))),128))])])):v("",!0),e.showEvents?(k(),b("div",$a,[f("table",null,[f("tr",null,[f("th",{onClick:t[13]||(t[13]=t=>e.sortEvents("id")),class:"clickable"},"ID"),f("th",{onClick:t[14]||(t[14]=t=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(k(!0),b(S,null,z(e.sortedEvents,(t=>(k(),b("tr",{key:t.id,class:"clickable",onClick:i=>e.selectEvent(t.id)},[f("td",null,w(t.id),1),f("td",Qa,w(t.probability),1)],8,["onClick"])))),128))])])):v("",!0),e.showYears?(k(),b("div",qa,[f("div",null,[F(f("span",{onClick:t[15]||(t[15]=(...t)=>e.presetsToggle&&e.presetsToggle(...t)),class:["clickable",{open:e.presetsOpen}]},[Ya,f("ul",Xa,[(k(!0),b(S,null,z(e.presets,(t=>(k(),b("li",{key:t.name,onClick:i=>e.loadPreset(t)},w(t.name),9,["onClick"])))),128))])],2),[[u,e.presetsClose]])]),f("table",null,[(k(!0),b(S,null,z(e.gameYears,(i=>(k(),b(S,{key:i},[f("tr",{draggable:"true",onDragstart:t=>e.dragStart(t,{year:i}),onDrop:M((t=>e.onDrop(t,{year:i})),["prevent"]),onDragover:t[16]||(t[16]=M((()=>{}),["prevent"])),onDragenter:t[17]||(t[17]=M((()=>{}),["prevent"]))},[f("th",null,w(i),1)],40,["onDragstart","onDrop"]),(k(!0),b(S,null,z(e.lawsInYear(i),(({lawId:i,cls:n})=>(k(),b("tr",{key:i,class:n,draggable:"true",onDragstart:t=>e.dragStart(t,{lawId:i}),onDrop:M((t=>e.onDrop(t,{lawId:i})),["prevent"]),onDragover:t[18]||(t[18]=M((()=>{}),["prevent"])),onDragenter:t[19]||(t[19]=M((()=>{}),["prevent"]))},[f("td",null,w(i),1)],42,["onDragstart","onDrop"])))),128))],64)))),128))])])):v("",!0)])}));ga.render=es,ga.__scopeId="data-v-8db03eb8";var ts=h({components:{PeekInside:ga},setup:()=>({store:Jr(),devMode:"true"===localStorage.getItem("devMode")}),methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,i=Math.min(e/800,t/1e3),n=(t-1e3*i)/2;document.documentElement.style.setProperty("--scale",`${i}`),document.documentElement.style.setProperty("--translateX",`${n}px`)}},mounted(){setTimeout(this.updateStyle,0),window.addEventListener("resize",this.updateStyle)}});const is={class:"perspective"},ns={class:"peek"};ts.render=function(e,t,i,n,r,a){const s=P("router-view"),l=P("PeekInside");return k(),b(S,null,[f("div",is,[f(s)]),f("div",ns,[e.devMode?(k(),b(l,{key:0})):v("",!0)])],64)};const rs=B(ts);rs.use(Hr,jr),rs.use(Br),rs.use(U),rs.mount("#app");
