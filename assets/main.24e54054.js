var Ht=Object.defineProperty,Zt=Object.defineProperties;var Rt=Object.getOwnPropertyDescriptors;var Ze=Object.getOwnPropertySymbols;var Yt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable;var We=(e,t,n)=>t in e?Ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))Yt.call(t,n)&&We(e,n,t[n]);if(Ze)for(var n of Ze(t))Qt.call(t,n)&&We(e,n,t[n]);return e},N=(e,t)=>Zt(e,Rt(t));var W=(e,t,n)=>(We(e,typeof t!="symbol"?t+"":t,n),n);import{D as Re,a as we,s as Ye,b as qt,v as Xt,d as I,r as ee,c as P,o as h,e as m,f as l,g as A,t as k,n as $,h as xe,u as F,p as ye,i as ke,F as J,j as Y,k as Q,l as B,m as U,q as Qe,w as Te,x as re,y as Se,z as en,A as tn,B as nn,C as rn,E as sn,V as an,G as qe,H as on,I as ln,J as q,K as un}from"./vendor.1c73e85c.js";const cn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};cn();const dn={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};class De{constructor(t){W(this,"lux");t instanceof Re?this.lux=t.setLocale("de-DE").setZone("Europe/Berlin"):this.lux=Re.fromISO(t,{zone:"Europe/Berlin",locale:"de-DE"})}static durationBetween(t,n){return new Ve(n.lux.diff(t.lux,["months"]))}plus(t){return new De(this.lux.plus(t.lux))}getYear(){return this.lux.get("year")}toLocaleString(){return this.lux.toLocaleString(dn)}toMonthString(){return this.lux.toLocaleString({month:"long",year:"numeric"})}toJSON(){return this.lux.toJSON()}}class Ve{constructor(t){W(this,"lux");t instanceof we?this.lux=t:typeof t=="string"?this.lux=we.fromISO(t,{locale:"de-DE"}):this.lux=we.fromObject(t)}toMonthsString(){const t=this.lux.as("months");return t===1?"1 Monat":t+" Monate"}lessThan(t){return this.lux<t.lux}}function ue(e){return new De(e)}function Oe(e){return new Ve(e)}function hn(e,t){return De.durationBetween(e,t)}function fn(e){return new Ve(we.fromDurationLike({month:e}))}function mn(e,t){return e.lux<t.lux?t:e}const de=2021,Xe="2021-01-01",et=2050,tt=Oe("P3M"),gn=Oe("P3M"),nt=6,rt=.6;function O(e){return e}const be={newYear:2,timesUp:3,finanzKollaps:4,wahlVerloren:5,hitzehoelle:6};function it(e,t){const n=e.events.filter(r=>t.includes(r.id)).reduce((r,i)=>mn(r,ue(i.occuredIn)),ue(Xe));return hn(n,ue(e.currentDate))}function ie(e,t,n){return it(e,[t.id]).lessThan(Oe(n))}var pn=O({title:"Abstandsregeln f\xFCr Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erh\xF6ht wird. Das f\xFChrte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply(){return[]}});let Ie=Ye("",{state:!0}),st=()=>Math.abs(Ie());function bn(e){Ie=Ye(e.id,{state:e.prngState})}function vn(){return Ie.state()}const wn=e=>({time:tt,text:`Braucht ${tt.toMonthsString()}.`});function w(e,t="Braucht {months}."){const n=fn(e),r=t.replace(/{months}/g,n.toMonthsString());return{time:n,text:r}}function y(e){return e}var yn=y({title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bew\xE4hrt. Wir lassen sie so, wie sie sind.",effort(e){return w(3,"Wie aussitzen: {months}.")},effects(){return[]},priority(e){return st()}});const kn=new qt.exports.Converter;function at(e){return e>0?[...Array(e)].map((t,n)=>n):[]}function ot(e,t){const n=e-t-1;return[...at(t),Math.max(t,n),...at(n).reverse()]}function s(e,...t){let n=e.map((i,o)=>i+(t[o]||"")).join("").split(`
`);n[0].length===0&&n.shift();const r=n[0].match(/^(\s+)/);return r&&!n.filter(i=>i.trim()).some(i=>!i.startsWith(r[1]))&&(n=n.map(i=>i.replace(r[1],""))),kn.makeHtml(n.join(`
`))}function Be(e){return t=>!e(t)}function lt(e){return Object.entries(e).map(([t,n])=>N(x({},n),{id:t}))}function ut(e,t){const n=e.value-t.value;return r=>{const i=e.result*(r-t.value)/n,o=t.result*(r-e.value)/n;return i-o}}const Sn=new Intl.DateTimeFormat("de-DE");class C{constructor(t){W(this,"url");W(this,"title");W(this,"publisher");W(this,"authors");W(this,"date");W(this,"comment");W(this,"internalComment");W(this,"localCopy");W(this,"referringUrl");W(this,"archiveUrl");W(this,"archiveNotPossible");this.url=new URL(t.url),this.title=t.title,this.publisher=t.publisher,this.authors=t.authors,this.date=t.date?new Date(t.date):void 0,this.comment=t.comment,this.internalComment=t.internalComment,this.localCopy=t.localCopy,this.referringUrl=t.referringUrl?new URL(t.referringUrl):void 0,this.archiveUrl=t.archiveUrl?new URL(t.archiveUrl):void 0,this.archiveNotPossible=t.archiveNotPossible}dateString(){const t=this.date;return t?" ("+Sn.format(t)+")":""}toString(){const t=this.authors?this.authors+this.dateString():void 0,n=this.title?'"'+this.title+'"':void 0;return[t,n,this.url,this.publisher].filter(r=>r).join(", ")}}function L(e){const t=e.publisher||e.authors,n=t!=null?t+": ":"",r=e.title||e.url.toString(),i=e.url.toString();return`[[${n}${r}](${i})]`}const Dn=e=>e.map(t=>t.toString()).join("; "),Pn=new C({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),te=new C({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),ct=new C({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"}),dt=new C({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineral\xF6lsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),ht=new C({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile f\xFCr wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),Pe=new C({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),_n=new C({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schl\xFCsselergebnisse der Studie des Wuppertal Instituts f\xFCr Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${L(Pe)}.`});Pe.comment=s`Zusammengefasst in ${L(_n)}.`;const j=new C({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahresch\xE4tzung der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),zn=new C({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),_e=new C({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enth\xE4lt CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] f\xFCr mehrere Verkehrsmittel"}),ze=new C({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),ft=new C({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Stra\xDFeng\xFCterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),se=new C({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enth\xE4lt Personenkilometer-Jahreswerte f\xFCr mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),mt=new C({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung \xD6PNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),Me=new C({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),An=new C({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new C({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren f\xFCr Fernw\xE4rme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const gt=new C({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),Fn=new C({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),pt=new C({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle w\xE4re besser."}),Cn=new C({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bev\xF6lkerung nach Nationalit\xE4t und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),En=new C({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur f\xFCr Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),Ln=new C({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische \xC4mter des Bundes und der L\xE4nder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new C({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const bt=new C({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgem\xE4\xDF - Interview mit Prof. Stefan G\xF6ssling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""}),Wn=new C({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),vt=new C({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),xn=new C({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),wt=new C({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten f\xFCr die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class yt{constructor(t){W(this,"unit");W(this,"citations");W(this,"details");W(this,"internals");this.unit=t.unit,this.citations=t.citations?t.citations:[],this.details=t.details?t.details:"",this.internals=t.internals?t.internals:""}citationsDesc(){return Dn(this.citations)}}const Tn={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class _ extends yt{constructor(t){super(t);W(this,"writable",!0);W(this,"initialValue");W(this,"applyBounds");this.initialValue=t.initialValue,this.applyBounds=t.applyBounds||Tn[t.unit]}}class H extends yt{constructor(t){super(t);W(this,"writable",!1);W(this,"valueGetter");W(this,"shouldInitiallyBe");this.valueGetter=t.valueGetter,this.shouldInitiallyBe=t.shouldInitiallyBe}}const Vn=new _({unit:"MioTons",initialValue:6700,citations:[Pn],details:s`

  `,internals:s`

  `}),On=new _({unit:"MioTons",initialValue:186.793,citations:[j],details:s`

  `,internals:s`

  `}),In=new H({unit:"MioTons",valueGetter(e){return e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4},shouldInitiallyBe:159.696,citations:[j,ft],details:s`

  `,internals:s`
    ${L(j)}: 159.696 as MioTons

    ${L(ft)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Bn=new H({unit:"MioTons",valueGetter(e){return e.co2emissionsStreetVehicles+e.publicLocalCapacity*65/1e6+e.publicNationalCapacity*32/1e6+e.airDomesticUsage*222/1e6+1.641},citations:[_e,j],details:s`

  `,internals:s`
    ${L(_e)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${L(j)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${L(j)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${L(j)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),Mn=new H({unit:"MioTons",valueGetter(e){return e.buildingsSourceBio*0+e.buildingsSourceGas*.247+e.buildingsSourceOil*.318+e.buildingsSourceTele*.16},citations:[j,Me],details:s`

  `,internals:s`
    TODO: #91 Gibt es hier bessere Quellen?

    ${L(Me)}: 247g CO2 pro kWh Erdgas.

    ${L(Me)}: 318g CO2 pro kWh Erdöl.

    ${L(An)}: 160g CO2 pro kWh Fernwärme.

    ${L(j)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),$n=new _({unit:"MioTons",initialValue:67.936,citations:[j],details:s`

  `,internals:s`

  `}),Gn=new _({unit:"MioTons",initialValue:9.243,citations:[j],details:s`

  `,internals:s`

  `}),Nn=new H({unit:"MioTons",valueGetter(e){return e.electricityGas*.399+e.electricitySolar*.058+e.electricityWind*.005+e.electricityWater*.02+e.electricityHardCoal*.835+e.electricityBrownCoal*1.137+e.electricityBiomass*.03+e.electricityNuclear*.005},citations:[gt,j],details:s`

  `,internals:s`
    ${L(gt)}:
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
    - Diskrepanz zu ${L(Fn)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${L(j)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),Un=new H({unit:"MioTons",valueGetter(e){return e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers},details:s`

  `,internals:s`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${L(j)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

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
    ${L(_e)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),ir=new _({unit:"MioPsgrKm",initialValue:917e3,citations:[se],details:s`

  `,internals:s`

  `}),sr=new _({unit:"Percent",initialValue:.5,citations:[pt],details:s`

  `,internals:s`
    Die verschiedenen Zahlen in ${L(pt)}
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
    TODO: #78 Quelle ${L(wt)} gibt diese Zahlen nicht her.
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

    TODO: #78 Quelle ${L(wt)} gibt diese Zahlen nicht her.

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
  `}),Dr=new _({unit:"MrdEuro",initialValue:3332,citations:[Ln],details:s`

  `,internals:s`
Anfangswert ist das BIP 2020.
  `}),Pr=new _({unit:"MrdEuro",initialValue:1899,citations:[],details:s`

  `,internals:s`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),Z={co2budget:Vn,co2emissionsIndustry:On,co2emissionsStreetVehicles:In,co2emissionsMobility:Bn,co2emissionsAgriculture:$n,co2emissionsBuildings:Mn,co2emissionsOthers:Gn,co2emissionsEnergy:Nn,co2emissions:Un,electricityDemand:Kn,electricityGridQuality:Jn,electricitySolar:jn,electricityWind:Hn,electricityWindOnshoreMaxNew:Zn,electricityWindEfficiency:Rn,electricityWater:Yn,electricityBiomass:Qn,electricityNuclear:qn,electricityHardCoal:Xn,electricityBrownCoal:er,electricityCoal:tr,electricityGas:nr,carEmissionFactor:rr,carUsage:ir,carRenewablePercentage:sr,publicLocalUsage:ar,publicLocalCapacity:or,publicNationalUsage:lr,publicNationalCapacity:ur,airDomesticUsage:cr,airIntlUsage:dr,passengerTransportUsage:hr,buildingsIndustryDemand:fr,buildingsPrivateDemand:mr,buildingsDemand:gr,buildingsSourceBio:pr,buildingsSourceOil:br,buildingsSourceTele:vr,buildingsSourceGas:wr,popularity:yr,numberOfCitizens:kr,unemployment:Sr,gdp:Dr,stateDebt:Pr},kt=Object.entries(Z).filter(e=>e[1]instanceof _).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),St=Object.entries(Z).filter(e=>e[1]instanceof H).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),_r=Object.keys(kt),Dt=Object.keys(Z);class Pt extends _{constructor(t,n){super(t);W(this,"name");this.name=n}}const zr=Object.entries(kt).map(e=>new Pt(e[1],e[0]));class _t extends H{constructor(t,n){super(t);W(this,"name");this.name=n}}Object.entries(St).map(e=>new _t(e[1],e[0]));const zt=Object.entries(Z).map(e=>e[1]instanceof _?new Pt(e[1],e[0]):new _t(e[1],e[0])),he=zr.reduce((e,t)=>(e[t.name]=t.initialValue,e),{}),At=zt.reduce((e,t)=>(e[t.name]=0,e),{});function fe(e){const t=x({},e);return Object.entries(St).forEach(n=>Object.defineProperty(t,n[0],{enumerable:!0,get:()=>n[1].valueGetter(t)})),t}function Ar(e){return x({},e)}function ae(e,t){return{type:"dispatch",condition:!0,if(n){return this.condition=n,this},apply(n){this.condition&&n.dispatch(e,t)}}}function a(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(t){return this.percent=t,this},byValue(t){return this.value=t,this},setValue(t){return this.absolute=t,this},if(t){return this.condition=t,this},getOldNew(t){const n=this.name,r=t[n];if(!this.condition)return{oldVal:r,newVal:r};const i=Z[n],o=this.absolute!=null?this.absolute:r+(this.value||r*this.percent/100),u=i.applyBounds(o);return{oldVal:r,newVal:u}},getChange(t){if(!this.condition)return 0;const{oldVal:n,newVal:r}=this.getOldNew(t);return r-n},apply(t){if(t.values!=null&&this.condition){const{newVal:n}=this.getOldNew(t.values);t.values[this.name]=n}}}}function V(e,t){if(Z[e].unit!=Z[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(n){return this.percent=n,this},byValue(n){return this.value=n,this},if(n){return this.condition=n,this},getEffect(n){const r=n[this.to],i=n[this.from];if(!this.condition)return{oldTo:r,oldFrom:i,newTo:r,newFrom:i};const o=Z[this.to],u=Z[this.from],f=this.value||r*this.percent/100,c=o.applyBounds(r+f)-r,p=-u.applyBounds(i-c)+i,D=r+p,z=i-p;return{oldTo:r,newTo:D,oldFrom:i,newFrom:z}},apply(n){if(n.values!=null&&this.condition){const{newTo:r,newFrom:i}=this.getEffect(n.values);n.values[this.to]=r,n.values[this.from]=i}}}}function Ae(e,t){t.filter(n=>n.condition).forEach(n=>n.apply(e))}var Fr=y({title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effort(e){return w(11)},effects(e,t,n){const r=n-t,i=r<18?4.3/18:0,o=2.5,u=20,f=60,c=(10-r)/55,p=Math.max((u+f/2)*c,0);return[a("electricityHardCoal").setValue(0),a("electricityBrownCoal").setValue(0),a("stateDebt").byValue(-i+o),a("unemployment").byValue(p)]},priority(e){return e.values.electricityCoal/e.values.electricityDemand<=.1?0:b(1e4,0,e.values.unemployment)},citations:[],details:s`

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
  `}),Cr=y({title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effort(e){return e.values.popularity>=50?w(6,"Normal dauert das 12 Monate, aber bei Deiner Beliebtheit nur {months}."):w(12)},effects(){return[a("stateDebt").byValue(-37),a("electricityHardCoal").byPercent(-10),a("electricityBrownCoal").byPercent(-5),a("electricityWind").byValue(5),a("electricitySolar").byValue(3),a("electricityWater").byValue(.5)]},priority(e){return b(et,de,e.currentYear)}});const Ft=fe(he).electricityGas;var Er=y({title:"Kernenergienutzung verl\xE4ngern",description:"Kernkraftwerke l\xE4nger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effort(e){return w(8)},effects(){return[a("electricityNuclear").setValue(104.3),a("stateDebt").byValue(-2.5),a("popularity").byValue(-4)]},priority(e){return b(Ft,1.1*Ft,e.values.electricityGas)}}),Lr=y({title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,n){const i={2021:60.45,2022:30.21}[n]||0;return[a("electricityNuclear").setValue(i)]},priority(e){return 0}}),Wr=y({title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren f\xFCr den Ausbau des Stromnetzes",effort(e){return w(2)},effects(e,t,n){return[a("popularity").byValue(-3).if(t===n),a("electricityGridQuality").byValue(1)]},priority(e){return b(70,27,ne(e))},citations:[],details:s`

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
  `}),xr=y({title:"Netzausbau f\xF6rdern",description:"Ausbau des Stromnetzes mit Steuermitteln f\xF6rdern",effort(e){return w(3)},effects(e,t,n){return[a("popularity").byValue(-1).if(t===n),a("stateDebt").byValue(2),a("electricityGridQuality").byValue(5).if(v(e,"NetzausbauErleichtern"))]},priority(e){return b(70,27,ne(e))},citations:[],details:s`

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
  `}),Tr=y({title:"Stromspeicherung erleichtern",description:"B\xFCrokratische H\xFCrden f\xFCr den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effort(e){return w(3)},effects(e,t,n){return[a("electricityGridQuality").byValue(.2)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Vr=y({title:"Stromspeicherung f\xF6rdern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln f\xF6rdern. 2 Mrd \u20AC pro Jahr.",effort(e){return w(7)},effects(e,t,n){const r=v(e,"StromspeicherungErleichtern")?0:5,i=n>=t+r,o=v(e,"ForschungUndEntwicklungStromspeicherung",3);return[a("stateDebt").byValue(1),a("popularity").byValue(.2).if(i),a("stateDebt").byValue(1).if(i),a("electricityGridQuality").byValue(2).if(i),a("electricityGridQuality").byValue(2).if(o),a("electricityGridQuality").byValue(2).if(i&&o)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Or=y({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit verg\xFCnstigten Krediten gef\xF6rdert.",effort(e){return w(3)},effects(e,t,n){const r=.5,i=n-t>2;return[a("stateDebt").byValue(r),a("buildingsSourceBio").byPercent(-1).if(i),a("buildingsSourceOil").byPercent(-1).if(i),a("buildingsSourceTele").byPercent(-1).if(i),a("buildingsPrivateDemand").byPercent(-1).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,t)}}),Ir=y({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gef\xF6rdert.",effort(e){return w(5)},effects(e,t,n){const r=1,i=n-t>2;return[a("stateDebt").byValue(r),a("buildingsSourceBio").byPercent(-2).if(i),a("buildingsSourceOil").byPercent(-2).if(i),a("buildingsSourceTele").byPercent(-2).if(i),a("buildingsPrivateDemand").byPercent(-2).if(i),a("popularity").byValue(5).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,t)}}),Br=y({title:"D\xE4mmung von Wohngeb\xE4uden sehr stark f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungspl\xE4tze im Handwerk geschaffen durch einen Zuschuss von 500\u20AC pro Monat, damit der zu erwartende Bauboom bew\xE4ltigt werden kann.",effort(e){return w(7)},effects(e,t,n){const r=3,i=n-t,o=i>=2;return[a("stateDebt").byValue(r),a("buildingsSourceBio").byPercent(-4).if(o),a("buildingsSourceOil").byPercent(-4).if(o),a("buildingsSourceTele").byPercent(-4).if(o),a("buildingsPrivateDemand").byPercent(-4).if(o),a("popularity").byValue(10).if(i===1),a("popularity").byValue(5).if(o)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,t)},citations:[],details:s`

  `,internals:s`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `}),Mr=y({title:"D\xE4mmung von Wohngeb\xE4uden abschaffen",description:"Wir geben den B\xFCrgern die Freiheit zur\xFCck, selbst zu entscheiden, ob sie ihr Haus d\xE4mmen wollen und lassen die F\xF6rderung auslaufen",effort(e){return w(3)},effects(){return[a("stateDebt").byValue(-.5),a("buildingsSourceBio").byPercent(-.5),a("buildingsSourceOil").byPercent(-.5),a("buildingsSourceTele").byPercent(-.5),a("buildingsPrivateDemand").byPercent(-.5)]},priority(e){const t=xi(e.acceptedLaws,/^DaemmungAltbau/);if(!t||t==="DaemmungAltbauAbschaffen")return 0;const n=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,n)}}),$r=y({title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit st\xE4rker bezuschusst.",effort(e){return w(5,"Komplexe Verhandlungen mit den Bundesl\xE4ndern dauern {months}.")},effects(e,t,n){const r=e.values.publicLocalCapacity/e.values.publicLocalUsage*100,i=n-t;return[a("stateDebt").byValue(3),a("publicLocalCapacity").byPercent(1),V("publicLocalUsage","carUsage").byPercent(1).if(r>=105),a("popularity").byValue(2).if(i>=5)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return b(150,80,t)},citations:[mt],details:s`

  `,internals:s`
    # Happy Path 18

    # Folgen

    - Der Staatshaushalt wird jährlich mit 3 Mrd € mehr belastet. (${L(mt)})
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
  `}),Gr=y({title:"Nahverkehr Modernisieren",description:"Anschaffung Moderner, bequemer, emissionsfreier Fahrzeuge f\xFCr den Nahverkehr wird gef\xF6rdert.",effort(e){return w(4)},effects(e,t,n){return[a("stateDebt").byValue(3),a("publicLocalCapacity").byPercent(1),V("publicLocalUsage","carUsage").byPercent(1),a("popularity").byValue(3)]},priority(e){if(!v(e,"FernverkehrModernisieren"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,24,t)},citations:[ze],details:s`

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
  `}),Nr=y({title:"F\xF6rderung f\xFCr Tierhaltung abschaffen",description:"Subventionen f\xFCr Tierhaltung werden ersatzlos gestrichen",effort(e){return w(2)},effects(e,t,n){return[a("stateDebt").byValue(-10),a("co2emissionsAgriculture").byValue(-10).if(t===n),a("popularity").byValue(-20).if(t===n)]},priority(e){return b(1e4,0,e.values.unemployment)}}),Ur=y({title:"Nahverkehr Kostenlos",description:"Die Kosten f\xFCr den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr ben\xF6tigt werden.",effort(e){return w(7,"Die Haushaltsverhandlungen dauern {months}.")},effects(e,t,n){const r=t===n?10:1;return[a("stateDebt").byValue(10),V("publicLocalUsage","carUsage").byPercent(r),a("popularity").byValue(10).if(t===n),a("unemployment").byValue(20).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return b(90,120,t)},citations:[ze],details:s`

  `,internals:s`
    # Happy Path 19

    # Folgen

    - Der Staatshaushalt wird jährlich mit 10 Mrd € stärker belastet.
        - 13.3 Mrd € Ticketeinnahmen pro Jahr (${L(ze)})
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
  `}),Kr=y({title:"Autos in Innenst\xE4dten verbieten",description:"Die Innenst\xE4dte der gro\xDFen St\xE4dte werden zu Autofreien Zonen erkl\xE4rt und begr\xFCnt, sowie Fahrrad und Fu\xDFg\xE4ngerzonen eingerichtet.",effort(e){return w(12)},effects(e,t,n){var r=-2;return e.values.publicLocalCapacity>e.values.publicLocalUsage*1.2&&(r=-1,t+2<n&&(r=2)),[a("popularity").byValue(r),V("publicLocalUsage","carUsage").byPercent(10).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return b(90,120,t)}}),Jr=y({title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des \xF6ffentlichen Fernverkehrs wird bundesweit st\xE4rker Bezuschusst und Vorangetrieben",effort(e){return w(12)},effects(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return[a("stateDebt").byValue(6),a("publicNationalCapacity").byPercent(1),V("publicNationalUsage","carUsage").byPercent(1).if(t>=105),V("publicNationalUsage","carUsage").byPercent(.5).if(t>=105),a("popularity").byValue(2).if(t>=105)]},priority(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return b(150,80,t)},citations:[],details:s`

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
  `}),jr=y({title:"Fernverkehr Modernisieren",description:"Moderne, bequeme und weniger anf\xE4llige Z\xFCge werden f\xFCr den Fernverkehr angeschafft.",effort(e){return w(4)},effects(e,t,n){return[a("stateDebt").byValue(3),a("publicNationalCapacity").byPercent(1),V("publicNationalUsage","carUsage").byPercent(1),a("popularity").byValue(3)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,24,t)},citations:[],details:s`

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
  `}),Hr=y({title:"Wasserstofftechnologie f\xF6rdern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(1)},effects(e,t,n){const r=n<t+5,i=n>=t+5;return[a("stateDebt").byValue(2).if(r),a("carRenewablePercentage").byValue(1).if(i)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(40,90,r)},citations:[],details:s`

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
  `}),Zr=y({title:"Wasserstoffmobilit\xE4t f\xF6rdern",description:"Wasserstoffbasierte Fahrzeuge werden gef\xF6rdert.",effort(e){return w(2)},effects(e,t,n){return v(e,"WasserstofftechnologieFoerdern")?[a("stateDebt").byValue(3),a("carRenewablePercentage").byValue(1),a("popularity").byValue(1).if(t===n)]:[]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,26,t)},citations:[],details:s`

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
        Nicht schlecht! Bei der Stimmung bekommst Dus in {months}n durch.`):w(9,"Nicht beliebt! Sowas dauert {months}.")},effects(e,t,n){return[a("stateDebt").byValue(41),a("popularity").byValue(5).if(t===n),a("popularity").byValue(-3).if(t<n),V("publicLocalUsage","carUsage").byPercent(-20).if(t===n),V("publicNationalUsage","carUsage").byPercent(-20).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(60,100,r)},citations:[dt],details:"",internals:s`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${L(dt)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `}),Yr=y({title:"Ausbau von Stra\xDFen",description:"Autobahnen und Stra\xDFen werden intensiver ausgebaut.",effort(e){return w(9)},effects(e){return[a("stateDebt").byValue(5),a("popularity").byValue(.5),V("publicLocalUsage","carUsage").byPercent(-1),V("publicNationalUsage","carUsage").byPercent(-1)]},priority(e){const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(60,100,n)}}),Qr=y({title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effort(e){return w(6)},effects(e,t,n){return[a("stateDebt").byValue(-7.35),a("popularity").byValue(-1).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(10,100,r)}}),qr=y({title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen f\xFCr Dienstwagen werden abgeschafft.",effort(e){return w(6)},effects(e,t,n){return[a("stateDebt").byValue(-18),a("popularity").byValue(-1).if(t===n),V("carUsage","publicLocalUsage").byPercent(-.05)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(50,100,r)},citations:[ht,bt],details:s`

  `,internals:s`
    # Happy Path 20

    Zunächst sollte Nah- und Fernverkehr attraktiver gemacht werden.
    TODO: Folgen sollten davon abhängen, ob es attraktive Alternativen gibt.

    # Folgen

    - Steuermehreinnahmen: 18 mrd€ / Jahr (${L(ht)})
    - -0.05% Fahleistung pro Jahr (Anreiz für Auto fällt weg Gebrauchte Wagen werden teuerer).
        - ${L(bt)} sagt es gibt keine echte Schätzung dafür.
    - Entsprechend mehr Nahverkehrnutzung
    - Zufriedenheit sinkt einmalig um 1%

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 50%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `}),Xr=y({title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(3)},effects(e){const t=a("carEmissionFactor").setValue(157.9),n=t.getChange(e.values);return[a("popularity").byValue(2).if(n<0),t]},priority(e){if(v(e,"Tempolimit100AufAutobahnen")||v(e,"Tempolimit120AufAutobahnen")||v(e,"TempolimitAufAutobahnenAussitzen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),ei=y({title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(4)},effects(e){const t=a("carEmissionFactor").setValue(157.1),n=t.getChange(e.values);return[a("popularity").byValue(2).if(n<0),t]},priority(e){if(!v(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),ti=y({title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(5)},effects(e){const t=a("carEmissionFactor").setValue(154.1),n=t.getChange(e.values);return[a("popularity").byValue(-1).if(n<0),t]},priority(e){if(!v(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),ni=y({title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das k\xF6nnte zwar Strafen oder gar Zwangsma\xDFnahmen bewirken, aber das Risiko der gef\xE4hrdeten Wiederwahl ist zu gro\xDF.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(3,"Wie aussitzen: {months}.")},effects(){return[a("stateDebt").byValue(-10),a("popularity").byValue(-2)]},priority(e){if(v(e,"Tempolimit100AufAutobahnen")||v(e,"Tempolimit120AufAutobahnen")||v(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),ri=y({title:"Elektromobilit\xE4t F\xF6rdern",description:"H\xF6here Kaufpr\xE4mien, Steuerbefreiung, g\xFCnstiges Laden f\xFCr E-Autos.",effort(e){return w(2)},effects(e,t,n){return v(e,"LadeinfrastrukturAusbauen")?[a("stateDebt").byValue(5),a("carRenewablePercentage").byValue(1),a("popularity").byValue(4).if(t===n)]:[]},priority(e){if(!v(e,"LadeinfrastrukturAusbauen"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,25,t)},citations:[],details:s`

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
  `}),ii=y({title:"Ladeinfrastruktur ausbauen",description:"Ausbau der Ladeinfrastruktur wird mit Steuermitteln stark gef\xF6rdert.",effort(e){return w(4)},effects(e,t,n){return[a("stateDebt").byValue(5),a("carRenewablePercentage").byValue(1),a("popularity").byValue(2).if(t===n)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,25,t)},citations:[ze],details:s`

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
  `}),ai=y({title:"Abstandsregeln f\xFCr Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem \xFCber Abst\xE4nde zwischen den Windkraftanlagen und Wohngeb\xE4uden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(3,"Wie aussitzen: {months}.")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[a("electricityWindOnshoreMaxNew").setValue(6).if(n>=t+r)]},priority(e){return v(e,"AbstandsregelnFuerWindkraftLockern")?b(30,100,ne(e)):v(e,"AbstandsregelnFuerWindkraftVerschaerfen")?b(70,27,ne(e)):0}}),oi=y({title:"Abstandsregeln f\xFCr Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln f\xFCr Windkraftanlagen sowie Bauerlaubniss in W\xE4ldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(6,"Das schaffst Du in {months}n.")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[a("popularity").byValue(-3).if(t===n),a("electricityWindOnshoreMaxNew").setValue(30).if(n>=t+r)]},priority(e){return v(e,"AbstandsregelnFuerWindkraftWieBisher")?b(70,27,ne(e)):v(e,"AbstandsregelnFuerWindkraftAbschaffen")?b(30,100,ne(e)):0},citations:[],details:s`

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
  `}),li=y({title:"Abstandsregeln f\xFCr Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(12,"BIs werden es Dir schwer machen. {months}!")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[a("popularity").byValue(-40).if(t===n),a("electricityWindOnshoreMaxNew").setValue(1e3).if(n>=t+r)]},priority(e){return v(e,"AbstandsregelnFuerWindkraftLockern")?b(80,25,ne(e)):0}}),ui=y({title:"Abstandsregeln f\xFCr Windkraft versch\xE4rfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngeb\xE4uden im Innenbereich muss das Zehnfache der Gesamth\xF6he der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(1,"Dauert nur einen Monat.")},effects(e,t,n){return[a("popularity").byValue(5).if(t===n),a("electricityWindOnshoreMaxNew").setValue(.42)]},priority(e){return v(e,"AbstandsregelnFuerWindkraftWieBisher")?b(0,100,ne(e)):0}}),ci=y({title:"Ausschreibungsverfahren f\xFCr Windkraft wie zu Beginn",description:"Windkraft Betreiber k\xF6nnen sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstm\xF6glichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(8)},effects(e,t,n){return[...Ce(e,6.9,1.2,t)]},priority(e){return v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?b(60,100,K(e)):0}}),di=y({title:"Ausschreibungsverfahren f\xFCr Windkraft verdoppeln",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(2)},effects(e,t,n){return[a("popularity").byValue(-1).if(t===n),a("unemployment").byValue(-20).if(t===n),...Ce(e,13.8,2.4,t)]},priority(e){return v(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?b(100,50,K(e)):v(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?b(40,100,K(e)):0}}),hi=y({title:"Ausschreibungsverfahren f\xFCr Windkraft vervierfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(4)},effects(e,t,n){return[a("popularity").byValue(-2).if(t===n),a("unemployment").byValue(-100).if(t===n),...Ce(e,27.6,4.8,t)]},priority(e){return v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?b(100,50,K(e)):v(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?b(0,100,K(e)):0},citations:[],details:s`
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
  `}),fi=y({title:"Ausschreibungsverfahren f\xFCr Windkraft verachtfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(5)},effects(e,t,n){return[a("popularity").byValue(-20).if(t===n),a("unemployment").byValue(-100).if(t===n),...Ce(e,55.2,9.6,t)]},priority(e){return v(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?b(100,50,K(e)):0}}),mi=y({title:"CO2 Preis Erh\xF6hen",description:"Die Preise werden schneller erh\xF6ht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return w(6)},effects(e,t,n){const r=n>=t+2?n>=t+4?100:70:0;return[...Ge(e,r,-.5,$e({value:50,result:0},{value:0,result:-1}))]},priority(e){return v(e,"VollerCO2Preis")||v(e,"WirksamerCO2Preis")?0:50},citations:[vt],details:s`

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
  `}),gi=y({title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return w(8)},effects(e,t,n){return[...Ge(e,150,-2,$e({value:80,result:0},{value:50,result:-3}))]},priority(e){return v(e,"CO2PreisErhoehen")?50:0},citations:[vt],details:s`

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
  `}),pi=y({title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return w(10)},effects(e,t,n){return[...Ge(e,3e3,-5,$e({value:90,result:0},{value:50,result:-10}))]},priority(e){return v(e,"WirksamerCO2Preis")?50:0},citations:[Wn],details:s`

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
  `}),wi=y({title:"Solarstrom F\xF6rderung x2",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return w(4)},effects(e,t,n){return[a("popularity").byValue(10).if(t===n),a("unemployment").byValue(-31e3).if(t===n),...ce(e,"electricitySolar",10)]},priority(e){return v(e,"SolarstromFoerderungWieZuBeginn")?b(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),yi=y({title:"Solarstrom F\xF6rderung x4",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return w(3)},effects(e,t,n){return[a("popularity").byValue(20).if(t===n),a("unemployment").byValue(-89e3).if(t===n),...ce(e,"electricitySolar",20)]},priority(e){return v(e,"SolarstromFoerdernx2")?b(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:s`
    # Happy path 10

    ${L(Pe)}
  `,citations:[Pe]}),ki=y({title:"Solarstrom F\xF6rderung x8",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return w(2)},effects(e,t,n){return[a("popularity").byValue(-10).if(t===n),a("unemployment").byValue(-209e3).if(t===n),...ce(e,"electricitySolar",40)]},priority(e){return v(e,"SolarstromFoerdernx4")?b(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `}),Si=y({title:"Solar auf neuen D\xE4chern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die D\xE4cher.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return w(3)},effects(e,t,n){return[a("popularity").byValue(-3).if(t===n),...ce(e,"electricitySolar",2)]},priority(e){return v(e,"SolarstromFoerderungWieZuBeginn")?b(100,30,K(e)):0},details:s`

  `,internals:s`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `}),Di=y({title:"Forschung und Entwicklung zur Stromspeicherung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(1)},effects(e,t,n){const r=n<t+5,i=n>=t+3;return[a("stateDebt").byValue(2).if(r),a("electricityGridQuality").byValue(.2).if(i)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Pi=y({title:"Forschung zur emissionsfreien Stahlproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Stahl mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(2)},effects(e,t,n){const r=n<t+5,i=n>=t+3,o=v(e,"WasserstofftechnologieFoerdern",3)?K(e)-70:0,u=v(e,"WirksamerCO2Preis");return[a("stateDebt").byValue(2).if(r),a("co2emissionsIndustry").byValue(-2).if(i),a("co2emissionsIndustry").byValue(-2).if(u),a("co2emissionsIndustry").byValue(-o).if(o>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return b(0,80,n)},citations:[],details:s`

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
  `}),_i=y({title:"Forschung zur emissionsfreien Zementproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Zement mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(3)},effects(e,t,n){const r=n<t+5,i=n>=t+3,o=v(e,"WasserstofftechnologieFoerdern",3)?K(e)-70:0,u=v(e,"WirksamerCO2Preis");return[a("stateDebt").byValue(2).if(r),a("co2emissionsIndustry").byValue(-2).if(i),a("co2emissionsIndustry").byValue(-2).if(u),a("co2emissionsIndustry").byValue(-o).if(o>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return b(0,80,n)},citations:[],details:s`

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
  `}),zi=y({title:"Erforschung und Umsetzung dezentraler Stromerzeugung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur f\xFCr die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(1)},effects(e,t,n){const r=n<t+5,i=n>=t+1;return[a("stateDebt").byValue(2).if(r),a("electricityGridQuality").byValue(1).if(i)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Ai=y({title:"Test",description:"Unsinniges Gesetz zum Testen.",effort(e){return w(6)},effects(e,t,n){return[a("popularity").byPercent(50).if((n-t)%3!=0),a("popularity").byPercent(-50).if((n-t)%3==0),a("stateDebt").byPercent(-200).if(n===t),a("stateDebt").byPercent(50).if((n-t)%3!=0),a("stateDebt").byPercent(-50).if((n-t)%3==0),a("stateDebt").byPercent(-200).if(n===t+10)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`

  `}),Fi=y({title:"Automatische Anpassungen einiger Sektoren",description:"Mobilit\xE4t, Industrie, Geb\xE4ude und Landwirtschaft nutzen automatisch regenerative Energiequellen, sobald sie zur Verf\xFCgung stehen.",labels:["initial"],effects(e,t,n){if(K(e)<70)return[];Z.co2emissionsOthers;const r=a("co2emissionsIndustry").byPercent(-20),o=r.getChange(e.values)/-.835;return[a("carRenewablePercentage").byValue(10),a("electricityDemand").byValue(22),r,a("electricityDemand").byValue(o),V("buildingsSourceBio","buildingsSourceOil").byValue(10),V("electricityDemand","buildingsSourceOil").byValue(10),V("buildingsSourceBio","buildingsSourceTele").byValue(5),a("co2emissionsAgriculture").byValue(-10),a("co2emissionsOthers").byValue(-1)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`
    Dieses Gesetz läuft dauerhaft mit und soll kompensieren, dass es für diese Sektoren noch nicht genügend Gesetze gibt.
  `});const Ct={AllesBleibtBeimAlten:yn,InitialAtomausstieg:Lr,KohleverstromungEinstellen:Fr,EnergiemixRegeltDerMarkt:Cr,KernenergienutzungVerlaengern:Er,NetzausbauErleichtern:Wr,NetzausbauFoerdern:xr,ForschungUndEntwicklungStromspeicherung:Di,StromspeicherungErleichtern:Tr,StromspeicherungFoerdern:Vr,ForschungDezentraleStromerzeugung:zi,WindkraftVereinfachen:si,AbstandsregelnFuerWindkraftVerschaerfen:ui,AbstandsregelnFuerWindkraftWieBisher:ai,AbstandsregelnFuerWindkraftLockern:oi,AbstandsregelnFuerWindkraftAbschaffen:li,AusschreibungsverfahrenfuerWindkraftWieBisher:ci,AusschreibungsverfahrenfuerWindkraftVerdoppeln:di,AusschreibungsverfahrenfuerWindkraftVervierfachen:hi,AusschreibungsverfahrenfuerWindkraftVerachtfachen:fi,SolarstromFoerderungAbschaffen:bi,SolarstromFoerderungWieZuBeginn:vi,SolarstromFoerdernx2:wi,SolarstromFoerdernx4:yi,SolarstromFoerdernx8:ki,SolarAufAllenDaechernVerpflichtend:Si,DaemmungAltbau1Percent:Or,DaemmungAltbau2Percent:Ir,DaemmungAltbau4Percent:Br,DaemmungAltbauAbschaffen:Mr,NahverkehrKostenlos:Ur,AutosInInnenstaedtenVerbieten:Kr,WasserstofftechnologieFoerdern:Hr,WasserstoffmobilitaetFoerdern:Zr,NahverkehrAusbauen:$r,NahverkehrModernisieren:Gr,FernverkehrVerbindungenAusbauen:Jr,FernverkehrModernisieren:jr,AusbauVonStrassen:Yr,AbschaffungDerMineraloelsteuer:Rr,DieselPrivilegAbgeschaffen:Qr,DienstwagenPrivilegAbgeschaffen:qr,Tempolimit130AufAutobahnen:Xr,Tempolimit120AufAutobahnen:ei,Tempolimit100AufAutobahnen:ti,TempolimitAufAutobahnenAussitzen:ni,ElektromobilitaetFoerdern:ri,LadeinfrastrukturAusbauen:ii,FoerderungFuerTierhaltungAbschaffen:Nr,CO2PreisErhoehen:mi,WirksamerCO2Preis:gi,VollerCO2Preis:pi,ForschungEmissionsfreieStahlproduktion:Pi,ForschungEmissionsfreieZementproduktion:_i,Test:Ai,AutomatischeSektoren:Fi},Ci=Object.keys(Ct);function Ei(e){return lt(e).map(t=>N(x({},t),{effort:t.effort||wn}))}const oe=Ei(Ct);function Li(e){const t=oe.find(n=>n.id===e);if(t)return t;throw Error(`Law #${e} not found`)}function ve(e){const t=Li(e.lawId);if(t)return N(x({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function Fe(e){return e.map(t=>{const n=oe.find(r=>r.id===t);return n||console.error(`Inconsistency: Proposed law #${t} not found`),n}).filter(t=>t)}const Wi=(e,t,n)=>Object.fromEntries(e.map(r=>{const i=t(r),o=Object.fromEntries(Dt.map(u=>[u,n(r,i,u)]));return[r.id,o]}));function b(e,t,n){const r=n-e,i=t-e;if(i===0)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return r/i*100}function $e(e,t){const n=t.value-e.value,r=n/Math.abs(n),i=r*e.value;return o=>n===0||r*o<=i?e.result:ut(e,t)(o)}function v(e,t,n=0){if(!oe.map(r=>r.id).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some(r=>r.lawId===t&&r.effectiveSince<=e.currentYear+n)}function xi(e,t){const n=e.sort((r,i)=>i.effectiveSince-r.effectiveSince).find(r=>t.test(r.lawId));return n==null?void 0:n.lawId}function ne(e){const t=e.values;return t.electricityWind/t.electricityDemand*100}function K(e){return(e.values.electricityWind+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}function Ti(e,t){const n=e.values,r=Z[t].initialValue,i=n.electricityGridQuality,o=n.electricityDemand;return ut({value:50,result:r},{value:100,result:o})(i)}function ce(e,t,n){const r=e.values,i=r.electricityCoal+r.electricityGas;if(i<=0)return[];const o=r.electricityHardCoal/i,u=r.electricityBrownCoal/i,f=r.electricityGas/i;return[V(t,"electricityHardCoal").if(o>0).byValue(o*n),V(t,"electricityBrownCoal").if(u>0).byValue(u*n),a(t).if(f>0).byValue(f*n)]}function Ce(e,t,n,r){const i=v(e,"WindkraftVereinfachen")?0:5;if(e.currentYear<r+i)return[];const o=e.values,f=(Math.min(t,o.electricityWindOnshoreMaxNew)+n)*o.electricityWindEfficiency/100,c=o.electricityWind,p=Math.min(c+f,Ti(e,"electricityWind"))-c;return ce(e,"electricityWind",p)}function Ge(e,t,n,r){const i=r(K(e)),o=r(e.values.carRenewablePercentage);return[a("stateDebt").byValue((25-t)/1e3*e.values.co2emissions),a("popularity").byValue(i+o),a("co2emissionsIndustry").byPercent(n),a("co2emissionsAgriculture").byPercent(n),a("co2emissionsOthers").byPercent(n),V("electricityBrownCoal","electricityWind").byPercent(.7*n),V("electricityHardCoal","electricityWind").byPercent(.7*n),V("electricityBrownCoal","electricitySolar").byPercent(.3*n),V("electricityHardCoal","electricitySolar").byPercent(.3*n),V("buildingsSourceOil","buildingsSourceBio").byPercent(n),V("carUsage","publicNationalUsage").byPercent(.5*n),V("carUsage","publicLocalUsage").byPercent(.5*n)]}var Vi=O({title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es f\xFCr unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply(){return[]},probability(e,t){if(ie(e,t,{years:2,months:2}))return 0;const n=e.values.co2emissionsBuildings/e.values.co2emissions*100;return Math.min(1,b(15,30,n)/100)}});function Et(e){return e.find(t=>t.title.match(/subvention/i)&&t.title.match(/abbau/i))}var Oi=O({title:"Anruf von befreundetem Unternehmer",description:`Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und m\xF6chte dich in seine
    Ferienvilla auf Sardinien einladen. Er verl\xE4sst sich nat\xFCrlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,apply(e){if(e){const t=Et(Fe(e.proposedLaws));if(t)return[ae("rejectLaw",{lawId:t.id})]}return[]},probability(e,t){return ie(e,t,{years:3,months:8})?0:Et(Fe(e.proposedLaws))?.5:0}}),Ii=O({title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute \xFCber die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply(){return[]}}),Bi=O({title:"Zusammenbruch des Finanzsystems",description:`Deine Staatsfinanzen sind desastr\xF6s. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zur\xFCckahlen k\xF6nnen. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    k\xF6nntest. Das Spiel ist damit leider beendet.
  `,apply(){return[ae("gameOver")]},probability(e,t){return e.values.stateDebt>he.stateDebt*2?be.finanzKollaps:0}}),Mi=O({title:"Hitzeh\xF6lle",description:`Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen K\xFCstenregionen
  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr w\xE4chst.
  Um die verbleibdenden Teile sind erbitterte K\xE4mpfe ausgebrochen.
  `,apply(){return[ae("gameOver")]},probability(e,t){return e.values.co2budget<=0?be.hitzehoelle:0}}),$i=O({title:"Happy New Year!",description:`Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen T\xE4tigkeit aufgestellt
    und kommt zu dem nicht weiter \xFCberraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht \xFCberraschend - sieht die Sache anders und verurteilt die Regierungserkl\xE4rung als haltlos.
  `,apply(){return[ae("advanceYear")]},probability(e,t){return ue(e.currentDate).getYear()>e.currentYear?be.newYear:0}}),Gi=O({title:"Social Media Alarm!",description:`Deine Wahlkampfberaterin ruft dich v\xF6llig aufgel\xF6st an. Ob denn an den Geschichten was dran sein, die da im
    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.
    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.
  `,apply(){return[a("popularity").byPercent(-20)]}}),Ni=O({title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland m\xFCssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply(){return[]}}),Ui=O({title:"Du hast durchgehalten",description:`Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,
    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Ma\xDFnahmen waren zu finanzieren
    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!
  `,apply(){return[ae("gameOver")]},probability(e){return e.currentYear===2050?be.timesUp:0}}),Ki=O({title:"Wahl verloren",description:`Deine Beliebtheit in der Bev\xF6lkerung ist katastrophal, lieber w\xFCrde man Mao Zedong w\xE4hlen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du geh\xF6rst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon l\xE4nger kein vern\xFCnftiger Mensch mehr geglaubt.
  `,apply(){return[ae("gameOver")]},probability(e){return e.values.popularity<=0?be.wahlVerloren:0}}),Ji=O({title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply(){return[]},citations:[],details:s`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:s`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `}),ji=O({title:"B\xFCrgerinitiative fordert st\xE4rkere Solarf\xF6rderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply(){return[]},probability(e,t){if(ie(e,t,{years:1,months:1}))return 0;const n=v(e,"SolarstromFoerderungAbschaffen"),r=v(e,"SolarstromFoerderungWieZuBeginn"),i=v(e,"SolarstromFoerdernx2");return n||r||i?.5:0},citations:[ct],details:s`

  `,internals:s`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${L(ct)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),Hi=O({title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply(){return[ae("gameOver")]},probability(e){return e.acceptedLaws.find(n=>n.lawId==="KernenergienutzungVerlaengern")?.5:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Zi=O({title:"Staatsoberhaupt verstorben",description:"Du stirbst an der neuen BSE Variante. Tja, h\xE4ttest du dich mal besser um das Tierwohl gek\xFCmmert...",apply(){return[ae("gameOver")]},probability(e,t){return Fe(e.acceptedLaws.map(n=>n.lawId)).find(n=>n.title.match(/tierwohl/i))?0:Math.min(1,b(5,10,it(e,[t.id]).lux.as("years"))/100)},laws:[],citations:[],details:s`

  `,internals:s`
    # Voraussetzungen

    Kann passieren, wenn es 5 Jahre keine Investitionen in bessere Tierhaltung gab.
  `}),Ri=O({title:"D\xFCrreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausf\xE4lle sind enorm.",apply(){return[a("gdp").byValue(-100),a("popularity").byValue(-10)]},probability(e,t){return Math.min(1,b(400,0,e.values.co2budget)/100)},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Yi=O({title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und f\xFChrt zu einer neuen Diskussion \xFCber Lobbyismus.",apply(){return[a("popularity").byValue(-2)]},probability(e,t){return ie(e,t,{months:11})||v(e,"WirksamerCO2Preis")||v(e,"VollerCO2Preis")||v(e,"KohleverstromungEinstellen")?0:.3},laws:[],citations:[],details:s`

  `,internals:s`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `}),Qi=O({title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply(){return[a("popularity").byValue(-2)]},probability(e,t){return ie(e,t,{years:2,months:11})?0:.3},laws:[],citations:[],details:s`

  `,internals:s`

  `}),qi=O({title:"Klimafl\xFCchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimafl\xFCchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply(){return[a("stateDebt").byValue(10)]},probability(e,t){return e.values.co2budget<500?.2:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Xi=O({title:"Plagiatsaff\xE4re",description:"W\xE4hrend des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet W\xE4hlerstimmen.",apply(){return[a("popularity").byValue(-10)]},probability(e,t){return ie(e,t,{years:3,months:10})?0:.5},laws:[],citations:[],details:s`

  `,internals:s`

  `}),es=O({title:"Debatte \xFCber CO2-Preise",description:"Eine marktliberale Kampagne ist sehr erfolgreich darin, Dich als Verbots-Kanzler hinzustellen. Aus allen Richtungen prasseln Forderungen nach einem ad\xE4quaten CO2-Preis auf Dich ein. Nur leider gehen die Vorstellungen \xFCber den genauen Preis sehr weit auseinander.",laws:["CO2PreisErhoehen","WirksamerCO2Preis","VollerCO2Preis"],apply(){return[]},probability(e,t){if(ie(e,t,{years:1,months:4}))return 0;const n=(v(e,"AutosInInnenstaedtenVerbieten")?1:0)+(v(e,"KohleverstromungEinstellen")?1:0)+(v(e,"SolarAufAllenDaechernVerpflichtend")?1:0)+(v(e,"Tempolimit130AufAutobahnen")?1:0)+(v(e,"Tempolimit120AufAutobahnen")?1:0)+(v(e,"Tempolimit100AufAutobahnen")?1:0);return b(1,3,n)/100}});const ts={AbstandsregelnWindkraft:pn,Altbausanierung:Vi,Bestechung:Oi,EnergieStrategie:Ii,FinanzKollaps:Bi,Hitzehoelle:Mi,NewYear:$i,SocialMedia:Gi,TempolimitAufAutobahnen:Ni,TimesUp:Ui,WahlVerloren:Ki,WindkraftAusschreibung:Ji,SolarstromFoerderung:ji,AtomKatastrophe:Hi,BSE:Zi,Duerrewelle:Ri,PRKohleindustrie:Yi,PRInnenminister:Qi,Klimafluechtlinge:qi,Plagiatsaffaere:Xi,CO2PreisDebatte:es};function ns(e,t){return ie(e,t,{years:3})?0:.05}const Ee=lt(ts).map(e=>N(x({},e),{probability:e.probability||ns})),Ne={id:"",currentDate:Xe,currentYear:de,values:he,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],over:!1,prngState:!0};function Ue(e=Ne,t=Xt()){const n={id:t,currentDate:e.currentDate,currentYear:e.currentYear,acceptedLaws:[...e.acceptedLaws],proposedLaws:[...e.proposedLaws],rejectedLaws:[...e.rejectedLaws],values:fe(e.values),events:[...e.events],over:e.over,prngState:e.prngState};return bn(n),n}const rs=Object.keys(Ne);function Lt(e){return Object.fromEntries(rs.map(t=>{if(t==="prngState")return[t,vn()];if(t==="values"){const n=e[t],r=_r.map(i=>[i,n[i]]);return[t,Object.fromEntries(r)]}else return[t,e[t]]}))}function Wt(e=oe,t=Ne){const n=Ue(t);return n.acceptedLaws=e.filter(r=>{var i;return(i=r.labels)==null?void 0:i.includes("initial")}).map(r=>({lawId:r.id,effectiveSince:n.currentYear})),n}const me=[...Array(et-de+1).keys()].map(e=>e+de);function is(e,t){const n={lawId:e,effectiveSince:t.currentYear+1},r=ve(n),i=r.effort(t);t.currentDate=ue(t.currentDate).plus(i.time).toJSON();const o=r.removeLawsWithLabels,u=t.acceptedLaws.map(ve).filter(f=>!(o==null?void 0:o.some(c=>{var p;return(p=f.labels)==null?void 0:p.includes(c)}))).map(f=>({lawId:f.id,effectiveSince:f.effectiveSince}));return t.acceptedLaws=[...u,n],Ke(t)}function ss(e){return e.currentDate=ue(e.currentDate).plus(gn).toJSON(),Ke(e)}function Ke(e,t=oe,n=Ee,r=st){const i=as(e,n,r);if(i){const u={id:i.id,occuredIn:e.currentDate,acknowledged:!1};e.events.unshift(u)}const o=ds(e,t,(i==null?void 0:i.laws)?i.laws:[]);return e.proposedLaws=hs(e.proposedLaws,o),i}function as(e,t,n){const r=os(e,t),i=ls(r);if(i)return i;const o=us(r);return cs(o,n())}function os(e,t){return t.map(n=>N(x({},n),{prob:n.probability(e,n)})).filter(n=>n.prob>0)}function ls(e){return e.filter(t=>t.prob>1).reduce((t,n)=>n.prob>((t==null?void 0:t.prob)||0)?n:t,void 0)}function us(e){const t=e.map(r=>r.prob).reduce((r,i)=>r+i,0);if(t<=rt)return e;const n=rt/t;return e.map(r=>N(x({},r),{prob:r.prob*n}))}function cs(e,t){for(const n of e)if(t-=n.prob,t<0)return n}function ds(e,t,n){const r=c=>{var p;return(p=e.acceptedLaws)==null?void 0:p.some(D=>D.lawId===c.id)},i=c=>{var p;return(p=e.rejectedLaws)==null?void 0:p.includes(c.id)},o=c=>{var p;return((p=c.labels)==null?void 0:p.includes("hidden"))||!1},u=c=>({law:c,priority:c.priority(e)}),f=c=>({law:c.law,priority:c.priority+(n.includes(c.law.id)?100:0)});return t.filter(Be(r)).filter(Be(i)).filter(Be(o)).map(u).filter(c=>c.priority>0).map(f).sort((c,p)=>p.priority-c.priority).map(c=>c.law.id).slice(0,nt)}function hs(e,t){const n=[...e],r=t.filter(u=>n.includes(u)),i=t.filter(u=>!r.includes(u));for(var o=0;o<n.length;){if(r.includes(n[o])){o++;continue}if(i.length===0){n.splice(o,1);continue}n[o]=i.shift(),o++}return n.push(...i.slice(0,nt-n.length)),n}function fs(e,t,n){return xt(e,t,n).values}function xt(e,t,n){const r=fe(e.values),i=t.sort((u,f)=>{var c,p;return((c=u.treatAfterLabels)==null?void 0:c.some(D=>{var z;return(z=f.labels)==null?void 0:z.includes(D)}))?1:((p=f.treatAfterLabels)==null?void 0:p.some(D=>{var z;return(z=u.labels)==null?void 0:z.includes(D)}))?-1:0}).filter(u=>u.effectiveSince<=n),o=Wi(i,u=>{const f=Ar(r),c=u.effects(N(x({},e),{values:r}),u.effectiveSince,n);return Ae({dispatch:()=>{},values:r},c),f},(u,f,c)=>r[c]-f[c]);return r.co2budget-=r.co2emissions,{values:r,effectsOfLaws:o}}function Tt(e){return Math.max(0,Math.min(100,e))}function ms(e){if(e.values.co2emissions===0)return 100;const n=e.values.co2budget*fe(he).co2emissions/he.co2budget/e.values.co2emissions;return Tt(n*50)}function gs(e){const t=e.values.stateDebt/he.stateDebt;return Tt(100-t*50)}const ge=[{id:"start",title:"Stell dir vor...",text:s`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du ausw\xE4hlen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die W\xE4hler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine W\xE4hler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];function ps(e,t){return{startGame(n){const r=Wt(),i=Ke(r);t.createGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i}),e.push("/games/"+r.id)},async loadGame(n,r){var i;if(((i=n.state.game)==null?void 0:i.id)!==r.gameId)try{const o=await t.loadGame(r.gameId);t.saveGame(o),e.push("/games/"+o.id),n.commit("setGameState",{game:o})}catch(o){n.dispatch("error",{error:o})}},gameOver(n){n.commit("gameOver",void 0)},acceptLaw(n,r){const i=x({},n.state.game),o=is(r.lawId,i);t.saveGame(i),n.commit("setGameState",{game:i}),n.dispatch("applyEvent",{event:o}),t.decisionMade(i,r.lawId,!0)},rejectLaw(n,r){const i=x({},n.state.game);i.rejectedLaws=[...i.rejectedLaws,r.lawId],t.decisionMade(i,r.lawId,!1),t.saveGame(i),n.commit("setGameState",{game:i})},sitOut(n){const r=x({},n.state.game);t.decisionMade(r,"sitOut",!0);const i=ss(r);t.saveGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i})},advanceYear(n){const r=x({},n.state.game),i=r.acceptedLaws.map(ve);r.currentYear++,r.values=fs(r,i,r.currentYear),t.saveGame(r),n.commit("setGameState",{game:r})},applyEvent(n,r){if(!r.event)return;const i=x({},n.state.game);t.eventOccurred(i,r.event);const o=r.event.apply(i);n.dispatch("applyEffects",{changes:o})},acknowledgeEvent(n,r){const i=x({},n.state.game);i.events.find(o=>o.id===r.id).acknowledged=!0,t.saveGame(i),n.commit("setGameState",{game:i})},applyEffects(n,r){const i={dispatch:()=>{},values:fe(n.state.game.values)};Ae(i,r.changes);const o=N(x({},n.state.game),{values:i.values});t.saveGame(o),n.commit("setGameState",{game:o});const u={dispatch:n.dispatch};Ae(u,r.changes)},setupTour(n){const r=localStorage.getItem("tour")||ge[0].id,i=ge.find(o=>r===o.id);i?n.commit("setTour",{step:i.id,active:!0}):n.dispatch("stopTour")},nextTourStep(n){const r=ge.findIndex(i=>n.state.tour.step===i.id);if(r<0||r==ge.length-1)n.dispatch("stopTour");else{const i=ge[r+1];n.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(n){n.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},error(n,r){n.commit("error",r)}}}const bs={setGameState(e,t){e.game=t.game},gameOver(e){e.game=N(x({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},vs={proposedLaws(e){return!e.game||!e.game.proposedLaws?[]:Fe(e.game.proposedLaws)}},ws={game:void 0,tour:{active:!0,step:"start"}};var M=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const ys=e=>(ye("data-v-1017d1c6"),e=e(),ke(),e),ks={key:0,type:"radio"},Ss=ys(()=>l("br",null,null,-1)),Ds={key:0,class:"button-bar"},Ps=I({props:{law:null,selectable:{type:Boolean},numCards:null},emits:["selected","accepted"],setup(e,{emit:t}){const n=e,r=ee(!1),i=P(()=>n.law.zIndex);function o(){t("selected")}function u(){r.value=!0}function f(c){c.animationName.match(/^twistOut-/)&&t("accepted",n.law.id)}return(c,p)=>(h(),m("div",{class:$(["Law",{accepted:r.value}]),style:xe({zIndex:F(i)}),onClick:o,onAnimationend:f},[l("label",null,[e.selectable?(h(),m("input",ks)):A("",!0),l("div",null,[l("h3",null,k(e.law.title),1),l("div",null,k(e.law.description),1),Ss,l("div",null,k(e.law.effortComment),1),e.selectable?(h(),m("div",Ds,[l("button",{class:"accept",onClick:u},"\u2713")])):A("",!0)])])],38))}});var _s=M(Ps,[["__scopeId","data-v-1017d1c6"]]);const zs=I({setup(e){const t=le(),n=ee([]),r=ee(!1),i=P(()=>t.getters.proposedLaws),o=P(()=>t.state.game),u=P(()=>(n.value.length||(n.value=ot(i.value.length,0)),o.value===void 0?[]:i.value.map((D,z)=>N(x({},D),{zIndex:n.value[z],pos:z,effortComment:D.effort(o.value).text}))));function f(D){t.dispatch("acceptLaw",{lawId:D})}function c(D){n.value=ot(i.value.length,D)}function p(){t.dispatch("sitOut")}return(D,z)=>(h(),m(J,null,[l("div",{class:$(["ProposedLaws",{poppedUp:r.value}]),onClick:z[0]||(z[0]=d=>r.value=!r.value)},[(h(!0),m(J,null,Y(F(u),(d,g)=>(h(),Q(_s,{key:d.id,law:d,selectable:r.value,numCards:F(u).length,onAccepted:()=>f(d.id),onSelected:()=>c(g)},null,8,["law","selectable","numCards","onAccepted","onSelected"]))),128))],2),r.value?(h(),m("div",{key:0,class:"sitOutButton",onClick:z[1]||(z[1]=()=>p())},"Aussitzen")):A("",!0)],64))}});var As=M(zs,[["__scopeId","data-v-3b60a6d1"]]);const Fs=I({props:{title:null,text:null},emits:["acknowledge"],setup(e,{emit:t}){function n(){t("acknowledge")}return(r,i)=>(h(),m("div",{onClick:n},[l("h2",null,k(e.title),1),l("p",null,k(e.text),1)]))}});var Cs=M(Fs,[["__scopeId","data-v-63e4a4a9"]]),Es="/assets/money-short.7ce9dbed.png",Ls="/assets/money-less.184321f3.png",Ws="/assets/money-more.44dccbaa.png",xs="/assets/money-much.d486dae1.png";const Ts={class:"container"},Vs={class:"title"},Os={class:"progress-bar"},Is=I({props:{title:null,value:null},setup(e){const t=e,n=P(()=>{const r=t.value>40?"green":t.value>20?"goldenrod":"red";return{width:t.value+"%",backgroundColor:r}});return(r,i)=>(h(),m("div",Ts,[l("div",Vs,k(e.title),1),l("div",Os,[l("div",{class:"indicator",style:xe(F(n))},null,4)])]))}});var Je=M(Is,[["__scopeId","data-v-9856b0a2"]]);const Bs={id:"finances"},Ms={key:0,src:Es,id:"short"},$s={key:1,src:Ls,id:"less"},Gs={key:2,src:Ws,id:"more"},Ns={key:3,src:xs,id:"much"},Us=I({props:{value:null},setup(e){const t=e,n=P(()=>t.value),r=P(()=>t.value<20),i=P(()=>t.value>=20&&t.value<50),o=P(()=>t.value>=50&&t.value<80),u=P(()=>t.value>=80);return(f,c)=>(h(),m("div",Bs,[B(Je,{id:"indicator",title:"Finanzen",value:F(n)},null,8,["value"]),F(r)?(h(),m("img",Ms)):A("",!0),F(i)?(h(),m("img",$s)):A("",!0),F(o)?(h(),m("img",Gs)):A("",!0),F(u)?(h(),m("img",Ns)):A("",!0)]))}});var Ks=M(Us,[["__scopeId","data-v-0b2fb0e8"]]),Js="/assets/people-happy.acaffc0b.png",js="/assets/people-angry.54c1d60c.png";const Hs={id:"popularity"},Zs={key:0,src:Js,id:"happy"},Rs={key:1,src:js,id:"angry"},Ys=I({props:{value:null},setup(e){const t=e,n=P(()=>t.value>=50),r=P(()=>t.value<50);return(i,o)=>(h(),m("div",Hs,[B(Je,{id:"indicator",title:"Beliebtheit",value:e.value},null,8,["value"]),F(n)?(h(),m("img",Zs)):A("",!0),F(r)?(h(),m("img",Rs)):A("",!0)]))}});var Qs=M(Ys,[["__scopeId","data-v-4cf2dbec"]]),qs="/assets/plant-healthy.97772624.png",Xs="/assets/plant-sick.5a0f1b46.png",ea="/assets/plant-withered.b50106c7.png";const ta={id:"plant"},na=["src","id"],ra=I({props:{value:null},setup(e){const t=e,n={healthy:qs,sick:Xs,withered:ea},r=P(()=>t.value>66?"healthy":t.value>33?"sick":"withered"),i=P(()=>n[r.value]);return(o,u)=>(h(),m("div",ta,[B(Je,{id:"indicator",title:"CO2-Budget",value:e.value},null,8,["value"]),l("img",{src:F(i),id:F(r)},null,8,na)]))}});var ia=M(ra,[["__scopeId","data-v-2db3389a"]]);const sa={id:"calendar"},aa=I({props:{year:null,month:null},setup(e){const t=e,n=P(()=>{const r=Math.floor((t.month-1)/4)*18+27+"%",i=(t.month-1)%4*21+12+"%";return{top:r,left:i}});return(r,i)=>(h(),m("div",sa,[U(k(e.year)+" ",1),l("span",{id:"month-indicator",style:xe(F(n))},null,4)]))}});var oa=M(aa,[["__scopeId","data-v-78901c78"]]),la="/assets/heater.43006232.png";const ua={},ca=e=>(ye("data-v-c9039a0c"),e=e(),ke(),e),da={id:"heater"},ha=ca(()=>l("img",{src:la},null,-1)),fa=[ha];function ma(e,t){return h(),m("div",da,fa)}var ga=M(ua,[["render",ma],["__scopeId","data-v-c9039a0c"]]),pa="/assets/table-top.c87bd2fd.png",Vt="/assets/table-front.78c0f8c6.png",Ot="/assets/table-side.49774a53.png";const ba={},va={id:"table"},wa=Qe('<img src="'+pa+'" id="table-top" data-v-1ef8d93c><img src="'+Vt+'" id="table-front" data-v-1ef8d93c><img src="'+Vt+'" id="table-back" data-v-1ef8d93c><img src="'+Ot+'" id="table-left-side" data-v-1ef8d93c><img src="'+Ot+'" id="table-right-side" data-v-1ef8d93c>',5),ya=[wa];function ka(e,t){return h(),m("div",va,ya)}var Sa=M(ba,[["render",ka],["__scopeId","data-v-1ef8d93c"]]),Da="/assets/board-front.41330f02.png",It="/assets/board-side.d7181ded.png",Pa="/assets/tv-front.82df5c0c.png",_a="/assets/news.c4bbc2d0.png",Bt="/assets/tvset-legs.78b387df.png";const za=I({props:{withNews:Boolean}}),Mt=e=>(ye("data-v-118e7bdf"),e=e(),ke(),e),Aa={id:"tvset"},Fa=Qe('<div id="board" data-v-118e7bdf><img id="board-front" src="'+Da+'" data-v-118e7bdf><img id="board-left" src="'+It+'" data-v-118e7bdf><img id="board-right" src="'+It+'" data-v-118e7bdf><div id="board-top" data-v-118e7bdf></div></div>',1),Ca={id:"tv"},Ea=Mt(()=>l("img",{id:"tv-front",src:Pa},null,-1)),La={key:0,id:"news",src:_a},Wa=Mt(()=>l("div",{id:"legs"},[l("img",{id:"legs-front",src:Bt}),l("img",{id:"legs-back",src:Bt})],-1));function xa(e,t,n,r,i,o){return h(),m("div",Aa,[Fa,l("div",Ca,[Ea,e.withNews?(h(),m("img",La)):A("",!0)]),Wa])}var Ta=M(za,[["render",xa],["__scopeId","data-v-118e7bdf"]]);const Va={},Oa={class:"dialog"},Ia={class:"buttons"};function Ba(e,t){return h(),m("div",Oa,[Te(e.$slots,"default",{},void 0,!0),l("div",Ia,[Te(e.$slots,"buttons",{},void 0,!0)])])}var $t=M(Va,[["render",Ba],["__scopeId","data-v-6a8bb0fa"]]);const Ma=I({setup(){const e=le();return e.dispatch("setupTour"),{store:e}},components:{Dialog:$t},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return ge.find(e=>e.id===this.$store.state.tour.step)},title(){var e;return(e=this.currentStep)==null?void 0:e.title},text(){var e;return(e=this.currentStep)==null?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var n;const t=document.querySelector(".highlighted");t&&t.classList.remove("highlighted"),e&&e.highlight&&((n=document.querySelector(`#${e.highlight}`))==null||n.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}}),$a=["innerHTML"];function Ga(e,t,n,r,i,o){const u=re("Dialog");return e.title&&e.text?(h(),Q(u,{key:0},{buttons:Se(()=>[l("button",{onClick:t[0]||(t[0]=(...f)=>e.stop&&e.stop(...f))},"Tour beenden"),l("button",{onClick:t[1]||(t[1]=(...f)=>e.next&&e.next(...f))},"Weiter")]),default:Se(()=>[l("h2",null,k(e.title),1),l("div",{innerHTML:e.text},null,8,$a)]),_:1})):A("",!0)}var Na=M(Ma,[["render",Ga]]);const Ua=I({components:{Dialog:$t},setup(){return{store:le()}},computed:{co2(){var n,r;const e=(n=this.store.state.game)==null?void 0:n.values.co2budget;return((r=this.store.state.game)==null?void 0:r.values.co2emissions)>0?e>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. H\xE4tte die AfD nicht besser hinbekommen.":e>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken k\xF6nnen. Punktlandung."},debt(){var t;return((t=this.store.state.game)==null?void 0:t.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilit\xE4tskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var t;const e=(t=this.store.state.game)==null?void 0:t.values.popularity;return e<20?"entspricht dem, was man von einem langh\xE4hrigen Diktator erwarten kann.":e<50?"ist nicht berauschend, wiedergew\xE4hlt w\xFCrdest du wohl eher nicht.":e<80?"reicht aus, dass du noch l\xE4nger am Ruder bleiben k\xF6nntest. Gratulation!":"ist v\xF6llig unglaubw\xFCrdig - war das wirklich eine freie Wahl?"}},methods:{newGame(){this.store.dispatch("startGame")}}}),Ka=l("h2",null,"Das Spiel ist leider zu Ende",-1),Ja=l("p",null,"Deine Entscheidungen haben etwas ver\xE4ndert - soviel kann man sagen.",-1),ja=l("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Ha={class:"button-bar"};function Za(e,t,n,r,i,o){const u=re("Dialog");return h(),Q(u,null,{default:Se(()=>[Ka,Ja,l("ul",null,[l("li",null,"Die CO2-Emmissionen "+k(e.co2),1),l("li",null,"Die Staatsfinanzen "+k(e.debt),1),l("li",null,"Deine Beliebtheit "+k(e.popularity),1)]),ja,l("div",Ha,[l("button",{onClick:t[0]||(t[0]=(...f)=>e.newGame&&e.newGame(...f))},"Neuer Versuch")])]),_:1})}var Ra=M(Ua,[["render",Za]]);const Ya={class:"game-setup"},Qa=l("h1",null,"#ich-kann-klima",-1),qa=l("div",{id:"walls"},[l("div",{id:"wall-back"}),l("div",{id:"wall-left"}),l("div",{id:"wall-right"})],-1),Xa=I({setup(e){const t=le(),n=P(()=>{const g=t.state.game;if(!g)return;const T=g.currentDate;return g.events.filter(S=>S.occuredIn===T&&!S.acknowledged)[0]}),r=P(()=>{const g=n.value;if(g!==void 0)return Ee.find(T=>T.id===g.id)}),i=P(()=>{var g;return((g=r.value)==null?void 0:g.title)||""}),o=P(()=>{var g;return((g=r.value)==null?void 0:g.description)||""}),u=P(()=>{var g;return((g=t.state.game)==null?void 0:g.currentYear)||2021}),f=P(()=>{var g;return ue((g=t.state.game)==null?void 0:g.currentDate).lux.month}),c=P(()=>{const g=t.state.game;return g?gs(g):0}),p=P(()=>{var g;return((g=t.state.game)==null?void 0:g.values.popularity)||100}),D=P(()=>{const g=t.state.game;return g?ms(g):0}),z=P(()=>{const g=t.state.game;return g?g.over:!1});function d(){t.dispatch("acknowledgeEvent",r.value)}return(g,T)=>(h(),m("div",Ya,[Qa,qa,B(oa,{year:F(u),month:F(f)},null,8,["year","month"]),B(ga),B(Qs,{value:F(p)},null,8,["value"]),B(Ta,{"with-news":!!F(n)},null,8,["with-news"]),B(ia,{value:F(D)},null,8,["value"]),B(Sa),B(Ks,{value:F(c)},null,8,["value"]),B(As),F(n)?(h(),Q(Cs,{key:0,title:F(i),text:F(o),onAcknowledge:d},null,8,["title","text"])):A("",!0),B(Na),F(z)?(h(),Q(Ra,{key:1})):A("",!0)]))}});const eo=["onClick"],to=I({setup(e){const t=le(),n=P(()=>{var u;return(u=t.state.game)==null?void 0:u.acceptedLaws}),r=ee(void 0),i=P(()=>oe.filter(u=>{var f,c;return((f=n.value)==null?void 0:f.some(p=>p.lawId===u.id))&&!((c=u.labels)==null?void 0:c.includes("hidden"))}));function o(u){r.value=r.value===u?void 0:u}return(u,f)=>(h(!0),m(J,null,Y(F(i),(c,p)=>(h(),m("div",{key:p,class:$(["Law",{opened:p===r.value}]),onClick:D=>o(p)},[l("h3",null,k(c.title),1),l("div",null,k(c.description),1)],10,eo))),128))}});var no=M(to,[["__scopeId","data-v-7efa2df1"]]);const ro=I({components:{GameSetup:Xa,AcceptedLaws:no},setup(){return{store:le()}},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,n){n(r=>r.startGame(e.params.id))}});function io(e,t,n,r,i,o){const u=re("GameSetup");return h(),Q(u)}var Gt=M(ro,[["render",io],["__scopeId","data-v-3637ce73"]]);const so=[{path:"/",redirect:"/games"},{path:"/games",component:Gt},{path:"/games/:id",component:Gt}],Nt=en({history:tn(),routes:so});function ao(e){return{createGame(t){return e.add("post","/games",t)},loadGame(t){return e.add("get","/games/"+t,void 0,0)},saveGame(t){return e.remove("put","/games/"+t.id),e.add("put","/games/"+t.id,t)},decisionMade(t,n,r){return e.add("post","/games/"+t+"/decisions/"+n,{accepted:r})},eventOccurred(t,n){return e.add("post","/games/"+t+"/events/"+n)}}}function oo(e,t){let n=[],r;async function i(){if(r&&(clearTimeout(r),r=void 0),n.length){const o=n[0],{method:u,path:f,data:c,retry:p,resolve:D,reject:z}=o;try{if((t==null?void 0:t.navigator)&&!(t==null?void 0:t.navigator.onLine))throw Error("Browser is offline");const d=await e(u,f,c);n.shift(),D(d)}catch(d){p?o.retry=Math.max(-1,p-1):(n.shift(),z(d))}n.length&&(r=setTimeout(i,(t==null?void 0:t.timeout)||1e4))}}return{add(o,u,f,c=-1){return new Promise((p,D)=>{n.push({method:o,path:u,data:f,retry:c,resolve:p,reject:D}),r||i()})},remove(o,u){n=n.filter(f=>f.method.toLowerCase()!==o.toLowerCase()||f.path!==u)},callsPending(){return n.length>0}}}function lo(e,t,n=console){return async function(r,i,o){var u;try{const f={method:r};["post","put","patch"].includes(r)&&(f.body=JSON.stringify(o),f.headers={["content-type"]:"application/json"});const c=await t(e+i,f),p=((u=c.headers.get("Content-Type"))==null?void 0:u.match(/json/))?await c.json():await c.text();if(c.ok)return p;throw Error(p.message||p)}catch(f){throw n.error(f),f}}}function uo({api:e,logger:t=console,storage:n=localStorage}){return{createGame(r){const i=Lt(r);n.setItem("game",JSON.stringify(i)),e.createGame(i).catch(o=>{t.warn("Cannot save new game - trying again later",o)})},async loadGame(r){const i=n.getItem("game");if(i){const u=JSON.parse(i);if(u.id===r)return Ue(u,r)}const o=await e.loadGame(r);return Ue(o,r)},saveGame(r){const i=Lt(r);n.setItem("game",JSON.stringify(i)),e.saveGame(i).catch(o=>{t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",o)})},decisionMade(r,i,o){e.decisionMade(r.id,i,o)},eventOccurred(r,i){e.eventOccurred(r.id,i.id)}}}const co=localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",ho=lo(co,fetch),fo=oo(ho),mo=ao(fo),go=uo({api:mo}),po=ps(Nt,go),Ut=Symbol();function le(){return nn(Ut)}const bo=rn({state:ws,mutations:bs,actions:po,getters:vs});function Kt(e,t,...n){for(const r of n){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function vo(e,t,n){function r(c){return e[c].toFixed(2)}function i(c){return(c>0?"+":"")+c.toFixed(2)}function o(c){const p=n.find(D=>D.type==="modify"&&D.name===c);return p&&p.condition?p.value:0}function u(c){const p=o(c),D=t?t[c]:0;return p&&Math.abs(p-D)<.001?i(p):p?i(p)+" / "+i(D):D!=0?i(D):""}return zt.map(c=>({id:c.name,unit:c.unit,value:r(c.name),effect:u(c.name),class:c.writable?"writable":"calculated"}))}function wo(e,t,n,r){const i=e.proposedLaws,o=e.acceptedLaws.map(c=>c.lawId),u=e.rejectedLaws;function f(c){return o.includes(c)?"a":i.includes(c)?"p":u.includes(c)?"r":"x"}return r.map(c=>({id:c.id,priority:c.priority(e),state:f(c.id)})).sort((c,p)=>Kt(c,p,t,"id")*n).map(c=>N(x({},c),{priority:c.priority.toFixed(2)}))}function yo(e,t,n,r){return r.map(i=>({id:i.id,probability:i.probability(e,i)})).sort((i,o)=>Kt(i,o,t,"id")*n).map(i=>N(x({},i),{probability:(i.probability*100).toFixed(2)}))}const ko={key:0},So=["href"],Do=U(". "),Po={key:1},_o={key:2},zo=U("Bemerkung: "),Ao=["innerHTML"],Fo=U(". "),Co={key:3},Eo=U("Internes: "),Lo=["innerHTML"],Wo=U(". "),xo={key:4},To=["href"],Vo=U(". "),Oo={key:5},Io=["href"],Bo=U(". "),Mo={key:6},$o=["href"],Go=U(". "),No=I({props:{citation:null,showInternals:{type:Boolean}},setup(e){const t=e,n=P(()=>t.citation.url.toString()),r=P(()=>t.citation.title||t.citation.url.toString());return(i,o)=>(h(),m("p",null,[e.citation.authors?(h(),m("span",ko,k(e.citation.authors+e.citation.dateString())+". ",1)):A("",!0),l("a",{target:"_blank",rel:"noreferrer noopener",href:F(n)},'"'+k(F(r))+'"',9,So),Do,e.citation.publisher?(h(),m("span",Po,k(e.citation.publisher)+". ",1)):A("",!0),e.citation.comment?(h(),m("span",_o,[zo,l("span",{innerHTML:e.citation.comment},null,8,Ao),Fo])):A("",!0),e.showInternals&&e.citation.internalComment?(h(),m("span",Co,[Eo,l("span",{innerHTML:e.citation.internalComment},null,8,Lo),Wo])):A("",!0),e.citation.referringUrl?(h(),m("span",xo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,To),Vo])):A("",!0),e.citation.archiveUrl?(h(),m("span",Oo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,Io),Bo])):A("",!0),e.citation.localCopy?(h(),m("span",Mo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,$o),Go])):A("",!0)]))}}),Uo=I({props:{chartData:null,paramId:null,selectedYear:null},emits:["update:selectedYear"],setup(e,{emit:t}){const n=e,r="#9c6d00",i="#ce900070",o="#644600",u=P(()=>({xaxis:{categories:me,labels:{rotate:-90}},chart:{id:n.paramId+"-withLawEffects",animations:{enabled:!1},stacked:!0},colors:[r,o,i],legend:{show:!1},markers:{size:0},dataLabels:{enabled:!1}})),f=P(()=>n.chartData.values.map((S,E)=>({value:S[n.paramId],change:n.chartData.changes[E][n.paramId]}))),c=P(()=>f.value.map(S=>{const E=S.value-S.change;return S.change*S.value>0?E*S.value>0?{value:E,gain:S.change,loss:0}:{value:0,gain:S.value,loss:E}:{value:S.value,gain:0,loss:-S.change}})),p=P(()=>[{name:"Simulated "+n.paramId,data:c.value.map(S=>Math.round(S.value))},{name:"Gains of "+n.paramId+" by selected law",data:c.value.map(S=>Math.round(S.gain))},{name:"Losses of "+n.paramId+" by selected law",data:c.value.map(S=>Math.round(S.loss))}]),D=ee();let z;function d(){var S,E;((S=D.value)==null?void 0:S.chart)!=null&&z!=null&&((E=D.value)==null||E.toggleDataPointSelection(0,z)),z=void 0}function g(S){var E,G;if(((E=D.value)==null?void 0:E.chart)!=null&&S){const R=S-me[0];z!=R&&(d(),z=R,(G=D.value)==null||G.toggleDataPointSelection(0,R))}else d()}sn(()=>g(n.selectedYear),{flush:"post"});function T(S,E,G){const R=G.dataPointIndex;R<0||(R===z?(z=void 0,t("update:selectedYear",void 0)):(z=R,t("update:selectedYear",R+me[0])))}return(S,E)=>(h(),m("div",null,[l("div",null,k(e.paramId),1),B(F(an),{ref_key:"chart",ref:D,type:"bar",options:F(u),series:F(p),onClick:T},null,8,["options","series"])]))}}),Ko=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"DaemmungAltbau4Percent",effectiveSince:2022},{lawId:"ForschungEmissionsfreieZementproduktion",effectiveSince:2023},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024},{lawId:"ForschungEmissionsfreieStahlproduktion",effectiveSince:2024},{lawId:"FernverkehrModernisieren",effectiveSince:2025},{lawId:"NahverkehrModernisieren",effectiveSince:2026},{lawId:"FernverkehrVerbindungenAusbauen",effectiveSince:2026},{lawId:"NahverkehrAusbauen",effectiveSince:2026},{lawId:"LadeinfrastrukturAusbauen",effectiveSince:2026},{lawId:"NahverkehrKostenlos",effectiveSince:2027},{lawId:"DienstwagenPrivilegAbgeschaffen",effectiveSince:2027},{lawId:"ElektromobilitaetFoerdern",effectiveSince:2027},{lawId:"WasserstoffmobilitaetFoerdern",effectiveSince:2027}]}],Le=(e,t)=>e.lawId===t.lawId&&e.effectiveSince===t.effectiveSince,Jo=e=>e.map((t,n)=>N(x({},t),{sortId:n}));function jo(...e){const t=e.map(n=>n.length===0?0:n[n.length-1].sortId+1);return t.length===0?0:Math.max.apply(Math,t)}function Ho(e){const t=ee([]),n=ee([]),r=ee(!1);function i(T,S){var He;const E=t.value,G={lawId:T,effectiveSince:S,sortId:0},R=(He=n.value.find(pe=>Le(G,pe)))==null?void 0:He.sortId;G.sortId=R!=null?R:jo(E,n.value),t.value=E.filter(pe=>pe.lawId!=T).concat(G).sort((pe,jt)=>pe.sortId-jt.sortId)}function o(T){t.value=t.value.filter(S=>S.lawId!=T)}function u(T,S){const E={lawId:T,effectiveSince:S,sortId:0};t.value.some(G=>Le(G,E))?o(T):i(T,S)}function f(T){t.value=Jo(T.laws)}function c(){r.value=!r.value,r.value?n.value=t.value:n.value=[]}const p=P(()=>{var T;return{name:"Current Game",laws:((T=e.value)==null?void 0:T.acceptedLaws)||[]}}),D=P(()=>[p.value,...Ko]),z=P(()=>{const T=t.value.map(E=>N(x({},E),{cls:n.value.some(G=>Le(E,G))?"both":"new"})),S=n.value.filter(E=>!t.value.some(G=>Le(G,E))).map(E=>N(x({},E),{cls:"saved"}));return[...T,...S].sort((E,G)=>E.sortId-G.sortId)}),d=Jt(t),g=Jt(n);return{addToSimulation:i,removeFromSimulation:o,toggleInSimulation:u,loadPreset:f,compareActive:r,toggleCompare:c,presets:D,simulatedLaws:z,simulation:d,secondSimulation:g}}function Jt(e){return P(()=>{const t=Wt();return t.acceptedLaws=[...e.value],me.map(r=>{for(;r>t.currentYear;){t.currentYear++,t.acceptedLaws=Zo(t.acceptedLaws,t.currentYear);const i=t.acceptedLaws.map(f=>ve(f)),{values:o,effectsOfLaws:u}=xt(t,i,t.currentYear);if(t.values=o,r===t.currentYear)return{values:o,effectsOfLaws:u}}return{values:t.values,effectsOfLaws:{}}})})}function Zo(e,t){const n=e.map(i=>ve(i)),r=n.filter(i=>i.effectiveSince===t).flatMap(i=>i.removeLawsWithLabels||[]);return n.filter(i=>i.effectiveSince>=t||!r.some(o=>{var u;return(u=i.labels)==null?void 0:u.includes(o)})).map(i=>({lawId:i.id,effectiveSince:i.effectiveSince}))}const Ro=I({directives:{clickaway:qe},setup(e,t){const n=ee(!1);return{menuIsOpen:n,toggle:()=>n.value=!n.value,close:()=>n.value=!1}}});function Yo(e,t,n,r,i,o){const u=ln("clickaway");return on((h(),m("span",{onClick:t[0]||(t[0]=(...f)=>e.toggle&&e.toggle(...f)),class:$(["menu",{menuIsOpen:e.menuIsOpen}])},[Te(e.$slots,"default",{},void 0,!0)],2)),[[u,e.close]])}var Qo=M(Ro,[["render",Yo],["__scopeId","data-v-06206e01"]]);const qo=I({directives:{clickaway:qe},components:{Citation:No,PeekChart:Uo,Menu:Qo},setup(){const e=le(),t=P(()=>e.state.game),n=Ho(t);return x({store:e,game:t,gameYears:me},n)},data(){return{lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lastSelected:void 0,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,yearSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1}},methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){e===this.lawSelected?this.lawSelected=void 0:(this.lastSelected="law",this.lawSelected=e)},selectEvent(e){e===this.eventSelected?this.eventSelected=void 0:(this.lastSelected="event",this.eventSelected=e)},selectParam(e){e===this.paramSelected?this.paramSelected=void 0:(this.lastSelected="param",this.paramSelected=e)},selectYear(e){e===this.yearSelected?this.yearSelected=void 0:(this.lastSelected="year",this.yearSelected=e)},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0,this.yearSelected=void 0},dragStart(e,t){const{lawId:n,year:r}=t;!e.dataTransfer||(e.dataTransfer.dropEffect="link",n&&e.dataTransfer.setData("lawId",n),r&&e.dataTransfer.setData("year",r.toString()))},getDropped(e,t,n){if(!e.dataTransfer)return;const r=e.dataTransfer.getData(t);return n.find(i=>i==r)},onDrop(e,t){const{lawId:n,year:r}=t,i=this.getDropped(e,"lawId",Ci),o=this.getDropped(e,"year",this.gameYears);r&&i?this.addToSimulation(i,r):n&&o?this.addToSimulation(n,o):n&&i&&this.removeFromSimulation(i)},rightClick(e,t){this.toggleInSimulation(e,t)}},computed:{startYearOfSelected(){if(!this.lawSelected)return;if(!this.game)return de;const e=this.simulatedLaws.find(t=>t.lawId===this.lawSelected);return e?e.effectiveSince:this.game.currentYear},selectedLaw(){return oe.find(e=>e.id===this.lawSelected)},lawEffort(){var e;if(!!this.game)return(e=this.selectedLaw)==null?void 0:e.effort(this.game)},selectedEvent(){return Ee.find(e=>e.id===this.eventSelected)},selectedParam(){return this.paramSelected?Z[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof _?e:void 0},cParam(){const e=this.selectedParam;return e instanceof H?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},currentYear(){return this.yearSelected?this.yearSelected:this.game?this.game.currentYear:de},effectsOfSelected(){return!this.selectedLaw||!this.startYearOfSelected||!this.game?[]:this.selectedLaw.effects(this.game,this.startYearOfSelected,this.currentYear)},sortedValues(){return this.game?vo(this.simOfYear.values,this.effectsOfLawInYear,this.effectsOfSelected):[]},sortedLaws(){return this.game?wo(this.game,this.lawsSortCol,this.lawsSortDir,oe):[]},sortedEvents(){return this.game?yo(this.game,this.eventsSortCol,this.eventsSortDir,Ee):[]},effectsOfLawInYear(){if(this.lawSelected)return this.simOfYear.effectsOfLaws[this.lawSelected];if(this.yearSelected)return this.simEffectOfLaw[this.yearSelected-this.gameYears[0]]},simOfYear(){if(this.yearSelected===void 0&&this.game){const e=this.effectsOfSelected,t=this.game.values;if(this.lawSelected===void 0||e.length===0)return{values:t,effectsOfLaws:{}};const n=fe(t);Ae({dispatch:()=>{},values:n},e);const i=Object.fromEntries(Dt.map(o=>[o,n[o]-t[o]]));return{values:t,effectsOfLaws:{[this.lawSelected]:i}}}else{const e=this.yearSelected?this.yearSelected-this.gameYears[0]:0;return this.simulation[e]}},simulatedValues(){return this.simulation.map(e=>e.values)},simEffectOfLaw(){if(this.lawSelected){const e=this.lawSelected;return this.simulation.map(t=>{const n=t.effectsOfLaws[e];return n||At})}return this.compareActive?this.secondSimulation.map((e,t)=>Object.fromEntries(Object.entries(e.values).map(([n,r])=>[n,this.simulation[t].values[n]-r]))):me.map(e=>At)},chartData(){return{values:this.simulatedValues,changes:this.simEffectOfLaw}},lawsInYear(){return e=>this.simulatedLaws.filter(t=>t.effectiveSince===e)}}}),X=e=>(ye("data-v-85b0da02"),e=e(),ke(),e),Xo={class:"peekData"},el={class:"Menu"},tl=U("\xA0 "),nl=U("\xA0 "),rl=U("\xA0 "),il=U("\xA0 "),sl=U("\xA0 "),al=U("\xA0 "),ol={key:1,class:"Details sidebyside"},ll={class:"Title"},ul={class:"Description"},cl={class:"SectionHead"},dl={class:"Section"},hl=X(()=>l("div",{class:"SectionHead"},"Details:",-1)),fl=["innerHTML"],ml=X(()=>l("div",{class:"SectionHead"},"Internes:",-1)),gl=["innerHTML"],pl=X(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),bl={key:2,class:"Details sidebyside"},vl={class:"Title"},wl={class:"Description"},yl=X(()=>l("div",{class:"SectionHead"},"Details:",-1)),kl=["innerHTML"],Sl=X(()=>l("div",{class:"SectionHead"},"Internes:",-1)),Dl=["innerHTML"],Pl=X(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),_l={key:3,class:"Details sidebyside"},zl={class:"Title"},Al={key:0},Fl={key:1},Cl={key:2},El=X(()=>l("div",{class:"SectionHead"},"Details:",-1)),Ll=["innerHTML"],Wl=X(()=>l("div",{class:"SectionHead"},"Internes:",-1)),xl=["innerHTML"],Tl=X(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),Vl={class:"paramsHeader"},Ol=["onClick"],Il={class:"numbercol"},Bl={class:"effcol"},Ml={key:5,class:"lawList sidebyside"},$l=["onClick","onDragstart","onDrop"],Gl={class:"priocol"},Nl={key:6,class:"eventList sidebyside"},Ul=["onClick"],Kl={class:"priocol"},Jl={key:7,class:"yearList sidebyside"},jl=X(()=>l("a",{class:"clickable"},"Presets",-1)),Hl={class:"dropdown"},Zl=["onClick"],Rl=U("\xA0 "),Yl=["onClick","onDragstart","onDrop"],Ql=["onClick","onContextmenu","onDragstart","onDrop"];function ql(e,t,n,r,i,o){var p,D,z;const u=re("PeekChart"),f=re("Citation"),c=re("Menu");return h(),m("details",Xo,[l("summary",{onClick:t[0]||(t[0]=d=>e.unselect()),class:"clickable"},"Peek"),l("div",el,[l("a",{onClick:t[1]||(t[1]=d=>e.showCharts=!e.showCharts),class:$(["clickable",e.showCharts?"selected":""])},"Charts",2),tl,l("a",{onClick:t[2]||(t[2]=d=>e.showDetails=!e.showDetails),class:$(["clickable",e.showDetails?"selected":""])},"Details",2),nl,l("a",{onClick:t[3]||(t[3]=d=>e.showParams=!e.showParams),class:$(["clickable",e.showParams?"selected":""])},"Params",2),rl,l("a",{onClick:t[4]||(t[4]=d=>e.toggleLawList()),class:$(["clickable",e.showLaws?"selected":""])},"Laws",2),il,l("a",{onClick:t[5]||(t[5]=d=>e.toggleEventList()),class:$(["clickable",e.showEvents?"selected":""])},"Events",2),sl,l("a",{onClick:t[6]||(t[6]=d=>e.showYears=!e.showYears),class:$(["clickable",e.showYears?"selected":""])},"Years",2),al]),e.showCharts?(h(),m("div",{key:0,class:$(["Details sidebyside",{lawSelected:e.lawSelected!=null}])},[e.paramSelected?(h(),Q(u,{key:0,selectedYear:e.yearSelected,"onUpdate:selectedYear":t[7]||(t[7]=d=>e.yearSelected=d),chartData:e.chartData,paramId:e.paramSelected},null,8,["selectedYear","chartData","paramId"])):A("",!0),B(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[8]||(t[8]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"co2emissions"},null,8,["selectedYear","chartData"]),B(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[9]||(t[9]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"popularity"},null,8,["selectedYear","chartData"]),B(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[10]||(t[10]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"stateDebt"},null,8,["selectedYear","chartData"]),B(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[11]||(t[11]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"co2budget"},null,8,["selectedYear","chartData"])],2)):A("",!0),e.lastSelected==="law"&&e.selectedLaw&&e.showDetails?(h(),m("div",ol,[l("div",ll,k(e.selectedLaw.title),1),l("div",ul,k(e.selectedLaw.description),1),l("div",cl,"Aufwand: "+k((p=e.lawEffort)==null?void 0:p.time.toMonthsString()),1),l("div",dl,k((D=e.lawEffort)==null?void 0:D.text),1),hl,l("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,fl),ml,l("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,gl),pl,(h(!0),m(J,null,Y(e.citationsOfLaw,(d,g)=>(h(),Q(f,{class:"Section",key:g,citation:d},null,8,["citation"]))),128))])):A("",!0),e.lastSelected==="event"&&e.selectedEvent&&e.showDetails?(h(),m("div",bl,[l("div",vl,k(e.selectedEvent.title),1),l("div",wl,k(e.selectedEvent.description),1),yl,l("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,kl),Sl,l("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,Dl),Pl,(h(!0),m(J,null,Y((z=e.selectedEvent)==null?void 0:z.citations,(d,g)=>(h(),Q(f,{class:"Section",key:g,citation:d},null,8,["citation"]))),128))])):A("",!0),e.lastSelected==="param"&&e.selectedParam&&e.showDetails?(h(),m("div",_l,[l("div",zl,k(e.paramSelected)+" ["+k(e.selectedParam.unit)+"]",1),e.wParam?(h(),m("div",Al,"Initial value: "+k(e.wParam.initialValue)+" "+k(e.wParam.unit),1)):A("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(h(),m("div",Fl," Should initially be: "+k(e.cParam.shouldInitiallyBe)+" "+k(e.cParam.unit),1)):A("",!0),e.cParam?(h(),m("div",Cl," Calculation: "+k(e.cParam.valueGetter),1)):A("",!0),El,l("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,Ll),Wl,l("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,xl),Tl,(h(!0),m(J,null,Y(e.selectedParam.citations,(d,g)=>(h(),Q(f,{class:"Section",key:g,citation:d},null,8,["citation"]))),128))])):A("",!0),e.showParams?(h(),m("div",{key:4,class:$(["paramsList sidebyside",{lawSelected:e.lawSelected!=null}])},[l("div",Vl,[l("div",null,"Start of law: "+k(e.startYearOfSelected),1),l("div",null,"Current year: "+k(e.currentYear),1)]),l("table",null,[(h(!0),m(J,null,Y(e.sortedValues,d=>(h(),m("tr",{key:d.id,class:$({clickable:!0,selected:e.paramSelected===d.id,[d.class]:!0}),onClick:g=>e.selectParam(d.id)},[l("td",null,k(d.id),1),l("td",Il,k(d.value),1),l("td",Bl,k(d.effect),1),l("td",null,k(d.unit),1)],10,Ol))),128))])],2)):A("",!0),e.showLaws?(h(),m("div",Ml,[l("table",null,[l("tr",null,[l("th",{onClick:t[12]||(t[12]=d=>e.sortLaws("state")),class:"clickable"},"S"),l("th",{onClick:t[13]||(t[13]=d=>e.sortLaws("id")),class:"clickable"},"ID"),l("th",{onClick:t[14]||(t[14]=d=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(h(!0),m(J,null,Y(e.sortedLaws,d=>(h(),m("tr",{key:d.id,class:$({clickable:!0,selected:e.lawSelected===d.id,[d.state]:!0}),onClick:g=>e.selectLaw(d.id),draggable:"true",onDragstart:g=>e.dragStart(g,{lawId:d.id}),onDrop:q(g=>e.onDrop(g,{lawId:d.id}),["prevent"]),onDragover:t[15]||(t[15]=q(()=>{},["prevent"])),onDragenter:t[16]||(t[16]=q(()=>{},["prevent"]))},[l("td",null,k(d.state),1),l("td",null,k(d.id),1),l("td",Gl,k(d.priority),1)],42,$l))),128))])])):A("",!0),e.showEvents?(h(),m("div",Nl,[l("table",null,[l("tr",null,[l("th",{onClick:t[17]||(t[17]=d=>e.sortEvents("id")),class:"clickable"},"ID"),l("th",{onClick:t[18]||(t[18]=d=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(h(!0),m(J,null,Y(e.sortedEvents,d=>(h(),m("tr",{key:d.id,class:$({clickable:!0,selected:e.eventSelected===d.id}),onClick:g=>e.selectEvent(d.id)},[l("td",null,k(d.id),1),l("td",Kl,k(d.probability),1)],10,Ul))),128))])])):A("",!0),e.showYears?(h(),m("div",Jl,[l("div",null,[B(c,null,{default:Se(()=>[jl,l("ul",Hl,[(h(!0),m(J,null,Y(e.presets,d=>(h(),m("li",{key:d.name,class:"clickable",onClick:g=>e.loadPreset(d)},k(d.name),9,Zl))),128))])]),_:1}),Rl,l("a",{class:$(["clickable",e.compareActive?"selected":""]),onClick:t[19]||(t[19]=d=>e.toggleCompare())},"Compare",2)]),l("table",null,[(h(!0),m(J,null,Y(e.gameYears,d=>(h(),m(J,{key:d},[l("tr",{class:$({clickable:!0,selected:e.yearSelected===d}),onClick:g=>e.selectYear(d),draggable:"true",onDragstart:g=>e.dragStart(g,{year:d}),onDrop:q(g=>e.onDrop(g,{year:d}),["prevent"]),onDragover:t[20]||(t[20]=q(()=>{},["prevent"])),onDragenter:t[21]||(t[21]=q(()=>{},["prevent"]))},[l("th",null,k(d),1)],42,Yl),(h(!0),m(J,null,Y(e.lawsInYear(d),({lawId:g,cls:T})=>(h(),m("tr",{key:g,class:$({clickable:!0,selected:e.lawSelected===g,[T]:!0}),onClick:S=>e.selectLaw(g),onContextmenu:q(S=>e.rightClick(g,d),["right","prevent"]),draggable:"true",onDragstart:S=>e.dragStart(S,{lawId:g}),onDrop:q(S=>e.onDrop(S,{year:d}),["prevent"]),onDragover:t[22]||(t[22]=q(()=>{},["prevent"])),onDragenter:t[23]||(t[23]=q(()=>{},["prevent"]))},[l("td",null,k(g),1)],42,Ql))),128))],64))),128))])])):A("",!0)])}var Xl=M(qo,[["render",ql],["__scopeId","data-v-85b0da02"]]);const eu=I({components:{PeekInside:Xl},setup(){return{store:le(),devMode:localStorage.getItem("devMode")==="true"}},methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,n=Math.min(e/800,t/1e3),r=(t-1e3*n)/2;document.documentElement.style.setProperty("--scale",`${n}`),document.documentElement.style.setProperty("--translateX",`${r}px`)}},beforeMount(){this.updateStyle()},mounted(){window.addEventListener("resize",this.updateStyle)}}),tu={class:"perspective"},nu={class:"peek"};function ru(e,t,n,r,i,o){const u=re("router-view"),f=re("PeekInside");return h(),m(J,null,[l("div",tu,[B(u)]),l("div",nu,[e.devMode?(h(),Q(f,{key:0})):A("",!0)])],64)}var iu=M(eu,[["render",ru]]);const je=un(iu);je.use(bo,Ut);je.use(Nt);je.mount("#app");
