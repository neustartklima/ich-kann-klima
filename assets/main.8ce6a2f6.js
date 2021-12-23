var Bt=Object.defineProperty,$t=Object.defineProperties;var Nt=Object.getOwnPropertyDescriptors;var He=Object.getOwnPropertySymbols;var Ut=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable;var Fe=(e,t,n)=>t in e?Bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))Ut.call(t,n)&&Fe(e,n,t[n]);if(He)for(var n of He(t))Gt.call(t,n)&&Fe(e,n,t[n]);return e},G=(e,t)=>$t(e,Nt(t));var x=(e,t,n)=>(Fe(e,typeof t!="symbol"?t+"":t,n),n);import{D as Ce,a as je,s as Re,b as Kt,v as Jt,d as B,r as X,c as _,o as h,e as g,f as l,g as F,t as k,n as N,h as Ee,u as E,p as fe,i as pe,F as J,j as Z,k as ee,l as I,m as K,q as We,w as re,x as we,y as Ht,z as jt,A as Rt,B as Zt,C as Qt,V as qt,E as Ze,G as Yt,H as Xt,I as Q,J as en}from"./vendor.5ac37eb4.js";const tn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};tn();const nn={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};class Le{constructor(t){x(this,"lux");t instanceof je?this.lux=t.setLocale("de-DE").setZone("Europe/Berlin"):this.lux=je.fromISO(t,{zone:"Europe/Berlin",locale:"de-DE"})}static durationBetween(t,n){return new xe(n.lux.diff(t.lux,["months"]))}plus(t){return new Le(this.lux.plus(t.lux))}getYear(){return this.lux.get("year")}toLocaleString(){return this.lux.toLocaleString(nn)}toMonthString(){return this.lux.toLocaleString({month:"long",year:"numeric"})}toJSON(){return this.lux.toJSON()}}class xe{constructor(t){x(this,"lux");t instanceof Ce?this.lux=t:this.lux=Ce.fromISO(t,{locale:"de-DE"})}toMonthsString(){const t=this.lux.as("months");return t===1?"1 Monat":t+" Monate"}}function ye(e){return new Le(e)}function Qe(e){return new xe(e)}function rn(e){return new xe(Ce.fromDurationLike({month:e}))}const le=2021,sn="2021-01-01",qe=2050,Ye=Qe("P3M"),an=Qe("P3M"),Xe=6,on=.6;function O(e){return e}const be={newYear:2,timesUp:3,finanzKollaps:4,wahlVerloren:5,hitzehoelle:6};var ln=O({title:"Abstandsregeln f\xFCr Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erh\xF6ht wird. Das f\xFChrte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply(){return[]}});let Te=Re("",{state:!0}),et=()=>Math.abs(Te());function Ve(e){Te=Re(e.id,{state:e.prngState})}function un(){return Te.state()}const cn=e=>({time:Ye,text:`Braucht ${Ye.toMonthsString()}.`});function w(e,t="Braucht {months}."){const n=rn(e),r=t.replace(/{months}/g,n.toMonthsString());return{time:n,text:r}}function y(e){return e}var dn=y({title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bew\xE4hrt. Wir lassen sie so, wie sie sind.",effort(e){return w(3,"Wie aussitzen: {months}.")},effects(){return[]},priority(e){return et()}});const hn=new Kt.exports.Converter;function tt(e){return e>0?[...Array(e)].map((t,n)=>n):[]}function nt(e,t){const n=e-t-1;return[...tt(t),Math.max(t,n),...tt(n).reverse()]}function a(e,...t){let n=e.map((i,s)=>i+(t[s]||"")).join("").split(`
`);n[0].length===0&&n.shift();const r=n[0].match(/^(\s+)/);return r&&!n.filter(i=>i.trim()).some(i=>!i.startsWith(r[1]))&&(n=n.map(i=>i.replace(r[1],""))),hn.makeHtml(n.join(`
`))}function Oe(e){return t=>!e(t)}function rt(e){return Object.entries(e).map(([t,n])=>G(T({},n),{id:t}))}const gn=new Intl.DateTimeFormat("de-DE");class C{constructor(t){x(this,"url");x(this,"title");x(this,"publisher");x(this,"authors");x(this,"date");x(this,"comment");x(this,"internalComment");x(this,"localCopy");x(this,"referringUrl");x(this,"archiveUrl");x(this,"archiveNotPossible");this.url=new URL(t.url),this.title=t.title,this.publisher=t.publisher,this.authors=t.authors,this.date=t.date?new Date(t.date):void 0,this.comment=t.comment,this.internalComment=t.internalComment,this.localCopy=t.localCopy,this.referringUrl=t.referringUrl?new URL(t.referringUrl):void 0,this.archiveUrl=t.archiveUrl?new URL(t.archiveUrl):void 0,this.archiveNotPossible=t.archiveNotPossible}dateString(){const t=this.date;return t?" ("+gn.format(t)+")":""}toString(){const t=this.authors?this.authors+this.dateString():void 0,n=this.title?'"'+this.title+'"':void 0;return[t,n,this.url,this.publisher].filter(r=>r).join(", ")}}function L(e){const t=e.publisher||e.authors,n=t!=null?t+": ":"",r=e.title||e.url.toString(),i=e.url.toString();return`[[${n}${r}](${i})]`}const mn=e=>e.map(t=>t.toString()).join("; "),fn=new C({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),te=new C({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),it=new C({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"}),st=new C({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineral\xF6lsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),at=new C({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile f\xFCr wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),ke=new C({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),pn=new C({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schl\xFCsselergebnisse der Studie des Wuppertal Instituts f\xFCr Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${L(ke)}.`});ke.comment=a`Zusammengefasst in ${L(pn)}.`;const H=new C({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahresch\xE4tzung der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),bn=new C({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),Se=new C({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enth\xE4lt CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] f\xFCr mehrere Verkehrsmittel"}),De=new C({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),ot=new C({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Stra\xDFeng\xFCterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),ie=new C({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enth\xE4lt Personenkilometer-Jahreswerte f\xFCr mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),lt=new C({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung \xD6PNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),Ie=new C({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),vn=new C({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new C({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren f\xFCr Fernw\xE4rme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const ut=new C({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),wn=new C({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),ct=new C({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle w\xE4re besser."}),yn=new C({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bev\xF6lkerung nach Nationalit\xE4t und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),kn=new C({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur f\xFCr Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),Sn=new C({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische \xC4mter des Bundes und der L\xE4nder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new C({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const dt=new C({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgem\xE4\xDF - Interview mit Prof. Stefan G\xF6ssling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""}),Dn=new C({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),ht=new C({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),Pn=new C({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),gt=new C({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten f\xFCr die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class mt{constructor(t){x(this,"unit");x(this,"citations");x(this,"details");x(this,"internals");this.unit=t.unit,this.citations=t.citations?t.citations:[],this.details=t.details?t.details:"",this.internals=t.internals?t.internals:""}citationsDesc(){return mn(this.citations)}}const _n={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class P extends mt{constructor(t){super(t);x(this,"writable",!0);x(this,"initialValue");x(this,"applyBounds");this.initialValue=t.initialValue,this.applyBounds=_n[t.unit]}}class j extends mt{constructor(t){super(t);x(this,"writable",!1);x(this,"valueGetter");x(this,"shouldInitiallyBe");this.valueGetter=t.valueGetter,this.shouldInitiallyBe=t.shouldInitiallyBe}}const zn=new P({unit:"MioTons",initialValue:6700,citations:[fn],details:a`

  `,internals:a`

  `}),An=new P({unit:"MioTons",initialValue:186.793,citations:[H],details:a`

  `,internals:a`

  `}),Fn=new j({unit:"MioTons",valueGetter(e){return e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4},shouldInitiallyBe:159.696,citations:[H,ot],details:a`

  `,internals:a`
    ${L(H)}: 159.696 as MioTons

    ${L(ot)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Cn=new j({unit:"MioTons",valueGetter(e){return e.co2emissionsStreetVehicles+e.publicLocalCapacity*65/1e6+e.publicNationalCapacity*32/1e6+e.airDomesticUsage*222/1e6+1.641},citations:[Se,H],details:a`

  `,internals:a`
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
  `}),En=new j({unit:"MioTons",valueGetter(e){return e.buildingsSourceBio*0+e.buildingsSourceGas*.247+e.buildingsSourceOil*.318+e.buildingsSourceTele*.16},citations:[H,Ie],details:a`

  `,internals:a`
    TODO: #91 Gibt es hier bessere Quellen?

    ${L(Ie)}: 247g CO2 pro kWh Erdgas.

    ${L(Ie)}: 318g CO2 pro kWh Erdöl.

    ${L(vn)}: 160g CO2 pro kWh Fernwärme.

    ${L(H)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),Wn=new P({unit:"MioTons",initialValue:67.936,citations:[H],details:a`

  `,internals:a`

  `}),Ln=new P({unit:"MioTons",initialValue:9.243,citations:[H],details:a`

  `,internals:a`

  `}),xn=new j({unit:"MioTons",valueGetter(e){return e.electricityGas*.399+e.electricitySolar*.058+e.electricityWind*.005+e.electricityWater*.02+e.electricityHardCoal*.835+e.electricityBrownCoal*1.137+e.electricityBiomass*.03+e.electricityNuclear*.005},citations:[ut,H],details:a`

  `,internals:a`
    ${L(ut)}:
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
    - Diskrepanz zu ${L(wn)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${L(H)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),Tn=new j({unit:"MioTons",valueGetter(e){return e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers},details:a`

  `,internals:a`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${L(H)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[bn]}),Vn=new P({unit:"TWh",initialValue:480.54,citations:[te],details:a`

  `,internals:a`

  `}),On=new P({unit:"Percent",initialValue:50,citations:[],details:a`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:a`

  `}),In=new P({unit:"TWh",initialValue:51.42,citations:[te],details:a`

  `,internals:a`

  `}),Me=new P({unit:"TWh",initialValue:131.85,citations:[te],details:a`

  `,internals:a`

  `});function Mn(e,t){const n=e.value-t.value;return r=>{const i=e.result*(r-t.value)/n,s=t.result*(r-e.value)/n;return i-s}}const Bn=new j({unit:"TWh",valueGetter(e){const t=Me.initialValue,n=e.electricityGridQuality,r=e.electricityDemand,i=Mn({value:50,result:t},{value:100,result:r})(n);return Math.min(i,e.electricityWind)},shouldInitiallyBe:Me.initialValue,citations:[],details:a`
The electrical energy produced by wind and not impaired by poor quality of the grid.
  `,internals:a`

  `}),$n=new P({unit:"TWh",initialValue:6,citations:[te],details:a`

  `,internals:a`

  `}),Nn=new P({unit:"Percent",initialValue:100,citations:[Pn],details:a`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),Un=new P({unit:"TWh",initialValue:14.99,citations:[te],details:a`

  `,internals:a`

  `}),Gn=new P({unit:"TWh",initialValue:43.19,citations:[te],details:a`

  `,internals:a`

  `}),Kn=new P({unit:"TWh",initialValue:60.91,citations:[te],details:a`

  `,internals:a`

  `}),Jn=new P({unit:"TWh",initialValue:35.46,citations:[te],details:a`

  `,internals:a`

  `}),Hn=new P({unit:"TWh",initialValue:82.13,citations:[te],details:a`

  `,internals:a`

  `}),jn=new j({unit:"TWh",valueGetter(e){return e.electricityHardCoal+e.electricityBrownCoal},details:a`

  `,internals:a`

  `}),Rn=new j({unit:"TWh",valueGetter(e){return e.electricityDemand-e.electricitySolar-e.electricityWindUsable-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear},details:a`

  `,internals:a`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),Zn=new P({unit:"GramPerPsgrKm",initialValue:160,citations:[Se],details:a`

  `,internals:a`
    ${L(Se)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),Qn=new P({unit:"MioPsgrKm",initialValue:917e3,citations:[ie],details:a`

  `,internals:a`

  `}),qn=new P({unit:"Percent",initialValue:.5,citations:[ct],details:a`

  `,internals:a`
    Die verschiedenen Zahlen in ${L(ct)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),Yn=new P({unit:"MioPsgrKm",initialValue:112600,citations:[ie],details:a`

  `,internals:a`

  `}),Xn=new P({unit:"MioPsgrKm",initialValue:112600,citations:[ie],details:a`

  `,internals:a`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),er=new P({unit:"MioPsgrKm",initialValue:67300,citations:[ie],details:a`

  `,internals:a`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),tr=new P({unit:"MioPsgrKm",initialValue:67300,citations:[ie],details:a`

  `,internals:a`
Siehe \`publicLocalCapacity\`.
  `}),nr=new P({unit:"MioPsgrKm",initialValue:10100,citations:[ie],details:a`

  `,internals:a`

  `}),rr=new P({unit:"MioPsgrKm",initialValue:61700,citations:[ie],details:a`

  `,internals:a`

  `}),ir=new j({unit:"MioPsgrKm",valueGetter(e){return e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage},shouldInitiallyBe:1168700,citations:[ie],details:a`

  `,internals:a`

  `}),sr=new P({unit:"TWh",initialValue:226,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),ar=new P({unit:"TWh",initialValue:544,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),or=new j({unit:"TWh",valueGetter(e){return e.buildingsPrivateDemand+e.buildingsIndustryDemand},shouldInitiallyBe:770,citations:[],details:a`

  `,internals:a`
    TODO: #78 Quelle ${L(gt)} gibt diese Zahlen nicht her.
  `}),lr=new P({unit:"TWh",initialValue:130,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),ur=new P({unit:"TWh",initialValue:219,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),cr=new P({unit:"TWh",initialValue:58,citations:[],details:a`

  `,internals:a`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),dr=new j({unit:"TWh",valueGetter(e){return e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele)},citations:[],details:a`

  `,internals:a`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${L(gt)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),hr=new P({unit:"Percent",initialValue:50,citations:[],details:a`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:a`

  `}),gr=new P({unit:"TsdPeople",initialValue:83155.031,citations:[yn],details:a`

  `,internals:a`
Anfangswert ist der Stand 31.12.2020.
  `}),mr=new P({unit:"TsdPeople",initialValue:2695,citations:[kn],details:a`

  `,internals:a`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),fr=new P({unit:"MrdEuro",initialValue:3332,citations:[Sn],details:a`

  `,internals:a`
Anfangswert ist das BIP 2020.
  `}),pr=new P({unit:"MrdEuro",initialValue:1899,citations:[],details:a`

  `,internals:a`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),q={co2budget:zn,co2emissionsIndustry:An,co2emissionsStreetVehicles:Fn,co2emissionsMobility:Cn,co2emissionsAgriculture:Wn,co2emissionsBuildings:En,co2emissionsOthers:Ln,co2emissionsEnergy:xn,co2emissions:Tn,electricityDemand:Vn,electricityGridQuality:On,electricitySolar:In,electricityWind:Me,electricityWindUsable:Bn,electricityWindOnshoreMaxNew:$n,electricityWindEfficiency:Nn,electricityWater:Un,electricityBiomass:Gn,electricityNuclear:Kn,electricityHardCoal:Jn,electricityBrownCoal:Hn,electricityCoal:jn,electricityGas:Rn,carEmissionFactor:Zn,carUsage:Qn,carRenewablePercentage:qn,publicLocalUsage:Yn,publicLocalCapacity:Xn,publicNationalUsage:er,publicNationalCapacity:tr,airDomesticUsage:nr,airIntlUsage:rr,passengerTransportUsage:ir,buildingsIndustryDemand:sr,buildingsPrivateDemand:ar,buildingsDemand:or,buildingsSourceBio:lr,buildingsSourceOil:ur,buildingsSourceTele:cr,buildingsSourceGas:dr,popularity:hr,numberOfCitizens:gr,unemployment:mr,gdp:fr,stateDebt:pr},br=Object.entries(q).filter(e=>e[1]instanceof P).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),ft=Object.entries(q).filter(e=>e[1]instanceof j).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),pt=Object.keys(q);class bt extends P{constructor(t,n){super(t);x(this,"name");this.name=n}}const vr=Object.entries(br).map(e=>new bt(e[1],e[0]));class vt extends j{constructor(t,n){super(t);x(this,"name");this.name=n}}Object.entries(ft).map(e=>new vt(e[1],e[0]));const wt=Object.entries(q).map(e=>e[1]instanceof P?new bt(e[1],e[0]):new vt(e[1],e[0])),ue=vr.reduce((e,t)=>(e[t.name]=t.initialValue,e),{}),yt=wt.reduce((e,t)=>(e[t.name]=0,e),{});function ce(e){const t=T({},e);return Object.entries(ft).forEach(n=>Object.defineProperty(t,n[0],{enumerable:!0,get:()=>n[1].valueGetter(t)})),t}function wr(e){return T({},e)}function se(e,t){return{type:"dispatch",condition:!0,if(n){return this.condition=n,this},apply(n){this.condition&&n.dispatch(e,t)}}}function o(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(t){return this.percent=t,this},byValue(t){return this.value=t,this},setValue(t){return this.absolute=t,this},if(t){return this.condition=t,this},getOldNew(t){const n=this.name,r=t[n];if(!this.condition)return{oldVal:r,newVal:r};const i=q[n],s=this.absolute!=null?this.absolute:r+(this.value||r*this.percent/100),u=i.applyBounds(s);return{oldVal:r,newVal:u}},getChange(t){if(!this.condition)return 0;const{oldVal:n,newVal:r}=this.getOldNew(t);return r-n},apply(t){if(this.condition){const{newVal:n}=this.getOldNew(t.values);t.values[this.name]=n}return this}}}function A(e,t){if(q[e].unit!=q[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(n){return this.percent=n,this},byValue(n){return this.value=n,this},if(n){return this.condition=n,this},getEffect(n){const r=n[this.to],i=n[this.from];if(!this.condition)return{oldTo:r,oldFrom:i,newTo:r,newFrom:i};const s=q[this.to],u=q[this.from],m=this.value||r*this.percent/100,c=s.applyBounds(r+m)-r,f=-u.applyBounds(i-c)+i,S=r+f,v=i-f;return{oldTo:r,newTo:S,oldFrom:i,newFrom:v}},apply(n){if(this.condition){const{newTo:r,newFrom:i}=this.getEffect(n.values);n.values[this.to]=r,n.values[this.from]=i}return this}}}function Be(e,t){t.filter(n=>n.condition).forEach(n=>n.apply(e))}var yr=y({title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effort(e){return w(11)},effects(e,t,n){const r=n-t,i=r<18?4.3/18:0,s=2.5,u=20,m=60,c=(10-r)/55,f=Math.max((u+m/2)*c,0);return[o("electricityHardCoal").setValue(0),o("electricityBrownCoal").setValue(0),o("stateDebt").byValue(-i+s),o("unemployment").byValue(f)]},priority(e){return e.values.electricityCoal/e.values.electricityDemand<=.1?0:b(1e4,0,e.values.unemployment)},citations:[],details:a`

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
  `}),kr=y({title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effort(e){return e.values.popularity>=50?w(6,"Normal dauert das 12 Monate, aber bei Deiner Beliebtheit nur {months}."):w(12)},effects(){return[o("stateDebt").byValue(-37),o("electricityHardCoal").byPercent(-10),o("electricityBrownCoal").byPercent(-5),o("electricityWind").byValue(5),o("electricitySolar").byValue(3),o("electricityWater").byValue(.5)]},priority(e){return b(qe,le,e.currentYear)}});const kt=ce(ue).electricityGas;var Sr=y({title:"Kernenergienutzung verl\xE4ngern",description:"Kernkraftwerke l\xE4nger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effort(e){return w(8)},effects(){return[o("electricityNuclear").setValue(104.3),o("stateDebt").byValue(-2.5),o("popularity").byValue(-4)]},priority(e){return b(kt,1.1*kt,e.values.electricityGas)}}),Dr=y({title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,n){const i={2021:60.45,2022:30.21}[n]||0;return[o("electricityNuclear").setValue(i)]},priority(e){return 0}}),Pr=y({title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren f\xFCr den Ausbau des Stromnetzes",effort(e){return w(2)},effects(e,t,n){return[o("popularity").byValue(-3).if(t===n),o("electricityGridQuality").byValue(1)]},priority(e){return b(70,27,ne(e))},citations:[],details:a`

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
  `}),_r=y({title:"Netzausbau f\xF6rdern",description:"Ausbau des Stromnetzes mit Steuermitteln f\xF6rdern",effort(e){return w(3)},effects(e,t,n){return[o("popularity").byValue(-1).if(t===n),o("stateDebt").byValue(2),o("electricityGridQuality").byValue(5).if(p(e,"NetzausbauErleichtern"))]},priority(e){return b(70,27,ne(e))},citations:[],details:a`

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
  `}),zr=y({title:"Stromspeicherung erleichtern",description:"B\xFCrokratische H\xFCrden f\xFCr den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effort(e){return w(3)},effects(e,t,n){return[o("electricityGridQuality").byValue(.2)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:a`

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
  `}),Ar=y({title:"Stromspeicherung f\xF6rdern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln f\xF6rdern. 2 Mrd \u20AC pro Jahr.",effort(e){return w(7)},effects(e,t,n){const r=p(e,"StromspeicherungErleichtern")?0:5,i=n>=t+r,s=p(e,"ForschungUndEntwicklungStromspeicherung",3);return[o("stateDebt").byValue(1),o("popularity").byValue(.2).if(i),o("stateDebt").byValue(1).if(i),o("electricityGridQuality").byValue(2).if(i),o("electricityGridQuality").byValue(2).if(s),o("electricityGridQuality").byValue(2).if(i&&s)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:a`

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
  `}),Fr=y({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit verg\xFCnstigten Krediten gef\xF6rdert.",effort(e){return w(3)},effects(e,t,n){const r=.5,i=n-t>2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-1).if(i),o("buildingsSourceOil").byPercent(-1).if(i),o("buildingsSourceTele").byPercent(-1).if(i),o("buildingsPrivateDemand").byPercent(-1).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,t)}}),Cr=y({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gef\xF6rdert.",effort(e){return w(5)},effects(e,t,n){const r=1,i=n-t>2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-2).if(i),o("buildingsSourceOil").byPercent(-2).if(i),o("buildingsSourceTele").byPercent(-2).if(i),o("buildingsPrivateDemand").byPercent(-2).if(i),o("popularity").byValue(5).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,t)}}),Er=y({title:"D\xE4mmung von Wohngeb\xE4uden sehr stark f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungspl\xE4tze im Handwerk geschaffen durch einen Zuschuss von 500\u20AC pro Monat, damit der zu erwartende Bauboom bew\xE4ltigt werden kann.",effort(e){return w(7)},effects(e,t,n){const r=3,i=n-t,s=i>=2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-4).if(s),o("buildingsSourceOil").byPercent(-4).if(s),o("buildingsSourceTele").byPercent(-4).if(s),o("buildingsPrivateDemand").byPercent(-4).if(s),o("popularity").byValue(10).if(i===1),o("popularity").byValue(5).if(s)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,t)},citations:[],details:a`

  `,internals:a`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `}),Wr=y({title:"D\xE4mmung von Wohngeb\xE4uden abschaffen",description:"Wir geben den B\xFCrgern die Freiheit zur\xFCck, selbst zu entscheiden, ob sie ihr Haus d\xE4mmen wollen und lassen die F\xF6rderung auslaufen",effort(e){return w(3)},effects(){return[o("stateDebt").byValue(-.5),o("buildingsSourceBio").byPercent(-.5),o("buildingsSourceOil").byPercent(-.5),o("buildingsSourceTele").byPercent(-.5),o("buildingsPrivateDemand").byPercent(-.5)]},priority(e){const t=Pi(e.acceptedLaws,/^DaemmungAltbau/);if(!t||t==="DaemmungAltbauAbschaffen")return 0;const n=e.values.co2emissionsBuildings/e.values.co2emissions*100;return b(15,40,n)}}),Lr=y({title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit st\xE4rker bezuschusst.",effort(e){return w(5,"Komplexe Verhandlungen mit den Bundesl\xE4ndern dauern {months}.")},effects(e,t,n){const r=e.values.publicLocalCapacity/e.values.publicLocalUsage*100,i=n-t;return[o("stateDebt").byValue(3),o("publicLocalCapacity").byPercent(1),A("publicLocalUsage","carUsage").byPercent(1).if(r>=105),o("popularity").byValue(2).if(i>=5)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return b(150,80,t)},citations:[lt],details:a`

  `,internals:a`
    # Happy Path 18

    # Folgen

    - Der Staatshaushalt wird jährlich mit 3 Mrd € mehr belastet. (${L(lt)})
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
  `}),xr=y({title:"Nahverkehr Modernisieren",description:"Anschaffung Moderner, bequemer, emissionsfreier Fahrzeuge f\xFCr den Nahverkehr wird gef\xF6rdert.",effort(e){return w(4)},effects(e,t,n){return[o("stateDebt").byValue(3),o("publicLocalCapacity").byPercent(1),A("publicLocalUsage","carUsage").byPercent(1),o("popularity").byValue(3)]},priority(e){if(!p(e,"FernverkehrModernisieren"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,24,t)},citations:[De],details:a`

  `,internals:a`
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
  `}),Tr=y({title:"F\xF6rderung f\xFCr Tierhaltung abschaffen",description:"Subventionen f\xFCr Tierhaltung werden ersatzlos gestrichen",effort(e){return w(2)},effects(e,t,n){return[o("stateDebt").byValue(-10),o("co2emissionsAgriculture").byValue(-10).if(t===n),o("popularity").byValue(-20).if(t===n)]},priority(e){return b(1e4,0,e.values.unemployment)}}),Vr=y({title:"Nahverkehr Kostenlos",description:"Die Kosten f\xFCr den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr ben\xF6tigt werden.",effort(e){return w(7,"Die Haushaltsverhandlungen dauern {months}.")},effects(e,t,n){const r=t===n?10:1;return[o("stateDebt").byValue(10),A("publicLocalUsage","carUsage").byPercent(r),o("popularity").byValue(10).if(t===n),o("unemployment").byValue(20).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return b(90,120,t)},citations:[De],details:a`

  `,internals:a`
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
  `}),Or=y({title:"Autos in Innenst\xE4dten verbieten",description:"Die Innenst\xE4dte der gro\xDFen St\xE4dte werden zu Autofreien Zonen erkl\xE4rt und begr\xFCnt, sowie Fahrrad und Fu\xDFg\xE4ngerzonen eingerichtet.",effort(e){return w(12)},effects(e,t,n){var r=-2;return e.values.publicLocalCapacity>e.values.publicLocalUsage*1.2&&(r=-1,t+2<n&&(r=2)),[o("popularity").byValue(r),A("publicLocalUsage","carUsage").byPercent(10).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return b(90,120,t)}}),Ir=y({title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des \xF6ffentlichen Fernverkehrs wird bundesweit st\xE4rker Bezuschusst und Vorangetrieben",effort(e){return w(12)},effects(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return[o("stateDebt").byValue(6),o("publicNationalCapacity").byPercent(1),A("publicNationalUsage","carUsage").byPercent(1).if(t>=105),A("publicNationalUsage","carUsage").byPercent(.5).if(t>=105),o("popularity").byValue(2).if(t>=105)]},priority(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return b(150,80,t)},citations:[],details:a`

  `,internals:a`
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
  `}),Mr=y({title:"Fernverkehr Modernisieren",description:"Moderne, bequeme und weniger anf\xE4llige Z\xFCge werden f\xFCr den Fernverkehr angeschafft.",effort(e){return w(4)},effects(e,t,n){return[o("stateDebt").byValue(3),o("publicNationalCapacity").byPercent(1),A("publicNationalUsage","carUsage").byPercent(1),o("popularity").byValue(3)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,24,t)},citations:[],details:a`

  `,internals:a`
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
  `}),Br=y({title:"Wasserstofftechnologie f\xF6rdern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(1)},effects(e,t,n){const r=n<t+5,i=n>=t+5;return[o("stateDebt").byValue(2).if(r),o("carRenewablePercentage").byValue(1).if(i)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(40,90,r)},citations:[],details:a`

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
  `}),$r=y({title:"Wasserstoffmobilit\xE4t f\xF6rdern",description:"Wasserstoffbasierte Fahrzeuge werden gef\xF6rdert.",effort(e){return w(2)},effects(e,t,n){return p(e,"WasserstofftechnologieFoerdern")?[o("stateDebt").byValue(3),o("carRenewablePercentage").byValue(1),o("popularity").byValue(1).if(t===n)]:[]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,26,t)},citations:[],details:a`

  `,internals:a`
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
  `}),Nr=y({title:"Abschaffung der Mineral\xF6lsteuer",description:"Die Steuer auf s\xE4mtliche erd\xF6lbasierten Treibstoffe wird abgeschafft.",effort(e){const t=Math.ceil(e.values.co2budget/e.values.co2emissions);return t>=15?w(2,`Die derzeitigen CO2 Emissionen w\xFCrden das Budget
        in ${t} Jahren verbrauchen.
        Nicht schlecht! Bei der Stimmung bekommst Dus in {months}n durch.`):w(9,"Nicht beliebt! Sowas dauert {months}.")},effects(e,t,n){return[o("stateDebt").byValue(41),o("popularity").byValue(5).if(t===n),o("popularity").byValue(-3).if(t<n),A("publicLocalUsage","carUsage").byPercent(-20).if(t===n),A("publicNationalUsage","carUsage").byPercent(-20).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(60,100,r)},citations:[st],details:"",internals:a`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${L(st)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `}),Ur=y({title:"Ausbau von Stra\xDFen",description:"Autobahnen und Stra\xDFen werden intensiver ausgebaut.",effort(e){return w(9)},effects(e){return[o("stateDebt").byValue(5),o("popularity").byValue(.5),A("publicLocalUsage","carUsage").byPercent(-1),A("publicNationalUsage","carUsage").byPercent(-1)]},priority(e){const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(60,100,n)}}),Gr=y({title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effort(e){return w(6)},effects(e,t,n){return[o("stateDebt").byValue(-7.35),o("popularity").byValue(-1).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(10,100,r)}}),Kr=y({title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen f\xFCr Dienstwagen werden abgeschafft.",effort(e){return w(6)},effects(e,t,n){return[o("stateDebt").byValue(-18),o("popularity").byValue(-1).if(t===n),A("carUsage","publicLocalUsage").byPercent(-.05)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return b(50,100,r)},citations:[at,dt],details:a`

  `,internals:a`
    # Happy Path 20

    Zunächst sollte Nah- und Fernverkehr attraktiver gemacht werden.
    TODO: Folgen sollten davon abhängen, ob es attraktive Alternativen gibt.

    # Folgen

    - Steuermehreinnahmen: 18 mrd€ / Jahr (${L(at)})
    - -0.05% Fahleistung pro Jahr (Anreiz für Auto fällt weg Gebrauchte Wagen werden teuerer).
        - ${L(dt)} sagt es gibt keine echte Schätzung dafür.
    - Entsprechend mehr Nahverkehrnutzung
    - Zufriedenheit sinkt einmalig um 1%

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 50%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `}),Jr=y({title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(3)},effects(e){const t=o("carEmissionFactor").setValue(157.9),n=t.getChange(e.values);return[o("popularity").byValue(2).if(n<0),t]},priority(e){if(p(e,"Tempolimit100AufAutobahnen")||p(e,"Tempolimit120AufAutobahnen")||p(e,"TempolimitAufAutobahnenAussitzen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),Hr=y({title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(4)},effects(e){const t=o("carEmissionFactor").setValue(157.1),n=t.getChange(e.values);return[o("popularity").byValue(2).if(n<0),t]},priority(e){if(!p(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),jr=y({title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(5)},effects(e){const t=o("carEmissionFactor").setValue(154.1),n=t.getChange(e.values);return[o("popularity").byValue(-1).if(n<0),t]},priority(e){if(!p(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),Rr=y({title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das k\xF6nnte zwar Strafen oder gar Zwangsma\xDFnahmen bewirken, aber das Risiko der gef\xE4hrdeten Wiederwahl ist zu gro\xDF.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effort(e){return w(3,"Wie aussitzen: {months}.")},effects(){return[o("stateDebt").byValue(-10),o("popularity").byValue(-2)]},priority(e){if(p(e,"Tempolimit100AufAutobahnen")||p(e,"Tempolimit120AufAutobahnen")||p(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return b(10,100,n)}}),Zr=y({title:"Elektromobilit\xE4t F\xF6rdern",description:"H\xF6here Kaufpr\xE4mien, Steuerbefreiung, g\xFCnstiges Laden f\xFCr E-Autos.",effort(e){return w(2)},effects(e,t,n){return p(e,"LadeinfrastrukturAusbauen")?[o("stateDebt").byValue(5),o("carRenewablePercentage").byValue(1),o("popularity").byValue(4).if(t===n)]:[]},priority(e){if(!p(e,"LadeinfrastrukturAusbauen"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,25,t)},citations:[],details:a`

  `,internals:a`
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
  `}),Qr=y({title:"Ladeinfrastruktur ausbauen",description:"Ausbau der Ladeinfrastruktur wird mit Steuermitteln stark gef\xF6rdert.",effort(e){return w(4)},effects(e,t,n){return[o("stateDebt").byValue(5),o("carRenewablePercentage").byValue(1),o("popularity").byValue(2).if(t===n)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return b(0,25,t)},citations:[De],details:a`

  `,internals:a`
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
  `}),qr=y({title:"Windkraft vereinfachen",description:"Genehmigungen f\xFCr Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effort(e){return w(4,"Die Bundesl\xE4nder m\xFCssen mit ins Boot geholt werden. Das dauert {months}.")},effects(e,t,n){return[]},priority(e){return b(80,27,ne(e))},citations:[],details:a`

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
  `}),Yr=y({title:"Abstandsregeln f\xFCr Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem \xFCber Abst\xE4nde zwischen den Windkraftanlagen und Wohngeb\xE4uden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(3,"Wie aussitzen: {months}.")},effects(e,t,n){const r=p(e,"WindkraftVereinfachen")?0:5;return[o("electricityWindOnshoreMaxNew").setValue(6).if(n>=t+r)]},priority(e){return p(e,"AbstandsregelnFuerWindkraftLockern")?b(30,100,ne(e)):p(e,"AbstandsregelnFuerWindkraftVerschaerfen")?b(70,27,ne(e)):0}}),Xr=y({title:"Abstandsregeln f\xFCr Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln f\xFCr Windkraftanlagen sowie Bauerlaubniss in W\xE4ldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(6,"Das schaffst Du in {months}n.")},effects(e,t,n){const r=p(e,"WindkraftVereinfachen")?0:5;return[o("popularity").byValue(-3).if(t===n),o("electricityWindOnshoreMaxNew").setValue(30).if(n>=t+r)]},priority(e){return p(e,"AbstandsregelnFuerWindkraftWieBisher")?b(70,27,ne(e)):p(e,"AbstandsregelnFuerWindkraftAbschaffen")?b(30,100,ne(e)):0},citations:[],details:a`

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
  `}),ei=y({title:"Abstandsregeln f\xFCr Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(12,"BIs werden es Dir schwer machen. {months}!")},effects(e,t,n){const r=p(e,"WindkraftVereinfachen")?0:5;return[o("popularity").byValue(-40).if(t===n),o("electricityWindOnshoreMaxNew").setValue(1e3).if(n>=t+r)]},priority(e){return p(e,"AbstandsregelnFuerWindkraftLockern")?b(80,25,ne(e)):0}}),ti=y({title:"Abstandsregeln f\xFCr Windkraft versch\xE4rfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngeb\xE4uden im Innenbereich muss das Zehnfache der Gesamth\xF6he der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effort(e){return w(1,"Dauert nur einen Monat.")},effects(e,t,n){return[o("popularity").byValue(5).if(t===n),o("electricityWindOnshoreMaxNew").setValue(.42)]},priority(e){return p(e,"AbstandsregelnFuerWindkraftWieBisher")?b(0,100,ne(e)):0}}),ni=y({title:"Ausschreibungsverfahren f\xFCr Windkraft wie zu Beginn",description:"Windkraft Betreiber k\xF6nnen sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstm\xF6glichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(8)},effects(e,t,n){const r=p(e,"WindkraftVereinfachen")?0:5,i=Math.min(6.9,e.values.electricityWindOnshoreMaxNew),s=1.2;return[o("electricityWind").byValue((i+s)*e.values.electricityWindEfficiency/100).if(n>=t+r)]},priority(e){return p(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?b(60,100,U(e)):0}}),ri=y({title:"Ausschreibungsverfahren f\xFCr Windkraft verdoppeln",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(2)},effects(e,t,n){const r=p(e,"WindkraftVereinfachen")?0:5,i=Math.min(13.8,e.values.electricityWindOnshoreMaxNew),s=2.4;return[o("popularity").byValue(-1).if(t===n),o("unemployment").byValue(-20).if(t===n),o("electricityWind").byValue((i+s)*e.values.electricityWindEfficiency/100).if(n>=t+r)]},priority(e){return p(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?b(100,50,U(e)):p(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?b(40,100,U(e)):0}}),ii=y({title:"Ausschreibungsverfahren f\xFCr Windkraft vervierfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(4)},effects(e,t,n){const r=p(e,"WindkraftVereinfachen")?0:5,i=Math.min(27.6,e.values.electricityWindOnshoreMaxNew),s=4.8;return[o("popularity").byValue(-2).if(t===n),o("unemployment").byValue(-100).if(t===n),o("electricityWind").byValue((i+s)*e.values.electricityWindEfficiency/100).if(n>=t+r)]},priority(e){return p(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?b(100,50,U(e)):p(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?b(0,100,U(e)):0},citations:[],details:a`
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
  `}),si=y({title:"Ausschreibungsverfahren f\xFCr Windkraft verachtfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effort(e){return w(5)},effects(e,t,n){const r=p(e,"WindkraftVereinfachen")?0:5,i=Math.min(55.2,e.values.electricityWindOnshoreMaxNew),s=9.6;return[o("popularity").byValue(-20).if(t===n),o("unemployment").byValue(-100).if(t===n),o("electricityWind").byValue((i+s)*e.values.electricityWindEfficiency/100).if(n>=t+r)]},priority(e){return p(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?b(100,50,U(e)):0}}),ai=y({title:"CO2 Preis Erh\xF6hen",description:"Die Preise werden schneller erh\xF6ht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return w(6)},effects(e,t,n){const r=de(50,0,U(e),-1),i=de(50,0,e.values.carRenewablePercentage,-1),s=-.5;return[o("stateDebt").byValue(-45/1e3*e.values.co2emissions).if(n>=t+2),o("stateDebt").byValue(-30/1e3*e.values.co2emissions).if(n>=t+4),o("popularity").byValue(r+i),o("co2emissionsIndustry").byPercent(s),o("co2emissionsAgriculture").byPercent(s),o("co2emissionsOthers").byPercent(s),A("electricityBrownCoal","electricityWind").byPercent(.7*s),A("electricityHardCoal","electricityWind").byPercent(.7*s),A("electricityBrownCoal","electricitySolar").byPercent(.3*s),A("electricityHardCoal","electricitySolar").byPercent(.3*s),A("buildingsSourceOil","buildingsSourceBio").byPercent(s),A("carUsage","publicNationalUsage").byPercent(.5*s),A("carUsage","publicLocalUsage").byPercent(.5*s)]},priority(e){return p(e,"VollerCO2Preis")||p(e,"WirksamerCO2Preis")?0:50},citations:[ht],details:a`

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
  `}),oi=y({title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return w(8)},effects(e,t,n){const r=de(80,50,U(e),-3),i=de(80,50,e.values.carRenewablePercentage,-3),s=-2;return[o("stateDebt").byValue(-125/1e3*e.values.co2emissions),o("popularity").byValue(r+i),o("co2emissionsIndustry").byPercent(s),o("co2emissionsAgriculture").byPercent(s),o("co2emissionsOthers").byPercent(s),A("electricityBrownCoal","electricityWind").byPercent(.7*s),A("electricityHardCoal","electricityWind").byPercent(.7*s),A("electricityBrownCoal","electricitySolar").byPercent(.3*s),A("electricityHardCoal","electricitySolar").byPercent(.3*s),A("buildingsSourceOil","buildingsSourceBio").byPercent(s),A("carUsage","publicNationalUsage").byPercent(.5*s),A("carUsage","publicLocalUsage").byPercent(.5*s)]},priority(e){return p(e,"CO2PreisErhoehen")?50:0},citations:[ht],details:a`

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
  `}),li=y({title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effort(e){return w(10)},effects(e,t,n){const r=de(90,50,U(e),-10),i=de(90,50,e.values.carRenewablePercentage,-10),s=-5;return[o("stateDebt").byValue(-3*e.values.co2emissions),o("popularity").byValue(r+i),o("co2emissionsIndustry").byPercent(s),o("co2emissionsAgriculture").byPercent(s),o("co2emissionsOthers").byPercent(s),A("electricityBrownCoal","electricityWind").byPercent(.7*s),A("electricityHardCoal","electricityWind").byPercent(.7*s),A("electricityBrownCoal","electricitySolar").byPercent(.3*s),A("electricityHardCoal","electricitySolar").byPercent(.3*s),A("buildingsSourceOil","buildingsSourceBio").byPercent(s),A("carUsage","publicNationalUsage").byPercent(.5*s),A("carUsage","publicLocalUsage").byPercent(.5*s)]},priority(e){return p(e,"WirksamerCO2Preis")?50:0},citations:[Dn],details:a`

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
  `}),ui=y({title:"Solarstrom F\xF6rderung einstellen",description:"Mittlere bis gro\xDFe Solaranlagen sollten sich selbst tragen. Die F\xF6rderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return w(5)},effects(){return[o("electricitySolar").byValue(2)]},priority(e){return p(e,"SolarstromFoerderungWieZuBeginn")?b(0,100,U(e)):0},details:a`

  `}),ci=y({title:"Solarstrom F\xF6rderung wie zu Beginn",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen wie bisher",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return w(9)},effects(){return[o("electricitySolar").byValue(5)]},priority(e){return p(e,"SolarstromFoerdernx8")?b(70,100,U(e)):0},details:a`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),di=y({title:"Solarstrom F\xF6rderung x2",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return w(4)},effects(e,t,n){return[o("popularity").byValue(10).if(t===n),o("unemployment").byValue(-31e3).if(t===n),o("electricitySolar").byValue(10)]},priority(e){return p(e,"SolarstromFoerderungWieZuBeginn")?b(100,30,U(e)):0},details:a`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),hi=y({title:"Solarstrom F\xF6rderung x4",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],effort(e){return w(3)},effects(e,t,n){return[o("popularity").byValue(20).if(t===n),o("unemployment").byValue(-89e3).if(t===n),o("electricitySolar").byValue(20)]},priority(e){return p(e,"SolarstromFoerdernx2")?b(100,30,U(e)):0},details:a`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:a`
    # Happy path 10

    ${L(ke)}
  `,citations:[ke]}),gi=y({title:"Solarstrom F\xF6rderung x8",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return w(2)},effects(e,t,n){return[o("popularity").byValue(-10).if(t===n),o("unemployment").byValue(-209e3).if(t===n),o("electricitySolar").byValue(40)]},priority(e){return p(e,"SolarstromFoerdernx4")?b(100,30,U(e)):0},details:a`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `}),mi=y({title:"Solar auf neuen D\xE4chern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die D\xE4cher.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effort(e){return w(3)},effects(e,t,n){return[o("popularity").byValue(-3).if(t===n),o("electricitySolar").byValue(2)]},priority(e){return p(e,"SolarstromFoerderungWieZuBeginn")?b(100,30,U(e)):0},details:a`

  `,internals:a`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `}),fi=y({title:"Forschung und Entwicklung zur Stromspeicherung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(1)},effects(e,t,n){const r=n<t+5,i=n>=t+3;return[o("stateDebt").byValue(2).if(r),o("electricityGridQuality").byValue(.2).if(i)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:a`

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
  `}),pi=y({title:"Forschung zur emissionsfreien Stahlproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Stahl mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(2)},effects(e,t,n){const r=n<t+5,i=n>=t+3,s=p(e,"WasserstofftechnologieFoerdern",3)?U(e)-70:0,u=p(e,"WirksamerCO2Preis");return[o("stateDebt").byValue(2).if(r),o("co2emissionsIndustry").byValue(-2).if(i),o("co2emissionsIndustry").byValue(-2).if(u),o("co2emissionsIndustry").byValue(-s).if(s>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return b(0,80,n)},citations:[],details:a`

  `,internals:a`
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
  `}),bi=y({title:"Forschung zur emissionsfreien Zementproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Zement mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(3)},effects(e,t,n){const r=n<t+5,i=n>=t+3,s=p(e,"WasserstofftechnologieFoerdern",3)?U(e)-70:0,u=p(e,"WirksamerCO2Preis");return[o("stateDebt").byValue(2).if(r),o("co2emissionsIndustry").byValue(-2).if(i),o("co2emissionsIndustry").byValue(-2).if(u),o("co2emissionsIndustry").byValue(-s).if(s>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return b(0,80,n)},citations:[],details:a`

  `,internals:a`
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
  `}),vi=y({title:"Erforschung und Umsetzung dezentraler Stromerzeugung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur f\xFCr die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effort(e){return w(1)},effects(e,t,n){const r=n<t+5,i=n>=t+1;return[o("stateDebt").byValue(2).if(r),o("electricityGridQuality").byValue(1).if(i)]},priority(e){const t=e.values;return b(80,45,t.electricityGridQuality)},citations:[],details:a`

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
  `}),wi=y({title:"Test",description:"Unsinniges Gesetz zum Testen.",effort(e){return w(6)},effects(e,t,n){return[o("popularity").byPercent(50).if((n-t)%3!=0),o("popularity").byPercent(-50).if((n-t)%3==0),o("stateDebt").byPercent(-200).if(n===t),o("stateDebt").byPercent(50).if((n-t)%3!=0),o("stateDebt").byPercent(-50).if((n-t)%3==0),o("stateDebt").byPercent(-200).if(n===t+10)]},priority(e){return 0},citations:[],details:a`

  `,internals:a`

  `});const St={AllesBleibtBeimAlten:dn,InitialAtomausstieg:Dr,KohleverstromungEinstellen:yr,EnergiemixRegeltDerMarkt:kr,KernenergienutzungVerlaengern:Sr,NetzausbauErleichtern:Pr,NetzausbauFoerdern:_r,ForschungUndEntwicklungStromspeicherung:fi,StromspeicherungErleichtern:zr,StromspeicherungFoerdern:Ar,ForschungDezentraleStromerzeugung:vi,WindkraftVereinfachen:qr,AbstandsregelnFuerWindkraftVerschaerfen:ti,AbstandsregelnFuerWindkraftWieBisher:Yr,AbstandsregelnFuerWindkraftLockern:Xr,AbstandsregelnFuerWindkraftAbschaffen:ei,AusschreibungsverfahrenfuerWindkraftWieBisher:ni,AusschreibungsverfahrenfuerWindkraftVerdoppeln:ri,AusschreibungsverfahrenfuerWindkraftVervierfachen:ii,AusschreibungsverfahrenfuerWindkraftVerachtfachen:si,SolarstromFoerderungAbschaffen:ui,SolarstromFoerderungWieZuBeginn:ci,SolarstromFoerdernx2:di,SolarstromFoerdernx4:hi,SolarstromFoerdernx8:gi,SolarAufAllenDaechernVerpflichtend:mi,DaemmungAltbau1Percent:Fr,DaemmungAltbau2Percent:Cr,DaemmungAltbau4Percent:Er,DaemmungAltbauAbschaffen:Wr,NahverkehrKostenlos:Vr,AutosInInnenstaedtenVerbieten:Or,WasserstofftechnologieFoerdern:Br,WasserstoffmobilitaetFoerdern:$r,NahverkehrAusbauen:Lr,NahverkehrModernisieren:xr,FernverkehrVerbindungenAusbauen:Ir,FernverkehrModernisieren:Mr,AusbauVonStrassen:Ur,AbschaffungDerMineraloelsteuer:Nr,DieselPrivilegAbgeschaffen:Gr,DienstwagenPrivilegAbgeschaffen:Kr,Tempolimit130AufAutobahnen:Jr,Tempolimit120AufAutobahnen:Hr,Tempolimit100AufAutobahnen:jr,TempolimitAufAutobahnenAussitzen:Rr,ElektromobilitaetFoerdern:Zr,LadeinfrastrukturAusbauen:Qr,FoerderungFuerTierhaltungAbschaffen:Tr,CO2PreisErhoehen:ai,WirksamerCO2Preis:oi,VollerCO2Preis:li,ForschungEmissionsfreieStahlproduktion:pi,ForschungEmissionsfreieZementproduktion:bi,Test:wi},yi=Object.keys(St);function ki(e){return rt(e).map(t=>G(T({},t),{effort:t.effort||cn}))}const ae=ki(St);function Si(e){const t=ae.find(n=>n.id===e);if(t)return t;throw Error(`Law #${e} not found`)}function Pe(e){const t=Si(e.lawId);if(t)return G(T({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function _e(e){return e.map(t=>{const n=ae.find(r=>r.id===t);return n||console.error(`Inconsistency: Proposed law #${t} not found`),n}).filter(t=>t)}const Di=(e,t,n)=>Object.fromEntries(e.map(r=>{const i=t(r),s=Object.fromEntries(pt.map(u=>[u,n(r,i,u)]));return[r.id,s]}));function b(e,t,n){const r=n-e,i=t-e;if(i===0)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return r/i*100}function de(e,t,n,r){return Math.max(0,b(e,t,n))/100*r}function p(e,t,n=0){if(!ae.map(r=>r.id).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some(r=>r.lawId===t&&r.effectiveSince<=e.currentYear+n)}function Pi(e,t){const n=e.sort((r,i)=>i.effectiveSince-r.effectiveSince).find(r=>t.test(r.lawId));return n==null?void 0:n.lawId}function ne(e){const t=e.values;return t.electricityWindUsable/t.electricityDemand*100}function U(e){return(e.values.electricityWindUsable+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}var _i=O({title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es f\xFCr unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply(){return[]},probability(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return Math.min(1,b(15,30,t)/100)}});function Dt(e){return e.find(t=>t.title.match(/subvention/i)&&t.title.match(/abbau/i))}var zi=O({title:"Anruf von befreundetem Unternehmer",description:`Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und m\xF6chte dich in seine
    Ferienvilla auf Sardinien einladen. Er verl\xE4sst sich nat\xFCrlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,apply(e){if(e){const t=Dt(_e(e.proposedLaws));if(t)return[se("rejectLaw",{lawId:t.id})]}return[]},probability(e){return Dt(_e(e.proposedLaws))?.5:0}}),Ai=O({title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute \xFCber die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply(){return[]}}),Fi=O({title:"Zusammenbruch des Finanzsystems",description:`Deine Staatsfinanzen sind desastr\xF6s. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zur\xFCckahlen k\xF6nnen. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    k\xF6nntest. Das Spiel ist damit leider beendet.
  `,apply(){return[se("gameOver")]},probability(e){return e.values.stateDebt>ue.stateDebt*2?be.finanzKollaps:0}}),Ci=O({title:"Hitzeh\xF6lle",description:`Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen K\xFCstenregionen
  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr w\xE4chst.
  Um die verbleibdenden Teile sind erbitterte K\xE4mpfe ausgebrochen.
  `,apply(){return[se("gameOver")]},probability(e){return e.values.co2budget<=0?be.hitzehoelle:0}}),Ei=O({title:"Happy New Year!",description:`Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen T\xE4tigkeit aufgestellt
    und kommt zu dem nicht weiter \xFCberraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht \xFCberraschend - sieht die Sache anders und verurteilt die Regierungserkl\xE4rung als haltlos.
  `,apply(){return[se("advanceYear")]},probability(e){return ye(e.currentDate).getYear()>e.currentYear?be.newYear:0}}),Wi=O({title:"Social Media Alarm!",description:`Deine Wahlkampfberaterin ruft dich v\xF6llig aufgel\xF6st an. Ob denn an den Geschichten was dran sein, die da im
    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.
    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.
  `,apply(){return[o("popularity").byPercent(-20)]}}),Li=O({title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland m\xFCssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply(){return[]}}),xi=O({title:"Du hast durchgehalten",description:`Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,
    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Ma\xDFnahmen waren zu finanzieren
    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!
  `,apply(){return[se("gameOver")]},probability(e){return e.currentYear===2050?be.timesUp:0}}),Ti=O({title:"Wahl verloren",description:`Deine Beliebtheit in der Bev\xF6lkerung ist katastrophal, lieber w\xFCrde man Mao Zedong w\xE4hlen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du geh\xF6rst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon l\xE4nger kein vern\xFCnftiger Mensch mehr geglaubt.
  `,apply(){return[se("gameOver")]},probability(e){return e.values.popularity<=0?be.wahlVerloren:0}}),Vi=O({title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply(){return[]},citations:[],details:a`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:a`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `}),Oi=O({title:"B\xFCrgerinitiative fordert st\xE4rkere Solarf\xF6rderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply(){return[]},probability(e){const t=p(e,"SolarstromFoerderungAbschaffen"),n=p(e,"SolarstromFoerderungWieZuBeginn"),r=p(e,"SolarstromFoerdernx2");return t||n||r?.5:0},citations:[it],details:a`

  `,internals:a`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${L(it)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),Ii=O({title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply(){return[se("gameOver")]},probability(e){return e.acceptedLaws.find(n=>n.lawId==="KernenergienutzungVerlaengern")?.5:0},laws:[],citations:[],details:a`

  `,internals:a`

  `}),Mi=O({title:"Staatsoberhaupt verstorben",description:"Du stirbst an der neuen BSE Variante. Tja, h\xE4ttest du dich mal besser um das Tierwohl gek\xFCmmert...",apply(){return[se("gameOver")]},probability(e){return _e(e.acceptedLaws.map(n=>n.lawId)).find(n=>n.title.match(/tierwohl/i))?0:.5},laws:[],citations:[],details:a`

  `,internals:a`

  `}),Bi=O({title:"D\xFCrreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausf\xE4lle sind enorm.",apply(){return[o("gdp").byValue(-100),o("popularity").byValue(-10)]},probability(e){return Math.min(1,b(400,0,e.values.co2budget)/100)},laws:[],citations:[],details:a`

  `,internals:a`

  `}),$i=O({title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und f\xFChrt zu einer neuen Diskussion \xFCber Lobbyismus.",apply(){return[o("popularity").byValue(-2)]},probability(e){return p(e,"WirksamerCO2Preis")||p(e,"KohleverstromungEinstellen")?0:.3},laws:[],citations:[],details:a`

  `,internals:a`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `}),Ni=O({title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply(){return[o("popularity").byValue(-2)]},probability(){return .3},laws:[],citations:[],details:a`

  `,internals:a`

  `}),Ui=O({title:"Klimafl\xFCchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimafl\xFCchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply(){return[o("stateDebt").byValue(10)]},probability(e){return e.values.co2budget<500?.2:0},laws:[],citations:[],details:a`

  `,internals:a`

  `}),Gi=O({title:"Plagiatsaff\xE4re",description:"W\xE4hrend des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet W\xE4hlerstimmen.",apply(){return[o("popularity").byValue(-10)]},probability(e){return .5},laws:[],citations:[],details:a`

  `,internals:a`

  `}),Ki=O({title:"Debatte \xFCber CO2-Preise",description:"Eine marktliberale Kampagne ist sehr erfolgreich darin, Dich als Verbots-Kanzler hinzustellen. Aus allen Richtungen prasseln Forderungen nach einem ad\xE4quaten CO2-Preis auf Dich ein. Nur leider gehen die Vorstellungen \xFCber den genauen Preis sehr weit auseinander.",laws:["CO2PreisErhoehen","WirksamerCO2Preis","VollerCO2Preis"],apply(){return[]},probability(e){const t=(p(e,"AutosInInnenstaedtenVerbieten")?1:0)+(p(e,"KohleverstromungEinstellen")?1:0)+(p(e,"SolarAufAllenDaechernVerpflichtend")?1:0)+(p(e,"Tempolimit130AufAutobahnen")?1:0)+(p(e,"Tempolimit120AufAutobahnen")?1:0)+(p(e,"Tempolimit100AufAutobahnen")?1:0);return b(1,3,t)/100}});const Ji={AbstandsregelnWindkraft:ln,Altbausanierung:_i,Bestechung:zi,EnergieStrategie:Ai,FinanzKollaps:Fi,Hitzehoelle:Ci,NewYear:Ei,SocialMedia:Wi,TempolimitAufAutobahnen:Li,TimesUp:xi,WahlVerloren:Ti,WindkraftAusschreibung:Vi,SolarstromFoerderung:Oi,AtomKatastrophe:Ii,BSE:Mi,Duerrewelle:Bi,PRKohleindustrie:$i,PRInnenminister:Ni,Klimafluechtlinge:Ui,Plagiatsaffaere:Gi,CO2PreisDebatte:Ki},Hi=()=>.5,ze=rt(Ji).map(e=>G(T({},e),{probability:e.probability||Hi})),Pt={currentDate:sn,currentYear:le,values:ue,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],over:!1,prngState:{}};function $e(e=Pt,t=Jt()){return{id:t,currentDate:e.currentDate,currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:ce(e.values),events:e.events,over:e.over,prngState:{}}}function _t(e=ae,t=Pt){const n=$e(t);return n.acceptedLaws=e.filter(r=>{var i;return(i=r.labels)==null?void 0:i.includes("initial")}).map(r=>({lawId:r.id,effectiveSince:n.currentYear})),n}const he=[...Array(qe-le+1).keys()].map(e=>e+le);function ji(e,t){const n={lawId:e,effectiveSince:t.currentYear+1},r=Pe(n),i=r.effort(t);t.currentDate=ye(t.currentDate).plus(i.time).toJSON();const s=r.removeLawsWithLabels,u=t.acceptedLaws.map(Pe).filter(m=>!(s==null?void 0:s.some(c=>{var f;return(f=m.labels)==null?void 0:f.includes(c)}))).map(m=>({lawId:m.id,effectiveSince:m.effectiveSince}));return t.acceptedLaws=[...u,n],Ne(t)}function Ri(e){return e.currentDate=ye(e.currentDate).plus(an).toJSON(),Ne(e)}function Ne(e,t=ae,n=ze,r=et){const i=Zi(e,n,r);if(i){const u={id:i.id,occuredIn:e.currentYear,acknowledged:!1};e.events.unshift(u)}const s=es(e,t,(i==null?void 0:i.laws)?i.laws:[]);return e.proposedLaws=ts(e.proposedLaws,s),i}function Zi(e,t,n){const r=Qi(e,t),i=qi(r);if(i)return i;const s=Yi(r);return Xi(s,n())}function Qi(e,t){return t.map(n=>G(T({},n),{prob:n.probability(e)})).filter(n=>n.prob>0)}function qi(e){return e.filter(t=>t.prob>1).reduce((t,n)=>n.prob>((t==null?void 0:t.prob)||0)?n:t,void 0)}function Yi(e){const t=e.map(r=>r.prob).reduce((r,i)=>r+i,0),n=on/t;return e.map(r=>G(T({},r),{prob:r.prob*n}))}function Xi(e,t){for(const n of e)if(t-=n.prob,t<0)return n}function es(e,t,n){const r=c=>{var f;return(f=e.acceptedLaws)==null?void 0:f.some(S=>S.lawId===c.id)},i=c=>{var f;return(f=e.rejectedLaws)==null?void 0:f.includes(c.id)},s=c=>{var f;return((f=c.labels)==null?void 0:f.includes("hidden"))||!1},u=c=>({law:c,priority:c.priority(e)}),m=c=>({law:c.law,priority:c.priority+(n.includes(c.law.id)?100:0)});return t.filter(Oe(r)).filter(Oe(i)).filter(Oe(s)).map(u).filter(c=>c.priority>0).map(m).sort((c,f)=>f.priority-c.priority).map(c=>c.law.id).slice(0,Xe)}function ts(e,t){const n=[...e],r=t.filter(u=>n.includes(u)),i=t.filter(u=>!r.includes(u));for(var s=0;s<n.length;){if(r.includes(n[s])){s++;continue}if(i.length===0){n.splice(s,1);continue}n[s]=i.shift(),s++}return n.push(...i.slice(0,Xe-n.length)),n}function ns(e,t,n){return zt(e,t,n).values}function zt(e,t,n){const r=ce(e.values),i=t.sort((u,m)=>{var c,f;return((c=u.treatAfterLabels)==null?void 0:c.some(S=>{var v;return(v=m.labels)==null?void 0:v.includes(S)}))?1:((f=m.treatAfterLabels)==null?void 0:f.some(S=>{var v;return(v=u.labels)==null?void 0:v.includes(S)}))?-1:0}).filter(u=>u.effectiveSince<=n),s=Di(i,u=>{const m=wr(r),c=u.effects(G(T({},e),{values:r}),u.effectiveSince,n);return Be({dispatch:()=>{},values:r},c),m},(u,m,c)=>r[c]-m[c]);return r.co2budget-=r.co2emissions,{values:r,effectsOfLaws:s}}function At(e){return Math.max(0,Math.min(100,e))}function rs(e){if(e.values.co2emissions===0)return 100;const n=e.values.co2budget*ce(ue).co2emissions/ue.co2budget/e.values.co2emissions;return At(n*50)}function is(e){const t=e.values.stateDebt/ue.stateDebt;return At(100-t*50)}const ge=[{id:"start",title:"Stell dir vor...",text:a`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du ausw\xE4hlen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die W\xE4hler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine W\xE4hler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];function ss(e,t){return{startGame(n){const r=_t(),i=Ne(r);t.createGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i}),e.push("/games/"+r.id)},async loadGame(n,r){var i;if(((i=n.state.game)==null?void 0:i.id)!==r.gameId)try{const s=await t.loadGame(r.gameId);t.saveGame(s),e.push("/games/"+s.id+(s.over?"/over":"")),n.commit("setGameState",{game:s})}catch(s){n.dispatch("error",{error:s})}},gameOver(n){var r;n.commit("gameOver",void 0),e.push("/games/"+((r=n.state.game)==null?void 0:r.id)+"/over")},acceptLaw(n,r){const i=T({},n.state.game),s=ji(r.lawId,i);t.saveGame(i),n.commit("setGameState",{game:i}),n.dispatch("applyEvent",{event:s}),t.decisionMade(i,r.lawId,!0)},rejectLaw(n,r){const i=T({},n.state.game);i.rejectedLaws=[...i.rejectedLaws,r.lawId],t.decisionMade(i,r.lawId,!1),t.saveGame(i),n.commit("setGameState",{game:i})},sitOut(n){const r=T({},n.state.game);t.decisionMade(r,"sitOut",!0);const i=Ri(r);t.saveGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i})},advanceYear(n){const r=T({},n.state.game),i=r.acceptedLaws.map(Pe);r.currentYear++,r.values=ns(r,i,r.currentYear),t.saveGame(r),n.commit("setGameState",{game:r})},applyEvent(n,r){if(!r.event)return;const i=T({},n.state.game);t.eventOccurred(i,r.event);const s=r.event.apply(i);n.dispatch("applyEffects",{changes:s})},acknowledgeEvent(n,r){const i=T({},n.state.game);i.events.find(s=>s.id===r.id).acknowledged=!0,t.saveGame(i),n.commit("setGameState",{game:i})},applyEffects(n,r){const i={dispatch:n.dispatch,values:ce(n.state.game.values)};Be(i,r.changes);const s=G(T({},n.state.game),{values:i.values});t.saveGame(s),n.commit("setGameState",{game:s})},setupTour(n){const r=localStorage.getItem("tour")||ge[0].id,i=ge.find(s=>r===s.id);i?n.commit("setTour",{step:i.id,active:!0}):n.dispatch("stopTour")},nextTourStep(n){const r=ge.findIndex(i=>n.state.tour.step===i.id);if(r<0||r==ge.length-1)n.dispatch("stopTour");else{const i=ge[r+1];n.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(n){n.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},error(n,r){n.commit("error",r)}}}const as={setGameState(e,t){e.game=t.game},gameOver(e){e.game=G(T({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},os={proposedLaws(e){return!e.game||!e.game.proposedLaws?[]:_e(e.game.proposedLaws)}},ls={game:void 0,tour:{active:!0,step:"start"}};var $=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const us=e=>(fe("data-v-1017d1c6"),e=e(),pe(),e),cs={key:0,type:"radio"},ds=us(()=>l("br",null,null,-1)),hs={key:0,class:"button-bar"},gs=B({props:{law:null,selectable:{type:Boolean},numCards:null},emits:["selected","accepted"],setup(e,{emit:t}){const n=e,r=X(!1),i=_(()=>n.law.zIndex);function s(){t("selected")}function u(){r.value=!0}function m(c){c.animationName.match(/^twistOut-/)&&t("accepted",n.law.id)}return(c,f)=>(h(),g("div",{class:N(["Law",{accepted:r.value}]),style:Ee({zIndex:E(i)}),onClick:s,onAnimationend:m},[l("label",null,[e.selectable?(h(),g("input",cs)):F("",!0),l("div",null,[l("h3",null,k(e.law.title),1),l("div",null,k(e.law.description),1),ds,l("div",null,k(e.law.effortComment),1),e.selectable?(h(),g("div",hs,[l("button",{class:"accept",onClick:u},"\u2713")])):F("",!0)])])],38))}});var ms=$(gs,[["__scopeId","data-v-1017d1c6"]]);const fs=B({setup(e){const t=oe(),n=X([]),r=X(!1),i=_(()=>t.getters.proposedLaws),s=_(()=>t.state.game),u=_(()=>(n.value.length||(n.value=nt(i.value.length,0)),s.value===void 0?[]:i.value.map((S,v)=>G(T({},S),{zIndex:n.value[v],pos:v,effortComment:S.effort(s.value).text}))));function m(S){t.dispatch("acceptLaw",{lawId:S})}function c(S){n.value=nt(i.value.length,S)}function f(){t.dispatch("sitOut")}return(S,v)=>(h(),g(J,null,[l("div",{class:N(["ProposedLaws",{poppedUp:r.value}]),onClick:v[0]||(v[0]=d=>r.value=!0)},[(h(!0),g(J,null,Z(E(u),(d,z)=>(h(),ee(ms,{key:d.id,law:d,selectable:r.value,numCards:E(u).length,onAccepted:()=>m(d.id),onSelected:()=>c(z)},null,8,["law","selectable","numCards","onAccepted","onSelected"]))),128))],2),l("div",{class:"sitOutButton",onClick:v[1]||(v[1]=()=>f())},"Aussitzen")],64))}});var ps=$(fs,[["__scopeId","data-v-7616326e"]]);const bs={key:0},vs=B({props:{title:null,text:null},emits:["acknowledge"],setup(e,{emit:t}){function n(){t("acknowledge")}return(r,i)=>e.text?(h(),g("div",{key:0,onClick:n},[e.title?(h(),g("h2",bs,k(e.title),1)):F("",!0),l("p",null,k(e.text),1)])):F("",!0)}});var ws=$(vs,[["__scopeId","data-v-089babdc"]]),ys="/assets/money-short.7ce9dbed.png",ks="/assets/money-less.184321f3.png",Ss="/assets/money-more.44dccbaa.png",Ds="/assets/money-much.d486dae1.png";const Ps={class:"container"},_s={class:"title"},zs={class:"progress-bar"},As=B({props:{title:null,value:null},setup(e){const t=e,n=_(()=>{const r=t.value>40?"green":t.value>20?"goldenrod":"red";return{width:t.value+"%",backgroundColor:r}});return(r,i)=>(h(),g("div",Ps,[l("div",_s,k(e.title),1),l("div",zs,[l("div",{class:"indicator",style:Ee(E(n))},null,4)])]))}});var Ue=$(As,[["__scopeId","data-v-9856b0a2"]]);const Fs={id:"finances"},Cs={key:0,src:ys,id:"short"},Es={key:1,src:ks,id:"less"},Ws={key:2,src:Ss,id:"more"},Ls={key:3,src:Ds,id:"much"},xs=B({props:{value:null},setup(e){const t=e,n=_(()=>t.value),r=_(()=>t.value<20),i=_(()=>t.value>=20&&t.value<50),s=_(()=>t.value>=50&&t.value<80),u=_(()=>t.value>=80);return(m,c)=>(h(),g("div",Fs,[I(Ue,{id:"indicator",title:"Finanzen",value:E(n)},null,8,["value"]),E(r)?(h(),g("img",Cs)):F("",!0),E(i)?(h(),g("img",Es)):F("",!0),E(s)?(h(),g("img",Ws)):F("",!0),E(u)?(h(),g("img",Ls)):F("",!0)]))}});var Ts=$(xs,[["__scopeId","data-v-0b2fb0e8"]]),Vs="/assets/people-happy.acaffc0b.png",Os="/assets/people-angry.54c1d60c.png";const Is={id:"popularity"},Ms={key:0,src:Vs,id:"happy"},Bs={key:1,src:Os,id:"angry"},$s=B({props:{value:null},setup(e){const t=e,n=_(()=>t.value>=50),r=_(()=>t.value<50);return(i,s)=>(h(),g("div",Is,[I(Ue,{id:"indicator",title:"Beliebtheit",value:e.value},null,8,["value"]),E(n)?(h(),g("img",Ms)):F("",!0),E(r)?(h(),g("img",Bs)):F("",!0)]))}});var Ns=$($s,[["__scopeId","data-v-4cf2dbec"]]),Us="/assets/plant-healthy.97772624.png",Gs="/assets/plant-sick.5a0f1b46.png",Ks="/assets/plant-withered.b50106c7.png";const Js={id:"plant"},Hs=["src","id"],js=B({props:{value:null},setup(e){const t=e,n={healthy:Us,sick:Gs,withered:Ks},r=_(()=>t.value>66?"healthy":t.value>33?"sick":"withered"),i=_(()=>n[r.value]);return(s,u)=>(h(),g("div",Js,[I(Ue,{id:"indicator",title:"CO2-Budget",value:e.value},null,8,["value"]),l("img",{src:E(i),id:E(r)},null,8,Hs)]))}});var Rs=$(js,[["__scopeId","data-v-2db3389a"]]);const Zs={id:"calendar"},Qs=B({props:{year:null,month:null},setup(e){const t=e,n=_(()=>{const r=Math.floor((t.month-1)/4)*18+27+"%",i=(t.month-1)%4*21+12+"%";return{top:r,left:i}});return(r,i)=>(h(),g("div",Zs,[K(k(e.year)+" ",1),l("span",{id:"month-indicator",style:Ee(E(n))},null,4)]))}});var qs=$(Qs,[["__scopeId","data-v-78901c78"]]),Ys="/assets/heater.43006232.png";const Xs={},ea=e=>(fe("data-v-c9039a0c"),e=e(),pe(),e),ta={id:"heater"},na=ea(()=>l("img",{src:Ys},null,-1)),ra=[na];function ia(e,t){return h(),g("div",ta,ra)}var sa=$(Xs,[["render",ia],["__scopeId","data-v-c9039a0c"]]),aa="/assets/table-top.c87bd2fd.png",Ft="/assets/table-front.78c0f8c6.png",Ct="/assets/table-side.49774a53.png";const oa={},ve=e=>(fe("data-v-1ef8d93c"),e=e(),pe(),e),la={id:"table"},ua=ve(()=>l("img",{src:aa,id:"table-top"},null,-1)),ca=ve(()=>l("img",{src:Ft,id:"table-front"},null,-1)),da=ve(()=>l("img",{src:Ft,id:"table-back"},null,-1)),ha=ve(()=>l("img",{src:Ct,id:"table-left-side"},null,-1)),ga=ve(()=>l("img",{src:Ct,id:"table-right-side"},null,-1)),ma=[ua,ca,da,ha,ga];function fa(e,t){return h(),g("div",la,ma)}var pa=$(oa,[["render",fa],["__scopeId","data-v-1ef8d93c"]]),ba="/assets/board-front.41330f02.png",Et="/assets/board-side.d7181ded.png",va="/assets/tv-front.82df5c0c.png",wa="/assets/news.c4bbc2d0.png",Wt="/assets/tvset-legs.78b387df.png";const ya=B({props:{withNews:Boolean}}),Ge=e=>(fe("data-v-118e7bdf"),e=e(),pe(),e),ka={id:"tvset"},Sa=Ge(()=>l("div",{id:"board"},[l("img",{id:"board-front",src:ba}),l("img",{id:"board-left",src:Et}),l("img",{id:"board-right",src:Et}),l("div",{id:"board-top"})],-1)),Da={id:"tv"},Pa=Ge(()=>l("img",{id:"tv-front",src:va},null,-1)),_a={key:0,id:"news",src:wa},za=Ge(()=>l("div",{id:"legs"},[l("img",{id:"legs-front",src:Wt}),l("img",{id:"legs-back",src:Wt})],-1));function Aa(e,t,n,r,i,s){return h(),g("div",ka,[Sa,l("div",Da,[Pa,e.withNews?(h(),g("img",_a)):F("",!0)]),za])}var Fa=$(ya,[["render",Aa],["__scopeId","data-v-118e7bdf"]]);const Ca={},Ea={class:"dialog"},Wa={class:"buttons"};function La(e,t){return h(),g("div",Ea,[We(e.$slots,"default",{},void 0,!0),l("div",Wa,[We(e.$slots,"buttons",{},void 0,!0)])])}var Lt=$(Ca,[["render",La],["__scopeId","data-v-620b183d"]]);const xa=B({setup(){const e=oe();return e.dispatch("setupTour"),{store:e}},components:{Dialog:Lt},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return ge.find(e=>e.id===this.$store.state.tour.step)},title(){var e;return(e=this.currentStep)==null?void 0:e.title},text(){var e;return(e=this.currentStep)==null?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var n;const t=document.querySelector(".highlighted");t&&t.classList.remove("highlighted"),e&&e.highlight&&((n=document.querySelector(`#${e.highlight}`))==null||n.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}}),Ta=["innerHTML"];function Va(e,t,n,r,i,s){const u=re("Dialog");return e.title&&e.text?(h(),ee(u,{key:0},{buttons:we(()=>[l("button",{onClick:t[0]||(t[0]=(...m)=>e.stop&&e.stop(...m))},"Tour beenden"),l("button",{onClick:t[1]||(t[1]=(...m)=>e.next&&e.next(...m))},"Weiter")]),default:we(()=>[l("h2",null,k(e.title),1),l("div",{innerHTML:e.text},null,8,Ta)]),_:1})):F("",!0)}var Oa=$(xa,[["render",Va]]);const Ia={class:"game-setup"},Ma=l("h1",null,"#ich-kann-klima",-1),Ba=l("div",{id:"walls"},[l("div",{id:"wall-back"}),l("div",{id:"wall-left"}),l("div",{id:"wall-right"})],-1),$a=B({setup(e){const t=oe(),n=_(()=>{var z;const v=((z=t.state.game)==null?void 0:z.events)||[];if(v.length===0)return;const d=v[0];if(!d.acknowledged)return ze.find(V=>V.id===d.id)}),r=_(()=>{var v;return((v=n.value)==null?void 0:v.title)||""}),i=_(()=>{var v;return((v=n.value)==null?void 0:v.description)||""}),s=_(()=>{var v;return((v=t.state.game)==null?void 0:v.currentYear)||2021}),u=_(()=>{var v;return ye((v=t.state.game)==null?void 0:v.currentDate).lux.month}),m=_(()=>{const v=t.state.game;return v?is(v):0}),c=_(()=>{var v;return((v=t.state.game)==null?void 0:v.values.popularity)||100}),f=_(()=>{const v=t.state.game;return v?rs(v):0});function S(){t.dispatch("acknowledgeEvent",n.value)}return(v,d)=>(h(),g("div",Ia,[Ma,Ba,I(qs,{year:E(s),month:E(u)},null,8,["year","month"]),I(sa),I(Ns,{value:E(c)},null,8,["value"]),I(Fa,{"with-news":!!E(i)},null,8,["with-news"]),I(Rs,{value:E(f)},null,8,["value"]),I(pa),I(Ts,{value:E(m)},null,8,["value"]),I(ps),I(ws,{title:E(r),text:E(i),onAcknowledge:S},null,8,["title","text"]),I(Oa)]))}});const Na=["onClick"],Ua=B({setup(e){const t=oe(),n=_(()=>{var u;return(u=t.state.game)==null?void 0:u.acceptedLaws}),r=X(void 0),i=_(()=>ae.filter(u=>{var m,c;return((m=n.value)==null?void 0:m.some(f=>f.lawId===u.id))&&!((c=u.labels)==null?void 0:c.includes("hidden"))}));function s(u){r.value=r.value===u?void 0:u}return(u,m)=>(h(!0),g(J,null,Z(E(i),(c,f)=>(h(),g("div",{key:f,class:N(["Law",{opened:f===r.value}]),onClick:S=>s(f)},[l("h3",null,k(c.title),1),l("div",null,k(c.description),1)],10,Na))),128))}});var Ga=$(Ua,[["__scopeId","data-v-7efa2df1"]]);const Ka=B({components:{GameSetup:$a,AcceptedLaws:Ga},setup(){return{store:oe()}},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,n){n(r=>r.startGame(e.params.id))}});function Ja(e,t,n,r,i,s){const u=re("GameSetup");return h(),ee(u)}var xt=$(Ka,[["render",Ja],["__scopeId","data-v-3637ce73"]]);const Ha=B({components:{Dialog:Lt},setup(){return{store:oe()}},computed:{co2(){var n,r;const e=(n=this.store.state.game)==null?void 0:n.values.co2budget;return((r=this.store.state.game)==null?void 0:r.values.co2emissions)>0?e>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. H\xE4tte die AfD nicht besser hinbekommen.":e>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken k\xF6nnen. Punktlandung."},debt(){var t;return((t=this.store.state.game)==null?void 0:t.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilit\xE4tskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var t;const e=(t=this.store.state.game)==null?void 0:t.values.popularity;return e<20?"entspricht dem, was man von einem langh\xE4hrigen Diktator erwarten kann.":e<50?"ist nicht berauschend, wiedergew\xE4hlt w\xFCrdest du wohl eher nicht.":e<80?"reicht aus, dass du noch l\xE4nger am Ruder bleiben k\xF6nntest. Gratulation!":"ist v\xF6llig unglaubw\xFCrdig - war das wirklich eine freie Wahl?"}},methods:{loadGame(e){this.store.dispatch("loadGame",{gameId:e})},newGame(){this.$router.push("/games")}},beforeRouteEnter(e,t,n){n(r=>{r.loadGame(e.params.id)})}}),ja=l("h2",null,"Das Spiel ist leider zu Ende",-1),Ra=l("p",null,"Deine Entscheidungen haben etwas ver\xE4ndert - soviel kann man sagen.",-1),Za=l("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Qa={class:"button-bar"};function qa(e,t,n,r,i,s){const u=re("Dialog");return h(),ee(u,null,{default:we(()=>[ja,Ra,l("ul",null,[l("li",null,"Die CO2-Emmissionen "+k(e.co2),1),l("li",null,"Die Staatsfinanzen "+k(e.debt),1),l("li",null,"Deine Beliebtheit "+k(e.popularity),1)]),Za,l("div",Qa,[l("button",{onClick:t[0]||(t[0]=(...m)=>e.newGame&&e.newGame(...m))},"Neuer Versuch")])]),_:1})}var Ya=$(Ha,[["render",qa]]);const Xa=[{path:"/",redirect:"/games"},{path:"/games",component:xt},{path:"/games/:id",component:xt},{path:"/games/:id/over",component:Ya}],Tt=Ht({history:jt(),routes:Xa});function eo(e){return{createGame(t){return e.add("post","/games",t)},loadGame(t){return e.add("get","/games/"+t,void 0,0)},saveGame(t){return e.remove("put","/games/"+t.id),e.add("put","/games/"+t.id,t)},decisionMade(t,n,r){return e.add("post","/games/"+t+"/decisions/"+n,{accepted:r})},eventOccurred(t,n){return e.add("post","/games/"+t+"/events/"+n)}}}function to(e,t){let n=[],r;async function i(){if(r&&(clearTimeout(r),r=void 0),n.length){const s=n[0],{method:u,path:m,data:c,retry:f,resolve:S,reject:v}=s;try{if((t==null?void 0:t.navigator)&&!(t==null?void 0:t.navigator.onLine))throw Error("Browser is offline");const d=await e(u,m,c);n.shift(),S(d)}catch(d){f?s.retry=Math.max(-1,f-1):(n.shift(),v(d))}n.length&&(r=setTimeout(i,(t==null?void 0:t.timeout)||1e4))}}return{add(s,u,m,c=-1){return new Promise((f,S)=>{n.push({method:s,path:u,data:m,retry:c,resolve:f,reject:S}),r||i()})},remove(s,u){n=n.filter(m=>m.method.toLowerCase()!==s.toLowerCase()||m.path!==u)},callsPending(){return n.length>0}}}function no(e,t,n=console){return async function(r,i,s){var u;try{const m={method:r};["post","put","patch"].includes(r)&&(m.body=JSON.stringify(s),m.headers={["content-type"]:"application/json"});const c=await t(e+i,m),f=((u=c.headers.get("Content-Type"))==null?void 0:u.match(/json/))?await c.json():await c.text();if(c.ok)return f;throw Error(f.message||f)}catch(m){throw n.error(m),m}}}function ro({api:e,logger:t=console,storage:n=localStorage}){return{createGame(r){Ve(r),n.setItem("game",JSON.stringify(r)),e.createGame(r).catch(i=>{t.warn("Cannot save new game - trying again later",i)})},async loadGame(r){const i=n.getItem("game");if(i){const u=JSON.parse(i);if(u.id===r)return Ve(u),$e(u,r)}const s=await e.loadGame(r);return Ve(s),$e(s,r)},saveGame(r){r.prngState=un(),n.setItem("game",JSON.stringify(r)),e.saveGame(r).catch(i=>{t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",i)})},decisionMade(r,i,s){e.decisionMade(r.id,i,s)},eventOccurred(r,i){e.eventOccurred(r.id,i.id)}}}const io=localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",so=no(io,fetch),ao=to(so),oo=eo(ao),lo=ro({api:oo}),uo=ss(Tt,lo),Vt=Symbol();function oe(){return Rt(Vt)}const co=Zt({state:ls,mutations:as,actions:uo,getters:os});function Ot(e,t,...n){for(const r of n){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function ho(e,t,n){function r(c){return e[c].toFixed(2)}function i(c){return(c>0?"+":"")+c.toFixed(2)}function s(c){const f=n.find(S=>S.type==="modify"&&S.name===c);return f&&f.condition?f.value:0}function u(c){const f=s(c),S=t?t[c]:0;return f&&Math.abs(f-S)<.001?i(f):f?i(f)+" / "+i(S):S!=0?i(S):""}return wt.map(c=>({id:c.name,unit:c.unit,value:r(c.name),effect:u(c.name),class:c.writable?"writable":"calculated"}))}function go(e,t,n,r){const i=e.proposedLaws,s=e.acceptedLaws.map(c=>c.lawId),u=e.rejectedLaws;function m(c){return s.includes(c)?"a":i.includes(c)?"p":u.includes(c)?"r":"x"}return r.map(c=>({id:c.id,priority:c.priority(e),state:m(c.id)})).sort((c,f)=>Ot(c,f,t,"id")*n).map(c=>G(T({},c),{priority:c.priority.toFixed(2)}))}function mo(e,t,n,r){return r.map(i=>({id:i.id,probability:i.probability(e)})).sort((i,s)=>Ot(i,s,t,"id")*n).map(i=>G(T({},i),{probability:(i.probability*100).toFixed(2)}))}const fo={key:0},po=["href"],bo=K(". "),vo={key:1},wo={key:2},yo=K("Bemerkung: "),ko=["innerHTML"],So=K(". "),Do={key:3},Po=K("Internes: "),_o=["innerHTML"],zo=K(". "),Ao={key:4},Fo=["href"],Co=K(". "),Eo={key:5},Wo=["href"],Lo=K(". "),xo={key:6},To=["href"],Vo=K(". "),Oo=B({props:{citation:null,showInternals:{type:Boolean}},setup(e){const t=e,n=_(()=>t.citation.url.toString()),r=_(()=>t.citation.title||t.citation.url.toString());return(i,s)=>(h(),g("p",null,[e.citation.authors?(h(),g("span",fo,k(e.citation.authors+e.citation.dateString())+". ",1)):F("",!0),l("a",{target:"_blank",rel:"noreferrer noopener",href:E(n)},'"'+k(E(r))+'"',9,po),bo,e.citation.publisher?(h(),g("span",vo,k(e.citation.publisher)+". ",1)):F("",!0),e.citation.comment?(h(),g("span",wo,[yo,l("span",{innerHTML:e.citation.comment},null,8,ko),So])):F("",!0),e.showInternals&&e.citation.internalComment?(h(),g("span",Do,[Po,l("span",{innerHTML:e.citation.internalComment},null,8,_o),zo])):F("",!0),e.citation.referringUrl?(h(),g("span",Ao,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,Fo),Co])):F("",!0),e.citation.archiveUrl?(h(),g("span",Eo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,Wo),Lo])):F("",!0),e.citation.localCopy?(h(),g("span",xo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,To),Vo])):F("",!0)]))}}),Io=B({props:{chartData:null,paramId:null,selectedYear:null},emits:["update:selectedYear"],setup(e,{emit:t}){const n=e,r="#9c6d00",i="#ce900070",s="#644600",u=_(()=>({xaxis:{categories:he,labels:{rotate:-90}},chart:{id:n.paramId+"-withLawEffects",animations:{enabled:!1},stacked:!0},colors:[r,s,i],legend:{show:!1},markers:{size:0},dataLabels:{enabled:!1}})),m=_(()=>n.chartData.values.map((D,W)=>({value:D[n.paramId],change:n.chartData.changes[W][n.paramId]}))),c=_(()=>m.value.map(D=>{const W=D.value-D.change;return D.change*D.value>0?W*D.value>0?{value:W,gain:D.change,loss:0}:{value:0,gain:D.value,loss:W}:{value:D.value,gain:0,loss:-D.change}})),f=_(()=>[{name:"Simulated "+n.paramId,data:c.value.map(D=>Math.round(D.value))},{name:"Gains of "+n.paramId+" by selected law",data:c.value.map(D=>Math.round(D.gain))},{name:"Losses of "+n.paramId+" by selected law",data:c.value.map(D=>Math.round(D.loss))}]),S=X();let v;function d(){var D,W;((D=S.value)==null?void 0:D.chart)!=null&&v!=null&&((W=S.value)==null||W.toggleDataPointSelection(0,v)),v=void 0}function z(D){var W,M;if(((W=S.value)==null?void 0:W.chart)!=null&&D){const R=D-he[0];v!=R&&(d(),v=R,(M=S.value)==null||M.toggleDataPointSelection(0,R))}else d()}Qt(()=>z(n.selectedYear),{flush:"post"});function V(D,W,M){const R=M.dataPointIndex;R<0||(R===v?(v=void 0,t("update:selectedYear",void 0)):(v=R,t("update:selectedYear",R+he[0])))}return(D,W)=>(h(),g("div",null,[l("div",null,k(e.paramId),1),I(E(qt),{ref:(M,R)=>{R.chart=M,S.value=M},type:"bar",options:E(u),series:E(f),onClick:V},null,8,["options","series"])]))}}),Mo=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"DaemmungAltbau4Percent",effectiveSince:2022},{lawId:"ForschungEmissionsfreieZementproduktion",effectiveSince:2023},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024},{lawId:"ForschungEmissionsfreieStahlproduktion",effectiveSince:2024},{lawId:"FernverkehrModernisieren",effectiveSince:2025},{lawId:"NahverkehrModernisieren",effectiveSince:2026},{lawId:"FernverkehrVerbindungenAusbauen",effectiveSince:2026},{lawId:"NahverkehrAusbauen",effectiveSince:2026},{lawId:"LadeinfrastrukturAusbauen",effectiveSince:2026},{lawId:"NahverkehrKostenlos",effectiveSince:2027},{lawId:"DienstwagenPrivilegAbgeschaffen",effectiveSince:2027},{lawId:"ElektromobilitaetFoerdern",effectiveSince:2027},{lawId:"WasserstoffmobilitaetFoerdern",effectiveSince:2027}]}],Ae=(e,t)=>e.lawId===t.lawId&&e.effectiveSince===t.effectiveSince,Bo=e=>e.map((t,n)=>G(T({},t),{sortId:n}));function $o(...e){const t=e.map(n=>n.length===0?0:n[n.length-1].sortId+1);return t.length===0?0:Math.max.apply(Math,t)}function No(e){const t=X([]),n=X([]),r=X(!1);function i(V,D){var Je;const W=t.value,M={lawId:V,effectiveSince:D,sortId:0},R=(Je=n.value.find(me=>Ae(M,me)))==null?void 0:Je.sortId;M.sortId=R!=null?R:$o(W,n.value),t.value=W.filter(me=>me.lawId!=V).concat(M).sort((me,Mt)=>me.sortId-Mt.sortId)}function s(V){t.value=t.value.filter(D=>D.lawId!=V)}function u(V,D){const W={lawId:V,effectiveSince:D,sortId:0};t.value.some(M=>Ae(M,W))?s(V):i(V,D)}function m(V){t.value=Bo(V.laws)}function c(){r.value=!r.value,r.value?n.value=t.value:n.value=[]}const f=_(()=>{var V;return{name:"Current Game",laws:((V=e.value)==null?void 0:V.acceptedLaws)||[]}}),S=_(()=>[f.value,...Mo]),v=_(()=>{const V=t.value.map(W=>G(T({},W),{cls:n.value.some(M=>Ae(W,M))?"both":"new"})),D=n.value.filter(W=>!t.value.some(M=>Ae(M,W))).map(W=>G(T({},W),{cls:"saved"}));return[...V,...D].sort((W,M)=>W.sortId-M.sortId)}),d=It(t),z=It(n);return{addToSimulation:i,removeFromSimulation:s,toggleInSimulation:u,loadPreset:m,compareActive:r,toggleCompare:c,presets:S,simulatedLaws:v,simulation:d,secondSimulation:z}}function It(e){return _(()=>{const t=_t(),n=e.value.map(i=>Pe(i));return he.map(i=>{for(;i>t.currentYear;){t.currentYear++;const{values:s,effectsOfLaws:u}=zt(t,n,t.currentYear);if(t.values=s,i===t.currentYear)return{values:s,effectsOfLaws:u}}return{values:t.values,effectsOfLaws:{}}})})}const Uo=B({directives:{clickaway:Ze},setup(e,t){const n=X(!1);return{menuIsOpen:n,toggle:()=>n.value=!n.value,close:()=>n.value=!1}}});function Go(e,t,n,r,i,s){const u=Yt("clickaway");return Xt((h(),g("span",{onClick:t[0]||(t[0]=(...m)=>e.toggle&&e.toggle(...m)),class:N(["menu",{menuIsOpen:e.menuIsOpen}])},[We(e.$slots,"default",{},void 0,!0)],2)),[[u,e.close]])}var Ko=$(Uo,[["render",Go],["__scopeId","data-v-06206e01"]]);const Jo=B({directives:{clickaway:Ze},components:{Citation:Oo,PeekChart:Io,Menu:Ko},setup(){const e=oe(),t=_(()=>e.state.game),n=No(t);return T({store:e,game:t,gameYears:he},n)},data(){return{lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lastSelected:void 0,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,yearSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1}},methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){e===this.lawSelected?this.lawSelected=void 0:(this.lastSelected="law",this.lawSelected=e)},selectEvent(e){e===this.eventSelected?this.eventSelected=void 0:(this.lastSelected="event",this.eventSelected=e)},selectParam(e){e===this.paramSelected?this.paramSelected=void 0:(this.lastSelected="param",this.paramSelected=e)},selectYear(e){e===this.yearSelected?this.yearSelected=void 0:(this.lastSelected="year",this.yearSelected=e)},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0,this.yearSelected=void 0},dragStart(e,t){const{lawId:n,year:r}=t;!e.dataTransfer||(e.dataTransfer.dropEffect="link",n&&e.dataTransfer.setData("lawId",n),r&&e.dataTransfer.setData("year",r.toString()))},getDropped(e,t,n){if(!e.dataTransfer)return;const r=e.dataTransfer.getData(t);return n.find(i=>i==r)},onDrop(e,t){const{lawId:n,year:r}=t,i=this.getDropped(e,"lawId",yi),s=this.getDropped(e,"year",this.gameYears);r&&i?this.addToSimulation(i,r):n&&s?this.addToSimulation(n,s):n&&i&&this.removeFromSimulation(i)},rightClick(e,t){this.toggleInSimulation(e,t)}},computed:{startYearOfSelected(){if(!this.lawSelected)return;if(!this.game)return le;const e=this.simulatedLaws.find(t=>t.lawId===this.lawSelected);return e?e.effectiveSince:this.game.currentYear},selectedLaw(){return ae.find(e=>e.id===this.lawSelected)},lawEffort(){var e;if(!!this.game)return(e=this.selectedLaw)==null?void 0:e.effort(this.game)},selectedEvent(){return ze.find(e=>e.id===this.eventSelected)},selectedParam(){return this.paramSelected?q[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof P?e:void 0},cParam(){const e=this.selectedParam;return e instanceof j?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},currentYear(){return this.yearSelected?this.yearSelected:this.game?this.game.currentYear:le},effectsOfSelected(){return!this.selectedLaw||!this.startYearOfSelected||!this.game?[]:this.selectedLaw.effects(this.game,this.startYearOfSelected,this.currentYear)},sortedValues(){return this.game?ho(this.simOfYear.values,this.effectsOfLawInYear,this.effectsOfSelected):[]},sortedLaws(){return this.game?go(this.game,this.lawsSortCol,this.lawsSortDir,ae):[]},sortedEvents(){return this.game?mo(this.game,this.eventsSortCol,this.eventsSortDir,ze):[]},effectsOfLawInYear(){if(this.lawSelected)return this.simOfYear.effectsOfLaws[this.lawSelected];if(this.yearSelected)return this.simEffectOfLaw[this.yearSelected-this.gameYears[0]]},simOfYear(){if(this.yearSelected===void 0&&this.game){const e=this.effectsOfSelected,t=this.game.values;if(this.lawSelected===void 0||e.length===0)return{values:t,effectsOfLaws:{}};const n=ce(t);Be({dispatch:()=>{},values:n},e);const i=Object.fromEntries(pt.map(s=>[s,n[s]-t[s]]));return{values:t,effectsOfLaws:{[this.lawSelected]:i}}}else{const e=this.yearSelected?this.yearSelected-this.gameYears[0]:0;return this.simulation[e]}},simulatedValues(){return this.simulation.map(e=>e.values)},simEffectOfLaw(){if(this.lawSelected){const e=this.lawSelected;return this.simulation.map(t=>{const n=t.effectsOfLaws[e];return n||yt})}return this.compareActive?this.secondSimulation.map((e,t)=>Object.fromEntries(Object.entries(e.values).map(([n,r])=>[n,this.simulation[t].values[n]-r]))):he.map(e=>yt)},chartData(){return{values:this.simulatedValues,changes:this.simEffectOfLaw}},lawsInYear(){return e=>this.simulatedLaws.filter(t=>t.effectiveSince===e)}}}),Y=e=>(fe("data-v-85b0da02"),e=e(),pe(),e),Ho={class:"peekData"},jo={class:"Menu"},Ro=K("\xA0 "),Zo=K("\xA0 "),Qo=K("\xA0 "),qo=K("\xA0 "),Yo=K("\xA0 "),Xo=K("\xA0 "),el={key:1,class:"Details sidebyside"},tl={class:"Title"},nl={class:"Description"},rl={class:"SectionHead"},il={class:"Section"},sl=Y(()=>l("div",{class:"SectionHead"},"Details:",-1)),al=["innerHTML"],ol=Y(()=>l("div",{class:"SectionHead"},"Internes:",-1)),ll=["innerHTML"],ul=Y(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),cl={key:2,class:"Details sidebyside"},dl={class:"Title"},hl={class:"Description"},gl=Y(()=>l("div",{class:"SectionHead"},"Details:",-1)),ml=["innerHTML"],fl=Y(()=>l("div",{class:"SectionHead"},"Internes:",-1)),pl=["innerHTML"],bl=Y(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),vl={key:3,class:"Details sidebyside"},wl={class:"Title"},yl={key:0},kl={key:1},Sl={key:2},Dl=Y(()=>l("div",{class:"SectionHead"},"Details:",-1)),Pl=["innerHTML"],_l=Y(()=>l("div",{class:"SectionHead"},"Internes:",-1)),zl=["innerHTML"],Al=Y(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),Fl={class:"paramsHeader"},Cl=["onClick"],El={class:"numbercol"},Wl={class:"effcol"},Ll={key:5,class:"lawList sidebyside"},xl=["onClick","onDragstart","onDrop"],Tl={class:"priocol"},Vl={key:6,class:"eventList sidebyside"},Ol=["onClick"],Il={class:"priocol"},Ml={key:7,class:"yearList sidebyside"},Bl=Y(()=>l("a",{class:"clickable"},"Presets",-1)),$l={class:"dropdown"},Nl=["onClick"],Ul=K("\xA0 "),Gl=["onClick","onDragstart","onDrop"],Kl=["onClick","onContextmenu","onDragstart","onDrop"];function Jl(e,t,n,r,i,s){var f,S,v;const u=re("PeekChart"),m=re("Citation"),c=re("Menu");return h(),g("details",Ho,[l("summary",{onClick:t[0]||(t[0]=d=>e.unselect()),class:"clickable"},"Peek"),l("div",jo,[l("a",{onClick:t[1]||(t[1]=d=>e.showCharts=!e.showCharts),class:N(["clickable",e.showCharts?"selected":""])},"Charts",2),Ro,l("a",{onClick:t[2]||(t[2]=d=>e.showDetails=!e.showDetails),class:N(["clickable",e.showDetails?"selected":""])},"Details",2),Zo,l("a",{onClick:t[3]||(t[3]=d=>e.showParams=!e.showParams),class:N(["clickable",e.showParams?"selected":""])},"Params",2),Qo,l("a",{onClick:t[4]||(t[4]=d=>e.toggleLawList()),class:N(["clickable",e.showLaws?"selected":""])},"Laws",2),qo,l("a",{onClick:t[5]||(t[5]=d=>e.toggleEventList()),class:N(["clickable",e.showEvents?"selected":""])},"Events",2),Yo,l("a",{onClick:t[6]||(t[6]=d=>e.showYears=!e.showYears),class:N(["clickable",e.showYears?"selected":""])},"Years",2),Xo]),e.showCharts?(h(),g("div",{key:0,class:N(["Details sidebyside",{lawSelected:e.lawSelected!=null}])},[e.paramSelected?(h(),ee(u,{key:0,selectedYear:e.yearSelected,"onUpdate:selectedYear":t[7]||(t[7]=d=>e.yearSelected=d),chartData:e.chartData,paramId:e.paramSelected},null,8,["selectedYear","chartData","paramId"])):F("",!0),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[8]||(t[8]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"co2emissions"},null,8,["selectedYear","chartData"]),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[9]||(t[9]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"popularity"},null,8,["selectedYear","chartData"]),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[10]||(t[10]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"stateDebt"},null,8,["selectedYear","chartData"]),I(u,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[11]||(t[11]=d=>e.yearSelected=d),chartData:e.chartData,paramId:"co2budget"},null,8,["selectedYear","chartData"])],2)):F("",!0),e.lastSelected==="law"&&e.selectedLaw&&e.showDetails?(h(),g("div",el,[l("div",tl,k(e.selectedLaw.title),1),l("div",nl,k(e.selectedLaw.description),1),l("div",rl,"Aufwand: "+k((f=e.lawEffort)==null?void 0:f.time.toMonthsString()),1),l("div",il,k((S=e.lawEffort)==null?void 0:S.text),1),sl,l("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,al),ol,l("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,ll),ul,(h(!0),g(J,null,Z(e.citationsOfLaw,(d,z)=>(h(),ee(m,{class:"Section",key:z,citation:d},null,8,["citation"]))),128))])):F("",!0),e.lastSelected==="event"&&e.selectedEvent&&e.showDetails?(h(),g("div",cl,[l("div",dl,k(e.selectedEvent.title),1),l("div",hl,k(e.selectedEvent.description),1),gl,l("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,ml),fl,l("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,pl),bl,(h(!0),g(J,null,Z((v=e.selectedEvent)==null?void 0:v.citations,(d,z)=>(h(),ee(m,{class:"Section",key:z,citation:d},null,8,["citation"]))),128))])):F("",!0),e.lastSelected==="param"&&e.selectedParam&&e.showDetails?(h(),g("div",vl,[l("div",wl,k(e.paramSelected)+" ["+k(e.selectedParam.unit)+"]",1),e.wParam?(h(),g("div",yl,"Initial value: "+k(e.wParam.initialValue)+" "+k(e.wParam.unit),1)):F("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(h(),g("div",kl," Should initially be: "+k(e.cParam.shouldInitiallyBe)+" "+k(e.cParam.unit),1)):F("",!0),e.cParam?(h(),g("div",Sl," Calculation: "+k(e.cParam.valueGetter),1)):F("",!0),Dl,l("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,Pl),_l,l("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,zl),Al,(h(!0),g(J,null,Z(e.selectedParam.citations,(d,z)=>(h(),ee(m,{class:"Section",key:z,citation:d},null,8,["citation"]))),128))])):F("",!0),e.showParams?(h(),g("div",{key:4,class:N(["paramsList sidebyside",{lawSelected:e.lawSelected!=null}])},[l("div",Fl,[l("div",null,"Start of law: "+k(e.startYearOfSelected),1),l("div",null,"Current year: "+k(e.currentYear),1)]),l("table",null,[(h(!0),g(J,null,Z(e.sortedValues,d=>(h(),g("tr",{key:d.id,class:N({clickable:!0,selected:e.paramSelected===d.id,[d.class]:!0}),onClick:z=>e.selectParam(d.id)},[l("td",null,k(d.id),1),l("td",El,k(d.value),1),l("td",Wl,k(d.effect),1),l("td",null,k(d.unit),1)],10,Cl))),128))])],2)):F("",!0),e.showLaws?(h(),g("div",Ll,[l("table",null,[l("tr",null,[l("th",{onClick:t[12]||(t[12]=d=>e.sortLaws("state")),class:"clickable"},"S"),l("th",{onClick:t[13]||(t[13]=d=>e.sortLaws("id")),class:"clickable"},"ID"),l("th",{onClick:t[14]||(t[14]=d=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(h(!0),g(J,null,Z(e.sortedLaws,d=>(h(),g("tr",{key:d.id,class:N({clickable:!0,selected:e.lawSelected===d.id,[d.state]:!0}),onClick:z=>e.selectLaw(d.id),draggable:"true",onDragstart:z=>e.dragStart(z,{lawId:d.id}),onDrop:Q(z=>e.onDrop(z,{lawId:d.id}),["prevent"]),onDragover:t[15]||(t[15]=Q(()=>{},["prevent"])),onDragenter:t[16]||(t[16]=Q(()=>{},["prevent"]))},[l("td",null,k(d.state),1),l("td",null,k(d.id),1),l("td",Tl,k(d.priority),1)],42,xl))),128))])])):F("",!0),e.showEvents?(h(),g("div",Vl,[l("table",null,[l("tr",null,[l("th",{onClick:t[17]||(t[17]=d=>e.sortEvents("id")),class:"clickable"},"ID"),l("th",{onClick:t[18]||(t[18]=d=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(h(!0),g(J,null,Z(e.sortedEvents,d=>(h(),g("tr",{key:d.id,class:N({clickable:!0,selected:e.eventSelected===d.id}),onClick:z=>e.selectEvent(d.id)},[l("td",null,k(d.id),1),l("td",Il,k(d.probability),1)],10,Ol))),128))])])):F("",!0),e.showYears?(h(),g("div",Ml,[l("div",null,[I(c,null,{default:we(()=>[Bl,l("ul",$l,[(h(!0),g(J,null,Z(e.presets,d=>(h(),g("li",{key:d.name,class:"clickable",onClick:z=>e.loadPreset(d)},k(d.name),9,Nl))),128))])]),_:1}),Ul,l("a",{class:N(["clickable",e.compareActive?"selected":""]),onClick:t[19]||(t[19]=d=>e.toggleCompare())},"Compare",2)]),l("table",null,[(h(!0),g(J,null,Z(e.gameYears,d=>(h(),g(J,{key:d},[l("tr",{class:N({clickable:!0,selected:e.yearSelected===d}),onClick:z=>e.selectYear(d),draggable:"true",onDragstart:z=>e.dragStart(z,{year:d}),onDrop:Q(z=>e.onDrop(z,{year:d}),["prevent"]),onDragover:t[20]||(t[20]=Q(()=>{},["prevent"])),onDragenter:t[21]||(t[21]=Q(()=>{},["prevent"]))},[l("th",null,k(d),1)],42,Gl),(h(!0),g(J,null,Z(e.lawsInYear(d),({lawId:z,cls:V})=>(h(),g("tr",{key:z,class:N({clickable:!0,selected:e.lawSelected===z,[V]:!0}),onClick:D=>e.selectLaw(z),onContextmenu:Q(D=>e.rightClick(z,d),["right","prevent"]),draggable:"true",onDragstart:D=>e.dragStart(D,{lawId:z}),onDrop:Q(D=>e.onDrop(D,{year:d}),["prevent"]),onDragover:t[22]||(t[22]=Q(()=>{},["prevent"])),onDragenter:t[23]||(t[23]=Q(()=>{},["prevent"]))},[l("td",null,k(z),1)],42,Kl))),128))],64))),128))])])):F("",!0)])}var Hl=$(Jo,[["render",Jl],["__scopeId","data-v-85b0da02"]]);const jl=B({components:{PeekInside:Hl},setup(){return{store:oe(),devMode:localStorage.getItem("devMode")==="true"}},methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,n=Math.min(e/800,t/1e3),r=(t-1e3*n)/2;document.documentElement.style.setProperty("--scale",`${n}`),document.documentElement.style.setProperty("--translateX",`${r}px`)}},mounted(){setTimeout(this.updateStyle,0),window.addEventListener("resize",this.updateStyle)}}),Rl={class:"perspective"},Zl={class:"peek"};function Ql(e,t,n,r,i,s){const u=re("router-view"),m=re("PeekInside");return h(),g(J,null,[l("div",Rl,[I(u)]),l("div",Zl,[e.devMode?(h(),ee(m,{key:0})):F("",!0)])],64)}var ql=$(jl,[["render",Ql]]);const Ke=en(ql);Ke.use(co,Vt);Ke.use(Tt);Ke.mount("#app");
