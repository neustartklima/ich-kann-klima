var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,l=(e,t)=>{for(var i in t||(t={}))r.call(t,i)&&s(e,i,t[i]);if(n)for(var i of n(t))a.call(t,i)&&s(e,i,t[i]);return e},o=(e,n)=>t(e,i(n));import{D as u,a as c,s as d,b as h,v as g,d as m,p,c as b,e as f,f as v,g as w,t as y,w as k,o as S,m as D,F as P,r as z,h as A,i as W,j as T,k as V,l as L,n as O,u as C,q as E,x as F,V as I,y as M,z as B,A as x,B as U,C as N,E as G,G as _,H as K}from"./vendor.f1170fa0.js";const j={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};class J{constructor(e){this.lux=e instanceof c?e.setLocale("de-DE").setZone("Europe/Berlin"):c.fromISO(e,{zone:"Europe/Berlin",locale:"de-DE"})}static durationBetween(e,t){return new H(t.lux.diff(e.lux,["months"]))}plus(e){return new J(this.lux.plus(e.lux))}getYear(){return this.lux.get("year")}toLocaleString(){return this.lux.toLocaleString(j)}toMonthString(){return this.lux.toLocaleString({month:"long",year:"numeric"})}toJSON(){return this.lux.toJSON()}}class H{constructor(e){this.lux=e instanceof u?e:u.fromISO(e,{locale:"de-DE"})}toMonthsString(){const e=this.lux.as("months");return 1===e?"1 Monat":e+" Monate"}}function Z(e){return new J(e)}function Y(e){return new H(e)}const R=Y("P3M"),$=Y("P3M");const Q=2,q=3,X=4,ee=5,te=6;var ie={title:"Abstandsregeln für Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erhöht wird. Das führte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply:()=>[]};const ne=e=>({time:R,text:`Braucht ${R.toMonthsString()}.`});let re=d("",{state:!0}),ae=()=>Math.abs(re());function se(e){re=d(e.id,{state:e.prngState})}var le={title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bewährt. Wir lassen sie so, wie sie sind.",effects:()=>[],priority:e=>ae()};const oe=new h.exports.Converter;function ue(e){return e>0?[...Array(e)].map(((e,t)=>t)):[]}function ce(e,t){const i=e-t-1;return[...ue(t),Math.max(t,i),...ue(i).reverse()]}function de(e,...t){let i=e.map(((e,i)=>e+(t[i]||""))).join("").split("\n");0===i[0].length&&i.shift();const n=i[0].match(/^(\s+)/);return n&&!i.filter((e=>e.trim())).some((e=>!e.startsWith(n[1])))&&(i=i.map((e=>e.replace(n[1],"")))),oe.makeHtml(i.join("\n"))}function he(e){return t=>!e(t)}function ge(e){return Object.entries(e).map((([e,t])=>o(l({},t),{id:e})))}const me=new Intl.DateTimeFormat("de-DE");class pe{constructor(e){this.url=new URL(e.url),this.title=e.title,this.publisher=e.publisher,this.authors=e.authors,this.date=e.date?new Date(e.date):void 0,this.comment=e.comment,this.internalComment=e.internalComment,this.localCopy=e.localCopy,this.referringUrl=e.referringUrl?new URL(e.referringUrl):void 0,this.archiveUrl=e.archiveUrl?new URL(e.archiveUrl):void 0,this.archiveNotPossible=e.archiveNotPossible}dateString(){const e=this.date;return e?" ("+me.format(e)+")":""}toString(){return[this.authors?this.authors+this.dateString():void 0,this.title?'"'+this.title+'"':void 0,this.url,this.publisher].filter((e=>e)).join(", ")}}function be(e){const t=e.publisher||e.authors;return`[[${null!=t?t+": ":""}${e.title||e.url.toString()}](${e.url.toString()})]`}const fe=new pe({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),ve=new pe({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),we=new pe({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"}),ye=new pe({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineralölsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),ke=new pe({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile für wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),Se=new pe({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-°C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),De=new pe({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schlüsselergebnisse der Studie des Wuppertal Instituts für Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-°C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${be(Se)}.`});Se.comment=de`Zusammengefasst in ${be(De)}.`;const Pe=new pe({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahreschätzung der deutschen Treibhausgas-Emissionen für das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),ze=new pe({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen für das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),Ae=new pe({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enthält CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] für mehrere Verkehrsmittel"}),We=new pe({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),Te=new pe({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Straßengüterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),Ve=new pe({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enthält Personenkilometer-Jahreswerte für mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),Le=new pe({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung ÖPNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),Oe=new pe({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),Ce=new pe({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle für 160g CO2 pro kWh Fernwärme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new pe({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren für Fernwärme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle für 160g CO2 pro kWh Fernwärme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const Ee=new pe({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),Fe=new pe({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),Ie=new pe({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle wäre besser."}),Me=new pe({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bevölkerung nach Nationalität und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),Be=new pe({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur für Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),xe=new pe({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische Ämter des Bundes und der Länder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new pe({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const Ue=new pe({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgemäß - Interview mit Prof. Stefan Gössling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""}),Ne=new pe({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),Ge=new pe({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),_e=new pe({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),Ke=new pe({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten für die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class je{constructor(e){this.unit=e.unit,this.citations=e.citations?e.citations:[],this.details=e.details?e.details:"",this.internals=e.internals?e.internals:""}citationsDesc(){return this.citations.map((e=>e.toString())).join("; ")}}const Je={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class He extends je{constructor(e){super(e),this.writable=!0,this.initialValue=e.initialValue,this.applyBounds=Je[e.unit]}}class Ze extends je{constructor(e){super(e),this.writable=!1,this.valueGetter=e.valueGetter,this.shouldInitiallyBe=e.shouldInitiallyBe}}const Ye=new He({unit:"MioTons",initialValue:6700,citations:[fe],details:de`

  `,internals:de`

  `}),Re=new He({unit:"MioTons",initialValue:186.793,citations:[Pe],details:de`

  `,internals:de`

  `}),$e=new Ze({unit:"MioTons",valueGetter:e=>e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4,shouldInitiallyBe:159.696,citations:[Pe,Te],details:de`

  `,internals:de`
    ${be(Pe)}: 159.696 as MioTons

    ${be(Te)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Qe=new Ze({unit:"MioTons",valueGetter:e=>e.co2emissionsStreetVehicles+65*e.publicLocalCapacity/1e6+32*e.publicNationalCapacity/1e6+222*e.airDomesticUsage/1e6+1.641,citations:[Ae,Pe],details:de`

  `,internals:de`
    ${be(Ae)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${be(Pe)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${be(Pe)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${be(Pe)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),qe=new Ze({unit:"MioTons",valueGetter:e=>0*e.buildingsSourceBio+.247*e.buildingsSourceGas+.318*e.buildingsSourceOil+.16*e.buildingsSourceTele,citations:[Pe,Oe],details:de`

  `,internals:de`
    TODO: #91 Gibt es hier bessere Quellen?

    ${be(Oe)}: 247g CO2 pro kWh Erdgas.

    ${be(Oe)}: 318g CO2 pro kWh Erdöl.

    ${be(Ce)}: 160g CO2 pro kWh Fernwärme.

    ${be(Pe)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),Xe=new He({unit:"MioTons",initialValue:67.936,citations:[Pe],details:de`

  `,internals:de`

  `}),et=new He({unit:"MioTons",initialValue:9.243,citations:[Pe],details:de`

  `,internals:de`

  `}),tt=new Ze({unit:"MioTons",valueGetter:e=>.399*e.electricityGas+.058*e.electricitySolar+.005*e.electricityWind+.02*e.electricityWater+.835*e.electricityHardCoal+1.137*e.electricityBrownCoal+.03*e.electricityBiomass+.005*e.electricityNuclear,citations:[Ee,Pe],details:de`

  `,internals:de`
    ${be(Ee)}:
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
    - Diskrepanz zu ${be(Fe)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${be(Pe)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),it=new Ze({unit:"MioTons",valueGetter:e=>e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers,details:de`

  `,internals:de`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${be(Pe)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[ze]}),nt=new He({unit:"TWh",initialValue:480.54,citations:[ve],details:de`

  `,internals:de`

  `}),rt=new He({unit:"Percent",initialValue:50,citations:[],details:de`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:de`

  `}),at=new He({unit:"TWh",initialValue:51.42,citations:[ve],details:de`

  `,internals:de`

  `}),st=new He({unit:"TWh",initialValue:131.85,citations:[ve],details:de`

  `,internals:de`

  `});const lt=new Ze({unit:"TWh",valueGetter(e){const t=st.initialValue,i=e.electricityGridQuality,n=function(e,t){const i=e.value-t.value;return n=>e.result*(n-t.value)/i-t.result*(n-e.value)/i}({value:50,result:t},{value:100,result:e.electricityDemand})(i);return Math.min(n,e.electricityWind)},shouldInitiallyBe:st.initialValue,citations:[],details:de`
The electrical energy produced by wind and not impaired by poor quality of the grid.
  `,internals:de`

  `}),ot=new He({unit:"TWh",initialValue:6,citations:[ve],details:de`

  `,internals:de`

  `}),ut=new He({unit:"Percent",initialValue:100,citations:[_e],details:de`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),ct=new He({unit:"TWh",initialValue:14.99,citations:[ve],details:de`

  `,internals:de`

  `}),dt=new He({unit:"TWh",initialValue:43.19,citations:[ve],details:de`

  `,internals:de`

  `}),ht=new He({unit:"TWh",initialValue:60.91,citations:[ve],details:de`

  `,internals:de`

  `}),gt=new He({unit:"TWh",initialValue:35.46,citations:[ve],details:de`

  `,internals:de`

  `}),mt=new He({unit:"TWh",initialValue:82.13,citations:[ve],details:de`

  `,internals:de`

  `}),pt=new Ze({unit:"TWh",valueGetter:e=>e.electricityHardCoal+e.electricityBrownCoal,details:de`

  `,internals:de`

  `}),bt=new Ze({unit:"TWh",valueGetter:e=>e.electricityDemand-e.electricitySolar-e.electricityWindUsable-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear,details:de`

  `,internals:de`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),ft=new He({unit:"GramPerPsgrKm",initialValue:160,citations:[Ae],details:de`

  `,internals:de`
    ${be(Ae)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),vt=new He({unit:"MioPsgrKm",initialValue:917e3,citations:[Ve],details:de`

  `,internals:de`

  `}),wt=new He({unit:"Percent",initialValue:.5,citations:[Ie],details:de`

  `,internals:de`
    Die verschiedenen Zahlen in ${be(Ie)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),yt=new He({unit:"MioPsgrKm",initialValue:112600,citations:[Ve],details:de`

  `,internals:de`

  `}),kt=new He({unit:"MioPsgrKm",initialValue:112600,citations:[Ve],details:de`

  `,internals:de`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),St=new He({unit:"MioPsgrKm",initialValue:67300,citations:[Ve],details:de`

  `,internals:de`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),Dt=new He({unit:"MioPsgrKm",initialValue:67300,citations:[Ve],details:de`

  `,internals:de`
Siehe \`publicLocalCapacity\`.
  `}),Pt=new He({unit:"MioPsgrKm",initialValue:10100,citations:[Ve],details:de`

  `,internals:de`

  `}),zt=new He({unit:"MioPsgrKm",initialValue:61700,citations:[Ve],details:de`

  `,internals:de`

  `}),At=new Ze({unit:"MioPsgrKm",valueGetter:e=>e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage,shouldInitiallyBe:1168700,citations:[Ve],details:de`

  `,internals:de`

  `}),Wt=new He({unit:"TWh",initialValue:226,citations:[],details:de`

  `,internals:de`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),Tt=new He({unit:"TWh",initialValue:544,citations:[],details:de`

  `,internals:de`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),Vt=new Ze({unit:"TWh",valueGetter:e=>e.buildingsPrivateDemand+e.buildingsIndustryDemand,shouldInitiallyBe:770,citations:[],details:de`

  `,internals:de`
    TODO: #78 Quelle ${be(Ke)} gibt diese Zahlen nicht her.
  `}),Lt=new He({unit:"TWh",initialValue:130,citations:[],details:de`

  `,internals:de`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),Ot=new He({unit:"TWh",initialValue:219,citations:[],details:de`

  `,internals:de`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),Ct=new He({unit:"TWh",initialValue:58,citations:[],details:de`

  `,internals:de`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),Et=new Ze({unit:"TWh",valueGetter:e=>e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele),citations:[],details:de`

  `,internals:de`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${be(Ke)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),Ft=new He({unit:"Percent",initialValue:50,citations:[],details:de`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:de`

  `}),It=new He({unit:"TsdPeople",initialValue:83155.031,citations:[Me],details:de`

  `,internals:de`
Anfangswert ist der Stand 31.12.2020.
  `}),Mt=new He({unit:"TsdPeople",initialValue:2695,citations:[Be],details:de`

  `,internals:de`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),Bt=new He({unit:"MrdEuro",initialValue:3332,citations:[xe],details:de`

  `,internals:de`
Anfangswert ist das BIP 2020.
  `}),xt=new He({unit:"MrdEuro",initialValue:1899,citations:[],details:de`

  `,internals:de`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),Ut={co2budget:Ye,co2emissionsIndustry:Re,co2emissionsStreetVehicles:$e,co2emissionsMobility:Qe,co2emissionsAgriculture:Xe,co2emissionsBuildings:qe,co2emissionsOthers:et,co2emissionsEnergy:tt,co2emissions:it,electricityDemand:nt,electricityGridQuality:rt,electricitySolar:at,electricityWind:st,electricityWindUsable:lt,electricityWindOnshoreMaxNew:ot,electricityWindEfficiency:ut,electricityWater:ct,electricityBiomass:dt,electricityNuclear:ht,electricityHardCoal:gt,electricityBrownCoal:mt,electricityCoal:pt,electricityGas:bt,carEmissionFactor:ft,carUsage:vt,carRenewablePercentage:wt,publicLocalUsage:yt,publicLocalCapacity:kt,publicNationalUsage:St,publicNationalCapacity:Dt,airDomesticUsage:Pt,airIntlUsage:zt,passengerTransportUsage:At,buildingsIndustryDemand:Wt,buildingsPrivateDemand:Tt,buildingsDemand:Vt,buildingsSourceBio:Lt,buildingsSourceOil:Ot,buildingsSourceTele:Ct,buildingsSourceGas:Et,popularity:Ft,numberOfCitizens:It,unemployment:Mt,gdp:Bt,stateDebt:xt},Nt=Object.entries(Ut).filter((e=>e[1]instanceof He)).map((e=>e)).reduce(((e,t)=>(e[t[0]]=t[1],e)),{}),Gt=Object.entries(Ut).filter((e=>e[1]instanceof Ze)).map((e=>e)).reduce(((e,t)=>(e[t[0]]=t[1],e)),{}),_t=Object.keys(Ut);class Kt extends He{constructor(e,t){super(e),this.name=t}}const jt=Object.entries(Nt).map((e=>new Kt(e[1],e[0])));class Jt extends Ze{constructor(e,t){super(e),this.name=t}}Object.entries(Gt).map((e=>new Jt(e[1],e[0])));const Ht=Object.entries(Ut).map((e=>e[1]instanceof He?new Kt(e[1],e[0]):new Jt(e[1],e[0]))),Zt=jt.reduce(((e,t)=>(e[t.name]=t.initialValue,e)),{}),Yt=Ht.reduce(((e,t)=>(e[t.name]=0,e)),{});function Rt(e){const t=l({},e);return Object.entries(Gt).forEach((e=>Object.defineProperty(t,e[0],{enumerable:!0,get:()=>e[1].valueGetter(t)}))),t}function $t(e,t){return{type:"dispatch",condition:!0,if(e){return this.condition=e,this},apply(i){this.condition&&i.dispatch(e,t)}}}function Qt(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(e){return this.percent=e,this},byValue(e){return this.value=e,this},setValue(e){return this.absolute=e,this},if(e){return this.condition=e,this},getOldNew(e){const t=this.name,i=e[t];if(!this.condition)return{oldVal:i,newVal:i};const n=Ut[t],r=null!=this.absolute?this.absolute:i+(this.value||i*this.percent/100);return{oldVal:i,newVal:n.applyBounds(r)}},getChange(e){if(!this.condition)return 0;const{oldVal:t,newVal:i}=this.getOldNew(e);return i-t},apply(e){if(this.condition){const{newVal:t}=this.getOldNew(e.values);e.values[this.name]=t}return this}}}function qt(e,t){if(Ut[e].unit!=Ut[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(e){return this.percent=e,this},byValue(e){return this.value=e,this},if(e){return this.condition=e,this},getEffect(e){const t=e[this.to],i=e[this.from];if(!this.condition)return{oldTo:t,oldFrom:i,newTo:t,newFrom:i};const n=Ut[this.to],r=Ut[this.from],a=this.value||t*this.percent/100,s=n.applyBounds(t+a)-t,l=-r.applyBounds(i-s)+i;return{oldTo:t,newTo:t+l,oldFrom:i,newFrom:i-l}},apply(e){if(this.condition){const{newTo:t,newFrom:i}=this.getEffect(e.values);e.values[this.to]=t,e.values[this.from]=i}return this}}}function Xt(e,t){t.filter((e=>e.condition)).forEach((t=>t.apply(e)))}var ei={title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,i){const n=i-t,r=n<18?4.3/18:0,a=(10-n)/55,s=Math.max(50*a,0);return[Qt("electricityHardCoal").setValue(0),Qt("electricityBrownCoal").setValue(0),Qt("stateDebt").byValue(2.5-r),Qt("unemployment").byValue(s)]},priority:e=>e.values.electricityCoal/e.values.electricityDemand<=.1?0:Ni(1e4,0,e.values.unemployment),citations:[],details:de`

  `,internals:de`
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
  `},ti={title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effort:e=>e.values.popularity>=50?{time:Y("P3M"),text:"Normal dauert das 6 Monate, aber bei Deiner Beliebtheit nur 3."}:{time:Y("P6M"),text:"Dauert 6 Monate."},effects:()=>[Qt("stateDebt").byValue(-37),Qt("electricityHardCoal").byPercent(-10),Qt("electricityBrownCoal").byPercent(-5),Qt("electricityWind").byValue(5),Qt("electricitySolar").byValue(3),Qt("electricityWater").byValue(.5)],priority:e=>Ni(2050,2021,e.currentYear)};const ii=Rt(Zt).electricityGas;var ni={title:"Kernenergienutzung verlängern",description:"Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effects:()=>[Qt("electricityNuclear").setValue(104.3),Qt("stateDebt").byValue(-2.5),Qt("popularity").byValue(-4)],priority:e=>Ni(ii,1.1*ii,e.values.electricityGas)},ri={title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,i){const n={2021:60.45,2022:30.21}[i]||0;return[Qt("electricityNuclear").setValue(n)]},priority:e=>0},ai={title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren für den Ausbau des Stromnetzes",effects:(e,t,i)=>[Qt("popularity").byValue(-3).if(t===i),Qt("electricityGridQuality").byValue(1)],priority:e=>Ni(70,27,Ki(e)),citations:[],details:de`

  `,internals:de`
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
  `},si={title:"Netzausbau fördern",description:"Ausbau des Stromnetzes mit Steuermitteln fördern",effects:(e,t,i)=>[Qt("popularity").byValue(-1).if(t===i),Qt("stateDebt").byValue(2),Qt("electricityGridQuality").byValue(5).if(_i(e,"NetzausbauErleichtern"))],priority:e=>Ni(70,27,Ki(e)),citations:[],details:de`

  `,internals:de`
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
  `},li={title:"Stromspeicherung erleichtern",description:"Bürokratische Hürden für den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effects:(e,t,i)=>[Qt("electricityGridQuality").byValue(.2)],priority:e=>Ni(80,45,e.values.electricityGridQuality),citations:[],details:de`

  `,internals:de`
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
  `},oi={title:"Stromspeicherung fördern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln fördern. 2 Mrd € pro Jahr.",effects(e,t,i){const n=i>=t+(_i(e,"StromspeicherungErleichtern")?0:5),r=_i(e,"ForschungUndEntwicklungStromspeicherung",3);return[Qt("stateDebt").byValue(1),Qt("popularity").byValue(.2).if(n),Qt("stateDebt").byValue(1).if(n),Qt("electricityGridQuality").byValue(2).if(n),Qt("electricityGridQuality").byValue(2).if(r),Qt("electricityGridQuality").byValue(2).if(n&&r)]},priority:e=>Ni(80,45,e.values.electricityGridQuality),citations:[],details:de`

  `,internals:de`
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
  `},ui={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit vergünstigten Krediten gefördert.",effects(e,t,i){const n=i-t>2;return[Qt("stateDebt").byValue(.5),Qt("buildingsSourceBio").byPercent(-1).if(n),Qt("buildingsSourceOil").byPercent(-1).if(n),Qt("buildingsSourceTele").byPercent(-1).if(n),Qt("buildingsPrivateDemand").byPercent(-1).if(n)]},priority:e=>Ni(15,40,e.values.co2emissionsBuildings/e.values.co2emissions*100)},ci={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gefördert.",effects(e,t,i){const n=i-t>2;return[Qt("stateDebt").byValue(1),Qt("buildingsSourceBio").byPercent(-2).if(n),Qt("buildingsSourceOil").byPercent(-2).if(n),Qt("buildingsSourceTele").byPercent(-2).if(n),Qt("buildingsPrivateDemand").byPercent(-2).if(n),Qt("popularity").byValue(5).if(n)]},priority:e=>Ni(15,40,e.values.co2emissionsBuildings/e.values.co2emissions*100)},di={title:"Dämmung von Wohngebäuden sehr stark fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungsplätze im Handwerk geschaffen durch einen Zuschuss von 500€ pro Monat, damit der zu erwartende Bauboom bewältigt werden kann.",effects(e,t,i){const n=i-t,r=n>=2;return[Qt("stateDebt").byValue(3),Qt("buildingsSourceBio").byPercent(-4).if(r),Qt("buildingsSourceOil").byPercent(-4).if(r),Qt("buildingsSourceTele").byPercent(-4).if(r),Qt("buildingsPrivateDemand").byPercent(-4).if(r),Qt("popularity").byValue(10).if(1===n),Qt("popularity").byValue(5).if(r)]},priority:e=>Ni(15,40,e.values.co2emissionsBuildings/e.values.co2emissions*100),citations:[],details:de`

  `,internals:de`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `},hi={title:"Dämmung von Wohngebäuden abschaffen",description:"Wir geben den Bürgern die Freiheit zurück, selbst zu entscheiden, ob sie ihr Haus dämmen wollen und lassen die Förderung auslaufen",effects:()=>[Qt("stateDebt").byValue(-.5),Qt("buildingsSourceBio").byPercent(-.5),Qt("buildingsSourceOil").byPercent(-.5),Qt("buildingsSourceTele").byPercent(-.5),Qt("buildingsPrivateDemand").byPercent(-.5)],priority(e){const t=function(e,t){const i=e.sort(((e,t)=>t.effectiveSince-e.effectiveSince)).find((e=>t.test(e.lawId)));return null==i?void 0:i.lawId}(e.acceptedLaws,/^DaemmungAltbau/);if(!t||"DaemmungAltbauAbschaffen"===t)return 0;return Ni(15,40,e.values.co2emissionsBuildings/e.values.co2emissions*100)}},gi={title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",effects(e,t,i){const n=e.values.publicLocalCapacity/e.values.publicLocalUsage*100,r=i-t;return[Qt("stateDebt").byValue(3),Qt("publicLocalCapacity").byPercent(1),qt("publicLocalUsage","carUsage").byPercent(1).if(n>=105),Qt("popularity").byValue(2).if(r>=5)]},priority:e=>Ni(150,80,e.values.publicLocalCapacity/e.values.publicLocalUsage*100),citations:[Le],details:de`

  `,internals:de`
    # Happy Path 18

    # Folgen

    - Der Staatshaushalt wird jährlich mit 3 Mrd € mehr belastet. (${be(Le)})
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
  `},mi={title:"Nahverkehr Modernisieren",description:"Anschaffung Moderner, bequemer, emissionsfreier Fahrzeuge für den Nahverkehr wird gefördert.",effects:(e,t,i)=>[Qt("stateDebt").byValue(3),Qt("publicLocalCapacity").byPercent(1),qt("publicLocalUsage","carUsage").byPercent(1),Qt("popularity").byValue(3)],priority(e){if(!_i(e,"FernverkehrModernisieren"))return 0;return Ni(0,24,e.values.co2emissionsMobility/e.values.co2emissions*100)},citations:[We],details:de`

  `,internals:de`
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
  `},pi={title:"Förderung für Tierhaltung abschaffen",description:"Subventionen für Tierhaltung werden ersatzlos gestrichen",effects:(e,t,i)=>[Qt("stateDebt").byValue(-10),Qt("co2emissionsAgriculture").byValue(-10).if(t===i),Qt("popularity").byValue(-20).if(t===i)],priority:e=>Ni(1e4,0,e.values.unemployment)},bi={title:"Nahverkehr Kostenlos",description:"Die Kosten für den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr benötigt werden.",effects(e,t,i){const n=t===i?10:1;return[Qt("stateDebt").byValue(10),qt("publicLocalUsage","carUsage").byPercent(n),Qt("popularity").byValue(10).if(t===i),Qt("unemployment").byValue(20).if(t===i)]},priority:e=>Ni(90,120,e.values.publicLocalCapacity/e.values.publicLocalUsage*100),citations:[We],details:de`

  `,internals:de`
    # Happy Path 19

    # Folgen

    - Der Staatshaushalt wird jährlich mit 10 Mrd € stärker belastet.
        - 13.3 Mrd € Ticketeinnahmen pro Jahr (${be(We)})
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
  `},fi={title:"Autos in Innenstädten verbieten",description:"Die Innenstädte der großen Städte werden zu Autofreien Zonen erklärt und begrünt, sowie Fahrrad und Fußgängerzonen eingerichtet.",effects(e,t,i){var n=-2;return e.values.publicLocalCapacity>1.2*e.values.publicLocalUsage&&(n=-1,t+2<i&&(n=2)),[Qt("popularity").byValue(n),qt("publicLocalUsage","carUsage").byPercent(10).if(t===i)]},priority:e=>Ni(90,120,e.values.publicLocalCapacity/e.values.publicLocalUsage*100)},vi={title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des öffentlichen Fernverkehrs wird bundesweit stärker Bezuschusst und Vorangetrieben",effects(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return[Qt("stateDebt").byValue(6),Qt("publicNationalCapacity").byPercent(1),qt("publicNationalUsage","carUsage").byPercent(1).if(t>=105),qt("publicNationalUsage","carUsage").byPercent(.5).if(t>=105),Qt("popularity").byValue(2).if(t>=105)]},priority:e=>Ni(150,80,e.values.publicNationalCapacity/e.values.publicNationalUsage*100),citations:[],details:de`

  `,internals:de`
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
  `},wi={title:"Fernverkehr Modernisieren",description:"Moderne, bequeme und weniger anfällige Züge werden für den Fernverkehr angeschafft.",effects:(e,t,i)=>[Qt("stateDebt").byValue(3),Qt("publicNationalCapacity").byPercent(1),qt("publicNationalUsage","carUsage").byPercent(1),Qt("popularity").byValue(3)],priority:e=>Ni(0,24,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[],details:de`

  `,internals:de`
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
  `},yi={title:"Wasserstofftechnologie fördern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gefördert. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+5;return[Qt("stateDebt").byValue(2).if(n),Qt("carRenewablePercentage").byValue(1).if(r)]},priority(e){const t=e.values;return Ni(40,90,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[],details:de`

  `,internals:de`
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
  `},ki={title:"Wasserstoffmobilität fördern",description:"Wasserstoffbasierte Fahrzeuge werden gefördert.",effects:(e,t,i)=>_i(e,"WasserstofftechnologieFoerdern")?[Qt("stateDebt").byValue(3),Qt("carRenewablePercentage").byValue(1),Qt("popularity").byValue(1).if(t===i)]:[],priority:e=>Ni(0,26,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[],details:de`

  `,internals:de`
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
  `},Si={title:"Abschaffung der Mineralölsteuer",description:"Die Steuer auf sämtliche erdölbasierten Treibstoffe wird abgeschafft.",effects:(e,t,i)=>[Qt("stateDebt").byValue(41),Qt("popularity").byValue(5).if(t===i),Qt("popularity").byValue(-3).if(t<i),qt("publicLocalUsage","carUsage").byPercent(-20).if(t===i),qt("publicNationalUsage","carUsage").byPercent(-20).if(t===i)],priority(e){const t=e.values;return Ni(60,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[ye],details:"",internals:de`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${be(ye)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `},Di={title:"Ausbau von Straßen",description:"Autobahnen und Straßen werden intensiver ausgebaut.",effects:e=>[Qt("stateDebt").byValue(5),Qt("popularity").byValue(.5),qt("publicLocalUsage","carUsage").byPercent(-1),qt("publicNationalUsage","carUsage").byPercent(-1)],priority(e){const t=e.values;return Ni(60,100,t.carUsage/t.passengerTransportUsage*100)}},Pi={title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effects:(e,t,i)=>[Qt("stateDebt").byValue(-7.35),Qt("popularity").byValue(-1).if(t===i)],priority(e){const t=e.values;return Ni(10,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)}},zi={title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen für Dienstwagen werden abgeschafft.",effects:(e,t,i)=>[Qt("stateDebt").byValue(-18),Qt("popularity").byValue(-1).if(t===i),qt("carUsage","publicLocalUsage").byPercent(-.05)],priority(e){const t=e.values;return Ni(50,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[ke,Ue],details:de`

  `,internals:de`
    # Happy Path 20

    Zunächst sollte Nah- und Fernverkehr attraktiver gemacht werden.
    TODO: Folgen sollten davon abhängen, ob es attraktive Alternativen gibt.

    # Folgen

    - Steuermehreinnahmen: 18 mrd€ / Jahr (${be(ke)})
    - -0.05% Fahleistung pro Jahr (Anreiz für Auto fällt weg Gebrauchte Wagen werden teuerer).
        - ${be(Ue)} sagt es gibt keine echte Schätzung dafür.
    - Entsprechend mehr Nahverkehrnutzung
    - Zufriedenheit sinkt einmalig um 1%

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 50%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `},Ai={title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=Qt("carEmissionFactor").setValue(157.9),i=t.getChange(e.values);return[Qt("popularity").byValue(2).if(i<0),t]},priority(e){if(_i(e,"Tempolimit100AufAutobahnen")||_i(e,"Tempolimit120AufAutobahnen")||_i(e,"TempolimitAufAutobahnenAussitzen"))return 0;const t=e.values;return Ni(10,100,t.carUsage/t.passengerTransportUsage*100)}},Wi={title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=Qt("carEmissionFactor").setValue(157.1),i=t.getChange(e.values);return[Qt("popularity").byValue(2).if(i<0),t]},priority(e){if(!_i(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values;return Ni(10,100,t.carUsage/t.passengerTransportUsage*100)}},Ti={title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=Qt("carEmissionFactor").setValue(154.1),i=t.getChange(e.values);return[Qt("popularity").byValue(-1).if(i<0),t]},priority(e){if(!_i(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values;return Ni(10,100,t.carUsage/t.passengerTransportUsage*100)}},Vi={title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das könnte zwar Strafen oder gar Zwangsmaßnahmen bewirken, aber das Risiko der gefährdeten Wiederwahl ist zu groß.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects:()=>[Qt("stateDebt").byValue(-10),Qt("popularity").byValue(-2)],priority(e){if(_i(e,"Tempolimit100AufAutobahnen")||_i(e,"Tempolimit120AufAutobahnen")||_i(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values;return Ni(10,100,t.carUsage/t.passengerTransportUsage*100)}},Li={title:"Elektromobilität Fördern",description:"Höhere Kaufprämien, Steuerbefreiung, günstiges Laden für E-Autos.",effects:(e,t,i)=>_i(e,"LadeinfrastrukturAusbauen")?[Qt("stateDebt").byValue(5),Qt("carRenewablePercentage").byValue(1),Qt("popularity").byValue(4).if(t===i)]:[],priority(e){if(!_i(e,"LadeinfrastrukturAusbauen"))return 0;return Ni(0,25,e.values.co2emissionsMobility/e.values.co2emissions*100)},citations:[],details:de`

  `,internals:de`
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
  `},Oi={title:"Ladeinfrastruktur ausbauen",description:"Ausbau der Ladeinfrastruktur wird mit Steuermitteln stark gefördert.",effects:(e,t,i)=>[Qt("stateDebt").byValue(5),Qt("carRenewablePercentage").byValue(1),Qt("popularity").byValue(2).if(t===i)],priority:e=>Ni(0,25,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[We],details:de`

  `,internals:de`
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
  `},Ci={title:"CO2 Preis Erhöhen",description:"Die Preise werden schneller erhöht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=Gi(50,0,ji(e),-1),r=Gi(50,0,e.values.carRenewablePercentage,-1),a=-.5;return[Qt("stateDebt").byValue(-.045*e.values.co2emissions).if(i>=t+2),Qt("stateDebt").byValue(-.03*e.values.co2emissions).if(i>=t+4),Qt("popularity").byValue(n+r),Qt("co2emissionsIndustry").byPercent(a),Qt("co2emissionsAgriculture").byPercent(a),Qt("co2emissionsOthers").byPercent(a),qt("electricityBrownCoal","electricityWind").byPercent(-.35),qt("electricityHardCoal","electricityWind").byPercent(-.35),qt("electricityBrownCoal","electricitySolar").byPercent(-.15),qt("electricityHardCoal","electricitySolar").byPercent(-.15),qt("buildingsSourceOil","buildingsSourceBio").byPercent(a),qt("carUsage","publicNationalUsage").byPercent(-.25),qt("carUsage","publicLocalUsage").byPercent(-.25)]},priority:e=>_i(e,"VollerCO2Preis")||_i(e,"WirksamerCO2Preis")?0:50,citations:[Ge],details:de`

  `,internals:de`
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
  `},Ei={title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=Gi(80,50,ji(e),-3),r=Gi(80,50,e.values.carRenewablePercentage,-3),a=-2;return[Qt("stateDebt").byValue(-.125*e.values.co2emissions),Qt("popularity").byValue(n+r),Qt("co2emissionsIndustry").byPercent(a),Qt("co2emissionsAgriculture").byPercent(a),Qt("co2emissionsOthers").byPercent(a),qt("electricityBrownCoal","electricityWind").byPercent(-1.4),qt("electricityHardCoal","electricityWind").byPercent(-1.4),qt("electricityBrownCoal","electricitySolar").byPercent(-.6),qt("electricityHardCoal","electricitySolar").byPercent(-.6),qt("buildingsSourceOil","buildingsSourceBio").byPercent(a),qt("carUsage","publicNationalUsage").byPercent(-1),qt("carUsage","publicLocalUsage").byPercent(-1)]},priority:e=>_i(e,"CO2PreisErhoehen")?50:0,citations:[Ge],details:de`

  `,internals:de`
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
  `},Fi={title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=Gi(90,50,ji(e),-10),r=Gi(90,50,e.values.carRenewablePercentage,-10),a=-5;return[Qt("stateDebt").byValue(-3*e.values.co2emissions),Qt("popularity").byValue(n+r),Qt("co2emissionsIndustry").byPercent(a),Qt("co2emissionsAgriculture").byPercent(a),Qt("co2emissionsOthers").byPercent(a),qt("electricityBrownCoal","electricityWind").byPercent(-3.5),qt("electricityHardCoal","electricityWind").byPercent(-3.5),qt("electricityBrownCoal","electricitySolar").byPercent(-1.5),qt("electricityHardCoal","electricitySolar").byPercent(-1.5),qt("buildingsSourceOil","buildingsSourceBio").byPercent(a),qt("carUsage","publicNationalUsage").byPercent(-2.5),qt("carUsage","publicLocalUsage").byPercent(-2.5)]},priority:e=>_i(e,"WirksamerCO2Preis")?50:0,citations:[Ne],details:de`

  `,internals:de`
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
  `};const Ii={AllesBleibtBeimAlten:le,InitialAtomausstieg:ri,KohleverstromungEinstellen:ei,EnergiemixRegeltDerMarkt:ti,KernenergienutzungVerlaengern:ni,NetzausbauErleichtern:ai,NetzausbauFoerdern:si,ForschungUndEntwicklungStromspeicherung:{title:"Forschung und Entwicklung zur Stromspeicherung fördern",description:"Ein Förderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+3;return[Qt("stateDebt").byValue(2).if(n),Qt("electricityGridQuality").byValue(.2).if(r)]},priority:e=>Ni(80,45,e.values.electricityGridQuality),citations:[],details:de`

  `,internals:de`
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
  `},StromspeicherungErleichtern:li,StromspeicherungFoerdern:oi,ForschungDezentraleStromerzeugung:{title:"Erforschung und Umsetzung dezentraler Stromerzeugung fördern",description:"Ein Förderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur für die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+1;return[Qt("stateDebt").byValue(2).if(n),Qt("electricityGridQuality").byValue(1).if(r)]},priority:e=>Ni(80,45,e.values.electricityGridQuality),citations:[],details:de`

  `,internals:de`
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
  `},WindkraftVereinfachen:{title:"Windkraft vereinfachen",description:"Genehmigungen für Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effects:(e,t,i)=>[],priority:e=>Ni(80,27,Ki(e)),citations:[],details:de`

  `,internals:de`
    # Happy Path 1.3

    # Folgen

    - Popularität unverändert: Einige freuen sich, andere ärgern die Windräder.
    - Kostenneutral.
    - Änderungen in den Ausschreibungsverfahren und Abstandsregeln wirken sich schneller aus.

    # Priorität

    - 0% bei einem Anteil von Windstrom von 80%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert
  `},AbstandsregelnFuerWindkraftVerschaerfen:{title:"Abstandsregeln für Windkraft verschärfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngebäuden im Innenbereich muss das Zehnfache der Gesamthöhe der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects:(e,t,i)=>[Qt("popularity").byValue(5).if(t===i),Qt("electricityWindOnshoreMaxNew").setValue(.42)],priority:e=>_i(e,"AbstandsregelnFuerWindkraftWieBisher")?Ni(0,100,Ki(e)):0},AbstandsregelnFuerWindkraftWieBisher:{title:"Abstandsregeln für Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem über Abstände zwischen den Windkraftanlagen und Wohngebäuden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=_i(e,"WindkraftVereinfachen")?0:5;return[Qt("electricityWindOnshoreMaxNew").setValue(6).if(i>=t+n)]},priority:e=>_i(e,"AbstandsregelnFuerWindkraftLockern")?Ni(30,100,Ki(e)):_i(e,"AbstandsregelnFuerWindkraftVerschaerfen")?Ni(70,27,Ki(e)):0},AbstandsregelnFuerWindkraftLockern:{title:"Abstandsregeln für Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln für Windkraftanlagen sowie Bauerlaubniss in Wäldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=_i(e,"WindkraftVereinfachen")?0:5;return[Qt("popularity").byValue(-3).if(t===i),Qt("electricityWindOnshoreMaxNew").setValue(30).if(i>=t+n)]},priority:e=>_i(e,"AbstandsregelnFuerWindkraftWieBisher")?Ni(70,27,Ki(e)):_i(e,"AbstandsregelnFuerWindkraftAbschaffen")?Ni(30,100,Ki(e)):0,citations:[],details:de`

  `,internals:de`
    # Happy Path 2

    # Priorität

    Zu Beginn und wenn "WieBisher" ausgewählt:

    - 0% bei einem Anteil von Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert

    Wenn Abstandsregeln abgeschafft wurden:

    - 0% bei einem Anteil von Windstrom von 30%.
    - 100% bei einem Anteil von Windstrom von 100%.
  `},AbstandsregelnFuerWindkraftAbschaffen:{title:"Abstandsregeln für Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=_i(e,"WindkraftVereinfachen")?0:5;return[Qt("popularity").byValue(-40).if(t===i),Qt("electricityWindOnshoreMaxNew").setValue(1e3).if(i>=t+n)]},priority:e=>_i(e,"AbstandsregelnFuerWindkraftLockern")?Ni(80,25,Ki(e)):0},AusschreibungsverfahrenfuerWindkraftWieBisher:{title:"Ausschreibungsverfahren für Windkraft wie zu Beginn",description:"Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=_i(e,"WindkraftVereinfachen")?0:5,r=Math.min(6.9,e.values.electricityWindOnshoreMaxNew);return[Qt("electricityWind").byValue((r+1.2)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>_i(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?Ni(60,100,ji(e)):0},AusschreibungsverfahrenfuerWindkraftVerdoppeln:{title:"Ausschreibungsverfahren für Windkraft verdoppeln",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=_i(e,"WindkraftVereinfachen")?0:5,r=Math.min(13.8,e.values.electricityWindOnshoreMaxNew);return[Qt("popularity").byValue(-1).if(t===i),Qt("unemployment").byValue(-20).if(t===i),Qt("electricityWind").byValue((r+2.4)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>_i(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?Ni(100,50,ji(e)):_i(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?Ni(40,100,ji(e)):0},AusschreibungsverfahrenfuerWindkraftVervierfachen:{title:"Ausschreibungsverfahren für Windkraft vervierfachen",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=_i(e,"WindkraftVereinfachen")?0:5,r=Math.min(27.6,e.values.electricityWindOnshoreMaxNew);return[Qt("popularity").byValue(-2).if(t===i),Qt("unemployment").byValue(-100).if(t===i),Qt("electricityWind").byValue((r+4.8)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>_i(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?Ni(100,50,ji(e)):_i(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?Ni(0,100,ji(e)):0,citations:[],details:de`
    Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung
    von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen
    Subventionierung umsetzen kann bekommt den Zuschlag.
  `,internals:de`
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
  `},AusschreibungsverfahrenfuerWindkraftVerachtfachen:{title:"Ausschreibungsverfahren für Windkraft verachtfachen",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=_i(e,"WindkraftVereinfachen")?0:5,r=Math.min(55.2,e.values.electricityWindOnshoreMaxNew);return[Qt("popularity").byValue(-20).if(t===i),Qt("unemployment").byValue(-100).if(t===i),Qt("electricityWind").byValue((r+9.6)*e.values.electricityWindEfficiency/100).if(i>=t+n)]},priority:e=>_i(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?Ni(100,50,ji(e)):0},SolarstromFoerderungAbschaffen:{title:"Solarstrom Förderung einstellen",description:"Mittlere bis große Solaranlagen sollten sich selbst tragen. Die Förderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:()=>[Qt("electricitySolar").byValue(2)],priority:e=>_i(e,"SolarstromFoerderungWieZuBeginn")?Ni(0,100,ji(e)):0,details:de`

  `},SolarstromFoerderungWieZuBeginn:{title:"Solarstrom Förderung wie zu Beginn",description:"Subventionierung für mittlere bis große Solaranlagen wie bisher",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:()=>[Qt("electricitySolar").byValue(5)],priority:e=>_i(e,"SolarstromFoerdernx8")?Ni(70,100,ji(e)):0,details:de`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `},SolarstromFoerdernx2:{title:"Solarstrom Förderung x2",description:"Subventionierung für mittlere bis große Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[Qt("popularity").byValue(10).if(t===i),Qt("unemployment").byValue(-31e3).if(t===i),Qt("electricitySolar").byValue(10)],priority:e=>_i(e,"SolarstromFoerderungWieZuBeginn")?Ni(100,30,ji(e)):0,details:de`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `},SolarstromFoerdernx4:{title:"Solarstrom Förderung x4",description:"Subventionierung für mittlere bis große Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[Qt("popularity").byValue(20).if(t===i),Qt("unemployment").byValue(-89e3).if(t===i),Qt("electricitySolar").byValue(20)],priority:e=>_i(e,"SolarstromFoerdernx2")?Ni(100,30,ji(e)):0,details:de`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:de`
    # Happy path 10

    ${be(Se)}
  `,citations:[Se]},SolarstromFoerdernx8:{title:"Solarstrom Förderung x8",description:"Subventionierung für mittlere bis große Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[Qt("popularity").byValue(-10).if(t===i),Qt("unemployment").byValue(-209e3).if(t===i),Qt("electricitySolar").byValue(40)],priority:e=>_i(e,"SolarstromFoerdernx4")?Ni(100,30,ji(e)):0,details:de`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `},SolarAufAllenDaechernVerpflichtend:{title:"Solar auf neuen Dächern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die Dächer.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[Qt("popularity").byValue(-3).if(t===i),Qt("electricitySolar").byValue(2)],priority:e=>_i(e,"SolarstromFoerderungWieZuBeginn")?Ni(100,30,ji(e)):0,details:de`

  `,internals:de`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `},DaemmungAltbau1Percent:ui,DaemmungAltbau2Percent:ci,DaemmungAltbau4Percent:di,DaemmungAltbauAbschaffen:hi,NahverkehrKostenlos:bi,AutosInInnenstaedtenVerbieten:fi,WasserstofftechnologieFoerdern:yi,WasserstoffmobilitaetFoerdern:ki,NahverkehrAusbauen:gi,NahverkehrModernisieren:mi,FernverkehrVerbindungenAusbauen:vi,FernverkehrModernisieren:wi,AusbauVonStrassen:Di,AbschaffungDerMineraloelsteuer:Si,DieselPrivilegAbgeschaffen:Pi,DienstwagenPrivilegAbgeschaffen:zi,Tempolimit130AufAutobahnen:Ai,Tempolimit120AufAutobahnen:Wi,Tempolimit100AufAutobahnen:Ti,TempolimitAufAutobahnenAussitzen:Vi,ElektromobilitaetFoerdern:Li,LadeinfrastrukturAusbauen:Oi,FoerderungFuerTierhaltungAbschaffen:pi,CO2PreisErhoehen:Ci,WirksamerCO2Preis:Ei,VollerCO2Preis:Fi,ForschungEmissionsfreieStahlproduktion:{title:"Forschung zur emissionsfreien Stahlproduktion fördern",description:"Forschung und Entwicklung von Technologien zur Produktion von Stahl mit stark reduzierten CO2-Emissionen wird stark gefördert. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+3,a=_i(e,"WasserstofftechnologieFoerdern",3)?ji(e)-70:0,s=_i(e,"WirksamerCO2Preis");return[Qt("stateDebt").byValue(2).if(n),Qt("co2emissionsIndustry").byValue(-2).if(r),Qt("co2emissionsIndustry").byValue(-2).if(s),Qt("co2emissionsIndustry").byValue(-a).if(a>0)]},priority(e){const t=e.values;return Ni(0,80,t.co2emissionsIndustry/t.co2emissions*100)},citations:[],details:de`

  `,internals:de`
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
  `},ForschungEmissionsfreieZementproduktion:{title:"Forschung zur emissionsfreien Zementproduktion fördern",description:"Forschung und Entwicklung von Technologien zur Produktion von Zement mit stark reduzierten CO2-Emissionen wird stark gefördert. 10 Mrd € über 5 Jahre.",effects(e,t,i){const n=i<t+5,r=i>=t+3,a=_i(e,"WasserstofftechnologieFoerdern",3)?ji(e)-70:0,s=_i(e,"WirksamerCO2Preis");return[Qt("stateDebt").byValue(2).if(n),Qt("co2emissionsIndustry").byValue(-2).if(r),Qt("co2emissionsIndustry").byValue(-2).if(s),Qt("co2emissionsIndustry").byValue(-a).if(a>0)]},priority(e){const t=e.values;return Ni(0,80,t.co2emissionsIndustry/t.co2emissions*100)},citations:[],details:de`

  `,internals:de`
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
  `},Test:{title:"Test",description:"Unsinniges Gesetz zum Testen.",effects:(e,t,i)=>[Qt("popularity").byPercent(50).if((i-t)%3!=0),Qt("popularity").byPercent(-50).if((i-t)%3==0),Qt("stateDebt").byPercent(-200).if(i===t),Qt("stateDebt").byPercent(50).if((i-t)%3!=0),Qt("stateDebt").byPercent(-50).if((i-t)%3==0),Qt("stateDebt").byPercent(-200).if(i===t+10)],priority:e=>0,citations:[],details:de`

  `,internals:de`

  `}},Mi=Object.keys(Ii);const Bi=ge(Ii).map((e=>o(l({},e),{effort:e.effort||ne})));function xi(e){const t=function(e){const t=Bi.find((t=>t.id===e));if(t)return t;throw Error(`Law #${e} not found`)}(e.lawId);if(t)return o(l({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function Ui(e){return e.map((e=>{const t=Bi.find((t=>t.id===e));return t||console.error(`Inconsistency: Proposed law #${e} not found`),t})).filter((e=>e))}function Ni(e,t,i){const n=i-e,r=t-e;if(0===r)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return n/r*100}function Gi(e,t,i,n){return Math.max(0,Ni(e,t,i))/100*n}function _i(e,t,i=0){if(!Bi.map((e=>e.id)).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some((n=>n.lawId===t&&n.effectiveSince<=e.currentYear+i))}function Ki(e){const t=e.values;return t.electricityWindUsable/t.electricityDemand*100}function ji(e){return(e.values.electricityWindUsable+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}var Ji={title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es für unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply:()=>[],probability(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return Math.min(1,Ni(15,30,t)/100)}};function Hi(e){return e.find((e=>e.title.match(/subvention/i)&&e.title.match(/abbau/i)))}var Zi={title:"Anruf von befreundetem Unternehmer",description:"Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine\n    Ferienvilla auf Sardinien einladen. Er verlässt sich natürlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen\n    nicht zustimmen wirst.\n  ",apply(e){if(e){const t=Hi(Ui(e.proposedLaws));if(t)return[$t("rejectLaw",{lawId:t.id})]}return[]},probability:e=>Hi(Ui(e.proposedLaws))?.5:0},Yi={title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute über die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply:()=>[]},Ri={title:"Zusammenbruch des Finanzsystems",description:"Deine Staatsfinanzen sind desaströs. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden\n    jemals wieder wirst zurückahlen können. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen\n    könntest. Das Spiel ist damit leider beendet.\n  ",apply:()=>[$t("gameOver")],probability:e=>e.values.stateDebt>2*Zt.stateDebt?X:0},$i={title:"Hitzehölle",description:"Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen Küstenregionen\n  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr wächst.\n  Um die verbleibdenden Teile sind erbitterte Kämpfe ausgebrochen.\n  ",apply:()=>[$t("gameOver")],probability:e=>e.values.co2budget<=0?te:0},Qi={title:"Happy New Year!",description:"Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen Tätigkeit aufgestellt\n    und kommt zu dem nicht weiter überraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -\n    ebenfalls nicht überraschend - sieht die Sache anders und verurteilt die Regierungserklärung als haltlos.\n  ",apply:()=>[$t("advanceYear")],probability:e=>Z(e.currentDate).getYear()>e.currentYear?Q:0},qi={title:"Social Media Alarm!",description:"Deine Wahlkampfberaterin ruft dich völlig aufgelöst an. Ob denn an den Geschichten was dran sein, die da im\n    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.\n    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.\n  ",apply:()=>[Qt("popularity").byPercent(-20)]},Xi={title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland müssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply:()=>[]},en={title:"Du hast durchgehalten",description:"Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,\n    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Maßnahmen waren zu finanzieren\n    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!\n  ",apply:()=>[$t("gameOver")],probability:e=>2050===e.currentYear?q:0},tn={title:"Wahl verloren",description:"Deine Beliebtheit in der Bevölkerung ist katastrophal, lieber würde man Mao Zedong wählen als dich.\n    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du gehörst) und ist damit unter\n    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon länger kein vernünftiger Mensch mehr geglaubt.\n  ",apply:()=>[$t("gameOver")],probability:e=>e.values.popularity<=0?ee:0},nn={title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply:()=>[],citations:[],details:de`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:de`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `},rn={title:"Bürgerinitiative fordert stärkere Solarförderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply:()=>[],probability(e){const t=_i(e,"SolarstromFoerderungAbschaffen"),i=_i(e,"SolarstromFoerderungWieZuBeginn"),n=_i(e,"SolarstromFoerdernx2");return t||i||n?.5:0},citations:[we],details:de`

  `,internals:de`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${be(we)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `},an={title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply:()=>[$t("gameOver")],probability:e=>e.acceptedLaws.find((e=>"KernenergienutzungVerlaengern"===e.lawId))?.5:0,laws:[],citations:[],details:de`

  `,internals:de`

  `},sn={title:"Staatsoberhaupt verstorben",description:"Du stirbst an der neuen BSE Variante. Tja, hättest du dich mal besser um das Tierwohl gekümmert...",apply:()=>[$t("gameOver")],probability:e=>Ui(e.acceptedLaws.map((e=>e.lawId))).find((e=>e.title.match(/tierwohl/i)))?0:.5,laws:[],citations:[],details:de`

  `,internals:de`

  `},ln={title:"Dürreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausfälle sind enorm.",apply:()=>[Qt("gdp").byValue(-100),Qt("popularity").byValue(-10)],probability:e=>Math.min(1,Ni(400,0,e.values.co2budget)/100),laws:[],citations:[],details:de`

  `,internals:de`

  `},on={title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und führt zu einer neuen Diskussion über Lobbyismus.",apply:()=>[Qt("popularity").byValue(-2)],probability:e=>_i(e,"WirksamerCO2Preis")||_i(e,"KohleverstromungEinstellen")?0:.3,laws:[],citations:[],details:de`

  `,internals:de`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `},un={title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply:()=>[Qt("popularity").byValue(-2)],probability:()=>.3,laws:[],citations:[],details:de`

  `,internals:de`

  `},cn={title:"Klimaflüchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimaflüchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply:()=>[Qt("stateDebt").byValue(10)],probability:e=>e.values.co2budget<500?.2:0,laws:[],citations:[],details:de`

  `,internals:de`

  `},dn={title:"Plagiatsaffäre",description:"Während des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet Wählerstimmen.",apply:()=>[Qt("popularity").byValue(-10)],probability:e=>.5,laws:[],citations:[],details:de`

  `,internals:de`

  `};const hn=()=>.5,gn=ge({AbstandsregelnWindkraft:ie,Altbausanierung:Ji,Bestechung:Zi,EnergieStrategie:Yi,FinanzKollaps:Ri,Hitzehoelle:$i,NewYear:Qi,SocialMedia:qi,TempolimitAufAutobahnen:Xi,TimesUp:en,WahlVerloren:tn,WindkraftAusschreibung:nn,SolarstromFoerderung:rn,AtomKatastrophe:an,BSE:sn,Duerrewelle:ln,PRKohleindustrie:on,PRInnenminister:un,Klimafluechtlinge:cn,Plagiatsaffaere:dn,CO2PreisDebatte:{title:"Debatte über CO2-Preise",description:"Eine marktliberale Kampagne ist sehr erfolgreich darin, Dich als Verbots-Kanzler hinzustellen. Aus allen Richtungen prasseln Forderungen nach einem adäquaten CO2-Preis auf Dich ein. Nur leider gehen die Vorstellungen über den genauen Preis sehr weit auseinander.",laws:["CO2PreisErhoehen","WirksamerCO2Preis","VollerCO2Preis"],apply:()=>[],probability:e=>Ni(1,3,(_i(e,"AutosInInnenstaedtenVerbieten")?1:0)+(_i(e,"KohleverstromungEinstellen")?1:0)+(_i(e,"SolarAufAllenDaechernVerpflichtend")?1:0)+(_i(e,"Tempolimit130AufAutobahnen")?1:0)+(_i(e,"Tempolimit120AufAutobahnen")?1:0)+(_i(e,"Tempolimit100AufAutobahnen")?1:0))/100}}).map((e=>o(l({},e),{probability:e.probability||hn}))),mn={currentDate:"2021-01-01",currentYear:2021,values:Zt,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],over:!1,prngState:{}};function pn(e=mn,t=g()){return{id:t,currentDate:e.currentDate,currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:Rt(e.values),events:e.events,over:e.over,prngState:{}}}function bn(e=Bi,t=mn){const i=pn(t);return i.acceptedLaws=e.filter((e=>{var t;return null==(t=e.labels)?void 0:t.includes("initial")})).map((e=>({lawId:e.id,effectiveSince:i.currentYear}))),i}const fn=[...Array(30).keys()].map((e=>e+2021));function vn(e,t=Bi,i=gn,n=ae){const r=function(e,t,i){const n=function(e,t){return t.map((t=>o(l({},t),{prob:t.probability(e)}))).filter((e=>e.prob>0))}(e,t),r=function(e){return e.filter((e=>e.prob>1)).reduce(((e,t)=>t.prob>((null==e?void 0:e.prob)||0)?t:e),void 0)}(n);if(r)return r;return function(e,t){for(const i of e)if((t-=i.prob)<0)return i;return}(function(e){const t=e.map((e=>e.prob)).reduce(((e,t)=>e+t),0),i=.6/t;return e.map((e=>o(l({},e),{prob:e.prob*i})))}(n),i())}(e,i,n);if(r){const t={id:r.id,occuredIn:e.currentYear,acknowledged:!1};e.events.unshift(t)}const a=function(e,t,i){const n=t=>{var i;return null==(i=e.acceptedLaws)?void 0:i.some((e=>e.lawId===t.id))},r=t=>{var i;return null==(i=e.rejectedLaws)?void 0:i.includes(t.id)},a=e=>{var t;return(null==(t=e.labels)?void 0:t.includes("hidden"))||!1},s=t=>({law:t,priority:t.priority(e)}),l=e=>({law:e.law,priority:e.priority+(i.includes(e.law.id)?100:0)});return t.filter(he(n)).filter(he(r)).filter(he(a)).map(s).filter((e=>e.priority>0)).map(l).sort(((e,t)=>t.priority-e.priority)).map((e=>e.law.id)).slice(0,6)}(e,t,(null==r?void 0:r.laws)?r.laws:[]);return e.proposedLaws=function(e,t){const i=[...e],n=t.filter((e=>i.includes(e))),r=t.filter((e=>!n.includes(e)));var a=0;for(;a<i.length;)n.includes(i[a])?a++:0!==r.length?(i[a]=r.shift(),a++):i.splice(a,1);return i.push(...r.slice(0,6-i.length)),i}(e.proposedLaws,a),r}function wn(e,t,i){const n=Rt(e.values),r=((e,t,i)=>Object.fromEntries(e.map((e=>{const n=t(e),r=Object.fromEntries(_t.map((t=>[t,i(e,n,t)])));return[e.id,r]}))))(t.sort(((e,t)=>{var i,n;return(null==(i=e.treatAfterLabels)?void 0:i.some((e=>{var i;return null==(i=t.labels)?void 0:i.includes(e)})))?1:(null==(n=t.treatAfterLabels)?void 0:n.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)})))?-1:0})).filter((e=>e.effectiveSince<=i)),(t=>{const r=function(e){return l({},e)}(n),a=t.effects(o(l({},e),{values:n}),t.effectiveSince,i);return Xt({dispatch:()=>{},values:n},a),r}),((e,t,i)=>n[i]-t[i]));return n.co2budget-=n.co2emissions,{values:n,effectsOfLaws:r}}function yn(e){return Math.max(0,Math.min(100,e))}const kn=[{id:"start",title:"Stell dir vor...",text:de`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du auswählen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die Wähler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine Wähler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];const Sn={setGameState(e,t){e.game=t.game},gameOver(e){e.game=o(l({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},Dn={proposedLaws:e=>e.game&&e.game.proposedLaws?Ui(e.game.proposedLaws):[]};var Pn=m({props:{law:{type:Object,required:!0},selectable:{type:Boolean,required:!0},numCards:{type:Number,required:!0}},setup:()=>({store:ua()}),data:()=>({accepted:!1}),computed:{zIndex(){return this.law.zIndex},transform(){return`rotate(${2*(this.law.pos-this.numCards/2)}deg) translate(${20*Math.abs(this.numCards/2-this.law.pos)}px, -50%)`}},methods:{select(){this.$emit("selected")},accept(){this.accepted=!0},sendAccept(e){e.animationName.match(/^twistOut-/)&&this.$emit("accepted",this.law.id)}}});const zn=k("data-v-f466f766");p("data-v-f466f766");const An={key:0,type:"radio"},Wn=v("br",null,null,-1),Tn={key:0,class:"button-bar"};b();const Vn=zn(((e,t,i,n,r,a)=>(S(),f("div",{class:["Law",{accepted:e.accepted}],style:{zIndex:e.zIndex},onClick:t[2]||(t[2]=(...t)=>e.select&&e.select(...t)),onAnimationend:t[3]||(t[3]=(...t)=>e.sendAccept&&e.sendAccept(...t))},[v("label",null,[e.selectable?(S(),f("input",An)):w("",!0),v("div",null,[v("h3",null,y(e.law.title),1),v("div",null,y(e.law.description),1),Wn,v("div",null,y(e.law.effortComment),1),e.selectable?(S(),f("div",Tn,[v("button",{class:"accept",onClick:t[1]||(t[1]=(...t)=>e.accept&&e.accept(...t))},"✓")])):w("",!0)])])],38))));Pn.render=Vn,Pn.__scopeId="data-v-f466f766";var Ln=m({components:{LawCard:Pn},setup:()=>({store:ua()}),data:()=>({zIndexes:[],poppedUp:!1}),computed:o(l({},D(["proposedLaws","game"])),{lawsToShow(){this.zIndexes.length||(this.zIndexes=ce(this.proposedLaws.length,0));const e=this.game;return this.proposedLaws.map(((t,i)=>o(l({},t),{zIndex:this.zIndexes[i],pos:i,effortComment:t.effort(e).text})))}}),methods:{accept(e){this.store.dispatch("acceptLaw",{lawId:e})},select(e){this.zIndexes=ce(this.proposedLaws.length,e)},sitOut(){this.store.dispatch("sitOut")}}});const On=k("data-v-1b03ee9f")(((e,t,i,n,r,a)=>{const s=A("LawCard");return S(),f(P,null,[v("div",{class:["ProposedLaws",{poppedUp:e.poppedUp}],onClick:t[1]||(t[1]=t=>e.poppedUp=!0)},[(S(!0),f(P,null,z(e.lawsToShow,((t,i)=>(S(),f(s,{key:t.id,law:t,selectable:e.poppedUp,numCards:e.lawsToShow.length,onAccepted:()=>e.accept(t.id),onSelected:()=>e.select(i)},null,8,["law","selectable","numCards","onAccepted","onSelected"])))),128))],2),v("div",{class:"sitOutButton",onClick:t[2]||(t[2]=()=>e.sitOut())},"Aussitzen")],64)}));Ln.render=On,Ln.__scopeId="data-v-1b03ee9f";var Cn=m({props:{title:String,text:String},methods:{acknowledge(){this.$emit("acknowledge")}}});const En=k("data-v-2df6be4d");p("data-v-2df6be4d");const Fn={key:0};b();const In=En(((e,t,i,n,r,a)=>e.text?(S(),f("div",{key:0,onClick:t[1]||(t[1]=(...t)=>e.acknowledge&&e.acknowledge(...t))},[e.title?(S(),f("h2",Fn,y(e.title),1)):w("",!0),v("p",null,y(e.text),1)])):w("",!0)));Cn.render=In,Cn.__scopeId="data-v-2df6be4d";var Mn=m({props:{title:{type:String,required:!0},value:{type:Number,required:!0}},computed:{indicatorStyle(){const e=this.value>40?"green":this.value>20?"goldenrod":"red";return{width:this.value+"%",backgroundColor:e}}}});const Bn=k("data-v-c0bc928c");p("data-v-c0bc928c");const xn={class:"container"},Un={class:"title"},Nn={class:"progress-bar"};b();const Gn=Bn(((e,t,i,n,r,a)=>(S(),f("div",xn,[v("div",Un,y(e.title),1),v("div",Nn,[v("div",{class:"indicator",style:e.indicatorStyle},null,4)])]))));Mn.render=Gn,Mn.__scopeId="data-v-c0bc928c";var _n=m({props:{value:{type:Number,required:!0}},components:{IndicatorBar:Mn},computed:{isShort(){return this.value<20},isLess(){return this.value>=20&&this.value<50},isMore(){return this.value>=50&&this.value<80},isMuch(){return this.value>=80}}});const Kn=k("data-v-1792713c");p("data-v-1792713c");const jn={id:"finances"},Jn={key:0,src:"/assets/money-short.7ce9dbed.png",id:"short"},Hn={key:1,src:"/assets/money-less.c10d45f8.png",id:"less"},Zn={key:2,src:"/assets/money-more.a1c17d8d.png",id:"more"},Yn={key:3,src:"/assets/money-much.ad651475.png",id:"much"};b();const Rn=Kn(((e,t,i,n,r,a)=>{const s=A("IndicatorBar");return S(),f("div",jn,[v(s,{id:"indicator",title:"Finanzen",value:e.value},null,8,["value"]),e.isShort?(S(),f("img",Jn)):w("",!0),e.isLess?(S(),f("img",Hn)):w("",!0),e.isMore?(S(),f("img",Zn)):w("",!0),e.isMuch?(S(),f("img",Yn)):w("",!0)])}));_n.render=Rn,_n.__scopeId="data-v-1792713c";var $n=m({props:{value:{type:Number,required:!0}},components:{IndicatorBar:Mn},computed:{areHappy(){return this.value>=50},areAngry(){return this.value<50}}});const Qn=k("data-v-4add069c");p("data-v-4add069c");const qn={id:"popularity"},Xn={key:0,src:"/assets/people-happy.1e9e529c.png",id:"happy"},er={key:1,src:"/assets/people-angry.495e0425.png",id:"angry"};b();const tr=Qn(((e,t,i,n,r,a)=>{const s=A("IndicatorBar");return S(),f("div",qn,[v(s,{id:"indicator",title:"Beliebtheit",value:e.value},null,8,["value"]),e.areHappy?(S(),f("img",Xn)):w("",!0),e.areAngry?(S(),f("img",er)):w("",!0)])}));$n.render=tr,$n.__scopeId="data-v-4add069c";var ir=m({data:()=>({levels:{healthy:"/assets/plant-healthy.1c912fd2.png",sick:"/assets/plant-sick.05726ebf.png",withered:"/assets/plant-withered.2d8ffb21.png"}}),props:{value:{type:Number,required:!0}},components:{IndicatorBar:Mn},computed:{status(){return this.value>66?"healthy":this.value>33?"sick":"withered"},imgSrc(){return this.levels[this.status]}}});const nr=k("data-v-0683ca38");p("data-v-0683ca38");const rr={id:"plant"};b();const ar=nr(((e,t,i,n,r,a)=>{const s=A("IndicatorBar");return S(),f("div",rr,[v(s,{id:"indicator",title:"CO2-Budget",value:e.value},null,8,["value"]),v("img",{src:e.imgSrc,id:e.status},null,8,["src","id"])])}));ir.render=ar,ir.__scopeId="data-v-0683ca38";var sr=m({props:{year:Number}});const lr=k("data-v-38fe5c52");p("data-v-38fe5c52");const or={id:"calendar"};b();const ur=lr(((e,t,i,n,r,a)=>(S(),f("div",or,y(e.year),1))));sr.render=ur,sr.__scopeId="data-v-38fe5c52";var cr=m({});const dr=k("data-v-5952ab5a");p("data-v-5952ab5a");const hr={id:"heater"},gr=v("img",{src:"/assets/heater.5a77e425.png"},null,-1);b();const mr=dr(((e,t,i,n,r,a)=>(S(),f("div",hr,[gr]))));cr.render=mr,cr.__scopeId="data-v-5952ab5a";var pr=m({});const br=k("data-v-3902beeb");p("data-v-3902beeb");const fr={id:"table"},vr=v("img",{src:"/assets/table-top.c87bd2fd.png",id:"table-top"},null,-1),wr=v("img",{src:"/assets/table-front.78c0f8c6.png",id:"table-front"},null,-1),yr=v("img",{src:"/assets/table-front.78c0f8c6.png",id:"table-back"},null,-1),kr=v("img",{src:"/assets/table-side.49774a53.png",id:"table-left-side"},null,-1),Sr=v("img",{src:"/assets/table-side.49774a53.png",id:"table-right-side"},null,-1);b();const Dr=br(((e,t,i,n,r,a)=>(S(),f("div",fr,[vr,wr,yr,kr,Sr]))));pr.render=Dr,pr.__scopeId="data-v-3902beeb";var Pr=m({props:{withNews:Boolean}}),zr="/assets/board-side.d7181ded.png",Ar="/assets/tvset-legs.78b387df.png";const Wr=k("data-v-118e7bdf");p("data-v-118e7bdf");const Tr={id:"tvset"},Vr=v("div",{id:"board"},[v("img",{id:"board-front",src:"/assets/board-front.41330f02.png"}),v("img",{id:"board-left",src:zr}),v("img",{id:"board-right",src:zr}),v("div",{id:"board-top"})],-1),Lr={id:"tv"},Or=v("img",{id:"tv-front",src:"/assets/tv-front.82df5c0c.png"},null,-1),Cr={key:0,id:"news",src:"/assets/news.c4bbc2d0.png"},Er=v("div",{id:"legs"},[v("img",{id:"legs-front",src:Ar}),v("img",{id:"legs-back",src:Ar})],-1);b();const Fr=Wr(((e,t,i,n,r,a)=>(S(),f("div",Tr,[Vr,v("div",Lr,[Or,e.withNews?(S(),f("img",Cr)):w("",!0)]),Er]))));Pr.render=Fr,Pr.__scopeId="data-v-118e7bdf";var Ir={};const Mr=k("data-v-2419943a");p("data-v-2419943a");const Br={class:"dialog"},xr={class:"buttons"};b();const Ur=Mr(((e,t,i,n,r,a)=>(S(),f("div",Br,[W(e.$slots,"default",{},void 0,!0),v("div",xr,[W(e.$slots,"buttons",{},void 0,!0)])]))));Ir.render=Ur,Ir.__scopeId="data-v-2419943a";var Nr=m({setup(){const e=ua();return e.dispatch("setupTour"),{store:e}},components:{Dialog:Ir},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return kn.find((e=>e.id===this.$store.state.tour.step))},title(){var e;return null==(e=this.currentStep)?void 0:e.title},text(){var e;return null==(e=this.currentStep)?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var t;const i=document.querySelector(".highlighted");i&&i.classList.remove("highlighted"),e&&e.highlight&&(null==(t=document.querySelector(`#${e.highlight}`))||t.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}});Nr.render=function(e,t,i,n,r,a){const s=A("Dialog");return e.title&&e.text?(S(),f(s,{key:0},{buttons:T((()=>[v("button",{onClick:t[1]||(t[1]=(...t)=>e.stop&&e.stop(...t))},"Tour beenden"),v("button",{onClick:t[2]||(t[2]=(...t)=>e.next&&e.next(...t))},"Weiter")])),default:T((()=>[v("h2",null,y(e.title),1),v("div",{innerHTML:e.text},null,8,["innerHTML"])])),_:1})):w("",!0)};var Gr=m({components:{Calendar:sr,ClimateIndicator:ir,Heater:cr,LawProposals:Ln,SpeechBubble:Cn,FinanceIndicator:_n,PopularityIndicator:$n,Table:pr,Tour:Nr,TVSet:Pr},data:()=>({store:ua()}),computed:{eventToShow(){var e;const t=(null==(e=this.store.state.game)?void 0:e.events)||[];if(0===t.length)return;const i=t[0];return i.acknowledged?void 0:gn.find((e=>e.id===i.id))},eventTitle(){var e;return(null==(e=this.eventToShow)?void 0:e.title)||""},eventText(){var e;return(null==(e=this.eventToShow)?void 0:e.description)||""},currentYear(){var e;return(null==(e=this.store.state.game)?void 0:e.currentYear)||2021},finance(){const e=this.store.state.game;return e?function(e){return yn(100-e.values.stateDebt/Zt.stateDebt*50)}(e):0},popularity(){var e;return(null==(e=this.store.state.game)?void 0:e.values.popularity)||100},climate(){const e=this.store.state.game;return e?function(e){return 0===e.values.co2emissions?100:yn(e.values.co2budget*Rt(Zt).co2emissions/Zt.co2budget/e.values.co2emissions*50)}(e):0}},methods:{acknowledge(){this.$store.dispatch("acknowledgeEvent",this.eventToShow)}}});const _r={class:"game-setup"},Kr=v("h1",null,"#ich-kann-klima",-1),jr=v("div",{id:"walls"},[v("div",{id:"wall-back"}),v("div",{id:"wall-left"}),v("div",{id:"wall-right"})],-1);Gr.render=function(e,t,i,n,r,a){const s=A("Calendar"),l=A("Heater"),o=A("PopularityIndicator"),u=A("TVSet"),c=A("ClimateIndicator"),d=A("Table"),h=A("FinanceIndicator"),g=A("LawProposals"),m=A("SpeechBubble"),p=A("Tour");return S(),f("div",_r,[Kr,jr,v(s,{year:e.currentYear},null,8,["year"]),v(l),v(o,{value:e.popularity},null,8,["value"]),v(u,{"with-news":!!e.eventText},null,8,["with-news"]),v(c,{value:e.climate},null,8,["value"]),v(d),v(h,{value:e.finance},null,8,["value"]),v(g),v(m,{title:e.eventTitle,text:e.eventText,onAcknowledge:e.acknowledge},null,8,["title","text","onAcknowledge"]),v(p)])};var Jr=m({setup(){const e=ua();return{store:e,acceptedLaws:V((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({opened:void 0}),computed:{visibleAccepted(){return Bi.filter((e=>{var t,i;return(null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id)))&&!(null==(i=e.labels)?void 0:i.includes("hidden"))}))}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}});const Hr=k("data-v-aace6332")(((e,t,i,n,r,a)=>(S(!0),f(P,null,z(e.visibleAccepted,((t,i)=>(S(),f("div",{key:i,class:["Law",{opened:i===e.opened}],onClick:t=>e.toggleOpen(i)},[v("h3",null,y(t.title),1),v("div",null,y(t.description),1)],10,["onClick"])))),128))));Jr.render=Hr,Jr.__scopeId="data-v-aace6332";var Zr=m({components:{GameSetup:Gr,AcceptedLaws:Jr},setup:()=>({store:ua()}),methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,i){i((t=>t.startGame(e.params.id)))}});const Yr=k("data-v-3637ce73")(((e,t,i,n,r,a)=>{const s=A("GameSetup");return S(),f(s)}));Zr.render=Yr,Zr.__scopeId="data-v-3637ce73";var Rr=m({components:{Dialog:Ir},setup:()=>({store:ua()}),computed:{co2(){var e,t;const i=null==(e=this.store.state.game)?void 0:e.values.co2budget;return(null==(t=this.store.state.game)?void 0:t.values.co2emissions)>0?i>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. Hätte die AfD nicht besser hinbekommen.":i>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken können. Punktlandung."},debt(){var e;return(null==(e=this.store.state.game)?void 0:e.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilitätskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var e;const t=null==(e=this.store.state.game)?void 0:e.values.popularity;return t<20?"entspricht dem, was man von einem langhährigen Diktator erwarten kann.":t<50?"ist nicht berauschend, wiedergewählt würdest du wohl eher nicht.":t<80?"reicht aus, dass du noch länger am Ruder bleiben könntest. Gratulation!":"ist völlig unglaubwürdig - war das wirklich eine freie Wahl?"}},methods:{loadGame(e){this.store.dispatch("loadGame",{gameId:e})},newGame(){this.$router.push("/games")}},beforeRouteEnter(e,t,i){i((t=>{t.loadGame(e.params.id)}))}});const $r=v("h2",null,"Das Spiel ist leider zu Ende",-1),Qr=v("p",null,"Deine Entscheidungen haben etwas verändert - soviel kann man sagen.",-1),qr=v("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Xr={class:"button-bar"};Rr.render=function(e,t,i,n,r,a){const s=A("Dialog");return S(),f(s,null,{default:T((()=>[$r,Qr,v("ul",null,[v("li",null,"Die CO2-Emmissionen "+y(e.co2),1),v("li",null,"Die Staatsfinanzen "+y(e.debt),1),v("li",null,"Deine Beliebtheit "+y(e.popularity),1)]),qr,v("div",Xr,[v("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Neuer Versuch")])])),_:1})};const ea=[{path:"/",redirect:"/games"},{path:"/games",component:Zr},{path:"/games/:id",component:Zr},{path:"/games/:id/over",component:Rr}],ta=L({history:O(),routes:ea});const ia=function(e,t){let i,n=[];async function r(){if(i&&(clearTimeout(i),i=void 0),n.length){const{method:s,path:l,data:o,retry:u,resolve:c,reject:d}=n[0];try{if((null==t?void 0:t.navigator)&&!(null==t?void 0:t.navigator.onLine))throw Error("Browser is offline");const i=await e(s,l,o);n.shift(),c(i)}catch(a){u?n[0].retry=Math.max(-1,u-1):(n.shift(),d(a))}n.length&&(i=setTimeout(r,(null==t?void 0:t.timeout)||1e4))}}return{add:(e,t,a,s=-1)=>new Promise(((l,o)=>{n.push({method:e,path:t,data:a,retry:s,resolve:l,reject:o}),i||r()})),remove(e,t){n=n.filter((i=>i.method.toLowerCase()!==e.toLowerCase()||i.path!==t))},callsPending:()=>n.length>0}}(function(e,t,i=console){return async function(n,r,a){var s;try{const i={method:n};["post","put","patch"].includes(n)&&(i.body=JSON.stringify(a),i.headers={"content-type":"application/json"});const l=await t(e+r,i),o=(null==(s=l.headers.get("Content-Type"))?void 0:s.match(/json/))?await l.json():await l.text();if(l.ok)return o;throw Error(o.message||o)}catch(l){throw i.error(l),l}}}(localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",fetch));var na;const ra=function({api:e,logger:t=console,storage:i=localStorage}){return{async createGame(n){se(n),i.setItem("game",JSON.stringify(n));try{e.createGame(n)}catch(r){t.warn("Cannot save new game - trying again later",r)}return n},async loadGame(t){const n=i.getItem("game");if(n){const e=JSON.parse(n);if(e.id===t)return se(e),pn(e,t)}const r=await e.loadGame(t);return se(r),pn(r,t)},async saveGame(n){n.prngState=re.state(),i.setItem("game",JSON.stringify(n));try{e.saveGame(n)}catch(r){t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",r)}},async decisionMade(t,i,n){e.decisionMade(t.id,i,n)},async eventOccurred(t,i){e.eventOccurred(t.id,i.id)}}}({api:(na=ia,{createGame:e=>na.add("post","/games",e),loadGame:e=>na.add("get","/games/"+e,void 0,0),saveGame:e=>(na.remove("put","/games/"+e.id),na.add("put","/games/"+e.id,e)),decisionMade:(e,t,i)=>na.add("post","/games/"+e+"/decisions/"+t,{accepted:i}),eventOccurred:(e,t)=>na.add("post","/games/"+e+"/events/"+t)})}),aa=(sa=ta,la=ra,{async startGame(e){const t=bn();await la.createGame(t);const i=vn(t);e.commit("setGameState",{game:t}),e.dispatch("applyEvent",{event:i}),sa.push("/games/"+t.id)},async loadGame(e,t){try{const i=await la.loadGame(t.gameId);await la.saveGame(i),sa.push("/games/"+i.id+(i.over?"/over":"")),e.commit("setGameState",{game:i})}catch(i){e.dispatch("error",{error:i})}},gameOver(e){var t;e.commit("gameOver",void 0),sa.push("/games/"+(null==(t=e.state.game)?void 0:t.id)+"/over")},async acceptLaw(e,t){const i=l({},e.state.game),n=function(e,t){const i={lawId:e,effectiveSince:t.currentYear+1},n=xi(i),r=n.effort(t);t.currentDate=Z(t.currentDate).plus(r.time).toJSON();const a=n.removeLawsWithLabels,s=t.acceptedLaws.map(xi).filter((e=>!(null==a?void 0:a.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)}))))).map((e=>({lawId:e.id,effectiveSince:e.effectiveSince})));return t.acceptedLaws=[...s,i],vn(t)}(t.lawId,i);await la.saveGame(i),e.commit("setGameState",{game:i}),e.dispatch("applyEvent",{event:n}),await la.decisionMade(i,t.lawId,!0)},async rejectLaw(e,t){const i=l({},e.state.game);i.rejectedLaws=[...i.rejectedLaws,t.lawId],await la.decisionMade(i,t.lawId,!1),await la.saveGame(i),e.commit("setGameState",{game:i})},async sitOut(e){const t=l({},e.state.game);await la.decisionMade(t,"sitOut",!0);const i=function(e){return e.currentDate=Z(e.currentDate).plus($).toJSON(),vn(e)}(t);await la.saveGame(t),e.commit("setGameState",{game:t}),e.dispatch("applyEvent",{event:i})},async advanceYear(e){const t=l({},e.state.game),i=t.acceptedLaws.map(xi);t.currentYear++,t.values=function(e,t,i){return wn(e,t,i).values}(t,i,t.currentYear),await la.saveGame(t),e.commit("setGameState",{game:t})},async applyEvent(e,t){if(!t.event)return;const i=l({},e.state.game);await la.eventOccurred(i,t.event);const n=t.event.apply(i);e.dispatch("applyEffects",{changes:n})},acknowledgeEvent(e,t){const i=l({},e.state.game);i.events.find((e=>e.id===t.id)).acknowledged=!0,la.saveGame(i),e.commit("setGameState",{game:i})},applyEffects(e,t){const i={dispatch:e.dispatch,values:Rt(e.state.game.values)};Xt(i,t.changes);const n=o(l({},e.state.game),{values:i.values});la.saveGame(n),e.commit("setGameState",{game:n})},setupTour(e){const t=localStorage.getItem("tour")||kn[0].id,i=kn.find((e=>t===e.id));i?e.commit("setTour",{step:i.id,active:!0}):e.dispatch("stopTour")},nextTourStep(e){const t=kn.findIndex((t=>e.state.tour.step===t.id));if(t<0||t==kn.length-1)e.dispatch("stopTour");else{const i=kn[t+1];e.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(e){e.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},async error(e,t){e.commit("error",t)}});var sa,la;const oa=Symbol();function ua(){return C(oa)}const ca=E({state:{game:void 0,tour:{active:!0,step:"start"}},mutations:Sn,actions:aa,getters:Dn});function da(e,t,...i){for(const n of i){if(e[n]<t[n])return-1;if(e[n]>t[n])return 1}return 0}function ha(e,t,i){function n(e){return(e>0?"+":"")+e.toFixed(2)}function r(e){const r=function(e){const t=i.find((t=>"modify"===t.type&&t.name===e));return t&&t.condition?t.value:0}(e),a=t?t[e]:0;return r&&Math.abs(r-a)<.001?n(r):r?n(r)+" / "+n(a):0!=a?n(a):""}return Ht.map((t=>{return{id:t.name,unit:t.unit,value:(i=t.name,e[i].toFixed(2)),effect:r(t.name),class:t.writable?"writable":"calculated"};var i}))}var ga=m({props:{citation:{type:Object,required:!0},showInternals:{type:Boolean,default:!1}},computed:{href(){return this.citation.url.toString()},title(){return this.citation.title||this.citation.url.toString()}}});const ma={key:0},pa=F(". "),ba={key:1},fa={key:2},va=F("Bemerkung: "),wa=F(". "),ya={key:3},ka=F("Internes: "),Sa=F(". "),Da={key:4},Pa=F(". "),za={key:5},Aa=F(". "),Wa={key:6},Ta=F(". ");ga.render=function(e,t,i,n,r,a){return S(),f("p",null,[e.citation.authors?(S(),f("span",ma,y(e.citation.authors+e.citation.dateString())+". ",1)):w("",!0),v("a",{target:"_blank",rel:"noreferrer noopener",href:e.href},'"'+y(e.title)+'"',9,["href"]),pa,e.citation.publisher?(S(),f("span",ba,y(e.citation.publisher)+". ",1)):w("",!0),e.citation.comment?(S(),f("span",fa,[va,v("span",{innerHTML:e.citation.comment},null,8,["innerHTML"]),wa])):w("",!0),e.showInternals&&e.citation.internalComment?(S(),f("span",ya,[ka,v("span",{innerHTML:e.citation.internalComment},null,8,["innerHTML"]),Sa])):w("",!0),e.citation.referringUrl?(S(),f("span",Da,[v("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,["href"]),Pa])):w("",!0),e.citation.archiveUrl?(S(),f("span",za,[v("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,["href"]),Aa])):w("",!0),e.citation.localCopy?(S(),f("span",Wa,[v("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,["href"]),Ta])):w("",!0)])};var Va=m({components:{apexchart:I},props:{chartData:{type:Object,required:!0},paramId:{type:String,required:!0},selectedYear:{type:Number}},emits:["update:selectedYear"],setup(e,t){const i=V((()=>({xaxis:{categories:fn,labels:{rotate:-90}},chart:{id:e.paramId+"-withLawEffects",animations:{enabled:!1},stacked:!0},colors:["#9c6d00","#644600","#ce900070"],legend:{show:!1},markers:{size:0},dataLabels:{enabled:!1}}))),n=V((()=>e.chartData.values.map(((t,i)=>({value:t[e.paramId],change:e.chartData.changes[i][e.paramId]}))))),r=V((()=>n.value.map((e=>{const t=e.value-e.change;return e.change*e.value>0?t*e.value>0?{value:t,gain:e.change,loss:0}:{value:0,gain:e.value,loss:t}:{value:e.value,gain:0,loss:-e.change}})))),a=V((()=>[{name:"Simulated "+e.paramId,data:r.value.map((e=>Math.round(e.value)))},{name:"Gains of "+e.paramId+" by selected law",data:r.value.map((e=>Math.round(e.gain)))},{name:"Losses of "+e.paramId+" by selected law",data:r.value.map((e=>Math.round(e.loss)))}])),s=M();var l=void 0;function o(){var e,t;null!=(null==(e=s.value)?void 0:e.chart)&&null!=l&&(null==(t=s.value)||t.toggleDataPointSelection(0,l)),l=void 0}return B((()=>function(e){var t,i;if(null!=(null==(t=s.value)?void 0:t.chart)&&e){const t=e-fn[0];l!=t&&(o(),l=t,null==(i=s.value)||i.toggleDataPointSelection(0,t))}else o()}(e.selectedYear)),{flush:"post"}),{chartOptions:i,series:a,chart:s,click:function(e,i,n){const r=n.dataPointIndex;r<0||(r===l?(l=void 0,t.emit("update:selectedYear",void 0)):(l=r,t.emit("update:selectedYear",r+fn[0])))}}}});Va.render=function(e,t,i,n,r,a){return S(),f("div",null,[v("div",null,y(e.paramId),1),(S(),f(x("apexchart"),{ref:"chart",type:"bar",options:e.chartOptions,series:e.series,onClick:e.click},null,8,["options","series","onClick"]))])};const La=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"DaemmungAltbau4Percent",effectiveSince:2022},{lawId:"ForschungEmissionsfreieZementproduktion",effectiveSince:2023},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024},{lawId:"ForschungEmissionsfreieStahlproduktion",effectiveSince:2024},{lawId:"FernverkehrModernisieren",effectiveSince:2025},{lawId:"NahverkehrModernisieren",effectiveSince:2026},{lawId:"FernverkehrVerbindungenAusbauen",effectiveSince:2026},{lawId:"NahverkehrAusbauen",effectiveSince:2026},{lawId:"LadeinfrastrukturAusbauen",effectiveSince:2026},{lawId:"NahverkehrKostenlos",effectiveSince:2027},{lawId:"DienstwagenPrivilegAbgeschaffen",effectiveSince:2027},{lawId:"ElektromobilitaetFoerdern",effectiveSince:2027},{lawId:"WasserstoffmobilitaetFoerdern",effectiveSince:2027}]}],Oa=(e,t)=>e.lawId===t.lawId&&e.effectiveSince===t.effectiveSince;function Ca(e){const t=M([]),i=M([]),n=M(!1);function r(e,n){var r;const a=t.value,s={lawId:e,effectiveSince:n,sortId:0},l=null==(r=i.value.find((e=>Oa(s,e))))?void 0:r.sortId;s.sortId=null!=l?l:function(...e){const t=e.map((e=>0===e.length?0:e[e.length-1].sortId+1));return 0===t.length?0:Math.max.apply(Math,t)}(a,i.value),t.value=a.filter((t=>t.lawId!=e)).concat(s).sort(((e,t)=>e.sortId-t.sortId))}function a(e){t.value=t.value.filter((t=>t.lawId!=e))}const s=V((()=>{var t;return{name:"Current Game",laws:(null==(t=e.value)?void 0:t.acceptedLaws)||[]}})),u=V((()=>[s.value,...La])),c=V((()=>[...t.value.map((e=>o(l({},e),{cls:i.value.some((t=>Oa(e,t)))?"both":"new"}))),...i.value.filter((e=>!t.value.some((t=>Oa(t,e))))).map((e=>o(l({},e),{cls:"saved"})))].sort(((e,t)=>e.sortId-t.sortId)))),d=Ea(t),h=Ea(i);return{addToSimulation:r,removeFromSimulation:a,toggleInSimulation:function(e,i){const n={lawId:e,effectiveSince:i,sortId:0};t.value.some((e=>Oa(e,n)))?a(e):r(e,i)},loadPreset:function(e){t.value=(e=>e.map(((e,t)=>o(l({},e),{sortId:t}))))(e.laws)},compareActive:n,toggleCompare:function(){n.value=!n.value,n.value?i.value=t.value:i.value=[]},presets:u,simulatedLaws:c,simulation:d,secondSimulation:h}}function Ea(e){return V((()=>{const t=bn(),i=e.value.map((e=>xi(e)));return fn.map((e=>{for(;e>t.currentYear;){t.currentYear++;const{values:n,effectsOfLaws:r}=wn(t,i,t.currentYear);if(t.values=n,e===t.currentYear)return{values:n,effectsOfLaws:r}}return{values:t.values,effectsOfLaws:{}}}))}))}var Fa=m({directives:{clickaway:U},setup(e,t){const i=M(!1);return{menuIsOpen:i,toggle:()=>i.value=!i.value,close:()=>i.value=!1}}});const Ia=k("data-v-06206e01")(((e,t,i,n,r,a)=>{const s=G("clickaway");return N((S(),f("span",{onClick:t[1]||(t[1]=(...t)=>e.toggle&&e.toggle(...t)),class:["menu",{menuIsOpen:e.menuIsOpen}]},[W(e.$slots,"default",{},void 0,!0)],2)),[[s,e.close]])}));Fa.render=Ia,Fa.__scopeId="data-v-06206e01";var Ma=m({directives:{clickaway:U},components:{Citation:ga,PeekChart:Va,Menu:Fa},setup(){const e=ua(),t=V((()=>e.state.game)),i=Ca(t);return l({store:e,game:t,gameYears:fn},i)},data:()=>({lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lastSelected:void 0,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,yearSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1}),methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){e===this.lawSelected?this.lawSelected=void 0:(this.lastSelected="law",this.lawSelected=e)},selectEvent(e){e===this.eventSelected?this.eventSelected=void 0:(this.lastSelected="event",this.eventSelected=e)},selectParam(e){e===this.paramSelected?this.paramSelected=void 0:(this.lastSelected="param",this.paramSelected=e)},selectYear(e){e===this.yearSelected?this.yearSelected=void 0:(this.lastSelected="year",this.yearSelected=e)},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0,this.yearSelected=void 0},dragStart(e,t){const{lawId:i,year:n}=t;e.dataTransfer&&(e.dataTransfer.dropEffect="link",i&&e.dataTransfer.setData("lawId",i),n&&e.dataTransfer.setData("year",n.toString()))},getDropped(e,t,i){if(!e.dataTransfer)return;const n=e.dataTransfer.getData(t);return i.find((e=>e==n))},onDrop(e,t){const{lawId:i,year:n}=t,r=this.getDropped(e,"lawId",Mi),a=this.getDropped(e,"year",this.gameYears);n&&r?this.addToSimulation(r,n):i&&a?this.addToSimulation(i,a):i&&r&&this.removeFromSimulation(r)},rightClick(e,t){this.toggleInSimulation(e,t)}},computed:{startYearOfSelected(){if(!this.lawSelected)return;if(!this.game)return 2021;const e=this.simulatedLaws.find((e=>e.lawId===this.lawSelected));return e?e.effectiveSince:this.game.currentYear},selectedLaw(){return Bi.find((e=>e.id===this.lawSelected))},selectedEvent(){return gn.find((e=>e.id===this.eventSelected))},selectedParam(){return this.paramSelected?Ut[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof He?e:void 0},cParam(){const e=this.selectedParam;return e instanceof Ze?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},currentYear(){return this.yearSelected?this.yearSelected:this.game?this.game.currentYear:2021},effectsOfSelected(){return this.selectedLaw&&this.startYearOfSelected&&this.game?this.selectedLaw.effects(this.game,this.startYearOfSelected,this.currentYear):[]},sortedValues(){return this.game?ha(this.simOfYear.values,this.effectsOfLawInYear,this.effectsOfSelected):[]},sortedLaws(){return this.game?function(e,t,i,n){const r=e.proposedLaws,a=e.acceptedLaws.map((e=>e.lawId)),s=e.rejectedLaws;return n.map((t=>{return{id:t.id,priority:t.priority(e),state:(i=t.id,a.includes(i)?"a":r.includes(i)?"p":s.includes(i)?"r":"x")};var i})).sort(((e,n)=>da(e,n,t,"id")*i)).map((e=>o(l({},e),{priority:e.priority.toFixed(2)})))}(this.game,this.lawsSortCol,this.lawsSortDir,Bi):[]},sortedEvents(){return this.game?(e=this.game,t=this.eventsSortCol,i=this.eventsSortDir,gn.map((t=>({id:t.id,probability:t.probability(e)}))).sort(((e,n)=>da(e,n,t,"id")*i)).map((e=>o(l({},e),{probability:(100*e.probability).toFixed(2)})))):[];var e,t,i},effectsOfLawInYear(){return this.lawSelected?this.simOfYear.effectsOfLaws[this.lawSelected]:this.yearSelected?this.simEffectOfLaw[this.yearSelected-this.gameYears[0]]:void 0},simOfYear(){if(void 0===this.yearSelected&&this.game){const e=this.effectsOfSelected,t=this.game.values;if(void 0===this.lawSelected||0===e.length)return{values:t,effectsOfLaws:{}};const i=Rt(t);Xt({dispatch:()=>{},values:i},e);const n=Object.fromEntries(_t.map((e=>[e,i[e]-t[e]])));return{values:t,effectsOfLaws:{[this.lawSelected]:n}}}{const e=this.yearSelected?this.yearSelected-this.gameYears[0]:0;return this.simulation[e]}},simulatedValues(){return this.simulation.map((e=>e.values))},simEffectOfLaw(){if(this.lawSelected){const e=this.lawSelected;return this.simulation.map((t=>{const i=t.effectsOfLaws[e];return i||Yt}))}return this.compareActive?this.secondSimulation.map(((e,t)=>Object.fromEntries(Object.entries(e.values).map((([e,i])=>[e,this.simulation[t].values[e]-i]))))):fn.map((e=>Yt))},chartData(){return{values:this.simulatedValues,changes:this.simEffectOfLaw}},lawsInYear(){return e=>this.simulatedLaws.filter((t=>t.effectiveSince===e))}}});const Ba=k("data-v-73ca890e");p("data-v-73ca890e");const xa={class:"peekData"},Ua={class:"Menu"},Na=F("  "),Ga=F("  "),_a=F("  "),Ka=F("  "),ja=F("  "),Ja=F("  "),Ha={key:1,class:"Details sidebyside"},Za={class:"Title"},Ya={class:"Description"},Ra=v("div",{class:"SectionHead"},"Details:",-1),$a=v("div",{class:"SectionHead"},"Internes:",-1),Qa=v("div",{class:"SectionHead"},"Referenzen:",-1),qa={key:2,class:"Details sidebyside"},Xa={class:"Title"},es={class:"Description"},ts=v("div",{class:"SectionHead"},"Details:",-1),is=v("div",{class:"SectionHead"},"Internes:",-1),ns=v("div",{class:"SectionHead"},"Referenzen:",-1),rs={key:3,class:"Details sidebyside"},as={class:"Title"},ss={key:0},ls={key:1},os={key:2},us=v("div",{class:"SectionHead"},"Details:",-1),cs=v("div",{class:"SectionHead"},"Internes:",-1),ds=v("div",{class:"SectionHead"},"Referenzen:",-1),hs={class:"paramsHeader"},gs={class:"numbercol"},ms={class:"effcol"},ps={key:5,class:"lawList sidebyside"},bs={class:"priocol"},fs={key:6,class:"eventList sidebyside"},vs={class:"priocol"},ws={key:7,class:"yearList sidebyside"},ys=v("a",{class:"clickable"},"Presets",-1),ks={class:"dropdown"},Ss=F("  ");b();const Ds=Ba(((e,t,i,n,r,a)=>{var s;const l=A("PeekChart"),o=A("Citation"),u=A("Menu");return S(),f("details",xa,[v("summary",{onClick:t[1]||(t[1]=t=>e.unselect()),class:"clickable"},"Peek"),v("div",Ua,[v("a",{onClick:t[2]||(t[2]=t=>e.showCharts=!e.showCharts),class:["clickable",e.showCharts?"selected":""]},"Charts",2),Na,v("a",{onClick:t[3]||(t[3]=t=>e.showDetails=!e.showDetails),class:["clickable",e.showDetails?"selected":""]},"Details",2),Ga,v("a",{onClick:t[4]||(t[4]=t=>e.showParams=!e.showParams),class:["clickable",e.showParams?"selected":""]},"Params",2),_a,v("a",{onClick:t[5]||(t[5]=t=>e.toggleLawList()),class:["clickable",e.showLaws?"selected":""]},"Laws",2),Ka,v("a",{onClick:t[6]||(t[6]=t=>e.toggleEventList()),class:["clickable",e.showEvents?"selected":""]},"Events",2),ja,v("a",{onClick:t[7]||(t[7]=t=>e.showYears=!e.showYears),class:["clickable",e.showYears?"selected":""]},"Years",2),Ja]),e.showCharts?(S(),f("div",{key:0,class:["Details sidebyside",{lawSelected:null!=e.lawSelected}]},[e.paramSelected?(S(),f(l,{key:0,selectedYear:e.yearSelected,"onUpdate:selectedYear":t[8]||(t[8]=t=>e.yearSelected=t),chartData:e.chartData,paramId:e.paramSelected},null,8,["selectedYear","chartData","paramId"])):w("",!0),v(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[9]||(t[9]=t=>e.yearSelected=t),chartData:e.chartData,paramId:"co2emissions"},null,8,["selectedYear","chartData"]),v(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[10]||(t[10]=t=>e.yearSelected=t),chartData:e.chartData,paramId:"popularity"},null,8,["selectedYear","chartData"]),v(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[11]||(t[11]=t=>e.yearSelected=t),chartData:e.chartData,paramId:"stateDebt"},null,8,["selectedYear","chartData"]),v(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[12]||(t[12]=t=>e.yearSelected=t),chartData:e.chartData,paramId:"co2budget"},null,8,["selectedYear","chartData"])],2)):w("",!0),"law"===e.lastSelected&&e.selectedLaw&&e.showDetails?(S(),f("div",Ha,[v("div",Za,y(e.selectedLaw.title),1),v("div",Ya,y(e.selectedLaw.description),1),Ra,v("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,["innerHTML"]),$a,v("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,["innerHTML"]),Qa,(S(!0),f(P,null,z(e.citationsOfLaw,((e,t)=>(S(),f(o,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):w("",!0),"event"===e.lastSelected&&e.selectedEvent&&e.showDetails?(S(),f("div",qa,[v("div",Xa,y(e.selectedEvent.title),1),v("div",es,y(e.selectedEvent.description),1),ts,v("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,["innerHTML"]),is,v("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,["innerHTML"]),ns,(S(!0),f(P,null,z(null==(s=e.selectedEvent)?void 0:s.citations,((e,t)=>(S(),f(o,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):w("",!0),"param"===e.lastSelected&&e.selectedParam&&e.showDetails?(S(),f("div",rs,[v("div",as,y(e.paramSelected)+" ["+y(e.selectedParam.unit)+"]",1),e.wParam?(S(),f("div",ss,"Initial value: "+y(e.wParam.initialValue)+" "+y(e.wParam.unit),1)):w("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(S(),f("div",ls," Should initially be: "+y(e.cParam.shouldInitiallyBe)+" "+y(e.cParam.unit),1)):w("",!0),e.cParam?(S(),f("div",os," Calculation: "+y(e.cParam.valueGetter),1)):w("",!0),us,v("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,["innerHTML"]),cs,v("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,["innerHTML"]),ds,(S(!0),f(P,null,z(e.selectedParam.citations,((e,t)=>(S(),f(o,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):w("",!0),e.showParams?(S(),f("div",{key:4,class:["paramsList sidebyside",{lawSelected:null!=e.lawSelected}]},[v("div",hs,[v("div",null,"Start of law: "+y(e.startYearOfSelected),1),v("div",null,"Current year: "+y(e.currentYear),1)]),v("table",null,[(S(!0),f(P,null,z(e.sortedValues,(t=>(S(),f("tr",{key:t.id,class:{clickable:!0,selected:e.paramSelected===t.id,[t.class]:!0},onClick:i=>e.selectParam(t.id)},[v("td",null,y(t.id),1),v("td",gs,y(t.value),1),v("td",ms,y(t.effect),1),v("td",null,y(t.unit),1)],10,["onClick"])))),128))])],2)):w("",!0),e.showLaws?(S(),f("div",ps,[v("table",null,[v("tr",null,[v("th",{onClick:t[13]||(t[13]=t=>e.sortLaws("state")),class:"clickable"},"S"),v("th",{onClick:t[14]||(t[14]=t=>e.sortLaws("id")),class:"clickable"},"ID"),v("th",{onClick:t[15]||(t[15]=t=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(S(!0),f(P,null,z(e.sortedLaws,(i=>(S(),f("tr",{key:i.id,class:{clickable:!0,selected:e.lawSelected===i.id,[i.state]:!0},onClick:t=>e.selectLaw(i.id),draggable:"true",onDragstart:t=>e.dragStart(t,{lawId:i.id}),onDrop:_((t=>e.onDrop(t,{lawId:i.id})),["prevent"]),onDragover:t[16]||(t[16]=_((()=>{}),["prevent"])),onDragenter:t[17]||(t[17]=_((()=>{}),["prevent"]))},[v("td",null,y(i.state),1),v("td",null,y(i.id),1),v("td",bs,y(i.priority),1)],42,["onClick","onDragstart","onDrop"])))),128))])])):w("",!0),e.showEvents?(S(),f("div",fs,[v("table",null,[v("tr",null,[v("th",{onClick:t[18]||(t[18]=t=>e.sortEvents("id")),class:"clickable"},"ID"),v("th",{onClick:t[19]||(t[19]=t=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(S(!0),f(P,null,z(e.sortedEvents,(t=>(S(),f("tr",{key:t.id,class:{clickable:!0,selected:e.eventSelected===t.id},onClick:i=>e.selectEvent(t.id)},[v("td",null,y(t.id),1),v("td",vs,y(t.probability),1)],10,["onClick"])))),128))])])):w("",!0),e.showYears?(S(),f("div",ws,[v("div",null,[v(u,null,{default:Ba((()=>[ys,v("ul",ks,[(S(!0),f(P,null,z(e.presets,(t=>(S(),f("li",{key:t.name,class:"clickable",onClick:i=>e.loadPreset(t)},y(t.name),9,["onClick"])))),128))])])),_:1}),Ss,v("a",{class:["clickable",e.compareActive?"selected":""],onClick:t[20]||(t[20]=t=>e.toggleCompare())},"Compare",2)]),v("table",null,[(S(!0),f(P,null,z(e.gameYears,(i=>(S(),f(P,{key:i},[v("tr",{class:{clickable:!0,selected:e.yearSelected===i},onClick:t=>e.selectYear(i),draggable:"true",onDragstart:t=>e.dragStart(t,{year:i}),onDrop:_((t=>e.onDrop(t,{year:i})),["prevent"]),onDragover:t[21]||(t[21]=_((()=>{}),["prevent"])),onDragenter:t[22]||(t[22]=_((()=>{}),["prevent"]))},[v("th",null,y(i),1)],42,["onClick","onDragstart","onDrop"]),(S(!0),f(P,null,z(e.lawsInYear(i),(({lawId:n,cls:r})=>(S(),f("tr",{key:n,class:{clickable:!0,selected:e.lawSelected===n,[r]:!0},onClick:t=>e.selectLaw(n),onContextmenu:_((t=>e.rightClick(n,i)),["right","prevent"]),draggable:"true",onDragstart:t=>e.dragStart(t,{lawId:n}),onDrop:_((t=>e.onDrop(t,{year:i})),["prevent"]),onDragover:t[23]||(t[23]=_((()=>{}),["prevent"])),onDragenter:t[24]||(t[24]=_((()=>{}),["prevent"]))},[v("td",null,y(n),1)],42,["onClick","onContextmenu","onDragstart","onDrop"])))),128))],64)))),128))])])):w("",!0)])}));Ma.render=Ds,Ma.__scopeId="data-v-73ca890e";var Ps=m({components:{PeekInside:Ma},setup:()=>({store:ua(),devMode:"true"===localStorage.getItem("devMode")}),methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,i=Math.min(e/800,t/1e3),n=(t-1e3*i)/2;document.documentElement.style.setProperty("--scale",`${i}`),document.documentElement.style.setProperty("--translateX",`${n}px`)}},mounted(){setTimeout(this.updateStyle,0),window.addEventListener("resize",this.updateStyle)}});const zs={class:"perspective"},As={class:"peek"};Ps.render=function(e,t,i,n,r,a){const s=A("router-view"),l=A("PeekInside");return S(),f(P,null,[v("div",zs,[v(s)]),v("div",As,[e.devMode?(S(),f(l,{key:0})):w("",!0)])],64)};const Ws=K(Ps);Ws.use(ca,oa),Ws.use(ta),Ws.mount("#app");
