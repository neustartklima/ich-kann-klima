var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,l=(e,t)=>{for(var i in t||(t={}))r.call(t,i)&&s(e,i,t[i]);if(n)for(var i of n(t))a.call(t,i)&&s(e,i,t[i]);return e},o=(e,n)=>t(e,i(n));import{s as u,a as c,v as d,d as h,m as g,p as m,b as p,c as b,e as f,f as v,t as w,w as y,o as k,F as S,r as z,g as P,h as D,i as A,j as W,k as V,l as T,u as L,n as O,q as C,x as E,y as F,V as B}from"./vendor.7cd82c14.js";function M(e){return Object.entries(e).map((([e,t])=>o(l({},t),{id:e.replace(/\W/g,"_")})))}var I={title:"Abstandsregeln für Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erhöht wird. Das führte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply:()=>[]};let U=u("",{state:!0}),x=()=>Math.abs(U());function N(e){U=u(e.id,{state:e.prngState})}var G={title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bewährt. Wir lassen sie so, wie sie sind.",effects:()=>[],priority:e=>x()};const _=new c.exports.Converter;function K(e){return e>0?[...Array(e)].map(((e,t)=>t)):[]}function j(e,t){const i=e-t-1;return[...K(t),Math.max(t,i),...K(i).reverse()]}function J(e,...t){let i=e.map(((e,i)=>e+(t[i]||""))).join("").split("\n");0===i[0].length&&i.shift();const n=i[0].match(/^(\s+)/);return n&&!i.filter((e=>e.trim())).some((e=>!e.startsWith(n[1])))&&(i=i.map((e=>e.replace(n[1],"")))),_.makeHtml(i.join("\n"))}function H(e){return t=>!e(t)}const Z=new Intl.DateTimeFormat("de-DE");class R{constructor(e){this.url=new URL(e.url),this.title=e.title,this.publisher=e.publisher,this.authors=e.authors,this.date=e.date?new Date(e.date):void 0,this.comment=e.comment,this.internalComment=e.internalComment,this.localCopy=e.localCopy,this.referringUrl=e.referringUrl?new URL(e.referringUrl):void 0,this.archiveUrl=e.archiveUrl?new URL(e.archiveUrl):void 0,this.archiveNotPossible=e.archiveNotPossible}dateString(){const e=this.date;return e?" ("+Z.format(e)+")":""}toString(){return[this.authors?this.authors+this.dateString():void 0,this.title?'"'+this.title+'"':void 0,this.url,this.publisher].filter((e=>e)).join(", ")}}function $(e){const t=e.publisher||e.authors;return`[[${null!=t?t+": ":""}${e.title||e.url.toString()}](${e.url.toString()})]`}const Q=new R({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),q=new R({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),Y=new R({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"}),X=new R({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineralölsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),ee=new R({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile für wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),te=new R({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-°C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),ie=new R({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schlüsselergebnisse der Studie des Wuppertal Instituts für Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-°C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${$(te)}.`});te.comment=J`Zusammengefasst in ${$(ie)}.`;const ne=new R({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahreschätzung der deutschen Treibhausgas-Emissionen für das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),re=new R({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen für das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),ae=new R({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enthält CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] für mehrere Verkehrsmittel"}),se=new R({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),le=new R({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Straßengüterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),oe=new R({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enthält Personenkilometer-Jahreswerte für mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),ue=new R({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung ÖPNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),ce=new R({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),de=new R({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle für 160g CO2 pro kWh Fernwärme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new R({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren für Fernwärme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle für 160g CO2 pro kWh Fernwärme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const he=new R({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),ge=new R({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),me=new R({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle wäre besser."}),pe=new R({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bevölkerung nach Nationalität und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),be=new R({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur für Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),fe=new R({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische Ämter des Bundes und der Länder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new R({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const ve=new R({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgemäß - Interview mit Prof. Stefan Gössling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""}),we=new R({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),ye=new R({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),ke=new R({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),Se=new R({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten für die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class ze{constructor(e){this.unit=e.unit,this.citations=e.citations?e.citations:[],this.details=e.details?e.details:"",this.internals=e.internals?e.internals:""}citationsDesc(){return this.citations.map((e=>e.toString())).join("; ")}}const Pe={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class De extends ze{constructor(e){super(e),this.writable=!0,this.initialValue=e.initialValue,this.applyBounds=Pe[e.unit]}}class Ae extends ze{constructor(e){super(e),this.writable=!1,this.valueGetter=e.valueGetter,this.shouldInitiallyBe=e.shouldInitiallyBe}}const We=new De({unit:"MioTons",initialValue:6700,citations:[Q],details:J`

  `,internals:J`

  `}),Ve=new De({unit:"MioTons",initialValue:186.793,citations:[ne],details:J`

  `,internals:J`

  `}),Te=new Ae({unit:"MioTons",valueGetter:e=>e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4,shouldInitiallyBe:159.696,citations:[ne,le],details:J`

  `,internals:J`
    ${$(ne)}: 159.696 as MioTons

    ${$(le)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Le=new Ae({unit:"MioTons",valueGetter:e=>e.co2emissionsStreetVehicles+65*e.publicLocalCapacity/1e6+32*e.publicNationalCapacity/1e6+222*e.airDomesticUsage/1e6+1.641,citations:[ae,ne],details:J`

  `,internals:J`
    ${$(ae)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${$(ne)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${$(ne)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${$(ne)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),Oe=new Ae({unit:"MioTons",valueGetter:e=>0*e.buildingsSourceBio+.247*e.buildingsSourceGas+.318*e.buildingsSourceOil+.16*e.buildingsSourceTele,citations:[ne,ce],details:J`

  `,internals:J`
    TODO: #91 Gibt es hier bessere Quellen?

    ${$(ce)}: 247g CO2 pro kWh Erdgas.

    ${$(ce)}: 318g CO2 pro kWh Erdöl.

    ${$(de)}: 160g CO2 pro kWh Fernwärme.

    ${$(ne)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),Ce=new De({unit:"MioTons",initialValue:67.936,citations:[ne],details:J`

  `,internals:J`

  `}),Ee=new De({unit:"MioTons",initialValue:9.243,citations:[ne],details:J`

  `,internals:J`

  `}),Fe=new Ae({unit:"MioTons",valueGetter:e=>.399*e.electricityGas+.058*e.electricitySolar+.005*e.electricityWind+.02*e.electricityWater+.835*e.electricityHardCoal+1.137*e.electricityBrownCoal+.03*e.electricityBiomass+.005*e.electricityNuclear,citations:[he,ne],details:J`

  `,internals:J`
    ${$(he)}:
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
    - Diskrepanz zu ${$(ge)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${$(ne)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),Be=new Ae({unit:"MioTons",valueGetter:e=>e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers,details:J`

  `,internals:J`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${$(ne)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[re]}),Me=new De({unit:"TWh",initialValue:480.54,citations:[q],details:J`

  `,internals:J`

  `}),Ie=new De({unit:"Percent",initialValue:50,citations:[],details:J`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:J`

  `}),Ue=new De({unit:"TWh",initialValue:51.42,citations:[q],details:J`

  `,internals:J`

  `}),xe=new De({unit:"TWh",initialValue:131.85,citations:[q],details:J`

  `,internals:J`

  `});const Ne=new Ae({unit:"TWh",valueGetter(e){const t=xe.initialValue,i=e.electricityGridQuality,n=function(e,t){const i=e.value-t.value;return n=>e.result*(n-t.value)/i-t.result*(n-e.value)/i}({value:50,result:t},{value:100,result:e.electricityDemand})(i);return Math.min(n,e.electricityWind)},shouldInitiallyBe:xe.initialValue,citations:[],details:J`
The electrical energy produced by wind and not impaired by poor quality of the grid.
  `,internals:J`

  `}),Ge=new De({unit:"TWh",initialValue:6,citations:[q],details:J`

  `,internals:J`

  `}),_e=new De({unit:"Percent",initialValue:100,citations:[ke],details:J`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),Ke=new De({unit:"TWh",initialValue:14.99,citations:[q],details:J`

  `,internals:J`

  `}),je=new De({unit:"TWh",initialValue:43.19,citations:[q],details:J`

  `,internals:J`

  `}),Je=new De({unit:"TWh",initialValue:60.91,citations:[q],details:J`

  `,internals:J`

  `}),He=new De({unit:"TWh",initialValue:35.46,citations:[q],details:J`

  `,internals:J`

  `}),Ze=new De({unit:"TWh",initialValue:82.13,citations:[q],details:J`

  `,internals:J`

  `}),Re=new Ae({unit:"TWh",valueGetter:e=>e.electricityHardCoal+e.electricityBrownCoal,details:J`

  `,internals:J`

  `}),$e=new Ae({unit:"TWh",valueGetter:e=>e.electricityDemand-e.electricitySolar-e.electricityWindUsable-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear,details:J`

  `,internals:J`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),Qe=new De({unit:"GramPerPsgrKm",initialValue:160,citations:[ae],details:J`

  `,internals:J`
    ${$(ae)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),qe=new De({unit:"MioPsgrKm",initialValue:917e3,citations:[oe],details:J`

  `,internals:J`

  `}),Ye=new De({unit:"Percent",initialValue:.5,citations:[me],details:J`

  `,internals:J`
    Die verschiedenen Zahlen in ${$(me)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),Xe=new De({unit:"MioPsgrKm",initialValue:112600,citations:[oe],details:J`

  `,internals:J`

  `}),et=new De({unit:"MioPsgrKm",initialValue:112600,citations:[oe],details:J`

  `,internals:J`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),tt=new De({unit:"MioPsgrKm",initialValue:67300,citations:[oe],details:J`

  `,internals:J`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),it=new De({unit:"MioPsgrKm",initialValue:67300,citations:[oe],details:J`

  `,internals:J`
Siehe \`publicLocalCapacity\`.
  `}),nt=new De({unit:"MioPsgrKm",initialValue:10100,citations:[oe],details:J`

  `,internals:J`

  `}),rt=new De({unit:"MioPsgrKm",initialValue:61700,citations:[oe],details:J`

  `,internals:J`

  `}),at=new Ae({unit:"MioPsgrKm",valueGetter:e=>e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage,shouldInitiallyBe:1168700,citations:[oe],details:J`

  `,internals:J`

  `}),st=new De({unit:"TWh",initialValue:226,citations:[],details:J`

  `,internals:J`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),lt=new De({unit:"TWh",initialValue:544,citations:[],details:J`

  `,internals:J`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),ot=new Ae({unit:"TWh",valueGetter:e=>e.buildingsPrivateDemand+e.buildingsIndustryDemand,shouldInitiallyBe:770,citations:[],details:J`

  `,internals:J`
    TODO: #78 Quelle ${$(Se)} gibt diese Zahlen nicht her.
  `}),ut=new De({unit:"TWh",initialValue:130,citations:[],details:J`

  `,internals:J`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),ct=new De({unit:"TWh",initialValue:219,citations:[],details:J`

  `,internals:J`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),dt=new De({unit:"TWh",initialValue:58,citations:[],details:J`

  `,internals:J`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),ht=new Ae({unit:"TWh",valueGetter:e=>e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele),citations:[],details:J`

  `,internals:J`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${$(Se)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),gt=new De({unit:"Percent",initialValue:50,citations:[],details:J`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:J`

  `}),mt=new De({unit:"TsdPeople",initialValue:83155.031,citations:[pe],details:J`

  `,internals:J`
Anfangswert ist der Stand 31.12.2020.
  `}),pt=new De({unit:"TsdPeople",initialValue:2695,citations:[be],details:J`

  `,internals:J`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),bt=new De({unit:"MrdEuro",initialValue:3332,citations:[fe],details:J`

  `,internals:J`
Anfangswert ist das BIP 2020.
  `}),ft=new De({unit:"MrdEuro",initialValue:1899,citations:[],details:J`

  `,internals:J`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),vt={co2budget:We,co2emissionsIndustry:Ve,co2emissionsStreetVehicles:Te,co2emissionsMobility:Le,co2emissionsAgriculture:Ce,co2emissionsBuildings:Oe,co2emissionsOthers:Ee,co2emissionsEnergy:Fe,co2emissions:Be,electricityDemand:Me,electricityGridQuality:Ie,electricitySolar:Ue,electricityWind:xe,electricityWindUsable:Ne,electricityWindOnshoreMaxNew:Ge,electricityWindEfficiency:_e,electricityWater:Ke,electricityBiomass:je,electricityNuclear:Je,electricityHardCoal:He,electricityBrownCoal:Ze,electricityCoal:Re,electricityGas:$e,carEmissionFactor:Qe,carUsage:qe,carRenewablePercentage:Ye,publicLocalUsage:Xe,publicLocalCapacity:et,publicNationalUsage:tt,publicNationalCapacity:it,airDomesticUsage:nt,airIntlUsage:rt,passengerTransportUsage:at,buildingsIndustryDemand:st,buildingsPrivateDemand:lt,buildingsDemand:ot,buildingsSourceBio:ut,buildingsSourceOil:ct,buildingsSourceTele:dt,buildingsSourceGas:ht,popularity:gt,numberOfCitizens:mt,unemployment:pt,gdp:bt,stateDebt:ft},wt=Object.entries(vt).filter((e=>e[1]instanceof De)).map((e=>e)).reduce(((e,t)=>(e[t[0]]=t[1],e)),{}),yt=Object.entries(vt).filter((e=>e[1]instanceof Ae)).map((e=>e)).reduce(((e,t)=>(e[t[0]]=t[1],e)),{});class kt extends De{constructor(e,t){super(e),this.name=t}}const St=Object.entries(wt).map((e=>new kt(e[1],e[0])));class zt extends Ae{constructor(e,t){super(e),this.name=t}}Object.entries(yt).map((e=>new zt(e[1],e[0])));const Pt=Object.entries(vt).map((e=>e[1]instanceof De?new kt(e[1],e[0]):new zt(e[1],e[0]))),Dt=St.reduce(((e,t)=>o(l({},e),{[t.name]:t.initialValue})),{});function At(e){const t=l({},e);return Object.entries(yt).forEach((e=>Object.defineProperty(t,e[0],{get:()=>e[1].valueGetter(t)}))),t}function Wt(e,t){return{type:"dispatch",condition:!0,if(e){return this.condition=e,this},apply(i){this.condition&&i.dispatch(e,t)}}}function Vt(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(e){return this.percent=e,this},byValue(e){return this.value=e,this},setValue(e){return this.absolute=e,this},if(e){return this.condition=e,this},getOldNew(e){const t=this.name,i=e[t];if(!this.condition)return{oldVal:i,newVal:i};const n=vt[t],r=null!=this.absolute?this.absolute:i+(this.value||i*this.percent/100);return{oldVal:i,newVal:n.applyBounds(r)}},getChange(e){if(!this.condition)return 0;const{oldVal:t,newVal:i}=this.getOldNew(e);return i-t},apply(e){if(this.condition){const{newVal:t}=this.getOldNew(e.values);e.values[this.name]=t}return this}}}function Tt(e,t){if(vt[e].unit!=vt[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(e){return this.percent=e,this},byValue(e){return this.value=e,this},if(e){return this.condition=e,this},getEffect(e){const t=e[this.to],i=e[this.from];if(!this.condition)return{oldTo:t,oldFrom:i,newTo:t,newFrom:i};const n=vt[this.to],r=vt[this.from],a=this.value||t*this.percent/100,s=n.applyBounds(t+a)-t,l=-r.applyBounds(i-s)+i;return{oldTo:t,newTo:t+l,oldFrom:i,newFrom:i-l}},apply(e){if(this.condition){const{newTo:t,newFrom:i}=this.getEffect(e.values);e.values[this.to]=t,e.values[this.from]=i}return this}}}function Lt(e,t){t.filter((e=>e.condition)).forEach((t=>t.apply(e)))}var Ot={title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,i){const n=i-t,r=n<18?4.3/18:0,a=(10-n)/55,s=Math.max(50*a,0);return[Vt("electricityHardCoal").setValue(0),Vt("electricityBrownCoal").setValue(0),Vt("stateDebt").byValue(2.5-r),Vt("unemployment").byValue(s)]},priority:e=>e.values.electricityCoal/e.values.electricityDemand<=.1?0:fi(1e4,0,e.values.unemployment),citations:[],details:J`

  `,internals:J`
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
  `},Ct={title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effects:()=>[Vt("stateDebt").byValue(-37),Vt("electricityHardCoal").byPercent(-10),Vt("electricityBrownCoal").byPercent(-5),Vt("electricityWind").byValue(5),Vt("electricitySolar").byValue(3),Vt("electricityWater").byValue(.5)],priority:e=>fi(2050,2021,e.currentYear)};const Et=At(Dt).electricityGas;var Ft={title:"Kernenergienutzung verlängern",description:"Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effects:()=>[Vt("electricityNuclear").setValue(104.3),Vt("stateDebt").byValue(-2.5),Vt("popularity").byValue(-4)],priority:e=>fi(Et,1.1*Et,e.values.electricityGas)},Bt={title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,i){const n={2021:60.45,2022:30.21}[i]||0;return[Vt("electricityNuclear").setValue(n)]},priority:e=>0},Mt={title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren für den Ausbau des Stromnetzes",effects:(e,t,i)=>[Vt("popularity").byValue(-3).if(t===i),Vt("electricityGridQuality").byValue(1)],priority:e=>fi(70,27,yi(e)),citations:[],details:J`

  `,internals:J`
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
  `},It={title:"Netzausbau fördern",description:"Ausbau des Stromnetzes mit Steuermitteln fördern",effects:(e,t,i)=>[Vt("popularity").byValue(-1).if(t===i),Vt("stateDebt").byValue(2),Vt("electricityGridQuality").byValue(5).if(wi(e,"NetzausbauErleichtern"))],priority:e=>fi(70,27,yi(e)),citations:[],details:J`

  `,internals:J`
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
  `},Ut={title:"Stromspeicherung erleichtern",description:"Bürokratische Hürden für den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effects:(e,t,i)=>[Vt("electricityGridQuality").byValue(.2)],priority:e=>fi(80,45,e.values.electricityGridQuality),citations:[],details:J`

  `,internals:J`
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
  `},xt={title:"Stromspeicherung fördern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln fördern. 2 Mrd € pro Jahr.",effects(e,t,i){const n=i>=t+(wi(e,"StromspeicherungErleichtern")?0:5),r=wi(e,"ForschungUndEntwicklungStromspeicherung",3);return[Vt("stateDebt").byValue(1),Vt("popularity").byValue(.2).if(n),Vt("stateDebt").byValue(1).if(n),Vt("electricityGridQuality").byValue(2).if(n),Vt("electricityGridQuality").byValue(2).if(r),Vt("electricityGridQuality").byValue(2).if(n&&r)]},priority:e=>fi(80,45,e.values.electricityGridQuality),citations:[],details:J`

  `,internals:J`
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
  `},Nt={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit vergünstigten Krediten gefördert.",effects(e,t,i){const n=i-t>2;return[Vt("stateDebt").byValue(.5),Vt("buildingsSourceBio").byPercent(-1).if(n),Vt("buildingsSourceOil").byPercent(-1).if(n),Vt("buildingsSourceTele").byPercent(-1).if(n),Vt("buildingsPrivateDemand").byPercent(-1).if(n)]},priority:e=>fi(15,40,e.values.co2emissionsBuildings/e.values.co2emissions*100)},Gt={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gefördert.",effects(e,t,i){const n=i-t>2;return[Vt("stateDebt").byValue(1),Vt("buildingsSourceBio").byPercent(-2).if(n),Vt("buildingsSourceOil").byPercent(-2).if(n),Vt("buildingsSourceTele").byPercent(-2).if(n),Vt("buildingsPrivateDemand").byPercent(-2).if(n),Vt("popularity").byValue(5).if(n)]},priority:e=>fi(15,40,e.values.co2emissionsBuildings/e.values.co2emissions*100)},_t={title:"Dämmung von Wohngebäuden sehr stark fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungsplätze im Handwerk geschaffen durch einen Zuschuss von 500€ pro Monat, damit der zu erwartende Bauboom bewältigt werden kann.",effects(e,t,i){const n=i-t,r=n>=2;return[Vt("stateDebt").byValue(3),Vt("buildingsSourceBio").byPercent(-4).if(r),Vt("buildingsSourceOil").byPercent(-4).if(r),Vt("buildingsSourceTele").byPercent(-4).if(r),Vt("buildingsPrivateDemand").byPercent(-4).if(r),Vt("popularity").byValue(10).if(1===n),Vt("popularity").byValue(5).if(r)]},priority:e=>fi(15,40,e.values.co2emissionsBuildings/e.values.co2emissions*100),citations:[],details:J`

  `,internals:J`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `},Kt={title:"Dämmung von Wohngebäuden abschaffen",description:"Wir geben den Bürgern die Freiheit zurück, selbst zu entscheiden, ob sie ihr Haus dämmen wollen und lassen die Förderung auslaufen",effects:()=>[Vt("stateDebt").byValue(-.5),Vt("buildingsSourceBio").byPercent(-.5),Vt("buildingsSourceOil").byPercent(-.5),Vt("buildingsSourceTele").byPercent(-.5),Vt("buildingsPrivateDemand").byPercent(-.5)],priority(e){const t=function(e,t){const i=e.sort(((e,t)=>t.effectiveSince-e.effectiveSince)).find((e=>t.test(e.lawId)));return null==i?void 0:i.lawId}(e.acceptedLaws,/^DaemmungAltbau/);if(!t||"DaemmungAltbauAbschaffen"===t)return 0;return fi(15,40,e.values.co2emissionsBuildings/e.values.co2emissions*100)}},jt={title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",effects(e,t,i){const n=e.values.publicLocalCapacity/e.values.publicLocalUsage*100,r=i-t;return[Vt("stateDebt").byValue(3),Vt("publicLocalCapacity").byPercent(1),Tt("publicLocalUsage","carUsage").byPercent(1).if(n>=105),Vt("popularity").byValue(2).if(r>=5)]},priority:e=>fi(150,80,e.values.publicLocalCapacity/e.values.publicLocalUsage*100),citations:[ue],details:J`

  `,internals:J`
    # Happy Path 18

    # Folgen

    - Der Staatshaushalt wird jährlich mit 3 Mrd € mehr belastet. (${$(ue)})
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
  `},Jt={title:"Nahverkehr Modernisieren",description:"Anschaffung Moderner, bequemer, emissionsfreier Fahrzeuge für den Nahverkehr wird gefördert.",effects:(e,t,i)=>[Vt("stateDebt").byValue(3),Vt("publicLocalCapacity").byPercent(1),Tt("publicLocalUsage","carUsage").byPercent(1),Vt("popularity").byValue(3)],priority(e){if(!wi(e,"FernverkehrModernisieren"))return 0;return fi(0,24,e.values.co2emissionsMobility/e.values.co2emissions*100)},citations:[se],details:J`

  `,internals:J`
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
  `},Ht={title:"Förderung für Tierhaltung abschaffen",description:"Subventionen für Tierhaltung werden ersatzlos gestrichen",effects:(e,t,i)=>[Vt("stateDebt").byValue(-10),Vt("co2emissionsAgriculture").byValue(-10).if(t===i),Vt("popularity").byValue(-20).if(t===i)],priority:e=>fi(1e4,0,e.values.unemployment)},Zt={title:"Nahverkehr Kostenlos",description:"Die Kosten für den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr benötigt werden.",effects(e,t,i){const n=t===i?10:1;return[Vt("stateDebt").byValue(10),Tt("publicLocalUsage","carUsage").byPercent(n),Vt("popularity").byValue(10).if(t===i),Vt("unemployment").byValue(20).if(t===i)]},priority:e=>fi(90,120,e.values.publicLocalCapacity/e.values.publicLocalUsage*100),citations:[se],details:J`

  `,internals:J`
    # Happy Path 19

    # Folgen

    - Der Staatshaushalt wird jährlich mit 10 Mrd € stärker belastet.
        - 13.3 Mrd € Ticketeinnahmen pro Jahr (${$(se)})
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
  `},Rt={title:"Autos in Innenstädten verbieten",description:"Die Innenstädte der großen Städte werden zu Autofreien Zonen erklärt und begrünt, sowie Fahrrad und Fußgängerzonen eingerichtet.",effects(e,t,i){var n=-2;return e.values.publicLocalCapacity>1.2*e.values.publicLocalUsage&&(n=-1,t+2<i&&(n=2)),[Vt("popularity").byValue(n),Tt("publicLocalUsage","carUsage").byPercent(10).if(t===i)]},priority:e=>fi(90,120,e.values.publicLocalCapacity/e.values.publicLocalUsage*100)},$t={title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des öffentlichen Fernverkehrs wird bundesweit stärker Bezuschusst und Vorangetrieben",effects(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return[Vt("stateDebt").byValue(6),Vt("publicNationalCapacity").byPercent(1),Tt("publicNationalUsage","carUsage").byPercent(1).if(t>=105),Tt("publicNationalUsage","carUsage").byPercent(.5).if(t>=105),Vt("popularity").byValue(2).if(t>=105)]},priority:e=>fi(150,80,e.values.publicNationalCapacity/e.values.publicNationalUsage*100),citations:[],details:J`

  `,internals:J`
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
  `},Qt={title:"Fernverkehr Modernisieren",description:"Moderne, bequeme und weniger anfällige Züge werden für den Fernverkehr angeschafft.",effects:(e,t,i)=>[Vt("stateDebt").byValue(3),Vt("publicNationalCapacity").byPercent(1),Tt("publicNationalUsage","carUsage").byPercent(1),Vt("popularity").byValue(3)],priority:e=>fi(0,24,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[],details:J`

  `,internals:J`
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
  `},qt={title:"Wasserstofftechnologie fördern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gefördert. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+5;return[Vt("stateDebt").byValue(2).if(n),Vt("carRenewablePercentage").byValue(1).if(r)]},priority(e){const t=e.values;return fi(40,90,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[],details:J`

  `,internals:J`
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
  `},Yt={title:"Wasserstoffmobilität fördern",description:"Wasserstoffbasierte Fahrzeuge werden gefördert.",effects:(e,t,i)=>wi(e,"WasserstofftechnologieFoerdern")?[Vt("stateDebt").byValue(3),Vt("carRenewablePercentage").byValue(1),Vt("popularity").byValue(1).if(t===i)]:[],priority:e=>fi(0,26,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[],details:J`

  `,internals:J`
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
  `},Xt={title:"Abschaffung der Mineralölsteuer",description:"Die Steuer auf sämtliche erdölbasierten Treibstoffe wird abgeschafft.",effects:(e,t,i)=>[Vt("stateDebt").byValue(41),Vt("popularity").byValue(5).if(t===i),Vt("popularity").byValue(-3).if(t<i),Tt("publicLocalUsage","carUsage").byPercent(-20).if(t===i),Tt("publicNationalUsage","carUsage").byPercent(-20).if(t===i)],priority(e){const t=e.values;return fi(60,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[X],details:"",internals:J`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${$(X)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `},ei={title:"Ausbau von Straßen",description:"Autobahnen und Straßen werden intensiver ausgebaut.",effects:e=>[Vt("stateDebt").byValue(5),Vt("popularity").byValue(.5),Tt("publicLocalUsage","carUsage").byPercent(-1),Tt("publicNationalUsage","carUsage").byPercent(-1)],priority(e){const t=e.values;return fi(60,100,t.carUsage/t.passengerTransportUsage*100)}},ti={title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effects:(e,t,i)=>[Vt("stateDebt").byValue(-7.35),Vt("popularity").byValue(-1).if(t===i)],priority(e){const t=e.values;return fi(10,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)}},ii={title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen für Dienstwagen werden abgeschafft.",effects:(e,t,i)=>[Vt("stateDebt").byValue(-18),Vt("popularity").byValue(-1).if(t===i),Tt("carUsage","publicLocalUsage").byPercent(-.05)],priority(e){const t=e.values;return fi(50,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[ee,ve],details:J`

  `,internals:J`
    # Happy Path 20

    Zunächst sollte Nah- und Fernverkehr attraktiver gemacht werden.
    TODO: Folgen sollten davon abhängen, ob es attraktive Alternativen gibt.

    # Folgen

    - Steuermehreinnahmen: 18 mrd€ / Jahr (${$(ee)})
    - -0.05% Fahleistung pro Jahr (Anreiz für Auto fällt weg Gebrauchte Wagen werden teuerer).
        - ${$(ve)} sagt es gibt keine echte Schätzung dafür.
    - Entsprechend mehr Nahverkehrnutzung
    - Zufriedenheit sinkt einmalig um 1%

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 50%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `},ni={title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=Vt("carEmissionFactor").setValue(157.9),i=t.getChange(e.values);return[Vt("popularity").byValue(2).if(i<0),t]},priority(e){if(wi(e,"Tempolimit100AufAutobahnen")||wi(e,"Tempolimit120AufAutobahnen")||wi(e,"TempolimitAufAutobahnenAussitzen"))return 0;const t=e.values;return fi(10,100,t.carUsage/t.passengerTransportUsage*100)}},ri={title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=Vt("carEmissionFactor").setValue(157.1),i=t.getChange(e.values);return[Vt("popularity").byValue(2).if(i<0),t]},priority(e){if(!wi(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values;return fi(10,100,t.carUsage/t.passengerTransportUsage*100)}},ai={title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=Vt("carEmissionFactor").setValue(154.1),i=t.getChange(e.values);return[Vt("popularity").byValue(-1).if(i<0),t]},priority(e){if(!wi(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values;return fi(10,100,t.carUsage/t.passengerTransportUsage*100)}},si={title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das könnte zwar Strafen oder gar Zwangsmaßnahmen bewirken, aber das Risiko der gefährdeten Wiederwahl ist zu groß.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects:()=>[Vt("stateDebt").byValue(-10),Vt("popularity").byValue(-2)],priority(e){if(wi(e,"Tempolimit100AufAutobahnen")||wi(e,"Tempolimit120AufAutobahnen")||wi(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values;return fi(10,100,t.carUsage/t.passengerTransportUsage*100)}},li={title:"Elektromobilität Fördern",description:"Höhere Kaufprämien, Steuerbefreiung, günstiges Laden für E-Autos.",effects:(e,t,i)=>wi(e,"LadeinfrastrukturAusbauen")?[Vt("stateDebt").byValue(5),Vt("carRenewablePercentage").byValue(1),Vt("popularity").byValue(4).if(t===i)]:[],priority(e){if(!wi(e,"LadeinfrastrukturAusbauen"))return 0;return fi(0,25,e.values.co2emissionsMobility/e.values.co2emissions*100)},citations:[],details:J`

  `,internals:J`
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
  `},oi={title:"Ladeinfrastruktur ausbauen",description:"Ausbau der Ladeinfrastruktur wird mit Steuermitteln stark gefördert.",effects:(e,t,i)=>[Vt("stateDebt").byValue(5),Vt("carRenewablePercentage").byValue(1),Vt("popularity").byValue(2).if(t===i)],priority:e=>fi(0,25,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[se],details:J`

  `,internals:J`
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
  `},ui={title:"CO2 Preis Erhöhen",description:"Die Preise werden schneller erhöht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=vi(50,0,ki(e),-1),r=vi(50,0,e.values.carRenewablePercentage,-1),a=-.5;return[Vt("stateDebt").byValue(-.045*e.values.co2emissions).if(i>=t+2),Vt("stateDebt").byValue(-.03*e.values.co2emissions).if(i>=t+4),Vt("popularity").byValue(n+r),Vt("co2emissionsIndustry").byPercent(a),Vt("co2emissionsAgriculture").byPercent(a),Vt("co2emissionsOthers").byPercent(a),Tt("electricityBrownCoal","electricityWind").byPercent(-.35),Tt("electricityHardCoal","electricityWind").byPercent(-.35),Tt("electricityBrownCoal","electricitySolar").byPercent(-.15),Tt("electricityHardCoal","electricitySolar").byPercent(-.15),Tt("buildingsSourceOil","buildingsSourceBio").byPercent(a),Tt("carUsage","publicNationalUsage").byPercent(-.25),Tt("carUsage","publicLocalUsage").byPercent(-.25)]},priority:e=>wi(e,"VollerCO2Preis")||wi(e,"WirksamerCO2Preis")?0:50,citations:[ye],details:J`

  `,internals:J`
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
  `},ci={title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=vi(80,50,ki(e),-3),r=vi(80,50,e.values.carRenewablePercentage,-3),a=-2;return[Vt("stateDebt").byValue(-.125*e.values.co2emissions),Vt("popularity").byValue(n+r),Vt("co2emissionsIndustry").byPercent(a),Vt("co2emissionsAgriculture").byPercent(a),Vt("co2emissionsOthers").byPercent(a),Tt("electricityBrownCoal","electricityWind").byPercent(-1.4),Tt("electricityHardCoal","electricityWind").byPercent(-1.4),Tt("electricityBrownCoal","electricitySolar").byPercent(-.6),Tt("electricityHardCoal","electricitySolar").byPercent(-.6),Tt("buildingsSourceOil","buildingsSourceBio").byPercent(a),Tt("carUsage","publicNationalUsage").byPercent(-1),Tt("carUsage","publicLocalUsage").byPercent(-1)]},priority:e=>wi(e,"CO2PreisErhoehen")?50:0,citations:[ye],details:J`

  `,internals:J`
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
  `},di={title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=vi(90,50,ki(e),-10),r=vi(90,50,e.values.carRenewablePercentage,-10),a=-5;return[Vt("stateDebt").byValue(-3*e.values.co2emissions),Vt("popularity").byValue(n+r),Vt("co2emissionsIndustry").byPercent(a),Vt("co2emissionsAgriculture").byPercent(a),Vt("co2emissionsOthers").byPercent(a),Tt("electricityBrownCoal","electricityWind").byPercent(-3.5),Tt("electricityHardCoal","electricityWind").byPercent(-3.5),Tt("electricityBrownCoal","electricitySolar").byPercent(-1.5),Tt("electricityHardCoal","electricitySolar").byPercent(-1.5),Tt("buildingsSourceOil","buildingsSourceBio").byPercent(a),Tt("carUsage","publicNationalUsage").byPercent(-2.5),Tt("carUsage","publicLocalUsage").byPercent(-2.5)]},priority:e=>wi(e,"WirksamerCO2Preis")?50:0,citations:[we],details:J`

  `,internals:J`
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
  `};const hi={AllesBleibtBeimAlten:G,InitialAtomausstieg:Bt,KohleverstromungEinstellen:Ot,EnergiemixRegeltDerMarkt:Ct,KernenergienutzungVerlaengern:Ft,NetzausbauErleichtern:Mt,NetzausbauFoerdern:It,ForschungUndEntwicklungStromspeicherung:{title:"Forschung und Entwicklung zur Stromspeicherung fördern",description:"Ein Förderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+3;return[Vt("stateDebt").byValue(2).if(n),Vt("electricityGridQuality").byValue(.2).if(r)]},priority:e=>fi(80,45,e.values.electricityGridQuality),citations:[],details:J`

  `,internals:J`
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
  `},StromspeicherungErleichtern:Ut,StromspeicherungFoerdern:xt,ForschungDezentraleStromerzeugung:{title:"Erforschung und Umsetzung dezentraler Stromerzeugung fördern",description:"Ein Förderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur für die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+1;return[Vt("stateDebt").byValue(2).if(n),Vt("electricityGridQuality").byValue(1).if(r)]},priority:e=>fi(80,45,e.values.electricityGridQuality),citations:[],details:J`

  `,internals:J`
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
  `},WindkraftVereinfachen:{title:"Windkraft vereinfachen",description:"Genehmigungen für Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effects:(e,t,i)=>[],priority:e=>fi(80,27,yi(e)),citations:[],details:J`

  `,internals:J`
    # Happy Path 1.3

    # Folgen

    - Popularität unverändert: Einige freuen sich, andere ärgern die Windräder.
    - Kostenneutral.
    - Änderungen in den Ausschreibungsverfahren und Abstandsregeln wirken sich schneller aus.

    # Priorität

    - 0% bei einem Anteil von Windstrom von 80%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert
  `},AbstandsregelnFuerWindkraftVerschaerfen:{title:"Abstandsregeln für Windkraft verschärfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngebäuden im Innenbereich muss das Zehnfache der Gesamthöhe der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects:(e,t,i)=>[Vt("popularity").byValue(5).if(t===i),Vt("electricityWindOnshoreMaxNew").setValue(.42)],priority:e=>wi(e,"AbstandsregelnFuerWindkraftWieBisher")?fi(0,100,yi(e)):0},AbstandsregelnFuerWindkraftWieBisher:{title:"Abstandsregeln für Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem über Abstände zwischen den Windkraftanlagen und Wohngebäuden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=wi(e,"WindkraftVereinfachen")?0:5;return[Vt("electricityWindOnshoreMaxNew").setValue(6).if(i>=t+n)]},priority:e=>wi(e,"AbstandsregelnFuerWindkraftLockern")?fi(30,100,yi(e)):wi(e,"AbstandsregelnFuerWindkraftVerschaerfen")?fi(70,27,yi(e)):0},AbstandsregelnFuerWindkraftLockern:{title:"Abstandsregeln für Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln für Windkraftanlagen sowie Bauerlaubniss in Wäldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=wi(e,"WindkraftVereinfachen")?0:5;return[Vt("popularity").byValue(-3).if(t===i),Vt("electricityWindOnshoreMaxNew").setValue(30).if(i>=t+n)]},priority:e=>wi(e,"AbstandsregelnFuerWindkraftWieBisher")?fi(70,27,yi(e)):wi(e,"AbstandsregelnFuerWindkraftAbschaffen")?fi(30,100,yi(e)):0,citations:[],details:J`

  `,internals:J`
    # Happy Path 2

    # Priorität

    Zu Beginn und wenn "WieBisher" ausgewählt:

    - 0% bei einem Anteil von Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert

    Wenn Abstandsregeln abgeschafft wurden:

    - 0% bei einem Anteil von Windstrom von 30%.
    - 100% bei einem Anteil von Windstrom von 100%.
  `},AbstandsregelnFuerWindkraftAbschaffen:{title:"Abstandsregeln für Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=wi(e,"WindkraftVereinfachen")?0:5;return[Vt("popularity").byValue(-40).if(t===i),Vt("electricityWindOnshoreMaxNew").setValue(1e3).if(i>=t+n)]},priority:e=>wi(e,"AbstandsregelnFuerWindkraftLockern")?fi(80,25,yi(e)):0},AusschreibungsverfahrenfuerWindkraftWieBisher:{title:"Ausschreibungsverfahren für Windkraft wie zu Beginn",description:"Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=wi(e,"WindkraftVereinfachen")?0:5,r=Math.min(6.9,e.values.electricityWindOnshoreMaxNew);return[Vt("electricityWind").byValue((r+1.2)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>wi(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?fi(60,100,ki(e)):0},AusschreibungsverfahrenfuerWindkraftVerdoppeln:{title:"Ausschreibungsverfahren für Windkraft verdoppeln",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=wi(e,"WindkraftVereinfachen")?0:5,r=Math.min(13.8,e.values.electricityWindOnshoreMaxNew);return[Vt("popularity").byValue(-1).if(t===i),Vt("unemployment").byValue(-20).if(t===i),Vt("electricityWind").byValue((r+2.4)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>wi(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?fi(100,50,ki(e)):wi(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?fi(40,100,ki(e)):0},AusschreibungsverfahrenfuerWindkraftVervierfachen:{title:"Ausschreibungsverfahren für Windkraft vervierfachen",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=wi(e,"WindkraftVereinfachen")?0:5,r=Math.min(27.6,e.values.electricityWindOnshoreMaxNew);return[Vt("popularity").byValue(-2).if(t===i),Vt("unemployment").byValue(-100).if(t===i),Vt("electricityWind").byValue((r+4.8)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>wi(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?fi(100,50,ki(e)):wi(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?fi(0,100,ki(e)):0,citations:[],details:J`
    Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung
    von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen
    Subventionierung umsetzen kann bekommt den Zuschlag.
  `,internals:J`
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
  `},AusschreibungsverfahrenfuerWindkraftVerachtfachen:{title:"Ausschreibungsverfahren für Windkraft verachtfachen",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=wi(e,"WindkraftVereinfachen")?0:5,r=Math.min(55.2,e.values.electricityWindOnshoreMaxNew);return[Vt("popularity").byValue(-20).if(t===i),Vt("unemployment").byValue(-100).if(t===i),Vt("electricityWind").byValue((r+9.6)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>wi(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?fi(100,50,ki(e)):0},SolarstromFoerderungAbschaffen:{title:"Solarstrom Förderung einstellen",description:"Mittlere bis große Solaranlagen sollten sich selbst tragen. Die Förderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:()=>[Vt("electricitySolar").byValue(2)],priority:e=>wi(e,"SolarstromFoerderungWieZuBeginn")?fi(0,100,ki(e)):0,details:J`

  `},SolarstromFoerderungWieZuBeginn:{title:"Solarstrom Förderung wie zu Beginn",description:"Subventionierung für mittlere bis große Solaranlagen wie bisher",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:()=>[Vt("electricitySolar").byValue(5)],priority:e=>wi(e,"SolarstromFoerdernx8")?fi(70,100,ki(e)):0,details:J`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `},SolarstromFoerdernx2:{title:"Solarstrom Förderung x2",description:"Subventionierung für mittlere bis große Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[Vt("popularity").byValue(10).if(t===i),Vt("unemployment").byValue(-31e3).if(t===i),Vt("electricitySolar").byValue(10)],priority:e=>wi(e,"SolarstromFoerderungWieZuBeginn")?fi(100,30,ki(e)):0,details:J`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `},SolarstromFoerdernx4:{title:"Solarstrom Förderung x4",description:"Subventionierung für mittlere bis große Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[Vt("popularity").byValue(20).if(t===i),Vt("unemployment").byValue(-89e3).if(t===i),Vt("electricitySolar").byValue(20)],priority:e=>wi(e,"SolarstromFoerdernx2")?fi(100,30,ki(e)):0,details:J`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:J`
    # Happy path 10

    ${$(te)}
  `,citations:[te]},SolarstromFoerdernx8:{title:"Solarstrom Förderung x8",description:"Subventionierung für mittlere bis große Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[Vt("popularity").byValue(-10).if(t===i),Vt("unemployment").byValue(-209e3).if(t===i),Vt("electricitySolar").byValue(40)],priority:e=>wi(e,"SolarstromFoerdernx4")?fi(100,30,ki(e)):0,details:J`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.`},SolarAufAllenDaechernVerpflichtend:{title:"Solar auf neuen Dächern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die Dächer.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[Vt("popularity").byValue(-3).if(t===i),Vt("electricitySolar").byValue(2)],priority:e=>wi(e,"SolarstromFoerderungWieZuBeginn")?fi(100,30,ki(e)):0,details:J`

  `,internals:J`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `},DaemmungAltbau1Percent:Nt,DaemmungAltbau2Percent:Gt,DaemmungAltbau4Percent:_t,DaemmungAltbauAbschaffen:Kt,NahverkehrKostenlos:Zt,AutosInInnenstaedtenVerbieten:Rt,WasserstofftechnologieFoerdern:qt,WasserstoffmobilitaetFoerdern:Yt,NahverkehrAusbauen:jt,NahverkehrModernisieren:Jt,FernverkehrVerbindungenAusbauen:$t,FernverkehrModernisieren:Qt,AusbauVonStrassen:ei,AbschaffungDerMineraloelsteuer:Xt,DieselPrivilegAbgeschaffen:ti,DienstwagenPrivilegAbgeschaffen:ii,Tempolimit130AufAutobahnen:ni,Tempolimit120AufAutobahnen:ri,Tempolimit100AufAutobahnen:ai,TempolimitAufAutobahnenAussitzen:si,ElektromobilitaetFoerdern:li,LadeinfrastrukturAusbauen:oi,FoerderungFuerTierhaltungAbschaffen:Ht,CO2PreisErhoehen:ui,WirksamerCO2Preis:ci,VollerCO2Preis:di,ForschungEmissionsfreieStahlproduktion:{title:"Forschung zur emissionsfreien Stahlproduktion fördern",description:"Forschung und Entwicklung von Technologien zur Produktion von Stahl mit stark reduzierten CO2-Emissionen wird stark gefördert. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+3,a=wi(e,"WasserstofftechnologieFoerdern",3)?ki(e)-70:0,s=wi(e,"WirksamerCO2Preis");return[Vt("stateDebt").byValue(2).if(n),Vt("co2emissionsIndustry").byValue(-2).if(r),Vt("co2emissionsIndustry").byValue(-2).if(s),Vt("co2emissionsIndustry").byValue(-a).if(a>0)]},priority(e){const t=e.values;return fi(0,80,t.co2emissionsIndustry/t.co2emissions*100)},citations:[],details:J`

  `,internals:J`
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
  `},ForschungEmissionsfreieZementproduktion:{title:"Forschung zur emissionsfreien Zementproduktion fördern",description:"Forschung und Entwicklung von Technologien zur Produktion von Zement mit stark reduzierten CO2-Emissionen wird stark gefördert. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+3,a=wi(e,"WasserstofftechnologieFoerdern",3)?ki(e)-70:0,s=wi(e,"WirksamerCO2Preis");return[Vt("stateDebt").byValue(2).if(n),Vt("co2emissionsIndustry").byValue(-2).if(r),Vt("co2emissionsIndustry").byValue(-2).if(s),Vt("co2emissionsIndustry").byValue(-a).if(a>0)]},priority(e){const t=e.values;return fi(0,80,t.co2emissionsIndustry/t.co2emissions*100)},citations:[],details:J`

  `,internals:J`
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
  `}},gi=Object.keys(hi),mi=M(hi);function pi(e){const t=function(e){const t=mi.find((t=>t.id===e));if(t)return t;throw Error(`Law #${e} not found`)}(e.lawId);if(t)return o(l({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function bi(e){return e.map((e=>{const t=mi.find((t=>t.id===e));return t||console.error(`Inconsistency: Proposed law #${e} not found`),t})).filter((e=>e))}function fi(e,t,i){const n=i-e,r=t-e;if(0===r)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return n/r*100}function vi(e,t,i,n){return Math.max(0,fi(e,t,i))/100*n}function wi(e,t,i=0){if(!mi.map((e=>e.id)).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some((n=>n.lawId===t&&n.effectiveSince<=e.currentYear+i))}function yi(e){const t=e.values;return t.electricityWindUsable/t.electricityDemand*100}function ki(e){return(e.values.electricityWindUsable+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}var Si={title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es für unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply:()=>[],probability(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return Math.min(1,fi(15,30,t)/100)}};function zi(e){return e.find((e=>e.title.match(/subvention/i)&&e.title.match(/abbau/i)))}var Pi={title:"Anruf von befreundetem Unternehmer",description:"Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine\n    Ferienvilla auf Sardinien einladen. Er verlässt sich natürlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen\n    nicht zustimmen wirst.\n  ",apply(e){if(e){const t=zi(bi(e.proposedLaws));if(t)return[Wt("rejectLaw",{lawId:t.id})]}return[]},probability:e=>zi(bi(e.proposedLaws))?.5:0},Di={title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute über die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply:()=>[]};const Ai=2,Wi=3,Vi=4,Ti=5,Li=6;var Oi={title:"Zusammenbruch des Finanzsystems",description:"Deine Staatsfinanzen sind desaströs. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden\n    jemals wieder wirst zurückahlen können. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen\n    könntest. Das Spiel ist damit leider beendet.\n  ",apply:()=>[Wt("gameOver")],probability:e=>e.values.stateDebt>2*Dt.stateDebt?Vi:0},Ci={title:"Hitzehölle",description:"Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen Küstenregionen\n  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr wächst.\n  Um die verbleibdenden Teile sind erbitterte Kämpfe ausgebrochen.\n  ",apply:()=>[Wt("gameOver")],probability:e=>e.values.co2budget<=0?Li:0},Ei={title:"Happy New Year!",description:"Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen Tätigkeit aufgestellt\n    und kommt zu dem nicht weiter überraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -\n    ebenfalls nicht überraschend - sieht die Sache anders und verurteilt die Regierungserklärung als haltlos.\n  ",apply:()=>[Wt("advanceYear")],probability(e){const t=4*(e.currentYear-2021),i=e.actionCount-t;if(i<3)return 0;if(i>=5)return Ai;const n=Math.round(33.3*(i-2))/100;return Math.min(1,n)}},Fi={title:"Social Media Alarm!",description:"Deine Wahlkampfberaterin ruft dich völlig aufgelöst an. Ob denn an den Geschichten was dran sein, die da im\n    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.\n    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.\n  ",apply:()=>[Vt("popularity").byPercent(-20)]},Bi={title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland müssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply:()=>[]},Mi={title:"Du hast durchgehalten",description:"Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,\n    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Maßnahmen waren zu finanzieren\n    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!\n  ",apply:()=>[Wt("gameOver")],probability:e=>2050===e.currentYear?Wi:0},Ii={title:"Wahl verloren",description:"Deine Beliebtheit in der Bevölkerung ist katastrophal, lieber würde man Mao Zedong wählen als dich.\n    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du gehörst) und ist damit unter\n    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon länger kein vernünftiger Mensch mehr geglaubt.\n  ",apply:()=>[Wt("gameOver")],probability:e=>e.values.popularity<=0?Ti:0},Ui={title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply:()=>[],citations:[],details:J`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:J`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `},xi={title:"Bürgerinitiative fordert stärkere Solarförderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply:()=>[],probability(e){const t=wi(e,"SolarstromFoerderungAbschaffen"),i=wi(e,"SolarstromFoerderungWieZuBeginn"),n=wi(e,"SolarstromFoerdernx2");return t||i||n?.5:0},citations:[Y],details:J`

  `,internals:J`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${$(Y)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `},Ni={title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply:()=>[Wt("gameOver")],probability:e=>e.acceptedLaws.find((e=>"KernenergienutzungVerlaengern"===e.lawId))?.5:0,laws:[],citations:[],details:J`

  `,internals:J`

  `},Gi={title:"Staatsoberhaupt verstorben",description:"Du stirbst an der neuen BSE Variante. Tja, hättest du dich mal besser um das Tierwohl gekümmert...",apply:()=>[Wt("gameOver")],probability:e=>bi(e.acceptedLaws.map((e=>e.lawId))).find((e=>e.title.match(/tierwohl/i)))?0:.5,laws:[],citations:[],details:J`

  `,internals:J`

  `},_i={title:"Dürreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausfälle sind enorm.",apply:()=>[Vt("gdp").byValue(-100),Vt("popularity").byValue(-10)],probability:e=>Math.min(1,fi(400,0,e.values.co2budget)/100),laws:[],citations:[],details:J`

  `,internals:J`
  `},Ki={title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und führt zu einer neuen Diskussion über Lobbyismus.",apply:()=>[Vt("popularity").byValue(-2)],probability:e=>wi(e,"WirksamerCO2Preis")||wi(e,"KohleverstromungEinstellen")?0:.3,laws:[],citations:[],details:J`

  `,internals:J`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `},ji={title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply:()=>[Vt("popularity").byValue(-2)],probability:()=>.3,laws:[],citations:[],details:J`

  `,internals:J`

  `},Ji={title:"Klimaflüchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimaflüchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply:()=>[Vt("stateDebt").byValue(10)],probability:e=>e.values.co2budget<500?.2:0,laws:[],citations:[],details:J`

  `,internals:J`

  `},Hi={title:"Plagiatsaffäre",description:"Während des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet Wählerstimmen.",apply:()=>[Vt("popularity").byValue(-10)],probability:e=>.5,laws:[],citations:[],details:J`

  `,internals:J`

  `};const Zi=()=>.5,Ri=M({AbstandsregelnWindkraft:I,Altbausanierung:Si,Bestechung:Pi,EnergieStrategie:Di,FinanzKollaps:Oi,Hitzehoelle:Ci,NewYear:Ei,SocialMedia:Fi,TempolimitAufAutobahnen:Bi,TimesUp:Mi,WahlVerloren:Ii,WindkraftAusschreibung:Ui,SolarstromFoerderung:xi,AtomKatastrophe:Ni,BSE:Gi,Duerrewelle:_i,PRKohleindustrie:Ki,PRInnenminister:ji,Klimafluechtlinge:Ji,Plagiatsaffaere:Hi,CO2PreisDebatte:{title:"Debatte über CO2-Preise",description:"Eine marktliberale Kampagne ist sehr erfolgreich darin, Dich als Verbots-Kanzler hinzustellen. Aus allen Richtungen prasseln Forderungen nach einem adäquaten CO2-Preis auf Dich ein. Nur leider gehen die Vorstellungen über den genauen Preis sehr weit auseinander.",laws:["CO2PreisErhoehen","WirksamerCO2Preis","VollerCO2Preis"],apply:()=>[],probability:e=>fi(1,3,(wi(e,"AutosInInnenstaedtenVerbieten")?1:0)+(wi(e,"KohleverstromungEinstellen")?1:0)+(wi(e,"SolarAufAllenDaechernVerpflichtend")?1:0)+(wi(e,"Tempolimit130AufAutobahnen")?1:0)+(wi(e,"Tempolimit120AufAutobahnen")?1:0)+(wi(e,"Tempolimit100AufAutobahnen")?1:0))/100}}).map((e=>o(l({},e),{probability:e.probability||Zi}))),$i={currentYear:2021,values:Dt,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],actionCount:0,over:!1,prngState:{}};function Qi(e=$i,t=d()){return{id:t,currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:At(e.values),events:e.events,actionCount:e.actionCount,over:e.over,prngState:{}}}function qi(e=mi,t=$i){const i=Qi(t);return i.acceptedLaws=e.filter((e=>{var t;return null==(t=e.labels)?void 0:t.includes("initial")})).map((e=>({lawId:e.id,effectiveSince:i.currentYear}))),i}const Yi=[...Array(30).keys()].map((e=>e+2021));function Xi(e,t=mi,i=Ri,n=x){const r=function(e,t,i){const n=function(e,t){return t.map((t=>o(l({},t),{prob:t.probability(e)}))).filter((e=>e.prob>0))}(e,t),r=function(e){return e.filter((e=>e.prob>1)).reduce(((e,t)=>t.prob>((null==e?void 0:e.prob)||0)?t:e),void 0)}(n);if(r)return r;return function(e,t){for(const i of e)if((t-=i.prob)<0)return i;return}(function(e){const t=e.map((e=>e.prob)).reduce(((e,t)=>e+t),0),i=.6/t;return e.map((e=>o(l({},e),{prob:e.prob*i})))}(n),i())}(e,i,n);if(r){const t={id:r.id,occuredIn:e.currentYear,acknowledged:!1};e.events.unshift(t)}const a=function(e,t,i){const n=t=>{var i;return null==(i=e.acceptedLaws)?void 0:i.some((e=>e.lawId===t.id))},r=t=>{var i;return null==(i=e.rejectedLaws)?void 0:i.includes(t.id)},a=e=>{var t;return(null==(t=e.labels)?void 0:t.includes("hidden"))||!1},s=t=>({law:t,priority:t.priority(e)}),l=e=>({law:e.law,priority:e.priority+(i.includes(e.law.id)?100:0)});return t.filter(H(n)).filter(H(r)).filter(H(a)).map(s).filter((e=>e.priority>0)).map(l).sort(((e,t)=>t.priority-e.priority)).map((e=>e.law.id)).slice(0,6)}(e,t,(null==r?void 0:r.laws)?r.laws:[]);return e.proposedLaws=function(e,t){const i=[...e],n=t.filter((e=>i.includes(e))),r=t.filter((e=>!n.includes(e)));var a=0;for(;a<i.length;)n.includes(i[a])?a++:0!==r.length?(i[a]=r.shift(),a++):i.splice(a,1);return i.push(...r.slice(0,6-i.length)),i}(e.proposedLaws,a),e.actionCount++,r}function en(e,t,i){const n=At(e.values);return t.sort(((e,t)=>{var i,n;return(null==(i=e.treatAfterLabels)?void 0:i.some((e=>{var i;return null==(i=t.labels)?void 0:i.includes(e)})))?1:(null==(n=t.treatAfterLabels)?void 0:n.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)})))?-1:0})).filter((e=>e.effectiveSince<=i)).forEach((t=>{const r=t.effects(o(l({},e),{values:n}),t.effectiveSince,i);Lt({dispatch:()=>{},values:n},r)})),n.co2budget-=n.co2emissions,n}function tn(e){return Math.max(0,Math.min(100,e))}const nn=[{id:"start",title:"Stell dir vor...",text:J`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du auswählen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die Wähler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine Wähler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];const rn={setGameState(e,t){e.game=t.game},gameOver(e){e.game=o(l({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},an={proposedLaws:e=>e.game&&e.game.proposedLaws?bi(e.game.proposedLaws):[]};var sn=h({props:{law:{type:Object,required:!0},selectable:{type:Boolean,required:!0},numCards:{type:Number,required:!0}},setup:()=>({store:_r()}),data:()=>({accepted:!1}),computed:o(l({},g(["proposedLaws"])),{zIndex(){return this.law.zIndex},transform(){return`rotate(${2*(this.law.pos-this.numCards/2)}deg) translate(${20*Math.abs(this.numCards/2-this.law.pos)}px, -50%)`}}),methods:{select(){this.$emit("selected")},accept(){this.accepted=!0},sendAccept(e){e.animationName.match(/^twistOut-/)&&this.$emit("accepted",this.law.id)}}});const ln=y("data-v-c57832f8");m("data-v-c57832f8");const on={key:0,type:"radio"},un={key:0,class:"button-bar"};p();const cn=ln(((e,t,i,n,r,a)=>(k(),b("div",{class:["Law",{accepted:e.accepted}],style:{zIndex:e.zIndex},onClick:t[2]||(t[2]=(...t)=>e.select&&e.select(...t)),onAnimationend:t[3]||(t[3]=(...t)=>e.sendAccept&&e.sendAccept(...t))},[f("label",null,[e.selectable?(k(),b("input",on)):v("",!0),f("div",null,[f("h3",null,w(e.law.title),1),f("div",null,w(e.law.description),1),e.selectable?(k(),b("div",un,[f("button",{class:"accept",onClick:t[1]||(t[1]=(...t)=>e.accept&&e.accept(...t))},"✓")])):v("",!0)])])],38))));sn.render=cn,sn.__scopeId="data-v-c57832f8";var dn=h({components:{LawCard:sn},setup:()=>({store:_r()}),data:()=>({zIndexes:[],poppedUp:!1}),computed:o(l({},g(["proposedLaws"])),{lawsToShow(){return this.zIndexes.length||(this.zIndexes=j(this.proposedLaws.length,0)),this.proposedLaws.map(((e,t)=>o(l({},e),{zIndex:this.zIndexes[t],pos:t})))}}),methods:{accept(e){this.store.dispatch("acceptLaw",{lawId:e})},select(e){this.zIndexes=j(this.proposedLaws.length,e)},sitOut(){this.store.dispatch("sitOut")}}});const hn=y("data-v-290d8620")(((e,t,i,n,r,a)=>{const s=P("LawCard");return k(),b(S,null,[f("div",{class:["ProposedLaws",{poppedUp:e.poppedUp}],onClick:t[1]||(t[1]=t=>e.poppedUp=!0)},[(k(!0),b(S,null,z(e.lawsToShow,((t,i)=>(k(),b(s,{key:t.id,law:t,selectable:e.poppedUp,numCards:e.lawsToShow.length,onAccepted:()=>e.accept(t.id),onSelected:()=>e.select(i)},null,8,["law","selectable","numCards","onAccepted","onSelected"])))),128))],2),f("div",{class:"sitOutButton",onClick:t[2]||(t[2]=()=>e.sitOut())},"Aussitzen")],64)}));dn.render=hn,dn.__scopeId="data-v-290d8620";var gn=h({props:{title:String,text:String},methods:{acknowledge(){this.$emit("acknowledge")}}});const mn=y("data-v-2df6be4d");m("data-v-2df6be4d");const pn={key:0};p();const bn=mn(((e,t,i,n,r,a)=>e.text?(k(),b("div",{key:0,onClick:t[1]||(t[1]=(...t)=>e.acknowledge&&e.acknowledge(...t))},[e.title?(k(),b("h2",pn,w(e.title),1)):v("",!0),f("p",null,w(e.text),1)])):v("",!0)));gn.render=bn,gn.__scopeId="data-v-2df6be4d";var fn=h({props:{title:{type:String,required:!0},value:{type:Number,required:!0},zoom:{type:Number,default:1}},computed:{titleStyle(){return{fontSize:.5*this.zoom+"em"}},progressBarStyle(){return{width:50*this.zoom+"px",height:5*this.zoom+"px"}},indicatorStyle(){const e=this.value>40?"green":this.value>20?"goldenrod":"red";return{width:this.value+"%",backgroundColor:e}}}});const vn=y("data-v-37cfebf9");m("data-v-37cfebf9");const wn={class:"container"};p();const yn=vn(((e,t,i,n,r,a)=>(k(),b("div",wn,[f("div",{class:"title",style:e.titleStyle},w(e.title),5),f("div",{class:"progress-bar",style:e.progressBarStyle},[f("div",{class:"indicator",style:e.indicatorStyle},null,4)],4)]))));fn.render=yn,fn.__scopeId="data-v-37cfebf9";var kn=h({props:{value:{type:Number,required:!0}},components:{IndicatorBar:fn},computed:{isShort(){return this.value<20},isLess(){return this.value>=20&&this.value<50},isMore(){return this.value>=50&&this.value<80},isMuch(){return this.value>=80}}});const Sn=y("data-v-791f01dd");m("data-v-791f01dd");const zn={id:"finances"},Pn={key:0,src:"/assets/money-short.7ce9dbed.png",id:"short"},Dn={key:1,src:"/assets/money-less.c10d45f8.png",id:"less"},An={key:2,src:"/assets/money-more.a1c17d8d.png",id:"more"},Wn={key:3,src:"/assets/money-much.ad651475.png",id:"much"};p();const Vn=Sn(((e,t,i,n,r,a)=>{const s=P("IndicatorBar");return k(),b("div",zn,[f(s,{title:"Finanzen",value:e.value,zoom:.9},null,8,["value","zoom"]),e.isShort?(k(),b("img",Pn)):v("",!0),e.isLess?(k(),b("img",Dn)):v("",!0),e.isMore?(k(),b("img",An)):v("",!0),e.isMuch?(k(),b("img",Wn)):v("",!0)])}));kn.render=Vn,kn.__scopeId="data-v-791f01dd";var Tn=h({props:{value:{type:Number,required:!0}},components:{IndicatorBar:fn},computed:{areHappy(){return this.value>=50},areAngry(){return this.value<50}}});const Ln=y("data-v-e5acad4c");m("data-v-e5acad4c");const On={id:"popularity"},Cn={key:0,src:"/assets/people-happy.1e9e529c.png",id:"happy"},En={key:1,src:"/assets/people-angry.495e0425.png",id:"angry"};p();const Fn=Ln(((e,t,i,n,r,a)=>{const s=P("IndicatorBar");return k(),b("div",On,[f(s,{title:"Beliebtheit",value:e.value,zoom:2.8,style:{margin:"-80px 0 0 200px"}},null,8,["value","zoom"]),e.areHappy?(k(),b("img",Cn)):v("",!0),e.areAngry?(k(),b("img",En)):v("",!0)])}));Tn.render=Fn,Tn.__scopeId="data-v-e5acad4c";var Bn=h({data:()=>({levels:{healthy:"/assets/plant-healthy.1c912fd2.png",sick:"/assets/plant-sick.05726ebf.png",withered:"/assets/plant-withered.2d8ffb21.png"}}),props:{value:{type:Number,required:!0}},components:{IndicatorBar:fn},computed:{status(){return this.value>66?"healthy":this.value>33?"sick":"withered"},imgSrc(){return this.levels[this.status]}}});const Mn=y("data-v-8ae17ad2");m("data-v-8ae17ad2");const In={id:"plant"};p();const Un=Mn(((e,t,i,n,r,a)=>{const s=P("IndicatorBar");return k(),b("div",In,[f(s,{title:"CO2-Budget",value:e.value,zoom:2.5,style:{margin:"-50px 0 0 60px"}},null,8,["value","zoom"]),f("img",{src:e.imgSrc,id:e.status},null,8,["src","id"])])}));Bn.render=Un,Bn.__scopeId="data-v-8ae17ad2";var xn=h({props:{year:Number}});const Nn=y("data-v-38fe5c52");m("data-v-38fe5c52");const Gn={id:"calendar"};p();const _n=Nn(((e,t,i,n,r,a)=>(k(),b("div",Gn,w(e.year),1))));xn.render=_n,xn.__scopeId="data-v-38fe5c52";var Kn=h({});const jn=y("data-v-5952ab5a");m("data-v-5952ab5a");const Jn={id:"heater"},Hn=f("img",{src:"/assets/heater.5a77e425.png"},null,-1);p();const Zn=jn(((e,t,i,n,r,a)=>(k(),b("div",Jn,[Hn]))));Kn.render=Zn,Kn.__scopeId="data-v-5952ab5a";var Rn=h({});const $n=y("data-v-3902beeb");m("data-v-3902beeb");const Qn={id:"table"},qn=f("img",{src:"/assets/table-top.c87bd2fd.png",id:"table-top"},null,-1),Yn=f("img",{src:"/assets/table-front.78c0f8c6.png",id:"table-front"},null,-1),Xn=f("img",{src:"/assets/table-front.78c0f8c6.png",id:"table-back"},null,-1),er=f("img",{src:"/assets/table-side.49774a53.png",id:"table-left-side"},null,-1),tr=f("img",{src:"/assets/table-side.49774a53.png",id:"table-right-side"},null,-1);p();const ir=$n(((e,t,i,n,r,a)=>(k(),b("div",Qn,[qn,Yn,Xn,er,tr]))));Rn.render=ir,Rn.__scopeId="data-v-3902beeb";var nr=h({props:{withNews:Boolean}}),rr="/assets/board-side.d7181ded.png",ar="/assets/tvset-legs.78b387df.png";const sr=y("data-v-118e7bdf");m("data-v-118e7bdf");const lr={id:"tvset"},or=f("div",{id:"board"},[f("img",{id:"board-front",src:"/assets/board-front.41330f02.png"}),f("img",{id:"board-left",src:rr}),f("img",{id:"board-right",src:rr}),f("div",{id:"board-top"})],-1),ur={id:"tv"},cr=f("img",{id:"tv-front",src:"/assets/tv-front.82df5c0c.png"},null,-1),dr={key:0,id:"news",src:"/assets/news.c4bbc2d0.png"},hr=f("div",{id:"legs"},[f("img",{id:"legs-front",src:ar}),f("img",{id:"legs-back",src:ar})],-1);p();const gr=sr(((e,t,i,n,r,a)=>(k(),b("div",lr,[or,f("div",ur,[cr,e.withNews?(k(),b("img",dr)):v("",!0)]),hr]))));nr.render=gr,nr.__scopeId="data-v-118e7bdf";var mr={};const pr=y("data-v-2419943a");m("data-v-2419943a");const br={class:"dialog"},fr={class:"buttons"};p();const vr=pr(((e,t,i,n,r,a)=>(k(),b("div",br,[D(e.$slots,"default",{},void 0,!0),f("div",fr,[D(e.$slots,"buttons",{},void 0,!0)])]))));mr.render=vr,mr.__scopeId="data-v-2419943a";var wr=h({setup(){const e=_r();return e.dispatch("setupTour"),{store:e}},components:{Dialog:mr},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return nn.find((e=>e.id===this.$store.state.tour.step))},title(){var e;return null==(e=this.currentStep)?void 0:e.title},text(){var e;return null==(e=this.currentStep)?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var t;const i=document.querySelector(".highlighted");i&&i.classList.remove("highlighted"),e&&e.highlight&&(null==(t=document.querySelector(`#${e.highlight}`))||t.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}});wr.render=function(e,t,i,n,r,a){const s=P("Dialog");return e.title&&e.text?(k(),b(s,{key:0},{buttons:A((()=>[f("button",{onClick:t[1]||(t[1]=(...t)=>e.stop&&e.stop(...t))},"Tour beenden"),f("button",{onClick:t[2]||(t[2]=(...t)=>e.next&&e.next(...t))},"Weiter")])),default:A((()=>[f("h2",null,w(e.title),1),f("div",{innerHTML:e.text},null,8,["innerHTML"])])),_:1})):v("",!0)};var yr=h({components:{Calendar:xn,ClimateIndicator:Bn,Heater:Kn,LawProposals:dn,SpeechBubble:gn,FinanceIndicator:kn,PopularityIndicator:Tn,Table:Rn,Tour:wr,TVSet:nr},data:()=>({store:_r()}),computed:{eventToShow(){var e;const t=(null==(e=this.store.state.game)?void 0:e.events)||[];if(0===t.length)return;const i=t[0];return i.acknowledged?void 0:Ri.find((e=>e.id===i.id))},eventTitle(){var e;return(null==(e=this.eventToShow)?void 0:e.title)||""},eventText(){var e;return(null==(e=this.eventToShow)?void 0:e.description)||""},currentYear(){var e;return(null==(e=this.store.state.game)?void 0:e.currentYear)||2021},finance(){const e=this.store.state.game;return e?function(e){return tn(100-e.values.stateDebt/Dt.stateDebt*50)}(e):0},popularity(){var e;return(null==(e=this.store.state.game)?void 0:e.values.popularity)||100},climate(){const e=this.store.state.game;return e?function(e){return 0===e.values.co2emissions?100:tn(e.values.co2budget*At(Dt).co2emissions/Dt.co2budget/e.values.co2emissions*50)}(e):0}},methods:{acknowledge(){this.$store.dispatch("acknowledgeEvent",this.eventToShow)}}});const kr={class:"game-setup"},Sr=f("h1",null,"#ich-kann-klima",-1),zr=f("div",{id:"walls"},[f("div",{id:"wall-back"}),f("div",{id:"wall-left"}),f("div",{id:"wall-right"})],-1);yr.render=function(e,t,i,n,r,a){const s=P("Calendar"),l=P("Heater"),o=P("PopularityIndicator"),u=P("TVSet"),c=P("ClimateIndicator"),d=P("Table"),h=P("FinanceIndicator"),g=P("LawProposals"),m=P("SpeechBubble"),p=P("Tour");return k(),b("div",kr,[Sr,zr,f(s,{year:e.currentYear},null,8,["year"]),f(l),f(o,{value:e.popularity},null,8,["value"]),f(u,{"with-news":!!e.eventText},null,8,["with-news"]),f(c,{value:e.climate},null,8,["value"]),f(d),f(h,{value:e.finance},null,8,["value"]),f(g),f(m,{title:e.eventTitle,text:e.eventText,onAcknowledge:e.acknowledge},null,8,["title","text","onAcknowledge"]),f(p)])};var Pr=h({setup(){const e=_r();return{store:e,acceptedLaws:W((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({opened:void 0}),computed:{visibleAccepted(){return mi.filter((e=>{var t,i;return(null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id)))&&!(null==(i=e.labels)?void 0:i.includes("hidden"))}))}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}});const Dr=y("data-v-aace6332")(((e,t,i,n,r,a)=>(k(!0),b(S,null,z(e.visibleAccepted,((t,i)=>(k(),b("div",{key:i,class:["Law",{opened:i===e.opened}],onClick:t=>e.toggleOpen(i)},[f("h3",null,w(t.title),1),f("div",null,w(t.description),1)],10,["onClick"])))),128))));Pr.render=Dr,Pr.__scopeId="data-v-aace6332";var Ar=h({components:{GameSetup:yr,AcceptedLaws:Pr},setup:()=>({store:_r()}),methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,i){i((t=>t.startGame(e.params.id)))}});const Wr=y("data-v-3637ce73")(((e,t,i,n,r,a)=>{const s=P("GameSetup");return k(),b(s)}));Ar.render=Wr,Ar.__scopeId="data-v-3637ce73";var Vr=h({components:{Dialog:mr},setup:()=>({store:_r()}),computed:{co2(){var e,t;const i=null==(e=this.store.state.game)?void 0:e.values.co2budget;return(null==(t=this.store.state.game)?void 0:t.values.co2emissions)>0?i>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. Hätte die AfD nicht besser hinbekommen.":i>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken können. Punktlandung."},debt(){var e;return(null==(e=this.store.state.game)?void 0:e.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilitätskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var e;const t=null==(e=this.store.state.game)?void 0:e.values.popularity;return t<20?"entspricht dem, was man von einem langhährigen Diktator erwarten kann.":t<50?"ist nicht berauschend, wiedergewählt würdest du wohl eher nicht.":t<80?"reicht aus, dass du noch länger am Ruder bleiben könntest. Gratulation!":"ist völlig unglaubwürdig - war das wirklich eine freie Wahl?"}},methods:{loadGame(e){this.store.dispatch("loadGame",{gameId:e})},newGame(){this.$router.push("/games")}},beforeRouteEnter(e,t,i){i((t=>{t.loadGame(e.params.id)}))}});const Tr=f("h2",null,"Das Spiel ist leider zu Ende",-1),Lr=f("p",null,"Deine Entscheidungen haben etwas verändert - soviel kann man sagen.",-1),Or=f("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Cr={class:"button-bar"};Vr.render=function(e,t,i,n,r,a){const s=P("Dialog");return k(),b(s,null,{default:A((()=>[Tr,Lr,f("ul",null,[f("li",null,"Die CO2-Emmissionen "+w(e.co2),1),f("li",null,"Die Staatsfinanzen "+w(e.debt),1),f("li",null,"Deine Beliebtheit "+w(e.popularity),1)]),Or,f("div",Cr,[f("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Neuer Versuch")])])),_:1})};const Er=[{path:"/",redirect:"/games"},{path:"/games",component:Ar},{path:"/games/:id",component:Ar},{path:"/games/:id/over",component:Vr}],Fr=V({history:T(),routes:Er});const Br=function(e,t){let i,n=[];async function r(){if(i&&(clearTimeout(i),i=void 0),n.length){const{method:s,path:l,data:o,retry:u,resolve:c,reject:d}=n[0];try{if((null==t?void 0:t.navigator)&&!(null==t?void 0:t.navigator.onLine))throw Error("Browser is offline");const i=await e(s,l,o);n.shift(),c(i)}catch(a){u?n[0].retry=Math.max(-1,u-1):(n.shift(),d(a))}n.length&&(i=setTimeout(r,(null==t?void 0:t.timeout)||1e4))}}return{add:(e,t,a,s=-1)=>new Promise(((l,o)=>{n.push({method:e,path:t,data:a,retry:s,resolve:l,reject:o}),i||r()})),remove(e,t){n=n.filter((i=>i.method.toLowerCase()!==e.toLowerCase()||i.path!==t))},callsPending:()=>n.length>0}}(function(e,t,i=console){return async function(n,r,a){var s;try{const i={method:n};["post","put","patch"].includes(n)&&(i.body=JSON.stringify(a),i.headers={"content-type":"application/json"});const l=await t(e+r,i),o=(null==(s=l.headers.get("Content-Type"))?void 0:s.match(/json/))?await l.json():await l.text();if(l.ok)return o;throw Error(o.message||o)}catch(l){throw i.error(l),l}}}(localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",fetch));var Mr;const Ir=function({api:e,logger:t=console,storage:i=localStorage}){return{async createGame(n){N(n),i.setItem("game",JSON.stringify(n));try{e.createGame(n)}catch(r){t.warn("Cannot save new game - trying again later",r)}return n},async loadGame(t){const n=i.getItem("game");if(n){const e=JSON.parse(n);if(e.id===t)return N(e),Qi(e,t)}const r=await e.loadGame(t);return N(r),Qi(r,t)},async saveGame(n){n.prngState=U.state(),i.setItem("game",JSON.stringify(n));try{e.saveGame(n)}catch(r){t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",r)}},async decisionMade(t,i,n){e.decisionMade(t.id,i,n)},async eventOccurred(t,i){e.eventOccurred(t.id,i.id)}}}({api:(Mr=Br,{createGame:e=>Mr.add("post","/games",e),loadGame:e=>Mr.add("get","/games/"+e,void 0,0),saveGame:e=>(Mr.remove("put","/games/"+e.id),Mr.add("put","/games/"+e.id,e)),decisionMade:(e,t,i)=>Mr.add("post","/games/"+e+"/decisions/"+t,{accepted:i}),eventOccurred:(e,t)=>Mr.add("post","/games/"+e+"/events/"+t)})}),Ur=(xr=Fr,Nr=Ir,{async startGame(e){const t=qi();await Nr.createGame(t);const i=Xi(t);e.commit("setGameState",{game:t}),e.dispatch("applyEvent",{event:i}),xr.push("/games/"+t.id)},async loadGame(e,t){try{const i=await Nr.loadGame(t.gameId);await Nr.saveGame(i),xr.push("/games/"+i.id+(i.over?"/over":"")),e.commit("setGameState",{game:i})}catch(i){e.dispatch("error",{error:i})}},gameOver(e){var t;e.commit("gameOver",void 0),xr.push("/games/"+(null==(t=e.state.game)?void 0:t.id)+"/over")},async acceptLaw(e,t){const i=l({},e.state.game),n={lawId:t.lawId,effectiveSince:i.currentYear+1},r=pi(n),a=r.removeLawsWithLabels,s=i.acceptedLaws.map(pi).filter((e=>!(null==a?void 0:a.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)}))))).map((e=>({lawId:e.id,effectiveSince:e.effectiveSince})));i.acceptedLaws=[...s,n];const o=Xi(i);await Nr.saveGame(i),e.commit("setGameState",{game:i}),e.dispatch("applyEvent",{event:o}),await Nr.decisionMade(i,r.id,!0)},async rejectLaw(e,t){const i=l({},e.state.game);i.rejectedLaws=[...i.rejectedLaws,t.lawId],await Nr.decisionMade(i,t.lawId,!1),await Nr.saveGame(i),e.commit("setGameState",{game:i})},async sitOut(e){const t=l({},e.state.game);await Nr.decisionMade(t,"sitOut",!0);const i=Xi(t);await Nr.saveGame(t),e.commit("setGameState",{game:t}),e.dispatch("applyEvent",{event:i})},async advanceYear(e){const t=l({},e.state.game),i=t.acceptedLaws.map(pi);t.currentYear++,t.values=en(t,i,t.currentYear),await Nr.saveGame(t),e.commit("setGameState",{game:t})},async applyEvent(e,t){if(!t.event)return;const i=l({},e.state.game);await Nr.eventOccurred(i,t.event);const n=t.event.apply(i);e.dispatch("applyEffects",{changes:n})},acknowledgeEvent(e,t){const i=l({},e.state.game);i.events.find((e=>e.id===t.id)).acknowledged=!0,Nr.saveGame(i),e.commit("setGameState",{game:i})},applyEffects(e,t){const i={dispatch:e.dispatch,values:At(e.state.game.values)};Lt(i,t.changes);const n=o(l({},e.state.game),{values:i.values});Nr.saveGame(n),e.commit("setGameState",{game:n})},setupTour(e){const t=localStorage.getItem("tour")||nn[0].id,i=nn.find((e=>t===e.id));i?e.commit("setTour",{step:i.id,active:!0}):e.dispatch("stopTour")},nextTourStep(e){const t=nn.findIndex((t=>e.state.tour.step===t.id));if(t<0||t==nn.length-1)e.dispatch("stopTour");else{const i=nn[t+1];e.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(e){e.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},async error(e,t){e.commit("error",t)}});var xr,Nr;const Gr=Symbol();function _r(){return L(Gr)}const Kr=O({state:{game:void 0,tour:{active:!0,step:"start"}},mutations:rn,actions:Ur,getters:an});function jr(e,t,...i){for(const n of i){if(e[n]<t[n])return-1;if(e[n]>t[n])return 1}return 0}function Jr(e,t){const i=At(e.values);function n(e){return(e>0?"+":"")+e.toFixed(2)}function r(r){const a=function(e){const i=t.find((t=>"modify"===t.type&&t.name===e));return i&&i.condition?i.value:0}(r),s=i[r]-e.values[r];return a&&Math.abs(a-s)<.001?n(a):a?n(a)+" / "+n(s):0!=s?n(s):""}Lt({dispatch:()=>{},values:i},t);return Pt.map((t=>{return{id:t.name,unit:t.unit,value:(i=t.name,e.values[i].toFixed(2)),effect:r(t.name),class:t.writable?"writable":"calculated"};var i}))}var Hr=h({props:{citation:{type:Object,required:!0},showInternals:{type:Boolean,default:!1}},computed:{href(){return this.citation.url.toString()},title(){return this.citation.title||this.citation.url.toString()}}});const Zr={key:0},Rr=C(". "),$r={key:1},Qr={key:2},qr=C("Bemerkung: "),Yr=C(". "),Xr={key:3},ea=C("Internes: "),ta=C(". "),ia={key:4},na=C(". "),ra={key:5},aa=C(". "),sa={key:6},la=C(". ");Hr.render=function(e,t,i,n,r,a){return k(),b("p",null,[e.citation.authors?(k(),b("span",Zr,w(e.citation.authors+e.citation.dateString())+". ",1)):v("",!0),f("a",{target:"_blank",rel:"noreferrer noopener",href:e.href},'"'+w(e.title)+'"',9,["href"]),Rr,e.citation.publisher?(k(),b("span",$r,w(e.citation.publisher)+". ",1)):v("",!0),e.citation.comment?(k(),b("span",Qr,[qr,f("span",{innerHTML:e.citation.comment},null,8,["innerHTML"]),Yr])):v("",!0),e.showInternals&&e.citation.internalComment?(k(),b("span",Xr,[ea,f("span",{innerHTML:e.citation.internalComment},null,8,["innerHTML"]),ta])):v("",!0),e.citation.referringUrl?(k(),b("span",ia,[f("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,["href"]),na])):v("",!0),e.citation.archiveUrl?(k(),b("span",ra,[f("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,["href"]),aa])):v("",!0),e.citation.localCopy?(k(),b("span",sa,[f("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,["href"]),la])):v("",!0)])};var oa=h({props:{simulatedValues:{type:Array,required:!0},paramId:{type:String,required:!0}},setup:(e,t)=>({chartOptions:W((()=>({chart:{id:e.paramId+"-withLawEffects",animations:{enabled:!1}},xaxis:{categories:Yi,labels:{rotate:-90}}}))),series:W((()=>[{name:"Simulated "+e.paramId,data:e.simulatedValues.map((t=>Math.round(t[e.paramId])))}]))})});oa.render=function(e,t,i,n,r,a){const s=P("apexchart");return k(),b("div",null,[f("div",null,w(e.paramId),1),f(s,{type:"bar",options:e.chartOptions,series:e.series},null,8,["options","series"])])};var ua=h({components:{Citation:Hr,PeekChart:oa},setup(){const e=_r();return{store:e,game:W((()=>e.state.game)),gameYears:Yi}},data:()=>({lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1,simulatedLaws:[]}),methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){this.unselect(),this.lawSelected=e},selectEvent(e){this.unselect(),this.eventSelected=e},selectParam(e){this.unselect(),this.paramSelected=e},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0},dragStart(e,t){const{lawId:i,year:n}=t;e.dataTransfer&&(e.dataTransfer.dropEffect="link",i&&e.dataTransfer.setData("lawId",i),n&&e.dataTransfer.setData("year",n.toString()))},onDrop(e,t){const{lawId:i,year:n}=t;if(e.dataTransfer)if(n){const t=e.dataTransfer.getData("lawId"),i=gi.find((e=>e===t));i&&this.simulateLaw(i,n)}else if(i){const t=e.dataTransfer.getData("year"),n=this.gameYears.find((e=>e==Number(t)));n&&this.simulateLaw(i,n)}},simulateLaw(e,t){this.simulatedLaws=this.simulatedLaws.filter((t=>t.lawId!=e)).concat({lawId:e,effectiveSince:t})}},computed:{startYearOfSelected(){if(!this.lawSelected||!this.game)return 2021;const e=this.game.acceptedLaws.find((e=>e.lawId===this.lawSelected));return e?e.effectiveSince:2021},selectedLaw(){return mi.find((e=>e.id===this.lawSelected))},selectedEvent(){return Ri.find((e=>e.id===this.eventSelected))},selectedParam(){return this.paramSelected?vt[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof De?e:void 0},cParam(){const e=this.selectedParam;return e instanceof Ae?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},effectsOfSelected(){if(!this.lawSelected||!this.game)return[];this.game;const e=this.selectedLaw;return e?e.effects(this.game,this.startYearOfSelected,this.game.currentYear):[]},sortedValues(){return this.game?Jr(this.game,this.effectsOfSelected):[]},sortedLaws(){return this.game?function(e,t,i,n){const r=e.proposedLaws,a=e.acceptedLaws.map((e=>e.lawId)),s=e.rejectedLaws;return n.map((t=>{return{id:t.id,priority:t.priority(e),state:(i=t.id,a.includes(i)?"a":r.includes(i)?"p":s.includes(i)?"r":"x")};var i})).sort(((e,n)=>jr(e,n,t,"id")*i)).map((e=>o(l({},e),{priority:e.priority.toFixed(2)})))}(this.game,this.lawsSortCol,this.lawsSortDir,mi):[]},sortedEvents(){return this.game?(e=this.game,t=this.eventsSortCol,i=this.eventsSortDir,Ri.map((t=>({id:t.id,probability:t.probability(e)}))).sort(((e,n)=>jr(e,n,t,"id")*i)).map((e=>o(l({},e),{probability:(100*e.probability).toFixed(2)})))):[];var e,t,i},combinedLaws(){var e;const t=this.simulatedLaws.map((e=>o(l({},e),{cls:"simulated"})));return((null==(e=this.game)?void 0:e.acceptedLaws)||[]).filter((e=>!t.some((t=>t.lawId===e.lawId)))).map((e=>o(l({},e),{cls:"accepted"}))).concat(t)},lawsToSimulate(){return this.combinedLaws.map((e=>pi(e)))},simulatedValues(){const e=this.lawsToSimulate,t=qi();return this.gameYears.map((i=>{for(;i>t.currentYear;)t.currentYear++,t.values=en(t,e,t.currentYear);return t.values}))},lawsInYear(){return e=>this.combinedLaws.filter((t=>t.effectiveSince===e))}}});const ca=y("data-v-8d7e2118");m("data-v-8d7e2118");const da={class:"peekData"},ha={class:"Menu"},ga=C("  "),ma=C("  "),pa=C("  "),ba=C("  "),fa=C("  "),va=C("  "),wa={key:0,class:"Details sidebyside"},ya={key:1,class:"Details sidebyside"},ka={class:"Title"},Sa={class:"Description"},za=f("div",{class:"SectionHead"},"Details:",-1),Pa=f("div",{class:"SectionHead"},"Internes:",-1),Da=f("div",{class:"SectionHead"},"Referenzen:",-1),Aa={key:2,class:"Details sidebyside"},Wa={class:"Title"},Va={class:"Description"},Ta=f("div",{class:"SectionHead"},"Details:",-1),La=f("div",{class:"SectionHead"},"Internes:",-1),Oa=f("div",{class:"SectionHead"},"Referenzen:",-1),Ca={key:3,class:"Details sidebyside"},Ea={class:"Title"},Fa={key:0},Ba={key:1},Ma={key:2},Ia=f("div",{class:"SectionHead"},"Details:",-1),Ua=f("div",{class:"SectionHead"},"Internes:",-1),xa=f("div",{class:"SectionHead"},"Referenzen:",-1),Na={key:4,class:"paramsList sidebyside"},Ga={class:"numbercol"},_a={class:"effcol"},Ka={key:5,class:"lawList sidebyside"},ja={class:"priocol"},Ja={key:6,class:"eventList sidebyside"},Ha={class:"priocol"},Za={key:7,class:"yearList sidebyside"};p();const Ra=ca(((e,t,i,n,r,a)=>{var s;const l=P("PeekChart"),o=P("Citation");return k(),b("details",da,[f("summary",{onClick:t[1]||(t[1]=t=>e.unselect()),class:"clickable"},"Peek"),f("div",ha,[f("a",{onClick:t[2]||(t[2]=t=>e.showCharts=!e.showCharts),class:["clickable",e.showCharts?"selected":""]},"Charts",2),ga,f("a",{onClick:t[3]||(t[3]=t=>e.showDetails=!e.showDetails),class:["clickable",e.showDetails?"selected":""]},"Details",2),ma,f("a",{onClick:t[4]||(t[4]=t=>e.showParams=!e.showParams),class:["clickable",e.showParams?"selected":""]},"Params",2),pa,f("a",{onClick:t[5]||(t[5]=t=>e.toggleLawList()),class:["clickable",e.showLaws?"selected":""]},"Laws",2),ba,f("a",{onClick:t[6]||(t[6]=t=>e.toggleEventList()),class:["clickable",e.showEvents?"selected":""]},"Events",2),fa,f("a",{onClick:t[7]||(t[7]=t=>e.showYears=!e.showYears),class:["clickable",e.showYears?"selected":""]},"Years",2),va]),e.showCharts?(k(),b("div",wa,[f(l,{simulatedValues:e.simulatedValues,paramId:"co2emissions"},null,8,["simulatedValues"]),f(l,{simulatedValues:e.simulatedValues,paramId:"popularity"},null,8,["simulatedValues"]),f(l,{simulatedValues:e.simulatedValues,paramId:"stateDebt"},null,8,["simulatedValues"]),f(l,{simulatedValues:e.simulatedValues,paramId:"co2budget"},null,8,["simulatedValues"])])):v("",!0),e.selectedLaw&&e.showDetails?(k(),b("div",ya,[f("div",ka,w(e.selectedLaw.title),1),f("div",Sa,w(e.selectedLaw.description),1),za,f("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,["innerHTML"]),Pa,f("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,["innerHTML"]),Da,(k(!0),b(S,null,z(e.citationsOfLaw,((e,t)=>(k(),b(o,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):v("",!0),e.selectedEvent&&e.showDetails?(k(),b("div",Aa,[f("div",Wa,w(e.selectedEvent.title),1),f("div",Va,w(e.selectedEvent.description),1),Ta,f("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,["innerHTML"]),La,f("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,["innerHTML"]),Oa,(k(!0),b(S,null,z(null==(s=e.selectedEvent)?void 0:s.citations,((e,t)=>(k(),b(o,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):v("",!0),e.selectedParam&&e.showDetails?(k(),b("div",Ca,[f("div",Ea,w(e.paramSelected)+" ["+w(e.selectedParam.unit)+"]",1),e.wParam?(k(),b("div",Fa,"Initial value: "+w(e.wParam.initialValue)+" "+w(e.wParam.unit),1)):v("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(k(),b("div",Ba," Should initially be: "+w(e.cParam.shouldInitiallyBe)+" "+w(e.cParam.unit),1)):v("",!0),e.cParam?(k(),b("div",Ma," Calculation: "+w(e.cParam.valueGetter),1)):v("",!0),Ia,f("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,["innerHTML"]),Ua,f("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,["innerHTML"]),xa,(k(!0),b(S,null,z(e.selectedParam.citations,((e,t)=>(k(),b(o,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):v("",!0),e.showParams?(k(),b("div",Na,[f("table",null,[(k(!0),b(S,null,z(e.sortedValues,(t=>(k(),b("tr",{key:t.id,class:["clickable",t.class],onClick:i=>e.selectParam(t.id)},[f("td",null,w(t.id),1),f("td",Ga,w(t.value),1),f("td",_a,w(t.effect),1),f("td",null,w(t.unit),1)],10,["onClick"])))),128))])])):v("",!0),e.showLaws?(k(),b("div",Ka,[f("table",null,[f("tr",null,[f("th",{onClick:t[8]||(t[8]=t=>e.sortLaws("state")),class:"clickable"},"S"),f("th",{onClick:t[9]||(t[9]=t=>e.sortLaws("id")),class:"clickable"},"ID"),f("th",{onClick:t[10]||(t[10]=t=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(k(!0),b(S,null,z(e.sortedLaws,(i=>(k(),b("tr",{key:i.id,class:["clickable",i.state],onClick:t=>e.selectLaw(i.id),draggable:"true",onDragstart:t=>e.dragStart(t,{lawId:i.id}),onDrop:E((t=>e.onDrop(t,{lawId:i.id})),["prevent"]),onDragover:t[11]||(t[11]=E((()=>{}),["prevent"])),onDragenter:t[12]||(t[12]=E((()=>{}),["prevent"]))},[f("td",null,w(i.state),1),f("td",null,w(i.id),1),f("td",ja,w(i.priority),1)],42,["onClick","onDragstart","onDrop"])))),128))])])):v("",!0),e.showEvents?(k(),b("div",Ja,[f("table",null,[f("tr",null,[f("th",{onClick:t[13]||(t[13]=t=>e.sortEvents("id")),class:"clickable"},"ID"),f("th",{onClick:t[14]||(t[14]=t=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(k(!0),b(S,null,z(e.sortedEvents,(t=>(k(),b("tr",{key:t.id,class:"clickable",onClick:i=>e.selectEvent(t.id)},[f("td",null,w(t.id),1),f("td",Ha,w(t.probability),1)],8,["onClick"])))),128))])])):v("",!0),e.showYears?(k(),b("div",Za,[f("table",null,[(k(!0),b(S,null,z(e.gameYears,(i=>(k(),b(S,{key:i},[f("tr",{draggable:"true",onDragstart:t=>e.dragStart(t,{year:i}),onDrop:E((t=>e.onDrop(t,{year:i})),["prevent"]),onDragover:t[15]||(t[15]=E((()=>{}),["prevent"])),onDragenter:t[16]||(t[16]=E((()=>{}),["prevent"]))},[f("th",null,w(i),1)],40,["onDragstart","onDrop"]),(k(!0),b(S,null,z(e.lawsInYear(i),(({lawId:i,cls:n})=>(k(),b("tr",{key:i,class:n,draggable:"true",onDragstart:t=>e.dragStart(t,{lawId:i}),onDrop:E((t=>e.onDrop(t,{lawId:i})),["prevent"]),onDragover:t[17]||(t[17]=E((()=>{}),["prevent"])),onDragenter:t[18]||(t[18]=E((()=>{}),["prevent"]))},[f("td",null,w(i),1)],42,["onDragstart","onDrop"])))),128))],64)))),128))])])):v("",!0)])}));ua.render=Ra,ua.__scopeId="data-v-8d7e2118";var $a=h({components:{PeekInside:ua},setup:()=>({store:_r(),devMode:"true"===localStorage.getItem("devMode")}),methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,i=Math.min(e/800,t/1e3),n=(t-1e3*i)/2;document.documentElement.style.setProperty("--scale",`${i}`),document.documentElement.style.setProperty("--translateX",`${n}px`)}},mounted(){setTimeout(this.updateStyle,0),window.addEventListener("resize",this.updateStyle)}});const Qa={class:"perspective"},qa={class:"peek"};$a.render=function(e,t,i,n,r,a){const s=P("router-view"),l=P("PeekInside");return k(),b(S,null,[f("div",Qa,[f(s)]),f("div",qa,[e.devMode?(k(),b(l,{key:0})):v("",!0)])],64)};const Ya=F($a);Ya.use(Kr,Gr),Ya.use(Fr),Ya.use(B),Ya.mount("#app");
