var Nt=Object.defineProperty,Ut=Object.defineProperties;var Kt=Object.getOwnPropertyDescriptors;var Ze=Object.getOwnPropertySymbols;var Ht=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable;var Ae=(e,t,n)=>t in e?Nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))Ht.call(t,n)&&Ae(e,n,t[n]);if(Ze)for(var n of Ze(t))jt.call(t,n)&&Ae(e,n,t[n]);return e},M=(e,t)=>Ut(e,Kt(t));var O=(e,t,n)=>(Ae(e,typeof t!="symbol"?t+"":t,n),n);import{D as Re,a as ke,s as Jt,b as Qe,v as Yt,d as V,r as ee,c as y,o as f,e as g,f as l,t as w,w as Y,g as z,n as B,h as Oe,u as E,p as Se,i as _e,F as K,j as Q,k as q,l as x,m as be,q as qe,x as Zt,T as Rt,y as N,z as Xe,A as Te,B as ae,C as Qt,E as qt,G as Xt,H as en,I as tn,V as nn,J as et,K as rn,L as sn}from"./vendor.1698ef2a.js";const an=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};an();const on={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};class De{constructor(t){O(this,"lux");t instanceof Re?this.lux=t.setLocale("de-DE").setZone("Europe/Berlin"):this.lux=Re.fromISO(t,{zone:"Europe/Berlin",locale:"de-DE"})}static durationBetween(t,n){return new xe(n.lux.diff(t.lux,["months"]))}plus(t){return new De(this.lux.plus(t.lux))}getYear(){return this.lux.get("year")}toLocaleString(){return this.lux.toLocaleString(on)}toMonthString(){return this.lux.toLocaleString({month:"long",year:"numeric"})}toJSON(){return this.lux.toJSON()}sameInstant(t){return+this.lux==+t.lux}}class xe{constructor(t){O(this,"lux");t instanceof ke?this.lux=t:typeof t=="string"?this.lux=ke.fromISO(t,{locale:"de-DE"}):this.lux=ke.fromObject(t)}toMonthsString(){const t=this.lux.as("months");return t===1?"1 Monat":t+" Monate"}lessThan(t){return this.lux<t.lux}}function ne(e){return new De(e)}function Ve(e){return new xe(e)}function ln(e,t){return De.durationBetween(e,t)}function un(e){return new xe(ke.fromDurationLike({month:e}))}function cn(e,t){return e.lux<t.lux?t:e}const he=2021,tt="2021-01-01",nt=2050,rt=Ve("P3M"),dn=Ve("P3M"),it=6,st=.6;function I(e){return e}const we={newYear:2,timesUp:3,finanzKollaps:4,wahlVerloren:5,hitzehoelle:6};function hn(e,t){const n=e.events.filter(r=>t.includes(r.id)).reduce((r,i)=>cn(r,ne(i.occuredIn)),ne(tt));return ln(n,ne(e.currentDate))}function re(e,t,n){return hn(e,[t.id]).lessThan(Ve(n))}var fn=I({title:"Abstandsregeln f\xFCr Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erh\xF6ht wird. Das f\xFChrte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",apply(){return[]}});const mn=new Jt.exports.Converter;function at(e){return e>0?[...Array(e)].map((t,n)=>n):[]}function gn(e,t){const n=e-t-1;return[...at(t),Math.max(t,n),...at(n).reverse()]}function s(e,...t){let n=e.map((i,a)=>i+(t[a]||"")).join("").split(`
`);n[0].length===0&&n.shift();const r=n[0].match(/^(\s+)/);return r&&!n.filter(i=>i.trim()).some(i=>!i.startsWith(r[1]))&&(n=n.map(i=>i.replace(r[1],""))),mn.makeHtml(n.join(`
`))}function Ie(e){return t=>!e(t)}function ot(e){return Object.entries(e).map(([t,n])=>M(A({},n),{id:t}))}function lt(e,t){const n=e.value-t.value;return r=>{const i=e.result*(r-t.value)/n,a=t.result*(r-e.value)/n;return i-a}}const pn=new Intl.DateTimeFormat("de-DE");class F{constructor(t){O(this,"url");O(this,"title");O(this,"publisher");O(this,"authors");O(this,"date");O(this,"comment");O(this,"internalComment");O(this,"localCopy");O(this,"referringUrl");O(this,"archiveUrl");O(this,"archiveNotPossible");this.url=new URL(t.url),this.title=t.title,this.publisher=t.publisher,this.authors=t.authors,this.date=t.date?new Date(t.date):void 0,this.comment=t.comment,this.internalComment=t.internalComment,this.localCopy=t.localCopy,this.referringUrl=t.referringUrl?new URL(t.referringUrl):void 0,this.archiveUrl=t.archiveUrl?new URL(t.archiveUrl):void 0,this.archiveNotPossible=t.archiveNotPossible}dateString(){const t=this.date;return t?" ("+pn.format(t)+")":""}toString(){const t=this.authors?this.authors+this.dateString():void 0,n=this.title?'"'+this.title+'"':void 0;return[t,n,this.url,this.publisher].filter(r=>r).join(", ")}}function T(e){const t=e.publisher||e.authors,n=t!=null?t+": ":"",r=e.title||e.url.toString(),i=e.url.toString();return`[[${n}${r}](${i})]`}const vn=e=>e.map(t=>t.toString()).join("; "),bn=new F({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),ie=new F({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),ze=new F({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"});new F({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineral\xF6lsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"});new F({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile f\xFCr wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""});const Ce=new F({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),wn=new F({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schl\xFCsselergebnisse der Studie des Wuppertal Instituts f\xFCr Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${T(Ce)}.`});Ce.comment=s`Zusammengefasst in ${T(wn)}.`;const H=new F({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahresch\xE4tzung der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),yn=new F({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),Ee=new F({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enth\xE4lt CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] f\xFCr mehrere Verkehrsmittel"});new F({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""});const ut=new F({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Stra\xDFeng\xFCterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),oe=new F({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enth\xE4lt Personenkilometer-Jahreswerte f\xFCr mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"});new F({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung \xD6PNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""});const $e=new F({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),kn=new F({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new F({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren f\xFCr Fernw\xE4rme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const ct=new F({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),Sn=new F({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),dt=new F({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle w\xE4re besser."}),_n=new F({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bev\xF6lkerung nach Nationalit\xE4t und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),Dn=new F({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur f\xFCr Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),zn=new F({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische \xC4mter des Bundes und der L\xE4nder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new F({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});new F({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgem\xE4\xDF - Interview mit Prof. Stefan G\xF6ssling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""});const Cn=new F({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),ht=new F({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),En=new F({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),ft=new F({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten f\xFCr die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class mt{constructor(t){O(this,"unit");O(this,"citations");O(this,"details");O(this,"internals");this.unit=t.unit,this.citations=t.citations?t.citations:[],this.details=t.details?t.details:"",this.internals=t.internals?t.internals:""}citationsDesc(){return vn(this.citations)}}const Wn={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class k extends mt{constructor(t){super(t);O(this,"writable",!0);O(this,"initialValue");O(this,"applyBounds");this.initialValue=t.initialValue,this.applyBounds=t.applyBounds||Wn[t.unit]}}class J extends mt{constructor(t){super(t);O(this,"writable",!1);O(this,"valueGetter");O(this,"shouldInitiallyBe");this.valueGetter=t.valueGetter,this.shouldInitiallyBe=t.shouldInitiallyBe}}const Pn=new k({unit:"MioTons",initialValue:6700,citations:[bn],details:s`

  `,internals:s`

  `}),Fn=new k({unit:"MioTons",initialValue:186.793,citations:[H],details:s`

  `,internals:s`

  `}),Ln=new J({unit:"MioTons",valueGetter(e){return e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4},shouldInitiallyBe:159.696,citations:[H,ut],details:s`

  `,internals:s`
    ${T(H)}: 159.696 as MioTons

    ${T(ut)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),An=new J({unit:"MioTons",valueGetter(e){return e.co2emissionsStreetVehicles+e.publicLocalCapacity*65/1e6+e.publicNationalCapacity*32/1e6+e.airDomesticUsage*222/1e6+1.641},citations:[Ee,H],details:s`

  `,internals:s`
    ${T(Ee)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${T(H)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${T(H)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${T(H)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),On=new J({unit:"MioTons",valueGetter(e){return e.buildingsSourceElectricity*0+e.buildingsSourceBio*0+e.buildingsSourceGas*.247+e.buildingsSourceOil*.318+e.buildingsSourceTele*.16},citations:[H,$e],details:s`

  `,internals:s`
    TODO: #91 Gibt es hier bessere Quellen?

    ${T($e)}: 247g CO2 pro kWh Erdgas.

    ${T($e)}: 318g CO2 pro kWh Erdöl.

    ${T(kn)}: 160g CO2 pro kWh Fernwärme.

    ${T(H)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),Tn=new k({unit:"MioTons",initialValue:67.936,citations:[H],details:s`

  `,internals:s`

  `}),xn=new k({unit:"MioTons",initialValue:9.243,citations:[H],details:s`

  `,internals:s`

  `}),Vn=new J({unit:"MioTons",valueGetter(e){return e.electricityGas*.399+e.electricitySolar*.058+e.electricityWind*.005+e.electricityWater*.02+e.electricityHardCoal*.835+e.electricityBrownCoal*1.137+e.electricityBiomass*.03+e.electricityNuclear*.005},citations:[ct,H],details:s`

  `,internals:s`
    ${T(ct)}:
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
    - Diskrepanz zu ${T(Sn)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${T(H)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),In=new J({unit:"MioTons",valueGetter(e){return e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers},details:s`

  `,internals:s`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${T(H)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[yn]}),$n=new k({unit:"TWh",initialValue:480.54,citations:[ie],details:s`

  `,internals:s`

  `}),Bn=new k({unit:"Percent",initialValue:50,citations:[],details:s`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:s`

  `}),Gn=new k({unit:"TWh",initialValue:51.42,citations:[ie],details:s`

  `,internals:s`

  `}),Mn=new k({unit:"TWh",initialValue:131.85,citations:[ie],details:s`

  `,internals:s`

  `}),Nn=new k({unit:"TWh",initialValue:6,citations:[ie],details:s`

  `,internals:s`

  `}),Un=new k({unit:"Percent",initialValue:100,citations:[En],details:s`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),Kn=new k({unit:"TWh",initialValue:14.99,citations:[ie],details:s`

  `,internals:s`

  `}),Hn=new k({unit:"TWh",initialValue:43.19,citations:[ie],details:s`

  `,internals:s`

  `}),jn=new k({unit:"TWh",initialValue:60.91,citations:[ie],details:s`

  `,internals:s`

  `}),Jn=new k({unit:"TWh",initialValue:35.46,citations:[ie],details:s`

  `,internals:s`

  `}),Yn=new k({unit:"TWh",initialValue:82.13,citations:[ie],details:s`

  `,internals:s`

  `}),Zn=new J({unit:"TWh",valueGetter(e){return e.electricityHardCoal+e.electricityBrownCoal},details:s`

  `,internals:s`

  `}),Rn=new J({unit:"TWh",valueGetter(e){return e.electricityDemand+e.buildingsSourceElectricity*.25-e.electricitySolar-e.electricityWind-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear},details:s`

  `,internals:s`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),Qn=new k({unit:"GramPerPsgrKm",initialValue:160,citations:[Ee],details:s`

  `,internals:s`
    ${T(Ee)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),qn=new k({unit:"MioPsgrKm",initialValue:917e3,citations:[oe],details:s`

  `,internals:s`

  `}),Xn=new k({unit:"Percent",initialValue:.5,citations:[dt],details:s`

  `,internals:s`
    Die verschiedenen Zahlen in ${T(dt)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),er=new k({unit:"MioPsgrKm",initialValue:112600,citations:[oe],details:s`

  `,internals:s`

  `}),tr=new k({unit:"MioPsgrKm",initialValue:112600,citations:[oe],details:s`

  `,internals:s`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),nr=new k({unit:"MioPsgrKm",initialValue:67300,citations:[oe],details:s`

  `,internals:s`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),rr=new k({unit:"MioPsgrKm",initialValue:67300,citations:[oe],details:s`

  `,internals:s`
Siehe \`publicLocalCapacity\`.
  `}),ir=new k({unit:"MioPsgrKm",initialValue:10100,citations:[oe],details:s`

  `,internals:s`

  `}),sr=new k({unit:"MioPsgrKm",initialValue:61700,citations:[oe],details:s`

  `,internals:s`

  `}),ar=new J({unit:"MioPsgrKm",valueGetter(e){return e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage},shouldInitiallyBe:1168700,citations:[oe],details:s`

  `,internals:s`

  `}),or=new k({unit:"TWh",initialValue:226,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),lr=new k({unit:"TWh",initialValue:544,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),ur=new J({unit:"TWh",valueGetter(e){return e.buildingsPrivateDemand+e.buildingsIndustryDemand},shouldInitiallyBe:770,citations:[],details:s`

  `,internals:s`
    TODO: #78 Quelle ${T(ft)} gibt diese Zahlen nicht her.
  `}),cr=new k({unit:"TWh",initialValue:0,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 0 TWh.
  `}),dr=new k({unit:"TWh",initialValue:130,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),hr=new k({unit:"TWh",initialValue:219,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),fr=new k({unit:"TWh",initialValue:58,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),mr=new J({unit:"TWh",valueGetter(e){return e.buildingsDemand-(e.buildingsSourceElectricity+e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele)},citations:[],details:s`

  `,internals:s`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${T(ft)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),gr=new k({unit:"Percent",initialValue:50,citations:[],details:s`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:s`

  `}),pr=new k({unit:"TsdPeople",initialValue:83155.031,citations:[_n],details:s`

  `,internals:s`
Anfangswert ist der Stand 31.12.2020.
  `}),vr=new k({unit:"TsdPeople",initialValue:2695,citations:[Dn],details:s`

  `,internals:s`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),br=new k({unit:"MrdEuro",initialValue:3332,citations:[zn],details:s`

  `,internals:s`
Anfangswert ist das BIP 2020.
  `}),wr=new k({unit:"MrdEuro",initialValue:1899,citations:[],details:s`

  `,internals:s`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),X={co2budget:Pn,co2emissionsIndustry:Fn,co2emissionsStreetVehicles:Ln,co2emissionsMobility:An,co2emissionsAgriculture:Tn,co2emissionsBuildings:On,co2emissionsOthers:xn,co2emissionsEnergy:Vn,co2emissions:In,electricityDemand:$n,electricityGridQuality:Bn,electricitySolar:Gn,electricityWind:Mn,electricityWindOnshoreMaxNew:Nn,electricityWindEfficiency:Un,electricityWater:Kn,electricityBiomass:Hn,electricityNuclear:jn,electricityHardCoal:Jn,electricityBrownCoal:Yn,electricityCoal:Zn,electricityGas:Rn,carEmissionFactor:Qn,carUsage:qn,carRenewablePercentage:Xn,publicLocalUsage:er,publicLocalCapacity:tr,publicNationalUsage:nr,publicNationalCapacity:rr,airDomesticUsage:ir,airIntlUsage:sr,passengerTransportUsage:ar,buildingsIndustryDemand:or,buildingsPrivateDemand:lr,buildingsDemand:ur,buildingsSourceElectricity:cr,buildingsSourceBio:dr,buildingsSourceOil:hr,buildingsSourceTele:fr,buildingsSourceGas:mr,popularity:gr,numberOfCitizens:pr,unemployment:vr,gdp:br,stateDebt:wr},gt=Object.entries(X).filter(e=>e[1]instanceof k).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),pt=Object.entries(X).filter(e=>e[1]instanceof J).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),yr=Object.keys(gt),vt=Object.keys(X);class bt extends k{constructor(t,n){super(t);O(this,"name");this.name=n}}const kr=Object.entries(gt).map(e=>new bt(e[1],e[0]));class wt extends J{constructor(t,n){super(t);O(this,"name");this.name=n}}Object.entries(pt).map(e=>new wt(e[1],e[0]));const yt=Object.entries(X).map(e=>e[1]instanceof k?new bt(e[1],e[0]):new wt(e[1],e[0])),fe=kr.reduce((e,t)=>(e[t.name]=t.initialValue,e),{}),kt=yt.reduce((e,t)=>(e[t.name]=0,e),{});function me(e){const t=A({},e);return Object.entries(pt).forEach(n=>Object.defineProperty(t,n[0],{enumerable:!0,get:()=>n[1].valueGetter(t)})),t}function Sr(e){return A({},e)}function ce(e,t){return{type:"dispatch",condition:!0,if(n){return this.condition=n,this},apply(n){this.condition&&n.dispatch(e,t)}}}function h(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(t){return this.percent=t,this},byValue(t){return this.value=t,this},setValue(t){return this.absolute=t,this},if(t){return this.condition=t,this},getOldNew(t){const n=this.name,r=t[n];if(!this.condition)return{oldVal:r,newVal:r};const i=X[n],a=this.absolute!=null?this.absolute:r+(this.value||r*this.percent/100),o=i.applyBounds(a);return{oldVal:r,newVal:o}},getChange(t){if(!this.condition)return 0;const{oldVal:n,newVal:r}=this.getOldNew(t);return r-n},apply(t){if(t.values!=null&&this.condition){const{newVal:n}=this.getOldNew(t.values);t.values[this.name]=n}}}}function Z(e,t){if(X[e].unit!=X[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(n){return this.percent=n,this},byValue(n){return this.value=n,this},if(n){return this.condition=n,this},getEffect(n){const r=n[this.to],i=n[this.from];if(!this.condition)return{oldTo:r,oldFrom:i,newTo:r,newFrom:i};const a=X[this.to],o=X[this.from],c=this.value||r*this.percent/100,u=a.applyBounds(r+c)-r,p=-o.applyBounds(i-u)+i,_=r+p,L=i-p;return{oldTo:r,newTo:_,oldFrom:i,newFrom:L}},apply(n){if(n.values!=null&&this.condition){const{newTo:r,newFrom:i}=this.getEffect(n.values);n.values[this.to]=r,n.values[this.from]=i}}}}function We(e,t){t.filter(n=>n.condition).forEach(n=>n.apply(e))}var _r=I({title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply(){return[ce("gameOver")]},probability(e){return e.acceptedLaws.find(n=>n.lawId==="KernenergienutzungVerlaengern")?.5:0},citations:[],details:s`

  `,internals:s`

  `});const Dr=e=>({time:rt,text:`Braucht ${rt.toMonthsString()}.`});function S(e,t="Braucht {months}."){const n=un(e),r=t.replace(/{months}/g,n.toMonthsString());return{time:n,text:r}}function D(e){return e}function W(e,t,n){const r=n-e,i=t-e;if(i===0)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return r/i*100}function Be(e,t){const n=t.value-e.value,r=n/Math.abs(n),i=r*e.value;return a=>n===0||r*a<=i?e.result:lt(e,t)(a)}function v(e,t,n=0){if(!le.map(r=>r.id).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some(r=>r.lawId===t&&r.effectiveSince<=e.currentYear+n)}function zr(e){const t=e.events[0];return t&&ne(t.occuredIn).sameInstant(ne(e.currentDate))?t:void 0}function U(e,t){const n=zr(e);return n!=null&&t.includes(n.id)}function se(e){const t=e.values;return t.electricityWind/t.electricityDemand*100}function j(e){return(e.values.electricityWind+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}function Cr(e,t){const n=e.values,r=X[t].initialValue,i=n.electricityGridQuality,a=n.electricityDemand;return lt({value:50,result:r},{value:100,result:a})(i)}function de(e,t,n){const r=e.values,i=r.electricityCoal+r.electricityGas;if(i<=0)return[];const a=r.electricityHardCoal/i,o=r.electricityBrownCoal/i,c=r.electricityGas/i;return[Z(t,"electricityHardCoal").if(a>0).byValue(a*n),Z(t,"electricityBrownCoal").if(o>0).byValue(o*n),h(t).if(c>0).byValue(c*n)]}function Pe(e,t,n,r){const i=v(e,"WindkraftVereinfachen")?0:5;if(e.currentYear<r+i)return[];const a=e.values,c=(Math.min(t,a.electricityWindOnshoreMaxNew)+n)*a.electricityWindEfficiency/100,u=a.electricityWind,p=Math.min(u+c,Cr(e,"electricityWind"))-u;return de(e,"electricityWind",p)}function Ge(e,t,n,r){const i=r(j(e)),a=r(e.values.carRenewablePercentage);return[h("stateDebt").byValue((25-t)/1e3*e.values.co2emissions),h("popularity").byValue(i+a),h("co2emissionsIndustry").byPercent(n),h("co2emissionsAgriculture").byPercent(n),h("co2emissionsOthers").byPercent(n),Z("electricityBrownCoal","electricityWind").byPercent(.7*n),Z("electricityHardCoal","electricityWind").byPercent(.7*n),Z("electricityBrownCoal","electricitySolar").byPercent(.3*n),Z("electricityHardCoal","electricitySolar").byPercent(.3*n),Z("buildingsSourceOil","buildingsSourceBio").byPercent(n),Z("carUsage","publicNationalUsage").byPercent(.5*n),Z("carUsage","publicLocalUsage").byPercent(.5*n)]}var Er=D({title:"Abstandsregeln f\xFCr Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(12,"BIs werden es Dir schwer machen. {months}!")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[h("popularity").byValue(-40).if(t===n),h("electricityWindOnshoreMaxNew").setValue(1e3).if(n>=t+r)]},priority(e){return U(e,["AbstandsregelnWindkraft"])?100:v(e,"AbstandsregelnFuerWindkraftLockern")?W(80,25,se(e)):0}}),Wr=D({title:"Abstandsregeln f\xFCr Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln f\xFCr Windkraftanlagen sowie Bauerlaubniss in W\xE4ldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(6,"Das schaffst Du in {months}n.")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[h("popularity").byValue(-3).if(t===n),h("electricityWindOnshoreMaxNew").setValue(30).if(n>=t+r)]},priority(e){return U(e,["AbstandsregelnWindkraft"])?100:v(e,"AbstandsregelnFuerWindkraftWieBisher")?W(70,27,se(e)):v(e,"AbstandsregelnFuerWindkraftAbschaffen")?W(30,100,se(e)):0},citations:[],details:s`

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
  `}),Pr=D({title:"Abstandsregeln f\xFCr Windkraft versch\xE4rfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngeb\xE4uden im Innenbereich muss das Zehnfache der Gesamth\xF6he der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(1,"Dauert nur einen Monat.")},effects(e,t,n){return[h("popularity").byValue(5).if(t===n),h("electricityWindOnshoreMaxNew").setValue(.42)]},priority(e){return U(e,["AbstandsregelnWindkraft"])?100:v(e,"AbstandsregelnFuerWindkraftWieBisher")?W(0,100,se(e)):0}}),Fr=D({title:"Abstandsregeln f\xFCr Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem \xFCber Abst\xE4nde zwischen den Windkraftanlagen und Wohngeb\xE4uden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(3,"Wie aussitzen: {months}.")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[h("electricityWindOnshoreMaxNew").setValue(6).if(n>=t+r)]},priority(e){return U(e,["AbstandsregelnWindkraft"])?100:v(e,"AbstandsregelnFuerWindkraftLockern")?W(30,100,se(e)):v(e,"AbstandsregelnFuerWindkraftVerschaerfen")?W(70,27,se(e)):0}}),Lr=D({title:"Ausschreibungsverfahren f\xFCr Windkraft 64,8 TWh",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 64,8 TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return v(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?S(5):v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?S(9):S(11)},effects(e,t,n){return[h("popularity").byValue(-20).if(t===n),h("unemployment").byValue(-100).if(t===n),...Pe(e,55.2,9.6,t)]},priority(e){return U(e,["WindkraftAusschreibung"])?100:v(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?W(100,50,j(e)):0}}),Ar=D({title:"Ausschreibungsverfahren f\xFCr Windkraft 16,2 TWh",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 16,2 TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return S(2)},effects(e,t,n){return[h("popularity").byValue(-1).if(t===n),h("unemployment").byValue(-20).if(t===n),...Pe(e,13.8,2.4,t)]},priority(e){return U(e,["WindkraftAusschreibung"])?100:v(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?W(100,50,j(e)):v(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?W(40,100,j(e)):0}}),Or=D({title:"Ausschreibungsverfahren f\xFCr Windkraft 32,4 TWh",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 32,4 TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?S(4):S(6)},effects(e,t,n){return[h("popularity").byValue(-2).if(t===n),h("unemployment").byValue(-100).if(t===n),...Pe(e,27.6,4.8,t)]},priority(e){return U(e,["WindkraftAusschreibung"])?100:v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?W(100,50,j(e)):v(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?W(0,100,j(e)):0},citations:[],details:s`
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
  `}),Tr=D({title:"Ausschreibungsverfahren f\xFCr Windkraft 8,1 TWh wie zu Beginn",description:"Windkraft Betreiber k\xF6nnen sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstm\xF6glichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return S(8)},effects(e,t,n){return[...Pe(e,6.9,1.2,t)]},priority(e){return U(e,["WindkraftAusschreibung"])?100:v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?W(60,100,j(e)):0}}),xr=D({title:"Automatische Anpassungen einiger Sektoren",description:"Mobilit\xE4t, Industrie, Geb\xE4ude und Landwirtschaft nutzen automatisch regenerative Energiequellen, sobald sie zur Verf\xFCgung stehen.",labels:["initial"],effects(e,t,n){if(j(e)<70)return[];const r=h("co2emissionsIndustry").byPercent(-20),a=r.getChange(e.values)/-.835;return[h("carRenewablePercentage").byValue(10),h("electricityDemand").byValue(22),r,h("electricityDemand").byValue(a),Z("buildingsSourceBio","buildingsSourceOil").byValue(10),Z("buildingsSourceElectricity","buildingsSourceOil").byValue(10),Z("buildingsSourceElectricity","buildingsSourceTele").byValue(5),h("buildingsSourceElectricity").byValue(Math.min(20,e.values.buildingsSourceGas)),h("co2emissionsAgriculture").byValue(-10),h("co2emissionsOthers").byValue(-1)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`
    Dieses Gesetz läuft dauerhaft mit und soll kompensieren, dass es für diese Sektoren noch nicht genügend Gesetze gibt.
  `}),Vr=D({title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effort(e){return e.values.popularity>=50?S(6,"Normal dauert das 12 Monate, aber bei Deiner Beliebtheit nur {months}."):S(12)},effects(){return[h("stateDebt").byValue(-37),h("electricityHardCoal").byPercent(-10),h("electricityBrownCoal").byPercent(-5),h("electricityWind").byValue(5),h("electricitySolar").byValue(3),h("electricityWater").byValue(.5)]},priority(e){return U(e,["EnergieStrategie"])?100:W(nt,he,e.currentYear)}}),Ir=D({title:"Erforschung und Umsetzung dezentraler Stromerzeugung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur f\xFCr die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return S(1)},effects(e,t,n){const r=n<t+5,i=n>=t+1;return[h("stateDebt").byValue(2).if(r),h("electricityGridQuality").byValue(1).if(i)]},priority(e){const t=e.values;return W(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),$r=D({title:"Forschung und Entwicklung zur Stromspeicherung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return S(1)},effects(e,t,n){const r=n<t+5,i=n>=t+3;return[h("stateDebt").byValue(2).if(r),h("electricityGridQuality").byValue(.2).if(i)]},priority(e){const t=e.values;return W(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Br=D({title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,n){const i={2021:60.45,2022:30.21}[n]||0;return[h("electricityNuclear").setValue(i)]},priority(e){return 0}});const St=me(fe).electricityGas;var Gr=D({title:"Kernenergienutzung verl\xE4ngern",description:"Kernkraftwerke l\xE4nger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effort(e){return S(8)},effects(){return[h("electricityNuclear").setValue(104.3),h("stateDebt").byValue(-2.5),h("popularity").byValue(-4)]},priority(e){return U(e,["EnergieStrategie"])?100:W(St,1.1*St,e.values.electricityGas)}}),Mr=D({title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effort(e){return S(11)},effects(e,t,n){const r=n-t,i=r<18?4.3/18:0,a=2.5,o=20,c=60,u=(10-r)/55,p=Math.max((o+c/2)*u,0);return[h("electricityHardCoal").setValue(0),h("electricityBrownCoal").setValue(0),h("stateDebt").byValue(-i+a),h("unemployment").byValue(p)]},priority(e){return U(e,["EnergieStrategie"])?100:e.values.electricityCoal/e.values.electricityDemand<=.1?0:W(1e4,0,e.values.unemployment)},citations:[],details:s`

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
  `}),Nr=D({title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren f\xFCr den Ausbau des Stromnetzes",effort(e){return S(2)},effects(e,t,n){return[h("popularity").byValue(-3).if(t===n),h("electricityGridQuality").byValue(1)]},priority(e){return W(70,27,se(e))},citations:[],details:s`

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
  `}),Ur=D({title:"Netzausbau f\xF6rdern",description:"Ausbau des Stromnetzes mit Steuermitteln f\xF6rdern",effort(e){return S(3)},effects(e,t,n){return[h("popularity").byValue(-1).if(t===n),h("stateDebt").byValue(2),h("electricityGridQuality").byValue(5).if(v(e,"NetzausbauErleichtern"))]},priority(e){return W(70,27,se(e))},citations:[],details:s`

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
  `}),Kr=D({title:"Solar auf neuen D\xE4chern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die D\xE4cher.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return S(3)},effects(e,t,n){return[h("popularity").byValue(-3).if(t===n),...de(e,"electricitySolar",2)]},priority(e){return v(e,"SolarstromFoerderungWieZuBeginn")?W(100,30,j(e)):0},details:s`

  `,internals:s`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `}),Hr=D({title:"Solarstrom F\xF6rderung 10 TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verdoppeln. Es werden 10 TWh pro Jahr zugebaut.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return S(4)},effects(e,t,n){return[h("popularity").byValue(10).if(t===n),h("unemployment").byValue(-31e3).if(t===n),...de(e,"electricitySolar",10)]},priority(e){return U(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:v(e,"SolarstromFoerderungWieZuBeginn")?W(100,30,j(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),jr=D({title:"Solarstrom F\xF6rderung 20TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen vervierfachen. Es werden 20 TWh pro Jahr zugebaut.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return v(e,"SolarstromFoerdernx2")?S(3):S(7)},effects(e,t,n){return[h("popularity").byValue(20).if(t===n),h("unemployment").byValue(-89e3).if(t===n),...de(e,"electricitySolar",20)]},priority(e){return U(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:v(e,"SolarstromFoerdernx2")?W(100,30,j(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:s`
    # Happy path 10

    ${T(Ce)}
  `,citations:[Ce]}),Jr=D({title:"Solarstrom F\xF6rderung 40TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verachtfachen. Es werden 40 TWh pro Jahr zugebaut.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return v(e,"SolarstromFoerdernx4")?S(2):v(e,"SolarstromFoerdernx2")?S(5):S(9)},effects(e,t,n){return[h("popularity").byValue(-10).if(t===n),h("unemployment").byValue(-209e3).if(t===n),...de(e,"electricitySolar",40)]},priority(e){return U(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:v(e,"SolarstromFoerdernx4")?W(100,30,j(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `}),Yr=D({title:"Solarstrom F\xF6rderung einstellen",description:"Mittlere bis gro\xDFe Solaranlagen sollten sich selbst tragen. Die F\xF6rderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return v(e,"SolarstromFoerderungWieZuBeginn")?S(5):S(13,"So eine Kehrtwende in der Politik ist schwer durchsetzbar. Das braucht {months}.")},effects(e,t,n){return[...de(e,"electricitySolar",2)]},priority(e){return U(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:v(e,"SolarstromFoerderungWieZuBeginn")?W(0,100,j(e)):0},details:s`

  `}),Zr=D({title:"Solarstrom F\xF6rderung wie zu Beginn 5 TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen wie bisher. Es werden 5 TWh pro Jahr zugebaut.",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return S(9)},effects(e,t,n){return[...de(e,"electricitySolar",5)]},priority(e){return U(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:v(e,"SolarstromFoerdernx8")?W(70,100,j(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),Rr=D({title:"Stromspeicherung erleichtern",description:"B\xFCrokratische H\xFCrden f\xFCr den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effort(e){return S(3)},effects(e,t,n){return[h("electricityGridQuality").byValue(.2)]},priority(e){const t=e.values;return W(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Qr=D({title:"Stromspeicherung f\xF6rdern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln f\xF6rdern. 2 Mrd \u20AC pro Jahr.",effort(e){return S(7)},effects(e,t,n){const r=v(e,"StromspeicherungErleichtern")?0:5,i=n>=t+r,a=v(e,"ForschungUndEntwicklungStromspeicherung",3);return[h("stateDebt").byValue(1),h("popularity").byValue(.2).if(i),h("stateDebt").byValue(1).if(i),h("electricityGridQuality").byValue(2).if(i),h("electricityGridQuality").byValue(2).if(a),h("electricityGridQuality").byValue(2).if(i&&a)]},priority(e){const t=e.values;return W(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),qr=D({title:"Windkraft vereinfachen",description:"Genehmigungen f\xFCr Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effort(e){return S(4,"Die Bundesl\xE4nder m\xFCssen mit ins Boot geholt werden. Das dauert {months}.")},effects(e,t,n){return[]},priority(e){return W(80,27,se(e))},citations:[],details:s`

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
  `});const Xr={AbstandsregelnFuerWindkraftAbschaffen:Er,AbstandsregelnFuerWindkraftLockern:Wr,AbstandsregelnFuerWindkraftVerschaerfen:Pr,AbstandsregelnFuerWindkraftWieBisher:Fr,AusschreibungsverfahrenfuerWindkraftVerachtfachen:Lr,AusschreibungsverfahrenfuerWindkraftVerdoppeln:Ar,AusschreibungsverfahrenfuerWindkraftVervierfachen:Or,AusschreibungsverfahrenfuerWindkraftWieBisher:Tr,AutomatischeSektoren:xr,EnergiemixRegeltDerMarkt:Vr,ForschungDezentraleStromerzeugung:Ir,ForschungUndEntwicklungStromspeicherung:$r,InitialAtomausstieg:Br,KernenergienutzungVerlaengern:Gr,KohleverstromungEinstellen:Mr,NetzausbauErleichtern:Nr,NetzausbauFoerdern:Ur,SolarAufAllenDaechernVerpflichtend:Kr,SolarstromFoerdernx2:Hr,SolarstromFoerdernx4:jr,SolarstromFoerdernx8:Jr,SolarstromFoerderungAbschaffen:Yr,SolarstromFoerderungWieZuBeginn:Zr,StromspeicherungErleichtern:Rr,StromspeicherungFoerdern:Qr,WindkraftVereinfachen:qr};let Me=Qe("",{state:!0}),_t=()=>Math.abs(Me());function ei(e){Me=Qe(e.id,{state:e.prngState})}function ti(){return Me.state()}var ni=D({title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bew\xE4hrt. Wir lassen sie so, wie sie sind.",effort(e){return S(3,"Wie aussitzen: {months}.")},effects(){return[]},priority(e){return _t()}}),ri=D({title:"CO2 Preis Erh\xF6hen",description:"Die Preise werden schneller erh\xF6ht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return S(6)},effects(e,t,n){const r=n>=t+2?n>=t+4?100:70:0;return[...Ge(e,r,-.5,Be({value:50,result:0},{value:0,result:-1}))]},priority(e){return v(e,"VollerCO2Preis")||v(e,"WirksamerCO2Preis")?0:50},citations:[ht],details:s`

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
  `}),ii=D({title:"Test",description:"Gesetz zum Testen. Wird in automatischen Tests verwendet.",effort(e){return S(6)},effects(e,t,n){return[h("popularity").byPercent(50).if((n-t)%3!=0),h("popularity").byPercent(-50).if((n-t)%3==0),h("stateDebt").byPercent(-200).if(n===t),h("stateDebt").byPercent(50).if((n-t)%3!=0),h("stateDebt").byPercent(-50).if((n-t)%3==0),h("stateDebt").byPercent(-200).if(n===t+10)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`

  `}),si=D({title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return S(10)},effects(e,t,n){return[...Ge(e,3e3,-5,Be({value:90,result:0},{value:50,result:-10}))]},priority(e){return v(e,"WirksamerCO2Preis")?50:0},citations:[Cn],details:s`

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
  `}),ai=D({title:"Wasserstofftechnologie f\xF6rdern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return S(1)},effects(e,t,n){const r=n<t+5,i=n>=t+5;return[h("stateDebt").byValue(2).if(r),h("carRenewablePercentage").byValue(1).if(i)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return W(40,90,r)},citations:[],details:s`

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
  `}),oi=D({title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return S(8)},effects(e,t,n){return[...Ge(e,150,-2,Be({value:80,result:0},{value:50,result:-3}))]},priority(e){return v(e,"CO2PreisErhoehen")?50:0},citations:[ht],details:s`

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
  `});const li={AllesBleibtBeimAlten:ni,CO2PreisErhoehen:ri,Test:ii,VollerCO2Preis:si,WasserstofftechnologieFoerdern:ai,WirksamerCO2Preis:oi},Dt=A(A({},li),Xr),ui=Object.keys(Dt);function ci(e){return ot(e).map(t=>M(A({},t),{effort:t.effort||Dr}))}const le=ci(Dt);function di(e){const t=le.find(n=>n.id===e);if(t)return t;throw Error(`Law #${e} not found`)}function ye(e){const t=di(e.lawId);if(t)return M(A({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function Ne(e){return e.map(t=>{const n=le.find(r=>r.id===t);return n||console.error(`Inconsistency: Proposed law #${t} not found`),n}).filter(t=>t)}const hi=(e,t,n)=>Object.fromEntries(e.map(r=>{const i=t(r),a=Object.fromEntries(vt.map(o=>[o,n(r,i,o)]));return[r.id,a]}));function zt(e){return e.find(t=>t.title.match(/subvention/i)&&t.title.match(/abbau/i))}var fi=I({title:"Anruf von befreundetem Unternehmer",description:`Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und m\xF6chte dich in seine
    Ferienvilla auf Sardinien einladen. Er verl\xE4sst sich nat\xFCrlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,apply(e){if(e){const t=zt(Ne(e.proposedLaws));if(t)return[ce("rejectLaw",{lawId:t.id})]}return[]},probability(e,t){return re(e,t,{years:3,months:8})?0:zt(Ne(e.proposedLaws))?.5:0}}),mi=I({title:"D\xFCrreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausf\xE4lle sind enorm.",apply(){return[h("gdp").byValue(-100),h("popularity").byValue(-10)]},probability(e,t){return Math.min(1,W(400,0,e.values.co2budget)/100)},citations:[],details:s`

  `,internals:s`

  `}),gi=I({title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute \xFCber die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",apply(){return[]}}),pi=I({title:"Zusammenbruch des Finanzsystems",description:`Deine Staatsfinanzen sind desastr\xF6s. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zur\xFCckahlen k\xF6nnen. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    k\xF6nntest. Das Spiel ist damit leider beendet.
  `,apply(){return[ce("gameOver")]},probability(e,t){return e.values.stateDebt>fe.stateDebt*2?we.finanzKollaps:0}}),vi=I({title:"Hitzeh\xF6lle",description:`Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen K\xFCstenregionen
  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr w\xE4chst.
  Um die verbleibdenden Teile sind erbitterte K\xE4mpfe ausgebrochen.
  `,apply(){return[ce("gameOver")]},probability(e,t){return e.values.co2budget<=0?we.hitzehoelle:0}}),bi=I({title:"Klimafl\xFCchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimafl\xFCchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply(){return[h("stateDebt").byValue(10)]},probability(e,t){return e.values.co2budget<500?.2:0},citations:[],details:s`

  `,internals:s`

  `}),wi=I({title:"Happy New Year!",description:`Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen T\xE4tigkeit aufgestellt
    und kommt zu dem nicht weiter \xFCberraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht \xFCberraschend - sieht die Sache anders und verurteilt die Regierungserkl\xE4rung als haltlos.
  `,apply(){return[ce("advanceYear")]},probability(e,t){return ne(e.currentDate).getYear()>e.currentYear?we.newYear:0}}),yi=I({title:"Plagiatsaff\xE4re",description:"W\xE4hrend des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet W\xE4hlerstimmen.",apply(){return[h("popularity").byValue(-10)]},probability(e,t){return re(e,t,{years:3,months:10})?0:.5},citations:[],details:s`

  `,internals:s`

  `}),ki=I({title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply(){return[h("popularity").byValue(-2)]},probability(e,t){return re(e,t,{years:2,months:11})?0:.3},citations:[],details:s`

  `,internals:s`

  `}),Si=I({title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und f\xFChrt zu einer neuen Diskussion \xFCber Lobbyismus.",apply(){return[h("popularity").byValue(-2)]},probability(e,t){return re(e,t,{months:11})||v(e,"WirksamerCO2Preis")||v(e,"VollerCO2Preis")||v(e,"KohleverstromungEinstellen")?0:.3},citations:[],details:s`

  `,internals:s`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `}),_i=I({title:"Social Media Alarm!",description:`Deine Wahlkampfberaterin ruft dich v\xF6llig aufgel\xF6st an. Ob denn an den Geschichten was dran sein, die da im
    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.
    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.
  `,apply(){return[h("popularity").byPercent(-20)]}}),Di=I({title:"B\xFCrgerinitiative fordert st\xE4rkere Solarf\xF6rderung",description:"Du musst entscheiden, wie gro\xDF die F\xF6rderung ausf\xE4llt. Oder willst du sie verkleinern oder sogar abschaffen?",apply(){return[]},probability(e,t){if(re(e,t,{months:8}))return 0;const n=v(e,"SolarstromFoerderungAbschaffen"),r=v(e,"SolarstromFoerderungWieZuBeginn"),i=v(e,"SolarstromFoerdernx2");return n||r||i?.5:0},citations:[ze],details:s`

  `,internals:s`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${T(ze)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),zi=I({title:"Bund der Steuerzahler fordert Abschaffung Solarf\xF6rderung",description:"Der Solaranteil ist bereits sehr hoch, die Kosten f\xFCr die F\xF6rderung sind schwer zu vermitteln.",apply(){return[]},probability(e,t){if(re(e,t,{years:1,months:2}))return 0;const n=e.values.electricitySolar/e.values.electricityDemand,r=v(e,"SolarstromFoerdernx2"),i=v(e,"SolarstromFoerdernx4"),a=v(e,"SolarstromFoerdernx8");return n>50&&(r||i||a)?.5:0},citations:[ze],details:s`

  `,internals:s`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${T(ze)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),Ci=I({title:"Du hast durchgehalten",description:`Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,
    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Ma\xDFnahmen waren zu finanzieren
    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!
  `,apply(){return[ce("gameOver")]},probability(e){return e.currentYear===2050?we.timesUp:0}}),Ei=I({title:"Wahl verloren",description:`Deine Beliebtheit in der Bev\xF6lkerung ist katastrophal, lieber w\xFCrde man Mao Zedong w\xE4hlen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du geh\xF6rst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon l\xE4nger kein vern\xFCnftiger Mensch mehr geglaubt.
  `,apply(){return[ce("gameOver")]},probability(e){return e.values.popularity<=0?we.wahlVerloren:0}}),Wi=I({title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet wieder einmal eine Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",apply(){return[]},probability(e,t){return re(e,t,{months:15})?0:.7},citations:[],details:s`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:s`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `}),Pi=I({title:"Durchbruch in der Windenergie-Forschung",description:"Wissenschaftler haben eine neue Art der Energiegewinnung durch Wind entwickelt, mit der bestehende Windturbinen deutlich mehr Leistung bringen.",apply(){return[h("popularity").byValue(4),h("electricityWindEfficiency").byPercent(30)]},probability(e,t){if(re(e,t,{years:3,months:7}))return 0;const n=v(e,"WindkraftVereinfachen")?1.5:1;return v(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?.5*n:v(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?.4*n:v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?.3*n:0},citations:[],details:s`

  `,internals:s`

  `});const Fi={AbstandsregelnWindkraft:fn,AtomKatastrophe:_r,Bestechung:fi,Duerrewelle:mi,EnergieStrategie:gi,FinanzKollaps:pi,Hitzehoelle:vi,Klimafluechtlinge:bi,NewYear:wi,Plagiatsaffaere:yi,PRInnenminister:ki,PRKohleindustrie:Si,SocialMedia:_i,SolarstromFoerderung:Di,SolarstromFoerderung2:zi,TimesUp:Ci,WahlVerloren:Ei,WindkraftAusschreibung:Wi,WindkraftForschung:Pi};function Li(e,t){return re(e,t,{years:3})?0:.05}const Fe=ot(Fi).map(e=>M(A({},e),{probability:e.probability||Li})),Ue={id:"",currentDate:tt,currentYear:he,values:fe,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],over:!1,prngState:!0};function Ke(e=Ue,t=Yt()){const n={id:t,currentDate:e.currentDate,currentYear:e.currentYear,acceptedLaws:[...e.acceptedLaws],proposedLaws:[...e.proposedLaws],rejectedLaws:[...e.rejectedLaws],values:me(e.values),events:[...e.events],over:e.over,prngState:e.prngState};return ei(n),n}const Ai=Object.keys(Ue);function Ct(e){return Object.fromEntries(Ai.map(t=>{if(t==="prngState")return[t,ti()];if(t==="values"){const n=e[t],r=yr.map(i=>[i,n[i]]);return[t,Object.fromEntries(r)]}else return[t,e[t]]}))}function Et(e=le,t=Ue){const n=Ke(t);return n.acceptedLaws=e.filter(r=>{var i;return(i=r.labels)==null?void 0:i.includes("initial")}).map(r=>({lawId:r.id,effectiveSince:n.currentYear})),n}const ge=[...Array(nt-he+1).keys()].map(e=>e+he);function Oi(e,t){const n={lawId:e,effectiveSince:t.currentYear+1},r=ye(n),i=r.effort(t);t.currentDate=ne(t.currentDate).plus(i.time).toJSON();const a=r.removeLawsWithLabels,o=t.acceptedLaws.map(ye).filter(c=>!(a==null?void 0:a.some(u=>{var p;return(p=c.labels)==null?void 0:p.includes(u)}))).map(c=>({lawId:c.id,effectiveSince:c.effectiveSince}));return t.acceptedLaws=[...o,n],He(t)}function Ti(e){return e.currentDate=ne(e.currentDate).plus(dn).toJSON(),He(e)}function He(e,t=le,n=Fe,r=_t){const i=xi(e,n,r);if(i){const o={id:i.id,occuredIn:e.currentDate,acknowledged:!1};e.events.unshift(o)}const a=Gi(e,t);return e.proposedLaws=Mi(e.proposedLaws,a),i}function xi(e,t,n){const r=Vi(e,t),i=Ii(r);if(i)return i;const a=$i(r);return Bi(a,n())}function Vi(e,t){return t.map(n=>M(A({},n),{prob:n.probability(e,n)})).filter(n=>n.prob>0)}function Ii(e){return e.filter(t=>t.prob>1).reduce((t,n)=>n.prob>((t==null?void 0:t.prob)||0)?n:t,void 0)}function $i(e){const t=e.map(r=>r.prob).reduce((r,i)=>r+i,0);if(t<=st)return e;const n=st/t;return e.map(r=>M(A({},r),{prob:r.prob*n}))}function Bi(e,t){for(const n of e)if(t-=n.prob,t<0)return n}function Gi(e,t){const n=o=>{var c;return(c=e.acceptedLaws)==null?void 0:c.some(u=>u.lawId===o.id)},r=o=>{var c;return(c=e.rejectedLaws)==null?void 0:c.includes(o.id)},i=o=>{var c;return((c=o.labels)==null?void 0:c.includes("hidden"))||!1},a=o=>({law:o,priority:o.priority(e)});return t.filter(Ie(n)).filter(Ie(r)).filter(Ie(i)).map(a).filter(o=>o.priority>0).sort((o,c)=>c.priority-o.priority).map(o=>o.law.id).slice(0,it)}function Mi(e,t){const n=[...e],r=t.filter(o=>n.includes(o)),i=t.filter(o=>!r.includes(o));for(var a=0;a<n.length;){if(r.includes(n[a])){a++;continue}if(i.length===0){n.splice(a,1);continue}n[a]=i.shift(),a++}return n.push(...i.slice(0,it-n.length)),n}function Ni(e,t,n){return Wt(e,t,n).values}function Wt(e,t,n){const r=me(e.values),i=t.sort((o,c)=>{var u,p;return((u=o.treatAfterLabels)==null?void 0:u.some(_=>{var L;return(L=c.labels)==null?void 0:L.includes(_)}))?1:((p=c.treatAfterLabels)==null?void 0:p.some(_=>{var L;return(L=o.labels)==null?void 0:L.includes(_)}))?-1:0}).filter(o=>o.effectiveSince<=n),a=hi(i,o=>{const c=Sr(r),u=o.effects(M(A({},e),{values:r}),o.effectiveSince,n);return We({dispatch:()=>{},values:r},u),c},(o,c,u)=>r[u]-c[u]);return r.co2budget-=r.co2emissions,{values:r,effectsOfLaws:a}}function Pt(e){return Math.max(0,Math.min(100,e))}function Ui(e){if(e.values.co2emissions===0)return 100;const n=e.values.co2budget*me(fe).co2emissions/fe.co2budget/e.values.co2emissions;return Pt(n*50)}function Ki(e){const t=e.values.stateDebt/fe.stateDebt;return Pt(100-t*50)}const pe=[{id:"start",title:"Stell dir vor...",text:s`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du ausw\xE4hlen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die W\xE4hler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine W\xE4hler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];function Hi(e,t){return{startGame(n){const r=Et(),i=He(r);t.createGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i}),e.push("/games/"+r.id)},async loadGame(n,r){var i;if(((i=n.state.game)==null?void 0:i.id)!==r.gameId)try{const a=await t.loadGame(r.gameId);t.saveGame(a),e.push("/games/"+a.id),n.commit("setGameState",{game:a})}catch(a){n.dispatch("error",{error:a})}},gameOver(n){n.commit("gameOver",void 0)},acceptLaw(n,r){const i=A({},n.state.game),a=Oi(r.lawId,i);t.saveGame(i),n.commit("setGameState",{game:i}),n.dispatch("applyEvent",{event:a}),t.decisionMade(i,r.lawId,!0)},rejectLaw(n,r){const i=A({},n.state.game);i.rejectedLaws=[...i.rejectedLaws,r.lawId],t.decisionMade(i,r.lawId,!1),t.saveGame(i),n.commit("setGameState",{game:i})},sitOut(n){const r=A({},n.state.game);t.decisionMade(r,"sitOut",!0);const i=Ti(r);t.saveGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i})},advanceYear(n){const r=A({},n.state.game),i=r.acceptedLaws.map(ye);r.currentYear++,r.values=Ni(r,i,r.currentYear),t.saveGame(r),n.commit("setGameState",{game:r})},applyEvent(n,r){if(!r.event)return;const i=A({},n.state.game);t.eventOccurred(i,r.event);const a=r.event.apply(i);n.dispatch("applyEffects",{changes:a})},acknowledgeEvent(n,r){const i=A({},n.state.game);i.events.find(a=>a.id===r.id).acknowledged=!0,t.saveGame(i),n.commit("setGameState",{game:i})},applyEffects(n,r){const i={dispatch:()=>{},values:me(n.state.game.values)};We(i,r.changes);const a=M(A({},n.state.game),{values:i.values});t.saveGame(a),n.commit("setGameState",{game:a});const o={dispatch:n.dispatch};We(o,r.changes)},setupTour(n){const r=localStorage.getItem("tour")||pe[0].id,i=pe.find(a=>r===a.id);i?n.commit("setTour",{step:i.id,active:!0}):n.dispatch("stopTour")},nextTourStep(n){const r=pe.findIndex(i=>n.state.tour.step===i.id);if(r<0||r==pe.length-1)n.dispatch("stopTour");else{const i=pe[r+1];n.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(n){n.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},error(n,r){n.commit("error",r)}}}const ji={setGameState(e,t){e.game=t.game},gameOver(e){e.game=M(A({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},Ji={proposedLaws(e){return!e.game||!e.game.proposedLaws?[]:Ne(e.game.proposedLaws)}},Yi={game:void 0,tour:{active:!0,step:"start"}};var $=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const Zi=e=>(Se("data-v-559eb761"),e=e(),_e(),e),Ri=["onClick"],Qi=Zi(()=>l("br",null,null,-1)),qi={key:0,class:"button-bar"},Xi=["onClick"],es=V({props:{law:null,selectable:{type:Boolean},numCards:null},emits:["selected","accepted"],setup(e,{emit:t}){const n=e,r=ee(!1),i=y(()=>n.law.zIndex);function a(){t("selected")}function o(){r.value=!0}function c(u){u.animationName.match(/^twistOut-/)&&t("accepted",n.law.id)}return(u,p)=>(f(),g("div",{class:B(["Law",{accepted:r.value}]),style:Oe({zIndex:E(i)}),onClick:Y(a,["stop"]),onAnimationend:c},[l("div",null,[l("h3",null,w(e.law.title),1),l("div",null,w(e.law.description),1),Qi,l("div",null,w(e.law.effortComment),1),e.selectable?(f(),g("div",qi,[l("button",{class:"accept",onClick:Y(o,["stop"])},"\u2713",8,Xi)])):z("",!0)])],46,Ri))}});var ts=$(es,[["__scopeId","data-v-559eb761"]]);const ns=V({setup(e){const t=ue(),n=ee(0),r=ee(!1),i=ee(!1),a=y(()=>gn(o.value.length,n.value)),o=y(()=>t.getters.proposedLaws),c=y(()=>t.state.game),u=y(()=>c.value===void 0?[]:o.value.map((m,C)=>M(A({},m),{zIndex:a.value[C],pos:C,effortComment:m.effort(c.value).text})));function p(m){t.dispatch("acceptLaw",{lawId:m})}function _(m){n.value!=m?n.value=m:(r.value=!r.value,r.value||(i.value=!1))}function L(){t.dispatch("sitOut")}function d(m){r.value&&(i.value=!0)}return(m,C)=>(f(),g(K,null,[l("div",{class:B(["ProposedLaws",{poppedUp:r.value}]),onTransitionend:d},[(f(!0),g(K,null,Q(E(u),(b,P)=>(f(),q(ts,{key:b.id,law:b,selectable:r.value,numCards:E(u).length,class:"singleLaw",onAccepted:()=>p(b.id),onSelected:()=>_(P)},null,8,["law","selectable","numCards","onAccepted","onSelected"]))),128))],34),x(Rt,{name:"fade"},{default:be(()=>[qe(l("div",{class:"sitOutButton",onClick:C[0]||(C[0]=()=>L())},"Aussitzen",512),[[Zt,i.value]])]),_:1})],64))}});var rs=$(ns,[["__scopeId","data-v-5ec925b1"]]);const is=V({props:{title:null,text:null},emits:["acknowledge"],setup(e,{emit:t}){function n(){t("acknowledge")}return(r,i)=>(f(),g("div",{onClick:n},[l("h2",null,w(e.title),1),l("p",null,w(e.text),1)]))}});var ss=$(is,[["__scopeId","data-v-63e4a4a9"]]),as="/assets/money-short.7ce9dbed.png",os="/assets/money-less.184321f3.png",ls="/assets/money-more.44dccbaa.png",us="/assets/money-much.d486dae1.png";const cs={class:"container"},ds={class:"title"},hs={class:"progress-bar"},fs=V({props:{title:null,value:null},setup(e){const t=e,n=y(()=>{const r=t.value>40?"green":t.value>20?"goldenrod":"red";return{width:t.value+"%",backgroundColor:r}});return(r,i)=>(f(),g("div",cs,[l("div",ds,w(e.title),1),l("div",hs,[l("div",{class:"indicator",style:Oe(E(n))},null,4)])]))}});var je=$(fs,[["__scopeId","data-v-9856b0a2"]]);const ms={id:"finances"},gs={key:0,src:as,id:"short"},ps={key:1,src:os,id:"less"},vs={key:2,src:ls,id:"more"},bs={key:3,src:us,id:"much"},ws=V({props:{value:null},setup(e){const t=e,n=y(()=>t.value),r=y(()=>t.value<20),i=y(()=>t.value>=20&&t.value<50),a=y(()=>t.value>=50&&t.value<80),o=y(()=>t.value>=80);return(c,u)=>(f(),g("div",ms,[x(je,{id:"indicator",title:"Finanzen",value:E(n)},null,8,["value"]),E(r)?(f(),g("img",gs)):z("",!0),E(i)?(f(),g("img",ps)):z("",!0),E(a)?(f(),g("img",vs)):z("",!0),E(o)?(f(),g("img",bs)):z("",!0)]))}});var ys=$(ws,[["__scopeId","data-v-0b2fb0e8"]]),ks="/assets/people-happy.acaffc0b.png",Ss="/assets/people-angry.54c1d60c.png";const _s={id:"popularity"},Ds={key:0,src:ks,id:"happy"},zs={key:1,src:Ss,id:"angry"},Cs=V({props:{value:null},setup(e){const t=e,n=y(()=>t.value>=50),r=y(()=>t.value<50);return(i,a)=>(f(),g("div",_s,[x(je,{id:"indicator",title:"Beliebtheit",value:e.value},null,8,["value"]),E(n)?(f(),g("img",Ds)):z("",!0),E(r)?(f(),g("img",zs)):z("",!0)]))}});var Es=$(Cs,[["__scopeId","data-v-4cf2dbec"]]),Ws="/assets/plant-healthy.97772624.png",Ps="/assets/plant-sick.5a0f1b46.png",Fs="/assets/plant-withered.b50106c7.png";const Ls={id:"plant"},As=["src","id"],Os=V({props:{value:null},setup(e){const t=e,n={healthy:Ws,sick:Ps,withered:Fs},r=y(()=>t.value>66?"healthy":t.value>33?"sick":"withered"),i=y(()=>n[r.value]);return(a,o)=>(f(),g("div",Ls,[x(je,{id:"indicator",title:"CO2-Budget",value:e.value},null,8,["value"]),l("img",{src:E(i),id:E(r)},null,8,As)]))}});var Ts=$(Os,[["__scopeId","data-v-2db3389a"]]);const xs={id:"calendar"},Vs=V({props:{year:null,month:null},setup(e){const t=e,n=y(()=>{const r=Math.floor((t.month-1)/4)*18+27+"%",i=(t.month-1)%4*21+12+"%";return{top:r,left:i}});return(r,i)=>(f(),g("div",xs,[N(w(e.year)+" ",1),l("span",{id:"month-indicator",style:Oe(E(n))},null,4)]))}});var Is=$(Vs,[["__scopeId","data-v-78901c78"]]),$s="/assets/heater.43006232.png";const Bs={},Gs=e=>(Se("data-v-c9039a0c"),e=e(),_e(),e),Ms={id:"heater"},Ns=Gs(()=>l("img",{src:$s},null,-1)),Us=[Ns];function Ks(e,t){return f(),g("div",Ms,Us)}var Hs=$(Bs,[["render",Ks],["__scopeId","data-v-c9039a0c"]]),js="/assets/table-top.c87bd2fd.png",Ft="/assets/table-front.78c0f8c6.png",Lt="/assets/table-side.49774a53.png";const Js={},Ys={id:"table"},Zs=Xe('<img src="'+js+'" id="table-top" data-v-1ef8d93c><img src="'+Ft+'" id="table-front" data-v-1ef8d93c><img src="'+Ft+'" id="table-back" data-v-1ef8d93c><img src="'+Lt+'" id="table-left-side" data-v-1ef8d93c><img src="'+Lt+'" id="table-right-side" data-v-1ef8d93c>',5),Rs=[Zs];function Qs(e,t){return f(),g("div",Ys,Rs)}var qs=$(Js,[["render",Qs],["__scopeId","data-v-1ef8d93c"]]),Xs="/assets/board-front.41330f02.png",At="/assets/board-side.d7181ded.png",ea="/assets/tv-front.82df5c0c.png",ta="/assets/news.c4bbc2d0.png",Ot="/assets/tvset-legs.78b387df.png";const na=V({props:{withNews:Boolean}}),Tt=e=>(Se("data-v-118e7bdf"),e=e(),_e(),e),ra={id:"tvset"},ia=Xe('<div id="board" data-v-118e7bdf><img id="board-front" src="'+Xs+'" data-v-118e7bdf><img id="board-left" src="'+At+'" data-v-118e7bdf><img id="board-right" src="'+At+'" data-v-118e7bdf><div id="board-top" data-v-118e7bdf></div></div>',1),sa={id:"tv"},aa=Tt(()=>l("img",{id:"tv-front",src:ea},null,-1)),oa={key:0,id:"news",src:ta},la=Tt(()=>l("div",{id:"legs"},[l("img",{id:"legs-front",src:Ot}),l("img",{id:"legs-back",src:Ot})],-1));function ua(e,t,n,r,i,a){return f(),g("div",ra,[ia,l("div",sa,[aa,e.withNews?(f(),g("img",oa)):z("",!0)]),la])}var ca=$(na,[["render",ua],["__scopeId","data-v-118e7bdf"]]);const da={},ha={class:"dialog"},fa={class:"buttons"};function ma(e,t){return f(),g("div",ha,[Te(e.$slots,"default",{},void 0,!0),l("div",fa,[Te(e.$slots,"buttons",{},void 0,!0)])])}var xt=$(da,[["render",ma],["__scopeId","data-v-6a8bb0fa"]]);const ga=V({setup(){const e=ue();return e.dispatch("setupTour"),{store:e}},components:{Dialog:xt},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return pe.find(e=>e.id===this.$store.state.tour.step)},title(){var e;return(e=this.currentStep)==null?void 0:e.title},text(){var e;return(e=this.currentStep)==null?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var n;const t=document.querySelector(".highlighted");t&&t.classList.remove("highlighted"),e&&e.highlight&&((n=document.querySelector(`#${e.highlight}`))==null||n.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}}),pa=["innerHTML"];function va(e,t,n,r,i,a){const o=ae("Dialog");return e.title&&e.text?(f(),q(o,{key:0},{buttons:be(()=>[l("button",{onClick:t[0]||(t[0]=(...c)=>e.stop&&e.stop(...c))},"Tour beenden"),l("button",{onClick:t[1]||(t[1]=(...c)=>e.next&&e.next(...c))},"Weiter")]),default:be(()=>[l("h2",null,w(e.title),1),l("div",{innerHTML:e.text},null,8,pa)]),_:1})):z("",!0)}var ba=$(ga,[["render",va]]);const wa=V({components:{Dialog:xt},setup(){return{store:ue()}},computed:{co2(){var n,r;const e=(n=this.store.state.game)==null?void 0:n.values.co2budget;return((r=this.store.state.game)==null?void 0:r.values.co2emissions)>0?e>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. H\xE4tte die AfD nicht besser hinbekommen.":e>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken k\xF6nnen. Punktlandung."},debt(){var t;return((t=this.store.state.game)==null?void 0:t.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilit\xE4tskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var t;const e=(t=this.store.state.game)==null?void 0:t.values.popularity;return e<20?"entspricht dem, was man von einem langh\xE4hrigen Diktator erwarten kann.":e<50?"ist nicht berauschend, wiedergew\xE4hlt w\xFCrdest du wohl eher nicht.":e<80?"reicht aus, dass du noch l\xE4nger am Ruder bleiben k\xF6nntest. Gratulation!":"ist v\xF6llig unglaubw\xFCrdig - war das wirklich eine freie Wahl?"}},methods:{newGame(){this.store.dispatch("startGame")}}}),ya=l("h2",null,"Das Spiel ist leider zu Ende",-1),ka=l("p",null,"Deine Entscheidungen haben etwas ver\xE4ndert - soviel kann man sagen.",-1),Sa=l("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),_a={class:"button-bar"};function Da(e,t,n,r,i,a){const o=ae("Dialog");return f(),q(o,null,{default:be(()=>[ya,ka,l("ul",null,[l("li",null,"Die CO2-Emmissionen "+w(e.co2),1),l("li",null,"Die Staatsfinanzen "+w(e.debt),1),l("li",null,"Deine Beliebtheit "+w(e.popularity),1)]),Sa,l("div",_a,[l("button",{onClick:t[0]||(t[0]=(...c)=>e.newGame&&e.newGame(...c))},"Neuer Versuch")])]),_:1})}var za=$(wa,[["render",Da]]);const Ca={class:"game-setup"},Ea=l("h1",null,"#ich-kann-klima",-1),Wa=l("div",{id:"walls"},[l("div",{id:"wall-back"}),l("div",{id:"wall-left"}),l("div",{id:"wall-right"})],-1),Pa=V({setup(e){const t=ue(),n=y(()=>{const m=t.state.game;if(!m)return;const C=m.currentDate;return m.events.filter(b=>b.occuredIn===C&&!b.acknowledged)[0]}),r=y(()=>{const m=n.value;if(m!==void 0)return Fe.find(C=>C.id===m.id)}),i=y(()=>{var m;return((m=r.value)==null?void 0:m.title)||""}),a=y(()=>{var m;return((m=r.value)==null?void 0:m.description)||""}),o=y(()=>{var m;return((m=t.state.game)==null?void 0:m.currentYear)||2021}),c=y(()=>{var m;return ne((m=t.state.game)==null?void 0:m.currentDate).lux.month}),u=y(()=>{const m=t.state.game;return m?Ki(m):0}),p=y(()=>{var m;return((m=t.state.game)==null?void 0:m.values.popularity)||100}),_=y(()=>{const m=t.state.game;return m?Ui(m):0}),L=y(()=>{const m=t.state.game;return m?m.over:!1});function d(){t.dispatch("acknowledgeEvent",r.value)}return(m,C)=>(f(),g("div",Ca,[Ea,Wa,x(Is,{year:E(o),month:E(c)},null,8,["year","month"]),x(Hs),x(Es,{value:E(p)},null,8,["value"]),x(ca,{"with-news":!!E(n)},null,8,["with-news"]),x(Ts,{value:E(_)},null,8,["value"]),x(qs),x(ys,{value:E(u)},null,8,["value"]),x(rs),E(n)?(f(),q(ss,{key:0,title:E(i),text:E(a),onAcknowledge:d},null,8,["title","text"])):z("",!0),x(ba),E(L)?(f(),q(za,{key:1})):z("",!0)]))}});const Fa=["onClick"],La=V({setup(e){const t=ue(),n=y(()=>{var o;return(o=t.state.game)==null?void 0:o.acceptedLaws}),r=ee(void 0),i=y(()=>le.filter(o=>{var c,u;return((c=n.value)==null?void 0:c.some(p=>p.lawId===o.id))&&!((u=o.labels)==null?void 0:u.includes("hidden"))}));function a(o){r.value=r.value===o?void 0:o}return(o,c)=>(f(!0),g(K,null,Q(E(i),(u,p)=>(f(),g("div",{key:p,class:B(["Law",{opened:p===r.value}]),onClick:_=>a(p)},[l("h3",null,w(u.title),1),l("div",null,w(u.description),1)],10,Fa))),128))}});var Aa=$(La,[["__scopeId","data-v-7efa2df1"]]);const Oa=V({components:{GameSetup:Pa,AcceptedLaws:Aa},setup(){return{store:ue()}},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,n){n(r=>r.startGame(e.params.id))}});function Ta(e,t,n,r,i,a){const o=ae("GameSetup");return f(),q(o)}var Vt=$(Oa,[["render",Ta],["__scopeId","data-v-3637ce73"]]);const xa=[{path:"/",redirect:"/games"},{path:"/games",component:Vt},{path:"/games/:id",component:Vt}],It=Qt({history:qt(),routes:xa});function Va(e){return{createGame(t){return e.add("post","/games",t)},loadGame(t){return e.add("get","/games/"+t,void 0,0)},saveGame(t){return e.remove("put","/games/"+t.id),e.add("put","/games/"+t.id,t)},decisionMade(t,n,r){return e.add("post","/games/"+t+"/decisions/"+n,{accepted:r})},eventOccurred(t,n){return e.add("post","/games/"+t+"/events/"+n)}}}function Ia(e,t){let n=[],r;async function i(){if(r&&(clearTimeout(r),r=void 0),n.length){const a=n[0],{method:o,path:c,data:u,retry:p,resolve:_,reject:L}=a;try{if((t==null?void 0:t.navigator)&&!(t==null?void 0:t.navigator.onLine))throw Error("Browser is offline");const d=await e(o,c,u);n.shift(),_(d)}catch(d){p?a.retry=Math.max(-1,p-1):(n.shift(),L(d))}n.length&&(r=setTimeout(i,(t==null?void 0:t.timeout)||1e4))}}return{add(a,o,c,u=-1){return new Promise((p,_)=>{n.push({method:a,path:o,data:c,retry:u,resolve:p,reject:_}),r||i()})},remove(a,o){n=n.filter(c=>c.method.toLowerCase()!==a.toLowerCase()||c.path!==o)},callsPending(){return n.length>0}}}function $a(e,t,n=console){return async function(r,i,a){var o;try{const c={method:r};["post","put","patch"].includes(r)&&(c.body=JSON.stringify(a),c.headers={["content-type"]:"application/json"});const u=await t(e+i,c),p=((o=u.headers.get("Content-Type"))==null?void 0:o.match(/json/))?await u.json():await u.text();if(u.ok)return p;throw Error(p.message||p)}catch(c){throw n.error(c),c}}}function Ba({api:e,logger:t=console,storage:n=localStorage}){return{createGame(r){const i=Ct(r);n.setItem("game",JSON.stringify(i)),e.createGame(i).catch(a=>{t.warn("Cannot save new game - trying again later",a)})},async loadGame(r){const i=n.getItem("game");if(i){const o=JSON.parse(i);if(o.id===r)return Ke(o,r)}const a=await e.loadGame(r);return Ke(a,r)},saveGame(r){const i=Ct(r);n.setItem("game",JSON.stringify(i)),e.saveGame(i).catch(a=>{t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",a)})},decisionMade(r,i,a){e.decisionMade(r.id,i,a)},eventOccurred(r,i){e.eventOccurred(r.id,i.id)}}}const Ga=localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",Ma=$a(Ga,fetch),Na=Ia(Ma),Ua=Va(Na),Ka=Ba({api:Ua}),Ha=Hi(It,Ka),$t=Symbol();function ue(){return Xt($t)}const ja=en({state:Yi,mutations:ji,actions:Ha,getters:Ji});function Bt(e,t,...n){for(const r of n){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function Ja(e,t,n){function r(u){return e[u].toFixed(2)}function i(u){return(u>0?"+":"")+u.toFixed(2)}function a(u){const p=n.find(_=>_.type==="modify"&&_.name===u);return p&&p.condition?p.value:0}function o(u){const p=a(u),_=t?t[u]:0;return p&&Math.abs(p-_)<.001?i(p):p?i(p)+" / "+i(_):_!=0?i(_):""}return yt.map(u=>({id:u.name,unit:u.unit,value:r(u.name),effect:o(u.name),class:u.writable?"writable":"calculated"}))}function Ya(e,t,n,r){const i=e.proposedLaws,a=e.acceptedLaws.map(u=>u.lawId),o=e.rejectedLaws;function c(u){return a.includes(u)?"a":i.includes(u)?"p":o.includes(u)?"r":"x"}return r.map(u=>({id:u.id,priority:u.priority(e),state:c(u.id)})).sort((u,p)=>Bt(u,p,t,"id")*n).map(u=>M(A({},u),{priority:u.priority.toFixed(2)}))}function Za(e,t,n,r){return r.map(i=>({id:i.id,probability:i.probability(e,i)})).sort((i,a)=>Bt(i,a,t,"id")*n).map(i=>M(A({},i),{probability:(i.probability*100).toFixed(2)}))}const Ra={key:0},Qa=["href"],qa=N(". "),Xa={key:1},eo={key:2},to=N("Bemerkung: "),no=["innerHTML"],ro=N(". "),io={key:3},so=N("Internes: "),ao=["innerHTML"],oo=N(". "),lo={key:4},uo=["href"],co=N(". "),ho={key:5},fo=["href"],mo=N(". "),go={key:6},po=["href"],vo=N(". "),bo=V({props:{citation:null,showInternals:{type:Boolean}},setup(e){const t=e,n=y(()=>t.citation.url.toString()),r=y(()=>t.citation.title||t.citation.url.toString());return(i,a)=>(f(),g("p",null,[e.citation.authors?(f(),g("span",Ra,w(e.citation.authors+e.citation.dateString())+". ",1)):z("",!0),l("a",{target:"_blank",rel:"noreferrer noopener",href:E(n)},'"'+w(E(r))+'"',9,Qa),qa,e.citation.publisher?(f(),g("span",Xa,w(e.citation.publisher)+". ",1)):z("",!0),e.citation.comment?(f(),g("span",eo,[to,l("span",{innerHTML:e.citation.comment},null,8,no),ro])):z("",!0),e.showInternals&&e.citation.internalComment?(f(),g("span",io,[so,l("span",{innerHTML:e.citation.internalComment},null,8,ao),oo])):z("",!0),e.citation.referringUrl?(f(),g("span",lo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,uo),co])):z("",!0),e.citation.archiveUrl?(f(),g("span",ho,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,fo),mo])):z("",!0),e.citation.localCopy?(f(),g("span",go,[l("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,po),vo])):z("",!0)]))}}),wo=V({props:{chartData:null,paramId:null,selectedYear:null},emits:["update:selectedYear"],setup(e,{emit:t}){const n=e,r="#9c6d00",i="#ce900070",a="#644600",o=y(()=>({xaxis:{categories:ge,labels:{rotate:-90}},chart:{id:n.paramId+"-withLawEffects",animations:{enabled:!1},stacked:!0},colors:[r,a,i],legend:{show:!1},markers:{size:0},dataLabels:{enabled:!1}})),c=y(()=>n.chartData.values.map((b,P)=>({value:b[n.paramId],change:n.chartData.changes[P][n.paramId]}))),u=y(()=>c.value.map(b=>{const P=b.value-b.change;return b.change*b.value>0?P*b.value>0?{value:P,gain:b.change,loss:0}:{value:0,gain:b.value,loss:P}:{value:b.value,gain:0,loss:-b.change}})),p=y(()=>[{name:"Simulated "+n.paramId,data:u.value.map(b=>Math.round(b.value))},{name:"Gains of "+n.paramId+" by selected law",data:u.value.map(b=>Math.round(b.gain))},{name:"Losses of "+n.paramId+" by selected law",data:u.value.map(b=>Math.round(b.loss))}]),_=ee();let L;function d(){var b,P;((b=_.value)==null?void 0:b.chart)!=null&&L!=null&&((P=_.value)==null||P.toggleDataPointSelection(0,L)),L=void 0}function m(b){var P,G;if(((P=_.value)==null?void 0:P.chart)!=null&&b){const R=b-ge[0];L!=R&&(d(),L=R,(G=_.value)==null||G.toggleDataPointSelection(0,R))}else d()}tn(()=>m(n.selectedYear),{flush:"post"});function C(b,P,G){const R=G.dataPointIndex;R<0||(R===L?(L=void 0,t("update:selectedYear",void 0)):(L=R,t("update:selectedYear",R+ge[0])))}return(b,P)=>(f(),g("div",null,[l("div",null,w(e.paramId),1),x(E(nn),{ref_key:"chart",ref:_,type:"bar",options:E(o),series:E(p),onClick:C},null,8,["options","series"])]))}}),yo=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024}]}],Le=(e,t)=>e.lawId===t.lawId&&e.effectiveSince===t.effectiveSince,ko=e=>e.map((t,n)=>M(A({},t),{sortId:n}));function So(...e){const t=e.map(n=>n.length===0?0:n[n.length-1].sortId+1);return t.length===0?0:Math.max.apply(Math,t)}function _o(e){const t=ee([]),n=ee([]),r=ee(!1);function i(C,b){var Ye;const P=t.value,G={lawId:C,effectiveSince:b,sortId:0},R=(Ye=n.value.find(ve=>Le(G,ve)))==null?void 0:Ye.sortId;G.sortId=R!=null?R:So(P,n.value),t.value=P.filter(ve=>ve.lawId!=C).concat(G).sort((ve,Mt)=>ve.sortId-Mt.sortId)}function a(C){t.value=t.value.filter(b=>b.lawId!=C)}function o(C,b){const P={lawId:C,effectiveSince:b,sortId:0};t.value.some(G=>Le(G,P))?a(C):i(C,b)}function c(C){t.value=ko(C.laws)}function u(){r.value=!r.value,r.value?n.value=t.value:n.value=[]}const p=y(()=>{var C;return{name:"Current Game",laws:((C=e.value)==null?void 0:C.acceptedLaws)||[]}}),_=y(()=>[p.value,...yo]),L=y(()=>{const C=t.value.map(P=>M(A({},P),{cls:n.value.some(G=>Le(P,G))?"both":"new"})),b=n.value.filter(P=>!t.value.some(G=>Le(G,P))).map(P=>M(A({},P),{cls:"saved"}));return[...C,...b].sort((P,G)=>P.sortId-G.sortId)}),d=Gt(t),m=Gt(n);return{addToSimulation:i,removeFromSimulation:a,toggleInSimulation:o,loadPreset:c,compareActive:r,toggleCompare:u,presets:_,simulatedLaws:L,simulation:d,secondSimulation:m}}function Gt(e){return y(()=>{const t=Et();return t.acceptedLaws=[...e.value],ge.map(r=>{for(;r>t.currentYear;){t.currentYear++,t.acceptedLaws=Do(t.acceptedLaws,t.currentYear);const i=t.acceptedLaws.map(c=>ye(c)),{values:a,effectsOfLaws:o}=Wt(t,i,t.currentYear);if(t.values=a,r===t.currentYear)return{values:a,effectsOfLaws:o}}return{values:t.values,effectsOfLaws:{}}})})}function Do(e,t){const n=e.map(i=>ye(i)),r=n.filter(i=>i.effectiveSince===t).flatMap(i=>i.removeLawsWithLabels||[]);return n.filter(i=>i.effectiveSince>=t||!r.some(a=>{var o;return(o=i.labels)==null?void 0:o.includes(a)})).map(i=>({lawId:i.id,effectiveSince:i.effectiveSince}))}const zo=V({directives:{clickaway:et},setup(e,t){const n=ee(!1);return{menuIsOpen:n,toggle:()=>n.value=!n.value,close:()=>n.value=!1}}});function Co(e,t,n,r,i,a){const o=rn("clickaway");return qe((f(),g("span",{onClick:t[0]||(t[0]=(...c)=>e.toggle&&e.toggle(...c)),class:B(["menu",{menuIsOpen:e.menuIsOpen}])},[Te(e.$slots,"default",{},void 0,!0)],2)),[[o,e.close]])}var Eo=$(zo,[["render",Co],["__scopeId","data-v-06206e01"]]);const Wo=V({directives:{clickaway:et},components:{Citation:bo,PeekChart:wo,Menu:Eo},setup(){const e=ue(),t=y(()=>e.state.game),n=_o(t);return A({store:e,game:t,gameYears:ge},n)},data(){return{lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lastSelected:void 0,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,yearSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1}},methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){e===this.lawSelected?this.lawSelected=void 0:(this.lastSelected="law",this.lawSelected=e)},selectEvent(e){e===this.eventSelected?this.eventSelected=void 0:(this.lastSelected="event",this.eventSelected=e)},selectParam(e){e===this.paramSelected?this.paramSelected=void 0:(this.lastSelected="param",this.paramSelected=e)},selectYear(e){e===this.yearSelected?this.yearSelected=void 0:(this.lastSelected="year",this.yearSelected=e)},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0,this.yearSelected=void 0},dragStart(e,t){const{lawId:n,year:r}=t;!e.dataTransfer||(e.dataTransfer.dropEffect="link",n&&e.dataTransfer.setData("lawId",n),r&&e.dataTransfer.setData("year",r.toString()))},getDropped(e,t,n){if(!e.dataTransfer)return;const r=e.dataTransfer.getData(t);return n.find(i=>i==r)},onDrop(e,t){const{lawId:n,year:r}=t,i=this.getDropped(e,"lawId",ui),a=this.getDropped(e,"year",this.gameYears);r&&i?this.addToSimulation(i,r):n&&a?this.addToSimulation(n,a):n&&i&&this.removeFromSimulation(i)},rightClick(e,t){this.toggleInSimulation(e,t)}},computed:{startYearOfSelected(){if(!this.lawSelected)return;if(!this.game)return he;const e=this.simulatedLaws.find(t=>t.lawId===this.lawSelected);return e?e.effectiveSince:this.game.currentYear},selectedLaw(){return le.find(e=>e.id===this.lawSelected)},lawEffort(){var e;if(!!this.game)return(e=this.selectedLaw)==null?void 0:e.effort(this.game)},selectedEvent(){return Fe.find(e=>e.id===this.eventSelected)},selectedParam(){return this.paramSelected?X[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof k?e:void 0},cParam(){const e=this.selectedParam;return e instanceof J?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},currentYear(){return this.yearSelected?this.yearSelected:this.game?this.game.currentYear:he},effectsOfSelected(){return!this.selectedLaw||!this.startYearOfSelected||!this.game?[]:this.selectedLaw.effects(this.game,this.startYearOfSelected,this.currentYear)},sortedValues(){return this.game?Ja(this.simOfYear.values,this.effectsOfLawInYear,this.effectsOfSelected):[]},sortedLaws(){return this.game?Ya(this.game,this.lawsSortCol,this.lawsSortDir,le):[]},sortedEvents(){return this.game?Za(this.game,this.eventsSortCol,this.eventsSortDir,Fe):[]},effectsOfLawInYear(){if(this.lawSelected)return this.simOfYear.effectsOfLaws[this.lawSelected];if(this.yearSelected)return this.simEffectOfLaw[this.yearSelected-this.gameYears[0]]},simOfYear(){if(this.yearSelected===void 0&&this.game){const e=this.effectsOfSelected,t=this.game.values;if(this.lawSelected===void 0||e.length===0)return{values:t,effectsOfLaws:{}};const n=me(t);We({dispatch:()=>{},values:n},e);const i=Object.fromEntries(vt.map(a=>[a,n[a]-t[a]]));return{values:t,effectsOfLaws:{[this.lawSelected]:i}}}else{const e=this.yearSelected?this.yearSelected-this.gameYears[0]:0;return this.simulation[e]}},simulatedValues(){return this.simulation.map(e=>e.values)},simEffectOfLaw(){if(this.lawSelected){const e=this.lawSelected;return this.simulation.map(t=>{const n=t.effectsOfLaws[e];return n||kt})}return this.compareActive?this.secondSimulation.map((e,t)=>Object.fromEntries(Object.entries(e.values).map(([n,r])=>[n,this.simulation[t].values[n]-r]))):ge.map(e=>kt)},chartData(){return{values:this.simulatedValues,changes:this.simEffectOfLaw}},lawsInYear(){return e=>this.simulatedLaws.filter(t=>t.effectiveSince===e)}}}),te=e=>(Se("data-v-85b0da02"),e=e(),_e(),e),Po={class:"peekData"},Fo={class:"Menu"},Lo=N("\xA0 "),Ao=N("\xA0 "),Oo=N("\xA0 "),To=N("\xA0 "),xo=N("\xA0 "),Vo=N("\xA0 "),Io={key:1,class:"Details sidebyside"},$o={class:"Title"},Bo={class:"Description"},Go={class:"SectionHead"},Mo={class:"Section"},No=te(()=>l("div",{class:"SectionHead"},"Details:",-1)),Uo=["innerHTML"],Ko=te(()=>l("div",{class:"SectionHead"},"Internes:",-1)),Ho=["innerHTML"],jo=te(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),Jo={key:2,class:"Details sidebyside"},Yo={class:"Title"},Zo={class:"Description"},Ro=te(()=>l("div",{class:"SectionHead"},"Details:",-1)),Qo=["innerHTML"],qo=te(()=>l("div",{class:"SectionHead"},"Internes:",-1)),Xo=["innerHTML"],el=te(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),tl={key:3,class:"Details sidebyside"},nl={class:"Title"},rl={key:0},il={key:1},sl={key:2},al=te(()=>l("div",{class:"SectionHead"},"Details:",-1)),ol=["innerHTML"],ll=te(()=>l("div",{class:"SectionHead"},"Internes:",-1)),ul=["innerHTML"],cl=te(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),dl={class:"paramsHeader"},hl=["onClick"],fl={class:"numbercol"},ml={class:"effcol"},gl={key:5,class:"lawList sidebyside"},pl=["onClick","onDragstart","onDrop"],vl={class:"priocol"},bl={key:6,class:"eventList sidebyside"},wl=["onClick"],yl={class:"priocol"},kl={key:7,class:"yearList sidebyside"},Sl=te(()=>l("a",{class:"clickable"},"Presets",-1)),_l={class:"dropdown"},Dl=["onClick"],zl=N("\xA0 "),Cl=["onClick","onDragstart","onDrop"],El=["onClick","onContextmenu","onDragstart","onDrop"];function Wl(e,t,n,r,i,a){var p,_,L;const o=ae("PeekChart"),c=ae("Citation"),u=ae("Menu");return f(),g("details",Po,[l("summary",{onClick:t[0]||(t[0]=d=>e.unselect()),class:"clickable"},"Peek"),l("div",Fo,[l("a",{onClick:t[1]||(t[1]=d=>e.showCharts=!e.showCharts),class:B(["clickable",e.showCharts?"selected":""])},"Charts",2),Lo,l("a",{onClick:t[2]||(t[2]=d=>e.showDetails=!e.showDetails),class:B(["clickable",e.showDetails?"selected":""])},"Details",2),Ao,l("a",{onClick:t[3]||(t[3]=d=>e.showParams=!e.showParams),class:B(["clickable",e.showParams?"selected":""])},"Params",2),Oo,l("a",{onClick:t[4]||(t[4]=d=>e.toggleLawList()),class:B(["clickable",e.showLaws?"selected":""])},"Laws",2),To,l("a",{onClick:t[5]||(t[5]=d=>e.toggleEventList()),class:B(["clickable",e.showEvents?"selected":""])},"Events",2),xo,l("a",{onClick:t[6]||(t[6]=d=>e.showYears=!e.showYears),class:B(["clickable",e.showYears?"selected":""])},"Years",2),Vo]),e.showCharts?(f(),g("div",{key:0,class:B(["Details sidebyside",{lawSelected:e.lawSelected!=null}])},[e.paramSelected?(f(),q(o,{key:0,selectedYear:e.yearSelected,"onUpdate:selectedYear":t[7]||(t[7]=d=>e.yearSelected=d),chartData:e.chartData,paramId:e.paramSelected},null,8,["selectedYear","chartData","paramId"])):z("",!0),x(o,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[8]||(t[8]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"co2emissions"},null,8,["selectedYear","chartData"]),x(o,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[9]||(t[9]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"popularity"},null,8,["selectedYear","chartData"]),x(o,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[10]||(t[10]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"stateDebt"},null,8,["selectedYear","chartData"]),x(o,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[11]||(t[11]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"co2budget"},null,8,["selectedYear","chartData"])],2)):z("",!0),e.lastSelected==="law"&&e.selectedLaw&&e.showDetails?(f(),g("div",Io,[l("div",$o,w(e.selectedLaw.title),1),l("div",Bo,w(e.selectedLaw.description),1),l("div",Go,"Aufwand: "+w((p=e.lawEffort)==null?void 0:p.time.toMonthsString()),1),l("div",Mo,w((_=e.lawEffort)==null?void 0:_.text),1),No,l("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,Uo),Ko,l("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,Ho),jo,(f(!0),g(K,null,Q(e.citationsOfLaw,(d,m)=>(f(),q(c,{class:"Section",key:m,citation:d},null,8,["citation"]))),128))])):z("",!0),e.lastSelected==="event"&&e.selectedEvent&&e.showDetails?(f(),g("div",Jo,[l("div",Yo,w(e.selectedEvent.title),1),l("div",Zo,w(e.selectedEvent.description),1),Ro,l("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,Qo),qo,l("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,Xo),el,(f(!0),g(K,null,Q((L=e.selectedEvent)==null?void 0:L.citations,(d,m)=>(f(),q(c,{class:"Section",key:m,citation:d},null,8,["citation"]))),128))])):z("",!0),e.lastSelected==="param"&&e.selectedParam&&e.showDetails?(f(),g("div",tl,[l("div",nl,w(e.paramSelected)+" ["+w(e.selectedParam.unit)+"]",1),e.wParam?(f(),g("div",rl,"Initial value: "+w(e.wParam.initialValue)+" "+w(e.wParam.unit),1)):z("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(f(),g("div",il," Should initially be: "+w(e.cParam.shouldInitiallyBe)+" "+w(e.cParam.unit),1)):z("",!0),e.cParam?(f(),g("div",sl," Calculation: "+w(e.cParam.valueGetter),1)):z("",!0),al,l("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,ol),ll,l("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,ul),cl,(f(!0),g(K,null,Q(e.selectedParam.citations,(d,m)=>(f(),q(c,{class:"Section",key:m,citation:d},null,8,["citation"]))),128))])):z("",!0),e.showParams?(f(),g("div",{key:4,class:B(["paramsList sidebyside",{lawSelected:e.lawSelected!=null}])},[l("div",dl,[l("div",null,"Start of law: "+w(e.startYearOfSelected),1),l("div",null,"Current year: "+w(e.currentYear),1)]),l("table",null,[(f(!0),g(K,null,Q(e.sortedValues,d=>(f(),g("tr",{key:d.id,class:B({clickable:!0,selected:e.paramSelected===d.id,[d.class]:!0}),onClick:m=>e.selectParam(d.id)},[l("td",null,w(d.id),1),l("td",fl,w(d.value),1),l("td",ml,w(d.effect),1),l("td",null,w(d.unit),1)],10,hl))),128))])],2)):z("",!0),e.showLaws?(f(),g("div",gl,[l("table",null,[l("tr",null,[l("th",{onClick:t[12]||(t[12]=d=>e.sortLaws("state")),class:"clickable"},"S"),l("th",{onClick:t[13]||(t[13]=d=>e.sortLaws("id")),class:"clickable"},"ID"),l("th",{onClick:t[14]||(t[14]=d=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(f(!0),g(K,null,Q(e.sortedLaws,d=>(f(),g("tr",{key:d.id,class:B({clickable:!0,selected:e.lawSelected===d.id,[d.state]:!0}),onClick:m=>e.selectLaw(d.id),draggable:"true",onDragstart:m=>e.dragStart(m,{lawId:d.id}),onDrop:Y(m=>e.onDrop(m,{lawId:d.id}),["prevent"]),onDragover:t[15]||(t[15]=Y(()=>{},["prevent"])),onDragenter:t[16]||(t[16]=Y(()=>{},["prevent"]))},[l("td",null,w(d.state),1),l("td",null,w(d.id),1),l("td",vl,w(d.priority),1)],42,pl))),128))])])):z("",!0),e.showEvents?(f(),g("div",bl,[l("table",null,[l("tr",null,[l("th",{onClick:t[17]||(t[17]=d=>e.sortEvents("id")),class:"clickable"},"ID"),l("th",{onClick:t[18]||(t[18]=d=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(f(!0),g(K,null,Q(e.sortedEvents,d=>(f(),g("tr",{key:d.id,class:B({clickable:!0,selected:e.eventSelected===d.id}),onClick:m=>e.selectEvent(d.id)},[l("td",null,w(d.id),1),l("td",yl,w(d.probability),1)],10,wl))),128))])])):z("",!0),e.showYears?(f(),g("div",kl,[l("div",null,[x(u,null,{default:be(()=>[Sl,l("ul",_l,[(f(!0),g(K,null,Q(e.presets,d=>(f(),g("li",{key:d.name,class:"clickable",onClick:m=>e.loadPreset(d)},w(d.name),9,Dl))),128))])]),_:1}),zl,l("a",{class:B(["clickable",e.compareActive?"selected":""]),onClick:t[19]||(t[19]=d=>e.toggleCompare())},"Compare",2)]),l("table",null,[(f(!0),g(K,null,Q(e.gameYears,d=>(f(),g(K,{key:d},[l("tr",{class:B({clickable:!0,selected:e.yearSelected===d}),onClick:m=>e.selectYear(d),draggable:"true",onDragstart:m=>e.dragStart(m,{year:d}),onDrop:Y(m=>e.onDrop(m,{year:d}),["prevent"]),onDragover:t[20]||(t[20]=Y(()=>{},["prevent"])),onDragenter:t[21]||(t[21]=Y(()=>{},["prevent"]))},[l("th",null,w(d),1)],42,Cl),(f(!0),g(K,null,Q(e.lawsInYear(d),({lawId:m,cls:C})=>(f(),g("tr",{key:m,class:B({clickable:!0,selected:e.lawSelected===m,[C]:!0}),onClick:b=>e.selectLaw(m),onContextmenu:Y(b=>e.rightClick(m,d),["right","prevent"]),draggable:"true",onDragstart:b=>e.dragStart(b,{lawId:m}),onDrop:Y(b=>e.onDrop(b,{year:d}),["prevent"]),onDragover:t[22]||(t[22]=Y(()=>{},["prevent"])),onDragenter:t[23]||(t[23]=Y(()=>{},["prevent"]))},[l("td",null,w(m),1)],42,El))),128))],64))),128))])])):z("",!0)])}var Pl=$(Wo,[["render",Wl],["__scopeId","data-v-85b0da02"]]);const Fl=V({components:{PeekInside:Pl},setup(){return{store:ue(),devMode:localStorage.getItem("devMode")==="true"}},methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,n=Math.min(e/800,t/1e3),r=(t-1e3*n)/2;document.documentElement.style.setProperty("--scale",`${n}`),document.documentElement.style.setProperty("--translateX",`${r}px`)}},beforeMount(){this.updateStyle()},mounted(){window.addEventListener("resize",this.updateStyle)}}),Ll={class:"perspective"},Al={class:"peek"};function Ol(e,t,n,r,i,a){const o=ae("router-view"),c=ae("PeekInside");return f(),g(K,null,[l("div",Ll,[x(o)]),l("div",Al,[e.devMode?(f(),q(c,{key:0})):z("",!0)])],64)}var Tl=$(Fl,[["render",Ol]]);const Je=sn(Tl);Je.use(ja,$t);Je.use(It);Je.mount("#app");
