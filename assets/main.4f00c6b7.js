var Zt=Object.defineProperty,Qt=Object.defineProperties;var qt=Object.getOwnPropertyDescriptors;var et=Object.getOwnPropertySymbols;var Xt=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable;var Oe=(e,t,n)=>t in e?Zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))Xt.call(t,n)&&Oe(e,n,t[n]);if(et)for(var n of et(t))en.call(t,n)&&Oe(e,n,t[n]);return e},G=(e,t)=>Qt(e,qt(t));var A=(e,t,n)=>(Oe(e,typeof t!="symbol"?t+"":t,n),n);import{D as tt,a as ze,s as tn,b as nt,v as nn,d as x,r as te,o as h,c as m,F as H,e as X,n as $,f as o,t as w,g as p,h as j,u as _,i as T,p as ye,j as ke,k as xe,w as de,l as z,m as Z,q as Te,x as rt,y as rn,T as sn,z as U,A as it,B as he,C as an,E as on,G as ln,H as cn,I as un,J as dn,K as hn,V as fn,L as st,M as mn,N as gn}from"./vendor.f17de12e.js";const pn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};pn();const vn={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};class Ce{constructor(t){A(this,"lux");t instanceof tt?this.lux=t.setLocale("de-DE").setZone("Europe/Berlin"):this.lux=tt.fromISO(t,{zone:"Europe/Berlin",locale:"de-DE"})}static durationBetween(t,n){return new Ie(n.lux.diff(t.lux,["months"]))}plus(t){return new Ce(this.lux.plus(t.lux))}getYear(){return this.lux.get("year")}toLocaleString(){return this.lux.toLocaleString(vn)}toMonthString(){return this.lux.toLocaleString({month:"long",year:"numeric"})}toJSON(){return this.lux.toJSON()}sameInstant(t){return+this.lux==+t.lux}}class Ie{constructor(t){A(this,"lux");t instanceof ze?this.lux=t:typeof t=="string"?this.lux=ze.fromISO(t,{locale:"de-DE"}):this.lux=ze.fromObject(t)}toMonthsString(){const t=this.lux.as("months");return t===1?"1 Monat":t+" Monate"}lessThan(t){return this.lux<t.lux}}function re(e){return new Ce(e)}function Ve(e){return new Ie(e)}function bn(e,t){return Ce.durationBetween(e,t)}function wn(e){return new Ie(ze.fromDurationLike({month:e}))}function yn(e,t){return e.lux<t.lux?t:e}const fe=2021,at="2021-01-01",ot=2050,lt=Ve("P3M"),kn=Ve("P3M"),ct=6,ut=.6;function V(e){return e}const me={newYear:2,timesUp:3,finanzKollaps:4,wahlVerloren:5,hitzehoelle:6};function Sn(e,t){const n=e.events.filter(r=>t.includes(r.id)).reduce((r,i)=>yn(r,re(i.occuredIn)),re(at));return bn(n,re(e.currentDate))}function ie(e,t,n){return Sn(e,[t.id]).lessThan(Ve(n))}var _n=V({title:"Abstandsregeln f\xFCr Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erh\xF6ht wird. Das f\xFChrte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",apply(){return[]}});const Dn=new tn.exports.Converter;function dt(e){return e>0?[...Array(e)].map((t,n)=>n):[]}function zn(e,t){const n=e-t-1;return[...dt(t),Math.max(t,n),...dt(n).reverse()]}function a(e,...t){let n=e.map((i,s)=>i+(t[s]||"")).join("").split(`
`);n[0].length===0&&n.shift();const r=n[0].match(/^(\s+)/);return r&&!n.filter(i=>i.trim()).some(i=>!i.startsWith(r[1]))&&(n=n.map(i=>i.replace(r[1],""))),Dn.makeHtml(n.join(`
`))}function $e(e){return t=>!e(t)}function ht(e){return Object.entries(e).map(([t,n])=>G(P({},n),{id:t}))}function ft(e,t){const n=e.value-t.value;return r=>{const i=e.result*(r-t.value)/n,s=t.result*(r-e.value)/n;return i-s}}const Cn=new Intl.DateTimeFormat("de-DE");class F{constructor(t){A(this,"url");A(this,"title");A(this,"publisher");A(this,"authors");A(this,"date");A(this,"comment");A(this,"internalComment");A(this,"localCopy");A(this,"referringUrl");A(this,"archiveUrl");A(this,"archiveNotPossible");this.url=new URL(t.url),this.title=t.title,this.publisher=t.publisher,this.authors=t.authors,this.date=t.date?new Date(t.date):void 0,this.comment=t.comment,this.internalComment=t.internalComment,this.localCopy=t.localCopy,this.referringUrl=t.referringUrl?new URL(t.referringUrl):void 0,this.archiveUrl=t.archiveUrl?new URL(t.archiveUrl):void 0,this.archiveNotPossible=t.archiveNotPossible}dateString(){const t=this.date;return t?" ("+Cn.format(t)+")":""}toString(){const t=this.authors?this.authors+this.dateString():void 0,n=this.title?'"'+this.title+'"':void 0;return[t,n,this.url,this.publisher].filter(r=>r).join(", ")}}function I(e){const t=e.publisher||e.authors,n=t!=null?t+": ":"",r=e.title||e.url.toString(),i=e.url.toString();return`[[${n}${r}](${i})]`}const En=e=>e.map(t=>t.toString()).join("; "),Wn=new F({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),se=new F({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),Ee=new F({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"});new F({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineral\xF6lsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"});new F({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile f\xFCr wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""});const We=new F({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),Fn=new F({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schl\xFCsselergebnisse der Studie des Wuppertal Instituts f\xFCr Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${I(We)}.`});We.comment=a`Zusammengefasst in ${I(Fn)}.`;const J=new F({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahresch\xE4tzung der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),Pn=new F({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),Fe=new F({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enth\xE4lt CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] f\xFCr mehrere Verkehrsmittel"});new F({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""});const mt=new F({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Stra\xDFeng\xFCterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),oe=new F({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enth\xE4lt Personenkilometer-Jahreswerte f\xFCr mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"});new F({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung \xD6PNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""});const Be=new F({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),An=new F({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new F({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren f\xFCr Fernw\xE4rme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const gt=new F({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),Ln=new F({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),pt=new F({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle w\xE4re besser."}),On=new F({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bev\xF6lkerung nach Nationalit\xE4t und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),xn=new F({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur f\xFCr Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),Tn=new F({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische \xC4mter des Bundes und der L\xE4nder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new F({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});new F({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgem\xE4\xDF - Interview mit Prof. Stefan G\xF6ssling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""});const In=new F({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),vt=new F({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),Vn=new F({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),bt=new F({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten f\xFCr die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class wt{constructor(t){A(this,"unit");A(this,"citations");A(this,"details");A(this,"internals");this.unit=t.unit,this.citations=t.citations?t.citations:[],this.details=t.details?t.details:"",this.internals=t.internals?t.internals:""}citationsDesc(){return En(this.citations)}}const $n={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class y extends wt{constructor(t){super(t);A(this,"writable",!0);A(this,"initialValue");A(this,"applyBounds");this.initialValue=t.initialValue,this.applyBounds=t.applyBounds||$n[t.unit]}}class Y extends wt{constructor(t){super(t);A(this,"writable",!1);A(this,"valueGetter");A(this,"shouldInitiallyBe");this.valueGetter=t.valueGetter,this.shouldInitiallyBe=t.shouldInitiallyBe}}const Bn=new y({unit:"MioTons",initialValue:6700,citations:[Wn],details:a`

  `,internals:a`

  `}),Mn=new y({unit:"MioTons",initialValue:186.793,citations:[J],details:a`

  `,internals:a`

  `}),Gn=new Y({unit:"MioTons",valueGetter(e){return e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4},shouldInitiallyBe:159.696,citations:[J,mt],details:a`

  `,internals:a`
    ${I(J)}: 159.696 as MioTons

    ${I(mt)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Un=new Y({unit:"MioTons",valueGetter(e){return e.co2emissionsStreetVehicles+e.publicLocalCapacity*65/1e6+e.publicNationalCapacity*32/1e6+e.airDomesticUsage*222/1e6+1.641},citations:[Fe,J],details:a`

  `,internals:a`
    ${I(Fe)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${I(J)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${I(J)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${I(J)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),Nn=new Y({unit:"MioTons",valueGetter(e){return e.buildingsSourceElectricity*0+e.buildingsSourceBio*0+e.buildingsSourceGas*.247+e.buildingsSourceOil*.318+e.buildingsSourceTele*.16},citations:[J,Be],details:a`

  `,internals:a`
    TODO: #91 Gibt es hier bessere Quellen?

    ${I(Be)}: 247g CO2 pro kWh Erdgas.

    ${I(Be)}: 318g CO2 pro kWh Erdöl.

    ${I(An)}: 160g CO2 pro kWh Fernwärme.

    ${I(J)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),Kn=new y({unit:"MioTons",initialValue:67.936,citations:[J],details:a`

  `,internals:a`

  `}),Hn=new y({unit:"MioTons",initialValue:9.243,citations:[J],details:a`

  `,internals:a`

  `}),jn=new Y({unit:"MioTons",valueGetter(e){return e.electricityGas*.399+e.electricitySolar*.058+e.electricityWind*.005+e.electricityWater*.02+e.electricityHardCoal*.835+e.electricityBrownCoal*1.137+e.electricityBiomass*.03+e.electricityNuclear*.005},citations:[gt,J],details:a`

  `,internals:a`
    ${I(gt)}:
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
    - Diskrepanz zu ${I(Ln)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${I(J)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),Jn=new y({unit:"MioTons",initialValue:0,citations:[],details:a`

  `,internals:a`

  `}),Rn=new Y({unit:"MioTons",valueGetter(e){return e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers-e.co2directAirCapture},details:a`

  `,internals:a`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${I(J)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[Pn]}),Yn=new y({unit:"TWh",initialValue:480.54,citations:[se],details:a`

  `,internals:a`

  `}),Zn=new y({unit:"Percent",initialValue:50,citations:[],details:a`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:a`

  `}),Qn=new y({unit:"TWh",initialValue:51.42,citations:[se],details:a`

  `,internals:a`

  `}),qn=new y({unit:"TWh",initialValue:131.85,citations:[se],details:a`

  `,internals:a`

  `}),Xn=new y({unit:"TWh",initialValue:6,citations:[se],details:a`

  `,internals:a`

  `}),er=new y({unit:"Percent",initialValue:100,citations:[Vn],details:a`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),tr=new y({unit:"TWh",initialValue:14.99,citations:[se],details:a`

  `,internals:a`

  `}),nr=new y({unit:"TWh",initialValue:43.19,citations:[se],details:a`

  `,internals:a`

  `}),rr=new y({unit:"TWh",initialValue:60.91,citations:[se],details:a`

  `,internals:a`

  `}),ir=new y({unit:"TWh",initialValue:35.46,citations:[se],details:a`

  `,internals:a`

  `}),sr=new y({unit:"TWh",initialValue:82.13,citations:[se],details:a`

  `,internals:a`

  `}),ar=new Y({unit:"TWh",valueGetter(e){return e.electricityHardCoal+e.electricityBrownCoal},details:a`

  `,internals:a`

  `}),or=new Y({unit:"TWh",valueGetter(e){return e.electricityDemand+e.buildingsSourceElectricity*.25-e.electricitySolar-e.electricityWind-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear},details:a`

  `,internals:a`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),lr=new y({unit:"GramPerPsgrKm",initialValue:160,citations:[Fe],details:a`

  `,internals:a`
    ${I(Fe)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),cr=new y({unit:"MioPsgrKm",initialValue:917e3,citations:[oe],details:a`

  `,internals:a`

  `}),ur=new y({unit:"Percent",initialValue:.5,citations:[pt],details:a`

  `,internals:a`
    Die verschiedenen Zahlen in ${I(pt)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),dr=new y({unit:"MioPsgrKm",initialValue:112600,citations:[oe],details:a`

  `,internals:a`

  `}),hr=new y({unit:"MioPsgrKm",initialValue:112600,citations:[oe],details:a`

  `,internals:a`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),fr=new y({unit:"MioPsgrKm",initialValue:67300,citations:[oe],details:a`

  `,internals:a`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),mr=new y({unit:"MioPsgrKm",initialValue:67300,citations:[oe],details:a`

  `,internals:a`
Siehe \`publicLocalCapacity\`.
  `}),gr=new y({unit:"MioPsgrKm",initialValue:10100,citations:[oe],details:a`

  `,internals:a`

  `}),pr=new y({unit:"MioPsgrKm",initialValue:61700,citations:[oe],details:a`

  `,internals:a`

  `}),vr=new Y({unit:"MioPsgrKm",valueGetter(e){return e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage},shouldInitiallyBe:1168700,citations:[oe],details:a`

  `,internals:a`

  `}),br=new y({unit:"TWh",initialValue:226,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),wr=new y({unit:"TWh",initialValue:544,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),yr=new Y({unit:"TWh",valueGetter(e){return e.buildingsPrivateDemand+e.buildingsIndustryDemand},shouldInitiallyBe:770,citations:[],details:a`

  `,internals:a`
    TODO: #78 Quelle ${I(bt)} gibt diese Zahlen nicht her.
  `}),kr=new y({unit:"TWh",initialValue:0,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 0 TWh.
  `}),Sr=new y({unit:"TWh",initialValue:130,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),_r=new y({unit:"TWh",initialValue:219,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),Dr=new y({unit:"TWh",initialValue:58,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),zr=new Y({unit:"TWh",valueGetter(e){return e.buildingsDemand-(e.buildingsSourceElectricity+e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele)},citations:[],details:a`

  `,internals:a`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${I(bt)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),Cr=new y({unit:"Percent",initialValue:50,citations:[],details:a`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:a`

  `}),Er=new y({unit:"TsdPeople",initialValue:83155.031,citations:[On],details:a`

  `,internals:a`
Anfangswert ist der Stand 31.12.2020.
  `}),Wr=new y({unit:"TsdPeople",initialValue:2695,citations:[xn],details:a`

  `,internals:a`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),Fr=new y({unit:"MrdEuro",initialValue:3332,citations:[Tn],details:a`

  `,internals:a`
Anfangswert ist das BIP 2020.
  `}),Pr=new y({unit:"MrdEuro",initialValue:1899,citations:[],details:a`

  `,internals:a`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),ee={co2budget:Bn,co2emissionsIndustry:Mn,co2emissionsStreetVehicles:Gn,co2emissionsMobility:Un,co2emissionsAgriculture:Kn,co2emissionsBuildings:Nn,co2emissionsOthers:Hn,co2emissionsEnergy:jn,co2directAirCapture:Jn,co2emissions:Rn,electricityDemand:Yn,electricityGridQuality:Zn,electricitySolar:Qn,electricityWind:qn,electricityWindOnshoreMaxNew:Xn,electricityWindEfficiency:er,electricityWater:tr,electricityBiomass:nr,electricityNuclear:rr,electricityHardCoal:ir,electricityBrownCoal:sr,electricityCoal:ar,electricityGas:or,carEmissionFactor:lr,carUsage:cr,carRenewablePercentage:ur,publicLocalUsage:dr,publicLocalCapacity:hr,publicNationalUsage:fr,publicNationalCapacity:mr,airDomesticUsage:gr,airIntlUsage:pr,passengerTransportUsage:vr,buildingsIndustryDemand:br,buildingsPrivateDemand:wr,buildingsDemand:yr,buildingsSourceElectricity:kr,buildingsSourceBio:Sr,buildingsSourceOil:_r,buildingsSourceTele:Dr,buildingsSourceGas:zr,popularity:Cr,numberOfCitizens:Er,unemployment:Wr,gdp:Fr,stateDebt:Pr},yt=Object.entries(ee).filter(e=>e[1]instanceof y).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),kt=Object.entries(ee).filter(e=>e[1]instanceof Y).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),Ar=Object.keys(yt),St=Object.keys(ee);class _t extends y{constructor(t,n){super(t);A(this,"name");this.name=n}}const Lr=Object.entries(yt).map(e=>new _t(e[1],e[0]));class Dt extends Y{constructor(t,n){super(t);A(this,"name");this.name=n}}Object.entries(kt).map(e=>new Dt(e[1],e[0]));const zt=Object.entries(ee).map(e=>e[1]instanceof y?new _t(e[1],e[0]):new Dt(e[1],e[0])),ge=Lr.reduce((e,t)=>(e[t.name]=t.initialValue,e),{}),Ct=zt.reduce((e,t)=>(e[t.name]=0,e),{});function pe(e){const t=P({},e);return Object.entries(kt).forEach(n=>Object.defineProperty(t,n[0],{enumerable:!0,get:()=>n[1].valueGetter(t)})),t}function Or(e){return P({},e)}function le(e,t){return{type:"dispatch",condition:!0,if(n){return this.condition=n,this},apply(n){this.condition&&n.dispatch(e,t)}}}function d(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(t){return this.percent=t,this},byValue(t){return this.value=t,this},setValue(t){return this.absolute=t,this},if(t){return this.condition=t,this},getOldNew(t){const n=this.name,r=t[n];if(!this.condition)return{oldVal:r,newVal:r};const i=ee[n],s=this.absolute!=null?this.absolute:r+(this.value||r*this.percent/100),l=i.applyBounds(s);return{oldVal:r,newVal:l}},getChange(t){if(!this.condition)return 0;const{oldVal:n,newVal:r}=this.getOldNew(t);return r-n},apply(t){if(t.values!=null&&this.condition){const{newVal:n}=this.getOldNew(t.values);t.values[this.name]=n}}}}function Q(e,t){if(ee[e].unit!=ee[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(n){return this.percent=n,this},byValue(n){return this.value=n,this},if(n){return this.condition=n,this},getEffect(n){const r=n[this.to],i=n[this.from];if(!this.condition)return{oldTo:r,oldFrom:i,newTo:r,newFrom:i};const s=ee[this.to],l=ee[this.from],u=this.value||r*this.percent/100,c=s.applyBounds(r+u)-r,v=-l.applyBounds(i-c)+i,E=r+v,L=i-v;return{oldTo:r,newTo:E,oldFrom:i,newFrom:L}},apply(n){if(n.values!=null&&this.condition){const{newTo:r,newFrom:i}=this.getEffect(n.values);n.values[this.to]=r,n.values[this.from]=i}}}}function Pe(e,t){t.filter(n=>n.condition).forEach(n=>n.apply(e))}var xr=V({title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply(){return[le("gameOver")]},probability(e){return e.acceptedLaws.find(n=>n.lawId==="KernenergienutzungVerlaengern")?.5:0},citations:[],details:a`

  `,internals:a`

  `});const Tr=e=>({time:lt,text:`Braucht ${lt.toMonthsString()}.`});function S(e,t="Braucht {months}."){const n=wn(e),r=t.replace(/{months}/g,n.toMonthsString());return{time:n,text:r}}function D(e){return e}function C(e,t,n){const r=n-e,i=t-e;if(i===0)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return r/i*100}function Me(e,t){const n=t.value-e.value,r=n/Math.abs(n),i=r*e.value;return s=>n===0||r*s<=i?e.result:ft(e,t)(s)}function g(e,t,n=0){if(!ce.map(r=>r.id).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some(r=>r.lawId===t&&r.effectiveSince<=e.currentYear+n)}function Ir(e){const t=e.events[0];return t&&re(t.occuredIn).sameInstant(re(e.currentDate))?t:void 0}function N(e,t){const n=Ir(e);return n!=null&&t.includes(n.id)}function ae(e){const t=e.values;return t.electricityWind/t.electricityDemand*100}function K(e){return(e.values.electricityWind+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}function Vr(e,t){const n=e.values,r=ee[t].initialValue,i=n.electricityGridQuality,s=n.electricityDemand;return ft({value:50,result:r},{value:100,result:s})(i)}function ue(e,t,n){const r=e.values,i=r.electricityCoal+r.electricityGas;if(i<=0)return[];const s=r.electricityHardCoal/i,l=r.electricityBrownCoal/i,u=r.electricityGas/i;return[Q(t,"electricityHardCoal").if(s>0).byValue(s*n),Q(t,"electricityBrownCoal").if(l>0).byValue(l*n),d(t).if(u>0).byValue(u*n)]}function Ae(e,t,n,r){const i=g(e,"WindkraftVereinfachen")?0:5;if(e.currentYear<r+i)return[];const s=e.values,u=(Math.min(t,s.electricityWindOnshoreMaxNew)+n)*s.electricityWindEfficiency/100,c=s.electricityWind,v=Math.min(c+u,Vr(e,"electricityWind"))-c;return ue(e,"electricityWind",v)}function Ge(e,t,n,r){const i=r(K(e)),s=r(e.values.carRenewablePercentage);return[d("stateDebt").byValue((25-t)/1e3*e.values.co2emissions),d("popularity").byValue(i+s),d("co2emissionsIndustry").byPercent(n),d("co2emissionsAgriculture").byPercent(n),d("co2emissionsOthers").byPercent(n),Q("electricityBrownCoal","electricityWind").byPercent(.7*n),Q("electricityHardCoal","electricityWind").byPercent(.7*n),Q("electricityBrownCoal","electricitySolar").byPercent(.3*n),Q("electricityHardCoal","electricitySolar").byPercent(.3*n),Q("buildingsSourceOil","buildingsSourceBio").byPercent(n),Q("carUsage","publicNationalUsage").byPercent(.5*n),Q("carUsage","publicLocalUsage").byPercent(.5*n)]}var $r=D({title:"Abstandsregeln f\xFCr Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(12,"BIs werden es Dir schwer machen. {months}!")},effects(e,t,n){const r=g(e,"WindkraftVereinfachen")?0:5;return[d("popularity").byValue(-40).if(t===n),d("electricityWindOnshoreMaxNew").setValue(1e3).if(n>=t+r)]},priority(e){return N(e,["AbstandsregelnWindkraft"])?100:g(e,"AbstandsregelnFuerWindkraftLockern")?C(80,25,ae(e)):0}}),Br=D({title:"Abstandsregeln f\xFCr Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln f\xFCr Windkraftanlagen sowie Bauerlaubniss in W\xE4ldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(6,"Das schaffst Du in {months}n.")},effects(e,t,n){const r=g(e,"WindkraftVereinfachen")?0:5;return[d("popularity").byValue(-3).if(t===n),d("electricityWindOnshoreMaxNew").setValue(30).if(n>=t+r)]},priority(e){return N(e,["AbstandsregelnWindkraft"])?100:g(e,"AbstandsregelnFuerWindkraftWieBisher")?C(70,27,ae(e)):g(e,"AbstandsregelnFuerWindkraftAbschaffen")?C(30,100,ae(e)):0},citations:[],details:a`

  `,internals:a`
    # Happy Path 2

    # Priorität

    Zu Beginn und wenn "WieBisher" ausgewählt:

    - 0% bei einem Anteil von Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert

    Wenn Abstandsregeln abgeschafft wurden:

    - 0% bei einem Anteil von Windstrom von 30%.
    - 100% bei einem Anteil von Windstrom von 100%.
  `}),Mr=D({title:"Abstandsregeln f\xFCr Windkraft versch\xE4rfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngeb\xE4uden im Innenbereich muss das Zehnfache der Gesamth\xF6he der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(1,"Dauert nur einen Monat.")},effects(e,t,n){return[d("popularity").byValue(5).if(t===n),d("electricityWindOnshoreMaxNew").setValue(.42)]},priority(e){return N(e,["AbstandsregelnWindkraft"])?100:g(e,"AbstandsregelnFuerWindkraftWieBisher")?C(0,100,ae(e)):0}}),Gr=D({title:"Abstandsregeln f\xFCr Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmen \xFCber Abst\xE4nde zwischen den Windkraftanlagen und Wohngeb\xE4uden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(3,"Wie aussitzen: {months}.")},effects(e,t,n){const r=g(e,"WindkraftVereinfachen")?0:5;return[d("electricityWindOnshoreMaxNew").setValue(6).if(n>=t+r)]},priority(e){return N(e,["AbstandsregelnWindkraft"])?100:g(e,"AbstandsregelnFuerWindkraftLockern")?C(30,100,ae(e)):g(e,"AbstandsregelnFuerWindkraftVerschaerfen")?C(70,27,ae(e)):0}}),Ur=D({title:"Ausschreibungsverfahren f\xFCr Windkraft 64,8 TWh",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 64,8 TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return g(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?S(5):g(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?S(9):S(11)},effects(e,t,n){return[d("popularity").byValue(-20).if(t===n),d("unemployment").byValue(-100).if(t===n),...Ae(e,55.2,9.6,t)]},priority(e){return N(e,["WindkraftAusschreibung"])?100:g(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?C(100,50,K(e)):0}}),Nr=D({title:"Ausschreibungsverfahren f\xFCr Windkraft 16,2 TWh",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 16,2 TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return S(2)},effects(e,t,n){return[d("popularity").byValue(-1).if(t===n),d("unemployment").byValue(-20).if(t===n),...Ae(e,13.8,2.4,t)]},priority(e){return N(e,["WindkraftAusschreibung"])?100:g(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?C(100,50,K(e)):g(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?C(40,100,K(e)):0}}),Kr=D({title:"Ausschreibungsverfahren f\xFCr Windkraft 32,4 TWh",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 32,4 TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return g(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?S(4):S(6)},effects(e,t,n){return[d("popularity").byValue(-2).if(t===n),d("unemployment").byValue(-100).if(t===n),...Ae(e,27.6,4.8,t)]},priority(e){return N(e,["WindkraftAusschreibung"])?100:g(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?C(100,50,K(e)):g(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?C(0,100,K(e)):0},citations:[],details:a`
    Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung
    von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen
    Subventionierung umsetzen kann bekommt den Zuschlag.
  `,internals:a`
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
  `}),Hr=D({title:"Ausschreibungsverfahren f\xFCr Windkraft 8,1 TWh wie zu Beginn",description:"Windkraft Betreiber k\xF6nnen sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstm\xF6glichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return S(8)},effects(e,t,n){return[...Ae(e,6.9,1.2,t)]},priority(e){return N(e,["WindkraftAusschreibung"])?100:g(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?C(60,100,K(e)):0}}),jr=D({title:"Automatische Anpassungen einiger Sektoren",description:"Mobilit\xE4t, Industrie, Geb\xE4ude und Landwirtschaft nutzen automatisch regenerative Energiequellen, sobald sie zur Verf\xFCgung stehen.",labels:["initial"],effects(e,t,n){if(K(e)<70)return[];const r=d("co2emissionsIndustry").byPercent(-20),s=r.getChange(e.values)/-.835;return[d("carRenewablePercentage").byValue(10),d("electricityDemand").byValue(22),r,d("electricityDemand").byValue(s),Q("buildingsSourceBio","buildingsSourceOil").byValue(10),Q("buildingsSourceElectricity","buildingsSourceOil").byValue(10),Q("buildingsSourceElectricity","buildingsSourceTele").byValue(5),d("buildingsSourceElectricity").byValue(Math.min(20,e.values.buildingsSourceGas)),d("co2emissionsAgriculture").byValue(-10),d("co2emissionsOthers").byValue(-1)]},priority(e){return 0},citations:[],details:a`

  `,internals:a`
    Dieses Gesetz läuft dauerhaft mit und soll kompensieren, dass es für diese Sektoren noch nicht genügend Gesetze gibt.
  `}),Jr=D({title:"CO2 Abscheidung und Speicherung (DACCS) f\xF6rdern",description:"Entstehende Technologien zur Abscheidung aus der Luft (DAC) und Speicherung von CO2 werden mit 1 Mrd Euro im Jahr gef\xF6rdert.",effort(e){return S(9)},effects(e,t,n){const r=1,i=r/200*1e3,s=i*400/1e3;return[d("stateDebt").byValue(r),d("co2directAirCapture").byValue(i),d("electricityDemand").byValue(s)]},priority(e){return C(70,90,K(e))},citations:[],details:a`

  `,internals:a`
    TDOO #91: So far only https://de.wikipedia.org/wiki/Direct_air_capture.

    Angaben für Kosten reichen von 10 USD bis 1000 USD pro Tonne CO2.
    Mehrere Angaben 100 USD bis 200 USD. Wir gehen von 250 EUR aus, um
    versteckte, indirekte Kosten mit einzubeziehen.

    In Wikipedia wird 250 kWh pro Tonne CO2 erwähnt. Dazu kommt noch ein
    beträchtlicher Wasserverbrauch. Wir nehmen zunächst 400kWh an, auch um
    potentielle negative Effekte abzubilden.
  `}),Rr=D({title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effort(e){return e.values.popularity>=50?S(6,"Normal dauert das 12 Monate, aber bei Deiner Beliebtheit nur {months}."):S(12)},effects(){return[d("stateDebt").byValue(-37),d("electricityHardCoal").byPercent(-10),d("electricityBrownCoal").byPercent(-5),d("electricityWind").byValue(5),d("electricitySolar").byValue(3),d("electricityWater").byValue(.5)]},priority(e){return N(e,["EnergieStrategie"])?100:C(ot,fe,e.currentYear)}}),Yr=D({title:"Erforschung und Umsetzung dezentraler Stromerzeugung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur f\xFCr die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return S(1)},effects(e,t,n){const r=n<t+5,i=n>=t+1;return[d("stateDebt").byValue(2).if(r),d("electricityGridQuality").byValue(1).if(i)]},priority(e){const t=e.values;return C(80,45,t.electricityGridQuality)},citations:[],details:a`

  `,internals:a`
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
  `}),Zr=D({title:"Forschung und Entwicklung zur Stromspeicherung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return S(1)},effects(e,t,n){const r=n<t+5,i=n>=t+3;return[d("stateDebt").byValue(2).if(r),d("electricityGridQuality").byValue(.2).if(i)]},priority(e){const t=e.values;return C(80,45,t.electricityGridQuality)},citations:[],details:a`

  `,internals:a`
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
  `}),Qr=D({title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,n){const i={2021:60.45,2022:30.21}[n]||0;return[d("electricityNuclear").setValue(i)]},priority(e){return 0}});const Et=pe(ge).electricityGas;var qr=D({title:"Kernenergienutzung verl\xE4ngern",description:"Kernkraftwerke l\xE4nger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effort(e){return S(8)},effects(){return[d("electricityNuclear").setValue(104.3),d("stateDebt").byValue(-2.5),d("popularity").byValue(-4)]},priority(e){return N(e,["EnergieStrategie"])?100:C(Et,1.1*Et,e.values.electricityGas)}}),Xr=D({title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effort(e){return S(11)},effects(e,t,n){const r=n-t,i=r<18?4.3/18:0,s=2.5,l=20,u=60,c=(10-r)/55,v=Math.max((l+u/2)*c,0);return[d("electricityHardCoal").setValue(0),d("electricityBrownCoal").setValue(0),d("stateDebt").byValue(-i+s),d("unemployment").byValue(v)]},priority(e){return N(e,["EnergieStrategie"])?100:e.values.electricityCoal/e.values.electricityDemand<=.1?0:C(1e4,0,e.values.unemployment)},citations:[],details:a`

  `,internals:a`
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
  `}),ei=D({title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren f\xFCr den Ausbau des Stromnetzes",effort(e){return S(2)},effects(e,t,n){return[d("popularity").byValue(-3).if(t===n),d("electricityGridQuality").byValue(1)]},priority(e){return C(70,27,ae(e))},citations:[],details:a`

  `,internals:a`
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
  `}),ti=D({title:"Netzausbau f\xF6rdern",description:"Ausbau des Stromnetzes mit Steuermitteln f\xF6rdern",effort(e){return S(3)},effects(e,t,n){return[d("popularity").byValue(-1).if(t===n),d("stateDebt").byValue(2),d("electricityGridQuality").byValue(5).if(g(e,"NetzausbauErleichtern"))]},priority(e){return C(70,27,ae(e))},citations:[],details:a`

  `,internals:a`
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
  `}),ni=D({title:"Solar auf neuen D\xE4chern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die D\xE4cher.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return S(3)},effects(e,t,n){return[d("popularity").byValue(-3).if(t===n),...ue(e,"electricitySolar",2)]},priority(e){return g(e,"SolarstromFoerderungWieZuBeginn")?C(100,30,K(e)):0},details:a`

  `,internals:a`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `}),ri=D({title:"Solarstrom F\xF6rderung 10 TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verdoppeln. Es werden 10 TWh pro Jahr zugebaut.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return S(4)},effects(e,t,n){return[d("popularity").byValue(10).if(t===n),d("unemployment").byValue(-31e3).if(t===n),...ue(e,"electricitySolar",10)]},priority(e){return N(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:g(e,"SolarstromFoerderungWieZuBeginn")?C(100,30,K(e)):0},details:a`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),ii=D({title:"Solarstrom F\xF6rderung 20TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen vervierfachen. Es werden 20 TWh pro Jahr zugebaut.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return g(e,"SolarstromFoerdernx2")?S(3):S(7)},effects(e,t,n){return[d("popularity").byValue(20).if(t===n),d("unemployment").byValue(-89e3).if(t===n),...ue(e,"electricitySolar",20)]},priority(e){return N(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:g(e,"SolarstromFoerdernx2")?C(100,30,K(e)):0},details:a`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:a`
    # Happy path 10

    ${I(We)}
  `,citations:[We]}),si=D({title:"Solarstrom F\xF6rderung 40TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verachtfachen. Es werden 40 TWh pro Jahr zugebaut.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return g(e,"SolarstromFoerdernx4")?S(2):g(e,"SolarstromFoerdernx2")?S(5):S(9)},effects(e,t,n){return[d("popularity").byValue(-10).if(t===n),d("unemployment").byValue(-209e3).if(t===n),...ue(e,"electricitySolar",40)]},priority(e){return N(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:g(e,"SolarstromFoerdernx4")?C(100,30,K(e)):0},details:a`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `}),ai=D({title:"Solarstrom F\xF6rderung einstellen",description:"Mittlere bis gro\xDFe Solaranlagen sollten sich selbst tragen. Die F\xF6rderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return g(e,"SolarstromFoerderungWieZuBeginn")?S(5):S(13,"So eine Kehrtwende in der Politik ist schwer durchsetzbar. Das braucht {months}.")},effects(e,t,n){return[...ue(e,"electricitySolar",2)]},priority(e){return N(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:g(e,"SolarstromFoerderungWieZuBeginn")?C(0,100,K(e)):0},details:a`

  `}),oi=D({title:"Solarstrom F\xF6rderung wie zu Beginn 5 TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen wie bisher. Es werden 5 TWh pro Jahr zugebaut.",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return S(9)},effects(e,t,n){return[...ue(e,"electricitySolar",5)]},priority(e){return N(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:g(e,"SolarstromFoerdernx8")?C(70,100,K(e)):0},details:a`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),li=D({title:"Stromspeicherung erleichtern",description:"B\xFCrokratische H\xFCrden f\xFCr den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effort(e){return S(3)},effects(e,t,n){return[d("electricityGridQuality").byValue(.2)]},priority(e){const t=e.values;return C(80,45,t.electricityGridQuality)},citations:[],details:a`

  `,internals:a`
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
  `}),ci=D({title:"Stromspeicherung f\xF6rdern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln f\xF6rdern. 2 Mrd \u20AC pro Jahr.",effort(e){return S(7)},effects(e,t,n){const r=g(e,"StromspeicherungErleichtern")?0:5,i=n>=t+r,s=g(e,"ForschungUndEntwicklungStromspeicherung",3);return[d("stateDebt").byValue(1),d("popularity").byValue(.2).if(i),d("stateDebt").byValue(1).if(i),d("electricityGridQuality").byValue(2).if(i),d("electricityGridQuality").byValue(2).if(s),d("electricityGridQuality").byValue(2).if(i&&s)]},priority(e){const t=e.values;return C(80,45,t.electricityGridQuality)},citations:[],details:a`

  `,internals:a`
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
  `}),ui=D({title:"Windkraft vereinfachen",description:"Genehmigungen f\xFCr Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effort(e){return S(4,"Die Bundesl\xE4nder m\xFCssen mit ins Boot geholt werden. Das dauert {months}.")},effects(e,t,n){return[]},priority(e){return C(80,27,ae(e))},citations:[],details:a`

  `,internals:a`
    # Happy Path 1.3

    # Folgen

    - Popularität unverändert: Einige freuen sich, andere ärgern die Windräder.
    - Kostenneutral.
    - Änderungen in den Ausschreibungsverfahren und Abstandsregeln wirken sich schneller aus.

    # Priorität

    - 0% bei einem Anteil von Windstrom von 80%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert
  `});const di={AbstandsregelnFuerWindkraftAbschaffen:$r,AbstandsregelnFuerWindkraftLockern:Br,AbstandsregelnFuerWindkraftVerschaerfen:Mr,AbstandsregelnFuerWindkraftWieBisher:Gr,AusschreibungsverfahrenfuerWindkraftVerachtfachen:Ur,AusschreibungsverfahrenfuerWindkraftVerdoppeln:Nr,AusschreibungsverfahrenfuerWindkraftVervierfachen:Kr,AusschreibungsverfahrenfuerWindkraftWieBisher:Hr,AutomatischeSektoren:jr,CO2AbscheidungUndSpeicherungFoerdern:Jr,EnergiemixRegeltDerMarkt:Rr,ForschungDezentraleStromerzeugung:Yr,ForschungUndEntwicklungStromspeicherung:Zr,InitialAtomausstieg:Qr,KernenergienutzungVerlaengern:qr,KohleverstromungEinstellen:Xr,NetzausbauErleichtern:ei,NetzausbauFoerdern:ti,SolarAufAllenDaechernVerpflichtend:ni,SolarstromFoerdernx2:ri,SolarstromFoerdernx4:ii,SolarstromFoerdernx8:si,SolarstromFoerderungAbschaffen:ai,SolarstromFoerderungWieZuBeginn:oi,StromspeicherungErleichtern:li,StromspeicherungFoerdern:ci,WindkraftVereinfachen:ui};let Ue=nt("",{state:!0}),Wt=()=>Math.abs(Ue());function hi(e){Ue=nt(e.id,{state:e.prngState})}function fi(){return Ue.state()}var mi=D({title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bew\xE4hrt. Wir lassen sie so, wie sie sind.",effort(e){return S(3,"Wie aussitzen: {months}.")},effects(){return[]},priority(e){return Wt()}}),gi=D({title:"CO2 Preis Erh\xF6hen",description:"Die Preise werden schneller erh\xF6ht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return S(6)},effects(e,t,n){const r=n>=t+2?n>=t+4?100:70:0;return[...Ge(e,r,-.5,Me({value:50,result:0},{value:0,result:-1}))]},priority(e){return g(e,"VollerCO2Preis")||g(e,"WirksamerCO2Preis")?0:50},citations:[vt],details:a`

  `,internals:a`
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
  `}),pi=D({title:"Test",description:"Gesetz zum Testen. Wird in automatischen Tests verwendet.",effort(e){return S(6)},effects(e,t,n){return[d("popularity").byPercent(50).if((n-t)%3!=0),d("popularity").byPercent(-50).if((n-t)%3==0),d("stateDebt").byPercent(-200).if(n===t),d("stateDebt").byPercent(50).if((n-t)%3!=0),d("stateDebt").byPercent(-50).if((n-t)%3==0),d("stateDebt").byPercent(-200).if(n===t+10)]},priority(e){return 0},citations:[],details:a`

  `,internals:a`

  `}),vi=D({title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return S(10)},effects(e,t,n){return[...Ge(e,3e3,-5,Me({value:90,result:0},{value:50,result:-10}))]},priority(e){return g(e,"WirksamerCO2Preis")?50:0},citations:[In],details:a`

  `,internals:a`
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
  `}),bi=D({title:"Wasserstofftechnologie f\xF6rdern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return S(1)},effects(e,t,n){const r=n<t+5,i=n>=t+5;return[d("stateDebt").byValue(2).if(r),d("carRenewablePercentage").byValue(1).if(i)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return C(40,90,r)},citations:[],details:a`

  `,internals:a`
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
  `}),wi=D({title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return S(8)},effects(e,t,n){return[...Ge(e,150,-2,Me({value:80,result:0},{value:50,result:-3}))]},priority(e){return g(e,"CO2PreisErhoehen")?50:0},citations:[vt],details:a`

  `,internals:a`
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
  `});const yi={AllesBleibtBeimAlten:mi,CO2PreisErhoehen:gi,Test:pi,VollerCO2Preis:vi,WasserstofftechnologieFoerdern:bi,WirksamerCO2Preis:wi},Ft=P(P({},yi),di),ki=Object.keys(Ft);function Si(e){return ht(e).map(t=>G(P({},t),{effort:t.effort||Tr}))}const ce=Si(Ft);function _i(e){const t=ce.find(n=>n.id===e);if(t)return t;throw Error(`Law #${e} not found`)}function Se(e){const t=_i(e.lawId);if(t)return G(P({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function Ne(e){return e.map(t=>{const n=ce.find(r=>r.id===t);return n||console.error(`Inconsistency: Proposed law #${t} not found`),n}).filter(t=>t)}const Di=(e,t,n)=>Object.fromEntries(e.map(r=>{const i=t(r),s=Object.fromEntries(St.map(l=>[l,n(r,i,l)]));return[r.id,s]}));function Pt(e){return e.find(t=>t.title.match(/subvention/i)&&t.title.match(/abbau/i))}var zi=V({title:"Anruf von befreundetem Unternehmer",description:`Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und m\xF6chte dich in seine
    Ferienvilla auf Sardinien einladen. Er verl\xE4sst sich nat\xFCrlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,apply(e){if(e){const t=Pt(Ne(e.proposedLaws));if(t)return[le("rejectLaw",{lawId:t.id})]}return[]},probability(e,t){return ie(e,t,{years:3,months:8})?0:Pt(Ne(e.proposedLaws))?.5:0}}),Ci=V({title:"D\xFCrreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausf\xE4lle sind enorm.",apply(){return[d("gdp").byValue(-100),d("popularity").byValue(-10)]},probability(e,t){return Math.min(1,C(400,0,e.values.co2budget)/100)},citations:[],details:a`

  `,internals:a`

  `}),Ei=V({title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute \xFCber die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",apply(){return[]}});function Wi(e,t,n){return At(e,t,n).values}function At(e,t,n){const r=pe(e.values),i=t.sort((l,u)=>{var c,v;return((c=l.treatAfterLabels)==null?void 0:c.some(E=>{var L;return(L=u.labels)==null?void 0:L.includes(E)}))?1:((v=u.treatAfterLabels)==null?void 0:v.some(E=>{var L;return(L=l.labels)==null?void 0:L.includes(E)}))?-1:0}).filter(l=>l.effectiveSince<=n),s=Di(i,l=>{const u=Or(r),c=l.effects(G(P({},e),{values:r}),l.effectiveSince,n);return Pe({dispatch:()=>{},values:r},c),u},(l,u,c)=>r[c]-u[c]);return r.co2budget-=r.co2emissions,{values:r,effectsOfLaws:s}}function _e(e){return Math.max(0,Math.min(100,e))}function Fi(e){if(e.values.co2emissions===0)return 100;const n=e.values.co2budget*pe(ge).co2emissions/ge.co2budget/e.values.co2emissions;return _e(n*50)}function Ke(e){const t=e.values.co2budget/ge.co2budget;return _e(t*100)}function He(e){const t=ge.stateDebt,n=(e.values.stateDebt-t)/t;return n>0?_e(50-n/.05*50):_e(50-n*50)}function je(e){return _e(e.values.popularity)}var Pi=V({title:"Zusammenbruch des Finanzsystems",description:`Deine Staatsfinanzen sind desastr\xF6s. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zur\xFCckahlen k\xF6nnen. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    k\xF6nntest. Das Spiel ist damit leider beendet.
  `,apply(){return[le("gameOver")]},probability(e,t){return He(e)<=0?me.finanzKollaps:0}}),Ai=V({title:"Hitzeh\xF6lle",description:`Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen K\xFCstenregionen
  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr w\xE4chst.
  Um die verbleibdenden Teile sind erbitterte K\xE4mpfe ausgebrochen.
  `,apply(){return[le("gameOver")]},probability(e,t){return Ke(e)<=0?me.hitzehoelle:0}}),Li=V({title:"Klimafl\xFCchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimafl\xFCchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply(){return[d("stateDebt").byValue(10)]},probability(e,t){return e.values.co2budget<500?.2:0},citations:[],details:a`

  `,internals:a`

  `}),Oi=V({title:"Klimaneutral !!!",description:"Geschafft! Die j\xE4hrlichen CO2 Emissionen sind auf null oder werden vollst\xE4ndig durch Absorption kompensiert.",apply(){return[le("gameOver")]},probability(e){return e.values.co2emissions<=0?me.timesUp:0}}),xi=V({title:"Happy New Year!",description:`Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen T\xE4tigkeit aufgestellt
    und kommt zu dem nicht weiter \xFCberraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht \xFCberraschend - sieht die Sache anders und verurteilt die Regierungserkl\xE4rung als haltlos.
  `,apply(){return[le("advanceYear")]},probability(e,t){return re(e.currentDate).getYear()>e.currentYear?me.newYear:0}}),Ti=V({title:"Plagiatsaff\xE4re",description:"W\xE4hrend des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet W\xE4hlerstimmen.",apply(){return[d("popularity").byValue(-10)]},probability(e,t){return ie(e,t,{years:3,months:10})?0:.5},citations:[],details:a`

  `,internals:a`

  `}),Ii=V({title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply(){return[d("popularity").byValue(-2)]},probability(e,t){return ie(e,t,{years:2,months:11})?0:.3},citations:[],details:a`

  `,internals:a`

  `}),Vi=V({title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und f\xFChrt zu einer neuen Diskussion \xFCber Lobbyismus.",apply(){return[d("popularity").byValue(-2)]},probability(e,t){return ie(e,t,{months:11})||g(e,"WirksamerCO2Preis")||g(e,"VollerCO2Preis")||g(e,"KohleverstromungEinstellen")?0:.3},citations:[],details:a`

  `,internals:a`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `}),$i=V({title:"Social Media Alarm!",description:`Deine Wahlkampfberaterin ruft dich v\xF6llig aufgel\xF6st an. Ob denn an den Geschichten was dran sein, die da im
    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.
    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.
  `,apply(){return[d("popularity").byPercent(-20)]}}),Bi=V({title:"B\xFCrgerinitiative fordert st\xE4rkere Solarf\xF6rderung",description:"Du musst entscheiden, wie gro\xDF die F\xF6rderung ausf\xE4llt. Oder willst du sie verkleinern oder sogar abschaffen?",apply(){return[]},probability(e,t){if(ie(e,t,{months:8}))return 0;const n=g(e,"SolarstromFoerderungAbschaffen"),r=g(e,"SolarstromFoerderungWieZuBeginn"),i=g(e,"SolarstromFoerdernx2");return n||r||i?.5:0},citations:[Ee],details:a`

  `,internals:a`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${I(Ee)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),Mi=V({title:"Bund der Steuerzahler fordert Abschaffung Solarf\xF6rderung",description:"Der Solaranteil ist bereits sehr hoch, die Kosten f\xFCr die F\xF6rderung sind schwer zu vermitteln.",apply(){return[]},probability(e,t){if(ie(e,t,{years:1,months:2}))return 0;const n=e.values.electricitySolar/e.values.electricityDemand,r=g(e,"SolarstromFoerdernx2"),i=g(e,"SolarstromFoerdernx4"),s=g(e,"SolarstromFoerdernx8");return n>50&&(r||i||s)?.5:0},citations:[Ee],details:a`

  `,internals:a`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${I(Ee)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),Gi=V({title:"Du hast durchgehalten",description:`Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,
    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Ma\xDFnahmen waren zu finanzieren
    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!
  `,apply(){return[le("gameOver")]},probability(e){return e.currentYear===2050?me.timesUp:0}}),Ui=V({title:"Wahl verloren",description:`Deine Beliebtheit in der Bev\xF6lkerung ist katastrophal, lieber w\xFCrde man Mao Zedong w\xE4hlen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du geh\xF6rst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon l\xE4nger kein vern\xFCnftiger Mensch mehr geglaubt.
  `,apply(){return[le("gameOver")]},probability(e){return je(e)<=0?me.wahlVerloren:0}}),Ni=V({title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet wieder einmal eine Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",apply(){return[]},probability(e,t){return ie(e,t,{months:15})?0:.7},citations:[],details:a`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:a`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `}),Ki=V({title:"Durchbruch in der Windenergie-Forschung",description:"Wissenschaftler haben eine neue Art der Energiegewinnung durch Wind entwickelt, mit der bestehende Windturbinen deutlich mehr Leistung bringen.",apply(){return[d("popularity").byValue(4),d("electricityWindEfficiency").byPercent(30)]},probability(e,t){if(ie(e,t,{years:3,months:7}))return 0;const n=g(e,"WindkraftVereinfachen")?1.5:1;return g(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?.5*n:g(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?.4*n:g(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?.3*n:0},citations:[],details:a`

  `,internals:a`

  `});const Hi={AbstandsregelnWindkraft:_n,AtomKatastrophe:xr,Bestechung:zi,Duerrewelle:Ci,EnergieStrategie:Ei,FinanzKollaps:Pi,Hitzehoelle:Ai,Klimafluechtlinge:Li,Klimaneutral:Oi,NewYear:xi,Plagiatsaffaere:Ti,PRInnenminister:Ii,PRKohleindustrie:Vi,SocialMedia:$i,SolarstromFoerderung:Bi,SolarstromFoerderung2:Mi,TimesUp:Gi,WahlVerloren:Ui,WindkraftAusschreibung:Ni,WindkraftForschung:Ki};function ji(e,t){return ie(e,t,{years:3})?0:.05}const De=ht(Hi).map(e=>G(P({},e),{probability:e.probability||ji})),Je={id:"",currentDate:at,currentYear:fe,values:ge,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],over:!1,prngState:!0};function Re(e=Je,t=nn()){const n={id:t,currentDate:e.currentDate,currentYear:e.currentYear,acceptedLaws:[...e.acceptedLaws],proposedLaws:[...e.proposedLaws],rejectedLaws:[...e.rejectedLaws],values:pe(e.values),events:[...e.events],over:e.over,prngState:e.prngState};return hi(n),n}const Ji=Object.keys(Je);function Lt(e){return Object.fromEntries(Ji.map(t=>{if(t==="prngState")return[t,fi()];if(t==="values"){const n=e[t],r=Ar.map(i=>[i,n[i]]);return[t,Object.fromEntries(r)]}else return[t,e[t]]}))}function Ot(e=ce,t=Je){const n=Re(t);return n.acceptedLaws=e.filter(r=>{var i;return(i=r.labels)==null?void 0:i.includes("initial")}).map(r=>({lawId:r.id,effectiveSince:n.currentYear})),n}const ve=[...Array(ot-fe+1).keys()].map(e=>e+fe);function Ri(e,t){const n={lawId:e,effectiveSince:t.currentYear+1},r=Se(n),i=r.effort(t);t.currentDate=re(t.currentDate).plus(i.time).toJSON();const s=r.removeLawsWithLabels,l=t.acceptedLaws.map(Se).filter(u=>!(s==null?void 0:s.some(c=>{var v;return(v=u.labels)==null?void 0:v.includes(c)}))).map(u=>({lawId:u.id,effectiveSince:u.effectiveSince}));return t.acceptedLaws=[...l,n],Ye(t)}function Yi(e){return e.currentDate=re(e.currentDate).plus(kn).toJSON(),Ye(e)}function Ye(e,t=ce,n=De,r=Wt){const i=Zi(e,n,r);if(i){const l={id:i.id,occuredIn:e.currentDate,acknowledged:!1};e.events.unshift(l)}const s=ts(e,t);return e.proposedLaws=ns(e.proposedLaws,s),i}function Zi(e,t,n){const r=Qi(e,t),i=qi(r);if(i)return i;const s=Xi(r);return es(s,n())}function Qi(e,t){return t.map(n=>G(P({},n),{prob:n.probability(e,n)})).filter(n=>n.prob>0)}function qi(e){return e.filter(t=>t.prob>1).reduce((t,n)=>n.prob>((t==null?void 0:t.prob)||0)?n:t,void 0)}function Xi(e){const t=e.map(r=>r.prob).reduce((r,i)=>r+i,0);if(t<=ut)return e;const n=ut/t;return e.map(r=>G(P({},r),{prob:r.prob*n}))}function es(e,t){for(const n of e)if(t-=n.prob,t<0)return n}function ts(e,t){const n=l=>{var u;return(u=e.acceptedLaws)==null?void 0:u.some(c=>c.lawId===l.id)},r=l=>{var u;return(u=e.rejectedLaws)==null?void 0:u.includes(l.id)},i=l=>{var u;return((u=l.labels)==null?void 0:u.includes("hidden"))||!1},s=l=>({law:l,priority:l.priority(e)});return t.filter($e(n)).filter($e(r)).filter($e(i)).map(s).filter(l=>l.priority>0).sort((l,u)=>u.priority-l.priority).map(l=>l.law.id).slice(0,ct)}function ns(e,t){const n=[...e],r=t.filter(l=>n.includes(l)),i=t.filter(l=>!r.includes(l));for(var s=0;s<n.length;){if(r.includes(n[s])){s++;continue}if(i.length===0){n.splice(s,1);continue}n[s]=i.shift(),s++}return n.push(...i.slice(0,ct-n.length)),n}const be=[{id:"start",title:"Stell dir vor...",text:a`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du ausw\xE4hlen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die W\xE4hler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine W\xE4hler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];function rs(e,t){return{startGame(n){const r=Ot(),i=Ye(r);t.createGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i}),e.push("/games/"+r.id)},async loadGame(n,r){var i;if(((i=n.state.game)==null?void 0:i.id)!==r.gameId)try{const s=await t.loadGame(r.gameId);t.saveGame(s),e.push("/games/"+s.id),n.commit("setGameState",{game:s})}catch(s){n.dispatch("error",{error:s})}},gameOver(n){n.commit("gameOver",void 0)},acceptLaw(n,r){const i=P({},n.state.game),s=Ri(r.lawId,i);t.saveGame(i),n.commit("setGameState",{game:i}),n.dispatch("applyEvent",{event:s}),t.decisionMade(i,r.lawId,!0)},rejectLaw(n,r){const i=P({},n.state.game);i.rejectedLaws=[...i.rejectedLaws,r.lawId],t.decisionMade(i,r.lawId,!1),t.saveGame(i),n.commit("setGameState",{game:i})},sitOut(n){const r=P({},n.state.game);t.decisionMade(r,"sitOut",!0);const i=Yi(r);t.saveGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i})},advanceYear(n){const r=P({},n.state.game),i=r.acceptedLaws.map(Se);r.currentYear++,r.values=Wi(r,i,r.currentYear),t.saveGame(r),n.commit("setGameState",{game:r})},applyEvent(n,r){if(!r.event)return;const i=P({},n.state.game);t.eventOccurred(i,r.event);const s=r.event.apply(i);n.dispatch("applyEffects",{changes:s})},acknowledgeEvent(n,r){const i=P({},n.state.game);i.events.find(s=>s.id===r.id).acknowledged=!0,t.saveGame(i),n.commit("setGameState",{game:i})},applyEffects(n,r){const i={dispatch:()=>{},values:pe(n.state.game.values)};Pe(i,r.changes);const s=G(P({},n.state.game),{values:i.values});t.saveGame(s),n.commit("setGameState",{game:s});const l={dispatch:n.dispatch};Pe(l,r.changes)},setupTour(n){const r=localStorage.getItem("tour")||be[0].id,i=be.find(s=>r===s.id);i?n.commit("setTour",{step:i.id,active:!0}):n.dispatch("stopTour")},nextTourStep(n){const r=be.findIndex(i=>n.state.tour.step===i.id);if(r<0||r==be.length-1)n.dispatch("stopTour");else{const i=be[r+1];n.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(n){n.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},error(n,r){n.commit("error",r)},changeRoom(n,r){n.commit("setRoom",{activeRoom:r})}}}const is={setGameState(e,t){e.game=t.game},gameOver(e){e.game=G(P({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)},setRoom(e,t){e.activeRoom=t.activeRoom}},ss={proposedLaws(e){return!e.game||!e.game.proposedLaws?[]:Ne(e.game.proposedLaws)},eventToShow(e){if(!e.game)return;const t=e.game.currentDate,n=e.game.events.filter(r=>r.occuredIn===t&&!r.acknowledged)[0];return n&&De.find(r=>r.id===n.id)}},xt=localStorage.getItem("devMode"),as={game:void 0,tour:{active:!0,step:"start"},activeRoom:"office",devMode:xt==="true"||xt===null&&!1};var B=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const os={key:0},ls=["onClick"],cs={key:1},us=x({props:{items:null},setup(e){const t=te(void 0);function n(r){t.value=t.value===r?void 0:r}return(r,i)=>e.items&&e.items.length?(h(),m("div",os,[(h(!0),m(H,null,X(e.items,(s,l)=>(h(),m("div",{key:l,class:$(["item",{opened:l===t.value}]),onClick:u=>n(l)},[o("title",null,w(s.title),1),o("p",{ref_for:!0,ref:"p"},w(s.description),513)],10,ls))),128))])):(h(),m("p",cs,"Keine Eintr\xE4ge bisher"))}});var Tt=B(us,[["__scopeId","data-v-276549a0"]]);const It=x({setup(e){const t=R(),n=p(()=>{var i;return(i=t.state.game)==null?void 0:i.acceptedLaws}),r=p(()=>ce.filter(i=>{var s,l;return((s=n.value)==null?void 0:s.some(u=>u.lawId===i.id))&&!((l=i.labels)==null?void 0:l.includes("hidden"))}));return(i,s)=>(h(),j(Tt,{items:_(r)},null,8,["items"]))}}),ds=x({setup(e){const t=R(),n=p(()=>{var r;return(r=t.state.game)==null?void 0:r.events.map(i=>De.find(s=>i.id===s.id)).filter(i=>i!=null)});return(r,i)=>(h(),j(Tt,{items:_(n)},null,8,["items"]))}});const Ze=e=>(ye("data-v-106564b2"),e=e(),ke(),e),hs={id:"archive"},fs=Ze(()=>o("h2",null,"Archiv",-1)),ms={class:"wrapper"},gs=Ze(()=>o("h3",null,"Erlassene Gesetze",-1)),ps=Ze(()=>o("h3",null,"Meldungen",-1)),vs=x({setup(e){const t=R();p(()=>{var r;return(r=t.state.game)==null?void 0:r.events});function n(){t.dispatch("changeRoom","office")}return(r,i)=>(h(),m("div",hs,[fs,o("div",ms,[o("div",null,[gs,T(It)]),o("div",null,[ps,T(ds)])]),o("button",{onClick:n},"Zur\xFCck zum B\xFCro")]))}});var bs=B(vs,[["__scopeId","data-v-106564b2"]]);const ws={},ys={class:"dialog"},ks={class:"buttons"};function Ss(e,t){return h(),m("div",ys,[xe(e.$slots,"default",{},void 0,!0),o("div",ks,[xe(e.$slots,"buttons",{},void 0,!0)])])}var Vt=B(ws,[["render",Ss],["__scopeId","data-v-531d4042"]]);const _s=o("h2",null,"Das Spiel ist leider zu Ende",-1),Ds=o("p",null,"Deine Entscheidungen haben etwas ver\xE4ndert - soviel kann man sagen.",-1),zs=o("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Cs=x({setup(e){const t=R(),n=p(()=>{const l=t.state.game;if(!l)return"";const u=Ke(l),c=Fi(l);return u<=0?"sind explodiert, das Budget ist aufgebraucht. H\xE4tte die AfD nicht besser hinbekommen.":c<5?"sind explodiert, das Budget ist zwar noch nicht ganz aufgebraucht - aber bald. H\xE4tte die AfD nicht besser hinbekommen.":c<30?"sind nicht wirklich besser geworden. Ob da noch was zu retten ist?":c<50?"sind vielleicht etwas gesunken, aber nicht genug, um mit dem verbleibenden Budget auszukommen.":c<80?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":c<100?"entwickeln sich auf einem guten Weg, beim n\xE4chsten Versuch klappt es bestimmt! ...ach ne, wir haben ja nur eienn Planeten.":"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!"}),r=p(()=>{const l=t.state.game;if(!l)return"";const u=He(l);return u<0?"sind dir leider aus dem Ruder gelaufen.":u<25?"sind dir so gerade nicht um die Ohren geflogen. Noch nicht...":u<50?"sind wohl so gerade noch ok.":"sind ausgeglichen. Die Stabilit\xE4tskriterien werden eingehalten."}),i=p(()=>{const l=t.state.game;if(!l)return"";const u=je(l);return u<0?"entspricht dem, was man von einem langh\xE4hrigen Diktator erwarten kann.":u<50?"ist nicht berauschend, wiedergew\xE4hlt w\xFCrdest du wohl eher nicht.":u<80?"reicht aus, dass du noch l\xE4nger am Ruder bleiben k\xF6nntest. Gratulation!":"ist v\xF6llig unglaubw\xFCrdig - war das wirklich eine freie Wahl?"});function s(){t.dispatch("startGame")}return(l,u)=>(h(),j(Vt,null,{default:de(()=>[_s,Ds,o("ul",null,[o("li",null,"Die CO2-Emmissionen "+w(_(n)),1),o("li",null,"Die Staatsfinanzen "+w(_(r)),1),o("li",null,"Deine Beliebtheit "+w(_(i)),1)]),zs]),buttons:de(()=>[o("button",{onClick:s},"Neuer Versuch")]),_:1}))}});const Es=x({props:{title:null,text:null},emits:["acknowledge"],setup(e,{emit:t}){function n(){t("acknowledge")}return(r,i)=>(h(),m("div",{onClick:n},[o("h2",null,w(e.title),1),o("p",null,w(e.text),1)]))}});var Ws=B(Es,[["__scopeId","data-v-f1c5d83c"]]);const Fs=x({setup(e){const t=R(),n=p(()=>t.getters.eventToShow);function r(){t.dispatch("acknowledgeEvent",n.value)}return(i,s)=>_(n)?(h(),j(Ws,{key:0,title:_(n).title,text:_(n).description,onAcknowledge:r},null,8,["title","text"])):z("",!0)}});const Ps=e=>(ye("data-v-34ab0b24"),e=e(),ke(),e),As=["onClick"],Ls=Ps(()=>o("br",null,null,-1)),Os={key:0,class:"button-bar"},xs=["onClick"],Ts=x({props:{law:null,selectable:{type:Boolean},numCards:null},emits:["selected","accepted"],setup(e,{emit:t}){const n=e,r=te(!1),i=p(()=>n.law.zIndex);function s(){t("selected")}function l(){r.value=!0}function u(c){c.animationName.match(/^twistOut-/)&&t("accepted",n.law.id)}return(c,v)=>(h(),m("div",{class:$(["Law",{accepted:r.value}]),style:Te({zIndex:_(i)}),onClick:Z(s,["stop"]),onAnimationend:u},[o("div",null,[o("h3",null,w(e.law.title),1),o("div",null,w(e.law.description),1),Ls,o("div",null,w(e.law.effortComment),1),e.selectable?(h(),m("div",Os,[o("button",{class:"accept",onClick:Z(l,["stop"])},"\u2713",8,xs)])):z("",!0)])],46,As))}});var Is=B(Ts,[["__scopeId","data-v-34ab0b24"]]);const Vs=x({setup(e){const t=R(),n=te(0),r=te(!1),i=te(!1),s=p(()=>zn(l.value.length,n.value)),l=p(()=>t.getters.proposedLaws),u=p(()=>t.state.game),c=p(()=>u.value===void 0?[]:l.value.map((k,O)=>G(P({},k),{zIndex:s.value[O],pos:O,effortComment:k.effort(u.value).text})));function v(k){t.dispatch("acceptLaw",{lawId:k})}function E(k){n.value!=k?n.value=k:(r.value=!r.value,r.value||(i.value=!1))}function L(){t.dispatch("sitOut")}function f(k){r.value&&(i.value=!0)}return(k,O)=>(h(),m(H,null,[o("div",{class:$(["ProposedLaws",{poppedUp:r.value}]),onTransitionend:f},[(h(!0),m(H,null,X(_(c),(b,W)=>(h(),j(Is,{key:b.id,law:b,selectable:r.value,numCards:_(c).length,class:"singleLaw",onAccepted:()=>v(b.id),onSelected:()=>E(W)},null,8,["law","selectable","numCards","onAccepted","onSelected"]))),128))],34),T(sn,{name:"fade"},{default:de(()=>[rt(o("div",{class:"sitOutButton",onClick:O[0]||(O[0]=()=>L())},"Aussitzen",512),[[rn,i.value]])]),_:1})],64))}});var $s=B(Vs,[["__scopeId","data-v-0179f271"]]),$t="/assets/table-top.c87bd2fd.png";const Bs=o("img",{src:$t},null,-1),Ms=[Bs],Gs=x({setup(e){const t=R(),n=p(()=>t.state.activeRoom);function r(){t.dispatch("changeRoom",n.value==="office"?"archive":"office")}return(i,s)=>(h(),m("div",{id:"archiveDoor",onClick:r},Ms))}});const Us={id:"calendar"},Ns=x({props:{year:null,month:null},setup(e){const t=e,n=p(()=>{const r=Math.floor((t.month-1)/4)*18+27+"%",i=(t.month-1)%4*21+12+"%";return{top:r,left:i}});return(r,i)=>(h(),m("div",Us,[U(w(e.year)+" ",1),o("span",{id:"month-indicator",style:Te(_(n))},null,4)]))}});var Ks=B(Ns,[["__scopeId","data-v-0f606c26"]]),Hs="/assets/plant-healthy.97772624.png",js="/assets/plant-sick.5a0f1b46.png",Js="/assets/plant-withered.b50106c7.png";const Rs={class:"container"},Ys={class:"title"},Zs={class:"progress-bar"},Qs=x({props:{title:null,value:null},setup(e){const t=e,n=p(()=>{const r=t.value>40?"green":t.value>20?"goldenrod":"red";return{width:t.value+"%",backgroundColor:r}});return(r,i)=>(h(),m("div",Rs,[o("div",Ys,w(e.title),1),o("div",Zs,[o("div",{class:"indicator",style:Te(_(n))},null,4)])]))}});var Qe=B(Qs,[["__scopeId","data-v-4278d516"]]);const qs={id:"plant"},Xs=["src","id"],ea=x({props:{value:null},setup(e){const t=e,n={healthy:Hs,sick:js,withered:Js},r=p(()=>t.value>66?"healthy":t.value>33?"sick":"withered"),i=p(()=>n[r.value]);return(s,l)=>(h(),m("div",qs,[T(Qe,{id:"indicator",title:"CO2-Budget",value:e.value},null,8,["value"]),o("img",{src:_(i),id:_(r)},null,8,Xs)]))}});var ta=B(ea,[["__scopeId","data-v-3a01fbe0"]]),na="/assets/money-short.de0f4b49.png",ra="/assets/money-less.0e85eacb.png",ia="/assets/money-more.a93f79a5.png",sa="/assets/money-much.69233a0e.png";const aa={id:"finances"},oa={key:0,src:na,id:"short"},la={key:1,src:ra,id:"less"},ca={key:2,src:ia,id:"more"},ua={key:3,src:sa,id:"much"},da=x({props:{value:null},setup(e){const t=e,n=p(()=>t.value<20),r=p(()=>t.value>=20&&t.value<50),i=p(()=>t.value>=50&&t.value<80),s=p(()=>t.value>=80);return(l,u)=>(h(),m("div",aa,[_(n)?(h(),m("img",oa)):z("",!0),_(r)?(h(),m("img",la)):z("",!0),_(i)?(h(),m("img",ca)):z("",!0),_(s)?(h(),m("img",ua)):z("",!0),T(Qe,{id:"indicator",title:"Finanzen",value:e.value},null,8,["value"])]))}});var ha=B(da,[["__scopeId","data-v-0900f55c"]]),fa="/assets/heater.43006232.png";const ma={},ga=e=>(ye("data-v-c9039a0c"),e=e(),ke(),e),pa={id:"heater"},va=ga(()=>o("img",{src:fa},null,-1)),ba=[va];function wa(e,t){return h(),m("div",pa,ba)}var ya=B(ma,[["render",wa],["__scopeId","data-v-c9039a0c"]]),ka="/assets/people-happy.acaffc0b.png",Sa="/assets/people-angry.54c1d60c.png";const _a={id:"popularity"},Da={key:0,src:ka,id:"happy"},za={key:1,src:Sa,id:"angry"},Ca=x({props:{value:null},setup(e){const t=e,n=p(()=>t.value>=50),r=p(()=>t.value<50);return(i,s)=>(h(),m("div",_a,[T(Qe,{id:"indicator",title:"Beliebtheit",value:e.value},null,8,["value"]),_(n)?(h(),m("img",Da)):z("",!0),_(r)?(h(),m("img",za)):z("",!0)]))}});var Ea=B(Ca,[["__scopeId","data-v-ba2ec690"]]),Bt="/assets/table-front.78c0f8c6.png",Mt="/assets/table-side.49774a53.png";const Wa={},Fa={id:"table"},Pa=it('<img src="'+$t+'" id="table-top" data-v-1ef8d93c><img src="'+Bt+'" id="table-front" data-v-1ef8d93c><img src="'+Bt+'" id="table-back" data-v-1ef8d93c><img src="'+Mt+'" id="table-left-side" data-v-1ef8d93c><img src="'+Mt+'" id="table-right-side" data-v-1ef8d93c>',5),Aa=[Pa];function La(e,t){return h(),m("div",Fa,Aa)}var Oa=B(Wa,[["render",La],["__scopeId","data-v-1ef8d93c"]]);const xa=x({setup(){const e=R();return e.dispatch("setupTour"),{store:e}},components:{Dialog:Vt},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return be.find(e=>e.id===this.$store.state.tour.step)},title(){var e;return(e=this.currentStep)==null?void 0:e.title},text(){var e;return(e=this.currentStep)==null?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var n;const t=document.querySelector(".highlighted");t&&t.classList.remove("highlighted"),e&&e.highlight&&((n=document.querySelector(`#${e.highlight}`))==null||n.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}}),Ta=["innerHTML"];function Ia(e,t,n,r,i,s){const l=he("Dialog");return e.title&&e.text?(h(),j(l,{key:0},{buttons:de(()=>[o("button",{onClick:t[0]||(t[0]=(...u)=>e.stop&&e.stop(...u))},"Tour beenden"),o("button",{onClick:t[1]||(t[1]=(...u)=>e.next&&e.next(...u))},"Weiter")]),default:de(()=>[o("h2",null,w(e.title),1),o("div",{innerHTML:e.text},null,8,Ta)]),_:1})):z("",!0)}var Va=B(xa,[["render",Ia]]),$a="/assets/board-front.41330f02.png",Gt="/assets/board-side.d7181ded.png",Ba="/assets/tv-front.82df5c0c.png",Ma="/assets/news.c4bbc2d0.png",Ut="/assets/tvset-legs.78b387df.png";const Nt=e=>(ye("data-v-3be0e128"),e=e(),ke(),e),Ga={id:"tvset"},Ua=it('<div id="board" data-v-3be0e128><img id="board-front" src="'+$a+'" data-v-3be0e128><img id="board-left" src="'+Gt+'" data-v-3be0e128><img id="board-right" src="'+Gt+'" data-v-3be0e128><div id="board-top" data-v-3be0e128></div></div>',1),Na={id:"tv"},Ka=Nt(()=>o("img",{id:"tv-front",src:Ba},null,-1)),Ha={key:0,id:"news",src:Ma},ja=Nt(()=>o("div",{id:"legs"},[o("img",{id:"legs-front",src:Ut}),o("img",{id:"legs-back",src:Ut})],-1)),Ja=x({setup(e){const t=R(),n=p(()=>t.getters.eventToShow);return(r,i)=>(h(),m("div",Ga,[Ua,o("div",Na,[Ka,_(n)?(h(),m("img",Ha)):z("",!0)]),ja]))}});var Ra=B(Ja,[["__scopeId","data-v-3be0e128"]]);const Ya={id:"office"},Za=x({setup(e){const t=R(),n=p(()=>t.state.devMode),r=p(()=>{var c;return((c=t.state.game)==null?void 0:c.currentYear)||2021}),i=p(()=>{var c;return re((c=t.state.game)==null?void 0:c.currentDate).lux.month}),s=p(()=>{const c=t.state.game;return c?He(c):0}),l=p(()=>{const c=t.state.game;return c?je(c):0}),u=p(()=>{const c=t.state.game;return c?Ke(c):0});return(c,v)=>(h(),m("div",Ya,[_(n)?(h(),j(Gs,{key:0})):z("",!0),T(Ks,{year:_(r),month:_(i)},null,8,["year","month"]),T(ya),T(Ea,{value:_(l)},null,8,["value"]),T(Ra),T(ta,{value:_(u)},null,8,["value"]),T(Oa),T(ha,{value:_(s)},null,8,["value"]),T($s),T(Va)]))}});const Qa={id:"camera"},qa=o("div",{id:"walls"},[o("div",{id:"wall-back"},[o("h1",null,"#ich-kann-klima")]),o("div",{id:"wall-left"}),o("div",{id:"wall-right"})],-1),Xa=x({setup(e){const t=R(),n=p(()=>t.state.activeRoom);function r(){const s=window.innerHeight,l=window.innerWidth,u=Math.min(s/800,l/1e3),c=(l-1e3*u)/2;document.documentElement.style.setProperty("--scale",`${u}`),document.documentElement.style.setProperty("--translateX",`${c}px`)}const i=p(()=>{const s=t.state.game;return s?s.over:!1});return an(r),on(()=>{window.addEventListener("resize",r)}),(s,l)=>(h(),m("div",{class:$(["game-setup",_(n)])},[o("div",Qa,[qa,T(Za),T(bs),_(i)?(h(),j(Cs,{key:0})):z("",!0)]),T(Fs)],2))}});const eo=x({components:{GameSetup:Xa,AcceptedLaws:It},setup(){return{store:R()}},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,n){n(r=>r.startGame(e.params.id))}});function to(e,t,n,r,i,s){const l=he("GameSetup");return h(),j(l)}var Kt=B(eo,[["render",to],["__scopeId","data-v-3637ce73"]]);const no=[{path:"/",redirect:"/games"},{path:"/games",component:Kt},{path:"/games/:id",component:Kt}],Ht=ln({history:cn(),routes:no});function ro(e){return{createGame(t){return e.add("post","/games",t)},loadGame(t){return e.add("get","/games/"+t,void 0,0)},saveGame(t){return e.remove("put","/games/"+t.id),e.add("put","/games/"+t.id,t)},decisionMade(t,n,r){return e.add("post","/games/"+t+"/decisions/"+n,{accepted:r})},eventOccurred(t,n){return e.add("post","/games/"+t+"/events/"+n)}}}function io(e,t){let n=[],r;async function i(){if(r&&(clearTimeout(r),r=void 0),n.length){const s=n[0],{method:l,path:u,data:c,retry:v,resolve:E,reject:L}=s;try{if((t==null?void 0:t.navigator)&&!(t==null?void 0:t.navigator.onLine))throw Error("Browser is offline");const f=await e(l,u,c);n.shift(),E(f)}catch(f){v?s.retry=Math.max(-1,v-1):(n.shift(),L(f))}n.length&&(r=setTimeout(i,(t==null?void 0:t.timeout)||1e4))}}return{add(s,l,u,c=-1){return new Promise((v,E)=>{n.push({method:s,path:l,data:u,retry:c,resolve:v,reject:E}),r||i()})},remove(s,l){n=n.filter(u=>u.method.toLowerCase()!==s.toLowerCase()||u.path!==l)},callsPending(){return n.length>0}}}function so(e,t,n=console){return async function(r,i,s){var l;try{const u={method:r};["post","put","patch"].includes(r)&&(u.body=JSON.stringify(s),u.headers={["content-type"]:"application/json"});const c=await t(e+i,u),v=((l=c.headers.get("Content-Type"))==null?void 0:l.match(/json/))?await c.json():await c.text();if(c.ok)return v;throw Error(v.message||v)}catch(u){throw n.error(u),u}}}function ao({api:e,logger:t=console,storage:n=localStorage}){return{createGame(r){const i=Lt(r);n.setItem("game",JSON.stringify(i)),e.createGame(i).catch(s=>{t.warn("Cannot save new game - trying again later",s)})},async loadGame(r){const i=n.getItem("game");if(i){const l=JSON.parse(i);if(l.id===r)return Re(l,r)}const s=await e.loadGame(r);return Re(s,r)},saveGame(r){const i=Lt(r);n.setItem("game",JSON.stringify(i)),e.saveGame(i).catch(s=>{t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",s)})},decisionMade(r,i,s){e.decisionMade(r.id,i,s)},eventOccurred(r,i){e.eventOccurred(r.id,i.id)}}}const oo=localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",lo=so(oo,fetch),co=io(lo),uo=ro(co),ho=ao({api:uo}),fo=rs(Ht,ho),jt=Symbol();function R(){return un(jt)}const mo=dn({state:as,mutations:is,actions:fo,getters:ss});function Jt(e,t,...n){for(const r of n){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function go(e,t,n){function r(c){return e[c].toFixed(2)}function i(c){return(c>0?"+":"")+c.toFixed(2)}function s(c){const v=n.find(E=>E.type==="modify"&&E.name===c);return v&&v.condition?v.value:0}function l(c){const v=s(c),E=t?t[c]:0;return v&&Math.abs(v-E)<.001?i(v):v?i(v)+" / "+i(E):E!=0?i(E):""}return zt.map(c=>({id:c.name,unit:c.unit,value:r(c.name),effect:l(c.name),class:c.writable?"writable":"calculated"}))}function po(e,t,n,r){const i=e.proposedLaws,s=e.acceptedLaws.map(c=>c.lawId),l=e.rejectedLaws;function u(c){return s.includes(c)?"a":i.includes(c)?"p":l.includes(c)?"r":"x"}return r.map(c=>({id:c.id,priority:c.priority(e),state:u(c.id)})).sort((c,v)=>Jt(c,v,t,"id")*n).map(c=>G(P({},c),{priority:c.priority.toFixed(2)}))}function vo(e,t,n,r){return r.map(i=>({id:i.id,probability:i.probability(e,i)})).sort((i,s)=>Jt(i,s,t,"id")*n).map(i=>G(P({},i),{probability:(i.probability*100).toFixed(2)}))}const bo={key:0},wo=["href"],yo=U(". "),ko={key:1},So={key:2},_o=U("Bemerkung: "),Do=["innerHTML"],zo=U(". "),Co={key:3},Eo=U("Internes: "),Wo=["innerHTML"],Fo=U(". "),Po={key:4},Ao=["href"],Lo=U(". "),Oo={key:5},xo=["href"],To=U(". "),Io={key:6},Vo=["href"],$o=U(". "),Bo=x({props:{citation:null,showInternals:{type:Boolean}},setup(e){const t=e,n=p(()=>t.citation.url.toString()),r=p(()=>t.citation.title||t.citation.url.toString());return(i,s)=>(h(),m("p",null,[e.citation.authors?(h(),m("span",bo,w(e.citation.authors+e.citation.dateString())+". ",1)):z("",!0),o("a",{target:"_blank",rel:"noreferrer noopener",href:_(n)},'"'+w(_(r))+'"',9,wo),yo,e.citation.publisher?(h(),m("span",ko,w(e.citation.publisher)+". ",1)):z("",!0),e.citation.comment?(h(),m("span",So,[_o,o("span",{innerHTML:e.citation.comment},null,8,Do),zo])):z("",!0),e.showInternals&&e.citation.internalComment?(h(),m("span",Co,[Eo,o("span",{innerHTML:e.citation.internalComment},null,8,Wo),Fo])):z("",!0),e.citation.referringUrl?(h(),m("span",Po,[o("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,Ao),Lo])):z("",!0),e.citation.archiveUrl?(h(),m("span",Oo,[o("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,xo),To])):z("",!0),e.citation.localCopy?(h(),m("span",Io,[o("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,Vo),$o])):z("",!0)]))}}),Mo=x({props:{chartData:null,paramId:null,selectedYear:null},emits:["update:selectedYear"],setup(e,{emit:t}){const n=e,r="#9c6d00",i="#ce900070",s="#644600",l=p(()=>({xaxis:{categories:ve,labels:{rotate:-90}},chart:{id:n.paramId+"-withLawEffects",animations:{enabled:!1},stacked:!0},colors:[r,s,i],legend:{show:!1},markers:{size:0},dataLabels:{enabled:!1}})),u=p(()=>n.chartData.values.map((b,W)=>({value:b[n.paramId],change:n.chartData.changes[W][n.paramId]}))),c=p(()=>u.value.map(b=>{const W=b.value-b.change;return b.change*b.value>0?W*b.value>0?{value:W,gain:b.change,loss:0}:{value:0,gain:b.value,loss:W}:{value:b.value,gain:0,loss:-b.change}})),v=p(()=>[{name:"Simulated "+n.paramId,data:c.value.map(b=>Math.round(b.value))},{name:"Gains of "+n.paramId+" by selected law",data:c.value.map(b=>Math.round(b.gain))},{name:"Losses of "+n.paramId+" by selected law",data:c.value.map(b=>Math.round(b.loss))}]),E=te();let L;function f(){var b,W;((b=E.value)==null?void 0:b.chart)!=null&&L!=null&&((W=E.value)==null||W.toggleDataPointSelection(0,L)),L=void 0}function k(b){var W,M;if(((W=E.value)==null?void 0:W.chart)!=null&&b){const q=b-ve[0];L!=q&&(f(),L=q,(M=E.value)==null||M.toggleDataPointSelection(0,q))}else f()}hn(()=>k(n.selectedYear),{flush:"post"});function O(b,W,M){const q=M.dataPointIndex;q<0||(q===L?(L=void 0,t("update:selectedYear",void 0)):(L=q,t("update:selectedYear",q+ve[0])))}return(b,W)=>(h(),m("div",null,[o("div",null,w(e.paramId),1),T(_(fn),{ref_key:"chart",ref:E,type:"bar",options:_(l),series:_(v),onClick:O},null,8,["options","series"])]))}}),Go=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"AutomatischeSektoren",effectiveSince:2021},{lawId:"InitialAtomausstieg",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2022},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2022},{lawId:"NetzausbauErleichtern",effectiveSince:2022},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2023},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2023},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2023},{lawId:"StromspeicherungErleichtern",effectiveSince:2024},{lawId:"KohleverstromungEinstellen",effectiveSince:2024},{lawId:"StromspeicherungFoerdern",effectiveSince:2025},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2026},{lawId:"CO2PreisErhoehen",effectiveSince:2026},{lawId:"CO2AbscheidungUndSpeicherungFoerdern",effectiveSince:2029}]},{name:"Old Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024}]}],Le=(e,t)=>e.lawId===t.lawId&&e.effectiveSince===t.effectiveSince,Uo=e=>e.map((t,n)=>G(P({},t),{sortId:n}));function No(...e){const t=e.map(n=>n.length===0?0:n[n.length-1].sortId+1);return t.length===0?0:Math.max.apply(Math,t)}function Ko(e){const t=te([]),n=te([]),r=te(!1);function i(O,b){var Xe;const W=t.value,M={lawId:O,effectiveSince:b,sortId:0},q=(Xe=n.value.find(we=>Le(M,we)))==null?void 0:Xe.sortId;M.sortId=q!=null?q:No(W,n.value),t.value=W.filter(we=>we.lawId!=O).concat(M).sort((we,Yt)=>we.sortId-Yt.sortId)}function s(O){t.value=t.value.filter(b=>b.lawId!=O)}function l(O,b){const W={lawId:O,effectiveSince:b,sortId:0};t.value.some(M=>Le(M,W))?s(O):i(O,b)}function u(O){t.value=Uo(O.laws)}function c(){r.value=!r.value,r.value?n.value=t.value:n.value=[]}const v=p(()=>{var O;return{name:"Current Game",laws:((O=e.value)==null?void 0:O.acceptedLaws)||[]}}),E=p(()=>[v.value,...Go]),L=p(()=>{const O=t.value.map(W=>G(P({},W),{cls:n.value.some(M=>Le(W,M))?"both":"new"})),b=n.value.filter(W=>!t.value.some(M=>Le(M,W))).map(W=>G(P({},W),{cls:"saved"}));return[...O,...b].sort((W,M)=>W.sortId-M.sortId)}),f=Rt(t),k=Rt(n);return{addToSimulation:i,removeFromSimulation:s,toggleInSimulation:l,loadPreset:u,compareActive:r,toggleCompare:c,presets:E,simulatedLaws:L,simulation:f,secondSimulation:k}}function Rt(e){return p(()=>{const t=Ot();return t.acceptedLaws=[...e.value],ve.map(r=>{for(;r>t.currentYear;){t.currentYear++,t.acceptedLaws=Ho(t.acceptedLaws,t.currentYear);const i=t.acceptedLaws.map(u=>Se(u)),{values:s,effectsOfLaws:l}=At(t,i,t.currentYear);if(t.values=s,r===t.currentYear)return{values:s,effectsOfLaws:l}}return{values:t.values,effectsOfLaws:{}}})})}function Ho(e,t){const n=e.map(i=>Se(i)),r=n.filter(i=>i.effectiveSince===t).flatMap(i=>i.removeLawsWithLabels||[]);return n.filter(i=>i.effectiveSince>=t||!r.some(s=>{var l;return(l=i.labels)==null?void 0:l.includes(s)})).map(i=>({lawId:i.id,effectiveSince:i.effectiveSince}))}const jo=x({directives:{clickaway:st},setup(e,t){const n=te(!1);return{menuIsOpen:n,toggle:()=>n.value=!n.value,close:()=>n.value=!1}}});function Jo(e,t,n,r,i,s){const l=mn("clickaway");return rt((h(),m("span",{onClick:t[0]||(t[0]=(...u)=>e.toggle&&e.toggle(...u)),class:$(["menu",{menuIsOpen:e.menuIsOpen}])},[xe(e.$slots,"default",{},void 0,!0)],2)),[[l,e.close]])}var Ro=B(jo,[["render",Jo],["__scopeId","data-v-06206e01"]]);const Yo=x({directives:{clickaway:st},components:{Citation:Bo,PeekChart:Mo,Menu:Ro},setup(){const e=R(),t=p(()=>e.state.game),n=Ko(t);return P({store:e,game:t,gameYears:ve},n)},data(){return{lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lastSelected:void 0,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,yearSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1}},methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){e===this.lawSelected?this.lawSelected=void 0:(this.lastSelected="law",this.lawSelected=e)},selectEvent(e){e===this.eventSelected?this.eventSelected=void 0:(this.lastSelected="event",this.eventSelected=e)},selectParam(e){e===this.paramSelected?this.paramSelected=void 0:(this.lastSelected="param",this.paramSelected=e)},selectYear(e){e===this.yearSelected?this.yearSelected=void 0:(this.lastSelected="year",this.yearSelected=e)},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0,this.yearSelected=void 0},dragStart(e,t){const{lawId:n,year:r}=t;!e.dataTransfer||(e.dataTransfer.dropEffect="link",n&&e.dataTransfer.setData("lawId",n),r&&e.dataTransfer.setData("year",r.toString()))},getDropped(e,t,n){if(!e.dataTransfer)return;const r=e.dataTransfer.getData(t);return n.find(i=>i==r)},onDrop(e,t){const{lawId:n,year:r}=t,i=this.getDropped(e,"lawId",ki),s=this.getDropped(e,"year",this.gameYears);r&&i?this.addToSimulation(i,r):n&&s?this.addToSimulation(n,s):n&&i&&this.removeFromSimulation(i)},rightClick(e,t){this.toggleInSimulation(e,t)}},computed:{startYearOfSelected(){if(!this.lawSelected)return;if(!this.game)return fe;const e=this.simulatedLaws.find(t=>t.lawId===this.lawSelected);return e?e.effectiveSince:this.game.currentYear},selectedLaw(){return ce.find(e=>e.id===this.lawSelected)},lawEffort(){var e;if(!!this.game)return(e=this.selectedLaw)==null?void 0:e.effort(this.game)},selectedEvent(){return De.find(e=>e.id===this.eventSelected)},selectedParam(){return this.paramSelected?ee[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof y?e:void 0},cParam(){const e=this.selectedParam;return e instanceof Y?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},currentYear(){return this.yearSelected?this.yearSelected:this.game?this.game.currentYear:fe},effectsOfSelected(){return!this.selectedLaw||!this.startYearOfSelected||!this.game?[]:this.selectedLaw.effects(this.game,this.startYearOfSelected,this.currentYear)},sortedValues(){return this.game?go(this.simOfYear.values,this.effectsOfLawInYear,this.effectsOfSelected):[]},sortedLaws(){return this.game?po(this.game,this.lawsSortCol,this.lawsSortDir,ce):[]},sortedEvents(){return this.game?vo(this.game,this.eventsSortCol,this.eventsSortDir,De):[]},effectsOfLawInYear(){if(this.lawSelected)return this.simOfYear.effectsOfLaws[this.lawSelected];if(this.yearSelected)return this.simEffectOfLaw[this.yearSelected-this.gameYears[0]]},simOfYear(){if(this.yearSelected===void 0&&this.game){const e=this.effectsOfSelected,t=this.game.values;if(this.lawSelected===void 0||e.length===0)return{values:t,effectsOfLaws:{}};const n=pe(t);Pe({dispatch:()=>{},values:n},e);const i=Object.fromEntries(St.map(s=>[s,n[s]-t[s]]));return{values:t,effectsOfLaws:{[this.lawSelected]:i}}}else{const e=this.yearSelected?this.yearSelected-this.gameYears[0]:0;return this.simulation[e]}},simulatedValues(){return this.simulation.map(e=>e.values)},simEffectOfLaw(){if(this.lawSelected){const e=this.lawSelected;return this.simulation.map(t=>{const n=t.effectsOfLaws[e];return n||Ct})}return this.compareActive?this.secondSimulation.map((e,t)=>Object.fromEntries(Object.entries(e.values).map(([n,r])=>[n,this.simulation[t].values[n]-r]))):ve.map(e=>Ct)},chartData(){return{values:this.simulatedValues,changes:this.simEffectOfLaw}},lawsInYear(){return e=>this.simulatedLaws.filter(t=>t.effectiveSince===e)}}}),ne=e=>(ye("data-v-85b0da02"),e=e(),ke(),e),Zo={class:"peekData"},Qo={class:"Menu"},qo=U("\xA0 "),Xo=U("\xA0 "),el=U("\xA0 "),tl=U("\xA0 "),nl=U("\xA0 "),rl=U("\xA0 "),il={key:1,class:"Details sidebyside"},sl={class:"Title"},al={class:"Description"},ol={class:"SectionHead"},ll={class:"Section"},cl=ne(()=>o("div",{class:"SectionHead"},"Details:",-1)),ul=["innerHTML"],dl=ne(()=>o("div",{class:"SectionHead"},"Internes:",-1)),hl=["innerHTML"],fl=ne(()=>o("div",{class:"SectionHead"},"Referenzen:",-1)),ml={key:2,class:"Details sidebyside"},gl={class:"Title"},pl={class:"Description"},vl=ne(()=>o("div",{class:"SectionHead"},"Details:",-1)),bl=["innerHTML"],wl=ne(()=>o("div",{class:"SectionHead"},"Internes:",-1)),yl=["innerHTML"],kl=ne(()=>o("div",{class:"SectionHead"},"Referenzen:",-1)),Sl={key:3,class:"Details sidebyside"},_l={class:"Title"},Dl={key:0},zl={key:1},Cl={key:2},El=ne(()=>o("div",{class:"SectionHead"},"Details:",-1)),Wl=["innerHTML"],Fl=ne(()=>o("div",{class:"SectionHead"},"Internes:",-1)),Pl=["innerHTML"],Al=ne(()=>o("div",{class:"SectionHead"},"Referenzen:",-1)),Ll={class:"paramsHeader"},Ol=["onClick"],xl={class:"numbercol"},Tl={class:"effcol"},Il={key:5,class:"lawList sidebyside"},Vl=["onClick","onDragstart","onDrop"],$l={class:"priocol"},Bl={key:6,class:"eventList sidebyside"},Ml=["onClick"],Gl={class:"priocol"},Ul={key:7,class:"yearList sidebyside"},Nl=ne(()=>o("a",{class:"clickable"},"Presets",-1)),Kl={class:"dropdown"},Hl=["onClick"],jl=U("\xA0 "),Jl=["onClick","onDragstart","onDrop"],Rl=["onClick","onContextmenu","onDragstart","onDrop"];function Yl(e,t,n,r,i,s){var v,E,L;const l=he("PeekChart"),u=he("Citation"),c=he("Menu");return h(),m("details",Zo,[o("summary",{onClick:t[0]||(t[0]=f=>e.unselect()),class:"clickable"},"Peek"),o("div",Qo,[o("a",{onClick:t[1]||(t[1]=f=>e.showCharts=!e.showCharts),class:$(["clickable",e.showCharts?"selected":""])},"Charts",2),qo,o("a",{onClick:t[2]||(t[2]=f=>e.showDetails=!e.showDetails),class:$(["clickable",e.showDetails?"selected":""])},"Details",2),Xo,o("a",{onClick:t[3]||(t[3]=f=>e.showParams=!e.showParams),class:$(["clickable",e.showParams?"selected":""])},"Params",2),el,o("a",{onClick:t[4]||(t[4]=f=>e.toggleLawList()),class:$(["clickable",e.showLaws?"selected":""])},"Laws",2),tl,o("a",{onClick:t[5]||(t[5]=f=>e.toggleEventList()),class:$(["clickable",e.showEvents?"selected":""])},"Events",2),nl,o("a",{onClick:t[6]||(t[6]=f=>e.showYears=!e.showYears),class:$(["clickable",e.showYears?"selected":""])},"Years",2),rl]),e.showCharts?(h(),m("div",{key:0,class:$(["Details sidebyside",{lawSelected:e.lawSelected!=null}])},[e.paramSelected?(h(),j(l,{key:0,selectedYear:e.yearSelected,"onUpdate:selectedYear":t[7]||(t[7]=f=>e.yearSelected=f),chartData:e.chartData,paramId:e.paramSelected},null,8,["selectedYear","chartData","paramId"])):z("",!0),T(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[8]||(t[8]=f=>e.yearSelected=f),chartData:e.chartData,paramId:"co2emissions"},null,8,["selectedYear","chartData"]),T(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[9]||(t[9]=f=>e.yearSelected=f),chartData:e.chartData,paramId:"popularity"},null,8,["selectedYear","chartData"]),T(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[10]||(t[10]=f=>e.yearSelected=f),chartData:e.chartData,paramId:"stateDebt"},null,8,["selectedYear","chartData"]),T(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[11]||(t[11]=f=>e.yearSelected=f),chartData:e.chartData,paramId:"co2budget"},null,8,["selectedYear","chartData"])],2)):z("",!0),e.lastSelected==="law"&&e.selectedLaw&&e.showDetails?(h(),m("div",il,[o("div",sl,w(e.selectedLaw.title),1),o("div",al,w(e.selectedLaw.description),1),o("div",ol,"Aufwand: "+w((v=e.lawEffort)==null?void 0:v.time.toMonthsString()),1),o("div",ll,w((E=e.lawEffort)==null?void 0:E.text),1),cl,o("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,ul),dl,o("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,hl),fl,(h(!0),m(H,null,X(e.citationsOfLaw,(f,k)=>(h(),j(u,{class:"Section",key:k,citation:f},null,8,["citation"]))),128))])):z("",!0),e.lastSelected==="event"&&e.selectedEvent&&e.showDetails?(h(),m("div",ml,[o("div",gl,w(e.selectedEvent.title),1),o("div",pl,w(e.selectedEvent.description),1),vl,o("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,bl),wl,o("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,yl),kl,(h(!0),m(H,null,X((L=e.selectedEvent)==null?void 0:L.citations,(f,k)=>(h(),j(u,{class:"Section",key:k,citation:f},null,8,["citation"]))),128))])):z("",!0),e.lastSelected==="param"&&e.selectedParam&&e.showDetails?(h(),m("div",Sl,[o("div",_l,w(e.paramSelected)+" ["+w(e.selectedParam.unit)+"]",1),e.wParam?(h(),m("div",Dl,"Initial value: "+w(e.wParam.initialValue)+" "+w(e.wParam.unit),1)):z("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(h(),m("div",zl," Should initially be: "+w(e.cParam.shouldInitiallyBe)+" "+w(e.cParam.unit),1)):z("",!0),e.cParam?(h(),m("div",Cl," Calculation: "+w(e.cParam.valueGetter),1)):z("",!0),El,o("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,Wl),Fl,o("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,Pl),Al,(h(!0),m(H,null,X(e.selectedParam.citations,(f,k)=>(h(),j(u,{class:"Section",key:k,citation:f},null,8,["citation"]))),128))])):z("",!0),e.showParams?(h(),m("div",{key:4,class:$(["paramsList sidebyside",{lawSelected:e.lawSelected!=null}])},[o("div",Ll,[o("div",null,"Start of law: "+w(e.startYearOfSelected),1),o("div",null,"Current year: "+w(e.currentYear),1)]),o("table",null,[(h(!0),m(H,null,X(e.sortedValues,f=>(h(),m("tr",{key:f.id,class:$({clickable:!0,selected:e.paramSelected===f.id,[f.class]:!0}),onClick:k=>e.selectParam(f.id)},[o("td",null,w(f.id),1),o("td",xl,w(f.value),1),o("td",Tl,w(f.effect),1),o("td",null,w(f.unit),1)],10,Ol))),128))])],2)):z("",!0),e.showLaws?(h(),m("div",Il,[o("table",null,[o("tr",null,[o("th",{onClick:t[12]||(t[12]=f=>e.sortLaws("state")),class:"clickable"},"S"),o("th",{onClick:t[13]||(t[13]=f=>e.sortLaws("id")),class:"clickable"},"ID"),o("th",{onClick:t[14]||(t[14]=f=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(h(!0),m(H,null,X(e.sortedLaws,f=>(h(),m("tr",{key:f.id,class:$({clickable:!0,selected:e.lawSelected===f.id,[f.state]:!0}),onClick:k=>e.selectLaw(f.id),draggable:"true",onDragstart:k=>e.dragStart(k,{lawId:f.id}),onDrop:Z(k=>e.onDrop(k,{lawId:f.id}),["prevent"]),onDragover:t[15]||(t[15]=Z(()=>{},["prevent"])),onDragenter:t[16]||(t[16]=Z(()=>{},["prevent"]))},[o("td",null,w(f.state),1),o("td",null,w(f.id),1),o("td",$l,w(f.priority),1)],42,Vl))),128))])])):z("",!0),e.showEvents?(h(),m("div",Bl,[o("table",null,[o("tr",null,[o("th",{onClick:t[17]||(t[17]=f=>e.sortEvents("id")),class:"clickable"},"ID"),o("th",{onClick:t[18]||(t[18]=f=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(h(!0),m(H,null,X(e.sortedEvents,f=>(h(),m("tr",{key:f.id,class:$({clickable:!0,selected:e.eventSelected===f.id}),onClick:k=>e.selectEvent(f.id)},[o("td",null,w(f.id),1),o("td",Gl,w(f.probability),1)],10,Ml))),128))])])):z("",!0),e.showYears?(h(),m("div",Ul,[o("div",null,[T(c,null,{default:de(()=>[Nl,o("ul",Kl,[(h(!0),m(H,null,X(e.presets,f=>(h(),m("li",{key:f.name,class:"clickable",onClick:k=>e.loadPreset(f)},w(f.name),9,Hl))),128))])]),_:1}),jl,o("a",{class:$(["clickable",e.compareActive?"selected":""]),onClick:t[19]||(t[19]=f=>e.toggleCompare())},"Compare",2)]),o("table",null,[(h(!0),m(H,null,X(e.gameYears,f=>(h(),m(H,{key:f},[o("tr",{class:$({clickable:!0,selected:e.yearSelected===f}),onClick:k=>e.selectYear(f),draggable:"true",onDragstart:k=>e.dragStart(k,{year:f}),onDrop:Z(k=>e.onDrop(k,{year:f}),["prevent"]),onDragover:t[20]||(t[20]=Z(()=>{},["prevent"])),onDragenter:t[21]||(t[21]=Z(()=>{},["prevent"]))},[o("th",null,w(f),1)],42,Jl),(h(!0),m(H,null,X(e.lawsInYear(f),({lawId:k,cls:O})=>(h(),m("tr",{key:k,class:$({clickable:!0,selected:e.lawSelected===k,[O]:!0}),onClick:b=>e.selectLaw(k),onContextmenu:Z(b=>e.rightClick(k,f),["right","prevent"]),draggable:"true",onDragstart:b=>e.dragStart(b,{lawId:k}),onDrop:Z(b=>e.onDrop(b,{year:f}),["prevent"]),onDragover:t[22]||(t[22]=Z(()=>{},["prevent"])),onDragenter:t[23]||(t[23]=Z(()=>{},["prevent"]))},[o("td",null,w(k),1)],42,Rl))),128))],64))),128))])])):z("",!0)])}var Zl=B(Yo,[["render",Yl],["__scopeId","data-v-85b0da02"]]);const Ql={class:"perspective"},ql={class:"peek"},Xl=x({setup(e){const t=R(),n=p(()=>t.state.devMode);return(r,i)=>{const s=he("router-view");return h(),m(H,null,[o("div",Ql,[T(s)]),o("div",ql,[_(n)?(h(),j(Zl,{key:0})):z("",!0)])],64)}}}),qe=gn(Xl);qe.use(mo,jt);qe.use(Ht);qe.mount("#app");
