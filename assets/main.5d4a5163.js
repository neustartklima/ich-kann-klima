var Gt=Object.defineProperty,Ut=Object.defineProperties;var Kt=Object.getOwnPropertyDescriptors;var He=Object.getOwnPropertySymbols;var Jt=Object.prototype.hasOwnProperty,Ht=Object.prototype.propertyIsEnumerable;var Fe=(e,t,n)=>t in e?Gt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))Jt.call(t,n)&&Fe(e,n,t[n]);if(He)for(var n of He(t))Ht.call(t,n)&&Fe(e,n,t[n]);return e},G=(e,t)=>Ut(e,Kt(t));var W=(e,t,n)=>(Fe(e,typeof t!="symbol"?t+"":t,n),n);import{D as Ce,a as je,s as Ze,b as jt,v as Zt,d as B,r as X,c as _,o as h,e as m,f as l,g as A,t as k,n as $,h as Ee,u as C,p as be,i as ve,F as J,j as R,k as ee,l as I,m as U,q as Re,w as Le,x as re,y as we,z as Rt,A as Yt,B as Qt,C as qt,E as Xt,V as en,G as Ye,H as tn,I as nn,J as Q,K as rn}from"./vendor.ea15fc40.js";const sn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};sn();const an={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};class We{constructor(t){W(this,"lux");t instanceof je?this.lux=t.setLocale("de-DE").setZone("Europe/Berlin"):this.lux=je.fromISO(t,{zone:"Europe/Berlin",locale:"de-DE"})}static durationBetween(t,n){return new xe(n.lux.diff(t.lux,["months"]))}plus(t){return new We(this.lux.plus(t.lux))}getYear(){return this.lux.get("year")}toLocaleString(){return this.lux.toLocaleString(an)}toMonthString(){return this.lux.toLocaleString({month:"long",year:"numeric"})}toJSON(){return this.lux.toJSON()}}class xe{constructor(t){W(this,"lux");t instanceof Ce?this.lux=t:this.lux=Ce.fromISO(t,{locale:"de-DE"})}toMonthsString(){const t=this.lux.as("months");return t===1?"1 Monat":t+" Monate"}}function ye(e){return new We(e)}function Qe(e){return new xe(e)}function on(e){return new xe(Ce.fromDurationLike({month:e}))}const ue=2021,ln="2021-01-01",qe=2050,Xe=Qe("P3M"),un=Qe("P3M"),et=6,cn=.6;function V(e){return e}const ge={newYear:2,timesUp:3,finanzKollaps:4,wahlVerloren:5,hitzehoelle:6};var dn=V({title:"Abstandsregeln f\xFCr Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erh\xF6ht wird. Das f\xFChrte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply(){return[]}});let Te=Ze("",{state:!0}),tt=()=>Math.abs(Te());function Ve(e){Te=Ze(e.id,{state:e.prngState})}function hn(){return Te.state()}const fn=e=>({time:Xe,text:`Braucht ${Xe.toMonthsString()}.`});function b(e,t="Braucht {months}."){const n=on(e),r=t.replace(/{months}/g,n.toMonthsString());return{time:n,text:r}}function y(e){return e}var mn=y({title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bew\xE4hrt. Wir lassen sie so, wie sie sind.",effort(e){return b(3,"Wie aussitzen: {months}.")},effects(){return[]},priority(e){return tt()}});const gn=new jt.exports.Converter;function nt(e){return e>0?[...Array(e)].map((t,n)=>n):[]}function rt(e,t){const n=e-t-1;return[...nt(t),Math.max(t,n),...nt(n).reverse()]}function s(e,...t){let n=e.map((i,a)=>i+(t[a]||"")).join("").split(`
`);n[0].length===0&&n.shift();const r=n[0].match(/^(\s+)/);return r&&!n.filter(i=>i.trim()).some(i=>!i.startsWith(r[1]))&&(n=n.map(i=>i.replace(r[1],""))),gn.makeHtml(n.join(`
`))}function Oe(e){return t=>!e(t)}function it(e){return Object.entries(e).map(([t,n])=>G(x({},n),{id:t}))}function st(e,t){const n=e.value-t.value;return r=>{const i=e.result*(r-t.value)/n,a=t.result*(r-e.value)/n;return i-a}}const pn=new Intl.DateTimeFormat("de-DE");class F{constructor(t){W(this,"url");W(this,"title");W(this,"publisher");W(this,"authors");W(this,"date");W(this,"comment");W(this,"internalComment");W(this,"localCopy");W(this,"referringUrl");W(this,"archiveUrl");W(this,"archiveNotPossible");this.url=new URL(t.url),this.title=t.title,this.publisher=t.publisher,this.authors=t.authors,this.date=t.date?new Date(t.date):void 0,this.comment=t.comment,this.internalComment=t.internalComment,this.localCopy=t.localCopy,this.referringUrl=t.referringUrl?new URL(t.referringUrl):void 0,this.archiveUrl=t.archiveUrl?new URL(t.archiveUrl):void 0,this.archiveNotPossible=t.archiveNotPossible}dateString(){const t=this.date;return t?" ("+pn.format(t)+")":""}toString(){const t=this.authors?this.authors+this.dateString():void 0,n=this.title?'"'+this.title+'"':void 0;return[t,n,this.url,this.publisher].filter(r=>r).join(", ")}}function L(e){const t=e.publisher||e.authors,n=t!=null?t+": ":"",r=e.title||e.url.toString(),i=e.url.toString();return`[[${n}${r}](${i})]`}const bn=e=>e.map(t=>t.toString()).join("; "),vn=new F({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),te=new F({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),at=new F({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"}),ot=new F({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineral\xF6lsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),lt=new F({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile f\xFCr wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),ke=new F({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),wn=new F({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schl\xFCsselergebnisse der Studie des Wuppertal Instituts f\xFCr Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${L(ke)}.`});ke.comment=s`Zusammengefasst in ${L(wn)}.`;const H=new F({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahresch\xE4tzung der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),yn=new F({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),Se=new F({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enth\xE4lt CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] f\xFCr mehrere Verkehrsmittel"}),De=new F({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),ut=new F({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Stra\xDFeng\xFCterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),ie=new F({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enth\xE4lt Personenkilometer-Jahreswerte f\xFCr mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),ct=new F({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung \xD6PNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),Ie=new F({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),kn=new F({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new F({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren f\xFCr Fernw\xE4rme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const dt=new F({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),Sn=new F({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),ht=new F({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle w\xE4re besser."}),Dn=new F({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bev\xF6lkerung nach Nationalit\xE4t und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),Pn=new F({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur f\xFCr Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),_n=new F({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische \xC4mter des Bundes und der L\xE4nder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new F({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const ft=new F({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgem\xE4\xDF - Interview mit Prof. Stefan G\xF6ssling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""}),zn=new F({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),mt=new F({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),An=new F({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),gt=new F({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten f\xFCr die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class pt{constructor(t){W(this,"unit");W(this,"citations");W(this,"details");W(this,"internals");this.unit=t.unit,this.citations=t.citations?t.citations:[],this.details=t.details?t.details:"",this.internals=t.internals?t.internals:""}citationsDesc(){return bn(this.citations)}}const Fn={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class P extends pt{constructor(t){super(t);W(this,"writable",!0);W(this,"initialValue");W(this,"applyBounds");this.initialValue=t.initialValue,this.applyBounds=t.applyBounds||Fn[t.unit]}}class j extends pt{constructor(t){super(t);W(this,"writable",!1);W(this,"valueGetter");W(this,"shouldInitiallyBe");this.valueGetter=t.valueGetter,this.shouldInitiallyBe=t.shouldInitiallyBe}}const Cn=new P({unit:"MioTons",initialValue:6700,citations:[vn],details:s`

  `,internals:s`

  `}),En=new P({unit:"MioTons",initialValue:186.793,citations:[H],details:s`

  `,internals:s`

  `}),Ln=new j({unit:"MioTons",valueGetter(e){return e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4},shouldInitiallyBe:159.696,citations:[H,ut],details:s`

  `,internals:s`
    ${L(H)}: 159.696 as MioTons

    ${L(ut)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Wn=new j({unit:"MioTons",valueGetter(e){return e.co2emissionsStreetVehicles+e.publicLocalCapacity*65/1e6+e.publicNationalCapacity*32/1e6+e.airDomesticUsage*222/1e6+1.641},citations:[Se,H],details:s`

  `,internals:s`
    ${L(Se)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${L(H)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${L(H)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${L(H)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),xn=new j({unit:"MioTons",valueGetter(e){return e.buildingsSourceBio*0+e.buildingsSourceGas*.247+e.buildingsSourceOil*.318+e.buildingsSourceTele*.16},citations:[H,Ie],details:s`

  `,internals:s`
    TODO: #91 Gibt es hier bessere Quellen?

    ${L(Ie)}: 247g CO2 pro kWh Erdgas.

    ${L(Ie)}: 318g CO2 pro kWh Erdöl.

    ${L(kn)}: 160g CO2 pro kWh Fernwärme.

    ${L(H)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),Tn=new P({unit:"MioTons",initialValue:67.936,citations:[H],details:s`

  `,internals:s`

  `}),Vn=new P({unit:"MioTons",initialValue:9.243,citations:[H],details:s`

  `,internals:s`

  `}),On=new j({unit:"MioTons",valueGetter(e){return e.electricityGas*.399+e.electricitySolar*.058+e.electricityWind*.005+e.electricityWater*.02+e.electricityHardCoal*.835+e.electricityBrownCoal*1.137+e.electricityBiomass*.03+e.electricityNuclear*.005},citations:[dt,H],details:s`

  `,internals:s`
    ${L(dt)}:
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
    - Diskrepanz zu ${L(Sn)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${L(H)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),In=new j({unit:"MioTons",valueGetter(e){return e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers},details:s`

  `,internals:s`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${L(H)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[yn]}),Bn=new P({unit:"TWh",initialValue:480.54,citations:[te],details:s`

  `,internals:s`

  `}),Mn=new P({unit:"Percent",initialValue:50,citations:[],details:s`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:s`

  `}),$n=new P({unit:"TWh",initialValue:51.42,citations:[te],details:s`

  `,internals:s`

  `}),Nn=new P({unit:"TWh",initialValue:131.85,citations:[te],details:s`

  `,internals:s`

  `}),Gn=new P({unit:"TWh",initialValue:6,citations:[te],details:s`

  `,internals:s`

  `}),Un=new P({unit:"Percent",initialValue:100,citations:[An],details:s`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),Kn=new P({unit:"TWh",initialValue:14.99,citations:[te],details:s`

  `,internals:s`

  `}),Jn=new P({unit:"TWh",initialValue:43.19,citations:[te],details:s`

  `,internals:s`

  `}),Hn=new P({unit:"TWh",initialValue:60.91,citations:[te],details:s`

  `,internals:s`

  `}),jn=new P({unit:"TWh",initialValue:35.46,citations:[te],details:s`

  `,internals:s`

  `}),Zn=new P({unit:"TWh",initialValue:82.13,citations:[te],details:s`

  `,internals:s`

  `}),Rn=new j({unit:"TWh",valueGetter(e){return e.electricityHardCoal+e.electricityBrownCoal},details:s`

  `,internals:s`

  `}),Yn=new j({unit:"TWh",valueGetter(e){return e.electricityDemand-e.electricitySolar-e.electricityWind-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear},details:s`

  `,internals:s`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),Qn=new P({unit:"GramPerPsgrKm",initialValue:160,citations:[Se],details:s`

  `,internals:s`
    ${L(Se)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),qn=new P({unit:"MioPsgrKm",initialValue:917e3,citations:[ie],details:s`

  `,internals:s`

  `}),Xn=new P({unit:"Percent",initialValue:.5,citations:[ht],details:s`

  `,internals:s`
    Die verschiedenen Zahlen in ${L(ht)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),er=new P({unit:"MioPsgrKm",initialValue:112600,citations:[ie],details:s`

  `,internals:s`

  `}),tr=new P({unit:"MioPsgrKm",initialValue:112600,citations:[ie],details:s`

  `,internals:s`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),nr=new P({unit:"MioPsgrKm",initialValue:67300,citations:[ie],details:s`

  `,internals:s`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),rr=new P({unit:"MioPsgrKm",initialValue:67300,citations:[ie],details:s`

  `,internals:s`
Siehe \`publicLocalCapacity\`.
  `}),ir=new P({unit:"MioPsgrKm",initialValue:10100,citations:[ie],details:s`

  `,internals:s`

  `}),sr=new P({unit:"MioPsgrKm",initialValue:61700,citations:[ie],details:s`

  `,internals:s`

  `}),ar=new j({unit:"MioPsgrKm",valueGetter(e){return e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage},shouldInitiallyBe:1168700,citations:[ie],details:s`

  `,internals:s`

  `}),or=new P({unit:"TWh",initialValue:226,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),lr=new P({unit:"TWh",initialValue:544,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),ur=new j({unit:"TWh",valueGetter(e){return e.buildingsPrivateDemand+e.buildingsIndustryDemand},shouldInitiallyBe:770,citations:[],details:s`

  `,internals:s`
    TODO: #78 Quelle ${L(gt)} gibt diese Zahlen nicht her.
  `}),cr=new P({unit:"TWh",initialValue:130,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),dr=new P({unit:"TWh",initialValue:219,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),hr=new P({unit:"TWh",initialValue:58,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),fr=new j({unit:"TWh",valueGetter(e){return e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele)},citations:[],details:s`

  `,internals:s`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${L(gt)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),mr=new P({unit:"Percent",initialValue:50,citations:[],details:s`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:s`

  `}),gr=new P({unit:"TsdPeople",initialValue:83155.031,citations:[Dn],details:s`

  `,internals:s`
Anfangswert ist der Stand 31.12.2020.
  `}),pr=new P({unit:"TsdPeople",initialValue:2695,citations:[Pn],details:s`

  `,internals:s`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),br=new P({unit:"MrdEuro",initialValue:3332,citations:[_n],details:s`

  `,internals:s`
Anfangswert ist das BIP 2020.
  `}),vr=new P({unit:"MrdEuro",initialValue:1899,citations:[],details:s`

  `,internals:s`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),Y={co2budget:Cn,co2emissionsIndustry:En,co2emissionsStreetVehicles:Ln,co2emissionsMobility:Wn,co2emissionsAgriculture:Tn,co2emissionsBuildings:xn,co2emissionsOthers:Vn,co2emissionsEnergy:On,co2emissions:In,electricityDemand:Bn,electricityGridQuality:Mn,electricitySolar:$n,electricityWind:Nn,electricityWindOnshoreMaxNew:Gn,electricityWindEfficiency:Un,electricityWater:Kn,electricityBiomass:Jn,electricityNuclear:Hn,electricityHardCoal:jn,electricityBrownCoal:Zn,electricityCoal:Rn,electricityGas:Yn,carEmissionFactor:Qn,carUsage:qn,carRenewablePercentage:Xn,publicLocalUsage:er,publicLocalCapacity:tr,publicNationalUsage:nr,publicNationalCapacity:rr,airDomesticUsage:ir,airIntlUsage:sr,passengerTransportUsage:ar,buildingsIndustryDemand:or,buildingsPrivateDemand:lr,buildingsDemand:ur,buildingsSourceBio:cr,buildingsSourceOil:dr,buildingsSourceTele:hr,buildingsSourceGas:fr,popularity:mr,numberOfCitizens:gr,unemployment:pr,gdp:br,stateDebt:vr},wr=Object.entries(Y).filter(e=>e[1]instanceof P).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),bt=Object.entries(Y).filter(e=>e[1]instanceof j).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),vt=Object.keys(Y);class wt extends P{constructor(t,n){super(t);W(this,"name");this.name=n}}const yr=Object.entries(wr).map(e=>new wt(e[1],e[0]));class yt extends j{constructor(t,n){super(t);W(this,"name");this.name=n}}Object.entries(bt).map(e=>new yt(e[1],e[0]));const kt=Object.entries(Y).map(e=>e[1]instanceof P?new wt(e[1],e[0]):new yt(e[1],e[0])),ce=yr.reduce((e,t)=>(e[t.name]=t.initialValue,e),{}),St=kt.reduce((e,t)=>(e[t.name]=0,e),{});function de(e){const t=x({},e);return Object.entries(bt).forEach(n=>Object.defineProperty(t,n[0],{enumerable:!0,get:()=>n[1].valueGetter(t)})),t}function kr(e){return x({},e)}function se(e,t){return{type:"dispatch",condition:!0,if(n){return this.condition=n,this},apply(n){this.condition&&n.dispatch(e,t)}}}function o(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(t){return this.percent=t,this},byValue(t){return this.value=t,this},setValue(t){return this.absolute=t,this},if(t){return this.condition=t,this},getOldNew(t){const n=this.name,r=t[n];if(!this.condition)return{oldVal:r,newVal:r};const i=Y[n],a=this.absolute!=null?this.absolute:r+(this.value||r*this.percent/100),u=i.applyBounds(a);return{oldVal:r,newVal:u}},getChange(t){if(!this.condition)return 0;const{oldVal:n,newVal:r}=this.getOldNew(t);return r-n},apply(t){if(this.condition){const{newVal:n}=this.getOldNew(t.values);t.values[this.name]=n}return this}}}function O(e,t){if(Y[e].unit!=Y[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(n){return this.percent=n,this},byValue(n){return this.value=n,this},if(n){return this.condition=n,this},getEffect(n){const r=n[this.to],i=n[this.from];if(!this.condition)return{oldTo:r,oldFrom:i,newTo:r,newFrom:i};const a=Y[this.to],u=Y[this.from],f=this.value||r*this.percent/100,c=a.applyBounds(r+f)-r,g=-u.applyBounds(i-c)+i,S=r+g,p=i-g;return{oldTo:r,newTo:S,oldFrom:i,newFrom:p}},apply(n){if(this.condition){const{newTo:r,newFrom:i}=this.getEffect(n.values);n.values[this.to]=r,n.values[this.from]=i}return this}}}function Be(e,t){t.filter(n=>n.condition).forEach(n=>n.apply(e))}var Sr=y({title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effort(e){return b(11)},effects(e,t,n){const r=n-t,i=r<18?4.3/18:0,a=2.5,u=20,f=60,c=(10-r)/55,g=Math.max((u+f/2)*c,0);return[o("electricityHardCoal").setValue(0),o("electricityBrownCoal").setValue(0),o("stateDebt").byValue(-i+a),o("unemployment").byValue(g)]},priority(e){return e.values.electricityCoal/e.values.electricityDemand<=.1?0:v(1e4,0,e.values.unemployment)},citations:[],details:s`

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
  `}),Dr=y({title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effort(e){return e.values.popularity>=50?b(6,"Normal dauert das 12 Monate, aber bei Deiner Beliebtheit nur {months}."):b(12)},effects(){return[o("stateDebt").byValue(-37),o("electricityHardCoal").byPercent(-10),o("electricityBrownCoal").byPercent(-5),o("electricityWind").byValue(5),o("electricitySolar").byValue(3),o("electricityWater").byValue(.5)]},priority(e){return v(qe,ue,e.currentYear)}});const Dt=de(ce).electricityGas;var Pr=y({title:"Kernenergienutzung verl\xE4ngern",description:"Kernkraftwerke l\xE4nger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effort(e){return b(8)},effects(){return[o("electricityNuclear").setValue(104.3),o("stateDebt").byValue(-2.5),o("popularity").byValue(-4)]},priority(e){return v(Dt,1.1*Dt,e.values.electricityGas)}}),_r=y({title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,n){const i={2021:60.45,2022:30.21}[n]||0;return[o("electricityNuclear").setValue(i)]},priority(e){return 0}}),zr=y({title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren f\xFCr den Ausbau des Stromnetzes",effort(e){return b(2)},effects(e,t,n){return[o("popularity").byValue(-3).if(t===n),o("electricityGridQuality").byValue(1)]},priority(e){return v(70,27,ne(e))},citations:[],details:s`

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
  `}),Ar=y({title:"Netzausbau f\xF6rdern",description:"Ausbau des Stromnetzes mit Steuermitteln f\xF6rdern",effort(e){return b(3)},effects(e,t,n){return[o("popularity").byValue(-1).if(t===n),o("stateDebt").byValue(2),o("electricityGridQuality").byValue(5).if(w(e,"NetzausbauErleichtern"))]},priority(e){return v(70,27,ne(e))},citations:[],details:s`

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
  `}),Fr=y({title:"Stromspeicherung erleichtern",description:"B\xFCrokratische H\xFCrden f\xFCr den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effort(e){return b(3)},effects(e,t,n){return[o("electricityGridQuality").byValue(.2)]},priority(e){const t=e.values;return v(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Cr=y({title:"Stromspeicherung f\xF6rdern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln f\xF6rdern. 2 Mrd \u20AC pro Jahr.",effort(e){return b(7)},effects(e,t,n){const r=w(e,"StromspeicherungErleichtern")?0:5,i=n>=t+r,a=w(e,"ForschungUndEntwicklungStromspeicherung",3);return[o("stateDebt").byValue(1),o("popularity").byValue(.2).if(i),o("stateDebt").byValue(1).if(i),o("electricityGridQuality").byValue(2).if(i),o("electricityGridQuality").byValue(2).if(a),o("electricityGridQuality").byValue(2).if(i&&a)]},priority(e){const t=e.values;return v(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Er=y({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit verg\xFCnstigten Krediten gef\xF6rdert.",effort(e){return b(3)},effects(e,t,n){const r=.5,i=n-t>2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-1).if(i),o("buildingsSourceOil").byPercent(-1).if(i),o("buildingsSourceTele").byPercent(-1).if(i),o("buildingsPrivateDemand").byPercent(-1).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return v(15,40,t)}}),Lr=y({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gef\xF6rdert.",effort(e){return b(5)},effects(e,t,n){const r=1,i=n-t>2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-2).if(i),o("buildingsSourceOil").byPercent(-2).if(i),o("buildingsSourceTele").byPercent(-2).if(i),o("buildingsPrivateDemand").byPercent(-2).if(i),o("popularity").byValue(5).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return v(15,40,t)}}),Wr=y({title:"D\xE4mmung von Wohngeb\xE4uden sehr stark f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungspl\xE4tze im Handwerk geschaffen durch einen Zuschuss von 500\u20AC pro Monat, damit der zu erwartende Bauboom bew\xE4ltigt werden kann.",effort(e){return b(7)},effects(e,t,n){const r=3,i=n-t,a=i>=2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-4).if(a),o("buildingsSourceOil").byPercent(-4).if(a),o("buildingsSourceTele").byPercent(-4).if(a),o("buildingsPrivateDemand").byPercent(-4).if(a),o("popularity").byValue(10).if(i===1),o("popularity").byValue(5).if(a)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return v(15,40,t)},citations:[],details:s`

  `,internals:s`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `}),xr=y({title:"D\xE4mmung von Wohngeb\xE4uden abschaffen",description:"Wir geben den B\xFCrgern die Freiheit zur\xFCck, selbst zu entscheiden, ob sie ihr Haus d\xE4mmen wollen und lassen die F\xF6rderung auslaufen",effort(e){return b(3)},effects(){return[o("stateDebt").byValue(-.5),o("buildingsSourceBio").byPercent(-.5),o("buildingsSourceOil").byPercent(-.5),o("buildingsSourceTele").byPercent(-.5),o("buildingsPrivateDemand").byPercent(-.5)]},priority(e){const t=zi(e.acceptedLaws,/^DaemmungAltbau/);if(!t||t==="DaemmungAltbauAbschaffen")return 0;const n=e.values.co2emissionsBuildings/e.values.co2emissions*100;return v(15,40,n)}}),Tr=y({title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit st\xE4rker bezuschusst.",effort(e){return b(5,"Komplexe Verhandlungen mit den Bundesl\xE4ndern dauern {months}.")},effects(e,t,n){const r=e.values.publicLocalCapacity/e.values.publicLocalUsage*100,i=n-t;return[o("stateDebt").byValue(3),o("publicLocalCapacity").byPercent(1),O("publicLocalUsage","carUsage").byPercent(1).if(r>=105),o("popularity").byValue(2).if(i>=5)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return v(150,80,t)},citations:[ct],details:s`

  `,internals:s`
    # Happy Path 18

    # Folgen

    - Der Staatshaushalt wird jährlich mit 3 Mrd € mehr belastet. (${L(ct)})
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
  `}),Vr=y({title:"Nahverkehr Modernisieren",description:"Anschaffung Moderner, bequemer, emissionsfreier Fahrzeuge f\xFCr den Nahverkehr wird gef\xF6rdert.",effort(e){return b(4)},effects(e,t,n){return[o("stateDebt").byValue(3),o("publicLocalCapacity").byPercent(1),O("publicLocalUsage","carUsage").byPercent(1),o("popularity").byValue(3)]},priority(e){if(!w(e,"FernverkehrModernisieren"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,24,t)},citations:[De],details:s`

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
  `}),Or=y({title:"F\xF6rderung f\xFCr Tierhaltung abschaffen",description:"Subventionen f\xFCr Tierhaltung werden ersatzlos gestrichen",effort(e){return b(2)},effects(e,t,n){return[o("stateDebt").byValue(-10),o("co2emissionsAgriculture").byValue(-10).if(t===n),o("popularity").byValue(-20).if(t===n)]},priority(e){return v(1e4,0,e.values.unemployment)}}),Ir=y({title:"Nahverkehr Kostenlos",description:"Die Kosten f\xFCr den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr ben\xF6tigt werden.",effort(e){return b(7,"Die Haushaltsverhandlungen dauern {months}.")},effects(e,t,n){const r=t===n?10:1;return[o("stateDebt").byValue(10),O("publicLocalUsage","carUsage").byPercent(r),o("popularity").byValue(10).if(t===n),o("unemployment").byValue(20).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return v(90,120,t)},citations:[De],details:s`

  `,internals:s`
    # Happy Path 19

    # Folgen

    - Der Staatshaushalt wird jährlich mit 10 Mrd € stärker belastet.
        - 13.3 Mrd € Ticketeinnahmen pro Jahr (${L(De)})
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
  `}),Br=y({title:"Autos in Innenst\xE4dten verbieten",description:"Die Innenst\xE4dte der gro\xDFen St\xE4dte werden zu Autofreien Zonen erkl\xE4rt und begr\xFCnt, sowie Fahrrad und Fu\xDFg\xE4ngerzonen eingerichtet.",effort(e){return b(12)},effects(e,t,n){var r=-2;return e.values.publicLocalCapacity>e.values.publicLocalUsage*1.2&&(r=-1,t+2<n&&(r=2)),[o("popularity").byValue(r),O("publicLocalUsage","carUsage").byPercent(10).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return v(90,120,t)}}),Mr=y({title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des \xF6ffentlichen Fernverkehrs wird bundesweit st\xE4rker Bezuschusst und Vorangetrieben",effort(e){return b(12)},effects(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return[o("stateDebt").byValue(6),o("publicNationalCapacity").byPercent(1),O("publicNationalUsage","carUsage").byPercent(1).if(t>=105),O("publicNationalUsage","carUsage").byPercent(.5).if(t>=105),o("popularity").byValue(2).if(t>=105)]},priority(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return v(150,80,t)},citations:[],details:s`

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
  `}),$r=y({title:"Fernverkehr Modernisieren",description:"Moderne, bequeme und weniger anf\xE4llige Z\xFCge werden f\xFCr den Fernverkehr angeschafft.",effort(e){return b(4)},effects(e,t,n){return[o("stateDebt").byValue(3),o("publicNationalCapacity").byPercent(1),O("publicNationalUsage","carUsage").byPercent(1),o("popularity").byValue(3)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,24,t)},citations:[],details:s`

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
  `}),Nr=y({title:"Wasserstofftechnologie f\xF6rdern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return b(1)},effects(e,t,n){const r=n<t+5,i=n>=t+5;return[o("stateDebt").byValue(2).if(r),o("carRenewablePercentage").byValue(1).if(i)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return v(40,90,r)},citations:[],details:s`

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
  `}),Gr=y({title:"Wasserstoffmobilit\xE4t f\xF6rdern",description:"Wasserstoffbasierte Fahrzeuge werden gef\xF6rdert.",effort(e){return b(2)},effects(e,t,n){return w(e,"WasserstofftechnologieFoerdern")?[o("stateDebt").byValue(3),o("carRenewablePercentage").byValue(1),o("popularity").byValue(1).if(t===n)]:[]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,26,t)},citations:[],details:s`

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
  `}),Ur=y({title:"Abschaffung der Mineral\xF6lsteuer",description:"Die Steuer auf s\xE4mtliche erd\xF6lbasierten Treibstoffe wird abgeschafft.",effort(e){const t=Math.ceil(e.values.co2budget/e.values.co2emissions);return t>=15?b(2,`Die derzeitigen CO2 Emissionen w\xFCrden das Budget
        in ${t} Jahren verbrauchen.
        Nicht schlecht! Bei der Stimmung bekommst Dus in {months}n durch.`):b(9,"Nicht beliebt! Sowas dauert {months}.")},effects(e,t,n){return[o("stateDebt").byValue(41),o("popularity").byValue(5).if(t===n),o("popularity").byValue(-3).if(t<n),O("publicLocalUsage","carUsage").byPercent(-20).if(t===n),O("publicNationalUsage","carUsage").byPercent(-20).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return v(60,100,r)},citations:[ot],details:"",internals:s`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${L(ot)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `}),Kr=y({title:"Ausbau von Stra\xDFen",description:"Autobahnen und Stra\xDFen werden intensiver ausgebaut.",effort(e){return b(9)},effects(e){return[o("stateDebt").byValue(5),o("popularity").byValue(.5),O("publicLocalUsage","carUsage").byPercent(-1),O("publicNationalUsage","carUsage").byPercent(-1)]},priority(e){const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(60,100,n)}}),Jr=y({title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effort(e){return b(6)},effects(e,t,n){return[o("stateDebt").byValue(-7.35),o("popularity").byValue(-1).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return v(10,100,r)}}),Hr=y({title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen f\xFCr Dienstwagen werden abgeschafft.",effort(e){return b(6)},effects(e,t,n){return[o("stateDebt").byValue(-18),o("popularity").byValue(-1).if(t===n),O("carUsage","publicLocalUsage").byPercent(-.05)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return v(50,100,r)},citations:[lt,ft],details:s`

  `,internals:s`
    # Happy Path 20

    Zunächst sollte Nah- und Fernverkehr attraktiver gemacht werden.
    TODO: Folgen sollten davon abhängen, ob es attraktive Alternativen gibt.

    # Folgen

    - Steuermehreinnahmen: 18 mrd€ / Jahr (${L(lt)})
    - -0.05% Fahleistung pro Jahr (Anreiz für Auto fällt weg Gebrauchte Wagen werden teuerer).
        - ${L(ft)} sagt es gibt keine echte Schätzung dafür.
    - Entsprechend mehr Nahverkehrnutzung
    - Zufriedenheit sinkt einmalig um 1%

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 50%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `}),jr=y({title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return b(3)},effects(e){const t=o("carEmissionFactor").setValue(157.9),n=t.getChange(e.values);return[o("popularity").byValue(2).if(n<0),t]},priority(e){if(w(e,"Tempolimit100AufAutobahnen")||w(e,"Tempolimit120AufAutobahnen")||w(e,"TempolimitAufAutobahnenAussitzen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(10,100,n)}}),Zr=y({title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return b(4)},effects(e){const t=o("carEmissionFactor").setValue(157.1),n=t.getChange(e.values);return[o("popularity").byValue(2).if(n<0),t]},priority(e){if(!w(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(10,100,n)}}),Rr=y({title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return b(5)},effects(e){const t=o("carEmissionFactor").setValue(154.1),n=t.getChange(e.values);return[o("popularity").byValue(-1).if(n<0),t]},priority(e){if(!w(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(10,100,n)}}),Yr=y({title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das k\xF6nnte zwar Strafen oder gar Zwangsma\xDFnahmen bewirken, aber das Risiko der gef\xE4hrdeten Wiederwahl ist zu gro\xDF.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return b(3,"Wie aussitzen: {months}.")},effects(){return[o("stateDebt").byValue(-10),o("popularity").byValue(-2)]},priority(e){if(w(e,"Tempolimit100AufAutobahnen")||w(e,"Tempolimit120AufAutobahnen")||w(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(10,100,n)}}),Qr=y({title:"Elektromobilit\xE4t F\xF6rdern",description:"H\xF6here Kaufpr\xE4mien, Steuerbefreiung, g\xFCnstiges Laden f\xFCr E-Autos.",effort(e){return b(2)},effects(e,t,n){return w(e,"LadeinfrastrukturAusbauen")?[o("stateDebt").byValue(5),o("carRenewablePercentage").byValue(1),o("popularity").byValue(4).if(t===n)]:[]},priority(e){if(!w(e,"LadeinfrastrukturAusbauen"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,25,t)},citations:[],details:s`

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
  `}),qr=y({title:"Ladeinfrastruktur ausbauen",description:"Ausbau der Ladeinfrastruktur wird mit Steuermitteln stark gef\xF6rdert.",effort(e){return b(4)},effects(e,t,n){return[o("stateDebt").byValue(5),o("carRenewablePercentage").byValue(1),o("popularity").byValue(2).if(t===n)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,25,t)},citations:[De],details:s`

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
  `}),Xr=y({title:"Windkraft vereinfachen",description:"Genehmigungen f\xFCr Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effort(e){return b(4,"Die Bundesl\xE4nder m\xFCssen mit ins Boot geholt werden. Das dauert {months}.")},effects(e,t,n){return[]},priority(e){return v(80,27,ne(e))},citations:[],details:s`

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
  `}),ei=y({title:"Abstandsregeln f\xFCr Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem \xFCber Abst\xE4nde zwischen den Windkraftanlagen und Wohngeb\xE4uden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return b(3,"Wie aussitzen: {months}.")},effects(e,t,n){const r=w(e,"WindkraftVereinfachen")?0:5;return[o("electricityWindOnshoreMaxNew").setValue(6).if(n>=t+r)]},priority(e){return w(e,"AbstandsregelnFuerWindkraftLockern")?v(30,100,ne(e)):w(e,"AbstandsregelnFuerWindkraftVerschaerfen")?v(70,27,ne(e)):0}}),ti=y({title:"Abstandsregeln f\xFCr Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln f\xFCr Windkraftanlagen sowie Bauerlaubniss in W\xE4ldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return b(6,"Das schaffst Du in {months}n.")},effects(e,t,n){const r=w(e,"WindkraftVereinfachen")?0:5;return[o("popularity").byValue(-3).if(t===n),o("electricityWindOnshoreMaxNew").setValue(30).if(n>=t+r)]},priority(e){return w(e,"AbstandsregelnFuerWindkraftWieBisher")?v(70,27,ne(e)):w(e,"AbstandsregelnFuerWindkraftAbschaffen")?v(30,100,ne(e)):0},citations:[],details:s`

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
  `}),ni=y({title:"Abstandsregeln f\xFCr Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return b(12,"BIs werden es Dir schwer machen. {months}!")},effects(e,t,n){const r=w(e,"WindkraftVereinfachen")?0:5;return[o("popularity").byValue(-40).if(t===n),o("electricityWindOnshoreMaxNew").setValue(1e3).if(n>=t+r)]},priority(e){return w(e,"AbstandsregelnFuerWindkraftLockern")?v(80,25,ne(e)):0}}),ri=y({title:"Abstandsregeln f\xFCr Windkraft versch\xE4rfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngeb\xE4uden im Innenbereich muss das Zehnfache der Gesamth\xF6he der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return b(1,"Dauert nur einen Monat.")},effects(e,t,n){return[o("popularity").byValue(5).if(t===n),o("electricityWindOnshoreMaxNew").setValue(.42)]},priority(e){return w(e,"AbstandsregelnFuerWindkraftWieBisher")?v(0,100,ne(e)):0}}),ii=y({title:"Ausschreibungsverfahren f\xFCr Windkraft wie zu Beginn",description:"Windkraft Betreiber k\xF6nnen sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstm\xF6glichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return b(8)},effects(e,t,n){return[..._e(e,6.9,1.2,t)]},priority(e){return w(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?v(60,100,K(e)):0}}),si=y({title:"Ausschreibungsverfahren f\xFCr Windkraft verdoppeln",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return b(2)},effects(e,t,n){return[o("popularity").byValue(-1).if(t===n),o("unemployment").byValue(-20).if(t===n),..._e(e,13.8,2.4,t)]},priority(e){return w(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?v(100,50,K(e)):w(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?v(40,100,K(e)):0}}),ai=y({title:"Ausschreibungsverfahren f\xFCr Windkraft vervierfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return b(4)},effects(e,t,n){return[o("popularity").byValue(-2).if(t===n),o("unemployment").byValue(-100).if(t===n),..._e(e,27.6,4.8,t)]},priority(e){return w(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?v(100,50,K(e)):w(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?v(0,100,K(e)):0},citations:[],details:s`
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
  `}),oi=y({title:"Ausschreibungsverfahren f\xFCr Windkraft verachtfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return b(5)},effects(e,t,n){return[o("popularity").byValue(-20).if(t===n),o("unemployment").byValue(-100).if(t===n),..._e(e,55.2,9.6,t)]},priority(e){return w(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?v(100,50,K(e)):0}}),li=y({title:"CO2 Preis Erh\xF6hen",description:"Die Preise werden schneller erh\xF6ht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return b(6)},effects(e,t,n){const r=n>=t+2?n>=t+4?100:70:0;return[...$e(e,r,-.5,Me({value:50,result:0},{value:0,result:-1}))]},priority(e){return w(e,"VollerCO2Preis")||w(e,"WirksamerCO2Preis")?0:50},citations:[mt],details:s`

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
  `}),ui=y({title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return b(8)},effects(e,t,n){return[...$e(e,150,-2,Me({value:80,result:0},{value:50,result:-3}))]},priority(e){return w(e,"CO2PreisErhoehen")?50:0},citations:[mt],details:s`

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
  `}),ci=y({title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return b(10)},effects(e,t,n){return[...$e(e,3e3,-5,Me({value:90,result:0},{value:50,result:-10}))]},priority(e){return w(e,"WirksamerCO2Preis")?50:0},citations:[zn],details:s`

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
  `}),di=y({title:"Solarstrom F\xF6rderung einstellen",description:"Mittlere bis gro\xDFe Solaranlagen sollten sich selbst tragen. Die F\xF6rderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return b(5)},effects(e,t,n){return[...le(e,"electricitySolar",2)]},priority(e){return w(e,"SolarstromFoerderungWieZuBeginn")?v(0,100,K(e)):0},details:s`

  `}),hi=y({title:"Solarstrom F\xF6rderung wie zu Beginn",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen wie bisher",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return b(9)},effects(e,t,n){return[...le(e,"electricitySolar",5)]},priority(e){return w(e,"SolarstromFoerdernx8")?v(70,100,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),fi=y({title:"Solarstrom F\xF6rderung x2",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return b(4)},effects(e,t,n){return[o("popularity").byValue(10).if(t===n),o("unemployment").byValue(-31e3).if(t===n),...le(e,"electricitySolar",10)]},priority(e){return w(e,"SolarstromFoerderungWieZuBeginn")?v(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),mi=y({title:"Solarstrom F\xF6rderung x4",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return b(3)},effects(e,t,n){return[o("popularity").byValue(20).if(t===n),o("unemployment").byValue(-89e3).if(t===n),...le(e,"electricitySolar",20)]},priority(e){return w(e,"SolarstromFoerdernx2")?v(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:s`
    # Happy path 10

    ${L(ke)}
  `,citations:[ke]}),gi=y({title:"Solarstrom F\xF6rderung x8",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return b(2)},effects(e,t,n){return[o("popularity").byValue(-10).if(t===n),o("unemployment").byValue(-209e3).if(t===n),...le(e,"electricitySolar",40)]},priority(e){return w(e,"SolarstromFoerdernx4")?v(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `}),pi=y({title:"Solar auf neuen D\xE4chern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die D\xE4cher.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return b(3)},effects(e,t,n){return[o("popularity").byValue(-3).if(t===n),...le(e,"electricitySolar",2)]},priority(e){return w(e,"SolarstromFoerderungWieZuBeginn")?v(100,30,K(e)):0},details:s`

  `,internals:s`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `}),bi=y({title:"Forschung und Entwicklung zur Stromspeicherung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return b(1)},effects(e,t,n){const r=n<t+5,i=n>=t+3;return[o("stateDebt").byValue(2).if(r),o("electricityGridQuality").byValue(.2).if(i)]},priority(e){const t=e.values;return v(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),vi=y({title:"Forschung zur emissionsfreien Stahlproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Stahl mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return b(2)},effects(e,t,n){const r=n<t+5,i=n>=t+3,a=w(e,"WasserstofftechnologieFoerdern",3)?K(e)-70:0,u=w(e,"WirksamerCO2Preis");return[o("stateDebt").byValue(2).if(r),o("co2emissionsIndustry").byValue(-2).if(i),o("co2emissionsIndustry").byValue(-2).if(u),o("co2emissionsIndustry").byValue(-a).if(a>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return v(0,80,n)},citations:[],details:s`

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
  `}),wi=y({title:"Forschung zur emissionsfreien Zementproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Zement mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return b(3)},effects(e,t,n){const r=n<t+5,i=n>=t+3,a=w(e,"WasserstofftechnologieFoerdern",3)?K(e)-70:0,u=w(e,"WirksamerCO2Preis");return[o("stateDebt").byValue(2).if(r),o("co2emissionsIndustry").byValue(-2).if(i),o("co2emissionsIndustry").byValue(-2).if(u),o("co2emissionsIndustry").byValue(-a).if(a>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return v(0,80,n)},citations:[],details:s`

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
  `}),yi=y({title:"Erforschung und Umsetzung dezentraler Stromerzeugung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur f\xFCr die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return b(1)},effects(e,t,n){const r=n<t+5,i=n>=t+1;return[o("stateDebt").byValue(2).if(r),o("electricityGridQuality").byValue(1).if(i)]},priority(e){const t=e.values;return v(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),ki=y({title:"Test",description:"Unsinniges Gesetz zum Testen.",effort(e){return b(6)},effects(e,t,n){return[o("popularity").byPercent(50).if((n-t)%3!=0),o("popularity").byPercent(-50).if((n-t)%3==0),o("stateDebt").byPercent(-200).if(n===t),o("stateDebt").byPercent(50).if((n-t)%3!=0),o("stateDebt").byPercent(-50).if((n-t)%3==0),o("stateDebt").byPercent(-200).if(n===t+10)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`

  `});const Pt={AllesBleibtBeimAlten:mn,InitialAtomausstieg:_r,KohleverstromungEinstellen:Sr,EnergiemixRegeltDerMarkt:Dr,KernenergienutzungVerlaengern:Pr,NetzausbauErleichtern:zr,NetzausbauFoerdern:Ar,ForschungUndEntwicklungStromspeicherung:bi,StromspeicherungErleichtern:Fr,StromspeicherungFoerdern:Cr,ForschungDezentraleStromerzeugung:yi,WindkraftVereinfachen:Xr,AbstandsregelnFuerWindkraftVerschaerfen:ri,AbstandsregelnFuerWindkraftWieBisher:ei,AbstandsregelnFuerWindkraftLockern:ti,AbstandsregelnFuerWindkraftAbschaffen:ni,AusschreibungsverfahrenfuerWindkraftWieBisher:ii,AusschreibungsverfahrenfuerWindkraftVerdoppeln:si,AusschreibungsverfahrenfuerWindkraftVervierfachen:ai,AusschreibungsverfahrenfuerWindkraftVerachtfachen:oi,SolarstromFoerderungAbschaffen:di,SolarstromFoerderungWieZuBeginn:hi,SolarstromFoerdernx2:fi,SolarstromFoerdernx4:mi,SolarstromFoerdernx8:gi,SolarAufAllenDaechernVerpflichtend:pi,DaemmungAltbau1Percent:Er,DaemmungAltbau2Percent:Lr,DaemmungAltbau4Percent:Wr,DaemmungAltbauAbschaffen:xr,NahverkehrKostenlos:Ir,AutosInInnenstaedtenVerbieten:Br,WasserstofftechnologieFoerdern:Nr,WasserstoffmobilitaetFoerdern:Gr,NahverkehrAusbauen:Tr,NahverkehrModernisieren:Vr,FernverkehrVerbindungenAusbauen:Mr,FernverkehrModernisieren:$r,AusbauVonStrassen:Kr,AbschaffungDerMineraloelsteuer:Ur,DieselPrivilegAbgeschaffen:Jr,DienstwagenPrivilegAbgeschaffen:Hr,Tempolimit130AufAutobahnen:jr,Tempolimit120AufAutobahnen:Zr,Tempolimit100AufAutobahnen:Rr,TempolimitAufAutobahnenAussitzen:Yr,ElektromobilitaetFoerdern:Qr,LadeinfrastrukturAusbauen:qr,FoerderungFuerTierhaltungAbschaffen:Or,CO2PreisErhoehen:li,WirksamerCO2Preis:ui,VollerCO2Preis:ci,ForschungEmissionsfreieStahlproduktion:vi,ForschungEmissionsfreieZementproduktion:wi,Test:ki},Si=Object.keys(Pt);function Di(e){return it(e).map(t=>G(x({},t),{effort:t.effort||fn}))}const ae=Di(Pt);function Pi(e){const t=ae.find(n=>n.id===e);if(t)return t;throw Error(`Law #${e} not found`)}function pe(e){const t=Pi(e.lawId);if(t)return G(x({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function Pe(e){return e.map(t=>{const n=ae.find(r=>r.id===t);return n||console.error(`Inconsistency: Proposed law #${t} not found`),n}).filter(t=>t)}const _i=(e,t,n)=>Object.fromEntries(e.map(r=>{const i=t(r),a=Object.fromEntries(vt.map(u=>[u,n(r,i,u)]));return[r.id,a]}));function v(e,t,n){const r=n-e,i=t-e;if(i===0)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return r/i*100}function Me(e,t){const n=t.value-e.value,r=n/Math.abs(n),i=r*e.value;return a=>n===0||r*a<=i?e.result:st(e,t)(a)}function w(e,t,n=0){if(!ae.map(r=>r.id).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some(r=>r.lawId===t&&r.effectiveSince<=e.currentYear+n)}function zi(e,t){const n=e.sort((r,i)=>i.effectiveSince-r.effectiveSince).find(r=>t.test(r.lawId));return n==null?void 0:n.lawId}function ne(e){const t=e.values;return t.electricityWind/t.electricityDemand*100}function K(e){return(e.values.electricityWind+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}function Ai(e,t){const n=e.values,r=Y[t].initialValue,i=n.electricityGridQuality,a=n.electricityDemand;return st({value:50,result:r},{value:100,result:a})(i)}function le(e,t,n){const r=e.values,i=r.electricityCoal+r.electricityGas;if(i<=0)return[];const a=r.electricityHardCoal/i,u=r.electricityBrownCoal/i,f=r.electricityGas/i;return[O(t,"electricityHardCoal").if(a>0).byValue(a*n),O(t,"electricityBrownCoal").if(u>0).byValue(u*n),o(t).if(f>0).byValue(f*n)]}function _e(e,t,n,r){const i=w(e,"WindkraftVereinfachen")?0:5;if(e.currentYear<r+i)return[];const a=e.values,f=(Math.min(t,a.electricityWindOnshoreMaxNew)+n)*a.electricityWindEfficiency/100,c=a.electricityWind,g=Math.min(c+f,Ai(e,"electricityWind"))-c;return le(e,"electricityWind",g)}function $e(e,t,n,r){const i=r(K(e)),a=r(e.values.carRenewablePercentage);return[o("stateDebt").byValue((25-t)/1e3*e.values.co2emissions),o("popularity").byValue(i+a),o("co2emissionsIndustry").byPercent(n),o("co2emissionsAgriculture").byPercent(n),o("co2emissionsOthers").byPercent(n),O("electricityBrownCoal","electricityWind").byPercent(.7*n),O("electricityHardCoal","electricityWind").byPercent(.7*n),O("electricityBrownCoal","electricitySolar").byPercent(.3*n),O("electricityHardCoal","electricitySolar").byPercent(.3*n),O("buildingsSourceOil","buildingsSourceBio").byPercent(n),O("carUsage","publicNationalUsage").byPercent(.5*n),O("carUsage","publicLocalUsage").byPercent(.5*n)]}var Fi=V({title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es f\xFCr unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply(){return[]},probability(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return Math.min(1,v(15,30,t)/100)}});function _t(e){return e.find(t=>t.title.match(/subvention/i)&&t.title.match(/abbau/i))}var Ci=V({title:"Anruf von befreundetem Unternehmer",description:`Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und m\xF6chte dich in seine
    Ferienvilla auf Sardinien einladen. Er verl\xE4sst sich nat\xFCrlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,apply(e){if(e){const t=_t(Pe(e.proposedLaws));if(t)return[se("rejectLaw",{lawId:t.id})]}return[]},probability(e){return _t(Pe(e.proposedLaws))?.5:0}}),Ei=V({title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute \xFCber die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply(){return[]}}),Li=V({title:"Zusammenbruch des Finanzsystems",description:`Deine Staatsfinanzen sind desastr\xF6s. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zur\xFCckahlen k\xF6nnen. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    k\xF6nntest. Das Spiel ist damit leider beendet.
  `,apply(){return[se("gameOver")]},probability(e){return e.values.stateDebt>ce.stateDebt*2?ge.finanzKollaps:0}}),Wi=V({title:"Hitzeh\xF6lle",description:`Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen K\xFCstenregionen
  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr w\xE4chst.
  Um die verbleibdenden Teile sind erbitterte K\xE4mpfe ausgebrochen.
  `,apply(){return[se("gameOver")]},probability(e){return e.values.co2budget<=0?ge.hitzehoelle:0}}),xi=V({title:"Happy New Year!",description:`Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen T\xE4tigkeit aufgestellt
    und kommt zu dem nicht weiter \xFCberraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht \xFCberraschend - sieht die Sache anders und verurteilt die Regierungserkl\xE4rung als haltlos.
  `,apply(){return[se("advanceYear")]},probability(e){return ye(e.currentDate).getYear()>e.currentYear?ge.newYear:0}}),Ti=V({title:"Social Media Alarm!",description:`Deine Wahlkampfberaterin ruft dich v\xF6llig aufgel\xF6st an. Ob denn an den Geschichten was dran sein, die da im
    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.
    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.
  `,apply(){return[o("popularity").byPercent(-20)]}}),Vi=V({title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland m\xFCssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply(){return[]}}),Oi=V({title:"Du hast durchgehalten",description:`Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,
    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Ma\xDFnahmen waren zu finanzieren
    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!
  `,apply(){return[se("gameOver")]},probability(e){return e.currentYear===2050?ge.timesUp:0}}),Ii=V({title:"Wahl verloren",description:`Deine Beliebtheit in der Bev\xF6lkerung ist katastrophal, lieber w\xFCrde man Mao Zedong w\xE4hlen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du geh\xF6rst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon l\xE4nger kein vern\xFCnftiger Mensch mehr geglaubt.
  `,apply(){return[se("gameOver")]},probability(e){return e.values.popularity<=0?ge.wahlVerloren:0}}),Bi=V({title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply(){return[]},citations:[],details:s`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:s`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `}),Mi=V({title:"B\xFCrgerinitiative fordert st\xE4rkere Solarf\xF6rderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply(){return[]},probability(e){const t=w(e,"SolarstromFoerderungAbschaffen"),n=w(e,"SolarstromFoerderungWieZuBeginn"),r=w(e,"SolarstromFoerdernx2");return t||n||r?.5:0},citations:[at],details:s`

  `,internals:s`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${L(at)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),$i=V({title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply(){return[se("gameOver")]},probability(e){return e.acceptedLaws.find(n=>n.lawId==="KernenergienutzungVerlaengern")?.5:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Ni=V({title:"Staatsoberhaupt verstorben",description:"Du stirbst an der neuen BSE Variante. Tja, h\xE4ttest du dich mal besser um das Tierwohl gek\xFCmmert...",apply(){return[se("gameOver")]},probability(e){return Pe(e.acceptedLaws.map(n=>n.lawId)).find(n=>n.title.match(/tierwohl/i))?0:.5},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Gi=V({title:"D\xFCrreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausf\xE4lle sind enorm.",apply(){return[o("gdp").byValue(-100),o("popularity").byValue(-10)]},probability(e){return Math.min(1,v(400,0,e.values.co2budget)/100)},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Ui=V({title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und f\xFChrt zu einer neuen Diskussion \xFCber Lobbyismus.",apply(){return[o("popularity").byValue(-2)]},probability(e){return w(e,"WirksamerCO2Preis")||w(e,"KohleverstromungEinstellen")?0:.3},laws:[],citations:[],details:s`

  `,internals:s`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `}),Ki=V({title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply(){return[o("popularity").byValue(-2)]},probability(){return .3},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Ji=V({title:"Klimafl\xFCchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimafl\xFCchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply(){return[o("stateDebt").byValue(10)]},probability(e){return e.values.co2budget<500?.2:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Hi=V({title:"Plagiatsaff\xE4re",description:"W\xE4hrend des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet W\xE4hlerstimmen.",apply(){return[o("popularity").byValue(-10)]},probability(e){return .5},laws:[],citations:[],details:s`

  `,internals:s`

  `}),ji=V({title:"Debatte \xFCber CO2-Preise",description:"Eine marktliberale Kampagne ist sehr erfolgreich darin, Dich als Verbots-Kanzler hinzustellen. Aus allen Richtungen prasseln Forderungen nach einem ad\xE4quaten CO2-Preis auf Dich ein. Nur leider gehen die Vorstellungen \xFCber den genauen Preis sehr weit auseinander.",laws:["CO2PreisErhoehen","WirksamerCO2Preis","VollerCO2Preis"],apply(){return[]},probability(e){const t=(w(e,"AutosInInnenstaedtenVerbieten")?1:0)+(w(e,"KohleverstromungEinstellen")?1:0)+(w(e,"SolarAufAllenDaechernVerpflichtend")?1:0)+(w(e,"Tempolimit130AufAutobahnen")?1:0)+(w(e,"Tempolimit120AufAutobahnen")?1:0)+(w(e,"Tempolimit100AufAutobahnen")?1:0);return v(1,3,t)/100}});const Zi={AbstandsregelnWindkraft:dn,Altbausanierung:Fi,Bestechung:Ci,EnergieStrategie:Ei,FinanzKollaps:Li,Hitzehoelle:Wi,NewYear:xi,SocialMedia:Ti,TempolimitAufAutobahnen:Vi,TimesUp:Oi,WahlVerloren:Ii,WindkraftAusschreibung:Bi,SolarstromFoerderung:Mi,AtomKatastrophe:$i,BSE:Ni,Duerrewelle:Gi,PRKohleindustrie:Ui,PRInnenminister:Ki,Klimafluechtlinge:Ji,Plagiatsaffaere:Hi,CO2PreisDebatte:ji},Ri=()=>.5,ze=it(Zi).map(e=>G(x({},e),{probability:e.probability||Ri})),zt={currentDate:ln,currentYear:ue,values:ce,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],over:!1,prngState:{}};function Ne(e=zt,t=Zt()){return{id:t,currentDate:e.currentDate,currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:de(e.values),events:e.events,over:e.over,prngState:{}}}function At(e=ae,t=zt){const n=Ne(t);return n.acceptedLaws=e.filter(r=>{var i;return(i=r.labels)==null?void 0:i.includes("initial")}).map(r=>({lawId:r.id,effectiveSince:n.currentYear})),n}const he=[...Array(qe-ue+1).keys()].map(e=>e+ue);function Yi(e,t){const n={lawId:e,effectiveSince:t.currentYear+1},r=pe(n),i=r.effort(t);t.currentDate=ye(t.currentDate).plus(i.time).toJSON();const a=r.removeLawsWithLabels,u=t.acceptedLaws.map(pe).filter(f=>!(a==null?void 0:a.some(c=>{var g;return(g=f.labels)==null?void 0:g.includes(c)}))).map(f=>({lawId:f.id,effectiveSince:f.effectiveSince}));return t.acceptedLaws=[...u,n],Ge(t)}function Qi(e){return e.currentDate=ye(e.currentDate).plus(un).toJSON(),Ge(e)}function Ge(e,t=ae,n=ze,r=tt){const i=qi(e,n,r);if(i){const u={id:i.id,occuredIn:e.currentYear,acknowledged:!1};e.events.unshift(u)}const a=rs(e,t,(i==null?void 0:i.laws)?i.laws:[]);return e.proposedLaws=is(e.proposedLaws,a),i}function qi(e,t,n){const r=Xi(e,t),i=es(r);if(i)return i;const a=ts(r);return ns(a,n())}function Xi(e,t){return t.map(n=>G(x({},n),{prob:n.probability(e)})).filter(n=>n.prob>0)}function es(e){return e.filter(t=>t.prob>1).reduce((t,n)=>n.prob>((t==null?void 0:t.prob)||0)?n:t,void 0)}function ts(e){const t=e.map(r=>r.prob).reduce((r,i)=>r+i,0),n=cn/t;return e.map(r=>G(x({},r),{prob:r.prob*n}))}function ns(e,t){for(const n of e)if(t-=n.prob,t<0)return n}function rs(e,t,n){const r=c=>{var g;return(g=e.acceptedLaws)==null?void 0:g.some(S=>S.lawId===c.id)},i=c=>{var g;return(g=e.rejectedLaws)==null?void 0:g.includes(c.id)},a=c=>{var g;return((g=c.labels)==null?void 0:g.includes("hidden"))||!1},u=c=>({law:c,priority:c.priority(e)}),f=c=>({law:c.law,priority:c.priority+(n.includes(c.law.id)?100:0)});return t.filter(Oe(r)).filter(Oe(i)).filter(Oe(a)).map(u).filter(c=>c.priority>0).map(f).sort((c,g)=>g.priority-c.priority).map(c=>c.law.id).slice(0,et)}function is(e,t){const n=[...e],r=t.filter(u=>n.includes(u)),i=t.filter(u=>!r.includes(u));for(var a=0;a<n.length;){if(r.includes(n[a])){a++;continue}if(i.length===0){n.splice(a,1);continue}n[a]=i.shift(),a++}return n.push(...i.slice(0,et-n.length)),n}function ss(e,t,n){return Ft(e,t,n).values}function Ft(e,t,n){const r=de(e.values),i=t.sort((u,f)=>{var c,g;return((c=u.treatAfterLabels)==null?void 0:c.some(S=>{var p;return(p=f.labels)==null?void 0:p.includes(S)}))?1:((g=f.treatAfterLabels)==null?void 0:g.some(S=>{var p;return(p=u.labels)==null?void 0:p.includes(S)}))?-1:0}).filter(u=>u.effectiveSince<=n),a=_i(i,u=>{const f=kr(r),c=u.effects(G(x({},e),{values:r}),u.effectiveSince,n);return Be({dispatch:()=>{},values:r},c),f},(u,f,c)=>r[c]-f[c]);return r.co2budget-=r.co2emissions,{values:r,effectsOfLaws:a}}function Ct(e){return Math.max(0,Math.min(100,e))}function as(e){if(e.values.co2emissions===0)return 100;const n=e.values.co2budget*de(ce).co2emissions/ce.co2budget/e.values.co2emissions;return Ct(n*50)}function os(e){const t=e.values.stateDebt/ce.stateDebt;return Ct(100-t*50)}const fe=[{id:"start",title:"Stell dir vor...",text:s`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du ausw\xE4hlen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die W\xE4hler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine W\xE4hler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];function ls(e,t){return{startGame(n){const r=At(),i=Ge(r);t.createGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i}),e.push("/games/"+r.id)},async loadGame(n,r){var i;if(((i=n.state.game)==null?void 0:i.id)!==r.gameId)try{const a=await t.loadGame(r.gameId);t.saveGame(a),e.push("/games/"+a.id+(a.over?"/over":"")),n.commit("setGameState",{game:a})}catch(a){n.dispatch("error",{error:a})}},gameOver(n){var r;n.commit("gameOver",void 0),e.push("/games/"+((r=n.state.game)==null?void 0:r.id)+"/over")},acceptLaw(n,r){const i=x({},n.state.game),a=Yi(r.lawId,i);t.saveGame(i),n.commit("setGameState",{game:i}),n.dispatch("applyEvent",{event:a}),t.decisionMade(i,r.lawId,!0)},rejectLaw(n,r){const i=x({},n.state.game);i.rejectedLaws=[...i.rejectedLaws,r.lawId],t.decisionMade(i,r.lawId,!1),t.saveGame(i),n.commit("setGameState",{game:i})},sitOut(n){const r=x({},n.state.game);t.decisionMade(r,"sitOut",!0);const i=Qi(r);t.saveGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i})},advanceYear(n){const r=x({},n.state.game),i=r.acceptedLaws.map(pe);r.currentYear++,r.values=ss(r,i,r.currentYear),t.saveGame(r),n.commit("setGameState",{game:r})},applyEvent(n,r){if(!r.event)return;const i=x({},n.state.game);t.eventOccurred(i,r.event);const a=r.event.apply(i);n.dispatch("applyEffects",{changes:a})},acknowledgeEvent(n,r){const i=x({},n.state.game);i.events.find(a=>a.id===r.id).acknowledged=!0,t.saveGame(i),n.commit("setGameState",{game:i})},applyEffects(n,r){const i={dispatch:n.dispatch,values:de(n.state.game.values)};Be(i,r.changes);const a=G(x({},n.state.game),{values:i.values});t.saveGame(a),n.commit("setGameState",{game:a})},setupTour(n){const r=localStorage.getItem("tour")||fe[0].id,i=fe.find(a=>r===a.id);i?n.commit("setTour",{step:i.id,active:!0}):n.dispatch("stopTour")},nextTourStep(n){const r=fe.findIndex(i=>n.state.tour.step===i.id);if(r<0||r==fe.length-1)n.dispatch("stopTour");else{const i=fe[r+1];n.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(n){n.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},error(n,r){n.commit("error",r)}}}const us={setGameState(e,t){e.game=t.game},gameOver(e){e.game=G(x({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},cs={proposedLaws(e){return!e.game||!e.game.proposedLaws?[]:Pe(e.game.proposedLaws)}},ds={game:void 0,tour:{active:!0,step:"start"}};var M=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const hs=e=>(be("data-v-1017d1c6"),e=e(),ve(),e),fs={key:0,type:"radio"},ms=hs(()=>l("br",null,null,-1)),gs={key:0,class:"button-bar"},ps=B({props:{law:null,selectable:{type:Boolean},numCards:null},emits:["selected","accepted"],setup(e,{emit:t}){const n=e,r=X(!1),i=_(()=>n.law.zIndex);function a(){t("selected")}function u(){r.value=!0}function f(c){c.animationName.match(/^twistOut-/)&&t("accepted",n.law.id)}return(c,g)=>(h(),m("div",{class:$(["Law",{accepted:r.value}]),style:Ee({zIndex:C(i)}),onClick:a,onAnimationend:f},[l("label",null,[e.selectable?(h(),m("input",fs)):A("",!0),l("div",null,[l("h3",null,k(e.law.title),1),l("div",null,k(e.law.description),1),ms,l("div",null,k(e.law.effortComment),1),e.selectable?(h(),m("div",gs,[l("button",{class:"accept",onClick:u},"\u2713")])):A("",!0)])])],38))}});var bs=M(ps,[["__scopeId","data-v-1017d1c6"]]);const vs=B({setup(e){const t=oe(),n=X([]),r=X(!1),i=_(()=>t.getters.proposedLaws),a=_(()=>t.state.game),u=_(()=>(n.value.length||(n.value=rt(i.value.length,0)),a.value===void 0?[]:i.value.map((S,p)=>G(x({},S),{zIndex:n.value[p],pos:p,effortComment:S.effort(a.value).text}))));function f(S){t.dispatch("acceptLaw",{lawId:S})}function c(S){n.value=rt(i.value.length,S)}function g(){t.dispatch("sitOut")}return(S,p)=>(h(),m(J,null,[l("div",{class:$(["ProposedLaws",{poppedUp:r.value}]),onClick:p[0]||(p[0]=d=>r.value=!0)},[(h(!0),m(J,null,R(C(u),(d,z)=>(h(),ee(bs,{key:d.id,law:d,selectable:r.value,numCards:C(u).length,onAccepted:()=>f(d.id),onSelected:()=>c(z)},null,8,["law","selectable","numCards","onAccepted","onSelected"]))),128))],2),l("div",{class:"sitOutButton",onClick:p[1]||(p[1]=()=>g())},"Aussitzen")],64))}});var ws=M(vs,[["__scopeId","data-v-7616326e"]]);const ys={key:0},ks=B({props:{title:null,text:null},emits:["acknowledge"],setup(e,{emit:t}){function n(){t("acknowledge")}return(r,i)=>e.text?(h(),m("div",{key:0,onClick:n},[e.title?(h(),m("h2",ys,k(e.title),1)):A("",!0),l("p",null,k(e.text),1)])):A("",!0)}});var Ss=M(ks,[["__scopeId","data-v-089babdc"]]),Ds="/assets/money-short.7ce9dbed.png",Ps="/assets/money-less.184321f3.png",_s="/assets/money-more.44dccbaa.png",zs="/assets/money-much.d486dae1.png";const As={class:"container"},Fs={class:"title"},Cs={class:"progress-bar"},Es=B({props:{title:null,value:null},setup(e){const t=e,n=_(()=>{const r=t.value>40?"green":t.value>20?"goldenrod":"red";return{width:t.value+"%",backgroundColor:r}});return(r,i)=>(h(),m("div",As,[l("div",Fs,k(e.title),1),l("div",Cs,[l("div",{class:"indicator",style:Ee(C(n))},null,4)])]))}});var Ue=M(Es,[["__scopeId","data-v-9856b0a2"]]);const Ls={id:"finances"},Ws={key:0,src:Ds,id:"short"},xs={key:1,src:Ps,id:"less"},Ts={key:2,src:_s,id:"more"},Vs={key:3,src:zs,id:"much"},Os=B({props:{value:null},setup(e){const t=e,n=_(()=>t.value),r=_(()=>t.value<20),i=_(()=>t.value>=20&&t.value<50),a=_(()=>t.value>=50&&t.value<80),u=_(()=>t.value>=80);return(f,c)=>(h(),m("div",Ls,[I(Ue,{id:"indicator",title:"Finanzen",value:C(n)},null,8,["value"]),C(r)?(h(),m("img",Ws)):A("",!0),C(i)?(h(),m("img",xs)):A("",!0),C(a)?(h(),m("img",Ts)):A("",!0),C(u)?(h(),m("img",Vs)):A("",!0)]))}});var Is=M(Os,[["__scopeId","data-v-0b2fb0e8"]]),Bs="/assets/people-happy.acaffc0b.png",Ms="/assets/people-angry.54c1d60c.png";const $s={id:"popularity"},Ns={key:0,src:Bs,id:"happy"},Gs={key:1,src:Ms,id:"angry"},Us=B({props:{value:null},setup(e){const t=e,n=_(()=>t.value>=50),r=_(()=>t.value<50);return(i,a)=>(h(),m("div",$s,[I(Ue,{id:"indicator",title:"Beliebtheit",value:e.value},null,8,["value"]),C(n)?(h(),m("img",Ns)):A("",!0),C(r)?(h(),m("img",Gs)):A("",!0)]))}});var Ks=M(Us,[["__scopeId","data-v-4cf2dbec"]]),Js="/assets/plant-healthy.97772624.png",Hs="/assets/plant-sick.5a0f1b46.png",js="/assets/plant-withered.b50106c7.png";const Zs={id:"plant"},Rs=["src","id"],Ys=B({props:{value:null},setup(e){const t=e,n={healthy:Js,sick:Hs,withered:js},r=_(()=>t.value>66?"healthy":t.value>33?"sick":"withered"),i=_(()=>n[r.value]);return(a,u)=>(h(),m("div",Zs,[I(Ue,{id:"indicator",title:"CO2-Budget",value:e.value},null,8,["value"]),l("img",{src:C(i),id:C(r)},null,8,Rs)]))}});var Qs=M(Ys,[["__scopeId","data-v-2db3389a"]]);const qs={id:"calendar"},Xs=B({props:{year:null,month:null},setup(e){const t=e,n=_(()=>{const r=Math.floor((t.month-1)/4)*18+27+"%",i=(t.month-1)%4*21+12+"%";return{top:r,left:i}});return(r,i)=>(h(),m("div",qs,[U(k(e.year)+" ",1),l("span",{id:"month-indicator",style:Ee(C(n))},null,4)]))}});var ea=M(Xs,[["__scopeId","data-v-78901c78"]]),ta="/assets/heater.43006232.png";const na={},ra=e=>(be("data-v-c9039a0c"),e=e(),ve(),e),ia={id:"heater"},sa=ra(()=>l("img",{src:ta},null,-1)),aa=[sa];function oa(e,t){return h(),m("div",ia,aa)}var la=M(na,[["render",oa],["__scopeId","data-v-c9039a0c"]]),ua="/assets/table-top.c87bd2fd.png",Et="/assets/table-front.78c0f8c6.png",Lt="/assets/table-side.49774a53.png";const ca={},da={id:"table"},ha=Re('<img src="'+ua+'" id="table-top" data-v-1ef8d93c><img src="'+Et+'" id="table-front" data-v-1ef8d93c><img src="'+Et+'" id="table-back" data-v-1ef8d93c><img src="'+Lt+'" id="table-left-side" data-v-1ef8d93c><img src="'+Lt+'" id="table-right-side" data-v-1ef8d93c>',5),fa=[ha];function ma(e,t){return h(),m("div",da,fa)}var ga=M(ca,[["render",ma],["__scopeId","data-v-1ef8d93c"]]),pa="/assets/board-front.41330f02.png",Wt="/assets/board-side.d7181ded.png",ba="/assets/tv-front.82df5c0c.png",va="/assets/news.c4bbc2d0.png",xt="/assets/tvset-legs.78b387df.png";const wa=B({props:{withNews:Boolean}}),Tt=e=>(be("data-v-118e7bdf"),e=e(),ve(),e),ya={id:"tvset"},ka=Re('<div id="board" data-v-118e7bdf><img id="board-front" src="'+pa+'" data-v-118e7bdf><img id="board-left" src="'+Wt+'" data-v-118e7bdf><img id="board-right" src="'+Wt+'" data-v-118e7bdf><div id="board-top" data-v-118e7bdf></div></div>',1),Sa={id:"tv"},Da=Tt(()=>l("img",{id:"tv-front",src:ba},null,-1)),Pa={key:0,id:"news",src:va},_a=Tt(()=>l("div",{id:"legs"},[l("img",{id:"legs-front",src:xt}),l("img",{id:"legs-back",src:xt})],-1));function za(e,t,n,r,i,a){return h(),m("div",ya,[ka,l("div",Sa,[Da,e.withNews?(h(),m("img",Pa)):A("",!0)]),_a])}var Aa=M(wa,[["render",za],["__scopeId","data-v-118e7bdf"]]);const Fa={},Ca={class:"dialog"},Ea={class:"buttons"};function La(e,t){return h(),m("div",Ca,[Le(e.$slots,"default",{},void 0,!0),l("div",Ea,[Le(e.$slots,"buttons",{},void 0,!0)])])}var Vt=M(Fa,[["render",La],["__scopeId","data-v-620b183d"]]);const Wa=B({setup(){const e=oe();return e.dispatch("setupTour"),{store:e}},components:{Dialog:Vt},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return fe.find(e=>e.id===this.$store.state.tour.step)},title(){var e;return(e=this.currentStep)==null?void 0:e.title},text(){var e;return(e=this.currentStep)==null?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var n;const t=document.querySelector(".highlighted");t&&t.classList.remove("highlighted"),e&&e.highlight&&((n=document.querySelector(`#${e.highlight}`))==null||n.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}}),xa=["innerHTML"];function Ta(e,t,n,r,i,a){const u=re("Dialog");return e.title&&e.text?(h(),ee(u,{key:0},{buttons:we(()=>[l("button",{onClick:t[0]||(t[0]=(...f)=>e.stop&&e.stop(...f))},"Tour beenden"),l("button",{onClick:t[1]||(t[1]=(...f)=>e.next&&e.next(...f))},"Weiter")]),default:we(()=>[l("h2",null,k(e.title),1),l("div",{innerHTML:e.text},null,8,xa)]),_:1})):A("",!0)}var Va=M(Wa,[["render",Ta]]);const Oa={class:"game-setup"},Ia=l("h1",null,"#ich-kann-klima",-1),Ba=l("div",{id:"walls"},[l("div",{id:"wall-back"}),l("div",{id:"wall-left"}),l("div",{id:"wall-right"})],-1),Ma=B({setup(e){const t=oe(),n=_(()=>{var z;const p=((z=t.state.game)==null?void 0:z.events)||[];if(p.length===0)return;const d=p[0];if(!d.acknowledged)return ze.find(T=>T.id===d.id)}),r=_(()=>{var p;return((p=n.value)==null?void 0:p.title)||""}),i=_(()=>{var p;return((p=n.value)==null?void 0:p.description)||""}),a=_(()=>{var p;return((p=t.state.game)==null?void 0:p.currentYear)||2021}),u=_(()=>{var p;return ye((p=t.state.game)==null?void 0:p.currentDate).lux.month}),f=_(()=>{const p=t.state.game;return p?os(p):0}),c=_(()=>{var p;return((p=t.state.game)==null?void 0:p.values.popularity)||100}),g=_(()=>{const p=t.state.game;return p?as(p):0});function S(){t.dispatch("acknowledgeEvent",n.value)}return(p,d)=>(h(),m("div",Oa,[Ia,Ba,I(ea,{year:C(a),month:C(u)},null,8,["year","month"]),I(la),I(Ks,{value:C(c)},null,8,["value"]),I(Aa,{"with-news":!!C(i)},null,8,["with-news"]),I(Qs,{value:C(g)},null,8,["value"]),I(ga),I(Is,{value:C(f)},null,8,["value"]),I(ws),I(Ss,{title:C(r),text:C(i),onAcknowledge:S},null,8,["title","text"]),I(Va)]))}});const $a=["onClick"],Na=B({setup(e){const t=oe(),n=_(()=>{var u;return(u=t.state.game)==null?void 0:u.acceptedLaws}),r=X(void 0),i=_(()=>ae.filter(u=>{var f,c;return((f=n.value)==null?void 0:f.some(g=>g.lawId===u.id))&&!((c=u.labels)==null?void 0:c.includes("hidden"))}));function a(u){r.value=r.value===u?void 0:u}return(u,f)=>(h(!0),m(J,null,R(C(i),(c,g)=>(h(),m("div",{key:g,class:$(["Law",{opened:g===r.value}]),onClick:S=>a(g)},[l("h3",null,k(c.title),1),l("div",null,k(c.description),1)],10,$a))),128))}});var Ga=M(Na,[["__scopeId","data-v-7efa2df1"]]);const Ua=B({components:{GameSetup:Ma,AcceptedLaws:Ga},setup(){return{store:oe()}},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,n){n(r=>r.startGame(e.params.id))}});function Ka(e,t,n,r,i,a){const u=re("GameSetup");return h(),ee(u)}var Ot=M(Ua,[["render",Ka],["__scopeId","data-v-3637ce73"]]);const Ja=B({components:{Dialog:Vt},setup(){return{store:oe()}},computed:{co2(){var n,r;const e=(n=this.store.state.game)==null?void 0:n.values.co2budget;return((r=this.store.state.game)==null?void 0:r.values.co2emissions)>0?e>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. H\xE4tte die AfD nicht besser hinbekommen.":e>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken k\xF6nnen. Punktlandung."},debt(){var t;return((t=this.store.state.game)==null?void 0:t.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilit\xE4tskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var t;const e=(t=this.store.state.game)==null?void 0:t.values.popularity;return e<20?"entspricht dem, was man von einem langh\xE4hrigen Diktator erwarten kann.":e<50?"ist nicht berauschend, wiedergew\xE4hlt w\xFCrdest du wohl eher nicht.":e<80?"reicht aus, dass du noch l\xE4nger am Ruder bleiben k\xF6nntest. Gratulation!":"ist v\xF6llig unglaubw\xFCrdig - war das wirklich eine freie Wahl?"}},methods:{loadGame(e){this.store.dispatch("loadGame",{gameId:e})},newGame(){this.$router.push("/games")}},beforeRouteEnter(e,t,n){n(r=>{r.loadGame(e.params.id)})}}),Ha=l("h2",null,"Das Spiel ist leider zu Ende",-1),ja=l("p",null,"Deine Entscheidungen haben etwas ver\xE4ndert - soviel kann man sagen.",-1),Za=l("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Ra={class:"button-bar"};function Ya(e,t,n,r,i,a){const u=re("Dialog");return h(),ee(u,null,{default:we(()=>[Ha,ja,l("ul",null,[l("li",null,"Die CO2-Emmissionen "+k(e.co2),1),l("li",null,"Die Staatsfinanzen "+k(e.debt),1),l("li",null,"Deine Beliebtheit "+k(e.popularity),1)]),Za,l("div",Ra,[l("button",{onClick:t[0]||(t[0]=(...f)=>e.newGame&&e.newGame(...f))},"Neuer Versuch")])]),_:1})}var Qa=M(Ja,[["render",Ya]]);const qa=[{path:"/",redirect:"/games"},{path:"/games",component:Ot},{path:"/games/:id",component:Ot},{path:"/games/:id/over",component:Qa}],It=Rt({history:Yt(),routes:qa});function Xa(e){return{createGame(t){return e.add("post","/games",t)},loadGame(t){return e.add("get","/games/"+t,void 0,0)},saveGame(t){return e.remove("put","/games/"+t.id),e.add("put","/games/"+t.id,t)},decisionMade(t,n,r){return e.add("post","/games/"+t+"/decisions/"+n,{accepted:r})},eventOccurred(t,n){return e.add("post","/games/"+t+"/events/"+n)}}}function eo(e,t){let n=[],r;async function i(){if(r&&(clearTimeout(r),r=void 0),n.length){const a=n[0],{method:u,path:f,data:c,retry:g,resolve:S,reject:p}=a;try{if((t==null?void 0:t.navigator)&&!(t==null?void 0:t.navigator.onLine))throw Error("Browser is offline");const d=await e(u,f,c);n.shift(),S(d)}catch(d){g?a.retry=Math.max(-1,g-1):(n.shift(),p(d))}n.length&&(r=setTimeout(i,(t==null?void 0:t.timeout)||1e4))}}return{add(a,u,f,c=-1){return new Promise((g,S)=>{n.push({method:a,path:u,data:f,retry:c,resolve:g,reject:S}),r||i()})},remove(a,u){n=n.filter(f=>f.method.toLowerCase()!==a.toLowerCase()||f.path!==u)},callsPending(){return n.length>0}}}function to(e,t,n=console){return async function(r,i,a){var u;try{const f={method:r};["post","put","patch"].includes(r)&&(f.body=JSON.stringify(a),f.headers={["content-type"]:"application/json"});const c=await t(e+i,f),g=((u=c.headers.get("Content-Type"))==null?void 0:u.match(/json/))?await c.json():await c.text();if(c.ok)return g;throw Error(g.message||g)}catch(f){throw n.error(f),f}}}function no({api:e,logger:t=console,storage:n=localStorage}){return{createGame(r){Ve(r),n.setItem("game",JSON.stringify(r)),e.createGame(r).catch(i=>{t.warn("Cannot save new game - trying again later",i)})},async loadGame(r){const i=n.getItem("game");if(i){const u=JSON.parse(i);if(u.id===r)return Ve(u),Ne(u,r)}const a=await e.loadGame(r);return Ve(a),Ne(a,r)},saveGame(r){r.prngState=hn(),n.setItem("game",JSON.stringify(r)),e.saveGame(r).catch(i=>{t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",i)})},decisionMade(r,i,a){e.decisionMade(r.id,i,a)},eventOccurred(r,i){e.eventOccurred(r.id,i.id)}}}const ro=localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",io=to(ro,fetch),so=eo(io),ao=Xa(so),oo=no({api:ao}),lo=ls(It,oo),Bt=Symbol();function oe(){return Qt(Bt)}const uo=qt({state:ds,mutations:us,actions:lo,getters:cs});function Mt(e,t,...n){for(const r of n){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function co(e,t,n){function r(c){return e[c].toFixed(2)}function i(c){return(c>0?"+":"")+c.toFixed(2)}function a(c){const g=n.find(S=>S.type==="modify"&&S.name===c);return g&&g.condition?g.value:0}function u(c){const g=a(c),S=t?t[c]:0;return g&&Math.abs(g-S)<.001?i(g):g?i(g)+" / "+i(S):S!=0?i(S):""}return kt.map(c=>({id:c.name,unit:c.unit,value:r(c.name),effect:u(c.name),class:c.writable?"writable":"calculated"}))}function ho(e,t,n,r){const i=e.proposedLaws,a=e.acceptedLaws.map(c=>c.lawId),u=e.rejectedLaws;function f(c){return a.includes(c)?"a":i.includes(c)?"p":u.includes(c)?"r":"x"}return r.map(c=>({id:c.id,priority:c.priority(e),state:f(c.id)})).sort((c,g)=>Mt(c,g,t,"id")*n).map(c=>G(x({},c),{priority:c.priority.toFixed(2)}))}function fo(e,t,n,r){return r.map(i=>({id:i.id,probability:i.probability(e)})).sort((i,a)=>Mt(i,a,t,"id")*n).map(i=>G(x({},i),{probability:(i.probability*100).toFixed(2)}))}const mo={key:0},go=["href"],po=U(". "),bo={key:1},vo={key:2},wo=U("Bemerkung: "),yo=["innerHTML"],ko=U(". "),So={key:3},Do=U("Internes: "),Po=["innerHTML"],_o=U(". "),zo={key:4},Ao=["href"],Fo=U(". "),Co={key:5},Eo=["href"],Lo=U(". "),Wo={key:6},xo=["href"],To=U(". "),Vo=B({props:{citation:null,showInternals:{type:Boolean}},setup(e){const t=e,n=_(()=>t.citation.url.toString()),r=_(()=>t.citation.title||t.citation.url.toString());return(i,a)=>(h(),m("p",null,[e.citation.authors?(h(),m("span",mo,k(e.citation.authors+e.citation.dateString())+". ",1)):A("",!0),l("a",{target:"_blank",rel:"noreferrer noopener",href:C(n)},'"'+k(C(r))+'"',9,go),po,e.citation.publisher?(h(),m("span",bo,k(e.citation.publisher)+". ",1)):A("",!0),e.citation.comment?(h(),m("span",vo,[wo,l("span",{innerHTML:e.citation.comment},null,8,yo),ko])):A("",!0),e.showInternals&&e.citation.internalComment?(h(),m("span",So,[Do,l("span",{innerHTML:e.citation.internalComment},null,8,Po),_o])):A("",!0),e.citation.referringUrl?(h(),m("span",zo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,Ao),Fo])):A("",!0),e.citation.archiveUrl?(h(),m("span",Co,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,Eo),Lo])):A("",!0),e.citation.localCopy?(h(),m("span",Wo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,xo),To])):A("",!0)]))}}),Oo=B({props:{chartData:null,paramId:null,selectedYear:null},emits:["update:selectedYear"],setup(e,{emit:t}){const n=e,r="#9c6d00",i="#ce900070",a="#644600",u=_(()=>({xaxis:{categories:he,labels:{rotate:-90}},chart:{id:n.paramId+"-withLawEffects",animations:{enabled:!1},stacked:!0},colors:[r,a,i],legend:{show:!1},markers:{size:0},dataLabels:{enabled:!1}})),f=_(()=>n.chartData.values.map((D,E)=>({value:D[n.paramId],change:n.chartData.changes[E][n.paramId]}))),c=_(()=>f.value.map(D=>{const E=D.value-D.change;return D.change*D.value>0?E*D.value>0?{value:E,gain:D.change,loss:0}:{value:0,gain:D.value,loss:E}:{value:D.value,gain:0,loss:-D.change}})),g=_(()=>[{name:"Simulated "+n.paramId,data:c.value.map(D=>Math.round(D.value))},{name:"Gains of "+n.paramId+" by selected law",data:c.value.map(D=>Math.round(D.gain))},{name:"Losses of "+n.paramId+" by selected law",data:c.value.map(D=>Math.round(D.loss))}]),S=X();let p;function d(){var D,E;((D=S.value)==null?void 0:D.chart)!=null&&p!=null&&((E=S.value)==null||E.toggleDataPointSelection(0,p)),p=void 0}function z(D){var E,N;if(((E=S.value)==null?void 0:E.chart)!=null&&D){const Z=D-he[0];p!=Z&&(d(),p=Z,(N=S.value)==null||N.toggleDataPointSelection(0,Z))}else d()}Xt(()=>z(n.selectedYear),{flush:"post"});function T(D,E,N){const Z=N.dataPointIndex;Z<0||(Z===p?(p=void 0,t("update:selectedYear",void 0)):(p=Z,t("update:selectedYear",Z+he[0])))}return(D,E)=>(h(),m("div",null,[l("div",null,k(e.paramId),1),I(C(en),{ref_key:"chart",ref:S,type:"bar",options:C(u),series:C(g),onClick:T},null,8,["options","series"])]))}}),Io=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"DaemmungAltbau4Percent",effectiveSince:2022},{lawId:"ForschungEmissionsfreieZementproduktion",effectiveSince:2023},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024},{lawId:"ForschungEmissionsfreieStahlproduktion",effectiveSince:2024},{lawId:"FernverkehrModernisieren",effectiveSince:2025},{lawId:"NahverkehrModernisieren",effectiveSince:2026},{lawId:"FernverkehrVerbindungenAusbauen",effectiveSince:2026},{lawId:"NahverkehrAusbauen",effectiveSince:2026},{lawId:"LadeinfrastrukturAusbauen",effectiveSince:2026},{lawId:"NahverkehrKostenlos",effectiveSince:2027},{lawId:"DienstwagenPrivilegAbgeschaffen",effectiveSince:2027},{lawId:"ElektromobilitaetFoerdern",effectiveSince:2027},{lawId:"WasserstoffmobilitaetFoerdern",effectiveSince:2027}]}],Ae=(e,t)=>e.lawId===t.lawId&&e.effectiveSince===t.effectiveSince,Bo=e=>e.map((t,n)=>G(x({},t),{sortId:n}));function Mo(...e){const t=e.map(n=>n.length===0?0:n[n.length-1].sortId+1);return t.length===0?0:Math.max.apply(Math,t)}function $o(e){const t=X([]),n=X([]),r=X(!1);function i(T,D){var Je;const E=t.value,N={lawId:T,effectiveSince:D,sortId:0},Z=(Je=n.value.find(me=>Ae(N,me)))==null?void 0:Je.sortId;N.sortId=Z!=null?Z:Mo(E,n.value),t.value=E.filter(me=>me.lawId!=T).concat(N).sort((me,Nt)=>me.sortId-Nt.sortId)}function a(T){t.value=t.value.filter(D=>D.lawId!=T)}function u(T,D){const E={lawId:T,effectiveSince:D,sortId:0};t.value.some(N=>Ae(N,E))?a(T):i(T,D)}function f(T){t.value=Bo(T.laws)}function c(){r.value=!r.value,r.value?n.value=t.value:n.value=[]}const g=_(()=>{var T;return{name:"Current Game",laws:((T=e.value)==null?void 0:T.acceptedLaws)||[]}}),S=_(()=>[g.value,...Io]),p=_(()=>{const T=t.value.map(E=>G(x({},E),{cls:n.value.some(N=>Ae(E,N))?"both":"new"})),D=n.value.filter(E=>!t.value.some(N=>Ae(N,E))).map(E=>G(x({},E),{cls:"saved"}));return[...T,...D].sort((E,N)=>E.sortId-N.sortId)}),d=$t(t),z=$t(n);return{addToSimulation:i,removeFromSimulation:a,toggleInSimulation:u,loadPreset:f,compareActive:r,toggleCompare:c,presets:S,simulatedLaws:p,simulation:d,secondSimulation:z}}function $t(e){return _(()=>{const t=At();return t.acceptedLaws=[...e.value],he.map(r=>{for(;r>t.currentYear;){t.currentYear++,t.acceptedLaws=No(t.acceptedLaws,t.currentYear);const i=t.acceptedLaws.map(f=>pe(f)),{values:a,effectsOfLaws:u}=Ft(t,i,t.currentYear);if(t.values=a,r===t.currentYear)return{values:a,effectsOfLaws:u}}return{values:t.values,effectsOfLaws:{}}})})}function No(e,t){const n=e.map(i=>pe(i)),r=n.filter(i=>i.effectiveSince===t).flatMap(i=>i.removeLawsWithLabels||[]);return n.filter(i=>i.effectiveSince>=t||!r.some(a=>{var u;return(u=i.labels)==null?void 0:u.includes(a)})).map(i=>({lawId:i.id,effectiveSince:i.effectiveSince}))}const Go=B({directives:{clickaway:Ye},setup(e,t){const n=X(!1);return{menuIsOpen:n,toggle:()=>n.value=!n.value,close:()=>n.value=!1}}});function Uo(e,t,n,r,i,a){const u=tn("clickaway");return nn((h(),m("span",{onClick:t[0]||(t[0]=(...f)=>e.toggle&&e.toggle(...f)),class:$(["menu",{menuIsOpen:e.menuIsOpen}])},[Le(e.$slots,"default",{},void 0,!0)],2)),[[u,e.close]])}var Ko=M(Go,[["render",Uo],["__scopeId","data-v-06206e01"]]);const Jo=B({directives:{clickaway:Ye},components:{Citation:Vo,PeekChart:Oo,Menu:Ko},setup(){const e=oe(),t=_(()=>e.state.game),n=$o(t);return x({store:e,game:t,gameYears:he},n)},data(){return{lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lastSelected:void 0,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,yearSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1}},methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){e===this.lawSelected?this.lawSelected=void 0:(this.lastSelected="law",this.lawSelected=e)},selectEvent(e){e===this.eventSelected?this.eventSelected=void 0:(this.lastSelected="event",this.eventSelected=e)},selectParam(e){e===this.paramSelected?this.paramSelected=void 0:(this.lastSelected="param",this.paramSelected=e)},selectYear(e){e===this.yearSelected?this.yearSelected=void 0:(this.lastSelected="year",this.yearSelected=e)},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0,this.yearSelected=void 0},dragStart(e,t){const{lawId:n,year:r}=t;!e.dataTransfer||(e.dataTransfer.dropEffect="link",n&&e.dataTransfer.setData("lawId",n),r&&e.dataTransfer.setData("year",r.toString()))},getDropped(e,t,n){if(!e.dataTransfer)return;const r=e.dataTransfer.getData(t);return n.find(i=>i==r)},onDrop(e,t){const{lawId:n,year:r}=t,i=this.getDropped(e,"lawId",Si),a=this.getDropped(e,"year",this.gameYears);r&&i?this.addToSimulation(i,r):n&&a?this.addToSimulation(n,a):n&&i&&this.removeFromSimulation(i)},rightClick(e,t){this.toggleInSimulation(e,t)}},computed:{startYearOfSelected(){if(!this.lawSelected)return;if(!this.game)return ue;const e=this.simulatedLaws.find(t=>t.lawId===this.lawSelected);return e?e.effectiveSince:this.game.currentYear},selectedLaw(){return ae.find(e=>e.id===this.lawSelected)},lawEffort(){var e;if(!!this.game)return(e=this.selectedLaw)==null?void 0:e.effort(this.game)},selectedEvent(){return ze.find(e=>e.id===this.eventSelected)},selectedParam(){return this.paramSelected?Y[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof P?e:void 0},cParam(){const e=this.selectedParam;return e instanceof j?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},currentYear(){return this.yearSelected?this.yearSelected:this.game?this.game.currentYear:ue},effectsOfSelected(){return!this.selectedLaw||!this.startYearOfSelected||!this.game?[]:this.selectedLaw.effects(this.game,this.startYearOfSelected,this.currentYear)},sortedValues(){return this.game?co(this.simOfYear.values,this.effectsOfLawInYear,this.effectsOfSelected):[]},sortedLaws(){return this.game?ho(this.game,this.lawsSortCol,this.lawsSortDir,ae):[]},sortedEvents(){return this.game?fo(this.game,this.eventsSortCol,this.eventsSortDir,ze):[]},effectsOfLawInYear(){if(this.lawSelected)return this.simOfYear.effectsOfLaws[this.lawSelected];if(this.yearSelected)return this.simEffectOfLaw[this.yearSelected-this.gameYears[0]]},simOfYear(){if(this.yearSelected===void 0&&this.game){const e=this.effectsOfSelected,t=this.game.values;if(this.lawSelected===void 0||e.length===0)return{values:t,effectsOfLaws:{}};const n=de(t);Be({dispatch:()=>{},values:n},e);const i=Object.fromEntries(vt.map(a=>[a,n[a]-t[a]]));return{values:t,effectsOfLaws:{[this.lawSelected]:i}}}else{const e=this.yearSelected?this.yearSelected-this.gameYears[0]:0;return this.simulation[e]}},simulatedValues(){return this.simulation.map(e=>e.values)},simEffectOfLaw(){if(this.lawSelected){const e=this.lawSelected;return this.simulation.map(t=>{const n=t.effectsOfLaws[e];return n||St})}return this.compareActive?this.secondSimulation.map((e,t)=>Object.fromEntries(Object.entries(e.values).map(([n,r])=>[n,this.simulation[t].values[n]-r]))):he.map(e=>St)},chartData(){return{values:this.simulatedValues,changes:this.simEffectOfLaw}},lawsInYear(){return e=>this.simulatedLaws.filter(t=>t.effectiveSince===e)}}}),q=e=>(be("data-v-85b0da02"),e=e(),ve(),e),Ho={class:"peekData"},jo={class:"Menu"},Zo=U("\xA0 "),Ro=U("\xA0 "),Yo=U("\xA0 "),Qo=U("\xA0 "),qo=U("\xA0 "),Xo=U("\xA0 "),el={key:1,class:"Details sidebyside"},tl={class:"Title"},nl={class:"Description"},rl={class:"SectionHead"},il={class:"Section"},sl=q(()=>l("div",{class:"SectionHead"},"Details:",-1)),al=["innerHTML"],ol=q(()=>l("div",{class:"SectionHead"},"Internes:",-1)),ll=["innerHTML"],ul=q(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),cl={key:2,class:"Details sidebyside"},dl={class:"Title"},hl={class:"Description"},fl=q(()=>l("div",{class:"SectionHead"},"Details:",-1)),ml=["innerHTML"],gl=q(()=>l("div",{class:"SectionHead"},"Internes:",-1)),pl=["innerHTML"],bl=q(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),vl={key:3,class:"Details sidebyside"},wl={class:"Title"},yl={key:0},kl={key:1},Sl={key:2},Dl=q(()=>l("div",{class:"SectionHead"},"Details:",-1)),Pl=["innerHTML"],_l=q(()=>l("div",{class:"SectionHead"},"Internes:",-1)),zl=["innerHTML"],Al=q(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),Fl={class:"paramsHeader"},Cl=["onClick"],El={class:"numbercol"},Ll={class:"effcol"},Wl={key:5,class:"lawList sidebyside"},xl=["onClick","onDragstart","onDrop"],Tl={class:"priocol"},Vl={key:6,class:"eventList sidebyside"},Ol=["onClick"],Il={class:"priocol"},Bl={key:7,class:"yearList sidebyside"},Ml=q(()=>l("a",{class:"clickable"},"Presets",-1)),$l={class:"dropdown"},Nl=["onClick"],Gl=U("\xA0 "),Ul=["onClick","onDragstart","onDrop"],Kl=["onClick","onContextmenu","onDragstart","onDrop"];function Jl(e,t,n,r,i,a){var g,S,p;const u=re("PeekChart"),f=re("Citation"),c=re("Menu");return h(),m("details",Ho,[l("summary",{onClick:t[0]||(t[0]=d=>e.unselect()),class:"clickable"},"Peek"),l("div",jo,[l("a",{onClick:t[1]||(t[1]=d=>e.showCharts=!e.showCharts),class:$(["clickable",e.showCharts?"selected":""])},"Charts",2),Zo,l("a",{onClick:t[2]||(t[2]=d=>e.showDetails=!e.showDetails),class:$(["clickable",e.showDetails?"selected":""])},"Details",2),Ro,l("a",{onClick:t[3]||(t[3]=d=>e.showParams=!e.showParams),class:$(["clickable",e.showParams?"selected":""])},"Params",2),Yo,l("a",{onClick:t[4]||(t[4]=d=>e.toggleLawList()),class:$(["clickable",e.showLaws?"selected":""])},"Laws",2),Qo,l("a",{onClick:t[5]||(t[5]=d=>e.toggleEventList()),class:$(["clickable",e.showEvents?"selected":""])},"Events",2),qo,l("a",{onClick:t[6]||(t[6]=d=>e.showYears=!e.showYears),class:$(["clickable",e.showYears?"selected":""])},"Years",2),Xo]),e.showCharts?(h(),m("div",{key:0,class:$(["Details sidebyside",{lawSelected:e.lawSelected!=null}])},[e.paramSelected?(h(),ee(u,{key:0,selectedYear:e.yearSelected,"onUpdate:selectedYear":t[7]||(t[7]=d=>e.yearSelected=d),chartData:e.chartData,paramId:e.paramSelected},null,8,["selectedYear","chartData","paramId"])):A("",!0),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[8]||(t[8]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"co2emissions"},null,8,["selectedYear","chartData"]),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[9]||(t[9]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"popularity"},null,8,["selectedYear","chartData"]),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[10]||(t[10]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"stateDebt"},null,8,["selectedYear","chartData"]),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[11]||(t[11]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"co2budget"},null,8,["selectedYear","chartData"])],2)):A("",!0),e.lastSelected==="law"&&e.selectedLaw&&e.showDetails?(h(),m("div",el,[l("div",tl,k(e.selectedLaw.title),1),l("div",nl,k(e.selectedLaw.description),1),l("div",rl,"Aufwand: "+k((g=e.lawEffort)==null?void 0:g.time.toMonthsString()),1),l("div",il,k((S=e.lawEffort)==null?void 0:S.text),1),sl,l("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,al),ol,l("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,ll),ul,(h(!0),m(J,null,R(e.citationsOfLaw,(d,z)=>(h(),ee(f,{class:"Section",key:z,citation:d},null,8,["citation"]))),128))])):A("",!0),e.lastSelected==="event"&&e.selectedEvent&&e.showDetails?(h(),m("div",cl,[l("div",dl,k(e.selectedEvent.title),1),l("div",hl,k(e.selectedEvent.description),1),fl,l("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,ml),gl,l("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,pl),bl,(h(!0),m(J,null,R((p=e.selectedEvent)==null?void 0:p.citations,(d,z)=>(h(),ee(f,{class:"Section",key:z,citation:d},null,8,["citation"]))),128))])):A("",!0),e.lastSelected==="param"&&e.selectedParam&&e.showDetails?(h(),m("div",vl,[l("div",wl,k(e.paramSelected)+" ["+k(e.selectedParam.unit)+"]",1),e.wParam?(h(),m("div",yl,"Initial value: "+k(e.wParam.initialValue)+" "+k(e.wParam.unit),1)):A("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(h(),m("div",kl," Should initially be: "+k(e.cParam.shouldInitiallyBe)+" "+k(e.cParam.unit),1)):A("",!0),e.cParam?(h(),m("div",Sl," Calculation: "+k(e.cParam.valueGetter),1)):A("",!0),Dl,l("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,Pl),_l,l("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,zl),Al,(h(!0),m(J,null,R(e.selectedParam.citations,(d,z)=>(h(),ee(f,{class:"Section",key:z,citation:d},null,8,["citation"]))),128))])):A("",!0),e.showParams?(h(),m("div",{key:4,class:$(["paramsList sidebyside",{lawSelected:e.lawSelected!=null}])},[l("div",Fl,[l("div",null,"Start of law: "+k(e.startYearOfSelected),1),l("div",null,"Current year: "+k(e.currentYear),1)]),l("table",null,[(h(!0),m(J,null,R(e.sortedValues,d=>(h(),m("tr",{key:d.id,class:$({clickable:!0,selected:e.paramSelected===d.id,[d.class]:!0}),onClick:z=>e.selectParam(d.id)},[l("td",null,k(d.id),1),l("td",El,k(d.value),1),l("td",Ll,k(d.effect),1),l("td",null,k(d.unit),1)],10,Cl))),128))])],2)):A("",!0),e.showLaws?(h(),m("div",Wl,[l("table",null,[l("tr",null,[l("th",{onClick:t[12]||(t[12]=d=>e.sortLaws("state")),class:"clickable"},"S"),l("th",{onClick:t[13]||(t[13]=d=>e.sortLaws("id")),class:"clickable"},"ID"),l("th",{onClick:t[14]||(t[14]=d=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(h(!0),m(J,null,R(e.sortedLaws,d=>(h(),m("tr",{key:d.id,class:$({clickable:!0,selected:e.lawSelected===d.id,[d.state]:!0}),onClick:z=>e.selectLaw(d.id),draggable:"true",onDragstart:z=>e.dragStart(z,{lawId:d.id}),onDrop:Q(z=>e.onDrop(z,{lawId:d.id}),["prevent"]),onDragover:t[15]||(t[15]=Q(()=>{},["prevent"])),onDragenter:t[16]||(t[16]=Q(()=>{},["prevent"]))},[l("td",null,k(d.state),1),l("td",null,k(d.id),1),l("td",Tl,k(d.priority),1)],42,xl))),128))])])):A("",!0),e.showEvents?(h(),m("div",Vl,[l("table",null,[l("tr",null,[l("th",{onClick:t[17]||(t[17]=d=>e.sortEvents("id")),class:"clickable"},"ID"),l("th",{onClick:t[18]||(t[18]=d=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(h(!0),m(J,null,R(e.sortedEvents,d=>(h(),m("tr",{key:d.id,class:$({clickable:!0,selected:e.eventSelected===d.id}),onClick:z=>e.selectEvent(d.id)},[l("td",null,k(d.id),1),l("td",Il,k(d.probability),1)],10,Ol))),128))])])):A("",!0),e.showYears?(h(),m("div",Bl,[l("div",null,[I(c,null,{default:we(()=>[Ml,l("ul",$l,[(h(!0),m(J,null,R(e.presets,d=>(h(),m("li",{key:d.name,class:"clickable",onClick:z=>e.loadPreset(d)},k(d.name),9,Nl))),128))])]),_:1}),Gl,l("a",{class:$(["clickable",e.compareActive?"selected":""]),onClick:t[19]||(t[19]=d=>e.toggleCompare())},"Compare",2)]),l("table",null,[(h(!0),m(J,null,R(e.gameYears,d=>(h(),m(J,{key:d},[l("tr",{class:$({clickable:!0,selected:e.yearSelected===d}),onClick:z=>e.selectYear(d),draggable:"true",onDragstart:z=>e.dragStart(z,{year:d}),onDrop:Q(z=>e.onDrop(z,{year:d}),["prevent"]),onDragover:t[20]||(t[20]=Q(()=>{},["prevent"])),onDragenter:t[21]||(t[21]=Q(()=>{},["prevent"]))},[l("th",null,k(d),1)],42,Ul),(h(!0),m(J,null,R(e.lawsInYear(d),({lawId:z,cls:T})=>(h(),m("tr",{key:z,class:$({clickable:!0,selected:e.lawSelected===z,[T]:!0}),onClick:D=>e.selectLaw(z),onContextmenu:Q(D=>e.rightClick(z,d),["right","prevent"]),draggable:"true",onDragstart:D=>e.dragStart(D,{lawId:z}),onDrop:Q(D=>e.onDrop(D,{year:d}),["prevent"]),onDragover:t[22]||(t[22]=Q(()=>{},["prevent"])),onDragenter:t[23]||(t[23]=Q(()=>{},["prevent"]))},[l("td",null,k(z),1)],42,Kl))),128))],64))),128))])])):A("",!0)])}var Hl=M(Jo,[["render",Jl],["__scopeId","data-v-85b0da02"]]);const jl=B({components:{PeekInside:Hl},setup(){return{store:oe(),devMode:localStorage.getItem("devMode")==="true"}},methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,n=Math.min(e/800,t/1e3),r=(t-1e3*n)/2;document.documentElement.style.setProperty("--scale",`${n}`),document.documentElement.style.setProperty("--translateX",`${r}px`)}},mounted(){setTimeout(this.updateStyle,0),window.addEventListener("resize",this.updateStyle)}}),Zl={class:"perspective"},Rl={class:"peek"};function Yl(e,t,n,r,i,a){const u=re("router-view"),f=re("PeekInside");return h(),m(J,null,[l("div",Zl,[I(u)]),l("div",Rl,[e.devMode?(h(),ee(f,{key:0})):A("",!0)])],64)}var Ql=M(jl,[["render",Yl]]);const Ke=rn(Ql);Ke.use(uo,Bt);Ke.use(It);Ke.mount("#app");
