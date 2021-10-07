var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,l=(e,t)=>{for(var i in t||(t={}))r.call(t,i)&&s(e,i,t[i]);if(n)for(var i of n(t))a.call(t,i)&&s(e,i,t[i]);return e},o=(e,n)=>t(e,i(n));import{s as u,v as c,d,m as h,p as g,a as m,c as b,b as p,e as f,t as v,w,o as y,F as k,r as S,f as A,g as P,h as z,i as D,j as W,k as V,u as T,l as L,n as O,q as C}from"./vendor.f89ad69f.js";function E(e){return Object.entries(e).map((([e,t])=>o(l({},t),{id:e.replace(/\W/g,"_")})))}var F={title:"Abstandsregeln für Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erhöht wird. Das führte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply:()=>[],probability:()=>Math.random()},B={title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bewährt. Wir lassen sie so, wie sie sind.",effects:()=>[],priority:e=>Math.random()};const M=new u.exports.Converter;function U(e){return e>0?[...Array(e)].map(((e,t)=>t)):[]}function I(e,t){const i=e-t-1;return[...U(t),Math.max(t,i),...U(i).reverse()]}function x(e,...t){let i=e.map(((e,i)=>e+(t[i]||""))).join("").split("\n");0===i[0].length&&i.shift();const n=i[0].match(/^(\s+)/);return n&&!i.filter((e=>e.trim())).some((e=>!e.startsWith(n[1])))&&(i=i.map((e=>e.replace(n[1],"")))),M.makeHtml(i.join("\n"))}function G(e){return t=>!e(t)}const N=new Intl.DateTimeFormat("de-DE");class _{constructor(e){this.url=new URL(e.url),this.title=e.title,this.publisher=e.publisher,this.authors=e.authors,this.date=e.date?new Date(e.date):void 0,this.comment=e.comment,this.internalComment=e.internalComment,this.localCopy=e.localCopy,this.referringUrl=e.referringUrl?new URL(e.referringUrl):void 0,this.archiveUrl=e.archiveUrl?new URL(e.archiveUrl):void 0,this.archiveNotPossible=e.archiveNotPossible}dateString(){const e=this.date;return e?" ("+N.format(e)+")":""}toString(){return[this.authors?this.authors+this.dateString():void 0,this.title?'"'+this.title+'"':void 0,this.url,this.publisher].filter((e=>e)).join(", ")}}function K(e){const t=e.publisher||e.authors;return`[[${null!=t?t+": ":""}${e.title||e.url.toString()}](${e.url.toString()})]`}const j=new _({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),H=new _({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),Z=new _({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"}),J=new _({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineralölsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),R=new _({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile für wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),$=new _({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-°C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),Q=new _({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schlüsselergebnisse der Studie des Wuppertal Instituts für Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-°C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${K($)}.`});$.comment=x`Zusammengefasst in ${K(Q)}.`;const q=new _({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahreschätzung der deutschen Treibhausgas-Emissionen für das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),Y=new _({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen für das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),X=new _({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enthält CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] für mehrere Verkehrsmittel"}),ee=new _({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),te=new _({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Straßengüterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),ie=new _({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enthält Personenkilometer-Jahreswerte für mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),ne=new _({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung ÖPNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),re=new _({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),ae=new _({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle für 160g CO2 pro kWh Fernwärme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new _({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren für Fernwärme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle für 160g CO2 pro kWh Fernwärme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const se=new _({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),le=new _({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),oe=new _({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle wäre besser."}),ue=new _({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bevölkerung nach Nationalität und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),ce=new _({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur für Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),de=new _({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische Ämter des Bundes und der Länder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new _({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const he=new _({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgemäß - Interview mit Prof. Stefan Gössling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""}),ge=new _({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),me=new _({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),be=new _({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"});class pe{constructor(e){this.unit=e.unit,this.citations=e.citations?e.citations:[],this.details=e.details?e.details:"",this.internals=e.internals?e.internals:""}citationsDesc(){return this.citations.map((e=>e.toString())).join("; ")}}const fe={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class ve extends pe{constructor(e){super(e),this.writable=!0,this.initialValue=e.initialValue,this.applyBounds=fe[e.unit]}}class we extends pe{constructor(e){super(e),this.writable=!1,this.valueGetter=e.valueGetter,this.shouldInitiallyBe=e.shouldInitiallyBe}}const ye=new ve({unit:"MioTons",initialValue:6700,citations:[j],details:x`

  `,internals:x`

  `}),ke=new ve({unit:"MioTons",initialValue:186.793,citations:[q],details:x`

  `,internals:x`

  `}),Se=new we({unit:"MioTons",valueGetter:e=>e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4,shouldInitiallyBe:159.696,citations:[q,te],details:x`

  `,internals:x`
    ${K(q)}: 159.696 as MioTons

    ${K(te)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Ae=new we({unit:"MioTons",valueGetter:e=>e.co2emissionsStreetVehicles+65*e.publicLocalCapacity/1e6+32*e.publicNationalCapacity/1e6+222*e.airDomesticUsage/1e6+1.641,citations:[X,q],details:x`

  `,internals:x`
    ${K(X)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${K(q)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${K(q)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.
  `}),Pe=new we({unit:"MioTons",valueGetter:e=>0*e.buildingsSourceBio+.247*e.buildingsSourceGas+.318*e.buildingsSourceOil+.16*e.buildingsSourceTele,citations:[q,re],details:x`

  `,internals:x`
    TODO: #91 Gibt es hier bessere Quellen?

    ${K(re)}: 247g CO2 pro kWh Erdgas.

    ${K(re)}: 318g CO2 pro kWh Erdöl.

    ${K(ae)}: 160g CO2 pro kWh Fernwärme.

    ${K(q)}: Gesamtemissionenen addieren sich auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),ze=new ve({unit:"MioTons",initialValue:67.936,citations:[q],details:x`

  `,internals:x`

  `}),De=new ve({unit:"MioTons",initialValue:9.243,citations:[q],details:x`

  `,internals:x`

  `}),We=new we({unit:"MioTons",valueGetter:e=>.399*e.electricityGas+.058*e.electricitySolar+.005*e.electricityWind+.02*e.electricityWater+.835*e.electricityHardCoal+1.137*e.electricityBrownCoal+.03*e.electricityBiomass+.005*e.electricityNuclear,citations:[se,q],details:x`

  `,internals:x`
    ${K(se)}:
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
    - Diskrepanz zu ${K(le)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${K(q)}: 258.043 as MioTons in 2019.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),Ve=new we({unit:"MioTons",valueGetter:e=>e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers,details:x`

  `,internals:x`
Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[Y]}),Te=new ve({unit:"TWh",initialValue:480.54,citations:[H],details:x`

  `,internals:x`

  `}),Le=new ve({unit:"Percent",initialValue:50,citations:[],details:x`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:x`

  `}),Oe=new ve({unit:"TWh",initialValue:51.42,citations:[H],details:x`

  `,internals:x`

  `}),Ce=new ve({unit:"TWh",initialValue:131.85,citations:[H],details:x`

  `,internals:x`

  `});const Ee=new we({unit:"TWh",valueGetter(e){const t=Ce.initialValue,i=e.electricityGridQuality,n=function(e,t){const i=e.value-t.value;return n=>e.result*(n-t.value)/i-t.result*(n-e.value)/i}({value:50,result:t},{value:100,result:e.electricityDemand})(i);return Math.min(n,e.electricityWind)},shouldInitiallyBe:Ce.initialValue,citations:[],details:x`The electrical energy produced by wind and not impaired by poor quality of the grid.`,internals:x`

  `}),Fe=new ve({unit:"TWh",initialValue:6,citations:[H],details:x`

  `,internals:x`

  `}),Be=new ve({unit:"Percent",initialValue:100,citations:[be],details:x`
    Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),Me=new ve({unit:"TWh",initialValue:14.99,citations:[H],details:x`

  `,internals:x`

  `}),Ue=new ve({unit:"TWh",initialValue:43.19,citations:[H],details:x`

  `,internals:x`

  `}),Ie=new ve({unit:"TWh",initialValue:60.91,citations:[H],details:x`

  `,internals:x`

  `}),xe=new ve({unit:"TWh",initialValue:35.46,citations:[H],details:x`

  `,internals:x`

  `}),Ge=new ve({unit:"TWh",initialValue:82.13,citations:[H],details:x`

  `,internals:x`

  `}),Ne=new we({unit:"TWh",valueGetter:e=>e.electricityHardCoal+e.electricityBrownCoal,details:x`

  `,internals:x`

  `}),_e=new we({unit:"TWh",valueGetter:e=>e.electricityDemand-e.electricitySolar-e.electricityWindUsable-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear,details:x`

  `,internals:x`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),Ke=new ve({unit:"GramPerPsgrKm",initialValue:160,citations:[X],details:x`

  `,internals:x`
    ${K(X)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),je=new ve({unit:"MioPsgrKm",initialValue:917e3,citations:[ie],details:x`

  `,internals:x`

  `}),He=new ve({unit:"Percent",initialValue:.5,citations:[oe],details:x`

  `,internals:x`
    Die verschiedenen Zahlen in ${K(oe)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),Ze=new ve({unit:"MioPsgrKm",initialValue:112600,citations:[ie],details:x`

  `,internals:x`

  `}),Je=new ve({unit:"MioPsgrKm",initialValue:112600,citations:[ie],details:x`

  `,internals:x`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),Re=new ve({unit:"MioPsgrKm",initialValue:67300,citations:[ie],details:x`

  `,internals:x`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),$e=new ve({unit:"MioPsgrKm",initialValue:67300,citations:[ie],details:x`

  `,internals:x`
Siehe \`publicLocalCapacity\`.
  `}),Qe=new ve({unit:"MioPsgrKm",initialValue:10100,citations:[ie],details:x`

  `,internals:x`

  `}),qe=new ve({unit:"MioPsgrKm",initialValue:61700,citations:[ie],details:x`

  `,internals:x`

  `}),Ye=new we({unit:"MioPsgrKm",valueGetter:e=>e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage,shouldInitiallyBe:1168700,citations:[ie],details:x`

  `,internals:x`

  `}),Xe=new ve({unit:"TWh",initialValue:226,citations:[],details:x`

  `,internals:x`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),et=new ve({unit:"TWh",initialValue:544,citations:[],details:x`

  `,internals:x`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),tt=new we({unit:"TWh",valueGetter:e=>e.buildingsPrivateDemand+e.buildingsIndustryDemand,details:x`

  `,internals:x`

  `}),it=new ve({unit:"TWh",initialValue:130,citations:[],details:x`

  `,internals:x`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),nt=new ve({unit:"TWh",initialValue:219,citations:[],details:x`

  `,internals:x`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),rt=new ve({unit:"TWh",initialValue:58,citations:[],details:x`

  `,internals:x`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),at=new we({unit:"TWh",valueGetter:e=>e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele),details:x`

  `,internals:x`
TODO: #78 Anfangswert mit Quelle.
  `}),st=new ve({unit:"Percent",initialValue:50,citations:[],details:x`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:x`

  `}),lt=new ve({unit:"TsdPeople",initialValue:83155.031,citations:[ue],details:x`

  `,internals:x`
Anfangswert ist der Stand 31.12.2020.
  `}),ot=new ve({unit:"TsdPeople",initialValue:2695,citations:[ce],details:x`

  `,internals:x`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),ut=new ve({unit:"MrdEuro",initialValue:3332,citations:[de],details:x`

  `,internals:x`
Anfangswert ist das BIP 2020.
  `}),ct=new ve({unit:"MrdEuro",initialValue:1899,citations:[],details:x`

  `,internals:x`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),dt={co2budget:ye,co2emissionsIndustry:ke,co2emissionsStreetVehicles:Se,co2emissionsMobility:Ae,co2emissionsAgriculture:ze,co2emissionsBuildings:Pe,co2emissionsOthers:De,co2emissionsEnergy:We,co2emissions:Ve,electricityDemand:Te,electricityGridQuality:Le,electricitySolar:Oe,electricityWind:Ce,electricityWindUsable:Ee,electricityWindOnshoreMaxNew:Fe,electricityWindEfficiency:Be,electricityWater:Me,electricityBiomass:Ue,electricityNuclear:Ie,electricityHardCoal:xe,electricityBrownCoal:Ge,electricityCoal:Ne,electricityGas:_e,carEmissionFactor:Ke,carUsage:je,carRenewablePercentage:He,publicLocalUsage:Ze,publicLocalCapacity:Je,publicNationalUsage:Re,publicNationalCapacity:$e,airDomesticUsage:Qe,airIntlUsage:qe,passengerTransportUsage:Ye,buildingsIndustryDemand:Xe,buildingsPrivateDemand:et,buildingsDemand:tt,buildingsSourceBio:it,buildingsSourceOil:nt,buildingsSourceTele:rt,buildingsSourceGas:at,popularity:st,numberOfCitizens:lt,unemployment:ot,gdp:ut,stateDebt:ct},ht=Object.entries(dt).filter((e=>e[1]instanceof ve)).map((e=>e)).reduce(((e,t)=>(e[t[0]]=t[1],e)),{}),gt=Object.entries(dt).filter((e=>e[1]instanceof we)).map((e=>e)).reduce(((e,t)=>(e[t[0]]=t[1],e)),{});class mt extends ve{constructor(e,t){super(e),this.name=t}}const bt=Object.entries(ht).map((e=>new mt(e[1],e[0])));class pt extends we{constructor(e,t){super(e),this.name=t}}Object.entries(gt).map((e=>new pt(e[1],e[0])));const ft=Object.entries(dt).map((e=>e[1]instanceof ve?new mt(e[1],e[0]):new pt(e[1],e[0]))),vt=bt.reduce(((e,t)=>o(l({},e),{[t.name]:t.initialValue})),{});function wt(e){const t=l({},e);return Object.entries(gt).forEach((e=>Object.defineProperty(t,e[0],{get:()=>e[1].valueGetter(t)}))),t}function yt(e,t){return{type:"dispatch",condition:!0,if(e){return this.condition=e,this},apply(i){this.condition&&i.dispatch(e,t)}}}function kt(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(e){return this.percent=e,this},byValue(e){return this.value=e,this},setValue(e){return this.absolute=e,this},if(e){return this.condition=e,this},getOldNew(e){const t=this.name,i=e[t];if(!this.condition)return{oldVal:i,newVal:i};const n=dt[t],r=null!=this.absolute?this.absolute:i+(this.value||i*this.percent/100);return{oldVal:i,newVal:n.applyBounds(r)}},getChange(e){if(!this.condition)return 0;const{oldVal:t,newVal:i}=this.getOldNew(e);return i-t},apply(e){if(this.condition){const{newVal:t}=this.getOldNew(e.values);e.values[this.name]=t}return this}}}function St(e,t){if(dt[e].unit!=dt[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(e){return this.percent=e,this},byValue(e){return this.value=e,this},if(e){return this.condition=e,this},getEffect(e){const t=e[this.to],i=e[this.from];if(!this.condition)return{oldTo:t,oldFrom:i,newTo:t,newFrom:i};const n=dt[this.to],r=dt[this.from],a=this.value||t*this.percent/100,s=n.applyBounds(t+a)-t,l=-r.applyBounds(i-s)+i;return{oldTo:t,newTo:t+l,oldFrom:i,newFrom:i-l}},apply(e){if(this.condition){const{newTo:t,newFrom:i}=this.getEffect(e.values);e.values[this.to]=t,e.values[this.from]=i}return this}}}function At(e,t){t.filter((e=>e.condition)).forEach((t=>t.apply(e)))}var Pt={title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,i){const n=i-t,r=n<18?4.3/18:0,a=(10-n)/55,s=Math.max(50*a,0);return[kt("electricityHardCoal").setValue(0),kt("electricityBrownCoal").setValue(0),kt("stateDebt").byValue(2.5-r),kt("unemployment").byValue(s)]},priority:e=>e.values.electricityCoal/e.values.electricityDemand<=.1?0:Ai(1e4,0,e.values.unemployment),citations:[],details:x`

  `,internals:x`
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
  `},zt={title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effects:()=>[kt("stateDebt").byValue(-37),kt("electricityHardCoal").byPercent(-10),kt("electricityBrownCoal").byPercent(-5),kt("electricityWind").byValue(5),kt("electricitySolar").byValue(3),kt("electricityWater").byValue(.5)],priority:e=>Ai(2050,2021,e.currentYear)};const Dt=wt(vt).electricityGas;var Wt={title:"Kernenergienutzung verlängern",description:"Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effects:()=>[kt("electricityNuclear").setValue(104.3),kt("stateDebt").byValue(-2.5),kt("popularity").byValue(-4)],priority:e=>Ai(Dt,1.1*Dt,e.values.electricityGas)},Vt={title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,i){const n={2021:60.45,2022:30.21}[i]||0;return[kt("electricityNuclear").setValue(n)]},priority:e=>0},Tt={title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren für den Ausbau des Stromnetzes",effects:(e,t,i)=>[kt("popularity").byValue(-3).if(t===i),kt("electricityGridQuality").byValue(1)],priority:e=>Ai(70,27,Di(e)),citations:[],details:x`

  `,internals:x`
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
  `},Lt={title:"Netzausbau fördern",description:"Ausbau des Stromnetzes mit Steuermitteln fördern",effects:(e,t,i)=>[kt("popularity").byValue(-1).if(t===i),kt("stateDebt").byValue(2),kt("electricityGridQuality").byValue(5).if(zi(e,"NetzausbauErleichtern"))],priority:e=>Ai(70,27,Di(e)),citations:[],details:x`

  `,internals:x`
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
  `},Ot={title:"Stromspeicherung erleichtern",description:"Bürokratische Hürden für den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effects:(e,t,i)=>[kt("electricityGridQuality").byValue(.2)],priority:e=>Ai(80,45,e.values.electricityGridQuality),citations:[],details:x`

  `,internals:x`
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
  `},Ct={title:"Stromspeicherung fördern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln fördern",effects:(e,t,i)=>zi(e,"StromspeicherungErleichtern")?[kt("popularity").byValue(.2),kt("stateDebt").byValue(2),kt("electricityGridQuality").byValue(1)]:[kt("stateDebt").byValue(1)],priority:e=>Ai(80,45,e.values.electricityGridQuality),citations:[],details:x`

  `,internals:x`
    # Happy Path 8.5

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    - [x] Wenn nicht "StromspeicherungErleichtern" ausgewählt wurde, kostet das 1 MrdEuro im Jahr, sonst:
    - [x] Viele verdienen Geld mit kleinen Batteriespeichern: Popularität steigt um 0,2% pro Jahr.
    - [x] Die Netzqualität steigt jährlich um 2%.
    - [x] Konsten: 2 Mrd Euro pro Jahr.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Identisch zu "StromspeicherungErleichtern".

    - 0% bei einer Netzqualität von 80%. (Zu Beginn: 50%)
    - 100% bei einer Netzqualität von 45%.
    - linear interpoliert
  `},Et={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit vergünstigten Krediten gefördert.",effects(e,t,i){const n=i-t>2;return[kt("stateDebt").byValue(.5),kt("buildingsSourceBio").byPercent(-1).if(n),kt("buildingsSourceOil").byPercent(-1).if(n),kt("buildingsSourceTele").byPercent(-1).if(n),kt("buildingsPrivateDemand").byPercent(-1).if(n)]},priority:e=>Ai(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100)},Ft={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gefördert.",effects(e,t,i){const n=i-t>2;return[kt("stateDebt").byValue(1),kt("buildingsSourceBio").byPercent(-2).if(n),kt("buildingsSourceOil").byPercent(-2).if(n),kt("buildingsSourceTele").byPercent(-2).if(n),kt("buildingsPrivateDemand").byPercent(-2).if(n),kt("popularity").byValue(5).if(n)]},priority:e=>Ai(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100)},Bt={title:"Dämmung von Wohngebäuden sehr stark fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungsplätze im Handwerk geschaffen durch einen Zuschuss von 500€ pro Monat, damit der zu erwartende Bauboom bewältigt werden kann.",effects(e,t,i){const n=i-t,r=n>=2;return[kt("stateDebt").byValue(3),kt("buildingsSourceBio").byPercent(-4).if(r),kt("buildingsSourceOil").byPercent(-4).if(r),kt("buildingsSourceTele").byPercent(-4).if(r),kt("buildingsPrivateDemand").byPercent(-4).if(r),kt("popularity").byValue(10).if(1===n),kt("popularity").byValue(5).if(r)]},priority:e=>Ai(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100),citations:[],details:x`

  `,internals:x`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `},Mt={title:"Dämmung von Wohngebäuden abschaffen",description:"Wir geben den Bürgern die Freiheit zurück, selbst zu entscheiden, ob sie ihr Haus dämmen wollen und lassen die Förderung auslaufen",effects:()=>[kt("stateDebt").byValue(-.5),kt("buildingsSourceBio").byPercent(-.5),kt("buildingsSourceOil").byPercent(-.5),kt("buildingsSourceTele").byPercent(-.5),kt("buildingsPrivateDemand").byPercent(-.5)],priority(e){const t=function(e,t){const i=e.sort(((e,t)=>t.effectiveSince-e.effectiveSince)).find((e=>t.test(e.lawId)));return null==i?void 0:i.lawId}(e.acceptedLaws,/^DaemmungAltbau/);if(!t||"DaemmungAltbauAbschaffen"===t)return 0;return Ai(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100)}},Ut={title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",effects(e,t,i){const n=e.values.publicLocalCapacity/e.values.publicLocalUsage*100,r=i-t;return[kt("stateDebt").byValue(3),kt("publicLocalCapacity").byPercent(1),St("publicLocalUsage","carUsage").byPercent(1).if(n>=105),kt("popularity").byValue(2).if(r>=5)]},priority:e=>Ai(150,80,e.values.publicLocalCapacity/e.values.publicLocalUsage*100),citations:[ne],details:x`

  `,internals:x`
    # Happy Path 18

    # Folgen

    - Der Staatshaushalt wird jährlich mit 3 Mrd € mehr belastet. (${K(ne)})
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
  `},It={title:"Nahverkehr Modernisieren",description:"Anschaffung Moderner, bequemer, emissionsfreier Fahrzeuge für den Nahverkehr wird gefördert.",effects:(e,t,i)=>[kt("stateDebt").byValue(3),kt("publicLocalCapacity").byPercent(1),St("publicLocalUsage","carUsage").byPercent(1),kt("popularity").byValue(3)],priority(e){if(!zi(e,"FernverkehrModernisieren"))return 0;return Ai(0,24,e.values.co2emissionsMobility/e.values.co2emissions*100)},citations:[ee],details:x`

  `,internals:x`
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
  `},xt={title:"Förderung für Tierhaltung abschaffen",description:"Subventionen für Tierhaltung werden ersatzlos gestrichen",effects:(e,t,i)=>[kt("stateDebt").byValue(-10),kt("co2emissionsAgriculture").byValue(-10).if(t===i),kt("popularity").byValue(-20).if(t===i)],priority:e=>Ai(1e4,0,e.values.unemployment)},Gt={title:"Nahverkehr Kostenlos",description:"Die Kosten für den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr benötigt werden.",effects(e,t,i){const n=t===i?10:1;return[kt("stateDebt").byValue(10),St("publicLocalUsage","carUsage").byPercent(n),kt("popularity").byValue(10).if(t===i),kt("unemployment").byValue(20).if(t===i)]},priority:e=>Ai(90,120,e.values.publicLocalCapacity/e.values.publicLocalUsage*100),citations:[ee],details:x`

  `,internals:x`
    # Happy Path 19

    # Folgen

    - Der Staatshaushalt wird jährlich mit 10 Mrd € stärker belastet.
        - 13.3 Mrd € Ticketeinnahmen pro Jahr (${K(ee)})
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
  `},Nt={title:"Autos in Innenstädten verbieten",description:"Die Innenstädte der großen Städte werden zu Autofreien Zonen erklärt und begrünt, sowie Fahrrad und Fußgängerzonen eingerichtet.",effects(e,t,i){var n=-2;return e.values.publicLocalCapacity>1.2*e.values.publicLocalUsage&&(n=-1,t+2<i&&(n=2)),[kt("popularity").byValue(n),St("publicLocalUsage","carUsage").byPercent(10).if(t===i)]},priority:e=>Ai(90,120,e.values.publicLocalCapacity/e.values.publicLocalUsage*100)},_t={title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des öffentlichen Fernverkehrs wird bundesweit stärker Bezuschusst und Vorangetrieben",effects(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return[kt("stateDebt").byValue(6),kt("publicNationalCapacity").byPercent(1),St("publicNationalUsage","carUsage").byPercent(1).if(t>=105),St("publicNationalUsage","carUsage").byPercent(.5).if(t>=105),kt("popularity").byValue(2).if(t>=105)]},priority:e=>Ai(150,80,e.values.publicNationalCapacity/e.values.publicNationalUsage*100),citations:[],details:x`

  `,internals:x`
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
  `},Kt={title:"Fernverkehr Modernisieren",description:"Moderne, bequeme und weniger anfällige Züge werden für den Fernverkehr angeschafft.",effects:(e,t,i)=>[kt("stateDebt").byValue(3),kt("publicNationalCapacity").byPercent(1),St("publicNationalUsage","carUsage").byPercent(1),kt("popularity").byValue(3)],priority:e=>Ai(0,24,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[],details:x`

  `,internals:x`
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
  `},jt={title:"Wasserstofftechnologie fördern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie wird stark gefördert.",effects:(e,t,i)=>[kt("stateDebt").byValue(3),kt("carRenewablePercentage").byValue(1).if(t+5<=i)],priority(e){const t=e.values;return Ai(40,90,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)}},Ht={title:"Wasserstoffmobilität fördern",description:"Wasserstoffbasierte Fahrzeuge werden gefördert.",effects:(e,t,i)=>zi(e,"WasserstofftechnologieFoerdern")?[kt("stateDebt").byValue(3),kt("carRenewablePercentage").byValue(1),kt("popularity").byValue(1).if(t===i)]:[],priority:e=>Ai(0,26,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[],details:x`

  `,internals:x`
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
  `},Zt={title:"Abschaffung der Mineralölsteuer",description:"Die Steuer auf sämtliche erdölbasierten Treibstoffe wird abgeschafft.",effects:(e,t,i)=>[kt("stateDebt").byValue(41),kt("popularity").byValue(5).if(t===i),kt("popularity").byValue(-3).if(t<i),St("publicLocalUsage","carUsage").byPercent(-20).if(t===i),St("publicNationalUsage","carUsage").byPercent(-20).if(t===i)],priority(e){const t=e.values;return Ai(60,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[J],details:"",internals:x`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${K(J)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `},Jt={title:"Ausbau von Straßen",description:"Autobahnen und Straßen werden intensiver ausgebaut.",effects:e=>[kt("stateDebt").byValue(5),kt("popularity").byValue(.5),St("publicLocalUsage","carUsage").byPercent(-1),St("publicNationalUsage","carUsage").byPercent(-1)],priority(e){const t=e.values;return Ai(60,100,t.carUsage/t.passengerTransportUsage*100)}},Rt={title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effects:(e,t,i)=>[kt("stateDebt").byValue(-7.35),kt("popularity").byValue(-1).if(t===i)],priority(e){const t=e.values;return Ai(10,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)}},$t={title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen für Dienstwagen werden abgeschafft.",effects:(e,t,i)=>[kt("stateDebt").byValue(-18),kt("popularity").byValue(-1).if(t===i),St("carUsage","publicLocalUsage").byPercent(-.05)],priority(e){const t=e.values;return Ai(50,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[R,he],details:x`

  `,internals:x`
    # Happy Path 20

    Zunächst sollte Nah- und Fernverkehr attraktiver gemacht werden.
    TODO: Folgen sollten davon abhängen, ob es attraktive Alternativen gibt.

    # Folgen

    - Steuermehreinnahmen: 18 mrd€ / Jahr (${K(R)})
    - -0.05% Fahleistung pro Jahr (Anreiz für Auto fällt weg Gebrauchte Wagen werden teuerer).
        - ${K(he)} sagt es gibt keine echte Schätzung dafür.
    - Entsprechend mehr Nahverkehrnutzung
    - Zufriedenheit sinkt einmalig um 1%

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 50%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `},Qt={title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=kt("carEmissionFactor").byValue(157.9),i=t.getChange(e.values);return[kt("popularity").byValue(2).if(i<0),t]},priority(e){if(zi(e,"Tempolimit100AufAutobahnen")||zi(e,"Tempolimit120AufAutobahnen")||zi(e,"TempolimitAufAutobahnenAussitzen"))return 0;const t=e.values;return Ai(10,100,t.carUsage/t.passengerTransportUsage*100)}},qt={title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=kt("carEmissionFactor").byValue(157.1),i=t.getChange(e.values);return[kt("popularity").byValue(2).if(i<0),t]},priority(e){if(!zi(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values;return Ai(10,100,t.carUsage/t.passengerTransportUsage*100)}},Yt={title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=kt("carEmissionFactor").byValue(154.1),i=t.getChange(e.values);return[kt("popularity").byValue(-1).if(i<0),t]},priority(e){if(!zi(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values;return Ai(10,100,t.carUsage/t.passengerTransportUsage*100)}},Xt={title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das könnte zwar Strafen oder gar Zwangsmaßnahmen bewirken, aber das Risiko der gefährdeten Wiederwahl ist zu groß.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects:()=>[kt("stateDebt").byValue(-10),kt("popularity").byValue(-2)],priority(e){if(zi(e,"Tempolimit100AufAutobahnen")||zi(e,"Tempolimit120AufAutobahnen")||zi(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values;return Ai(10,100,t.carUsage/t.passengerTransportUsage*100)}},ei={title:"Elektromobilität Fördern",description:"Höhere Kaufprämien, Steuerbefreiung, günstiges Laden für E-Autos.",effects:(e,t,i)=>zi(e,"LadeinfrastrukturAusbauen")?[kt("stateDebt").byValue(5),kt("carRenewablePercentage").byValue(1),kt("popularity").byValue(4).if(t===i)]:[],priority(e){if(!zi(e,"LadeinfrastrukturAusbauen"))return 0;return Ai(0,25,e.values.co2emissionsMobility/e.values.co2emissions*100)},citations:[],details:x`

  `,internals:x`
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
  `},ti={title:"Ladeinfrastruktur ausbauen",description:"Ausbau der Ladeinfrastruktur wird mit Steuermitteln stark gefördert.",effects:(e,t,i)=>[kt("stateDebt").byValue(5),kt("carRenewablePercentage").byValue(1),kt("popularity").byValue(2).if(t===i)],priority:e=>Ai(0,25,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[ee],details:x`

  `,internals:x`
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
  `},ii={title:"Windkraft vereinfachen",description:"Genehmigungen für Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effects:(e,t,i)=>[],priority:e=>Ai(80,27,Di(e)),citations:[],details:x`

  `,internals:x`
    # Happy Path 1.3

    # Folgen

    - Popularität unverändert: Einige freuen sich, andere ärgern die Windräder.
    - Kostenneutral.
    - Änderungen in den Ausschreibungsverfahren und Abstandsregeln wirken sich schneller aus.

    # Priorität

    - 0% bei einem Anteil von Windstrom von 80%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert
  `},ni={title:"Abstandsregeln für Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem über Abstände zwischen den Windkraftanlagen und Wohngebäuden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=zi(e,"WindkraftVereinfachen")?0:5;return[kt("electricityWindOnshoreMaxNew").setValue(6).if(i>=t+n)]},priority:e=>zi(e,"AbstandsregelnFuerWindkraftLockern")?Ai(30,100,Di(e)):zi(e,"AbstandsregelnFuerWindkraftVerschaerfen")?Ai(70,27,Di(e)):0},ri={title:"Abstandsregeln für Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln für Windkraftanlagen sowie Bauerlaubniss in Wäldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=zi(e,"WindkraftVereinfachen")?0:5;return[kt("popularity").byValue(-3).if(t===i),kt("electricityWindOnshoreMaxNew").setValue(30).if(i>=t+n)]},priority:e=>zi(e,"AbstandsregelnFuerWindkraftWieBisher")?Ai(70,27,Di(e)):zi(e,"AbstandsregelnFuerWindkraftAbschaffen")?Ai(30,100,Di(e)):0,citations:[],details:x`

  `,internals:x`
    # Happy Path 2

    # Priorität

    Zu Beginn und wenn "WieBisher" ausgewählt:

    - 0% bei einem Anteil von Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert

    Wenn Abstandsregeln abgeschafft wurden:

    - 0% bei einem Anteil von Windstrom von 30%.
    - 100% bei einem Anteil von Windstrom von 100%.
  `},ai={title:"Abstandsregeln für Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=zi(e,"WindkraftVereinfachen")?0:5;return[kt("popularity").byValue(-40).if(t===i),kt("electricityWindOnshoreMaxNew").setValue(1e3).if(i>=t+n)]},priority:e=>zi(e,"AbstandsregelnFuerWindkraftLockern")?Ai(80,25,Di(e)):0},si={title:"Abstandsregeln für Windkraft verschärfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngebäuden im Innenbereich muss das Zehnfache der Gesamthöhe der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects:(e,t,i)=>[kt("popularity").byValue(5).if(t===i),kt("electricityWindOnshoreMaxNew").setValue(.42)],priority:e=>zi(e,"AbstandsregelnFuerWindkraftWieBisher")?Ai(0,100,Di(e)):0},li={title:"Ausschreibungsverfahren für Windkraft wie zu Beginn",description:"Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=zi(e,"WindkraftVereinfachen")?0:5,r=Math.min(6.9,e.values.electricityWindOnshoreMaxNew);return[kt("electricityWind").byValue((r+1.2)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>zi(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?Ai(60,100,Wi(e)):0},oi={title:"Ausschreibungsverfahren für Windkraft verdoppeln",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=zi(e,"WindkraftVereinfachen")?0:5,r=Math.min(13.8,e.values.electricityWindOnshoreMaxNew);return[kt("popularity").byValue(-1).if(t===i),kt("unemployment").byValue(-20).if(t===i),kt("electricityWind").byValue((r+2.4)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>zi(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?Ai(100,50,Wi(e)):zi(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?Ai(40,100,Wi(e)):0},ui={title:"Ausschreibungsverfahren für Windkraft vervierfachen",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=zi(e,"WindkraftVereinfachen")?0:5,r=Math.min(27.6,e.values.electricityWindOnshoreMaxNew);return[kt("popularity").byValue(-2).if(t===i),kt("unemployment").byValue(-100).if(t===i),kt("electricityWind").byValue((r+4.8)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>zi(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?Ai(100,50,Wi(e)):zi(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?Ai(0,100,Wi(e)):0,citations:[],details:x`
    Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung
    von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen
    Subventionierung umsetzen kann bekommt den Zuschlag.
  `,internals:x`
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
  `},ci={title:"Ausschreibungsverfahren für Windkraft verachtfachen",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=zi(e,"WindkraftVereinfachen")?0:5,r=Math.min(55.2,e.values.electricityWindOnshoreMaxNew);return[kt("popularity").byValue(-20).if(t===i),kt("unemployment").byValue(-100).if(t===i),kt("electricityWind").byValue((r+9.6)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>zi(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?Ai(100,50,Wi(e)):0},di={title:"CO2 Preis Erhöhen",description:"Die Preise werden schneller erhöht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=Pi(50,0,Wi(e),-1),r=Pi(50,0,e.values.carRenewablePercentage,-1),a=-.5;return[kt("stateDebt").byValue(-.045*e.values.co2emissions).if(i>=t+2),kt("stateDebt").byValue(-.03*e.values.co2emissions).if(i>=t+4),kt("popularity").byValue(n+r),kt("co2emissionsIndustry").byPercent(a),kt("co2emissionsAgriculture").byPercent(a),kt("co2emissionsOthers").byPercent(a),St("electricityBrownCoal","electricityWind").byPercent(-.35),St("electricityHardCoal","electricityWind").byPercent(-.35),St("electricityBrownCoal","electricitySolar").byPercent(-.15),St("electricityHardCoal","electricitySolar").byPercent(-.15),St("buildingsSourceOil","buildingsSourceBio").byPercent(a),St("carUsage","publicNationalUsage").byPercent(-.25),St("carUsage","publicLocalUsage").byPercent(-.25)]},priority:e=>zi(e,"VollerCO2Preis")||zi(e,"WirksamerCO2Preis")?0:50,citations:[me],details:x`

  `,internals:x`
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
  `},hi={title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=Pi(80,50,Wi(e),-3),r=Pi(80,50,e.values.carRenewablePercentage,-3),a=-2;return[kt("stateDebt").byValue(-.125*e.values.co2emissions),kt("popularity").byValue(n+r),kt("co2emissionsIndustry").byPercent(a),kt("co2emissionsAgriculture").byPercent(a),kt("co2emissionsOthers").byPercent(a),St("electricityBrownCoal","electricityWind").byPercent(-1.4),St("electricityHardCoal","electricityWind").byPercent(-1.4),St("electricityBrownCoal","electricitySolar").byPercent(-.6),St("electricityHardCoal","electricitySolar").byPercent(-.6),St("buildingsSourceOil","buildingsSourceBio").byPercent(a),St("carUsage","publicNationalUsage").byPercent(-1),St("carUsage","publicLocalUsage").byPercent(-1)]},priority:e=>zi(e,"CO2PreisErhoehen")?50:0,citations:[me],details:x`

  `,internals:x`
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
  `},gi={title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=Pi(90,50,Wi(e),-10),r=Pi(90,50,e.values.carRenewablePercentage,-10),a=-5;return[kt("stateDebt").byValue(-3*e.values.co2emissions),kt("popularity").byValue(n+r),kt("co2emissionsIndustry").byPercent(a),kt("co2emissionsAgriculture").byPercent(a),kt("co2emissionsOthers").byPercent(a),St("electricityBrownCoal","electricityWind").byPercent(-3.5),St("electricityHardCoal","electricityWind").byPercent(-3.5),St("electricityBrownCoal","electricitySolar").byPercent(-1.5),St("electricityHardCoal","electricitySolar").byPercent(-1.5),St("buildingsSourceOil","buildingsSourceBio").byPercent(a),St("carUsage","publicNationalUsage").byPercent(-2.5),St("carUsage","publicLocalUsage").byPercent(-2.5)]},priority:e=>zi(e,"WirksamerCO2Preis")?50:0,citations:[ge],details:x`

  `,internals:x`
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
  `},mi={title:"Solarstrom Förderung einstellen",description:"Mittlere bis große Solaranlagen sollten sich selbst tragen. Die Förderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:()=>[kt("electricitySolar").byValue(2)],priority:e=>zi(e,"SolarstromFoerderungWieZuBeginn")?Ai(0,100,Wi(e)):0,details:x`

  `},bi={title:"Solarstrom Förderung wie zu Beginn",description:"Subventionierung für mittlere bis große Solaranlagen wie bisher",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:()=>[kt("electricitySolar").byValue(5)],priority:e=>zi(e,"SolarstromFoerdernx8")?Ai(70,100,Wi(e)):0,details:x`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `},pi={title:"Solarstrom Förderung x2",description:"Subventionierung für mittlere bis große Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[kt("popularity").byValue(10).if(t===i),kt("unemployment").byValue(-31e3).if(t===i),kt("electricitySolar").byValue(10)],priority:e=>zi(e,"SolarstromFoerderungWieZuBeginn")?Ai(100,30,Wi(e)):0,details:x`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `},fi={title:"Solarstrom Förderung x4",description:"Subventionierung für mittlere bis große Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[kt("popularity").byValue(20).if(t===i),kt("unemployment").byValue(-89e3).if(t===i),kt("electricitySolar").byValue(20)],priority:e=>zi(e,"SolarstromFoerdernx2")?Ai(100,30,Wi(e)):0,details:x`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:x`
    # Happy path 10

    ${K($)}
  `,citations:[$]},vi={title:"Solarstrom Förderung x8",description:"Subventionierung für mittlere bis große Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[kt("popularity").byValue(-10).if(t===i),kt("unemployment").byValue(-209e3).if(t===i),kt("electricitySolar").byValue(40)],priority:e=>zi(e,"SolarstromFoerdernx4")?Ai(100,30,Wi(e)):0,details:x`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.`},wi={title:"Solar auf neuen Dächern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die Dächer.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[kt("popularity").byValue(-3).if(t===i),kt("electricitySolar").byValue(2)],priority:e=>zi(e,"SolarstromFoerderungWieZuBeginn")?Ai(100,30,Wi(e)):0,details:x`

  `,internals:x`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `};const yi=E({AllesBleibtBeimAlten:B,InitialAtomausstieg:Vt,KohleverstromungEinstellen:Pt,EnergiemixRegeltDerMarkt:zt,KernenergienutzungVerlaengern:Wt,NetzausbauErleichtern:Tt,NetzausbauFoerdern:Lt,StromspeicherungErleichtern:Ot,StromspeicherungFoerdern:Ct,WindkraftVereinfachen:ii,AbstandsregelnFuerWindkraftVerschaerfen:si,AbstandsregelnFuerWindkraftWieBisher:ni,AbstandsregelnFuerWindkraftLockern:ri,AbstandsregelnFuerWindkraftAbschaffen:ai,AusschreibungsverfahrenfuerWindkraftWieBisher:li,AusschreibungsverfahrenfuerWindkraftVerdoppeln:oi,AusschreibungsverfahrenfuerWindkraftVervierfachen:ui,AusschreibungsverfahrenfuerWindkraftVerachtfachen:ci,SolarstromFoerderungAbschaffen:mi,SolarstromFoerderungWieZuBeginn:bi,SolarstromFoerdernx2:pi,SolarstromFoerdernx4:fi,SolarstromFoerdernx8:vi,SolarAufAllenDaechernVerpflichtend:wi,DaemmungAltbau1Percent:Et,DaemmungAltbau2Percent:Ft,DaemmungAltbau4Percent:Bt,DaemmungAltbauAbschaffen:Mt,NahverkehrKostenlos:Gt,AutosInInnenstaedtenVerbieten:Nt,WasserstofftechnologieFoerdern:jt,WasserstoffmobilitaetFoerdern:Ht,NahverkehrAusbauen:Ut,NahverkehrModernisieren:It,FernverkehrVerbindungenAusbauen:_t,FernverkehrModernisieren:Kt,AusbauVonStrassen:Jt,AbschaffungDerMineraloelsteuer:Zt,DieselPrivilegAbgeschaffen:Rt,DienstwagenPrivilegAbgeschaffen:$t,Tempolimit130AufAutobahnen:Qt,Tempolimit120AufAutobahnen:qt,Tempolimit100AufAutobahnen:Yt,TempolimitAufAutobahnenAussitzen:Xt,ElektromobilitaetFoerdern:ei,LadeinfrastrukturAusbauen:ti,FoerderungFuerTierhaltungAbschaffen:xt,CO2PreisErhoehen:di,WirksamerCO2Preis:hi,VollerCO2Preis:gi});function ki(e){const t=function(e){const t=yi.find((t=>t.id===e));if(t)return t;throw Error(`Law #${e} not found`)}(e.lawId);if(t)return o(l({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function Si(e){return e.map((e=>{const t=yi.find((t=>t.id===e));return t||console.error(`Inconsistency: Proposed law #${e} not found`),t})).filter((e=>e))}function Ai(e,t,i){const n=i-e,r=t-e;if(0===r)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return n/r*100}function Pi(e,t,i,n){return Math.max(0,Ai(e,t,i))/100*n}function zi(e,t){if(!yi.map((e=>e.id)).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some((i=>i.lawId===t&&i.effectiveSince<=e.currentYear))}function Di(e){const t=e.values;return t.electricityWindUsable/t.electricityDemand*100}function Wi(e){return(e.values.electricityWindUsable+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}function Vi(e){return e.find((e=>e.title.match(/subvention/i)&&e.title.match(/abbau/i)))}const Ti=2,Li=3,Oi=4,Ci=5,Ei=6;const Fi=E({AbstandsregelnWindkraft:F,Altbausanierung:{title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es für unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply:()=>[],probability(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return Math.max(1,Ai(15,25,t)/100)}},Bestechung:{title:"Anruf von befreundetem Unternehmer",description:"Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine\n    Ferienvilla auf Sardinien einladen. Er verlässt sich natürlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen\n    nicht zustimmen wirst.\n  ",apply(e){if(e){const t=Vi(Si(e.proposedLaws));if(t)return[yt("rejectLaw",{lawId:t.id})]}return[]},probability:e=>Vi(Si(e.proposedLaws))?Math.random():0},EnergieStrategie:{title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute über die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply:()=>[],probability:()=>Math.random()},FinanzKollaps:{title:"Zusammenbruch des Finanzsystems",description:"Deine Staatsfinanzen sind desaströs. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden\n    jemals wieder wirst zurückahlen können. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen\n    könntest. Das Spiel ist damit leider beendet.\n  ",apply:()=>[yt("gameOver")],probability:e=>e.values.stateDebt>2*vt.stateDebt?Oi:0},Hitzehoelle:{title:"Hitzehölle",description:"Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen Küstenregionen\n  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr wächst.\n  Um die verbleibdenden Teile sind erbitterte Kämpfe ausgebrochen.\n  ",apply:()=>[yt("gameOver")],probability:e=>e.values.co2budget<=0?Ei:0},NewYear:{title:"Happy New Year!",description:"Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen Tätigkeit aufgestellt\n    und kommt zu dem nicht weiter überraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -\n    ebenfalls nicht überraschend - sieht die Sache anders und verurteilt die Regierungserklärung als haltlos.\n  ",apply:()=>[yt("advanceYear")],probability(e){const t=4*(e.currentYear-2021),i=e.actionCount-t;if(i<3)return 0;if(i>=5)return Ti;const n=Math.round(33.3*(i-2))/100;return Math.min(1,n)}},SocialMedia:{title:"Social Media Alarm!",description:"Deine Wahlkampfberaterin ruft dich völlig aufgelöst an. Ob denn an den Geschichten was dran sein, die da im\n    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.\n    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.\n  ",apply:()=>[kt("popularity").byPercent(-20)],probability:()=>Math.random()},TempolimitAufAutobahnen:{title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland müssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply:()=>[],probability:()=>Math.random()},TimesUp:{title:"Du hast durchgehalten",description:"Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,\n    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Maßnahmen waren zu finanzieren\n    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!\n  ",apply:()=>[yt("gameOver")],probability:e=>2050===e.currentYear?Li:0},WahlVerloren:{title:"Wahl verloren",description:"Deine Beliebtheit in der Bevölkerung ist katastrophal, lieber würde man Mao Zedong wählen als dich.\n    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du gehörst) und ist damit unter\n    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon länger kein vernünftiger Mensch mehr geglaubt.\n  ",apply:()=>[yt("gameOver")],probability:e=>e.values.popularity<=0?Ci:0},WindkraftAusschreibung:{title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply:()=>[],probability:()=>Math.random(),citations:[],details:x`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:x`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `},SolarstromFoerderung:{title:"Bürgerinitiative fordert stärkere Solarförderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply:()=>[],probability(e){const t=zi(e,"SolarstromFoerderungAbschaffen"),i=zi(e,"SolarstromFoerderungWieZuBeginn"),n=zi(e,"SolarstromFoerdernx2");return t||i||n?Math.random():0},citations:[Z],details:x`

  `,internals:x`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${K(Z)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `},AtomKatastrophe:{title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply:()=>[yt("gameOver")],probability:e=>e.acceptedLaws.find((e=>"KernenergienutzungVerlaengern"===e.lawId))?Math.random():0,laws:[],citations:[],details:x`

  `,internals:x`

  `},BSE:{title:"Staatsoberhaupt verstorben",description:"Du stirbst an der neuen BSE Variante. Tja, hättest du dich mal besser um das Tierwohl gekümmert...",apply:()=>[yt("gameOver")],probability:e=>Si(e.acceptedLaws.map((e=>e.lawId))).find((e=>e.title.match(/tierwohl/i)))?0:Math.random(),laws:[],citations:[],details:x`

  `,internals:x`

  `},Duerrewelle:{title:"Dürreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausfälle sind enorm.",apply:()=>[kt("gdp").byValue(-100),kt("popularity").byValue(-10)],probability:e=>Math.min(1,Ai(400,0,e.values.co2budget)/100),laws:[],citations:[],details:x`

  `,internals:x`
  `},PRKohleindustrie:{title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und führt zu einer neuen Diskussion über Lobbyismus.",apply:()=>[kt("popularity").byValue(-2)],probability:e=>zi(e,"WirksamerCO2Preis")||zi(e,"KohleverstromungEinstellen")?0:.3,laws:[],citations:[],details:x`

  `,internals:x`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `},PRInnenminister:{title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply:()=>[kt("popularity").byValue(-2)],probability:()=>.3,laws:[],citations:[],details:x`

  `,internals:x`

  `},Klimafluechtlinge:{title:"Klimaflüchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimaflüchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply:()=>[kt("stateDebt").byValue(10)],probability:e=>e.values.co2budget<500?.2:0,laws:[],citations:[],details:x`

  `,internals:x`

  `},Plagiatsaffaere:{title:"Plagiatsaffäre",description:"Während des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet Wählerstimmen.",apply:()=>[kt("popularity").byValue(-10)],probability:e=>.5,laws:[],citations:[],details:x`

  `,internals:x`

  `},CO2PreisDebatte:{title:"Debatte über CO2-Preise",description:"Eine marktliberale Kampagne ist sehr erfolgreich darin, Dich als Verbots-Kanzler hinzustellen. Aus allen Richtungen prasseln Forderungen nach einem adäquaten CO2-Preis auf Dich ein. Nur leider gehen die Vorstellungen über den genauen Preis sehr weit auseinander.",laws:["CO2PreisErhoehen","WirksamerCO2Preis","VollerCO2Preis"],apply:()=>[],probability:e=>Ai(1,3,(zi(e,"AutosInInnenstaedtenVerbieten")?1:0)+(zi(e,"KohleverstromungEinstellen")?1:0)+(zi(e,"SolarAufAllenDaechernVerpflichtend")?1:0)+(zi(e,"Tempolimit130AufAutobahnen")?1:0)+(zi(e,"Tempolimit120AufAutobahnen")?1:0)+(zi(e,"Tempolimit100AufAutobahnen")?1:0))/100}}),Bi={currentYear:2021,values:vt,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],actionCount:0};function Mi(e=Bi,t=c()){return{id:t,currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:wt(e.values),events:[],actionCount:e.actionCount,over:!1}}function Ui(e,t=yi,i=Fi,n=Math.random){const r=function(e,t,i){const n=function(e,t){return t.map((t=>o(l({},t),{prob:t.probability(e)}))).filter((e=>e.prob>0))}(e,t),r=function(e){return e.filter((e=>e.prob>1)).reduce(((e,t)=>t.prob>((null==e?void 0:e.prob)||0)?t:e),void 0)}(n);if(r)return r;return function(e,t){for(const i of e)if((t-=i.prob)<0)return i;return}(function(e){const t=e.map((e=>e.prob)).reduce(((e,t)=>e+t),0),i=.6/t;return e.map((e=>o(l({},e),{prob:e.prob*i})))}(n),i())}(e,i,n);r&&e.events.unshift(r);const a=function(e,t,i){const n=t=>{var i;return null==(i=e.acceptedLaws)?void 0:i.some((e=>e.lawId===t.id))},r=t=>{var i;return null==(i=e.rejectedLaws)?void 0:i.includes(t.id)},a=e=>{var t;return(null==(t=e.labels)?void 0:t.includes("hidden"))||!1},s=t=>({law:t,priority:t.priority(e)}),l=e=>({law:e.law,priority:e.priority+(i.includes(e.law.id)?100:0)});return t.filter(G(n)).filter(G(r)).filter(G(a)).map(s).filter((e=>e.priority>0)).map(l).sort(((e,t)=>t.priority-e.priority)).map((e=>e.law.id)).slice(0,6)}(e,t,(null==r?void 0:r.laws)?r.laws:[]);return e.proposedLaws=function(e,t){const i=[...e],n=t.filter((e=>i.includes(e))),r=t.filter((e=>!n.includes(e)));var a=0;for(;a<i.length;)n.includes(i[a])?a++:0!==r.length?(i[a]=r.shift(),a++):i.splice(a,1);return i.push(...r.slice(0,6-i.length)),i}(e.proposedLaws,a),e.actionCount++,r}function Ii(e){return Math.max(0,Math.min(100,e))}var xi=d({props:{law:{type:Object,required:!0},selectable:{type:Boolean,required:!0},numCards:{type:Number,required:!0}},setup:()=>({store:Ar()}),data:()=>({accepted:!1}),computed:o(l({},h(["proposedLaws"])),{zIndex(){return this.law.zIndex},transform(){return`rotate(${2*(this.law.pos-this.numCards/2)}deg) translate(${20*Math.abs(this.numCards/2-this.law.pos)}px, -50%)`}}),methods:{select(){this.$emit("selected")},accept(){this.accepted=!0},sendAccept(e){e.animationName.match(/^twistOut-/)&&this.$emit("accepted",this.law.id)}}});const Gi=w("data-v-c57832f8");g("data-v-c57832f8");const Ni={key:0,type:"radio"},_i={key:0,class:"button-bar"};m();const Ki=Gi(((e,t,i,n,r,a)=>(y(),b("div",{class:["Law",{accepted:e.accepted}],style:{zIndex:e.zIndex},onClick:t[2]||(t[2]=(...t)=>e.select&&e.select(...t)),onAnimationend:t[3]||(t[3]=(...t)=>e.sendAccept&&e.sendAccept(...t))},[p("label",null,[e.selectable?(y(),b("input",Ni)):f("",!0),p("div",null,[p("h3",null,v(e.law.title),1),p("div",null,v(e.law.description),1),e.selectable?(y(),b("div",_i,[p("button",{class:"accept",onClick:t[1]||(t[1]=(...t)=>e.accept&&e.accept(...t))},"✓")])):f("",!0)])])],38))));xi.render=Ki,xi.__scopeId="data-v-c57832f8";var ji=d({components:{LawCard:xi},setup:()=>({store:Ar()}),data:()=>({zIndexes:[],poppedUp:!1}),computed:o(l({},h(["proposedLaws"])),{lawsToShow(){return this.zIndexes.length||(this.zIndexes=I(this.proposedLaws.length,0)),this.proposedLaws.map(((e,t)=>o(l({},e),{zIndex:this.zIndexes[t],pos:t})))}}),methods:{accept(e){this.store.dispatch("acceptLaw",{lawId:e})},select(e){this.zIndexes=I(this.proposedLaws.length,e)},sitOut(){this.store.dispatch("sitOut")}}});const Hi=w("data-v-290d8620")(((e,t,i,n,r,a)=>{const s=A("LawCard");return y(),b(k,null,[p("div",{class:["ProposedLaws",{poppedUp:e.poppedUp}],onClick:t[1]||(t[1]=t=>e.poppedUp=!0)},[(y(!0),b(k,null,S(e.lawsToShow,((t,i)=>(y(),b(s,{key:t.id,law:t,selectable:e.poppedUp,numCards:e.lawsToShow.length,onAccepted:()=>e.accept(t.id),onSelected:()=>e.select(i)},null,8,["law","selectable","numCards","onAccepted","onSelected"])))),128))],2),p("div",{class:"sitOutButton",onClick:t[2]||(t[2]=()=>e.sitOut())},"Aussitzen")],64)}));ji.render=Hi,ji.__scopeId="data-v-290d8620";var Zi=d({props:{title:String,text:String},methods:{acknowledge(){this.$emit("acknowledge")}}});const Ji=w("data-v-2df6be4d");g("data-v-2df6be4d");const Ri={key:0};m();const $i=Ji(((e,t,i,n,r,a)=>e.text?(y(),b("div",{key:0,onClick:t[1]||(t[1]=(...t)=>e.acknowledge&&e.acknowledge(...t))},[e.title?(y(),b("h2",Ri,v(e.title),1)):f("",!0),p("p",null,v(e.text),1)])):f("",!0)));Zi.render=$i,Zi.__scopeId="data-v-2df6be4d";var Qi=d({props:{title:{type:String,required:!0},value:{type:Number,required:!0},zoom:{type:Number,default:1}},computed:{titleStyle(){return{fontSize:.5*this.zoom+"em"}},progressBarStyle(){return{width:50*this.zoom+"px",height:5*this.zoom+"px"}},indicatorStyle(){const e=this.value>40?"green":this.value>20?"goldenrod":"red";return{width:this.value+"%",backgroundColor:e}}}});const qi=w("data-v-37cfebf9");g("data-v-37cfebf9");const Yi={class:"container"};m();const Xi=qi(((e,t,i,n,r,a)=>(y(),b("div",Yi,[p("div",{class:"title",style:e.titleStyle},v(e.title),5),p("div",{class:"progress-bar",style:e.progressBarStyle},[p("div",{class:"indicator",style:e.indicatorStyle},null,4)],4)]))));Qi.render=Xi,Qi.__scopeId="data-v-37cfebf9";var en=d({props:{value:{type:Number,required:!0}},components:{IndicatorBar:Qi},computed:{isShort(){return this.value<20},isLess(){return this.value>=20&&this.value<50},isMore(){return this.value>=50&&this.value<80},isMuch(){return this.value>=80}}});const tn=w("data-v-791f01dd");g("data-v-791f01dd");const nn={id:"finances"},rn={key:0,src:"/assets/money-short.7ce9dbed.png",id:"short"},an={key:1,src:"/assets/money-less.c10d45f8.png",id:"less"},sn={key:2,src:"/assets/money-more.a1c17d8d.png",id:"more"},ln={key:3,src:"/assets/money-much.ad651475.png",id:"much"};m();const on=tn(((e,t,i,n,r,a)=>{const s=A("IndicatorBar");return y(),b("div",nn,[p(s,{title:"Finanzen",value:e.value,zoom:.9},null,8,["value","zoom"]),e.isShort?(y(),b("img",rn)):f("",!0),e.isLess?(y(),b("img",an)):f("",!0),e.isMore?(y(),b("img",sn)):f("",!0),e.isMuch?(y(),b("img",ln)):f("",!0)])}));en.render=on,en.__scopeId="data-v-791f01dd";var un=d({props:{value:{type:Number,required:!0}},components:{IndicatorBar:Qi},computed:{areHappy(){return this.value>=50},areAngry(){return this.value<50}}});const cn=w("data-v-e5acad4c");g("data-v-e5acad4c");const dn={id:"popularity"},hn={key:0,src:"/assets/people-happy.1e9e529c.png",id:"happy"},gn={key:1,src:"/assets/people-angry.495e0425.png",id:"angry"};m();const mn=cn(((e,t,i,n,r,a)=>{const s=A("IndicatorBar");return y(),b("div",dn,[p(s,{title:"Beliebtheit",value:e.value,zoom:2.8,style:{margin:"-80px 0 0 200px"}},null,8,["value","zoom"]),e.areHappy?(y(),b("img",hn)):f("",!0),e.areAngry?(y(),b("img",gn)):f("",!0)])}));un.render=mn,un.__scopeId="data-v-e5acad4c";var bn=d({data:()=>({levels:{healthy:"/assets/plant-healthy.1c912fd2.png",sick:"/assets/plant-sick.05726ebf.png",withered:"/assets/plant-withered.2d8ffb21.png"}}),props:{value:{type:Number,required:!0}},components:{IndicatorBar:Qi},computed:{status(){return this.value>66?"healthy":this.value>33?"sick":"withered"},imgSrc(){return this.levels[this.status]}}});const pn=w("data-v-8ae17ad2");g("data-v-8ae17ad2");const fn={id:"plant"};m();const vn=pn(((e,t,i,n,r,a)=>{const s=A("IndicatorBar");return y(),b("div",fn,[p(s,{title:"CO2-Budget",value:e.value,zoom:2.5,style:{margin:"-50px 0 0 60px"}},null,8,["value","zoom"]),p("img",{src:e.imgSrc,id:e.status},null,8,["src","id"])])}));bn.render=vn,bn.__scopeId="data-v-8ae17ad2";var wn=d({props:{year:Number}});const yn=w("data-v-38fe5c52");g("data-v-38fe5c52");const kn={id:"calendar"};m();const Sn=yn(((e,t,i,n,r,a)=>(y(),b("div",kn,v(e.year),1))));wn.render=Sn,wn.__scopeId="data-v-38fe5c52";var An=d({});const Pn=w("data-v-5952ab5a");g("data-v-5952ab5a");const zn={id:"heater"},Dn=p("img",{src:"/assets/heater.5a77e425.png"},null,-1);m();const Wn=Pn(((e,t,i,n,r,a)=>(y(),b("div",zn,[Dn]))));An.render=Wn,An.__scopeId="data-v-5952ab5a";var Vn=d({});const Tn=w("data-v-3902beeb");g("data-v-3902beeb");const Ln={id:"table"},On=p("img",{src:"/assets/table-top.c87bd2fd.png",id:"table-top"},null,-1),Cn=p("img",{src:"/assets/table-front.78c0f8c6.png",id:"table-front"},null,-1),En=p("img",{src:"/assets/table-front.78c0f8c6.png",id:"table-back"},null,-1),Fn=p("img",{src:"/assets/table-side.49774a53.png",id:"table-left-side"},null,-1),Bn=p("img",{src:"/assets/table-side.49774a53.png",id:"table-right-side"},null,-1);m();const Mn=Tn(((e,t,i,n,r,a)=>(y(),b("div",Ln,[On,Cn,En,Fn,Bn]))));Vn.render=Mn,Vn.__scopeId="data-v-3902beeb";var Un=d({props:{withNews:Boolean}}),In="/assets/board-side.d7181ded.png",xn="/assets/tvset-legs.78b387df.png";const Gn=w("data-v-118e7bdf");g("data-v-118e7bdf");const Nn={id:"tvset"},_n=p("div",{id:"board"},[p("img",{id:"board-front",src:"/assets/board-front.41330f02.png"}),p("img",{id:"board-left",src:In}),p("img",{id:"board-right",src:In}),p("div",{id:"board-top"})],-1),Kn={id:"tv"},jn=p("img",{id:"tv-front",src:"/assets/tv-front.82df5c0c.png"},null,-1),Hn={key:0,id:"news",src:"/assets/news.c4bbc2d0.png"},Zn=p("div",{id:"legs"},[p("img",{id:"legs-front",src:xn}),p("img",{id:"legs-back",src:xn})],-1);m();const Jn=Gn(((e,t,i,n,r,a)=>(y(),b("div",Nn,[_n,p("div",Kn,[jn,e.withNews?(y(),b("img",Hn)):f("",!0)]),Zn]))));Un.render=Jn,Un.__scopeId="data-v-118e7bdf";const Rn=[{id:"start",title:"Stell dir vor...",text:x`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du auswählen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die Wähler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine Wähler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];var $n={};const Qn=w("data-v-2419943a");g("data-v-2419943a");const qn={class:"dialog"},Yn={class:"buttons"};m();const Xn=Qn(((e,t,i,n,r,a)=>(y(),b("div",qn,[P(e.$slots,"default",{},void 0,!0),p("div",Yn,[P(e.$slots,"buttons",{},void 0,!0)])]))));$n.render=Xn,$n.__scopeId="data-v-2419943a";var er=d({setup(){const e=Ar();return e.dispatch("setupTour"),{store:e}},components:{Dialog:$n},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return Rn.find((e=>e.id===this.$store.state.tour.step))},title(){var e;return null==(e=this.currentStep)?void 0:e.title},text(){var e;return null==(e=this.currentStep)?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var t;const i=document.querySelector(".highlighted");i&&i.classList.remove("highlighted"),e&&e.highlight&&(null==(t=document.querySelector(`#${e.highlight}`))||t.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}});er.render=function(e,t,i,n,r,a){const s=A("Dialog");return e.title&&e.text?(y(),b(s,{key:0},{buttons:z((()=>[p("button",{onClick:t[1]||(t[1]=(...t)=>e.stop&&e.stop(...t))},"Tour beenden"),p("button",{onClick:t[2]||(t[2]=(...t)=>e.next&&e.next(...t))},"Weiter")])),default:z((()=>[p("h2",null,v(e.title),1),p("div",{innerHTML:e.text},null,8,["innerHTML"])])),_:1})):f("",!0)};var tr=d({components:{Calendar:wn,ClimateIndicator:bn,Heater:An,LawProposals:ji,SpeechBubble:Zi,FinanceIndicator:en,PopularityIndicator:un,Table:Vn,Tour:er,TVSet:Un},data:()=>({store:Ar()}),computed:{eventTitle(){var e;return(null==(e=this.eventToShow())?void 0:e.title)||""},eventText(){var e;return(null==(e=this.eventToShow())?void 0:e.description)||""},currentYear(){var e;return(null==(e=this.store.state.game)?void 0:e.currentYear)||2021},finance(){const e=this.store.state.game;return e?function(e){return Ii(100-e.values.stateDebt/vt.stateDebt*50)}(e):0},popularity(){var e;return(null==(e=this.store.state.game)?void 0:e.values.popularity)||100},climate(){const e=this.store.state.game;return e?function(e){return 0===e.values.co2emissions?100:Ii(e.values.co2budget*wt(vt).co2emissions/vt.co2budget/e.values.co2emissions*50)}(e):0}},methods:{eventToShow(){var e;const t=null==(e=this.$store.state.game)?void 0:e.events[0];return t&&!t.acknowledged?t:null},acknowledge(){this.$store.dispatch("acknowledgeEvent",this.eventToShow())}}});const ir={class:"game-setup"},nr=p("h1",null,"#ich-kann-klima",-1),rr=p("div",{id:"walls"},[p("div",{id:"wall-back"}),p("div",{id:"wall-left"}),p("div",{id:"wall-right"})],-1);tr.render=function(e,t,i,n,r,a){const s=A("Calendar"),l=A("Heater"),o=A("PopularityIndicator"),u=A("TVSet"),c=A("ClimateIndicator"),d=A("Table"),h=A("FinanceIndicator"),g=A("LawProposals"),m=A("SpeechBubble"),f=A("Tour");return y(),b("div",ir,[nr,rr,p(s,{year:e.currentYear},null,8,["year"]),p(l),p(o,{value:e.popularity},null,8,["value"]),p(u,{"with-news":!!e.eventText},null,8,["with-news"]),p(c,{value:e.climate},null,8,["value"]),p(d),p(h,{value:e.finance},null,8,["value"]),p(g),p(m,{title:e.eventTitle,text:e.eventText,onAcknowledge:e.acknowledge},null,8,["title","text","onAcknowledge"]),p(f)])};var ar=d({setup(){const e=Ar();return{store:e,acceptedLaws:D((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({opened:void 0}),computed:{visibleAccepted(){return yi.filter((e=>{var t,i;return(null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id)))&&!(null==(i=e.labels)?void 0:i.includes("hidden"))}))}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}});const sr=w("data-v-aace6332")(((e,t,i,n,r,a)=>(y(!0),b(k,null,S(e.visibleAccepted,((t,i)=>(y(),b("div",{key:i,class:["Law",{opened:i===e.opened}],onClick:t=>e.toggleOpen(i)},[p("h3",null,v(t.title),1),p("div",null,v(t.description),1)],10,["onClick"])))),128))));ar.render=sr,ar.__scopeId="data-v-aace6332";var lr=d({components:{GameSetup:tr,AcceptedLaws:ar},setup:()=>({store:Ar()}),methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,i){i((t=>t.startGame(e.params.id)))}});const or=w("data-v-3637ce73")(((e,t,i,n,r,a)=>{const s=A("GameSetup");return y(),b(s)}));lr.render=or,lr.__scopeId="data-v-3637ce73";var ur=d({components:{Dialog:$n},setup:()=>({store:Ar()}),computed:{co2(){var e,t;const i=null==(e=this.store.state.game)?void 0:e.values.co2budget;return(null==(t=this.store.state.game)?void 0:t.values.co2emissions)>0?i>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. Hätte die AfD nicht besser hinbekommen.":i>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken können. Punktlandung."},debt(){var e;return(null==(e=this.store.state.game)?void 0:e.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilitätskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var e;const t=null==(e=this.store.state.game)?void 0:e.values.popularity;return t<20?"entspricht dem, was man von einem langhährigen Diktator erwarten kann.":t<50?"ist nicht berauschend, wiedergewählt würdest du wohl eher nicht.":t<80?"reicht aus, dass du noch länger am Ruder bleiben könntest. Gratulation!":"ist völlig unglaubwürdig - war das wirklich eine freie Wahl?"}},methods:{loadGame(e){this.store.dispatch("loadGame",{gameId:e})},newGame(){this.$router.push("/games")}},beforeRouteEnter(e,t,i){i((t=>{t.loadGame(e.params.id)}))}});const cr=p("h2",null,"Das Spiel ist leider zu Ende",-1),dr=p("p",null,"Deine Entscheidungen haben etwas verändert - soviel kann man sagen.",-1),hr=p("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),gr={class:"button-bar"};ur.render=function(e,t,i,n,r,a){const s=A("Dialog");return y(),b(s,null,{default:z((()=>[cr,dr,p("ul",null,[p("li",null,"Die CO2-Emmissionen "+v(e.co2),1),p("li",null,"Die Staatsfinanzen "+v(e.debt),1),p("li",null,"Deine Beliebtheit "+v(e.popularity),1)]),hr,p("div",gr,[p("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Neuer Versuch")])])),_:1})};const mr=[{path:"/",redirect:"/games"},{path:"/games",component:lr},{path:"/games/:id",component:lr},{path:"/games/:id/over",component:ur}],br=W({history:V(),routes:mr});const pr=function(e,t){let i,n=[];async function r(){if(i&&(clearTimeout(i),i=void 0),n.length){const{method:s,path:l,data:o,retry:u,resolve:c,reject:d}=n[0];try{if((null==t?void 0:t.navigator)&&!(null==t?void 0:t.navigator.onLine))throw Error("Browser is offline");const i=await e(s,l,o);n.shift(),c(i)}catch(a){u?n[0].retry=Math.max(-1,u-1):(n.shift(),d(a))}n.length&&(i=setTimeout(r,(null==t?void 0:t.timeout)||1e4))}}return{add:(e,t,a,s=-1)=>new Promise(((l,o)=>{n.push({method:e,path:t,data:a,retry:s,resolve:l,reject:o}),i||r()})),remove(e,t){n=n.filter((i=>i.method.toLowerCase()!==e.toLowerCase()||i.path!==t))},callsPending:()=>n.length>0}}(function(e,t,i=console){return async function(n,r,a){var s;try{const i={method:n};["post","put","patch"].includes(n)&&(i.body=JSON.stringify(a),i.headers={"content-type":"application/json"});const l=await t(e+r,i),o=(null==(s=l.headers.get("Content-Type"))?void 0:s.match(/json/))?await l.json():await l.text();if(l.ok)return o;throw Error(o.message||o)}catch(l){throw i.error(l),l}}}("https://api.ich-kann-klima.de/api",fetch));var fr;const vr=function({api:e,logger:t=console,storage:i=localStorage}){return{async createGame(n){i.setItem("game",JSON.stringify(n));try{e.createGame(n)}catch(r){t.warn("Cannot save new game - trying again later",r)}return n},async loadGame(t){const n=i.getItem("game");if(n){const e=JSON.parse(n);if(e.id===t)return Mi(e,t)}return Mi(await e.loadGame(t),t)},async saveGame(n){i.setItem("game",JSON.stringify(n));try{e.saveGame(n)}catch(r){t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",r)}},async decisionMade(t,i,n){e.decisionMade(t.id,i,n)},async eventOccurred(t,i){e.eventOccurred(t.id,i.id)}}}({api:(fr=pr,{createGame:e=>fr.add("post","/games",e),loadGame:e=>fr.add("get","/games/"+e,void 0,0),saveGame:e=>(fr.remove("put","/games/"+e.id),fr.add("put","/games/"+e.id,e)),decisionMade:(e,t,i)=>fr.add("post","/games/"+e+"/decisions/"+t,{accepted:i}),eventOccurred:(e,t)=>fr.add("post","/games/"+e+"/events/"+t)})}),wr={async startGame(e){const t=function(e=yi,t=Bi){const i=Mi(t);return i.acceptedLaws=e.filter((e=>{var t;return null==(t=e.labels)?void 0:t.includes("initial")})).map((e=>({lawId:e.id,effectiveSince:i.currentYear}))),i}(),i=Ui(t);await vr.createGame(t),e.commit("setGameState",{game:t}),e.dispatch("applyEvent",{event:i}),br.push("/games/"+t.id)},async loadGame(e,t){try{const i=await vr.loadGame(t.gameId);await vr.saveGame(i),br.push("/games/"+i.id),e.commit("setGameState",{game:i})}catch(i){e.dispatch("error",{error:i})}},gameOver(e){var t;e.commit("gameOver",void 0),br.push("/games/"+(null==(t=e.state.game)?void 0:t.id)+"/over")},async acceptLaw(e,t){const i=l({},e.state.game),n={lawId:t.lawId,effectiveSince:i.currentYear+1},r=ki(n),a=r.removeLawsWithLabels,s=i.acceptedLaws.map(ki).filter((e=>!(null==a?void 0:a.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)}))))).map((e=>({lawId:e.id,effectiveSince:e.effectiveSince})));i.acceptedLaws=[...s,n];const o=Ui(i);await vr.saveGame(i),e.commit("setGameState",{game:i}),e.dispatch("applyEvent",{event:o}),await vr.decisionMade(i,r.id,!0)},async rejectLaw(e,t){const i=l({},e.state.game);i.rejectedLaws=[...i.rejectedLaws,t.lawId],await vr.decisionMade(i,t.lawId,!1),await vr.saveGame(i),e.commit("setGameState",{game:i})},async sitOut(e){const t=l({},e.state.game);await vr.decisionMade(t,"sitOut",!0);const i=Ui(t);await vr.saveGame(t),e.commit("setGameState",{game:t}),e.dispatch("applyEvent",{event:i})},async advanceYear(e){const t=l({},e.state.game),i=t.acceptedLaws.map(ki);t.currentYear++,t.values=function(e,t,i){const n=wt(e.values);return t.sort(((e,t)=>{var i,n;return(null==(i=e.treatAfterLabels)?void 0:i.some((e=>{var i;return null==(i=t.labels)?void 0:i.includes(e)})))?1:(null==(n=t.treatAfterLabels)?void 0:n.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)})))?-1:0})).forEach((t=>{const r=t.effects(o(l({},e),{values:n}),t.effectiveSince,i);At({dispatch:()=>{},values:n},r)})),n.co2budget-=n.co2emissions,n}(t,i,t.currentYear),await vr.saveGame(t),e.commit("setGameState",{game:t})},async applyEvent(e,t){if(!t.event)return;const i=l({},e.state.game);await vr.eventOccurred(i,t.event);const n=t.event.apply(i);e.dispatch("applyEffects",{changes:n})},acknowledgeEvent(e,t){const i=l({},e.state.game);i.events.find((e=>e.id===t.id)).acknowledged=!0,vr.saveGame(i),e.commit("setGameState",{game:i})},applyEffects(e,t){const i={dispatch:e.dispatch,values:wt(e.state.game.values)};At(i,t.changes);const n=o(l({},e.state.game),{values:i.values});vr.saveGame(n),e.commit("setGameState",{game:n})},setupTour(e){const t=localStorage.getItem("tour")||Rn[0].id,i=Rn.find((e=>t===e.id));i?e.commit("setTour",{step:i.id,active:!0}):wr.stopTour(e)},nextTourStep(e){const t=Rn.findIndex((t=>e.state.tour.step===t.id));if(t<0||t==Rn.length-1)wr.stopTour(e);else{const i=Rn[t+1];e.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(e){e.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},async error(e,t){e.commit("error",t)}},yr={setGameState(e,t){e.game=t.game},gameOver(e){e.game=o(l({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},kr={proposedLaws:e=>e.game&&e.game.proposedLaws?Si(e.game.proposedLaws):[]},Sr=Symbol();function Ar(){return T(Sr)}const Pr=L({state:{game:void 0,tour:{active:!0,step:"start"}},mutations:yr,actions:wr,getters:kr});function zr(e,t,...i){for(const n of i){if(e[n]<t[n])return-1;if(e[n]>t[n])return 1}return 0}function Dr(e,t){const i=wt(e.values);function n(e){return(e>0?"+":"")+e.toFixed(2)}function r(r){const a=function(e){const i=t.find((t=>"modify"===t.type&&t.name===e));return i&&i.condition?i.value:0}(r),s=i[r]-e.values[r];return a&&Math.abs(a-s)<.001?n(a):a?n(a)+" / "+n(s):0!=s?n(s):""}At({dispatch:()=>{},values:i},t);return ft.map((t=>{return{id:t.name,unit:t.unit,value:(i=t.name,e.values[i].toFixed(2)),effect:r(t.name),class:t.writable?"writable":"calculated"};var i}))}var Wr=d({props:{citation:{type:Object,required:!0},showInternals:{type:Boolean,default:!1}},computed:{href(){return this.citation.url.toString()},title(){return this.citation.title||this.citation.url.toString()}}});const Vr={key:0},Tr=O(". "),Lr={key:1},Or={key:2},Cr=O("Bemerkung: "),Er=O(". "),Fr={key:3},Br=O("Internes: "),Mr=O(". "),Ur={key:4},Ir=O(". "),xr={key:5},Gr=O(". "),Nr={key:6},_r=O(". ");Wr.render=function(e,t,i,n,r,a){return y(),b("p",null,[e.citation.authors?(y(),b("span",Vr,v(e.citation.authors+e.citation.dateString())+". ",1)):f("",!0),p("a",{target:"_blank",rel:"noreferrer noopener",href:e.href},'"'+v(e.title)+'"',9,["href"]),Tr,e.citation.publisher?(y(),b("span",Lr,v(e.citation.publisher)+". ",1)):f("",!0),e.citation.comment?(y(),b("span",Or,[Cr,p("span",{innerHTML:e.citation.comment},null,8,["innerHTML"]),Er])):f("",!0),e.showInternals&&e.citation.internalComment?(y(),b("span",Fr,[Br,p("span",{innerHTML:e.citation.internalComment},null,8,["innerHTML"]),Mr])):f("",!0),e.citation.referringUrl?(y(),b("span",Ur,[p("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,["href"]),Ir])):f("",!0),e.citation.archiveUrl?(y(),b("span",xr,[p("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,["href"]),Gr])):f("",!0),e.citation.localCopy?(y(),b("span",Nr,[p("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,["href"]),_r])):f("",!0)])};var Kr=d({components:{Citation:Wr},setup(){const e=Ar();return{store:e,game:D((()=>e.state.game))}},data:()=>({selectedTable:"laws",lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0}),methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},selectLaw(e){this.unselect(),this.lawSelected=e},selectEvent(e){this.unselect(),this.eventSelected=e},selectParam(e){this.unselect(),this.paramSelected=e},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0}},computed:{startYearOfSelected(){if(!this.lawSelected||!this.game)return 2021;const e=this.game.acceptedLaws.find((e=>e.lawId===this.lawSelected));return e?e.effectiveSince:2021},selectedLaw(){return yi.find((e=>e.id===this.lawSelected))},selectedEvent(){return Fi.find((e=>e.id===this.eventSelected))},selectedParam(){return this.paramSelected?dt[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof ve?e:void 0},cParam(){const e=this.selectedParam;return e instanceof we?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},effectsOfSelected(){if(!this.lawSelected||!this.game)return[];this.game;const e=this.selectedLaw;return e?e.effects(this.game,this.startYearOfSelected,this.game.currentYear):[]},sortedValues(){return this.game?Dr(this.game,this.effectsOfSelected):[]},sortedLaws(){return this.game?function(e,t,i,n){const r=e.proposedLaws,a=e.acceptedLaws.map((e=>e.lawId)),s=e.rejectedLaws;return n.map((t=>{return{id:t.id,priority:t.priority(e),state:(i=t.id,a.includes(i)?"a":r.includes(i)?"p":s.includes(i)?"r":"x")};var i})).sort(((e,n)=>zr(e,n,t,"id")*i)).map((e=>o(l({},e),{priority:e.priority.toFixed(2)})))}(this.game,this.lawsSortCol,this.lawsSortDir,yi):[]},sortedEvents(){return this.game?(e=this.game,t=this.eventsSortCol,i=this.eventsSortDir,Fi.map((t=>({id:t.id,probability:t.probability(e)}))).sort(((e,n)=>zr(e,n,t,"id")*i)).map((e=>o(l({},e),{probability:(100*e.probability).toFixed(2)})))):[];var e,t,i}}});const jr=w("data-v-7bb3c05c");g("data-v-7bb3c05c");const Hr={class:"peekData"},Zr={key:0,class:"Details"},Jr={class:"Title"},Rr={class:"Description"},$r=p("div",{class:"SectionHead"},"Details:",-1),Qr=p("div",{class:"SectionHead"},"Internes:",-1),qr=p("div",{class:"SectionHead"},"Referenzen:",-1),Yr={key:1,class:"Details"},Xr={class:"Title"},ea={class:"Description"},ta=p("div",{class:"SectionHead"},"Details:",-1),ia=p("div",{class:"SectionHead"},"Internes:",-1),na=p("div",{class:"SectionHead"},"Referenzen:",-1),ra={key:2,class:"Details"},aa={class:"Title"},sa={key:0},la={key:1},oa={key:2},ua=p("div",{class:"SectionHead"},"Details:",-1),ca=p("div",{class:"SectionHead"},"Internes:",-1),da=p("div",{class:"SectionHead"},"Referenzen:",-1),ha={class:"paramsList"},ga={class:"numbercol"},ma={class:"effcol"},ba={class:"buttonlist"},pa={class:"lawList"},fa={key:0},va={class:"priocol"},wa={class:"eventList"},ya={key:0},ka={class:"priocol"};m();const Sa=jr(((e,t,i,n,r,a)=>{var s;const l=A("Citation");return y(),b("details",Hr,[p("summary",{onClick:t[1]||(t[1]=t=>e.unselect()),class:"clickable"},"Peek"),e.selectedLaw?(y(),b("div",Zr,[p("div",Jr,v(e.selectedLaw.title),1),p("div",Rr,v(e.selectedLaw.description),1),$r,p("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,["innerHTML"]),Qr,p("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,["innerHTML"]),qr,(y(!0),b(k,null,S(e.citationsOfLaw,((e,t)=>(y(),b(l,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):f("",!0),e.selectedEvent?(y(),b("div",Yr,[p("div",Xr,v(e.selectedEvent.title),1),p("div",ea,v(e.selectedEvent.description),1),ta,p("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,["innerHTML"]),ia,p("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,["innerHTML"]),na,(y(!0),b(k,null,S(null==(s=e.selectedEvent)?void 0:s.citations,((e,t)=>(y(),b(l,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):f("",!0),e.selectedParam?(y(),b("div",ra,[p("div",aa,v(e.paramSelected)+" ["+v(e.selectedParam.unit)+"]",1),e.wParam?(y(),b("div",sa,"Initial value: "+v(e.wParam.initialValue)+" "+v(e.wParam.unit),1)):f("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(y(),b("div",la," Should initially be: "+v(e.cParam.shouldInitiallyBe)+" "+v(e.cParam.unit),1)):f("",!0),e.cParam?(y(),b("div",oa," Calculation: "+v(e.cParam.valueGetter),1)):f("",!0),ua,p("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,["innerHTML"]),ca,p("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,["innerHTML"]),da,(y(!0),b(k,null,S(e.selectedParam.citations,((e,t)=>(y(),b(l,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):f("",!0),p("div",ha,[p("table",null,[(y(!0),b(k,null,S(e.sortedValues,(t=>(y(),b("tr",{key:t.id,class:["clickable",t.class],onClick:i=>e.selectParam(t.id)},[p("td",null,v(t.id),1),p("td",ga,v(t.value),1),p("td",ma,v(t.effect),1),p("td",null,v(t.unit),1)],10,["onClick"])))),128))])]),p("div",null,[p("table",ba,[p("tr",null,[p("td",{class:["clickable lawButton",e.selectedTable],onClick:t[2]||(t[2]=t=>e.selectedTable="laws")},"Laws",2),p("td",{class:["clickable eventButton",e.selectedTable],onClick:t[3]||(t[3]=t=>e.selectedTable="events")},"Events",2)])]),p("div",pa,["laws"===e.selectedTable?(y(),b("table",fa,[p("tr",null,[p("th",{onClick:t[4]||(t[4]=t=>e.sortLaws("state")),class:"clickable"},"S"),p("th",{onClick:t[5]||(t[5]=t=>e.sortLaws("id")),class:"clickable"},"ID"),p("th",{onClick:t[6]||(t[6]=t=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(y(!0),b(k,null,S(e.sortedLaws,(t=>(y(),b("tr",{key:t.id,class:["clickable",t.state],onClick:i=>e.selectLaw(t.id)},[p("td",null,v(t.state),1),p("td",null,v(t.id),1),p("td",va,v(t.priority),1)],10,["onClick"])))),128))])):f("",!0)]),p("div",wa,["events"===e.selectedTable?(y(),b("table",ya,[p("tr",null,[p("th",{onClick:t[7]||(t[7]=t=>e.sortEvents("id")),class:"clickable"},"ID"),p("th",{onClick:t[8]||(t[8]=t=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(y(!0),b(k,null,S(e.sortedEvents,(t=>(y(),b("tr",{key:t.id,class:"clickable",onClick:i=>e.selectEvent(t.id)},[p("td",null,v(t.id),1),p("td",ka,v(t.probability),1)],8,["onClick"])))),128))])):f("",!0)])])])}));Kr.render=Sa,Kr.__scopeId="data-v-7bb3c05c";var Aa=d({components:{PeekInside:Kr},setup:()=>({store:Ar(),devMode:"true"===localStorage.getItem("devMode")}),methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,i=Math.min(e/800,t/1e3),n=(t-1e3*i)/2;document.documentElement.style.setProperty("--scale",`${i}`),document.documentElement.style.setProperty("--translateX",`${n}px`)}},mounted(){setTimeout(this.updateStyle,0),window.addEventListener("resize",this.updateStyle)}});const Pa={class:"perspective"},za={class:"peek"};Aa.render=function(e,t,i,n,r,a){const s=A("router-view"),l=A("PeekInside");return y(),b(k,null,[p("div",Pa,[p(s)]),p("div",za,[e.devMode?(y(),b(l,{key:0})):f("",!0)])],64)};const Da=C(Aa);Da.use(Pr,Sr),Da.use(br),Da.mount("#app");
