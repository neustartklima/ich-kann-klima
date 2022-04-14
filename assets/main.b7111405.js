var qt=Object.defineProperty,Xt=Object.defineProperties;var en=Object.getOwnPropertyDescriptors;var nt=Object.getOwnPropertySymbols;var tn=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable;var Te=(e,t,n)=>t in e?qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))tn.call(t,n)&&Te(e,n,t[n]);if(nt)for(var n of nt(t))nn.call(t,n)&&Te(e,n,t[n]);return e},N=(e,t)=>Xt(e,en(t));var L=(e,t,n)=>(Te(e,typeof t!="symbol"?t+"":t,n),n);import{D as ze,a as rt,s as rn,b as it,v as sn,d as A,r as X,o as h,c as m,F as H,e as ee,n as B,f as o,t as w,g as v,h as J,u as _,i as x,p as ge,j as pe,k as an,l as Ve,w as ue,m as D,q as Z,x as Ie,y as st,z as on,T as ln,A as G,B as $e,C as de,E as cn,G as un,H as dn,I as hn,J as fn,K as mn,L as gn,V as pn,M as at,N as vn,O as bn}from"./vendor.e7a43cd4.js";const wn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};wn();const yn={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};class Ce{constructor(t){L(this,"lux");t instanceof rt?this.lux=t.setLocale("de-DE").setZone("Europe/Berlin"):this.lux=rt.fromISO(t,{zone:"Europe/Berlin",locale:"de-DE"})}static durationBetween(t,n){return new Be(n.lux.diff(t.lux,["months"]))}plus(t){return new Ce(this.lux.plus(t.lux))}getYear(){return this.lux.get("year")}toLocaleString(){return this.lux.toLocaleString(yn)}toMonthString(){return this.lux.toLocaleString({month:"long",year:"numeric"})}toJSON(){return this.lux.toJSON()}sameInstant(t){return+this.lux==+t.lux}}class Be{constructor(t){L(this,"lux");t instanceof ze?this.lux=t:typeof t=="string"?this.lux=ze.fromISO(t,{locale:"de-DE"}):this.lux=ze.fromObject(t)}toMonthsString(){const t=this.lux.as("months");return t===1?"1 Monat":t+" Monate"}lessThan(t){return this.lux<t.lux}}function te(e){return new Ce(e)}function We(e){return new Be(e)}function ot(e,t){return Ce.durationBetween(e,t)}function kn(e){return new Be(ze.fromDurationLike({month:e}))}function Sn(e,t){return e.lux<t.lux?t:e}const ve=2021,lt="2021-01-01",ct=2050,ut=We("P3M"),_n=We("P3M"),dt=6,ht=.6;function I(e){return e}const be={newYear:2,timesUp:3,finanzKollaps:4,wahlVerloren:5,hitzehoelle:6};function Dn(e,t){const n=e.events.filter(r=>t.includes(r.id)).reduce((r,i)=>r===void 0?te(i.occurredIn):Sn(r,te(i.occurredIn)),void 0);if(n!==void 0)return ot(n,te(e.currentDate))}function re(e,t,n,r){r===void 0&&(r=n);const i=Dn(e,[t.id]);return i!=null&&i.lessThan(We(n))?!0:ot(te(lt),te(e.currentDate)).lessThan(We(r))}var En=I({title:"Abstandsregeln f\xFCr Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erh\xF6ht wird. Das f\xFChrte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",apply(){return[]}});const zn=new rn.exports.Converter;function ft(e){return e>0?[...Array(e)].map((t,n)=>n):[]}function Cn(e,t){const n=e-t-1;return[...ft(t),Math.max(t,n),...ft(n).reverse()]}function a(e,...t){let n=e.map((i,s)=>i+(t[s]||"")).join("").split(`
`);n[0].length===0&&n.shift();const r=n[0].match(/^(\s+)/);return r&&!n.filter(i=>i.trim()).some(i=>!i.startsWith(r[1]))&&(n=n.map(i=>i.replace(r[1],""))),zn.makeHtml(n.join(`
`))}function Me(e){return t=>!e(t)}function mt(e){return Object.entries(e).map(([t,n])=>N(P({},n),{id:t}))}function gt(e,t){const n=e.value-t.value;return r=>{const i=e.result*(r-t.value)/n,s=t.result*(r-e.value)/n;return i-s}}const Wn=new Intl.DateTimeFormat("de-DE");class F{constructor(t){L(this,"url");L(this,"title");L(this,"publisher");L(this,"authors");L(this,"date");L(this,"comment");L(this,"internalComment");L(this,"localCopy");L(this,"referringUrl");L(this,"archiveUrl");L(this,"archiveNotPossible");this.url=new URL(t.url),this.title=t.title,this.publisher=t.publisher,this.authors=t.authors,this.date=t.date?new Date(t.date):void 0,this.comment=t.comment,this.internalComment=t.internalComment,this.localCopy=t.localCopy,this.referringUrl=t.referringUrl?new URL(t.referringUrl):void 0,this.archiveUrl=t.archiveUrl?new URL(t.archiveUrl):void 0,this.archiveNotPossible=t.archiveNotPossible}dateString(){const t=this.date;return t?" ("+Wn.format(t)+")":""}toString(){const t=this.authors?this.authors+this.dateString():void 0,n=this.title?'"'+this.title+'"':void 0;return[t,n,this.url,this.publisher].filter(r=>r).join(", ")}}function V(e){const t=e.publisher||e.authors,n=t!=null?t+": ":"",r=e.title||e.url.toString(),i=e.url.toString();return`[[${n}${r}](${i})]`}const Fn=e=>e.map(t=>t.toString()).join("; "),Pn=new F({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),se=new F({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),Fe=new F({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"});new F({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineral\xF6lsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"});new F({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile f\xFCr wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""});const Pe=new F({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),An=new F({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schl\xFCsselergebnisse der Studie des Wuppertal Instituts f\xFCr Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${V(Pe)}.`});Pe.comment=a`Zusammengefasst in ${V(An)}.`;const R=new F({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahresch\xE4tzung der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),Ln=new F({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),Ae=new F({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enth\xE4lt CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] f\xFCr mehrere Verkehrsmittel"});new F({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""});const pt=new F({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Stra\xDFeng\xFCterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),oe=new F({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enth\xE4lt Personenkilometer-Jahreswerte f\xFCr mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"});new F({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung \xD6PNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""});const Ge=new F({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),xn=new F({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new F({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren f\xFCr Fernw\xE4rme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const vt=new F({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),On=new F({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),bt=new F({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle w\xE4re besser."}),Tn=new F({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bev\xF6lkerung nach Nationalit\xE4t und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),Vn=new F({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur f\xFCr Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),In=new F({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische \xC4mter des Bundes und der L\xE4nder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new F({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});new F({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgem\xE4\xDF - Interview mit Prof. Stefan G\xF6ssling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""});const $n=new F({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),wt=new F({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),Bn=new F({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),yt=new F({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten f\xFCr die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class kt{constructor(t){L(this,"unit");L(this,"citations");L(this,"details");L(this,"internals");this.unit=t.unit,this.citations=t.citations?t.citations:[],this.details=t.details?t.details:"",this.internals=t.internals?t.internals:""}citationsDesc(){return Fn(this.citations)}}const Mn={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class y extends kt{constructor(t){super(t);L(this,"writable",!0);L(this,"initialValue");L(this,"applyBounds");this.initialValue=t.initialValue,this.applyBounds=t.applyBounds||Mn[t.unit]}}class Y extends kt{constructor(t){super(t);L(this,"writable",!1);L(this,"valueGetter");L(this,"shouldInitiallyBe");this.valueGetter=t.valueGetter,this.shouldInitiallyBe=t.shouldInitiallyBe}}const Gn=new y({unit:"MioTons",initialValue:6700,citations:[Pn],details:a`

  `,internals:a`

  `}),Un=new y({unit:"MioTons",initialValue:186.793,citations:[R],details:a`

  `,internals:a`

  `}),Nn=new Y({unit:"MioTons",valueGetter(e){return e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4},shouldInitiallyBe:159.696,citations:[R,pt],details:a`

  `,internals:a`
    ${V(R)}: 159.696 as MioTons

    ${V(pt)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Kn=new Y({unit:"MioTons",valueGetter(e){return e.co2emissionsStreetVehicles+e.publicLocalCapacity*65/1e6+e.publicNationalCapacity*32/1e6+e.airDomesticUsage*222/1e6+1.641},citations:[Ae,R],details:a`

  `,internals:a`
    ${V(Ae)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${V(R)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${V(R)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${V(R)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),jn=new Y({unit:"MioTons",valueGetter(e){return e.buildingsSourceElectricity*0+e.buildingsSourceBio*0+e.buildingsSourceGas*.247+e.buildingsSourceOil*.318+e.buildingsSourceTele*.16},citations:[R,Ge],details:a`

  `,internals:a`
    TODO: #91 Gibt es hier bessere Quellen?

    ${V(Ge)}: 247g CO2 pro kWh Erdgas.

    ${V(Ge)}: 318g CO2 pro kWh Erdöl.

    ${V(xn)}: 160g CO2 pro kWh Fernwärme.

    ${V(R)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),Hn=new y({unit:"MioTons",initialValue:67.936,citations:[R],details:a`

  `,internals:a`

  `}),Jn=new y({unit:"MioTons",initialValue:9.243,citations:[R],details:a`

  `,internals:a`

  `}),Rn=new Y({unit:"MioTons",valueGetter(e){return e.electricityGas*.399+e.electricitySolar*.058+e.electricityWind*.005+e.electricityWater*.02+e.electricityHardCoal*.835+e.electricityBrownCoal*1.137+e.electricityBiomass*.03+e.electricityNuclear*.005},citations:[vt,R],details:a`

  `,internals:a`
    ${V(vt)}:
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
    - Diskrepanz zu ${V(On)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${V(R)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),Yn=new y({unit:"MioTons",initialValue:0,citations:[],details:a`

  `,internals:a`

  `}),Zn=new Y({unit:"MioTons",valueGetter(e){return e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers-e.co2directAirCapture},details:a`

  `,internals:a`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${V(R)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[Ln]}),Qn=new y({unit:"TWh",initialValue:480.54,citations:[se],details:a`

  `,internals:a`

  `}),qn=new y({unit:"Percent",initialValue:50,citations:[],details:a`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:a`

  `}),Xn=new y({unit:"TWh",initialValue:51.42,citations:[se],details:a`

  `,internals:a`

  `}),er=new y({unit:"TWh",initialValue:131.85,citations:[se],details:a`

  `,internals:a`

  `}),tr=new y({unit:"TWh",initialValue:6,citations:[se],details:a`

  `,internals:a`

  `}),nr=new y({unit:"Percent",initialValue:100,citations:[Bn],details:a`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),rr=new y({unit:"TWh",initialValue:14.99,citations:[se],details:a`

  `,internals:a`

  `}),ir=new y({unit:"TWh",initialValue:43.19,citations:[se],details:a`

  `,internals:a`

  `}),sr=new y({unit:"TWh",initialValue:60.91,citations:[se],details:a`

  `,internals:a`

  `}),ar=new y({unit:"TWh",initialValue:35.46,citations:[se],details:a`

  `,internals:a`

  `}),or=new y({unit:"TWh",initialValue:82.13,citations:[se],details:a`

  `,internals:a`

  `}),lr=new Y({unit:"TWh",valueGetter(e){return e.electricityHardCoal+e.electricityBrownCoal},details:a`

  `,internals:a`

  `}),cr=new Y({unit:"TWh",valueGetter(e){return e.electricityDemand+e.buildingsSourceElectricity*.25-e.electricitySolar-e.electricityWind-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear},details:a`

  `,internals:a`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),ur=new y({unit:"GramPerPsgrKm",initialValue:160,citations:[Ae],details:a`

  `,internals:a`
    ${V(Ae)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),dr=new y({unit:"MioPsgrKm",initialValue:917e3,citations:[oe],details:a`

  `,internals:a`

  `}),hr=new y({unit:"Percent",initialValue:.5,citations:[bt],details:a`

  `,internals:a`
    Die verschiedenen Zahlen in ${V(bt)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),fr=new y({unit:"MioPsgrKm",initialValue:112600,citations:[oe],details:a`

  `,internals:a`

  `}),mr=new y({unit:"MioPsgrKm",initialValue:112600,citations:[oe],details:a`

  `,internals:a`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),gr=new y({unit:"MioPsgrKm",initialValue:67300,citations:[oe],details:a`

  `,internals:a`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),pr=new y({unit:"MioPsgrKm",initialValue:67300,citations:[oe],details:a`

  `,internals:a`
Siehe \`publicLocalCapacity\`.
  `}),vr=new y({unit:"MioPsgrKm",initialValue:10100,citations:[oe],details:a`

  `,internals:a`

  `}),br=new y({unit:"MioPsgrKm",initialValue:61700,citations:[oe],details:a`

  `,internals:a`

  `}),wr=new Y({unit:"MioPsgrKm",valueGetter(e){return e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage},shouldInitiallyBe:1168700,citations:[oe],details:a`

  `,internals:a`

  `}),yr=new y({unit:"TWh",initialValue:226,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),kr=new y({unit:"TWh",initialValue:544,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),Sr=new Y({unit:"TWh",valueGetter(e){return e.buildingsPrivateDemand+e.buildingsIndustryDemand},shouldInitiallyBe:770,citations:[],details:a`

  `,internals:a`
    TODO: #78 Quelle ${V(yt)} gibt diese Zahlen nicht her.
  `}),_r=new y({unit:"TWh",initialValue:0,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 0 TWh.
  `}),Dr=new y({unit:"TWh",initialValue:130,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),Er=new y({unit:"TWh",initialValue:219,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),zr=new y({unit:"TWh",initialValue:58,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),Cr=new Y({unit:"TWh",valueGetter(e){return e.buildingsDemand-(e.buildingsSourceElectricity+e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele)},citations:[],details:a`

  `,internals:a`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${V(yt)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),Wr=new y({unit:"Percent",initialValue:50,citations:[],details:a`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:a`

  `}),Fr=new y({unit:"TsdPeople",initialValue:83155.031,citations:[Tn],details:a`

  `,internals:a`
Anfangswert ist der Stand 31.12.2020.
  `}),Pr=new y({unit:"TsdPeople",initialValue:2695,citations:[Vn],details:a`

  `,internals:a`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),Ar=new y({unit:"MrdEuro",initialValue:3332,citations:[In],details:a`

  `,internals:a`
Anfangswert ist das BIP 2020.
  `}),Lr=new y({unit:"MrdEuro",initialValue:1899,citations:[],details:a`

  `,internals:a`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),ne={co2budget:Gn,co2emissionsIndustry:Un,co2emissionsStreetVehicles:Nn,co2emissionsMobility:Kn,co2emissionsAgriculture:Hn,co2emissionsBuildings:jn,co2emissionsOthers:Jn,co2emissionsEnergy:Rn,co2directAirCapture:Yn,co2emissions:Zn,electricityDemand:Qn,electricityGridQuality:qn,electricitySolar:Xn,electricityWind:er,electricityWindOnshoreMaxNew:tr,electricityWindEfficiency:nr,electricityWater:rr,electricityBiomass:ir,electricityNuclear:sr,electricityHardCoal:ar,electricityBrownCoal:or,electricityCoal:lr,electricityGas:cr,carEmissionFactor:ur,carUsage:dr,carRenewablePercentage:hr,publicLocalUsage:fr,publicLocalCapacity:mr,publicNationalUsage:gr,publicNationalCapacity:pr,airDomesticUsage:vr,airIntlUsage:br,passengerTransportUsage:wr,buildingsIndustryDemand:yr,buildingsPrivateDemand:kr,buildingsDemand:Sr,buildingsSourceElectricity:_r,buildingsSourceBio:Dr,buildingsSourceOil:Er,buildingsSourceTele:zr,buildingsSourceGas:Cr,popularity:Wr,numberOfCitizens:Fr,unemployment:Pr,gdp:Ar,stateDebt:Lr},St=Object.entries(ne).filter(e=>e[1]instanceof y).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),_t=Object.entries(ne).filter(e=>e[1]instanceof Y).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),xr=Object.keys(St),Dt=Object.keys(ne);class Et extends y{constructor(t,n){super(t);L(this,"name");this.name=n}}const Or=Object.entries(St).map(e=>new Et(e[1],e[0]));class zt extends Y{constructor(t,n){super(t);L(this,"name");this.name=n}}Object.entries(_t).map(e=>new zt(e[1],e[0]));const Ct=Object.entries(ne).map(e=>e[1]instanceof y?new Et(e[1],e[0]):new zt(e[1],e[0])),he=Or.reduce((e,t)=>(e[t.name]=t.initialValue,e),{}),Wt=Ct.reduce((e,t)=>(e[t.name]=0,e),{});function fe(e){const t=P({},e);return Object.entries(_t).forEach(n=>Object.defineProperty(t,n[0],{enumerable:!0,get:()=>n[1].valueGetter(t)})),t}function Tr(e){return P({},e)}function le(e,t){return{type:"dispatch",condition:!0,if(n){return this.condition=n,this},apply(n){this.condition&&n.dispatch(e,t)}}}function d(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(t){return this.percent=t,this},byValue(t){return this.value=t,this},setValue(t){return this.absolute=t,this},if(t){return this.condition=t,this},getOldNew(t){const n=this.name,r=t[n];if(!this.condition)return{oldVal:r,newVal:r};const i=ne[n],s=this.absolute!=null?this.absolute:r+(this.value||r*this.percent/100),l=i.applyBounds(s);return{oldVal:r,newVal:l}},getChange(t){if(!this.condition)return 0;const{oldVal:n,newVal:r}=this.getOldNew(t);return r-n},apply(t){if(t.values!=null&&this.condition){const{newVal:n}=this.getOldNew(t.values);t.values[this.name]=n}}}}function Q(e,t){if(ne[e].unit!=ne[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(n){return this.percent=n,this},byValue(n){return this.value=n,this},if(n){return this.condition=n,this},getEffect(n){const r=n[this.to],i=n[this.from];if(!this.condition)return{oldTo:r,oldFrom:i,newTo:r,newFrom:i};const s=ne[this.to],l=ne[this.from],u=this.value||r*this.percent/100,c=s.applyBounds(r+u)-r,p=-l.applyBounds(i-c)+i,C=r+p,O=i-p;return{oldTo:r,newTo:C,oldFrom:i,newFrom:O}},apply(n){if(n.values!=null&&this.condition){const{newTo:r,newFrom:i}=this.getEffect(n.values);n.values[this.to]=r,n.values[this.from]=i}}}}function Le(e,t){t.filter(n=>n.condition).forEach(n=>n.apply(e))}var Vr=I({title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply(){return[le("gameOver")]},probability(e){return e.acceptedLaws.find(n=>n.lawId==="KernenergienutzungVerlaengern")?.5:0},citations:[],details:a`

  `,internals:a`

  `});const Ir=e=>({time:ut,text:`Braucht ${ut.toMonthsString()}.`});function S(e,t="Braucht {months}."){const n=kn(e),r=t.replace(/{months}/g,n.toMonthsString());return{time:n,text:r}}function E(e){return e}function z(e,t,n){const r=n-e,i=t-e;if(i===0)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return r/i*100}function Ue(e,t){const n=t.value-e.value,r=n/Math.abs(n),i=r*e.value;return s=>n===0||r*s<=i?e.result:gt(e,t)(s)}function g(e,t,n=0){if(!ce.map(r=>r.id).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some(r=>r.lawId===t&&r.effectiveSince-1<=e.currentYear+n)}function $r(e){const t=e.events[0];return t&&te(t.occurredIn).sameInstant(te(e.currentDate))?t:void 0}function $(e,t){const n=$r(e);return n!=null&&t.includes(n.id)}function ae(e){const t=e.values;return t.electricityWind/t.electricityDemand*100}function K(e){return(e.values.electricityWind+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}function Br(e,t){const n=e.values,r=ne[t].initialValue,i=n.electricityGridQuality,s=n.electricityDemand;return gt({value:50,result:r},{value:100,result:s})(i)}function me(e,t,n){const r=e.values,i=r.electricityCoal+r.electricityGas;if(i<=0)return[];const s=r.electricityHardCoal/i,l=r.electricityBrownCoal/i,u=r.electricityGas/i;return[Q(t,"electricityHardCoal").if(s>0).byValue(s*n),Q(t,"electricityBrownCoal").if(l>0).byValue(l*n),d(t).if(u>0).byValue(u*n)]}function xe(e,t,n,r){const i=g(e,"WindkraftVereinfachen")?0:5;if(e.currentYear<r+i)return[];const s=e.values,u=(Math.min(t,s.electricityWindOnshoreMaxNew)+n)*s.electricityWindEfficiency/100,c=s.electricityWind,p=Math.min(c+u,Br(e,"electricityWind"))-c;return me(e,"electricityWind",p)}function Ne(e,t,n,r){const i=r(K(e)),s=r(e.values.carRenewablePercentage);return[d("stateDebt").byValue((25-t)/1e3*e.values.co2emissions*.5),d("popularity").byValue(i+s),d("co2emissionsIndustry").byPercent(n),d("co2emissionsAgriculture").byPercent(n),d("co2emissionsOthers").byPercent(n),Q("electricityBrownCoal","electricityWind").byPercent(.7*n),Q("electricityHardCoal","electricityWind").byPercent(.7*n),Q("electricityBrownCoal","electricitySolar").byPercent(.3*n),Q("electricityHardCoal","electricitySolar").byPercent(.3*n),Q("buildingsSourceOil","buildingsSourceBio").byPercent(n),Q("carUsage","publicNationalUsage").byPercent(.5*n),Q("carUsage","publicLocalUsage").byPercent(.5*n)]}var Mr=E({title:"Abstandsregeln f\xFCr Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(12,"BIs werden es Dir schwer machen. {months}!")},effects(e,t,n){const r=g(e,"WindkraftVereinfachen")?0:5;return[d("popularity").byValue(-40).if(t===n),d("electricityWindOnshoreMaxNew").setValue(1e3).if(n>=t+r)]},priority(e){return $(e,["AbstandsregelnWindkraft"])?100:g(e,"AbstandsregelnFuerWindkraftLockern")?z(80,25,ae(e)):0}}),Gr=E({title:"Abstandsregeln f\xFCr Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln f\xFCr Windkraftanlagen sowie Bauerlaubniss in W\xE4ldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(6,"Das schaffst Du in {months}n.")},effects(e,t,n){const r=g(e,"WindkraftVereinfachen")?0:5;return[d("popularity").byValue(-3).if(t===n),d("electricityWindOnshoreMaxNew").setValue(30).if(n>=t+r)]},priority(e){return $(e,["AbstandsregelnWindkraft"])?100:g(e,"AbstandsregelnFuerWindkraftWieBisher")?z(70,27,ae(e)):g(e,"AbstandsregelnFuerWindkraftAbschaffen")?z(30,100,ae(e)):0},citations:[],details:a`

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
  `}),Ur=E({title:"Abstandsregeln f\xFCr Windkraft versch\xE4rfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngeb\xE4uden im Innenbereich muss das Zehnfache der Gesamth\xF6he der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(1,"Dauert nur einen Monat.")},effects(e,t,n){return[d("popularity").byValue(5).if(t===n),d("electricityWindOnshoreMaxNew").setValue(.42)]},priority(e){return $(e,["AbstandsregelnWindkraft"])?100:g(e,"AbstandsregelnFuerWindkraftWieBisher")?z(0,100,ae(e)):0}}),Nr=E({title:"Abstandsregeln f\xFCr Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmen \xFCber Abst\xE4nde zwischen den Windkraftanlagen und Wohngeb\xE4uden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return S(3,"Wie aussitzen: {months}.")},effects(e,t,n){const r=g(e,"WindkraftVereinfachen")?0:5;return[d("electricityWindOnshoreMaxNew").setValue(6).if(n>=t+r)]},priority(e){return $(e,["AbstandsregelnWindkraft"])?100:g(e,"AbstandsregelnFuerWindkraftLockern")?z(30,100,ae(e)):g(e,"AbstandsregelnFuerWindkraftVerschaerfen")?z(70,27,ae(e)):0}}),Kr=E({title:"Ausschreibungsverfahren f\xFCr Windkraft 64,8 TWh",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 64,8 TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return g(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?S(5):g(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?S(9):S(11)},effects(e,t,n){return[d("stateDebt").byValue(8),d("popularity").byValue(-20).if(t===n),d("unemployment").byValue(-100).if(t===n),...xe(e,55.2,9.6,t)]},priority(e){return $(e,["WindkraftAusschreibung"])?100:g(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?z(100,50,K(e)):0}}),jr=E({title:"Ausschreibungsverfahren f\xFCr Windkraft 16,2 TWh",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 16,2 TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return S(2)},effects(e,t,n){return[d("stateDebt").byValue(2),d("popularity").byValue(-1).if(t===n),d("unemployment").byValue(-20).if(t===n),...xe(e,13.8,2.4,t)]},priority(e){return $(e,["WindkraftAusschreibung"])?100:g(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?z(100,50,K(e)):g(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?z(40,100,K(e)):0}}),Hr=E({title:"Ausschreibungsverfahren f\xFCr Windkraft 32,4 TWh",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 32,4 TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return g(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?S(4):S(6)},effects(e,t,n){return[d("stateDebt").byValue(4),d("popularity").byValue(-2).if(t===n),d("unemployment").byValue(-100).if(t===n),...xe(e,27.6,4.8,t)]},priority(e){return $(e,["WindkraftAusschreibung"])?100:g(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?z(100,50,K(e)):g(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?z(0,100,K(e)):0},citations:[],details:a`
    Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung
    von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen
    Subventionierung umsetzen kann bekommt den Zuschlag.
  `,internals:a`
    # Happy Path 3

    # Folgen

    - [x] Schulden +-0 (Zur besseren Verständlichkeit 4 MrdEuro pro Jahr.)
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
  `}),Jr=E({title:"Ausschreibungsverfahren f\xFCr Windkraft 8,1 TWh wie zu Beginn",description:"Windkraft Betreiber k\xF6nnen sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstm\xF6glichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return S(8)},effects(e,t,n){return[d("stateDebt").byValue(1),...xe(e,6.9,1.2,t)]},priority(e){return $(e,["WindkraftAusschreibung"])?100:g(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?z(60,100,K(e)):0}}),Rr=E({title:"Automatische Anpassungen einiger Sektoren",description:"Mobilit\xE4t, Industrie, Geb\xE4ude und Landwirtschaft nutzen automatisch regenerative Energiequellen, sobald sie zur Verf\xFCgung stehen.",labels:["initial"],effects(e,t,n){if(K(e)<70)return[];const r=d("co2emissionsIndustry").byPercent(-20),s=r.getChange(e.values)/-.835;return[d("carRenewablePercentage").byValue(10),d("electricityDemand").byValue(22),r,d("electricityDemand").byValue(s),Q("buildingsSourceBio","buildingsSourceOil").byValue(10),Q("buildingsSourceElectricity","buildingsSourceOil").byValue(10),Q("buildingsSourceElectricity","buildingsSourceTele").byValue(5),d("buildingsSourceElectricity").byValue(Math.min(20,e.values.buildingsSourceGas)),d("co2emissionsAgriculture").byValue(-10),d("co2emissionsOthers").byValue(-1)]},priority(e){return 0},citations:[],details:a`

  `,internals:a`
    Dieses Gesetz läuft dauerhaft mit und soll kompensieren, dass es für diese Sektoren noch nicht genügend Gesetze gibt.
  `}),Yr=E({title:"CO2 Abscheidung und Speicherung (DACCS) f\xF6rdern",description:"Entstehende Technologien zur Abscheidung aus der Luft (DAC) und Speicherung von CO2 werden mit 1 Mrd Euro im Jahr gef\xF6rdert.",effort(e){return S(9)},effects(e,t,n){const r=1,i=r/200*1e3,s=i*400/1e3;return[d("stateDebt").byValue(r),d("co2directAirCapture").byValue(i),d("electricityDemand").byValue(s)]},priority(e){return z(70,90,K(e))},citations:[],details:a`

  `,internals:a`
    TDOO #91: So far only https://de.wikipedia.org/wiki/Direct_air_capture.

    Angaben für Kosten reichen von 10 USD bis 1000 USD pro Tonne CO2.
    Mehrere Angaben 100 USD bis 200 USD. Wir gehen von 250 EUR aus, um
    versteckte, indirekte Kosten mit einzubeziehen.

    In Wikipedia wird 250 kWh pro Tonne CO2 erwähnt. Dazu kommt noch ein
    beträchtlicher Wasserverbrauch. Wir nehmen zunächst 400kWh an, auch um
    potentielle negative Effekte abzubilden.
  `}),Zr=E({title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effort(e){return e.values.popularity>=50?S(6,"Normal dauert das 12 Monate, aber bei Deiner Beliebtheit nur {months}."):S(12)},effects(){return[d("stateDebt").byValue(-37),d("electricityHardCoal").byPercent(-10),d("electricityBrownCoal").byPercent(-5),d("electricityWind").byValue(5),d("electricitySolar").byValue(3),d("electricityWater").byValue(.5)]},priority(e){return $(e,["EnergieStrategie"])?100:z(ct,ve,e.currentYear)}}),Qr=E({title:"Erforschung und Umsetzung dezentraler Stromerzeugung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur f\xFCr die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return S(1)},effects(e,t,n){const r=n<t+5,i=n>=t+1;return[d("stateDebt").byValue(2).if(r),d("electricityGridQuality").byValue(1).if(i)]},priority(e){const t=e.values;return z(80,45,t.electricityGridQuality)},citations:[],details:a`

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
  `}),qr=E({title:"Forschung und Entwicklung zur Stromspeicherung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erforschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return S(1)},effects(e,t,n){const r=n<t+5,i=n>=t+3;return[d("stateDebt").byValue(2).if(r),d("electricityGridQuality").byValue(.2).if(i)]},priority(e){const t=e.values;return z(80,45,t.electricityGridQuality)},citations:[],details:a`

  `,internals:a`
    # Happy Path 4

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    - [x] Kosten: 2 Mrd Euro pro Jahr für die ersten 5 Jahre
    - [x] Nach 2 Jahren zahlt es sich aus und die Netzqualität steigt (ohne Förderung) jährlich um 0.2%.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Identisch zu "StromspeicherungErleichtern".

    - 0% bei einer Netzqualität von 80%. (Zu Beginn: 50%)
    - 100% bei einer Netzqualität von 45%.
    - linear interpoliert
  `}),Xr=E({title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,n){const i={2021:60.45,2022:30.21}[n]||0;return[d("electricityNuclear").setValue(i)]},priority(e){return 0}});const Ft=fe(he).electricityGas;var ei=E({title:"Kernenergienutzung verl\xE4ngern",description:"Kernkraftwerke l\xE4nger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effort(e){return S(8)},effects(){return[d("electricityNuclear").setValue(104.3),d("stateDebt").byValue(-2.5),d("popularity").byValue(-4)]},priority(e){return $(e,["EnergieStrategie"])?100:z(Ft,1.1*Ft,e.values.electricityGas)}}),ti=E({title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effort(e){return S(11)},effects(e,t,n){const r=n-t,i=r<18?4.3/18:0,s=2.5,l=20,u=60,c=(10-r)/55,p=Math.max((l+u/2)*c,0);return[d("electricityHardCoal").setValue(0),d("electricityBrownCoal").setValue(0),d("stateDebt").byValue(-i+s),d("unemployment").byValue(p)]},priority(e){return $(e,["EnergieStrategie"])?100:e.values.electricityCoal/e.values.electricityDemand<=.1?0:z(1e4,0,e.values.unemployment)},citations:[],details:a`

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
  `}),ni=E({title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren f\xFCr den Ausbau des Stromnetzes",effort(e){return S(2)},effects(e,t,n){return[d("popularity").byValue(-3).if(t===n),d("electricityGridQuality").byValue(1)]},priority(e){return z(70,27,ae(e))},citations:[],details:a`

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
  `}),ri=E({title:"Netzausbau f\xF6rdern",description:"Ausbau des Stromnetzes mit Steuermitteln f\xF6rdern",effort(e){return S(3)},effects(e,t,n){return[d("popularity").byValue(-1).if(t===n),d("stateDebt").byValue(2),d("electricityGridQuality").byValue(5).if(g(e,"NetzausbauErleichtern"))]},priority(e){return z(70,27,ae(e))},citations:[],details:a`

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
  `}),ii=E({title:"Solar auf neuen D\xE4chern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die D\xE4cher.",treatAfterLabels:[],effort(e){return S(3)},effects(e,t,n){return[d("stateDebt").byValue(4),d("popularity").byValue(-3).if(t===n),...me(e,"electricitySolar",2)]},priority(e){return $(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:g(e,"SolarstromFoerderungWieZuBeginn")?z(100,30,K(e)):0},details:a`

  `,internals:a`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `}),si=E({title:"Solarstrom F\xF6rderung 10 TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verdoppeln. Es werden 10 TWh pro Jahr zugebaut.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return S(4)},effects(e,t,n){return[d("stateDebt").byValue(2),d("popularity").byValue(10).if(t===n),d("unemployment").byValue(-31e3).if(t===n),...me(e,"electricitySolar",10)]},priority(e){return $(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:g(e,"SolarstromFoerderungWieZuBeginn")?z(100,50,K(e)):0},details:a`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),ai=E({title:"Solarstrom F\xF6rderung 20TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen vervierfachen. Es werden 20 TWh pro Jahr zugebaut.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return g(e,"SolarstromFoerdernx2")?S(3):S(7)},effects(e,t,n){return[d("stateDebt").byValue(4),d("popularity").byValue(20).if(t===n),d("unemployment").byValue(-89e3).if(t===n),...me(e,"electricitySolar",20)]},priority(e){return $(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:g(e,"SolarstromFoerdernx2")?z(100,50,K(e)):0},details:a`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:a`
    # Happy path 10

    ${V(Pe)}
  `,citations:[Pe]}),oi=E({title:"Solarstrom F\xF6rderung 40TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verachtfachen. Es werden 40 TWh pro Jahr zugebaut.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return g(e,"SolarstromFoerdernx4")?S(2):g(e,"SolarstromFoerdernx2")?S(5):S(9)},effects(e,t,n){return[d("stateDebt").byValue(8),d("popularity").byValue(-10).if(t===n),d("unemployment").byValue(-209e3).if(t===n),...me(e,"electricitySolar",40)]},priority(e){return $(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:g(e,"SolarstromFoerdernx4")?z(100,50,K(e)):0},details:a`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `}),li=E({title:"Solarstrom F\xF6rderung einstellen",description:"Mittlere bis gro\xDFe Solaranlagen sollten sich selbst tragen. Die F\xF6rderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return g(e,"SolarstromFoerderungWieZuBeginn")?S(5):S(13,"So eine Kehrtwende in der Politik ist schwer durchsetzbar. Das braucht {months}.")},effects(e,t,n){return[...me(e,"electricitySolar",2)]},priority(e){return $(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:g(e,"SolarstromFoerderungWieZuBeginn")?z(0,100,K(e)):0},details:a`

  `}),ci=E({title:"Solarstrom F\xF6rderung wie zu Beginn 5 TWh",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen wie bisher. Es werden 5 TWh pro Jahr zugebaut.",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return S(9)},effects(e,t,n){return[d("stateDebt").byValue(1),...me(e,"electricitySolar",5)]},priority(e){return $(e,["SolarstromFoerderung","SolarstromFoerderung2"])?100:g(e,"SolarstromFoerdernx8")?z(70,100,K(e)):0},details:a`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),ui=E({title:"Stromspeicherung erleichtern",description:"B\xFCrokratische H\xFCrden f\xFCr den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effort(e){return S(3)},effects(e,t,n){return[d("electricityGridQuality").byValue(.2)]},priority(e){const t=e.values;return z(80,45,t.electricityGridQuality)},citations:[],details:a`

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
  `}),di=E({title:"Stromspeicherung f\xF6rdern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln f\xF6rdern. 2 Mrd \u20AC pro Jahr.",effort(e){return S(7)},effects(e,t,n){const r=g(e,"StromspeicherungErleichtern")?0:5,i=n>=t+r,s=g(e,"ForschungUndEntwicklungStromspeicherung",3);return[d("stateDebt").byValue(1),d("popularity").byValue(.2).if(i),d("stateDebt").byValue(1).if(i),d("electricityGridQuality").byValue(2).if(i),d("electricityGridQuality").byValue(2).if(s),d("electricityGridQuality").byValue(2).if(i&&s)]},priority(e){const t=e.values;return z(80,45,t.electricityGridQuality)},citations:[],details:a`

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
  `}),hi=E({title:"Windkraft vereinfachen",description:"Genehmigungen f\xFCr Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effort(e){return S(4,"Die Bundesl\xE4nder m\xFCssen mit ins Boot geholt werden. Das dauert {months}.")},effects(e,t,n){return[]},priority(e){return z(80,27,ae(e))},citations:[],details:a`

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
  `});const fi={AbstandsregelnFuerWindkraftAbschaffen:Mr,AbstandsregelnFuerWindkraftLockern:Gr,AbstandsregelnFuerWindkraftVerschaerfen:Ur,AbstandsregelnFuerWindkraftWieBisher:Nr,AusschreibungsverfahrenfuerWindkraftVerachtfachen:Kr,AusschreibungsverfahrenfuerWindkraftVerdoppeln:jr,AusschreibungsverfahrenfuerWindkraftVervierfachen:Hr,AusschreibungsverfahrenfuerWindkraftWieBisher:Jr,AutomatischeSektoren:Rr,CO2AbscheidungUndSpeicherungFoerdern:Yr,EnergiemixRegeltDerMarkt:Zr,ForschungDezentraleStromerzeugung:Qr,ForschungUndEntwicklungStromspeicherung:qr,InitialAtomausstieg:Xr,KernenergienutzungVerlaengern:ei,KohleverstromungEinstellen:ti,NetzausbauErleichtern:ni,NetzausbauFoerdern:ri,SolarAufAllenDaechernVerpflichtend:ii,SolarstromFoerdernx2:si,SolarstromFoerdernx4:ai,SolarstromFoerdernx8:oi,SolarstromFoerderungAbschaffen:li,SolarstromFoerderungWieZuBeginn:ci,StromspeicherungErleichtern:ui,StromspeicherungFoerdern:di,WindkraftVereinfachen:hi};let Ke=it("",{state:!0}),Pt=()=>Math.abs(Ke());function mi(e){Ke=it(e.id,{state:e.prngState})}function gi(){return Ke.state()}var pi=E({title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bew\xE4hrt. Wir lassen sie so, wie sie sind.",effort(e){return S(3,"Wie aussitzen: {months}.")},effects(){return[]},priority(e){return Pt()}}),vi=E({title:"CO2 Preis Erh\xF6hen",description:"Die Preise werden schneller erh\xF6ht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return S(6)},effects(e,t,n){const r=n>=t+2?n>=t+4?100:70:0;return[...Ne(e,r,-.5,Ue({value:50,result:0},{value:0,result:-1}))]},priority(e){return $(e,["EnergieStrategie"])?100:g(e,"VollerCO2Preis")||g(e,"WirksamerCO2Preis")?0:50},citations:[wt],details:a`

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
  `}),bi=E({title:"Test",description:"Gesetz zum Testen. Wird in automatischen Tests verwendet.",effort(e){return S(6)},effects(e,t,n){return[d("popularity").byPercent(50).if((n-t)%3!=0),d("popularity").byPercent(-50).if((n-t)%3==0),d("stateDebt").byPercent(-200).if(n===t),d("stateDebt").byPercent(50).if((n-t)%3!=0),d("stateDebt").byPercent(-50).if((n-t)%3==0),d("stateDebt").byPercent(-200).if(n===t+10)]},priority(e){return 0},citations:[],details:a`

  `,internals:a`

  `}),wi=E({title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return S(10)},effects(e,t,n){return[...Ne(e,3e3,-5,Ue({value:90,result:0},{value:50,result:-10}))]},priority(e){return $(e,["EnergieStrategie"])?100:g(e,"WirksamerCO2Preis")?50:0},citations:[$n],details:a`

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
  `}),yi=E({title:"Wasserstofftechnologie f\xF6rdern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return S(1)},effects(e,t,n){const r=n<t+5,i=n>=t+5;return[d("stateDebt").byValue(2).if(r),d("carRenewablePercentage").byValue(1).if(i)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return z(40,90,r)},citations:[],details:a`

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
  `}),ki=E({title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return S(8)},effects(e,t,n){return[...Ne(e,150,-2,Ue({value:80,result:0},{value:50,result:-6}))]},priority(e){return $(e,["EnergieStrategie"])?100:g(e,"CO2PreisErhoehen")?50:0},citations:[wt],details:a`

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
    - Anteil = 65%: Popularität sinkt um 3% pro Jahr.
    - Anteil = 50%: Popularität sinkt um 6% pro Jahr.
    - Anteil = 20%: Pooularität sinkt um 12% pro Jahr.
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
  `});const Si={AllesBleibtBeimAlten:pi,CO2PreisErhoehen:vi,Test:bi,VollerCO2Preis:wi,WasserstofftechnologieFoerdern:yi,WirksamerCO2Preis:ki},At=P(P({},Si),fi),_i=Object.keys(At);function Di(e){return mt(e).map(t=>N(P({},t),{effort:t.effort||Ir}))}const ce=Di(At);function Ei(e){const t=ce.find(n=>n.id===e);if(t)return t;throw Error(`Law #${e} not found`)}function Se(e){const t=Ei(e.lawId);if(t)return N(P({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function je(e){return e.map(t=>{const n=ce.find(r=>r.id===t);return n||console.error(`Inconsistency: Proposed law #${t} not found`),n}).filter(t=>t)}const zi=(e,t,n)=>Object.fromEntries(e.map(r=>{const i=t(r),s=Object.fromEntries(Dt.map(l=>[l,n(r,i,l)]));return[r.id,s]}));function Lt(e){return e.find(t=>t.title.match(/subvention/i)&&t.title.match(/abbau/i))}var Ci=I({title:"Anruf von befreundetem Unternehmer",description:`Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und m\xF6chte dich in seine
    Ferienvilla auf Sardinien einladen. Er verl\xE4sst sich nat\xFCrlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,apply(e){if(e){const t=Lt(je(e.proposedLaws));if(t)return[le("rejectLaw",{lawId:t.id})]}return[]},probability(e,t){return re(e,t,{years:3,months:8})?0:Lt(je(e.proposedLaws))?.5:0}}),Wi=I({title:"D\xFCrreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausf\xE4lle sind enorm.",apply(){return[d("gdp").byValue(-100),d("popularity").byValue(-10)]},probability(e,t){return Math.min(1,z(400,0,e.values.co2budget)/100)},citations:[],details:a`

  `,internals:a`

  `}),Fi=I({title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute \xFCber die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",apply(){return[]},probability(e,t){return re(e,t,{years:10},{years:2})?0:.5}});function Pi(e,t,n){return xt(e,t,n).values}function xt(e,t,n){const r=fe(e.values),i=t.sort((l,u)=>{var c,p;return((c=l.treatAfterLabels)==null?void 0:c.some(C=>{var O;return(O=u.labels)==null?void 0:O.includes(C)}))?1:((p=u.treatAfterLabels)==null?void 0:p.some(C=>{var O;return(O=l.labels)==null?void 0:O.includes(C)}))?-1:0}).filter(l=>l.effectiveSince<=n),s=zi(i,l=>{const u=Tr(r),c=l.effects(N(P({},e),{values:r}),l.effectiveSince,n);return Le({dispatch:()=>{},values:r},c),u},(l,u,c)=>r[c]-u[c]);return r.co2budget-=r.co2emissions,{values:r,effectsOfLaws:s}}function _e(e){return Math.max(0,Math.min(100,e))}function Ai(e){if(e.values.co2budget<=0)return 0;if(e.values.co2emissions<=0)return 100;const t=he.co2budget/fe(he).co2emissions,r=e.values.co2budget/e.values.co2emissions/t;return _e(r*50)}function He(e){const t=e.values.co2budget/he.co2budget;return _e(t*100)}function Je(e){const t=he.stateDebt,n=(e.values.stateDebt-t)/t;return n>0?_e(50-n/.2*50):_e(50-n*50)}function Re(e){return _e(e.values.popularity)}var Li=I({title:"Zusammenbruch des Finanzsystems",description:`Deine Staatsfinanzen sind desastr\xF6s. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zur\xFCckahlen k\xF6nnen. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    k\xF6nntest. Das Spiel ist damit leider beendet.
  `,apply(){return[le("gameOver")]},probability(e,t){return Je(e)<=0?be.finanzKollaps:0}}),xi=I({title:"CO2 Budget Aufgebraucht",description:`Wenn sich alle L\xE4nder so verhalten, werden die CO2-Werte soweit steigen,
  dass die Erde nur noch an wenigen Orten bewohnbar ist.
  Die ehemaligen K\xFCstenregionen stehen unter Wasser, ganze Landstriche sind verschwunden.
  In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr w\xE4chst.
  Um die verbleibenden Teile brechen erbitterte K\xE4mpfe aus.
  `,apply(){return[le("gameOver")]},probability(e,t){return He(e)<=0?be.hitzehoelle:0}}),Oi=I({title:"Klimafl\xFCchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimafl\xFCchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply(){return[d("stateDebt").byValue(10)]},probability(e,t){return e.values.co2budget<500?.2:0},citations:[],details:a`

  `,internals:a`

  `}),Ti=I({title:"Klimaneutral !!!",description:"Geschafft! Die j\xE4hrlichen CO2 Emissionen sind auf null oder werden vollst\xE4ndig durch Absorption kompensiert.",apply(){return[le("gameOver")]},probability(e){return e.values.co2emissions<=0?be.timesUp:0}}),Vi=I({title:"Happy New Year!",description:`Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen T\xE4tigkeit aufgestellt
    und kommt zu dem nicht weiter \xFCberraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht \xFCberraschend - sieht die Sache anders und verurteilt die Regierungserkl\xE4rung als haltlos.
  `,apply(){return[le("advanceYear")]},probability(e,t){return te(e.currentDate).getYear()>e.currentYear?be.newYear:0}}),Ii=I({title:"Plagiatsaff\xE4re",description:"W\xE4hrend des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet W\xE4hlerstimmen.",apply(){return[d("popularity").byValue(-10)]},probability(e,t){return re(e,t,{years:12},{years:3,months:10})?0:.5},citations:[],details:a`

  `,internals:a`

  `}),$i=I({title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply(){return[d("popularity").byValue(-10)]},probability(e,t){return re(e,t,{years:20},{years:5,months:11})?0:.3},citations:[],details:a`

  `,internals:a`

  `}),Bi=I({title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und f\xFChrt zu einer neuen Diskussion \xFCber Lobbyismus.",apply(){return[d("popularity").byValue(-2)]},probability(e,t){return re(e,t,{years:20},{years:3,months:11})||g(e,"WirksamerCO2Preis")||g(e,"VollerCO2Preis")||g(e,"KohleverstromungEinstellen")?0:.3},citations:[],details:a`

  `,internals:a`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `}),Mi=I({title:"Social Media Alarm!",description:`Deine Wahlkampfberaterin ruft dich v\xF6llig aufgel\xF6st an. Ob denn an den Geschichten was dran sein, die da im
    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.
    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.
  `,apply(){return[d("popularity").byPercent(-20)]}}),Gi=I({title:"B\xFCrgerinitiative fordert st\xE4rkere Solarf\xF6rderung",description:"Du musst entscheiden, wie gro\xDF die F\xF6rderung ausf\xE4llt. Oder willst du sie verkleinern oder sogar abschaffen?",apply(){return[]},probability(e,t){if(re(e,t,{months:8}))return 0;const n=g(e,"SolarstromFoerderungAbschaffen"),r=g(e,"SolarstromFoerderungWieZuBeginn"),i=g(e,"SolarstromFoerdernx2"),s=g(e,"SolarAufAllenDaechernVerpflichtend");return n||r||i||!s?.5:0},citations:[Fe],details:a`

  `,internals:a`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${V(Fe)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),Ui=I({title:"Bund der Steuerzahler fordert Abschaffung Solarf\xF6rderung",description:"Der Solaranteil ist bereits sehr hoch, die Kosten f\xFCr die F\xF6rderung sind schwer zu vermitteln.",apply(){return[]},probability(e,t){if(re(e,t,{years:1,months:2}))return 0;const n=e.values.electricitySolar/e.values.electricityDemand,r=g(e,"SolarstromFoerdernx2"),i=g(e,"SolarstromFoerdernx4"),s=g(e,"SolarstromFoerdernx8");return n>50&&(r||i||s)?.5:0},citations:[Fe],details:a`

  `,internals:a`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${V(Fe)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),Ni=I({title:"Du hast durchgehalten",description:`Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,
    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Ma\xDFnahmen waren zu finanzieren
    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!
  `,apply(){return[le("gameOver")]},probability(e){return e.currentYear===2050?be.timesUp:0}}),Ki=I({title:"Wahl verloren",description:`Deine Beliebtheit in der Bev\xF6lkerung ist katastrophal, lieber w\xFCrde man Mao Zedong w\xE4hlen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du geh\xF6rst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon l\xE4nger kein vern\xFCnftiger Mensch mehr geglaubt.
  `,apply(){return[le("gameOver")]},probability(e){return Re(e)<=0?be.wahlVerloren:0}}),ji=I({title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet wieder einmal eine Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",apply(){return[]},probability(e,t){return re(e,t,{months:15})?0:.7},citations:[],details:a`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:a`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `}),Hi=I({title:"Durchbruch in der Windenergie-Forschung",description:"Wissenschaftler haben eine neue Art der Energiegewinnung durch Wind entwickelt, mit der bestehende Windturbinen deutlich mehr Leistung bringen.",apply(){return[d("popularity").byValue(4),d("electricityWindEfficiency").byPercent(30)]},probability(e,t){if(re(e,t,{years:20},{years:3,months:7}))return 0;const n=g(e,"WindkraftVereinfachen")?1.5:1;return g(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?.5*n:g(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?.4*n:g(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?.1*n:0},citations:[],details:a`

  `,internals:a`

  `});const Ji={AbstandsregelnWindkraft:En,AtomKatastrophe:Vr,Bestechung:Ci,Duerrewelle:Wi,EnergieStrategie:Fi,FinanzKollaps:Li,CO2BudgetAufgebraucht:xi,Klimafluechtlinge:Oi,Klimaneutral:Ti,NewYear:Vi,Plagiatsaffaere:Ii,PRInnenminister:$i,PRKohleindustrie:Bi,SocialMedia:Mi,SolarstromFoerderung:Gi,SolarstromFoerderung2:Ui,TimesUp:Ni,WahlVerloren:Ki,WindkraftAusschreibung:ji,WindkraftForschung:Hi};function Ri(e,t){return re(e,t,{years:3})?0:.05}const De=mt(Ji).map(e=>N(P({},e),{probability:e.probability||Ri})),Ye={id:"",currentDate:lt,currentYear:ve,values:he,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],over:!1,prngState:!0};function Ze(e=Ye,t=sn()){const n={id:t,currentDate:e.currentDate,currentYear:e.currentYear,acceptedLaws:[...e.acceptedLaws],proposedLaws:[...e.proposedLaws],rejectedLaws:[...e.rejectedLaws],values:fe(e.values),events:[...e.events],over:e.over,prngState:e.prngState};return mi(n),n}const Yi=Object.keys(Ye);function Ot(e){return Object.fromEntries(Yi.map(t=>{if(t==="prngState")return[t,gi()];if(t==="values"){const n=e[t],r=xr.map(i=>[i,n[i]]);return[t,Object.fromEntries(r)]}else return[t,e[t]]}))}function Tt(e=ce,t=Ye){const n=Ze(t);return n.acceptedLaws=e.filter(r=>{var i;return(i=r.labels)==null?void 0:i.includes("initial")}).map(r=>({lawId:r.id,effectiveSince:n.currentYear})),n}const we=[...Array(ct-ve+1).keys()].map(e=>e+ve);function Zi(e,t){const n={lawId:e,effectiveSince:t.currentYear+1},r=Se(n),i=r.effort(t);t.currentDate=te(t.currentDate).plus(i.time).toJSON();const s=r.removeLawsWithLabels,l=t.acceptedLaws.map(Se).filter(u=>!(s==null?void 0:s.some(c=>{var p;return(p=u.labels)==null?void 0:p.includes(c)}))).map(u=>({lawId:u.id,effectiveSince:u.effectiveSince}));return t.acceptedLaws=[...l,n],Qe(t)}function Qi(e){return e.currentDate=te(e.currentDate).plus(_n).toJSON(),Qe(e)}function Qe(e,t=ce,n=De,r=Pt){const i=qi(e,n,r);if(i){const l={id:i.id,occurredIn:e.currentDate,acknowledged:!1};e.events.unshift(l)}const s=rs(e,t);return e.proposedLaws=is(e.proposedLaws,s),i}function qi(e,t,n){const r=Xi(e,t),i=es(r);if(i)return i;const s=ts(r);return ns(s,n())}function Xi(e,t){return t.map(n=>N(P({},n),{prob:n.probability(e,n)})).filter(n=>n.prob>0)}function es(e){return e.filter(t=>t.prob>1).reduce((t,n)=>n.prob>((t==null?void 0:t.prob)||0)?n:t,void 0)}function ts(e){const t=e.map(r=>r.prob).reduce((r,i)=>r+i,0);if(t<=ht)return e;const n=ht/t;return e.map(r=>N(P({},r),{prob:r.prob*n}))}function ns(e,t){for(const n of e)if(t-=n.prob,t<0)return n}function rs(e,t){const n=l=>{var u;return(u=e.acceptedLaws)==null?void 0:u.some(c=>c.lawId===l.id)},r=l=>{var u;return(u=e.rejectedLaws)==null?void 0:u.includes(l.id)},i=l=>{var u;return((u=l.labels)==null?void 0:u.includes("hidden"))||!1},s=l=>({law:l,priority:l.priority(e)});return t.filter(Me(n)).filter(Me(r)).filter(Me(i)).map(s).filter(l=>l.priority>0).sort((l,u)=>u.priority-l.priority).map(l=>l.law.id).slice(0,dt)}function is(e,t){const n=[...e],r=t.filter(l=>n.includes(l)),i=t.filter(l=>!r.includes(l));for(var s=0;s<n.length;){if(r.includes(n[s])){s++;continue}if(i.length===0){n.splice(s,1);continue}n[s]=i.shift(),s++}return n.push(...i.slice(0,dt-n.length)),n}const ye=[{id:"start",title:"Stell dir vor...",text:a`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du ausw\xE4hlen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die W\xE4hler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine W\xE4hler sind.",highlight:"popularity",offset:100},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant",offset:100}];function ss(e,t){return{startGame(n){const r=Tt(),i=Qe(r);t.createGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i}),e.push("/games/"+r.id)},async loadGame(n,r){var i;if(((i=n.state.game)==null?void 0:i.id)!==r.gameId)try{const s=await t.loadGame(r.gameId);t.saveGame(s),e.push("/games/"+s.id),n.commit("setGameState",{game:s})}catch(s){n.dispatch("error",{error:s})}},gameOver(n){n.commit("gameOver",void 0)},acceptLaw(n,r){const i=P({},n.state.game),s=Zi(r.lawId,i);t.saveGame(i),n.commit("setGameState",{game:i}),n.dispatch("applyEvent",{event:s}),t.decisionMade(i,r.lawId,!0)},rejectLaw(n,r){const i=P({},n.state.game);i.rejectedLaws=[...i.rejectedLaws,r.lawId],t.decisionMade(i,r.lawId,!1),t.saveGame(i),n.commit("setGameState",{game:i})},sitOut(n){const r=P({},n.state.game);t.decisionMade(r,"sitOut",!0);const i=Qi(r);t.saveGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i})},advanceYear(n){const r=P({},n.state.game),i=r.acceptedLaws.map(Se);r.currentYear++,r.values=Pi(r,i,r.currentYear),t.saveGame(r),n.commit("setGameState",{game:r})},applyEvent(n,r){if(!r.event)return;const i=P({},n.state.game);t.eventOccurred(i,r.event);const s=r.event.apply(i);n.dispatch("applyEffects",{changes:s})},acknowledgeEvent(n,r){const i=P({},n.state.game);i.events.find(s=>s.id===r.id).acknowledged=!0,t.saveGame(i),n.commit("setGameState",{game:i})},applyEffects(n,r){const i={dispatch:()=>{},values:fe(n.state.game.values)};Le(i,r.changes);const s=N(P({},n.state.game),{values:i.values});t.saveGame(s),n.commit("setGameState",{game:s});const l={dispatch:n.dispatch};Le(l,r.changes)},setupTour(n){const r=localStorage.getItem("tour")||ye[0].id,i=ye.find(s=>r===s.id);i?n.commit("setTour",{step:i.id,active:!0}):n.dispatch("stopTour")},nextTourStep(n){const r=ye.findIndex(i=>n.state.tour.step===i.id);if(r<0||r==ye.length-1)n.dispatch("stopTour");else{const i=ye[r+1];n.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(n){n.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},error(n,r){n.commit("error",r)},changeRoom(n,r){n.commit("setRoom",{activeRoom:r})}}}const as={setGameState(e,t){e.game=t.game},gameOver(e){e.game=N(P({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)},setRoom(e,t){e.activeRoom=t.activeRoom}},os={proposedLaws(e){return!e.game||!e.game.proposedLaws?[]:je(e.game.proposedLaws)},eventToShow(e){if(!e.game)return;const t=e.game.currentDate,n=e.game.events.filter(r=>r.occurredIn===t&&!r.acknowledged)[0];return n&&De.find(r=>r.id===n.id)}},Vt=localStorage.getItem("devMode"),ls={game:void 0,tour:{active:!0,step:"start"},activeRoom:"office",devMode:Vt==="true"||Vt===null&&!1};var M=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const cs={key:0},us=["onClick"],ds={key:1},hs=A({props:{items:null},setup(e){const t=X(void 0);function n(r){t.value=t.value===r?void 0:r}return(r,i)=>e.items&&e.items.length?(h(),m("div",cs,[(h(!0),m(H,null,ee(e.items,(s,l)=>(h(),m("div",{key:l,class:B(["item",{opened:l===t.value}]),onClick:u=>n(l)},[o("title",null,w(s.title),1),o("p",{ref_for:!0,ref:"p"},w(s.description),513)],10,us))),128))])):(h(),m("p",ds,"Keine Eintr\xE4ge bisher"))}});var It=M(hs,[["__scopeId","data-v-276549a0"]]);const $t=A({setup(e){const t=j(),n=v(()=>{var i;return(i=t.state.game)==null?void 0:i.acceptedLaws}),r=v(()=>ce.filter(i=>{var s,l;return((s=n.value)==null?void 0:s.some(u=>u.lawId===i.id))&&!((l=i.labels)==null?void 0:l.includes("hidden"))}));return(i,s)=>(h(),J(It,{items:_(r)},null,8,["items"]))}}),fs=A({setup(e){const t=j(),n=v(()=>{var r;return(r=t.state.game)==null?void 0:r.events.map(i=>De.find(s=>i.id===s.id)).filter(i=>i!=null)});return(r,i)=>(h(),J(It,{items:_(n)},null,8,["items"]))}});const qe=e=>(ge("data-v-106564b2"),e=e(),pe(),e),ms={id:"archive"},gs=qe(()=>o("h2",null,"Archiv",-1)),ps={class:"wrapper"},vs=qe(()=>o("h3",null,"Erlassene Gesetze",-1)),bs=qe(()=>o("h3",null,"Meldungen",-1)),ws=A({setup(e){const t=j();v(()=>{var r;return(r=t.state.game)==null?void 0:r.events});function n(){t.dispatch("changeRoom","office")}return(r,i)=>(h(),m("div",ms,[gs,o("div",ps,[o("div",null,[vs,x($t)]),o("div",null,[bs,x(fs)])]),o("button",{onClick:n},"Zur\xFCck zum B\xFCro")]))}});var ys=M(ws,[["__scopeId","data-v-106564b2"]]);const ks={class:"dialog"},Ss={class:"buttons"},_s=A({props:{offset:String},setup(e){const t=e;an(r=>({"62c1c5ad":_(n)}));const n=v(()=>t.offset||"0px");return(r,i)=>(h(),m("div",ks,[Ve(r.$slots,"default",{},void 0,!0),o("div",Ss,[Ve(r.$slots,"buttons",{},void 0,!0)])]))}});var Bt=M(_s,[["__scopeId","data-v-a504d38c"]]);const Ds=o("h2",null,"Das Spiel ist leider zu Ende",-1),Es=o("p",null,"Deine Entscheidungen haben etwas ver\xE4ndert - soviel kann man sagen.",-1),zs=o("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Cs=A({setup(e){const t=j(),n=v(()=>{const l=t.state.game;if(!l)return"";const u=He(l),c=Ai(l);if(u<=0){const p=l.values.co2emissions/fe(he).co2emissions;return p<.2?"entwickeln sich auf einem guten Weg, beim n\xE4chsten Versuch klappt es bestimmt!  ...ach ne, wir haben ja nur einen Planeten, das CO2 Budget ist n\xE4mlich schon aufgebraucht.":p<.95?"sind weiterhin vorhanden, aber zumindest etwas gesunken. Allerdings ist das Budget aufgebraucht...":p<1.05?"sind praktisch gleich geblieben. Du hasts Dir wohl in der Karibik gut gehen lassen, w\xE4hrend das CO2-Budget im Land aufgebraucht wurde?!?":"sind explodiert und das Budget ist aufgebraucht. H\xE4tte die AfD nicht besser hinbekommen."}else return c<5?"sind explodiert, das Budget ist zwar noch nicht ganz aufgebraucht - aber bald. H\xE4tte die AfD nicht besser hinbekommen.":c<30?"sind nicht wirklich besser geworden. Ob da noch was zu retten ist?":c<50?"sind vielleicht etwas gesunken, aber nicht genug, um mit dem verbleibenden Budget auszukommen.":c<80?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":c<100?"entwickeln sich auf einem guten Weg, beim n\xE4chsten Versuch klappt es bestimmt!":"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!"}),r=v(()=>{const l=t.state.game;if(!l)return"";const u=Je(l);return u<0?"sind dir leider aus dem Ruder gelaufen.":u<25?"sind dir so gerade nicht um die Ohren geflogen. Noch nicht...":u<50?"sind wohl so gerade noch ok.":"sind ausgeglichen. Die Stabilit\xE4tskriterien werden eingehalten."}),i=v(()=>{const l=t.state.game;if(!l)return"";const u=Re(l);return u<0?"entspricht dem, was man von einem langj\xE4hrigen Diktator erwarten kann.":u<50?"ist nicht berauschend, wiedergew\xE4hlt w\xFCrdest du wohl eher nicht.":u<80?"reicht aus, dass du noch l\xE4nger am Ruder bleiben k\xF6nntest. Gratulation!":"ist v\xF6llig unglaubw\xFCrdig - war das wirklich eine freie Wahl?"});function s(){t.dispatch("startGame")}return(l,u)=>(h(),J(Bt,null,{default:ue(()=>[Ds,Es,o("ul",null,[o("li",null,"Die CO2-Emissionen "+w(_(n)),1),o("li",null,"Die Staatsfinanzen "+w(_(r)),1),o("li",null,"Deine Beliebtheit "+w(_(i)),1)]),zs]),buttons:ue(()=>[o("button",{onClick:s},"Neuer Versuch")]),_:1}))}});const Ws=A({props:{title:null,text:null},emits:["acknowledge"],setup(e,{emit:t}){function n(){t("acknowledge")}return(r,i)=>(h(),m("div",{onClick:n},[o("h2",null,w(e.title),1),o("p",null,w(e.text),1)]))}});var Fs=M(Ws,[["__scopeId","data-v-f1c5d83c"]]);const Ps=A({setup(e){const t=j(),n=v(()=>t.getters.eventToShow);function r(){t.dispatch("acknowledgeEvent",n.value)}return(i,s)=>_(n)?(h(),J(Fs,{key:0,title:_(n).title,text:_(n).description,onAcknowledge:r},null,8,["title","text"])):D("",!0)}});const As=e=>(ge("data-v-1a90b59e"),e=e(),pe(),e),Ls=["onClick"],xs=As(()=>o("br",null,null,-1)),Os={key:0,class:"button-bar"},Ts=["onClick"],Vs=A({props:{law:null,selectable:{type:Boolean},numCards:null},emits:["selected","accepted"],setup(e,{emit:t}){const n=e,r=X(!1),i=v(()=>n.law.zIndex);function s(){t("selected")}function l(){r.value=!0}function u(c){c.animationName.match(/^twistOut-/)&&t("accepted",n.law.id)}return(c,p)=>(h(),m("div",{class:B(["Law",{accepted:r.value}]),style:Ie({zIndex:_(i)}),onClick:Z(s,["stop"]),onAnimationend:u},[o("div",null,[o("h3",null,w(e.law.title),1),o("div",null,w(e.law.description),1),xs,o("div",null,w(e.law.effortComment),1),e.selectable?(h(),m("div",Os,[o("button",{class:"accept",onClick:Z(l,["stop"])},"\u2713",8,Ts)])):D("",!0)])],46,Ls))}});var Is=M(Vs,[["__scopeId","data-v-1a90b59e"]]);const $s=A({setup(e){const t=j(),n=X(0),r=X(!1),i=X(!1),s=v(()=>Cn(l.value.length,n.value)),l=v(()=>t.getters.proposedLaws),u=v(()=>t.state.game),c=v(()=>u.value===void 0?[]:l.value.map((k,T)=>N(P({},k),{zIndex:s.value[T],pos:T,effortComment:k.effort(u.value).text})));function p(k){t.dispatch("acceptLaw",{lawId:k})}function C(k){n.value!=k?n.value=k:(r.value=!r.value,r.value||(i.value=!1))}function O(){t.dispatch("sitOut")}function f(k){r.value&&(i.value=!0)}return(k,T)=>(h(),m(H,null,[o("div",{class:B(["ProposedLaws",{poppedUp:r.value}]),onTransitionend:f},[(h(!0),m(H,null,ee(_(c),(b,W)=>(h(),J(Is,{key:b.id,law:b,selectable:r.value,numCards:_(c).length,class:"singleLaw",onAccepted:()=>p(b.id),onSelected:()=>C(W)},null,8,["law","selectable","numCards","onAccepted","onSelected"]))),128))],34),x(ln,{name:"fade"},{default:ue(()=>[st(o("div",{class:"sitOutButton",onClick:T[0]||(T[0]=()=>O())},"Aussitzen",512),[[on,i.value]])]),_:1})],64))}});var Bs=M($s,[["__scopeId","data-v-2d9ed44c"]]),Mt="/assets/table-top.c87bd2fd.png";const Ms=o("img",{src:Mt},null,-1),Gs=[Ms],Us=A({setup(e){const t=j(),n=v(()=>t.state.activeRoom);function r(){t.dispatch("changeRoom",n.value==="office"?"archive":"office")}return(i,s)=>(h(),m("div",{id:"archiveDoor",onClick:r},Gs))}});const Ns={id:"calendar"},Ks=A({props:{year:null,month:null},setup(e){const t=e,n=v(()=>{const r=Math.floor((t.month-1)/4)*18+27+"%",i=(t.month-1)%4*21+12+"%";return{top:r,left:i}});return(r,i)=>(h(),m("div",Ns,[G(w(e.year)+" ",1),o("span",{id:"month-indicator",style:Ie(_(n))},null,4)]))}});var js=M(Ks,[["__scopeId","data-v-0f606c26"]]),Hs="/assets/plant-healthy.97772624.png",Js="/assets/plant-sick.5a0f1b46.png",Rs="/assets/plant-withered.b50106c7.png";const Ys={class:"container"},Zs={class:"title"},Qs={class:"progress-bar"},qs=A({props:{title:null,value:null},setup(e){const t=e,n=v(()=>{const r=t.value>40?"green":t.value>20?"goldenrod":"red";return{width:t.value+"%",backgroundColor:r}});return(r,i)=>(h(),m("div",Ys,[o("div",Zs,w(e.title),1),o("div",Qs,[o("div",{class:"indicator",style:Ie(_(n))},null,4)])]))}});var Xe=M(qs,[["__scopeId","data-v-4278d516"]]);const Xs={id:"plant"},ea=["src","id"],ta=A({props:{value:null},setup(e){const t=e,n={healthy:Hs,sick:Js,withered:Rs},r=v(()=>t.value>66?"healthy":t.value>33?"sick":"withered"),i=v(()=>n[r.value]);return(s,l)=>(h(),m("div",Xs,[x(Xe,{id:"indicator",title:"CO2-Budget",value:e.value},null,8,["value"]),o("img",{src:_(i),id:_(r)},null,8,ea)]))}});var na=M(ta,[["__scopeId","data-v-3a01fbe0"]]),ra="/assets/money-short.de0f4b49.png",ia="/assets/money-less.0e85eacb.png",sa="/assets/money-more.a93f79a5.png",aa="/assets/money-much.69233a0e.png";const oa={id:"finances"},la={key:0,src:ra,id:"short"},ca={key:1,src:ia,id:"less"},ua={key:2,src:sa,id:"more"},da={key:3,src:aa,id:"much"},ha=A({props:{value:null},setup(e){const t=e,n=v(()=>t.value<20),r=v(()=>t.value>=20&&t.value<50),i=v(()=>t.value>=50&&t.value<80),s=v(()=>t.value>=80);return(l,u)=>(h(),m("div",oa,[_(n)?(h(),m("img",la)):D("",!0),_(r)?(h(),m("img",ca)):D("",!0),_(i)?(h(),m("img",ua)):D("",!0),_(s)?(h(),m("img",da)):D("",!0),x(Xe,{id:"indicator",title:"Finanzen",value:e.value},null,8,["value"])]))}});var fa=M(ha,[["__scopeId","data-v-0900f55c"]]),ma="/assets/heater.43006232.png";const ga={},pa=e=>(ge("data-v-c9039a0c"),e=e(),pe(),e),va={id:"heater"},ba=pa(()=>o("img",{src:ma},null,-1)),wa=[ba];function ya(e,t){return h(),m("div",va,wa)}var ka=M(ga,[["render",ya],["__scopeId","data-v-c9039a0c"]]),Sa="/assets/people-happy.acaffc0b.png",_a="/assets/people-angry.54c1d60c.png";const Da={id:"popularity"},Ea={key:0,src:Sa,id:"happy"},za={key:1,src:_a,id:"angry"},Ca=A({props:{value:null},setup(e){const t=e,n=v(()=>t.value>=50),r=v(()=>t.value<50);return(i,s)=>(h(),m("div",Da,[x(Xe,{id:"indicator",title:"Beliebtheit",value:e.value},null,8,["value"]),_(n)?(h(),m("img",Ea)):D("",!0),_(r)?(h(),m("img",za)):D("",!0)]))}});var Wa=M(Ca,[["__scopeId","data-v-ba2ec690"]]),Gt="/assets/table-front.78c0f8c6.png",Ut="/assets/table-side.49774a53.png";const Fa={},Pa={id:"table"},Aa=$e('<img src="'+Mt+'" id="table-top" data-v-1ef8d93c><img src="'+Gt+'" id="table-front" data-v-1ef8d93c><img src="'+Gt+'" id="table-back" data-v-1ef8d93c><img src="'+Ut+'" id="table-left-side" data-v-1ef8d93c><img src="'+Ut+'" id="table-right-side" data-v-1ef8d93c>',5),La=[Aa];function xa(e,t){return h(),m("div",Pa,La)}var Oa=M(Fa,[["render",xa],["__scopeId","data-v-1ef8d93c"]]);const Ta=A({setup(){const e=j();return e.dispatch("setupTour"),{store:e}},components:{Dialog:Bt},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return ye.find(e=>e.id===this.$store.state.tour.step)},offset(){var e;return((e=this.currentStep)==null?void 0:e.offset)!=null?this.currentStep.offset+"px":"0px"},title(){var e;return(e=this.currentStep)==null?void 0:e.title},text(){var e;return(e=this.currentStep)==null?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var n;const t=document.querySelector(".highlighted");t&&t.classList.remove("highlighted"),e&&e.highlight&&((n=document.querySelector(`#${e.highlight}`))==null||n.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}}),Va=["innerHTML"];function Ia(e,t,n,r,i,s){const l=de("Dialog");return e.title&&e.text?(h(),J(l,{key:0,offset:e.offset},{buttons:ue(()=>[o("button",{onClick:t[0]||(t[0]=(...u)=>e.stop&&e.stop(...u))},"Tour beenden"),o("button",{onClick:t[1]||(t[1]=(...u)=>e.next&&e.next(...u))},"Weiter")]),default:ue(()=>[o("h2",null,w(e.title),1),o("div",{innerHTML:e.text},null,8,Va)]),_:1},8,["offset"])):D("",!0)}var $a=M(Ta,[["render",Ia]]),Ba="/assets/board-front.41330f02.png",Nt="/assets/board-side.d7181ded.png",Ma="/assets/tv-front.82df5c0c.png",Ga="/assets/news.c4bbc2d0.png",Kt="/assets/tvset-legs.78b387df.png";const jt=e=>(ge("data-v-3be0e128"),e=e(),pe(),e),Ua={id:"tvset"},Na=$e('<div id="board" data-v-3be0e128><img id="board-front" src="'+Ba+'" data-v-3be0e128><img id="board-left" src="'+Nt+'" data-v-3be0e128><img id="board-right" src="'+Nt+'" data-v-3be0e128><div id="board-top" data-v-3be0e128></div></div>',1),Ka={id:"tv"},ja=jt(()=>o("img",{id:"tv-front",src:Ma},null,-1)),Ha={key:0,id:"news",src:Ga},Ja=jt(()=>o("div",{id:"legs"},[o("img",{id:"legs-front",src:Kt}),o("img",{id:"legs-back",src:Kt})],-1)),Ra=A({setup(e){const t=j(),n=v(()=>t.getters.eventToShow);return(r,i)=>(h(),m("div",Ua,[Na,o("div",Ka,[ja,_(n)?(h(),m("img",Ha)):D("",!0)]),Ja]))}});var Ya=M(Ra,[["__scopeId","data-v-3be0e128"]]);const Za={id:"office"},Qa=A({setup(e){const t=j(),n=v(()=>t.state.devMode),r=v(()=>{var c;return((c=t.state.game)==null?void 0:c.currentYear)||2021}),i=v(()=>{var c;return te((c=t.state.game)==null?void 0:c.currentDate).lux.month}),s=v(()=>{const c=t.state.game;return c?Je(c):0}),l=v(()=>{const c=t.state.game;return c?Re(c):0}),u=v(()=>{const c=t.state.game;return c?He(c):0});return(c,p)=>(h(),m("div",Za,[_(n)?(h(),J(Us,{key:0})):D("",!0),x(js,{year:_(r),month:_(i)},null,8,["year","month"]),x(ka),x(Wa,{value:_(l)},null,8,["value"]),x(Ya),x(na,{value:_(u)},null,8,["value"]),x(Oa),x(fa,{value:_(s)},null,8,["value"]),x(Bs),x($a)]))}});const qa={class:"perspective"},Xa={id:"camera"},eo={id:"walls"},to={id:"wall-back"},no=G("#ich-kann-klima"),ro=o("div",{id:"wall-left"},null,-1),io=o("div",{id:"wall-right"},null,-1),so=A({setup(e){const t=j(),n=v(()=>t.state.activeRoom);function r(){const s=window.innerHeight,l=window.innerWidth,u=Math.min(s/800,l/1e3),c=(l-1e3*u)/2;document.documentElement.style.setProperty("--scale",`${u}`),document.documentElement.style.setProperty("--translateX",`${c}px`)}const i=v(()=>{const s=t.state.game;return s?s.over:!1});return cn(r),un(()=>{window.addEventListener("resize",r)}),(s,l)=>{const u=de("router-link");return h(),m("div",qa,[o("div",{class:B(["game-setup",_(n)])},[o("div",Xa,[o("div",eo,[o("div",to,[o("h1",null,[x(u,{to:"/"},{default:ue(()=>[no]),_:1})])]),ro,io]),x(Qa),x(ys),_(i)?(h(),J(Cs,{key:0})):D("",!0)]),x(Ps)],2)])}}});const ao=A({components:{GameSetup:so,AcceptedLaws:$t},setup(){return{store:j()}},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,n){n(r=>r.startGame(e.params.id))}});function oo(e,t,n,r,i,s){const l=de("GameSetup");return h(),J(l)}var Ht=M(ao,[["render",oo],["__scopeId","data-v-3637ce73"]]),lo="/assets/ich-kann-klima-Alina-circle.dd068f4d.jpg",co="/assets/ich-kann-klima-Joachim-circle.df33e312.jpg",uo="/assets/ich-kann-klima-Lisa-circle.b002c29e.jpg",ho="/assets/ich-kann-klima-Mathias-circle.e497a66c.jpg",fo="/assets/ich-kann-klima-Pina-circle.fe4c34e8.jpg",mo="/assets/ich-kann-klima-Thomas-circle.cdbff65c.jpg";const Ee=e=>(ge("data-v-caea06ce"),e=e(),pe(),e),go={id:"screen"},po={id:"content"},vo=Ee(()=>o("div",{class:"text"},[o("h1",null,"#ich-kann-klima"),o("p",null,"So? Du meinst also, Du k\xF6nntest das Klima retten, wenn Du Bundeskanzler*in w\xE4rst?"),o("p",null,"Hier ist Deine Chance!"),o("p",null," Du wurdest soeben mit gro\xDFer Mehrheit gew\xE4hlt, Deine Koalitionspartner folgen Dir willig. Aber womit f\xE4ngst Du an? Welche Gesetze m\xFCssen als Erstes auf den Weg gebracht werden? Was w\xE4re zu viel des Guten? ")],-1)),bo={id:"buttons"},wo={key:0,id:"construction",class:"text"},yo=Ee(()=>o("p",null," Dies ist die aller erste Version. Wir hoffen, dass Spa\xDF beim Spielen vielleicht ganz kurz mal aufkommt. Dann ist das Spiel aber gleich schon wieder zu Ende. Spiels nochmal, oder schicks Deinen Freunden. ",-1)),ko=Ee(()=>o("p",null," An ein paar Stellen haben wir mit realen Zahlen gearbeitet und Effekte nach aktuellem Stand der Forschung modelliert. Vieles ist sehr grob vereinfacht und oft auch schlicht geraten. ",-1)),So=Ee(()=>o("p",null," Diese Version ist auf den Energiesektor beschr\xE4nkt, auch wenn wir bereits Einiges f\xFCr die Mobilit\xE4ts-, Industrie-, Geb\xE4ude- und Agrarsektoren haben. ",-1)),_o=Ee(()=>o("p",null,"Gibt noch viel zu tun! Willst Du dich beteiligen? Dann melde Dich bei uns.",-1)),Do=[yo,ko,So,_o],Eo={key:1,id:"us",class:"text"},zo=$e('<p data-v-caea06ce> Erste Ideen wurden entwickelt auf dem Hackathon &quot;Neustart Klima&quot; im M\xE4rz 2021 unter dem Arbeitstitel &quot;Klima-Wahl-Rechner&quot;. </p><p data-v-caea06ce>Ein Teil des Teams blieb dabei und entwickelte die Ideen weiter.</p><p data-v-caea06ce>Wir sind:</p><div id="persons" data-v-caea06ce><div data-v-caea06ce><img src="'+lo+'" data-v-caea06ce><p data-v-caea06ce>Alina</p><p data-v-caea06ce>Dietrich</p></div><div data-v-caea06ce><img src="'+co+'" data-v-caea06ce><p data-v-caea06ce>Joachim</p><p data-v-caea06ce>Schirrmacher</p></div><div data-v-caea06ce><img src="'+uo+'" data-v-caea06ce><p data-v-caea06ce>Lisa</p><p data-v-caea06ce>Hohmann</p></div><div data-v-caea06ce><img src="'+ho+'" data-v-caea06ce><p data-v-caea06ce>Mathias</p><p data-v-caea06ce>de Riese</p></div><div data-v-caea06ce><img src="'+fo+'" data-v-caea06ce><p data-v-caea06ce>Pina</p><p data-v-caea06ce>Gromotka</p></div><div data-v-caea06ce><img src="'+mo+'" data-v-caea06ce><p data-v-caea06ce>Thomas</p><p data-v-caea06ce>Olszamowski</p></div></div><h2 data-v-caea06ce>Kontakt und Impressum</h2><p data-v-caea06ce>Mathias de Riese (V.i.S.d.P.)</p><p data-v-caea06ce>Buntentorsdeich 21</p><p data-v-caea06ce>28201 Bremen</p><p data-v-caea06ce>+49 (176) 2404 2827</p><p data-v-caea06ce><a href="mailto:info@ich-kann-klima.de" data-v-caea06ce>info@ich-kann-klima.de</a></p>',10),Co=[zo],Wo=A({setup(e){const t=j(),n=X("nothing");function r(s){s===n.value?n.value="nothing":n.value=s}function i(){localStorage.setItem("tour","start"),t.dispatch("startGame",void 0)}return(s,l)=>(h(),m("div",go,[o("div",po,[vo,o("div",bo,[o("a",{href:"#construction",onClick:l[0]||(l[0]=u=>r("construction"))},"Achtung Baustelle"),o("div",{onClick:l[1]||(l[1]=u=>_(t).dispatch("startGame",void 0))},"Spiel starten"),o("div",{onClick:i},"Tour wiederholen"),o("a",{href:"#us",onClick:l[2]||(l[2]=u=>r("us"))},"Wer wir sind")]),n.value==="construction"?(h(),m("div",wo,Do)):D("",!0),n.value==="us"?(h(),m("div",Eo,Co)):D("",!0)])]))}});var Fo=M(Wo,[["__scopeId","data-v-caea06ce"]]);const Po=[{path:"/",component:Fo},{path:"/games",component:Ht},{path:"/games/:id",component:Ht}],Jt=dn({history:hn(),routes:Po});function Ao(e){return{createGame(t){return e.add("post","/games",t)},loadGame(t){return e.add("get","/games/"+t,void 0,0)},saveGame(t){return e.remove("put","/games/"+t.id),e.add("put","/games/"+t.id,t)},decisionMade(t,n,r){return e.add("post","/games/"+t+"/decisions/"+n,{accepted:r})},eventOccurred(t,n){return e.add("post","/games/"+t+"/events/"+n)}}}function Lo(e,t){let n=[],r;async function i(){if(r&&(clearTimeout(r),r=void 0),n.length){const s=n[0],{method:l,path:u,data:c,retry:p,resolve:C,reject:O}=s;try{if((t==null?void 0:t.navigator)&&!(t==null?void 0:t.navigator.onLine))throw Error("Browser is offline");const f=await e(l,u,c);n.shift(),C(f)}catch(f){p?s.retry=Math.max(-1,p-1):(n.shift(),O(f))}n.length&&(r=setTimeout(i,(t==null?void 0:t.timeout)||1e4))}}return{add(s,l,u,c=-1){return new Promise((p,C)=>{n.push({method:s,path:l,data:u,retry:c,resolve:p,reject:C}),r||i()})},remove(s,l){n=n.filter(u=>u.method.toLowerCase()!==s.toLowerCase()||u.path!==l)},callsPending(){return n.length>0}}}function xo(e,t,n=console){return async function(r,i,s){var l;try{const u={method:r};["post","put","patch"].includes(r)&&(u.body=JSON.stringify(s),u.headers={["content-type"]:"application/json"});const c=await t(e+i,u),p=((l=c.headers.get("Content-Type"))==null?void 0:l.match(/json/))?await c.json():await c.text();if(c.ok)return p;throw Error(p.message||p)}catch(u){throw n.error(u),u}}}function Oo({api:e,logger:t=console,storage:n=localStorage}){return{createGame(r){const i=Ot(r);n.setItem("game",JSON.stringify(i)),e.createGame(i).catch(s=>{t.warn("Cannot save new game - trying again later",s)})},async loadGame(r){const i=n.getItem("game");if(i){const l=JSON.parse(i);if(l.id===r)return Ze(l,r)}const s=await e.loadGame(r);return Ze(s,r)},saveGame(r){const i=Ot(r);n.setItem("game",JSON.stringify(i)),e.saveGame(i).catch(s=>{t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",s)})},decisionMade(r,i,s){e.decisionMade(r.id,i,s)},eventOccurred(r,i){e.eventOccurred(r.id,i.id)}}}const To=localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",Vo=xo(To,fetch),Io=Lo(Vo),$o=Ao(Io),Bo=Oo({api:$o}),Mo=ss(Jt,Bo),Rt=Symbol();function j(){return fn(Rt)}const Go=mn({state:ls,mutations:as,actions:Mo,getters:os});function Yt(e,t,...n){for(const r of n){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function Uo(e,t,n){function r(c){return e[c].toFixed(2)}function i(c){return(c>0?"+":"")+c.toFixed(2)}function s(c){const p=n.find(C=>C.type==="modify"&&C.name===c);return p&&p.condition?p.value:0}function l(c){const p=s(c),C=t?t[c]:0;return p&&Math.abs(p-C)<.001?i(p):p?i(p)+" / "+i(C):C!=0?i(C):""}return Ct.map(c=>({id:c.name,unit:c.unit,value:r(c.name),effect:l(c.name),class:c.writable?"writable":"calculated"}))}function No(e,t,n,r){const i=e.proposedLaws,s=e.acceptedLaws.map(c=>c.lawId),l=e.rejectedLaws;function u(c){return s.includes(c)?"a":i.includes(c)?"p":l.includes(c)?"r":"x"}return r.map(c=>({id:c.id,priority:c.priority(e),state:u(c.id)})).sort((c,p)=>Yt(c,p,t,"id")*n).map(c=>N(P({},c),{priority:c.priority.toFixed(2)}))}function Ko(e,t,n,r){return r.map(i=>({id:i.id,probability:i.probability(e,i)})).sort((i,s)=>Yt(i,s,t,"id")*n).map(i=>N(P({},i),{probability:(i.probability*100).toFixed(2)}))}const jo={key:0},Ho=["href"],Jo=G(". "),Ro={key:1},Yo={key:2},Zo=G("Bemerkung: "),Qo=["innerHTML"],qo=G(". "),Xo={key:3},el=G("Internes: "),tl=["innerHTML"],nl=G(". "),rl={key:4},il=["href"],sl=G(". "),al={key:5},ol=["href"],ll=G(". "),cl={key:6},ul=["href"],dl=G(". "),hl=A({props:{citation:null,showInternals:{type:Boolean}},setup(e){const t=e,n=v(()=>t.citation.url.toString()),r=v(()=>t.citation.title||t.citation.url.toString());return(i,s)=>(h(),m("p",null,[e.citation.authors?(h(),m("span",jo,w(e.citation.authors+e.citation.dateString())+". ",1)):D("",!0),o("a",{target:"_blank",rel:"noreferrer noopener",href:_(n)},'"'+w(_(r))+'"',9,Ho),Jo,e.citation.publisher?(h(),m("span",Ro,w(e.citation.publisher)+". ",1)):D("",!0),e.citation.comment?(h(),m("span",Yo,[Zo,o("span",{innerHTML:e.citation.comment},null,8,Qo),qo])):D("",!0),e.showInternals&&e.citation.internalComment?(h(),m("span",Xo,[el,o("span",{innerHTML:e.citation.internalComment},null,8,tl),nl])):D("",!0),e.citation.referringUrl?(h(),m("span",rl,[o("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,il),sl])):D("",!0),e.citation.archiveUrl?(h(),m("span",al,[o("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,ol),ll])):D("",!0),e.citation.localCopy?(h(),m("span",cl,[o("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,ul),dl])):D("",!0)]))}}),fl=A({props:{chartData:null,paramId:null,selectedYear:null},emits:["update:selectedYear"],setup(e,{emit:t}){const n=e,r="#9c6d00",i="#ce900070",s="#644600",l=v(()=>({xaxis:{categories:we,labels:{rotate:-90}},chart:{id:n.paramId+"-withLawEffects",animations:{enabled:!1},stacked:!0},colors:[r,s,i],legend:{show:!1},markers:{size:0},dataLabels:{enabled:!1}})),u=v(()=>n.chartData.values.map((b,W)=>({value:b[n.paramId],change:n.chartData.changes[W][n.paramId]}))),c=v(()=>u.value.map(b=>{const W=b.value-b.change;return b.change*b.value>0?W*b.value>0?{value:W,gain:b.change,loss:0}:{value:0,gain:b.value,loss:W}:{value:b.value,gain:0,loss:-b.change}})),p=v(()=>[{name:"Simulated "+n.paramId,data:c.value.map(b=>Math.round(b.value))},{name:"Gains of "+n.paramId+" by selected law",data:c.value.map(b=>Math.round(b.gain))},{name:"Losses of "+n.paramId+" by selected law",data:c.value.map(b=>Math.round(b.loss))}]),C=X();let O;function f(){var b,W;((b=C.value)==null?void 0:b.chart)!=null&&O!=null&&((W=C.value)==null||W.toggleDataPointSelection(0,O)),O=void 0}function k(b){var W,U;if(((W=C.value)==null?void 0:W.chart)!=null&&b){const q=b-we[0];O!=q&&(f(),O=q,(U=C.value)==null||U.toggleDataPointSelection(0,q))}else f()}gn(()=>k(n.selectedYear),{flush:"post"});function T(b,W,U){const q=U.dataPointIndex;q<0||(q===O?(O=void 0,t("update:selectedYear",void 0)):(O=q,t("update:selectedYear",q+we[0])))}return(b,W)=>(h(),m("div",null,[o("div",null,w(e.paramId),1),x(_(pn),{ref_key:"chart",ref:C,type:"bar",options:_(l),series:_(p),onClick:T},null,8,["options","series"])]))}}),ml=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"AutomatischeSektoren",effectiveSince:2021},{lawId:"InitialAtomausstieg",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2022},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2022},{lawId:"NetzausbauErleichtern",effectiveSince:2022},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2023},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2023},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2023},{lawId:"StromspeicherungErleichtern",effectiveSince:2024},{lawId:"KohleverstromungEinstellen",effectiveSince:2024},{lawId:"StromspeicherungFoerdern",effectiveSince:2025},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2026},{lawId:"CO2PreisErhoehen",effectiveSince:2026},{lawId:"CO2AbscheidungUndSpeicherungFoerdern",effectiveSince:2029}]},{name:"Old Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024}]}],Oe=(e,t)=>e.lawId===t.lawId&&e.effectiveSince===t.effectiveSince,gl=e=>e.map((t,n)=>N(P({},t),{sortId:n}));function pl(...e){const t=e.map(n=>n.length===0?0:n[n.length-1].sortId+1);return t.length===0?0:Math.max.apply(Math,t)}function vl(e){const t=X([]),n=X([]),r=X(!1);function i(T,b){var tt;const W=t.value,U={lawId:T,effectiveSince:b,sortId:0},q=(tt=n.value.find(ke=>Oe(U,ke)))==null?void 0:tt.sortId;U.sortId=q!=null?q:pl(W,n.value),t.value=W.filter(ke=>ke.lawId!=T).concat(U).sort((ke,Qt)=>ke.sortId-Qt.sortId)}function s(T){t.value=t.value.filter(b=>b.lawId!=T)}function l(T,b){const W={lawId:T,effectiveSince:b,sortId:0};t.value.some(U=>Oe(U,W))?s(T):i(T,b)}function u(T){t.value=gl(T.laws)}function c(){r.value=!r.value,r.value?n.value=t.value:n.value=[]}const p=v(()=>{var T;return{name:"Current Game",laws:((T=e.value)==null?void 0:T.acceptedLaws)||[]}}),C=v(()=>[p.value,...ml]),O=v(()=>{const T=t.value.map(W=>N(P({},W),{cls:n.value.some(U=>Oe(W,U))?"both":"new"})),b=n.value.filter(W=>!t.value.some(U=>Oe(U,W))).map(W=>N(P({},W),{cls:"saved"}));return[...T,...b].sort((W,U)=>W.sortId-U.sortId)}),f=Zt(t),k=Zt(n);return{addToSimulation:i,removeFromSimulation:s,toggleInSimulation:l,loadPreset:u,compareActive:r,toggleCompare:c,presets:C,simulatedLaws:O,simulation:f,secondSimulation:k}}function Zt(e){return v(()=>{const t=Tt();return t.acceptedLaws=[...e.value],we.map(r=>{for(;r>t.currentYear;){t.currentYear++,t.acceptedLaws=bl(t.acceptedLaws,t.currentYear);const i=t.acceptedLaws.map(u=>Se(u)),{values:s,effectsOfLaws:l}=xt(t,i,t.currentYear);if(t.values=s,r===t.currentYear)return{values:s,effectsOfLaws:l}}return{values:t.values,effectsOfLaws:{}}})})}function bl(e,t){const n=e.map(i=>Se(i)),r=n.filter(i=>i.effectiveSince===t).flatMap(i=>i.removeLawsWithLabels||[]);return n.filter(i=>i.effectiveSince>=t||!r.some(s=>{var l;return(l=i.labels)==null?void 0:l.includes(s)})).map(i=>({lawId:i.id,effectiveSince:i.effectiveSince}))}const wl=A({directives:{clickaway:at},setup(e,t){const n=X(!1);return{menuIsOpen:n,toggle:()=>n.value=!n.value,close:()=>n.value=!1}}});function yl(e,t,n,r,i,s){const l=vn("clickaway");return st((h(),m("span",{onClick:t[0]||(t[0]=(...u)=>e.toggle&&e.toggle(...u)),class:B(["menu",{menuIsOpen:e.menuIsOpen}])},[Ve(e.$slots,"default",{},void 0,!0)],2)),[[l,e.close]])}var kl=M(wl,[["render",yl],["__scopeId","data-v-06206e01"]]);const Sl=A({directives:{clickaway:at},components:{Citation:hl,PeekChart:fl,Menu:kl},setup(){const e=j(),t=v(()=>e.state.game),n=vl(t);return P({store:e,game:t,gameYears:we},n)},data(){return{lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lastSelected:void 0,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,yearSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1}},methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){e===this.lawSelected?this.lawSelected=void 0:(this.lastSelected="law",this.lawSelected=e)},selectEvent(e){e===this.eventSelected?this.eventSelected=void 0:(this.lastSelected="event",this.eventSelected=e)},selectParam(e){e===this.paramSelected?this.paramSelected=void 0:(this.lastSelected="param",this.paramSelected=e)},selectYear(e){e===this.yearSelected?this.yearSelected=void 0:(this.lastSelected="year",this.yearSelected=e)},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0,this.yearSelected=void 0},dragStart(e,t){const{lawId:n,year:r}=t;!e.dataTransfer||(e.dataTransfer.dropEffect="link",n&&e.dataTransfer.setData("lawId",n),r&&e.dataTransfer.setData("year",r.toString()))},getDropped(e,t,n){if(!e.dataTransfer)return;const r=e.dataTransfer.getData(t);return n.find(i=>i==r)},onDrop(e,t){const{lawId:n,year:r}=t,i=this.getDropped(e,"lawId",_i),s=this.getDropped(e,"year",this.gameYears);r&&i?this.addToSimulation(i,r):n&&s?this.addToSimulation(n,s):n&&i&&this.removeFromSimulation(i)},rightClick(e,t){this.toggleInSimulation(e,t)}},computed:{startYearOfSelected(){if(!this.lawSelected)return;if(!this.game)return ve;const e=this.simulatedLaws.find(t=>t.lawId===this.lawSelected);return e?e.effectiveSince:this.game.currentYear},selectedLaw(){return ce.find(e=>e.id===this.lawSelected)},lawEffort(){var e;if(!!this.game)return(e=this.selectedLaw)==null?void 0:e.effort(this.game)},selectedEvent(){return De.find(e=>e.id===this.eventSelected)},selectedParam(){return this.paramSelected?ne[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof y?e:void 0},cParam(){const e=this.selectedParam;return e instanceof Y?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},currentYear(){return this.yearSelected?this.yearSelected:this.game?this.game.currentYear:ve},effectsOfSelected(){return!this.selectedLaw||!this.startYearOfSelected||!this.game?[]:this.selectedLaw.effects(this.game,this.startYearOfSelected,this.currentYear)},sortedValues(){return this.game?Uo(this.simOfYear.values,this.effectsOfLawInYear,this.effectsOfSelected):[]},sortedLaws(){return this.game?No(this.game,this.lawsSortCol,this.lawsSortDir,ce):[]},sortedEvents(){return this.game?Ko(this.game,this.eventsSortCol,this.eventsSortDir,De):[]},effectsOfLawInYear(){if(this.lawSelected)return this.simOfYear.effectsOfLaws[this.lawSelected];if(this.yearSelected)return this.simEffectOfLaw[this.yearSelected-this.gameYears[0]]},simOfYear(){if(this.yearSelected===void 0&&this.game){const e=this.effectsOfSelected,t=this.game.values;if(this.lawSelected===void 0||e.length===0)return{values:t,effectsOfLaws:{}};const n=fe(t);Le({dispatch:()=>{},values:n},e);const i=Object.fromEntries(Dt.map(s=>[s,n[s]-t[s]]));return{values:t,effectsOfLaws:{[this.lawSelected]:i}}}else{const e=this.yearSelected?this.yearSelected-this.gameYears[0]:0;return this.simulation[e]}},simulatedValues(){return this.simulation.map(e=>e.values)},simEffectOfLaw(){if(this.lawSelected){const e=this.lawSelected;return this.simulation.map(t=>{const n=t.effectsOfLaws[e];return n||Wt})}return this.compareActive?this.secondSimulation.map((e,t)=>Object.fromEntries(Object.entries(e.values).map(([n,r])=>[n,this.simulation[t].values[n]-r]))):we.map(e=>Wt)},chartData(){return{values:this.simulatedValues,changes:this.simEffectOfLaw}},lawsInYear(){return e=>this.simulatedLaws.filter(t=>t.effectiveSince===e)}}}),ie=e=>(ge("data-v-85b0da02"),e=e(),pe(),e),_l={class:"peekData"},Dl={class:"Menu"},El=G("\xA0 "),zl=G("\xA0 "),Cl=G("\xA0 "),Wl=G("\xA0 "),Fl=G("\xA0 "),Pl=G("\xA0 "),Al={key:1,class:"Details sidebyside"},Ll={class:"Title"},xl={class:"Description"},Ol={class:"SectionHead"},Tl={class:"Section"},Vl=ie(()=>o("div",{class:"SectionHead"},"Details:",-1)),Il=["innerHTML"],$l=ie(()=>o("div",{class:"SectionHead"},"Internes:",-1)),Bl=["innerHTML"],Ml=ie(()=>o("div",{class:"SectionHead"},"Referenzen:",-1)),Gl={key:2,class:"Details sidebyside"},Ul={class:"Title"},Nl={class:"Description"},Kl=ie(()=>o("div",{class:"SectionHead"},"Details:",-1)),jl=["innerHTML"],Hl=ie(()=>o("div",{class:"SectionHead"},"Internes:",-1)),Jl=["innerHTML"],Rl=ie(()=>o("div",{class:"SectionHead"},"Referenzen:",-1)),Yl={key:3,class:"Details sidebyside"},Zl={class:"Title"},Ql={key:0},ql={key:1},Xl={key:2},ec=ie(()=>o("div",{class:"SectionHead"},"Details:",-1)),tc=["innerHTML"],nc=ie(()=>o("div",{class:"SectionHead"},"Internes:",-1)),rc=["innerHTML"],ic=ie(()=>o("div",{class:"SectionHead"},"Referenzen:",-1)),sc={class:"paramsHeader"},ac=["onClick"],oc={class:"numbercol"},lc={class:"effcol"},cc={key:5,class:"lawList sidebyside"},uc=["onClick","onDragstart","onDrop"],dc={class:"priocol"},hc={key:6,class:"eventList sidebyside"},fc=["onClick"],mc={class:"priocol"},gc={key:7,class:"yearList sidebyside"},pc=ie(()=>o("a",{class:"clickable"},"Presets",-1)),vc={class:"dropdown"},bc=["onClick"],wc=G("\xA0 "),yc=["onClick","onDragstart","onDrop"],kc=["onClick","onContextmenu","onDragstart","onDrop"];function Sc(e,t,n,r,i,s){var p,C,O;const l=de("PeekChart"),u=de("Citation"),c=de("Menu");return h(),m("details",_l,[o("summary",{onClick:t[0]||(t[0]=f=>e.unselect()),class:"clickable"},"Peek"),o("div",Dl,[o("a",{onClick:t[1]||(t[1]=f=>e.showCharts=!e.showCharts),class:B(["clickable",e.showCharts?"selected":""])},"Charts",2),El,o("a",{onClick:t[2]||(t[2]=f=>e.showDetails=!e.showDetails),class:B(["clickable",e.showDetails?"selected":""])},"Details",2),zl,o("a",{onClick:t[3]||(t[3]=f=>e.showParams=!e.showParams),class:B(["clickable",e.showParams?"selected":""])},"Params",2),Cl,o("a",{onClick:t[4]||(t[4]=f=>e.toggleLawList()),class:B(["clickable",e.showLaws?"selected":""])},"Laws",2),Wl,o("a",{onClick:t[5]||(t[5]=f=>e.toggleEventList()),class:B(["clickable",e.showEvents?"selected":""])},"Events",2),Fl,o("a",{onClick:t[6]||(t[6]=f=>e.showYears=!e.showYears),class:B(["clickable",e.showYears?"selected":""])},"Years",2),Pl]),e.showCharts?(h(),m("div",{key:0,class:B(["Details sidebyside",{lawSelected:e.lawSelected!=null}])},[e.paramSelected?(h(),J(l,{key:0,selectedYear:e.yearSelected,"onUpdate:selectedYear":t[7]||(t[7]=f=>e.yearSelected=f),chartData:e.chartData,paramId:e.paramSelected},null,8,["selectedYear","chartData","paramId"])):D("",!0),x(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[8]||(t[8]=f=>e.yearSelected=f),chartData:e.chartData,paramId:"co2emissions"},null,8,["selectedYear","chartData"]),x(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[9]||(t[9]=f=>e.yearSelected=f),chartData:e.chartData,paramId:"popularity"},null,8,["selectedYear","chartData"]),x(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[10]||(t[10]=f=>e.yearSelected=f),chartData:e.chartData,paramId:"stateDebt"},null,8,["selectedYear","chartData"]),x(l,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[11]||(t[11]=f=>e.yearSelected=f),chartData:e.chartData,paramId:"co2budget"},null,8,["selectedYear","chartData"])],2)):D("",!0),e.lastSelected==="law"&&e.selectedLaw&&e.showDetails?(h(),m("div",Al,[o("div",Ll,w(e.selectedLaw.title),1),o("div",xl,w(e.selectedLaw.description),1),o("div",Ol,"Aufwand: "+w((p=e.lawEffort)==null?void 0:p.time.toMonthsString()),1),o("div",Tl,w((C=e.lawEffort)==null?void 0:C.text),1),Vl,o("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,Il),$l,o("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,Bl),Ml,(h(!0),m(H,null,ee(e.citationsOfLaw,(f,k)=>(h(),J(u,{class:"Section",key:k,citation:f},null,8,["citation"]))),128))])):D("",!0),e.lastSelected==="event"&&e.selectedEvent&&e.showDetails?(h(),m("div",Gl,[o("div",Ul,w(e.selectedEvent.title),1),o("div",Nl,w(e.selectedEvent.description),1),Kl,o("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,jl),Hl,o("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,Jl),Rl,(h(!0),m(H,null,ee((O=e.selectedEvent)==null?void 0:O.citations,(f,k)=>(h(),J(u,{class:"Section",key:k,citation:f},null,8,["citation"]))),128))])):D("",!0),e.lastSelected==="param"&&e.selectedParam&&e.showDetails?(h(),m("div",Yl,[o("div",Zl,w(e.paramSelected)+" ["+w(e.selectedParam.unit)+"]",1),e.wParam?(h(),m("div",Ql,"Initial value: "+w(e.wParam.initialValue)+" "+w(e.wParam.unit),1)):D("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(h(),m("div",ql," Should initially be: "+w(e.cParam.shouldInitiallyBe)+" "+w(e.cParam.unit),1)):D("",!0),e.cParam?(h(),m("div",Xl," Calculation: "+w(e.cParam.valueGetter),1)):D("",!0),ec,o("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,tc),nc,o("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,rc),ic,(h(!0),m(H,null,ee(e.selectedParam.citations,(f,k)=>(h(),J(u,{class:"Section",key:k,citation:f},null,8,["citation"]))),128))])):D("",!0),e.showParams?(h(),m("div",{key:4,class:B(["paramsList sidebyside",{lawSelected:e.lawSelected!=null}])},[o("div",sc,[o("div",null,"Start of law: "+w(e.startYearOfSelected),1),o("div",null,"Current year: "+w(e.currentYear),1)]),o("table",null,[(h(!0),m(H,null,ee(e.sortedValues,f=>(h(),m("tr",{key:f.id,class:B({clickable:!0,selected:e.paramSelected===f.id,[f.class]:!0}),onClick:k=>e.selectParam(f.id)},[o("td",null,w(f.id),1),o("td",oc,w(f.value),1),o("td",lc,w(f.effect),1),o("td",null,w(f.unit),1)],10,ac))),128))])],2)):D("",!0),e.showLaws?(h(),m("div",cc,[o("table",null,[o("tr",null,[o("th",{onClick:t[12]||(t[12]=f=>e.sortLaws("state")),class:"clickable"},"S"),o("th",{onClick:t[13]||(t[13]=f=>e.sortLaws("id")),class:"clickable"},"ID"),o("th",{onClick:t[14]||(t[14]=f=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(h(!0),m(H,null,ee(e.sortedLaws,f=>(h(),m("tr",{key:f.id,class:B({clickable:!0,selected:e.lawSelected===f.id,[f.state]:!0}),onClick:k=>e.selectLaw(f.id),draggable:"true",onDragstart:k=>e.dragStart(k,{lawId:f.id}),onDrop:Z(k=>e.onDrop(k,{lawId:f.id}),["prevent"]),onDragover:t[15]||(t[15]=Z(()=>{},["prevent"])),onDragenter:t[16]||(t[16]=Z(()=>{},["prevent"]))},[o("td",null,w(f.state),1),o("td",null,w(f.id),1),o("td",dc,w(f.priority),1)],42,uc))),128))])])):D("",!0),e.showEvents?(h(),m("div",hc,[o("table",null,[o("tr",null,[o("th",{onClick:t[17]||(t[17]=f=>e.sortEvents("id")),class:"clickable"},"ID"),o("th",{onClick:t[18]||(t[18]=f=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(h(!0),m(H,null,ee(e.sortedEvents,f=>(h(),m("tr",{key:f.id,class:B({clickable:!0,selected:e.eventSelected===f.id}),onClick:k=>e.selectEvent(f.id)},[o("td",null,w(f.id),1),o("td",mc,w(f.probability),1)],10,fc))),128))])])):D("",!0),e.showYears?(h(),m("div",gc,[o("div",null,[x(c,null,{default:ue(()=>[pc,o("ul",vc,[(h(!0),m(H,null,ee(e.presets,f=>(h(),m("li",{key:f.name,class:"clickable",onClick:k=>e.loadPreset(f)},w(f.name),9,bc))),128))])]),_:1}),wc,o("a",{class:B(["clickable",e.compareActive?"selected":""]),onClick:t[19]||(t[19]=f=>e.toggleCompare())},"Compare",2)]),o("table",null,[(h(!0),m(H,null,ee(e.gameYears,f=>(h(),m(H,{key:f},[o("tr",{class:B({clickable:!0,selected:e.yearSelected===f}),onClick:k=>e.selectYear(f),draggable:"true",onDragstart:k=>e.dragStart(k,{year:f}),onDrop:Z(k=>e.onDrop(k,{year:f}),["prevent"]),onDragover:t[20]||(t[20]=Z(()=>{},["prevent"])),onDragenter:t[21]||(t[21]=Z(()=>{},["prevent"]))},[o("th",null,w(f),1)],42,yc),(h(!0),m(H,null,ee(e.lawsInYear(f),({lawId:k,cls:T})=>(h(),m("tr",{key:k,class:B({clickable:!0,selected:e.lawSelected===k,[T]:!0}),onClick:b=>e.selectLaw(k),onContextmenu:Z(b=>e.rightClick(k,f),["right","prevent"]),draggable:"true",onDragstart:b=>e.dragStart(b,{lawId:k}),onDrop:Z(b=>e.onDrop(b,{year:f}),["prevent"]),onDragover:t[22]||(t[22]=Z(()=>{},["prevent"])),onDragenter:t[23]||(t[23]=Z(()=>{},["prevent"]))},[o("td",null,w(k),1)],42,kc))),128))],64))),128))])])):D("",!0)])}var _c=M(Sl,[["render",Sc],["__scopeId","data-v-85b0da02"]]);const Dc={class:"peek"},Ec=A({setup(e){const t=j(),n=v(()=>t.state.devMode);return(r,i)=>{const s=de("router-view");return h(),m(H,null,[x(s),o("div",Dc,[_(n)?(h(),J(_c,{key:0})):D("",!0)])],64)}}}),et=bn(Ec);et.use(Go,Rt);et.use(Jt);et.mount("#app");
