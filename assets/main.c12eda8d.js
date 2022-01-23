var Ht=Object.defineProperty,Zt=Object.defineProperties;var Rt=Object.getOwnPropertyDescriptors;var Ze=Object.getOwnPropertySymbols;var Yt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable;var We=(e,t,n)=>t in e?Ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))Yt.call(t,n)&&We(e,n,t[n]);if(Ze)for(var n of Ze(t))Qt.call(t,n)&&We(e,n,t[n]);return e},N=(e,t)=>Zt(e,Rt(t));var x=(e,t,n)=>(We(e,typeof t!="symbol"?t+"":t,n),n);import{D as Re,a as ye,s as Ye,b as qt,v as Xt,d as B,r as X,c as D,o as h,e as p,f as l,t as S,w as Z,g as z,n as $,h as xe,u as F,p as ke,i as Se,F as J,j as Q,k as q,l as I,m as be,q as Qe,x as en,T as tn,y as U,z as qe,A as Te,B as re,C as nn,E as rn,G as sn,H as an,I as on,V as ln,J as Xe,K as un,L as cn}from"./vendor.2ca12af1.js";const dn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};dn();const hn={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};class De{constructor(t){x(this,"lux");t instanceof Re?this.lux=t.setLocale("de-DE").setZone("Europe/Berlin"):this.lux=Re.fromISO(t,{zone:"Europe/Berlin",locale:"de-DE"})}static durationBetween(t,n){return new Ve(n.lux.diff(t.lux,["months"]))}plus(t){return new De(this.lux.plus(t.lux))}getYear(){return this.lux.get("year")}toLocaleString(){return this.lux.toLocaleString(hn)}toMonthString(){return this.lux.toLocaleString({month:"long",year:"numeric"})}toJSON(){return this.lux.toJSON()}}class Ve{constructor(t){x(this,"lux");t instanceof ye?this.lux=t:typeof t=="string"?this.lux=ye.fromISO(t,{locale:"de-DE"}):this.lux=ye.fromObject(t)}toMonthsString(){const t=this.lux.as("months");return t===1?"1 Monat":t+" Monate"}lessThan(t){return this.lux<t.lux}}function ue(e){return new De(e)}function Oe(e){return new Ve(e)}function fn(e,t){return De.durationBetween(e,t)}function mn(e){return new Ve(ye.fromDurationLike({month:e}))}function gn(e,t){return e.lux<t.lux?t:e}const de=2021,et="2021-01-01",tt=2050,nt=Oe("P3M"),pn=Oe("P3M"),rt=6,it=.6;function O(e){return e}const ve={newYear:2,timesUp:3,finanzKollaps:4,wahlVerloren:5,hitzehoelle:6};function st(e,t){const n=e.events.filter(r=>t.includes(r.id)).reduce((r,i)=>gn(r,ue(i.occuredIn)),ue(et));return fn(n,ue(e.currentDate))}function ie(e,t,n){return st(e,[t.id]).lessThan(Oe(n))}var bn=O({title:"Abstandsregeln f\xFCr Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erh\xF6ht wird. Das f\xFChrte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply(){return[]}});let Ie=Ye("",{state:!0}),at=()=>Math.abs(Ie());function vn(e){Ie=Ye(e.id,{state:e.prngState})}function wn(){return Ie.state()}const yn=e=>({time:nt,text:`Braucht ${nt.toMonthsString()}.`});function w(e,t="Braucht {months}."){const n=mn(e),r=t.replace(/{months}/g,n.toMonthsString());return{time:n,text:r}}function y(e){return e}var kn=y({title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bew\xE4hrt. Wir lassen sie so, wie sie sind.",effort(e){return w(3,"Wie aussitzen: {months}.")},effects(){return[]},priority(e){return at()}});const Sn=new qt.exports.Converter;function ot(e){return e>0?[...Array(e)].map((t,n)=>n):[]}function Dn(e,t){const n=e-t-1;return[...ot(t),Math.max(t,n),...ot(n).reverse()]}function s(e,...t){let n=e.map((i,o)=>i+(t[o]||"")).join("").split(`
`);n[0].length===0&&n.shift();const r=n[0].match(/^(\s+)/);return r&&!n.filter(i=>i.trim()).some(i=>!i.startsWith(r[1]))&&(n=n.map(i=>i.replace(r[1],""))),Sn.makeHtml(n.join(`
`))}function Be(e){return t=>!e(t)}function lt(e){return Object.entries(e).map(([t,n])=>N(T({},n),{id:t}))}function ut(e,t){const n=e.value-t.value;return r=>{const i=e.result*(r-t.value)/n,o=t.result*(r-e.value)/n;return i-o}}const Pn=new Intl.DateTimeFormat("de-DE");class E{constructor(t){x(this,"url");x(this,"title");x(this,"publisher");x(this,"authors");x(this,"date");x(this,"comment");x(this,"internalComment");x(this,"localCopy");x(this,"referringUrl");x(this,"archiveUrl");x(this,"archiveNotPossible");this.url=new URL(t.url),this.title=t.title,this.publisher=t.publisher,this.authors=t.authors,this.date=t.date?new Date(t.date):void 0,this.comment=t.comment,this.internalComment=t.internalComment,this.localCopy=t.localCopy,this.referringUrl=t.referringUrl?new URL(t.referringUrl):void 0,this.archiveUrl=t.archiveUrl?new URL(t.archiveUrl):void 0,this.archiveNotPossible=t.archiveNotPossible}dateString(){const t=this.date;return t?" ("+Pn.format(t)+")":""}toString(){const t=this.authors?this.authors+this.dateString():void 0,n=this.title?'"'+this.title+'"':void 0;return[t,n,this.url,this.publisher].filter(r=>r).join(", ")}}function W(e){const t=e.publisher||e.authors,n=t!=null?t+": ":"",r=e.title||e.url.toString(),i=e.url.toString();return`[[${n}${r}](${i})]`}const _n=e=>e.map(t=>t.toString()).join("; "),zn=new E({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),te=new E({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),ct=new E({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"}),dt=new E({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineral\xF6lsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),ht=new E({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile f\xFCr wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),Pe=new E({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),An=new E({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schl\xFCsselergebnisse der Studie des Wuppertal Instituts f\xFCr Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${W(Pe)}.`});Pe.comment=s`Zusammengefasst in ${W(An)}.`;const j=new E({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahresch\xE4tzung der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),Fn=new E({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),_e=new E({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enth\xE4lt CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] f\xFCr mehrere Verkehrsmittel"}),ze=new E({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),ft=new E({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Stra\xDFeng\xFCterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),se=new E({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enth\xE4lt Personenkilometer-Jahreswerte f\xFCr mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),mt=new E({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung \xD6PNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),Me=new E({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),Cn=new E({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new E({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren f\xFCr Fernw\xE4rme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const gt=new E({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),En=new E({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),pt=new E({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle w\xE4re besser."}),Ln=new E({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bev\xF6lkerung nach Nationalit\xE4t und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),Wn=new E({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur f\xFCr Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),xn=new E({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische \xC4mter des Bundes und der L\xE4nder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new E({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const bt=new E({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgem\xE4\xDF - Interview mit Prof. Stefan G\xF6ssling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""}),Tn=new E({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),vt=new E({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),Vn=new E({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),wt=new E({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten f\xFCr die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class yt{constructor(t){x(this,"unit");x(this,"citations");x(this,"details");x(this,"internals");this.unit=t.unit,this.citations=t.citations?t.citations:[],this.details=t.details?t.details:"",this.internals=t.internals?t.internals:""}citationsDesc(){return _n(this.citations)}}const On={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class P extends yt{constructor(t){super(t);x(this,"writable",!0);x(this,"initialValue");x(this,"applyBounds");this.initialValue=t.initialValue,this.applyBounds=t.applyBounds||On[t.unit]}}class H extends yt{constructor(t){super(t);x(this,"writable",!1);x(this,"valueGetter");x(this,"shouldInitiallyBe");this.valueGetter=t.valueGetter,this.shouldInitiallyBe=t.shouldInitiallyBe}}const In=new P({unit:"MioTons",initialValue:6700,citations:[zn],details:s`

  `,internals:s`

  `}),Bn=new P({unit:"MioTons",initialValue:186.793,citations:[j],details:s`

  `,internals:s`

  `}),Mn=new H({unit:"MioTons",valueGetter(e){return e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4},shouldInitiallyBe:159.696,citations:[j,ft],details:s`

  `,internals:s`
    ${W(j)}: 159.696 as MioTons

    ${W(ft)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),$n=new H({unit:"MioTons",valueGetter(e){return e.co2emissionsStreetVehicles+e.publicLocalCapacity*65/1e6+e.publicNationalCapacity*32/1e6+e.airDomesticUsage*222/1e6+1.641},citations:[_e,j],details:s`

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
  `}),Gn=new H({unit:"MioTons",valueGetter(e){return e.buildingsSourceBio*0+e.buildingsSourceGas*.247+e.buildingsSourceOil*.318+e.buildingsSourceTele*.16},citations:[j,Me],details:s`

  `,internals:s`
    TODO: #91 Gibt es hier bessere Quellen?

    ${W(Me)}: 247g CO2 pro kWh Erdgas.

    ${W(Me)}: 318g CO2 pro kWh Erdöl.

    ${W(Cn)}: 160g CO2 pro kWh Fernwärme.

    ${W(j)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),Nn=new P({unit:"MioTons",initialValue:67.936,citations:[j],details:s`

  `,internals:s`

  `}),Un=new P({unit:"MioTons",initialValue:9.243,citations:[j],details:s`

  `,internals:s`

  `}),Kn=new H({unit:"MioTons",valueGetter(e){return e.electricityGas*.399+e.electricitySolar*.058+e.electricityWind*.005+e.electricityWater*.02+e.electricityHardCoal*.835+e.electricityBrownCoal*1.137+e.electricityBiomass*.03+e.electricityNuclear*.005},citations:[gt,j],details:s`

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
    - Diskrepanz zu ${W(En)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${W(j)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),Jn=new H({unit:"MioTons",valueGetter(e){return e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers},details:s`

  `,internals:s`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${W(j)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[Fn]}),jn=new P({unit:"TWh",initialValue:480.54,citations:[te],details:s`

  `,internals:s`

  `}),Hn=new P({unit:"Percent",initialValue:50,citations:[],details:s`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:s`

  `}),Zn=new P({unit:"TWh",initialValue:51.42,citations:[te],details:s`

  `,internals:s`

  `}),Rn=new P({unit:"TWh",initialValue:131.85,citations:[te],details:s`

  `,internals:s`

  `}),Yn=new P({unit:"TWh",initialValue:6,citations:[te],details:s`

  `,internals:s`

  `}),Qn=new P({unit:"Percent",initialValue:100,citations:[Vn],details:s`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),qn=new P({unit:"TWh",initialValue:14.99,citations:[te],details:s`

  `,internals:s`

  `}),Xn=new P({unit:"TWh",initialValue:43.19,citations:[te],details:s`

  `,internals:s`

  `}),er=new P({unit:"TWh",initialValue:60.91,citations:[te],details:s`

  `,internals:s`

  `}),tr=new P({unit:"TWh",initialValue:35.46,citations:[te],details:s`

  `,internals:s`

  `}),nr=new P({unit:"TWh",initialValue:82.13,citations:[te],details:s`

  `,internals:s`

  `}),rr=new H({unit:"TWh",valueGetter(e){return e.electricityHardCoal+e.electricityBrownCoal},details:s`

  `,internals:s`

  `}),ir=new H({unit:"TWh",valueGetter(e){return e.electricityDemand-e.electricitySolar-e.electricityWind-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear},details:s`

  `,internals:s`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),sr=new P({unit:"GramPerPsgrKm",initialValue:160,citations:[_e],details:s`

  `,internals:s`
    ${W(_e)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),ar=new P({unit:"MioPsgrKm",initialValue:917e3,citations:[se],details:s`

  `,internals:s`

  `}),or=new P({unit:"Percent",initialValue:.5,citations:[pt],details:s`

  `,internals:s`
    Die verschiedenen Zahlen in ${W(pt)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),lr=new P({unit:"MioPsgrKm",initialValue:112600,citations:[se],details:s`

  `,internals:s`

  `}),ur=new P({unit:"MioPsgrKm",initialValue:112600,citations:[se],details:s`

  `,internals:s`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),cr=new P({unit:"MioPsgrKm",initialValue:67300,citations:[se],details:s`

  `,internals:s`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),dr=new P({unit:"MioPsgrKm",initialValue:67300,citations:[se],details:s`

  `,internals:s`
Siehe \`publicLocalCapacity\`.
  `}),hr=new P({unit:"MioPsgrKm",initialValue:10100,citations:[se],details:s`

  `,internals:s`

  `}),fr=new P({unit:"MioPsgrKm",initialValue:61700,citations:[se],details:s`

  `,internals:s`

  `}),mr=new H({unit:"MioPsgrKm",valueGetter(e){return e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage},shouldInitiallyBe:1168700,citations:[se],details:s`

  `,internals:s`

  `}),gr=new P({unit:"TWh",initialValue:226,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),pr=new P({unit:"TWh",initialValue:544,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),br=new H({unit:"TWh",valueGetter(e){return e.buildingsPrivateDemand+e.buildingsIndustryDemand},shouldInitiallyBe:770,citations:[],details:s`

  `,internals:s`
    TODO: #78 Quelle ${W(wt)} gibt diese Zahlen nicht her.
  `}),vr=new P({unit:"TWh",initialValue:130,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),wr=new P({unit:"TWh",initialValue:219,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),yr=new P({unit:"TWh",initialValue:58,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),kr=new H({unit:"TWh",valueGetter(e){return e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele)},citations:[],details:s`

  `,internals:s`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${W(wt)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),Sr=new P({unit:"Percent",initialValue:50,citations:[],details:s`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:s`

  `}),Dr=new P({unit:"TsdPeople",initialValue:83155.031,citations:[Ln],details:s`

  `,internals:s`
Anfangswert ist der Stand 31.12.2020.
  `}),Pr=new P({unit:"TsdPeople",initialValue:2695,citations:[Wn],details:s`

  `,internals:s`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),_r=new P({unit:"MrdEuro",initialValue:3332,citations:[xn],details:s`

  `,internals:s`
Anfangswert ist das BIP 2020.
  `}),zr=new P({unit:"MrdEuro",initialValue:1899,citations:[],details:s`

  `,internals:s`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),R={co2budget:In,co2emissionsIndustry:Bn,co2emissionsStreetVehicles:Mn,co2emissionsMobility:$n,co2emissionsAgriculture:Nn,co2emissionsBuildings:Gn,co2emissionsOthers:Un,co2emissionsEnergy:Kn,co2emissions:Jn,electricityDemand:jn,electricityGridQuality:Hn,electricitySolar:Zn,electricityWind:Rn,electricityWindOnshoreMaxNew:Yn,electricityWindEfficiency:Qn,electricityWater:qn,electricityBiomass:Xn,electricityNuclear:er,electricityHardCoal:tr,electricityBrownCoal:nr,electricityCoal:rr,electricityGas:ir,carEmissionFactor:sr,carUsage:ar,carRenewablePercentage:or,publicLocalUsage:lr,publicLocalCapacity:ur,publicNationalUsage:cr,publicNationalCapacity:dr,airDomesticUsage:hr,airIntlUsage:fr,passengerTransportUsage:mr,buildingsIndustryDemand:gr,buildingsPrivateDemand:pr,buildingsDemand:br,buildingsSourceBio:vr,buildingsSourceOil:wr,buildingsSourceTele:yr,buildingsSourceGas:kr,popularity:Sr,numberOfCitizens:Dr,unemployment:Pr,gdp:_r,stateDebt:zr},kt=Object.entries(R).filter(e=>e[1]instanceof P).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),St=Object.entries(R).filter(e=>e[1]instanceof H).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),Ar=Object.keys(kt),Dt=Object.keys(R);class Pt extends P{constructor(t,n){super(t);x(this,"name");this.name=n}}const Fr=Object.entries(kt).map(e=>new Pt(e[1],e[0]));class _t extends H{constructor(t,n){super(t);x(this,"name");this.name=n}}Object.entries(St).map(e=>new _t(e[1],e[0]));const zt=Object.entries(R).map(e=>e[1]instanceof P?new Pt(e[1],e[0]):new _t(e[1],e[0])),he=Fr.reduce((e,t)=>(e[t.name]=t.initialValue,e),{}),At=zt.reduce((e,t)=>(e[t.name]=0,e),{});function fe(e){const t=T({},e);return Object.entries(St).forEach(n=>Object.defineProperty(t,n[0],{enumerable:!0,get:()=>n[1].valueGetter(t)})),t}function Cr(e){return T({},e)}function ae(e,t){return{type:"dispatch",condition:!0,if(n){return this.condition=n,this},apply(n){this.condition&&n.dispatch(e,t)}}}function a(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(t){return this.percent=t,this},byValue(t){return this.value=t,this},setValue(t){return this.absolute=t,this},if(t){return this.condition=t,this},getOldNew(t){const n=this.name,r=t[n];if(!this.condition)return{oldVal:r,newVal:r};const i=R[n],o=this.absolute!=null?this.absolute:r+(this.value||r*this.percent/100),u=i.applyBounds(o);return{oldVal:r,newVal:u}},getChange(t){if(!this.condition)return 0;const{oldVal:n,newVal:r}=this.getOldNew(t);return r-n},apply(t){if(t.values!=null&&this.condition){const{newVal:n}=this.getOldNew(t.values);t.values[this.name]=n}}}}function V(e,t){if(R[e].unit!=R[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(n){return this.percent=n,this},byValue(n){return this.value=n,this},if(n){return this.condition=n,this},getEffect(n){const r=n[this.to],i=n[this.from];if(!this.condition)return{oldTo:r,oldFrom:i,newTo:r,newFrom:i};const o=R[this.to],u=R[this.from],f=this.value||r*this.percent/100,c=o.applyBounds(r+f)-r,g=-u.applyBounds(i-c)+i,_=r+g,L=i-g;return{oldTo:r,newTo:_,oldFrom:i,newFrom:L}},apply(n){if(n.values!=null&&this.condition){const{newTo:r,newFrom:i}=this.getEffect(n.values);n.values[this.to]=r,n.values[this.from]=i}}}}function Ae(e,t){t.filter(n=>n.condition).forEach(n=>n.apply(e))}var Er=y({title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effort(e){return w(11)},effects(e,t,n){const r=n-t,i=r<18?4.3/18:0,o=2.5,u=20,f=60,c=(10-r)/55,g=Math.max((u+f/2)*c,0);return[a("electricityHardCoal").setValue(0),a("electricityBrownCoal").setValue(0),a("stateDebt").byValue(-i+o),a("unemployment").byValue(g)]},priority(e){return e.values.electricityCoal/e.values.electricityDemand<=.1?0:b(1e4,0,e.values.unemployment)},citations:[],details:s`

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
  `}),Lr=y({title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effort(e){return e.values.popularity>=50?w(6,"Normal dauert das 12 Monate, aber bei Deiner Beliebtheit nur {months}."):w(12)},effects(){return[a("stateDebt").byValue(-37),a("electricityHardCoal").byPercent(-10),a("electricityBrownCoal").byPercent(-5),a("electricityWind").byValue(5),a("electricitySolar").byValue(3),a("electricityWater").byValue(.5)]},priority(e){return b(tt,de,e.currentYear)}});const Ft=fe(he).electricityGas;var Wr=y({title:"Kernenergienutzung verl\xE4ngern",description:"Kernkraftwerke l\xE4nger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effort(e){return w(8)},effects(){return[a("electricityNuclear").setValue(104.3),a("stateDebt").byValue(-2.5),a("popularity").byValue(-4)]},priority(e){return b(Ft,1.1*Ft,e.values.electricityGas)}}),xr=y({title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,n){const i={2021:60.45,2022:30.21}[n]||0;return[a("electricityNuclear").setValue(i)]},priority(e){return 0}}),Tr=y({title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren f\xFCr den Ausbau des Stromnetzes",effort(e){return w(2)},effects(e,t,n){return[a("popularity").byValue(-3).if(t===n),a("electricityGridQuality").byValue(1)]},priority(e){return b(70,27,ne(e))},citations:[],details:s`

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
  `}),Vr=y({title:"Netzausbau f\xF6rdern",description:"Ausbau des Stromnetzes mit Steuermitteln f\xF6rdern",effort(e){return w(3)},effects(e,t,n){return[a("popularity").byValue(-1).if(t===n),a("stateDebt").byValue(2),a("electricityGridQuality").byValue(5).if(v(e,"NetzausbauErleichtern"))]},priority(e){return b(70,27,ne(e))},citations:[],details:s`

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
  `}),Or=y({title:"Stromspeicherung erleichtern",description:"B\xFCrokratische H\xFCrden f\xFCr den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effort(e){return w(3)},effects(e,t,n){return[a("electricityGridQuality").byValue(.2)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Ir=y({title:"Stromspeicherung f\xF6rdern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln f\xF6rdern. 2 Mrd \u20AC pro Jahr.",effort(e){return w(7)},effects(e,t,n){const r=v(e,"StromspeicherungErleichtern")?0:5,i=n>=t+r,o=v(e,"ForschungUndEntwicklungStromspeicherung",3);return[a("stateDebt").byValue(1),a("popularity").byValue(.2).if(i),a("stateDebt").byValue(1).if(i),a("electricityGridQuality").byValue(2).if(i),a("electricityGridQuality").byValue(2).if(o),a("electricityGridQuality").byValue(2).if(i&&o)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Br=y({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit verg\xFCnstigten Krediten gef\xF6rdert.",effort(e){return w(3)},effects(e,t,n){const r=.5,i=n-t>2;return[a("stateDebt").byValue(r),a("buildingsSourceBio").byPercent(-1).if(i),a("buildingsSourceOil").byPercent(-1).if(i),a("buildingsSourceTele").byPercent(-1).if(i),a("buildingsPrivateDemand").byPercent(-1).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,t)}}),Mr=y({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gef\xF6rdert.",effort(e){return w(5)},effects(e,t,n){const r=1,i=n-t>2;return[a("stateDebt").byValue(r),a("buildingsSourceBio").byPercent(-2).if(i),a("buildingsSourceOil").byPercent(-2).if(i),a("buildingsSourceTele").byPercent(-2).if(i),a("buildingsPrivateDemand").byPercent(-2).if(i),a("popularity").byValue(5).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,t)}}),$r=y({title:"D\xE4mmung von Wohngeb\xE4uden sehr stark f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungspl\xE4tze im Handwerk geschaffen durch einen Zuschuss von 500\u20AC pro Monat, damit der zu erwartende Bauboom bew\xE4ltigt werden kann.",effort(e){return w(7)},effects(e,t,n){const r=3,i=n-t,o=i>=2;return[a("stateDebt").byValue(r),a("buildingsSourceBio").byPercent(-4).if(o),a("buildingsSourceOil").byPercent(-4).if(o),a("buildingsSourceTele").byPercent(-4).if(o),a("buildingsPrivateDemand").byPercent(-4).if(o),a("popularity").byValue(10).if(i===1),a("popularity").byValue(5).if(o)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,t)},citations:[],details:s`

  `,internals:s`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `}),Gr=y({title:"D\xE4mmung von Wohngeb\xE4uden abschaffen",description:"Wir geben den B\xFCrgern die Freiheit zur\xFCck, selbst zu entscheiden, ob sie ihr Haus d\xE4mmen wollen und lassen die F\xF6rderung auslaufen",effort(e){return w(3)},effects(){return[a("stateDebt").byValue(-.5),a("buildingsSourceBio").byPercent(-.5),a("buildingsSourceOil").byPercent(-.5),a("buildingsSourceTele").byPercent(-.5),a("buildingsPrivateDemand").byPercent(-.5)]},priority(e){const t=Vi(e.acceptedLaws,/^DaemmungAltbau/);if(!t||t==="DaemmungAltbauAbschaffen")return 0;const n=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,n)}}),Nr=y({title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit st\xE4rker bezuschusst.",effort(e){return w(5,"Komplexe Verhandlungen mit den Bundesl\xE4ndern dauern {months}.")},effects(e,t,n){const r=e.values.publicLocalCapacity/e.values.publicLocalUsage*100,i=n-t;return[a("stateDebt").byValue(3),a("publicLocalCapacity").byPercent(1),V("publicLocalUsage","carUsage").byPercent(1).if(r>=105),a("popularity").byValue(2).if(i>=5)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return b(150,80,t)},citations:[mt],details:s`

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
  `}),Ur=y({title:"Nahverkehr Modernisieren",description:"Anschaffung Moderner, bequemer, emissionsfreier Fahrzeuge f\xFCr den Nahverkehr wird gef\xF6rdert.",effort(e){return w(4)},effects(e,t,n){return[a("stateDebt").byValue(3),a("publicLocalCapacity").byPercent(1),V("publicLocalUsage","carUsage").byPercent(1),a("popularity").byValue(3)]},priority(e){if(!v(e,"FernverkehrModernisieren"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,24,t)},citations:[ze],details:s`

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
  `}),Kr=y({title:"F\xF6rderung f\xFCr Tierhaltung abschaffen",description:"Subventionen f\xFCr Tierhaltung werden ersatzlos gestrichen",effort(e){return w(2)},effects(e,t,n){return[a("stateDebt").byValue(-10),a("co2emissionsAgriculture").byValue(-10).if(t===n),a("popularity").byValue(-20).if(t===n)]},priority(e){return b(1e4,0,e.values.unemployment)}}),Jr=y({title:"Nahverkehr Kostenlos",description:"Die Kosten f\xFCr den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr ben\xF6tigt werden.",effort(e){return w(7,"Die Haushaltsverhandlungen dauern {months}.")},effects(e,t,n){const r=t===n?10:1;return[a("stateDebt").byValue(10),V("publicLocalUsage","carUsage").byPercent(r),a("popularity").byValue(10).if(t===n),a("unemployment").byValue(20).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return b(90,120,t)},citations:[ze],details:s`

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
  `}),jr=y({title:"Autos in Innenst\xE4dten verbieten",description:"Die Innenst\xE4dte der gro\xDFen St\xE4dte werden zu Autofreien Zonen erkl\xE4rt und begr\xFCnt, sowie Fahrrad und Fu\xDFg\xE4ngerzonen eingerichtet.",effort(e){return w(12)},effects(e,t,n){var r=-2;return e.values.publicLocalCapacity>e.values.publicLocalUsage*1.2&&(r=-1,t+2<n&&(r=2)),[a("popularity").byValue(r),V("publicLocalUsage","carUsage").byPercent(10).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return b(90,120,t)}}),Hr=y({title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des \xF6ffentlichen Fernverkehrs wird bundesweit st\xE4rker Bezuschusst und Vorangetrieben",effort(e){return w(12)},effects(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return[a("stateDebt").byValue(6),a("publicNationalCapacity").byPercent(1),V("publicNationalUsage","carUsage").byPercent(1).if(t>=105),V("publicNationalUsage","carUsage").byPercent(.5).if(t>=105),a("popularity").byValue(2).if(t>=105)]},priority(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return b(150,80,t)},citations:[],details:s`

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
  `}),Zr=y({title:"Fernverkehr Modernisieren",description:"Moderne, bequeme und weniger anf\xE4llige Z\xFCge werden f\xFCr den Fernverkehr angeschafft.",effort(e){return w(4)},effects(e,t,n){return[a("stateDebt").byValue(3),a("publicNationalCapacity").byPercent(1),V("publicNationalUsage","carUsage").byPercent(1),a("popularity").byValue(3)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,24,t)},citations:[],details:s`

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
  `}),Rr=y({title:"Wasserstofftechnologie f\xF6rdern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(1)},effects(e,t,n){const r=n<t+5,i=n>=t+5;return[a("stateDebt").byValue(2).if(r),a("carRenewablePercentage").byValue(1).if(i)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(40,90,r)},citations:[],details:s`

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
  `}),Yr=y({title:"Wasserstoffmobilit\xE4t f\xF6rdern",description:"Wasserstoffbasierte Fahrzeuge werden gef\xF6rdert.",effort(e){return w(2)},effects(e,t,n){return v(e,"WasserstofftechnologieFoerdern")?[a("stateDebt").byValue(3),a("carRenewablePercentage").byValue(1),a("popularity").byValue(1).if(t===n)]:[]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,26,t)},citations:[],details:s`

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
  `}),Qr=y({title:"Abschaffung der Mineral\xF6lsteuer",description:"Die Steuer auf s\xE4mtliche erd\xF6lbasierten Treibstoffe wird abgeschafft.",effort(e){const t=Math.ceil(e.values.co2budget/e.values.co2emissions);return t>=15?w(2,`Die derzeitigen CO2 Emissionen w\xFCrden das Budget
        in ${t} Jahren verbrauchen.
        Nicht schlecht! Bei der Stimmung bekommst Dus in {months}n durch.`):w(9,"Nicht beliebt! Sowas dauert {months}.")},effects(e,t,n){return[a("stateDebt").byValue(41),a("popularity").byValue(5).if(t===n),a("popularity").byValue(-3).if(t<n),V("publicLocalUsage","carUsage").byPercent(-20).if(t===n),V("publicNationalUsage","carUsage").byPercent(-20).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(60,100,r)},citations:[dt],details:"",internals:s`
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
  `}),qr=y({title:"Ausbau von Stra\xDFen",description:"Autobahnen und Stra\xDFen werden intensiver ausgebaut.",effort(e){return w(9)},effects(e){return[a("stateDebt").byValue(5),a("popularity").byValue(.5),V("publicLocalUsage","carUsage").byPercent(-1),V("publicNationalUsage","carUsage").byPercent(-1)]},priority(e){const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(60,100,n)}}),Xr=y({title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effort(e){return w(6)},effects(e,t,n){return[a("stateDebt").byValue(-7.35),a("popularity").byValue(-1).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(10,100,r)}}),ei=y({title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen f\xFCr Dienstwagen werden abgeschafft.",effort(e){return w(6)},effects(e,t,n){return[a("stateDebt").byValue(-18),a("popularity").byValue(-1).if(t===n),V("carUsage","publicLocalUsage").byPercent(-.05)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(50,100,r)},citations:[ht,bt],details:s`

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
  `}),ti=y({title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(3)},effects(e){const t=a("carEmissionFactor").setValue(157.9),n=t.getChange(e.values);return[a("popularity").byValue(2).if(n<0),t]},priority(e){if(v(e,"Tempolimit100AufAutobahnen")||v(e,"Tempolimit120AufAutobahnen")||v(e,"TempolimitAufAutobahnenAussitzen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),ni=y({title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(4)},effects(e){const t=a("carEmissionFactor").setValue(157.1),n=t.getChange(e.values);return[a("popularity").byValue(2).if(n<0),t]},priority(e){if(!v(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),ri=y({title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(5)},effects(e){const t=a("carEmissionFactor").setValue(154.1),n=t.getChange(e.values);return[a("popularity").byValue(-1).if(n<0),t]},priority(e){if(!v(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),ii=y({title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das k\xF6nnte zwar Strafen oder gar Zwangsma\xDFnahmen bewirken, aber das Risiko der gef\xE4hrdeten Wiederwahl ist zu gro\xDF.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(3,"Wie aussitzen: {months}.")},effects(){return[a("stateDebt").byValue(-10),a("popularity").byValue(-2)]},priority(e){if(v(e,"Tempolimit100AufAutobahnen")||v(e,"Tempolimit120AufAutobahnen")||v(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),si=y({title:"Elektromobilit\xE4t F\xF6rdern",description:"H\xF6here Kaufpr\xE4mien, Steuerbefreiung, g\xFCnstiges Laden f\xFCr E-Autos.",effort(e){return w(2)},effects(e,t,n){return v(e,"LadeinfrastrukturAusbauen")?[a("stateDebt").byValue(5),a("carRenewablePercentage").byValue(1),a("popularity").byValue(4).if(t===n)]:[]},priority(e){if(!v(e,"LadeinfrastrukturAusbauen"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,25,t)},citations:[],details:s`

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
  `}),ai=y({title:"Ladeinfrastruktur ausbauen",description:"Ausbau der Ladeinfrastruktur wird mit Steuermitteln stark gef\xF6rdert.",effort(e){return w(4)},effects(e,t,n){return[a("stateDebt").byValue(5),a("carRenewablePercentage").byValue(1),a("popularity").byValue(2).if(t===n)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,25,t)},citations:[ze],details:s`

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
  `}),oi=y({title:"Windkraft vereinfachen",description:"Genehmigungen f\xFCr Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effort(e){return w(4,"Die Bundesl\xE4nder m\xFCssen mit ins Boot geholt werden. Das dauert {months}.")},effects(e,t,n){return[]},priority(e){return b(80,27,ne(e))},citations:[],details:s`

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
  `}),li=y({title:"Abstandsregeln f\xFCr Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem \xFCber Abst\xE4nde zwischen den Windkraftanlagen und Wohngeb\xE4uden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(3,"Wie aussitzen: {months}.")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[a("electricityWindOnshoreMaxNew").setValue(6).if(n>=t+r)]},priority(e){return v(e,"AbstandsregelnFuerWindkraftLockern")?b(30,100,ne(e)):v(e,"AbstandsregelnFuerWindkraftVerschaerfen")?b(70,27,ne(e)):0}}),ui=y({title:"Abstandsregeln f\xFCr Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln f\xFCr Windkraftanlagen sowie Bauerlaubniss in W\xE4ldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(6,"Das schaffst Du in {months}n.")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[a("popularity").byValue(-3).if(t===n),a("electricityWindOnshoreMaxNew").setValue(30).if(n>=t+r)]},priority(e){return v(e,"AbstandsregelnFuerWindkraftWieBisher")?b(70,27,ne(e)):v(e,"AbstandsregelnFuerWindkraftAbschaffen")?b(30,100,ne(e)):0},citations:[],details:s`

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
  `}),ci=y({title:"Abstandsregeln f\xFCr Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(12,"BIs werden es Dir schwer machen. {months}!")},effects(e,t,n){const r=v(e,"WindkraftVereinfachen")?0:5;return[a("popularity").byValue(-40).if(t===n),a("electricityWindOnshoreMaxNew").setValue(1e3).if(n>=t+r)]},priority(e){return v(e,"AbstandsregelnFuerWindkraftLockern")?b(80,25,ne(e)):0}}),di=y({title:"Abstandsregeln f\xFCr Windkraft versch\xE4rfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngeb\xE4uden im Innenbereich muss das Zehnfache der Gesamth\xF6he der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(1,"Dauert nur einen Monat.")},effects(e,t,n){return[a("popularity").byValue(5).if(t===n),a("electricityWindOnshoreMaxNew").setValue(.42)]},priority(e){return v(e,"AbstandsregelnFuerWindkraftWieBisher")?b(0,100,ne(e)):0}}),hi=y({title:"Ausschreibungsverfahren f\xFCr Windkraft wie zu Beginn",description:"Windkraft Betreiber k\xF6nnen sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstm\xF6glichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(8)},effects(e,t,n){return[...Ce(e,6.9,1.2,t)]},priority(e){return v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?b(60,100,K(e)):0}}),fi=y({title:"Ausschreibungsverfahren f\xFCr Windkraft verdoppeln",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(2)},effects(e,t,n){return[a("popularity").byValue(-1).if(t===n),a("unemployment").byValue(-20).if(t===n),...Ce(e,13.8,2.4,t)]},priority(e){return v(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?b(100,50,K(e)):v(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?b(40,100,K(e)):0}}),mi=y({title:"Ausschreibungsverfahren f\xFCr Windkraft vervierfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(4)},effects(e,t,n){return[a("popularity").byValue(-2).if(t===n),a("unemployment").byValue(-100).if(t===n),...Ce(e,27.6,4.8,t)]},priority(e){return v(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?b(100,50,K(e)):v(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?b(0,100,K(e)):0},citations:[],details:s`
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
  `}),gi=y({title:"Ausschreibungsverfahren f\xFCr Windkraft verachtfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(5)},effects(e,t,n){return[a("popularity").byValue(-20).if(t===n),a("unemployment").byValue(-100).if(t===n),...Ce(e,55.2,9.6,t)]},priority(e){return v(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?b(100,50,K(e)):0}}),pi=y({title:"CO2 Preis Erh\xF6hen",description:"Die Preise werden schneller erh\xF6ht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return w(6)},effects(e,t,n){const r=n>=t+2?n>=t+4?100:70:0;return[...Ge(e,r,-.5,$e({value:50,result:0},{value:0,result:-1}))]},priority(e){return v(e,"VollerCO2Preis")||v(e,"WirksamerCO2Preis")?0:50},citations:[vt],details:s`

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
  `}),bi=y({title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return w(8)},effects(e,t,n){return[...Ge(e,150,-2,$e({value:80,result:0},{value:50,result:-3}))]},priority(e){return v(e,"CO2PreisErhoehen")?50:0},citations:[vt],details:s`

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
  `}),vi=y({title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return w(10)},effects(e,t,n){return[...Ge(e,3e3,-5,$e({value:90,result:0},{value:50,result:-10}))]},priority(e){return v(e,"WirksamerCO2Preis")?50:0},citations:[Tn],details:s`

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
  `}),wi=y({title:"Solarstrom F\xF6rderung einstellen",description:"Mittlere bis gro\xDFe Solaranlagen sollten sich selbst tragen. Die F\xF6rderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return w(5)},effects(e,t,n){return[...ce(e,"electricitySolar",2)]},priority(e){return v(e,"SolarstromFoerderungWieZuBeginn")?b(0,100,K(e)):0},details:s`

  `}),yi=y({title:"Solarstrom F\xF6rderung wie zu Beginn",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen wie bisher",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return w(9)},effects(e,t,n){return[...ce(e,"electricitySolar",5)]},priority(e){return v(e,"SolarstromFoerdernx8")?b(70,100,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),ki=y({title:"Solarstrom F\xF6rderung x2",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return w(4)},effects(e,t,n){return[a("popularity").byValue(10).if(t===n),a("unemployment").byValue(-31e3).if(t===n),...ce(e,"electricitySolar",10)]},priority(e){return v(e,"SolarstromFoerderungWieZuBeginn")?b(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),Si=y({title:"Solarstrom F\xF6rderung x4",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return w(3)},effects(e,t,n){return[a("popularity").byValue(20).if(t===n),a("unemployment").byValue(-89e3).if(t===n),...ce(e,"electricitySolar",20)]},priority(e){return v(e,"SolarstromFoerdernx2")?b(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:s`
    # Happy path 10

    ${W(Pe)}
  `,citations:[Pe]}),Di=y({title:"Solarstrom F\xF6rderung x8",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return w(2)},effects(e,t,n){return[a("popularity").byValue(-10).if(t===n),a("unemployment").byValue(-209e3).if(t===n),...ce(e,"electricitySolar",40)]},priority(e){return v(e,"SolarstromFoerdernx4")?b(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `}),Pi=y({title:"Solar auf neuen D\xE4chern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die D\xE4cher.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return w(3)},effects(e,t,n){return[a("popularity").byValue(-3).if(t===n),...ce(e,"electricitySolar",2)]},priority(e){return v(e,"SolarstromFoerderungWieZuBeginn")?b(100,30,K(e)):0},details:s`

  `,internals:s`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `}),_i=y({title:"Forschung und Entwicklung zur Stromspeicherung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(1)},effects(e,t,n){const r=n<t+5,i=n>=t+3;return[a("stateDebt").byValue(2).if(r),a("electricityGridQuality").byValue(.2).if(i)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),zi=y({title:"Forschung zur emissionsfreien Stahlproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Stahl mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(2)},effects(e,t,n){const r=n<t+5,i=n>=t+3,o=v(e,"WasserstofftechnologieFoerdern",3)?K(e)-70:0,u=v(e,"WirksamerCO2Preis");return[a("stateDebt").byValue(2).if(r),a("co2emissionsIndustry").byValue(-2).if(i),a("co2emissionsIndustry").byValue(-2).if(u),a("co2emissionsIndustry").byValue(-o).if(o>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return b(0,80,n)},citations:[],details:s`

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
  `}),Ai=y({title:"Forschung zur emissionsfreien Zementproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Zement mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(3)},effects(e,t,n){const r=n<t+5,i=n>=t+3,o=v(e,"WasserstofftechnologieFoerdern",3)?K(e)-70:0,u=v(e,"WirksamerCO2Preis");return[a("stateDebt").byValue(2).if(r),a("co2emissionsIndustry").byValue(-2).if(i),a("co2emissionsIndustry").byValue(-2).if(u),a("co2emissionsIndustry").byValue(-o).if(o>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return b(0,80,n)},citations:[],details:s`

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
  `}),Fi=y({title:"Erforschung und Umsetzung dezentraler Stromerzeugung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur f\xFCr die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(1)},effects(e,t,n){const r=n<t+5,i=n>=t+1;return[a("stateDebt").byValue(2).if(r),a("electricityGridQuality").byValue(1).if(i)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Ci=y({title:"Test",description:"Unsinniges Gesetz zum Testen.",effort(e){return w(6)},effects(e,t,n){return[a("popularity").byPercent(50).if((n-t)%3!=0),a("popularity").byPercent(-50).if((n-t)%3==0),a("stateDebt").byPercent(-200).if(n===t),a("stateDebt").byPercent(50).if((n-t)%3!=0),a("stateDebt").byPercent(-50).if((n-t)%3==0),a("stateDebt").byPercent(-200).if(n===t+10)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`

  `}),Ei=y({title:"Automatische Anpassungen einiger Sektoren",description:"Mobilit\xE4t, Industrie, Geb\xE4ude und Landwirtschaft nutzen automatisch regenerative Energiequellen, sobald sie zur Verf\xFCgung stehen.",labels:["initial"],effects(e,t,n){if(K(e)<70)return[];R.co2emissionsOthers;const r=a("co2emissionsIndustry").byPercent(-20),o=r.getChange(e.values)/-.835;return[a("carRenewablePercentage").byValue(10),a("electricityDemand").byValue(22),r,a("electricityDemand").byValue(o),V("buildingsSourceBio","buildingsSourceOil").byValue(10),V("electricityDemand","buildingsSourceOil").byValue(10),V("buildingsSourceBio","buildingsSourceTele").byValue(5),a("co2emissionsAgriculture").byValue(-10),a("co2emissionsOthers").byValue(-1)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`
    Dieses Gesetz läuft dauerhaft mit und soll kompensieren, dass es für diese Sektoren noch nicht genügend Gesetze gibt.
  `});const Ct={AllesBleibtBeimAlten:kn,InitialAtomausstieg:xr,KohleverstromungEinstellen:Er,EnergiemixRegeltDerMarkt:Lr,KernenergienutzungVerlaengern:Wr,NetzausbauErleichtern:Tr,NetzausbauFoerdern:Vr,ForschungUndEntwicklungStromspeicherung:_i,StromspeicherungErleichtern:Or,StromspeicherungFoerdern:Ir,ForschungDezentraleStromerzeugung:Fi,WindkraftVereinfachen:oi,AbstandsregelnFuerWindkraftVerschaerfen:di,AbstandsregelnFuerWindkraftWieBisher:li,AbstandsregelnFuerWindkraftLockern:ui,AbstandsregelnFuerWindkraftAbschaffen:ci,AusschreibungsverfahrenfuerWindkraftWieBisher:hi,AusschreibungsverfahrenfuerWindkraftVerdoppeln:fi,AusschreibungsverfahrenfuerWindkraftVervierfachen:mi,AusschreibungsverfahrenfuerWindkraftVerachtfachen:gi,SolarstromFoerderungAbschaffen:wi,SolarstromFoerderungWieZuBeginn:yi,SolarstromFoerdernx2:ki,SolarstromFoerdernx4:Si,SolarstromFoerdernx8:Di,SolarAufAllenDaechernVerpflichtend:Pi,DaemmungAltbau1Percent:Br,DaemmungAltbau2Percent:Mr,DaemmungAltbau4Percent:$r,DaemmungAltbauAbschaffen:Gr,NahverkehrKostenlos:Jr,AutosInInnenstaedtenVerbieten:jr,WasserstofftechnologieFoerdern:Rr,WasserstoffmobilitaetFoerdern:Yr,NahverkehrAusbauen:Nr,NahverkehrModernisieren:Ur,FernverkehrVerbindungenAusbauen:Hr,FernverkehrModernisieren:Zr,AusbauVonStrassen:qr,AbschaffungDerMineraloelsteuer:Qr,DieselPrivilegAbgeschaffen:Xr,DienstwagenPrivilegAbgeschaffen:ei,Tempolimit130AufAutobahnen:ti,Tempolimit120AufAutobahnen:ni,Tempolimit100AufAutobahnen:ri,TempolimitAufAutobahnenAussitzen:ii,ElektromobilitaetFoerdern:si,LadeinfrastrukturAusbauen:ai,FoerderungFuerTierhaltungAbschaffen:Kr,CO2PreisErhoehen:pi,WirksamerCO2Preis:bi,VollerCO2Preis:vi,ForschungEmissionsfreieStahlproduktion:zi,ForschungEmissionsfreieZementproduktion:Ai,Test:Ci,AutomatischeSektoren:Ei},Li=Object.keys(Ct);function Wi(e){return lt(e).map(t=>N(T({},t),{effort:t.effort||yn}))}const oe=Wi(Ct);function xi(e){const t=oe.find(n=>n.id===e);if(t)return t;throw Error(`Law #${e} not found`)}function we(e){const t=xi(e.lawId);if(t)return N(T({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function Fe(e){return e.map(t=>{const n=oe.find(r=>r.id===t);return n||console.error(`Inconsistency: Proposed law #${t} not found`),n}).filter(t=>t)}const Ti=(e,t,n)=>Object.fromEntries(e.map(r=>{const i=t(r),o=Object.fromEntries(Dt.map(u=>[u,n(r,i,u)]));return[r.id,o]}));function b(e,t,n){const r=n-e,i=t-e;if(i===0)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return r/i*100}function $e(e,t){const n=t.value-e.value,r=n/Math.abs(n),i=r*e.value;return o=>n===0||r*o<=i?e.result:ut(e,t)(o)}function v(e,t,n=0){if(!oe.map(r=>r.id).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some(r=>r.lawId===t&&r.effectiveSince<=e.currentYear+n)}function Vi(e,t){const n=e.sort((r,i)=>i.effectiveSince-r.effectiveSince).find(r=>t.test(r.lawId));return n==null?void 0:n.lawId}function ne(e){const t=e.values;return t.electricityWind/t.electricityDemand*100}function K(e){return(e.values.electricityWind+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}function Oi(e,t){const n=e.values,r=R[t].initialValue,i=n.electricityGridQuality,o=n.electricityDemand;return ut({value:50,result:r},{value:100,result:o})(i)}function ce(e,t,n){const r=e.values,i=r.electricityCoal+r.electricityGas;if(i<=0)return[];const o=r.electricityHardCoal/i,u=r.electricityBrownCoal/i,f=r.electricityGas/i;return[V(t,"electricityHardCoal").if(o>0).byValue(o*n),V(t,"electricityBrownCoal").if(u>0).byValue(u*n),a(t).if(f>0).byValue(f*n)]}function Ce(e,t,n,r){const i=v(e,"WindkraftVereinfachen")?0:5;if(e.currentYear<r+i)return[];const o=e.values,f=(Math.min(t,o.electricityWindOnshoreMaxNew)+n)*o.electricityWindEfficiency/100,c=o.electricityWind,g=Math.min(c+f,Oi(e,"electricityWind"))-c;return ce(e,"electricityWind",g)}function Ge(e,t,n,r){const i=r(K(e)),o=r(e.values.carRenewablePercentage);return[a("stateDebt").byValue((25-t)/1e3*e.values.co2emissions),a("popularity").byValue(i+o),a("co2emissionsIndustry").byPercent(n),a("co2emissionsAgriculture").byPercent(n),a("co2emissionsOthers").byPercent(n),V("electricityBrownCoal","electricityWind").byPercent(.7*n),V("electricityHardCoal","electricityWind").byPercent(.7*n),V("electricityBrownCoal","electricitySolar").byPercent(.3*n),V("electricityHardCoal","electricitySolar").byPercent(.3*n),V("buildingsSourceOil","buildingsSourceBio").byPercent(n),V("carUsage","publicNationalUsage").byPercent(.5*n),V("carUsage","publicLocalUsage").byPercent(.5*n)]}var Ii=O({title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es f\xFCr unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply(){return[]},probability(e,t){if(ie(e,t,{years:2,months:2}))return 0;const n=e.values.co2emissionsBuildings/e.values.co2emissions*100;return Math.min(1,b(15,30,n)/100)}});function Et(e){return e.find(t=>t.title.match(/subvention/i)&&t.title.match(/abbau/i))}var Bi=O({title:"Anruf von befreundetem Unternehmer",description:`Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und m\xF6chte dich in seine
    Ferienvilla auf Sardinien einladen. Er verl\xE4sst sich nat\xFCrlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,apply(e){if(e){const t=Et(Fe(e.proposedLaws));if(t)return[ae("rejectLaw",{lawId:t.id})]}return[]},probability(e,t){return ie(e,t,{years:3,months:8})?0:Et(Fe(e.proposedLaws))?.5:0}}),Mi=O({title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute \xFCber die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply(){return[]}}),$i=O({title:"Zusammenbruch des Finanzsystems",description:`Deine Staatsfinanzen sind desastr\xF6s. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zur\xFCckahlen k\xF6nnen. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    k\xF6nntest. Das Spiel ist damit leider beendet.
  `,apply(){return[ae("gameOver")]},probability(e,t){return e.values.stateDebt>he.stateDebt*2?ve.finanzKollaps:0}}),Gi=O({title:"Hitzeh\xF6lle",description:`Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen K\xFCstenregionen
  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr w\xE4chst.
  Um die verbleibdenden Teile sind erbitterte K\xE4mpfe ausgebrochen.
  `,apply(){return[ae("gameOver")]},probability(e,t){return e.values.co2budget<=0?ve.hitzehoelle:0}}),Ni=O({title:"Happy New Year!",description:`Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen T\xE4tigkeit aufgestellt
    und kommt zu dem nicht weiter \xFCberraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht \xFCberraschend - sieht die Sache anders und verurteilt die Regierungserkl\xE4rung als haltlos.
  `,apply(){return[ae("advanceYear")]},probability(e,t){return ue(e.currentDate).getYear()>e.currentYear?ve.newYear:0}}),Ui=O({title:"Social Media Alarm!",description:`Deine Wahlkampfberaterin ruft dich v\xF6llig aufgel\xF6st an. Ob denn an den Geschichten was dran sein, die da im
    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.
    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.
  `,apply(){return[a("popularity").byPercent(-20)]}}),Ki=O({title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland m\xFCssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply(){return[]}}),Ji=O({title:"Du hast durchgehalten",description:`Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,
    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Ma\xDFnahmen waren zu finanzieren
    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!
  `,apply(){return[ae("gameOver")]},probability(e){return e.currentYear===2050?ve.timesUp:0}}),ji=O({title:"Wahl verloren",description:`Deine Beliebtheit in der Bev\xF6lkerung ist katastrophal, lieber w\xFCrde man Mao Zedong w\xE4hlen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du geh\xF6rst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon l\xE4nger kein vern\xFCnftiger Mensch mehr geglaubt.
  `,apply(){return[ae("gameOver")]},probability(e){return e.values.popularity<=0?ve.wahlVerloren:0}}),Hi=O({title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply(){return[]},citations:[],details:s`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:s`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `}),Zi=O({title:"B\xFCrgerinitiative fordert st\xE4rkere Solarf\xF6rderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply(){return[]},probability(e,t){if(ie(e,t,{years:1,months:1}))return 0;const n=v(e,"SolarstromFoerderungAbschaffen"),r=v(e,"SolarstromFoerderungWieZuBeginn"),i=v(e,"SolarstromFoerdernx2");return n||r||i?.5:0},citations:[ct],details:s`

  `,internals:s`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${W(ct)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),Ri=O({title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply(){return[ae("gameOver")]},probability(e){return e.acceptedLaws.find(n=>n.lawId==="KernenergienutzungVerlaengern")?.5:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Yi=O({title:"Staatsoberhaupt verstorben",description:"Du stirbst an der neuen BSE Variante. Tja, h\xE4ttest du dich mal besser um das Tierwohl gek\xFCmmert...",apply(){return[ae("gameOver")]},probability(e,t){return Fe(e.acceptedLaws.map(n=>n.lawId)).find(n=>n.title.match(/tierwohl/i))?0:Math.min(1,b(5,10,st(e,[t.id]).lux.as("years"))/100)},laws:[],citations:[],details:s`

  `,internals:s`
    # Voraussetzungen

    Kann passieren, wenn es 5 Jahre keine Investitionen in bessere Tierhaltung gab.
  `}),Qi=O({title:"D\xFCrreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausf\xE4lle sind enorm.",apply(){return[a("gdp").byValue(-100),a("popularity").byValue(-10)]},probability(e,t){return Math.min(1,b(400,0,e.values.co2budget)/100)},laws:[],citations:[],details:s`

  `,internals:s`

  `}),qi=O({title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und f\xFChrt zu einer neuen Diskussion \xFCber Lobbyismus.",apply(){return[a("popularity").byValue(-2)]},probability(e,t){return ie(e,t,{months:11})||v(e,"WirksamerCO2Preis")||v(e,"VollerCO2Preis")||v(e,"KohleverstromungEinstellen")?0:.3},laws:[],citations:[],details:s`

  `,internals:s`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `}),Xi=O({title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply(){return[a("popularity").byValue(-2)]},probability(e,t){return ie(e,t,{years:2,months:11})?0:.3},laws:[],citations:[],details:s`

  `,internals:s`

  `}),es=O({title:"Klimafl\xFCchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimafl\xFCchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply(){return[a("stateDebt").byValue(10)]},probability(e,t){return e.values.co2budget<500?.2:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),ts=O({title:"Plagiatsaff\xE4re",description:"W\xE4hrend des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet W\xE4hlerstimmen.",apply(){return[a("popularity").byValue(-10)]},probability(e,t){return ie(e,t,{years:3,months:10})?0:.5},laws:[],citations:[],details:s`

  `,internals:s`

  `}),ns=O({title:"Debatte \xFCber CO2-Preise",description:"Eine marktliberale Kampagne ist sehr erfolgreich darin, Dich als Verbots-Kanzler hinzustellen. Aus allen Richtungen prasseln Forderungen nach einem ad\xE4quaten CO2-Preis auf Dich ein. Nur leider gehen die Vorstellungen \xFCber den genauen Preis sehr weit auseinander.",laws:["CO2PreisErhoehen","WirksamerCO2Preis","VollerCO2Preis"],apply(){return[]},probability(e,t){if(ie(e,t,{years:1,months:4}))return 0;const n=(v(e,"AutosInInnenstaedtenVerbieten")?1:0)+(v(e,"KohleverstromungEinstellen")?1:0)+(v(e,"SolarAufAllenDaechernVerpflichtend")?1:0)+(v(e,"Tempolimit130AufAutobahnen")?1:0)+(v(e,"Tempolimit120AufAutobahnen")?1:0)+(v(e,"Tempolimit100AufAutobahnen")?1:0);return b(1,3,n)/100}});const rs={AbstandsregelnWindkraft:bn,Altbausanierung:Ii,Bestechung:Bi,EnergieStrategie:Mi,FinanzKollaps:$i,Hitzehoelle:Gi,NewYear:Ni,SocialMedia:Ui,TempolimitAufAutobahnen:Ki,TimesUp:Ji,WahlVerloren:ji,WindkraftAusschreibung:Hi,SolarstromFoerderung:Zi,AtomKatastrophe:Ri,BSE:Yi,Duerrewelle:Qi,PRKohleindustrie:qi,PRInnenminister:Xi,Klimafluechtlinge:es,Plagiatsaffaere:ts,CO2PreisDebatte:ns};function is(e,t){return ie(e,t,{years:3})?0:.05}const Ee=lt(rs).map(e=>N(T({},e),{probability:e.probability||is})),Ne={id:"",currentDate:et,currentYear:de,values:he,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],over:!1,prngState:!0};function Ue(e=Ne,t=Xt()){const n={id:t,currentDate:e.currentDate,currentYear:e.currentYear,acceptedLaws:[...e.acceptedLaws],proposedLaws:[...e.proposedLaws],rejectedLaws:[...e.rejectedLaws],values:fe(e.values),events:[...e.events],over:e.over,prngState:e.prngState};return vn(n),n}const ss=Object.keys(Ne);function Lt(e){return Object.fromEntries(ss.map(t=>{if(t==="prngState")return[t,wn()];if(t==="values"){const n=e[t],r=Ar.map(i=>[i,n[i]]);return[t,Object.fromEntries(r)]}else return[t,e[t]]}))}function Wt(e=oe,t=Ne){const n=Ue(t);return n.acceptedLaws=e.filter(r=>{var i;return(i=r.labels)==null?void 0:i.includes("initial")}).map(r=>({lawId:r.id,effectiveSince:n.currentYear})),n}const me=[...Array(tt-de+1).keys()].map(e=>e+de);function as(e,t){const n={lawId:e,effectiveSince:t.currentYear+1},r=we(n),i=r.effort(t);t.currentDate=ue(t.currentDate).plus(i.time).toJSON();const o=r.removeLawsWithLabels,u=t.acceptedLaws.map(we).filter(f=>!(o==null?void 0:o.some(c=>{var g;return(g=f.labels)==null?void 0:g.includes(c)}))).map(f=>({lawId:f.id,effectiveSince:f.effectiveSince}));return t.acceptedLaws=[...u,n],Ke(t)}function os(e){return e.currentDate=ue(e.currentDate).plus(pn).toJSON(),Ke(e)}function Ke(e,t=oe,n=Ee,r=at){const i=ls(e,n,r);if(i){const u={id:i.id,occuredIn:e.currentDate,acknowledged:!1};e.events.unshift(u)}const o=fs(e,t,(i==null?void 0:i.laws)?i.laws:[]);return e.proposedLaws=ms(e.proposedLaws,o),i}function ls(e,t,n){const r=us(e,t),i=cs(r);if(i)return i;const o=ds(r);return hs(o,n())}function us(e,t){return t.map(n=>N(T({},n),{prob:n.probability(e,n)})).filter(n=>n.prob>0)}function cs(e){return e.filter(t=>t.prob>1).reduce((t,n)=>n.prob>((t==null?void 0:t.prob)||0)?n:t,void 0)}function ds(e){const t=e.map(r=>r.prob).reduce((r,i)=>r+i,0);if(t<=it)return e;const n=it/t;return e.map(r=>N(T({},r),{prob:r.prob*n}))}function hs(e,t){for(const n of e)if(t-=n.prob,t<0)return n}function fs(e,t,n){const r=c=>{var g;return(g=e.acceptedLaws)==null?void 0:g.some(_=>_.lawId===c.id)},i=c=>{var g;return(g=e.rejectedLaws)==null?void 0:g.includes(c.id)},o=c=>{var g;return((g=c.labels)==null?void 0:g.includes("hidden"))||!1},u=c=>({law:c,priority:c.priority(e)}),f=c=>({law:c.law,priority:c.priority+(n.includes(c.law.id)?100:0)});return t.filter(Be(r)).filter(Be(i)).filter(Be(o)).map(u).filter(c=>c.priority>0).map(f).sort((c,g)=>g.priority-c.priority).map(c=>c.law.id).slice(0,rt)}function ms(e,t){const n=[...e],r=t.filter(u=>n.includes(u)),i=t.filter(u=>!r.includes(u));for(var o=0;o<n.length;){if(r.includes(n[o])){o++;continue}if(i.length===0){n.splice(o,1);continue}n[o]=i.shift(),o++}return n.push(...i.slice(0,rt-n.length)),n}function gs(e,t,n){return xt(e,t,n).values}function xt(e,t,n){const r=fe(e.values),i=t.sort((u,f)=>{var c,g;return((c=u.treatAfterLabels)==null?void 0:c.some(_=>{var L;return(L=f.labels)==null?void 0:L.includes(_)}))?1:((g=f.treatAfterLabels)==null?void 0:g.some(_=>{var L;return(L=u.labels)==null?void 0:L.includes(_)}))?-1:0}).filter(u=>u.effectiveSince<=n),o=Ti(i,u=>{const f=Cr(r),c=u.effects(N(T({},e),{values:r}),u.effectiveSince,n);return Ae({dispatch:()=>{},values:r},c),f},(u,f,c)=>r[c]-f[c]);return r.co2budget-=r.co2emissions,{values:r,effectsOfLaws:o}}function Tt(e){return Math.max(0,Math.min(100,e))}function ps(e){if(e.values.co2emissions===0)return 100;const n=e.values.co2budget*fe(he).co2emissions/he.co2budget/e.values.co2emissions;return Tt(n*50)}function bs(e){const t=e.values.stateDebt/he.stateDebt;return Tt(100-t*50)}const ge=[{id:"start",title:"Stell dir vor...",text:s`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du ausw\xE4hlen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die W\xE4hler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine W\xE4hler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];function vs(e,t){return{startGame(n){const r=Wt(),i=Ke(r);t.createGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i}),e.push("/games/"+r.id)},async loadGame(n,r){var i;if(((i=n.state.game)==null?void 0:i.id)!==r.gameId)try{const o=await t.loadGame(r.gameId);t.saveGame(o),e.push("/games/"+o.id),n.commit("setGameState",{game:o})}catch(o){n.dispatch("error",{error:o})}},gameOver(n){n.commit("gameOver",void 0)},acceptLaw(n,r){const i=T({},n.state.game),o=as(r.lawId,i);t.saveGame(i),n.commit("setGameState",{game:i}),n.dispatch("applyEvent",{event:o}),t.decisionMade(i,r.lawId,!0)},rejectLaw(n,r){const i=T({},n.state.game);i.rejectedLaws=[...i.rejectedLaws,r.lawId],t.decisionMade(i,r.lawId,!1),t.saveGame(i),n.commit("setGameState",{game:i})},sitOut(n){const r=T({},n.state.game);t.decisionMade(r,"sitOut",!0);const i=os(r);t.saveGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i})},advanceYear(n){const r=T({},n.state.game),i=r.acceptedLaws.map(we);r.currentYear++,r.values=gs(r,i,r.currentYear),t.saveGame(r),n.commit("setGameState",{game:r})},applyEvent(n,r){if(!r.event)return;const i=T({},n.state.game);t.eventOccurred(i,r.event);const o=r.event.apply(i);n.dispatch("applyEffects",{changes:o})},acknowledgeEvent(n,r){const i=T({},n.state.game);i.events.find(o=>o.id===r.id).acknowledged=!0,t.saveGame(i),n.commit("setGameState",{game:i})},applyEffects(n,r){const i={dispatch:()=>{},values:fe(n.state.game.values)};Ae(i,r.changes);const o=N(T({},n.state.game),{values:i.values});t.saveGame(o),n.commit("setGameState",{game:o});const u={dispatch:n.dispatch};Ae(u,r.changes)},setupTour(n){const r=localStorage.getItem("tour")||ge[0].id,i=ge.find(o=>r===o.id);i?n.commit("setTour",{step:i.id,active:!0}):n.dispatch("stopTour")},nextTourStep(n){const r=ge.findIndex(i=>n.state.tour.step===i.id);if(r<0||r==ge.length-1)n.dispatch("stopTour");else{const i=ge[r+1];n.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(n){n.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},error(n,r){n.commit("error",r)}}}const ws={setGameState(e,t){e.game=t.game},gameOver(e){e.game=N(T({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},ys={proposedLaws(e){return!e.game||!e.game.proposedLaws?[]:Fe(e.game.proposedLaws)}},ks={game:void 0,tour:{active:!0,step:"start"}};var M=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const Ss=e=>(ke("data-v-559eb761"),e=e(),Se(),e),Ds=["onClick"],Ps=Ss(()=>l("br",null,null,-1)),_s={key:0,class:"button-bar"},zs=["onClick"],As=B({props:{law:null,selectable:{type:Boolean},numCards:null},emits:["selected","accepted"],setup(e,{emit:t}){const n=e,r=X(!1),i=D(()=>n.law.zIndex);function o(){t("selected")}function u(){r.value=!0}function f(c){c.animationName.match(/^twistOut-/)&&t("accepted",n.law.id)}return(c,g)=>(h(),p("div",{class:$(["Law",{accepted:r.value}]),style:xe({zIndex:F(i)}),onClick:Z(o,["stop"]),onAnimationend:f},[l("div",null,[l("h3",null,S(e.law.title),1),l("div",null,S(e.law.description),1),Ps,l("div",null,S(e.law.effortComment),1),e.selectable?(h(),p("div",_s,[l("button",{class:"accept",onClick:Z(u,["stop"])},"\u2713",8,zs)])):z("",!0)])],46,Ds))}});var Fs=M(As,[["__scopeId","data-v-559eb761"]]);const Cs=B({setup(e){const t=le(),n=X(0),r=X(!1),i=X(!1),o=D(()=>Dn(u.value.length,n.value)),u=D(()=>t.getters.proposedLaws),f=D(()=>t.state.game),c=D(()=>f.value===void 0?[]:u.value.map((m,A)=>N(T({},m),{zIndex:o.value[A],pos:A,effortComment:m.effort(f.value).text})));function g(m){t.dispatch("acceptLaw",{lawId:m})}function _(m){n.value!=m?n.value=m:(r.value=!r.value,r.value||(i.value=!1))}function L(){t.dispatch("sitOut")}function d(m){r.value&&(i.value=!0)}return(m,A)=>(h(),p(J,null,[l("div",{class:$(["ProposedLaws",{poppedUp:r.value}]),onTransitionend:d},[(h(!0),p(J,null,Q(F(c),(k,C)=>(h(),q(Fs,{key:k.id,law:k,selectable:r.value,numCards:F(c).length,class:"singleLaw",onAccepted:()=>g(k.id),onSelected:()=>_(C)},null,8,["law","selectable","numCards","onAccepted","onSelected"]))),128))],34),I(tn,{name:"fade"},{default:be(()=>[Qe(l("div",{class:"sitOutButton",onClick:A[0]||(A[0]=()=>L())},"Aussitzen",512),[[en,i.value]])]),_:1})],64))}});var Es=M(Cs,[["__scopeId","data-v-5ec925b1"]]);const Ls=B({props:{title:null,text:null},emits:["acknowledge"],setup(e,{emit:t}){function n(){t("acknowledge")}return(r,i)=>(h(),p("div",{onClick:n},[l("h2",null,S(e.title),1),l("p",null,S(e.text),1)]))}});var Ws=M(Ls,[["__scopeId","data-v-63e4a4a9"]]),xs="/assets/money-short.7ce9dbed.png",Ts="/assets/money-less.184321f3.png",Vs="/assets/money-more.44dccbaa.png",Os="/assets/money-much.d486dae1.png";const Is={class:"container"},Bs={class:"title"},Ms={class:"progress-bar"},$s=B({props:{title:null,value:null},setup(e){const t=e,n=D(()=>{const r=t.value>40?"green":t.value>20?"goldenrod":"red";return{width:t.value+"%",backgroundColor:r}});return(r,i)=>(h(),p("div",Is,[l("div",Bs,S(e.title),1),l("div",Ms,[l("div",{class:"indicator",style:xe(F(n))},null,4)])]))}});var Je=M($s,[["__scopeId","data-v-9856b0a2"]]);const Gs={id:"finances"},Ns={key:0,src:xs,id:"short"},Us={key:1,src:Ts,id:"less"},Ks={key:2,src:Vs,id:"more"},Js={key:3,src:Os,id:"much"},js=B({props:{value:null},setup(e){const t=e,n=D(()=>t.value),r=D(()=>t.value<20),i=D(()=>t.value>=20&&t.value<50),o=D(()=>t.value>=50&&t.value<80),u=D(()=>t.value>=80);return(f,c)=>(h(),p("div",Gs,[I(Je,{id:"indicator",title:"Finanzen",value:F(n)},null,8,["value"]),F(r)?(h(),p("img",Ns)):z("",!0),F(i)?(h(),p("img",Us)):z("",!0),F(o)?(h(),p("img",Ks)):z("",!0),F(u)?(h(),p("img",Js)):z("",!0)]))}});var Hs=M(js,[["__scopeId","data-v-0b2fb0e8"]]),Zs="/assets/people-happy.acaffc0b.png",Rs="/assets/people-angry.54c1d60c.png";const Ys={id:"popularity"},Qs={key:0,src:Zs,id:"happy"},qs={key:1,src:Rs,id:"angry"},Xs=B({props:{value:null},setup(e){const t=e,n=D(()=>t.value>=50),r=D(()=>t.value<50);return(i,o)=>(h(),p("div",Ys,[I(Je,{id:"indicator",title:"Beliebtheit",value:e.value},null,8,["value"]),F(n)?(h(),p("img",Qs)):z("",!0),F(r)?(h(),p("img",qs)):z("",!0)]))}});var ea=M(Xs,[["__scopeId","data-v-4cf2dbec"]]),ta="/assets/plant-healthy.97772624.png",na="/assets/plant-sick.5a0f1b46.png",ra="/assets/plant-withered.b50106c7.png";const ia={id:"plant"},sa=["src","id"],aa=B({props:{value:null},setup(e){const t=e,n={healthy:ta,sick:na,withered:ra},r=D(()=>t.value>66?"healthy":t.value>33?"sick":"withered"),i=D(()=>n[r.value]);return(o,u)=>(h(),p("div",ia,[I(Je,{id:"indicator",title:"CO2-Budget",value:e.value},null,8,["value"]),l("img",{src:F(i),id:F(r)},null,8,sa)]))}});var oa=M(aa,[["__scopeId","data-v-2db3389a"]]);const la={id:"calendar"},ua=B({props:{year:null,month:null},setup(e){const t=e,n=D(()=>{const r=Math.floor((t.month-1)/4)*18+27+"%",i=(t.month-1)%4*21+12+"%";return{top:r,left:i}});return(r,i)=>(h(),p("div",la,[U(S(e.year)+" ",1),l("span",{id:"month-indicator",style:xe(F(n))},null,4)]))}});var ca=M(ua,[["__scopeId","data-v-78901c78"]]),da="/assets/heater.43006232.png";const ha={},fa=e=>(ke("data-v-c9039a0c"),e=e(),Se(),e),ma={id:"heater"},ga=fa(()=>l("img",{src:da},null,-1)),pa=[ga];function ba(e,t){return h(),p("div",ma,pa)}var va=M(ha,[["render",ba],["__scopeId","data-v-c9039a0c"]]),wa="/assets/table-top.c87bd2fd.png",Vt="/assets/table-front.78c0f8c6.png",Ot="/assets/table-side.49774a53.png";const ya={},ka={id:"table"},Sa=qe('<img src="'+wa+'" id="table-top" data-v-1ef8d93c><img src="'+Vt+'" id="table-front" data-v-1ef8d93c><img src="'+Vt+'" id="table-back" data-v-1ef8d93c><img src="'+Ot+'" id="table-left-side" data-v-1ef8d93c><img src="'+Ot+'" id="table-right-side" data-v-1ef8d93c>',5),Da=[Sa];function Pa(e,t){return h(),p("div",ka,Da)}var _a=M(ya,[["render",Pa],["__scopeId","data-v-1ef8d93c"]]),za="/assets/board-front.41330f02.png",It="/assets/board-side.d7181ded.png",Aa="/assets/tv-front.82df5c0c.png",Fa="/assets/news.c4bbc2d0.png",Bt="/assets/tvset-legs.78b387df.png";const Ca=B({props:{withNews:Boolean}}),Mt=e=>(ke("data-v-118e7bdf"),e=e(),Se(),e),Ea={id:"tvset"},La=qe('<div id="board" data-v-118e7bdf><img id="board-front" src="'+za+'" data-v-118e7bdf><img id="board-left" src="'+It+'" data-v-118e7bdf><img id="board-right" src="'+It+'" data-v-118e7bdf><div id="board-top" data-v-118e7bdf></div></div>',1),Wa={id:"tv"},xa=Mt(()=>l("img",{id:"tv-front",src:Aa},null,-1)),Ta={key:0,id:"news",src:Fa},Va=Mt(()=>l("div",{id:"legs"},[l("img",{id:"legs-front",src:Bt}),l("img",{id:"legs-back",src:Bt})],-1));function Oa(e,t,n,r,i,o){return h(),p("div",Ea,[La,l("div",Wa,[xa,e.withNews?(h(),p("img",Ta)):z("",!0)]),Va])}var Ia=M(Ca,[["render",Oa],["__scopeId","data-v-118e7bdf"]]);const Ba={},Ma={class:"dialog"},$a={class:"buttons"};function Ga(e,t){return h(),p("div",Ma,[Te(e.$slots,"default",{},void 0,!0),l("div",$a,[Te(e.$slots,"buttons",{},void 0,!0)])])}var $t=M(Ba,[["render",Ga],["__scopeId","data-v-6a8bb0fa"]]);const Na=B({setup(){const e=le();return e.dispatch("setupTour"),{store:e}},components:{Dialog:$t},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return ge.find(e=>e.id===this.$store.state.tour.step)},title(){var e;return(e=this.currentStep)==null?void 0:e.title},text(){var e;return(e=this.currentStep)==null?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var n;const t=document.querySelector(".highlighted");t&&t.classList.remove("highlighted"),e&&e.highlight&&((n=document.querySelector(`#${e.highlight}`))==null||n.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}}),Ua=["innerHTML"];function Ka(e,t,n,r,i,o){const u=re("Dialog");return e.title&&e.text?(h(),q(u,{key:0},{buttons:be(()=>[l("button",{onClick:t[0]||(t[0]=(...f)=>e.stop&&e.stop(...f))},"Tour beenden"),l("button",{onClick:t[1]||(t[1]=(...f)=>e.next&&e.next(...f))},"Weiter")]),default:be(()=>[l("h2",null,S(e.title),1),l("div",{innerHTML:e.text},null,8,Ua)]),_:1})):z("",!0)}var Ja=M(Na,[["render",Ka]]);const ja=B({components:{Dialog:$t},setup(){return{store:le()}},computed:{co2(){var n,r;const e=(n=this.store.state.game)==null?void 0:n.values.co2budget;return((r=this.store.state.game)==null?void 0:r.values.co2emissions)>0?e>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. H\xE4tte die AfD nicht besser hinbekommen.":e>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken k\xF6nnen. Punktlandung."},debt(){var t;return((t=this.store.state.game)==null?void 0:t.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilit\xE4tskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var t;const e=(t=this.store.state.game)==null?void 0:t.values.popularity;return e<20?"entspricht dem, was man von einem langh\xE4hrigen Diktator erwarten kann.":e<50?"ist nicht berauschend, wiedergew\xE4hlt w\xFCrdest du wohl eher nicht.":e<80?"reicht aus, dass du noch l\xE4nger am Ruder bleiben k\xF6nntest. Gratulation!":"ist v\xF6llig unglaubw\xFCrdig - war das wirklich eine freie Wahl?"}},methods:{newGame(){this.store.dispatch("startGame")}}}),Ha=l("h2",null,"Das Spiel ist leider zu Ende",-1),Za=l("p",null,"Deine Entscheidungen haben etwas ver\xE4ndert - soviel kann man sagen.",-1),Ra=l("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Ya={class:"button-bar"};function Qa(e,t,n,r,i,o){const u=re("Dialog");return h(),q(u,null,{default:be(()=>[Ha,Za,l("ul",null,[l("li",null,"Die CO2-Emmissionen "+S(e.co2),1),l("li",null,"Die Staatsfinanzen "+S(e.debt),1),l("li",null,"Deine Beliebtheit "+S(e.popularity),1)]),Ra,l("div",Ya,[l("button",{onClick:t[0]||(t[0]=(...f)=>e.newGame&&e.newGame(...f))},"Neuer Versuch")])]),_:1})}var qa=M(ja,[["render",Qa]]);const Xa={class:"game-setup"},eo=l("h1",null,"#ich-kann-klima",-1),to=l("div",{id:"walls"},[l("div",{id:"wall-back"}),l("div",{id:"wall-left"}),l("div",{id:"wall-right"})],-1),no=B({setup(e){const t=le(),n=D(()=>{const m=t.state.game;if(!m)return;const A=m.currentDate;return m.events.filter(k=>k.occuredIn===A&&!k.acknowledged)[0]}),r=D(()=>{const m=n.value;if(m!==void 0)return Ee.find(A=>A.id===m.id)}),i=D(()=>{var m;return((m=r.value)==null?void 0:m.title)||""}),o=D(()=>{var m;return((m=r.value)==null?void 0:m.description)||""}),u=D(()=>{var m;return((m=t.state.game)==null?void 0:m.currentYear)||2021}),f=D(()=>{var m;return ue((m=t.state.game)==null?void 0:m.currentDate).lux.month}),c=D(()=>{const m=t.state.game;return m?bs(m):0}),g=D(()=>{var m;return((m=t.state.game)==null?void 0:m.values.popularity)||100}),_=D(()=>{const m=t.state.game;return m?ps(m):0}),L=D(()=>{const m=t.state.game;return m?m.over:!1});function d(){t.dispatch("acknowledgeEvent",r.value)}return(m,A)=>(h(),p("div",Xa,[eo,to,I(ca,{year:F(u),month:F(f)},null,8,["year","month"]),I(va),I(ea,{value:F(g)},null,8,["value"]),I(Ia,{"with-news":!!F(n)},null,8,["with-news"]),I(oa,{value:F(_)},null,8,["value"]),I(_a),I(Hs,{value:F(c)},null,8,["value"]),I(Es),F(n)?(h(),q(Ws,{key:0,title:F(i),text:F(o),onAcknowledge:d},null,8,["title","text"])):z("",!0),I(Ja),F(L)?(h(),q(qa,{key:1})):z("",!0)]))}});const ro=["onClick"],io=B({setup(e){const t=le(),n=D(()=>{var u;return(u=t.state.game)==null?void 0:u.acceptedLaws}),r=X(void 0),i=D(()=>oe.filter(u=>{var f,c;return((f=n.value)==null?void 0:f.some(g=>g.lawId===u.id))&&!((c=u.labels)==null?void 0:c.includes("hidden"))}));function o(u){r.value=r.value===u?void 0:u}return(u,f)=>(h(!0),p(J,null,Q(F(i),(c,g)=>(h(),p("div",{key:g,class:$(["Law",{opened:g===r.value}]),onClick:_=>o(g)},[l("h3",null,S(c.title),1),l("div",null,S(c.description),1)],10,ro))),128))}});var so=M(io,[["__scopeId","data-v-7efa2df1"]]);const ao=B({components:{GameSetup:no,AcceptedLaws:so},setup(){return{store:le()}},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,n){n(r=>r.startGame(e.params.id))}});function oo(e,t,n,r,i,o){const u=re("GameSetup");return h(),q(u)}var Gt=M(ao,[["render",oo],["__scopeId","data-v-3637ce73"]]);const lo=[{path:"/",redirect:"/games"},{path:"/games",component:Gt},{path:"/games/:id",component:Gt}],Nt=nn({history:rn(),routes:lo});function uo(e){return{createGame(t){return e.add("post","/games",t)},loadGame(t){return e.add("get","/games/"+t,void 0,0)},saveGame(t){return e.remove("put","/games/"+t.id),e.add("put","/games/"+t.id,t)},decisionMade(t,n,r){return e.add("post","/games/"+t+"/decisions/"+n,{accepted:r})},eventOccurred(t,n){return e.add("post","/games/"+t+"/events/"+n)}}}function co(e,t){let n=[],r;async function i(){if(r&&(clearTimeout(r),r=void 0),n.length){const o=n[0],{method:u,path:f,data:c,retry:g,resolve:_,reject:L}=o;try{if((t==null?void 0:t.navigator)&&!(t==null?void 0:t.navigator.onLine))throw Error("Browser is offline");const d=await e(u,f,c);n.shift(),_(d)}catch(d){g?o.retry=Math.max(-1,g-1):(n.shift(),L(d))}n.length&&(r=setTimeout(i,(t==null?void 0:t.timeout)||1e4))}}return{add(o,u,f,c=-1){return new Promise((g,_)=>{n.push({method:o,path:u,data:f,retry:c,resolve:g,reject:_}),r||i()})},remove(o,u){n=n.filter(f=>f.method.toLowerCase()!==o.toLowerCase()||f.path!==u)},callsPending(){return n.length>0}}}function ho(e,t,n=console){return async function(r,i,o){var u;try{const f={method:r};["post","put","patch"].includes(r)&&(f.body=JSON.stringify(o),f.headers={["content-type"]:"application/json"});const c=await t(e+i,f),g=((u=c.headers.get("Content-Type"))==null?void 0:u.match(/json/))?await c.json():await c.text();if(c.ok)return g;throw Error(g.message||g)}catch(f){throw n.error(f),f}}}function fo({api:e,logger:t=console,storage:n=localStorage}){return{createGame(r){const i=Lt(r);n.setItem("game",JSON.stringify(i)),e.createGame(i).catch(o=>{t.warn("Cannot save new game - trying again later",o)})},async loadGame(r){const i=n.getItem("game");if(i){const u=JSON.parse(i);if(u.id===r)return Ue(u,r)}const o=await e.loadGame(r);return Ue(o,r)},saveGame(r){const i=Lt(r);n.setItem("game",JSON.stringify(i)),e.saveGame(i).catch(o=>{t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",o)})},decisionMade(r,i,o){e.decisionMade(r.id,i,o)},eventOccurred(r,i){e.eventOccurred(r.id,i.id)}}}const mo=localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",go=ho(mo,fetch),po=co(go),bo=uo(po),vo=fo({api:bo}),wo=vs(Nt,vo),Ut=Symbol();function le(){return sn(Ut)}const yo=an({state:ks,mutations:ws,actions:wo,getters:ys});function Kt(e,t,...n){for(const r of n){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function ko(e,t,n){function r(c){return e[c].toFixed(2)}function i(c){return(c>0?"+":"")+c.toFixed(2)}function o(c){const g=n.find(_=>_.type==="modify"&&_.name===c);return g&&g.condition?g.value:0}function u(c){const g=o(c),_=t?t[c]:0;return g&&Math.abs(g-_)<.001?i(g):g?i(g)+" / "+i(_):_!=0?i(_):""}return zt.map(c=>({id:c.name,unit:c.unit,value:r(c.name),effect:u(c.name),class:c.writable?"writable":"calculated"}))}function So(e,t,n,r){const i=e.proposedLaws,o=e.acceptedLaws.map(c=>c.lawId),u=e.rejectedLaws;function f(c){return o.includes(c)?"a":i.includes(c)?"p":u.includes(c)?"r":"x"}return r.map(c=>({id:c.id,priority:c.priority(e),state:f(c.id)})).sort((c,g)=>Kt(c,g,t,"id")*n).map(c=>N(T({},c),{priority:c.priority.toFixed(2)}))}function Do(e,t,n,r){return r.map(i=>({id:i.id,probability:i.probability(e,i)})).sort((i,o)=>Kt(i,o,t,"id")*n).map(i=>N(T({},i),{probability:(i.probability*100).toFixed(2)}))}const Po={key:0},_o=["href"],zo=U(". "),Ao={key:1},Fo={key:2},Co=U("Bemerkung: "),Eo=["innerHTML"],Lo=U(". "),Wo={key:3},xo=U("Internes: "),To=["innerHTML"],Vo=U(". "),Oo={key:4},Io=["href"],Bo=U(". "),Mo={key:5},$o=["href"],Go=U(". "),No={key:6},Uo=["href"],Ko=U(". "),Jo=B({props:{citation:null,showInternals:{type:Boolean}},setup(e){const t=e,n=D(()=>t.citation.url.toString()),r=D(()=>t.citation.title||t.citation.url.toString());return(i,o)=>(h(),p("p",null,[e.citation.authors?(h(),p("span",Po,S(e.citation.authors+e.citation.dateString())+". ",1)):z("",!0),l("a",{target:"_blank",rel:"noreferrer noopener",href:F(n)},'"'+S(F(r))+'"',9,_o),zo,e.citation.publisher?(h(),p("span",Ao,S(e.citation.publisher)+". ",1)):z("",!0),e.citation.comment?(h(),p("span",Fo,[Co,l("span",{innerHTML:e.citation.comment},null,8,Eo),Lo])):z("",!0),e.showInternals&&e.citation.internalComment?(h(),p("span",Wo,[xo,l("span",{innerHTML:e.citation.internalComment},null,8,To),Vo])):z("",!0),e.citation.referringUrl?(h(),p("span",Oo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,Io),Bo])):z("",!0),e.citation.archiveUrl?(h(),p("span",Mo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,$o),Go])):z("",!0),e.citation.localCopy?(h(),p("span",No,[l("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,Uo),Ko])):z("",!0)]))}}),jo=B({props:{chartData:null,paramId:null,selectedYear:null},emits:["update:selectedYear"],setup(e,{emit:t}){const n=e,r="#9c6d00",i="#ce900070",o="#644600",u=D(()=>({xaxis:{categories:me,labels:{rotate:-90}},chart:{id:n.paramId+"-withLawEffects",animations:{enabled:!1},stacked:!0},colors:[r,o,i],legend:{show:!1},markers:{size:0},dataLabels:{enabled:!1}})),f=D(()=>n.chartData.values.map((k,C)=>({value:k[n.paramId],change:n.chartData.changes[C][n.paramId]}))),c=D(()=>f.value.map(k=>{const C=k.value-k.change;return k.change*k.value>0?C*k.value>0?{value:C,gain:k.change,loss:0}:{value:0,gain:k.value,loss:C}:{value:k.value,gain:0,loss:-k.change}})),g=D(()=>[{name:"Simulated "+n.paramId,data:c.value.map(k=>Math.round(k.value))},{name:"Gains of "+n.paramId+" by selected law",data:c.value.map(k=>Math.round(k.gain))},{name:"Losses of "+n.paramId+" by selected law",data:c.value.map(k=>Math.round(k.loss))}]),_=X();let L;function d(){var k,C;((k=_.value)==null?void 0:k.chart)!=null&&L!=null&&((C=_.value)==null||C.toggleDataPointSelection(0,L)),L=void 0}function m(k){var C,G;if(((C=_.value)==null?void 0:C.chart)!=null&&k){const Y=k-me[0];L!=Y&&(d(),L=Y,(G=_.value)==null||G.toggleDataPointSelection(0,Y))}else d()}on(()=>m(n.selectedYear),{flush:"post"});function A(k,C,G){const Y=G.dataPointIndex;Y<0||(Y===L?(L=void 0,t("update:selectedYear",void 0)):(L=Y,t("update:selectedYear",Y+me[0])))}return(k,C)=>(h(),p("div",null,[l("div",null,S(e.paramId),1),I(F(ln),{ref_key:"chart",ref:_,type:"bar",options:F(u),series:F(g),onClick:A},null,8,["options","series"])]))}}),Ho=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"DaemmungAltbau4Percent",effectiveSince:2022},{lawId:"ForschungEmissionsfreieZementproduktion",effectiveSince:2023},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024},{lawId:"ForschungEmissionsfreieStahlproduktion",effectiveSince:2024},{lawId:"FernverkehrModernisieren",effectiveSince:2025},{lawId:"NahverkehrModernisieren",effectiveSince:2026},{lawId:"FernverkehrVerbindungenAusbauen",effectiveSince:2026},{lawId:"NahverkehrAusbauen",effectiveSince:2026},{lawId:"LadeinfrastrukturAusbauen",effectiveSince:2026},{lawId:"NahverkehrKostenlos",effectiveSince:2027},{lawId:"DienstwagenPrivilegAbgeschaffen",effectiveSince:2027},{lawId:"ElektromobilitaetFoerdern",effectiveSince:2027},{lawId:"WasserstoffmobilitaetFoerdern",effectiveSince:2027}]}],Le=(e,t)=>e.lawId===t.lawId&&e.effectiveSince===t.effectiveSince,Zo=e=>e.map((t,n)=>N(T({},t),{sortId:n}));function Ro(...e){const t=e.map(n=>n.length===0?0:n[n.length-1].sortId+1);return t.length===0?0:Math.max.apply(Math,t)}function Yo(e){const t=X([]),n=X([]),r=X(!1);function i(A,k){var He;const C=t.value,G={lawId:A,effectiveSince:k,sortId:0},Y=(He=n.value.find(pe=>Le(G,pe)))==null?void 0:He.sortId;G.sortId=Y!=null?Y:Ro(C,n.value),t.value=C.filter(pe=>pe.lawId!=A).concat(G).sort((pe,jt)=>pe.sortId-jt.sortId)}function o(A){t.value=t.value.filter(k=>k.lawId!=A)}function u(A,k){const C={lawId:A,effectiveSince:k,sortId:0};t.value.some(G=>Le(G,C))?o(A):i(A,k)}function f(A){t.value=Zo(A.laws)}function c(){r.value=!r.value,r.value?n.value=t.value:n.value=[]}const g=D(()=>{var A;return{name:"Current Game",laws:((A=e.value)==null?void 0:A.acceptedLaws)||[]}}),_=D(()=>[g.value,...Ho]),L=D(()=>{const A=t.value.map(C=>N(T({},C),{cls:n.value.some(G=>Le(C,G))?"both":"new"})),k=n.value.filter(C=>!t.value.some(G=>Le(G,C))).map(C=>N(T({},C),{cls:"saved"}));return[...A,...k].sort((C,G)=>C.sortId-G.sortId)}),d=Jt(t),m=Jt(n);return{addToSimulation:i,removeFromSimulation:o,toggleInSimulation:u,loadPreset:f,compareActive:r,toggleCompare:c,presets:_,simulatedLaws:L,simulation:d,secondSimulation:m}}function Jt(e){return D(()=>{const t=Wt();return t.acceptedLaws=[...e.value],me.map(r=>{for(;r>t.currentYear;){t.currentYear++,t.acceptedLaws=Qo(t.acceptedLaws,t.currentYear);const i=t.acceptedLaws.map(f=>we(f)),{values:o,effectsOfLaws:u}=xt(t,i,t.currentYear);if(t.values=o,r===t.currentYear)return{values:o,effectsOfLaws:u}}return{values:t.values,effectsOfLaws:{}}})})}function Qo(e,t){const n=e.map(i=>we(i)),r=n.filter(i=>i.effectiveSince===t).flatMap(i=>i.removeLawsWithLabels||[]);return n.filter(i=>i.effectiveSince>=t||!r.some(o=>{var u;return(u=i.labels)==null?void 0:u.includes(o)})).map(i=>({lawId:i.id,effectiveSince:i.effectiveSince}))}const qo=B({directives:{clickaway:Xe},setup(e,t){const n=X(!1);return{menuIsOpen:n,toggle:()=>n.value=!n.value,close:()=>n.value=!1}}});function Xo(e,t,n,r,i,o){const u=un("clickaway");return Qe((h(),p("span",{onClick:t[0]||(t[0]=(...f)=>e.toggle&&e.toggle(...f)),class:$(["menu",{menuIsOpen:e.menuIsOpen}])},[Te(e.$slots,"default",{},void 0,!0)],2)),[[u,e.close]])}var el=M(qo,[["render",Xo],["__scopeId","data-v-06206e01"]]);const tl=B({directives:{clickaway:Xe},components:{Citation:Jo,PeekChart:jo,Menu:el},setup(){const e=le(),t=D(()=>e.state.game),n=Yo(t);return T({store:e,game:t,gameYears:me},n)},data(){return{lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lastSelected:void 0,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,yearSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1}},methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){e===this.lawSelected?this.lawSelected=void 0:(this.lastSelected="law",this.lawSelected=e)},selectEvent(e){e===this.eventSelected?this.eventSelected=void 0:(this.lastSelected="event",this.eventSelected=e)},selectParam(e){e===this.paramSelected?this.paramSelected=void 0:(this.lastSelected="param",this.paramSelected=e)},selectYear(e){e===this.yearSelected?this.yearSelected=void 0:(this.lastSelected="year",this.yearSelected=e)},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0,this.yearSelected=void 0},dragStart(e,t){const{lawId:n,year:r}=t;!e.dataTransfer||(e.dataTransfer.dropEffect="link",n&&e.dataTransfer.setData("lawId",n),r&&e.dataTransfer.setData("year",r.toString()))},getDropped(e,t,n){if(!e.dataTransfer)return;const r=e.dataTransfer.getData(t);return n.find(i=>i==r)},onDrop(e,t){const{lawId:n,year:r}=t,i=this.getDropped(e,"lawId",Li),o=this.getDropped(e,"year",this.gameYears);r&&i?this.addToSimulation(i,r):n&&o?this.addToSimulation(n,o):n&&i&&this.removeFromSimulation(i)},rightClick(e,t){this.toggleInSimulation(e,t)}},computed:{startYearOfSelected(){if(!this.lawSelected)return;if(!this.game)return de;const e=this.simulatedLaws.find(t=>t.lawId===this.lawSelected);return e?e.effectiveSince:this.game.currentYear},selectedLaw(){return oe.find(e=>e.id===this.lawSelected)},lawEffort(){var e;if(!!this.game)return(e=this.selectedLaw)==null?void 0:e.effort(this.game)},selectedEvent(){return Ee.find(e=>e.id===this.eventSelected)},selectedParam(){return this.paramSelected?R[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof P?e:void 0},cParam(){const e=this.selectedParam;return e instanceof H?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},currentYear(){return this.yearSelected?this.yearSelected:this.game?this.game.currentYear:de},effectsOfSelected(){return!this.selectedLaw||!this.startYearOfSelected||!this.game?[]:this.selectedLaw.effects(this.game,this.startYearOfSelected,this.currentYear)},sortedValues(){return this.game?ko(this.simOfYear.values,this.effectsOfLawInYear,this.effectsOfSelected):[]},sortedLaws(){return this.game?So(this.game,this.lawsSortCol,this.lawsSortDir,oe):[]},sortedEvents(){return this.game?Do(this.game,this.eventsSortCol,this.eventsSortDir,Ee):[]},effectsOfLawInYear(){if(this.lawSelected)return this.simOfYear.effectsOfLaws[this.lawSelected];if(this.yearSelected)return this.simEffectOfLaw[this.yearSelected-this.gameYears[0]]},simOfYear(){if(this.yearSelected===void 0&&this.game){const e=this.effectsOfSelected,t=this.game.values;if(this.lawSelected===void 0||e.length===0)return{values:t,effectsOfLaws:{}};const n=fe(t);Ae({dispatch:()=>{},values:n},e);const i=Object.fromEntries(Dt.map(o=>[o,n[o]-t[o]]));return{values:t,effectsOfLaws:{[this.lawSelected]:i}}}else{const e=this.yearSelected?this.yearSelected-this.gameYears[0]:0;return this.simulation[e]}},simulatedValues(){return this.simulation.map(e=>e.values)},simEffectOfLaw(){if(this.lawSelected){const e=this.lawSelected;return this.simulation.map(t=>{const n=t.effectsOfLaws[e];return n||At})}return this.compareActive?this.secondSimulation.map((e,t)=>Object.fromEntries(Object.entries(e.values).map(([n,r])=>[n,this.simulation[t].values[n]-r]))):me.map(e=>At)},chartData(){return{values:this.simulatedValues,changes:this.simEffectOfLaw}},lawsInYear(){return e=>this.simulatedLaws.filter(t=>t.effectiveSince===e)}}}),ee=e=>(ke("data-v-85b0da02"),e=e(),Se(),e),nl={class:"peekData"},rl={class:"Menu"},il=U("\xA0 "),sl=U("\xA0 "),al=U("\xA0 "),ol=U("\xA0 "),ll=U("\xA0 "),ul=U("\xA0 "),cl={key:1,class:"Details sidebyside"},dl={class:"Title"},hl={class:"Description"},fl={class:"SectionHead"},ml={class:"Section"},gl=ee(()=>l("div",{class:"SectionHead"},"Details:",-1)),pl=["innerHTML"],bl=ee(()=>l("div",{class:"SectionHead"},"Internes:",-1)),vl=["innerHTML"],wl=ee(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),yl={key:2,class:"Details sidebyside"},kl={class:"Title"},Sl={class:"Description"},Dl=ee(()=>l("div",{class:"SectionHead"},"Details:",-1)),Pl=["innerHTML"],_l=ee(()=>l("div",{class:"SectionHead"},"Internes:",-1)),zl=["innerHTML"],Al=ee(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),Fl={key:3,class:"Details sidebyside"},Cl={class:"Title"},El={key:0},Ll={key:1},Wl={key:2},xl=ee(()=>l("div",{class:"SectionHead"},"Details:",-1)),Tl=["innerHTML"],Vl=ee(()=>l("div",{class:"SectionHead"},"Internes:",-1)),Ol=["innerHTML"],Il=ee(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),Bl={class:"paramsHeader"},Ml=["onClick"],$l={class:"numbercol"},Gl={class:"effcol"},Nl={key:5,class:"lawList sidebyside"},Ul=["onClick","onDragstart","onDrop"],Kl={class:"priocol"},Jl={key:6,class:"eventList sidebyside"},jl=["onClick"],Hl={class:"priocol"},Zl={key:7,class:"yearList sidebyside"},Rl=ee(()=>l("a",{class:"clickable"},"Presets",-1)),Yl={class:"dropdown"},Ql=["onClick"],ql=U("\xA0 "),Xl=["onClick","onDragstart","onDrop"],eu=["onClick","onContextmenu","onDragstart","onDrop"];function tu(e,t,n,r,i,o){var g,_,L;const u=re("PeekChart"),f=re("Citation"),c=re("Menu");return h(),p("details",nl,[l("summary",{onClick:t[0]||(t[0]=d=>e.unselect()),class:"clickable"},"Peek"),l("div",rl,[l("a",{onClick:t[1]||(t[1]=d=>e.showCharts=!e.showCharts),class:$(["clickable",e.showCharts?"selected":""])},"Charts",2),il,l("a",{onClick:t[2]||(t[2]=d=>e.showDetails=!e.showDetails),class:$(["clickable",e.showDetails?"selected":""])},"Details",2),sl,l("a",{onClick:t[3]||(t[3]=d=>e.showParams=!e.showParams),class:$(["clickable",e.showParams?"selected":""])},"Params",2),al,l("a",{onClick:t[4]||(t[4]=d=>e.toggleLawList()),class:$(["clickable",e.showLaws?"selected":""])},"Laws",2),ol,l("a",{onClick:t[5]||(t[5]=d=>e.toggleEventList()),class:$(["clickable",e.showEvents?"selected":""])},"Events",2),ll,l("a",{onClick:t[6]||(t[6]=d=>e.showYears=!e.showYears),class:$(["clickable",e.showYears?"selected":""])},"Years",2),ul]),e.showCharts?(h(),p("div",{key:0,class:$(["Details sidebyside",{lawSelected:e.lawSelected!=null}])},[e.paramSelected?(h(),q(u,{key:0,selectedYear:e.yearSelected,"onUpdate:selectedYear":t[7]||(t[7]=d=>e.yearSelected=d),chartData:e.chartData,paramId:e.paramSelected},null,8,["selectedYear","chartData","paramId"])):z("",!0),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[8]||(t[8]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"co2emissions"},null,8,["selectedYear","chartData"]),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[9]||(t[9]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"popularity"},null,8,["selectedYear","chartData"]),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[10]||(t[10]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"stateDebt"},null,8,["selectedYear","chartData"]),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[11]||(t[11]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"co2budget"},null,8,["selectedYear","chartData"])],2)):z("",!0),e.lastSelected==="law"&&e.selectedLaw&&e.showDetails?(h(),p("div",cl,[l("div",dl,S(e.selectedLaw.title),1),l("div",hl,S(e.selectedLaw.description),1),l("div",fl,"Aufwand: "+S((g=e.lawEffort)==null?void 0:g.time.toMonthsString()),1),l("div",ml,S((_=e.lawEffort)==null?void 0:_.text),1),gl,l("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,pl),bl,l("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,vl),wl,(h(!0),p(J,null,Q(e.citationsOfLaw,(d,m)=>(h(),q(f,{class:"Section",key:m,citation:d},null,8,["citation"]))),128))])):z("",!0),e.lastSelected==="event"&&e.selectedEvent&&e.showDetails?(h(),p("div",yl,[l("div",kl,S(e.selectedEvent.title),1),l("div",Sl,S(e.selectedEvent.description),1),Dl,l("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,Pl),_l,l("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,zl),Al,(h(!0),p(J,null,Q((L=e.selectedEvent)==null?void 0:L.citations,(d,m)=>(h(),q(f,{class:"Section",key:m,citation:d},null,8,["citation"]))),128))])):z("",!0),e.lastSelected==="param"&&e.selectedParam&&e.showDetails?(h(),p("div",Fl,[l("div",Cl,S(e.paramSelected)+" ["+S(e.selectedParam.unit)+"]",1),e.wParam?(h(),p("div",El,"Initial value: "+S(e.wParam.initialValue)+" "+S(e.wParam.unit),1)):z("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(h(),p("div",Ll," Should initially be: "+S(e.cParam.shouldInitiallyBe)+" "+S(e.cParam.unit),1)):z("",!0),e.cParam?(h(),p("div",Wl," Calculation: "+S(e.cParam.valueGetter),1)):z("",!0),xl,l("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,Tl),Vl,l("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,Ol),Il,(h(!0),p(J,null,Q(e.selectedParam.citations,(d,m)=>(h(),q(f,{class:"Section",key:m,citation:d},null,8,["citation"]))),128))])):z("",!0),e.showParams?(h(),p("div",{key:4,class:$(["paramsList sidebyside",{lawSelected:e.lawSelected!=null}])},[l("div",Bl,[l("div",null,"Start of law: "+S(e.startYearOfSelected),1),l("div",null,"Current year: "+S(e.currentYear),1)]),l("table",null,[(h(!0),p(J,null,Q(e.sortedValues,d=>(h(),p("tr",{key:d.id,class:$({clickable:!0,selected:e.paramSelected===d.id,[d.class]:!0}),onClick:m=>e.selectParam(d.id)},[l("td",null,S(d.id),1),l("td",$l,S(d.value),1),l("td",Gl,S(d.effect),1),l("td",null,S(d.unit),1)],10,Ml))),128))])],2)):z("",!0),e.showLaws?(h(),p("div",Nl,[l("table",null,[l("tr",null,[l("th",{onClick:t[12]||(t[12]=d=>e.sortLaws("state")),class:"clickable"},"S"),l("th",{onClick:t[13]||(t[13]=d=>e.sortLaws("id")),class:"clickable"},"ID"),l("th",{onClick:t[14]||(t[14]=d=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(h(!0),p(J,null,Q(e.sortedLaws,d=>(h(),p("tr",{key:d.id,class:$({clickable:!0,selected:e.lawSelected===d.id,[d.state]:!0}),onClick:m=>e.selectLaw(d.id),draggable:"true",onDragstart:m=>e.dragStart(m,{lawId:d.id}),onDrop:Z(m=>e.onDrop(m,{lawId:d.id}),["prevent"]),onDragover:t[15]||(t[15]=Z(()=>{},["prevent"])),onDragenter:t[16]||(t[16]=Z(()=>{},["prevent"]))},[l("td",null,S(d.state),1),l("td",null,S(d.id),1),l("td",Kl,S(d.priority),1)],42,Ul))),128))])])):z("",!0),e.showEvents?(h(),p("div",Jl,[l("table",null,[l("tr",null,[l("th",{onClick:t[17]||(t[17]=d=>e.sortEvents("id")),class:"clickable"},"ID"),l("th",{onClick:t[18]||(t[18]=d=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(h(!0),p(J,null,Q(e.sortedEvents,d=>(h(),p("tr",{key:d.id,class:$({clickable:!0,selected:e.eventSelected===d.id}),onClick:m=>e.selectEvent(d.id)},[l("td",null,S(d.id),1),l("td",Hl,S(d.probability),1)],10,jl))),128))])])):z("",!0),e.showYears?(h(),p("div",Zl,[l("div",null,[I(c,null,{default:be(()=>[Rl,l("ul",Yl,[(h(!0),p(J,null,Q(e.presets,d=>(h(),p("li",{key:d.name,class:"clickable",onClick:m=>e.loadPreset(d)},S(d.name),9,Ql))),128))])]),_:1}),ql,l("a",{class:$(["clickable",e.compareActive?"selected":""]),onClick:t[19]||(t[19]=d=>e.toggleCompare())},"Compare",2)]),l("table",null,[(h(!0),p(J,null,Q(e.gameYears,d=>(h(),p(J,{key:d},[l("tr",{class:$({clickable:!0,selected:e.yearSelected===d}),onClick:m=>e.selectYear(d),draggable:"true",onDragstart:m=>e.dragStart(m,{year:d}),onDrop:Z(m=>e.onDrop(m,{year:d}),["prevent"]),onDragover:t[20]||(t[20]=Z(()=>{},["prevent"])),onDragenter:t[21]||(t[21]=Z(()=>{},["prevent"]))},[l("th",null,S(d),1)],42,Xl),(h(!0),p(J,null,Q(e.lawsInYear(d),({lawId:m,cls:A})=>(h(),p("tr",{key:m,class:$({clickable:!0,selected:e.lawSelected===m,[A]:!0}),onClick:k=>e.selectLaw(m),onContextmenu:Z(k=>e.rightClick(m,d),["right","prevent"]),draggable:"true",onDragstart:k=>e.dragStart(k,{lawId:m}),onDrop:Z(k=>e.onDrop(k,{year:d}),["prevent"]),onDragover:t[22]||(t[22]=Z(()=>{},["prevent"])),onDragenter:t[23]||(t[23]=Z(()=>{},["prevent"]))},[l("td",null,S(m),1)],42,eu))),128))],64))),128))])])):z("",!0)])}var nu=M(tl,[["render",tu],["__scopeId","data-v-85b0da02"]]);const ru=B({components:{PeekInside:nu},setup(){return{store:le(),devMode:localStorage.getItem("devMode")==="true"}},methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,n=Math.min(e/800,t/1e3),r=(t-1e3*n)/2;document.documentElement.style.setProperty("--scale",`${n}`),document.documentElement.style.setProperty("--translateX",`${r}px`)}},beforeMount(){this.updateStyle()},mounted(){window.addEventListener("resize",this.updateStyle)}}),iu={class:"perspective"},su={class:"peek"};function au(e,t,n,r,i,o){const u=re("router-view"),f=re("PeekInside");return h(),p(J,null,[l("div",iu,[I(u)]),l("div",su,[e.devMode?(h(),q(f,{key:0})):z("",!0)])],64)}var ou=M(ru,[["render",au]]);const je=cn(ou);je.use(yo,Ut);je.use(Nt);je.mount("#app");
