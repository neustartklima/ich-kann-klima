var Ht=Object.defineProperty,Zt=Object.defineProperties;var Rt=Object.getOwnPropertyDescriptors;var Ze=Object.getOwnPropertySymbols;var Yt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable;var We=(e,t,n)=>t in e?Ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))Yt.call(t,n)&&We(e,n,t[n]);if(Ze)for(var n of Ze(t))Qt.call(t,n)&&We(e,n,t[n]);return e},G=(e,t)=>Zt(e,Rt(t));var L=(e,t,n)=>(We(e,typeof t!="symbol"?t+"":t,n),n);import{D as Re,a as we,s as Ye,b as qt,v as Xt,d as I,r as ee,c as P,o as h,e as g,f as l,g as A,t as k,n as $,h as Le,u as F,p as ye,i as ke,F as J,j as R,k as Y,l as B,m as U,q as Qe,w as xe,x as re,y as Se,z as en,A as tn,B as nn,C as rn,E as sn,V as an,G as qe,H as on,I as ln,J as q,K as un}from"./vendor.1c73e85c.js";const cn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};cn();const dn={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};class De{constructor(t){L(this,"lux");t instanceof Re?this.lux=t.setLocale("de-DE").setZone("Europe/Berlin"):this.lux=Re.fromISO(t,{zone:"Europe/Berlin",locale:"de-DE"})}static durationBetween(t,n){return new Te(n.lux.diff(t.lux,["months"]))}plus(t){return new De(this.lux.plus(t.lux))}getYear(){return this.lux.get("year")}toLocaleString(){return this.lux.toLocaleString(dn)}toMonthString(){return this.lux.toLocaleString({month:"long",year:"numeric"})}toJSON(){return this.lux.toJSON()}}class Te{constructor(t){L(this,"lux");t instanceof we?this.lux=t:typeof t=="string"?this.lux=we.fromISO(t,{locale:"de-DE"}):this.lux=we.fromObject(t)}toMonthsString(){const t=this.lux.as("months");return t===1?"1 Monat":t+" Monate"}lessThan(t){return this.lux<t.lux}}function ue(e){return new De(e)}function Ve(e){return new Te(e)}function hn(e,t){return De.durationBetween(e,t)}function fn(e){return new Te(we.fromDurationLike({month:e}))}function mn(e,t){return e.lux<t.lux?t:e}const de=2021,Xe="2021-01-01",et=2050,tt=Ve("P3M"),gn=Ve("P3M"),nt=6,rt=.6;function V(e){return e}const be={newYear:2,timesUp:3,finanzKollaps:4,wahlVerloren:5,hitzehoelle:6};function it(e,t){const n=e.events.filter(r=>t.includes(r.id)).reduce((r,i)=>mn(r,ue(i.occuredIn)),ue(Xe));return hn(n,ue(e.currentDate))}function ie(e,t,n){return it(e,[t.id]).lessThan(Ve(n))}var pn=V({title:"Abstandsregeln f\xFCr Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erh\xF6ht wird. Das f\xFChrte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply(){return[]}});let Oe=Ye("",{state:!0}),st=()=>Math.abs(Oe());function bn(e){Oe=Ye(e.id,{state:e.prngState})}function vn(){return Oe.state()}const wn=e=>({time:tt,text:`Braucht ${tt.toMonthsString()}.`});function w(e,t="Braucht {months}."){const n=fn(e),r=t.replace(/{months}/g,n.toMonthsString());return{time:n,text:r}}function y(e){return e}var yn=y({title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bew\xE4hrt. Wir lassen sie so, wie sie sind.",effort(e){return w(3,"Wie aussitzen: {months}.")},effects(){return[]},priority(e){return st()}});const kn=new qt.exports.Converter;function at(e){return e>0?[...Array(e)].map((t,n)=>n):[]}function ot(e,t){const n=e-t-1;return[...at(t),Math.max(t,n),...at(n).reverse()]}function s(e,...t){let n=e.map((i,a)=>i+(t[a]||"")).join("").split(`
`);n[0].length===0&&n.shift();const r=n[0].match(/^(\s+)/);return r&&!n.filter(i=>i.trim()).some(i=>!i.startsWith(r[1]))&&(n=n.map(i=>i.replace(r[1],""))),kn.makeHtml(n.join(`
`))}function Ie(e){return t=>!e(t)}function lt(e){return Object.entries(e).map(([t,n])=>G(x({},n),{id:t}))}function ut(e,t){const n=e.value-t.value;return r=>{const i=e.result*(r-t.value)/n,a=t.result*(r-e.value)/n;return i-a}}const Sn=new Intl.DateTimeFormat("de-DE");class C{constructor(t){L(this,"url");L(this,"title");L(this,"publisher");L(this,"authors");L(this,"date");L(this,"comment");L(this,"internalComment");L(this,"localCopy");L(this,"referringUrl");L(this,"archiveUrl");L(this,"archiveNotPossible");this.url=new URL(t.url),this.title=t.title,this.publisher=t.publisher,this.authors=t.authors,this.date=t.date?new Date(t.date):void 0,this.comment=t.comment,this.internalComment=t.internalComment,this.localCopy=t.localCopy,this.referringUrl=t.referringUrl?new URL(t.referringUrl):void 0,this.archiveUrl=t.archiveUrl?new URL(t.archiveUrl):void 0,this.archiveNotPossible=t.archiveNotPossible}dateString(){const t=this.date;return t?" ("+Sn.format(t)+")":""}toString(){const t=this.authors?this.authors+this.dateString():void 0,n=this.title?'"'+this.title+'"':void 0;return[t,n,this.url,this.publisher].filter(r=>r).join(", ")}}function W(e){const t=e.publisher||e.authors,n=t!=null?t+": ":"",r=e.title||e.url.toString(),i=e.url.toString();return`[[${n}${r}](${i})]`}const Dn=e=>e.map(t=>t.toString()).join("; "),Pn=new C({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),te=new C({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),ct=new C({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"}),dt=new C({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineral\xF6lsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),ht=new C({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile f\xFCr wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),Pe=new C({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),_n=new C({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schl\xFCsselergebnisse der Studie des Wuppertal Instituts f\xFCr Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${W(Pe)}.`});Pe.comment=s`Zusammengefasst in ${W(_n)}.`;const j=new C({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahresch\xE4tzung der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),zn=new C({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),_e=new C({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enth\xE4lt CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] f\xFCr mehrere Verkehrsmittel"}),ze=new C({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),ft=new C({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Stra\xDFeng\xFCterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),se=new C({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enth\xE4lt Personenkilometer-Jahreswerte f\xFCr mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),mt=new C({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung \xD6PNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),Be=new C({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),An=new C({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new C({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren f\xFCr Fernw\xE4rme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const gt=new C({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),Fn=new C({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),pt=new C({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle w\xE4re besser."}),Cn=new C({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bev\xF6lkerung nach Nationalit\xE4t und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),En=new C({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur f\xFCr Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),Wn=new C({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische \xC4mter des Bundes und der L\xE4nder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new C({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const bt=new C({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgem\xE4\xDF - Interview mit Prof. Stefan G\xF6ssling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""}),Ln=new C({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),vt=new C({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),xn=new C({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),wt=new C({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten f\xFCr die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class yt{constructor(t){L(this,"unit");L(this,"citations");L(this,"details");L(this,"internals");this.unit=t.unit,this.citations=t.citations?t.citations:[],this.details=t.details?t.details:"",this.internals=t.internals?t.internals:""}citationsDesc(){return Dn(this.citations)}}const Tn={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class _ extends yt{constructor(t){super(t);L(this,"writable",!0);L(this,"initialValue");L(this,"applyBounds");this.initialValue=t.initialValue,this.applyBounds=t.applyBounds||Tn[t.unit]}}class H extends yt{constructor(t){super(t);L(this,"writable",!1);L(this,"valueGetter");L(this,"shouldInitiallyBe");this.valueGetter=t.valueGetter,this.shouldInitiallyBe=t.shouldInitiallyBe}}const Vn=new _({unit:"MioTons",initialValue:6700,citations:[Pn],details:s`

  `,internals:s`

  `}),On=new _({unit:"MioTons",initialValue:186.793,citations:[j],details:s`

  `,internals:s`

  `}),In=new H({unit:"MioTons",valueGetter(e){return e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4},shouldInitiallyBe:159.696,citations:[j,ft],details:s`

  `,internals:s`
    ${W(j)}: 159.696 as MioTons

    ${W(ft)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Bn=new H({unit:"MioTons",valueGetter(e){return e.co2emissionsStreetVehicles+e.publicLocalCapacity*65/1e6+e.publicNationalCapacity*32/1e6+e.airDomesticUsage*222/1e6+1.641},citations:[_e,j],details:s`

  `,internals:s`
    ${W(_e)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${W(j)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${W(j)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${W(j)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),Mn=new H({unit:"MioTons",valueGetter(e){return e.buildingsSourceBio*0+e.buildingsSourceGas*.247+e.buildingsSourceOil*.318+e.buildingsSourceTele*.16},citations:[j,Be],details:s`

  `,internals:s`
    TODO: #91 Gibt es hier bessere Quellen?

    ${W(Be)}: 247g CO2 pro kWh Erdgas.

    ${W(Be)}: 318g CO2 pro kWh Erdöl.

    ${W(An)}: 160g CO2 pro kWh Fernwärme.

    ${W(j)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),$n=new _({unit:"MioTons",initialValue:67.936,citations:[j],details:s`

  `,internals:s`

  `}),Nn=new _({unit:"MioTons",initialValue:9.243,citations:[j],details:s`

  `,internals:s`

  `}),Gn=new H({unit:"MioTons",valueGetter(e){return e.electricityGas*.399+e.electricitySolar*.058+e.electricityWind*.005+e.electricityWater*.02+e.electricityHardCoal*.835+e.electricityBrownCoal*1.137+e.electricityBiomass*.03+e.electricityNuclear*.005},citations:[gt,j],details:s`

  `,internals:s`
    ${W(gt)}:
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
    - Diskrepanz zu ${W(Fn)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${W(j)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),Un=new H({unit:"MioTons",valueGetter(e){return e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers},details:s`

  `,internals:s`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${W(j)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[zn]}),Kn=new _({unit:"TWh",initialValue:480.54,citations:[te],details:s`

  `,internals:s`

  `}),Jn=new _({unit:"Percent",initialValue:50,citations:[],details:s`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:s`

  `}),jn=new _({unit:"TWh",initialValue:51.42,citations:[te],details:s`

  `,internals:s`

  `}),Hn=new _({unit:"TWh",initialValue:131.85,citations:[te],details:s`

  `,internals:s`

  `}),Zn=new _({unit:"TWh",initialValue:6,citations:[te],details:s`

  `,internals:s`

  `}),Rn=new _({unit:"Percent",initialValue:100,citations:[xn],details:s`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),Yn=new _({unit:"TWh",initialValue:14.99,citations:[te],details:s`

  `,internals:s`

  `}),Qn=new _({unit:"TWh",initialValue:43.19,citations:[te],details:s`

  `,internals:s`

  `}),qn=new _({unit:"TWh",initialValue:60.91,citations:[te],details:s`

  `,internals:s`

  `}),Xn=new _({unit:"TWh",initialValue:35.46,citations:[te],details:s`

  `,internals:s`

  `}),er=new _({unit:"TWh",initialValue:82.13,citations:[te],details:s`

  `,internals:s`

  `}),tr=new H({unit:"TWh",valueGetter(e){return e.electricityHardCoal+e.electricityBrownCoal},details:s`

  `,internals:s`

  `}),nr=new H({unit:"TWh",valueGetter(e){return e.electricityDemand-e.electricitySolar-e.electricityWind-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear},details:s`

  `,internals:s`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),rr=new _({unit:"GramPerPsgrKm",initialValue:160,citations:[_e],details:s`

  `,internals:s`
    ${W(_e)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),ir=new _({unit:"MioPsgrKm",initialValue:917e3,citations:[se],details:s`

  `,internals:s`

  `}),sr=new _({unit:"Percent",initialValue:.5,citations:[pt],details:s`

  `,internals:s`
    Die verschiedenen Zahlen in ${W(pt)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),ar=new _({unit:"MioPsgrKm",initialValue:112600,citations:[se],details:s`

  `,internals:s`

  `}),or=new _({unit:"MioPsgrKm",initialValue:112600,citations:[se],details:s`

  `,internals:s`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),lr=new _({unit:"MioPsgrKm",initialValue:67300,citations:[se],details:s`

  `,internals:s`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),ur=new _({unit:"MioPsgrKm",initialValue:67300,citations:[se],details:s`

  `,internals:s`
Siehe \`publicLocalCapacity\`.
  `}),cr=new _({unit:"MioPsgrKm",initialValue:10100,citations:[se],details:s`

  `,internals:s`

  `}),dr=new _({unit:"MioPsgrKm",initialValue:61700,citations:[se],details:s`

  `,internals:s`

  `}),hr=new H({unit:"MioPsgrKm",valueGetter(e){return e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage},shouldInitiallyBe:1168700,citations:[se],details:s`

  `,internals:s`

  `}),fr=new _({unit:"TWh",initialValue:226,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),mr=new _({unit:"TWh",initialValue:544,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),gr=new H({unit:"TWh",valueGetter(e){return e.buildingsPrivateDemand+e.buildingsIndustryDemand},shouldInitiallyBe:770,citations:[],details:s`

  `,internals:s`
    TODO: #78 Quelle ${W(wt)} gibt diese Zahlen nicht her.
  `}),pr=new _({unit:"TWh",initialValue:130,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),br=new _({unit:"TWh",initialValue:219,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),vr=new _({unit:"TWh",initialValue:58,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),wr=new H({unit:"TWh",valueGetter(e){return e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele)},citations:[],details:s`

  `,internals:s`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${W(wt)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),yr=new _({unit:"Percent",initialValue:50,citations:[],details:s`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:s`

  `}),kr=new _({unit:"TsdPeople",initialValue:83155.031,citations:[Cn],details:s`

  `,internals:s`
Anfangswert ist der Stand 31.12.2020.
  `}),Sr=new _({unit:"TsdPeople",initialValue:2695,citations:[En],details:s`

  `,internals:s`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),Dr=new _({unit:"MrdEuro",initialValue:3332,citations:[Wn],details:s`

  `,internals:s`
Anfangswert ist das BIP 2020.
  `}),Pr=new _({unit:"MrdEuro",initialValue:1899,citations:[],details:s`

  `,internals:s`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),Q={co2budget:Vn,co2emissionsIndustry:On,co2emissionsStreetVehicles:In,co2emissionsMobility:Bn,co2emissionsAgriculture:$n,co2emissionsBuildings:Mn,co2emissionsOthers:Nn,co2emissionsEnergy:Gn,co2emissions:Un,electricityDemand:Kn,electricityGridQuality:Jn,electricitySolar:jn,electricityWind:Hn,electricityWindOnshoreMaxNew:Zn,electricityWindEfficiency:Rn,electricityWater:Yn,electricityBiomass:Qn,electricityNuclear:qn,electricityHardCoal:Xn,electricityBrownCoal:er,electricityCoal:tr,electricityGas:nr,carEmissionFactor:rr,carUsage:ir,carRenewablePercentage:sr,publicLocalUsage:ar,publicLocalCapacity:or,publicNationalUsage:lr,publicNationalCapacity:ur,airDomesticUsage:cr,airIntlUsage:dr,passengerTransportUsage:hr,buildingsIndustryDemand:fr,buildingsPrivateDemand:mr,buildingsDemand:gr,buildingsSourceBio:pr,buildingsSourceOil:br,buildingsSourceTele:vr,buildingsSourceGas:wr,popularity:yr,numberOfCitizens:kr,unemployment:Sr,gdp:Dr,stateDebt:Pr},kt=Object.entries(Q).filter(e=>e[1]instanceof _).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),St=Object.entries(Q).filter(e=>e[1]instanceof H).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),_r=Object.keys(kt),Dt=Object.keys(Q);class Pt extends _{constructor(t,n){super(t);L(this,"name");this.name=n}}const zr=Object.entries(kt).map(e=>new Pt(e[1],e[0]));class _t extends H{constructor(t,n){super(t);L(this,"name");this.name=n}}Object.entries(St).map(e=>new _t(e[1],e[0]));const zt=Object.entries(Q).map(e=>e[1]instanceof _?new Pt(e[1],e[0]):new _t(e[1],e[0])),he=zr.reduce((e,t)=>(e[t.name]=t.initialValue,e),{}),At=zt.reduce((e,t)=>(e[t.name]=0,e),{});function fe(e){const t=x({},e);return Object.entries(St).forEach(n=>Object.defineProperty(t,n[0],{enumerable:!0,get:()=>n[1].valueGetter(t)})),t}function Ar(e){return x({},e)}function ae(e,t){return{type:"dispatch",condition:!0,if(n){return this.condition=n,this},apply(n){this.condition&&n.dispatch(e,t)}}}function o(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(t){return this.percent=t,this},byValue(t){return this.value=t,this},setValue(t){return this.absolute=t,this},if(t){return this.condition=t,this},getOldNew(t){const n=this.name,r=t[n];if(!this.condition)return{oldVal:r,newVal:r};const i=Q[n],a=this.absolute!=null?this.absolute:r+(this.value||r*this.percent/100),u=i.applyBounds(a);return{oldVal:r,newVal:u}},getChange(t){if(!this.condition)return 0;const{oldVal:n,newVal:r}=this.getOldNew(t);return r-n},apply(t){if(this.condition){const{newVal:n}=this.getOldNew(t.values);t.values[this.name]=n}return this}}}function O(e,t){if(Q[e].unit!=Q[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(n){return this.percent=n,this},byValue(n){return this.value=n,this},if(n){return this.condition=n,this},getEffect(n){const r=n[this.to],i=n[this.from];if(!this.condition)return{oldTo:r,oldFrom:i,newTo:r,newFrom:i};const a=Q[this.to],u=Q[this.from],f=this.value||r*this.percent/100,c=a.applyBounds(r+f)-r,p=-u.applyBounds(i-c)+i,D=r+p,z=i-p;return{oldTo:r,newTo:D,oldFrom:i,newFrom:z}},apply(n){if(this.condition){const{newTo:r,newFrom:i}=this.getEffect(n.values);n.values[this.to]=r,n.values[this.from]=i}return this}}}function Me(e,t){t.filter(n=>n.condition).forEach(n=>n.apply(e))}var Fr=y({title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effort(e){return w(11)},effects(e,t,n){const r=n-t,i=r<18?4.3/18:0,a=2.5,u=20,f=60,c=(10-r)/55,p=Math.max((u+f/2)*c,0);return[o("electricityHardCoal").setValue(0),o("electricityBrownCoal").setValue(0),o("stateDebt").byValue(-i+a),o("unemployment").byValue(p)]},priority(e){return e.values.electricityCoal/e.values.electricityDemand<=.1?0:b(1e4,0,e.values.unemployment)},citations:[],details:s`

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
  `}),Cr=y({title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effort(e){return e.values.popularity>=50?w(6,"Normal dauert das 12 Monate, aber bei Deiner Beliebtheit nur {months}."):w(12)},effects(){return[o("stateDebt").byValue(-37),o("electricityHardCoal").byPercent(-10),o("electricityBrownCoal").byPercent(-5),o("electricityWind").byValue(5),o("electricitySolar").byValue(3),o("electricityWater").byValue(.5)]},priority(e){return b(et,de,e.currentYear)}});const Ft=fe(he).electricityGas;var Er=y({title:"Kernenergienutzung verl\xE4ngern",description:"Kernkraftwerke l\xE4nger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effort(e){return w(8)},effects(){return[o("electricityNuclear").setValue(104.3),o("stateDebt").byValue(-2.5),o("popularity").byValue(-4)]},priority(e){return b(Ft,1.1*Ft,e.values.electricityGas)}}),Wr=y({title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,n){const i={2021:60.45,2022:30.21}[n]||0;return[o("electricityNuclear").setValue(i)]},priority(e){return 0}}),Lr=y({title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren f\xFCr den Ausbau des Stromnetzes",effort(e){return w(2)},effects(e,t,n){return[o("popularity").byValue(-3).if(t===n),o("electricityGridQuality").byValue(1)]},priority(e){return b(70,27,ne(e))},citations:[],details:s`

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
  `}),xr=y({title:"Netzausbau f\xF6rdern",description:"Ausbau des Stromnetzes mit Steuermitteln f\xF6rdern",effort(e){return w(3)},effects(e,t,n){return[o("popularity").byValue(-1).if(t===n),o("stateDebt").byValue(2),o("electricityGridQuality").byValue(5).if(v(e,"NetzausbauErleichtern"))]},priority(e){return b(70,27,ne(e))},citations:[],details:s`

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
  `}),Tr=y({title:"Stromspeicherung erleichtern",description:"B\xFCrokratische H\xFCrden f\xFCr den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effort(e){return w(3)},effects(e,t,n){return[o("electricityGridQuality").byValue(.2)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Vr=y({title:"Stromspeicherung f\xF6rdern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln f\xF6rdern. 2 Mrd \u20AC pro Jahr.",effort(e){return w(7)},effects(e,t,n){const r=v(e,"StromspeicherungErleichtern")?0:5,i=n>=t+r,a=v(e,"ForschungUndEntwicklungStromspeicherung",3);return[o("stateDebt").byValue(1),o("popularity").byValue(.2).if(i),o("stateDebt").byValue(1).if(i),o("electricityGridQuality").byValue(2).if(i),o("electricityGridQuality").byValue(2).if(a),o("electricityGridQuality").byValue(2).if(i&&a)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Or=y({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit verg\xFCnstigten Krediten gef\xF6rdert.",effort(e){return w(3)},effects(e,t,n){const r=.5,i=n-t>2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-1).if(i),o("buildingsSourceOil").byPercent(-1).if(i),o("buildingsSourceTele").byPercent(-1).if(i),o("buildingsPrivateDemand").byPercent(-1).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,t)}}),Ir=y({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gef\xF6rdert.",effort(e){return w(5)},effects(e,t,n){const r=1,i=n-t>2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-2).if(i),o("buildingsSourceOil").byPercent(-2).if(i),o("buildingsSourceTele").byPercent(-2).if(i),o("buildingsPrivateDemand").byPercent(-2).if(i),o("popularity").byValue(5).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,t)}}),Br=y({title:"D\xE4mmung von Wohngeb\xE4uden sehr stark f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungspl\xE4tze im Handwerk geschaffen durch einen Zuschuss von 500\u20AC pro Monat, damit der zu erwartende Bauboom bew\xE4ltigt werden kann.",effort(e){return w(7)},effects(e,t,n){const r=3,i=n-t,a=i>=2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-4).if(a),o("buildingsSourceOil").byPercent(-4).if(a),o("buildingsSourceTele").byPercent(-4).if(a),o("buildingsPrivateDemand").byPercent(-4).if(a),o("popularity").byValue(10).if(i===1),o("popularity").byValue(5).if(a)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,t)},citations:[],details:s`

  `,internals:s`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `}),Mr=y({title:"D\xE4mmung von Wohngeb\xE4uden abschaffen",description:"Wir geben den B\xFCrgern die Freiheit zur\xFCck, selbst zu entscheiden, ob sie ihr Haus d\xE4mmen wollen und lassen die F\xF6rderung auslaufen",effort(e){return w(3)},effects(){return[o("stateDebt").byValue(-.5),o("buildingsSourceBio").byPercent(-.5),o("buildingsSourceOil").byPercent(-.5),o("buildingsSourceTele").byPercent(-.5),o("buildingsPrivateDemand").byPercent(-.5)]},priority(e){const t=Li(e.acceptedLaws,/^DaemmungAltbau/);if(!t||t==="DaemmungAltbauAbschaffen")return 0;const n=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,n)}}),$r=y({title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit st\xE4rker bezuschusst.",effort(e){return w(5,"Komplexe Verhandlungen mit den Bundesl\xE4ndern dauern {months}.")},effects(e,t,n){const r=e.values.publicLocalCapacity/e.values.publicLocalUsage*100,i=n-t;return[o("stateDebt").byValue(3),o("publicLocalCapacity").byPercent(1),O("publicLocalUsage","carUsage").byPercent(1).if(r>=105),o("popularity").byValue(2).if(i>=5)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return b(150,80,t)},citations:[mt],details:s`

  `,internals:s`
    # Happy Path 18

    # Folgen

    - Der Staatshaushalt wird jährlich mit 3 Mrd € mehr belastet. (${W(mt)})
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
  `}),Nr=y({title:"Nahverkehr Modernisieren",description:"Anschaffung Moderner, bequemer, emissionsfreier Fahrzeuge f\xFCr den Nahverkehr wird gef\xF6rdert.",effort(e){return w(4)},effects(e,t,n){return[o("stateDebt").byValue(3),o("publicLocalCapacity").byPercent(1),O("publicLocalUsage","carUsage").byPercent(1),o("popularity").byValue(3)]},priority(e){if(!v(e,"FernverkehrModernisieren"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,24,t)},citations:[ze],details:s`

  `,internals:s`
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
  `}),Gr=y({title:"F\xF6rderung f\xFCr Tierhaltung abschaffen",description:"Subventionen f\xFCr Tierhaltung werden ersatzlos gestrichen",effort(e){return w(2)},effects(e,t,n){return[o("stateDebt").byValue(-10),o("co2emissionsAgriculture").byValue(-10).if(t===n),o("popularity").byValue(-20).if(t===n)]},priority(e){return b(1e4,0,e.values.unemployment)}}),Ur=y({title:"Nahverkehr Kostenlos",description:"Die Kosten f\xFCr den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr ben\xF6tigt werden.",effort(e){return w(7,"Die Haushaltsverhandlungen dauern {months}.")},effects(e,t,n){const r=t===n?10:1;return[o("stateDebt").byValue(10),O("publicLocalUsage","carUsage").byPercent(r),o("popularity").byValue(10).if(t===n),o("unemployment").byValue(20).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return b(90,120,t)},citations:[ze],details:s`

  `,internals:s`
    # Happy Path 19

    # Folgen

    - Der Staatshaushalt wird jährlich mit 10 Mrd € stärker belastet.
        - 13.3 Mrd € Ticketeinnahmen pro Jahr (${W(ze)})
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
  `}),Kr=y({title:"Autos in Innenst\xE4dten verbieten",description:"Die Innenst\xE4dte der gro\xDFen St\xE4dte werden zu Autofreien Zonen erkl\xE4rt und begr\xFCnt, sowie Fahrrad und Fu\xDFg\xE4ngerzonen eingerichtet.",effort(e){return w(12)},effects(e,t,n){var r=-2;return e.values.publicLocalCapacity>e.values.publicLocalUsage*1.2&&(r=-1,t+2<n&&(r=2)),[o("popularity").byValue(r),O("publicLocalUsage","carUsage").byPercent(10).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return b(90,120,t)}}),Jr=y({title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des \xF6ffentlichen Fernverkehrs wird bundesweit st\xE4rker Bezuschusst und Vorangetrieben",effort(e){return w(12)},effects(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return[o("stateDebt").byValue(6),o("publicNationalCapacity").byPercent(1),O("publicNationalUsage","carUsage").byPercent(1).if(t>=105),O("publicNationalUsage","carUsage").byPercent(.5).if(t>=105),o("popularity").byValue(2).if(t>=105)]},priority(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return b(150,80,t)},citations:[],details:s`

  `,internals:s`
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
  `}),jr=y({title:"Fernverkehr Modernisieren",description:"Moderne, bequeme und weniger anf\xE4llige Z\xFCge werden f\xFCr den Fernverkehr angeschafft.",effort(e){return w(4)},effects(e,t,n){return[o("stateDebt").byValue(3),o("publicNationalCapacity").byPercent(1),O("publicNationalUsage","carUsage").byPercent(1),o("popularity").byValue(3)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,24,t)},citations:[],details:s`

  `,internals:s`
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
  `}),Hr=y({title:"Wasserstofftechnologie f\xF6rdern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(1)},effects(e,t,n){const r=n<t+5,i=n>=t+5;return[o("stateDebt").byValue(2).if(r),o("carRenewablePercentage").byValue(1).if(i)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(40,90,r)},citations:[],details:s`

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
  `}),Zr=y({title:"Wasserstoffmobilit\xE4t f\xF6rdern",description:"Wasserstoffbasierte Fahrzeuge werden gef\xF6rdert.",effort(e){return w(2)},effects(e,t,n){return v(e,"WasserstofftechnologieFoerdern")?[o("stateDebt").byValue(3),o("carRenewablePercentage").byValue(1),o("popularity").byValue(1).if(t===n)]:[]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,26,t)},citations:[],details:s`

  `,internals:s`
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
  `}),Rr=y({title:"Abschaffung der Mineral\xF6lsteuer",description:"Die Steuer auf s\xE4mtliche erd\xF6lbasierten Treibstoffe wird abgeschafft.",effort(e){const t=Math.ceil(e.values.co2budget/e.values.co2emissions);return t>=15?w(2,`Die derzeitigen CO2 Emissionen w\xFCrden das Budget
        in ${t} Jahren verbrauchen.
        Nicht schlecht! Bei der Stimmung bekommst Dus in {months}n durch.`):w(9,"Nicht beliebt! Sowas dauert {months}.")},effects(e,t,n){return[o("stateDebt").byValue(41),o("popularity").byValue(5).if(t===n),o("popularity").byValue(-3).if(t<n),O("publicLocalUsage","carUsage").byPercent(-20).if(t===n),O("publicNationalUsage","carUsage").byPercent(-20).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(60,100,r)},citations:[dt],details:"",internals:s`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${W(dt)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `}),Yr=y({title:"Ausbau von Stra\xDFen",description:"Autobahnen und Stra\xDFen werden intensiver ausgebaut.",effort(e){return w(9)},effects(e){return[o("stateDebt").byValue(5),o("popularity").byValue(.5),O("publicLocalUsage","carUsage").byPercent(-1),O("publicNationalUsage","carUsage").byPercent(-1)]},priority(e){const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(60,100,n)}}),Qr=y({title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effort(e){return w(6)},effects(e,t,n){return[o("stateDebt").byValue(-7.35),o("popularity").byValue(-1).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(10,100,r)}}),qr=y({title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen f\xFCr Dienstwagen werden abgeschafft.",effort(e){return w(6)},effects(e,t,n){return[o("stateDebt").byValue(-18),o("popularity").byValue(-1).if(t===n),O("carUsage","publicLocalUsage").byPercent(-.05)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(50,100,r)},citations:[ht,bt],details:s`

  `,internals:s`
    # Happy Path 20

    Zunächst sollte Nah- und Fernverkehr attraktiver gemacht werden.
    TODO: Folgen sollten davon abhängen, ob es attraktive Alternativen gibt.

    # Folgen

    - Steuermehreinnahmen: 18 mrd€ / Jahr (${W(ht)})
    - -0.05% Fahleistung pro Jahr (Anreiz für Auto fällt weg Gebrauchte Wagen werden teuerer).
        - ${W(bt)} sagt es gibt keine echte Schätzung dafür.
    - Entsprechend mehr Nahverkehrnutzung
    - Zufriedenheit sinkt einmalig um 1%

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 50%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `}),Xr=y({title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(3)},effects(e){const t=o("carEmissionFactor").setValue(157.9),n=t.getChange(e.values);return[o("popularity").byValue(2).if(n<0),t]},priority(e){if(v(e,"Tempolimit100AufAutobahnen")||v(e,"Tempolimit120AufAutobahnen")||v(e,"TempolimitAufAutobahnenAussitzen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),ei=y({title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(4)},effects(e){const t=o("carEmissionFactor").setValue(157.1),n=t.getChange(e.values);return[o("popularity").byValue(2).if(n<0),t]},priority(e){if(!v(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),ti=y({title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(5)},effects(e){const t=o("carEmissionFactor").setValue(154.1),n=t.getChange(e.values);return[o("popularity").byValue(-1).if(n<0),t]},priority(e){if(!v(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),ni=y({title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das k\xF6nnte zwar Strafen oder gar Zwangsma\xDFnahmen bewirken, aber das Risiko der gef\xE4hrdeten Wiederwahl ist zu gro\xDF.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(3,"Wie aussitzen: {months}.")},effects(){return[o("stateDebt").byValue(-10),o("popularity").byValue(-2)]},priority(e){if(v(e,"Tempolimit100AufAutobahnen")||v(e,"Tempolimit120AufAutobahnen")||v(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),ri=y({title:"Elektromobilit\xE4t F\xF6rdern",description:"H\xF6here Kaufpr\xE4mien, Steuerbefreiung, g\xFCnstiges Laden f\xFCr E-Autos.",effort(e){return w(2)},effects(e,t,n){return v(e,"LadeinfrastrukturAusbauen")?[o("stateDebt").byValue(5),o("carRenewablePercentage").byValue(1),o("popularity").byValue(4).if(t===n)]:[]},priority(e){if(!v(e,"LadeinfrastrukturAusbauen"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,25,t)},citations:[],details:s`

  `,internals:s`
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
  `}),ii=y({title:"Ladeinfrastruktur ausbauen",description:"Ausbau der Ladeinfrastruktur wird mit Steuermitteln stark gef\xF6rdert.",effort(e){return w(4)},effects(e,t,n){return[o("stateDebt").byValue(5),o("carRenewablePercentage").byValue(1),o("popularity").byValue(2).if(t===n)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,25,t)},citations:[ze],details:s`

  `,internals:s`
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
  `}),si=y({title:"Windkraft vereinfachen",description:"Genehmigungen f\xFCr Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effort(e){return w(4,"Die Bundesl\xE4nder m\xFCssen mit ins Boot geholt werden. Das dauert {months}.")},effects(e,t,n){return[]},priority(e){return b(80,27,ne(e))},citations:[],details:s`

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
  `}),ai=y({title:"Abstandsregeln f\xFCr Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem \xFCber Abst\xE4nde zwischen den Windkraftanlagen und Wohngeb\xE4uden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(3,"Wie aussitzen: {months}.")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[o("electricityWindOnshoreMaxNew").setValue(6).if(n>=t+r)]},priority(e){return v(e,"AbstandsregelnFuerWindkraftLockern")?b(30,100,ne(e)):v(e,"AbstandsregelnFuerWindkraftVerschaerfen")?b(70,27,ne(e)):0}}),oi=y({title:"Abstandsregeln f\xFCr Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln f\xFCr Windkraftanlagen sowie Bauerlaubniss in W\xE4ldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(6,"Das schaffst Du in {months}n.")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[o("popularity").byValue(-3).if(t===n),o("electricityWindOnshoreMaxNew").setValue(30).if(n>=t+r)]},priority(e){return v(e,"AbstandsregelnFuerWindkraftWieBisher")?b(70,27,ne(e)):v(e,"AbstandsregelnFuerWindkraftAbschaffen")?b(30,100,ne(e)):0},citations:[],details:s`

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
  `}),li=y({title:"Abstandsregeln f\xFCr Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(12,"BIs werden es Dir schwer machen. {months}!")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[o("popularity").byValue(-40).if(t===n),o("electricityWindOnshoreMaxNew").setValue(1e3).if(n>=t+r)]},priority(e){return v(e,"AbstandsregelnFuerWindkraftLockern")?b(80,25,ne(e)):0}}),ui=y({title:"Abstandsregeln f\xFCr Windkraft versch\xE4rfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngeb\xE4uden im Innenbereich muss das Zehnfache der Gesamth\xF6he der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(1,"Dauert nur einen Monat.")},effects(e,t,n){return[o("popularity").byValue(5).if(t===n),o("electricityWindOnshoreMaxNew").setValue(.42)]},priority(e){return v(e,"AbstandsregelnFuerWindkraftWieBisher")?b(0,100,ne(e)):0}}),ci=y({title:"Ausschreibungsverfahren f\xFCr Windkraft wie zu Beginn",description:"Windkraft Betreiber k\xF6nnen sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstm\xF6glichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(8)},effects(e,t,n){return[...Fe(e,6.9,1.2,t)]},priority(e){return v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?b(60,100,K(e)):0}}),di=y({title:"Ausschreibungsverfahren f\xFCr Windkraft verdoppeln",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(2)},effects(e,t,n){return[o("popularity").byValue(-1).if(t===n),o("unemployment").byValue(-20).if(t===n),...Fe(e,13.8,2.4,t)]},priority(e){return v(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?b(100,50,K(e)):v(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?b(40,100,K(e)):0}}),hi=y({title:"Ausschreibungsverfahren f\xFCr Windkraft vervierfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(4)},effects(e,t,n){return[o("popularity").byValue(-2).if(t===n),o("unemployment").byValue(-100).if(t===n),...Fe(e,27.6,4.8,t)]},priority(e){return v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?b(100,50,K(e)):v(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?b(0,100,K(e)):0},citations:[],details:s`
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
  `}),fi=y({title:"Ausschreibungsverfahren f\xFCr Windkraft verachtfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(5)},effects(e,t,n){return[o("popularity").byValue(-20).if(t===n),o("unemployment").byValue(-100).if(t===n),...Fe(e,55.2,9.6,t)]},priority(e){return v(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?b(100,50,K(e)):0}}),mi=y({title:"CO2 Preis Erh\xF6hen",description:"Die Preise werden schneller erh\xF6ht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return w(6)},effects(e,t,n){const r=n>=t+2?n>=t+4?100:70:0;return[...Ne(e,r,-.5,$e({value:50,result:0},{value:0,result:-1}))]},priority(e){return v(e,"VollerCO2Preis")||v(e,"WirksamerCO2Preis")?0:50},citations:[vt],details:s`

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
  `}),gi=y({title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return w(8)},effects(e,t,n){return[...Ne(e,150,-2,$e({value:80,result:0},{value:50,result:-3}))]},priority(e){return v(e,"CO2PreisErhoehen")?50:0},citations:[vt],details:s`

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
  `}),pi=y({title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return w(10)},effects(e,t,n){return[...Ne(e,3e3,-5,$e({value:90,result:0},{value:50,result:-10}))]},priority(e){return v(e,"WirksamerCO2Preis")?50:0},citations:[Ln],details:s`

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
  `}),bi=y({title:"Solarstrom F\xF6rderung einstellen",description:"Mittlere bis gro\xDFe Solaranlagen sollten sich selbst tragen. Die F\xF6rderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return w(5)},effects(e,t,n){return[...ce(e,"electricitySolar",2)]},priority(e){return v(e,"SolarstromFoerderungWieZuBeginn")?b(0,100,K(e)):0},details:s`

  `}),vi=y({title:"Solarstrom F\xF6rderung wie zu Beginn",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen wie bisher",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return w(9)},effects(e,t,n){return[...ce(e,"electricitySolar",5)]},priority(e){return v(e,"SolarstromFoerdernx8")?b(70,100,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),wi=y({title:"Solarstrom F\xF6rderung x2",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return w(4)},effects(e,t,n){return[o("popularity").byValue(10).if(t===n),o("unemployment").byValue(-31e3).if(t===n),...ce(e,"electricitySolar",10)]},priority(e){return v(e,"SolarstromFoerderungWieZuBeginn")?b(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),yi=y({title:"Solarstrom F\xF6rderung x4",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return w(3)},effects(e,t,n){return[o("popularity").byValue(20).if(t===n),o("unemployment").byValue(-89e3).if(t===n),...ce(e,"electricitySolar",20)]},priority(e){return v(e,"SolarstromFoerdernx2")?b(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:s`
    # Happy path 10

    ${W(Pe)}
  `,citations:[Pe]}),ki=y({title:"Solarstrom F\xF6rderung x8",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return w(2)},effects(e,t,n){return[o("popularity").byValue(-10).if(t===n),o("unemployment").byValue(-209e3).if(t===n),...ce(e,"electricitySolar",40)]},priority(e){return v(e,"SolarstromFoerdernx4")?b(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `}),Si=y({title:"Solar auf neuen D\xE4chern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die D\xE4cher.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return w(3)},effects(e,t,n){return[o("popularity").byValue(-3).if(t===n),...ce(e,"electricitySolar",2)]},priority(e){return v(e,"SolarstromFoerderungWieZuBeginn")?b(100,30,K(e)):0},details:s`

  `,internals:s`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `}),Di=y({title:"Forschung und Entwicklung zur Stromspeicherung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(1)},effects(e,t,n){const r=n<t+5,i=n>=t+3;return[o("stateDebt").byValue(2).if(r),o("electricityGridQuality").byValue(.2).if(i)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Pi=y({title:"Forschung zur emissionsfreien Stahlproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Stahl mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(2)},effects(e,t,n){const r=n<t+5,i=n>=t+3,a=v(e,"WasserstofftechnologieFoerdern",3)?K(e)-70:0,u=v(e,"WirksamerCO2Preis");return[o("stateDebt").byValue(2).if(r),o("co2emissionsIndustry").byValue(-2).if(i),o("co2emissionsIndustry").byValue(-2).if(u),o("co2emissionsIndustry").byValue(-a).if(a>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return b(0,80,n)},citations:[],details:s`

  `,internals:s`
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
  `}),_i=y({title:"Forschung zur emissionsfreien Zementproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Zement mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(3)},effects(e,t,n){const r=n<t+5,i=n>=t+3,a=v(e,"WasserstofftechnologieFoerdern",3)?K(e)-70:0,u=v(e,"WirksamerCO2Preis");return[o("stateDebt").byValue(2).if(r),o("co2emissionsIndustry").byValue(-2).if(i),o("co2emissionsIndustry").byValue(-2).if(u),o("co2emissionsIndustry").byValue(-a).if(a>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return b(0,80,n)},citations:[],details:s`

  `,internals:s`
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
  `}),zi=y({title:"Erforschung und Umsetzung dezentraler Stromerzeugung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur f\xFCr die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(1)},effects(e,t,n){const r=n<t+5,i=n>=t+1;return[o("stateDebt").byValue(2).if(r),o("electricityGridQuality").byValue(1).if(i)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Ai=y({title:"Test",description:"Unsinniges Gesetz zum Testen.",effort(e){return w(6)},effects(e,t,n){return[o("popularity").byPercent(50).if((n-t)%3!=0),o("popularity").byPercent(-50).if((n-t)%3==0),o("stateDebt").byPercent(-200).if(n===t),o("stateDebt").byPercent(50).if((n-t)%3!=0),o("stateDebt").byPercent(-50).if((n-t)%3==0),o("stateDebt").byPercent(-200).if(n===t+10)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`

  `});const Ct={AllesBleibtBeimAlten:yn,InitialAtomausstieg:Wr,KohleverstromungEinstellen:Fr,EnergiemixRegeltDerMarkt:Cr,KernenergienutzungVerlaengern:Er,NetzausbauErleichtern:Lr,NetzausbauFoerdern:xr,ForschungUndEntwicklungStromspeicherung:Di,StromspeicherungErleichtern:Tr,StromspeicherungFoerdern:Vr,ForschungDezentraleStromerzeugung:zi,WindkraftVereinfachen:si,AbstandsregelnFuerWindkraftVerschaerfen:ui,AbstandsregelnFuerWindkraftWieBisher:ai,AbstandsregelnFuerWindkraftLockern:oi,AbstandsregelnFuerWindkraftAbschaffen:li,AusschreibungsverfahrenfuerWindkraftWieBisher:ci,AusschreibungsverfahrenfuerWindkraftVerdoppeln:di,AusschreibungsverfahrenfuerWindkraftVervierfachen:hi,AusschreibungsverfahrenfuerWindkraftVerachtfachen:fi,SolarstromFoerderungAbschaffen:bi,SolarstromFoerderungWieZuBeginn:vi,SolarstromFoerdernx2:wi,SolarstromFoerdernx4:yi,SolarstromFoerdernx8:ki,SolarAufAllenDaechernVerpflichtend:Si,DaemmungAltbau1Percent:Or,DaemmungAltbau2Percent:Ir,DaemmungAltbau4Percent:Br,DaemmungAltbauAbschaffen:Mr,NahverkehrKostenlos:Ur,AutosInInnenstaedtenVerbieten:Kr,WasserstofftechnologieFoerdern:Hr,WasserstoffmobilitaetFoerdern:Zr,NahverkehrAusbauen:$r,NahverkehrModernisieren:Nr,FernverkehrVerbindungenAusbauen:Jr,FernverkehrModernisieren:jr,AusbauVonStrassen:Yr,AbschaffungDerMineraloelsteuer:Rr,DieselPrivilegAbgeschaffen:Qr,DienstwagenPrivilegAbgeschaffen:qr,Tempolimit130AufAutobahnen:Xr,Tempolimit120AufAutobahnen:ei,Tempolimit100AufAutobahnen:ti,TempolimitAufAutobahnenAussitzen:ni,ElektromobilitaetFoerdern:ri,LadeinfrastrukturAusbauen:ii,FoerderungFuerTierhaltungAbschaffen:Gr,CO2PreisErhoehen:mi,WirksamerCO2Preis:gi,VollerCO2Preis:pi,ForschungEmissionsfreieStahlproduktion:Pi,ForschungEmissionsfreieZementproduktion:_i,Test:Ai},Fi=Object.keys(Ct);function Ci(e){return lt(e).map(t=>G(x({},t),{effort:t.effort||wn}))}const oe=Ci(Ct);function Ei(e){const t=oe.find(n=>n.id===e);if(t)return t;throw Error(`Law #${e} not found`)}function ve(e){const t=Ei(e.lawId);if(t)return G(x({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function Ae(e){return e.map(t=>{const n=oe.find(r=>r.id===t);return n||console.error(`Inconsistency: Proposed law #${t} not found`),n}).filter(t=>t)}const Wi=(e,t,n)=>Object.fromEntries(e.map(r=>{const i=t(r),a=Object.fromEntries(Dt.map(u=>[u,n(r,i,u)]));return[r.id,a]}));function b(e,t,n){const r=n-e,i=t-e;if(i===0)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return r/i*100}function $e(e,t){const n=t.value-e.value,r=n/Math.abs(n),i=r*e.value;return a=>n===0||r*a<=i?e.result:ut(e,t)(a)}function v(e,t,n=0){if(!oe.map(r=>r.id).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some(r=>r.lawId===t&&r.effectiveSince<=e.currentYear+n)}function Li(e,t){const n=e.sort((r,i)=>i.effectiveSince-r.effectiveSince).find(r=>t.test(r.lawId));return n==null?void 0:n.lawId}function ne(e){const t=e.values;return t.electricityWind/t.electricityDemand*100}function K(e){return(e.values.electricityWind+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}function xi(e,t){const n=e.values,r=Q[t].initialValue,i=n.electricityGridQuality,a=n.electricityDemand;return ut({value:50,result:r},{value:100,result:a})(i)}function ce(e,t,n){const r=e.values,i=r.electricityCoal+r.electricityGas;if(i<=0)return[];const a=r.electricityHardCoal/i,u=r.electricityBrownCoal/i,f=r.electricityGas/i;return[O(t,"electricityHardCoal").if(a>0).byValue(a*n),O(t,"electricityBrownCoal").if(u>0).byValue(u*n),o(t).if(f>0).byValue(f*n)]}function Fe(e,t,n,r){const i=v(e,"WindkraftVereinfachen")?0:5;if(e.currentYear<r+i)return[];const a=e.values,f=(Math.min(t,a.electricityWindOnshoreMaxNew)+n)*a.electricityWindEfficiency/100,c=a.electricityWind,p=Math.min(c+f,xi(e,"electricityWind"))-c;return ce(e,"electricityWind",p)}function Ne(e,t,n,r){const i=r(K(e)),a=r(e.values.carRenewablePercentage);return[o("stateDebt").byValue((25-t)/1e3*e.values.co2emissions),o("popularity").byValue(i+a),o("co2emissionsIndustry").byPercent(n),o("co2emissionsAgriculture").byPercent(n),o("co2emissionsOthers").byPercent(n),O("electricityBrownCoal","electricityWind").byPercent(.7*n),O("electricityHardCoal","electricityWind").byPercent(.7*n),O("electricityBrownCoal","electricitySolar").byPercent(.3*n),O("electricityHardCoal","electricitySolar").byPercent(.3*n),O("buildingsSourceOil","buildingsSourceBio").byPercent(n),O("carUsage","publicNationalUsage").byPercent(.5*n),O("carUsage","publicLocalUsage").byPercent(.5*n)]}var Ti=V({title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es f\xFCr unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply(){return[]},probability(e,t){if(ie(e,t,{years:2,months:2}))return 0;const n=e.values.co2emissionsBuildings/e.values.co2emissions*100;return Math.min(1,b(15,30,n)/100)}});function Et(e){return e.find(t=>t.title.match(/subvention/i)&&t.title.match(/abbau/i))}var Vi=V({title:"Anruf von befreundetem Unternehmer",description:`Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und m\xF6chte dich in seine
    Ferienvilla auf Sardinien einladen. Er verl\xE4sst sich nat\xFCrlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,apply(e){if(e){const t=Et(Ae(e.proposedLaws));if(t)return[ae("rejectLaw",{lawId:t.id})]}return[]},probability(e,t){return ie(e,t,{years:3,months:8})?0:Et(Ae(e.proposedLaws))?.5:0}}),Oi=V({title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute \xFCber die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply(){return[]}}),Ii=V({title:"Zusammenbruch des Finanzsystems",description:`Deine Staatsfinanzen sind desastr\xF6s. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zur\xFCckahlen k\xF6nnen. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    k\xF6nntest. Das Spiel ist damit leider beendet.
  `,apply(){return[ae("gameOver")]},probability(e,t){return e.values.stateDebt>he.stateDebt*2?be.finanzKollaps:0}}),Bi=V({title:"Hitzeh\xF6lle",description:`Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen K\xFCstenregionen
  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr w\xE4chst.
  Um die verbleibdenden Teile sind erbitterte K\xE4mpfe ausgebrochen.
  `,apply(){return[ae("gameOver")]},probability(e,t){return e.values.co2budget<=0?be.hitzehoelle:0}}),Mi=V({title:"Happy New Year!",description:`Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen T\xE4tigkeit aufgestellt
    und kommt zu dem nicht weiter \xFCberraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht \xFCberraschend - sieht die Sache anders und verurteilt die Regierungserkl\xE4rung als haltlos.
  `,apply(){return[ae("advanceYear")]},probability(e,t){return ue(e.currentDate).getYear()>e.currentYear?be.newYear:0}}),$i=V({title:"Social Media Alarm!",description:`Deine Wahlkampfberaterin ruft dich v\xF6llig aufgel\xF6st an. Ob denn an den Geschichten was dran sein, die da im
    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.
    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.
  `,apply(){return[o("popularity").byPercent(-20)]}}),Ni=V({title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland m\xFCssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply(){return[]}}),Gi=V({title:"Du hast durchgehalten",description:`Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,
    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Ma\xDFnahmen waren zu finanzieren
    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!
  `,apply(){return[ae("gameOver")]},probability(e){return e.currentYear===2050?be.timesUp:0}}),Ui=V({title:"Wahl verloren",description:`Deine Beliebtheit in der Bev\xF6lkerung ist katastrophal, lieber w\xFCrde man Mao Zedong w\xE4hlen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du geh\xF6rst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon l\xE4nger kein vern\xFCnftiger Mensch mehr geglaubt.
  `,apply(){return[ae("gameOver")]},probability(e){return e.values.popularity<=0?be.wahlVerloren:0}}),Ki=V({title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply(){return[]},citations:[],details:s`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:s`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `}),Ji=V({title:"B\xFCrgerinitiative fordert st\xE4rkere Solarf\xF6rderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply(){return[]},probability(e,t){if(ie(e,t,{years:1,months:1}))return 0;const n=v(e,"SolarstromFoerderungAbschaffen"),r=v(e,"SolarstromFoerderungWieZuBeginn"),i=v(e,"SolarstromFoerdernx2");return n||r||i?.5:0},citations:[ct],details:s`

  `,internals:s`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${W(ct)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),ji=V({title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply(){return[ae("gameOver")]},probability(e){return e.acceptedLaws.find(n=>n.lawId==="KernenergienutzungVerlaengern")?.5:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Hi=V({title:"Staatsoberhaupt verstorben",description:"Du stirbst an der neuen BSE Variante. Tja, h\xE4ttest du dich mal besser um das Tierwohl gek\xFCmmert...",apply(){return[ae("gameOver")]},probability(e,t){return Ae(e.acceptedLaws.map(n=>n.lawId)).find(n=>n.title.match(/tierwohl/i))?0:Math.min(1,b(5,10,it(e,[t.id]).lux.as("years"))/100)},laws:[],citations:[],details:s`

  `,internals:s`
    # Voraussetzungen

    Kann passieren, wenn es 5 Jahre keine Investitionen in bessere Tierhaltung gab.
  `}),Zi=V({title:"D\xFCrreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausf\xE4lle sind enorm.",apply(){return[o("gdp").byValue(-100),o("popularity").byValue(-10)]},probability(e,t){return Math.min(1,b(400,0,e.values.co2budget)/100)},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Ri=V({title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und f\xFChrt zu einer neuen Diskussion \xFCber Lobbyismus.",apply(){return[o("popularity").byValue(-2)]},probability(e,t){return ie(e,t,{months:11})||v(e,"WirksamerCO2Preis")||v(e,"VollerCO2Preis")||v(e,"KohleverstromungEinstellen")?0:.3},laws:[],citations:[],details:s`

  `,internals:s`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `}),Yi=V({title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply(){return[o("popularity").byValue(-2)]},probability(e,t){return ie(e,t,{years:2,months:11})?0:.3},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Qi=V({title:"Klimafl\xFCchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimafl\xFCchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply(){return[o("stateDebt").byValue(10)]},probability(e,t){return e.values.co2budget<500?.2:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),qi=V({title:"Plagiatsaff\xE4re",description:"W\xE4hrend des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet W\xE4hlerstimmen.",apply(){return[o("popularity").byValue(-10)]},probability(e,t){return ie(e,t,{years:3,months:10})?0:.5},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Xi=V({title:"Debatte \xFCber CO2-Preise",description:"Eine marktliberale Kampagne ist sehr erfolgreich darin, Dich als Verbots-Kanzler hinzustellen. Aus allen Richtungen prasseln Forderungen nach einem ad\xE4quaten CO2-Preis auf Dich ein. Nur leider gehen die Vorstellungen \xFCber den genauen Preis sehr weit auseinander.",laws:["CO2PreisErhoehen","WirksamerCO2Preis","VollerCO2Preis"],apply(){return[]},probability(e,t){if(ie(e,t,{years:1,months:4}))return 0;const n=(v(e,"AutosInInnenstaedtenVerbieten")?1:0)+(v(e,"KohleverstromungEinstellen")?1:0)+(v(e,"SolarAufAllenDaechernVerpflichtend")?1:0)+(v(e,"Tempolimit130AufAutobahnen")?1:0)+(v(e,"Tempolimit120AufAutobahnen")?1:0)+(v(e,"Tempolimit100AufAutobahnen")?1:0);return b(1,3,n)/100}});const es={AbstandsregelnWindkraft:pn,Altbausanierung:Ti,Bestechung:Vi,EnergieStrategie:Oi,FinanzKollaps:Ii,Hitzehoelle:Bi,NewYear:Mi,SocialMedia:$i,TempolimitAufAutobahnen:Ni,TimesUp:Gi,WahlVerloren:Ui,WindkraftAusschreibung:Ki,SolarstromFoerderung:Ji,AtomKatastrophe:ji,BSE:Hi,Duerrewelle:Zi,PRKohleindustrie:Ri,PRInnenminister:Yi,Klimafluechtlinge:Qi,Plagiatsaffaere:qi,CO2PreisDebatte:Xi};function ts(e,t){return ie(e,t,{years:3})?0:.05}const Ce=lt(es).map(e=>G(x({},e),{probability:e.probability||ts})),Ge={id:"",currentDate:Xe,currentYear:de,values:he,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],over:!1,prngState:!0};function Ue(e=Ge,t=Xt()){const n={id:t,currentDate:e.currentDate,currentYear:e.currentYear,acceptedLaws:[...e.acceptedLaws],proposedLaws:[...e.proposedLaws],rejectedLaws:[...e.rejectedLaws],values:fe(e.values),events:[...e.events],over:e.over,prngState:e.prngState};return bn(n),n}const ns=Object.keys(Ge);function Wt(e){return Object.fromEntries(ns.map(t=>{if(t==="prngState")return[t,vn()];if(t==="values"){const n=e[t],r=_r.map(i=>[i,n[i]]);return[t,Object.fromEntries(r)]}else return[t,e[t]]}))}function Lt(e=oe,t=Ge){const n=Ue(t);return n.acceptedLaws=e.filter(r=>{var i;return(i=r.labels)==null?void 0:i.includes("initial")}).map(r=>({lawId:r.id,effectiveSince:n.currentYear})),n}const me=[...Array(et-de+1).keys()].map(e=>e+de);function rs(e,t){const n={lawId:e,effectiveSince:t.currentYear+1},r=ve(n),i=r.effort(t);t.currentDate=ue(t.currentDate).plus(i.time).toJSON();const a=r.removeLawsWithLabels,u=t.acceptedLaws.map(ve).filter(f=>!(a==null?void 0:a.some(c=>{var p;return(p=f.labels)==null?void 0:p.includes(c)}))).map(f=>({lawId:f.id,effectiveSince:f.effectiveSince}));return t.acceptedLaws=[...u,n],Ke(t)}function is(e){return e.currentDate=ue(e.currentDate).plus(gn).toJSON(),Ke(e)}function Ke(e,t=oe,n=Ce,r=st){const i=ss(e,n,r);if(i){const u={id:i.id,occuredIn:e.currentDate,acknowledged:!1};e.events.unshift(u)}const a=cs(e,t,(i==null?void 0:i.laws)?i.laws:[]);return e.proposedLaws=ds(e.proposedLaws,a),i}function ss(e,t,n){const r=as(e,t),i=os(r);if(i)return i;const a=ls(r);return us(a,n())}function as(e,t){return t.map(n=>G(x({},n),{prob:n.probability(e,n)})).filter(n=>n.prob>0)}function os(e){return e.filter(t=>t.prob>1).reduce((t,n)=>n.prob>((t==null?void 0:t.prob)||0)?n:t,void 0)}function ls(e){const t=e.map(r=>r.prob).reduce((r,i)=>r+i,0);if(t<=rt)return e;const n=rt/t;return e.map(r=>G(x({},r),{prob:r.prob*n}))}function us(e,t){for(const n of e)if(t-=n.prob,t<0)return n}function cs(e,t,n){const r=c=>{var p;return(p=e.acceptedLaws)==null?void 0:p.some(D=>D.lawId===c.id)},i=c=>{var p;return(p=e.rejectedLaws)==null?void 0:p.includes(c.id)},a=c=>{var p;return((p=c.labels)==null?void 0:p.includes("hidden"))||!1},u=c=>({law:c,priority:c.priority(e)}),f=c=>({law:c.law,priority:c.priority+(n.includes(c.law.id)?100:0)});return t.filter(Ie(r)).filter(Ie(i)).filter(Ie(a)).map(u).filter(c=>c.priority>0).map(f).sort((c,p)=>p.priority-c.priority).map(c=>c.law.id).slice(0,nt)}function ds(e,t){const n=[...e],r=t.filter(u=>n.includes(u)),i=t.filter(u=>!r.includes(u));for(var a=0;a<n.length;){if(r.includes(n[a])){a++;continue}if(i.length===0){n.splice(a,1);continue}n[a]=i.shift(),a++}return n.push(...i.slice(0,nt-n.length)),n}function hs(e,t,n){return xt(e,t,n).values}function xt(e,t,n){const r=fe(e.values),i=t.sort((u,f)=>{var c,p;return((c=u.treatAfterLabels)==null?void 0:c.some(D=>{var z;return(z=f.labels)==null?void 0:z.includes(D)}))?1:((p=f.treatAfterLabels)==null?void 0:p.some(D=>{var z;return(z=u.labels)==null?void 0:z.includes(D)}))?-1:0}).filter(u=>u.effectiveSince<=n),a=Wi(i,u=>{const f=Ar(r),c=u.effects(G(x({},e),{values:r}),u.effectiveSince,n);return Me({dispatch:()=>{},values:r},c),f},(u,f,c)=>r[c]-f[c]);return r.co2budget-=r.co2emissions,{values:r,effectsOfLaws:a}}function Tt(e){return Math.max(0,Math.min(100,e))}function fs(e){if(e.values.co2emissions===0)return 100;const n=e.values.co2budget*fe(he).co2emissions/he.co2budget/e.values.co2emissions;return Tt(n*50)}function ms(e){const t=e.values.stateDebt/he.stateDebt;return Tt(100-t*50)}const ge=[{id:"start",title:"Stell dir vor...",text:s`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du ausw\xE4hlen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die W\xE4hler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine W\xE4hler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];function gs(e,t){return{startGame(n){const r=Lt(),i=Ke(r);t.createGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i}),e.push("/games/"+r.id)},async loadGame(n,r){var i;if(((i=n.state.game)==null?void 0:i.id)!==r.gameId)try{const a=await t.loadGame(r.gameId);t.saveGame(a),e.push("/games/"+a.id),n.commit("setGameState",{game:a})}catch(a){n.dispatch("error",{error:a})}},gameOver(n){n.commit("gameOver",void 0)},acceptLaw(n,r){const i=x({},n.state.game),a=rs(r.lawId,i);t.saveGame(i),n.commit("setGameState",{game:i}),n.dispatch("applyEvent",{event:a}),t.decisionMade(i,r.lawId,!0)},rejectLaw(n,r){const i=x({},n.state.game);i.rejectedLaws=[...i.rejectedLaws,r.lawId],t.decisionMade(i,r.lawId,!1),t.saveGame(i),n.commit("setGameState",{game:i})},sitOut(n){const r=x({},n.state.game);t.decisionMade(r,"sitOut",!0);const i=is(r);t.saveGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i})},advanceYear(n){const r=x({},n.state.game),i=r.acceptedLaws.map(ve);r.currentYear++,r.values=hs(r,i,r.currentYear),t.saveGame(r),n.commit("setGameState",{game:r})},applyEvent(n,r){if(!r.event)return;const i=x({},n.state.game);t.eventOccurred(i,r.event);const a=r.event.apply(i);n.dispatch("applyEffects",{changes:a})},acknowledgeEvent(n,r){const i=x({},n.state.game);i.events.find(a=>a.id===r.id).acknowledged=!0,t.saveGame(i),n.commit("setGameState",{game:i})},applyEffects(n,r){const i={dispatch:n.dispatch,values:fe(n.state.game.values)};Me(i,r.changes);const a=G(x({},n.state.game),{values:i.values});t.saveGame(a),n.commit("setGameState",{game:a})},setupTour(n){const r=localStorage.getItem("tour")||ge[0].id,i=ge.find(a=>r===a.id);i?n.commit("setTour",{step:i.id,active:!0}):n.dispatch("stopTour")},nextTourStep(n){const r=ge.findIndex(i=>n.state.tour.step===i.id);if(r<0||r==ge.length-1)n.dispatch("stopTour");else{const i=ge[r+1];n.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(n){n.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},error(n,r){n.commit("error",r)}}}const ps={setGameState(e,t){e.game=t.game},gameOver(e){e.game=G(x({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},bs={proposedLaws(e){return!e.game||!e.game.proposedLaws?[]:Ae(e.game.proposedLaws)}},vs={game:void 0,tour:{active:!0,step:"start"}};var M=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const ws=e=>(ye("data-v-1017d1c6"),e=e(),ke(),e),ys={key:0,type:"radio"},ks=ws(()=>l("br",null,null,-1)),Ss={key:0,class:"button-bar"},Ds=I({props:{law:null,selectable:{type:Boolean},numCards:null},emits:["selected","accepted"],setup(e,{emit:t}){const n=e,r=ee(!1),i=P(()=>n.law.zIndex);function a(){t("selected")}function u(){r.value=!0}function f(c){c.animationName.match(/^twistOut-/)&&t("accepted",n.law.id)}return(c,p)=>(h(),g("div",{class:$(["Law",{accepted:r.value}]),style:Le({zIndex:F(i)}),onClick:a,onAnimationend:f},[l("label",null,[e.selectable?(h(),g("input",ys)):A("",!0),l("div",null,[l("h3",null,k(e.law.title),1),l("div",null,k(e.law.description),1),ks,l("div",null,k(e.law.effortComment),1),e.selectable?(h(),g("div",Ss,[l("button",{class:"accept",onClick:u},"\u2713")])):A("",!0)])])],38))}});var Ps=M(Ds,[["__scopeId","data-v-1017d1c6"]]);const _s=I({setup(e){const t=le(),n=ee([]),r=ee(!1),i=P(()=>t.getters.proposedLaws),a=P(()=>t.state.game),u=P(()=>(n.value.length||(n.value=ot(i.value.length,0)),a.value===void 0?[]:i.value.map((D,z)=>G(x({},D),{zIndex:n.value[z],pos:z,effortComment:D.effort(a.value).text}))));function f(D){t.dispatch("acceptLaw",{lawId:D})}function c(D){n.value=ot(i.value.length,D)}function p(){t.dispatch("sitOut")}return(D,z)=>(h(),g(J,null,[l("div",{class:$(["ProposedLaws",{poppedUp:r.value}]),onClick:z[0]||(z[0]=d=>r.value=!0)},[(h(!0),g(J,null,R(F(u),(d,m)=>(h(),Y(Ps,{key:d.id,law:d,selectable:r.value,numCards:F(u).length,onAccepted:()=>f(d.id),onSelected:()=>c(m)},null,8,["law","selectable","numCards","onAccepted","onSelected"]))),128))],2),l("div",{class:"sitOutButton",onClick:z[1]||(z[1]=()=>p())},"Aussitzen")],64))}});var zs=M(_s,[["__scopeId","data-v-4e07ada6"]]);const As=I({props:{title:null,text:null},emits:["acknowledge"],setup(e,{emit:t}){function n(){t("acknowledge")}return(r,i)=>(h(),g("div",{onClick:n},[l("h2",null,k(e.title),1),l("p",null,k(e.text),1)]))}});var Fs=M(As,[["__scopeId","data-v-63e4a4a9"]]),Cs="/assets/money-short.7ce9dbed.png",Es="/assets/money-less.184321f3.png",Ws="/assets/money-more.44dccbaa.png",Ls="/assets/money-much.d486dae1.png";const xs={class:"container"},Ts={class:"title"},Vs={class:"progress-bar"},Os=I({props:{title:null,value:null},setup(e){const t=e,n=P(()=>{const r=t.value>40?"green":t.value>20?"goldenrod":"red";return{width:t.value+"%",backgroundColor:r}});return(r,i)=>(h(),g("div",xs,[l("div",Ts,k(e.title),1),l("div",Vs,[l("div",{class:"indicator",style:Le(F(n))},null,4)])]))}});var Je=M(Os,[["__scopeId","data-v-9856b0a2"]]);const Is={id:"finances"},Bs={key:0,src:Cs,id:"short"},Ms={key:1,src:Es,id:"less"},$s={key:2,src:Ws,id:"more"},Ns={key:3,src:Ls,id:"much"},Gs=I({props:{value:null},setup(e){const t=e,n=P(()=>t.value),r=P(()=>t.value<20),i=P(()=>t.value>=20&&t.value<50),a=P(()=>t.value>=50&&t.value<80),u=P(()=>t.value>=80);return(f,c)=>(h(),g("div",Is,[B(Je,{id:"indicator",title:"Finanzen",value:F(n)},null,8,["value"]),F(r)?(h(),g("img",Bs)):A("",!0),F(i)?(h(),g("img",Ms)):A("",!0),F(a)?(h(),g("img",$s)):A("",!0),F(u)?(h(),g("img",Ns)):A("",!0)]))}});var Us=M(Gs,[["__scopeId","data-v-0b2fb0e8"]]),Ks="/assets/people-happy.acaffc0b.png",Js="/assets/people-angry.54c1d60c.png";const js={id:"popularity"},Hs={key:0,src:Ks,id:"happy"},Zs={key:1,src:Js,id:"angry"},Rs=I({props:{value:null},setup(e){const t=e,n=P(()=>t.value>=50),r=P(()=>t.value<50);return(i,a)=>(h(),g("div",js,[B(Je,{id:"indicator",title:"Beliebtheit",value:e.value},null,8,["value"]),F(n)?(h(),g("img",Hs)):A("",!0),F(r)?(h(),g("img",Zs)):A("",!0)]))}});var Ys=M(Rs,[["__scopeId","data-v-4cf2dbec"]]),Qs="/assets/plant-healthy.97772624.png",qs="/assets/plant-sick.5a0f1b46.png",Xs="/assets/plant-withered.b50106c7.png";const ea={id:"plant"},ta=["src","id"],na=I({props:{value:null},setup(e){const t=e,n={healthy:Qs,sick:qs,withered:Xs},r=P(()=>t.value>66?"healthy":t.value>33?"sick":"withered"),i=P(()=>n[r.value]);return(a,u)=>(h(),g("div",ea,[B(Je,{id:"indicator",title:"CO2-Budget",value:e.value},null,8,["value"]),l("img",{src:F(i),id:F(r)},null,8,ta)]))}});var ra=M(na,[["__scopeId","data-v-2db3389a"]]);const ia={id:"calendar"},sa=I({props:{year:null,month:null},setup(e){const t=e,n=P(()=>{const r=Math.floor((t.month-1)/4)*18+27+"%",i=(t.month-1)%4*21+12+"%";return{top:r,left:i}});return(r,i)=>(h(),g("div",ia,[U(k(e.year)+" ",1),l("span",{id:"month-indicator",style:Le(F(n))},null,4)]))}});var aa=M(sa,[["__scopeId","data-v-78901c78"]]),oa="/assets/heater.43006232.png";const la={},ua=e=>(ye("data-v-c9039a0c"),e=e(),ke(),e),ca={id:"heater"},da=ua(()=>l("img",{src:oa},null,-1)),ha=[da];function fa(e,t){return h(),g("div",ca,ha)}var ma=M(la,[["render",fa],["__scopeId","data-v-c9039a0c"]]),ga="/assets/table-top.c87bd2fd.png",Vt="/assets/table-front.78c0f8c6.png",Ot="/assets/table-side.49774a53.png";const pa={},ba={id:"table"},va=Qe('<img src="'+ga+'" id="table-top" data-v-1ef8d93c><img src="'+Vt+'" id="table-front" data-v-1ef8d93c><img src="'+Vt+'" id="table-back" data-v-1ef8d93c><img src="'+Ot+'" id="table-left-side" data-v-1ef8d93c><img src="'+Ot+'" id="table-right-side" data-v-1ef8d93c>',5),wa=[va];function ya(e,t){return h(),g("div",ba,wa)}var ka=M(pa,[["render",ya],["__scopeId","data-v-1ef8d93c"]]),Sa="/assets/board-front.41330f02.png",It="/assets/board-side.d7181ded.png",Da="/assets/tv-front.82df5c0c.png",Pa="/assets/news.c4bbc2d0.png",Bt="/assets/tvset-legs.78b387df.png";const _a=I({props:{withNews:Boolean}}),Mt=e=>(ye("data-v-118e7bdf"),e=e(),ke(),e),za={id:"tvset"},Aa=Qe('<div id="board" data-v-118e7bdf><img id="board-front" src="'+Sa+'" data-v-118e7bdf><img id="board-left" src="'+It+'" data-v-118e7bdf><img id="board-right" src="'+It+'" data-v-118e7bdf><div id="board-top" data-v-118e7bdf></div></div>',1),Fa={id:"tv"},Ca=Mt(()=>l("img",{id:"tv-front",src:Da},null,-1)),Ea={key:0,id:"news",src:Pa},Wa=Mt(()=>l("div",{id:"legs"},[l("img",{id:"legs-front",src:Bt}),l("img",{id:"legs-back",src:Bt})],-1));function La(e,t,n,r,i,a){return h(),g("div",za,[Aa,l("div",Fa,[Ca,e.withNews?(h(),g("img",Ea)):A("",!0)]),Wa])}var xa=M(_a,[["render",La],["__scopeId","data-v-118e7bdf"]]);const Ta={},Va={class:"dialog"},Oa={class:"buttons"};function Ia(e,t){return h(),g("div",Va,[xe(e.$slots,"default",{},void 0,!0),l("div",Oa,[xe(e.$slots,"buttons",{},void 0,!0)])])}var $t=M(Ta,[["render",Ia],["__scopeId","data-v-6a8bb0fa"]]);const Ba=I({setup(){const e=le();return e.dispatch("setupTour"),{store:e}},components:{Dialog:$t},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return ge.find(e=>e.id===this.$store.state.tour.step)},title(){var e;return(e=this.currentStep)==null?void 0:e.title},text(){var e;return(e=this.currentStep)==null?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var n;const t=document.querySelector(".highlighted");t&&t.classList.remove("highlighted"),e&&e.highlight&&((n=document.querySelector(`#${e.highlight}`))==null||n.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}}),Ma=["innerHTML"];function $a(e,t,n,r,i,a){const u=re("Dialog");return e.title&&e.text?(h(),Y(u,{key:0},{buttons:Se(()=>[l("button",{onClick:t[0]||(t[0]=(...f)=>e.stop&&e.stop(...f))},"Tour beenden"),l("button",{onClick:t[1]||(t[1]=(...f)=>e.next&&e.next(...f))},"Weiter")]),default:Se(()=>[l("h2",null,k(e.title),1),l("div",{innerHTML:e.text},null,8,Ma)]),_:1})):A("",!0)}var Na=M(Ba,[["render",$a]]);const Ga=I({components:{Dialog:$t},setup(){return{store:le()}},computed:{co2(){var n,r;const e=(n=this.store.state.game)==null?void 0:n.values.co2budget;return((r=this.store.state.game)==null?void 0:r.values.co2emissions)>0?e>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. H\xE4tte die AfD nicht besser hinbekommen.":e>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken k\xF6nnen. Punktlandung."},debt(){var t;return((t=this.store.state.game)==null?void 0:t.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilit\xE4tskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var t;const e=(t=this.store.state.game)==null?void 0:t.values.popularity;return e<20?"entspricht dem, was man von einem langh\xE4hrigen Diktator erwarten kann.":e<50?"ist nicht berauschend, wiedergew\xE4hlt w\xFCrdest du wohl eher nicht.":e<80?"reicht aus, dass du noch l\xE4nger am Ruder bleiben k\xF6nntest. Gratulation!":"ist v\xF6llig unglaubw\xFCrdig - war das wirklich eine freie Wahl?"}},methods:{newGame(){this.store.dispatch("startGame")}}}),Ua=l("h2",null,"Das Spiel ist leider zu Ende",-1),Ka=l("p",null,"Deine Entscheidungen haben etwas ver\xE4ndert - soviel kann man sagen.",-1),Ja=l("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),ja={class:"button-bar"};function Ha(e,t,n,r,i,a){const u=re("Dialog");return h(),Y(u,null,{default:Se(()=>[Ua,Ka,l("ul",null,[l("li",null,"Die CO2-Emmissionen "+k(e.co2),1),l("li",null,"Die Staatsfinanzen "+k(e.debt),1),l("li",null,"Deine Beliebtheit "+k(e.popularity),1)]),Ja,l("div",ja,[l("button",{onClick:t[0]||(t[0]=(...f)=>e.newGame&&e.newGame(...f))},"Neuer Versuch")])]),_:1})}var Za=M(Ga,[["render",Ha]]);const Ra={class:"game-setup"},Ya=l("h1",null,"#ich-kann-klima",-1),Qa=l("div",{id:"walls"},[l("div",{id:"wall-back"}),l("div",{id:"wall-left"}),l("div",{id:"wall-right"})],-1),qa=I({setup(e){const t=le(),n=P(()=>{const m=t.state.game;if(!m)return;const T=m.currentDate;return m.events.filter(S=>S.occuredIn===T&&!S.acknowledged)[0]}),r=P(()=>{const m=n.value;if(m!==void 0)return Ce.find(T=>T.id===m.id)}),i=P(()=>{var m;return((m=r.value)==null?void 0:m.title)||""}),a=P(()=>{var m;return((m=r.value)==null?void 0:m.description)||""}),u=P(()=>{var m;return((m=t.state.game)==null?void 0:m.currentYear)||2021}),f=P(()=>{var m;return ue((m=t.state.game)==null?void 0:m.currentDate).lux.month}),c=P(()=>{const m=t.state.game;return m?ms(m):0}),p=P(()=>{var m;return((m=t.state.game)==null?void 0:m.values.popularity)||100}),D=P(()=>{const m=t.state.game;return m?fs(m):0}),z=P(()=>{const m=t.state.game;return m?m.over:!1});function d(){t.dispatch("acknowledgeEvent",r.value)}return(m,T)=>(h(),g("div",Ra,[Ya,Qa,B(aa,{year:F(u),month:F(f)},null,8,["year","month"]),B(ma),B(Ys,{value:F(p)},null,8,["value"]),B(xa,{"with-news":!!F(n)},null,8,["with-news"]),B(ra,{value:F(D)},null,8,["value"]),B(ka),B(Us,{value:F(c)},null,8,["value"]),B(zs),F(n)?(h(),Y(Fs,{key:0,title:F(i),text:F(a),onAcknowledge:d},null,8,["title","text"])):A("",!0),B(Na),F(z)?(h(),Y(Za,{key:1})):A("",!0)]))}});const Xa=["onClick"],eo=I({setup(e){const t=le(),n=P(()=>{var u;return(u=t.state.game)==null?void 0:u.acceptedLaws}),r=ee(void 0),i=P(()=>oe.filter(u=>{var f,c;return((f=n.value)==null?void 0:f.some(p=>p.lawId===u.id))&&!((c=u.labels)==null?void 0:c.includes("hidden"))}));function a(u){r.value=r.value===u?void 0:u}return(u,f)=>(h(!0),g(J,null,R(F(i),(c,p)=>(h(),g("div",{key:p,class:$(["Law",{opened:p===r.value}]),onClick:D=>a(p)},[l("h3",null,k(c.title),1),l("div",null,k(c.description),1)],10,Xa))),128))}});var to=M(eo,[["__scopeId","data-v-7efa2df1"]]);const no=I({components:{GameSetup:qa,AcceptedLaws:to},setup(){return{store:le()}},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,n){n(r=>r.startGame(e.params.id))}});function ro(e,t,n,r,i,a){const u=re("GameSetup");return h(),Y(u)}var Nt=M(no,[["render",ro],["__scopeId","data-v-3637ce73"]]);const io=[{path:"/",redirect:"/games"},{path:"/games",component:Nt},{path:"/games/:id",component:Nt}],Gt=en({history:tn(),routes:io});function so(e){return{createGame(t){return e.add("post","/games",t)},loadGame(t){return e.add("get","/games/"+t,void 0,0)},saveGame(t){return e.remove("put","/games/"+t.id),e.add("put","/games/"+t.id,t)},decisionMade(t,n,r){return e.add("post","/games/"+t+"/decisions/"+n,{accepted:r})},eventOccurred(t,n){return e.add("post","/games/"+t+"/events/"+n)}}}function ao(e,t){let n=[],r;async function i(){if(r&&(clearTimeout(r),r=void 0),n.length){const a=n[0],{method:u,path:f,data:c,retry:p,resolve:D,reject:z}=a;try{if((t==null?void 0:t.navigator)&&!(t==null?void 0:t.navigator.onLine))throw Error("Browser is offline");const d=await e(u,f,c);n.shift(),D(d)}catch(d){p?a.retry=Math.max(-1,p-1):(n.shift(),z(d))}n.length&&(r=setTimeout(i,(t==null?void 0:t.timeout)||1e4))}}return{add(a,u,f,c=-1){return new Promise((p,D)=>{n.push({method:a,path:u,data:f,retry:c,resolve:p,reject:D}),r||i()})},remove(a,u){n=n.filter(f=>f.method.toLowerCase()!==a.toLowerCase()||f.path!==u)},callsPending(){return n.length>0}}}function oo(e,t,n=console){return async function(r,i,a){var u;try{const f={method:r};["post","put","patch"].includes(r)&&(f.body=JSON.stringify(a),f.headers={["content-type"]:"application/json"});const c=await t(e+i,f),p=((u=c.headers.get("Content-Type"))==null?void 0:u.match(/json/))?await c.json():await c.text();if(c.ok)return p;throw Error(p.message||p)}catch(f){throw n.error(f),f}}}function lo({api:e,logger:t=console,storage:n=localStorage}){return{createGame(r){const i=Wt(r);n.setItem("game",JSON.stringify(i)),e.createGame(i).catch(a=>{t.warn("Cannot save new game - trying again later",a)})},async loadGame(r){const i=n.getItem("game");if(i){const u=JSON.parse(i);if(u.id===r)return Ue(u,r)}const a=await e.loadGame(r);return Ue(a,r)},saveGame(r){const i=Wt(r);n.setItem("game",JSON.stringify(i)),e.saveGame(i).catch(a=>{t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",a)})},decisionMade(r,i,a){e.decisionMade(r.id,i,a)},eventOccurred(r,i){e.eventOccurred(r.id,i.id)}}}const uo=localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",co=oo(uo,fetch),ho=ao(co),fo=so(ho),mo=lo({api:fo}),go=gs(Gt,mo),Ut=Symbol();function le(){return nn(Ut)}const po=rn({state:vs,mutations:ps,actions:go,getters:bs});function Kt(e,t,...n){for(const r of n){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function bo(e,t,n){function r(c){return e[c].toFixed(2)}function i(c){return(c>0?"+":"")+c.toFixed(2)}function a(c){const p=n.find(D=>D.type==="modify"&&D.name===c);return p&&p.condition?p.value:0}function u(c){const p=a(c),D=t?t[c]:0;return p&&Math.abs(p-D)<.001?i(p):p?i(p)+" / "+i(D):D!=0?i(D):""}return zt.map(c=>({id:c.name,unit:c.unit,value:r(c.name),effect:u(c.name),class:c.writable?"writable":"calculated"}))}function vo(e,t,n,r){const i=e.proposedLaws,a=e.acceptedLaws.map(c=>c.lawId),u=e.rejectedLaws;function f(c){return a.includes(c)?"a":i.includes(c)?"p":u.includes(c)?"r":"x"}return r.map(c=>({id:c.id,priority:c.priority(e),state:f(c.id)})).sort((c,p)=>Kt(c,p,t,"id")*n).map(c=>G(x({},c),{priority:c.priority.toFixed(2)}))}function wo(e,t,n,r){return r.map(i=>({id:i.id,probability:i.probability(e,i)})).sort((i,a)=>Kt(i,a,t,"id")*n).map(i=>G(x({},i),{probability:(i.probability*100).toFixed(2)}))}const yo={key:0},ko=["href"],So=U(". "),Do={key:1},Po={key:2},_o=U("Bemerkung: "),zo=["innerHTML"],Ao=U(". "),Fo={key:3},Co=U("Internes: "),Eo=["innerHTML"],Wo=U(". "),Lo={key:4},xo=["href"],To=U(". "),Vo={key:5},Oo=["href"],Io=U(". "),Bo={key:6},Mo=["href"],$o=U(". "),No=I({props:{citation:null,showInternals:{type:Boolean}},setup(e){const t=e,n=P(()=>t.citation.url.toString()),r=P(()=>t.citation.title||t.citation.url.toString());return(i,a)=>(h(),g("p",null,[e.citation.authors?(h(),g("span",yo,k(e.citation.authors+e.citation.dateString())+". ",1)):A("",!0),l("a",{target:"_blank",rel:"noreferrer noopener",href:F(n)},'"'+k(F(r))+'"',9,ko),So,e.citation.publisher?(h(),g("span",Do,k(e.citation.publisher)+". ",1)):A("",!0),e.citation.comment?(h(),g("span",Po,[_o,l("span",{innerHTML:e.citation.comment},null,8,zo),Ao])):A("",!0),e.showInternals&&e.citation.internalComment?(h(),g("span",Fo,[Co,l("span",{innerHTML:e.citation.internalComment},null,8,Eo),Wo])):A("",!0),e.citation.referringUrl?(h(),g("span",Lo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,xo),To])):A("",!0),e.citation.archiveUrl?(h(),g("span",Vo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,Oo),Io])):A("",!0),e.citation.localCopy?(h(),g("span",Bo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,Mo),$o])):A("",!0)]))}}),Go=I({props:{chartData:null,paramId:null,selectedYear:null},emits:["update:selectedYear"],setup(e,{emit:t}){const n=e,r="#9c6d00",i="#ce900070",a="#644600",u=P(()=>({xaxis:{categories:me,labels:{rotate:-90}},chart:{id:n.paramId+"-withLawEffects",animations:{enabled:!1},stacked:!0},colors:[r,a,i],legend:{show:!1},markers:{size:0},dataLabels:{enabled:!1}})),f=P(()=>n.chartData.values.map((S,E)=>({value:S[n.paramId],change:n.chartData.changes[E][n.paramId]}))),c=P(()=>f.value.map(S=>{const E=S.value-S.change;return S.change*S.value>0?E*S.value>0?{value:E,gain:S.change,loss:0}:{value:0,gain:S.value,loss:E}:{value:S.value,gain:0,loss:-S.change}})),p=P(()=>[{name:"Simulated "+n.paramId,data:c.value.map(S=>Math.round(S.value))},{name:"Gains of "+n.paramId+" by selected law",data:c.value.map(S=>Math.round(S.gain))},{name:"Losses of "+n.paramId+" by selected law",data:c.value.map(S=>Math.round(S.loss))}]),D=ee();let z;function d(){var S,E;((S=D.value)==null?void 0:S.chart)!=null&&z!=null&&((E=D.value)==null||E.toggleDataPointSelection(0,z)),z=void 0}function m(S){var E,N;if(((E=D.value)==null?void 0:E.chart)!=null&&S){const Z=S-me[0];z!=Z&&(d(),z=Z,(N=D.value)==null||N.toggleDataPointSelection(0,Z))}else d()}sn(()=>m(n.selectedYear),{flush:"post"});function T(S,E,N){const Z=N.dataPointIndex;Z<0||(Z===z?(z=void 0,t("update:selectedYear",void 0)):(z=Z,t("update:selectedYear",Z+me[0])))}return(S,E)=>(h(),g("div",null,[l("div",null,k(e.paramId),1),B(F(an),{ref_key:"chart",ref:D,type:"bar",options:F(u),series:F(p),onClick:T},null,8,["options","series"])]))}}),Uo=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"DaemmungAltbau4Percent",effectiveSince:2022},{lawId:"ForschungEmissionsfreieZementproduktion",effectiveSince:2023},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024},{lawId:"ForschungEmissionsfreieStahlproduktion",effectiveSince:2024},{lawId:"FernverkehrModernisieren",effectiveSince:2025},{lawId:"NahverkehrModernisieren",effectiveSince:2026},{lawId:"FernverkehrVerbindungenAusbauen",effectiveSince:2026},{lawId:"NahverkehrAusbauen",effectiveSince:2026},{lawId:"LadeinfrastrukturAusbauen",effectiveSince:2026},{lawId:"NahverkehrKostenlos",effectiveSince:2027},{lawId:"DienstwagenPrivilegAbgeschaffen",effectiveSince:2027},{lawId:"ElektromobilitaetFoerdern",effectiveSince:2027},{lawId:"WasserstoffmobilitaetFoerdern",effectiveSince:2027}]}],Ee=(e,t)=>e.lawId===t.lawId&&e.effectiveSince===t.effectiveSince,Ko=e=>e.map((t,n)=>G(x({},t),{sortId:n}));function Jo(...e){const t=e.map(n=>n.length===0?0:n[n.length-1].sortId+1);return t.length===0?0:Math.max.apply(Math,t)}function jo(e){const t=ee([]),n=ee([]),r=ee(!1);function i(T,S){var He;const E=t.value,N={lawId:T,effectiveSince:S,sortId:0},Z=(He=n.value.find(pe=>Ee(N,pe)))==null?void 0:He.sortId;N.sortId=Z!=null?Z:Jo(E,n.value),t.value=E.filter(pe=>pe.lawId!=T).concat(N).sort((pe,jt)=>pe.sortId-jt.sortId)}function a(T){t.value=t.value.filter(S=>S.lawId!=T)}function u(T,S){const E={lawId:T,effectiveSince:S,sortId:0};t.value.some(N=>Ee(N,E))?a(T):i(T,S)}function f(T){t.value=Ko(T.laws)}function c(){r.value=!r.value,r.value?n.value=t.value:n.value=[]}const p=P(()=>{var T;return{name:"Current Game",laws:((T=e.value)==null?void 0:T.acceptedLaws)||[]}}),D=P(()=>[p.value,...Uo]),z=P(()=>{const T=t.value.map(E=>G(x({},E),{cls:n.value.some(N=>Ee(E,N))?"both":"new"})),S=n.value.filter(E=>!t.value.some(N=>Ee(N,E))).map(E=>G(x({},E),{cls:"saved"}));return[...T,...S].sort((E,N)=>E.sortId-N.sortId)}),d=Jt(t),m=Jt(n);return{addToSimulation:i,removeFromSimulation:a,toggleInSimulation:u,loadPreset:f,compareActive:r,toggleCompare:c,presets:D,simulatedLaws:z,simulation:d,secondSimulation:m}}function Jt(e){return P(()=>{const t=Lt();return t.acceptedLaws=[...e.value],me.map(r=>{for(;r>t.currentYear;){t.currentYear++,t.acceptedLaws=Ho(t.acceptedLaws,t.currentYear);const i=t.acceptedLaws.map(f=>ve(f)),{values:a,effectsOfLaws:u}=xt(t,i,t.currentYear);if(t.values=a,r===t.currentYear)return{values:a,effectsOfLaws:u}}return{values:t.values,effectsOfLaws:{}}})})}function Ho(e,t){const n=e.map(i=>ve(i)),r=n.filter(i=>i.effectiveSince===t).flatMap(i=>i.removeLawsWithLabels||[]);return n.filter(i=>i.effectiveSince>=t||!r.some(a=>{var u;return(u=i.labels)==null?void 0:u.includes(a)})).map(i=>({lawId:i.id,effectiveSince:i.effectiveSince}))}const Zo=I({directives:{clickaway:qe},setup(e,t){const n=ee(!1);return{menuIsOpen:n,toggle:()=>n.value=!n.value,close:()=>n.value=!1}}});function Ro(e,t,n,r,i,a){const u=ln("clickaway");return on((h(),g("span",{onClick:t[0]||(t[0]=(...f)=>e.toggle&&e.toggle(...f)),class:$(["menu",{menuIsOpen:e.menuIsOpen}])},[xe(e.$slots,"default",{},void 0,!0)],2)),[[u,e.close]])}var Yo=M(Zo,[["render",Ro],["__scopeId","data-v-06206e01"]]);const Qo=I({directives:{clickaway:qe},components:{Citation:No,PeekChart:Go,Menu:Yo},setup(){const e=le(),t=P(()=>e.state.game),n=jo(t);return x({store:e,game:t,gameYears:me},n)},data(){return{lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lastSelected:void 0,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,yearSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1}},methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){e===this.lawSelected?this.lawSelected=void 0:(this.lastSelected="law",this.lawSelected=e)},selectEvent(e){e===this.eventSelected?this.eventSelected=void 0:(this.lastSelected="event",this.eventSelected=e)},selectParam(e){e===this.paramSelected?this.paramSelected=void 0:(this.lastSelected="param",this.paramSelected=e)},selectYear(e){e===this.yearSelected?this.yearSelected=void 0:(this.lastSelected="year",this.yearSelected=e)},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0,this.yearSelected=void 0},dragStart(e,t){const{lawId:n,year:r}=t;!e.dataTransfer||(e.dataTransfer.dropEffect="link",n&&e.dataTransfer.setData("lawId",n),r&&e.dataTransfer.setData("year",r.toString()))},getDropped(e,t,n){if(!e.dataTransfer)return;const r=e.dataTransfer.getData(t);return n.find(i=>i==r)},onDrop(e,t){const{lawId:n,year:r}=t,i=this.getDropped(e,"lawId",Fi),a=this.getDropped(e,"year",this.gameYears);r&&i?this.addToSimulation(i,r):n&&a?this.addToSimulation(n,a):n&&i&&this.removeFromSimulation(i)},rightClick(e,t){this.toggleInSimulation(e,t)}},computed:{startYearOfSelected(){if(!this.lawSelected)return;if(!this.game)return de;const e=this.simulatedLaws.find(t=>t.lawId===this.lawSelected);return e?e.effectiveSince:this.game.currentYear},selectedLaw(){return oe.find(e=>e.id===this.lawSelected)},lawEffort(){var e;if(!!this.game)return(e=this.selectedLaw)==null?void 0:e.effort(this.game)},selectedEvent(){return Ce.find(e=>e.id===this.eventSelected)},selectedParam(){return this.paramSelected?Q[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof _?e:void 0},cParam(){const e=this.selectedParam;return e instanceof H?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},currentYear(){return this.yearSelected?this.yearSelected:this.game?this.game.currentYear:de},effectsOfSelected(){return!this.selectedLaw||!this.startYearOfSelected||!this.game?[]:this.selectedLaw.effects(this.game,this.startYearOfSelected,this.currentYear)},sortedValues(){return this.game?bo(this.simOfYear.values,this.effectsOfLawInYear,this.effectsOfSelected):[]},sortedLaws(){return this.game?vo(this.game,this.lawsSortCol,this.lawsSortDir,oe):[]},sortedEvents(){return this.game?wo(this.game,this.eventsSortCol,this.eventsSortDir,Ce):[]},effectsOfLawInYear(){if(this.lawSelected)return this.simOfYear.effectsOfLaws[this.lawSelected];if(this.yearSelected)return this.simEffectOfLaw[this.yearSelected-this.gameYears[0]]},simOfYear(){if(this.yearSelected===void 0&&this.game){const e=this.effectsOfSelected,t=this.game.values;if(this.lawSelected===void 0||e.length===0)return{values:t,effectsOfLaws:{}};const n=fe(t);Me({dispatch:()=>{},values:n},e);const i=Object.fromEntries(Dt.map(a=>[a,n[a]-t[a]]));return{values:t,effectsOfLaws:{[this.lawSelected]:i}}}else{const e=this.yearSelected?this.yearSelected-this.gameYears[0]:0;return this.simulation[e]}},simulatedValues(){return this.simulation.map(e=>e.values)},simEffectOfLaw(){if(this.lawSelected){const e=this.lawSelected;return this.simulation.map(t=>{const n=t.effectsOfLaws[e];return n||At})}return this.compareActive?this.secondSimulation.map((e,t)=>Object.fromEntries(Object.entries(e.values).map(([n,r])=>[n,this.simulation[t].values[n]-r]))):me.map(e=>At)},chartData(){return{values:this.simulatedValues,changes:this.simEffectOfLaw}},lawsInYear(){return e=>this.simulatedLaws.filter(t=>t.effectiveSince===e)}}}),X=e=>(ye("data-v-85b0da02"),e=e(),ke(),e),qo={class:"peekData"},Xo={class:"Menu"},el=U("\xA0 "),tl=U("\xA0 "),nl=U("\xA0 "),rl=U("\xA0 "),il=U("\xA0 "),sl=U("\xA0 "),al={key:1,class:"Details sidebyside"},ol={class:"Title"},ll={class:"Description"},ul={class:"SectionHead"},cl={class:"Section"},dl=X(()=>l("div",{class:"SectionHead"},"Details:",-1)),hl=["innerHTML"],fl=X(()=>l("div",{class:"SectionHead"},"Internes:",-1)),ml=["innerHTML"],gl=X(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),pl={key:2,class:"Details sidebyside"},bl={class:"Title"},vl={class:"Description"},wl=X(()=>l("div",{class:"SectionHead"},"Details:",-1)),yl=["innerHTML"],kl=X(()=>l("div",{class:"SectionHead"},"Internes:",-1)),Sl=["innerHTML"],Dl=X(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),Pl={key:3,class:"Details sidebyside"},_l={class:"Title"},zl={key:0},Al={key:1},Fl={key:2},Cl=X(()=>l("div",{class:"SectionHead"},"Details:",-1)),El=["innerHTML"],Wl=X(()=>l("div",{class:"SectionHead"},"Internes:",-1)),Ll=["innerHTML"],xl=X(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),Tl={class:"paramsHeader"},Vl=["onClick"],Ol={class:"numbercol"},Il={class:"effcol"},Bl={key:5,class:"lawList sidebyside"},Ml=["onClick","onDragstart","onDrop"],$l={class:"priocol"},Nl={key:6,class:"eventList sidebyside"},Gl=["onClick"],Ul={class:"priocol"},Kl={key:7,class:"yearList sidebyside"},Jl=X(()=>l("a",{class:"clickable"},"Presets",-1)),jl={class:"dropdown"},Hl=["onClick"],Zl=U("\xA0 "),Rl=["onClick","onDragstart","onDrop"],Yl=["onClick","onContextmenu","onDragstart","onDrop"];function Ql(e,t,n,r,i,a){var p,D,z;const u=re("PeekChart"),f=re("Citation"),c=re("Menu");return h(),g("details",qo,[l("summary",{onClick:t[0]||(t[0]=d=>e.unselect()),class:"clickable"},"Peek"),l("div",Xo,[l("a",{onClick:t[1]||(t[1]=d=>e.showCharts=!e.showCharts),class:$(["clickable",e.showCharts?"selected":""])},"Charts",2),el,l("a",{onClick:t[2]||(t[2]=d=>e.showDetails=!e.showDetails),class:$(["clickable",e.showDetails?"selected":""])},"Details",2),tl,l("a",{onClick:t[3]||(t[3]=d=>e.showParams=!e.showParams),class:$(["clickable",e.showParams?"selected":""])},"Params",2),nl,l("a",{onClick:t[4]||(t[4]=d=>e.toggleLawList()),class:$(["clickable",e.showLaws?"selected":""])},"Laws",2),rl,l("a",{onClick:t[5]||(t[5]=d=>e.toggleEventList()),class:$(["clickable",e.showEvents?"selected":""])},"Events",2),il,l("a",{onClick:t[6]||(t[6]=d=>e.showYears=!e.showYears),class:$(["clickable",e.showYears?"selected":""])},"Years",2),sl]),e.showCharts?(h(),g("div",{key:0,class:$(["Details sidebyside",{lawSelected:e.lawSelected!=null}])},[e.paramSelected?(h(),Y(u,{key:0,selectedYear:e.yearSelected,"onUpdate:selectedYear":t[7]||(t[7]=d=>e.yearSelected=d),chartData:e.chartData,paramId:e.paramSelected},null,8,["selectedYear","chartData","paramId"])):A("",!0),B(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[8]||(t[8]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"co2emissions"},null,8,["selectedYear","chartData"]),B(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[9]||(t[9]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"popularity"},null,8,["selectedYear","chartData"]),B(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[10]||(t[10]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"stateDebt"},null,8,["selectedYear","chartData"]),B(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[11]||(t[11]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"co2budget"},null,8,["selectedYear","chartData"])],2)):A("",!0),e.lastSelected==="law"&&e.selectedLaw&&e.showDetails?(h(),g("div",al,[l("div",ol,k(e.selectedLaw.title),1),l("div",ll,k(e.selectedLaw.description),1),l("div",ul,"Aufwand: "+k((p=e.lawEffort)==null?void 0:p.time.toMonthsString()),1),l("div",cl,k((D=e.lawEffort)==null?void 0:D.text),1),dl,l("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,hl),fl,l("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,ml),gl,(h(!0),g(J,null,R(e.citationsOfLaw,(d,m)=>(h(),Y(f,{class:"Section",key:m,citation:d},null,8,["citation"]))),128))])):A("",!0),e.lastSelected==="event"&&e.selectedEvent&&e.showDetails?(h(),g("div",pl,[l("div",bl,k(e.selectedEvent.title),1),l("div",vl,k(e.selectedEvent.description),1),wl,l("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,yl),kl,l("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,Sl),Dl,(h(!0),g(J,null,R((z=e.selectedEvent)==null?void 0:z.citations,(d,m)=>(h(),Y(f,{class:"Section",key:m,citation:d},null,8,["citation"]))),128))])):A("",!0),e.lastSelected==="param"&&e.selectedParam&&e.showDetails?(h(),g("div",Pl,[l("div",_l,k(e.paramSelected)+" ["+k(e.selectedParam.unit)+"]",1),e.wParam?(h(),g("div",zl,"Initial value: "+k(e.wParam.initialValue)+" "+k(e.wParam.unit),1)):A("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(h(),g("div",Al," Should initially be: "+k(e.cParam.shouldInitiallyBe)+" "+k(e.cParam.unit),1)):A("",!0),e.cParam?(h(),g("div",Fl," Calculation: "+k(e.cParam.valueGetter),1)):A("",!0),Cl,l("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,El),Wl,l("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,Ll),xl,(h(!0),g(J,null,R(e.selectedParam.citations,(d,m)=>(h(),Y(f,{class:"Section",key:m,citation:d},null,8,["citation"]))),128))])):A("",!0),e.showParams?(h(),g("div",{key:4,class:$(["paramsList sidebyside",{lawSelected:e.lawSelected!=null}])},[l("div",Tl,[l("div",null,"Start of law: "+k(e.startYearOfSelected),1),l("div",null,"Current year: "+k(e.currentYear),1)]),l("table",null,[(h(!0),g(J,null,R(e.sortedValues,d=>(h(),g("tr",{key:d.id,class:$({clickable:!0,selected:e.paramSelected===d.id,[d.class]:!0}),onClick:m=>e.selectParam(d.id)},[l("td",null,k(d.id),1),l("td",Ol,k(d.value),1),l("td",Il,k(d.effect),1),l("td",null,k(d.unit),1)],10,Vl))),128))])],2)):A("",!0),e.showLaws?(h(),g("div",Bl,[l("table",null,[l("tr",null,[l("th",{onClick:t[12]||(t[12]=d=>e.sortLaws("state")),class:"clickable"},"S"),l("th",{onClick:t[13]||(t[13]=d=>e.sortLaws("id")),class:"clickable"},"ID"),l("th",{onClick:t[14]||(t[14]=d=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(h(!0),g(J,null,R(e.sortedLaws,d=>(h(),g("tr",{key:d.id,class:$({clickable:!0,selected:e.lawSelected===d.id,[d.state]:!0}),onClick:m=>e.selectLaw(d.id),draggable:"true",onDragstart:m=>e.dragStart(m,{lawId:d.id}),onDrop:q(m=>e.onDrop(m,{lawId:d.id}),["prevent"]),onDragover:t[15]||(t[15]=q(()=>{},["prevent"])),onDragenter:t[16]||(t[16]=q(()=>{},["prevent"]))},[l("td",null,k(d.state),1),l("td",null,k(d.id),1),l("td",$l,k(d.priority),1)],42,Ml))),128))])])):A("",!0),e.showEvents?(h(),g("div",Nl,[l("table",null,[l("tr",null,[l("th",{onClick:t[17]||(t[17]=d=>e.sortEvents("id")),class:"clickable"},"ID"),l("th",{onClick:t[18]||(t[18]=d=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(h(!0),g(J,null,R(e.sortedEvents,d=>(h(),g("tr",{key:d.id,class:$({clickable:!0,selected:e.eventSelected===d.id}),onClick:m=>e.selectEvent(d.id)},[l("td",null,k(d.id),1),l("td",Ul,k(d.probability),1)],10,Gl))),128))])])):A("",!0),e.showYears?(h(),g("div",Kl,[l("div",null,[B(c,null,{default:Se(()=>[Jl,l("ul",jl,[(h(!0),g(J,null,R(e.presets,d=>(h(),g("li",{key:d.name,class:"clickable",onClick:m=>e.loadPreset(d)},k(d.name),9,Hl))),128))])]),_:1}),Zl,l("a",{class:$(["clickable",e.compareActive?"selected":""]),onClick:t[19]||(t[19]=d=>e.toggleCompare())},"Compare",2)]),l("table",null,[(h(!0),g(J,null,R(e.gameYears,d=>(h(),g(J,{key:d},[l("tr",{class:$({clickable:!0,selected:e.yearSelected===d}),onClick:m=>e.selectYear(d),draggable:"true",onDragstart:m=>e.dragStart(m,{year:d}),onDrop:q(m=>e.onDrop(m,{year:d}),["prevent"]),onDragover:t[20]||(t[20]=q(()=>{},["prevent"])),onDragenter:t[21]||(t[21]=q(()=>{},["prevent"]))},[l("th",null,k(d),1)],42,Rl),(h(!0),g(J,null,R(e.lawsInYear(d),({lawId:m,cls:T})=>(h(),g("tr",{key:m,class:$({clickable:!0,selected:e.lawSelected===m,[T]:!0}),onClick:S=>e.selectLaw(m),onContextmenu:q(S=>e.rightClick(m,d),["right","prevent"]),draggable:"true",onDragstart:S=>e.dragStart(S,{lawId:m}),onDrop:q(S=>e.onDrop(S,{year:d}),["prevent"]),onDragover:t[22]||(t[22]=q(()=>{},["prevent"])),onDragenter:t[23]||(t[23]=q(()=>{},["prevent"]))},[l("td",null,k(m),1)],42,Yl))),128))],64))),128))])])):A("",!0)])}var ql=M(Qo,[["render",Ql],["__scopeId","data-v-85b0da02"]]);const Xl=I({components:{PeekInside:ql},setup(){return{store:le(),devMode:localStorage.getItem("devMode")==="true"}},methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,n=Math.min(e/800,t/1e3),r=(t-1e3*n)/2;document.documentElement.style.setProperty("--scale",`${n}`),document.documentElement.style.setProperty("--translateX",`${r}px`)}},beforeMount(){this.updateStyle()},mounted(){window.addEventListener("resize",this.updateStyle)}}),eu={class:"perspective"},tu={class:"peek"};function nu(e,t,n,r,i,a){const u=re("router-view"),f=re("PeekInside");return h(),g(J,null,[l("div",eu,[B(u)]),l("div",tu,[e.devMode?(h(),Y(f,{key:0})):A("",!0)])],64)}var ru=M(Xl,[["render",nu]]);const je=un(ru);je.use(po,Ut);je.use(Gt);je.mount("#app");
