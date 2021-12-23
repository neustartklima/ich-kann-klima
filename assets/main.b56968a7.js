var Nt=Object.defineProperty,Gt=Object.defineProperties;var Ut=Object.getOwnPropertyDescriptors;var je=Object.getOwnPropertySymbols;var Kt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable;var Fe=(e,t,n)=>t in e?Nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))Kt.call(t,n)&&Fe(e,n,t[n]);if(je)for(var n of je(t))Jt.call(t,n)&&Fe(e,n,t[n]);return e},G=(e,t)=>Gt(e,Ut(t));var L=(e,t,n)=>(Fe(e,typeof t!="symbol"?t+"":t,n),n);import{D as Ce,a as Ze,s as Re,b as Ht,v as jt,d as M,r as X,c as z,o as h,e as f,f as l,g as A,t as S,n as N,h as Ee,u as C,p as ge,i as fe,F as J,j as R,k as ee,l as I,m as U,q as We,w as re,x as we,y as Zt,z as Rt,A as Qt,B as Yt,C as qt,V as Xt,E as Qe,G as en,H as tn,I as Y,J as nn}from"./vendor.5ac37eb4.js";const rn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};rn();const sn={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};class Le{constructor(t){L(this,"lux");t instanceof Ze?this.lux=t.setLocale("de-DE").setZone("Europe/Berlin"):this.lux=Ze.fromISO(t,{zone:"Europe/Berlin",locale:"de-DE"})}static durationBetween(t,n){return new xe(n.lux.diff(t.lux,["months"]))}plus(t){return new Le(this.lux.plus(t.lux))}getYear(){return this.lux.get("year")}toLocaleString(){return this.lux.toLocaleString(sn)}toMonthString(){return this.lux.toLocaleString({month:"long",year:"numeric"})}toJSON(){return this.lux.toJSON()}}class xe{constructor(t){L(this,"lux");t instanceof Ce?this.lux=t:this.lux=Ce.fromISO(t,{locale:"de-DE"})}toMonthsString(){const t=this.lux.as("months");return t===1?"1 Monat":t+" Monate"}}function ye(e){return new Le(e)}function Ye(e){return new xe(e)}function an(e){return new xe(Ce.fromDurationLike({month:e}))}const le=2021,on="2021-01-01",qe=2050,Xe=Ye("P3M"),ln=Ye("P3M"),et=6,un=.6;function V(e){return e}const pe={newYear:2,timesUp:3,finanzKollaps:4,wahlVerloren:5,hitzehoelle:6};var cn=V({title:"Abstandsregeln f\xFCr Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erh\xF6ht wird. Das f\xFChrte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply(){return[]}});let Te=Re("",{state:!0}),tt=()=>Math.abs(Te());function Ve(e){Te=Re(e.id,{state:e.prngState})}function dn(){return Te.state()}const hn=e=>({time:Xe,text:`Braucht ${Xe.toMonthsString()}.`});function b(e,t="Braucht {months}."){const n=an(e),r=t.replace(/{months}/g,n.toMonthsString());return{time:n,text:r}}function y(e){return e}var mn=y({title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bew\xE4hrt. Wir lassen sie so, wie sie sind.",effort(e){return b(3,"Wie aussitzen: {months}.")},effects(){return[]},priority(e){return tt()}});const gn=new Ht.exports.Converter;function nt(e){return e>0?[...Array(e)].map((t,n)=>n):[]}function rt(e,t){const n=e-t-1;return[...nt(t),Math.max(t,n),...nt(n).reverse()]}function s(e,...t){let n=e.map((i,o)=>i+(t[o]||"")).join("").split(`
`);n[0].length===0&&n.shift();const r=n[0].match(/^(\s+)/);return r&&!n.filter(i=>i.trim()).some(i=>!i.startsWith(r[1]))&&(n=n.map(i=>i.replace(r[1],""))),gn.makeHtml(n.join(`
`))}function Oe(e){return t=>!e(t)}function it(e){return Object.entries(e).map(([t,n])=>G(x({},n),{id:t}))}function st(e,t){const n=e.value-t.value;return r=>{const i=e.result*(r-t.value)/n,o=t.result*(r-e.value)/n;return i-o}}const fn=new Intl.DateTimeFormat("de-DE");class F{constructor(t){L(this,"url");L(this,"title");L(this,"publisher");L(this,"authors");L(this,"date");L(this,"comment");L(this,"internalComment");L(this,"localCopy");L(this,"referringUrl");L(this,"archiveUrl");L(this,"archiveNotPossible");this.url=new URL(t.url),this.title=t.title,this.publisher=t.publisher,this.authors=t.authors,this.date=t.date?new Date(t.date):void 0,this.comment=t.comment,this.internalComment=t.internalComment,this.localCopy=t.localCopy,this.referringUrl=t.referringUrl?new URL(t.referringUrl):void 0,this.archiveUrl=t.archiveUrl?new URL(t.archiveUrl):void 0,this.archiveNotPossible=t.archiveNotPossible}dateString(){const t=this.date;return t?" ("+fn.format(t)+")":""}toString(){const t=this.authors?this.authors+this.dateString():void 0,n=this.title?'"'+this.title+'"':void 0;return[t,n,this.url,this.publisher].filter(r=>r).join(", ")}}function W(e){const t=e.publisher||e.authors,n=t!=null?t+": ":"",r=e.title||e.url.toString(),i=e.url.toString();return`[[${n}${r}](${i})]`}const pn=e=>e.map(t=>t.toString()).join("; "),bn=new F({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),te=new F({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),at=new F({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"}),ot=new F({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineral\xF6lsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),lt=new F({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile f\xFCr wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),ke=new F({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),vn=new F({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schl\xFCsselergebnisse der Studie des Wuppertal Instituts f\xFCr Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${W(ke)}.`});ke.comment=s`Zusammengefasst in ${W(vn)}.`;const H=new F({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahresch\xE4tzung der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),wn=new F({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),Se=new F({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enth\xE4lt CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] f\xFCr mehrere Verkehrsmittel"}),De=new F({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),ut=new F({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Stra\xDFeng\xFCterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),ie=new F({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enth\xE4lt Personenkilometer-Jahreswerte f\xFCr mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),ct=new F({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung \xD6PNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),Ie=new F({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),yn=new F({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new F({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren f\xFCr Fernw\xE4rme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const dt=new F({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),kn=new F({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),ht=new F({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle w\xE4re besser."}),Sn=new F({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bev\xF6lkerung nach Nationalit\xE4t und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),Dn=new F({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur f\xFCr Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),Pn=new F({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische \xC4mter des Bundes und der L\xE4nder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new F({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const mt=new F({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgem\xE4\xDF - Interview mit Prof. Stefan G\xF6ssling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""}),_n=new F({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),gt=new F({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),zn=new F({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),ft=new F({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten f\xFCr die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class pt{constructor(t){L(this,"unit");L(this,"citations");L(this,"details");L(this,"internals");this.unit=t.unit,this.citations=t.citations?t.citations:[],this.details=t.details?t.details:"",this.internals=t.internals?t.internals:""}citationsDesc(){return pn(this.citations)}}const An={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class P extends pt{constructor(t){super(t);L(this,"writable",!0);L(this,"initialValue");L(this,"applyBounds");this.initialValue=t.initialValue,this.applyBounds=t.applyBounds||An[t.unit]}}class Z extends pt{constructor(t){super(t);L(this,"writable",!1);L(this,"valueGetter");L(this,"shouldInitiallyBe");this.valueGetter=t.valueGetter,this.shouldInitiallyBe=t.shouldInitiallyBe}}const Fn=new P({unit:"MioTons",initialValue:6700,citations:[bn],details:s`

  `,internals:s`

  `}),Cn=new P({unit:"MioTons",initialValue:186.793,citations:[H],details:s`

  `,internals:s`

  `}),En=new Z({unit:"MioTons",valueGetter(e){return e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4},shouldInitiallyBe:159.696,citations:[H,ut],details:s`

  `,internals:s`
    ${W(H)}: 159.696 as MioTons

    ${W(ut)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Wn=new Z({unit:"MioTons",valueGetter(e){return e.co2emissionsStreetVehicles+e.publicLocalCapacity*65/1e6+e.publicNationalCapacity*32/1e6+e.airDomesticUsage*222/1e6+1.641},citations:[Se,H],details:s`

  `,internals:s`
    ${W(Se)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${W(H)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${W(H)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${W(H)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),Ln=new Z({unit:"MioTons",valueGetter(e){return e.buildingsSourceBio*0+e.buildingsSourceGas*.247+e.buildingsSourceOil*.318+e.buildingsSourceTele*.16},citations:[H,Ie],details:s`

  `,internals:s`
    TODO: #91 Gibt es hier bessere Quellen?

    ${W(Ie)}: 247g CO2 pro kWh Erdgas.

    ${W(Ie)}: 318g CO2 pro kWh Erdöl.

    ${W(yn)}: 160g CO2 pro kWh Fernwärme.

    ${W(H)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),xn=new P({unit:"MioTons",initialValue:67.936,citations:[H],details:s`

  `,internals:s`

  `}),Tn=new P({unit:"MioTons",initialValue:9.243,citations:[H],details:s`

  `,internals:s`

  `}),Vn=new Z({unit:"MioTons",valueGetter(e){return e.electricityGas*.399+e.electricitySolar*.058+e.electricityWind*.005+e.electricityWater*.02+e.electricityHardCoal*.835+e.electricityBrownCoal*1.137+e.electricityBiomass*.03+e.electricityNuclear*.005},citations:[dt,H],details:s`

  `,internals:s`
    ${W(dt)}:
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
    - Diskrepanz zu ${W(kn)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${W(H)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),On=new Z({unit:"MioTons",valueGetter(e){return e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers},details:s`

  `,internals:s`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${W(H)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[wn]}),In=new P({unit:"TWh",initialValue:480.54,citations:[te],details:s`

  `,internals:s`

  `}),Bn=new P({unit:"Percent",initialValue:50,citations:[],details:s`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:s`

  `}),Mn=new P({unit:"TWh",initialValue:51.42,citations:[te],details:s`

  `,internals:s`

  `}),$n=new P({unit:"TWh",initialValue:131.85,citations:[te],details:s`

  `,internals:s`

  `}),Nn=new P({unit:"TWh",initialValue:6,citations:[te],details:s`

  `,internals:s`

  `}),Gn=new P({unit:"Percent",initialValue:100,citations:[zn],details:s`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),Un=new P({unit:"TWh",initialValue:14.99,citations:[te],details:s`

  `,internals:s`

  `}),Kn=new P({unit:"TWh",initialValue:43.19,citations:[te],details:s`

  `,internals:s`

  `}),Jn=new P({unit:"TWh",initialValue:60.91,citations:[te],details:s`

  `,internals:s`

  `}),Hn=new P({unit:"TWh",initialValue:35.46,citations:[te],details:s`

  `,internals:s`

  `}),jn=new P({unit:"TWh",initialValue:82.13,citations:[te],details:s`

  `,internals:s`

  `}),Zn=new Z({unit:"TWh",valueGetter(e){return e.electricityHardCoal+e.electricityBrownCoal},details:s`

  `,internals:s`

  `}),Rn=new Z({unit:"TWh",valueGetter(e){return e.electricityDemand-e.electricitySolar-e.electricityWind-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear},details:s`

  `,internals:s`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),Qn=new P({unit:"GramPerPsgrKm",initialValue:160,citations:[Se],details:s`

  `,internals:s`
    ${W(Se)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),Yn=new P({unit:"MioPsgrKm",initialValue:917e3,citations:[ie],details:s`

  `,internals:s`

  `}),qn=new P({unit:"Percent",initialValue:.5,citations:[ht],details:s`

  `,internals:s`
    Die verschiedenen Zahlen in ${W(ht)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),Xn=new P({unit:"MioPsgrKm",initialValue:112600,citations:[ie],details:s`

  `,internals:s`

  `}),er=new P({unit:"MioPsgrKm",initialValue:112600,citations:[ie],details:s`

  `,internals:s`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),tr=new P({unit:"MioPsgrKm",initialValue:67300,citations:[ie],details:s`

  `,internals:s`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),nr=new P({unit:"MioPsgrKm",initialValue:67300,citations:[ie],details:s`

  `,internals:s`
Siehe \`publicLocalCapacity\`.
  `}),rr=new P({unit:"MioPsgrKm",initialValue:10100,citations:[ie],details:s`

  `,internals:s`

  `}),ir=new P({unit:"MioPsgrKm",initialValue:61700,citations:[ie],details:s`

  `,internals:s`

  `}),sr=new Z({unit:"MioPsgrKm",valueGetter(e){return e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage},shouldInitiallyBe:1168700,citations:[ie],details:s`

  `,internals:s`

  `}),ar=new P({unit:"TWh",initialValue:226,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),or=new P({unit:"TWh",initialValue:544,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),lr=new Z({unit:"TWh",valueGetter(e){return e.buildingsPrivateDemand+e.buildingsIndustryDemand},shouldInitiallyBe:770,citations:[],details:s`

  `,internals:s`
    TODO: #78 Quelle ${W(ft)} gibt diese Zahlen nicht her.
  `}),ur=new P({unit:"TWh",initialValue:130,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),cr=new P({unit:"TWh",initialValue:219,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),dr=new P({unit:"TWh",initialValue:58,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),hr=new Z({unit:"TWh",valueGetter(e){return e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele)},citations:[],details:s`

  `,internals:s`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${W(ft)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),mr=new P({unit:"Percent",initialValue:50,citations:[],details:s`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:s`

  `}),gr=new P({unit:"TsdPeople",initialValue:83155.031,citations:[Sn],details:s`

  `,internals:s`
Anfangswert ist der Stand 31.12.2020.
  `}),fr=new P({unit:"TsdPeople",initialValue:2695,citations:[Dn],details:s`

  `,internals:s`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),pr=new P({unit:"MrdEuro",initialValue:3332,citations:[Pn],details:s`

  `,internals:s`
Anfangswert ist das BIP 2020.
  `}),br=new P({unit:"MrdEuro",initialValue:1899,citations:[],details:s`

  `,internals:s`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),Q={co2budget:Fn,co2emissionsIndustry:Cn,co2emissionsStreetVehicles:En,co2emissionsMobility:Wn,co2emissionsAgriculture:xn,co2emissionsBuildings:Ln,co2emissionsOthers:Tn,co2emissionsEnergy:Vn,co2emissions:On,electricityDemand:In,electricityGridQuality:Bn,electricitySolar:Mn,electricityWind:$n,electricityWindOnshoreMaxNew:Nn,electricityWindEfficiency:Gn,electricityWater:Un,electricityBiomass:Kn,electricityNuclear:Jn,electricityHardCoal:Hn,electricityBrownCoal:jn,electricityCoal:Zn,electricityGas:Rn,carEmissionFactor:Qn,carUsage:Yn,carRenewablePercentage:qn,publicLocalUsage:Xn,publicLocalCapacity:er,publicNationalUsage:tr,publicNationalCapacity:nr,airDomesticUsage:rr,airIntlUsage:ir,passengerTransportUsage:sr,buildingsIndustryDemand:ar,buildingsPrivateDemand:or,buildingsDemand:lr,buildingsSourceBio:ur,buildingsSourceOil:cr,buildingsSourceTele:dr,buildingsSourceGas:hr,popularity:mr,numberOfCitizens:gr,unemployment:fr,gdp:pr,stateDebt:br},vr=Object.entries(Q).filter(e=>e[1]instanceof P).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),bt=Object.entries(Q).filter(e=>e[1]instanceof Z).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),vt=Object.keys(Q);class wt extends P{constructor(t,n){super(t);L(this,"name");this.name=n}}const wr=Object.entries(vr).map(e=>new wt(e[1],e[0]));class yt extends Z{constructor(t,n){super(t);L(this,"name");this.name=n}}Object.entries(bt).map(e=>new yt(e[1],e[0]));const kt=Object.entries(Q).map(e=>e[1]instanceof P?new wt(e[1],e[0]):new yt(e[1],e[0])),ue=wr.reduce((e,t)=>(e[t.name]=t.initialValue,e),{}),St=kt.reduce((e,t)=>(e[t.name]=0,e),{});function ce(e){const t=x({},e);return Object.entries(bt).forEach(n=>Object.defineProperty(t,n[0],{enumerable:!0,get:()=>n[1].valueGetter(t)})),t}function yr(e){return x({},e)}function se(e,t){return{type:"dispatch",condition:!0,if(n){return this.condition=n,this},apply(n){this.condition&&n.dispatch(e,t)}}}function a(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(t){return this.percent=t,this},byValue(t){return this.value=t,this},setValue(t){return this.absolute=t,this},if(t){return this.condition=t,this},getOldNew(t){const n=this.name,r=t[n];if(!this.condition)return{oldVal:r,newVal:r};const i=Q[n],o=this.absolute!=null?this.absolute:r+(this.value||r*this.percent/100),u=i.applyBounds(o);return{oldVal:r,newVal:u}},getChange(t){if(!this.condition)return 0;const{oldVal:n,newVal:r}=this.getOldNew(t);return r-n},apply(t){if(this.condition){const{newVal:n}=this.getOldNew(t.values);t.values[this.name]=n}return this}}}function O(e,t){if(Q[e].unit!=Q[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(n){return this.percent=n,this},byValue(n){return this.value=n,this},if(n){return this.condition=n,this},getEffect(n){const r=n[this.to],i=n[this.from];if(!this.condition)return{oldTo:r,oldFrom:i,newTo:r,newFrom:i};const o=Q[this.to],u=Q[this.from],m=this.value||r*this.percent/100,c=o.applyBounds(r+m)-r,g=-u.applyBounds(i-c)+i,k=r+g,p=i-g;return{oldTo:r,newTo:k,oldFrom:i,newFrom:p}},apply(n){if(this.condition){const{newTo:r,newFrom:i}=this.getEffect(n.values);n.values[this.to]=r,n.values[this.from]=i}return this}}}function Be(e,t){t.filter(n=>n.condition).forEach(n=>n.apply(e))}var kr=y({title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effort(e){return b(11)},effects(e,t,n){const r=n-t,i=r<18?4.3/18:0,o=2.5,u=20,m=60,c=(10-r)/55,g=Math.max((u+m/2)*c,0);return[a("electricityHardCoal").setValue(0),a("electricityBrownCoal").setValue(0),a("stateDebt").byValue(-i+o),a("unemployment").byValue(g)]},priority(e){return e.values.electricityCoal/e.values.electricityDemand<=.1?0:v(1e4,0,e.values.unemployment)},citations:[],details:s`

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
  `}),Sr=y({title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effort(e){return e.values.popularity>=50?b(6,"Normal dauert das 12 Monate, aber bei Deiner Beliebtheit nur {months}."):b(12)},effects(){return[a("stateDebt").byValue(-37),a("electricityHardCoal").byPercent(-10),a("electricityBrownCoal").byPercent(-5),a("electricityWind").byValue(5),a("electricitySolar").byValue(3),a("electricityWater").byValue(.5)]},priority(e){return v(qe,le,e.currentYear)}});const Dt=ce(ue).electricityGas;var Dr=y({title:"Kernenergienutzung verl\xE4ngern",description:"Kernkraftwerke l\xE4nger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effort(e){return b(8)},effects(){return[a("electricityNuclear").setValue(104.3),a("stateDebt").byValue(-2.5),a("popularity").byValue(-4)]},priority(e){return v(Dt,1.1*Dt,e.values.electricityGas)}}),Pr=y({title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,n){const i={2021:60.45,2022:30.21}[n]||0;return[a("electricityNuclear").setValue(i)]},priority(e){return 0}}),_r=y({title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren f\xFCr den Ausbau des Stromnetzes",effort(e){return b(2)},effects(e,t,n){return[a("popularity").byValue(-3).if(t===n),a("electricityGridQuality").byValue(1)]},priority(e){return v(70,27,ne(e))},citations:[],details:s`

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
  `}),zr=y({title:"Netzausbau f\xF6rdern",description:"Ausbau des Stromnetzes mit Steuermitteln f\xF6rdern",effort(e){return b(3)},effects(e,t,n){return[a("popularity").byValue(-1).if(t===n),a("stateDebt").byValue(2),a("electricityGridQuality").byValue(5).if(w(e,"NetzausbauErleichtern"))]},priority(e){return v(70,27,ne(e))},citations:[],details:s`

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
  `}),Ar=y({title:"Stromspeicherung erleichtern",description:"B\xFCrokratische H\xFCrden f\xFCr den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effort(e){return b(3)},effects(e,t,n){return[a("electricityGridQuality").byValue(.2)]},priority(e){const t=e.values;return v(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Fr=y({title:"Stromspeicherung f\xF6rdern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln f\xF6rdern. 2 Mrd \u20AC pro Jahr.",effort(e){return b(7)},effects(e,t,n){const r=w(e,"StromspeicherungErleichtern")?0:5,i=n>=t+r,o=w(e,"ForschungUndEntwicklungStromspeicherung",3);return[a("stateDebt").byValue(1),a("popularity").byValue(.2).if(i),a("stateDebt").byValue(1).if(i),a("electricityGridQuality").byValue(2).if(i),a("electricityGridQuality").byValue(2).if(o),a("electricityGridQuality").byValue(2).if(i&&o)]},priority(e){const t=e.values;return v(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Cr=y({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit verg\xFCnstigten Krediten gef\xF6rdert.",effort(e){return b(3)},effects(e,t,n){const r=.5,i=n-t>2;return[a("stateDebt").byValue(r),a("buildingsSourceBio").byPercent(-1).if(i),a("buildingsSourceOil").byPercent(-1).if(i),a("buildingsSourceTele").byPercent(-1).if(i),a("buildingsPrivateDemand").byPercent(-1).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return v(15,40,t)}}),Er=y({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gef\xF6rdert.",effort(e){return b(5)},effects(e,t,n){const r=1,i=n-t>2;return[a("stateDebt").byValue(r),a("buildingsSourceBio").byPercent(-2).if(i),a("buildingsSourceOil").byPercent(-2).if(i),a("buildingsSourceTele").byPercent(-2).if(i),a("buildingsPrivateDemand").byPercent(-2).if(i),a("popularity").byValue(5).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return v(15,40,t)}}),Wr=y({title:"D\xE4mmung von Wohngeb\xE4uden sehr stark f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungspl\xE4tze im Handwerk geschaffen durch einen Zuschuss von 500\u20AC pro Monat, damit der zu erwartende Bauboom bew\xE4ltigt werden kann.",effort(e){return b(7)},effects(e,t,n){const r=3,i=n-t,o=i>=2;return[a("stateDebt").byValue(r),a("buildingsSourceBio").byPercent(-4).if(o),a("buildingsSourceOil").byPercent(-4).if(o),a("buildingsSourceTele").byPercent(-4).if(o),a("buildingsPrivateDemand").byPercent(-4).if(o),a("popularity").byValue(10).if(i===1),a("popularity").byValue(5).if(o)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return v(15,40,t)},citations:[],details:s`

  `,internals:s`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `}),Lr=y({title:"D\xE4mmung von Wohngeb\xE4uden abschaffen",description:"Wir geben den B\xFCrgern die Freiheit zur\xFCck, selbst zu entscheiden, ob sie ihr Haus d\xE4mmen wollen und lassen die F\xF6rderung auslaufen",effort(e){return b(3)},effects(){return[a("stateDebt").byValue(-.5),a("buildingsSourceBio").byPercent(-.5),a("buildingsSourceOil").byPercent(-.5),a("buildingsSourceTele").byPercent(-.5),a("buildingsPrivateDemand").byPercent(-.5)]},priority(e){const t=_i(e.acceptedLaws,/^DaemmungAltbau/);if(!t||t==="DaemmungAltbauAbschaffen")return 0;const n=e.values.co2emissionsBuildings/e.values.co2emissions*100;return v(15,40,n)}}),xr=y({title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit st\xE4rker bezuschusst.",effort(e){return b(5,"Komplexe Verhandlungen mit den Bundesl\xE4ndern dauern {months}.")},effects(e,t,n){const r=e.values.publicLocalCapacity/e.values.publicLocalUsage*100,i=n-t;return[a("stateDebt").byValue(3),a("publicLocalCapacity").byPercent(1),O("publicLocalUsage","carUsage").byPercent(1).if(r>=105),a("popularity").byValue(2).if(i>=5)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return v(150,80,t)},citations:[ct],details:s`

  `,internals:s`
    # Happy Path 18

    # Folgen

    - Der Staatshaushalt wird jährlich mit 3 Mrd € mehr belastet. (${W(ct)})
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
  `}),Tr=y({title:"Nahverkehr Modernisieren",description:"Anschaffung Moderner, bequemer, emissionsfreier Fahrzeuge f\xFCr den Nahverkehr wird gef\xF6rdert.",effort(e){return b(4)},effects(e,t,n){return[a("stateDebt").byValue(3),a("publicLocalCapacity").byPercent(1),O("publicLocalUsage","carUsage").byPercent(1),a("popularity").byValue(3)]},priority(e){if(!w(e,"FernverkehrModernisieren"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,24,t)},citations:[De],details:s`

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
  `}),Vr=y({title:"F\xF6rderung f\xFCr Tierhaltung abschaffen",description:"Subventionen f\xFCr Tierhaltung werden ersatzlos gestrichen",effort(e){return b(2)},effects(e,t,n){return[a("stateDebt").byValue(-10),a("co2emissionsAgriculture").byValue(-10).if(t===n),a("popularity").byValue(-20).if(t===n)]},priority(e){return v(1e4,0,e.values.unemployment)}}),Or=y({title:"Nahverkehr Kostenlos",description:"Die Kosten f\xFCr den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr ben\xF6tigt werden.",effort(e){return b(7,"Die Haushaltsverhandlungen dauern {months}.")},effects(e,t,n){const r=t===n?10:1;return[a("stateDebt").byValue(10),O("publicLocalUsage","carUsage").byPercent(r),a("popularity").byValue(10).if(t===n),a("unemployment").byValue(20).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return v(90,120,t)},citations:[De],details:s`

  `,internals:s`
    # Happy Path 19

    # Folgen

    - Der Staatshaushalt wird jährlich mit 10 Mrd € stärker belastet.
        - 13.3 Mrd € Ticketeinnahmen pro Jahr (${W(De)})
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
  `}),Ir=y({title:"Autos in Innenst\xE4dten verbieten",description:"Die Innenst\xE4dte der gro\xDFen St\xE4dte werden zu Autofreien Zonen erkl\xE4rt und begr\xFCnt, sowie Fahrrad und Fu\xDFg\xE4ngerzonen eingerichtet.",effort(e){return b(12)},effects(e,t,n){var r=-2;return e.values.publicLocalCapacity>e.values.publicLocalUsage*1.2&&(r=-1,t+2<n&&(r=2)),[a("popularity").byValue(r),O("publicLocalUsage","carUsage").byPercent(10).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return v(90,120,t)}}),Br=y({title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des \xF6ffentlichen Fernverkehrs wird bundesweit st\xE4rker Bezuschusst und Vorangetrieben",effort(e){return b(12)},effects(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return[a("stateDebt").byValue(6),a("publicNationalCapacity").byPercent(1),O("publicNationalUsage","carUsage").byPercent(1).if(t>=105),O("publicNationalUsage","carUsage").byPercent(.5).if(t>=105),a("popularity").byValue(2).if(t>=105)]},priority(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return v(150,80,t)},citations:[],details:s`

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
  `}),Mr=y({title:"Fernverkehr Modernisieren",description:"Moderne, bequeme und weniger anf\xE4llige Z\xFCge werden f\xFCr den Fernverkehr angeschafft.",effort(e){return b(4)},effects(e,t,n){return[a("stateDebt").byValue(3),a("publicNationalCapacity").byPercent(1),O("publicNationalUsage","carUsage").byPercent(1),a("popularity").byValue(3)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,24,t)},citations:[],details:s`

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
  `}),$r=y({title:"Wasserstofftechnologie f\xF6rdern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return b(1)},effects(e,t,n){const r=n<t+5,i=n>=t+5;return[a("stateDebt").byValue(2).if(r),a("carRenewablePercentage").byValue(1).if(i)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return v(40,90,r)},citations:[],details:s`

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
  `}),Nr=y({title:"Wasserstoffmobilit\xE4t f\xF6rdern",description:"Wasserstoffbasierte Fahrzeuge werden gef\xF6rdert.",effort(e){return b(2)},effects(e,t,n){return w(e,"WasserstofftechnologieFoerdern")?[a("stateDebt").byValue(3),a("carRenewablePercentage").byValue(1),a("popularity").byValue(1).if(t===n)]:[]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,26,t)},citations:[],details:s`

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
  `}),Gr=y({title:"Abschaffung der Mineral\xF6lsteuer",description:"Die Steuer auf s\xE4mtliche erd\xF6lbasierten Treibstoffe wird abgeschafft.",effort(e){const t=Math.ceil(e.values.co2budget/e.values.co2emissions);return t>=15?b(2,`Die derzeitigen CO2 Emissionen w\xFCrden das Budget
        in ${t} Jahren verbrauchen.
        Nicht schlecht! Bei der Stimmung bekommst Dus in {months}n durch.`):b(9,"Nicht beliebt! Sowas dauert {months}.")},effects(e,t,n){return[a("stateDebt").byValue(41),a("popularity").byValue(5).if(t===n),a("popularity").byValue(-3).if(t<n),O("publicLocalUsage","carUsage").byPercent(-20).if(t===n),O("publicNationalUsage","carUsage").byPercent(-20).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return v(60,100,r)},citations:[ot],details:"",internals:s`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${W(ot)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `}),Ur=y({title:"Ausbau von Stra\xDFen",description:"Autobahnen und Stra\xDFen werden intensiver ausgebaut.",effort(e){return b(9)},effects(e){return[a("stateDebt").byValue(5),a("popularity").byValue(.5),O("publicLocalUsage","carUsage").byPercent(-1),O("publicNationalUsage","carUsage").byPercent(-1)]},priority(e){const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(60,100,n)}}),Kr=y({title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effort(e){return b(6)},effects(e,t,n){return[a("stateDebt").byValue(-7.35),a("popularity").byValue(-1).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return v(10,100,r)}}),Jr=y({title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen f\xFCr Dienstwagen werden abgeschafft.",effort(e){return b(6)},effects(e,t,n){return[a("stateDebt").byValue(-18),a("popularity").byValue(-1).if(t===n),O("carUsage","publicLocalUsage").byPercent(-.05)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return v(50,100,r)},citations:[lt,mt],details:s`

  `,internals:s`
    # Happy Path 20

    Zunächst sollte Nah- und Fernverkehr attraktiver gemacht werden.
    TODO: Folgen sollten davon abhängen, ob es attraktive Alternativen gibt.

    # Folgen

    - Steuermehreinnahmen: 18 mrd€ / Jahr (${W(lt)})
    - -0.05% Fahleistung pro Jahr (Anreiz für Auto fällt weg Gebrauchte Wagen werden teuerer).
        - ${W(mt)} sagt es gibt keine echte Schätzung dafür.
    - Entsprechend mehr Nahverkehrnutzung
    - Zufriedenheit sinkt einmalig um 1%

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 50%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `}),Hr=y({title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return b(3)},effects(e){const t=a("carEmissionFactor").setValue(157.9),n=t.getChange(e.values);return[a("popularity").byValue(2).if(n<0),t]},priority(e){if(w(e,"Tempolimit100AufAutobahnen")||w(e,"Tempolimit120AufAutobahnen")||w(e,"TempolimitAufAutobahnenAussitzen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(10,100,n)}}),jr=y({title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return b(4)},effects(e){const t=a("carEmissionFactor").setValue(157.1),n=t.getChange(e.values);return[a("popularity").byValue(2).if(n<0),t]},priority(e){if(!w(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(10,100,n)}}),Zr=y({title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return b(5)},effects(e){const t=a("carEmissionFactor").setValue(154.1),n=t.getChange(e.values);return[a("popularity").byValue(-1).if(n<0),t]},priority(e){if(!w(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(10,100,n)}}),Rr=y({title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das k\xF6nnte zwar Strafen oder gar Zwangsma\xDFnahmen bewirken, aber das Risiko der gef\xE4hrdeten Wiederwahl ist zu gro\xDF.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return b(3,"Wie aussitzen: {months}.")},effects(){return[a("stateDebt").byValue(-10),a("popularity").byValue(-2)]},priority(e){if(w(e,"Tempolimit100AufAutobahnen")||w(e,"Tempolimit120AufAutobahnen")||w(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(10,100,n)}}),Qr=y({title:"Elektromobilit\xE4t F\xF6rdern",description:"H\xF6here Kaufpr\xE4mien, Steuerbefreiung, g\xFCnstiges Laden f\xFCr E-Autos.",effort(e){return b(2)},effects(e,t,n){return w(e,"LadeinfrastrukturAusbauen")?[a("stateDebt").byValue(5),a("carRenewablePercentage").byValue(1),a("popularity").byValue(4).if(t===n)]:[]},priority(e){if(!w(e,"LadeinfrastrukturAusbauen"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,25,t)},citations:[],details:s`

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
  `}),Yr=y({title:"Ladeinfrastruktur ausbauen",description:"Ausbau der Ladeinfrastruktur wird mit Steuermitteln stark gef\xF6rdert.",effort(e){return b(4)},effects(e,t,n){return[a("stateDebt").byValue(5),a("carRenewablePercentage").byValue(1),a("popularity").byValue(2).if(t===n)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,25,t)},citations:[De],details:s`

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
  `}),qr=y({title:"Windkraft vereinfachen",description:"Genehmigungen f\xFCr Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effort(e){return b(4,"Die Bundesl\xE4nder m\xFCssen mit ins Boot geholt werden. Das dauert {months}.")},effects(e,t,n){return[]},priority(e){return v(80,27,ne(e))},citations:[],details:s`

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
  `}),Xr=y({title:"Abstandsregeln f\xFCr Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem \xFCber Abst\xE4nde zwischen den Windkraftanlagen und Wohngeb\xE4uden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return b(3,"Wie aussitzen: {months}.")},effects(e,t,n){const r=w(e,"WindkraftVereinfachen")?0:5;return[a("electricityWindOnshoreMaxNew").setValue(6).if(n>=t+r)]},priority(e){return w(e,"AbstandsregelnFuerWindkraftLockern")?v(30,100,ne(e)):w(e,"AbstandsregelnFuerWindkraftVerschaerfen")?v(70,27,ne(e)):0}}),ei=y({title:"Abstandsregeln f\xFCr Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln f\xFCr Windkraftanlagen sowie Bauerlaubniss in W\xE4ldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return b(6,"Das schaffst Du in {months}n.")},effects(e,t,n){const r=w(e,"WindkraftVereinfachen")?0:5;return[a("popularity").byValue(-3).if(t===n),a("electricityWindOnshoreMaxNew").setValue(30).if(n>=t+r)]},priority(e){return w(e,"AbstandsregelnFuerWindkraftWieBisher")?v(70,27,ne(e)):w(e,"AbstandsregelnFuerWindkraftAbschaffen")?v(30,100,ne(e)):0},citations:[],details:s`

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
  `}),ti=y({title:"Abstandsregeln f\xFCr Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return b(12,"BIs werden es Dir schwer machen. {months}!")},effects(e,t,n){const r=w(e,"WindkraftVereinfachen")?0:5;return[a("popularity").byValue(-40).if(t===n),a("electricityWindOnshoreMaxNew").setValue(1e3).if(n>=t+r)]},priority(e){return w(e,"AbstandsregelnFuerWindkraftLockern")?v(80,25,ne(e)):0}}),ni=y({title:"Abstandsregeln f\xFCr Windkraft versch\xE4rfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngeb\xE4uden im Innenbereich muss das Zehnfache der Gesamth\xF6he der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return b(1,"Dauert nur einen Monat.")},effects(e,t,n){return[a("popularity").byValue(5).if(t===n),a("electricityWindOnshoreMaxNew").setValue(.42)]},priority(e){return w(e,"AbstandsregelnFuerWindkraftWieBisher")?v(0,100,ne(e)):0}}),ri=y({title:"Ausschreibungsverfahren f\xFCr Windkraft wie zu Beginn",description:"Windkraft Betreiber k\xF6nnen sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstm\xF6glichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return b(8)},effects(e,t,n){return[..._e(e,6.9,1.2,t)]},priority(e){return w(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?v(60,100,K(e)):0}}),ii=y({title:"Ausschreibungsverfahren f\xFCr Windkraft verdoppeln",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return b(2)},effects(e,t,n){return[a("popularity").byValue(-1).if(t===n),a("unemployment").byValue(-20).if(t===n),..._e(e,13.8,2.4,t)]},priority(e){return w(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?v(100,50,K(e)):w(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?v(40,100,K(e)):0}}),si=y({title:"Ausschreibungsverfahren f\xFCr Windkraft vervierfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return b(4)},effects(e,t,n){return[a("popularity").byValue(-2).if(t===n),a("unemployment").byValue(-100).if(t===n),..._e(e,27.6,4.8,t)]},priority(e){return w(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?v(100,50,K(e)):w(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?v(0,100,K(e)):0},citations:[],details:s`
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
  `}),ai=y({title:"Ausschreibungsverfahren f\xFCr Windkraft verachtfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return b(5)},effects(e,t,n){return[a("popularity").byValue(-20).if(t===n),a("unemployment").byValue(-100).if(t===n),..._e(e,55.2,9.6,t)]},priority(e){return w(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?v(100,50,K(e)):0}}),oi=y({title:"CO2 Preis Erh\xF6hen",description:"Die Preise werden schneller erh\xF6ht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return b(6)},effects(e,t,n){const r=n>=t+2?n>=t+4?100:70:0;return[...$e(e,r,-.5,Me({value:50,result:0},{value:0,result:-1}))]},priority(e){return w(e,"VollerCO2Preis")||w(e,"WirksamerCO2Preis")?0:50},citations:[gt],details:s`

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
  `}),li=y({title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return b(8)},effects(e,t,n){return[...$e(e,150,-2,Me({value:80,result:0},{value:50,result:-3}))]},priority(e){return w(e,"CO2PreisErhoehen")?50:0},citations:[gt],details:s`

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
  `}),ui=y({title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return b(10)},effects(e,t,n){return[...$e(e,3e3,-5,Me({value:90,result:0},{value:50,result:-10}))]},priority(e){return w(e,"WirksamerCO2Preis")?50:0},citations:[_n],details:s`

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
  `}),ci=y({title:"Solarstrom F\xF6rderung einstellen",description:"Mittlere bis gro\xDFe Solaranlagen sollten sich selbst tragen. Die F\xF6rderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return b(5)},effects(){return[a("electricitySolar").byValue(2)]},priority(e){return w(e,"SolarstromFoerderungWieZuBeginn")?v(0,100,K(e)):0},details:s`

  `}),di=y({title:"Solarstrom F\xF6rderung wie zu Beginn",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen wie bisher",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return b(9)},effects(){return[a("electricitySolar").byValue(5)]},priority(e){return w(e,"SolarstromFoerdernx8")?v(70,100,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),hi=y({title:"Solarstrom F\xF6rderung x2",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return b(4)},effects(e,t,n){return[a("popularity").byValue(10).if(t===n),a("unemployment").byValue(-31e3).if(t===n),a("electricitySolar").byValue(10)]},priority(e){return w(e,"SolarstromFoerderungWieZuBeginn")?v(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),mi=y({title:"Solarstrom F\xF6rderung x4",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return b(3)},effects(e,t,n){return[a("popularity").byValue(20).if(t===n),a("unemployment").byValue(-89e3).if(t===n),a("electricitySolar").byValue(20)]},priority(e){return w(e,"SolarstromFoerdernx2")?v(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:s`
    # Happy path 10

    ${W(ke)}
  `,citations:[ke]}),gi=y({title:"Solarstrom F\xF6rderung x8",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return b(2)},effects(e,t,n){return[a("popularity").byValue(-10).if(t===n),a("unemployment").byValue(-209e3).if(t===n),a("electricitySolar").byValue(40)]},priority(e){return w(e,"SolarstromFoerdernx4")?v(100,30,K(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `}),fi=y({title:"Solar auf neuen D\xE4chern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die D\xE4cher.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return b(3)},effects(e,t,n){return[a("popularity").byValue(-3).if(t===n),a("electricitySolar").byValue(2)]},priority(e){return w(e,"SolarstromFoerderungWieZuBeginn")?v(100,30,K(e)):0},details:s`

  `,internals:s`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `}),pi=y({title:"Forschung und Entwicklung zur Stromspeicherung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return b(1)},effects(e,t,n){const r=n<t+5,i=n>=t+3;return[a("stateDebt").byValue(2).if(r),a("electricityGridQuality").byValue(.2).if(i)]},priority(e){const t=e.values;return v(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),bi=y({title:"Forschung zur emissionsfreien Stahlproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Stahl mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return b(2)},effects(e,t,n){const r=n<t+5,i=n>=t+3,o=w(e,"WasserstofftechnologieFoerdern",3)?K(e)-70:0,u=w(e,"WirksamerCO2Preis");return[a("stateDebt").byValue(2).if(r),a("co2emissionsIndustry").byValue(-2).if(i),a("co2emissionsIndustry").byValue(-2).if(u),a("co2emissionsIndustry").byValue(-o).if(o>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return v(0,80,n)},citations:[],details:s`

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
  `}),vi=y({title:"Forschung zur emissionsfreien Zementproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Zement mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return b(3)},effects(e,t,n){const r=n<t+5,i=n>=t+3,o=w(e,"WasserstofftechnologieFoerdern",3)?K(e)-70:0,u=w(e,"WirksamerCO2Preis");return[a("stateDebt").byValue(2).if(r),a("co2emissionsIndustry").byValue(-2).if(i),a("co2emissionsIndustry").byValue(-2).if(u),a("co2emissionsIndustry").byValue(-o).if(o>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return v(0,80,n)},citations:[],details:s`

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
  `}),wi=y({title:"Erforschung und Umsetzung dezentraler Stromerzeugung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur f\xFCr die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return b(1)},effects(e,t,n){const r=n<t+5,i=n>=t+1;return[a("stateDebt").byValue(2).if(r),a("electricityGridQuality").byValue(1).if(i)]},priority(e){const t=e.values;return v(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),yi=y({title:"Test",description:"Unsinniges Gesetz zum Testen.",effort(e){return b(6)},effects(e,t,n){return[a("popularity").byPercent(50).if((n-t)%3!=0),a("popularity").byPercent(-50).if((n-t)%3==0),a("stateDebt").byPercent(-200).if(n===t),a("stateDebt").byPercent(50).if((n-t)%3!=0),a("stateDebt").byPercent(-50).if((n-t)%3==0),a("stateDebt").byPercent(-200).if(n===t+10)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`

  `});const Pt={AllesBleibtBeimAlten:mn,InitialAtomausstieg:Pr,KohleverstromungEinstellen:kr,EnergiemixRegeltDerMarkt:Sr,KernenergienutzungVerlaengern:Dr,NetzausbauErleichtern:_r,NetzausbauFoerdern:zr,ForschungUndEntwicklungStromspeicherung:pi,StromspeicherungErleichtern:Ar,StromspeicherungFoerdern:Fr,ForschungDezentraleStromerzeugung:wi,WindkraftVereinfachen:qr,AbstandsregelnFuerWindkraftVerschaerfen:ni,AbstandsregelnFuerWindkraftWieBisher:Xr,AbstandsregelnFuerWindkraftLockern:ei,AbstandsregelnFuerWindkraftAbschaffen:ti,AusschreibungsverfahrenfuerWindkraftWieBisher:ri,AusschreibungsverfahrenfuerWindkraftVerdoppeln:ii,AusschreibungsverfahrenfuerWindkraftVervierfachen:si,AusschreibungsverfahrenfuerWindkraftVerachtfachen:ai,SolarstromFoerderungAbschaffen:ci,SolarstromFoerderungWieZuBeginn:di,SolarstromFoerdernx2:hi,SolarstromFoerdernx4:mi,SolarstromFoerdernx8:gi,SolarAufAllenDaechernVerpflichtend:fi,DaemmungAltbau1Percent:Cr,DaemmungAltbau2Percent:Er,DaemmungAltbau4Percent:Wr,DaemmungAltbauAbschaffen:Lr,NahverkehrKostenlos:Or,AutosInInnenstaedtenVerbieten:Ir,WasserstofftechnologieFoerdern:$r,WasserstoffmobilitaetFoerdern:Nr,NahverkehrAusbauen:xr,NahverkehrModernisieren:Tr,FernverkehrVerbindungenAusbauen:Br,FernverkehrModernisieren:Mr,AusbauVonStrassen:Ur,AbschaffungDerMineraloelsteuer:Gr,DieselPrivilegAbgeschaffen:Kr,DienstwagenPrivilegAbgeschaffen:Jr,Tempolimit130AufAutobahnen:Hr,Tempolimit120AufAutobahnen:jr,Tempolimit100AufAutobahnen:Zr,TempolimitAufAutobahnenAussitzen:Rr,ElektromobilitaetFoerdern:Qr,LadeinfrastrukturAusbauen:Yr,FoerderungFuerTierhaltungAbschaffen:Vr,CO2PreisErhoehen:oi,WirksamerCO2Preis:li,VollerCO2Preis:ui,ForschungEmissionsfreieStahlproduktion:bi,ForschungEmissionsfreieZementproduktion:vi,Test:yi},ki=Object.keys(Pt);function Si(e){return it(e).map(t=>G(x({},t),{effort:t.effort||hn}))}const ae=Si(Pt);function Di(e){const t=ae.find(n=>n.id===e);if(t)return t;throw Error(`Law #${e} not found`)}function be(e){const t=Di(e.lawId);if(t)return G(x({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function Pe(e){return e.map(t=>{const n=ae.find(r=>r.id===t);return n||console.error(`Inconsistency: Proposed law #${t} not found`),n}).filter(t=>t)}const Pi=(e,t,n)=>Object.fromEntries(e.map(r=>{const i=t(r),o=Object.fromEntries(vt.map(u=>[u,n(r,i,u)]));return[r.id,o]}));function v(e,t,n){const r=n-e,i=t-e;if(i===0)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return r/i*100}function Me(e,t){const n=t.value-e.value,r=n/Math.abs(n),i=r*e.value;return o=>n===0||r*o<=i?e.result:st(e,t)(o)}function w(e,t,n=0){if(!ae.map(r=>r.id).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some(r=>r.lawId===t&&r.effectiveSince<=e.currentYear+n)}function _i(e,t){const n=e.sort((r,i)=>i.effectiveSince-r.effectiveSince).find(r=>t.test(r.lawId));return n==null?void 0:n.lawId}function ne(e){const t=e.values;return t.electricityWind/t.electricityDemand*100}function K(e){return(e.values.electricityWind+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}function zi(e,t){const n=e.values,r=Q[t].initialValue,i=n.electricityGridQuality,o=n.electricityDemand;return st({value:50,result:r},{value:100,result:o})(i)}function _e(e,t,n,r){const i=w(e,"WindkraftVereinfachen")?0:5;if(e.currentYear<r+i)return[];const o=e.values,m=(Math.min(t,o.electricityWindOnshoreMaxNew)+n)*o.electricityWindEfficiency/100,c=o.electricityWind,g=Math.min(c+m,zi(e,"electricityWind"))-c,k=o.electricityCoal+o.electricityGas;if(k<=0)return[];const p=o.electricityHardCoal/k,d=o.electricityBrownCoal/k,_=o.electricityGas/k;return[O("electricityWind","electricityHardCoal").if(p>0).byValue(p*g),O("electricityWind","electricityBrownCoal").if(d>0).byValue(d*g),a("electricityWind").if(_>0).byValue(_*g)]}function $e(e,t,n,r){const i=r(K(e)),o=r(e.values.carRenewablePercentage);return[a("stateDebt").byValue((25-t)/1e3*e.values.co2emissions),a("popularity").byValue(i+o),a("co2emissionsIndustry").byPercent(n),a("co2emissionsAgriculture").byPercent(n),a("co2emissionsOthers").byPercent(n),O("electricityBrownCoal","electricityWind").byPercent(.7*n),O("electricityHardCoal","electricityWind").byPercent(.7*n),O("electricityBrownCoal","electricitySolar").byPercent(.3*n),O("electricityHardCoal","electricitySolar").byPercent(.3*n),O("buildingsSourceOil","buildingsSourceBio").byPercent(n),O("carUsage","publicNationalUsage").byPercent(.5*n),O("carUsage","publicLocalUsage").byPercent(.5*n)]}var Ai=V({title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es f\xFCr unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply(){return[]},probability(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return Math.min(1,v(15,30,t)/100)}});function _t(e){return e.find(t=>t.title.match(/subvention/i)&&t.title.match(/abbau/i))}var Fi=V({title:"Anruf von befreundetem Unternehmer",description:`Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und m\xF6chte dich in seine
    Ferienvilla auf Sardinien einladen. Er verl\xE4sst sich nat\xFCrlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,apply(e){if(e){const t=_t(Pe(e.proposedLaws));if(t)return[se("rejectLaw",{lawId:t.id})]}return[]},probability(e){return _t(Pe(e.proposedLaws))?.5:0}}),Ci=V({title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute \xFCber die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply(){return[]}}),Ei=V({title:"Zusammenbruch des Finanzsystems",description:`Deine Staatsfinanzen sind desastr\xF6s. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zur\xFCckahlen k\xF6nnen. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    k\xF6nntest. Das Spiel ist damit leider beendet.
  `,apply(){return[se("gameOver")]},probability(e){return e.values.stateDebt>ue.stateDebt*2?pe.finanzKollaps:0}}),Wi=V({title:"Hitzeh\xF6lle",description:`Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen K\xFCstenregionen
  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr w\xE4chst.
  Um die verbleibdenden Teile sind erbitterte K\xE4mpfe ausgebrochen.
  `,apply(){return[se("gameOver")]},probability(e){return e.values.co2budget<=0?pe.hitzehoelle:0}}),Li=V({title:"Happy New Year!",description:`Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen T\xE4tigkeit aufgestellt
    und kommt zu dem nicht weiter \xFCberraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht \xFCberraschend - sieht die Sache anders und verurteilt die Regierungserkl\xE4rung als haltlos.
  `,apply(){return[se("advanceYear")]},probability(e){return ye(e.currentDate).getYear()>e.currentYear?pe.newYear:0}}),xi=V({title:"Social Media Alarm!",description:`Deine Wahlkampfberaterin ruft dich v\xF6llig aufgel\xF6st an. Ob denn an den Geschichten was dran sein, die da im
    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.
    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.
  `,apply(){return[a("popularity").byPercent(-20)]}}),Ti=V({title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland m\xFCssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply(){return[]}}),Vi=V({title:"Du hast durchgehalten",description:`Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,
    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Ma\xDFnahmen waren zu finanzieren
    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!
  `,apply(){return[se("gameOver")]},probability(e){return e.currentYear===2050?pe.timesUp:0}}),Oi=V({title:"Wahl verloren",description:`Deine Beliebtheit in der Bev\xF6lkerung ist katastrophal, lieber w\xFCrde man Mao Zedong w\xE4hlen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du geh\xF6rst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon l\xE4nger kein vern\xFCnftiger Mensch mehr geglaubt.
  `,apply(){return[se("gameOver")]},probability(e){return e.values.popularity<=0?pe.wahlVerloren:0}}),Ii=V({title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply(){return[]},citations:[],details:s`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:s`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `}),Bi=V({title:"B\xFCrgerinitiative fordert st\xE4rkere Solarf\xF6rderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply(){return[]},probability(e){const t=w(e,"SolarstromFoerderungAbschaffen"),n=w(e,"SolarstromFoerderungWieZuBeginn"),r=w(e,"SolarstromFoerdernx2");return t||n||r?.5:0},citations:[at],details:s`

  `,internals:s`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${W(at)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),Mi=V({title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply(){return[se("gameOver")]},probability(e){return e.acceptedLaws.find(n=>n.lawId==="KernenergienutzungVerlaengern")?.5:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),$i=V({title:"Staatsoberhaupt verstorben",description:"Du stirbst an der neuen BSE Variante. Tja, h\xE4ttest du dich mal besser um das Tierwohl gek\xFCmmert...",apply(){return[se("gameOver")]},probability(e){return Pe(e.acceptedLaws.map(n=>n.lawId)).find(n=>n.title.match(/tierwohl/i))?0:.5},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Ni=V({title:"D\xFCrreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausf\xE4lle sind enorm.",apply(){return[a("gdp").byValue(-100),a("popularity").byValue(-10)]},probability(e){return Math.min(1,v(400,0,e.values.co2budget)/100)},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Gi=V({title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und f\xFChrt zu einer neuen Diskussion \xFCber Lobbyismus.",apply(){return[a("popularity").byValue(-2)]},probability(e){return w(e,"WirksamerCO2Preis")||w(e,"KohleverstromungEinstellen")?0:.3},laws:[],citations:[],details:s`

  `,internals:s`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `}),Ui=V({title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply(){return[a("popularity").byValue(-2)]},probability(){return .3},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Ki=V({title:"Klimafl\xFCchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimafl\xFCchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply(){return[a("stateDebt").byValue(10)]},probability(e){return e.values.co2budget<500?.2:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Ji=V({title:"Plagiatsaff\xE4re",description:"W\xE4hrend des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet W\xE4hlerstimmen.",apply(){return[a("popularity").byValue(-10)]},probability(e){return .5},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Hi=V({title:"Debatte \xFCber CO2-Preise",description:"Eine marktliberale Kampagne ist sehr erfolgreich darin, Dich als Verbots-Kanzler hinzustellen. Aus allen Richtungen prasseln Forderungen nach einem ad\xE4quaten CO2-Preis auf Dich ein. Nur leider gehen die Vorstellungen \xFCber den genauen Preis sehr weit auseinander.",laws:["CO2PreisErhoehen","WirksamerCO2Preis","VollerCO2Preis"],apply(){return[]},probability(e){const t=(w(e,"AutosInInnenstaedtenVerbieten")?1:0)+(w(e,"KohleverstromungEinstellen")?1:0)+(w(e,"SolarAufAllenDaechernVerpflichtend")?1:0)+(w(e,"Tempolimit130AufAutobahnen")?1:0)+(w(e,"Tempolimit120AufAutobahnen")?1:0)+(w(e,"Tempolimit100AufAutobahnen")?1:0);return v(1,3,t)/100}});const ji={AbstandsregelnWindkraft:cn,Altbausanierung:Ai,Bestechung:Fi,EnergieStrategie:Ci,FinanzKollaps:Ei,Hitzehoelle:Wi,NewYear:Li,SocialMedia:xi,TempolimitAufAutobahnen:Ti,TimesUp:Vi,WahlVerloren:Oi,WindkraftAusschreibung:Ii,SolarstromFoerderung:Bi,AtomKatastrophe:Mi,BSE:$i,Duerrewelle:Ni,PRKohleindustrie:Gi,PRInnenminister:Ui,Klimafluechtlinge:Ki,Plagiatsaffaere:Ji,CO2PreisDebatte:Hi},Zi=()=>.5,ze=it(ji).map(e=>G(x({},e),{probability:e.probability||Zi})),zt={currentDate:on,currentYear:le,values:ue,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],over:!1,prngState:{}};function Ne(e=zt,t=jt()){return{id:t,currentDate:e.currentDate,currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:ce(e.values),events:e.events,over:e.over,prngState:{}}}function At(e=ae,t=zt){const n=Ne(t);return n.acceptedLaws=e.filter(r=>{var i;return(i=r.labels)==null?void 0:i.includes("initial")}).map(r=>({lawId:r.id,effectiveSince:n.currentYear})),n}const de=[...Array(qe-le+1).keys()].map(e=>e+le);function Ri(e,t){const n={lawId:e,effectiveSince:t.currentYear+1},r=be(n),i=r.effort(t);t.currentDate=ye(t.currentDate).plus(i.time).toJSON();const o=r.removeLawsWithLabels,u=t.acceptedLaws.map(be).filter(m=>!(o==null?void 0:o.some(c=>{var g;return(g=m.labels)==null?void 0:g.includes(c)}))).map(m=>({lawId:m.id,effectiveSince:m.effectiveSince}));return t.acceptedLaws=[...u,n],Ge(t)}function Qi(e){return e.currentDate=ye(e.currentDate).plus(ln).toJSON(),Ge(e)}function Ge(e,t=ae,n=ze,r=tt){const i=Yi(e,n,r);if(i){const u={id:i.id,occuredIn:e.currentYear,acknowledged:!1};e.events.unshift(u)}const o=ns(e,t,(i==null?void 0:i.laws)?i.laws:[]);return e.proposedLaws=rs(e.proposedLaws,o),i}function Yi(e,t,n){const r=qi(e,t),i=Xi(r);if(i)return i;const o=es(r);return ts(o,n())}function qi(e,t){return t.map(n=>G(x({},n),{prob:n.probability(e)})).filter(n=>n.prob>0)}function Xi(e){return e.filter(t=>t.prob>1).reduce((t,n)=>n.prob>((t==null?void 0:t.prob)||0)?n:t,void 0)}function es(e){const t=e.map(r=>r.prob).reduce((r,i)=>r+i,0),n=un/t;return e.map(r=>G(x({},r),{prob:r.prob*n}))}function ts(e,t){for(const n of e)if(t-=n.prob,t<0)return n}function ns(e,t,n){const r=c=>{var g;return(g=e.acceptedLaws)==null?void 0:g.some(k=>k.lawId===c.id)},i=c=>{var g;return(g=e.rejectedLaws)==null?void 0:g.includes(c.id)},o=c=>{var g;return((g=c.labels)==null?void 0:g.includes("hidden"))||!1},u=c=>({law:c,priority:c.priority(e)}),m=c=>({law:c.law,priority:c.priority+(n.includes(c.law.id)?100:0)});return t.filter(Oe(r)).filter(Oe(i)).filter(Oe(o)).map(u).filter(c=>c.priority>0).map(m).sort((c,g)=>g.priority-c.priority).map(c=>c.law.id).slice(0,et)}function rs(e,t){const n=[...e],r=t.filter(u=>n.includes(u)),i=t.filter(u=>!r.includes(u));for(var o=0;o<n.length;){if(r.includes(n[o])){o++;continue}if(i.length===0){n.splice(o,1);continue}n[o]=i.shift(),o++}return n.push(...i.slice(0,et-n.length)),n}function is(e,t,n){return Ft(e,t,n).values}function Ft(e,t,n){const r=ce(e.values),i=t.sort((u,m)=>{var c,g;return((c=u.treatAfterLabels)==null?void 0:c.some(k=>{var p;return(p=m.labels)==null?void 0:p.includes(k)}))?1:((g=m.treatAfterLabels)==null?void 0:g.some(k=>{var p;return(p=u.labels)==null?void 0:p.includes(k)}))?-1:0}).filter(u=>u.effectiveSince<=n),o=Pi(i,u=>{const m=yr(r),c=u.effects(G(x({},e),{values:r}),u.effectiveSince,n);return Be({dispatch:()=>{},values:r},c),m},(u,m,c)=>r[c]-m[c]);return r.co2budget-=r.co2emissions,{values:r,effectsOfLaws:o}}function Ct(e){return Math.max(0,Math.min(100,e))}function ss(e){if(e.values.co2emissions===0)return 100;const n=e.values.co2budget*ce(ue).co2emissions/ue.co2budget/e.values.co2emissions;return Ct(n*50)}function as(e){const t=e.values.stateDebt/ue.stateDebt;return Ct(100-t*50)}const he=[{id:"start",title:"Stell dir vor...",text:s`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du ausw\xE4hlen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die W\xE4hler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine W\xE4hler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];function os(e,t){return{startGame(n){const r=At(),i=Ge(r);t.createGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i}),e.push("/games/"+r.id)},async loadGame(n,r){var i;if(((i=n.state.game)==null?void 0:i.id)!==r.gameId)try{const o=await t.loadGame(r.gameId);t.saveGame(o),e.push("/games/"+o.id+(o.over?"/over":"")),n.commit("setGameState",{game:o})}catch(o){n.dispatch("error",{error:o})}},gameOver(n){var r;n.commit("gameOver",void 0),e.push("/games/"+((r=n.state.game)==null?void 0:r.id)+"/over")},acceptLaw(n,r){const i=x({},n.state.game),o=Ri(r.lawId,i);t.saveGame(i),n.commit("setGameState",{game:i}),n.dispatch("applyEvent",{event:o}),t.decisionMade(i,r.lawId,!0)},rejectLaw(n,r){const i=x({},n.state.game);i.rejectedLaws=[...i.rejectedLaws,r.lawId],t.decisionMade(i,r.lawId,!1),t.saveGame(i),n.commit("setGameState",{game:i})},sitOut(n){const r=x({},n.state.game);t.decisionMade(r,"sitOut",!0);const i=Qi(r);t.saveGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i})},advanceYear(n){const r=x({},n.state.game),i=r.acceptedLaws.map(be);r.currentYear++,r.values=is(r,i,r.currentYear),t.saveGame(r),n.commit("setGameState",{game:r})},applyEvent(n,r){if(!r.event)return;const i=x({},n.state.game);t.eventOccurred(i,r.event);const o=r.event.apply(i);n.dispatch("applyEffects",{changes:o})},acknowledgeEvent(n,r){const i=x({},n.state.game);i.events.find(o=>o.id===r.id).acknowledged=!0,t.saveGame(i),n.commit("setGameState",{game:i})},applyEffects(n,r){const i={dispatch:n.dispatch,values:ce(n.state.game.values)};Be(i,r.changes);const o=G(x({},n.state.game),{values:i.values});t.saveGame(o),n.commit("setGameState",{game:o})},setupTour(n){const r=localStorage.getItem("tour")||he[0].id,i=he.find(o=>r===o.id);i?n.commit("setTour",{step:i.id,active:!0}):n.dispatch("stopTour")},nextTourStep(n){const r=he.findIndex(i=>n.state.tour.step===i.id);if(r<0||r==he.length-1)n.dispatch("stopTour");else{const i=he[r+1];n.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(n){n.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},error(n,r){n.commit("error",r)}}}const ls={setGameState(e,t){e.game=t.game},gameOver(e){e.game=G(x({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},us={proposedLaws(e){return!e.game||!e.game.proposedLaws?[]:Pe(e.game.proposedLaws)}},cs={game:void 0,tour:{active:!0,step:"start"}};var $=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const ds=e=>(ge("data-v-1017d1c6"),e=e(),fe(),e),hs={key:0,type:"radio"},ms=ds(()=>l("br",null,null,-1)),gs={key:0,class:"button-bar"},fs=M({props:{law:null,selectable:{type:Boolean},numCards:null},emits:["selected","accepted"],setup(e,{emit:t}){const n=e,r=X(!1),i=z(()=>n.law.zIndex);function o(){t("selected")}function u(){r.value=!0}function m(c){c.animationName.match(/^twistOut-/)&&t("accepted",n.law.id)}return(c,g)=>(h(),f("div",{class:N(["Law",{accepted:r.value}]),style:Ee({zIndex:C(i)}),onClick:o,onAnimationend:m},[l("label",null,[e.selectable?(h(),f("input",hs)):A("",!0),l("div",null,[l("h3",null,S(e.law.title),1),l("div",null,S(e.law.description),1),ms,l("div",null,S(e.law.effortComment),1),e.selectable?(h(),f("div",gs,[l("button",{class:"accept",onClick:u},"\u2713")])):A("",!0)])])],38))}});var ps=$(fs,[["__scopeId","data-v-1017d1c6"]]);const bs=M({setup(e){const t=oe(),n=X([]),r=X(!1),i=z(()=>t.getters.proposedLaws),o=z(()=>t.state.game),u=z(()=>(n.value.length||(n.value=rt(i.value.length,0)),o.value===void 0?[]:i.value.map((k,p)=>G(x({},k),{zIndex:n.value[p],pos:p,effortComment:k.effort(o.value).text}))));function m(k){t.dispatch("acceptLaw",{lawId:k})}function c(k){n.value=rt(i.value.length,k)}function g(){t.dispatch("sitOut")}return(k,p)=>(h(),f(J,null,[l("div",{class:N(["ProposedLaws",{poppedUp:r.value}]),onClick:p[0]||(p[0]=d=>r.value=!0)},[(h(!0),f(J,null,R(C(u),(d,_)=>(h(),ee(ps,{key:d.id,law:d,selectable:r.value,numCards:C(u).length,onAccepted:()=>m(d.id),onSelected:()=>c(_)},null,8,["law","selectable","numCards","onAccepted","onSelected"]))),128))],2),l("div",{class:"sitOutButton",onClick:p[1]||(p[1]=()=>g())},"Aussitzen")],64))}});var vs=$(bs,[["__scopeId","data-v-7616326e"]]);const ws={key:0},ys=M({props:{title:null,text:null},emits:["acknowledge"],setup(e,{emit:t}){function n(){t("acknowledge")}return(r,i)=>e.text?(h(),f("div",{key:0,onClick:n},[e.title?(h(),f("h2",ws,S(e.title),1)):A("",!0),l("p",null,S(e.text),1)])):A("",!0)}});var ks=$(ys,[["__scopeId","data-v-089babdc"]]),Ss="/assets/money-short.7ce9dbed.png",Ds="/assets/money-less.184321f3.png",Ps="/assets/money-more.44dccbaa.png",_s="/assets/money-much.d486dae1.png";const zs={class:"container"},As={class:"title"},Fs={class:"progress-bar"},Cs=M({props:{title:null,value:null},setup(e){const t=e,n=z(()=>{const r=t.value>40?"green":t.value>20?"goldenrod":"red";return{width:t.value+"%",backgroundColor:r}});return(r,i)=>(h(),f("div",zs,[l("div",As,S(e.title),1),l("div",Fs,[l("div",{class:"indicator",style:Ee(C(n))},null,4)])]))}});var Ue=$(Cs,[["__scopeId","data-v-9856b0a2"]]);const Es={id:"finances"},Ws={key:0,src:Ss,id:"short"},Ls={key:1,src:Ds,id:"less"},xs={key:2,src:Ps,id:"more"},Ts={key:3,src:_s,id:"much"},Vs=M({props:{value:null},setup(e){const t=e,n=z(()=>t.value),r=z(()=>t.value<20),i=z(()=>t.value>=20&&t.value<50),o=z(()=>t.value>=50&&t.value<80),u=z(()=>t.value>=80);return(m,c)=>(h(),f("div",Es,[I(Ue,{id:"indicator",title:"Finanzen",value:C(n)},null,8,["value"]),C(r)?(h(),f("img",Ws)):A("",!0),C(i)?(h(),f("img",Ls)):A("",!0),C(o)?(h(),f("img",xs)):A("",!0),C(u)?(h(),f("img",Ts)):A("",!0)]))}});var Os=$(Vs,[["__scopeId","data-v-0b2fb0e8"]]),Is="/assets/people-happy.acaffc0b.png",Bs="/assets/people-angry.54c1d60c.png";const Ms={id:"popularity"},$s={key:0,src:Is,id:"happy"},Ns={key:1,src:Bs,id:"angry"},Gs=M({props:{value:null},setup(e){const t=e,n=z(()=>t.value>=50),r=z(()=>t.value<50);return(i,o)=>(h(),f("div",Ms,[I(Ue,{id:"indicator",title:"Beliebtheit",value:e.value},null,8,["value"]),C(n)?(h(),f("img",$s)):A("",!0),C(r)?(h(),f("img",Ns)):A("",!0)]))}});var Us=$(Gs,[["__scopeId","data-v-4cf2dbec"]]),Ks="/assets/plant-healthy.97772624.png",Js="/assets/plant-sick.5a0f1b46.png",Hs="/assets/plant-withered.b50106c7.png";const js={id:"plant"},Zs=["src","id"],Rs=M({props:{value:null},setup(e){const t=e,n={healthy:Ks,sick:Js,withered:Hs},r=z(()=>t.value>66?"healthy":t.value>33?"sick":"withered"),i=z(()=>n[r.value]);return(o,u)=>(h(),f("div",js,[I(Ue,{id:"indicator",title:"CO2-Budget",value:e.value},null,8,["value"]),l("img",{src:C(i),id:C(r)},null,8,Zs)]))}});var Qs=$(Rs,[["__scopeId","data-v-2db3389a"]]);const Ys={id:"calendar"},qs=M({props:{year:null,month:null},setup(e){const t=e,n=z(()=>{const r=Math.floor((t.month-1)/4)*18+27+"%",i=(t.month-1)%4*21+12+"%";return{top:r,left:i}});return(r,i)=>(h(),f("div",Ys,[U(S(e.year)+" ",1),l("span",{id:"month-indicator",style:Ee(C(n))},null,4)]))}});var Xs=$(qs,[["__scopeId","data-v-78901c78"]]),ea="/assets/heater.43006232.png";const ta={},na=e=>(ge("data-v-c9039a0c"),e=e(),fe(),e),ra={id:"heater"},ia=na(()=>l("img",{src:ea},null,-1)),sa=[ia];function aa(e,t){return h(),f("div",ra,sa)}var oa=$(ta,[["render",aa],["__scopeId","data-v-c9039a0c"]]),la="/assets/table-top.c87bd2fd.png",Et="/assets/table-front.78c0f8c6.png",Wt="/assets/table-side.49774a53.png";const ua={},ve=e=>(ge("data-v-1ef8d93c"),e=e(),fe(),e),ca={id:"table"},da=ve(()=>l("img",{src:la,id:"table-top"},null,-1)),ha=ve(()=>l("img",{src:Et,id:"table-front"},null,-1)),ma=ve(()=>l("img",{src:Et,id:"table-back"},null,-1)),ga=ve(()=>l("img",{src:Wt,id:"table-left-side"},null,-1)),fa=ve(()=>l("img",{src:Wt,id:"table-right-side"},null,-1)),pa=[da,ha,ma,ga,fa];function ba(e,t){return h(),f("div",ca,pa)}var va=$(ua,[["render",ba],["__scopeId","data-v-1ef8d93c"]]),wa="/assets/board-front.41330f02.png",Lt="/assets/board-side.d7181ded.png",ya="/assets/tv-front.82df5c0c.png",ka="/assets/news.c4bbc2d0.png",xt="/assets/tvset-legs.78b387df.png";const Sa=M({props:{withNews:Boolean}}),Ke=e=>(ge("data-v-118e7bdf"),e=e(),fe(),e),Da={id:"tvset"},Pa=Ke(()=>l("div",{id:"board"},[l("img",{id:"board-front",src:wa}),l("img",{id:"board-left",src:Lt}),l("img",{id:"board-right",src:Lt}),l("div",{id:"board-top"})],-1)),_a={id:"tv"},za=Ke(()=>l("img",{id:"tv-front",src:ya},null,-1)),Aa={key:0,id:"news",src:ka},Fa=Ke(()=>l("div",{id:"legs"},[l("img",{id:"legs-front",src:xt}),l("img",{id:"legs-back",src:xt})],-1));function Ca(e,t,n,r,i,o){return h(),f("div",Da,[Pa,l("div",_a,[za,e.withNews?(h(),f("img",Aa)):A("",!0)]),Fa])}var Ea=$(Sa,[["render",Ca],["__scopeId","data-v-118e7bdf"]]);const Wa={},La={class:"dialog"},xa={class:"buttons"};function Ta(e,t){return h(),f("div",La,[We(e.$slots,"default",{},void 0,!0),l("div",xa,[We(e.$slots,"buttons",{},void 0,!0)])])}var Tt=$(Wa,[["render",Ta],["__scopeId","data-v-620b183d"]]);const Va=M({setup(){const e=oe();return e.dispatch("setupTour"),{store:e}},components:{Dialog:Tt},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return he.find(e=>e.id===this.$store.state.tour.step)},title(){var e;return(e=this.currentStep)==null?void 0:e.title},text(){var e;return(e=this.currentStep)==null?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var n;const t=document.querySelector(".highlighted");t&&t.classList.remove("highlighted"),e&&e.highlight&&((n=document.querySelector(`#${e.highlight}`))==null||n.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}}),Oa=["innerHTML"];function Ia(e,t,n,r,i,o){const u=re("Dialog");return e.title&&e.text?(h(),ee(u,{key:0},{buttons:we(()=>[l("button",{onClick:t[0]||(t[0]=(...m)=>e.stop&&e.stop(...m))},"Tour beenden"),l("button",{onClick:t[1]||(t[1]=(...m)=>e.next&&e.next(...m))},"Weiter")]),default:we(()=>[l("h2",null,S(e.title),1),l("div",{innerHTML:e.text},null,8,Oa)]),_:1})):A("",!0)}var Ba=$(Va,[["render",Ia]]);const Ma={class:"game-setup"},$a=l("h1",null,"#ich-kann-klima",-1),Na=l("div",{id:"walls"},[l("div",{id:"wall-back"}),l("div",{id:"wall-left"}),l("div",{id:"wall-right"})],-1),Ga=M({setup(e){const t=oe(),n=z(()=>{var _;const p=((_=t.state.game)==null?void 0:_.events)||[];if(p.length===0)return;const d=p[0];if(!d.acknowledged)return ze.find(T=>T.id===d.id)}),r=z(()=>{var p;return((p=n.value)==null?void 0:p.title)||""}),i=z(()=>{var p;return((p=n.value)==null?void 0:p.description)||""}),o=z(()=>{var p;return((p=t.state.game)==null?void 0:p.currentYear)||2021}),u=z(()=>{var p;return ye((p=t.state.game)==null?void 0:p.currentDate).lux.month}),m=z(()=>{const p=t.state.game;return p?as(p):0}),c=z(()=>{var p;return((p=t.state.game)==null?void 0:p.values.popularity)||100}),g=z(()=>{const p=t.state.game;return p?ss(p):0});function k(){t.dispatch("acknowledgeEvent",n.value)}return(p,d)=>(h(),f("div",Ma,[$a,Na,I(Xs,{year:C(o),month:C(u)},null,8,["year","month"]),I(oa),I(Us,{value:C(c)},null,8,["value"]),I(Ea,{"with-news":!!C(i)},null,8,["with-news"]),I(Qs,{value:C(g)},null,8,["value"]),I(va),I(Os,{value:C(m)},null,8,["value"]),I(vs),I(ks,{title:C(r),text:C(i),onAcknowledge:k},null,8,["title","text"]),I(Ba)]))}});const Ua=["onClick"],Ka=M({setup(e){const t=oe(),n=z(()=>{var u;return(u=t.state.game)==null?void 0:u.acceptedLaws}),r=X(void 0),i=z(()=>ae.filter(u=>{var m,c;return((m=n.value)==null?void 0:m.some(g=>g.lawId===u.id))&&!((c=u.labels)==null?void 0:c.includes("hidden"))}));function o(u){r.value=r.value===u?void 0:u}return(u,m)=>(h(!0),f(J,null,R(C(i),(c,g)=>(h(),f("div",{key:g,class:N(["Law",{opened:g===r.value}]),onClick:k=>o(g)},[l("h3",null,S(c.title),1),l("div",null,S(c.description),1)],10,Ua))),128))}});var Ja=$(Ka,[["__scopeId","data-v-7efa2df1"]]);const Ha=M({components:{GameSetup:Ga,AcceptedLaws:Ja},setup(){return{store:oe()}},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,n){n(r=>r.startGame(e.params.id))}});function ja(e,t,n,r,i,o){const u=re("GameSetup");return h(),ee(u)}var Vt=$(Ha,[["render",ja],["__scopeId","data-v-3637ce73"]]);const Za=M({components:{Dialog:Tt},setup(){return{store:oe()}},computed:{co2(){var n,r;const e=(n=this.store.state.game)==null?void 0:n.values.co2budget;return((r=this.store.state.game)==null?void 0:r.values.co2emissions)>0?e>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. H\xE4tte die AfD nicht besser hinbekommen.":e>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken k\xF6nnen. Punktlandung."},debt(){var t;return((t=this.store.state.game)==null?void 0:t.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilit\xE4tskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var t;const e=(t=this.store.state.game)==null?void 0:t.values.popularity;return e<20?"entspricht dem, was man von einem langh\xE4hrigen Diktator erwarten kann.":e<50?"ist nicht berauschend, wiedergew\xE4hlt w\xFCrdest du wohl eher nicht.":e<80?"reicht aus, dass du noch l\xE4nger am Ruder bleiben k\xF6nntest. Gratulation!":"ist v\xF6llig unglaubw\xFCrdig - war das wirklich eine freie Wahl?"}},methods:{loadGame(e){this.store.dispatch("loadGame",{gameId:e})},newGame(){this.$router.push("/games")}},beforeRouteEnter(e,t,n){n(r=>{r.loadGame(e.params.id)})}}),Ra=l("h2",null,"Das Spiel ist leider zu Ende",-1),Qa=l("p",null,"Deine Entscheidungen haben etwas ver\xE4ndert - soviel kann man sagen.",-1),Ya=l("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),qa={class:"button-bar"};function Xa(e,t,n,r,i,o){const u=re("Dialog");return h(),ee(u,null,{default:we(()=>[Ra,Qa,l("ul",null,[l("li",null,"Die CO2-Emmissionen "+S(e.co2),1),l("li",null,"Die Staatsfinanzen "+S(e.debt),1),l("li",null,"Deine Beliebtheit "+S(e.popularity),1)]),Ya,l("div",qa,[l("button",{onClick:t[0]||(t[0]=(...m)=>e.newGame&&e.newGame(...m))},"Neuer Versuch")])]),_:1})}var eo=$(Za,[["render",Xa]]);const to=[{path:"/",redirect:"/games"},{path:"/games",component:Vt},{path:"/games/:id",component:Vt},{path:"/games/:id/over",component:eo}],Ot=Zt({history:Rt(),routes:to});function no(e){return{createGame(t){return e.add("post","/games",t)},loadGame(t){return e.add("get","/games/"+t,void 0,0)},saveGame(t){return e.remove("put","/games/"+t.id),e.add("put","/games/"+t.id,t)},decisionMade(t,n,r){return e.add("post","/games/"+t+"/decisions/"+n,{accepted:r})},eventOccurred(t,n){return e.add("post","/games/"+t+"/events/"+n)}}}function ro(e,t){let n=[],r;async function i(){if(r&&(clearTimeout(r),r=void 0),n.length){const o=n[0],{method:u,path:m,data:c,retry:g,resolve:k,reject:p}=o;try{if((t==null?void 0:t.navigator)&&!(t==null?void 0:t.navigator.onLine))throw Error("Browser is offline");const d=await e(u,m,c);n.shift(),k(d)}catch(d){g?o.retry=Math.max(-1,g-1):(n.shift(),p(d))}n.length&&(r=setTimeout(i,(t==null?void 0:t.timeout)||1e4))}}return{add(o,u,m,c=-1){return new Promise((g,k)=>{n.push({method:o,path:u,data:m,retry:c,resolve:g,reject:k}),r||i()})},remove(o,u){n=n.filter(m=>m.method.toLowerCase()!==o.toLowerCase()||m.path!==u)},callsPending(){return n.length>0}}}function io(e,t,n=console){return async function(r,i,o){var u;try{const m={method:r};["post","put","patch"].includes(r)&&(m.body=JSON.stringify(o),m.headers={["content-type"]:"application/json"});const c=await t(e+i,m),g=((u=c.headers.get("Content-Type"))==null?void 0:u.match(/json/))?await c.json():await c.text();if(c.ok)return g;throw Error(g.message||g)}catch(m){throw n.error(m),m}}}function so({api:e,logger:t=console,storage:n=localStorage}){return{createGame(r){Ve(r),n.setItem("game",JSON.stringify(r)),e.createGame(r).catch(i=>{t.warn("Cannot save new game - trying again later",i)})},async loadGame(r){const i=n.getItem("game");if(i){const u=JSON.parse(i);if(u.id===r)return Ve(u),Ne(u,r)}const o=await e.loadGame(r);return Ve(o),Ne(o,r)},saveGame(r){r.prngState=dn(),n.setItem("game",JSON.stringify(r)),e.saveGame(r).catch(i=>{t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",i)})},decisionMade(r,i,o){e.decisionMade(r.id,i,o)},eventOccurred(r,i){e.eventOccurred(r.id,i.id)}}}const ao=localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",oo=io(ao,fetch),lo=ro(oo),uo=no(lo),co=so({api:uo}),ho=os(Ot,co),It=Symbol();function oe(){return Qt(It)}const mo=Yt({state:cs,mutations:ls,actions:ho,getters:us});function Bt(e,t,...n){for(const r of n){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function go(e,t,n){function r(c){return e[c].toFixed(2)}function i(c){return(c>0?"+":"")+c.toFixed(2)}function o(c){const g=n.find(k=>k.type==="modify"&&k.name===c);return g&&g.condition?g.value:0}function u(c){const g=o(c),k=t?t[c]:0;return g&&Math.abs(g-k)<.001?i(g):g?i(g)+" / "+i(k):k!=0?i(k):""}return kt.map(c=>({id:c.name,unit:c.unit,value:r(c.name),effect:u(c.name),class:c.writable?"writable":"calculated"}))}function fo(e,t,n,r){const i=e.proposedLaws,o=e.acceptedLaws.map(c=>c.lawId),u=e.rejectedLaws;function m(c){return o.includes(c)?"a":i.includes(c)?"p":u.includes(c)?"r":"x"}return r.map(c=>({id:c.id,priority:c.priority(e),state:m(c.id)})).sort((c,g)=>Bt(c,g,t,"id")*n).map(c=>G(x({},c),{priority:c.priority.toFixed(2)}))}function po(e,t,n,r){return r.map(i=>({id:i.id,probability:i.probability(e)})).sort((i,o)=>Bt(i,o,t,"id")*n).map(i=>G(x({},i),{probability:(i.probability*100).toFixed(2)}))}const bo={key:0},vo=["href"],wo=U(". "),yo={key:1},ko={key:2},So=U("Bemerkung: "),Do=["innerHTML"],Po=U(". "),_o={key:3},zo=U("Internes: "),Ao=["innerHTML"],Fo=U(". "),Co={key:4},Eo=["href"],Wo=U(". "),Lo={key:5},xo=["href"],To=U(". "),Vo={key:6},Oo=["href"],Io=U(". "),Bo=M({props:{citation:null,showInternals:{type:Boolean}},setup(e){const t=e,n=z(()=>t.citation.url.toString()),r=z(()=>t.citation.title||t.citation.url.toString());return(i,o)=>(h(),f("p",null,[e.citation.authors?(h(),f("span",bo,S(e.citation.authors+e.citation.dateString())+". ",1)):A("",!0),l("a",{target:"_blank",rel:"noreferrer noopener",href:C(n)},'"'+S(C(r))+'"',9,vo),wo,e.citation.publisher?(h(),f("span",yo,S(e.citation.publisher)+". ",1)):A("",!0),e.citation.comment?(h(),f("span",ko,[So,l("span",{innerHTML:e.citation.comment},null,8,Do),Po])):A("",!0),e.showInternals&&e.citation.internalComment?(h(),f("span",_o,[zo,l("span",{innerHTML:e.citation.internalComment},null,8,Ao),Fo])):A("",!0),e.citation.referringUrl?(h(),f("span",Co,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,Eo),Wo])):A("",!0),e.citation.archiveUrl?(h(),f("span",Lo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,xo),To])):A("",!0),e.citation.localCopy?(h(),f("span",Vo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,Oo),Io])):A("",!0)]))}}),Mo=M({props:{chartData:null,paramId:null,selectedYear:null},emits:["update:selectedYear"],setup(e,{emit:t}){const n=e,r="#9c6d00",i="#ce900070",o="#644600",u=z(()=>({xaxis:{categories:de,labels:{rotate:-90}},chart:{id:n.paramId+"-withLawEffects",animations:{enabled:!1},stacked:!0},colors:[r,o,i],legend:{show:!1},markers:{size:0},dataLabels:{enabled:!1}})),m=z(()=>n.chartData.values.map((D,E)=>({value:D[n.paramId],change:n.chartData.changes[E][n.paramId]}))),c=z(()=>m.value.map(D=>{const E=D.value-D.change;return D.change*D.value>0?E*D.value>0?{value:E,gain:D.change,loss:0}:{value:0,gain:D.value,loss:E}:{value:D.value,gain:0,loss:-D.change}})),g=z(()=>[{name:"Simulated "+n.paramId,data:c.value.map(D=>Math.round(D.value))},{name:"Gains of "+n.paramId+" by selected law",data:c.value.map(D=>Math.round(D.gain))},{name:"Losses of "+n.paramId+" by selected law",data:c.value.map(D=>Math.round(D.loss))}]),k=X();let p;function d(){var D,E;((D=k.value)==null?void 0:D.chart)!=null&&p!=null&&((E=k.value)==null||E.toggleDataPointSelection(0,p)),p=void 0}function _(D){var E,B;if(((E=k.value)==null?void 0:E.chart)!=null&&D){const j=D-de[0];p!=j&&(d(),p=j,(B=k.value)==null||B.toggleDataPointSelection(0,j))}else d()}qt(()=>_(n.selectedYear),{flush:"post"});function T(D,E,B){const j=B.dataPointIndex;j<0||(j===p?(p=void 0,t("update:selectedYear",void 0)):(p=j,t("update:selectedYear",j+de[0])))}return(D,E)=>(h(),f("div",null,[l("div",null,S(e.paramId),1),I(C(Xt),{ref:(B,j)=>{j.chart=B,k.value=B},type:"bar",options:C(u),series:C(g),onClick:T},null,8,["options","series"])]))}}),$o=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"DaemmungAltbau4Percent",effectiveSince:2022},{lawId:"ForschungEmissionsfreieZementproduktion",effectiveSince:2023},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024},{lawId:"ForschungEmissionsfreieStahlproduktion",effectiveSince:2024},{lawId:"FernverkehrModernisieren",effectiveSince:2025},{lawId:"NahverkehrModernisieren",effectiveSince:2026},{lawId:"FernverkehrVerbindungenAusbauen",effectiveSince:2026},{lawId:"NahverkehrAusbauen",effectiveSince:2026},{lawId:"LadeinfrastrukturAusbauen",effectiveSince:2026},{lawId:"NahverkehrKostenlos",effectiveSince:2027},{lawId:"DienstwagenPrivilegAbgeschaffen",effectiveSince:2027},{lawId:"ElektromobilitaetFoerdern",effectiveSince:2027},{lawId:"WasserstoffmobilitaetFoerdern",effectiveSince:2027}]}],Ae=(e,t)=>e.lawId===t.lawId&&e.effectiveSince===t.effectiveSince,No=e=>e.map((t,n)=>G(x({},t),{sortId:n}));function Go(...e){const t=e.map(n=>n.length===0?0:n[n.length-1].sortId+1);return t.length===0?0:Math.max.apply(Math,t)}function Uo(e){const t=X([]),n=X([]),r=X(!1);function i(T,D){var He;const E=t.value,B={lawId:T,effectiveSince:D,sortId:0},j=(He=n.value.find(me=>Ae(B,me)))==null?void 0:He.sortId;B.sortId=j!=null?j:Go(E,n.value),t.value=E.filter(me=>me.lawId!=T).concat(B).sort((me,$t)=>me.sortId-$t.sortId)}function o(T){t.value=t.value.filter(D=>D.lawId!=T)}function u(T,D){const E={lawId:T,effectiveSince:D,sortId:0};t.value.some(B=>Ae(B,E))?o(T):i(T,D)}function m(T){t.value=No(T.laws)}function c(){r.value=!r.value,r.value?n.value=t.value:n.value=[]}const g=z(()=>{var T;return{name:"Current Game",laws:((T=e.value)==null?void 0:T.acceptedLaws)||[]}}),k=z(()=>[g.value,...$o]),p=z(()=>{const T=t.value.map(E=>G(x({},E),{cls:n.value.some(B=>Ae(E,B))?"both":"new"})),D=n.value.filter(E=>!t.value.some(B=>Ae(B,E))).map(E=>G(x({},E),{cls:"saved"}));return[...T,...D].sort((E,B)=>E.sortId-B.sortId)}),d=Mt(t),_=Mt(n);return{addToSimulation:i,removeFromSimulation:o,toggleInSimulation:u,loadPreset:m,compareActive:r,toggleCompare:c,presets:k,simulatedLaws:p,simulation:d,secondSimulation:_}}function Mt(e){return z(()=>{const t=At();return t.acceptedLaws=[...e.value],de.map(r=>{for(;r>t.currentYear;){t.currentYear++,t.acceptedLaws=Ko(t.acceptedLaws,t.currentYear);const i=t.acceptedLaws.map(m=>be(m)),{values:o,effectsOfLaws:u}=Ft(t,i,t.currentYear);if(t.values=o,r===t.currentYear)return{values:o,effectsOfLaws:u}}return{values:t.values,effectsOfLaws:{}}})})}function Ko(e,t){const n=e.map(i=>be(i)),r=n.filter(i=>i.effectiveSince===t).flatMap(i=>i.removeLawsWithLabels||[]);return n.filter(i=>i.effectiveSince>=t||!r.some(o=>{var u;return(u=i.labels)==null?void 0:u.includes(o)})).map(i=>({lawId:i.id,effectiveSince:i.effectiveSince}))}const Jo=M({directives:{clickaway:Qe},setup(e,t){const n=X(!1);return{menuIsOpen:n,toggle:()=>n.value=!n.value,close:()=>n.value=!1}}});function Ho(e,t,n,r,i,o){const u=en("clickaway");return tn((h(),f("span",{onClick:t[0]||(t[0]=(...m)=>e.toggle&&e.toggle(...m)),class:N(["menu",{menuIsOpen:e.menuIsOpen}])},[We(e.$slots,"default",{},void 0,!0)],2)),[[u,e.close]])}var jo=$(Jo,[["render",Ho],["__scopeId","data-v-06206e01"]]);const Zo=M({directives:{clickaway:Qe},components:{Citation:Bo,PeekChart:Mo,Menu:jo},setup(){const e=oe(),t=z(()=>e.state.game),n=Uo(t);return x({store:e,game:t,gameYears:de},n)},data(){return{lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lastSelected:void 0,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,yearSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1}},methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){e===this.lawSelected?this.lawSelected=void 0:(this.lastSelected="law",this.lawSelected=e)},selectEvent(e){e===this.eventSelected?this.eventSelected=void 0:(this.lastSelected="event",this.eventSelected=e)},selectParam(e){e===this.paramSelected?this.paramSelected=void 0:(this.lastSelected="param",this.paramSelected=e)},selectYear(e){e===this.yearSelected?this.yearSelected=void 0:(this.lastSelected="year",this.yearSelected=e)},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0,this.yearSelected=void 0},dragStart(e,t){const{lawId:n,year:r}=t;!e.dataTransfer||(e.dataTransfer.dropEffect="link",n&&e.dataTransfer.setData("lawId",n),r&&e.dataTransfer.setData("year",r.toString()))},getDropped(e,t,n){if(!e.dataTransfer)return;const r=e.dataTransfer.getData(t);return n.find(i=>i==r)},onDrop(e,t){const{lawId:n,year:r}=t,i=this.getDropped(e,"lawId",ki),o=this.getDropped(e,"year",this.gameYears);r&&i?this.addToSimulation(i,r):n&&o?this.addToSimulation(n,o):n&&i&&this.removeFromSimulation(i)},rightClick(e,t){this.toggleInSimulation(e,t)}},computed:{startYearOfSelected(){if(!this.lawSelected)return;if(!this.game)return le;const e=this.simulatedLaws.find(t=>t.lawId===this.lawSelected);return e?e.effectiveSince:this.game.currentYear},selectedLaw(){return ae.find(e=>e.id===this.lawSelected)},lawEffort(){var e;if(!!this.game)return(e=this.selectedLaw)==null?void 0:e.effort(this.game)},selectedEvent(){return ze.find(e=>e.id===this.eventSelected)},selectedParam(){return this.paramSelected?Q[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof P?e:void 0},cParam(){const e=this.selectedParam;return e instanceof Z?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},currentYear(){return this.yearSelected?this.yearSelected:this.game?this.game.currentYear:le},effectsOfSelected(){return!this.selectedLaw||!this.startYearOfSelected||!this.game?[]:this.selectedLaw.effects(this.game,this.startYearOfSelected,this.currentYear)},sortedValues(){return this.game?go(this.simOfYear.values,this.effectsOfLawInYear,this.effectsOfSelected):[]},sortedLaws(){return this.game?fo(this.game,this.lawsSortCol,this.lawsSortDir,ae):[]},sortedEvents(){return this.game?po(this.game,this.eventsSortCol,this.eventsSortDir,ze):[]},effectsOfLawInYear(){if(this.lawSelected)return this.simOfYear.effectsOfLaws[this.lawSelected];if(this.yearSelected)return this.simEffectOfLaw[this.yearSelected-this.gameYears[0]]},simOfYear(){if(this.yearSelected===void 0&&this.game){const e=this.effectsOfSelected,t=this.game.values;if(this.lawSelected===void 0||e.length===0)return{values:t,effectsOfLaws:{}};const n=ce(t);Be({dispatch:()=>{},values:n},e);const i=Object.fromEntries(vt.map(o=>[o,n[o]-t[o]]));return{values:t,effectsOfLaws:{[this.lawSelected]:i}}}else{const e=this.yearSelected?this.yearSelected-this.gameYears[0]:0;return this.simulation[e]}},simulatedValues(){return this.simulation.map(e=>e.values)},simEffectOfLaw(){if(this.lawSelected){const e=this.lawSelected;return this.simulation.map(t=>{const n=t.effectsOfLaws[e];return n||St})}return this.compareActive?this.secondSimulation.map((e,t)=>Object.fromEntries(Object.entries(e.values).map(([n,r])=>[n,this.simulation[t].values[n]-r]))):de.map(e=>St)},chartData(){return{values:this.simulatedValues,changes:this.simEffectOfLaw}},lawsInYear(){return e=>this.simulatedLaws.filter(t=>t.effectiveSince===e)}}}),q=e=>(ge("data-v-85b0da02"),e=e(),fe(),e),Ro={class:"peekData"},Qo={class:"Menu"},Yo=U("\xA0 "),qo=U("\xA0 "),Xo=U("\xA0 "),el=U("\xA0 "),tl=U("\xA0 "),nl=U("\xA0 "),rl={key:1,class:"Details sidebyside"},il={class:"Title"},sl={class:"Description"},al={class:"SectionHead"},ol={class:"Section"},ll=q(()=>l("div",{class:"SectionHead"},"Details:",-1)),ul=["innerHTML"],cl=q(()=>l("div",{class:"SectionHead"},"Internes:",-1)),dl=["innerHTML"],hl=q(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),ml={key:2,class:"Details sidebyside"},gl={class:"Title"},fl={class:"Description"},pl=q(()=>l("div",{class:"SectionHead"},"Details:",-1)),bl=["innerHTML"],vl=q(()=>l("div",{class:"SectionHead"},"Internes:",-1)),wl=["innerHTML"],yl=q(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),kl={key:3,class:"Details sidebyside"},Sl={class:"Title"},Dl={key:0},Pl={key:1},_l={key:2},zl=q(()=>l("div",{class:"SectionHead"},"Details:",-1)),Al=["innerHTML"],Fl=q(()=>l("div",{class:"SectionHead"},"Internes:",-1)),Cl=["innerHTML"],El=q(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),Wl={class:"paramsHeader"},Ll=["onClick"],xl={class:"numbercol"},Tl={class:"effcol"},Vl={key:5,class:"lawList sidebyside"},Ol=["onClick","onDragstart","onDrop"],Il={class:"priocol"},Bl={key:6,class:"eventList sidebyside"},Ml=["onClick"],$l={class:"priocol"},Nl={key:7,class:"yearList sidebyside"},Gl=q(()=>l("a",{class:"clickable"},"Presets",-1)),Ul={class:"dropdown"},Kl=["onClick"],Jl=U("\xA0 "),Hl=["onClick","onDragstart","onDrop"],jl=["onClick","onContextmenu","onDragstart","onDrop"];function Zl(e,t,n,r,i,o){var g,k,p;const u=re("PeekChart"),m=re("Citation"),c=re("Menu");return h(),f("details",Ro,[l("summary",{onClick:t[0]||(t[0]=d=>e.unselect()),class:"clickable"},"Peek"),l("div",Qo,[l("a",{onClick:t[1]||(t[1]=d=>e.showCharts=!e.showCharts),class:N(["clickable",e.showCharts?"selected":""])},"Charts",2),Yo,l("a",{onClick:t[2]||(t[2]=d=>e.showDetails=!e.showDetails),class:N(["clickable",e.showDetails?"selected":""])},"Details",2),qo,l("a",{onClick:t[3]||(t[3]=d=>e.showParams=!e.showParams),class:N(["clickable",e.showParams?"selected":""])},"Params",2),Xo,l("a",{onClick:t[4]||(t[4]=d=>e.toggleLawList()),class:N(["clickable",e.showLaws?"selected":""])},"Laws",2),el,l("a",{onClick:t[5]||(t[5]=d=>e.toggleEventList()),class:N(["clickable",e.showEvents?"selected":""])},"Events",2),tl,l("a",{onClick:t[6]||(t[6]=d=>e.showYears=!e.showYears),class:N(["clickable",e.showYears?"selected":""])},"Years",2),nl]),e.showCharts?(h(),f("div",{key:0,class:N(["Details sidebyside",{lawSelected:e.lawSelected!=null}])},[e.paramSelected?(h(),ee(u,{key:0,selectedYear:e.yearSelected,"onUpdate:selectedYear":t[7]||(t[7]=d=>e.yearSelected=d),chartData:e.chartData,paramId:e.paramSelected},null,8,["selectedYear","chartData","paramId"])):A("",!0),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[8]||(t[8]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"co2emissions"},null,8,["selectedYear","chartData"]),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[9]||(t[9]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"popularity"},null,8,["selectedYear","chartData"]),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[10]||(t[10]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"stateDebt"},null,8,["selectedYear","chartData"]),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[11]||(t[11]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"co2budget"},null,8,["selectedYear","chartData"])],2)):A("",!0),e.lastSelected==="law"&&e.selectedLaw&&e.showDetails?(h(),f("div",rl,[l("div",il,S(e.selectedLaw.title),1),l("div",sl,S(e.selectedLaw.description),1),l("div",al,"Aufwand: "+S((g=e.lawEffort)==null?void 0:g.time.toMonthsString()),1),l("div",ol,S((k=e.lawEffort)==null?void 0:k.text),1),ll,l("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,ul),cl,l("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,dl),hl,(h(!0),f(J,null,R(e.citationsOfLaw,(d,_)=>(h(),ee(m,{class:"Section",key:_,citation:d},null,8,["citation"]))),128))])):A("",!0),e.lastSelected==="event"&&e.selectedEvent&&e.showDetails?(h(),f("div",ml,[l("div",gl,S(e.selectedEvent.title),1),l("div",fl,S(e.selectedEvent.description),1),pl,l("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,bl),vl,l("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,wl),yl,(h(!0),f(J,null,R((p=e.selectedEvent)==null?void 0:p.citations,(d,_)=>(h(),ee(m,{class:"Section",key:_,citation:d},null,8,["citation"]))),128))])):A("",!0),e.lastSelected==="param"&&e.selectedParam&&e.showDetails?(h(),f("div",kl,[l("div",Sl,S(e.paramSelected)+" ["+S(e.selectedParam.unit)+"]",1),e.wParam?(h(),f("div",Dl,"Initial value: "+S(e.wParam.initialValue)+" "+S(e.wParam.unit),1)):A("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(h(),f("div",Pl," Should initially be: "+S(e.cParam.shouldInitiallyBe)+" "+S(e.cParam.unit),1)):A("",!0),e.cParam?(h(),f("div",_l," Calculation: "+S(e.cParam.valueGetter),1)):A("",!0),zl,l("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,Al),Fl,l("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,Cl),El,(h(!0),f(J,null,R(e.selectedParam.citations,(d,_)=>(h(),ee(m,{class:"Section",key:_,citation:d},null,8,["citation"]))),128))])):A("",!0),e.showParams?(h(),f("div",{key:4,class:N(["paramsList sidebyside",{lawSelected:e.lawSelected!=null}])},[l("div",Wl,[l("div",null,"Start of law: "+S(e.startYearOfSelected),1),l("div",null,"Current year: "+S(e.currentYear),1)]),l("table",null,[(h(!0),f(J,null,R(e.sortedValues,d=>(h(),f("tr",{key:d.id,class:N({clickable:!0,selected:e.paramSelected===d.id,[d.class]:!0}),onClick:_=>e.selectParam(d.id)},[l("td",null,S(d.id),1),l("td",xl,S(d.value),1),l("td",Tl,S(d.effect),1),l("td",null,S(d.unit),1)],10,Ll))),128))])],2)):A("",!0),e.showLaws?(h(),f("div",Vl,[l("table",null,[l("tr",null,[l("th",{onClick:t[12]||(t[12]=d=>e.sortLaws("state")),class:"clickable"},"S"),l("th",{onClick:t[13]||(t[13]=d=>e.sortLaws("id")),class:"clickable"},"ID"),l("th",{onClick:t[14]||(t[14]=d=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(h(!0),f(J,null,R(e.sortedLaws,d=>(h(),f("tr",{key:d.id,class:N({clickable:!0,selected:e.lawSelected===d.id,[d.state]:!0}),onClick:_=>e.selectLaw(d.id),draggable:"true",onDragstart:_=>e.dragStart(_,{lawId:d.id}),onDrop:Y(_=>e.onDrop(_,{lawId:d.id}),["prevent"]),onDragover:t[15]||(t[15]=Y(()=>{},["prevent"])),onDragenter:t[16]||(t[16]=Y(()=>{},["prevent"]))},[l("td",null,S(d.state),1),l("td",null,S(d.id),1),l("td",Il,S(d.priority),1)],42,Ol))),128))])])):A("",!0),e.showEvents?(h(),f("div",Bl,[l("table",null,[l("tr",null,[l("th",{onClick:t[17]||(t[17]=d=>e.sortEvents("id")),class:"clickable"},"ID"),l("th",{onClick:t[18]||(t[18]=d=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(h(!0),f(J,null,R(e.sortedEvents,d=>(h(),f("tr",{key:d.id,class:N({clickable:!0,selected:e.eventSelected===d.id}),onClick:_=>e.selectEvent(d.id)},[l("td",null,S(d.id),1),l("td",$l,S(d.probability),1)],10,Ml))),128))])])):A("",!0),e.showYears?(h(),f("div",Nl,[l("div",null,[I(c,null,{default:we(()=>[Gl,l("ul",Ul,[(h(!0),f(J,null,R(e.presets,d=>(h(),f("li",{key:d.name,class:"clickable",onClick:_=>e.loadPreset(d)},S(d.name),9,Kl))),128))])]),_:1}),Jl,l("a",{class:N(["clickable",e.compareActive?"selected":""]),onClick:t[19]||(t[19]=d=>e.toggleCompare())},"Compare",2)]),l("table",null,[(h(!0),f(J,null,R(e.gameYears,d=>(h(),f(J,{key:d},[l("tr",{class:N({clickable:!0,selected:e.yearSelected===d}),onClick:_=>e.selectYear(d),draggable:"true",onDragstart:_=>e.dragStart(_,{year:d}),onDrop:Y(_=>e.onDrop(_,{year:d}),["prevent"]),onDragover:t[20]||(t[20]=Y(()=>{},["prevent"])),onDragenter:t[21]||(t[21]=Y(()=>{},["prevent"]))},[l("th",null,S(d),1)],42,Hl),(h(!0),f(J,null,R(e.lawsInYear(d),({lawId:_,cls:T})=>(h(),f("tr",{key:_,class:N({clickable:!0,selected:e.lawSelected===_,[T]:!0}),onClick:D=>e.selectLaw(_),onContextmenu:Y(D=>e.rightClick(_,d),["right","prevent"]),draggable:"true",onDragstart:D=>e.dragStart(D,{lawId:_}),onDrop:Y(D=>e.onDrop(D,{year:d}),["prevent"]),onDragover:t[22]||(t[22]=Y(()=>{},["prevent"])),onDragenter:t[23]||(t[23]=Y(()=>{},["prevent"]))},[l("td",null,S(_),1)],42,jl))),128))],64))),128))])])):A("",!0)])}var Rl=$(Zo,[["render",Zl],["__scopeId","data-v-85b0da02"]]);const Ql=M({components:{PeekInside:Rl},setup(){return{store:oe(),devMode:localStorage.getItem("devMode")==="true"}},methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,n=Math.min(e/800,t/1e3),r=(t-1e3*n)/2;document.documentElement.style.setProperty("--scale",`${n}`),document.documentElement.style.setProperty("--translateX",`${r}px`)}},mounted(){setTimeout(this.updateStyle,0),window.addEventListener("resize",this.updateStyle)}}),Yl={class:"perspective"},ql={class:"peek"};function Xl(e,t,n,r,i,o){const u=re("router-view"),m=re("PeekInside");return h(),f(J,null,[l("div",Yl,[I(u)]),l("div",ql,[e.devMode?(h(),ee(m,{key:0})):A("",!0)])],64)}var eu=$(Ql,[["render",Xl]]);const Je=nn(eu);Je.use(mo,It);Je.use(Ot);Je.mount("#app");
