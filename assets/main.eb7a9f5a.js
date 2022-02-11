var Ht=Object.defineProperty,jt=Object.defineProperties;var Jt=Object.getOwnPropertyDescriptors;var Xe=Object.getOwnPropertySymbols;var Yt=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable;var Oe=(e,t,n)=>t in e?Ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||(t={}))Yt.call(t,n)&&Oe(e,n,t[n]);if(Xe)for(var n of Xe(t))Rt.call(t,n)&&Oe(e,n,t[n]);return e},G=(e,t)=>jt(e,Jt(t));var O=(e,t,n)=>(Oe(e,typeof t!="symbol"?t+"":t,n),n);import{D as et,a as Se,s as Zt,b as tt,v as Qt,d as V,r as ee,c as y,o as f,e as g,f as l,t as w,w as Y,g as C,n as $,h as Te,u as D,p as _e,i as De,F as H,j as Q,k as q,l as x,m as we,q as nt,x as qt,T as Xt,y as U,z as xe,A as rt,B as ce,C as en,E as tn,G as nn,H as rn,I as sn,V as an,J as it,K as on,L as ln}from"./vendor.2c2ad902.js";const un=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};un();const cn={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};class ze{constructor(t){O(this,"lux");t instanceof et?this.lux=t.setLocale("de-DE").setZone("Europe/Berlin"):this.lux=et.fromISO(t,{zone:"Europe/Berlin",locale:"de-DE"})}static durationBetween(t,n){return new Ie(n.lux.diff(t.lux,["months"]))}plus(t){return new ze(this.lux.plus(t.lux))}getYear(){return this.lux.get("year")}toLocaleString(){return this.lux.toLocaleString(cn)}toMonthString(){return this.lux.toLocaleString({month:"long",year:"numeric"})}toJSON(){return this.lux.toJSON()}sameInstant(t){return+this.lux==+t.lux}}class Ie{constructor(t){O(this,"lux");t instanceof Se?this.lux=t:typeof t=="string"?this.lux=Se.fromISO(t,{locale:"de-DE"}):this.lux=Se.fromObject(t)}toMonthsString(){const t=this.lux.as("months");return t===1?"1 Monat":t+" Monate"}lessThan(t){return this.lux<t.lux}}function ne(e){return new ze(e)}function Ve(e){return new Ie(e)}function dn(e,t){return ze.durationBetween(e,t)}function hn(e){return new Ie(Se.fromDurationLike({month:e}))}function fn(e,t){return e.lux<t.lux?t:e}const he=2021,st="2021-01-01",at=2050,ot=Ve("P3M"),mn=Ve("P3M"),lt=6,ut=.6;function I(e){return e}const fe={newYear:2,timesUp:3,finanzKollaps:4,wahlVerloren:5,hitzehoelle:6};function gn(e,t){const n=e.events.filter(r=>t.includes(r.id)).reduce((r,i)=>fn(r,ne(i.occuredIn)),ne(st));return dn(n,ne(e.currentDate))}function re(e,t,n){return gn(e,[t.id]).lessThan(Ve(n))}var pn=I({title:"Abstandsregeln f\xFCr Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erh\xF6ht wird. Das f\xFChrte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",apply(){return[]}});const vn=new Zt.exports.Converter;function ct(e){return e>0?[...Array(e)].map((t,n)=>n):[]}function bn(e,t){const n=e-t-1;return[...ct(t),Math.max(t,n),...ct(n).reverse()]}function s(e,...t){let n=e.map((i,a)=>i+(t[a]||"")).join("").split(`
`);n[0].length===0&&n.shift();const r=n[0].match(/^(\s+)/);return r&&!n.filter(i=>i.trim()).some(i=>!i.startsWith(r[1]))&&(n=n.map(i=>i.replace(r[1],""))),vn.makeHtml(n.join(`
`))}function $e(e){return t=>!e(t)}function dt(e){return Object.entries(e).map(([t,n])=>G(L({},n),{id:t}))}function ht(e,t){const n=e.value-t.value;return r=>{const i=e.result*(r-t.value)/n,a=t.result*(r-e.value)/n;return i-a}}const wn=new Intl.DateTimeFormat("de-DE");class P{constructor(t){O(this,"url");O(this,"title");O(this,"publisher");O(this,"authors");O(this,"date");O(this,"comment");O(this,"internalComment");O(this,"localCopy");O(this,"referringUrl");O(this,"archiveUrl");O(this,"archiveNotPossible");this.url=new URL(t.url),this.title=t.title,this.publisher=t.publisher,this.authors=t.authors,this.date=t.date?new Date(t.date):void 0,this.comment=t.comment,this.internalComment=t.internalComment,this.localCopy=t.localCopy,this.referringUrl=t.referringUrl?new URL(t.referringUrl):void 0,this.archiveUrl=t.archiveUrl?new URL(t.archiveUrl):void 0,this.archiveNotPossible=t.archiveNotPossible}dateString(){const t=this.date;return t?" ("+wn.format(t)+")":""}toString(){const t=this.authors?this.authors+this.dateString():void 0,n=this.title?'"'+this.title+'"':void 0;return[t,n,this.url,this.publisher].filter(r=>r).join(", ")}}function T(e){const t=e.publisher||e.authors,n=t!=null?t+": ":"",r=e.title||e.url.toString(),i=e.url.toString();return`[[${n}${r}](${i})]`}const yn=e=>e.map(t=>t.toString()).join("; "),kn=new P({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),ie=new P({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),Ce=new P({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"});new P({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineral\xF6lsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"});new P({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile f\xFCr wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""});const Ee=new P({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),Sn=new P({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schl\xFCsselergebnisse der Studie des Wuppertal Instituts f\xFCr Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${T(Ee)}.`});Ee.comment=s`Zusammengefasst in ${T(Sn)}.`;const j=new P({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahresch\xE4tzung der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),_n=new P({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),We=new P({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enth\xE4lt CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] f\xFCr mehrere Verkehrsmittel"});new P({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""});const ft=new P({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Stra\xDFeng\xFCterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),ae=new P({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enth\xE4lt Personenkilometer-Jahreswerte f\xFCr mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"});new P({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung \xD6PNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""});const Be=new P({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),Dn=new P({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new P({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren f\xFCr Fernw\xE4rme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const mt=new P({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),zn=new P({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),gt=new P({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle w\xE4re besser."}),Cn=new P({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bev\xF6lkerung nach Nationalit\xE4t und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),En=new P({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur f\xFCr Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),Wn=new P({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische \xC4mter des Bundes und der L\xE4nder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new P({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});new P({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgem\xE4\xDF - Interview mit Prof. Stefan G\xF6ssling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""});const Fn=new P({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),pt=new P({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),Pn=new P({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),vt=new P({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten f\xFCr die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class bt{constructor(t){O(this,"unit");O(this,"citations");O(this,"details");O(this,"internals");this.unit=t.unit,this.citations=t.citations?t.citations:[],this.details=t.details?t.details:"",this.internals=t.internals?t.internals:""}citationsDesc(){return yn(this.citations)}}const An={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class k extends bt{constructor(t){super(t);O(this,"writable",!0);O(this,"initialValue");O(this,"applyBounds");this.initialValue=t.initialValue,this.applyBounds=t.applyBounds||An[t.unit]}}class J extends bt{constructor(t){super(t);O(this,"writable",!1);O(this,"valueGetter");O(this,"shouldInitiallyBe");this.valueGetter=t.valueGetter,this.shouldInitiallyBe=t.shouldInitiallyBe}}const Ln=new k({unit:"MioTons",initialValue:6700,citations:[kn],details:s`

  `,internals:s`

  `}),On=new k({unit:"MioTons",initialValue:186.793,citations:[j],details:s`

  `,internals:s`

  `}),Tn=new J({unit:"MioTons",valueGetter(e){return e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4},shouldInitiallyBe:159.696,citations:[j,ft],details:s`

  `,internals:s`
    ${T(j)}: 159.696 as MioTons

    ${T(ft)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),xn=new J({unit:"MioTons",valueGetter(e){return e.co2emissionsStreetVehicles+e.publicLocalCapacity*65/1e6+e.publicNationalCapacity*32/1e6+e.airDomesticUsage*222/1e6+1.641},citations:[We,j],details:s`

  `,internals:s`
    ${T(We)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${T(j)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${T(j)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${T(j)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),In=new J({unit:"MioTons",valueGetter(e){return e.buildingsSourceElectricity*0+e.buildingsSourceBio*0+e.buildingsSourceGas*.247+e.buildingsSourceOil*.318+e.buildingsSourceTele*.16},citations:[j,Be],details:s`

  `,internals:s`
    TODO: #91 Gibt es hier bessere Quellen?

    ${T(Be)}: 247g CO2 pro kWh Erdgas.

    ${T(Be)}: 318g CO2 pro kWh Erdöl.

    ${T(Dn)}: 160g CO2 pro kWh Fernwärme.

    ${T(j)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),Vn=new k({unit:"MioTons",initialValue:67.936,citations:[j],details:s`

  `,internals:s`

  `}),$n=new k({unit:"MioTons",initialValue:9.243,citations:[j],details:s`

  `,internals:s`

  `}),Bn=new J({unit:"MioTons",valueGetter(e){return e.electricityGas*.399+e.electricitySolar*.058+e.electricityWind*.005+e.electricityWater*.02+e.electricityHardCoal*.835+e.electricityBrownCoal*1.137+e.electricityBiomass*.03+e.electricityNuclear*.005},citations:[mt,j],details:s`

  `,internals:s`
    ${T(mt)}:
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
    - Diskrepanz zu ${T(zn)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${T(j)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),Mn=new k({unit:"MioTons",initialValue:0,citations:[],details:s`

  `,internals:s`

  `}),Gn=new J({unit:"MioTons",valueGetter(e){return e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers-e.co2directAirCapture},details:s`

  `,internals:s`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${T(j)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[_n]}),Un=new k({unit:"TWh",initialValue:480.54,citations:[ie],details:s`

  `,internals:s`

  `}),Nn=new k({unit:"Percent",initialValue:50,citations:[],details:s`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:s`

  `}),Kn=new k({unit:"TWh",initialValue:51.42,citations:[ie],details:s`

  `,internals:s`

  `}),Hn=new k({unit:"TWh",initialValue:131.85,citations:[ie],details:s`

  `,internals:s`

  `}),jn=new k({unit:"TWh",initialValue:6,citations:[ie],details:s`

  `,internals:s`

  `}),Jn=new k({unit:"Percent",initialValue:100,citations:[Pn],details:s`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),Yn=new k({unit:"TWh",initialValue:14.99,citations:[ie],details:s`

  `,internals:s`

  `}),Rn=new k({unit:"TWh",initialValue:43.19,citations:[ie],details:s`

  `,internals:s`

  `}),Zn=new k({unit:"TWh",initialValue:60.91,citations:[ie],details:s`

  `,internals:s`

  `}),Qn=new k({unit:"TWh",initialValue:35.46,citations:[ie],details:s`

  `,internals:s`

  `}),qn=new k({unit:"TWh",initialValue:82.13,citations:[ie],details:s`

  `,internals:s`

  `}),Xn=new J({unit:"TWh",valueGetter(e){return e.electricityHardCoal+e.electricityBrownCoal},details:s`

  `,internals:s`

  `}),er=new J({unit:"TWh",valueGetter(e){return e.electricityDemand+e.buildingsSourceElectricity*.25-e.electricitySolar-e.electricityWind-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear},details:s`

  `,internals:s`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),tr=new k({unit:"GramPerPsgrKm",initialValue:160,citations:[We],details:s`

  `,internals:s`
    ${T(We)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),nr=new k({unit:"MioPsgrKm",initialValue:917e3,citations:[ae],details:s`

  `,internals:s`

  `}),rr=new k({unit:"Percent",initialValue:.5,citations:[gt],details:s`

  `,internals:s`
    Die verschiedenen Zahlen in ${T(gt)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),ir=new k({unit:"MioPsgrKm",initialValue:112600,citations:[ae],details:s`

  `,internals:s`

  `}),sr=new k({unit:"MioPsgrKm",initialValue:112600,citations:[ae],details:s`

  `,internals:s`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),ar=new k({unit:"MioPsgrKm",initialValue:67300,citations:[ae],details:s`

  `,internals:s`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),or=new k({unit:"MioPsgrKm",initialValue:67300,citations:[ae],details:s`

  `,internals:s`
Siehe \`publicLocalCapacity\`.
  `}),lr=new k({unit:"MioPsgrKm",initialValue:10100,citations:[ae],details:s`

  `,internals:s`

  `}),ur=new k({unit:"MioPsgrKm",initialValue:61700,citations:[ae],details:s`

  `,internals:s`

  `}),cr=new J({unit:"MioPsgrKm",valueGetter(e){return e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage},shouldInitiallyBe:1168700,citations:[ae],details:s`

  `,internals:s`

  `}),dr=new k({unit:"TWh",initialValue:226,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),hr=new k({unit:"TWh",initialValue:544,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),fr=new J({unit:"TWh",valueGetter(e){return e.buildingsPrivateDemand+e.buildingsIndustryDemand},shouldInitiallyBe:770,citations:[],details:s`

  `,internals:s`
    TODO: #78 Quelle ${T(vt)} gibt diese Zahlen nicht her.
  `}),mr=new k({unit:"TWh",initialValue:0,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 0 TWh.
  `}),gr=new k({unit:"TWh",initialValue:130,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),pr=new k({unit:"TWh",initialValue:219,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),vr=new k({unit:"TWh",initialValue:58,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),br=new J({unit:"TWh",valueGetter(e){return e.buildingsDemand-(e.buildingsSourceElectricity+e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele)},citations:[],details:s`

  `,internals:s`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${T(vt)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),wr=new k({unit:"Percent",initialValue:50,citations:[],details:s`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:s`

  `}),yr=new k({unit:"TsdPeople",initialValue:83155.031,citations:[Cn],details:s`

  `,internals:s`
Anfangswert ist der Stand 31.12.2020.
  `}),kr=new k({unit:"TsdPeople",initialValue:2695,citations:[En],details:s`

  `,internals:s`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),Sr=new k({unit:"MrdEuro",initialValue:3332,citations:[Wn],details:s`

  `,internals:s`
Anfangswert ist das BIP 2020.
  `}),_r=new k({unit:"MrdEuro",initialValue:1899,citations:[],details:s`

  `,internals:s`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),X={co2budget:Ln,co2emissionsIndustry:On,co2emissionsStreetVehicles:Tn,co2emissionsMobility:xn,co2emissionsAgriculture:Vn,co2emissionsBuildings:In,co2emissionsOthers:$n,co2emissionsEnergy:Bn,co2directAirCapture:Mn,co2emissions:Gn,electricityDemand:Un,electricityGridQuality:Nn,electricitySolar:Kn,electricityWind:Hn,electricityWindOnshoreMaxNew:jn,electricityWindEfficiency:Jn,electricityWater:Yn,electricityBiomass:Rn,electricityNuclear:Zn,electricityHardCoal:Qn,electricityBrownCoal:qn,electricityCoal:Xn,electricityGas:er,carEmissionFactor:tr,carUsage:nr,carRenewablePercentage:rr,publicLocalUsage:ir,publicLocalCapacity:sr,publicNationalUsage:ar,publicNationalCapacity:or,airDomesticUsage:lr,airIntlUsage:ur,passengerTransportUsage:cr,buildingsIndustryDemand:dr,buildingsPrivateDemand:hr,buildingsDemand:fr,buildingsSourceElectricity:mr,buildingsSourceBio:gr,buildingsSourceOil:pr,buildingsSourceTele:vr,buildingsSourceGas:br,popularity:wr,numberOfCitizens:yr,unemployment:kr,gdp:Sr,stateDebt:_r},wt=Object.entries(X).filter(e=>e[1]instanceof k).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),yt=Object.entries(X).filter(e=>e[1]instanceof J).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),Dr=Object.keys(wt),kt=Object.keys(X);class St extends k{constructor(t,n){super(t);O(this,"name");this.name=n}}const zr=Object.entries(wt).map(e=>new St(e[1],e[0]));class _t extends J{constructor(t,n){super(t);O(this,"name");this.name=n}}Object.entries(yt).map(e=>new _t(e[1],e[0]));const Dt=Object.entries(X).map(e=>e[1]instanceof k?new St(e[1],e[0]):new _t(e[1],e[0])),me=zr.reduce((e,t)=>(e[t.name]=t.initialValue,e),{}),zt=Dt.reduce((e,t)=>(e[t.name]=0,e),{});function ge(e){const t=L({},e);return Object.entries(yt).forEach(n=>Object.defineProperty(t,n[0],{enumerable:!0,get:()=>n[1].valueGetter(t)})),t}function Cr(e){return L({},e)}function oe(e,t){return{type:"dispatch",condition:!0,if(n){return this.condition=n,this},apply(n){this.condition&&n.dispatch(e,t)}}}function d(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(t){return this.percent=t,this},byValue(t){return this.value=t,this},setValue(t){return this.absolute=t,this},if(t){return this.condition=t,this},getOldNew(t){const n=this.name,r=t[n];if(!this.condition)return{oldVal:r,newVal:r};const i=X[n],a=this.absolute!=null?this.absolute:r+(this.value||r*this.percent/100),o=i.applyBounds(a);return{oldVal:r,newVal:o}},getChange(t){if(!this.condition)return 0;const{oldVal:n,newVal:r}=this.getOldNew(t);return r-n},apply(t){if(t.values!=null&&this.condition){const{newVal:n}=this.getOldNew(t.values);t.values[this.name]=n}}}}function R(e,t){if(X[e].unit!=X[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(n){return this.percent=n,this},byValue(n){return this.value=n,this},if(n){return this.condition=n,this},getEffect(n){const r=n[this.to],i=n[this.from];if(!this.condition)return{oldTo:r,oldFrom:i,newTo:r,newFrom:i};const a=X[this.to],o=X[this.from],u=this.value||r*this.percent/100,c=a.applyBounds(r+u)-r,p=-o.applyBounds(i-c)+i,_=r+p,A=i-p;return{oldTo:r,newTo:_,oldFrom:i,newFrom:A}},apply(n){if(n.values!=null&&this.condition){const{newTo:r,newFrom:i}=this.getEffect(n.values);n.values[this.to]=r,n.values[this.from]=i}}}}function Fe(e,t){t.filter(n=>n.condition).forEach(n=>n.apply(e))}var Er=I({title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply(){return[oe("gameOver")]},probability(e){return e.acceptedLaws.find(n=>n.lawId==="KernenergienutzungVerlaengern")?.5:0},citations:[],details:s`

  `,internals:s`

  `});const Wr=e=>({time:ot,text:`Braucht ${ot.toMonthsString()}.`});function S(e,t="Braucht {months}."){const n=hn(e),r=t.replace(/{months}/g,n.toMonthsString());return{time:n,text:r}}function z(e){return e}function E(e,t,n){const r=n-e,i=t-e;if(i===0)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return r/i*100}function Me(e,t){const n=t.value-e.value,r=n/Math.abs(n),i=r*e.value;return a=>n===0||r*a<=i?e.result:ht(e,t)(a)}function v(e,t,n=0){if(!le.map(r=>r.id).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some(r=>r.lawId===t&&r.effectiveSince<=e.currentYear+n)}function Fr(e){const t=e.events[0];return t&&ne(t.occuredIn).sameInstant(ne(e.currentDate))?t:void 0}function N(e,t){const n=Fr(e);return n!=null&&t.includes(n.id)}function se(e){const t=e.values;return t.electricityWind/t.electricityDemand*100}function K(e){return(e.values.electricityWind+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}function Pr(e,t){const n=e.values,r=X[t].initialValue,i=n.electricityGridQuality,a=n.electricityDemand;return ht({value:50,result:r},{value:100,result:a})(i)}function de(e,t,n){const r=e.values,i=r.electricityCoal+r.electricityGas;if(i<=0)return[];const a=r.electricityHardCoal/i,o=r.electricityBrownCoal/i,u=r.electricityGas/i;return[R(t,"electricityHardCoal").if(a>0).byValue(a*n),R(t,"electricityBrownCoal").if(o>0).byValue(o*n),d(t).if(u>0).byValue(u*n)]}function Pe(e,t,n,r){const i=v(e,"WindkraftVereinfachen")?0:5;if(e.currentYear<r+i)return[];const a=e.values,u=(Math.min(t,a.electricityWindOnshoreMaxNew)+n)*a.electricityWindEfficiency/100,c=a.electricityWind,p=Math.min(c+u,Pr(e,"electricityWind"))-c;return de(e,"electricityWind",p)}function Ge(e,t,n,r){const i=r(K(e)),a=r(e.values.carRenewablePercentage);return[d("stateDebt").byValue((25-t)/1e3*e.values.co2emissions),d("popularity").byValue(i+a),d("co2emissionsIndustry").byPercent(n),d("co2emissionsAgriculture").byPercent(n),d("co2emissionsOthers").byPercent(n),R("electricityBrownCoal","electricityWind").byPercent(.7*n),R("electricityHardCoal","electricityWind").byPercent(.7*n),R("electricityBrownCoal","electricitySolar").byPercent(.3*n),R("electricityHardCoal","electricitySolar").byPercent(.3*n),R("buildingsSourceOil","buildingsSourceBio").byPercent(n),R("carUsage","publicNationalUsage").byPercent(.5*n),R("carUsage","publicLocalUsage").byPercent(.5*n)]}var Ar=z({title:"Abstandsregeln f\xFCr Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(12,"BIs werden es Dir schwer machen. {months}!")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[d("popularity").byValue(-40).if(t===n),d("electricityWindOnshoreMaxNew").setValue(1e3).if(n>=t+r)]},priority(e){return N(e,["AbstandsregelnWindkraft"])?100:v(e,"AbstandsregelnFuerWindkraftLockern")?E(80,25,se(e)):0}}),Lr=z({title:"Abstandsregeln f\xFCr Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln f\xFCr Windkraftanlagen sowie Bauerlaubniss in W\xE4ldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(6,"Das schaffst Du in {months}n.")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[d("popularity").byValue(-3).if(t===n),d("electricityWindOnshoreMaxNew").setValue(30).if(n>=t+r)]},priority(e){return N(e,["AbstandsregelnWindkraft"])?100:v(e,"AbstandsregelnFuerWindkraftWieBisher")?E(70,27,se(e)):v(e,"AbstandsregelnFuerWindkraftAbschaffen")?E(30,100,se(e)):0},citations:[],details:s`

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
  `}),Or=z({title:"Abstandsregeln f\xFCr Windkraft versch\xE4rfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngeb\xE4uden im Innenbereich muss das Zehnfache der Gesamth\xF6he der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(1,"Dauert nur einen Monat.")},effects(e,t,n){return[d("popularity").byValue(5).if(t===n),d("electricityWindOnshoreMaxNew").setValue(.42)]},priority(e){return N(e,["AbstandsregelnWindkraft"])?100:v(e,"AbstandsregelnFuerWindkraftWieBisher")?E(0,100,se(e)):0}}),Tr=z({title:"Abstandsregeln f\xFCr Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmen \xFCber Abst\xE4nde zwischen den Windkraftanlagen und Wohngeb\xE4uden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(3,"Wie aussitzen: {months}.")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[d("electricityWindOnshoreMaxNew").setValue(6).if(n>=t+r)]},priority(e){return N(e,["AbstandsregelnWindkraft"])?100:v(e,"AbstandsregelnFuerWindkraftLockern")?E(30,100,se(e)):v(e,"AbstandsregelnFuerWindkraftVerschaerfen")?E(70,27,se(e)):0}}),xr=z({title:"Ausschreibungsverfahren f\xFCr Windkraft 64,8 TWh",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 64,8 TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return v(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?S(5):v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?S(9):S(11)},effects(e,t,n){return[d("popularity").byValue(-20).if(t===n),d("unemployment").byValue(-100).if(t===n),...Pe(e,55.2,9.6,t)]},priority(e){return N(e,["WindkraftAusschreibung"])?100:v(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?E(100,50,K(e)):0}}),Ir=z({title:"Ausschreibungsverfahren f\xFCr Windkraft 16,2 TWh",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 16,2 TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return S(2)},effects(e,t,n){return[d("popularity").byValue(-1).if(t===n),d("unemployment").byValue(-20).if(t===n),...Pe(e,13.8,2.4,t)]},priority(e){return N(e,["WindkraftAusschreibung"])?100:v(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?E(100,50,K(e)):v(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?E(40,100,K(e)):0}}),Vr=z({title:"Ausschreibungsverfahren f\xFCr Windkraft 32,4 TWh",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 32,4 TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?S(4):S(6)},effects(e,t,n){return[d("popularity").byValue(-2).if(t===n),d("unemployment").byValue(-100).if(t===n),...Pe(e,27.6,4.8,t)]},priority(e){return N(e,["WindkraftAusschreibung"])?100:v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?E(100,50,K(e)):v(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?E(0,100,K(e)):0},citations:[],details:s`
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
  `}),$r=z({title:"Ausschreibungsverfahren f\xFCr Windkraft 8,1 TWh wie zu Beginn",description:"Windkraft Betreiber k\xF6nnen sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstm\xF6glichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return S(8)},effects(e,t,n){return[...Pe(e,6.9,1.2,t)]},priority(e){return N(e,["WindkraftAusschreibung"])?100:v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?E(60,100,K(e)):0}}),Br=z({title:"Automatische Anpassungen einiger Sektoren",description:"Mobilit\xE4t, Industrie, Geb\xE4ude und Landwirtschaft nutzen automatisch regenerative Energiequellen, sobald sie zur Verf\xFCgung stehen.",labels:["initial"],effects(e,t,n){if(K(e)<70)return[];const r=d("co2emissionsIndustry").byPercent(-20),a=r.getChange(e.values)/-.835;return[d("carRenewablePercentage").byValue(10),d("electricityDemand").byValue(22),r,d("electricityDemand").byValue(a),R("buildingsSourceBio","buildingsSourceOil").byValue(10),R("buildingsSourceElectricity","buildingsSourceOil").byValue(10),R("buildingsSourceElectricity","buildingsSourceTele").byValue(5),d("buildingsSourceElectricity").byValue(Math.min(20,e.values.buildingsSourceGas)),d("co2emissionsAgriculture").byValue(-10),d("co2emissionsOthers").byValue(-1)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`
    Dieses Gesetz läuft dauerhaft mit und soll kompensieren, dass es für diese Sektoren noch nicht genügend Gesetze gibt.
  `}),Mr=z({title:"CO2 Abscheidung und Speicherung (DACCS) f\xF6rdern",description:"Entstehende Technologien zur Abscheidung aus der Luft (DAC) und Speicherung von CO2 werden mit 1 Mrd Euro im Jahr gef\xF6rdert.",effort(e){return S(9)},effects(e,t,n){const r=1,i=r/200*1e3,a=i*400/1e3;return[d("stateDebt").byValue(r),d("co2directAirCapture").byValue(i),d("electricityDemand").byValue(a)]},priority(e){return E(70,90,K(e))},citations:[],details:s`

  `,internals:s`
    TDOO #91: So far only https://de.wikipedia.org/wiki/Direct_air_capture.

    Angaben für Kosten reichen von 10 USD bis 1000 USD pro Tonne CO2.
    Mehrere Angaben 100 USD bis 200 USD. Wir gehen von 250 EUR aus, um
    versteckte, indirekte Kosten mit einzubeziehen.

    In Wikipedia wird 250 kWh pro Tonne CO2 erwähnt. Dazu kommt noch ein
    beträchtlicher Wasserverbrauch. Wir nehmen zunächst 400kWh an, auch um
    potentielle negative Effekte abzubilden.
  `}),Gr=z({title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effort(e){return e.values.popularity>=50?S(6,"Normal dauert das 12 Monate, aber bei Deiner Beliebtheit nur {months}."):S(12)},effects(){return[d("stateDebt").byValue(-37),d("electricityHardCoal").byPercent(-10),d("electricityBrownCoal").byPercent(-5),d("electricityWind").byValue(5),d("electricitySolar").byValue(3),d("electricityWater").byValue(.5)]},priority(e){return N(e,["EnergieStrategie"])?100:E(at,he,e.currentYear)}}),Ur=z({title:"Erforschung und Umsetzung dezentraler Stromerzeugung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur f\xFCr die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return S(1)},effects(e,t,n){const r=n<t+5,i=n>=t+1;return[d("stateDebt").byValue(2).if(r),d("electricityGridQuality").byValue(1).if(i)]},priority(e){const t=e.values;return E(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Nr=z({title:"Forschung und Entwicklung zur Stromspeicherung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return S(1)},effects(e,t,n){const r=n<t+5,i=n>=t+3;return[d("stateDebt").byValue(2).if(r),d("electricityGridQuality").byValue(.2).if(i)]},priority(e){const t=e.values;return E(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Kr=z({title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,n){const i={2021:60.45,2022:30.21}[n]||0;return[d("electricityNuclear").setValue(i)]},priority(e){return 0}});const Ct=ge(me).electricityGas;var Hr=z({title:"Kernenergienutzung verl\xE4ngern",description:"Kernkraftwerke l\xE4nger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effort(e){return S(8)},effects(){return[d("electricityNuclear").setValue(104.3),d("stateDebt").byValue(-2.5),d("popularity").byValue(-4)]},priority(e){return N(e,["EnergieStrategie"])?100:E(Ct,1.1*Ct,e.values.electricityGas)}}),jr=z({title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effort(e){return S(11)},effects(e,t,n){const r=n-t,i=r<18?4.3/18:0,a=2.5,o=20,u=60,c=(10-r)/55,p=Math.max((o+u/2)*c,0);return[d("electricityHardCoal").setValue(0),d("electricityBrownCoal").setValue(0),d("stateDebt").byValue(-i+a),d("unemployment").byValue(p)]},priority(e){return N(e,["EnergieStrategie"])?100:e.values.electricityCoal/e.values.electricityDemand<=.1?0:E(1e4,0,e.values.unemployment)},citations:[],details:s`

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
  `}),Jr=z({title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren f\xFCr den Ausbau des Stromnetzes",effort(e){return S(2)},effects(e,t,n){return[d("popularity").byValue(-3).if(t===n),d("electricityGridQuality").byValue(1)]},priority(e){return E(70,27,se(e))},citations:[],details:s`

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
  `}),Yr=z({title:"Netzausbau f\xF6rdern",description:"Ausbau des Stromnetzes mit Steuermitteln f\xF6rdern",effort(e){return S(3)},effects(e,t,n){return[d("popularity").byValue(-1).if(t===n),d("stateDebt").byValue(2),d("electricityGridQuality").byValue(5).if(v(e,"NetzausbauErleichtern"))]},priority(e){return E(70,27,se(e))},citations:[],details:s`

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
  `}),Rr=z({title:"Solar auf neuen D\xE4chern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die D\xE4cher.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return S(3)},effects(e,t,n){return[d("popularity").byValue(-3).if(t===n),...de(e,"electricitySolar",2)]},priority(e){return v(e,"SolarstromFoerderungWieZuBeginn")?E(100,30,K(e)):0},details:s`

  `,internals:s`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `}),Zr=z({title:"Solarstrom F\xF6rderung 10 TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verdoppeln. Es werden 10 TWh pro Jahr zugebaut.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return S(4)},effects(e,t,n){return[d("popularity").byValue(10).if(t===n),d("unemployment").byValue(-31e3).if(t===n),...de(e,"electricitySolar",10)]},priority(e){return N(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:v(e,"SolarstromFoerderungWieZuBeginn")?E(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),Qr=z({title:"Solarstrom F\xF6rderung 20TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen vervierfachen. Es werden 20 TWh pro Jahr zugebaut.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return v(e,"SolarstromFoerdernx2")?S(3):S(7)},effects(e,t,n){return[d("popularity").byValue(20).if(t===n),d("unemployment").byValue(-89e3).if(t===n),...de(e,"electricitySolar",20)]},priority(e){return N(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:v(e,"SolarstromFoerdernx2")?E(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:s`
    # Happy path 10

    ${T(Ee)}
  `,citations:[Ee]}),qr=z({title:"Solarstrom F\xF6rderung 40TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verachtfachen. Es werden 40 TWh pro Jahr zugebaut.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return v(e,"SolarstromFoerdernx4")?S(2):v(e,"SolarstromFoerdernx2")?S(5):S(9)},effects(e,t,n){return[d("popularity").byValue(-10).if(t===n),d("unemployment").byValue(-209e3).if(t===n),...de(e,"electricitySolar",40)]},priority(e){return N(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:v(e,"SolarstromFoerdernx4")?E(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `}),Xr=z({title:"Solarstrom F\xF6rderung einstellen",description:"Mittlere bis gro\xDFe Solaranlagen sollten sich selbst tragen. Die F\xF6rderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return v(e,"SolarstromFoerderungWieZuBeginn")?S(5):S(13,"So eine Kehrtwende in der Politik ist schwer durchsetzbar. Das braucht {months}.")},effects(e,t,n){return[...de(e,"electricitySolar",2)]},priority(e){return N(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:v(e,"SolarstromFoerderungWieZuBeginn")?E(0,100,K(e)):0},details:s`

  `}),ei=z({title:"Solarstrom F\xF6rderung wie zu Beginn 5 TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen wie bisher. Es werden 5 TWh pro Jahr zugebaut.",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return S(9)},effects(e,t,n){return[...de(e,"electricitySolar",5)]},priority(e){return N(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:v(e,"SolarstromFoerdernx8")?E(70,100,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),ti=z({title:"Stromspeicherung erleichtern",description:"B\xFCrokratische H\xFCrden f\xFCr den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effort(e){return S(3)},effects(e,t,n){return[d("electricityGridQuality").byValue(.2)]},priority(e){const t=e.values;return E(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),ni=z({title:"Stromspeicherung f\xF6rdern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln f\xF6rdern. 2 Mrd \u20AC pro Jahr.",effort(e){return S(7)},effects(e,t,n){const r=v(e,"StromspeicherungErleichtern")?0:5,i=n>=t+r,a=v(e,"ForschungUndEntwicklungStromspeicherung",3);return[d("stateDebt").byValue(1),d("popularity").byValue(.2).if(i),d("stateDebt").byValue(1).if(i),d("electricityGridQuality").byValue(2).if(i),d("electricityGridQuality").byValue(2).if(a),d("electricityGridQuality").byValue(2).if(i&&a)]},priority(e){const t=e.values;return E(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),ri=z({title:"Windkraft vereinfachen",description:"Genehmigungen f\xFCr Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effort(e){return S(4,"Die Bundesl\xE4nder m\xFCssen mit ins Boot geholt werden. Das dauert {months}.")},effects(e,t,n){return[]},priority(e){return E(80,27,se(e))},citations:[],details:s`

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
  `});const ii={AbstandsregelnFuerWindkraftAbschaffen:Ar,AbstandsregelnFuerWindkraftLockern:Lr,AbstandsregelnFuerWindkraftVerschaerfen:Or,AbstandsregelnFuerWindkraftWieBisher:Tr,AusschreibungsverfahrenfuerWindkraftVerachtfachen:xr,AusschreibungsverfahrenfuerWindkraftVerdoppeln:Ir,AusschreibungsverfahrenfuerWindkraftVervierfachen:Vr,AusschreibungsverfahrenfuerWindkraftWieBisher:$r,AutomatischeSektoren:Br,CO2AbscheidungUndSpeicherungFoerdern:Mr,EnergiemixRegeltDerMarkt:Gr,ForschungDezentraleStromerzeugung:Ur,ForschungUndEntwicklungStromspeicherung:Nr,InitialAtomausstieg:Kr,KernenergienutzungVerlaengern:Hr,KohleverstromungEinstellen:jr,NetzausbauErleichtern:Jr,NetzausbauFoerdern:Yr,SolarAufAllenDaechernVerpflichtend:Rr,SolarstromFoerdernx2:Zr,SolarstromFoerdernx4:Qr,SolarstromFoerdernx8:qr,SolarstromFoerderungAbschaffen:Xr,SolarstromFoerderungWieZuBeginn:ei,StromspeicherungErleichtern:ti,StromspeicherungFoerdern:ni,WindkraftVereinfachen:ri};let Ue=tt("",{state:!0}),Et=()=>Math.abs(Ue());function si(e){Ue=tt(e.id,{state:e.prngState})}function ai(){return Ue.state()}var oi=z({title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bew\xE4hrt. Wir lassen sie so, wie sie sind.",effort(e){return S(3,"Wie aussitzen: {months}.")},effects(){return[]},priority(e){return Et()}}),li=z({title:"CO2 Preis Erh\xF6hen",description:"Die Preise werden schneller erh\xF6ht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return S(6)},effects(e,t,n){const r=n>=t+2?n>=t+4?100:70:0;return[...Ge(e,r,-.5,Me({value:50,result:0},{value:0,result:-1}))]},priority(e){return v(e,"VollerCO2Preis")||v(e,"WirksamerCO2Preis")?0:50},citations:[pt],details:s`

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
  `}),ui=z({title:"Test",description:"Gesetz zum Testen. Wird in automatischen Tests verwendet.",effort(e){return S(6)},effects(e,t,n){return[d("popularity").byPercent(50).if((n-t)%3!=0),d("popularity").byPercent(-50).if((n-t)%3==0),d("stateDebt").byPercent(-200).if(n===t),d("stateDebt").byPercent(50).if((n-t)%3!=0),d("stateDebt").byPercent(-50).if((n-t)%3==0),d("stateDebt").byPercent(-200).if(n===t+10)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`

  `}),ci=z({title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return S(10)},effects(e,t,n){return[...Ge(e,3e3,-5,Me({value:90,result:0},{value:50,result:-10}))]},priority(e){return v(e,"WirksamerCO2Preis")?50:0},citations:[Fn],details:s`

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
  `}),di=z({title:"Wasserstofftechnologie f\xF6rdern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return S(1)},effects(e,t,n){const r=n<t+5,i=n>=t+5;return[d("stateDebt").byValue(2).if(r),d("carRenewablePercentage").byValue(1).if(i)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return E(40,90,r)},citations:[],details:s`

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
  `}),hi=z({title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return S(8)},effects(e,t,n){return[...Ge(e,150,-2,Me({value:80,result:0},{value:50,result:-3}))]},priority(e){return v(e,"CO2PreisErhoehen")?50:0},citations:[pt],details:s`

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
  `});const fi={AllesBleibtBeimAlten:oi,CO2PreisErhoehen:li,Test:ui,VollerCO2Preis:ci,WasserstofftechnologieFoerdern:di,WirksamerCO2Preis:hi},Wt=L(L({},fi),ii),mi=Object.keys(Wt);function gi(e){return dt(e).map(t=>G(L({},t),{effort:t.effort||Wr}))}const le=gi(Wt);function pi(e){const t=le.find(n=>n.id===e);if(t)return t;throw Error(`Law #${e} not found`)}function ye(e){const t=pi(e.lawId);if(t)return G(L({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function Ne(e){return e.map(t=>{const n=le.find(r=>r.id===t);return n||console.error(`Inconsistency: Proposed law #${t} not found`),n}).filter(t=>t)}const vi=(e,t,n)=>Object.fromEntries(e.map(r=>{const i=t(r),a=Object.fromEntries(kt.map(o=>[o,n(r,i,o)]));return[r.id,a]}));function Ft(e){return e.find(t=>t.title.match(/subvention/i)&&t.title.match(/abbau/i))}var bi=I({title:"Anruf von befreundetem Unternehmer",description:`Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und m\xF6chte dich in seine
    Ferienvilla auf Sardinien einladen. Er verl\xE4sst sich nat\xFCrlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,apply(e){if(e){const t=Ft(Ne(e.proposedLaws));if(t)return[oe("rejectLaw",{lawId:t.id})]}return[]},probability(e,t){return re(e,t,{years:3,months:8})?0:Ft(Ne(e.proposedLaws))?.5:0}}),wi=I({title:"D\xFCrreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausf\xE4lle sind enorm.",apply(){return[d("gdp").byValue(-100),d("popularity").byValue(-10)]},probability(e,t){return Math.min(1,E(400,0,e.values.co2budget)/100)},citations:[],details:s`

  `,internals:s`

  `}),yi=I({title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute \xFCber die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",apply(){return[]}});function ki(e,t,n){return Pt(e,t,n).values}function Pt(e,t,n){const r=ge(e.values),i=t.sort((o,u)=>{var c,p;return((c=o.treatAfterLabels)==null?void 0:c.some(_=>{var A;return(A=u.labels)==null?void 0:A.includes(_)}))?1:((p=u.treatAfterLabels)==null?void 0:p.some(_=>{var A;return(A=o.labels)==null?void 0:A.includes(_)}))?-1:0}).filter(o=>o.effectiveSince<=n),a=vi(i,o=>{const u=Cr(r),c=o.effects(G(L({},e),{values:r}),o.effectiveSince,n);return Fe({dispatch:()=>{},values:r},c),u},(o,u,c)=>r[c]-u[c]);return r.co2budget-=r.co2emissions,{values:r,effectsOfLaws:a}}function ke(e){return Math.max(0,Math.min(100,e))}function Si(e){if(e.values.co2emissions===0)return 100;const n=e.values.co2budget*ge(me).co2emissions/me.co2budget/e.values.co2emissions;return ke(n*50)}function Ke(e){const t=e.values.co2budget/me.co2budget;return ke(t*100)}function He(e){const t=me.stateDebt,n=(e.values.stateDebt-t)/t;return n>0?ke(50-n/.05*50):ke(50-n*50)}function je(e){return ke(e.values.popularity)}var _i=I({title:"Zusammenbruch des Finanzsystems",description:`Deine Staatsfinanzen sind desastr\xF6s. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zur\xFCckahlen k\xF6nnen. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    k\xF6nntest. Das Spiel ist damit leider beendet.
  `,apply(){return[oe("gameOver")]},probability(e,t){return He(e)<=0?fe.finanzKollaps:0}}),Di=I({title:"Hitzeh\xF6lle",description:`Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen K\xFCstenregionen
  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr w\xE4chst.
  Um die verbleibdenden Teile sind erbitterte K\xE4mpfe ausgebrochen.
  `,apply(){return[oe("gameOver")]},probability(e,t){return Ke(e)<=0?fe.hitzehoelle:0}}),zi=I({title:"Klimafl\xFCchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimafl\xFCchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply(){return[d("stateDebt").byValue(10)]},probability(e,t){return e.values.co2budget<500?.2:0},citations:[],details:s`

  `,internals:s`

  `}),Ci=I({title:"Klimaneutral !!!",description:"Geschafft! Die j\xE4hrlichen CO2 Emissionen sind auf null oder werden vollst\xE4ndig durch Absorption kompensiert.",apply(){return[oe("gameOver")]},probability(e){return e.values.co2emissions<=0?fe.timesUp:0}}),Ei=I({title:"Happy New Year!",description:`Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen T\xE4tigkeit aufgestellt
    und kommt zu dem nicht weiter \xFCberraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht \xFCberraschend - sieht die Sache anders und verurteilt die Regierungserkl\xE4rung als haltlos.
  `,apply(){return[oe("advanceYear")]},probability(e,t){return ne(e.currentDate).getYear()>e.currentYear?fe.newYear:0}}),Wi=I({title:"Plagiatsaff\xE4re",description:"W\xE4hrend des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet W\xE4hlerstimmen.",apply(){return[d("popularity").byValue(-10)]},probability(e,t){return re(e,t,{years:3,months:10})?0:.5},citations:[],details:s`

  `,internals:s`

  `}),Fi=I({title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply(){return[d("popularity").byValue(-2)]},probability(e,t){return re(e,t,{years:2,months:11})?0:.3},citations:[],details:s`

  `,internals:s`

  `}),Pi=I({title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und f\xFChrt zu einer neuen Diskussion \xFCber Lobbyismus.",apply(){return[d("popularity").byValue(-2)]},probability(e,t){return re(e,t,{months:11})||v(e,"WirksamerCO2Preis")||v(e,"VollerCO2Preis")||v(e,"KohleverstromungEinstellen")?0:.3},citations:[],details:s`

  `,internals:s`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `}),Ai=I({title:"Social Media Alarm!",description:`Deine Wahlkampfberaterin ruft dich v\xF6llig aufgel\xF6st an. Ob denn an den Geschichten was dran sein, die da im
    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.
    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.
  `,apply(){return[d("popularity").byPercent(-20)]}}),Li=I({title:"B\xFCrgerinitiative fordert st\xE4rkere Solarf\xF6rderung",description:"Du musst entscheiden, wie gro\xDF die F\xF6rderung ausf\xE4llt. Oder willst du sie verkleinern oder sogar abschaffen?",apply(){return[]},probability(e,t){if(re(e,t,{months:8}))return 0;const n=v(e,"SolarstromFoerderungAbschaffen"),r=v(e,"SolarstromFoerderungWieZuBeginn"),i=v(e,"SolarstromFoerdernx2");return n||r||i?.5:0},citations:[Ce],details:s`

  `,internals:s`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${T(Ce)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),Oi=I({title:"Bund der Steuerzahler fordert Abschaffung Solarf\xF6rderung",description:"Der Solaranteil ist bereits sehr hoch, die Kosten f\xFCr die F\xF6rderung sind schwer zu vermitteln.",apply(){return[]},probability(e,t){if(re(e,t,{years:1,months:2}))return 0;const n=e.values.electricitySolar/e.values.electricityDemand,r=v(e,"SolarstromFoerdernx2"),i=v(e,"SolarstromFoerdernx4"),a=v(e,"SolarstromFoerdernx8");return n>50&&(r||i||a)?.5:0},citations:[Ce],details:s`

  `,internals:s`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${T(Ce)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),Ti=I({title:"Du hast durchgehalten",description:`Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,
    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Ma\xDFnahmen waren zu finanzieren
    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!
  `,apply(){return[oe("gameOver")]},probability(e){return e.currentYear===2050?fe.timesUp:0}}),xi=I({title:"Wahl verloren",description:`Deine Beliebtheit in der Bev\xF6lkerung ist katastrophal, lieber w\xFCrde man Mao Zedong w\xE4hlen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du geh\xF6rst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon l\xE4nger kein vern\xFCnftiger Mensch mehr geglaubt.
  `,apply(){return[oe("gameOver")]},probability(e){return je(e)<=0?fe.wahlVerloren:0}}),Ii=I({title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet wieder einmal eine Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",apply(){return[]},probability(e,t){return re(e,t,{months:15})?0:.7},citations:[],details:s`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:s`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `}),Vi=I({title:"Durchbruch in der Windenergie-Forschung",description:"Wissenschaftler haben eine neue Art der Energiegewinnung durch Wind entwickelt, mit der bestehende Windturbinen deutlich mehr Leistung bringen.",apply(){return[d("popularity").byValue(4),d("electricityWindEfficiency").byPercent(30)]},probability(e,t){if(re(e,t,{years:3,months:7}))return 0;const n=v(e,"WindkraftVereinfachen")?1.5:1;return v(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?.5*n:v(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?.4*n:v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?.3*n:0},citations:[],details:s`

  `,internals:s`

  `});const $i={AbstandsregelnWindkraft:pn,AtomKatastrophe:Er,Bestechung:bi,Duerrewelle:wi,EnergieStrategie:yi,FinanzKollaps:_i,Hitzehoelle:Di,Klimafluechtlinge:zi,Klimaneutral:Ci,NewYear:Ei,Plagiatsaffaere:Wi,PRInnenminister:Fi,PRKohleindustrie:Pi,SocialMedia:Ai,SolarstromFoerderung:Li,SolarstromFoerderung2:Oi,TimesUp:Ti,WahlVerloren:xi,WindkraftAusschreibung:Ii,WindkraftForschung:Vi};function Bi(e,t){return re(e,t,{years:3})?0:.05}const Ae=dt($i).map(e=>G(L({},e),{probability:e.probability||Bi})),Je={id:"",currentDate:st,currentYear:he,values:me,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],over:!1,prngState:!0};function Ye(e=Je,t=Qt()){const n={id:t,currentDate:e.currentDate,currentYear:e.currentYear,acceptedLaws:[...e.acceptedLaws],proposedLaws:[...e.proposedLaws],rejectedLaws:[...e.rejectedLaws],values:ge(e.values),events:[...e.events],over:e.over,prngState:e.prngState};return si(n),n}const Mi=Object.keys(Je);function At(e){return Object.fromEntries(Mi.map(t=>{if(t==="prngState")return[t,ai()];if(t==="values"){const n=e[t],r=Dr.map(i=>[i,n[i]]);return[t,Object.fromEntries(r)]}else return[t,e[t]]}))}function Lt(e=le,t=Je){const n=Ye(t);return n.acceptedLaws=e.filter(r=>{var i;return(i=r.labels)==null?void 0:i.includes("initial")}).map(r=>({lawId:r.id,effectiveSince:n.currentYear})),n}const pe=[...Array(at-he+1).keys()].map(e=>e+he);function Gi(e,t){const n={lawId:e,effectiveSince:t.currentYear+1},r=ye(n),i=r.effort(t);t.currentDate=ne(t.currentDate).plus(i.time).toJSON();const a=r.removeLawsWithLabels,o=t.acceptedLaws.map(ye).filter(u=>!(a==null?void 0:a.some(c=>{var p;return(p=u.labels)==null?void 0:p.includes(c)}))).map(u=>({lawId:u.id,effectiveSince:u.effectiveSince}));return t.acceptedLaws=[...o,n],Re(t)}function Ui(e){return e.currentDate=ne(e.currentDate).plus(mn).toJSON(),Re(e)}function Re(e,t=le,n=Ae,r=Et){const i=Ni(e,n,r);if(i){const o={id:i.id,occuredIn:e.currentDate,acknowledged:!1};e.events.unshift(o)}const a=Yi(e,t);return e.proposedLaws=Ri(e.proposedLaws,a),i}function Ni(e,t,n){const r=Ki(e,t),i=Hi(r);if(i)return i;const a=ji(r);return Ji(a,n())}function Ki(e,t){return t.map(n=>G(L({},n),{prob:n.probability(e,n)})).filter(n=>n.prob>0)}function Hi(e){return e.filter(t=>t.prob>1).reduce((t,n)=>n.prob>((t==null?void 0:t.prob)||0)?n:t,void 0)}function ji(e){const t=e.map(r=>r.prob).reduce((r,i)=>r+i,0);if(t<=ut)return e;const n=ut/t;return e.map(r=>G(L({},r),{prob:r.prob*n}))}function Ji(e,t){for(const n of e)if(t-=n.prob,t<0)return n}function Yi(e,t){const n=o=>{var u;return(u=e.acceptedLaws)==null?void 0:u.some(c=>c.lawId===o.id)},r=o=>{var u;return(u=e.rejectedLaws)==null?void 0:u.includes(o.id)},i=o=>{var u;return((u=o.labels)==null?void 0:u.includes("hidden"))||!1},a=o=>({law:o,priority:o.priority(e)});return t.filter($e(n)).filter($e(r)).filter($e(i)).map(a).filter(o=>o.priority>0).sort((o,u)=>u.priority-o.priority).map(o=>o.law.id).slice(0,lt)}function Ri(e,t){const n=[...e],r=t.filter(o=>n.includes(o)),i=t.filter(o=>!r.includes(o));for(var a=0;a<n.length;){if(r.includes(n[a])){a++;continue}if(i.length===0){n.splice(a,1);continue}n[a]=i.shift(),a++}return n.push(...i.slice(0,lt-n.length)),n}const ve=[{id:"start",title:"Stell dir vor...",text:s`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du ausw\xE4hlen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die W\xE4hler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine W\xE4hler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];function Zi(e,t){return{startGame(n){const r=Lt(),i=Re(r);t.createGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i}),e.push("/games/"+r.id)},async loadGame(n,r){var i;if(((i=n.state.game)==null?void 0:i.id)!==r.gameId)try{const a=await t.loadGame(r.gameId);t.saveGame(a),e.push("/games/"+a.id),n.commit("setGameState",{game:a})}catch(a){n.dispatch("error",{error:a})}},gameOver(n){n.commit("gameOver",void 0)},acceptLaw(n,r){const i=L({},n.state.game),a=Gi(r.lawId,i);t.saveGame(i),n.commit("setGameState",{game:i}),n.dispatch("applyEvent",{event:a}),t.decisionMade(i,r.lawId,!0)},rejectLaw(n,r){const i=L({},n.state.game);i.rejectedLaws=[...i.rejectedLaws,r.lawId],t.decisionMade(i,r.lawId,!1),t.saveGame(i),n.commit("setGameState",{game:i})},sitOut(n){const r=L({},n.state.game);t.decisionMade(r,"sitOut",!0);const i=Ui(r);t.saveGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i})},advanceYear(n){const r=L({},n.state.game),i=r.acceptedLaws.map(ye);r.currentYear++,r.values=ki(r,i,r.currentYear),t.saveGame(r),n.commit("setGameState",{game:r})},applyEvent(n,r){if(!r.event)return;const i=L({},n.state.game);t.eventOccurred(i,r.event);const a=r.event.apply(i);n.dispatch("applyEffects",{changes:a})},acknowledgeEvent(n,r){const i=L({},n.state.game);i.events.find(a=>a.id===r.id).acknowledged=!0,t.saveGame(i),n.commit("setGameState",{game:i})},applyEffects(n,r){const i={dispatch:()=>{},values:ge(n.state.game.values)};Fe(i,r.changes);const a=G(L({},n.state.game),{values:i.values});t.saveGame(a),n.commit("setGameState",{game:a});const o={dispatch:n.dispatch};Fe(o,r.changes)},setupTour(n){const r=localStorage.getItem("tour")||ve[0].id,i=ve.find(a=>r===a.id);i?n.commit("setTour",{step:i.id,active:!0}):n.dispatch("stopTour")},nextTourStep(n){const r=ve.findIndex(i=>n.state.tour.step===i.id);if(r<0||r==ve.length-1)n.dispatch("stopTour");else{const i=ve[r+1];n.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(n){n.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},error(n,r){n.commit("error",r)}}}const Qi={setGameState(e,t){e.game=t.game},gameOver(e){e.game=G(L({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},qi={proposedLaws(e){return!e.game||!e.game.proposedLaws?[]:Ne(e.game.proposedLaws)}},Xi={game:void 0,tour:{active:!0,step:"start"}};var B=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const es=e=>(_e("data-v-559eb761"),e=e(),De(),e),ts=["onClick"],ns=es(()=>l("br",null,null,-1)),rs={key:0,class:"button-bar"},is=["onClick"],ss=V({props:{law:null,selectable:{type:Boolean},numCards:null},emits:["selected","accepted"],setup(e,{emit:t}){const n=e,r=ee(!1),i=y(()=>n.law.zIndex);function a(){t("selected")}function o(){r.value=!0}function u(c){c.animationName.match(/^twistOut-/)&&t("accepted",n.law.id)}return(c,p)=>(f(),g("div",{class:$(["Law",{accepted:r.value}]),style:Te({zIndex:D(i)}),onClick:Y(a,["stop"]),onAnimationend:u},[l("div",null,[l("h3",null,w(e.law.title),1),l("div",null,w(e.law.description),1),ns,l("div",null,w(e.law.effortComment),1),e.selectable?(f(),g("div",rs,[l("button",{class:"accept",onClick:Y(o,["stop"])},"\u2713",8,is)])):C("",!0)])],46,ts))}});var as=B(ss,[["__scopeId","data-v-559eb761"]]);const os=V({setup(e){const t=ue(),n=ee(0),r=ee(!1),i=ee(!1),a=y(()=>bn(o.value.length,n.value)),o=y(()=>t.getters.proposedLaws),u=y(()=>t.state.game),c=y(()=>u.value===void 0?[]:o.value.map((m,W)=>G(L({},m),{zIndex:a.value[W],pos:W,effortComment:m.effort(u.value).text})));function p(m){t.dispatch("acceptLaw",{lawId:m})}function _(m){n.value!=m?n.value=m:(r.value=!r.value,r.value||(i.value=!1))}function A(){t.dispatch("sitOut")}function h(m){r.value&&(i.value=!0)}return(m,W)=>(f(),g(H,null,[l("div",{class:$(["ProposedLaws",{poppedUp:r.value}]),onTransitionend:h},[(f(!0),g(H,null,Q(D(c),(b,F)=>(f(),q(as,{key:b.id,law:b,selectable:r.value,numCards:D(c).length,class:"singleLaw",onAccepted:()=>p(b.id),onSelected:()=>_(F)},null,8,["law","selectable","numCards","onAccepted","onSelected"]))),128))],34),x(Xt,{name:"fade"},{default:we(()=>[nt(l("div",{class:"sitOutButton",onClick:W[0]||(W[0]=()=>A())},"Aussitzen",512),[[qt,i.value]])]),_:1})],64))}});var ls=B(os,[["__scopeId","data-v-5ec925b1"]]);const us={id:"calendar"},cs=V({props:{year:null,month:null},setup(e){const t=e,n=y(()=>{const r=Math.floor((t.month-1)/4)*18+27+"%",i=(t.month-1)%4*21+12+"%";return{top:r,left:i}});return(r,i)=>(f(),g("div",us,[U(w(e.year)+" ",1),l("span",{id:"month-indicator",style:Te(D(n))},null,4)]))}});var ds=B(cs,[["__scopeId","data-v-78901c78"]]),hs="/assets/plant-healthy.97772624.png",fs="/assets/plant-sick.5a0f1b46.png",ms="/assets/plant-withered.b50106c7.png";const gs={class:"container"},ps={class:"title"},vs={class:"progress-bar"},bs=V({props:{title:null,value:null},setup(e){const t=e,n=y(()=>{const r=t.value>40?"green":t.value>20?"goldenrod":"red";return{width:t.value+"%",backgroundColor:r}});return(r,i)=>(f(),g("div",gs,[l("div",ps,w(e.title),1),l("div",vs,[l("div",{class:"indicator",style:Te(D(n))},null,4)])]))}});var Ze=B(bs,[["__scopeId","data-v-9856b0a2"]]);const ws={id:"plant"},ys=["src","id"],ks=V({props:{value:null},setup(e){const t=e,n={healthy:hs,sick:fs,withered:ms},r=y(()=>t.value>66?"healthy":t.value>33?"sick":"withered"),i=y(()=>n[r.value]);return(a,o)=>(f(),g("div",ws,[x(Ze,{id:"indicator",title:"CO2-Budget",value:e.value},null,8,["value"]),l("img",{src:D(i),id:D(r)},null,8,ys)]))}});var Ss=B(ks,[["__scopeId","data-v-2db3389a"]]),_s="/assets/money-short.7ce9dbed.png",Ds="/assets/money-less.184321f3.png",zs="/assets/money-more.44dccbaa.png",Cs="/assets/money-much.d486dae1.png";const Es={id:"finances"},Ws={key:0,src:_s,id:"short"},Fs={key:1,src:Ds,id:"less"},Ps={key:2,src:zs,id:"more"},As={key:3,src:Cs,id:"much"},Ls=V({props:{value:null},setup(e){const t=e,n=y(()=>t.value),r=y(()=>t.value<20),i=y(()=>t.value>=20&&t.value<50),a=y(()=>t.value>=50&&t.value<80),o=y(()=>t.value>=80);return(u,c)=>(f(),g("div",Es,[x(Ze,{id:"indicator",title:"Finanzen",value:D(n)},null,8,["value"]),D(r)?(f(),g("img",Ws)):C("",!0),D(i)?(f(),g("img",Fs)):C("",!0),D(a)?(f(),g("img",Ps)):C("",!0),D(o)?(f(),g("img",As)):C("",!0)]))}});var Os=B(Ls,[["__scopeId","data-v-0b2fb0e8"]]);const Ts={},xs={class:"dialog"},Is={class:"buttons"};function Vs(e,t){return f(),g("div",xs,[xe(e.$slots,"default",{},void 0,!0),l("div",Is,[xe(e.$slots,"buttons",{},void 0,!0)])])}var Ot=B(Ts,[["render",Vs],["__scopeId","data-v-6a8bb0fa"]]);const $s=l("h2",null,"Das Spiel ist leider zu Ende",-1),Bs=l("p",null,"Deine Entscheidungen haben etwas ver\xE4ndert - soviel kann man sagen.",-1),Ms=l("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Gs=V({setup(e){const t=ue(),n=y(()=>{const o=t.state.game;if(!o)return"";const u=Ke(o),c=Si(o);return u<=0?"sind explodiert, das Budget ist aufgebraucht. H\xE4tte die AfD nicht besser hinbekommen.":c<5?"sind explodiert, das Budget ist zwar noch nicht ganz aufgebraucht - aber bald. H\xE4tte die AfD nicht besser hinbekommen.":c<30?"sind nicht wirklich besser geworden. Ob da noch was zu retten ist?":c<50?"sind vielleicht etwas gesunken, aber nicht genug, um mit dem verbleibenden Budget auszukommen.":c<80?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":c<100?"entwickeln sich auf einem guten Weg, beim n\xE4chsten Versuch klappt es bestimmt! ...ach ne, wir haben ja nur eienn Planeten.":"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!"}),r=y(()=>{const o=t.state.game;if(!o)return"";const u=He(o);return u<0?"sind dir leider aus dem Ruder gelaufen.":u<25?"sind dir so gerade nicht um die Ohren geflogen. Noch nicht...":u<50?"sind wohl so gerade noch ok.":"sind ausgeglichen. Die Stabilit\xE4tskriterien werden eingehalten."}),i=y(()=>{const o=t.state.game;if(!o)return"";const u=je(o);return u<0?"entspricht dem, was man von einem langh\xE4hrigen Diktator erwarten kann.":u<50?"ist nicht berauschend, wiedergew\xE4hlt w\xFCrdest du wohl eher nicht.":u<80?"reicht aus, dass du noch l\xE4nger am Ruder bleiben k\xF6nntest. Gratulation!":"ist v\xF6llig unglaubw\xFCrdig - war das wirklich eine freie Wahl?"});function a(){t.dispatch("startGame")}return(o,u)=>(f(),q(Ot,null,{default:we(()=>[$s,Bs,l("ul",null,[l("li",null,"Die CO2-Emmissionen "+w(D(n)),1),l("li",null,"Die Staatsfinanzen "+w(D(r)),1),l("li",null,"Deine Beliebtheit "+w(D(i)),1)]),Ms,l("div",{class:"button-bar"},[l("button",{onClick:a},"Neuer Versuch")])]),_:1}))}});var Us="/assets/heater.43006232.png";const Ns={},Ks=e=>(_e("data-v-c9039a0c"),e=e(),De(),e),Hs={id:"heater"},js=Ks(()=>l("img",{src:Us},null,-1)),Js=[js];function Ys(e,t){return f(),g("div",Hs,Js)}var Rs=B(Ns,[["render",Ys],["__scopeId","data-v-c9039a0c"]]),Zs="/assets/people-happy.acaffc0b.png",Qs="/assets/people-angry.54c1d60c.png";const qs={id:"popularity"},Xs={key:0,src:Zs,id:"happy"},ea={key:1,src:Qs,id:"angry"},ta=V({props:{value:null},setup(e){const t=e,n=y(()=>t.value>=50),r=y(()=>t.value<50);return(i,a)=>(f(),g("div",qs,[x(Ze,{id:"indicator",title:"Beliebtheit",value:e.value},null,8,["value"]),D(n)?(f(),g("img",Xs)):C("",!0),D(r)?(f(),g("img",ea)):C("",!0)]))}});var na=B(ta,[["__scopeId","data-v-4cf2dbec"]]);const ra=V({props:{title:null,text:null},emits:["acknowledge"],setup(e,{emit:t}){function n(){t("acknowledge")}return(r,i)=>(f(),g("div",{onClick:n},[l("h2",null,w(e.title),1),l("p",null,w(e.text),1)]))}});var ia=B(ra,[["__scopeId","data-v-63e4a4a9"]]),sa="/assets/table-top.c87bd2fd.png",Tt="/assets/table-front.78c0f8c6.png",xt="/assets/table-side.49774a53.png";const aa={},oa={id:"table"},la=rt('<img src="'+sa+'" id="table-top" data-v-1ef8d93c><img src="'+Tt+'" id="table-front" data-v-1ef8d93c><img src="'+Tt+'" id="table-back" data-v-1ef8d93c><img src="'+xt+'" id="table-left-side" data-v-1ef8d93c><img src="'+xt+'" id="table-right-side" data-v-1ef8d93c>',5),ua=[la];function ca(e,t){return f(),g("div",oa,ua)}var da=B(aa,[["render",ca],["__scopeId","data-v-1ef8d93c"]]);const ha=V({setup(){const e=ue();return e.dispatch("setupTour"),{store:e}},components:{Dialog:Ot},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return ve.find(e=>e.id===this.$store.state.tour.step)},title(){var e;return(e=this.currentStep)==null?void 0:e.title},text(){var e;return(e=this.currentStep)==null?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var n;const t=document.querySelector(".highlighted");t&&t.classList.remove("highlighted"),e&&e.highlight&&((n=document.querySelector(`#${e.highlight}`))==null||n.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}}),fa=["innerHTML"];function ma(e,t,n,r,i,a){const o=ce("Dialog");return e.title&&e.text?(f(),q(o,{key:0},{buttons:we(()=>[l("button",{onClick:t[0]||(t[0]=(...u)=>e.stop&&e.stop(...u))},"Tour beenden"),l("button",{onClick:t[1]||(t[1]=(...u)=>e.next&&e.next(...u))},"Weiter")]),default:we(()=>[l("h2",null,w(e.title),1),l("div",{innerHTML:e.text},null,8,fa)]),_:1})):C("",!0)}var ga=B(ha,[["render",ma]]),pa="/assets/board-front.41330f02.png",It="/assets/board-side.d7181ded.png",va="/assets/tv-front.82df5c0c.png",ba="/assets/news.c4bbc2d0.png",Vt="/assets/tvset-legs.78b387df.png";const wa=V({props:{withNews:Boolean}}),$t=e=>(_e("data-v-118e7bdf"),e=e(),De(),e),ya={id:"tvset"},ka=rt('<div id="board" data-v-118e7bdf><img id="board-front" src="'+pa+'" data-v-118e7bdf><img id="board-left" src="'+It+'" data-v-118e7bdf><img id="board-right" src="'+It+'" data-v-118e7bdf><div id="board-top" data-v-118e7bdf></div></div>',1),Sa={id:"tv"},_a=$t(()=>l("img",{id:"tv-front",src:va},null,-1)),Da={key:0,id:"news",src:ba},za=$t(()=>l("div",{id:"legs"},[l("img",{id:"legs-front",src:Vt}),l("img",{id:"legs-back",src:Vt})],-1));function Ca(e,t,n,r,i,a){return f(),g("div",ya,[ka,l("div",Sa,[_a,e.withNews?(f(),g("img",Da)):C("",!0)]),za])}var Ea=B(wa,[["render",Ca],["__scopeId","data-v-118e7bdf"]]);const Wa={class:"game-setup"},Fa=l("h1",null,"#ich-kann-klima",-1),Pa=l("div",{id:"walls"},[l("div",{id:"wall-back"}),l("div",{id:"wall-left"}),l("div",{id:"wall-right"})],-1),Aa=V({setup(e){const t=ue(),n=y(()=>{const m=t.state.game;if(!m)return;const W=m.currentDate;return m.events.filter(b=>b.occuredIn===W&&!b.acknowledged)[0]}),r=y(()=>{const m=n.value;if(m!==void 0)return Ae.find(W=>W.id===m.id)}),i=y(()=>{var m;return((m=r.value)==null?void 0:m.title)||""}),a=y(()=>{var m;return((m=r.value)==null?void 0:m.description)||""}),o=y(()=>{var m;return((m=t.state.game)==null?void 0:m.currentYear)||2021}),u=y(()=>{var m;return ne((m=t.state.game)==null?void 0:m.currentDate).lux.month}),c=y(()=>{const m=t.state.game;return m?He(m):0}),p=y(()=>{const m=t.state.game;return m?je(m):0}),_=y(()=>{const m=t.state.game;return m?Ke(m):0}),A=y(()=>{const m=t.state.game;return m?m.over:!1});function h(){t.dispatch("acknowledgeEvent",r.value)}return(m,W)=>(f(),g("div",Wa,[Fa,Pa,x(ds,{year:D(o),month:D(u)},null,8,["year","month"]),x(Rs),x(na,{value:D(p)},null,8,["value"]),x(Ea,{"with-news":!!D(n)},null,8,["with-news"]),x(Ss,{value:D(_)},null,8,["value"]),x(da),x(Os,{value:D(c)},null,8,["value"]),x(ls),D(n)?(f(),q(ia,{key:0,title:D(i),text:D(a),onAcknowledge:h},null,8,["title","text"])):C("",!0),x(ga),D(A)?(f(),q(Gs,{key:1})):C("",!0)]))}});const La=["onClick"],Oa=V({setup(e){const t=ue(),n=y(()=>{var o;return(o=t.state.game)==null?void 0:o.acceptedLaws}),r=ee(void 0),i=y(()=>le.filter(o=>{var u,c;return((u=n.value)==null?void 0:u.some(p=>p.lawId===o.id))&&!((c=o.labels)==null?void 0:c.includes("hidden"))}));function a(o){r.value=r.value===o?void 0:o}return(o,u)=>(f(!0),g(H,null,Q(D(i),(c,p)=>(f(),g("div",{key:p,class:$(["Law",{opened:p===r.value}]),onClick:_=>a(p)},[l("h3",null,w(c.title),1),l("div",null,w(c.description),1)],10,La))),128))}});var Ta=B(Oa,[["__scopeId","data-v-7efa2df1"]]);const xa=V({components:{GameSetup:Aa,AcceptedLaws:Ta},setup(){return{store:ue()}},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,n){n(r=>r.startGame(e.params.id))}});function Ia(e,t,n,r,i,a){const o=ce("GameSetup");return f(),q(o)}var Bt=B(xa,[["render",Ia],["__scopeId","data-v-3637ce73"]]);const Va=[{path:"/",redirect:"/games"},{path:"/games",component:Bt},{path:"/games/:id",component:Bt}],Mt=en({history:tn(),routes:Va});function $a(e){return{createGame(t){return e.add("post","/games",t)},loadGame(t){return e.add("get","/games/"+t,void 0,0)},saveGame(t){return e.remove("put","/games/"+t.id),e.add("put","/games/"+t.id,t)},decisionMade(t,n,r){return e.add("post","/games/"+t+"/decisions/"+n,{accepted:r})},eventOccurred(t,n){return e.add("post","/games/"+t+"/events/"+n)}}}function Ba(e,t){let n=[],r;async function i(){if(r&&(clearTimeout(r),r=void 0),n.length){const a=n[0],{method:o,path:u,data:c,retry:p,resolve:_,reject:A}=a;try{if((t==null?void 0:t.navigator)&&!(t==null?void 0:t.navigator.onLine))throw Error("Browser is offline");const h=await e(o,u,c);n.shift(),_(h)}catch(h){p?a.retry=Math.max(-1,p-1):(n.shift(),A(h))}n.length&&(r=setTimeout(i,(t==null?void 0:t.timeout)||1e4))}}return{add(a,o,u,c=-1){return new Promise((p,_)=>{n.push({method:a,path:o,data:u,retry:c,resolve:p,reject:_}),r||i()})},remove(a,o){n=n.filter(u=>u.method.toLowerCase()!==a.toLowerCase()||u.path!==o)},callsPending(){return n.length>0}}}function Ma(e,t,n=console){return async function(r,i,a){var o;try{const u={method:r};["post","put","patch"].includes(r)&&(u.body=JSON.stringify(a),u.headers={["content-type"]:"application/json"});const c=await t(e+i,u),p=((o=c.headers.get("Content-Type"))==null?void 0:o.match(/json/))?await c.json():await c.text();if(c.ok)return p;throw Error(p.message||p)}catch(u){throw n.error(u),u}}}function Ga({api:e,logger:t=console,storage:n=localStorage}){return{createGame(r){const i=At(r);n.setItem("game",JSON.stringify(i)),e.createGame(i).catch(a=>{t.warn("Cannot save new game - trying again later",a)})},async loadGame(r){const i=n.getItem("game");if(i){const o=JSON.parse(i);if(o.id===r)return Ye(o,r)}const a=await e.loadGame(r);return Ye(a,r)},saveGame(r){const i=At(r);n.setItem("game",JSON.stringify(i)),e.saveGame(i).catch(a=>{t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",a)})},decisionMade(r,i,a){e.decisionMade(r.id,i,a)},eventOccurred(r,i){e.eventOccurred(r.id,i.id)}}}const Ua=localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",Na=Ma(Ua,fetch),Ka=Ba(Na),Ha=$a(Ka),ja=Ga({api:Ha}),Ja=Zi(Mt,ja),Gt=Symbol();function ue(){return nn(Gt)}const Ya=rn({state:Xi,mutations:Qi,actions:Ja,getters:qi});function Ut(e,t,...n){for(const r of n){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function Ra(e,t,n){function r(c){return e[c].toFixed(2)}function i(c){return(c>0?"+":"")+c.toFixed(2)}function a(c){const p=n.find(_=>_.type==="modify"&&_.name===c);return p&&p.condition?p.value:0}function o(c){const p=a(c),_=t?t[c]:0;return p&&Math.abs(p-_)<.001?i(p):p?i(p)+" / "+i(_):_!=0?i(_):""}return Dt.map(c=>({id:c.name,unit:c.unit,value:r(c.name),effect:o(c.name),class:c.writable?"writable":"calculated"}))}function Za(e,t,n,r){const i=e.proposedLaws,a=e.acceptedLaws.map(c=>c.lawId),o=e.rejectedLaws;function u(c){return a.includes(c)?"a":i.includes(c)?"p":o.includes(c)?"r":"x"}return r.map(c=>({id:c.id,priority:c.priority(e),state:u(c.id)})).sort((c,p)=>Ut(c,p,t,"id")*n).map(c=>G(L({},c),{priority:c.priority.toFixed(2)}))}function Qa(e,t,n,r){return r.map(i=>({id:i.id,probability:i.probability(e,i)})).sort((i,a)=>Ut(i,a,t,"id")*n).map(i=>G(L({},i),{probability:(i.probability*100).toFixed(2)}))}const qa={key:0},Xa=["href"],eo=U(". "),to={key:1},no={key:2},ro=U("Bemerkung: "),io=["innerHTML"],so=U(". "),ao={key:3},oo=U("Internes: "),lo=["innerHTML"],uo=U(". "),co={key:4},ho=["href"],fo=U(". "),mo={key:5},go=["href"],po=U(". "),vo={key:6},bo=["href"],wo=U(". "),yo=V({props:{citation:null,showInternals:{type:Boolean}},setup(e){const t=e,n=y(()=>t.citation.url.toString()),r=y(()=>t.citation.title||t.citation.url.toString());return(i,a)=>(f(),g("p",null,[e.citation.authors?(f(),g("span",qa,w(e.citation.authors+e.citation.dateString())+". ",1)):C("",!0),l("a",{target:"_blank",rel:"noreferrer noopener",href:D(n)},'"'+w(D(r))+'"',9,Xa),eo,e.citation.publisher?(f(),g("span",to,w(e.citation.publisher)+". ",1)):C("",!0),e.citation.comment?(f(),g("span",no,[ro,l("span",{innerHTML:e.citation.comment},null,8,io),so])):C("",!0),e.showInternals&&e.citation.internalComment?(f(),g("span",ao,[oo,l("span",{innerHTML:e.citation.internalComment},null,8,lo),uo])):C("",!0),e.citation.referringUrl?(f(),g("span",co,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,ho),fo])):C("",!0),e.citation.archiveUrl?(f(),g("span",mo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,go),po])):C("",!0),e.citation.localCopy?(f(),g("span",vo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,bo),wo])):C("",!0)]))}}),ko=V({props:{chartData:null,paramId:null,selectedYear:null},emits:["update:selectedYear"],setup(e,{emit:t}){const n=e,r="#9c6d00",i="#ce900070",a="#644600",o=y(()=>({xaxis:{categories:pe,labels:{rotate:-90}},chart:{id:n.paramId+"-withLawEffects",animations:{enabled:!1},stacked:!0},colors:[r,a,i],legend:{show:!1},markers:{size:0},dataLabels:{enabled:!1}})),u=y(()=>n.chartData.values.map((b,F)=>({value:b[n.paramId],change:n.chartData.changes[F][n.paramId]}))),c=y(()=>u.value.map(b=>{const F=b.value-b.change;return b.change*b.value>0?F*b.value>0?{value:F,gain:b.change,loss:0}:{value:0,gain:b.value,loss:F}:{value:b.value,gain:0,loss:-b.change}})),p=y(()=>[{name:"Simulated "+n.paramId,data:c.value.map(b=>Math.round(b.value))},{name:"Gains of "+n.paramId+" by selected law",data:c.value.map(b=>Math.round(b.gain))},{name:"Losses of "+n.paramId+" by selected law",data:c.value.map(b=>Math.round(b.loss))}]),_=ee();let A;function h(){var b,F;((b=_.value)==null?void 0:b.chart)!=null&&A!=null&&((F=_.value)==null||F.toggleDataPointSelection(0,A)),A=void 0}function m(b){var F,M;if(((F=_.value)==null?void 0:F.chart)!=null&&b){const Z=b-pe[0];A!=Z&&(h(),A=Z,(M=_.value)==null||M.toggleDataPointSelection(0,Z))}else h()}sn(()=>m(n.selectedYear),{flush:"post"});function W(b,F,M){const Z=M.dataPointIndex;Z<0||(Z===A?(A=void 0,t("update:selectedYear",void 0)):(A=Z,t("update:selectedYear",Z+pe[0])))}return(b,F)=>(f(),g("div",null,[l("div",null,w(e.paramId),1),x(D(an),{ref_key:"chart",ref:_,type:"bar",options:D(o),series:D(p),onClick:W},null,8,["options","series"])]))}}),So=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"AutomatischeSektoren",effectiveSince:2021},{lawId:"InitialAtomausstieg",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2022},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2022},{lawId:"NetzausbauErleichtern",effectiveSince:2022},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2023},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2023},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2023},{lawId:"StromspeicherungErleichtern",effectiveSince:2024},{lawId:"KohleverstromungEinstellen",effectiveSince:2024},{lawId:"StromspeicherungFoerdern",effectiveSince:2025},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2026},{lawId:"CO2PreisErhoehen",effectiveSince:2026},{lawId:"CO2AbscheidungUndSpeicherungFoerdern",effectiveSince:2029}]},{name:"Old Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024}]}],Le=(e,t)=>e.lawId===t.lawId&&e.effectiveSince===t.effectiveSince,_o=e=>e.map((t,n)=>G(L({},t),{sortId:n}));function Do(...e){const t=e.map(n=>n.length===0?0:n[n.length-1].sortId+1);return t.length===0?0:Math.max.apply(Math,t)}function zo(e){const t=ee([]),n=ee([]),r=ee(!1);function i(W,b){var qe;const F=t.value,M={lawId:W,effectiveSince:b,sortId:0},Z=(qe=n.value.find(be=>Le(M,be)))==null?void 0:qe.sortId;M.sortId=Z!=null?Z:Do(F,n.value),t.value=F.filter(be=>be.lawId!=W).concat(M).sort((be,Kt)=>be.sortId-Kt.sortId)}function a(W){t.value=t.value.filter(b=>b.lawId!=W)}function o(W,b){const F={lawId:W,effectiveSince:b,sortId:0};t.value.some(M=>Le(M,F))?a(W):i(W,b)}function u(W){t.value=_o(W.laws)}function c(){r.value=!r.value,r.value?n.value=t.value:n.value=[]}const p=y(()=>{var W;return{name:"Current Game",laws:((W=e.value)==null?void 0:W.acceptedLaws)||[]}}),_=y(()=>[p.value,...So]),A=y(()=>{const W=t.value.map(F=>G(L({},F),{cls:n.value.some(M=>Le(F,M))?"both":"new"})),b=n.value.filter(F=>!t.value.some(M=>Le(M,F))).map(F=>G(L({},F),{cls:"saved"}));return[...W,...b].sort((F,M)=>F.sortId-M.sortId)}),h=Nt(t),m=Nt(n);return{addToSimulation:i,removeFromSimulation:a,toggleInSimulation:o,loadPreset:u,compareActive:r,toggleCompare:c,presets:_,simulatedLaws:A,simulation:h,secondSimulation:m}}function Nt(e){return y(()=>{const t=Lt();return t.acceptedLaws=[...e.value],pe.map(r=>{for(;r>t.currentYear;){t.currentYear++,t.acceptedLaws=Co(t.acceptedLaws,t.currentYear);const i=t.acceptedLaws.map(u=>ye(u)),{values:a,effectsOfLaws:o}=Pt(t,i,t.currentYear);if(t.values=a,r===t.currentYear)return{values:a,effectsOfLaws:o}}return{values:t.values,effectsOfLaws:{}}})})}function Co(e,t){const n=e.map(i=>ye(i)),r=n.filter(i=>i.effectiveSince===t).flatMap(i=>i.removeLawsWithLabels||[]);return n.filter(i=>i.effectiveSince>=t||!r.some(a=>{var o;return(o=i.labels)==null?void 0:o.includes(a)})).map(i=>({lawId:i.id,effectiveSince:i.effectiveSince}))}const Eo=V({directives:{clickaway:it},setup(e,t){const n=ee(!1);return{menuIsOpen:n,toggle:()=>n.value=!n.value,close:()=>n.value=!1}}});function Wo(e,t,n,r,i,a){const o=on("clickaway");return nt((f(),g("span",{onClick:t[0]||(t[0]=(...u)=>e.toggle&&e.toggle(...u)),class:$(["menu",{menuIsOpen:e.menuIsOpen}])},[xe(e.$slots,"default",{},void 0,!0)],2)),[[o,e.close]])}var Fo=B(Eo,[["render",Wo],["__scopeId","data-v-06206e01"]]);const Po=V({directives:{clickaway:it},components:{Citation:yo,PeekChart:ko,Menu:Fo},setup(){const e=ue(),t=y(()=>e.state.game),n=zo(t);return L({store:e,game:t,gameYears:pe},n)},data(){return{lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lastSelected:void 0,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,yearSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1}},methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){e===this.lawSelected?this.lawSelected=void 0:(this.lastSelected="law",this.lawSelected=e)},selectEvent(e){e===this.eventSelected?this.eventSelected=void 0:(this.lastSelected="event",this.eventSelected=e)},selectParam(e){e===this.paramSelected?this.paramSelected=void 0:(this.lastSelected="param",this.paramSelected=e)},selectYear(e){e===this.yearSelected?this.yearSelected=void 0:(this.lastSelected="year",this.yearSelected=e)},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0,this.yearSelected=void 0},dragStart(e,t){const{lawId:n,year:r}=t;!e.dataTransfer||(e.dataTransfer.dropEffect="link",n&&e.dataTransfer.setData("lawId",n),r&&e.dataTransfer.setData("year",r.toString()))},getDropped(e,t,n){if(!e.dataTransfer)return;const r=e.dataTransfer.getData(t);return n.find(i=>i==r)},onDrop(e,t){const{lawId:n,year:r}=t,i=this.getDropped(e,"lawId",mi),a=this.getDropped(e,"year",this.gameYears);r&&i?this.addToSimulation(i,r):n&&a?this.addToSimulation(n,a):n&&i&&this.removeFromSimulation(i)},rightClick(e,t){this.toggleInSimulation(e,t)}},computed:{startYearOfSelected(){if(!this.lawSelected)return;if(!this.game)return he;const e=this.simulatedLaws.find(t=>t.lawId===this.lawSelected);return e?e.effectiveSince:this.game.currentYear},selectedLaw(){return le.find(e=>e.id===this.lawSelected)},lawEffort(){var e;if(!!this.game)return(e=this.selectedLaw)==null?void 0:e.effort(this.game)},selectedEvent(){return Ae.find(e=>e.id===this.eventSelected)},selectedParam(){return this.paramSelected?X[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof k?e:void 0},cParam(){const e=this.selectedParam;return e instanceof J?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},currentYear(){return this.yearSelected?this.yearSelected:this.game?this.game.currentYear:he},effectsOfSelected(){return!this.selectedLaw||!this.startYearOfSelected||!this.game?[]:this.selectedLaw.effects(this.game,this.startYearOfSelected,this.currentYear)},sortedValues(){return this.game?Ra(this.simOfYear.values,this.effectsOfLawInYear,this.effectsOfSelected):[]},sortedLaws(){return this.game?Za(this.game,this.lawsSortCol,this.lawsSortDir,le):[]},sortedEvents(){return this.game?Qa(this.game,this.eventsSortCol,this.eventsSortDir,Ae):[]},effectsOfLawInYear(){if(this.lawSelected)return this.simOfYear.effectsOfLaws[this.lawSelected];if(this.yearSelected)return this.simEffectOfLaw[this.yearSelected-this.gameYears[0]]},simOfYear(){if(this.yearSelected===void 0&&this.game){const e=this.effectsOfSelected,t=this.game.values;if(this.lawSelected===void 0||e.length===0)return{values:t,effectsOfLaws:{}};const n=ge(t);Fe({dispatch:()=>{},values:n},e);const i=Object.fromEntries(kt.map(a=>[a,n[a]-t[a]]));return{values:t,effectsOfLaws:{[this.lawSelected]:i}}}else{const e=this.yearSelected?this.yearSelected-this.gameYears[0]:0;return this.simulation[e]}},simulatedValues(){return this.simulation.map(e=>e.values)},simEffectOfLaw(){if(this.lawSelected){const e=this.lawSelected;return this.simulation.map(t=>{const n=t.effectsOfLaws[e];return n||zt})}return this.compareActive?this.secondSimulation.map((e,t)=>Object.fromEntries(Object.entries(e.values).map(([n,r])=>[n,this.simulation[t].values[n]-r]))):pe.map(e=>zt)},chartData(){return{values:this.simulatedValues,changes:this.simEffectOfLaw}},lawsInYear(){return e=>this.simulatedLaws.filter(t=>t.effectiveSince===e)}}}),te=e=>(_e("data-v-85b0da02"),e=e(),De(),e),Ao={class:"peekData"},Lo={class:"Menu"},Oo=U("\xA0 "),To=U("\xA0 "),xo=U("\xA0 "),Io=U("\xA0 "),Vo=U("\xA0 "),$o=U("\xA0 "),Bo={key:1,class:"Details sidebyside"},Mo={class:"Title"},Go={class:"Description"},Uo={class:"SectionHead"},No={class:"Section"},Ko=te(()=>l("div",{class:"SectionHead"},"Details:",-1)),Ho=["innerHTML"],jo=te(()=>l("div",{class:"SectionHead"},"Internes:",-1)),Jo=["innerHTML"],Yo=te(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),Ro={key:2,class:"Details sidebyside"},Zo={class:"Title"},Qo={class:"Description"},qo=te(()=>l("div",{class:"SectionHead"},"Details:",-1)),Xo=["innerHTML"],el=te(()=>l("div",{class:"SectionHead"},"Internes:",-1)),tl=["innerHTML"],nl=te(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),rl={key:3,class:"Details sidebyside"},il={class:"Title"},sl={key:0},al={key:1},ol={key:2},ll=te(()=>l("div",{class:"SectionHead"},"Details:",-1)),ul=["innerHTML"],cl=te(()=>l("div",{class:"SectionHead"},"Internes:",-1)),dl=["innerHTML"],hl=te(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),fl={class:"paramsHeader"},ml=["onClick"],gl={class:"numbercol"},pl={class:"effcol"},vl={key:5,class:"lawList sidebyside"},bl=["onClick","onDragstart","onDrop"],wl={class:"priocol"},yl={key:6,class:"eventList sidebyside"},kl=["onClick"],Sl={class:"priocol"},_l={key:7,class:"yearList sidebyside"},Dl=te(()=>l("a",{class:"clickable"},"Presets",-1)),zl={class:"dropdown"},Cl=["onClick"],El=U("\xA0 "),Wl=["onClick","onDragstart","onDrop"],Fl=["onClick","onContextmenu","onDragstart","onDrop"];function Pl(e,t,n,r,i,a){var p,_,A;const o=ce("PeekChart"),u=ce("Citation"),c=ce("Menu");return f(),g("details",Ao,[l("summary",{onClick:t[0]||(t[0]=h=>e.unselect()),class:"clickable"},"Peek"),l("div",Lo,[l("a",{onClick:t[1]||(t[1]=h=>e.showCharts=!e.showCharts),class:$(["clickable",e.showCharts?"selected":""])},"Charts",2),Oo,l("a",{onClick:t[2]||(t[2]=h=>e.showDetails=!e.showDetails),class:$(["clickable",e.showDetails?"selected":""])},"Details",2),To,l("a",{onClick:t[3]||(t[3]=h=>e.showParams=!e.showParams),class:$(["clickable",e.showParams?"selected":""])},"Params",2),xo,l("a",{onClick:t[4]||(t[4]=h=>e.toggleLawList()),class:$(["clickable",e.showLaws?"selected":""])},"Laws",2),Io,l("a",{onClick:t[5]||(t[5]=h=>e.toggleEventList()),class:$(["clickable",e.showEvents?"selected":""])},"Events",2),Vo,l("a",{onClick:t[6]||(t[6]=h=>e.showYears=!e.showYears),class:$(["clickable",e.showYears?"selected":""])},"Years",2),$o]),e.showCharts?(f(),g("div",{key:0,class:$(["Details sidebyside",{lawSelected:e.lawSelected!=null}])},[e.paramSelected?(f(),q(o,{key:0,selectedYear:e.yearSelected,"onUpdate:selectedYear":t[7]||(t[7]=h=>e.yearSelected=h),chartData:e.chartData,paramId:e.paramSelected},null,8,["selectedYear","chartData","paramId"])):C("",!0),x(o,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[8]||(t[8]=h=>e.yearSelected=h),chartData:e.chartData,paramId:"co2emissions"},null,8,["selectedYear","chartData"]),x(o,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[9]||(t[9]=h=>e.yearSelected=h),chartData:e.chartData,paramId:"popularity"},null,8,["selectedYear","chartData"]),x(o,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[10]||(t[10]=h=>e.yearSelected=h),chartData:e.chartData,paramId:"stateDebt"},null,8,["selectedYear","chartData"]),x(o,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[11]||(t[11]=h=>e.yearSelected=h),chartData:e.chartData,paramId:"co2budget"},null,8,["selectedYear","chartData"])],2)):C("",!0),e.lastSelected==="law"&&e.selectedLaw&&e.showDetails?(f(),g("div",Bo,[l("div",Mo,w(e.selectedLaw.title),1),l("div",Go,w(e.selectedLaw.description),1),l("div",Uo,"Aufwand: "+w((p=e.lawEffort)==null?void 0:p.time.toMonthsString()),1),l("div",No,w((_=e.lawEffort)==null?void 0:_.text),1),Ko,l("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,Ho),jo,l("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,Jo),Yo,(f(!0),g(H,null,Q(e.citationsOfLaw,(h,m)=>(f(),q(u,{class:"Section",key:m,citation:h},null,8,["citation"]))),128))])):C("",!0),e.lastSelected==="event"&&e.selectedEvent&&e.showDetails?(f(),g("div",Ro,[l("div",Zo,w(e.selectedEvent.title),1),l("div",Qo,w(e.selectedEvent.description),1),qo,l("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,Xo),el,l("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,tl),nl,(f(!0),g(H,null,Q((A=e.selectedEvent)==null?void 0:A.citations,(h,m)=>(f(),q(u,{class:"Section",key:m,citation:h},null,8,["citation"]))),128))])):C("",!0),e.lastSelected==="param"&&e.selectedParam&&e.showDetails?(f(),g("div",rl,[l("div",il,w(e.paramSelected)+" ["+w(e.selectedParam.unit)+"]",1),e.wParam?(f(),g("div",sl,"Initial value: "+w(e.wParam.initialValue)+" "+w(e.wParam.unit),1)):C("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(f(),g("div",al," Should initially be: "+w(e.cParam.shouldInitiallyBe)+" "+w(e.cParam.unit),1)):C("",!0),e.cParam?(f(),g("div",ol," Calculation: "+w(e.cParam.valueGetter),1)):C("",!0),ll,l("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,ul),cl,l("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,dl),hl,(f(!0),g(H,null,Q(e.selectedParam.citations,(h,m)=>(f(),q(u,{class:"Section",key:m,citation:h},null,8,["citation"]))),128))])):C("",!0),e.showParams?(f(),g("div",{key:4,class:$(["paramsList sidebyside",{lawSelected:e.lawSelected!=null}])},[l("div",fl,[l("div",null,"Start of law: "+w(e.startYearOfSelected),1),l("div",null,"Current year: "+w(e.currentYear),1)]),l("table",null,[(f(!0),g(H,null,Q(e.sortedValues,h=>(f(),g("tr",{key:h.id,class:$({clickable:!0,selected:e.paramSelected===h.id,[h.class]:!0}),onClick:m=>e.selectParam(h.id)},[l("td",null,w(h.id),1),l("td",gl,w(h.value),1),l("td",pl,w(h.effect),1),l("td",null,w(h.unit),1)],10,ml))),128))])],2)):C("",!0),e.showLaws?(f(),g("div",vl,[l("table",null,[l("tr",null,[l("th",{onClick:t[12]||(t[12]=h=>e.sortLaws("state")),class:"clickable"},"S"),l("th",{onClick:t[13]||(t[13]=h=>e.sortLaws("id")),class:"clickable"},"ID"),l("th",{onClick:t[14]||(t[14]=h=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(f(!0),g(H,null,Q(e.sortedLaws,h=>(f(),g("tr",{key:h.id,class:$({clickable:!0,selected:e.lawSelected===h.id,[h.state]:!0}),onClick:m=>e.selectLaw(h.id),draggable:"true",onDragstart:m=>e.dragStart(m,{lawId:h.id}),onDrop:Y(m=>e.onDrop(m,{lawId:h.id}),["prevent"]),onDragover:t[15]||(t[15]=Y(()=>{},["prevent"])),onDragenter:t[16]||(t[16]=Y(()=>{},["prevent"]))},[l("td",null,w(h.state),1),l("td",null,w(h.id),1),l("td",wl,w(h.priority),1)],42,bl))),128))])])):C("",!0),e.showEvents?(f(),g("div",yl,[l("table",null,[l("tr",null,[l("th",{onClick:t[17]||(t[17]=h=>e.sortEvents("id")),class:"clickable"},"ID"),l("th",{onClick:t[18]||(t[18]=h=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(f(!0),g(H,null,Q(e.sortedEvents,h=>(f(),g("tr",{key:h.id,class:$({clickable:!0,selected:e.eventSelected===h.id}),onClick:m=>e.selectEvent(h.id)},[l("td",null,w(h.id),1),l("td",Sl,w(h.probability),1)],10,kl))),128))])])):C("",!0),e.showYears?(f(),g("div",_l,[l("div",null,[x(c,null,{default:we(()=>[Dl,l("ul",zl,[(f(!0),g(H,null,Q(e.presets,h=>(f(),g("li",{key:h.name,class:"clickable",onClick:m=>e.loadPreset(h)},w(h.name),9,Cl))),128))])]),_:1}),El,l("a",{class:$(["clickable",e.compareActive?"selected":""]),onClick:t[19]||(t[19]=h=>e.toggleCompare())},"Compare",2)]),l("table",null,[(f(!0),g(H,null,Q(e.gameYears,h=>(f(),g(H,{key:h},[l("tr",{class:$({clickable:!0,selected:e.yearSelected===h}),onClick:m=>e.selectYear(h),draggable:"true",onDragstart:m=>e.dragStart(m,{year:h}),onDrop:Y(m=>e.onDrop(m,{year:h}),["prevent"]),onDragover:t[20]||(t[20]=Y(()=>{},["prevent"])),onDragenter:t[21]||(t[21]=Y(()=>{},["prevent"]))},[l("th",null,w(h),1)],42,Wl),(f(!0),g(H,null,Q(e.lawsInYear(h),({lawId:m,cls:W})=>(f(),g("tr",{key:m,class:$({clickable:!0,selected:e.lawSelected===m,[W]:!0}),onClick:b=>e.selectLaw(m),onContextmenu:Y(b=>e.rightClick(m,h),["right","prevent"]),draggable:"true",onDragstart:b=>e.dragStart(b,{lawId:m}),onDrop:Y(b=>e.onDrop(b,{year:h}),["prevent"]),onDragover:t[22]||(t[22]=Y(()=>{},["prevent"])),onDragenter:t[23]||(t[23]=Y(()=>{},["prevent"]))},[l("td",null,w(m),1)],42,Fl))),128))],64))),128))])])):C("",!0)])}var Al=B(Po,[["render",Pl],["__scopeId","data-v-85b0da02"]]);const Ll=V({components:{PeekInside:Al},setup(){return{store:ue(),devMode:localStorage.getItem("devMode")==="true"}},methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,n=Math.min(e/800,t/1e3),r=(t-1e3*n)/2;document.documentElement.style.setProperty("--scale",`${n}`),document.documentElement.style.setProperty("--translateX",`${r}px`)}},beforeMount(){this.updateStyle()},mounted(){window.addEventListener("resize",this.updateStyle)}}),Ol={class:"perspective"},Tl={class:"peek"};function xl(e,t,n,r,i,a){const o=ce("router-view"),u=ce("PeekInside");return f(),g(H,null,[l("div",Ol,[x(o)]),l("div",Tl,[e.devMode?(f(),q(u,{key:0})):C("",!0)])],64)}var Il=B(Ll,[["render",xl]]);const Qe=ln(Il);Qe.use(Ya,Gt);Qe.use(Mt);Qe.mount("#app");
