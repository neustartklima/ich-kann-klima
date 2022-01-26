var Nt=Object.defineProperty,Ut=Object.defineProperties;var Kt=Object.getOwnPropertyDescriptors;var Ye=Object.getOwnPropertySymbols;var Ht=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable;var Ae=(e,t,n)=>t in e?Nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))Ht.call(t,n)&&Ae(e,n,t[n]);if(Ye)for(var n of Ye(t))jt.call(t,n)&&Ae(e,n,t[n]);return e},G=(e,t)=>Ut(e,Kt(t));var O=(e,t,n)=>(Ae(e,typeof t!="symbol"?t+"":t,n),n);import{D as Ze,a as ye,s as Jt,b as Re,v as Yt,d as I,r as X,c as y,o as h,e as p,f as o,t as b,w as J,g as D,n as B,h as Oe,u as W,p as ke,i as Se,F as U,j as Q,k as q,l as T,m as ve,q as Qe,x as Zt,T as Rt,y as N,z as qe,A as xe,B as re,C as Qt,E as qt,G as Xt,H as en,I as tn,V as nn,J as Xe,K as rn,L as sn}from"./vendor.1698ef2a.js";const an=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};an();const on={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};class _e{constructor(t){O(this,"lux");t instanceof Ze?this.lux=t.setLocale("de-DE").setZone("Europe/Berlin"):this.lux=Ze.fromISO(t,{zone:"Europe/Berlin",locale:"de-DE"})}static durationBetween(t,n){return new Te(n.lux.diff(t.lux,["months"]))}plus(t){return new _e(this.lux.plus(t.lux))}getYear(){return this.lux.get("year")}toLocaleString(){return this.lux.toLocaleString(on)}toMonthString(){return this.lux.toLocaleString({month:"long",year:"numeric"})}toJSON(){return this.lux.toJSON()}}class Te{constructor(t){O(this,"lux");t instanceof ye?this.lux=t:typeof t=="string"?this.lux=ye.fromISO(t,{locale:"de-DE"}):this.lux=ye.fromObject(t)}toMonthsString(){const t=this.lux.as("months");return t===1?"1 Monat":t+" Monate"}lessThan(t){return this.lux<t.lux}}function ce(e){return new _e(e)}function Ve(e){return new Te(e)}function ln(e,t){return _e.durationBetween(e,t)}function cn(e){return new Te(ye.fromDurationLike({month:e}))}function un(e,t){return e.lux<t.lux?t:e}const de=2021,et="2021-01-01",tt=2050,nt=Ve("P3M"),dn=Ve("P3M"),rt=6,it=.6;function V(e){return e}const be={newYear:2,timesUp:3,finanzKollaps:4,wahlVerloren:5,hitzehoelle:6};function st(e,t){const n=e.events.filter(r=>t.includes(r.id)).reduce((r,i)=>un(r,ce(i.occuredIn)),ce(et));return ln(n,ce(e.currentDate))}function ie(e,t,n){return st(e,[t.id]).lessThan(Ve(n))}var hn=V({title:"Abstandsregeln f\xFCr Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erh\xF6ht wird. Das f\xFChrte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply(){return[]}});const fn=new Jt.exports.Converter;function at(e){return e>0?[...Array(e)].map((t,n)=>n):[]}function mn(e,t){const n=e-t-1;return[...at(t),Math.max(t,n),...at(n).reverse()]}function s(e,...t){let n=e.map((i,a)=>i+(t[a]||"")).join("").split(`
`);n[0].length===0&&n.shift();const r=n[0].match(/^(\s+)/);return r&&!n.filter(i=>i.trim()).some(i=>!i.startsWith(r[1]))&&(n=n.map(i=>i.replace(r[1],""))),fn.makeHtml(n.join(`
`))}function Ie(e){return t=>!e(t)}function ot(e){return Object.entries(e).map(([t,n])=>G(A({},n),{id:t}))}function lt(e,t){const n=e.value-t.value;return r=>{const i=e.result*(r-t.value)/n,a=t.result*(r-e.value)/n;return i-a}}const gn=new Intl.DateTimeFormat("de-DE");class F{constructor(t){O(this,"url");O(this,"title");O(this,"publisher");O(this,"authors");O(this,"date");O(this,"comment");O(this,"internalComment");O(this,"localCopy");O(this,"referringUrl");O(this,"archiveUrl");O(this,"archiveNotPossible");this.url=new URL(t.url),this.title=t.title,this.publisher=t.publisher,this.authors=t.authors,this.date=t.date?new Date(t.date):void 0,this.comment=t.comment,this.internalComment=t.internalComment,this.localCopy=t.localCopy,this.referringUrl=t.referringUrl?new URL(t.referringUrl):void 0,this.archiveUrl=t.archiveUrl?new URL(t.archiveUrl):void 0,this.archiveNotPossible=t.archiveNotPossible}dateString(){const t=this.date;return t?" ("+gn.format(t)+")":""}toString(){const t=this.authors?this.authors+this.dateString():void 0,n=this.title?'"'+this.title+'"':void 0;return[t,n,this.url,this.publisher].filter(r=>r).join(", ")}}function x(e){const t=e.publisher||e.authors,n=t!=null?t+": ":"",r=e.title||e.url.toString(),i=e.url.toString();return`[[${n}${r}](${i})]`}const pn=e=>e.map(t=>t.toString()).join("; "),vn=new F({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),te=new F({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),De=new F({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"});new F({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineral\xF6lsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"});new F({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile f\xFCr wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""});const ze=new F({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),bn=new F({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schl\xFCsselergebnisse der Studie des Wuppertal Instituts f\xFCr Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${x(ze)}.`});ze.comment=s`Zusammengefasst in ${x(bn)}.`;const K=new F({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahresch\xE4tzung der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),wn=new F({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),Ce=new F({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enth\xE4lt CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] f\xFCr mehrere Verkehrsmittel"});new F({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""});const ct=new F({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Stra\xDFeng\xFCterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),se=new F({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enth\xE4lt Personenkilometer-Jahreswerte f\xFCr mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"});new F({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung \xD6PNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""});const $e=new F({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),yn=new F({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new F({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren f\xFCr Fernw\xE4rme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const ut=new F({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),kn=new F({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),dt=new F({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle w\xE4re besser."}),Sn=new F({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bev\xF6lkerung nach Nationalit\xE4t und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),_n=new F({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur f\xFCr Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),Dn=new F({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische \xC4mter des Bundes und der L\xE4nder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new F({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});new F({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgem\xE4\xDF - Interview mit Prof. Stefan G\xF6ssling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""});const zn=new F({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),ht=new F({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),Cn=new F({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),ft=new F({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten f\xFCr die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class mt{constructor(t){O(this,"unit");O(this,"citations");O(this,"details");O(this,"internals");this.unit=t.unit,this.citations=t.citations?t.citations:[],this.details=t.details?t.details:"",this.internals=t.internals?t.internals:""}citationsDesc(){return pn(this.citations)}}const En={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class k extends mt{constructor(t){super(t);O(this,"writable",!0);O(this,"initialValue");O(this,"applyBounds");this.initialValue=t.initialValue,this.applyBounds=t.applyBounds||En[t.unit]}}class j extends mt{constructor(t){super(t);O(this,"writable",!1);O(this,"valueGetter");O(this,"shouldInitiallyBe");this.valueGetter=t.valueGetter,this.shouldInitiallyBe=t.shouldInitiallyBe}}const Wn=new k({unit:"MioTons",initialValue:6700,citations:[vn],details:s`

  `,internals:s`

  `}),Pn=new k({unit:"MioTons",initialValue:186.793,citations:[K],details:s`

  `,internals:s`

  `}),Fn=new j({unit:"MioTons",valueGetter(e){return e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4},shouldInitiallyBe:159.696,citations:[K,ct],details:s`

  `,internals:s`
    ${x(K)}: 159.696 as MioTons

    ${x(ct)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Ln=new j({unit:"MioTons",valueGetter(e){return e.co2emissionsStreetVehicles+e.publicLocalCapacity*65/1e6+e.publicNationalCapacity*32/1e6+e.airDomesticUsage*222/1e6+1.641},citations:[Ce,K],details:s`

  `,internals:s`
    ${x(Ce)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${x(K)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${x(K)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${x(K)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),An=new j({unit:"MioTons",valueGetter(e){return e.buildingsSourceBio*0+e.buildingsSourceGas*.247+e.buildingsSourceOil*.318+e.buildingsSourceTele*.16},citations:[K,$e],details:s`

  `,internals:s`
    TODO: #91 Gibt es hier bessere Quellen?

    ${x($e)}: 247g CO2 pro kWh Erdgas.

    ${x($e)}: 318g CO2 pro kWh Erdöl.

    ${x(yn)}: 160g CO2 pro kWh Fernwärme.

    ${x(K)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),On=new k({unit:"MioTons",initialValue:67.936,citations:[K],details:s`

  `,internals:s`

  `}),xn=new k({unit:"MioTons",initialValue:9.243,citations:[K],details:s`

  `,internals:s`

  `}),Tn=new j({unit:"MioTons",valueGetter(e){return e.electricityGas*.399+e.electricitySolar*.058+e.electricityWind*.005+e.electricityWater*.02+e.electricityHardCoal*.835+e.electricityBrownCoal*1.137+e.electricityBiomass*.03+e.electricityNuclear*.005},citations:[ut,K],details:s`

  `,internals:s`
    ${x(ut)}:
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
    - Diskrepanz zu ${x(kn)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${x(K)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),Vn=new j({unit:"MioTons",valueGetter(e){return e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers},details:s`

  `,internals:s`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${x(K)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[wn]}),In=new k({unit:"TWh",initialValue:480.54,citations:[te],details:s`

  `,internals:s`

  `}),$n=new k({unit:"Percent",initialValue:50,citations:[],details:s`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:s`

  `}),Bn=new k({unit:"TWh",initialValue:51.42,citations:[te],details:s`

  `,internals:s`

  `}),Mn=new k({unit:"TWh",initialValue:131.85,citations:[te],details:s`

  `,internals:s`

  `}),Gn=new k({unit:"TWh",initialValue:6,citations:[te],details:s`

  `,internals:s`

  `}),Nn=new k({unit:"Percent",initialValue:100,citations:[Cn],details:s`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),Un=new k({unit:"TWh",initialValue:14.99,citations:[te],details:s`

  `,internals:s`

  `}),Kn=new k({unit:"TWh",initialValue:43.19,citations:[te],details:s`

  `,internals:s`

  `}),Hn=new k({unit:"TWh",initialValue:60.91,citations:[te],details:s`

  `,internals:s`

  `}),jn=new k({unit:"TWh",initialValue:35.46,citations:[te],details:s`

  `,internals:s`

  `}),Jn=new k({unit:"TWh",initialValue:82.13,citations:[te],details:s`

  `,internals:s`

  `}),Yn=new j({unit:"TWh",valueGetter(e){return e.electricityHardCoal+e.electricityBrownCoal},details:s`

  `,internals:s`

  `}),Zn=new j({unit:"TWh",valueGetter(e){return e.electricityDemand-e.electricitySolar-e.electricityWind-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear},details:s`

  `,internals:s`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),Rn=new k({unit:"GramPerPsgrKm",initialValue:160,citations:[Ce],details:s`

  `,internals:s`
    ${x(Ce)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),Qn=new k({unit:"MioPsgrKm",initialValue:917e3,citations:[se],details:s`

  `,internals:s`

  `}),qn=new k({unit:"Percent",initialValue:.5,citations:[dt],details:s`

  `,internals:s`
    Die verschiedenen Zahlen in ${x(dt)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),Xn=new k({unit:"MioPsgrKm",initialValue:112600,citations:[se],details:s`

  `,internals:s`

  `}),er=new k({unit:"MioPsgrKm",initialValue:112600,citations:[se],details:s`

  `,internals:s`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),tr=new k({unit:"MioPsgrKm",initialValue:67300,citations:[se],details:s`

  `,internals:s`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),nr=new k({unit:"MioPsgrKm",initialValue:67300,citations:[se],details:s`

  `,internals:s`
Siehe \`publicLocalCapacity\`.
  `}),rr=new k({unit:"MioPsgrKm",initialValue:10100,citations:[se],details:s`

  `,internals:s`

  `}),ir=new k({unit:"MioPsgrKm",initialValue:61700,citations:[se],details:s`

  `,internals:s`

  `}),sr=new j({unit:"MioPsgrKm",valueGetter(e){return e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage},shouldInitiallyBe:1168700,citations:[se],details:s`

  `,internals:s`

  `}),ar=new k({unit:"TWh",initialValue:226,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),or=new k({unit:"TWh",initialValue:544,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),lr=new j({unit:"TWh",valueGetter(e){return e.buildingsPrivateDemand+e.buildingsIndustryDemand},shouldInitiallyBe:770,citations:[],details:s`

  `,internals:s`
    TODO: #78 Quelle ${x(ft)} gibt diese Zahlen nicht her.
  `}),cr=new k({unit:"TWh",initialValue:130,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),ur=new k({unit:"TWh",initialValue:219,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),dr=new k({unit:"TWh",initialValue:58,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),hr=new j({unit:"TWh",valueGetter(e){return e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele)},citations:[],details:s`

  `,internals:s`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${x(ft)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),fr=new k({unit:"Percent",initialValue:50,citations:[],details:s`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:s`

  `}),mr=new k({unit:"TsdPeople",initialValue:83155.031,citations:[Sn],details:s`

  `,internals:s`
Anfangswert ist der Stand 31.12.2020.
  `}),gr=new k({unit:"TsdPeople",initialValue:2695,citations:[_n],details:s`

  `,internals:s`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),pr=new k({unit:"MrdEuro",initialValue:3332,citations:[Dn],details:s`

  `,internals:s`
Anfangswert ist das BIP 2020.
  `}),vr=new k({unit:"MrdEuro",initialValue:1899,citations:[],details:s`

  `,internals:s`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),Y={co2budget:Wn,co2emissionsIndustry:Pn,co2emissionsStreetVehicles:Fn,co2emissionsMobility:Ln,co2emissionsAgriculture:On,co2emissionsBuildings:An,co2emissionsOthers:xn,co2emissionsEnergy:Tn,co2emissions:Vn,electricityDemand:In,electricityGridQuality:$n,electricitySolar:Bn,electricityWind:Mn,electricityWindOnshoreMaxNew:Gn,electricityWindEfficiency:Nn,electricityWater:Un,electricityBiomass:Kn,electricityNuclear:Hn,electricityHardCoal:jn,electricityBrownCoal:Jn,electricityCoal:Yn,electricityGas:Zn,carEmissionFactor:Rn,carUsage:Qn,carRenewablePercentage:qn,publicLocalUsage:Xn,publicLocalCapacity:er,publicNationalUsage:tr,publicNationalCapacity:nr,airDomesticUsage:rr,airIntlUsage:ir,passengerTransportUsage:sr,buildingsIndustryDemand:ar,buildingsPrivateDemand:or,buildingsDemand:lr,buildingsSourceBio:cr,buildingsSourceOil:ur,buildingsSourceTele:dr,buildingsSourceGas:hr,popularity:fr,numberOfCitizens:mr,unemployment:gr,gdp:pr,stateDebt:vr},gt=Object.entries(Y).filter(e=>e[1]instanceof k).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),pt=Object.entries(Y).filter(e=>e[1]instanceof j).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),br=Object.keys(gt),vt=Object.keys(Y);class bt extends k{constructor(t,n){super(t);O(this,"name");this.name=n}}const wr=Object.entries(gt).map(e=>new bt(e[1],e[0]));class wt extends j{constructor(t,n){super(t);O(this,"name");this.name=n}}Object.entries(pt).map(e=>new wt(e[1],e[0]));const yt=Object.entries(Y).map(e=>e[1]instanceof k?new bt(e[1],e[0]):new wt(e[1],e[0])),he=wr.reduce((e,t)=>(e[t.name]=t.initialValue,e),{}),kt=yt.reduce((e,t)=>(e[t.name]=0,e),{});function fe(e){const t=A({},e);return Object.entries(pt).forEach(n=>Object.defineProperty(t,n[0],{enumerable:!0,get:()=>n[1].valueGetter(t)})),t}function yr(e){return A({},e)}function ae(e,t){return{type:"dispatch",condition:!0,if(n){return this.condition=n,this},apply(n){this.condition&&n.dispatch(e,t)}}}function d(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(t){return this.percent=t,this},byValue(t){return this.value=t,this},setValue(t){return this.absolute=t,this},if(t){return this.condition=t,this},getOldNew(t){const n=this.name,r=t[n];if(!this.condition)return{oldVal:r,newVal:r};const i=Y[n],a=this.absolute!=null?this.absolute:r+(this.value||r*this.percent/100),l=i.applyBounds(a);return{oldVal:r,newVal:l}},getChange(t){if(!this.condition)return 0;const{oldVal:n,newVal:r}=this.getOldNew(t);return r-n},apply(t){if(t.values!=null&&this.condition){const{newVal:n}=this.getOldNew(t.values);t.values[this.name]=n}}}}function Z(e,t){if(Y[e].unit!=Y[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(n){return this.percent=n,this},byValue(n){return this.value=n,this},if(n){return this.condition=n,this},getEffect(n){const r=n[this.to],i=n[this.from];if(!this.condition)return{oldTo:r,oldFrom:i,newTo:r,newFrom:i};const a=Y[this.to],l=Y[this.from],f=this.value||r*this.percent/100,c=a.applyBounds(r+f)-r,g=-l.applyBounds(i-c)+i,S=r+g,L=i-g;return{oldTo:r,newTo:S,oldFrom:i,newFrom:L}},apply(n){if(n.values!=null&&this.condition){const{newTo:r,newFrom:i}=this.getEffect(n.values);n.values[this.to]=r,n.values[this.from]=i}}}}function Ee(e,t){t.filter(n=>n.condition).forEach(n=>n.apply(e))}var kr=V({title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply(){return[ae("gameOver")]},probability(e){return e.acceptedLaws.find(n=>n.lawId==="KernenergienutzungVerlaengern")?.5:0},laws:[],citations:[],details:s`

  `,internals:s`

  `});const Sr=e=>({time:nt,text:`Braucht ${nt.toMonthsString()}.`});function z(e,t="Braucht {months}."){const n=cn(e),r=t.replace(/{months}/g,n.toMonthsString());return{time:n,text:r}}function _(e){return e}function C(e,t,n){const r=n-e,i=t-e;if(i===0)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return r/i*100}function Be(e,t){const n=t.value-e.value,r=n/Math.abs(n),i=r*e.value;return a=>n===0||r*a<=i?e.result:lt(e,t)(a)}function w(e,t,n=0){if(!oe.map(r=>r.id).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some(r=>r.lawId===t&&r.effectiveSince<=e.currentYear+n)}function ne(e){const t=e.values;return t.electricityWind/t.electricityDemand*100}function H(e){return(e.values.electricityWind+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}function _r(e,t){const n=e.values,r=Y[t].initialValue,i=n.electricityGridQuality,a=n.electricityDemand;return lt({value:50,result:r},{value:100,result:a})(i)}function ue(e,t,n){const r=e.values,i=r.electricityCoal+r.electricityGas;if(i<=0)return[];const a=r.electricityHardCoal/i,l=r.electricityBrownCoal/i,f=r.electricityGas/i;return[Z(t,"electricityHardCoal").if(a>0).byValue(a*n),Z(t,"electricityBrownCoal").if(l>0).byValue(l*n),d(t).if(f>0).byValue(f*n)]}function We(e,t,n,r){const i=w(e,"WindkraftVereinfachen")?0:5;if(e.currentYear<r+i)return[];const a=e.values,f=(Math.min(t,a.electricityWindOnshoreMaxNew)+n)*a.electricityWindEfficiency/100,c=a.electricityWind,g=Math.min(c+f,_r(e,"electricityWind"))-c;return ue(e,"electricityWind",g)}function Me(e,t,n,r){const i=r(H(e)),a=r(e.values.carRenewablePercentage);return[d("stateDebt").byValue((25-t)/1e3*e.values.co2emissions),d("popularity").byValue(i+a),d("co2emissionsIndustry").byPercent(n),d("co2emissionsAgriculture").byPercent(n),d("co2emissionsOthers").byPercent(n),Z("electricityBrownCoal","electricityWind").byPercent(.7*n),Z("electricityHardCoal","electricityWind").byPercent(.7*n),Z("electricityBrownCoal","electricitySolar").byPercent(.3*n),Z("electricityHardCoal","electricitySolar").byPercent(.3*n),Z("buildingsSourceOil","buildingsSourceBio").byPercent(n),Z("carUsage","publicNationalUsage").byPercent(.5*n),Z("carUsage","publicLocalUsage").byPercent(.5*n)]}var Dr=_({title:"Abstandsregeln f\xFCr Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return z(12,"BIs werden es Dir schwer machen. {months}!")},effects(e,t,n){const r=w(e,"WindkraftVereinfachen")?0:5;return[d("popularity").byValue(-40).if(t===n),d("electricityWindOnshoreMaxNew").setValue(1e3).if(n>=t+r)]},priority(e){return w(e,"AbstandsregelnFuerWindkraftLockern")?C(80,25,ne(e)):0}}),zr=_({title:"Abstandsregeln f\xFCr Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln f\xFCr Windkraftanlagen sowie Bauerlaubniss in W\xE4ldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return z(6,"Das schaffst Du in {months}n.")},effects(e,t,n){const r=w(e,"WindkraftVereinfachen")?0:5;return[d("popularity").byValue(-3).if(t===n),d("electricityWindOnshoreMaxNew").setValue(30).if(n>=t+r)]},priority(e){return w(e,"AbstandsregelnFuerWindkraftWieBisher")?C(70,27,ne(e)):w(e,"AbstandsregelnFuerWindkraftAbschaffen")?C(30,100,ne(e)):0},citations:[],details:s`

  `,internals:s`
    # Happy Path 2

    # Priorität

    Zu Beginn und wenn "WieBisher" ausgewählt:

    - 0% bei einem Anteil von Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert

    Wenn Abstandsregeln abgeschafft wurden:

    - 0% bei einem Anteil von Windstrom von 30%.
    - 100% bei einem Anteil von Windstrom von 100%.
  `}),Cr=_({title:"Abstandsregeln f\xFCr Windkraft versch\xE4rfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngeb\xE4uden im Innenbereich muss das Zehnfache der Gesamth\xF6he der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return z(1,"Dauert nur einen Monat.")},effects(e,t,n){return[d("popularity").byValue(5).if(t===n),d("electricityWindOnshoreMaxNew").setValue(.42)]},priority(e){return w(e,"AbstandsregelnFuerWindkraftWieBisher")?C(0,100,ne(e)):0}}),Er=_({title:"Abstandsregeln f\xFCr Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem \xFCber Abst\xE4nde zwischen den Windkraftanlagen und Wohngeb\xE4uden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return z(3,"Wie aussitzen: {months}.")},effects(e,t,n){const r=w(e,"WindkraftVereinfachen")?0:5;return[d("electricityWindOnshoreMaxNew").setValue(6).if(n>=t+r)]},priority(e){return w(e,"AbstandsregelnFuerWindkraftLockern")?C(30,100,ne(e)):w(e,"AbstandsregelnFuerWindkraftVerschaerfen")?C(70,27,ne(e)):0}}),Wr=_({title:"Ausschreibungsverfahren f\xFCr Windkraft verachtfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return z(5)},effects(e,t,n){return[d("popularity").byValue(-20).if(t===n),d("unemployment").byValue(-100).if(t===n),...We(e,55.2,9.6,t)]},priority(e){return w(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?C(100,50,H(e)):0}}),Pr=_({title:"Ausschreibungsverfahren f\xFCr Windkraft verdoppeln",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return z(2)},effects(e,t,n){return[d("popularity").byValue(-1).if(t===n),d("unemployment").byValue(-20).if(t===n),...We(e,13.8,2.4,t)]},priority(e){return w(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?C(100,50,H(e)):w(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?C(40,100,H(e)):0}}),Fr=_({title:"Ausschreibungsverfahren f\xFCr Windkraft vervierfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return z(4)},effects(e,t,n){return[d("popularity").byValue(-2).if(t===n),d("unemployment").byValue(-100).if(t===n),...We(e,27.6,4.8,t)]},priority(e){return w(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?C(100,50,H(e)):w(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?C(0,100,H(e)):0},citations:[],details:s`
    Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung
    von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen
    Subventionierung umsetzen kann bekommt den Zuschlag.
  `,internals:s`
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
  `}),Lr=_({title:"Ausschreibungsverfahren f\xFCr Windkraft wie zu Beginn",description:"Windkraft Betreiber k\xF6nnen sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstm\xF6glichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return z(8)},effects(e,t,n){return[...We(e,6.9,1.2,t)]},priority(e){return w(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?C(60,100,H(e)):0}}),Ar=_({title:"Automatische Anpassungen einiger Sektoren",description:"Mobilit\xE4t, Industrie, Geb\xE4ude und Landwirtschaft nutzen automatisch regenerative Energiequellen, sobald sie zur Verf\xFCgung stehen.",labels:["initial"],effects(e,t,n){if(H(e)<70)return[];Y.co2emissionsOthers;const r=d("co2emissionsIndustry").byPercent(-20),a=r.getChange(e.values)/-.835;return[d("carRenewablePercentage").byValue(10),d("electricityDemand").byValue(22),r,d("electricityDemand").byValue(a),Z("buildingsSourceBio","buildingsSourceOil").byValue(10),Z("electricityDemand","buildingsSourceOil").byValue(10),Z("buildingsSourceBio","buildingsSourceTele").byValue(5),d("co2emissionsAgriculture").byValue(-10),d("co2emissionsOthers").byValue(-1)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`
    Dieses Gesetz läuft dauerhaft mit und soll kompensieren, dass es für diese Sektoren noch nicht genügend Gesetze gibt.
  `}),Or=_({title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effort(e){return e.values.popularity>=50?z(6,"Normal dauert das 12 Monate, aber bei Deiner Beliebtheit nur {months}."):z(12)},effects(){return[d("stateDebt").byValue(-37),d("electricityHardCoal").byPercent(-10),d("electricityBrownCoal").byPercent(-5),d("electricityWind").byValue(5),d("electricitySolar").byValue(3),d("electricityWater").byValue(.5)]},priority(e){return C(tt,de,e.currentYear)}}),xr=_({title:"Erforschung und Umsetzung dezentraler Stromerzeugung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur f\xFCr die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return z(1)},effects(e,t,n){const r=n<t+5,i=n>=t+1;return[d("stateDebt").byValue(2).if(r),d("electricityGridQuality").byValue(1).if(i)]},priority(e){const t=e.values;return C(80,45,t.electricityGridQuality)},citations:[],details:s`

  `,internals:s`
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
  `}),Tr=_({title:"Forschung und Entwicklung zur Stromspeicherung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return z(1)},effects(e,t,n){const r=n<t+5,i=n>=t+3;return[d("stateDebt").byValue(2).if(r),d("electricityGridQuality").byValue(.2).if(i)]},priority(e){const t=e.values;return C(80,45,t.electricityGridQuality)},citations:[],details:s`

  `,internals:s`
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
  `}),Vr=_({title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,n){const i={2021:60.45,2022:30.21}[n]||0;return[d("electricityNuclear").setValue(i)]},priority(e){return 0}});const St=fe(he).electricityGas;var Ir=_({title:"Kernenergienutzung verl\xE4ngern",description:"Kernkraftwerke l\xE4nger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effort(e){return z(8)},effects(){return[d("electricityNuclear").setValue(104.3),d("stateDebt").byValue(-2.5),d("popularity").byValue(-4)]},priority(e){return C(St,1.1*St,e.values.electricityGas)}}),$r=_({title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effort(e){return z(11)},effects(e,t,n){const r=n-t,i=r<18?4.3/18:0,a=2.5,l=20,f=60,c=(10-r)/55,g=Math.max((l+f/2)*c,0);return[d("electricityHardCoal").setValue(0),d("electricityBrownCoal").setValue(0),d("stateDebt").byValue(-i+a),d("unemployment").byValue(g)]},priority(e){return e.values.electricityCoal/e.values.electricityDemand<=.1?0:C(1e4,0,e.values.unemployment)},citations:[],details:s`

  `,internals:s`
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
  `}),Br=_({title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren f\xFCr den Ausbau des Stromnetzes",effort(e){return z(2)},effects(e,t,n){return[d("popularity").byValue(-3).if(t===n),d("electricityGridQuality").byValue(1)]},priority(e){return C(70,27,ne(e))},citations:[],details:s`

  `,internals:s`
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
  `}),Mr=_({title:"Netzausbau f\xF6rdern",description:"Ausbau des Stromnetzes mit Steuermitteln f\xF6rdern",effort(e){return z(3)},effects(e,t,n){return[d("popularity").byValue(-1).if(t===n),d("stateDebt").byValue(2),d("electricityGridQuality").byValue(5).if(w(e,"NetzausbauErleichtern"))]},priority(e){return C(70,27,ne(e))},citations:[],details:s`

  `,internals:s`
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
  `}),Gr=_({title:"Solar auf neuen D\xE4chern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die D\xE4cher.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return z(3)},effects(e,t,n){return[d("popularity").byValue(-3).if(t===n),...ue(e,"electricitySolar",2)]},priority(e){return w(e,"SolarstromFoerderungWieZuBeginn")?C(100,30,H(e)):0},details:s`

  `,internals:s`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `}),Nr=_({title:"Solarstrom F\xF6rderung x2",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return z(4)},effects(e,t,n){return[d("popularity").byValue(10).if(t===n),d("unemployment").byValue(-31e3).if(t===n),...ue(e,"electricitySolar",10)]},priority(e){return w(e,"SolarstromFoerderungWieZuBeginn")?C(100,30,H(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),Ur=_({title:"Solarstrom F\xF6rderung x4",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return z(3)},effects(e,t,n){return[d("popularity").byValue(20).if(t===n),d("unemployment").byValue(-89e3).if(t===n),...ue(e,"electricitySolar",20)]},priority(e){return w(e,"SolarstromFoerdernx2")?C(100,30,H(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:s`
    # Happy path 10

    ${x(ze)}
  `,citations:[ze]}),Kr=_({title:"Solarstrom F\xF6rderung x8",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return z(2)},effects(e,t,n){return[d("popularity").byValue(-10).if(t===n),d("unemployment").byValue(-209e3).if(t===n),...ue(e,"electricitySolar",40)]},priority(e){return w(e,"SolarstromFoerdernx4")?C(100,30,H(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `}),Hr=_({title:"Solarstrom F\xF6rderung einstellen",description:"Mittlere bis gro\xDFe Solaranlagen sollten sich selbst tragen. Die F\xF6rderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return z(5)},effects(e,t,n){return[...ue(e,"electricitySolar",2)]},priority(e){return w(e,"SolarstromFoerderungWieZuBeginn")?C(0,100,H(e)):0},details:s`

  `}),jr=_({title:"Solarstrom F\xF6rderung wie zu Beginn",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen wie bisher",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return z(9)},effects(e,t,n){return[...ue(e,"electricitySolar",5)]},priority(e){return w(e,"SolarstromFoerdernx8")?C(70,100,H(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),Jr=_({title:"Stromspeicherung erleichtern",description:"B\xFCrokratische H\xFCrden f\xFCr den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effort(e){return z(3)},effects(e,t,n){return[d("electricityGridQuality").byValue(.2)]},priority(e){const t=e.values;return C(80,45,t.electricityGridQuality)},citations:[],details:s`

  `,internals:s`
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
  `}),Yr=_({title:"Stromspeicherung f\xF6rdern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln f\xF6rdern. 2 Mrd \u20AC pro Jahr.",effort(e){return z(7)},effects(e,t,n){const r=w(e,"StromspeicherungErleichtern")?0:5,i=n>=t+r,a=w(e,"ForschungUndEntwicklungStromspeicherung",3);return[d("stateDebt").byValue(1),d("popularity").byValue(.2).if(i),d("stateDebt").byValue(1).if(i),d("electricityGridQuality").byValue(2).if(i),d("electricityGridQuality").byValue(2).if(a),d("electricityGridQuality").byValue(2).if(i&&a)]},priority(e){const t=e.values;return C(80,45,t.electricityGridQuality)},citations:[],details:s`

  `,internals:s`
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
  `}),Zr=_({title:"Windkraft vereinfachen",description:"Genehmigungen f\xFCr Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effort(e){return z(4,"Die Bundesl\xE4nder m\xFCssen mit ins Boot geholt werden. Das dauert {months}.")},effects(e,t,n){return[]},priority(e){return C(80,27,ne(e))},citations:[],details:s`

  `,internals:s`
    # Happy Path 1.3

    # Folgen

    - Popularität unverändert: Einige freuen sich, andere ärgern die Windräder.
    - Kostenneutral.
    - Änderungen in den Ausschreibungsverfahren und Abstandsregeln wirken sich schneller aus.

    # Priorität

    - 0% bei einem Anteil von Windstrom von 80%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert
  `});const Rr={AbstandsregelnFuerWindkraftAbschaffen:Dr,AbstandsregelnFuerWindkraftLockern:zr,AbstandsregelnFuerWindkraftVerschaerfen:Cr,AbstandsregelnFuerWindkraftWieBisher:Er,AusschreibungsverfahrenfuerWindkraftVerachtfachen:Wr,AusschreibungsverfahrenfuerWindkraftVerdoppeln:Pr,AusschreibungsverfahrenfuerWindkraftVervierfachen:Fr,AusschreibungsverfahrenfuerWindkraftWieBisher:Lr,AutomatischeSektoren:Ar,EnergiemixRegeltDerMarkt:Or,ForschungDezentraleStromerzeugung:xr,ForschungUndEntwicklungStromspeicherung:Tr,InitialAtomausstieg:Vr,KernenergienutzungVerlaengern:Ir,KohleverstromungEinstellen:$r,NetzausbauErleichtern:Br,NetzausbauFoerdern:Mr,SolarAufAllenDaechernVerpflichtend:Gr,SolarstromFoerdernx2:Nr,SolarstromFoerdernx4:Ur,SolarstromFoerdernx8:Kr,SolarstromFoerderungAbschaffen:Hr,SolarstromFoerderungWieZuBeginn:jr,StromspeicherungErleichtern:Jr,StromspeicherungFoerdern:Yr,WindkraftVereinfachen:Zr};let Ge=Re("",{state:!0}),_t=()=>Math.abs(Ge());function Qr(e){Ge=Re(e.id,{state:e.prngState})}function qr(){return Ge.state()}var Xr=_({title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bew\xE4hrt. Wir lassen sie so, wie sie sind.",effort(e){return z(3,"Wie aussitzen: {months}.")},effects(){return[]},priority(e){return _t()}}),ei=_({title:"CO2 Preis Erh\xF6hen",description:"Die Preise werden schneller erh\xF6ht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return z(6)},effects(e,t,n){const r=n>=t+2?n>=t+4?100:70:0;return[...Me(e,r,-.5,Be({value:50,result:0},{value:0,result:-1}))]},priority(e){return w(e,"VollerCO2Preis")||w(e,"WirksamerCO2Preis")?0:50},citations:[ht],details:s`

  `,internals:s`
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
  `}),ti=_({title:"Test",description:"Gesetz zum Testen. Wird in automatischen Tests verwendet.",effort(e){return z(6)},effects(e,t,n){return[d("popularity").byPercent(50).if((n-t)%3!=0),d("popularity").byPercent(-50).if((n-t)%3==0),d("stateDebt").byPercent(-200).if(n===t),d("stateDebt").byPercent(50).if((n-t)%3!=0),d("stateDebt").byPercent(-50).if((n-t)%3==0),d("stateDebt").byPercent(-200).if(n===t+10)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`

  `}),ni=_({title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return z(10)},effects(e,t,n){return[...Me(e,3e3,-5,Be({value:90,result:0},{value:50,result:-10}))]},priority(e){return w(e,"WirksamerCO2Preis")?50:0},citations:[zn],details:s`

  `,internals:s`
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
  `}),ri=_({title:"Wasserstofftechnologie f\xF6rdern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return z(1)},effects(e,t,n){const r=n<t+5,i=n>=t+5;return[d("stateDebt").byValue(2).if(r),d("carRenewablePercentage").byValue(1).if(i)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return C(40,90,r)},citations:[],details:s`

  `,internals:s`
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
  `}),ii=_({title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return z(8)},effects(e,t,n){return[...Me(e,150,-2,Be({value:80,result:0},{value:50,result:-3}))]},priority(e){return w(e,"CO2PreisErhoehen")?50:0},citations:[ht],details:s`

  `,internals:s`
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
  `});const si={AllesBleibtBeimAlten:Xr,CO2PreisErhoehen:ei,Test:ti,VollerCO2Preis:ni,WasserstofftechnologieFoerdern:ri,WirksamerCO2Preis:ii},Dt=A(A({},si),Rr),ai=Object.keys(Dt);function oi(e){return ot(e).map(t=>G(A({},t),{effort:t.effort||Sr}))}const oe=oi(Dt);function li(e){const t=oe.find(n=>n.id===e);if(t)return t;throw Error(`Law #${e} not found`)}function we(e){const t=li(e.lawId);if(t)return G(A({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function Pe(e){return e.map(t=>{const n=oe.find(r=>r.id===t);return n||console.error(`Inconsistency: Proposed law #${t} not found`),n}).filter(t=>t)}const ci=(e,t,n)=>Object.fromEntries(e.map(r=>{const i=t(r),a=Object.fromEntries(vt.map(l=>[l,n(r,i,l)]));return[r.id,a]}));function zt(e){return e.find(t=>t.title.match(/subvention/i)&&t.title.match(/abbau/i))}var ui=V({title:"Anruf von befreundetem Unternehmer",description:`Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und m\xF6chte dich in seine
    Ferienvilla auf Sardinien einladen. Er verl\xE4sst sich nat\xFCrlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,apply(e){if(e){const t=zt(Pe(e.proposedLaws));if(t)return[ae("rejectLaw",{lawId:t.id})]}return[]},probability(e,t){return ie(e,t,{years:3,months:8})?0:zt(Pe(e.proposedLaws))?.5:0}}),di=V({title:"Staatsoberhaupt verstorben",description:"Du stirbst an der neuen BSE Variante. Tja, h\xE4ttest du dich mal besser um das Tierwohl gek\xFCmmert...",apply(){return[ae("gameOver")]},probability(e,t){return Pe(e.acceptedLaws.map(n=>n.lawId)).find(n=>n.title.match(/tierwohl/i))?0:Math.min(1,C(5,10,st(e,[t.id]).lux.as("years"))/100)},laws:[],citations:[],details:s`

  `,internals:s`
    # Voraussetzungen

    Kann passieren, wenn es 5 Jahre keine Investitionen in bessere Tierhaltung gab.
  `}),hi=V({title:"D\xFCrreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausf\xE4lle sind enorm.",apply(){return[d("gdp").byValue(-100),d("popularity").byValue(-10)]},probability(e,t){return Math.min(1,C(400,0,e.values.co2budget)/100)},laws:[],citations:[],details:s`

  `,internals:s`

  `}),fi=V({title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute \xFCber die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply(){return[]}}),mi=V({title:"Zusammenbruch des Finanzsystems",description:`Deine Staatsfinanzen sind desastr\xF6s. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zur\xFCckahlen k\xF6nnen. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    k\xF6nntest. Das Spiel ist damit leider beendet.
  `,apply(){return[ae("gameOver")]},probability(e,t){return e.values.stateDebt>he.stateDebt*2?be.finanzKollaps:0}}),gi=V({title:"Hitzeh\xF6lle",description:`Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen K\xFCstenregionen
  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr w\xE4chst.
  Um die verbleibdenden Teile sind erbitterte K\xE4mpfe ausgebrochen.
  `,apply(){return[ae("gameOver")]},probability(e,t){return e.values.co2budget<=0?be.hitzehoelle:0}}),pi=V({title:"Klimafl\xFCchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimafl\xFCchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply(){return[d("stateDebt").byValue(10)]},probability(e,t){return e.values.co2budget<500?.2:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),vi=V({title:"Happy New Year!",description:`Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen T\xE4tigkeit aufgestellt
    und kommt zu dem nicht weiter \xFCberraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht \xFCberraschend - sieht die Sache anders und verurteilt die Regierungserkl\xE4rung als haltlos.
  `,apply(){return[ae("advanceYear")]},probability(e,t){return ce(e.currentDate).getYear()>e.currentYear?be.newYear:0}}),bi=V({title:"Plagiatsaff\xE4re",description:"W\xE4hrend des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet W\xE4hlerstimmen.",apply(){return[d("popularity").byValue(-10)]},probability(e,t){return ie(e,t,{years:3,months:10})?0:.5},laws:[],citations:[],details:s`

  `,internals:s`

  `}),wi=V({title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply(){return[d("popularity").byValue(-2)]},probability(e,t){return ie(e,t,{years:2,months:11})?0:.3},laws:[],citations:[],details:s`

  `,internals:s`

  `}),yi=V({title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und f\xFChrt zu einer neuen Diskussion \xFCber Lobbyismus.",apply(){return[d("popularity").byValue(-2)]},probability(e,t){return ie(e,t,{months:11})||w(e,"WirksamerCO2Preis")||w(e,"VollerCO2Preis")||w(e,"KohleverstromungEinstellen")?0:.3},laws:[],citations:[],details:s`

  `,internals:s`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `}),ki=V({title:"Social Media Alarm!",description:`Deine Wahlkampfberaterin ruft dich v\xF6llig aufgel\xF6st an. Ob denn an den Geschichten was dran sein, die da im
    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.
    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.
  `,apply(){return[d("popularity").byPercent(-20)]}}),Si=V({title:"B\xFCrgerinitiative fordert st\xE4rkere Solarf\xF6rderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply(){return[]},probability(e,t){if(ie(e,t,{years:1,months:1}))return 0;const n=w(e,"SolarstromFoerderungAbschaffen"),r=w(e,"SolarstromFoerderungWieZuBeginn"),i=w(e,"SolarstromFoerdernx2");return n||r||i?.5:0},citations:[De],details:s`

  `,internals:s`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${x(De)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),_i=V({title:"Bund der Steuerzahler fordert Abschaffung Solarf\xF6rderung",description:"Der Solaranteil ist bereits sehr hoch, die Kosten f\xFCr die F\xF6rderung sind schwer zu vermitteln.",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply(){return[]},probability(e,t){if(ie(e,t,{years:1,months:2}))return 0;const n=e.values.electricitySolar/e.values.electricityDemand,r=w(e,"SolarstromFoerdernx2"),i=w(e,"SolarstromFoerdernx4"),a=w(e,"SolarstromFoerdernx8");return n>50&&(r||i||a)?.5:0},citations:[De],details:s`

  `,internals:s`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${x(De)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),Di=V({title:"Du hast durchgehalten",description:`Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,
    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Ma\xDFnahmen waren zu finanzieren
    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!
  `,apply(){return[ae("gameOver")]},probability(e){return e.currentYear===2050?be.timesUp:0}}),zi=V({title:"Wahl verloren",description:`Deine Beliebtheit in der Bev\xF6lkerung ist katastrophal, lieber w\xFCrde man Mao Zedong w\xE4hlen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du geh\xF6rst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon l\xE4nger kein vern\xFCnftiger Mensch mehr geglaubt.
  `,apply(){return[ae("gameOver")]},probability(e){return e.values.popularity<=0?be.wahlVerloren:0}}),Ci=V({title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply(){return[]},citations:[],details:s`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:s`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `}),Ei=V({title:"Durchbruch in der Windenergie-Forschung",description:"Wissenschaftler haben eine neue Art der Energiegewinnung durch Wind entwickelt, mit der bestehende Windturbinen deutlich mehr Leistung bringen.",apply(){return[d("popularity").byValue(4),d("electricityWindEfficiency").byPercent(30)]},probability(e,t){if(ie(e,t,{years:3,months:7}))return 0;const n=w(e,"WindkraftVereinfachen")?1.5:1;return w(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?.5*n:w(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?.4*n:w(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?.3*n:0},laws:[],citations:[],details:s`

  `,internals:s`

  `});const Wi={AbstandsregelnWindkraft:hn,AtomKatastrophe:kr,Bestechung:ui,BSE:di,Duerrewelle:hi,EnergieStrategie:fi,FinanzKollaps:mi,Hitzehoelle:gi,Klimafluechtlinge:pi,NewYear:vi,Plagiatsaffaere:bi,PRInnenminister:wi,PRKohleindustrie:yi,SocialMedia:ki,SolarstromFoerderung:Si,SolarstromFoerderung2:_i,TimesUp:Di,WahlVerloren:zi,WindkraftAusschreibung:Ci,WindkraftForschung:Ei};function Pi(e,t){return ie(e,t,{years:3})?0:.05}const Fe=ot(Wi).map(e=>G(A({},e),{probability:e.probability||Pi})),Ne={id:"",currentDate:et,currentYear:de,values:he,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],over:!1,prngState:!0};function Ue(e=Ne,t=Yt()){const n={id:t,currentDate:e.currentDate,currentYear:e.currentYear,acceptedLaws:[...e.acceptedLaws],proposedLaws:[...e.proposedLaws],rejectedLaws:[...e.rejectedLaws],values:fe(e.values),events:[...e.events],over:e.over,prngState:e.prngState};return Qr(n),n}const Fi=Object.keys(Ne);function Ct(e){return Object.fromEntries(Fi.map(t=>{if(t==="prngState")return[t,qr()];if(t==="values"){const n=e[t],r=br.map(i=>[i,n[i]]);return[t,Object.fromEntries(r)]}else return[t,e[t]]}))}function Et(e=oe,t=Ne){const n=Ue(t);return n.acceptedLaws=e.filter(r=>{var i;return(i=r.labels)==null?void 0:i.includes("initial")}).map(r=>({lawId:r.id,effectiveSince:n.currentYear})),n}const me=[...Array(tt-de+1).keys()].map(e=>e+de);function Li(e,t){const n={lawId:e,effectiveSince:t.currentYear+1},r=we(n),i=r.effort(t);t.currentDate=ce(t.currentDate).plus(i.time).toJSON();const a=r.removeLawsWithLabels,l=t.acceptedLaws.map(we).filter(f=>!(a==null?void 0:a.some(c=>{var g;return(g=f.labels)==null?void 0:g.includes(c)}))).map(f=>({lawId:f.id,effectiveSince:f.effectiveSince}));return t.acceptedLaws=[...l,n],Ke(t)}function Ai(e){return e.currentDate=ce(e.currentDate).plus(dn).toJSON(),Ke(e)}function Ke(e,t=oe,n=Fe,r=_t){const i=Oi(e,n,r);if(i){const l={id:i.id,occuredIn:e.currentDate,acknowledged:!1};e.events.unshift(l)}const a=$i(e,t,(i==null?void 0:i.laws)?i.laws:[]);return e.proposedLaws=Bi(e.proposedLaws,a),i}function Oi(e,t,n){const r=xi(e,t),i=Ti(r);if(i)return i;const a=Vi(r);return Ii(a,n())}function xi(e,t){return t.map(n=>G(A({},n),{prob:n.probability(e,n)})).filter(n=>n.prob>0)}function Ti(e){return e.filter(t=>t.prob>1).reduce((t,n)=>n.prob>((t==null?void 0:t.prob)||0)?n:t,void 0)}function Vi(e){const t=e.map(r=>r.prob).reduce((r,i)=>r+i,0);if(t<=it)return e;const n=it/t;return e.map(r=>G(A({},r),{prob:r.prob*n}))}function Ii(e,t){for(const n of e)if(t-=n.prob,t<0)return n}function $i(e,t,n){const r=c=>{var g;return(g=e.acceptedLaws)==null?void 0:g.some(S=>S.lawId===c.id)},i=c=>{var g;return(g=e.rejectedLaws)==null?void 0:g.includes(c.id)},a=c=>{var g;return((g=c.labels)==null?void 0:g.includes("hidden"))||!1},l=c=>({law:c,priority:c.priority(e)}),f=c=>({law:c.law,priority:c.priority+(n.includes(c.law.id)?100:0)});return t.filter(Ie(r)).filter(Ie(i)).filter(Ie(a)).map(l).filter(c=>c.priority>0).map(f).sort((c,g)=>g.priority-c.priority).map(c=>c.law.id).slice(0,rt)}function Bi(e,t){const n=[...e],r=t.filter(l=>n.includes(l)),i=t.filter(l=>!r.includes(l));for(var a=0;a<n.length;){if(r.includes(n[a])){a++;continue}if(i.length===0){n.splice(a,1);continue}n[a]=i.shift(),a++}return n.push(...i.slice(0,rt-n.length)),n}function Mi(e,t,n){return Wt(e,t,n).values}function Wt(e,t,n){const r=fe(e.values),i=t.sort((l,f)=>{var c,g;return((c=l.treatAfterLabels)==null?void 0:c.some(S=>{var L;return(L=f.labels)==null?void 0:L.includes(S)}))?1:((g=f.treatAfterLabels)==null?void 0:g.some(S=>{var L;return(L=l.labels)==null?void 0:L.includes(S)}))?-1:0}).filter(l=>l.effectiveSince<=n),a=ci(i,l=>{const f=yr(r),c=l.effects(G(A({},e),{values:r}),l.effectiveSince,n);return Ee({dispatch:()=>{},values:r},c),f},(l,f,c)=>r[c]-f[c]);return r.co2budget-=r.co2emissions,{values:r,effectsOfLaws:a}}function Pt(e){return Math.max(0,Math.min(100,e))}function Gi(e){if(e.values.co2emissions===0)return 100;const n=e.values.co2budget*fe(he).co2emissions/he.co2budget/e.values.co2emissions;return Pt(n*50)}function Ni(e){const t=e.values.stateDebt/he.stateDebt;return Pt(100-t*50)}const ge=[{id:"start",title:"Stell dir vor...",text:s`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du ausw\xE4hlen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die W\xE4hler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine W\xE4hler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];function Ui(e,t){return{startGame(n){const r=Et(),i=Ke(r);t.createGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i}),e.push("/games/"+r.id)},async loadGame(n,r){var i;if(((i=n.state.game)==null?void 0:i.id)!==r.gameId)try{const a=await t.loadGame(r.gameId);t.saveGame(a),e.push("/games/"+a.id),n.commit("setGameState",{game:a})}catch(a){n.dispatch("error",{error:a})}},gameOver(n){n.commit("gameOver",void 0)},acceptLaw(n,r){const i=A({},n.state.game),a=Li(r.lawId,i);t.saveGame(i),n.commit("setGameState",{game:i}),n.dispatch("applyEvent",{event:a}),t.decisionMade(i,r.lawId,!0)},rejectLaw(n,r){const i=A({},n.state.game);i.rejectedLaws=[...i.rejectedLaws,r.lawId],t.decisionMade(i,r.lawId,!1),t.saveGame(i),n.commit("setGameState",{game:i})},sitOut(n){const r=A({},n.state.game);t.decisionMade(r,"sitOut",!0);const i=Ai(r);t.saveGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i})},advanceYear(n){const r=A({},n.state.game),i=r.acceptedLaws.map(we);r.currentYear++,r.values=Mi(r,i,r.currentYear),t.saveGame(r),n.commit("setGameState",{game:r})},applyEvent(n,r){if(!r.event)return;const i=A({},n.state.game);t.eventOccurred(i,r.event);const a=r.event.apply(i);n.dispatch("applyEffects",{changes:a})},acknowledgeEvent(n,r){const i=A({},n.state.game);i.events.find(a=>a.id===r.id).acknowledged=!0,t.saveGame(i),n.commit("setGameState",{game:i})},applyEffects(n,r){const i={dispatch:()=>{},values:fe(n.state.game.values)};Ee(i,r.changes);const a=G(A({},n.state.game),{values:i.values});t.saveGame(a),n.commit("setGameState",{game:a});const l={dispatch:n.dispatch};Ee(l,r.changes)},setupTour(n){const r=localStorage.getItem("tour")||ge[0].id,i=ge.find(a=>r===a.id);i?n.commit("setTour",{step:i.id,active:!0}):n.dispatch("stopTour")},nextTourStep(n){const r=ge.findIndex(i=>n.state.tour.step===i.id);if(r<0||r==ge.length-1)n.dispatch("stopTour");else{const i=ge[r+1];n.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(n){n.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},error(n,r){n.commit("error",r)}}}const Ki={setGameState(e,t){e.game=t.game},gameOver(e){e.game=G(A({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},Hi={proposedLaws(e){return!e.game||!e.game.proposedLaws?[]:Pe(e.game.proposedLaws)}},ji={game:void 0,tour:{active:!0,step:"start"}};var $=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const Ji=e=>(ke("data-v-559eb761"),e=e(),Se(),e),Yi=["onClick"],Zi=Ji(()=>o("br",null,null,-1)),Ri={key:0,class:"button-bar"},Qi=["onClick"],qi=I({props:{law:null,selectable:{type:Boolean},numCards:null},emits:["selected","accepted"],setup(e,{emit:t}){const n=e,r=X(!1),i=y(()=>n.law.zIndex);function a(){t("selected")}function l(){r.value=!0}function f(c){c.animationName.match(/^twistOut-/)&&t("accepted",n.law.id)}return(c,g)=>(h(),p("div",{class:B(["Law",{accepted:r.value}]),style:Oe({zIndex:W(i)}),onClick:J(a,["stop"]),onAnimationend:f},[o("div",null,[o("h3",null,b(e.law.title),1),o("div",null,b(e.law.description),1),Zi,o("div",null,b(e.law.effortComment),1),e.selectable?(h(),p("div",Ri,[o("button",{class:"accept",onClick:J(l,["stop"])},"\u2713",8,Qi)])):D("",!0)])],46,Yi))}});var Xi=$(qi,[["__scopeId","data-v-559eb761"]]);const es=I({setup(e){const t=le(),n=X(0),r=X(!1),i=X(!1),a=y(()=>mn(l.value.length,n.value)),l=y(()=>t.getters.proposedLaws),f=y(()=>t.state.game),c=y(()=>f.value===void 0?[]:l.value.map((m,E)=>G(A({},m),{zIndex:a.value[E],pos:E,effortComment:m.effort(f.value).text})));function g(m){t.dispatch("acceptLaw",{lawId:m})}function S(m){n.value!=m?n.value=m:(r.value=!r.value,r.value||(i.value=!1))}function L(){t.dispatch("sitOut")}function u(m){r.value&&(i.value=!0)}return(m,E)=>(h(),p(U,null,[o("div",{class:B(["ProposedLaws",{poppedUp:r.value}]),onTransitionend:u},[(h(!0),p(U,null,Q(W(c),(v,P)=>(h(),q(Xi,{key:v.id,law:v,selectable:r.value,numCards:W(c).length,class:"singleLaw",onAccepted:()=>g(v.id),onSelected:()=>S(P)},null,8,["law","selectable","numCards","onAccepted","onSelected"]))),128))],34),T(Rt,{name:"fade"},{default:ve(()=>[Qe(o("div",{class:"sitOutButton",onClick:E[0]||(E[0]=()=>L())},"Aussitzen",512),[[Zt,i.value]])]),_:1})],64))}});var ts=$(es,[["__scopeId","data-v-5ec925b1"]]);const ns=I({props:{title:null,text:null},emits:["acknowledge"],setup(e,{emit:t}){function n(){t("acknowledge")}return(r,i)=>(h(),p("div",{onClick:n},[o("h2",null,b(e.title),1),o("p",null,b(e.text),1)]))}});var rs=$(ns,[["__scopeId","data-v-63e4a4a9"]]),is="/assets/money-short.7ce9dbed.png",ss="/assets/money-less.184321f3.png",as="/assets/money-more.44dccbaa.png",os="/assets/money-much.d486dae1.png";const ls={class:"container"},cs={class:"title"},us={class:"progress-bar"},ds=I({props:{title:null,value:null},setup(e){const t=e,n=y(()=>{const r=t.value>40?"green":t.value>20?"goldenrod":"red";return{width:t.value+"%",backgroundColor:r}});return(r,i)=>(h(),p("div",ls,[o("div",cs,b(e.title),1),o("div",us,[o("div",{class:"indicator",style:Oe(W(n))},null,4)])]))}});var He=$(ds,[["__scopeId","data-v-9856b0a2"]]);const hs={id:"finances"},fs={key:0,src:is,id:"short"},ms={key:1,src:ss,id:"less"},gs={key:2,src:as,id:"more"},ps={key:3,src:os,id:"much"},vs=I({props:{value:null},setup(e){const t=e,n=y(()=>t.value),r=y(()=>t.value<20),i=y(()=>t.value>=20&&t.value<50),a=y(()=>t.value>=50&&t.value<80),l=y(()=>t.value>=80);return(f,c)=>(h(),p("div",hs,[T(He,{id:"indicator",title:"Finanzen",value:W(n)},null,8,["value"]),W(r)?(h(),p("img",fs)):D("",!0),W(i)?(h(),p("img",ms)):D("",!0),W(a)?(h(),p("img",gs)):D("",!0),W(l)?(h(),p("img",ps)):D("",!0)]))}});var bs=$(vs,[["__scopeId","data-v-0b2fb0e8"]]),ws="/assets/people-happy.acaffc0b.png",ys="/assets/people-angry.54c1d60c.png";const ks={id:"popularity"},Ss={key:0,src:ws,id:"happy"},_s={key:1,src:ys,id:"angry"},Ds=I({props:{value:null},setup(e){const t=e,n=y(()=>t.value>=50),r=y(()=>t.value<50);return(i,a)=>(h(),p("div",ks,[T(He,{id:"indicator",title:"Beliebtheit",value:e.value},null,8,["value"]),W(n)?(h(),p("img",Ss)):D("",!0),W(r)?(h(),p("img",_s)):D("",!0)]))}});var zs=$(Ds,[["__scopeId","data-v-4cf2dbec"]]),Cs="/assets/plant-healthy.97772624.png",Es="/assets/plant-sick.5a0f1b46.png",Ws="/assets/plant-withered.b50106c7.png";const Ps={id:"plant"},Fs=["src","id"],Ls=I({props:{value:null},setup(e){const t=e,n={healthy:Cs,sick:Es,withered:Ws},r=y(()=>t.value>66?"healthy":t.value>33?"sick":"withered"),i=y(()=>n[r.value]);return(a,l)=>(h(),p("div",Ps,[T(He,{id:"indicator",title:"CO2-Budget",value:e.value},null,8,["value"]),o("img",{src:W(i),id:W(r)},null,8,Fs)]))}});var As=$(Ls,[["__scopeId","data-v-2db3389a"]]);const Os={id:"calendar"},xs=I({props:{year:null,month:null},setup(e){const t=e,n=y(()=>{const r=Math.floor((t.month-1)/4)*18+27+"%",i=(t.month-1)%4*21+12+"%";return{top:r,left:i}});return(r,i)=>(h(),p("div",Os,[N(b(e.year)+" ",1),o("span",{id:"month-indicator",style:Oe(W(n))},null,4)]))}});var Ts=$(xs,[["__scopeId","data-v-78901c78"]]),Vs="/assets/heater.43006232.png";const Is={},$s=e=>(ke("data-v-c9039a0c"),e=e(),Se(),e),Bs={id:"heater"},Ms=$s(()=>o("img",{src:Vs},null,-1)),Gs=[Ms];function Ns(e,t){return h(),p("div",Bs,Gs)}var Us=$(Is,[["render",Ns],["__scopeId","data-v-c9039a0c"]]),Ks="/assets/table-top.c87bd2fd.png",Ft="/assets/table-front.78c0f8c6.png",Lt="/assets/table-side.49774a53.png";const Hs={},js={id:"table"},Js=qe('<img src="'+Ks+'" id="table-top" data-v-1ef8d93c><img src="'+Ft+'" id="table-front" data-v-1ef8d93c><img src="'+Ft+'" id="table-back" data-v-1ef8d93c><img src="'+Lt+'" id="table-left-side" data-v-1ef8d93c><img src="'+Lt+'" id="table-right-side" data-v-1ef8d93c>',5),Ys=[Js];function Zs(e,t){return h(),p("div",js,Ys)}var Rs=$(Hs,[["render",Zs],["__scopeId","data-v-1ef8d93c"]]),Qs="/assets/board-front.41330f02.png",At="/assets/board-side.d7181ded.png",qs="/assets/tv-front.82df5c0c.png",Xs="/assets/news.c4bbc2d0.png",Ot="/assets/tvset-legs.78b387df.png";const ea=I({props:{withNews:Boolean}}),xt=e=>(ke("data-v-118e7bdf"),e=e(),Se(),e),ta={id:"tvset"},na=qe('<div id="board" data-v-118e7bdf><img id="board-front" src="'+Qs+'" data-v-118e7bdf><img id="board-left" src="'+At+'" data-v-118e7bdf><img id="board-right" src="'+At+'" data-v-118e7bdf><div id="board-top" data-v-118e7bdf></div></div>',1),ra={id:"tv"},ia=xt(()=>o("img",{id:"tv-front",src:qs},null,-1)),sa={key:0,id:"news",src:Xs},aa=xt(()=>o("div",{id:"legs"},[o("img",{id:"legs-front",src:Ot}),o("img",{id:"legs-back",src:Ot})],-1));function oa(e,t,n,r,i,a){return h(),p("div",ta,[na,o("div",ra,[ia,e.withNews?(h(),p("img",sa)):D("",!0)]),aa])}var la=$(ea,[["render",oa],["__scopeId","data-v-118e7bdf"]]);const ca={},ua={class:"dialog"},da={class:"buttons"};function ha(e,t){return h(),p("div",ua,[xe(e.$slots,"default",{},void 0,!0),o("div",da,[xe(e.$slots,"buttons",{},void 0,!0)])])}var Tt=$(ca,[["render",ha],["__scopeId","data-v-6a8bb0fa"]]);const fa=I({setup(){const e=le();return e.dispatch("setupTour"),{store:e}},components:{Dialog:Tt},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return ge.find(e=>e.id===this.$store.state.tour.step)},title(){var e;return(e=this.currentStep)==null?void 0:e.title},text(){var e;return(e=this.currentStep)==null?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var n;const t=document.querySelector(".highlighted");t&&t.classList.remove("highlighted"),e&&e.highlight&&((n=document.querySelector(`#${e.highlight}`))==null||n.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}}),ma=["innerHTML"];function ga(e,t,n,r,i,a){const l=re("Dialog");return e.title&&e.text?(h(),q(l,{key:0},{buttons:ve(()=>[o("button",{onClick:t[0]||(t[0]=(...f)=>e.stop&&e.stop(...f))},"Tour beenden"),o("button",{onClick:t[1]||(t[1]=(...f)=>e.next&&e.next(...f))},"Weiter")]),default:ve(()=>[o("h2",null,b(e.title),1),o("div",{innerHTML:e.text},null,8,ma)]),_:1})):D("",!0)}var pa=$(fa,[["render",ga]]);const va=I({components:{Dialog:Tt},setup(){return{store:le()}},computed:{co2(){var n,r;const e=(n=this.store.state.game)==null?void 0:n.values.co2budget;return((r=this.store.state.game)==null?void 0:r.values.co2emissions)>0?e>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. H\xE4tte die AfD nicht besser hinbekommen.":e>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken k\xF6nnen. Punktlandung."},debt(){var t;return((t=this.store.state.game)==null?void 0:t.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilit\xE4tskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var t;const e=(t=this.store.state.game)==null?void 0:t.values.popularity;return e<20?"entspricht dem, was man von einem langh\xE4hrigen Diktator erwarten kann.":e<50?"ist nicht berauschend, wiedergew\xE4hlt w\xFCrdest du wohl eher nicht.":e<80?"reicht aus, dass du noch l\xE4nger am Ruder bleiben k\xF6nntest. Gratulation!":"ist v\xF6llig unglaubw\xFCrdig - war das wirklich eine freie Wahl?"}},methods:{newGame(){this.store.dispatch("startGame")}}}),ba=o("h2",null,"Das Spiel ist leider zu Ende",-1),wa=o("p",null,"Deine Entscheidungen haben etwas ver\xE4ndert - soviel kann man sagen.",-1),ya=o("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),ka={class:"button-bar"};function Sa(e,t,n,r,i,a){const l=re("Dialog");return h(),q(l,null,{default:ve(()=>[ba,wa,o("ul",null,[o("li",null,"Die CO2-Emmissionen "+b(e.co2),1),o("li",null,"Die Staatsfinanzen "+b(e.debt),1),o("li",null,"Deine Beliebtheit "+b(e.popularity),1)]),ya,o("div",ka,[o("button",{onClick:t[0]||(t[0]=(...f)=>e.newGame&&e.newGame(...f))},"Neuer Versuch")])]),_:1})}var _a=$(va,[["render",Sa]]);const Da={class:"game-setup"},za=o("h1",null,"#ich-kann-klima",-1),Ca=o("div",{id:"walls"},[o("div",{id:"wall-back"}),o("div",{id:"wall-left"}),o("div",{id:"wall-right"})],-1),Ea=I({setup(e){const t=le(),n=y(()=>{const m=t.state.game;if(!m)return;const E=m.currentDate;return m.events.filter(v=>v.occuredIn===E&&!v.acknowledged)[0]}),r=y(()=>{const m=n.value;if(m!==void 0)return Fe.find(E=>E.id===m.id)}),i=y(()=>{var m;return((m=r.value)==null?void 0:m.title)||""}),a=y(()=>{var m;return((m=r.value)==null?void 0:m.description)||""}),l=y(()=>{var m;return((m=t.state.game)==null?void 0:m.currentYear)||2021}),f=y(()=>{var m;return ce((m=t.state.game)==null?void 0:m.currentDate).lux.month}),c=y(()=>{const m=t.state.game;return m?Ni(m):0}),g=y(()=>{var m;return((m=t.state.game)==null?void 0:m.values.popularity)||100}),S=y(()=>{const m=t.state.game;return m?Gi(m):0}),L=y(()=>{const m=t.state.game;return m?m.over:!1});function u(){t.dispatch("acknowledgeEvent",r.value)}return(m,E)=>(h(),p("div",Da,[za,Ca,T(Ts,{year:W(l),month:W(f)},null,8,["year","month"]),T(Us),T(zs,{value:W(g)},null,8,["value"]),T(la,{"with-news":!!W(n)},null,8,["with-news"]),T(As,{value:W(S)},null,8,["value"]),T(Rs),T(bs,{value:W(c)},null,8,["value"]),T(ts),W(n)?(h(),q(rs,{key:0,title:W(i),text:W(a),onAcknowledge:u},null,8,["title","text"])):D("",!0),T(pa),W(L)?(h(),q(_a,{key:1})):D("",!0)]))}});const Wa=["onClick"],Pa=I({setup(e){const t=le(),n=y(()=>{var l;return(l=t.state.game)==null?void 0:l.acceptedLaws}),r=X(void 0),i=y(()=>oe.filter(l=>{var f,c;return((f=n.value)==null?void 0:f.some(g=>g.lawId===l.id))&&!((c=l.labels)==null?void 0:c.includes("hidden"))}));function a(l){r.value=r.value===l?void 0:l}return(l,f)=>(h(!0),p(U,null,Q(W(i),(c,g)=>(h(),p("div",{key:g,class:B(["Law",{opened:g===r.value}]),onClick:S=>a(g)},[o("h3",null,b(c.title),1),o("div",null,b(c.description),1)],10,Wa))),128))}});var Fa=$(Pa,[["__scopeId","data-v-7efa2df1"]]);const La=I({components:{GameSetup:Ea,AcceptedLaws:Fa},setup(){return{store:le()}},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,n){n(r=>r.startGame(e.params.id))}});function Aa(e,t,n,r,i,a){const l=re("GameSetup");return h(),q(l)}var Vt=$(La,[["render",Aa],["__scopeId","data-v-3637ce73"]]);const Oa=[{path:"/",redirect:"/games"},{path:"/games",component:Vt},{path:"/games/:id",component:Vt}],It=Qt({history:qt(),routes:Oa});function xa(e){return{createGame(t){return e.add("post","/games",t)},loadGame(t){return e.add("get","/games/"+t,void 0,0)},saveGame(t){return e.remove("put","/games/"+t.id),e.add("put","/games/"+t.id,t)},decisionMade(t,n,r){return e.add("post","/games/"+t+"/decisions/"+n,{accepted:r})},eventOccurred(t,n){return e.add("post","/games/"+t+"/events/"+n)}}}function Ta(e,t){let n=[],r;async function i(){if(r&&(clearTimeout(r),r=void 0),n.length){const a=n[0],{method:l,path:f,data:c,retry:g,resolve:S,reject:L}=a;try{if((t==null?void 0:t.navigator)&&!(t==null?void 0:t.navigator.onLine))throw Error("Browser is offline");const u=await e(l,f,c);n.shift(),S(u)}catch(u){g?a.retry=Math.max(-1,g-1):(n.shift(),L(u))}n.length&&(r=setTimeout(i,(t==null?void 0:t.timeout)||1e4))}}return{add(a,l,f,c=-1){return new Promise((g,S)=>{n.push({method:a,path:l,data:f,retry:c,resolve:g,reject:S}),r||i()})},remove(a,l){n=n.filter(f=>f.method.toLowerCase()!==a.toLowerCase()||f.path!==l)},callsPending(){return n.length>0}}}function Va(e,t,n=console){return async function(r,i,a){var l;try{const f={method:r};["post","put","patch"].includes(r)&&(f.body=JSON.stringify(a),f.headers={["content-type"]:"application/json"});const c=await t(e+i,f),g=((l=c.headers.get("Content-Type"))==null?void 0:l.match(/json/))?await c.json():await c.text();if(c.ok)return g;throw Error(g.message||g)}catch(f){throw n.error(f),f}}}function Ia({api:e,logger:t=console,storage:n=localStorage}){return{createGame(r){const i=Ct(r);n.setItem("game",JSON.stringify(i)),e.createGame(i).catch(a=>{t.warn("Cannot save new game - trying again later",a)})},async loadGame(r){const i=n.getItem("game");if(i){const l=JSON.parse(i);if(l.id===r)return Ue(l,r)}const a=await e.loadGame(r);return Ue(a,r)},saveGame(r){const i=Ct(r);n.setItem("game",JSON.stringify(i)),e.saveGame(i).catch(a=>{t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",a)})},decisionMade(r,i,a){e.decisionMade(r.id,i,a)},eventOccurred(r,i){e.eventOccurred(r.id,i.id)}}}const $a=localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",Ba=Va($a,fetch),Ma=Ta(Ba),Ga=xa(Ma),Na=Ia({api:Ga}),Ua=Ui(It,Na),$t=Symbol();function le(){return Xt($t)}const Ka=en({state:ji,mutations:Ki,actions:Ua,getters:Hi});function Bt(e,t,...n){for(const r of n){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function Ha(e,t,n){function r(c){return e[c].toFixed(2)}function i(c){return(c>0?"+":"")+c.toFixed(2)}function a(c){const g=n.find(S=>S.type==="modify"&&S.name===c);return g&&g.condition?g.value:0}function l(c){const g=a(c),S=t?t[c]:0;return g&&Math.abs(g-S)<.001?i(g):g?i(g)+" / "+i(S):S!=0?i(S):""}return yt.map(c=>({id:c.name,unit:c.unit,value:r(c.name),effect:l(c.name),class:c.writable?"writable":"calculated"}))}function ja(e,t,n,r){const i=e.proposedLaws,a=e.acceptedLaws.map(c=>c.lawId),l=e.rejectedLaws;function f(c){return a.includes(c)?"a":i.includes(c)?"p":l.includes(c)?"r":"x"}return r.map(c=>({id:c.id,priority:c.priority(e),state:f(c.id)})).sort((c,g)=>Bt(c,g,t,"id")*n).map(c=>G(A({},c),{priority:c.priority.toFixed(2)}))}function Ja(e,t,n,r){return r.map(i=>({id:i.id,probability:i.probability(e,i)})).sort((i,a)=>Bt(i,a,t,"id")*n).map(i=>G(A({},i),{probability:(i.probability*100).toFixed(2)}))}const Ya={key:0},Za=["href"],Ra=N(". "),Qa={key:1},qa={key:2},Xa=N("Bemerkung: "),eo=["innerHTML"],to=N(". "),no={key:3},ro=N("Internes: "),io=["innerHTML"],so=N(". "),ao={key:4},oo=["href"],lo=N(". "),co={key:5},uo=["href"],ho=N(". "),fo={key:6},mo=["href"],go=N(". "),po=I({props:{citation:null,showInternals:{type:Boolean}},setup(e){const t=e,n=y(()=>t.citation.url.toString()),r=y(()=>t.citation.title||t.citation.url.toString());return(i,a)=>(h(),p("p",null,[e.citation.authors?(h(),p("span",Ya,b(e.citation.authors+e.citation.dateString())+". ",1)):D("",!0),o("a",{target:"_blank",rel:"noreferrer noopener",href:W(n)},'"'+b(W(r))+'"',9,Za),Ra,e.citation.publisher?(h(),p("span",Qa,b(e.citation.publisher)+". ",1)):D("",!0),e.citation.comment?(h(),p("span",qa,[Xa,o("span",{innerHTML:e.citation.comment},null,8,eo),to])):D("",!0),e.showInternals&&e.citation.internalComment?(h(),p("span",no,[ro,o("span",{innerHTML:e.citation.internalComment},null,8,io),so])):D("",!0),e.citation.referringUrl?(h(),p("span",ao,[o("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,oo),lo])):D("",!0),e.citation.archiveUrl?(h(),p("span",co,[o("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,uo),ho])):D("",!0),e.citation.localCopy?(h(),p("span",fo,[o("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,mo),go])):D("",!0)]))}}),vo=I({props:{chartData:null,paramId:null,selectedYear:null},emits:["update:selectedYear"],setup(e,{emit:t}){const n=e,r="#9c6d00",i="#ce900070",a="#644600",l=y(()=>({xaxis:{categories:me,labels:{rotate:-90}},chart:{id:n.paramId+"-withLawEffects",animations:{enabled:!1},stacked:!0},colors:[r,a,i],legend:{show:!1},markers:{size:0},dataLabels:{enabled:!1}})),f=y(()=>n.chartData.values.map((v,P)=>({value:v[n.paramId],change:n.chartData.changes[P][n.paramId]}))),c=y(()=>f.value.map(v=>{const P=v.value-v.change;return v.change*v.value>0?P*v.value>0?{value:P,gain:v.change,loss:0}:{value:0,gain:v.value,loss:P}:{value:v.value,gain:0,loss:-v.change}})),g=y(()=>[{name:"Simulated "+n.paramId,data:c.value.map(v=>Math.round(v.value))},{name:"Gains of "+n.paramId+" by selected law",data:c.value.map(v=>Math.round(v.gain))},{name:"Losses of "+n.paramId+" by selected law",data:c.value.map(v=>Math.round(v.loss))}]),S=X();let L;function u(){var v,P;((v=S.value)==null?void 0:v.chart)!=null&&L!=null&&((P=S.value)==null||P.toggleDataPointSelection(0,L)),L=void 0}function m(v){var P,M;if(((P=S.value)==null?void 0:P.chart)!=null&&v){const R=v-me[0];L!=R&&(u(),L=R,(M=S.value)==null||M.toggleDataPointSelection(0,R))}else u()}tn(()=>m(n.selectedYear),{flush:"post"});function E(v,P,M){const R=M.dataPointIndex;R<0||(R===L?(L=void 0,t("update:selectedYear",void 0)):(L=R,t("update:selectedYear",R+me[0])))}return(v,P)=>(h(),p("div",null,[o("div",null,b(e.paramId),1),T(W(nn),{ref_key:"chart",ref:S,type:"bar",options:W(l),series:W(g),onClick:E},null,8,["options","series"])]))}}),bo=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024}]}],Le=(e,t)=>e.lawId===t.lawId&&e.effectiveSince===t.effectiveSince,wo=e=>e.map((t,n)=>G(A({},t),{sortId:n}));function yo(...e){const t=e.map(n=>n.length===0?0:n[n.length-1].sortId+1);return t.length===0?0:Math.max.apply(Math,t)}function ko(e){const t=X([]),n=X([]),r=X(!1);function i(E,v){var Je;const P=t.value,M={lawId:E,effectiveSince:v,sortId:0},R=(Je=n.value.find(pe=>Le(M,pe)))==null?void 0:Je.sortId;M.sortId=R!=null?R:yo(P,n.value),t.value=P.filter(pe=>pe.lawId!=E).concat(M).sort((pe,Gt)=>pe.sortId-Gt.sortId)}function a(E){t.value=t.value.filter(v=>v.lawId!=E)}function l(E,v){const P={lawId:E,effectiveSince:v,sortId:0};t.value.some(M=>Le(M,P))?a(E):i(E,v)}function f(E){t.value=wo(E.laws)}function c(){r.value=!r.value,r.value?n.value=t.value:n.value=[]}const g=y(()=>{var E;return{name:"Current Game",laws:((E=e.value)==null?void 0:E.acceptedLaws)||[]}}),S=y(()=>[g.value,...bo]),L=y(()=>{const E=t.value.map(P=>G(A({},P),{cls:n.value.some(M=>Le(P,M))?"both":"new"})),v=n.value.filter(P=>!t.value.some(M=>Le(M,P))).map(P=>G(A({},P),{cls:"saved"}));return[...E,...v].sort((P,M)=>P.sortId-M.sortId)}),u=Mt(t),m=Mt(n);return{addToSimulation:i,removeFromSimulation:a,toggleInSimulation:l,loadPreset:f,compareActive:r,toggleCompare:c,presets:S,simulatedLaws:L,simulation:u,secondSimulation:m}}function Mt(e){return y(()=>{const t=Et();return t.acceptedLaws=[...e.value],me.map(r=>{for(;r>t.currentYear;){t.currentYear++,t.acceptedLaws=So(t.acceptedLaws,t.currentYear);const i=t.acceptedLaws.map(f=>we(f)),{values:a,effectsOfLaws:l}=Wt(t,i,t.currentYear);if(t.values=a,r===t.currentYear)return{values:a,effectsOfLaws:l}}return{values:t.values,effectsOfLaws:{}}})})}function So(e,t){const n=e.map(i=>we(i)),r=n.filter(i=>i.effectiveSince===t).flatMap(i=>i.removeLawsWithLabels||[]);return n.filter(i=>i.effectiveSince>=t||!r.some(a=>{var l;return(l=i.labels)==null?void 0:l.includes(a)})).map(i=>({lawId:i.id,effectiveSince:i.effectiveSince}))}const _o=I({directives:{clickaway:Xe},setup(e,t){const n=X(!1);return{menuIsOpen:n,toggle:()=>n.value=!n.value,close:()=>n.value=!1}}});function Do(e,t,n,r,i,a){const l=rn("clickaway");return Qe((h(),p("span",{onClick:t[0]||(t[0]=(...f)=>e.toggle&&e.toggle(...f)),class:B(["menu",{menuIsOpen:e.menuIsOpen}])},[xe(e.$slots,"default",{},void 0,!0)],2)),[[l,e.close]])}var zo=$(_o,[["render",Do],["__scopeId","data-v-06206e01"]]);const Co=I({directives:{clickaway:Xe},components:{Citation:po,PeekChart:vo,Menu:zo},setup(){const e=le(),t=y(()=>e.state.game),n=ko(t);return A({store:e,game:t,gameYears:me},n)},data(){return{lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lastSelected:void 0,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,yearSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1}},methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){e===this.lawSelected?this.lawSelected=void 0:(this.lastSelected="law",this.lawSelected=e)},selectEvent(e){e===this.eventSelected?this.eventSelected=void 0:(this.lastSelected="event",this.eventSelected=e)},selectParam(e){e===this.paramSelected?this.paramSelected=void 0:(this.lastSelected="param",this.paramSelected=e)},selectYear(e){e===this.yearSelected?this.yearSelected=void 0:(this.lastSelected="year",this.yearSelected=e)},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0,this.yearSelected=void 0},dragStart(e,t){const{lawId:n,year:r}=t;!e.dataTransfer||(e.dataTransfer.dropEffect="link",n&&e.dataTransfer.setData("lawId",n),r&&e.dataTransfer.setData("year",r.toString()))},getDropped(e,t,n){if(!e.dataTransfer)return;const r=e.dataTransfer.getData(t);return n.find(i=>i==r)},onDrop(e,t){const{lawId:n,year:r}=t,i=this.getDropped(e,"lawId",ai),a=this.getDropped(e,"year",this.gameYears);r&&i?this.addToSimulation(i,r):n&&a?this.addToSimulation(n,a):n&&i&&this.removeFromSimulation(i)},rightClick(e,t){this.toggleInSimulation(e,t)}},computed:{startYearOfSelected(){if(!this.lawSelected)return;if(!this.game)return de;const e=this.simulatedLaws.find(t=>t.lawId===this.lawSelected);return e?e.effectiveSince:this.game.currentYear},selectedLaw(){return oe.find(e=>e.id===this.lawSelected)},lawEffort(){var e;if(!!this.game)return(e=this.selectedLaw)==null?void 0:e.effort(this.game)},selectedEvent(){return Fe.find(e=>e.id===this.eventSelected)},selectedParam(){return this.paramSelected?Y[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof k?e:void 0},cParam(){const e=this.selectedParam;return e instanceof j?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},currentYear(){return this.yearSelected?this.yearSelected:this.game?this.game.currentYear:de},effectsOfSelected(){return!this.selectedLaw||!this.startYearOfSelected||!this.game?[]:this.selectedLaw.effects(this.game,this.startYearOfSelected,this.currentYear)},sortedValues(){return this.game?Ha(this.simOfYear.values,this.effectsOfLawInYear,this.effectsOfSelected):[]},sortedLaws(){return this.game?ja(this.game,this.lawsSortCol,this.lawsSortDir,oe):[]},sortedEvents(){return this.game?Ja(this.game,this.eventsSortCol,this.eventsSortDir,Fe):[]},effectsOfLawInYear(){if(this.lawSelected)return this.simOfYear.effectsOfLaws[this.lawSelected];if(this.yearSelected)return this.simEffectOfLaw[this.yearSelected-this.gameYears[0]]},simOfYear(){if(this.yearSelected===void 0&&this.game){const e=this.effectsOfSelected,t=this.game.values;if(this.lawSelected===void 0||e.length===0)return{values:t,effectsOfLaws:{}};const n=fe(t);Ee({dispatch:()=>{},values:n},e);const i=Object.fromEntries(vt.map(a=>[a,n[a]-t[a]]));return{values:t,effectsOfLaws:{[this.lawSelected]:i}}}else{const e=this.yearSelected?this.yearSelected-this.gameYears[0]:0;return this.simulation[e]}},simulatedValues(){return this.simulation.map(e=>e.values)},simEffectOfLaw(){if(this.lawSelected){const e=this.lawSelected;return this.simulation.map(t=>{const n=t.effectsOfLaws[e];return n||kt})}return this.compareActive?this.secondSimulation.map((e,t)=>Object.fromEntries(Object.entries(e.values).map(([n,r])=>[n,this.simulation[t].values[n]-r]))):me.map(e=>kt)},chartData(){return{values:this.simulatedValues,changes:this.simEffectOfLaw}},lawsInYear(){return e=>this.simulatedLaws.filter(t=>t.effectiveSince===e)}}}),ee=e=>(ke("data-v-85b0da02"),e=e(),Se(),e),Eo={class:"peekData"},Wo={class:"Menu"},Po=N("\xA0 "),Fo=N("\xA0 "),Lo=N("\xA0 "),Ao=N("\xA0 "),Oo=N("\xA0 "),xo=N("\xA0 "),To={key:1,class:"Details sidebyside"},Vo={class:"Title"},Io={class:"Description"},$o={class:"SectionHead"},Bo={class:"Section"},Mo=ee(()=>o("div",{class:"SectionHead"},"Details:",-1)),Go=["innerHTML"],No=ee(()=>o("div",{class:"SectionHead"},"Internes:",-1)),Uo=["innerHTML"],Ko=ee(()=>o("div",{class:"SectionHead"},"Referenzen:",-1)),Ho={key:2,class:"Details sidebyside"},jo={class:"Title"},Jo={class:"Description"},Yo=ee(()=>o("div",{class:"SectionHead"},"Details:",-1)),Zo=["innerHTML"],Ro=ee(()=>o("div",{class:"SectionHead"},"Internes:",-1)),Qo=["innerHTML"],qo=ee(()=>o("div",{class:"SectionHead"},"Referenzen:",-1)),Xo={key:3,class:"Details sidebyside"},el={class:"Title"},tl={key:0},nl={key:1},rl={key:2},il=ee(()=>o("div",{class:"SectionHead"},"Details:",-1)),sl=["innerHTML"],al=ee(()=>o("div",{class:"SectionHead"},"Internes:",-1)),ol=["innerHTML"],ll=ee(()=>o("div",{class:"SectionHead"},"Referenzen:",-1)),cl={class:"paramsHeader"},ul=["onClick"],dl={class:"numbercol"},hl={class:"effcol"},fl={key:5,class:"lawList sidebyside"},ml=["onClick","onDragstart","onDrop"],gl={class:"priocol"},pl={key:6,class:"eventList sidebyside"},vl=["onClick"],bl={class:"priocol"},wl={key:7,class:"yearList sidebyside"},yl=ee(()=>o("a",{class:"clickable"},"Presets",-1)),kl={class:"dropdown"},Sl=["onClick"],_l=N("\xA0 "),Dl=["onClick","onDragstart","onDrop"],zl=["onClick","onContextmenu","onDragstart","onDrop"];function Cl(e,t,n,r,i,a){var g,S,L;const l=re("PeekChart"),f=re("Citation"),c=re("Menu");return h(),p("details",Eo,[o("summary",{onClick:t[0]||(t[0]=u=>e.unselect()),class:"clickable"},"Peek"),o("div",Wo,[o("a",{onClick:t[1]||(t[1]=u=>e.showCharts=!e.showCharts),class:B(["clickable",e.showCharts?"selected":""])},"Charts",2),Po,o("a",{onClick:t[2]||(t[2]=u=>e.showDetails=!e.showDetails),class:B(["clickable",e.showDetails?"selected":""])},"Details",2),Fo,o("a",{onClick:t[3]||(t[3]=u=>e.showParams=!e.showParams),class:B(["clickable",e.showParams?"selected":""])},"Params",2),Lo,o("a",{onClick:t[4]||(t[4]=u=>e.toggleLawList()),class:B(["clickable",e.showLaws?"selected":""])},"Laws",2),Ao,o("a",{onClick:t[5]||(t[5]=u=>e.toggleEventList()),class:B(["clickable",e.showEvents?"selected":""])},"Events",2),Oo,o("a",{onClick:t[6]||(t[6]=u=>e.showYears=!e.showYears),class:B(["clickable",e.showYears?"selected":""])},"Years",2),xo]),e.showCharts?(h(),p("div",{key:0,class:B(["Details sidebyside",{lawSelected:e.lawSelected!=null}])},[e.paramSelected?(h(),q(l,{key:0,selectedYear:e.yearSelected,"onUpdate:selectedYear":t[7]||(t[7]=u=>e.yearSelected=u),chartData:e.chartData,paramId:e.paramSelected},null,8,["selectedYear","chartData","paramId"])):D("",!0),T(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[8]||(t[8]=u=>e.yearSelected=u),chartData:e.chartData,paramId:"co2emissions"},null,8,["selectedYear","chartData"]),T(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[9]||(t[9]=u=>e.yearSelected=u),chartData:e.chartData,paramId:"popularity"},null,8,["selectedYear","chartData"]),T(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[10]||(t[10]=u=>e.yearSelected=u),chartData:e.chartData,paramId:"stateDebt"},null,8,["selectedYear","chartData"]),T(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[11]||(t[11]=u=>e.yearSelected=u),chartData:e.chartData,paramId:"co2budget"},null,8,["selectedYear","chartData"])],2)):D("",!0),e.lastSelected==="law"&&e.selectedLaw&&e.showDetails?(h(),p("div",To,[o("div",Vo,b(e.selectedLaw.title),1),o("div",Io,b(e.selectedLaw.description),1),o("div",$o,"Aufwand: "+b((g=e.lawEffort)==null?void 0:g.time.toMonthsString()),1),o("div",Bo,b((S=e.lawEffort)==null?void 0:S.text),1),Mo,o("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,Go),No,o("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,Uo),Ko,(h(!0),p(U,null,Q(e.citationsOfLaw,(u,m)=>(h(),q(f,{class:"Section",key:m,citation:u},null,8,["citation"]))),128))])):D("",!0),e.lastSelected==="event"&&e.selectedEvent&&e.showDetails?(h(),p("div",Ho,[o("div",jo,b(e.selectedEvent.title),1),o("div",Jo,b(e.selectedEvent.description),1),Yo,o("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,Zo),Ro,o("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,Qo),qo,(h(!0),p(U,null,Q((L=e.selectedEvent)==null?void 0:L.citations,(u,m)=>(h(),q(f,{class:"Section",key:m,citation:u},null,8,["citation"]))),128))])):D("",!0),e.lastSelected==="param"&&e.selectedParam&&e.showDetails?(h(),p("div",Xo,[o("div",el,b(e.paramSelected)+" ["+b(e.selectedParam.unit)+"]",1),e.wParam?(h(),p("div",tl,"Initial value: "+b(e.wParam.initialValue)+" "+b(e.wParam.unit),1)):D("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(h(),p("div",nl," Should initially be: "+b(e.cParam.shouldInitiallyBe)+" "+b(e.cParam.unit),1)):D("",!0),e.cParam?(h(),p("div",rl," Calculation: "+b(e.cParam.valueGetter),1)):D("",!0),il,o("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,sl),al,o("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,ol),ll,(h(!0),p(U,null,Q(e.selectedParam.citations,(u,m)=>(h(),q(f,{class:"Section",key:m,citation:u},null,8,["citation"]))),128))])):D("",!0),e.showParams?(h(),p("div",{key:4,class:B(["paramsList sidebyside",{lawSelected:e.lawSelected!=null}])},[o("div",cl,[o("div",null,"Start of law: "+b(e.startYearOfSelected),1),o("div",null,"Current year: "+b(e.currentYear),1)]),o("table",null,[(h(!0),p(U,null,Q(e.sortedValues,u=>(h(),p("tr",{key:u.id,class:B({clickable:!0,selected:e.paramSelected===u.id,[u.class]:!0}),onClick:m=>e.selectParam(u.id)},[o("td",null,b(u.id),1),o("td",dl,b(u.value),1),o("td",hl,b(u.effect),1),o("td",null,b(u.unit),1)],10,ul))),128))])],2)):D("",!0),e.showLaws?(h(),p("div",fl,[o("table",null,[o("tr",null,[o("th",{onClick:t[12]||(t[12]=u=>e.sortLaws("state")),class:"clickable"},"S"),o("th",{onClick:t[13]||(t[13]=u=>e.sortLaws("id")),class:"clickable"},"ID"),o("th",{onClick:t[14]||(t[14]=u=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(h(!0),p(U,null,Q(e.sortedLaws,u=>(h(),p("tr",{key:u.id,class:B({clickable:!0,selected:e.lawSelected===u.id,[u.state]:!0}),onClick:m=>e.selectLaw(u.id),draggable:"true",onDragstart:m=>e.dragStart(m,{lawId:u.id}),onDrop:J(m=>e.onDrop(m,{lawId:u.id}),["prevent"]),onDragover:t[15]||(t[15]=J(()=>{},["prevent"])),onDragenter:t[16]||(t[16]=J(()=>{},["prevent"]))},[o("td",null,b(u.state),1),o("td",null,b(u.id),1),o("td",gl,b(u.priority),1)],42,ml))),128))])])):D("",!0),e.showEvents?(h(),p("div",pl,[o("table",null,[o("tr",null,[o("th",{onClick:t[17]||(t[17]=u=>e.sortEvents("id")),class:"clickable"},"ID"),o("th",{onClick:t[18]||(t[18]=u=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(h(!0),p(U,null,Q(e.sortedEvents,u=>(h(),p("tr",{key:u.id,class:B({clickable:!0,selected:e.eventSelected===u.id}),onClick:m=>e.selectEvent(u.id)},[o("td",null,b(u.id),1),o("td",bl,b(u.probability),1)],10,vl))),128))])])):D("",!0),e.showYears?(h(),p("div",wl,[o("div",null,[T(c,null,{default:ve(()=>[yl,o("ul",kl,[(h(!0),p(U,null,Q(e.presets,u=>(h(),p("li",{key:u.name,class:"clickable",onClick:m=>e.loadPreset(u)},b(u.name),9,Sl))),128))])]),_:1}),_l,o("a",{class:B(["clickable",e.compareActive?"selected":""]),onClick:t[19]||(t[19]=u=>e.toggleCompare())},"Compare",2)]),o("table",null,[(h(!0),p(U,null,Q(e.gameYears,u=>(h(),p(U,{key:u},[o("tr",{class:B({clickable:!0,selected:e.yearSelected===u}),onClick:m=>e.selectYear(u),draggable:"true",onDragstart:m=>e.dragStart(m,{year:u}),onDrop:J(m=>e.onDrop(m,{year:u}),["prevent"]),onDragover:t[20]||(t[20]=J(()=>{},["prevent"])),onDragenter:t[21]||(t[21]=J(()=>{},["prevent"]))},[o("th",null,b(u),1)],42,Dl),(h(!0),p(U,null,Q(e.lawsInYear(u),({lawId:m,cls:E})=>(h(),p("tr",{key:m,class:B({clickable:!0,selected:e.lawSelected===m,[E]:!0}),onClick:v=>e.selectLaw(m),onContextmenu:J(v=>e.rightClick(m,u),["right","prevent"]),draggable:"true",onDragstart:v=>e.dragStart(v,{lawId:m}),onDrop:J(v=>e.onDrop(v,{year:u}),["prevent"]),onDragover:t[22]||(t[22]=J(()=>{},["prevent"])),onDragenter:t[23]||(t[23]=J(()=>{},["prevent"]))},[o("td",null,b(m),1)],42,zl))),128))],64))),128))])])):D("",!0)])}var El=$(Co,[["render",Cl],["__scopeId","data-v-85b0da02"]]);const Wl=I({components:{PeekInside:El},setup(){return{store:le(),devMode:localStorage.getItem("devMode")==="true"}},methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,n=Math.min(e/800,t/1e3),r=(t-1e3*n)/2;document.documentElement.style.setProperty("--scale",`${n}`),document.documentElement.style.setProperty("--translateX",`${r}px`)}},beforeMount(){this.updateStyle()},mounted(){window.addEventListener("resize",this.updateStyle)}}),Pl={class:"perspective"},Fl={class:"peek"};function Ll(e,t,n,r,i,a){const l=re("router-view"),f=re("PeekInside");return h(),p(U,null,[o("div",Pl,[T(l)]),o("div",Fl,[e.devMode?(h(),q(f,{key:0})):D("",!0)])],64)}var Al=$(Wl,[["render",Ll]]);const je=sn(Al);je.use(Ka,$t);je.use(It);je.mount("#app");
