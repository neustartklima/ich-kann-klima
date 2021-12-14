var Mt=Object.defineProperty,Bt=Object.defineProperties;var $t=Object.getOwnPropertyDescriptors;var Ke=Object.getOwnPropertySymbols;var Nt=Object.prototype.hasOwnProperty,Ut=Object.prototype.propertyIsEnumerable;var Fe=(e,t,n)=>t in e?Mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t)=>{for(var n in t||(t={}))Nt.call(t,n)&&Fe(e,n,t[n]);if(Ke)for(var n of Ke(t))Ut.call(t,n)&&Fe(e,n,t[n]);return e},$=(e,t)=>Bt(e,$t(t));var E=(e,t,n)=>(Fe(e,typeof t!="symbol"?t+"":t,n),n);import{D as Je,a as He,s as je,b as Gt,v as Kt,d as V,r as X,c as S,o as g,e as m,f as l,g as _,t as y,n as M,h as Ce,u as F,p as me,i as fe,F as K,j as R,k as Z,l as O,m as N,q as Ee,w as ne,x as ve,y as Jt,z as Ht,A as jt,B as Rt,C as Zt,E as Qt,G as Re,H as qt,I as Yt,J as Q,K as Xt}from"./vendor.7c8b94f1.js";const en=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};en();const tn={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};class We{constructor(t){E(this,"lux");t instanceof He?this.lux=t.setLocale("de-DE").setZone("Europe/Berlin"):this.lux=He.fromISO(t,{zone:"Europe/Berlin",locale:"de-DE"})}static durationBetween(t,n){return new Ze(n.lux.diff(t.lux,["months"]))}plus(t){return new We(this.lux.plus(t.lux))}getYear(){return this.lux.get("year")}toLocaleString(){return this.lux.toLocaleString(tn)}toMonthString(){return this.lux.toLocaleString({month:"long",year:"numeric"})}toJSON(){return this.lux.toJSON()}}class Ze{constructor(t){E(this,"lux");t instanceof Je?this.lux=t:this.lux=Je.fromISO(t,{locale:"de-DE"})}toMonthsString(){const t=this.lux.as("months");return t===1?"1 Monat":t+" Monate"}}function we(e){return new We(e)}function ye(e){return new Ze(e)}const oe=2021,nn="2021-01-01",Qe=2050,qe=ye("P3M"),rn=ye("P3M"),Ye=6,sn=.6;function L(e){return e}const pe={newYear:2,timesUp:3,finanzKollaps:4,wahlVerloren:5,hitzehoelle:6};var an=L({title:"Abstandsregeln f\xFCr Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erh\xF6ht wird. Das f\xFChrte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply(){return[]}});const on=e=>({time:qe,text:`Braucht ${qe.toMonthsString()}.`});function w(e){return e}let Le=je("",{state:!0}),Xe=()=>Math.abs(Le());function xe(e){Le=je(e.id,{state:e.prngState})}function ln(){return Le.state()}var un=w({title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bew\xE4hrt. Wir lassen sie so, wie sie sind.",effects(){return[]},priority(e){return Xe()}});const cn=new Gt.exports.Converter;function et(e){return e>0?[...Array(e)].map((t,n)=>n):[]}function tt(e,t){const n=e-t-1;return[...et(t),Math.max(t,n),...et(n).reverse()]}function s(e,...t){let n=e.map((i,a)=>i+(t[a]||"")).join("").split(`
`);n[0].length===0&&n.shift();const r=n[0].match(/^(\s+)/);return r&&!n.filter(i=>i.trim()).some(i=>!i.startsWith(r[1]))&&(n=n.map(i=>i.replace(r[1],""))),cn.makeHtml(n.join(`
`))}function Te(e){return t=>!e(t)}function nt(e){return Object.entries(e).map(([t,n])=>$(W({},n),{id:t}))}const dn=new Intl.DateTimeFormat("de-DE");class A{constructor(t){E(this,"url");E(this,"title");E(this,"publisher");E(this,"authors");E(this,"date");E(this,"comment");E(this,"internalComment");E(this,"localCopy");E(this,"referringUrl");E(this,"archiveUrl");E(this,"archiveNotPossible");this.url=new URL(t.url),this.title=t.title,this.publisher=t.publisher,this.authors=t.authors,this.date=t.date?new Date(t.date):void 0,this.comment=t.comment,this.internalComment=t.internalComment,this.localCopy=t.localCopy,this.referringUrl=t.referringUrl?new URL(t.referringUrl):void 0,this.archiveUrl=t.archiveUrl?new URL(t.archiveUrl):void 0,this.archiveNotPossible=t.archiveNotPossible}dateString(){const t=this.date;return t?" ("+dn.format(t)+")":""}toString(){const t=this.authors?this.authors+this.dateString():void 0,n=this.title?'"'+this.title+'"':void 0;return[t,n,this.url,this.publisher].filter(r=>r).join(", ")}}function C(e){const t=e.publisher||e.authors,n=t!=null?t+": ":"",r=e.title||e.url.toString(),i=e.url.toString();return`[[${n}${r}](${i})]`}const hn=e=>e.map(t=>t.toString()).join("; "),gn=new A({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),ee=new A({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),rt=new A({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"}),it=new A({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineral\xF6lsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),st=new A({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile f\xFCr wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),ke=new A({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),mn=new A({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schl\xFCsselergebnisse der Studie des Wuppertal Instituts f\xFCr Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${C(ke)}.`});ke.comment=s`Zusammengefasst in ${C(mn)}.`;const J=new A({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahresch\xE4tzung der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),fn=new A({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),Se=new A({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enth\xE4lt CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] f\xFCr mehrere Verkehrsmittel"}),Pe=new A({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),at=new A({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Stra\xDFeng\xFCterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),re=new A({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enth\xE4lt Personenkilometer-Jahreswerte f\xFCr mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),ot=new A({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung \xD6PNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),Ve=new A({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),pn=new A({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new A({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren f\xFCr Fernw\xE4rme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const lt=new A({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),bn=new A({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),ut=new A({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle w\xE4re besser."}),vn=new A({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bev\xF6lkerung nach Nationalit\xE4t und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),wn=new A({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur f\xFCr Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),yn=new A({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische \xC4mter des Bundes und der L\xE4nder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new A({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const ct=new A({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgem\xE4\xDF - Interview mit Prof. Stefan G\xF6ssling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""}),kn=new A({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),dt=new A({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),Sn=new A({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),ht=new A({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten f\xFCr die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class gt{constructor(t){E(this,"unit");E(this,"citations");E(this,"details");E(this,"internals");this.unit=t.unit,this.citations=t.citations?t.citations:[],this.details=t.details?t.details:"",this.internals=t.internals?t.internals:""}citationsDesc(){return hn(this.citations)}}const Pn={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class k extends gt{constructor(t){super(t);E(this,"writable",!0);E(this,"initialValue");E(this,"applyBounds");this.initialValue=t.initialValue,this.applyBounds=Pn[t.unit]}}class H extends gt{constructor(t){super(t);E(this,"writable",!1);E(this,"valueGetter");E(this,"shouldInitiallyBe");this.valueGetter=t.valueGetter,this.shouldInitiallyBe=t.shouldInitiallyBe}}const Dn=new k({unit:"MioTons",initialValue:6700,citations:[gn],details:s`

  `,internals:s`

  `}),_n=new k({unit:"MioTons",initialValue:186.793,citations:[J],details:s`

  `,internals:s`

  `}),An=new H({unit:"MioTons",valueGetter(e){return e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4},shouldInitiallyBe:159.696,citations:[J,at],details:s`

  `,internals:s`
    ${C(J)}: 159.696 as MioTons

    ${C(at)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),zn=new H({unit:"MioTons",valueGetter(e){return e.co2emissionsStreetVehicles+e.publicLocalCapacity*65/1e6+e.publicNationalCapacity*32/1e6+e.airDomesticUsage*222/1e6+1.641},citations:[Se,J],details:s`

  `,internals:s`
    ${C(Se)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${C(J)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${C(J)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${C(J)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),Fn=new H({unit:"MioTons",valueGetter(e){return e.buildingsSourceBio*0+e.buildingsSourceGas*.247+e.buildingsSourceOil*.318+e.buildingsSourceTele*.16},citations:[J,Ve],details:s`

  `,internals:s`
    TODO: #91 Gibt es hier bessere Quellen?

    ${C(Ve)}: 247g CO2 pro kWh Erdgas.

    ${C(Ve)}: 318g CO2 pro kWh Erdöl.

    ${C(pn)}: 160g CO2 pro kWh Fernwärme.

    ${C(J)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),Cn=new k({unit:"MioTons",initialValue:67.936,citations:[J],details:s`

  `,internals:s`

  `}),En=new k({unit:"MioTons",initialValue:9.243,citations:[J],details:s`

  `,internals:s`

  `}),Wn=new H({unit:"MioTons",valueGetter(e){return e.electricityGas*.399+e.electricitySolar*.058+e.electricityWind*.005+e.electricityWater*.02+e.electricityHardCoal*.835+e.electricityBrownCoal*1.137+e.electricityBiomass*.03+e.electricityNuclear*.005},citations:[lt,J],details:s`

  `,internals:s`
    ${C(lt)}:
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
    - Diskrepanz zu ${C(bn)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${C(J)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),Ln=new H({unit:"MioTons",valueGetter(e){return e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers},details:s`

  `,internals:s`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${C(J)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[fn]}),xn=new k({unit:"TWh",initialValue:480.54,citations:[ee],details:s`

  `,internals:s`

  `}),Tn=new k({unit:"Percent",initialValue:50,citations:[],details:s`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:s`

  `}),Vn=new k({unit:"TWh",initialValue:51.42,citations:[ee],details:s`

  `,internals:s`

  `}),Oe=new k({unit:"TWh",initialValue:131.85,citations:[ee],details:s`

  `,internals:s`

  `});function On(e,t){const n=e.value-t.value;return r=>{const i=e.result*(r-t.value)/n,a=t.result*(r-e.value)/n;return i-a}}const In=new H({unit:"TWh",valueGetter(e){const t=Oe.initialValue,n=e.electricityGridQuality,r=e.electricityDemand,i=On({value:50,result:t},{value:100,result:r})(n);return Math.min(i,e.electricityWind)},shouldInitiallyBe:Oe.initialValue,citations:[],details:s`
The electrical energy produced by wind and not impaired by poor quality of the grid.
  `,internals:s`

  `}),Mn=new k({unit:"TWh",initialValue:6,citations:[ee],details:s`

  `,internals:s`

  `}),Bn=new k({unit:"Percent",initialValue:100,citations:[Sn],details:s`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),$n=new k({unit:"TWh",initialValue:14.99,citations:[ee],details:s`

  `,internals:s`

  `}),Nn=new k({unit:"TWh",initialValue:43.19,citations:[ee],details:s`

  `,internals:s`

  `}),Un=new k({unit:"TWh",initialValue:60.91,citations:[ee],details:s`

  `,internals:s`

  `}),Gn=new k({unit:"TWh",initialValue:35.46,citations:[ee],details:s`

  `,internals:s`

  `}),Kn=new k({unit:"TWh",initialValue:82.13,citations:[ee],details:s`

  `,internals:s`

  `}),Jn=new H({unit:"TWh",valueGetter(e){return e.electricityHardCoal+e.electricityBrownCoal},details:s`

  `,internals:s`

  `}),Hn=new H({unit:"TWh",valueGetter(e){return e.electricityDemand-e.electricitySolar-e.electricityWindUsable-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear},details:s`

  `,internals:s`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),jn=new k({unit:"GramPerPsgrKm",initialValue:160,citations:[Se],details:s`

  `,internals:s`
    ${C(Se)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),Rn=new k({unit:"MioPsgrKm",initialValue:917e3,citations:[re],details:s`

  `,internals:s`

  `}),Zn=new k({unit:"Percent",initialValue:.5,citations:[ut],details:s`

  `,internals:s`
    Die verschiedenen Zahlen in ${C(ut)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),Qn=new k({unit:"MioPsgrKm",initialValue:112600,citations:[re],details:s`

  `,internals:s`

  `}),qn=new k({unit:"MioPsgrKm",initialValue:112600,citations:[re],details:s`

  `,internals:s`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),Yn=new k({unit:"MioPsgrKm",initialValue:67300,citations:[re],details:s`

  `,internals:s`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),Xn=new k({unit:"MioPsgrKm",initialValue:67300,citations:[re],details:s`

  `,internals:s`
Siehe \`publicLocalCapacity\`.
  `}),er=new k({unit:"MioPsgrKm",initialValue:10100,citations:[re],details:s`

  `,internals:s`

  `}),tr=new k({unit:"MioPsgrKm",initialValue:61700,citations:[re],details:s`

  `,internals:s`

  `}),nr=new H({unit:"MioPsgrKm",valueGetter(e){return e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage},shouldInitiallyBe:1168700,citations:[re],details:s`

  `,internals:s`

  `}),rr=new k({unit:"TWh",initialValue:226,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),ir=new k({unit:"TWh",initialValue:544,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),sr=new H({unit:"TWh",valueGetter(e){return e.buildingsPrivateDemand+e.buildingsIndustryDemand},shouldInitiallyBe:770,citations:[],details:s`

  `,internals:s`
    TODO: #78 Quelle ${C(ht)} gibt diese Zahlen nicht her.
  `}),ar=new k({unit:"TWh",initialValue:130,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),or=new k({unit:"TWh",initialValue:219,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),lr=new k({unit:"TWh",initialValue:58,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),ur=new H({unit:"TWh",valueGetter(e){return e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele)},citations:[],details:s`

  `,internals:s`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${C(ht)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),cr=new k({unit:"Percent",initialValue:50,citations:[],details:s`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:s`

  `}),dr=new k({unit:"TsdPeople",initialValue:83155.031,citations:[vn],details:s`

  `,internals:s`
Anfangswert ist der Stand 31.12.2020.
  `}),hr=new k({unit:"TsdPeople",initialValue:2695,citations:[wn],details:s`

  `,internals:s`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),gr=new k({unit:"MrdEuro",initialValue:3332,citations:[yn],details:s`

  `,internals:s`
Anfangswert ist das BIP 2020.
  `}),mr=new k({unit:"MrdEuro",initialValue:1899,citations:[],details:s`

  `,internals:s`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),q={co2budget:Dn,co2emissionsIndustry:_n,co2emissionsStreetVehicles:An,co2emissionsMobility:zn,co2emissionsAgriculture:Cn,co2emissionsBuildings:Fn,co2emissionsOthers:En,co2emissionsEnergy:Wn,co2emissions:Ln,electricityDemand:xn,electricityGridQuality:Tn,electricitySolar:Vn,electricityWind:Oe,electricityWindUsable:In,electricityWindOnshoreMaxNew:Mn,electricityWindEfficiency:Bn,electricityWater:$n,electricityBiomass:Nn,electricityNuclear:Un,electricityHardCoal:Gn,electricityBrownCoal:Kn,electricityCoal:Jn,electricityGas:Hn,carEmissionFactor:jn,carUsage:Rn,carRenewablePercentage:Zn,publicLocalUsage:Qn,publicLocalCapacity:qn,publicNationalUsage:Yn,publicNationalCapacity:Xn,airDomesticUsage:er,airIntlUsage:tr,passengerTransportUsage:nr,buildingsIndustryDemand:rr,buildingsPrivateDemand:ir,buildingsDemand:sr,buildingsSourceBio:ar,buildingsSourceOil:or,buildingsSourceTele:lr,buildingsSourceGas:ur,popularity:cr,numberOfCitizens:dr,unemployment:hr,gdp:gr,stateDebt:mr},fr=Object.entries(q).filter(e=>e[1]instanceof k).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),mt=Object.entries(q).filter(e=>e[1]instanceof H).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),ft=Object.keys(q);class pt extends k{constructor(t,n){super(t);E(this,"name");this.name=n}}const pr=Object.entries(fr).map(e=>new pt(e[1],e[0]));class bt extends H{constructor(t,n){super(t);E(this,"name");this.name=n}}Object.entries(mt).map(e=>new bt(e[1],e[0]));const vt=Object.entries(q).map(e=>e[1]instanceof k?new pt(e[1],e[0]):new bt(e[1],e[0])),le=pr.reduce((e,t)=>(e[t.name]=t.initialValue,e),{}),wt=vt.reduce((e,t)=>(e[t.name]=0,e),{});function ue(e){const t=W({},e);return Object.entries(mt).forEach(n=>Object.defineProperty(t,n[0],{enumerable:!0,get:()=>n[1].valueGetter(t)})),t}function br(e){return W({},e)}function ie(e,t){return{type:"dispatch",condition:!0,if(n){return this.condition=n,this},apply(n){this.condition&&n.dispatch(e,t)}}}function o(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(t){return this.percent=t,this},byValue(t){return this.value=t,this},setValue(t){return this.absolute=t,this},if(t){return this.condition=t,this},getOldNew(t){const n=this.name,r=t[n];if(!this.condition)return{oldVal:r,newVal:r};const i=q[n],a=this.absolute!=null?this.absolute:r+(this.value||r*this.percent/100),d=i.applyBounds(a);return{oldVal:r,newVal:d}},getChange(t){if(!this.condition)return 0;const{oldVal:n,newVal:r}=this.getOldNew(t);return r-n},apply(t){if(this.condition){const{newVal:n}=this.getOldNew(t.values);t.values[this.name]=n}return this}}}function D(e,t){if(q[e].unit!=q[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(n){return this.percent=n,this},byValue(n){return this.value=n,this},if(n){return this.condition=n,this},getEffect(n){const r=n[this.to],i=n[this.from];if(!this.condition)return{oldTo:r,oldFrom:i,newTo:r,newFrom:i};const a=q[this.to],d=q[this.from],f=this.value||r*this.percent/100,c=a.applyBounds(r+f)-r,p=-d.applyBounds(i-c)+i,u=r+p,h=i-p;return{oldTo:r,newTo:u,oldFrom:i,newFrom:h}},apply(n){if(this.condition){const{newTo:r,newFrom:i}=this.getEffect(n.values);n.values[this.to]=r,n.values[this.from]=i}return this}}}function Ie(e,t){t.filter(n=>n.condition).forEach(n=>n.apply(e))}var vr=w({title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,n){const r=n-t,i=r<18?4.3/18:0,a=2.5,d=20,f=60,c=(10-r)/55,p=Math.max((d+f/2)*c,0);return[o("electricityHardCoal").setValue(0),o("electricityBrownCoal").setValue(0),o("stateDebt").byValue(-i+a),o("unemployment").byValue(p)]},priority(e){return e.values.electricityCoal/e.values.electricityDemand<=.1?0:v(1e4,0,e.values.unemployment)},citations:[],details:s`

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
  `}),wr=w({title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effort(e){return e.values.popularity>=50?{time:ye("P3M"),text:"Normal dauert das 6 Monate, aber bei Deiner Beliebtheit nur 3."}:{time:ye("P6M"),text:"Dauert 6 Monate."}},effects(){return[o("stateDebt").byValue(-37),o("electricityHardCoal").byPercent(-10),o("electricityBrownCoal").byPercent(-5),o("electricityWind").byValue(5),o("electricitySolar").byValue(3),o("electricityWater").byValue(.5)]},priority(e){return v(Qe,oe,e.currentYear)}});const yt=ue(le).electricityGas;var yr=w({title:"Kernenergienutzung verl\xE4ngern",description:"Kernkraftwerke l\xE4nger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effects(){return[o("electricityNuclear").setValue(104.3),o("stateDebt").byValue(-2.5),o("popularity").byValue(-4)]},priority(e){return v(yt,1.1*yt,e.values.electricityGas)}}),kr=w({title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,n){const i={2021:60.45,2022:30.21}[n]||0;return[o("electricityNuclear").setValue(i)]},priority(e){return 0}}),Sr=w({title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren f\xFCr den Ausbau des Stromnetzes",effects(e,t,n){return[o("popularity").byValue(-3).if(t===n),o("electricityGridQuality").byValue(1)]},priority(e){return v(70,27,te(e))},citations:[],details:s`

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
  `}),Pr=w({title:"Netzausbau f\xF6rdern",description:"Ausbau des Stromnetzes mit Steuermitteln f\xF6rdern",effects(e,t,n){return[o("popularity").byValue(-1).if(t===n),o("stateDebt").byValue(2),o("electricityGridQuality").byValue(5).if(b(e,"NetzausbauErleichtern"))]},priority(e){return v(70,27,te(e))},citations:[],details:s`

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
  `}),Dr=w({title:"Stromspeicherung erleichtern",description:"B\xFCrokratische H\xFCrden f\xFCr den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effects(e,t,n){return[o("electricityGridQuality").byValue(.2)]},priority(e){const t=e.values;return v(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),_r=w({title:"Stromspeicherung f\xF6rdern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln f\xF6rdern. 2 Mrd \u20AC pro Jahr.",effects(e,t,n){const r=b(e,"StromspeicherungErleichtern")?0:5,i=n>=t+r,a=b(e,"ForschungUndEntwicklungStromspeicherung",3);return[o("stateDebt").byValue(1),o("popularity").byValue(.2).if(i),o("stateDebt").byValue(1).if(i),o("electricityGridQuality").byValue(2).if(i),o("electricityGridQuality").byValue(2).if(a),o("electricityGridQuality").byValue(2).if(i&&a)]},priority(e){const t=e.values;return v(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Ar=w({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit verg\xFCnstigten Krediten gef\xF6rdert.",effects(e,t,n){const r=.5,i=n-t>2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-1).if(i),o("buildingsSourceOil").byPercent(-1).if(i),o("buildingsSourceTele").byPercent(-1).if(i),o("buildingsPrivateDemand").byPercent(-1).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return v(15,40,t)}}),zr=w({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gef\xF6rdert.",effects(e,t,n){const r=1,i=n-t>2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-2).if(i),o("buildingsSourceOil").byPercent(-2).if(i),o("buildingsSourceTele").byPercent(-2).if(i),o("buildingsPrivateDemand").byPercent(-2).if(i),o("popularity").byValue(5).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return v(15,40,t)}}),Fr=w({title:"D\xE4mmung von Wohngeb\xE4uden sehr stark f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungspl\xE4tze im Handwerk geschaffen durch einen Zuschuss von 500\u20AC pro Monat, damit der zu erwartende Bauboom bew\xE4ltigt werden kann.",effects(e,t,n){const r=3,i=n-t,a=i>=2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-4).if(a),o("buildingsSourceOil").byPercent(-4).if(a),o("buildingsSourceTele").byPercent(-4).if(a),o("buildingsPrivateDemand").byPercent(-4).if(a),o("popularity").byValue(10).if(i===1),o("popularity").byValue(5).if(a)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return v(15,40,t)},citations:[],details:s`

  `,internals:s`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `}),Cr=w({title:"D\xE4mmung von Wohngeb\xE4uden abschaffen",description:"Wir geben den B\xFCrgern die Freiheit zur\xFCck, selbst zu entscheiden, ob sie ihr Haus d\xE4mmen wollen und lassen die F\xF6rderung auslaufen",effects(){return[o("stateDebt").byValue(-.5),o("buildingsSourceBio").byPercent(-.5),o("buildingsSourceOil").byPercent(-.5),o("buildingsSourceTele").byPercent(-.5),o("buildingsPrivateDemand").byPercent(-.5)]},priority(e){const t=Si(e.acceptedLaws,/^DaemmungAltbau/);if(!t||t==="DaemmungAltbauAbschaffen")return 0;const n=e.values.co2emissionsBuildings/e.values.co2emissions*100;return v(15,40,n)}}),Er=w({title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit st\xE4rker bezuschusst.",effects(e,t,n){const r=e.values.publicLocalCapacity/e.values.publicLocalUsage*100,i=n-t;return[o("stateDebt").byValue(3),o("publicLocalCapacity").byPercent(1),D("publicLocalUsage","carUsage").byPercent(1).if(r>=105),o("popularity").byValue(2).if(i>=5)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return v(150,80,t)},citations:[ot],details:s`

  `,internals:s`
    # Happy Path 18

    # Folgen

    - Der Staatshaushalt wird jährlich mit 3 Mrd € mehr belastet. (${C(ot)})
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
  `}),Wr=w({title:"Nahverkehr Modernisieren",description:"Anschaffung Moderner, bequemer, emissionsfreier Fahrzeuge f\xFCr den Nahverkehr wird gef\xF6rdert.",effects(e,t,n){return[o("stateDebt").byValue(3),o("publicLocalCapacity").byPercent(1),D("publicLocalUsage","carUsage").byPercent(1),o("popularity").byValue(3)]},priority(e){if(!b(e,"FernverkehrModernisieren"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,24,t)},citations:[Pe],details:s`

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
  `}),Lr=w({title:"F\xF6rderung f\xFCr Tierhaltung abschaffen",description:"Subventionen f\xFCr Tierhaltung werden ersatzlos gestrichen",effects(e,t,n){return[o("stateDebt").byValue(-10),o("co2emissionsAgriculture").byValue(-10).if(t===n),o("popularity").byValue(-20).if(t===n)]},priority(e){return v(1e4,0,e.values.unemployment)}}),xr=w({title:"Nahverkehr Kostenlos",description:"Die Kosten f\xFCr den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr ben\xF6tigt werden.",effects(e,t,n){const r=t===n?10:1;return[o("stateDebt").byValue(10),D("publicLocalUsage","carUsage").byPercent(r),o("popularity").byValue(10).if(t===n),o("unemployment").byValue(20).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return v(90,120,t)},citations:[Pe],details:s`

  `,internals:s`
    # Happy Path 19

    # Folgen

    - Der Staatshaushalt wird jährlich mit 10 Mrd € stärker belastet.
        - 13.3 Mrd € Ticketeinnahmen pro Jahr (${C(Pe)})
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
  `}),Tr=w({title:"Autos in Innenst\xE4dten verbieten",description:"Die Innenst\xE4dte der gro\xDFen St\xE4dte werden zu Autofreien Zonen erkl\xE4rt und begr\xFCnt, sowie Fahrrad und Fu\xDFg\xE4ngerzonen eingerichtet.",effects(e,t,n){var r=-2;return e.values.publicLocalCapacity>e.values.publicLocalUsage*1.2&&(r=-1,t+2<n&&(r=2)),[o("popularity").byValue(r),D("publicLocalUsage","carUsage").byPercent(10).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return v(90,120,t)}}),Vr=w({title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des \xF6ffentlichen Fernverkehrs wird bundesweit st\xE4rker Bezuschusst und Vorangetrieben",effects(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return[o("stateDebt").byValue(6),o("publicNationalCapacity").byPercent(1),D("publicNationalUsage","carUsage").byPercent(1).if(t>=105),D("publicNationalUsage","carUsage").byPercent(.5).if(t>=105),o("popularity").byValue(2).if(t>=105)]},priority(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return v(150,80,t)},citations:[],details:s`

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
  `}),Or=w({title:"Fernverkehr Modernisieren",description:"Moderne, bequeme und weniger anf\xE4llige Z\xFCge werden f\xFCr den Fernverkehr angeschafft.",effects(e,t,n){return[o("stateDebt").byValue(3),o("publicNationalCapacity").byPercent(1),D("publicNationalUsage","carUsage").byPercent(1),o("popularity").byValue(3)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,24,t)},citations:[],details:s`

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
  `}),Ir=w({title:"Wasserstofftechnologie f\xF6rdern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effects(e,t,n){const r=n<t+5,i=n>=t+5;return[o("stateDebt").byValue(2).if(r),o("carRenewablePercentage").byValue(1).if(i)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return v(40,90,r)},citations:[],details:s`

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
  `}),Mr=w({title:"Wasserstoffmobilit\xE4t f\xF6rdern",description:"Wasserstoffbasierte Fahrzeuge werden gef\xF6rdert.",effects(e,t,n){return b(e,"WasserstofftechnologieFoerdern")?[o("stateDebt").byValue(3),o("carRenewablePercentage").byValue(1),o("popularity").byValue(1).if(t===n)]:[]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,26,t)},citations:[],details:s`

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
  `}),Br=w({title:"Abschaffung der Mineral\xF6lsteuer",description:"Die Steuer auf s\xE4mtliche erd\xF6lbasierten Treibstoffe wird abgeschafft.",effects(e,t,n){return[o("stateDebt").byValue(41),o("popularity").byValue(5).if(t===n),o("popularity").byValue(-3).if(t<n),D("publicLocalUsage","carUsage").byPercent(-20).if(t===n),D("publicNationalUsage","carUsage").byPercent(-20).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return v(60,100,r)},citations:[it],details:"",internals:s`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${C(it)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `}),$r=w({title:"Ausbau von Stra\xDFen",description:"Autobahnen und Stra\xDFen werden intensiver ausgebaut.",effects(e){return[o("stateDebt").byValue(5),o("popularity").byValue(.5),D("publicLocalUsage","carUsage").byPercent(-1),D("publicNationalUsage","carUsage").byPercent(-1)]},priority(e){const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(60,100,n)}}),Nr=w({title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effects(e,t,n){return[o("stateDebt").byValue(-7.35),o("popularity").byValue(-1).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return v(10,100,r)}}),Ur=w({title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen f\xFCr Dienstwagen werden abgeschafft.",effects(e,t,n){return[o("stateDebt").byValue(-18),o("popularity").byValue(-1).if(t===n),D("carUsage","publicLocalUsage").byPercent(-.05)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return v(50,100,r)},citations:[st,ct],details:s`

  `,internals:s`
    # Happy Path 20

    Zunächst sollte Nah- und Fernverkehr attraktiver gemacht werden.
    TODO: Folgen sollten davon abhängen, ob es attraktive Alternativen gibt.

    # Folgen

    - Steuermehreinnahmen: 18 mrd€ / Jahr (${C(st)})
    - -0.05% Fahleistung pro Jahr (Anreiz für Auto fällt weg Gebrauchte Wagen werden teuerer).
        - ${C(ct)} sagt es gibt keine echte Schätzung dafür.
    - Entsprechend mehr Nahverkehrnutzung
    - Zufriedenheit sinkt einmalig um 1%

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 50%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `}),Gr=w({title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=o("carEmissionFactor").setValue(157.9),n=t.getChange(e.values);return[o("popularity").byValue(2).if(n<0),t]},priority(e){if(b(e,"Tempolimit100AufAutobahnen")||b(e,"Tempolimit120AufAutobahnen")||b(e,"TempolimitAufAutobahnenAussitzen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(10,100,n)}}),Kr=w({title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=o("carEmissionFactor").setValue(157.1),n=t.getChange(e.values);return[o("popularity").byValue(2).if(n<0),t]},priority(e){if(!b(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(10,100,n)}}),Jr=w({title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=o("carEmissionFactor").setValue(154.1),n=t.getChange(e.values);return[o("popularity").byValue(-1).if(n<0),t]},priority(e){if(!b(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(10,100,n)}}),Hr=w({title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das k\xF6nnte zwar Strafen oder gar Zwangsma\xDFnahmen bewirken, aber das Risiko der gef\xE4hrdeten Wiederwahl ist zu gro\xDF.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(){return[o("stateDebt").byValue(-10),o("popularity").byValue(-2)]},priority(e){if(b(e,"Tempolimit100AufAutobahnen")||b(e,"Tempolimit120AufAutobahnen")||b(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return v(10,100,n)}}),jr=w({title:"Elektromobilit\xE4t F\xF6rdern",description:"H\xF6here Kaufpr\xE4mien, Steuerbefreiung, g\xFCnstiges Laden f\xFCr E-Autos.",effects(e,t,n){return b(e,"LadeinfrastrukturAusbauen")?[o("stateDebt").byValue(5),o("carRenewablePercentage").byValue(1),o("popularity").byValue(4).if(t===n)]:[]},priority(e){if(!b(e,"LadeinfrastrukturAusbauen"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,25,t)},citations:[],details:s`

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
  `}),Rr=w({title:"Ladeinfrastruktur ausbauen",description:"Ausbau der Ladeinfrastruktur wird mit Steuermitteln stark gef\xF6rdert.",effects(e,t,n){return[o("stateDebt").byValue(5),o("carRenewablePercentage").byValue(1),o("popularity").byValue(2).if(t===n)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return v(0,25,t)},citations:[Pe],details:s`

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
  `}),Zr=w({title:"Windkraft vereinfachen",description:"Genehmigungen f\xFCr Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effects(e,t,n){return[]},priority(e){return v(80,27,te(e))},citations:[],details:s`

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
  `}),Qr=w({title:"Abstandsregeln f\xFCr Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem \xFCber Abst\xE4nde zwischen den Windkraftanlagen und Wohngeb\xE4uden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,n){const r=b(e,"WindkraftVereinfachen")?0:5;return[o("electricityWindOnshoreMaxNew").setValue(6).if(n>=t+r)]},priority(e){return b(e,"AbstandsregelnFuerWindkraftLockern")?v(30,100,te(e)):b(e,"AbstandsregelnFuerWindkraftVerschaerfen")?v(70,27,te(e)):0}}),qr=w({title:"Abstandsregeln f\xFCr Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln f\xFCr Windkraftanlagen sowie Bauerlaubniss in W\xE4ldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,n){const r=b(e,"WindkraftVereinfachen")?0:5;return[o("popularity").byValue(-3).if(t===n),o("electricityWindOnshoreMaxNew").setValue(30).if(n>=t+r)]},priority(e){return b(e,"AbstandsregelnFuerWindkraftWieBisher")?v(70,27,te(e)):b(e,"AbstandsregelnFuerWindkraftAbschaffen")?v(30,100,te(e)):0},citations:[],details:s`

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
  `}),Yr=w({title:"Abstandsregeln f\xFCr Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,n){const r=b(e,"WindkraftVereinfachen")?0:5;return[o("popularity").byValue(-40).if(t===n),o("electricityWindOnshoreMaxNew").setValue(1e3).if(n>=t+r)]},priority(e){return b(e,"AbstandsregelnFuerWindkraftLockern")?v(80,25,te(e)):0}}),Xr=w({title:"Abstandsregeln f\xFCr Windkraft versch\xE4rfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngeb\xE4uden im Innenbereich muss das Zehnfache der Gesamth\xF6he der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,n){return[o("popularity").byValue(5).if(t===n),o("electricityWindOnshoreMaxNew").setValue(.42)]},priority(e){return b(e,"AbstandsregelnFuerWindkraftWieBisher")?v(0,100,te(e)):0}}),ei=w({title:"Ausschreibungsverfahren f\xFCr Windkraft wie zu Beginn",description:"Windkraft Betreiber k\xF6nnen sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstm\xF6glichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,n){const r=b(e,"WindkraftVereinfachen")?0:5,i=Math.min(6.9,e.values.electricityWindOnshoreMaxNew),a=1.2;return[o("electricityWind").byValue((i+a)*e.values.electricityWindEfficiency/100).if(n>=t+r)]},priority(e){return b(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?v(60,100,B(e)):0}}),ti=w({title:"Ausschreibungsverfahren f\xFCr Windkraft verdoppeln",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,n){const r=b(e,"WindkraftVereinfachen")?0:5,i=Math.min(13.8,e.values.electricityWindOnshoreMaxNew),a=2.4;return[o("popularity").byValue(-1).if(t===n),o("unemployment").byValue(-20).if(t===n),o("electricityWind").byValue((i+a)*e.values.electricityWindEfficiency/100).if(n>=t+r)]},priority(e){return b(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?v(100,50,B(e)):b(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?v(40,100,B(e)):0}}),ni=w({title:"Ausschreibungsverfahren f\xFCr Windkraft vervierfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,n){const r=b(e,"WindkraftVereinfachen")?0:5,i=Math.min(27.6,e.values.electricityWindOnshoreMaxNew),a=4.8;return[o("popularity").byValue(-2).if(t===n),o("unemployment").byValue(-100).if(t===n),o("electricityWind").byValue((i+a)*e.values.electricityWindEfficiency/100).if(n>=t+r)]},priority(e){return b(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?v(100,50,B(e)):b(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?v(0,100,B(e)):0},citations:[],details:s`
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
  `}),ri=w({title:"Ausschreibungsverfahren f\xFCr Windkraft verachtfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,n){const r=b(e,"WindkraftVereinfachen")?0:5,i=Math.min(55.2,e.values.electricityWindOnshoreMaxNew),a=9.6;return[o("popularity").byValue(-20).if(t===n),o("unemployment").byValue(-100).if(t===n),o("electricityWind").byValue((i+a)*e.values.electricityWindEfficiency/100).if(n>=t+r)]},priority(e){return b(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?v(100,50,B(e)):0}}),ii=w({title:"CO2 Preis Erh\xF6hen",description:"Die Preise werden schneller erh\xF6ht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,n){const r=ce(50,0,B(e),-1),i=ce(50,0,e.values.carRenewablePercentage,-1),a=-.5;return[o("stateDebt").byValue(-45/1e3*e.values.co2emissions).if(n>=t+2),o("stateDebt").byValue(-30/1e3*e.values.co2emissions).if(n>=t+4),o("popularity").byValue(r+i),o("co2emissionsIndustry").byPercent(a),o("co2emissionsAgriculture").byPercent(a),o("co2emissionsOthers").byPercent(a),D("electricityBrownCoal","electricityWind").byPercent(.7*a),D("electricityHardCoal","electricityWind").byPercent(.7*a),D("electricityBrownCoal","electricitySolar").byPercent(.3*a),D("electricityHardCoal","electricitySolar").byPercent(.3*a),D("buildingsSourceOil","buildingsSourceBio").byPercent(a),D("carUsage","publicNationalUsage").byPercent(.5*a),D("carUsage","publicLocalUsage").byPercent(.5*a)]},priority(e){return b(e,"VollerCO2Preis")||b(e,"WirksamerCO2Preis")?0:50},citations:[dt],details:s`

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
  `}),si=w({title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,n){const r=ce(80,50,B(e),-3),i=ce(80,50,e.values.carRenewablePercentage,-3),a=-2;return[o("stateDebt").byValue(-125/1e3*e.values.co2emissions),o("popularity").byValue(r+i),o("co2emissionsIndustry").byPercent(a),o("co2emissionsAgriculture").byPercent(a),o("co2emissionsOthers").byPercent(a),D("electricityBrownCoal","electricityWind").byPercent(.7*a),D("electricityHardCoal","electricityWind").byPercent(.7*a),D("electricityBrownCoal","electricitySolar").byPercent(.3*a),D("electricityHardCoal","electricitySolar").byPercent(.3*a),D("buildingsSourceOil","buildingsSourceBio").byPercent(a),D("carUsage","publicNationalUsage").byPercent(.5*a),D("carUsage","publicLocalUsage").byPercent(.5*a)]},priority(e){return b(e,"CO2PreisErhoehen")?50:0},citations:[dt],details:s`

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
  `}),ai=w({title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,n){const r=ce(90,50,B(e),-10),i=ce(90,50,e.values.carRenewablePercentage,-10),a=-5;return[o("stateDebt").byValue(-3*e.values.co2emissions),o("popularity").byValue(r+i),o("co2emissionsIndustry").byPercent(a),o("co2emissionsAgriculture").byPercent(a),o("co2emissionsOthers").byPercent(a),D("electricityBrownCoal","electricityWind").byPercent(.7*a),D("electricityHardCoal","electricityWind").byPercent(.7*a),D("electricityBrownCoal","electricitySolar").byPercent(.3*a),D("electricityHardCoal","electricitySolar").byPercent(.3*a),D("buildingsSourceOil","buildingsSourceBio").byPercent(a),D("carUsage","publicNationalUsage").byPercent(.5*a),D("carUsage","publicLocalUsage").byPercent(.5*a)]},priority(e){return b(e,"WirksamerCO2Preis")?50:0},citations:[kn],details:s`

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
  `}),oi=w({title:"Solarstrom F\xF6rderung einstellen",description:"Mittlere bis gro\xDFe Solaranlagen sollten sich selbst tragen. Die F\xF6rderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects(){return[o("electricitySolar").byValue(2)]},priority(e){return b(e,"SolarstromFoerderungWieZuBeginn")?v(0,100,B(e)):0},details:s`

  `}),li=w({title:"Solarstrom F\xF6rderung wie zu Beginn",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen wie bisher",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects(){return[o("electricitySolar").byValue(5)]},priority(e){return b(e,"SolarstromFoerdernx8")?v(70,100,B(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),ui=w({title:"Solarstrom F\xF6rderung x2",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects(e,t,n){return[o("popularity").byValue(10).if(t===n),o("unemployment").byValue(-31e3).if(t===n),o("electricitySolar").byValue(10)]},priority(e){return b(e,"SolarstromFoerderungWieZuBeginn")?v(100,30,B(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),ci=w({title:"Solarstrom F\xF6rderung x4",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects(e,t,n){return[o("popularity").byValue(20).if(t===n),o("unemployment").byValue(-89e3).if(t===n),o("electricitySolar").byValue(20)]},priority(e){return b(e,"SolarstromFoerdernx2")?v(100,30,B(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:s`
    # Happy path 10

    ${C(ke)}
  `,citations:[ke]}),di=w({title:"Solarstrom F\xF6rderung x8",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects(e,t,n){return[o("popularity").byValue(-10).if(t===n),o("unemployment").byValue(-209e3).if(t===n),o("electricitySolar").byValue(40)]},priority(e){return b(e,"SolarstromFoerdernx4")?v(100,30,B(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `}),hi=w({title:"Solar auf neuen D\xE4chern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die D\xE4cher.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects(e,t,n){return[o("popularity").byValue(-3).if(t===n),o("electricitySolar").byValue(2)]},priority(e){return b(e,"SolarstromFoerderungWieZuBeginn")?v(100,30,B(e)):0},details:s`

  `,internals:s`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `}),gi=w({title:"Forschung und Entwicklung zur Stromspeicherung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effects(e,t,n){const r=n<t+5,i=n>=t+3;return[o("stateDebt").byValue(2).if(r),o("electricityGridQuality").byValue(.2).if(i)]},priority(e){const t=e.values;return v(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),mi=w({title:"Forschung zur emissionsfreien Stahlproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Stahl mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effects(e,t,n){const r=n<t+5,i=n>=t+3,a=b(e,"WasserstofftechnologieFoerdern",3)?B(e)-70:0,d=b(e,"WirksamerCO2Preis");return[o("stateDebt").byValue(2).if(r),o("co2emissionsIndustry").byValue(-2).if(i),o("co2emissionsIndustry").byValue(-2).if(d),o("co2emissionsIndustry").byValue(-a).if(a>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return v(0,80,n)},citations:[],details:s`

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
  `}),fi=w({title:"Forschung zur emissionsfreien Zementproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Zement mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effects(e,t,n){const r=n<t+5,i=n>=t+3,a=b(e,"WasserstofftechnologieFoerdern",3)?B(e)-70:0,d=b(e,"WirksamerCO2Preis");return[o("stateDebt").byValue(2).if(r),o("co2emissionsIndustry").byValue(-2).if(i),o("co2emissionsIndustry").byValue(-2).if(d),o("co2emissionsIndustry").byValue(-a).if(a>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return v(0,80,n)},citations:[],details:s`

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
  `}),pi=w({title:"Erforschung und Umsetzung dezentraler Stromerzeugung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur f\xFCr die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effects(e,t,n){const r=n<t+5,i=n>=t+1;return[o("stateDebt").byValue(2).if(r),o("electricityGridQuality").byValue(1).if(i)]},priority(e){const t=e.values;return v(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),bi=w({title:"Test",description:"Unsinniges Gesetz zum Testen.",effects(e,t,n){return[o("popularity").byPercent(50).if((n-t)%3!=0),o("popularity").byPercent(-50).if((n-t)%3==0),o("stateDebt").byPercent(-200).if(n===t),o("stateDebt").byPercent(50).if((n-t)%3!=0),o("stateDebt").byPercent(-50).if((n-t)%3==0),o("stateDebt").byPercent(-200).if(n===t+10)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`

  `});const kt={AllesBleibtBeimAlten:un,InitialAtomausstieg:kr,KohleverstromungEinstellen:vr,EnergiemixRegeltDerMarkt:wr,KernenergienutzungVerlaengern:yr,NetzausbauErleichtern:Sr,NetzausbauFoerdern:Pr,ForschungUndEntwicklungStromspeicherung:gi,StromspeicherungErleichtern:Dr,StromspeicherungFoerdern:_r,ForschungDezentraleStromerzeugung:pi,WindkraftVereinfachen:Zr,AbstandsregelnFuerWindkraftVerschaerfen:Xr,AbstandsregelnFuerWindkraftWieBisher:Qr,AbstandsregelnFuerWindkraftLockern:qr,AbstandsregelnFuerWindkraftAbschaffen:Yr,AusschreibungsverfahrenfuerWindkraftWieBisher:ei,AusschreibungsverfahrenfuerWindkraftVerdoppeln:ti,AusschreibungsverfahrenfuerWindkraftVervierfachen:ni,AusschreibungsverfahrenfuerWindkraftVerachtfachen:ri,SolarstromFoerderungAbschaffen:oi,SolarstromFoerderungWieZuBeginn:li,SolarstromFoerdernx2:ui,SolarstromFoerdernx4:ci,SolarstromFoerdernx8:di,SolarAufAllenDaechernVerpflichtend:hi,DaemmungAltbau1Percent:Ar,DaemmungAltbau2Percent:zr,DaemmungAltbau4Percent:Fr,DaemmungAltbauAbschaffen:Cr,NahverkehrKostenlos:xr,AutosInInnenstaedtenVerbieten:Tr,WasserstofftechnologieFoerdern:Ir,WasserstoffmobilitaetFoerdern:Mr,NahverkehrAusbauen:Er,NahverkehrModernisieren:Wr,FernverkehrVerbindungenAusbauen:Vr,FernverkehrModernisieren:Or,AusbauVonStrassen:$r,AbschaffungDerMineraloelsteuer:Br,DieselPrivilegAbgeschaffen:Nr,DienstwagenPrivilegAbgeschaffen:Ur,Tempolimit130AufAutobahnen:Gr,Tempolimit120AufAutobahnen:Kr,Tempolimit100AufAutobahnen:Jr,TempolimitAufAutobahnenAussitzen:Hr,ElektromobilitaetFoerdern:jr,LadeinfrastrukturAusbauen:Rr,FoerderungFuerTierhaltungAbschaffen:Lr,CO2PreisErhoehen:ii,WirksamerCO2Preis:si,VollerCO2Preis:ai,ForschungEmissionsfreieStahlproduktion:mi,ForschungEmissionsfreieZementproduktion:fi,Test:bi},vi=Object.keys(kt);function wi(e){return nt(e).map(t=>$(W({},t),{effort:t.effort||on}))}const se=wi(kt);function yi(e){const t=se.find(n=>n.id===e);if(t)return t;throw Error(`Law #${e} not found`)}function De(e){const t=yi(e.lawId);if(t)return $(W({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function _e(e){return e.map(t=>{const n=se.find(r=>r.id===t);return n||console.error(`Inconsistency: Proposed law #${t} not found`),n}).filter(t=>t)}const ki=(e,t,n)=>Object.fromEntries(e.map(r=>{const i=t(r),a=Object.fromEntries(ft.map(d=>[d,n(r,i,d)]));return[r.id,a]}));function v(e,t,n){const r=n-e,i=t-e;if(i===0)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return r/i*100}function ce(e,t,n,r){return Math.max(0,v(e,t,n))/100*r}function b(e,t,n=0){if(!se.map(r=>r.id).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some(r=>r.lawId===t&&r.effectiveSince<=e.currentYear+n)}function Si(e,t){const n=e.sort((r,i)=>i.effectiveSince-r.effectiveSince).find(r=>t.test(r.lawId));return n==null?void 0:n.lawId}function te(e){const t=e.values;return t.electricityWindUsable/t.electricityDemand*100}function B(e){return(e.values.electricityWindUsable+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}var Pi=L({title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es f\xFCr unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply(){return[]},probability(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return Math.min(1,v(15,30,t)/100)}});function St(e){return e.find(t=>t.title.match(/subvention/i)&&t.title.match(/abbau/i))}var Di=L({title:"Anruf von befreundetem Unternehmer",description:`Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und m\xF6chte dich in seine
    Ferienvilla auf Sardinien einladen. Er verl\xE4sst sich nat\xFCrlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,apply(e){if(e){const t=St(_e(e.proposedLaws));if(t)return[ie("rejectLaw",{lawId:t.id})]}return[]},probability(e){return St(_e(e.proposedLaws))?.5:0}}),_i=L({title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute \xFCber die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply(){return[]}}),Ai=L({title:"Zusammenbruch des Finanzsystems",description:`Deine Staatsfinanzen sind desastr\xF6s. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zur\xFCckahlen k\xF6nnen. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    k\xF6nntest. Das Spiel ist damit leider beendet.
  `,apply(){return[ie("gameOver")]},probability(e){return e.values.stateDebt>le.stateDebt*2?pe.finanzKollaps:0}}),zi=L({title:"Hitzeh\xF6lle",description:`Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen K\xFCstenregionen
  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr w\xE4chst.
  Um die verbleibdenden Teile sind erbitterte K\xE4mpfe ausgebrochen.
  `,apply(){return[ie("gameOver")]},probability(e){return e.values.co2budget<=0?pe.hitzehoelle:0}}),Fi=L({title:"Happy New Year!",description:`Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen T\xE4tigkeit aufgestellt
    und kommt zu dem nicht weiter \xFCberraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht \xFCberraschend - sieht die Sache anders und verurteilt die Regierungserkl\xE4rung als haltlos.
  `,apply(){return[ie("advanceYear")]},probability(e){return we(e.currentDate).getYear()>e.currentYear?pe.newYear:0}}),Ci=L({title:"Social Media Alarm!",description:`Deine Wahlkampfberaterin ruft dich v\xF6llig aufgel\xF6st an. Ob denn an den Geschichten was dran sein, die da im
    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.
    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.
  `,apply(){return[o("popularity").byPercent(-20)]}}),Ei=L({title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland m\xFCssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply(){return[]}}),Wi=L({title:"Du hast durchgehalten",description:`Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,
    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Ma\xDFnahmen waren zu finanzieren
    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!
  `,apply(){return[ie("gameOver")]},probability(e){return e.currentYear===2050?pe.timesUp:0}}),Li=L({title:"Wahl verloren",description:`Deine Beliebtheit in der Bev\xF6lkerung ist katastrophal, lieber w\xFCrde man Mao Zedong w\xE4hlen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du geh\xF6rst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon l\xE4nger kein vern\xFCnftiger Mensch mehr geglaubt.
  `,apply(){return[ie("gameOver")]},probability(e){return e.values.popularity<=0?pe.wahlVerloren:0}}),xi=L({title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply(){return[]},citations:[],details:s`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:s`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `}),Ti=L({title:"B\xFCrgerinitiative fordert st\xE4rkere Solarf\xF6rderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply(){return[]},probability(e){const t=b(e,"SolarstromFoerderungAbschaffen"),n=b(e,"SolarstromFoerderungWieZuBeginn"),r=b(e,"SolarstromFoerdernx2");return t||n||r?.5:0},citations:[rt],details:s`

  `,internals:s`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${C(rt)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),Vi=L({title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply(){return[ie("gameOver")]},probability(e){return e.acceptedLaws.find(n=>n.lawId==="KernenergienutzungVerlaengern")?.5:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Oi=L({title:"Staatsoberhaupt verstorben",description:"Du stirbst an der neuen BSE Variante. Tja, h\xE4ttest du dich mal besser um das Tierwohl gek\xFCmmert...",apply(){return[ie("gameOver")]},probability(e){return _e(e.acceptedLaws.map(n=>n.lawId)).find(n=>n.title.match(/tierwohl/i))?0:.5},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Ii=L({title:"D\xFCrreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausf\xE4lle sind enorm.",apply(){return[o("gdp").byValue(-100),o("popularity").byValue(-10)]},probability(e){return Math.min(1,v(400,0,e.values.co2budget)/100)},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Mi=L({title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und f\xFChrt zu einer neuen Diskussion \xFCber Lobbyismus.",apply(){return[o("popularity").byValue(-2)]},probability(e){return b(e,"WirksamerCO2Preis")||b(e,"KohleverstromungEinstellen")?0:.3},laws:[],citations:[],details:s`

  `,internals:s`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `}),Bi=L({title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply(){return[o("popularity").byValue(-2)]},probability(){return .3},laws:[],citations:[],details:s`

  `,internals:s`

  `}),$i=L({title:"Klimafl\xFCchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimafl\xFCchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply(){return[o("stateDebt").byValue(10)]},probability(e){return e.values.co2budget<500?.2:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Ni=L({title:"Plagiatsaff\xE4re",description:"W\xE4hrend des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet W\xE4hlerstimmen.",apply(){return[o("popularity").byValue(-10)]},probability(e){return .5},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Ui=L({title:"Debatte \xFCber CO2-Preise",description:"Eine marktliberale Kampagne ist sehr erfolgreich darin, Dich als Verbots-Kanzler hinzustellen. Aus allen Richtungen prasseln Forderungen nach einem ad\xE4quaten CO2-Preis auf Dich ein. Nur leider gehen die Vorstellungen \xFCber den genauen Preis sehr weit auseinander.",laws:["CO2PreisErhoehen","WirksamerCO2Preis","VollerCO2Preis"],apply(){return[]},probability(e){const t=(b(e,"AutosInInnenstaedtenVerbieten")?1:0)+(b(e,"KohleverstromungEinstellen")?1:0)+(b(e,"SolarAufAllenDaechernVerpflichtend")?1:0)+(b(e,"Tempolimit130AufAutobahnen")?1:0)+(b(e,"Tempolimit120AufAutobahnen")?1:0)+(b(e,"Tempolimit100AufAutobahnen")?1:0);return v(1,3,t)/100}});const Gi={AbstandsregelnWindkraft:an,Altbausanierung:Pi,Bestechung:Di,EnergieStrategie:_i,FinanzKollaps:Ai,Hitzehoelle:zi,NewYear:Fi,SocialMedia:Ci,TempolimitAufAutobahnen:Ei,TimesUp:Wi,WahlVerloren:Li,WindkraftAusschreibung:xi,SolarstromFoerderung:Ti,AtomKatastrophe:Vi,BSE:Oi,Duerrewelle:Ii,PRKohleindustrie:Mi,PRInnenminister:Bi,Klimafluechtlinge:$i,Plagiatsaffaere:Ni,CO2PreisDebatte:Ui},Ki=()=>.5,Ae=nt(Gi).map(e=>$(W({},e),{probability:e.probability||Ki})),Pt={currentDate:nn,currentYear:oe,values:le,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],over:!1,prngState:{}};function Me(e=Pt,t=Kt()){return{id:t,currentDate:e.currentDate,currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:ue(e.values),events:e.events,over:e.over,prngState:{}}}function Dt(e=se,t=Pt){const n=Me(t);return n.acceptedLaws=e.filter(r=>{var i;return(i=r.labels)==null?void 0:i.includes("initial")}).map(r=>({lawId:r.id,effectiveSince:n.currentYear})),n}const de=[...Array(Qe-oe+1).keys()].map(e=>e+oe);function Ji(e,t){const n={lawId:e,effectiveSince:t.currentYear+1},r=De(n),i=r.effort(t);t.currentDate=we(t.currentDate).plus(i.time).toJSON();const a=r.removeLawsWithLabels,d=t.acceptedLaws.map(De).filter(f=>!(a==null?void 0:a.some(c=>{var p;return(p=f.labels)==null?void 0:p.includes(c)}))).map(f=>({lawId:f.id,effectiveSince:f.effectiveSince}));return t.acceptedLaws=[...d,n],Be(t)}function Hi(e){return e.currentDate=we(e.currentDate).plus(rn).toJSON(),Be(e)}function Be(e,t=se,n=Ae,r=Xe){const i=ji(e,n,r);if(i){const d={id:i.id,occuredIn:e.currentYear,acknowledged:!1};e.events.unshift(d)}const a=Yi(e,t,(i==null?void 0:i.laws)?i.laws:[]);return e.proposedLaws=Xi(e.proposedLaws,a),i}function ji(e,t,n){const r=Ri(e,t),i=Zi(r);if(i)return i;const a=Qi(r);return qi(a,n())}function Ri(e,t){return t.map(n=>$(W({},n),{prob:n.probability(e)})).filter(n=>n.prob>0)}function Zi(e){return e.filter(t=>t.prob>1).reduce((t,n)=>n.prob>((t==null?void 0:t.prob)||0)?n:t,void 0)}function Qi(e){const t=e.map(r=>r.prob).reduce((r,i)=>r+i,0),n=sn/t;return e.map(r=>$(W({},r),{prob:r.prob*n}))}function qi(e,t){for(const n of e)if(t-=n.prob,t<0)return n}function Yi(e,t,n){const r=c=>{var p;return(p=e.acceptedLaws)==null?void 0:p.some(u=>u.lawId===c.id)},i=c=>{var p;return(p=e.rejectedLaws)==null?void 0:p.includes(c.id)},a=c=>{var p;return((p=c.labels)==null?void 0:p.includes("hidden"))||!1},d=c=>({law:c,priority:c.priority(e)}),f=c=>({law:c.law,priority:c.priority+(n.includes(c.law.id)?100:0)});return t.filter(Te(r)).filter(Te(i)).filter(Te(a)).map(d).filter(c=>c.priority>0).map(f).sort((c,p)=>p.priority-c.priority).map(c=>c.law.id).slice(0,Ye)}function Xi(e,t){const n=[...e],r=t.filter(d=>n.includes(d)),i=t.filter(d=>!r.includes(d));for(var a=0;a<n.length;){if(r.includes(n[a])){a++;continue}if(i.length===0){n.splice(a,1);continue}n[a]=i.shift(),a++}return n.push(...i.slice(0,Ye-n.length)),n}function es(e,t,n){return _t(e,t,n).values}function _t(e,t,n){const r=ue(e.values),i=t.sort((d,f)=>{var c,p;return((c=d.treatAfterLabels)==null?void 0:c.some(u=>{var h;return(h=f.labels)==null?void 0:h.includes(u)}))?1:((p=f.treatAfterLabels)==null?void 0:p.some(u=>{var h;return(h=d.labels)==null?void 0:h.includes(u)}))?-1:0}).filter(d=>d.effectiveSince<=n),a=ki(i,d=>{const f=br(r),c=d.effects($(W({},e),{values:r}),d.effectiveSince,n);return Ie({dispatch:()=>{},values:r},c),f},(d,f,c)=>r[c]-f[c]);return r.co2budget-=r.co2emissions,{values:r,effectsOfLaws:a}}function At(e){return Math.max(0,Math.min(100,e))}function ts(e){if(e.values.co2emissions===0)return 100;const n=e.values.co2budget*ue(le).co2emissions/le.co2budget/e.values.co2emissions;return At(n*50)}function ns(e){const t=e.values.stateDebt/le.stateDebt;return At(100-t*50)}const he=[{id:"start",title:"Stell dir vor...",text:s`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du ausw\xE4hlen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die W\xE4hler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine W\xE4hler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];function rs(e,t){return{startGame(n){const r=Dt(),i=Be(r);t.createGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i}),e.push("/games/"+r.id)},async loadGame(n,r){var i;if(((i=n.state.game)==null?void 0:i.id)!==r.gameId)try{const a=await t.loadGame(r.gameId);t.saveGame(a),e.push("/games/"+a.id+(a.over?"/over":"")),n.commit("setGameState",{game:a})}catch(a){n.dispatch("error",{error:a})}},gameOver(n){var r;n.commit("gameOver",void 0),e.push("/games/"+((r=n.state.game)==null?void 0:r.id)+"/over")},acceptLaw(n,r){const i=W({},n.state.game),a=Ji(r.lawId,i);t.saveGame(i),n.commit("setGameState",{game:i}),n.dispatch("applyEvent",{event:a}),t.decisionMade(i,r.lawId,!0)},rejectLaw(n,r){const i=W({},n.state.game);i.rejectedLaws=[...i.rejectedLaws,r.lawId],t.decisionMade(i,r.lawId,!1),t.saveGame(i),n.commit("setGameState",{game:i})},sitOut(n){const r=W({},n.state.game);t.decisionMade(r,"sitOut",!0);const i=Hi(r);t.saveGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i})},advanceYear(n){const r=W({},n.state.game),i=r.acceptedLaws.map(De);r.currentYear++,r.values=es(r,i,r.currentYear),t.saveGame(r),n.commit("setGameState",{game:r})},applyEvent(n,r){if(!r.event)return;const i=W({},n.state.game);t.eventOccurred(i,r.event);const a=r.event.apply(i);n.dispatch("applyEffects",{changes:a})},acknowledgeEvent(n,r){const i=W({},n.state.game);i.events.find(a=>a.id===r.id).acknowledged=!0,t.saveGame(i),n.commit("setGameState",{game:i})},applyEffects(n,r){const i={dispatch:n.dispatch,values:ue(n.state.game.values)};Ie(i,r.changes);const a=$(W({},n.state.game),{values:i.values});t.saveGame(a),n.commit("setGameState",{game:a})},setupTour(n){const r=localStorage.getItem("tour")||he[0].id,i=he.find(a=>r===a.id);i?n.commit("setTour",{step:i.id,active:!0}):n.dispatch("stopTour")},nextTourStep(n){const r=he.findIndex(i=>n.state.tour.step===i.id);if(r<0||r==he.length-1)n.dispatch("stopTour");else{const i=he[r+1];n.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(n){n.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},error(n,r){n.commit("error",r)}}}const is={setGameState(e,t){e.game=t.game},gameOver(e){e.game=$(W({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},ss={proposedLaws(e){return!e.game||!e.game.proposedLaws?[]:_e(e.game.proposedLaws)}},as={game:void 0,tour:{active:!0,step:"start"}};var I=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const os=e=>(me("data-v-1017d1c6"),e=e(),fe(),e),ls={key:0,type:"radio"},us=os(()=>l("br",null,null,-1)),cs={key:0,class:"button-bar"},ds=V({props:{law:null,selectable:{type:Boolean},numCards:null},emits:["selected","accepted"],setup(e,{emit:t}){const n=e,r=X(!1),i=S(()=>n.law.zIndex);function a(){t("selected")}function d(){r.value=!0}function f(c){c.animationName.match(/^twistOut-/)&&t("accepted",n.law.id)}return(c,p)=>(g(),m("div",{class:M(["Law",{accepted:r.value}]),style:Ce({zIndex:F(i)}),onClick:a,onAnimationend:f},[l("label",null,[e.selectable?(g(),m("input",ls)):_("",!0),l("div",null,[l("h3",null,y(e.law.title),1),l("div",null,y(e.law.description),1),us,l("div",null,y(e.law.effortComment),1),e.selectable?(g(),m("div",cs,[l("button",{class:"accept",onClick:d},"\u2713")])):_("",!0)])])],38))}});var hs=I(ds,[["__scopeId","data-v-1017d1c6"]]);const gs=V({setup(e){const t=ae(),n=X([]),r=X(!1),i=S(()=>t.getters.proposedLaws),a=S(()=>t.state.game),d=S(()=>(n.value.length||(n.value=tt(i.value.length,0)),a.value===void 0?[]:i.value.map((u,h)=>$(W({},u),{zIndex:n.value[h],pos:h,effortComment:u.effort(a.value).text}))));function f(u){t.dispatch("acceptLaw",{lawId:u})}function c(u){n.value=tt(i.value.length,u)}function p(){t.dispatch("sitOut")}return(u,h)=>(g(),m(K,null,[l("div",{class:M(["ProposedLaws",{poppedUp:r.value}]),onClick:h[0]||(h[0]=U=>r.value=!0)},[(g(!0),m(K,null,R(F(d),(U,G)=>(g(),Z(hs,{key:U.id,law:U,selectable:r.value,numCards:F(d).length,onAccepted:()=>f(U.id),onSelected:()=>c(G)},null,8,["law","selectable","numCards","onAccepted","onSelected"]))),128))],2),l("div",{class:"sitOutButton",onClick:h[1]||(h[1]=()=>p())},"Aussitzen")],64))}});var ms=I(gs,[["__scopeId","data-v-7616326e"]]);const fs={key:0},ps=V({props:{title:null,text:null},emits:["acknowledge"],setup(e,{emit:t}){function n(){t("acknowledge")}return(r,i)=>e.text?(g(),m("div",{key:0,onClick:n},[e.title?(g(),m("h2",fs,y(e.title),1)):_("",!0),l("p",null,y(e.text),1)])):_("",!0)}});var bs=I(ps,[["__scopeId","data-v-089babdc"]]),vs="/assets/money-short.7ce9dbed.png",ws="/assets/money-less.184321f3.png",ys="/assets/money-more.44dccbaa.png",ks="/assets/money-much.d486dae1.png";const Ss={class:"container"},Ps={class:"title"},Ds={class:"progress-bar"},_s=V({props:{title:null,value:null},setup(e){const t=e,n=S(()=>{const r=t.value>40?"green":t.value>20?"goldenrod":"red";return{width:t.value+"%",backgroundColor:r}});return(r,i)=>(g(),m("div",Ss,[l("div",Ps,y(e.title),1),l("div",Ds,[l("div",{class:"indicator",style:Ce(F(n))},null,4)])]))}});var $e=I(_s,[["__scopeId","data-v-9856b0a2"]]);const As={id:"finances"},zs={key:0,src:vs,id:"short"},Fs={key:1,src:ws,id:"less"},Cs={key:2,src:ys,id:"more"},Es={key:3,src:ks,id:"much"},Ws=V({props:{value:null},setup(e){const t=e,n=S(()=>t.value),r=S(()=>t.value<20),i=S(()=>t.value>=20&&t.value<50),a=S(()=>t.value>=50&&t.value<80),d=S(()=>t.value>=80);return(f,c)=>(g(),m("div",As,[O($e,{id:"indicator",title:"Finanzen",value:F(n)},null,8,["value"]),F(r)?(g(),m("img",zs)):_("",!0),F(i)?(g(),m("img",Fs)):_("",!0),F(a)?(g(),m("img",Cs)):_("",!0),F(d)?(g(),m("img",Es)):_("",!0)]))}});var Ls=I(Ws,[["__scopeId","data-v-0b2fb0e8"]]),xs="/assets/people-happy.acaffc0b.png",Ts="/assets/people-angry.54c1d60c.png";const Vs={id:"popularity"},Os={key:0,src:xs,id:"happy"},Is={key:1,src:Ts,id:"angry"},Ms=V({props:{value:null},setup(e){const t=e,n=S(()=>t.value>=50),r=S(()=>t.value<50);return(i,a)=>(g(),m("div",Vs,[O($e,{id:"indicator",title:"Beliebtheit",value:e.value},null,8,["value"]),F(n)?(g(),m("img",Os)):_("",!0),F(r)?(g(),m("img",Is)):_("",!0)]))}});var Bs=I(Ms,[["__scopeId","data-v-4cf2dbec"]]),$s="/assets/plant-healthy.97772624.png",Ns="/assets/plant-sick.5a0f1b46.png",Us="/assets/plant-withered.b50106c7.png";const Gs={id:"plant"},Ks=["src","id"],Js=V({props:{value:null},setup(e){const t=e,n={healthy:$s,sick:Ns,withered:Us},r=S(()=>t.value>66?"healthy":t.value>33?"sick":"withered"),i=S(()=>n[r.value]);return(a,d)=>(g(),m("div",Gs,[O($e,{id:"indicator",title:"CO2-Budget",value:e.value},null,8,["value"]),l("img",{src:F(i),id:F(r)},null,8,Ks)]))}});var Hs=I(Js,[["__scopeId","data-v-2db3389a"]]);const js={id:"calendar"},Rs=V({props:{year:null,month:null},setup(e){const t=e,n=S(()=>{const r=Math.floor((t.month-1)/4)*18+27+"%",i=(t.month-1)%4*21+12+"%";return{top:r,left:i}});return(r,i)=>(g(),m("div",js,[N(y(e.year)+" ",1),l("span",{id:"month-indicator",style:Ce(F(n))},null,4)]))}});var Zs=I(Rs,[["__scopeId","data-v-78901c78"]]),Qs="/assets/heater.43006232.png";const qs={},Ys=e=>(me("data-v-c9039a0c"),e=e(),fe(),e),Xs={id:"heater"},ea=Ys(()=>l("img",{src:Qs},null,-1)),ta=[ea];function na(e,t){return g(),m("div",Xs,ta)}var ra=I(qs,[["render",na],["__scopeId","data-v-c9039a0c"]]),ia="/assets/table-top.c87bd2fd.png",zt="/assets/table-front.78c0f8c6.png",Ft="/assets/table-side.49774a53.png";const sa={},be=e=>(me("data-v-1ef8d93c"),e=e(),fe(),e),aa={id:"table"},oa=be(()=>l("img",{src:ia,id:"table-top"},null,-1)),la=be(()=>l("img",{src:zt,id:"table-front"},null,-1)),ua=be(()=>l("img",{src:zt,id:"table-back"},null,-1)),ca=be(()=>l("img",{src:Ft,id:"table-left-side"},null,-1)),da=be(()=>l("img",{src:Ft,id:"table-right-side"},null,-1)),ha=[oa,la,ua,ca,da];function ga(e,t){return g(),m("div",aa,ha)}var ma=I(sa,[["render",ga],["__scopeId","data-v-1ef8d93c"]]),fa="/assets/board-front.41330f02.png",Ct="/assets/board-side.d7181ded.png",pa="/assets/tv-front.82df5c0c.png",ba="/assets/news.c4bbc2d0.png",Et="/assets/tvset-legs.78b387df.png";const va=V({props:{withNews:Boolean}}),Ne=e=>(me("data-v-118e7bdf"),e=e(),fe(),e),wa={id:"tvset"},ya=Ne(()=>l("div",{id:"board"},[l("img",{id:"board-front",src:fa}),l("img",{id:"board-left",src:Ct}),l("img",{id:"board-right",src:Ct}),l("div",{id:"board-top"})],-1)),ka={id:"tv"},Sa=Ne(()=>l("img",{id:"tv-front",src:pa},null,-1)),Pa={key:0,id:"news",src:ba},Da=Ne(()=>l("div",{id:"legs"},[l("img",{id:"legs-front",src:Et}),l("img",{id:"legs-back",src:Et})],-1));function _a(e,t,n,r,i,a){return g(),m("div",wa,[ya,l("div",ka,[Sa,e.withNews?(g(),m("img",Pa)):_("",!0)]),Da])}var Aa=I(va,[["render",_a],["__scopeId","data-v-118e7bdf"]]);const za={},Fa={class:"dialog"},Ca={class:"buttons"};function Ea(e,t){return g(),m("div",Fa,[Ee(e.$slots,"default",{},void 0,!0),l("div",Ca,[Ee(e.$slots,"buttons",{},void 0,!0)])])}var Wt=I(za,[["render",Ea],["__scopeId","data-v-620b183d"]]);const Wa=V({setup(){const e=ae();return e.dispatch("setupTour"),{store:e}},components:{Dialog:Wt},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return he.find(e=>e.id===this.$store.state.tour.step)},title(){var e;return(e=this.currentStep)==null?void 0:e.title},text(){var e;return(e=this.currentStep)==null?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var n;const t=document.querySelector(".highlighted");t&&t.classList.remove("highlighted"),e&&e.highlight&&((n=document.querySelector(`#${e.highlight}`))==null||n.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}}),La=["innerHTML"];function xa(e,t,n,r,i,a){const d=ne("Dialog");return e.title&&e.text?(g(),Z(d,{key:0},{buttons:ve(()=>[l("button",{onClick:t[0]||(t[0]=(...f)=>e.stop&&e.stop(...f))},"Tour beenden"),l("button",{onClick:t[1]||(t[1]=(...f)=>e.next&&e.next(...f))},"Weiter")]),default:ve(()=>[l("h2",null,y(e.title),1),l("div",{innerHTML:e.text},null,8,La)]),_:1})):_("",!0)}var Ta=I(Wa,[["render",xa]]);const Va={class:"game-setup"},Oa=l("h1",null,"#ich-kann-klima",-1),Ia=l("div",{id:"walls"},[l("div",{id:"wall-back"}),l("div",{id:"wall-left"}),l("div",{id:"wall-right"})],-1),Ma=V({setup(e){const t=ae(),n=S(()=>{var G;const h=((G=t.state.game)==null?void 0:G.events)||[];if(h.length===0)return;const U=h[0];if(!U.acknowledged)return Ae.find(x=>x.id===U.id)}),r=S(()=>{var h;return((h=n.value)==null?void 0:h.title)||""}),i=S(()=>{var h;return((h=n.value)==null?void 0:h.description)||""}),a=S(()=>{var h;return((h=t.state.game)==null?void 0:h.currentYear)||2021}),d=S(()=>{var h;return we((h=t.state.game)==null?void 0:h.currentDate).lux.month}),f=S(()=>{const h=t.state.game;return h?ns(h):0}),c=S(()=>{var h;return((h=t.state.game)==null?void 0:h.values.popularity)||100}),p=S(()=>{const h=t.state.game;return h?ts(h):0});function u(){t.dispatch("acknowledgeEvent",n.value)}return(h,U)=>(g(),m("div",Va,[Oa,Ia,O(Zs,{year:F(a),month:F(d)},null,8,["year","month"]),O(ra),O(Bs,{value:F(c)},null,8,["value"]),O(Aa,{"with-news":!!F(i)},null,8,["with-news"]),O(Hs,{value:F(p)},null,8,["value"]),O(ma),O(Ls,{value:F(f)},null,8,["value"]),O(ms),O(bs,{title:F(r),text:F(i),onAcknowledge:u},null,8,["title","text"]),O(Ta)]))}});const Ba=["onClick"],$a=V({setup(e){const t=ae(),n=S(()=>{var d;return(d=t.state.game)==null?void 0:d.acceptedLaws}),r=X(void 0),i=S(()=>se.filter(d=>{var f,c;return((f=n.value)==null?void 0:f.some(p=>p.lawId===d.id))&&!((c=d.labels)==null?void 0:c.includes("hidden"))}));function a(d){r.value=r.value===d?void 0:d}return(d,f)=>(g(!0),m(K,null,R(F(i),(c,p)=>(g(),m("div",{key:p,class:M(["Law",{opened:p===r.value}]),onClick:u=>a(p)},[l("h3",null,y(c.title),1),l("div",null,y(c.description),1)],10,Ba))),128))}});var Na=I($a,[["__scopeId","data-v-7efa2df1"]]);const Ua=V({components:{GameSetup:Ma,AcceptedLaws:Na},setup(){return{store:ae()}},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,n){n(r=>r.startGame(e.params.id))}});function Ga(e,t,n,r,i,a){const d=ne("GameSetup");return g(),Z(d)}var Lt=I(Ua,[["render",Ga],["__scopeId","data-v-3637ce73"]]);const Ka=V({components:{Dialog:Wt},setup(){return{store:ae()}},computed:{co2(){var n,r;const e=(n=this.store.state.game)==null?void 0:n.values.co2budget;return((r=this.store.state.game)==null?void 0:r.values.co2emissions)>0?e>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. H\xE4tte die AfD nicht besser hinbekommen.":e>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken k\xF6nnen. Punktlandung."},debt(){var t;return((t=this.store.state.game)==null?void 0:t.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilit\xE4tskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var t;const e=(t=this.store.state.game)==null?void 0:t.values.popularity;return e<20?"entspricht dem, was man von einem langh\xE4hrigen Diktator erwarten kann.":e<50?"ist nicht berauschend, wiedergew\xE4hlt w\xFCrdest du wohl eher nicht.":e<80?"reicht aus, dass du noch l\xE4nger am Ruder bleiben k\xF6nntest. Gratulation!":"ist v\xF6llig unglaubw\xFCrdig - war das wirklich eine freie Wahl?"}},methods:{loadGame(e){this.store.dispatch("loadGame",{gameId:e})},newGame(){this.$router.push("/games")}},beforeRouteEnter(e,t,n){n(r=>{r.loadGame(e.params.id)})}}),Ja=l("h2",null,"Das Spiel ist leider zu Ende",-1),Ha=l("p",null,"Deine Entscheidungen haben etwas ver\xE4ndert - soviel kann man sagen.",-1),ja=l("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Ra={class:"button-bar"};function Za(e,t,n,r,i,a){const d=ne("Dialog");return g(),Z(d,null,{default:ve(()=>[Ja,Ha,l("ul",null,[l("li",null,"Die CO2-Emmissionen "+y(e.co2),1),l("li",null,"Die Staatsfinanzen "+y(e.debt),1),l("li",null,"Deine Beliebtheit "+y(e.popularity),1)]),ja,l("div",Ra,[l("button",{onClick:t[0]||(t[0]=(...f)=>e.newGame&&e.newGame(...f))},"Neuer Versuch")])]),_:1})}var Qa=I(Ka,[["render",Za]]);const qa=[{path:"/",redirect:"/games"},{path:"/games",component:Lt},{path:"/games/:id",component:Lt},{path:"/games/:id/over",component:Qa}],xt=Jt({history:Ht(),routes:qa});function Ya(e){return{createGame(t){return e.add("post","/games",t)},loadGame(t){return e.add("get","/games/"+t,void 0,0)},saveGame(t){return e.remove("put","/games/"+t.id),e.add("put","/games/"+t.id,t)},decisionMade(t,n,r){return e.add("post","/games/"+t+"/decisions/"+n,{accepted:r})},eventOccurred(t,n){return e.add("post","/games/"+t+"/events/"+n)}}}function Xa(e,t){let n=[],r;async function i(){if(r&&(clearTimeout(r),r=void 0),n.length){const{method:a,path:d,data:f,retry:c,resolve:p,reject:u}=n[0];try{if((t==null?void 0:t.navigator)&&!(t==null?void 0:t.navigator.onLine))throw Error("Browser is offline");const h=await e(a,d,f);n.shift(),p(h)}catch(h){c?n[0].retry=Math.max(-1,c-1):(n.shift(),u(h))}n.length&&(r=setTimeout(i,(t==null?void 0:t.timeout)||1e4))}}return{add(a,d,f,c=-1){return new Promise((p,u)=>{n.push({method:a,path:d,data:f,retry:c,resolve:p,reject:u}),r||i()})},remove(a,d){n=n.filter(f=>f.method.toLowerCase()!==a.toLowerCase()||f.path!==d)},callsPending(){return n.length>0}}}function eo(e,t,n=console){return async function(r,i,a){var d;try{const f={method:r};["post","put","patch"].includes(r)&&(f.body=JSON.stringify(a),f.headers={["content-type"]:"application/json"});const c=await t(e+i,f),p=((d=c.headers.get("Content-Type"))==null?void 0:d.match(/json/))?await c.json():await c.text();if(c.ok)return p;throw Error(p.message||p)}catch(f){throw n.error(f),f}}}function to({api:e,logger:t=console,storage:n=localStorage}){return{createGame(r){xe(r),n.setItem("game",JSON.stringify(r));try{e.createGame(r)}catch(i){t.warn("Cannot save new game - trying again later",i)}},async loadGame(r){const i=n.getItem("game");if(i){const d=JSON.parse(i);if(d.id===r)return xe(d),Me(d,r)}const a=await e.loadGame(r);return xe(a),Me(a,r)},saveGame(r){r.prngState=ln(),n.setItem("game",JSON.stringify(r));try{e.saveGame(r)}catch(i){t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",i)}},decisionMade(r,i,a){e.decisionMade(r.id,i,a)},eventOccurred(r,i){e.eventOccurred(r.id,i.id)}}}const no=localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",ro=eo(no,fetch),io=Xa(ro),so=Ya(io),ao=to({api:so}),oo=rs(xt,ao),Tt=Symbol();function ae(){return jt(Tt)}const lo=Rt({state:as,mutations:is,actions:oo,getters:ss});function Vt(e,t,...n){for(const r of n){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function uo(e,t,n){function r(c){return e[c].toFixed(2)}function i(c){return(c>0?"+":"")+c.toFixed(2)}function a(c){const p=n.find(u=>u.type==="modify"&&u.name===c);return p&&p.condition?p.value:0}function d(c){const p=a(c),u=t?t[c]:0;return p&&Math.abs(p-u)<.001?i(p):p?i(p)+" / "+i(u):u!=0?i(u):""}return vt.map(c=>({id:c.name,unit:c.unit,value:r(c.name),effect:d(c.name),class:c.writable?"writable":"calculated"}))}function co(e,t,n,r){const i=e.proposedLaws,a=e.acceptedLaws.map(c=>c.lawId),d=e.rejectedLaws;function f(c){return a.includes(c)?"a":i.includes(c)?"p":d.includes(c)?"r":"x"}return r.map(c=>({id:c.id,priority:c.priority(e),state:f(c.id)})).sort((c,p)=>Vt(c,p,t,"id")*n).map(c=>$(W({},c),{priority:c.priority.toFixed(2)}))}function ho(e,t,n,r){return r.map(i=>({id:i.id,probability:i.probability(e)})).sort((i,a)=>Vt(i,a,t,"id")*n).map(i=>$(W({},i),{probability:(i.probability*100).toFixed(2)}))}const go={key:0},mo=["href"],fo=N(". "),po={key:1},bo={key:2},vo=N("Bemerkung: "),wo=["innerHTML"],yo=N(". "),ko={key:3},So=N("Internes: "),Po=["innerHTML"],Do=N(". "),_o={key:4},Ao=["href"],zo=N(". "),Fo={key:5},Co=["href"],Eo=N(". "),Wo={key:6},Lo=["href"],xo=N(". "),To=V({props:{citation:null,showInternals:{type:Boolean}},setup(e){const t=e,n=S(()=>t.citation.url.toString()),r=S(()=>t.citation.title||t.citation.url.toString());return(i,a)=>(g(),m("p",null,[e.citation.authors?(g(),m("span",go,y(e.citation.authors+e.citation.dateString())+". ",1)):_("",!0),l("a",{target:"_blank",rel:"noreferrer noopener",href:F(n)},'"'+y(F(r))+'"',9,mo),fo,e.citation.publisher?(g(),m("span",po,y(e.citation.publisher)+". ",1)):_("",!0),e.citation.comment?(g(),m("span",bo,[vo,l("span",{innerHTML:e.citation.comment},null,8,wo),yo])):_("",!0),e.showInternals&&e.citation.internalComment?(g(),m("span",ko,[So,l("span",{innerHTML:e.citation.internalComment},null,8,Po),Do])):_("",!0),e.citation.referringUrl?(g(),m("span",_o,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,Ao),zo])):_("",!0),e.citation.archiveUrl?(g(),m("span",Fo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,Co),Eo])):_("",!0),e.citation.localCopy?(g(),m("span",Wo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,Lo),xo])):_("",!0)]))}}),Vo=V({props:{chartData:null,paramId:null,selectedYear:null},emits:["update:selectedYear"],setup(e,{emit:t}){const n=e,r="#9c6d00",i="#ce900070",a="#644600",d=S(()=>({xaxis:{categories:de,labels:{rotate:-90}},chart:{id:n.paramId+"-withLawEffects",animations:{enabled:!1},stacked:!0},colors:[r,a,i],legend:{show:!1},markers:{size:0},dataLabels:{enabled:!1}})),f=S(()=>n.chartData.values.map((P,z)=>({value:P[n.paramId],change:n.chartData.changes[z][n.paramId]}))),c=S(()=>f.value.map(P=>{const z=P.value-P.change;return P.change*P.value>0?z*P.value>0?{value:z,gain:P.change,loss:0}:{value:0,gain:P.value,loss:z}:{value:P.value,gain:0,loss:-P.change}})),p=S(()=>[{name:"Simulated "+n.paramId,data:c.value.map(P=>Math.round(P.value))},{name:"Gains of "+n.paramId+" by selected law",data:c.value.map(P=>Math.round(P.gain))},{name:"Losses of "+n.paramId+" by selected law",data:c.value.map(P=>Math.round(P.loss))}]),u=X();let h;function U(){var P,z;((P=u.value)==null?void 0:P.chart)!=null&&h!=null&&((z=u.value)==null||z.toggleDataPointSelection(0,h)),h=void 0}function G(P){var z,T;if(((z=u.value)==null?void 0:z.chart)!=null&&P){const j=P-de[0];h!=j&&(U(),h=j,(T=u.value)==null||T.toggleDataPointSelection(0,j))}else U()}Zt(()=>G(n.selectedYear),{flush:"post"});function x(P,z,T){const j=T.dataPointIndex;j<0||(j===h?(h=void 0,t("update:selectedYear",void 0)):(h=j,t("update:selectedYear",j+de[0])))}return(P,z)=>(g(),m("div",null,[l("div",null,y(e.paramId),1),(g(),Z(Qt("apexchart"),{ref:(T,j)=>{j.chart=T,u.value=T},type:"bar",options:F(d),series:F(p),onClick:x},null,8,["options","series"]))]))}}),Oo=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"DaemmungAltbau4Percent",effectiveSince:2022},{lawId:"ForschungEmissionsfreieZementproduktion",effectiveSince:2023},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024},{lawId:"ForschungEmissionsfreieStahlproduktion",effectiveSince:2024},{lawId:"FernverkehrModernisieren",effectiveSince:2025},{lawId:"NahverkehrModernisieren",effectiveSince:2026},{lawId:"FernverkehrVerbindungenAusbauen",effectiveSince:2026},{lawId:"NahverkehrAusbauen",effectiveSince:2026},{lawId:"LadeinfrastrukturAusbauen",effectiveSince:2026},{lawId:"NahverkehrKostenlos",effectiveSince:2027},{lawId:"DienstwagenPrivilegAbgeschaffen",effectiveSince:2027},{lawId:"ElektromobilitaetFoerdern",effectiveSince:2027},{lawId:"WasserstoffmobilitaetFoerdern",effectiveSince:2027}]}],ze=(e,t)=>e.lawId===t.lawId&&e.effectiveSince===t.effectiveSince,Io=e=>e.map((t,n)=>$(W({},t),{sortId:n}));function Mo(...e){const t=e.map(n=>n.length===0?0:n[n.length-1].sortId+1);return t.length===0?0:Math.max.apply(Math,t)}function Bo(e){const t=X([]),n=X([]),r=X(!1);function i(x,P){var Ge;const z=t.value,T={lawId:x,effectiveSince:P,sortId:0},j=(Ge=n.value.find(ge=>ze(T,ge)))==null?void 0:Ge.sortId;T.sortId=j!=null?j:Mo(z,n.value),t.value=z.filter(ge=>ge.lawId!=x).concat(T).sort((ge,It)=>ge.sortId-It.sortId)}function a(x){t.value=t.value.filter(P=>P.lawId!=x)}function d(x,P){const z={lawId:x,effectiveSince:P,sortId:0};t.value.some(T=>ze(T,z))?a(x):i(x,P)}function f(x){t.value=Io(x.laws)}function c(){r.value=!r.value,r.value?n.value=t.value:n.value=[]}const p=S(()=>{var x;return{name:"Current Game",laws:((x=e.value)==null?void 0:x.acceptedLaws)||[]}}),u=S(()=>[p.value,...Oo]),h=S(()=>{const x=t.value.map(z=>$(W({},z),{cls:n.value.some(T=>ze(z,T))?"both":"new"})),P=n.value.filter(z=>!t.value.some(T=>ze(T,z))).map(z=>$(W({},z),{cls:"saved"}));return[...x,...P].sort((z,T)=>z.sortId-T.sortId)}),U=Ot(t),G=Ot(n);return{addToSimulation:i,removeFromSimulation:a,toggleInSimulation:d,loadPreset:f,compareActive:r,toggleCompare:c,presets:u,simulatedLaws:h,simulation:U,secondSimulation:G}}function Ot(e){return S(()=>{const t=Dt(),n=e.value.map(i=>De(i));return de.map(i=>{for(;i>t.currentYear;){t.currentYear++;const{values:a,effectsOfLaws:d}=_t(t,n,t.currentYear);if(t.values=a,i===t.currentYear)return{values:a,effectsOfLaws:d}}return{values:t.values,effectsOfLaws:{}}})})}const $o=V({directives:{clickaway:Re},setup(e,t){const n=X(!1);return{menuIsOpen:n,toggle:()=>n.value=!n.value,close:()=>n.value=!1}}});function No(e,t,n,r,i,a){const d=qt("clickaway");return Yt((g(),m("span",{onClick:t[0]||(t[0]=(...f)=>e.toggle&&e.toggle(...f)),class:M(["menu",{menuIsOpen:e.menuIsOpen}])},[Ee(e.$slots,"default",{},void 0,!0)],2)),[[d,e.close]])}var Uo=I($o,[["render",No],["__scopeId","data-v-06206e01"]]);const Go=V({directives:{clickaway:Re},components:{Citation:To,PeekChart:Vo,Menu:Uo},setup(){const e=ae(),t=S(()=>e.state.game),n=Bo(t);return W({store:e,game:t,gameYears:de},n)},data(){return{lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lastSelected:void 0,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,yearSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1}},methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){e===this.lawSelected?this.lawSelected=void 0:(this.lastSelected="law",this.lawSelected=e)},selectEvent(e){e===this.eventSelected?this.eventSelected=void 0:(this.lastSelected="event",this.eventSelected=e)},selectParam(e){e===this.paramSelected?this.paramSelected=void 0:(this.lastSelected="param",this.paramSelected=e)},selectYear(e){e===this.yearSelected?this.yearSelected=void 0:(this.lastSelected="year",this.yearSelected=e)},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0,this.yearSelected=void 0},dragStart(e,t){const{lawId:n,year:r}=t;!e.dataTransfer||(e.dataTransfer.dropEffect="link",n&&e.dataTransfer.setData("lawId",n),r&&e.dataTransfer.setData("year",r.toString()))},getDropped(e,t,n){if(!e.dataTransfer)return;const r=e.dataTransfer.getData(t);return n.find(i=>i==r)},onDrop(e,t){const{lawId:n,year:r}=t,i=this.getDropped(e,"lawId",vi),a=this.getDropped(e,"year",this.gameYears);r&&i?this.addToSimulation(i,r):n&&a?this.addToSimulation(n,a):n&&i&&this.removeFromSimulation(i)},rightClick(e,t){this.toggleInSimulation(e,t)}},computed:{startYearOfSelected(){if(!this.lawSelected)return;if(!this.game)return oe;const e=this.simulatedLaws.find(t=>t.lawId===this.lawSelected);return e?e.effectiveSince:this.game.currentYear},selectedLaw(){return se.find(e=>e.id===this.lawSelected)},selectedEvent(){return Ae.find(e=>e.id===this.eventSelected)},selectedParam(){return this.paramSelected?q[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof k?e:void 0},cParam(){const e=this.selectedParam;return e instanceof H?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},currentYear(){return this.yearSelected?this.yearSelected:this.game?this.game.currentYear:oe},effectsOfSelected(){return!this.selectedLaw||!this.startYearOfSelected||!this.game?[]:this.selectedLaw.effects(this.game,this.startYearOfSelected,this.currentYear)},sortedValues(){return this.game?uo(this.simOfYear.values,this.effectsOfLawInYear,this.effectsOfSelected):[]},sortedLaws(){return this.game?co(this.game,this.lawsSortCol,this.lawsSortDir,se):[]},sortedEvents(){return this.game?ho(this.game,this.eventsSortCol,this.eventsSortDir,Ae):[]},effectsOfLawInYear(){if(this.lawSelected)return this.simOfYear.effectsOfLaws[this.lawSelected];if(this.yearSelected)return this.simEffectOfLaw[this.yearSelected-this.gameYears[0]]},simOfYear(){if(this.yearSelected===void 0&&this.game){const e=this.effectsOfSelected,t=this.game.values;if(this.lawSelected===void 0||e.length===0)return{values:t,effectsOfLaws:{}};const n=ue(t);Ie({dispatch:()=>{},values:n},e);const i=Object.fromEntries(ft.map(a=>[a,n[a]-t[a]]));return{values:t,effectsOfLaws:{[this.lawSelected]:i}}}else{const e=this.yearSelected?this.yearSelected-this.gameYears[0]:0;return this.simulation[e]}},simulatedValues(){return this.simulation.map(e=>e.values)},simEffectOfLaw(){if(this.lawSelected){const e=this.lawSelected;return this.simulation.map(t=>{const n=t.effectsOfLaws[e];return n||wt})}return this.compareActive?this.secondSimulation.map((e,t)=>Object.fromEntries(Object.entries(e.values).map(([n,r])=>[n,this.simulation[t].values[n]-r]))):de.map(e=>wt)},chartData(){return{values:this.simulatedValues,changes:this.simEffectOfLaw}},lawsInYear(){return e=>this.simulatedLaws.filter(t=>t.effectiveSince===e)}}}),Y=e=>(me("data-v-73ca890e"),e=e(),fe(),e),Ko={class:"peekData"},Jo={class:"Menu"},Ho=N("\xA0 "),jo=N("\xA0 "),Ro=N("\xA0 "),Zo=N("\xA0 "),Qo=N("\xA0 "),qo=N("\xA0 "),Yo={key:1,class:"Details sidebyside"},Xo={class:"Title"},el={class:"Description"},tl=Y(()=>l("div",{class:"SectionHead"},"Details:",-1)),nl=["innerHTML"],rl=Y(()=>l("div",{class:"SectionHead"},"Internes:",-1)),il=["innerHTML"],sl=Y(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),al={key:2,class:"Details sidebyside"},ol={class:"Title"},ll={class:"Description"},ul=Y(()=>l("div",{class:"SectionHead"},"Details:",-1)),cl=["innerHTML"],dl=Y(()=>l("div",{class:"SectionHead"},"Internes:",-1)),hl=["innerHTML"],gl=Y(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),ml={key:3,class:"Details sidebyside"},fl={class:"Title"},pl={key:0},bl={key:1},vl={key:2},wl=Y(()=>l("div",{class:"SectionHead"},"Details:",-1)),yl=["innerHTML"],kl=Y(()=>l("div",{class:"SectionHead"},"Internes:",-1)),Sl=["innerHTML"],Pl=Y(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),Dl={class:"paramsHeader"},_l=["onClick"],Al={class:"numbercol"},zl={class:"effcol"},Fl={key:5,class:"lawList sidebyside"},Cl=["onClick","onDragstart","onDrop"],El={class:"priocol"},Wl={key:6,class:"eventList sidebyside"},Ll=["onClick"],xl={class:"priocol"},Tl={key:7,class:"yearList sidebyside"},Vl=Y(()=>l("a",{class:"clickable"},"Presets",-1)),Ol={class:"dropdown"},Il=["onClick"],Ml=N("\xA0 "),Bl=["onClick","onDragstart","onDrop"],$l=["onClick","onContextmenu","onDragstart","onDrop"];function Nl(e,t,n,r,i,a){var p;const d=ne("PeekChart"),f=ne("Citation"),c=ne("Menu");return g(),m("details",Ko,[l("summary",{onClick:t[0]||(t[0]=u=>e.unselect()),class:"clickable"},"Peek"),l("div",Jo,[l("a",{onClick:t[1]||(t[1]=u=>e.showCharts=!e.showCharts),class:M(["clickable",e.showCharts?"selected":""])},"Charts",2),Ho,l("a",{onClick:t[2]||(t[2]=u=>e.showDetails=!e.showDetails),class:M(["clickable",e.showDetails?"selected":""])},"Details",2),jo,l("a",{onClick:t[3]||(t[3]=u=>e.showParams=!e.showParams),class:M(["clickable",e.showParams?"selected":""])},"Params",2),Ro,l("a",{onClick:t[4]||(t[4]=u=>e.toggleLawList()),class:M(["clickable",e.showLaws?"selected":""])},"Laws",2),Zo,l("a",{onClick:t[5]||(t[5]=u=>e.toggleEventList()),class:M(["clickable",e.showEvents?"selected":""])},"Events",2),Qo,l("a",{onClick:t[6]||(t[6]=u=>e.showYears=!e.showYears),class:M(["clickable",e.showYears?"selected":""])},"Years",2),qo]),e.showCharts?(g(),m("div",{key:0,class:M(["Details sidebyside",{lawSelected:e.lawSelected!=null}])},[e.paramSelected?(g(),Z(d,{key:0,selectedYear:e.yearSelected,"onUpdate:selectedYear":t[7]||(t[7]=u=>e.yearSelected=u),chartData:e.chartData,paramId:e.paramSelected},null,8,["selectedYear","chartData","paramId"])):_("",!0),O(d,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[8]||(t[8]=u=>e.yearSelected=u),chartData:e.chartData,paramId:"co2emissions"},null,8,["selectedYear","chartData"]),O(d,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[9]||(t[9]=u=>e.yearSelected=u),chartData:e.chartData,paramId:"popularity"},null,8,["selectedYear","chartData"]),O(d,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[10]||(t[10]=u=>e.yearSelected=u),chartData:e.chartData,paramId:"stateDebt"},null,8,["selectedYear","chartData"]),O(d,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[11]||(t[11]=u=>e.yearSelected=u),chartData:e.chartData,paramId:"co2budget"},null,8,["selectedYear","chartData"])],2)):_("",!0),e.lastSelected==="law"&&e.selectedLaw&&e.showDetails?(g(),m("div",Yo,[l("div",Xo,y(e.selectedLaw.title),1),l("div",el,y(e.selectedLaw.description),1),tl,l("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,nl),rl,l("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,il),sl,(g(!0),m(K,null,R(e.citationsOfLaw,(u,h)=>(g(),Z(f,{class:"Section",key:h,citation:u},null,8,["citation"]))),128))])):_("",!0),e.lastSelected==="event"&&e.selectedEvent&&e.showDetails?(g(),m("div",al,[l("div",ol,y(e.selectedEvent.title),1),l("div",ll,y(e.selectedEvent.description),1),ul,l("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,cl),dl,l("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,hl),gl,(g(!0),m(K,null,R((p=e.selectedEvent)==null?void 0:p.citations,(u,h)=>(g(),Z(f,{class:"Section",key:h,citation:u},null,8,["citation"]))),128))])):_("",!0),e.lastSelected==="param"&&e.selectedParam&&e.showDetails?(g(),m("div",ml,[l("div",fl,y(e.paramSelected)+" ["+y(e.selectedParam.unit)+"]",1),e.wParam?(g(),m("div",pl,"Initial value: "+y(e.wParam.initialValue)+" "+y(e.wParam.unit),1)):_("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(g(),m("div",bl," Should initially be: "+y(e.cParam.shouldInitiallyBe)+" "+y(e.cParam.unit),1)):_("",!0),e.cParam?(g(),m("div",vl," Calculation: "+y(e.cParam.valueGetter),1)):_("",!0),wl,l("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,yl),kl,l("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,Sl),Pl,(g(!0),m(K,null,R(e.selectedParam.citations,(u,h)=>(g(),Z(f,{class:"Section",key:h,citation:u},null,8,["citation"]))),128))])):_("",!0),e.showParams?(g(),m("div",{key:4,class:M(["paramsList sidebyside",{lawSelected:e.lawSelected!=null}])},[l("div",Dl,[l("div",null,"Start of law: "+y(e.startYearOfSelected),1),l("div",null,"Current year: "+y(e.currentYear),1)]),l("table",null,[(g(!0),m(K,null,R(e.sortedValues,u=>(g(),m("tr",{key:u.id,class:M({clickable:!0,selected:e.paramSelected===u.id,[u.class]:!0}),onClick:h=>e.selectParam(u.id)},[l("td",null,y(u.id),1),l("td",Al,y(u.value),1),l("td",zl,y(u.effect),1),l("td",null,y(u.unit),1)],10,_l))),128))])],2)):_("",!0),e.showLaws?(g(),m("div",Fl,[l("table",null,[l("tr",null,[l("th",{onClick:t[12]||(t[12]=u=>e.sortLaws("state")),class:"clickable"},"S"),l("th",{onClick:t[13]||(t[13]=u=>e.sortLaws("id")),class:"clickable"},"ID"),l("th",{onClick:t[14]||(t[14]=u=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(g(!0),m(K,null,R(e.sortedLaws,u=>(g(),m("tr",{key:u.id,class:M({clickable:!0,selected:e.lawSelected===u.id,[u.state]:!0}),onClick:h=>e.selectLaw(u.id),draggable:"true",onDragstart:h=>e.dragStart(h,{lawId:u.id}),onDrop:Q(h=>e.onDrop(h,{lawId:u.id}),["prevent"]),onDragover:t[15]||(t[15]=Q(()=>{},["prevent"])),onDragenter:t[16]||(t[16]=Q(()=>{},["prevent"]))},[l("td",null,y(u.state),1),l("td",null,y(u.id),1),l("td",El,y(u.priority),1)],42,Cl))),128))])])):_("",!0),e.showEvents?(g(),m("div",Wl,[l("table",null,[l("tr",null,[l("th",{onClick:t[17]||(t[17]=u=>e.sortEvents("id")),class:"clickable"},"ID"),l("th",{onClick:t[18]||(t[18]=u=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(g(!0),m(K,null,R(e.sortedEvents,u=>(g(),m("tr",{key:u.id,class:M({clickable:!0,selected:e.eventSelected===u.id}),onClick:h=>e.selectEvent(u.id)},[l("td",null,y(u.id),1),l("td",xl,y(u.probability),1)],10,Ll))),128))])])):_("",!0),e.showYears?(g(),m("div",Tl,[l("div",null,[O(c,null,{default:ve(()=>[Vl,l("ul",Ol,[(g(!0),m(K,null,R(e.presets,u=>(g(),m("li",{key:u.name,class:"clickable",onClick:h=>e.loadPreset(u)},y(u.name),9,Il))),128))])]),_:1}),Ml,l("a",{class:M(["clickable",e.compareActive?"selected":""]),onClick:t[19]||(t[19]=u=>e.toggleCompare())},"Compare",2)]),l("table",null,[(g(!0),m(K,null,R(e.gameYears,u=>(g(),m(K,{key:u},[l("tr",{class:M({clickable:!0,selected:e.yearSelected===u}),onClick:h=>e.selectYear(u),draggable:"true",onDragstart:h=>e.dragStart(h,{year:u}),onDrop:Q(h=>e.onDrop(h,{year:u}),["prevent"]),onDragover:t[20]||(t[20]=Q(()=>{},["prevent"])),onDragenter:t[21]||(t[21]=Q(()=>{},["prevent"]))},[l("th",null,y(u),1)],42,Bl),(g(!0),m(K,null,R(e.lawsInYear(u),({lawId:h,cls:U})=>(g(),m("tr",{key:h,class:M({clickable:!0,selected:e.lawSelected===h,[U]:!0}),onClick:G=>e.selectLaw(h),onContextmenu:Q(G=>e.rightClick(h,u),["right","prevent"]),draggable:"true",onDragstart:G=>e.dragStart(G,{lawId:h}),onDrop:Q(G=>e.onDrop(G,{year:u}),["prevent"]),onDragover:t[22]||(t[22]=Q(()=>{},["prevent"])),onDragenter:t[23]||(t[23]=Q(()=>{},["prevent"]))},[l("td",null,y(h),1)],42,$l))),128))],64))),128))])])):_("",!0)])}var Ul=I(Go,[["render",Nl],["__scopeId","data-v-73ca890e"]]);const Gl=V({components:{PeekInside:Ul},setup(){return{store:ae(),devMode:localStorage.getItem("devMode")==="true"}},methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,n=Math.min(e/800,t/1e3),r=(t-1e3*n)/2;document.documentElement.style.setProperty("--scale",`${n}`),document.documentElement.style.setProperty("--translateX",`${r}px`)}},mounted(){setTimeout(this.updateStyle,0),window.addEventListener("resize",this.updateStyle)}}),Kl={class:"perspective"},Jl={class:"peek"};function Hl(e,t,n,r,i,a){const d=ne("router-view"),f=ne("PeekInside");return g(),m(K,null,[l("div",Kl,[O(d)]),l("div",Jl,[e.devMode?(g(),Z(f,{key:0})):_("",!0)])],64)}var jl=I(Gl,[["render",Hl]]);const Ue=Xt(jl);Ue.use(lo,Tt);Ue.use(xt);Ue.mount("#app");
