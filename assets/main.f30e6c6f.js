var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,l=(e,t)=>{for(var i in t||(t={}))r.call(t,i)&&s(e,i,t[i]);if(n)for(var i of n(t))a.call(t,i)&&s(e,i,t[i]);return e},o=(e,n)=>t(e,i(n));import{s as u,v as c,d,m as h,p as g,a as m,c as b,b as p,e as f,t as v,w,o as y,F as k,r as S,f as A,g as P,h as z,i as D,j as W,k as T,u as V,l as L,n as O,q as C}from"./vendor.f89ad69f.js";function E(e){return Object.entries(e).map((([e,t])=>o(l({},t),{id:e.replace(/\W/g,"_")})))}var F={title:"Abstandsregeln für Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erhöht wird. Das führte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply:()=>[],probability:()=>Math.random()},B={title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bewährt. Wir lassen sie so, wie sie sind.",effects:()=>[],priority:e=>Math.random()};const M=new u.exports.Converter;function U(e){return e>0?[...Array(e)].map(((e,t)=>t)):[]}function I(e,t){const i=e-t-1;return[...U(t),Math.max(t,i),...U(i).reverse()]}function G(e,...t){let i=e.map(((e,i)=>e+(t[i]||""))).join("").split("\n");0===i[0].length&&i.shift();const n=i[0].match(/^(\s+)/);return n&&!i.filter((e=>e.trim())).some((e=>!e.startsWith(n[1])))&&(i=i.map((e=>e.replace(n[1],"")))),M.makeHtml(i.join("\n"))}function x(e){return t=>!e(t)}const N=new Intl.DateTimeFormat("de-DE");class _{constructor(e){this.url=new URL(e.url),this.title=e.title,this.publisher=e.publisher,this.authors=e.authors,this.date=e.date?new Date(e.date):void 0,this.comment=e.comment,this.internalComment=e.internalComment,this.localCopy=e.localCopy,this.referringUrl=e.referringUrl?new URL(e.referringUrl):void 0,this.archiveUrl=e.archiveUrl?new URL(e.archiveUrl):void 0,this.archiveNotPossible=e.archiveNotPossible}dateString(){const e=this.date;return e?" ("+N.format(e)+")":""}toString(){return[this.authors?this.authors+this.dateString():void 0,this.title?'"'+this.title+'"':void 0,this.url,this.publisher].filter((e=>e)).join(", ")}}function K(e){const t=e.publisher||e.authors;return`[[${null!=t?t+": ":""}${e.title||e.url.toString()}](${e.url.toString()})]`}const j=new _({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),H=new _({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),J=new _({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"}),Z=new _({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineralölsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),R=new _({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile für wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),$=new _({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-°C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),Q=new _({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schlüsselergebnisse der Studie des Wuppertal Instituts für Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-°C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${K($)}.`});$.comment=G`Zusammengefasst in ${K(Q)}.`;const q=new _({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahreschätzung der deutschen Treibhausgas-Emissionen für das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),Y=new _({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen für das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),X=new _({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enthält CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] für mehrere Verkehrsmittel"}),ee=new _({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),te=new _({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Straßengüterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),ie=new _({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enthält Personenkilometer-Jahreswerte für mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),ne=new _({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung ÖPNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),re=new _({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),ae=new _({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle für 160g CO2 pro kWh Fernwärme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new _({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren für Fernwärme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle für 160g CO2 pro kWh Fernwärme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const se=new _({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),le=new _({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),oe=new _({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle wäre besser."}),ue=new _({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bevölkerung nach Nationalität und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),ce=new _({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur für Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),de=new _({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische Ämter des Bundes und der Länder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new _({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const he=new _({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgemäß - Interview mit Prof. Stefan Gössling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""}),ge=new _({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),me=new _({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),be=new _({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),pe=new _({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten für die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class fe{constructor(e){this.unit=e.unit,this.citations=e.citations?e.citations:[],this.details=e.details?e.details:"",this.internals=e.internals?e.internals:""}citationsDesc(){return this.citations.map((e=>e.toString())).join("; ")}}const ve={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class we extends fe{constructor(e){super(e),this.writable=!0,this.initialValue=e.initialValue,this.applyBounds=ve[e.unit]}}class ye extends fe{constructor(e){super(e),this.writable=!1,this.valueGetter=e.valueGetter,this.shouldInitiallyBe=e.shouldInitiallyBe}}const ke=new we({unit:"MioTons",initialValue:6700,citations:[j],details:G`

  `,internals:G`

  `}),Se=new we({unit:"MioTons",initialValue:186.793,citations:[q],details:G`

  `,internals:G`

  `}),Ae=new ye({unit:"MioTons",valueGetter:e=>e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4,shouldInitiallyBe:159.696,citations:[q,te],details:G`

  `,internals:G`
    ${K(q)}: 159.696 as MioTons

    ${K(te)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Pe=new ye({unit:"MioTons",valueGetter:e=>e.co2emissionsStreetVehicles+65*e.publicLocalCapacity/1e6+32*e.publicNationalCapacity/1e6+222*e.airDomesticUsage/1e6+1.641,citations:[X,q],details:G`

  `,internals:G`
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

    ${K(q)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),ze=new ye({unit:"MioTons",valueGetter:e=>0*e.buildingsSourceBio+.247*e.buildingsSourceGas+.318*e.buildingsSourceOil+.16*e.buildingsSourceTele,citations:[q,re],details:G`

  `,internals:G`
    TODO: #91 Gibt es hier bessere Quellen?

    ${K(re)}: 247g CO2 pro kWh Erdgas.

    ${K(re)}: 318g CO2 pro kWh Erdöl.

    ${K(ae)}: 160g CO2 pro kWh Fernwärme.

    ${K(q)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),De=new we({unit:"MioTons",initialValue:67.936,citations:[q],details:G`

  `,internals:G`

  `}),We=new we({unit:"MioTons",initialValue:9.243,citations:[q],details:G`

  `,internals:G`

  `}),Te=new ye({unit:"MioTons",valueGetter:e=>.399*e.electricityGas+.058*e.electricitySolar+.005*e.electricityWind+.02*e.electricityWater+.835*e.electricityHardCoal+1.137*e.electricityBrownCoal+.03*e.electricityBiomass+.005*e.electricityNuclear,citations:[se,q],details:G`

  `,internals:G`
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

    ${K(q)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),Ve=new ye({unit:"MioTons",valueGetter:e=>e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers,details:G`

  `,internals:G`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${K(q)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[Y]}),Le=new we({unit:"TWh",initialValue:480.54,citations:[H],details:G`

  `,internals:G`

  `}),Oe=new we({unit:"Percent",initialValue:50,citations:[],details:G`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:G`

  `}),Ce=new we({unit:"TWh",initialValue:51.42,citations:[H],details:G`

  `,internals:G`

  `}),Ee=new we({unit:"TWh",initialValue:131.85,citations:[H],details:G`

  `,internals:G`

  `});const Fe=new ye({unit:"TWh",valueGetter(e){const t=Ee.initialValue,i=e.electricityGridQuality,n=function(e,t){const i=e.value-t.value;return n=>e.result*(n-t.value)/i-t.result*(n-e.value)/i}({value:50,result:t},{value:100,result:e.electricityDemand})(i);return Math.min(n,e.electricityWind)},shouldInitiallyBe:Ee.initialValue,citations:[],details:G`
The electrical energy produced by wind and not impaired by poor quality of the grid.
  `,internals:G`

  `}),Be=new we({unit:"TWh",initialValue:6,citations:[H],details:G`

  `,internals:G`

  `}),Me=new we({unit:"Percent",initialValue:100,citations:[be],details:G`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),Ue=new we({unit:"TWh",initialValue:14.99,citations:[H],details:G`

  `,internals:G`

  `}),Ie=new we({unit:"TWh",initialValue:43.19,citations:[H],details:G`

  `,internals:G`

  `}),Ge=new we({unit:"TWh",initialValue:60.91,citations:[H],details:G`

  `,internals:G`

  `}),xe=new we({unit:"TWh",initialValue:35.46,citations:[H],details:G`

  `,internals:G`

  `}),Ne=new we({unit:"TWh",initialValue:82.13,citations:[H],details:G`

  `,internals:G`

  `}),_e=new ye({unit:"TWh",valueGetter:e=>e.electricityHardCoal+e.electricityBrownCoal,details:G`

  `,internals:G`

  `}),Ke=new ye({unit:"TWh",valueGetter:e=>e.electricityDemand-e.electricitySolar-e.electricityWindUsable-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear,details:G`

  `,internals:G`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),je=new we({unit:"GramPerPsgrKm",initialValue:160,citations:[X],details:G`

  `,internals:G`
    ${K(X)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),He=new we({unit:"MioPsgrKm",initialValue:917e3,citations:[ie],details:G`

  `,internals:G`

  `}),Je=new we({unit:"Percent",initialValue:.5,citations:[oe],details:G`

  `,internals:G`
    Die verschiedenen Zahlen in ${K(oe)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),Ze=new we({unit:"MioPsgrKm",initialValue:112600,citations:[ie],details:G`

  `,internals:G`

  `}),Re=new we({unit:"MioPsgrKm",initialValue:112600,citations:[ie],details:G`

  `,internals:G`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),$e=new we({unit:"MioPsgrKm",initialValue:67300,citations:[ie],details:G`

  `,internals:G`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),Qe=new we({unit:"MioPsgrKm",initialValue:67300,citations:[ie],details:G`

  `,internals:G`
Siehe \`publicLocalCapacity\`.
  `}),qe=new we({unit:"MioPsgrKm",initialValue:10100,citations:[ie],details:G`

  `,internals:G`

  `}),Ye=new we({unit:"MioPsgrKm",initialValue:61700,citations:[ie],details:G`

  `,internals:G`

  `}),Xe=new ye({unit:"MioPsgrKm",valueGetter:e=>e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage,shouldInitiallyBe:1168700,citations:[ie],details:G`

  `,internals:G`

  `}),et=new we({unit:"TWh",initialValue:226,citations:[],details:G`

  `,internals:G`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),tt=new we({unit:"TWh",initialValue:544,citations:[],details:G`

  `,internals:G`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),it=new ye({unit:"TWh",valueGetter:e=>e.buildingsPrivateDemand+e.buildingsIndustryDemand,shouldInitiallyBe:770,citations:[],details:G`

  `,internals:G`
    TODO: #78 Quelle ${K(pe)} gibt diese Zahlen nicht her.
  `}),nt=new we({unit:"TWh",initialValue:130,citations:[],details:G`

  `,internals:G`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),rt=new we({unit:"TWh",initialValue:219,citations:[],details:G`

  `,internals:G`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),at=new we({unit:"TWh",initialValue:58,citations:[],details:G`

  `,internals:G`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),st=new ye({unit:"TWh",valueGetter:e=>e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele),citations:[],details:G`

  `,internals:G`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${K(pe)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),lt=new we({unit:"Percent",initialValue:50,citations:[],details:G`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:G`

  `}),ot=new we({unit:"TsdPeople",initialValue:83155.031,citations:[ue],details:G`

  `,internals:G`
Anfangswert ist der Stand 31.12.2020.
  `}),ut=new we({unit:"TsdPeople",initialValue:2695,citations:[ce],details:G`

  `,internals:G`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),ct=new we({unit:"MrdEuro",initialValue:3332,citations:[de],details:G`

  `,internals:G`
Anfangswert ist das BIP 2020.
  `}),dt=new we({unit:"MrdEuro",initialValue:1899,citations:[],details:G`

  `,internals:G`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),ht={co2budget:ke,co2emissionsIndustry:Se,co2emissionsStreetVehicles:Ae,co2emissionsMobility:Pe,co2emissionsAgriculture:De,co2emissionsBuildings:ze,co2emissionsOthers:We,co2emissionsEnergy:Te,co2emissions:Ve,electricityDemand:Le,electricityGridQuality:Oe,electricitySolar:Ce,electricityWind:Ee,electricityWindUsable:Fe,electricityWindOnshoreMaxNew:Be,electricityWindEfficiency:Me,electricityWater:Ue,electricityBiomass:Ie,electricityNuclear:Ge,electricityHardCoal:xe,electricityBrownCoal:Ne,electricityCoal:_e,electricityGas:Ke,carEmissionFactor:je,carUsage:He,carRenewablePercentage:Je,publicLocalUsage:Ze,publicLocalCapacity:Re,publicNationalUsage:$e,publicNationalCapacity:Qe,airDomesticUsage:qe,airIntlUsage:Ye,passengerTransportUsage:Xe,buildingsIndustryDemand:et,buildingsPrivateDemand:tt,buildingsDemand:it,buildingsSourceBio:nt,buildingsSourceOil:rt,buildingsSourceTele:at,buildingsSourceGas:st,popularity:lt,numberOfCitizens:ot,unemployment:ut,gdp:ct,stateDebt:dt},gt=Object.entries(ht).filter((e=>e[1]instanceof we)).map((e=>e)).reduce(((e,t)=>(e[t[0]]=t[1],e)),{}),mt=Object.entries(ht).filter((e=>e[1]instanceof ye)).map((e=>e)).reduce(((e,t)=>(e[t[0]]=t[1],e)),{});class bt extends we{constructor(e,t){super(e),this.name=t}}const pt=Object.entries(gt).map((e=>new bt(e[1],e[0])));class ft extends ye{constructor(e,t){super(e),this.name=t}}Object.entries(mt).map((e=>new ft(e[1],e[0])));const vt=Object.entries(ht).map((e=>e[1]instanceof we?new bt(e[1],e[0]):new ft(e[1],e[0]))),wt=pt.reduce(((e,t)=>o(l({},e),{[t.name]:t.initialValue})),{});function yt(e){const t=l({},e);return Object.entries(mt).forEach((e=>Object.defineProperty(t,e[0],{get:()=>e[1].valueGetter(t)}))),t}function kt(e,t){return{type:"dispatch",condition:!0,if(e){return this.condition=e,this},apply(i){this.condition&&i.dispatch(e,t)}}}function St(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(e){return this.percent=e,this},byValue(e){return this.value=e,this},setValue(e){return this.absolute=e,this},if(e){return this.condition=e,this},getOldNew(e){const t=this.name,i=e[t];if(!this.condition)return{oldVal:i,newVal:i};const n=ht[t],r=null!=this.absolute?this.absolute:i+(this.value||i*this.percent/100);return{oldVal:i,newVal:n.applyBounds(r)}},getChange(e){if(!this.condition)return 0;const{oldVal:t,newVal:i}=this.getOldNew(e);return i-t},apply(e){if(this.condition){const{newVal:t}=this.getOldNew(e.values);e.values[this.name]=t}return this}}}function At(e,t){if(ht[e].unit!=ht[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(e){return this.percent=e,this},byValue(e){return this.value=e,this},if(e){return this.condition=e,this},getEffect(e){const t=e[this.to],i=e[this.from];if(!this.condition)return{oldTo:t,oldFrom:i,newTo:t,newFrom:i};const n=ht[this.to],r=ht[this.from],a=this.value||t*this.percent/100,s=n.applyBounds(t+a)-t,l=-r.applyBounds(i-s)+i;return{oldTo:t,newTo:t+l,oldFrom:i,newFrom:i-l}},apply(e){if(this.condition){const{newTo:t,newFrom:i}=this.getEffect(e.values);e.values[this.to]=t,e.values[this.from]=i}return this}}}function Pt(e,t){t.filter((e=>e.condition)).forEach((t=>t.apply(e)))}var zt={title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,i){const n=i-t,r=n<18?4.3/18:0,a=(10-n)/55,s=Math.max(50*a,0);return[St("electricityHardCoal").setValue(0),St("electricityBrownCoal").setValue(0),St("stateDebt").byValue(2.5-r),St("unemployment").byValue(s)]},priority:e=>e.values.electricityCoal/e.values.electricityDemand<=.1?0:Pi(1e4,0,e.values.unemployment),citations:[],details:G`

  `,internals:G`
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
  `},Dt={title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effects:()=>[St("stateDebt").byValue(-37),St("electricityHardCoal").byPercent(-10),St("electricityBrownCoal").byPercent(-5),St("electricityWind").byValue(5),St("electricitySolar").byValue(3),St("electricityWater").byValue(.5)],priority:e=>Pi(2050,2021,e.currentYear)};const Wt=yt(wt).electricityGas;var Tt={title:"Kernenergienutzung verlängern",description:"Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effects:()=>[St("electricityNuclear").setValue(104.3),St("stateDebt").byValue(-2.5),St("popularity").byValue(-4)],priority:e=>Pi(Wt,1.1*Wt,e.values.electricityGas)},Vt={title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,i){const n={2021:60.45,2022:30.21}[i]||0;return[St("electricityNuclear").setValue(n)]},priority:e=>0},Lt={title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren für den Ausbau des Stromnetzes",effects:(e,t,i)=>[St("popularity").byValue(-3).if(t===i),St("electricityGridQuality").byValue(1)],priority:e=>Pi(70,27,Wi(e)),citations:[],details:G`

  `,internals:G`
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
  `},Ot={title:"Netzausbau fördern",description:"Ausbau des Stromnetzes mit Steuermitteln fördern",effects:(e,t,i)=>[St("popularity").byValue(-1).if(t===i),St("stateDebt").byValue(2),St("electricityGridQuality").byValue(5).if(Di(e,"NetzausbauErleichtern"))],priority:e=>Pi(70,27,Wi(e)),citations:[],details:G`

  `,internals:G`
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
  `},Ct={title:"Stromspeicherung erleichtern",description:"Bürokratische Hürden für den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effects:(e,t,i)=>[St("electricityGridQuality").byValue(.2)],priority:e=>Pi(80,45,e.values.electricityGridQuality),citations:[],details:G`

  `,internals:G`
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
  `},Et={title:"Stromspeicherung fördern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln fördern",effects:(e,t,i)=>Di(e,"StromspeicherungErleichtern")?[St("popularity").byValue(.2),St("stateDebt").byValue(2),St("electricityGridQuality").byValue(1)]:[St("stateDebt").byValue(1)],priority:e=>Pi(80,45,e.values.electricityGridQuality),citations:[],details:G`

  `,internals:G`
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
  `},Ft={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit vergünstigten Krediten gefördert.",effects(e,t,i){const n=i-t>2;return[St("stateDebt").byValue(.5),St("buildingsSourceBio").byPercent(-1).if(n),St("buildingsSourceOil").byPercent(-1).if(n),St("buildingsSourceTele").byPercent(-1).if(n),St("buildingsPrivateDemand").byPercent(-1).if(n)]},priority:e=>Pi(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100)},Bt={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gefördert.",effects(e,t,i){const n=i-t>2;return[St("stateDebt").byValue(1),St("buildingsSourceBio").byPercent(-2).if(n),St("buildingsSourceOil").byPercent(-2).if(n),St("buildingsSourceTele").byPercent(-2).if(n),St("buildingsPrivateDemand").byPercent(-2).if(n),St("popularity").byValue(5).if(n)]},priority:e=>Pi(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100)},Mt={title:"Dämmung von Wohngebäuden sehr stark fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungsplätze im Handwerk geschaffen durch einen Zuschuss von 500€ pro Monat, damit der zu erwartende Bauboom bewältigt werden kann.",effects(e,t,i){const n=i-t,r=n>=2;return[St("stateDebt").byValue(3),St("buildingsSourceBio").byPercent(-4).if(r),St("buildingsSourceOil").byPercent(-4).if(r),St("buildingsSourceTele").byPercent(-4).if(r),St("buildingsPrivateDemand").byPercent(-4).if(r),St("popularity").byValue(10).if(1===n),St("popularity").byValue(5).if(r)]},priority:e=>Pi(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100),citations:[],details:G`

  `,internals:G`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `},Ut={title:"Dämmung von Wohngebäuden abschaffen",description:"Wir geben den Bürgern die Freiheit zurück, selbst zu entscheiden, ob sie ihr Haus dämmen wollen und lassen die Förderung auslaufen",effects:()=>[St("stateDebt").byValue(-.5),St("buildingsSourceBio").byPercent(-.5),St("buildingsSourceOil").byPercent(-.5),St("buildingsSourceTele").byPercent(-.5),St("buildingsPrivateDemand").byPercent(-.5)],priority(e){const t=function(e,t){const i=e.sort(((e,t)=>t.effectiveSince-e.effectiveSince)).find((e=>t.test(e.lawId)));return null==i?void 0:i.lawId}(e.acceptedLaws,/^DaemmungAltbau/);if(!t||"DaemmungAltbauAbschaffen"===t)return 0;return Pi(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100)}},It={title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",effects(e,t,i){const n=e.values.publicLocalCapacity/e.values.publicLocalUsage*100,r=i-t;return[St("stateDebt").byValue(3),St("publicLocalCapacity").byPercent(1),At("publicLocalUsage","carUsage").byPercent(1).if(n>=105),St("popularity").byValue(2).if(r>=5)]},priority:e=>Pi(150,80,e.values.publicLocalCapacity/e.values.publicLocalUsage*100),citations:[ne],details:G`

  `,internals:G`
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
  `},Gt={title:"Nahverkehr Modernisieren",description:"Anschaffung Moderner, bequemer, emissionsfreier Fahrzeuge für den Nahverkehr wird gefördert.",effects:(e,t,i)=>[St("stateDebt").byValue(3),St("publicLocalCapacity").byPercent(1),At("publicLocalUsage","carUsage").byPercent(1),St("popularity").byValue(3)],priority(e){if(!Di(e,"FernverkehrModernisieren"))return 0;return Pi(0,24,e.values.co2emissionsMobility/e.values.co2emissions*100)},citations:[ee],details:G`

  `,internals:G`
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
  `},xt={title:"Förderung für Tierhaltung abschaffen",description:"Subventionen für Tierhaltung werden ersatzlos gestrichen",effects:(e,t,i)=>[St("stateDebt").byValue(-10),St("co2emissionsAgriculture").byValue(-10).if(t===i),St("popularity").byValue(-20).if(t===i)],priority:e=>Pi(1e4,0,e.values.unemployment)},Nt={title:"Nahverkehr Kostenlos",description:"Die Kosten für den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr benötigt werden.",effects(e,t,i){const n=t===i?10:1;return[St("stateDebt").byValue(10),At("publicLocalUsage","carUsage").byPercent(n),St("popularity").byValue(10).if(t===i),St("unemployment").byValue(20).if(t===i)]},priority:e=>Pi(90,120,e.values.publicLocalCapacity/e.values.publicLocalUsage*100),citations:[ee],details:G`

  `,internals:G`
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
  `},_t={title:"Autos in Innenstädten verbieten",description:"Die Innenstädte der großen Städte werden zu Autofreien Zonen erklärt und begrünt, sowie Fahrrad und Fußgängerzonen eingerichtet.",effects(e,t,i){var n=-2;return e.values.publicLocalCapacity>1.2*e.values.publicLocalUsage&&(n=-1,t+2<i&&(n=2)),[St("popularity").byValue(n),At("publicLocalUsage","carUsage").byPercent(10).if(t===i)]},priority:e=>Pi(90,120,e.values.publicLocalCapacity/e.values.publicLocalUsage*100)},Kt={title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des öffentlichen Fernverkehrs wird bundesweit stärker Bezuschusst und Vorangetrieben",effects(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return[St("stateDebt").byValue(6),St("publicNationalCapacity").byPercent(1),At("publicNationalUsage","carUsage").byPercent(1).if(t>=105),At("publicNationalUsage","carUsage").byPercent(.5).if(t>=105),St("popularity").byValue(2).if(t>=105)]},priority:e=>Pi(150,80,e.values.publicNationalCapacity/e.values.publicNationalUsage*100),citations:[],details:G`

  `,internals:G`
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
  `},jt={title:"Fernverkehr Modernisieren",description:"Moderne, bequeme und weniger anfällige Züge werden für den Fernverkehr angeschafft.",effects:(e,t,i)=>[St("stateDebt").byValue(3),St("publicNationalCapacity").byPercent(1),At("publicNationalUsage","carUsage").byPercent(1),St("popularity").byValue(3)],priority:e=>Pi(0,24,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[],details:G`

  `,internals:G`
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
  `},Ht={title:"Wasserstofftechnologie fördern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie wird stark gefördert.",effects:(e,t,i)=>[St("stateDebt").byValue(3),St("carRenewablePercentage").byValue(1).if(t+5<=i)],priority(e){const t=e.values;return Pi(40,90,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)}},Jt={title:"Wasserstoffmobilität fördern",description:"Wasserstoffbasierte Fahrzeuge werden gefördert.",effects:(e,t,i)=>Di(e,"WasserstofftechnologieFoerdern")?[St("stateDebt").byValue(3),St("carRenewablePercentage").byValue(1),St("popularity").byValue(1).if(t===i)]:[],priority:e=>Pi(0,26,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[],details:G`

  `,internals:G`
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
  `},Zt={title:"Abschaffung der Mineralölsteuer",description:"Die Steuer auf sämtliche erdölbasierten Treibstoffe wird abgeschafft.",effects:(e,t,i)=>[St("stateDebt").byValue(41),St("popularity").byValue(5).if(t===i),St("popularity").byValue(-3).if(t<i),At("publicLocalUsage","carUsage").byPercent(-20).if(t===i),At("publicNationalUsage","carUsage").byPercent(-20).if(t===i)],priority(e){const t=e.values;return Pi(60,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[Z],details:"",internals:G`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${K(Z)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `},Rt={title:"Ausbau von Straßen",description:"Autobahnen und Straßen werden intensiver ausgebaut.",effects:e=>[St("stateDebt").byValue(5),St("popularity").byValue(.5),At("publicLocalUsage","carUsage").byPercent(-1),At("publicNationalUsage","carUsage").byPercent(-1)],priority(e){const t=e.values;return Pi(60,100,t.carUsage/t.passengerTransportUsage*100)}},$t={title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effects:(e,t,i)=>[St("stateDebt").byValue(-7.35),St("popularity").byValue(-1).if(t===i)],priority(e){const t=e.values;return Pi(10,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)}},Qt={title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen für Dienstwagen werden abgeschafft.",effects:(e,t,i)=>[St("stateDebt").byValue(-18),St("popularity").byValue(-1).if(t===i),At("carUsage","publicLocalUsage").byPercent(-.05)],priority(e){const t=e.values;return Pi(50,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[R,he],details:G`

  `,internals:G`
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
  `},qt={title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=St("carEmissionFactor").setValue(157.9),i=t.getChange(e.values);return[St("popularity").byValue(2).if(i<0),t]},priority(e){if(Di(e,"Tempolimit100AufAutobahnen")||Di(e,"Tempolimit120AufAutobahnen")||Di(e,"TempolimitAufAutobahnenAussitzen"))return 0;const t=e.values;return Pi(10,100,t.carUsage/t.passengerTransportUsage*100)}},Yt={title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=St("carEmissionFactor").setValue(157.1),i=t.getChange(e.values);return[St("popularity").byValue(2).if(i<0),t]},priority(e){if(!Di(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values;return Pi(10,100,t.carUsage/t.passengerTransportUsage*100)}},Xt={title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=St("carEmissionFactor").setValue(154.1),i=t.getChange(e.values);return[St("popularity").byValue(-1).if(i<0),t]},priority(e){if(!Di(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values;return Pi(10,100,t.carUsage/t.passengerTransportUsage*100)}},ei={title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das könnte zwar Strafen oder gar Zwangsmaßnahmen bewirken, aber das Risiko der gefährdeten Wiederwahl ist zu groß.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects:()=>[St("stateDebt").byValue(-10),St("popularity").byValue(-2)],priority(e){if(Di(e,"Tempolimit100AufAutobahnen")||Di(e,"Tempolimit120AufAutobahnen")||Di(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values;return Pi(10,100,t.carUsage/t.passengerTransportUsage*100)}},ti={title:"Elektromobilität Fördern",description:"Höhere Kaufprämien, Steuerbefreiung, günstiges Laden für E-Autos.",effects:(e,t,i)=>Di(e,"LadeinfrastrukturAusbauen")?[St("stateDebt").byValue(5),St("carRenewablePercentage").byValue(1),St("popularity").byValue(4).if(t===i)]:[],priority(e){if(!Di(e,"LadeinfrastrukturAusbauen"))return 0;return Pi(0,25,e.values.co2emissionsMobility/e.values.co2emissions*100)},citations:[],details:G`

  `,internals:G`
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
  `},ii={title:"Ladeinfrastruktur ausbauen",description:"Ausbau der Ladeinfrastruktur wird mit Steuermitteln stark gefördert.",effects:(e,t,i)=>[St("stateDebt").byValue(5),St("carRenewablePercentage").byValue(1),St("popularity").byValue(2).if(t===i)],priority:e=>Pi(0,25,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[ee],details:G`

  `,internals:G`
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
  `},ni={title:"Windkraft vereinfachen",description:"Genehmigungen für Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effects:(e,t,i)=>[],priority:e=>Pi(80,27,Wi(e)),citations:[],details:G`

  `,internals:G`
    # Happy Path 1.3

    # Folgen

    - Popularität unverändert: Einige freuen sich, andere ärgern die Windräder.
    - Kostenneutral.
    - Änderungen in den Ausschreibungsverfahren und Abstandsregeln wirken sich schneller aus.

    # Priorität

    - 0% bei einem Anteil von Windstrom von 80%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert
  `},ri={title:"Abstandsregeln für Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem über Abstände zwischen den Windkraftanlagen und Wohngebäuden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Di(e,"WindkraftVereinfachen")?0:5;return[St("electricityWindOnshoreMaxNew").setValue(6).if(i>=t+n)]},priority:e=>Di(e,"AbstandsregelnFuerWindkraftLockern")?Pi(30,100,Wi(e)):Di(e,"AbstandsregelnFuerWindkraftVerschaerfen")?Pi(70,27,Wi(e)):0},ai={title:"Abstandsregeln für Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln für Windkraftanlagen sowie Bauerlaubniss in Wäldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Di(e,"WindkraftVereinfachen")?0:5;return[St("popularity").byValue(-3).if(t===i),St("electricityWindOnshoreMaxNew").setValue(30).if(i>=t+n)]},priority:e=>Di(e,"AbstandsregelnFuerWindkraftWieBisher")?Pi(70,27,Wi(e)):Di(e,"AbstandsregelnFuerWindkraftAbschaffen")?Pi(30,100,Wi(e)):0,citations:[],details:G`

  `,internals:G`
    # Happy Path 2

    # Priorität

    Zu Beginn und wenn "WieBisher" ausgewählt:

    - 0% bei einem Anteil von Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert

    Wenn Abstandsregeln abgeschafft wurden:

    - 0% bei einem Anteil von Windstrom von 30%.
    - 100% bei einem Anteil von Windstrom von 100%.
  `},si={title:"Abstandsregeln für Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Di(e,"WindkraftVereinfachen")?0:5;return[St("popularity").byValue(-40).if(t===i),St("electricityWindOnshoreMaxNew").setValue(1e3).if(i>=t+n)]},priority:e=>Di(e,"AbstandsregelnFuerWindkraftLockern")?Pi(80,25,Wi(e)):0},li={title:"Abstandsregeln für Windkraft verschärfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngebäuden im Innenbereich muss das Zehnfache der Gesamthöhe der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects:(e,t,i)=>[St("popularity").byValue(5).if(t===i),St("electricityWindOnshoreMaxNew").setValue(.42)],priority:e=>Di(e,"AbstandsregelnFuerWindkraftWieBisher")?Pi(0,100,Wi(e)):0},oi={title:"Ausschreibungsverfahren für Windkraft wie zu Beginn",description:"Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Di(e,"WindkraftVereinfachen")?0:5,r=Math.min(6.9,e.values.electricityWindOnshoreMaxNew);return[St("electricityWind").byValue((r+1.2)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>Di(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?Pi(60,100,Ti(e)):0},ui={title:"Ausschreibungsverfahren für Windkraft verdoppeln",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Di(e,"WindkraftVereinfachen")?0:5,r=Math.min(13.8,e.values.electricityWindOnshoreMaxNew);return[St("popularity").byValue(-1).if(t===i),St("unemployment").byValue(-20).if(t===i),St("electricityWind").byValue((r+2.4)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>Di(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?Pi(100,50,Ti(e)):Di(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?Pi(40,100,Ti(e)):0},ci={title:"Ausschreibungsverfahren für Windkraft vervierfachen",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Di(e,"WindkraftVereinfachen")?0:5,r=Math.min(27.6,e.values.electricityWindOnshoreMaxNew);return[St("popularity").byValue(-2).if(t===i),St("unemployment").byValue(-100).if(t===i),St("electricityWind").byValue((r+4.8)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>Di(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?Pi(100,50,Ti(e)):Di(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?Pi(0,100,Ti(e)):0,citations:[],details:G`
    Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung
    von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen
    Subventionierung umsetzen kann bekommt den Zuschlag.
  `,internals:G`
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
  `},di={title:"Ausschreibungsverfahren für Windkraft verachtfachen",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=Di(e,"WindkraftVereinfachen")?0:5,r=Math.min(55.2,e.values.electricityWindOnshoreMaxNew);return[St("popularity").byValue(-20).if(t===i),St("unemployment").byValue(-100).if(t===i),St("electricityWind").byValue((r+9.6)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>Di(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?Pi(100,50,Ti(e)):0},hi={title:"CO2 Preis Erhöhen",description:"Die Preise werden schneller erhöht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=zi(50,0,Ti(e),-1),r=zi(50,0,e.values.carRenewablePercentage,-1),a=-.5;return[St("stateDebt").byValue(-.045*e.values.co2emissions).if(i>=t+2),St("stateDebt").byValue(-.03*e.values.co2emissions).if(i>=t+4),St("popularity").byValue(n+r),St("co2emissionsIndustry").byPercent(a),St("co2emissionsAgriculture").byPercent(a),St("co2emissionsOthers").byPercent(a),At("electricityBrownCoal","electricityWind").byPercent(-.35),At("electricityHardCoal","electricityWind").byPercent(-.35),At("electricityBrownCoal","electricitySolar").byPercent(-.15),At("electricityHardCoal","electricitySolar").byPercent(-.15),At("buildingsSourceOil","buildingsSourceBio").byPercent(a),At("carUsage","publicNationalUsage").byPercent(-.25),At("carUsage","publicLocalUsage").byPercent(-.25)]},priority:e=>Di(e,"VollerCO2Preis")||Di(e,"WirksamerCO2Preis")?0:50,citations:[me],details:G`

  `,internals:G`
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
  `},gi={title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=zi(80,50,Ti(e),-3),r=zi(80,50,e.values.carRenewablePercentage,-3),a=-2;return[St("stateDebt").byValue(-.125*e.values.co2emissions),St("popularity").byValue(n+r),St("co2emissionsIndustry").byPercent(a),St("co2emissionsAgriculture").byPercent(a),St("co2emissionsOthers").byPercent(a),At("electricityBrownCoal","electricityWind").byPercent(-1.4),At("electricityHardCoal","electricityWind").byPercent(-1.4),At("electricityBrownCoal","electricitySolar").byPercent(-.6),At("electricityHardCoal","electricitySolar").byPercent(-.6),At("buildingsSourceOil","buildingsSourceBio").byPercent(a),At("carUsage","publicNationalUsage").byPercent(-1),At("carUsage","publicLocalUsage").byPercent(-1)]},priority:e=>Di(e,"CO2PreisErhoehen")?50:0,citations:[me],details:G`

  `,internals:G`
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
  `},mi={title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=zi(90,50,Ti(e),-10),r=zi(90,50,e.values.carRenewablePercentage,-10),a=-5;return[St("stateDebt").byValue(-3*e.values.co2emissions),St("popularity").byValue(n+r),St("co2emissionsIndustry").byPercent(a),St("co2emissionsAgriculture").byPercent(a),St("co2emissionsOthers").byPercent(a),At("electricityBrownCoal","electricityWind").byPercent(-3.5),At("electricityHardCoal","electricityWind").byPercent(-3.5),At("electricityBrownCoal","electricitySolar").byPercent(-1.5),At("electricityHardCoal","electricitySolar").byPercent(-1.5),At("buildingsSourceOil","buildingsSourceBio").byPercent(a),At("carUsage","publicNationalUsage").byPercent(-2.5),At("carUsage","publicLocalUsage").byPercent(-2.5)]},priority:e=>Di(e,"WirksamerCO2Preis")?50:0,citations:[ge],details:G`

  `,internals:G`
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
  `},bi={title:"Solarstrom Förderung einstellen",description:"Mittlere bis große Solaranlagen sollten sich selbst tragen. Die Förderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:()=>[St("electricitySolar").byValue(2)],priority:e=>Di(e,"SolarstromFoerderungWieZuBeginn")?Pi(0,100,Ti(e)):0,details:G`

  `},pi={title:"Solarstrom Förderung wie zu Beginn",description:"Subventionierung für mittlere bis große Solaranlagen wie bisher",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:()=>[St("electricitySolar").byValue(5)],priority:e=>Di(e,"SolarstromFoerdernx8")?Pi(70,100,Ti(e)):0,details:G`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `},fi={title:"Solarstrom Förderung x2",description:"Subventionierung für mittlere bis große Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[St("popularity").byValue(10).if(t===i),St("unemployment").byValue(-31e3).if(t===i),St("electricitySolar").byValue(10)],priority:e=>Di(e,"SolarstromFoerderungWieZuBeginn")?Pi(100,30,Ti(e)):0,details:G`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `},vi={title:"Solarstrom Förderung x4",description:"Subventionierung für mittlere bis große Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[St("popularity").byValue(20).if(t===i),St("unemployment").byValue(-89e3).if(t===i),St("electricitySolar").byValue(20)],priority:e=>Di(e,"SolarstromFoerdernx2")?Pi(100,30,Ti(e)):0,details:G`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:G`
    # Happy path 10

    ${K($)}
  `,citations:[$]},wi={title:"Solarstrom Förderung x8",description:"Subventionierung für mittlere bis große Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[St("popularity").byValue(-10).if(t===i),St("unemployment").byValue(-209e3).if(t===i),St("electricitySolar").byValue(40)],priority:e=>Di(e,"SolarstromFoerdernx4")?Pi(100,30,Ti(e)):0,details:G`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.`},yi={title:"Solar auf neuen Dächern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die Dächer.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[St("popularity").byValue(-3).if(t===i),St("electricitySolar").byValue(2)],priority:e=>Di(e,"SolarstromFoerderungWieZuBeginn")?Pi(100,30,Ti(e)):0,details:G`

  `,internals:G`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `};const ki=E({AllesBleibtBeimAlten:B,InitialAtomausstieg:Vt,KohleverstromungEinstellen:zt,EnergiemixRegeltDerMarkt:Dt,KernenergienutzungVerlaengern:Tt,NetzausbauErleichtern:Lt,NetzausbauFoerdern:Ot,StromspeicherungErleichtern:Ct,StromspeicherungFoerdern:Et,WindkraftVereinfachen:ni,AbstandsregelnFuerWindkraftVerschaerfen:li,AbstandsregelnFuerWindkraftWieBisher:ri,AbstandsregelnFuerWindkraftLockern:ai,AbstandsregelnFuerWindkraftAbschaffen:si,AusschreibungsverfahrenfuerWindkraftWieBisher:oi,AusschreibungsverfahrenfuerWindkraftVerdoppeln:ui,AusschreibungsverfahrenfuerWindkraftVervierfachen:ci,AusschreibungsverfahrenfuerWindkraftVerachtfachen:di,SolarstromFoerderungAbschaffen:bi,SolarstromFoerderungWieZuBeginn:pi,SolarstromFoerdernx2:fi,SolarstromFoerdernx4:vi,SolarstromFoerdernx8:wi,SolarAufAllenDaechernVerpflichtend:yi,DaemmungAltbau1Percent:Ft,DaemmungAltbau2Percent:Bt,DaemmungAltbau4Percent:Mt,DaemmungAltbauAbschaffen:Ut,NahverkehrKostenlos:Nt,AutosInInnenstaedtenVerbieten:_t,WasserstofftechnologieFoerdern:Ht,WasserstoffmobilitaetFoerdern:Jt,NahverkehrAusbauen:It,NahverkehrModernisieren:Gt,FernverkehrVerbindungenAusbauen:Kt,FernverkehrModernisieren:jt,AusbauVonStrassen:Rt,AbschaffungDerMineraloelsteuer:Zt,DieselPrivilegAbgeschaffen:$t,DienstwagenPrivilegAbgeschaffen:Qt,Tempolimit130AufAutobahnen:qt,Tempolimit120AufAutobahnen:Yt,Tempolimit100AufAutobahnen:Xt,TempolimitAufAutobahnenAussitzen:ei,ElektromobilitaetFoerdern:ti,LadeinfrastrukturAusbauen:ii,FoerderungFuerTierhaltungAbschaffen:xt,CO2PreisErhoehen:hi,WirksamerCO2Preis:gi,VollerCO2Preis:mi});function Si(e){const t=function(e){const t=ki.find((t=>t.id===e));if(t)return t;throw Error(`Law #${e} not found`)}(e.lawId);if(t)return o(l({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function Ai(e){return e.map((e=>{const t=ki.find((t=>t.id===e));return t||console.error(`Inconsistency: Proposed law #${e} not found`),t})).filter((e=>e))}function Pi(e,t,i){const n=i-e,r=t-e;if(0===r)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return n/r*100}function zi(e,t,i,n){return Math.max(0,Pi(e,t,i))/100*n}function Di(e,t){if(!ki.map((e=>e.id)).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some((i=>i.lawId===t&&i.effectiveSince<=e.currentYear))}function Wi(e){const t=e.values;return t.electricityWindUsable/t.electricityDemand*100}function Ti(e){return(e.values.electricityWindUsable+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}function Vi(e){return e.find((e=>e.title.match(/subvention/i)&&e.title.match(/abbau/i)))}const Li=2,Oi=3,Ci=4,Ei=5,Fi=6;const Bi=E({AbstandsregelnWindkraft:F,Altbausanierung:{title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es für unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply:()=>[],probability(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return Math.max(1,Pi(15,25,t)/100)}},Bestechung:{title:"Anruf von befreundetem Unternehmer",description:"Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine\n    Ferienvilla auf Sardinien einladen. Er verlässt sich natürlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen\n    nicht zustimmen wirst.\n  ",apply(e){if(e){const t=Vi(Ai(e.proposedLaws));if(t)return[kt("rejectLaw",{lawId:t.id})]}return[]},probability:e=>Vi(Ai(e.proposedLaws))?Math.random():0},EnergieStrategie:{title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute über die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply:()=>[],probability:()=>Math.random()},FinanzKollaps:{title:"Zusammenbruch des Finanzsystems",description:"Deine Staatsfinanzen sind desaströs. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden\n    jemals wieder wirst zurückahlen können. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen\n    könntest. Das Spiel ist damit leider beendet.\n  ",apply:()=>[kt("gameOver")],probability:e=>e.values.stateDebt>2*wt.stateDebt?Ci:0},Hitzehoelle:{title:"Hitzehölle",description:"Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen Küstenregionen\n  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr wächst.\n  Um die verbleibdenden Teile sind erbitterte Kämpfe ausgebrochen.\n  ",apply:()=>[kt("gameOver")],probability:e=>e.values.co2budget<=0?Fi:0},NewYear:{title:"Happy New Year!",description:"Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen Tätigkeit aufgestellt\n    und kommt zu dem nicht weiter überraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -\n    ebenfalls nicht überraschend - sieht die Sache anders und verurteilt die Regierungserklärung als haltlos.\n  ",apply:()=>[kt("advanceYear")],probability(e){const t=4*(e.currentYear-2021),i=e.actionCount-t;if(i<3)return 0;if(i>=5)return Li;const n=Math.round(33.3*(i-2))/100;return Math.min(1,n)}},SocialMedia:{title:"Social Media Alarm!",description:"Deine Wahlkampfberaterin ruft dich völlig aufgelöst an. Ob denn an den Geschichten was dran sein, die da im\n    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.\n    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.\n  ",apply:()=>[St("popularity").byPercent(-20)],probability:()=>Math.random()},TempolimitAufAutobahnen:{title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland müssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply:()=>[],probability:()=>Math.random()},TimesUp:{title:"Du hast durchgehalten",description:"Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,\n    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Maßnahmen waren zu finanzieren\n    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!\n  ",apply:()=>[kt("gameOver")],probability:e=>2050===e.currentYear?Oi:0},WahlVerloren:{title:"Wahl verloren",description:"Deine Beliebtheit in der Bevölkerung ist katastrophal, lieber würde man Mao Zedong wählen als dich.\n    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du gehörst) und ist damit unter\n    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon länger kein vernünftiger Mensch mehr geglaubt.\n  ",apply:()=>[kt("gameOver")],probability:e=>e.values.popularity<=0?Ei:0},WindkraftAusschreibung:{title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply:()=>[],probability:()=>Math.random(),citations:[],details:G`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:G`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `},SolarstromFoerderung:{title:"Bürgerinitiative fordert stärkere Solarförderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply:()=>[],probability(e){const t=Di(e,"SolarstromFoerderungAbschaffen"),i=Di(e,"SolarstromFoerderungWieZuBeginn"),n=Di(e,"SolarstromFoerdernx2");return t||i||n?Math.random():0},citations:[J],details:G`

  `,internals:G`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${K(J)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `},AtomKatastrophe:{title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply:()=>[kt("gameOver")],probability:e=>e.acceptedLaws.find((e=>"KernenergienutzungVerlaengern"===e.lawId))?Math.random():0,laws:[],citations:[],details:G`

  `,internals:G`

  `},BSE:{title:"Staatsoberhaupt verstorben",description:"Du stirbst an der neuen BSE Variante. Tja, hättest du dich mal besser um das Tierwohl gekümmert...",apply:()=>[kt("gameOver")],probability:e=>Ai(e.acceptedLaws.map((e=>e.lawId))).find((e=>e.title.match(/tierwohl/i)))?0:Math.random(),laws:[],citations:[],details:G`

  `,internals:G`

  `},Duerrewelle:{title:"Dürreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausfälle sind enorm.",apply:()=>[St("gdp").byValue(-100),St("popularity").byValue(-10)],probability:e=>Math.min(1,Pi(400,0,e.values.co2budget)/100),laws:[],citations:[],details:G`

  `,internals:G`
  `},PRKohleindustrie:{title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und führt zu einer neuen Diskussion über Lobbyismus.",apply:()=>[St("popularity").byValue(-2)],probability:e=>Di(e,"WirksamerCO2Preis")||Di(e,"KohleverstromungEinstellen")?0:.3,laws:[],citations:[],details:G`

  `,internals:G`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `},PRInnenminister:{title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply:()=>[St("popularity").byValue(-2)],probability:()=>.3,laws:[],citations:[],details:G`

  `,internals:G`

  `},Klimafluechtlinge:{title:"Klimaflüchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimaflüchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply:()=>[St("stateDebt").byValue(10)],probability:e=>e.values.co2budget<500?.2:0,laws:[],citations:[],details:G`

  `,internals:G`

  `},Plagiatsaffaere:{title:"Plagiatsaffäre",description:"Während des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet Wählerstimmen.",apply:()=>[St("popularity").byValue(-10)],probability:e=>.5,laws:[],citations:[],details:G`

  `,internals:G`

  `},CO2PreisDebatte:{title:"Debatte über CO2-Preise",description:"Eine marktliberale Kampagne ist sehr erfolgreich darin, Dich als Verbots-Kanzler hinzustellen. Aus allen Richtungen prasseln Forderungen nach einem adäquaten CO2-Preis auf Dich ein. Nur leider gehen die Vorstellungen über den genauen Preis sehr weit auseinander.",laws:["CO2PreisErhoehen","WirksamerCO2Preis","VollerCO2Preis"],apply:()=>[],probability:e=>Pi(1,3,(Di(e,"AutosInInnenstaedtenVerbieten")?1:0)+(Di(e,"KohleverstromungEinstellen")?1:0)+(Di(e,"SolarAufAllenDaechernVerpflichtend")?1:0)+(Di(e,"Tempolimit130AufAutobahnen")?1:0)+(Di(e,"Tempolimit120AufAutobahnen")?1:0)+(Di(e,"Tempolimit100AufAutobahnen")?1:0))/100}}),Mi={currentYear:2021,values:wt,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],actionCount:0,over:!1};function Ui(e=Mi,t=c()){return{id:t,currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:yt(e.values),events:e.events,actionCount:e.actionCount,over:e.over}}function Ii(e,t=ki,i=Bi,n=Math.random){const r=function(e,t,i){const n=function(e,t){return t.map((t=>o(l({},t),{prob:t.probability(e)}))).filter((e=>e.prob>0))}(e,t),r=function(e){return e.filter((e=>e.prob>1)).reduce(((e,t)=>t.prob>((null==e?void 0:e.prob)||0)?t:e),void 0)}(n);if(r)return r;return function(e,t){for(const i of e)if((t-=i.prob)<0)return i;return}(function(e){const t=e.map((e=>e.prob)).reduce(((e,t)=>e+t),0),i=.6/t;return e.map((e=>o(l({},e),{prob:e.prob*i})))}(n),i())}(e,i,n);if(r){const t={id:r.id,occuredIn:e.currentYear,acknowledged:!1};e.events.unshift(t)}const a=function(e,t,i){const n=t=>{var i;return null==(i=e.acceptedLaws)?void 0:i.some((e=>e.lawId===t.id))},r=t=>{var i;return null==(i=e.rejectedLaws)?void 0:i.includes(t.id)},a=e=>{var t;return(null==(t=e.labels)?void 0:t.includes("hidden"))||!1},s=t=>({law:t,priority:t.priority(e)}),l=e=>({law:e.law,priority:e.priority+(i.includes(e.law.id)?100:0)});return t.filter(x(n)).filter(x(r)).filter(x(a)).map(s).filter((e=>e.priority>0)).map(l).sort(((e,t)=>t.priority-e.priority)).map((e=>e.law.id)).slice(0,6)}(e,t,(null==r?void 0:r.laws)?r.laws:[]);return e.proposedLaws=function(e,t){const i=[...e],n=t.filter((e=>i.includes(e))),r=t.filter((e=>!n.includes(e)));var a=0;for(;a<i.length;)n.includes(i[a])?a++:0!==r.length?(i[a]=r.shift(),a++):i.splice(a,1);return i.push(...r.slice(0,6-i.length)),i}(e.proposedLaws,a),e.actionCount++,r}function Gi(e){return Math.max(0,Math.min(100,e))}const xi=[{id:"start",title:"Stell dir vor...",text:G`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du auswählen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die Wähler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine Wähler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];const Ni={setGameState(e,t){e.game=t.game},gameOver(e){e.game=o(l({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},_i={proposedLaws:e=>e.game&&e.game.proposedLaws?Ai(e.game.proposedLaws):[]};var Ki=d({props:{law:{type:Object,required:!0},selectable:{type:Boolean,required:!0},numCards:{type:Number,required:!0}},setup:()=>({store:Dr()}),data:()=>({accepted:!1}),computed:o(l({},h(["proposedLaws"])),{zIndex(){return this.law.zIndex},transform(){return`rotate(${2*(this.law.pos-this.numCards/2)}deg) translate(${20*Math.abs(this.numCards/2-this.law.pos)}px, -50%)`}}),methods:{select(){this.$emit("selected")},accept(){this.accepted=!0},sendAccept(e){e.animationName.match(/^twistOut-/)&&this.$emit("accepted",this.law.id)}}});const ji=w("data-v-c57832f8");g("data-v-c57832f8");const Hi={key:0,type:"radio"},Ji={key:0,class:"button-bar"};m();const Zi=ji(((e,t,i,n,r,a)=>(y(),b("div",{class:["Law",{accepted:e.accepted}],style:{zIndex:e.zIndex},onClick:t[2]||(t[2]=(...t)=>e.select&&e.select(...t)),onAnimationend:t[3]||(t[3]=(...t)=>e.sendAccept&&e.sendAccept(...t))},[p("label",null,[e.selectable?(y(),b("input",Hi)):f("",!0),p("div",null,[p("h3",null,v(e.law.title),1),p("div",null,v(e.law.description),1),e.selectable?(y(),b("div",Ji,[p("button",{class:"accept",onClick:t[1]||(t[1]=(...t)=>e.accept&&e.accept(...t))},"✓")])):f("",!0)])])],38))));Ki.render=Zi,Ki.__scopeId="data-v-c57832f8";var Ri=d({components:{LawCard:Ki},setup:()=>({store:Dr()}),data:()=>({zIndexes:[],poppedUp:!1}),computed:o(l({},h(["proposedLaws"])),{lawsToShow(){return this.zIndexes.length||(this.zIndexes=I(this.proposedLaws.length,0)),this.proposedLaws.map(((e,t)=>o(l({},e),{zIndex:this.zIndexes[t],pos:t})))}}),methods:{accept(e){this.store.dispatch("acceptLaw",{lawId:e})},select(e){this.zIndexes=I(this.proposedLaws.length,e)},sitOut(){this.store.dispatch("sitOut")}}});const $i=w("data-v-290d8620")(((e,t,i,n,r,a)=>{const s=A("LawCard");return y(),b(k,null,[p("div",{class:["ProposedLaws",{poppedUp:e.poppedUp}],onClick:t[1]||(t[1]=t=>e.poppedUp=!0)},[(y(!0),b(k,null,S(e.lawsToShow,((t,i)=>(y(),b(s,{key:t.id,law:t,selectable:e.poppedUp,numCards:e.lawsToShow.length,onAccepted:()=>e.accept(t.id),onSelected:()=>e.select(i)},null,8,["law","selectable","numCards","onAccepted","onSelected"])))),128))],2),p("div",{class:"sitOutButton",onClick:t[2]||(t[2]=()=>e.sitOut())},"Aussitzen")],64)}));Ri.render=$i,Ri.__scopeId="data-v-290d8620";var Qi=d({props:{title:String,text:String},methods:{acknowledge(){this.$emit("acknowledge")}}});const qi=w("data-v-2df6be4d");g("data-v-2df6be4d");const Yi={key:0};m();const Xi=qi(((e,t,i,n,r,a)=>e.text?(y(),b("div",{key:0,onClick:t[1]||(t[1]=(...t)=>e.acknowledge&&e.acknowledge(...t))},[e.title?(y(),b("h2",Yi,v(e.title),1)):f("",!0),p("p",null,v(e.text),1)])):f("",!0)));Qi.render=Xi,Qi.__scopeId="data-v-2df6be4d";var en=d({props:{title:{type:String,required:!0},value:{type:Number,required:!0},zoom:{type:Number,default:1}},computed:{titleStyle(){return{fontSize:.5*this.zoom+"em"}},progressBarStyle(){return{width:50*this.zoom+"px",height:5*this.zoom+"px"}},indicatorStyle(){const e=this.value>40?"green":this.value>20?"goldenrod":"red";return{width:this.value+"%",backgroundColor:e}}}});const tn=w("data-v-37cfebf9");g("data-v-37cfebf9");const nn={class:"container"};m();const rn=tn(((e,t,i,n,r,a)=>(y(),b("div",nn,[p("div",{class:"title",style:e.titleStyle},v(e.title),5),p("div",{class:"progress-bar",style:e.progressBarStyle},[p("div",{class:"indicator",style:e.indicatorStyle},null,4)],4)]))));en.render=rn,en.__scopeId="data-v-37cfebf9";var an=d({props:{value:{type:Number,required:!0}},components:{IndicatorBar:en},computed:{isShort(){return this.value<20},isLess(){return this.value>=20&&this.value<50},isMore(){return this.value>=50&&this.value<80},isMuch(){return this.value>=80}}});const sn=w("data-v-791f01dd");g("data-v-791f01dd");const ln={id:"finances"},on={key:0,src:"/assets/money-short.7ce9dbed.png",id:"short"},un={key:1,src:"/assets/money-less.c10d45f8.png",id:"less"},cn={key:2,src:"/assets/money-more.a1c17d8d.png",id:"more"},dn={key:3,src:"/assets/money-much.ad651475.png",id:"much"};m();const hn=sn(((e,t,i,n,r,a)=>{const s=A("IndicatorBar");return y(),b("div",ln,[p(s,{title:"Finanzen",value:e.value,zoom:.9},null,8,["value","zoom"]),e.isShort?(y(),b("img",on)):f("",!0),e.isLess?(y(),b("img",un)):f("",!0),e.isMore?(y(),b("img",cn)):f("",!0),e.isMuch?(y(),b("img",dn)):f("",!0)])}));an.render=hn,an.__scopeId="data-v-791f01dd";var gn=d({props:{value:{type:Number,required:!0}},components:{IndicatorBar:en},computed:{areHappy(){return this.value>=50},areAngry(){return this.value<50}}});const mn=w("data-v-e5acad4c");g("data-v-e5acad4c");const bn={id:"popularity"},pn={key:0,src:"/assets/people-happy.1e9e529c.png",id:"happy"},fn={key:1,src:"/assets/people-angry.495e0425.png",id:"angry"};m();const vn=mn(((e,t,i,n,r,a)=>{const s=A("IndicatorBar");return y(),b("div",bn,[p(s,{title:"Beliebtheit",value:e.value,zoom:2.8,style:{margin:"-80px 0 0 200px"}},null,8,["value","zoom"]),e.areHappy?(y(),b("img",pn)):f("",!0),e.areAngry?(y(),b("img",fn)):f("",!0)])}));gn.render=vn,gn.__scopeId="data-v-e5acad4c";var wn=d({data:()=>({levels:{healthy:"/assets/plant-healthy.1c912fd2.png",sick:"/assets/plant-sick.05726ebf.png",withered:"/assets/plant-withered.2d8ffb21.png"}}),props:{value:{type:Number,required:!0}},components:{IndicatorBar:en},computed:{status(){return this.value>66?"healthy":this.value>33?"sick":"withered"},imgSrc(){return this.levels[this.status]}}});const yn=w("data-v-8ae17ad2");g("data-v-8ae17ad2");const kn={id:"plant"};m();const Sn=yn(((e,t,i,n,r,a)=>{const s=A("IndicatorBar");return y(),b("div",kn,[p(s,{title:"CO2-Budget",value:e.value,zoom:2.5,style:{margin:"-50px 0 0 60px"}},null,8,["value","zoom"]),p("img",{src:e.imgSrc,id:e.status},null,8,["src","id"])])}));wn.render=Sn,wn.__scopeId="data-v-8ae17ad2";var An=d({props:{year:Number}});const Pn=w("data-v-38fe5c52");g("data-v-38fe5c52");const zn={id:"calendar"};m();const Dn=Pn(((e,t,i,n,r,a)=>(y(),b("div",zn,v(e.year),1))));An.render=Dn,An.__scopeId="data-v-38fe5c52";var Wn=d({});const Tn=w("data-v-5952ab5a");g("data-v-5952ab5a");const Vn={id:"heater"},Ln=p("img",{src:"/assets/heater.5a77e425.png"},null,-1);m();const On=Tn(((e,t,i,n,r,a)=>(y(),b("div",Vn,[Ln]))));Wn.render=On,Wn.__scopeId="data-v-5952ab5a";var Cn=d({});const En=w("data-v-3902beeb");g("data-v-3902beeb");const Fn={id:"table"},Bn=p("img",{src:"/assets/table-top.c87bd2fd.png",id:"table-top"},null,-1),Mn=p("img",{src:"/assets/table-front.78c0f8c6.png",id:"table-front"},null,-1),Un=p("img",{src:"/assets/table-front.78c0f8c6.png",id:"table-back"},null,-1),In=p("img",{src:"/assets/table-side.49774a53.png",id:"table-left-side"},null,-1),Gn=p("img",{src:"/assets/table-side.49774a53.png",id:"table-right-side"},null,-1);m();const xn=En(((e,t,i,n,r,a)=>(y(),b("div",Fn,[Bn,Mn,Un,In,Gn]))));Cn.render=xn,Cn.__scopeId="data-v-3902beeb";var Nn=d({props:{withNews:Boolean}}),_n="/assets/board-side.d7181ded.png",Kn="/assets/tvset-legs.78b387df.png";const jn=w("data-v-118e7bdf");g("data-v-118e7bdf");const Hn={id:"tvset"},Jn=p("div",{id:"board"},[p("img",{id:"board-front",src:"/assets/board-front.41330f02.png"}),p("img",{id:"board-left",src:_n}),p("img",{id:"board-right",src:_n}),p("div",{id:"board-top"})],-1),Zn={id:"tv"},Rn=p("img",{id:"tv-front",src:"/assets/tv-front.82df5c0c.png"},null,-1),$n={key:0,id:"news",src:"/assets/news.c4bbc2d0.png"},Qn=p("div",{id:"legs"},[p("img",{id:"legs-front",src:Kn}),p("img",{id:"legs-back",src:Kn})],-1);m();const qn=jn(((e,t,i,n,r,a)=>(y(),b("div",Hn,[Jn,p("div",Zn,[Rn,e.withNews?(y(),b("img",$n)):f("",!0)]),Qn]))));Nn.render=qn,Nn.__scopeId="data-v-118e7bdf";var Yn={};const Xn=w("data-v-2419943a");g("data-v-2419943a");const er={class:"dialog"},tr={class:"buttons"};m();const ir=Xn(((e,t,i,n,r,a)=>(y(),b("div",er,[P(e.$slots,"default",{},void 0,!0),p("div",tr,[P(e.$slots,"buttons",{},void 0,!0)])]))));Yn.render=ir,Yn.__scopeId="data-v-2419943a";var nr=d({setup(){const e=Dr();return e.dispatch("setupTour"),{store:e}},components:{Dialog:Yn},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return xi.find((e=>e.id===this.$store.state.tour.step))},title(){var e;return null==(e=this.currentStep)?void 0:e.title},text(){var e;return null==(e=this.currentStep)?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var t;const i=document.querySelector(".highlighted");i&&i.classList.remove("highlighted"),e&&e.highlight&&(null==(t=document.querySelector(`#${e.highlight}`))||t.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}});nr.render=function(e,t,i,n,r,a){const s=A("Dialog");return e.title&&e.text?(y(),b(s,{key:0},{buttons:z((()=>[p("button",{onClick:t[1]||(t[1]=(...t)=>e.stop&&e.stop(...t))},"Tour beenden"),p("button",{onClick:t[2]||(t[2]=(...t)=>e.next&&e.next(...t))},"Weiter")])),default:z((()=>[p("h2",null,v(e.title),1),p("div",{innerHTML:e.text},null,8,["innerHTML"])])),_:1})):f("",!0)};var rr=d({components:{Calendar:An,ClimateIndicator:wn,Heater:Wn,LawProposals:Ri,SpeechBubble:Qi,FinanceIndicator:an,PopularityIndicator:gn,Table:Cn,Tour:nr,TVSet:Nn},data:()=>({store:Dr()}),computed:{eventToShow(){var e;const t=(null==(e=this.store.state.game)?void 0:e.events)||[];if(0===t.length)return;const i=t[0];return i.acknowledged?void 0:Bi.find((e=>e.id===i.id))},eventTitle(){var e;return(null==(e=this.eventToShow)?void 0:e.title)||""},eventText(){var e;return(null==(e=this.eventToShow)?void 0:e.description)||""},currentYear(){var e;return(null==(e=this.store.state.game)?void 0:e.currentYear)||2021},finance(){const e=this.store.state.game;return e?function(e){return Gi(100-e.values.stateDebt/wt.stateDebt*50)}(e):0},popularity(){var e;return(null==(e=this.store.state.game)?void 0:e.values.popularity)||100},climate(){const e=this.store.state.game;return e?function(e){return 0===e.values.co2emissions?100:Gi(e.values.co2budget*yt(wt).co2emissions/wt.co2budget/e.values.co2emissions*50)}(e):0}},methods:{acknowledge(){this.$store.dispatch("acknowledgeEvent",this.eventToShow)}}});const ar={class:"game-setup"},sr=p("h1",null,"#ich-kann-klima",-1),lr=p("div",{id:"walls"},[p("div",{id:"wall-back"}),p("div",{id:"wall-left"}),p("div",{id:"wall-right"})],-1);rr.render=function(e,t,i,n,r,a){const s=A("Calendar"),l=A("Heater"),o=A("PopularityIndicator"),u=A("TVSet"),c=A("ClimateIndicator"),d=A("Table"),h=A("FinanceIndicator"),g=A("LawProposals"),m=A("SpeechBubble"),f=A("Tour");return y(),b("div",ar,[sr,lr,p(s,{year:e.currentYear},null,8,["year"]),p(l),p(o,{value:e.popularity},null,8,["value"]),p(u,{"with-news":!!e.eventText},null,8,["with-news"]),p(c,{value:e.climate},null,8,["value"]),p(d),p(h,{value:e.finance},null,8,["value"]),p(g),p(m,{title:e.eventTitle,text:e.eventText,onAcknowledge:e.acknowledge},null,8,["title","text","onAcknowledge"]),p(f)])};var or=d({setup(){const e=Dr();return{store:e,acceptedLaws:D((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({opened:void 0}),computed:{visibleAccepted(){return ki.filter((e=>{var t,i;return(null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id)))&&!(null==(i=e.labels)?void 0:i.includes("hidden"))}))}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}});const ur=w("data-v-aace6332")(((e,t,i,n,r,a)=>(y(!0),b(k,null,S(e.visibleAccepted,((t,i)=>(y(),b("div",{key:i,class:["Law",{opened:i===e.opened}],onClick:t=>e.toggleOpen(i)},[p("h3",null,v(t.title),1),p("div",null,v(t.description),1)],10,["onClick"])))),128))));or.render=ur,or.__scopeId="data-v-aace6332";var cr=d({components:{GameSetup:rr,AcceptedLaws:or},setup:()=>({store:Dr()}),methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,i){i((t=>t.startGame(e.params.id)))}});const dr=w("data-v-3637ce73")(((e,t,i,n,r,a)=>{const s=A("GameSetup");return y(),b(s)}));cr.render=dr,cr.__scopeId="data-v-3637ce73";var hr=d({components:{Dialog:Yn},setup:()=>({store:Dr()}),computed:{co2(){var e,t;const i=null==(e=this.store.state.game)?void 0:e.values.co2budget;return(null==(t=this.store.state.game)?void 0:t.values.co2emissions)>0?i>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. Hätte die AfD nicht besser hinbekommen.":i>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken können. Punktlandung."},debt(){var e;return(null==(e=this.store.state.game)?void 0:e.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilitätskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var e;const t=null==(e=this.store.state.game)?void 0:e.values.popularity;return t<20?"entspricht dem, was man von einem langhährigen Diktator erwarten kann.":t<50?"ist nicht berauschend, wiedergewählt würdest du wohl eher nicht.":t<80?"reicht aus, dass du noch länger am Ruder bleiben könntest. Gratulation!":"ist völlig unglaubwürdig - war das wirklich eine freie Wahl?"}},methods:{loadGame(e){this.store.dispatch("loadGame",{gameId:e})},newGame(){this.$router.push("/games")}},beforeRouteEnter(e,t,i){i((t=>{t.loadGame(e.params.id)}))}});const gr=p("h2",null,"Das Spiel ist leider zu Ende",-1),mr=p("p",null,"Deine Entscheidungen haben etwas verändert - soviel kann man sagen.",-1),br=p("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),pr={class:"button-bar"};hr.render=function(e,t,i,n,r,a){const s=A("Dialog");return y(),b(s,null,{default:z((()=>[gr,mr,p("ul",null,[p("li",null,"Die CO2-Emmissionen "+v(e.co2),1),p("li",null,"Die Staatsfinanzen "+v(e.debt),1),p("li",null,"Deine Beliebtheit "+v(e.popularity),1)]),br,p("div",pr,[p("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Neuer Versuch")])])),_:1})};const fr=[{path:"/",redirect:"/games"},{path:"/games",component:cr},{path:"/games/:id",component:cr},{path:"/games/:id/over",component:hr}],vr=W({history:T(),routes:fr});const wr=function(e,t){let i,n=[];async function r(){if(i&&(clearTimeout(i),i=void 0),n.length){const{method:s,path:l,data:o,retry:u,resolve:c,reject:d}=n[0];try{if((null==t?void 0:t.navigator)&&!(null==t?void 0:t.navigator.onLine))throw Error("Browser is offline");const i=await e(s,l,o);n.shift(),c(i)}catch(a){u?n[0].retry=Math.max(-1,u-1):(n.shift(),d(a))}n.length&&(i=setTimeout(r,(null==t?void 0:t.timeout)||1e4))}}return{add:(e,t,a,s=-1)=>new Promise(((l,o)=>{n.push({method:e,path:t,data:a,retry:s,resolve:l,reject:o}),i||r()})),remove(e,t){n=n.filter((i=>i.method.toLowerCase()!==e.toLowerCase()||i.path!==t))},callsPending:()=>n.length>0}}(function(e,t,i=console){return async function(n,r,a){var s;try{const i={method:n};["post","put","patch"].includes(n)&&(i.body=JSON.stringify(a),i.headers={"content-type":"application/json"});const l=await t(e+r,i),o=(null==(s=l.headers.get("Content-Type"))?void 0:s.match(/json/))?await l.json():await l.text();if(l.ok)return o;throw Error(o.message||o)}catch(l){throw i.error(l),l}}}(localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",fetch));var yr;const kr=function({api:e,logger:t=console,storage:i=localStorage}){return{async createGame(n){i.setItem("game",JSON.stringify(n));try{e.createGame(n)}catch(r){t.warn("Cannot save new game - trying again later",r)}return n},async loadGame(t){const n=i.getItem("game");if(n){const e=JSON.parse(n);if(e.id===t)return Ui(e,t)}return Ui(await e.loadGame(t),t)},async saveGame(n){i.setItem("game",JSON.stringify(n));try{e.saveGame(n)}catch(r){t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",r)}},async decisionMade(t,i,n){e.decisionMade(t.id,i,n)},async eventOccurred(t,i){e.eventOccurred(t.id,i.id)}}}({api:(yr=wr,{createGame:e=>yr.add("post","/games",e),loadGame:e=>yr.add("get","/games/"+e,void 0,0),saveGame:e=>(yr.remove("put","/games/"+e.id),yr.add("put","/games/"+e.id,e)),decisionMade:(e,t,i)=>yr.add("post","/games/"+e+"/decisions/"+t,{accepted:i}),eventOccurred:(e,t)=>yr.add("post","/games/"+e+"/events/"+t)})}),Sr=(Ar=vr,Pr=kr,{async startGame(e){const t=function(e=ki,t=Mi){const i=Ui(t);return i.acceptedLaws=e.filter((e=>{var t;return null==(t=e.labels)?void 0:t.includes("initial")})).map((e=>({lawId:e.id,effectiveSince:i.currentYear}))),i}(),i=Ii(t);await Pr.createGame(t),e.commit("setGameState",{game:t}),e.dispatch("applyEvent",{event:i}),Ar.push("/games/"+t.id)},async loadGame(e,t){try{const i=await Pr.loadGame(t.gameId);await Pr.saveGame(i),Ar.push("/games/"+i.id),e.commit("setGameState",{game:i})}catch(i){e.dispatch("error",{error:i})}},gameOver(e){var t;e.commit("gameOver",void 0),Ar.push("/games/"+(null==(t=e.state.game)?void 0:t.id)+"/over")},async acceptLaw(e,t){const i=l({},e.state.game),n={lawId:t.lawId,effectiveSince:i.currentYear+1},r=Si(n),a=r.removeLawsWithLabels,s=i.acceptedLaws.map(Si).filter((e=>!(null==a?void 0:a.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)}))))).map((e=>({lawId:e.id,effectiveSince:e.effectiveSince})));i.acceptedLaws=[...s,n];const o=Ii(i);await Pr.saveGame(i),e.commit("setGameState",{game:i}),e.dispatch("applyEvent",{event:o}),await Pr.decisionMade(i,r.id,!0)},async rejectLaw(e,t){const i=l({},e.state.game);i.rejectedLaws=[...i.rejectedLaws,t.lawId],await Pr.decisionMade(i,t.lawId,!1),await Pr.saveGame(i),e.commit("setGameState",{game:i})},async sitOut(e){const t=l({},e.state.game);await Pr.decisionMade(t,"sitOut",!0);const i=Ii(t);await Pr.saveGame(t),e.commit("setGameState",{game:t}),e.dispatch("applyEvent",{event:i})},async advanceYear(e){const t=l({},e.state.game),i=t.acceptedLaws.map(Si);t.currentYear++,t.values=function(e,t,i){const n=yt(e.values);return t.sort(((e,t)=>{var i,n;return(null==(i=e.treatAfterLabels)?void 0:i.some((e=>{var i;return null==(i=t.labels)?void 0:i.includes(e)})))?1:(null==(n=t.treatAfterLabels)?void 0:n.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)})))?-1:0})).forEach((t=>{const r=t.effects(o(l({},e),{values:n}),t.effectiveSince,i);Pt({dispatch:()=>{},values:n},r)})),n.co2budget-=n.co2emissions,n}(t,i,t.currentYear),await Pr.saveGame(t),e.commit("setGameState",{game:t})},async applyEvent(e,t){if(!t.event)return;const i=l({},e.state.game);await Pr.eventOccurred(i,t.event);const n=t.event.apply(i);e.dispatch("applyEffects",{changes:n})},acknowledgeEvent(e,t){const i=l({},e.state.game);i.events.find((e=>e.id===t.id)).acknowledged=!0,Pr.saveGame(i),e.commit("setGameState",{game:i})},applyEffects(e,t){const i={dispatch:e.dispatch,values:yt(e.state.game.values)};Pt(i,t.changes);const n=o(l({},e.state.game),{values:i.values});Pr.saveGame(n),e.commit("setGameState",{game:n})},setupTour(e){const t=localStorage.getItem("tour")||xi[0].id,i=xi.find((e=>t===e.id));i?e.commit("setTour",{step:i.id,active:!0}):this.stopTour(e)},nextTourStep(e){const t=xi.findIndex((t=>e.state.tour.step===t.id));if(t<0||t==xi.length-1)this.stopTour(e);else{const i=xi[t+1];e.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(e){e.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},async error(e,t){e.commit("error",t)}});var Ar,Pr;const zr=Symbol();function Dr(){return V(zr)}const Wr=L({state:{game:void 0,tour:{active:!0,step:"start"}},mutations:Ni,actions:Sr,getters:_i});function Tr(e,t,...i){for(const n of i){if(e[n]<t[n])return-1;if(e[n]>t[n])return 1}return 0}function Vr(e,t){const i=yt(e.values);function n(e){return(e>0?"+":"")+e.toFixed(2)}function r(r){const a=function(e){const i=t.find((t=>"modify"===t.type&&t.name===e));return i&&i.condition?i.value:0}(r),s=i[r]-e.values[r];return a&&Math.abs(a-s)<.001?n(a):a?n(a)+" / "+n(s):0!=s?n(s):""}Pt({dispatch:()=>{},values:i},t);return vt.map((t=>{return{id:t.name,unit:t.unit,value:(i=t.name,e.values[i].toFixed(2)),effect:r(t.name),class:t.writable?"writable":"calculated"};var i}))}var Lr=d({props:{citation:{type:Object,required:!0},showInternals:{type:Boolean,default:!1}},computed:{href(){return this.citation.url.toString()},title(){return this.citation.title||this.citation.url.toString()}}});const Or={key:0},Cr=O(". "),Er={key:1},Fr={key:2},Br=O("Bemerkung: "),Mr=O(". "),Ur={key:3},Ir=O("Internes: "),Gr=O(". "),xr={key:4},Nr=O(". "),_r={key:5},Kr=O(". "),jr={key:6},Hr=O(". ");Lr.render=function(e,t,i,n,r,a){return y(),b("p",null,[e.citation.authors?(y(),b("span",Or,v(e.citation.authors+e.citation.dateString())+". ",1)):f("",!0),p("a",{target:"_blank",rel:"noreferrer noopener",href:e.href},'"'+v(e.title)+'"',9,["href"]),Cr,e.citation.publisher?(y(),b("span",Er,v(e.citation.publisher)+". ",1)):f("",!0),e.citation.comment?(y(),b("span",Fr,[Br,p("span",{innerHTML:e.citation.comment},null,8,["innerHTML"]),Mr])):f("",!0),e.showInternals&&e.citation.internalComment?(y(),b("span",Ur,[Ir,p("span",{innerHTML:e.citation.internalComment},null,8,["innerHTML"]),Gr])):f("",!0),e.citation.referringUrl?(y(),b("span",xr,[p("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,["href"]),Nr])):f("",!0),e.citation.archiveUrl?(y(),b("span",_r,[p("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,["href"]),Kr])):f("",!0),e.citation.localCopy?(y(),b("span",jr,[p("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,["href"]),Hr])):f("",!0)])};var Jr=d({components:{Citation:Lr},setup(){const e=Dr();return{store:e,game:D((()=>e.state.game))}},data:()=>({selectedTable:"laws",lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0}),methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},selectLaw(e){this.unselect(),this.lawSelected=e},selectEvent(e){this.unselect(),this.eventSelected=e},selectParam(e){this.unselect(),this.paramSelected=e},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0}},computed:{startYearOfSelected(){if(!this.lawSelected||!this.game)return 2021;const e=this.game.acceptedLaws.find((e=>e.lawId===this.lawSelected));return e?e.effectiveSince:2021},selectedLaw(){return ki.find((e=>e.id===this.lawSelected))},selectedEvent(){return Bi.find((e=>e.id===this.eventSelected))},selectedParam(){return this.paramSelected?ht[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof we?e:void 0},cParam(){const e=this.selectedParam;return e instanceof ye?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},effectsOfSelected(){if(!this.lawSelected||!this.game)return[];this.game;const e=this.selectedLaw;return e?e.effects(this.game,this.startYearOfSelected,this.game.currentYear):[]},sortedValues(){return this.game?Vr(this.game,this.effectsOfSelected):[]},sortedLaws(){return this.game?function(e,t,i,n){const r=e.proposedLaws,a=e.acceptedLaws.map((e=>e.lawId)),s=e.rejectedLaws;return n.map((t=>{return{id:t.id,priority:t.priority(e),state:(i=t.id,a.includes(i)?"a":r.includes(i)?"p":s.includes(i)?"r":"x")};var i})).sort(((e,n)=>Tr(e,n,t,"id")*i)).map((e=>o(l({},e),{priority:e.priority.toFixed(2)})))}(this.game,this.lawsSortCol,this.lawsSortDir,ki):[]},sortedEvents(){return this.game?(e=this.game,t=this.eventsSortCol,i=this.eventsSortDir,Bi.map((t=>({id:t.id,probability:t.probability(e)}))).sort(((e,n)=>Tr(e,n,t,"id")*i)).map((e=>o(l({},e),{probability:(100*e.probability).toFixed(2)})))):[];var e,t,i}}});const Zr=w("data-v-7bb3c05c");g("data-v-7bb3c05c");const Rr={class:"peekData"},$r={key:0,class:"Details"},Qr={class:"Title"},qr={class:"Description"},Yr=p("div",{class:"SectionHead"},"Details:",-1),Xr=p("div",{class:"SectionHead"},"Internes:",-1),ea=p("div",{class:"SectionHead"},"Referenzen:",-1),ta={key:1,class:"Details"},ia={class:"Title"},na={class:"Description"},ra=p("div",{class:"SectionHead"},"Details:",-1),aa=p("div",{class:"SectionHead"},"Internes:",-1),sa=p("div",{class:"SectionHead"},"Referenzen:",-1),la={key:2,class:"Details"},oa={class:"Title"},ua={key:0},ca={key:1},da={key:2},ha=p("div",{class:"SectionHead"},"Details:",-1),ga=p("div",{class:"SectionHead"},"Internes:",-1),ma=p("div",{class:"SectionHead"},"Referenzen:",-1),ba={class:"paramsList"},pa={class:"numbercol"},fa={class:"effcol"},va={class:"buttonlist"},wa={class:"lawList"},ya={key:0},ka={class:"priocol"},Sa={class:"eventList"},Aa={key:0},Pa={class:"priocol"};m();const za=Zr(((e,t,i,n,r,a)=>{var s;const l=A("Citation");return y(),b("details",Rr,[p("summary",{onClick:t[1]||(t[1]=t=>e.unselect()),class:"clickable"},"Peek"),e.selectedLaw?(y(),b("div",$r,[p("div",Qr,v(e.selectedLaw.title),1),p("div",qr,v(e.selectedLaw.description),1),Yr,p("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,["innerHTML"]),Xr,p("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,["innerHTML"]),ea,(y(!0),b(k,null,S(e.citationsOfLaw,((e,t)=>(y(),b(l,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):f("",!0),e.selectedEvent?(y(),b("div",ta,[p("div",ia,v(e.selectedEvent.title),1),p("div",na,v(e.selectedEvent.description),1),ra,p("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,["innerHTML"]),aa,p("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,["innerHTML"]),sa,(y(!0),b(k,null,S(null==(s=e.selectedEvent)?void 0:s.citations,((e,t)=>(y(),b(l,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):f("",!0),e.selectedParam?(y(),b("div",la,[p("div",oa,v(e.paramSelected)+" ["+v(e.selectedParam.unit)+"]",1),e.wParam?(y(),b("div",ua,"Initial value: "+v(e.wParam.initialValue)+" "+v(e.wParam.unit),1)):f("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(y(),b("div",ca," Should initially be: "+v(e.cParam.shouldInitiallyBe)+" "+v(e.cParam.unit),1)):f("",!0),e.cParam?(y(),b("div",da," Calculation: "+v(e.cParam.valueGetter),1)):f("",!0),ha,p("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,["innerHTML"]),ga,p("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,["innerHTML"]),ma,(y(!0),b(k,null,S(e.selectedParam.citations,((e,t)=>(y(),b(l,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):f("",!0),p("div",ba,[p("table",null,[(y(!0),b(k,null,S(e.sortedValues,(t=>(y(),b("tr",{key:t.id,class:["clickable",t.class],onClick:i=>e.selectParam(t.id)},[p("td",null,v(t.id),1),p("td",pa,v(t.value),1),p("td",fa,v(t.effect),1),p("td",null,v(t.unit),1)],10,["onClick"])))),128))])]),p("div",null,[p("table",va,[p("tr",null,[p("td",{class:["clickable lawButton",e.selectedTable],onClick:t[2]||(t[2]=t=>e.selectedTable="laws")},"Laws",2),p("td",{class:["clickable eventButton",e.selectedTable],onClick:t[3]||(t[3]=t=>e.selectedTable="events")},"Events",2)])]),p("div",wa,["laws"===e.selectedTable?(y(),b("table",ya,[p("tr",null,[p("th",{onClick:t[4]||(t[4]=t=>e.sortLaws("state")),class:"clickable"},"S"),p("th",{onClick:t[5]||(t[5]=t=>e.sortLaws("id")),class:"clickable"},"ID"),p("th",{onClick:t[6]||(t[6]=t=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(y(!0),b(k,null,S(e.sortedLaws,(t=>(y(),b("tr",{key:t.id,class:["clickable",t.state],onClick:i=>e.selectLaw(t.id)},[p("td",null,v(t.state),1),p("td",null,v(t.id),1),p("td",ka,v(t.priority),1)],10,["onClick"])))),128))])):f("",!0)]),p("div",Sa,["events"===e.selectedTable?(y(),b("table",Aa,[p("tr",null,[p("th",{onClick:t[7]||(t[7]=t=>e.sortEvents("id")),class:"clickable"},"ID"),p("th",{onClick:t[8]||(t[8]=t=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(y(!0),b(k,null,S(e.sortedEvents,(t=>(y(),b("tr",{key:t.id,class:"clickable",onClick:i=>e.selectEvent(t.id)},[p("td",null,v(t.id),1),p("td",Pa,v(t.probability),1)],8,["onClick"])))),128))])):f("",!0)])])])}));Jr.render=za,Jr.__scopeId="data-v-7bb3c05c";var Da=d({components:{PeekInside:Jr},setup:()=>({store:Dr(),devMode:"true"===localStorage.getItem("devMode")}),methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,i=Math.min(e/800,t/1e3),n=(t-1e3*i)/2;document.documentElement.style.setProperty("--scale",`${i}`),document.documentElement.style.setProperty("--translateX",`${n}px`)}},mounted(){setTimeout(this.updateStyle,0),window.addEventListener("resize",this.updateStyle)}});const Wa={class:"perspective"},Ta={class:"peek"};Da.render=function(e,t,i,n,r,a){const s=A("router-view"),l=A("PeekInside");return y(),b(k,null,[p("div",Wa,[p(s)]),p("div",Ta,[e.devMode?(y(),b(l,{key:0})):f("",!0)])],64)};const Va=C(Da);Va.use(Wr,zr),Va.use(vr),Va.mount("#app");
