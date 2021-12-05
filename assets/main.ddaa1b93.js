var It=Object.defineProperty,Mt=Object.defineProperties;var Bt=Object.getOwnPropertyDescriptors;var Ke=Object.getOwnPropertySymbols;var Nt=Object.prototype.hasOwnProperty,Ut=Object.prototype.propertyIsEnumerable;var ze=(e,t,n)=>t in e?It(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z=(e,t)=>{for(var n in t||(t={}))Nt.call(t,n)&&ze(e,n,t[n]);if(Ke)for(var n of Ke(t))Ut.call(t,n)&&ze(e,n,t[n]);return e},M=(e,t)=>Mt(e,Bt(t));var F=(e,t,n)=>(ze(e,typeof t!="symbol"?t+"":t,n),n);import{D as Je,a as He,s as je,b as Gt,v as Kt,d as T,c as g,e as l,f as D,t as k,n as x,g as Fe,p as he,h as me,o as h,m as Jt,r as V,F as U,i as H,j,k as I,l as O,u as ee,q as N,w as Ce,x as be,y as Ht,z as jt,A as Rt,B as Zt,V as qt,C as ge,E as Qt,G as Yt,H as Re,I as Xt,J as en,K as R,L as tn}from"./vendor.ef554f67.js";const nn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};nn();const rn={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};class Ee{constructor(t){F(this,"lux");t instanceof Je?this.lux=t.setLocale("de-DE").setZone("Europe/Berlin"):this.lux=Je.fromISO(t,{zone:"Europe/Berlin",locale:"de-DE"})}static durationBetween(t,n){return new Ze(n.lux.diff(t.lux,["months"]))}plus(t){return new Ee(this.lux.plus(t.lux))}getYear(){return this.lux.get("year")}toLocaleString(){return this.lux.toLocaleString(rn)}toMonthString(){return this.lux.toLocaleString({month:"long",year:"numeric"})}toJSON(){return this.lux.toJSON()}}class Ze{constructor(t){F(this,"lux");t instanceof He?this.lux=t:this.lux=He.fromISO(t,{locale:"de-DE"})}toMonthsString(){const t=this.lux.as("months");return t===1?"1 Monat":t+" Monate"}}function ve(e){return new Ee(e)}function we(e){return new Ze(e)}const se=2021,sn="2021-01-01",qe=2050,Qe=we("P3M"),an=we("P3M"),Ye=6,on=.6;function W(e){return e}const pe={newYear:2,timesUp:3,finanzKollaps:4,wahlVerloren:5,hitzehoelle:6};var ln=W({title:"Abstandsregeln f\xFCr Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erh\xF6ht wird. Das f\xFChrte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply(){return[]}});const un=e=>({time:Qe,text:`Braucht ${Qe.toMonthsString()}.`});function b(e){return e}let We=je("",{state:!0}),Xe=()=>Math.abs(We());function Le(e){We=je(e.id,{state:e.prngState})}function cn(){return We.state()}var dn=b({title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bew\xE4hrt. Wir lassen sie so, wie sie sind.",effects(){return[]},priority(e){return Xe()}});const hn=new Gt.exports.Converter;function et(e){return e>0?[...Array(e)].map((t,n)=>n):[]}function tt(e,t){const n=e-t-1;return[...et(t),Math.max(t,n),...et(n).reverse()]}function s(e,...t){let n=e.map((i,a)=>i+(t[a]||"")).join("").split(`
`);n[0].length===0&&n.shift();const r=n[0].match(/^(\s+)/);return r&&!n.filter(i=>i.trim()).some(i=>!i.startsWith(r[1]))&&(n=n.map(i=>i.replace(r[1],""))),hn.makeHtml(n.join(`
`))}function Te(e){return t=>!e(t)}function nt(e){return Object.entries(e).map(([t,n])=>M(z({},n),{id:t}))}const mn=new Intl.DateTimeFormat("de-DE");class _{constructor(t){F(this,"url");F(this,"title");F(this,"publisher");F(this,"authors");F(this,"date");F(this,"comment");F(this,"internalComment");F(this,"localCopy");F(this,"referringUrl");F(this,"archiveUrl");F(this,"archiveNotPossible");this.url=new URL(t.url),this.title=t.title,this.publisher=t.publisher,this.authors=t.authors,this.date=t.date?new Date(t.date):void 0,this.comment=t.comment,this.internalComment=t.internalComment,this.localCopy=t.localCopy,this.referringUrl=t.referringUrl?new URL(t.referringUrl):void 0,this.archiveUrl=t.archiveUrl?new URL(t.archiveUrl):void 0,this.archiveNotPossible=t.archiveNotPossible}dateString(){const t=this.date;return t?" ("+mn.format(t)+")":""}toString(){const t=this.authors?this.authors+this.dateString():void 0,n=this.title?'"'+this.title+'"':void 0;return[t,n,this.url,this.publisher].filter(r=>r).join(", ")}}function A(e){const t=e.publisher||e.authors,n=t!=null?t+": ":"",r=e.title||e.url.toString(),i=e.url.toString();return`[[${n}${r}](${i})]`}const gn=e=>e.map(t=>t.toString()).join("; "),pn=new _({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),Q=new _({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),rt=new _({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"}),it=new _({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineral\xF6lsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),st=new _({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile f\xFCr wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),ye=new _({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),fn=new _({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schl\xFCsselergebnisse der Studie des Wuppertal Instituts f\xFCr Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-\xB0C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${A(ye)}.`});ye.comment=s`Zusammengefasst in ${A(fn)}.`;const G=new _({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahresch\xE4tzung der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),bn=new _({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen f\xFCr das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),ke=new _({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enth\xE4lt CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] f\xFCr mehrere Verkehrsmittel"}),Se=new _({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),at=new _({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Stra\xDFeng\xFCterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),te=new _({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enth\xE4lt Personenkilometer-Jahreswerte f\xFCr mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),ot=new _({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung \xD6PNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),Ve=new _({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),vn=new _({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new _({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren f\xFCr Fernw\xE4rme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle f\xFCr 160g CO2 pro kWh Fernw\xE4rme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const lt=new _({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),wn=new _({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),ut=new _({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle w\xE4re besser."}),yn=new _({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bev\xF6lkerung nach Nationalit\xE4t und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),kn=new _({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur f\xFCr Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),Sn=new _({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische \xC4mter des Bundes und der L\xE4nder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new _({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const ct=new _({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgem\xE4\xDF - Interview mit Prof. Stefan G\xF6ssling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""}),Pn=new _({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),dt=new _({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""}),Dn=new _({url:"https://de.wikipedia.org/wiki/Betzsches_Gesetz",title:"Betzsches Gesetz",publisher:"Wikipedia"}),ht=new _({url:"https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",title:"Auswertungstabellen zur Energiebilanz Deutschland - Daten f\xFCr die Jahre von 1990 bis 2020",publisher:"AG Energiebilanzen e.V.",date:"2021-09",archiveUrl:"https://web.archive.org/web/20211008095222/https://ag-energiebilanzen.de/index.php?article_id=29&fileName=awt_2020_d.pdf",comment:"",internalComment:""});class mt{constructor(t){F(this,"unit");F(this,"citations");F(this,"details");F(this,"internals");this.unit=t.unit,this.citations=t.citations?t.citations:[],this.details=t.details?t.details:"",this.internals=t.internals?t.internals:""}citationsDesc(){return gn(this.citations)}}const _n={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class S extends mt{constructor(t){super(t);F(this,"writable",!0);F(this,"initialValue");F(this,"applyBounds");this.initialValue=t.initialValue,this.applyBounds=_n[t.unit]}}class K extends mt{constructor(t){super(t);F(this,"writable",!1);F(this,"valueGetter");F(this,"shouldInitiallyBe");this.valueGetter=t.valueGetter,this.shouldInitiallyBe=t.shouldInitiallyBe}}const An=new S({unit:"MioTons",initialValue:6700,citations:[pn],details:s`

  `,internals:s`

  `}),zn=new S({unit:"MioTons",initialValue:186.793,citations:[G],details:s`

  `,internals:s`

  `}),Fn=new K({unit:"MioTons",valueGetter(e){return e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4},shouldInitiallyBe:159.696,citations:[G,at],details:s`

  `,internals:s`
    ${A(G)}: 159.696 as MioTons

    ${A(at)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Cn=new K({unit:"MioTons",valueGetter(e){return e.co2emissionsStreetVehicles+e.publicLocalCapacity*65/1e6+e.publicNationalCapacity*32/1e6+e.airDomesticUsage*222/1e6+1.641},citations:[ke,G],details:s`

  `,internals:s`
    ${A(ke)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${A(G)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${A(G)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${A(G)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `}),En=new K({unit:"MioTons",valueGetter(e){return e.buildingsSourceBio*0+e.buildingsSourceGas*.247+e.buildingsSourceOil*.318+e.buildingsSourceTele*.16},citations:[G,Ve],details:s`

  `,internals:s`
    TODO: #91 Gibt es hier bessere Quellen?

    ${A(Ve)}: 247g CO2 pro kWh Erdgas.

    ${A(Ve)}: 318g CO2 pro kWh Erdöl.

    ${A(vn)}: 160g CO2 pro kWh Fernwärme.

    ${A(G)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),Wn=new S({unit:"MioTons",initialValue:67.936,citations:[G],details:s`

  `,internals:s`

  `}),Ln=new S({unit:"MioTons",initialValue:9.243,citations:[G],details:s`

  `,internals:s`

  `}),Tn=new K({unit:"MioTons",valueGetter(e){return e.electricityGas*.399+e.electricitySolar*.058+e.electricityWind*.005+e.electricityWater*.02+e.electricityHardCoal*.835+e.electricityBrownCoal*1.137+e.electricityBiomass*.03+e.electricityNuclear*.005},citations:[lt,G],details:s`

  `,internals:s`
    ${A(lt)}:
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
    - Diskrepanz zu ${A(wn)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${A(G)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),Vn=new K({unit:"MioTons",valueGetter(e){return e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers},details:s`

  `,internals:s`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${A(G)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[bn]}),On=new S({unit:"TWh",initialValue:480.54,citations:[Q],details:s`

  `,internals:s`

  `}),$n=new S({unit:"Percent",initialValue:50,citations:[],details:s`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:s`

  `}),xn=new S({unit:"TWh",initialValue:51.42,citations:[Q],details:s`

  `,internals:s`

  `}),Oe=new S({unit:"TWh",initialValue:131.85,citations:[Q],details:s`

  `,internals:s`

  `});function In(e,t){const n=e.value-t.value;return r=>{const i=e.result*(r-t.value)/n,a=t.result*(r-e.value)/n;return i-a}}const Mn=new K({unit:"TWh",valueGetter(e){const t=Oe.initialValue,n=e.electricityGridQuality,r=e.electricityDemand,i=In({value:50,result:t},{value:100,result:r})(n);return Math.min(i,e.electricityWind)},shouldInitiallyBe:Oe.initialValue,citations:[],details:s`
The electrical energy produced by wind and not impaired by poor quality of the grid.
  `,internals:s`

  `}),Bn=new S({unit:"TWh",initialValue:6,citations:[Q],details:s`

  `,internals:s`

  `}),Nn=new S({unit:"Percent",initialValue:100,citations:[Dn],details:s`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `}),Un=new S({unit:"TWh",initialValue:14.99,citations:[Q],details:s`

  `,internals:s`

  `}),Gn=new S({unit:"TWh",initialValue:43.19,citations:[Q],details:s`

  `,internals:s`

  `}),Kn=new S({unit:"TWh",initialValue:60.91,citations:[Q],details:s`

  `,internals:s`

  `}),Jn=new S({unit:"TWh",initialValue:35.46,citations:[Q],details:s`

  `,internals:s`

  `}),Hn=new S({unit:"TWh",initialValue:82.13,citations:[Q],details:s`

  `,internals:s`

  `}),jn=new K({unit:"TWh",valueGetter(e){return e.electricityHardCoal+e.electricityBrownCoal},details:s`

  `,internals:s`

  `}),Rn=new K({unit:"TWh",valueGetter(e){return e.electricityDemand-e.electricitySolar-e.electricityWindUsable-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear},details:s`

  `,internals:s`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),Zn=new S({unit:"GramPerPsgrKm",initialValue:160,citations:[ke],details:s`

  `,internals:s`
    ${A(ke)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),qn=new S({unit:"MioPsgrKm",initialValue:917e3,citations:[te],details:s`

  `,internals:s`

  `}),Qn=new S({unit:"Percent",initialValue:.5,citations:[ut],details:s`

  `,internals:s`
    Die verschiedenen Zahlen in ${A(ut)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),Yn=new S({unit:"MioPsgrKm",initialValue:112600,citations:[te],details:s`

  `,internals:s`

  `}),Xn=new S({unit:"MioPsgrKm",initialValue:112600,citations:[te],details:s`

  `,internals:s`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),er=new S({unit:"MioPsgrKm",initialValue:67300,citations:[te],details:s`

  `,internals:s`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),tr=new S({unit:"MioPsgrKm",initialValue:67300,citations:[te],details:s`

  `,internals:s`
Siehe \`publicLocalCapacity\`.
  `}),nr=new S({unit:"MioPsgrKm",initialValue:10100,citations:[te],details:s`

  `,internals:s`

  `}),rr=new S({unit:"MioPsgrKm",initialValue:61700,citations:[te],details:s`

  `,internals:s`

  `}),ir=new K({unit:"MioPsgrKm",valueGetter(e){return e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage},shouldInitiallyBe:1168700,citations:[te],details:s`

  `,internals:s`

  `}),sr=new S({unit:"TWh",initialValue:226,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),ar=new S({unit:"TWh",initialValue:544,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),or=new K({unit:"TWh",valueGetter(e){return e.buildingsPrivateDemand+e.buildingsIndustryDemand},shouldInitiallyBe:770,citations:[],details:s`

  `,internals:s`
    TODO: #78 Quelle ${A(ht)} gibt diese Zahlen nicht her.
  `}),lr=new S({unit:"TWh",initialValue:130,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),ur=new S({unit:"TWh",initialValue:219,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),cr=new S({unit:"TWh",initialValue:58,citations:[],details:s`

  `,internals:s`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),dr=new K({unit:"TWh",valueGetter(e){return e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele)},citations:[],details:s`

  `,internals:s`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${A(ht)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`}),hr=new S({unit:"Percent",initialValue:50,citations:[],details:s`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:s`

  `}),mr=new S({unit:"TsdPeople",initialValue:83155.031,citations:[yn],details:s`

  `,internals:s`
Anfangswert ist der Stand 31.12.2020.
  `}),gr=new S({unit:"TsdPeople",initialValue:2695,citations:[kn],details:s`

  `,internals:s`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),pr=new S({unit:"MrdEuro",initialValue:3332,citations:[Sn],details:s`

  `,internals:s`
Anfangswert ist das BIP 2020.
  `}),fr=new S({unit:"MrdEuro",initialValue:1899,citations:[],details:s`

  `,internals:s`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),Z={co2budget:An,co2emissionsIndustry:zn,co2emissionsStreetVehicles:Fn,co2emissionsMobility:Cn,co2emissionsAgriculture:Wn,co2emissionsBuildings:En,co2emissionsOthers:Ln,co2emissionsEnergy:Tn,co2emissions:Vn,electricityDemand:On,electricityGridQuality:$n,electricitySolar:xn,electricityWind:Oe,electricityWindUsable:Mn,electricityWindOnshoreMaxNew:Bn,electricityWindEfficiency:Nn,electricityWater:Un,electricityBiomass:Gn,electricityNuclear:Kn,electricityHardCoal:Jn,electricityBrownCoal:Hn,electricityCoal:jn,electricityGas:Rn,carEmissionFactor:Zn,carUsage:qn,carRenewablePercentage:Qn,publicLocalUsage:Yn,publicLocalCapacity:Xn,publicNationalUsage:er,publicNationalCapacity:tr,airDomesticUsage:nr,airIntlUsage:rr,passengerTransportUsage:ir,buildingsIndustryDemand:sr,buildingsPrivateDemand:ar,buildingsDemand:or,buildingsSourceBio:lr,buildingsSourceOil:ur,buildingsSourceTele:cr,buildingsSourceGas:dr,popularity:hr,numberOfCitizens:mr,unemployment:gr,gdp:pr,stateDebt:fr},br=Object.entries(Z).filter(e=>e[1]instanceof S).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),gt=Object.entries(Z).filter(e=>e[1]instanceof K).map(e=>e).reduce((e,t)=>(e[t[0]]=t[1],e),{}),pt=Object.keys(Z);class ft extends S{constructor(t,n){super(t);F(this,"name");this.name=n}}const vr=Object.entries(br).map(e=>new ft(e[1],e[0]));class bt extends K{constructor(t,n){super(t);F(this,"name");this.name=n}}Object.entries(gt).map(e=>new bt(e[1],e[0]));const vt=Object.entries(Z).map(e=>e[1]instanceof S?new ft(e[1],e[0]):new bt(e[1],e[0])),ae=vr.reduce((e,t)=>(e[t.name]=t.initialValue,e),{}),wt=vt.reduce((e,t)=>(e[t.name]=0,e),{});function oe(e){const t=z({},e);return Object.entries(gt).forEach(n=>Object.defineProperty(t,n[0],{enumerable:!0,get:()=>n[1].valueGetter(t)})),t}function wr(e){return z({},e)}function ne(e,t){return{type:"dispatch",condition:!0,if(n){return this.condition=n,this},apply(n){this.condition&&n.dispatch(e,t)}}}function o(e){return{type:"modify",name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(t){return this.percent=t,this},byValue(t){return this.value=t,this},setValue(t){return this.absolute=t,this},if(t){return this.condition=t,this},getOldNew(t){const n=this.name,r=t[n];if(!this.condition)return{oldVal:r,newVal:r};const i=Z[n],a=this.absolute!=null?this.absolute:r+(this.value||r*this.percent/100),c=i.applyBounds(a);return{oldVal:r,newVal:c}},getChange(t){if(!this.condition)return 0;const{oldVal:n,newVal:r}=this.getOldNew(t);return r-n},apply(t){if(this.condition){const{newVal:n}=this.getOldNew(t.values);t.values[this.name]=n}return this}}}function P(e,t){if(Z[e].unit!=Z[t].unit)throw new Error("Change 'transfer' can only be used for parameters with the same unit.");return{type:"transfer",to:e,from:t,value:0,percent:0,condition:!0,byPercent(n){return this.percent=n,this},byValue(n){return this.value=n,this},if(n){return this.condition=n,this},getEffect(n){const r=n[this.to],i=n[this.from];if(!this.condition)return{oldTo:r,oldFrom:i,newTo:r,newFrom:i};const a=Z[this.to],c=Z[this.from],m=this.value||r*this.percent/100,d=a.applyBounds(r+m)-r,v=-c.applyBounds(i-d)+i,u=r+v,w=i-v;return{oldTo:r,newTo:u,oldFrom:i,newFrom:w}},apply(n){if(this.condition){const{newTo:r,newFrom:i}=this.getEffect(n.values);n.values[this.to]=r,n.values[this.from]=i}return this}}}function $e(e,t){t.filter(n=>n.condition).forEach(n=>n.apply(e))}var yr=b({title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,n){const r=n-t,i=r<18?4.3/18:0,a=2.5,c=20,m=60,d=(10-r)/55,v=Math.max((c+m/2)*d,0);return[o("electricityHardCoal").setValue(0),o("electricityBrownCoal").setValue(0),o("stateDebt").byValue(-i+a),o("unemployment").byValue(v)]},priority(e){return e.values.electricityCoal/e.values.electricityDemand<=.1?0:f(1e4,0,e.values.unemployment)},citations:[],details:s`

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
  `}),kr=b({title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effort(e){return e.values.popularity>=50?{time:we("P3M"),text:"Normal dauert das 6 Monate, aber bei Deiner Beliebtheit nur 3."}:{time:we("P6M"),text:"Dauert 6 Monate."}},effects(){return[o("stateDebt").byValue(-37),o("electricityHardCoal").byPercent(-10),o("electricityBrownCoal").byPercent(-5),o("electricityWind").byValue(5),o("electricitySolar").byValue(3),o("electricityWater").byValue(.5)]},priority(e){return f(qe,se,e.currentYear)}});const yt=oe(ae).electricityGas;var Sr=b({title:"Kernenergienutzung verl\xE4ngern",description:"Kernkraftwerke l\xE4nger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effects(){return[o("electricityNuclear").setValue(104.3),o("stateDebt").byValue(-2.5),o("popularity").byValue(-4)]},priority(e){return f(yt,1.1*yt,e.values.electricityGas)}}),Pr=b({title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,n){const i={2021:60.45,2022:30.21}[n]||0;return[o("electricityNuclear").setValue(i)]},priority(e){return 0}}),Dr=b({title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren f\xFCr den Ausbau des Stromnetzes",effects(e,t,n){return[o("popularity").byValue(-3).if(t===n),o("electricityGridQuality").byValue(1)]},priority(e){return f(70,27,Y(e))},citations:[],details:s`

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
  `}),_r=b({title:"Netzausbau f\xF6rdern",description:"Ausbau des Stromnetzes mit Steuermitteln f\xF6rdern",effects(e,t,n){return[o("popularity").byValue(-1).if(t===n),o("stateDebt").byValue(2),o("electricityGridQuality").byValue(5).if(p(e,"NetzausbauErleichtern"))]},priority(e){return f(70,27,Y(e))},citations:[],details:s`

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
  `}),Ar=b({title:"Stromspeicherung erleichtern",description:"B\xFCrokratische H\xFCrden f\xFCr den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effects(e,t,n){return[o("electricityGridQuality").byValue(.2)]},priority(e){const t=e.values;return f(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),zr=b({title:"Stromspeicherung f\xF6rdern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln f\xF6rdern. 2 Mrd \u20AC pro Jahr.",effects(e,t,n){const r=p(e,"StromspeicherungErleichtern")?0:5,i=n>=t+r,a=p(e,"ForschungUndEntwicklungStromspeicherung",3);return[o("stateDebt").byValue(1),o("popularity").byValue(.2).if(i),o("stateDebt").byValue(1).if(i),o("electricityGridQuality").byValue(2).if(i),o("electricityGridQuality").byValue(2).if(a),o("electricityGridQuality").byValue(2).if(i&&a)]},priority(e){const t=e.values;return f(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),Fr=b({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit verg\xFCnstigten Krediten gef\xF6rdert.",effects(e,t,n){const r=.5,i=n-t>2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-1).if(i),o("buildingsSourceOil").byPercent(-1).if(i),o("buildingsSourceTele").byPercent(-1).if(i),o("buildingsPrivateDemand").byPercent(-1).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return f(15,40,t)}}),Cr=b({title:"D\xE4mmung von Wohngeb\xE4uden f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gef\xF6rdert.",effects(e,t,n){const r=1,i=n-t>2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-2).if(i),o("buildingsSourceOil").byPercent(-2).if(i),o("buildingsSourceTele").byPercent(-2).if(i),o("buildingsPrivateDemand").byPercent(-2).if(i),o("popularity").byValue(5).if(i)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return f(15,40,t)}}),Er=b({title:"D\xE4mmung von Wohngeb\xE4uden sehr stark f\xF6rdern",description:"Die nachtr\xE4gliche D\xE4mmung von Wohngeb\xE4uden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungspl\xE4tze im Handwerk geschaffen durch einen Zuschuss von 500\u20AC pro Monat, damit der zu erwartende Bauboom bew\xE4ltigt werden kann.",effects(e,t,n){const r=3,i=n-t,a=i>=2;return[o("stateDebt").byValue(r),o("buildingsSourceBio").byPercent(-4).if(a),o("buildingsSourceOil").byPercent(-4).if(a),o("buildingsSourceTele").byPercent(-4).if(a),o("buildingsPrivateDemand").byPercent(-4).if(a),o("popularity").byValue(10).if(i===1),o("popularity").byValue(5).if(a)]},priority(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return f(15,40,t)},citations:[],details:s`

  `,internals:s`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `}),Wr=b({title:"D\xE4mmung von Wohngeb\xE4uden abschaffen",description:"Wir geben den B\xFCrgern die Freiheit zur\xFCck, selbst zu entscheiden, ob sie ihr Haus d\xE4mmen wollen und lassen die F\xF6rderung auslaufen",effects(){return[o("stateDebt").byValue(-.5),o("buildingsSourceBio").byPercent(-.5),o("buildingsSourceOil").byPercent(-.5),o("buildingsSourceTele").byPercent(-.5),o("buildingsPrivateDemand").byPercent(-.5)]},priority(e){const t=Di(e.acceptedLaws,/^DaemmungAltbau/);if(!t||t==="DaemmungAltbauAbschaffen")return 0;const n=e.values.co2emissionsBuildings/e.values.co2emissions*100;return f(15,40,n)}}),Lr=b({title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit st\xE4rker bezuschusst.",effects(e,t,n){const r=e.values.publicLocalCapacity/e.values.publicLocalUsage*100,i=n-t;return[o("stateDebt").byValue(3),o("publicLocalCapacity").byPercent(1),P("publicLocalUsage","carUsage").byPercent(1).if(r>=105),o("popularity").byValue(2).if(i>=5)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return f(150,80,t)},citations:[ot],details:s`

  `,internals:s`
    # Happy Path 18

    # Folgen

    - Der Staatshaushalt wird jährlich mit 3 Mrd € mehr belastet. (${A(ot)})
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
  `}),Tr=b({title:"Nahverkehr Modernisieren",description:"Anschaffung Moderner, bequemer, emissionsfreier Fahrzeuge f\xFCr den Nahverkehr wird gef\xF6rdert.",effects(e,t,n){return[o("stateDebt").byValue(3),o("publicLocalCapacity").byPercent(1),P("publicLocalUsage","carUsage").byPercent(1),o("popularity").byValue(3)]},priority(e){if(!p(e,"FernverkehrModernisieren"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return f(0,24,t)},citations:[Se],details:s`

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
  `}),Vr=b({title:"F\xF6rderung f\xFCr Tierhaltung abschaffen",description:"Subventionen f\xFCr Tierhaltung werden ersatzlos gestrichen",effects(e,t,n){return[o("stateDebt").byValue(-10),o("co2emissionsAgriculture").byValue(-10).if(t===n),o("popularity").byValue(-20).if(t===n)]},priority(e){return f(1e4,0,e.values.unemployment)}}),Or=b({title:"Nahverkehr Kostenlos",description:"Die Kosten f\xFCr den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr ben\xF6tigt werden.",effects(e,t,n){const r=t===n?10:1;return[o("stateDebt").byValue(10),P("publicLocalUsage","carUsage").byPercent(r),o("popularity").byValue(10).if(t===n),o("unemployment").byValue(20).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return f(90,120,t)},citations:[Se],details:s`

  `,internals:s`
    # Happy Path 19

    # Folgen

    - Der Staatshaushalt wird jährlich mit 10 Mrd € stärker belastet.
        - 13.3 Mrd € Ticketeinnahmen pro Jahr (${A(Se)})
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
  `}),$r=b({title:"Autos in Innenst\xE4dten verbieten",description:"Die Innenst\xE4dte der gro\xDFen St\xE4dte werden zu Autofreien Zonen erkl\xE4rt und begr\xFCnt, sowie Fahrrad und Fu\xDFg\xE4ngerzonen eingerichtet.",effects(e,t,n){var r=-2;return e.values.publicLocalCapacity>e.values.publicLocalUsage*1.2&&(r=-1,t+2<n&&(r=2)),[o("popularity").byValue(r),P("publicLocalUsage","carUsage").byPercent(10).if(t===n)]},priority(e){const t=e.values.publicLocalCapacity/e.values.publicLocalUsage*100;return f(90,120,t)}}),xr=b({title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des \xF6ffentlichen Fernverkehrs wird bundesweit st\xE4rker Bezuschusst und Vorangetrieben",effects(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return[o("stateDebt").byValue(6),o("publicNationalCapacity").byPercent(1),P("publicNationalUsage","carUsage").byPercent(1).if(t>=105),P("publicNationalUsage","carUsage").byPercent(.5).if(t>=105),o("popularity").byValue(2).if(t>=105)]},priority(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100;return f(150,80,t)},citations:[],details:s`

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
  `}),Ir=b({title:"Fernverkehr Modernisieren",description:"Moderne, bequeme und weniger anf\xE4llige Z\xFCge werden f\xFCr den Fernverkehr angeschafft.",effects(e,t,n){return[o("stateDebt").byValue(3),o("publicNationalCapacity").byPercent(1),P("publicNationalUsage","carUsage").byPercent(1),o("popularity").byValue(3)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return f(0,24,t)},citations:[],details:s`

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
  `}),Mr=b({title:"Wasserstofftechnologie f\xF6rdern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie und zur effizienten Wasserstoffgewinnung wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effects(e,t,n){const r=n<t+5,i=n>=t+5;return[o("stateDebt").byValue(2).if(r),o("carRenewablePercentage").byValue(1).if(i)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return f(40,90,r)},citations:[],details:s`

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
  `}),Br=b({title:"Wasserstoffmobilit\xE4t f\xF6rdern",description:"Wasserstoffbasierte Fahrzeuge werden gef\xF6rdert.",effects(e,t,n){return p(e,"WasserstofftechnologieFoerdern")?[o("stateDebt").byValue(3),o("carRenewablePercentage").byValue(1),o("popularity").byValue(1).if(t===n)]:[]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return f(0,26,t)},citations:[],details:s`

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
  `}),Nr=b({title:"Abschaffung der Mineral\xF6lsteuer",description:"Die Steuer auf s\xE4mtliche erd\xF6lbasierten Treibstoffe wird abgeschafft.",effects(e,t,n){return[o("stateDebt").byValue(41),o("popularity").byValue(5).if(t===n),o("popularity").byValue(-3).if(t<n),P("publicLocalUsage","carUsage").byPercent(-20).if(t===n),P("publicNationalUsage","carUsage").byPercent(-20).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return f(60,100,r)},citations:[it],details:"",internals:s`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${A(it)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `}),Ur=b({title:"Ausbau von Stra\xDFen",description:"Autobahnen und Stra\xDFen werden intensiver ausgebaut.",effects(e){return[o("stateDebt").byValue(5),o("popularity").byValue(.5),P("publicLocalUsage","carUsage").byPercent(-1),P("publicNationalUsage","carUsage").byPercent(-1)]},priority(e){const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return f(60,100,n)}}),Gr=b({title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effects(e,t,n){return[o("stateDebt").byValue(-7.35),o("popularity").byValue(-1).if(t===n)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return f(10,100,r)}}),Kr=b({title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen f\xFCr Dienstwagen werden abgeschafft.",effects(e,t,n){return[o("stateDebt").byValue(-18),o("popularity").byValue(-1).if(t===n),P("carUsage","publicLocalUsage").byPercent(-.05)]},priority(e){const t=e.values,r=t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100;return f(50,100,r)},citations:[st,ct],details:s`

  `,internals:s`
    # Happy Path 20

    Zunächst sollte Nah- und Fernverkehr attraktiver gemacht werden.
    TODO: Folgen sollten davon abhängen, ob es attraktive Alternativen gibt.

    # Folgen

    - Steuermehreinnahmen: 18 mrd€ / Jahr (${A(st)})
    - -0.05% Fahleistung pro Jahr (Anreiz für Auto fällt weg Gebrauchte Wagen werden teuerer).
        - ${A(ct)} sagt es gibt keine echte Schätzung dafür.
    - Entsprechend mehr Nahverkehrnutzung
    - Zufriedenheit sinkt einmalig um 1%

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 50%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `}),Jr=b({title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=o("carEmissionFactor").setValue(157.9),n=t.getChange(e.values);return[o("popularity").byValue(2).if(n<0),t]},priority(e){if(p(e,"Tempolimit100AufAutobahnen")||p(e,"Tempolimit120AufAutobahnen")||p(e,"TempolimitAufAutobahnenAussitzen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return f(10,100,n)}}),Hr=b({title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=o("carEmissionFactor").setValue(157.1),n=t.getChange(e.values);return[o("popularity").byValue(2).if(n<0),t]},priority(e){if(!p(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return f(10,100,n)}}),jr=b({title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=o("carEmissionFactor").setValue(154.1),n=t.getChange(e.values);return[o("popularity").byValue(-1).if(n<0),t]},priority(e){if(!p(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return f(10,100,n)}}),Rr=b({title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das k\xF6nnte zwar Strafen oder gar Zwangsma\xDFnahmen bewirken, aber das Risiko der gef\xE4hrdeten Wiederwahl ist zu gro\xDF.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(){return[o("stateDebt").byValue(-10),o("popularity").byValue(-2)]},priority(e){if(p(e,"Tempolimit100AufAutobahnen")||p(e,"Tempolimit120AufAutobahnen")||p(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values,n=t.carUsage/t.passengerTransportUsage*100;return f(10,100,n)}}),Zr=b({title:"Elektromobilit\xE4t F\xF6rdern",description:"H\xF6here Kaufpr\xE4mien, Steuerbefreiung, g\xFCnstiges Laden f\xFCr E-Autos.",effects(e,t,n){return p(e,"LadeinfrastrukturAusbauen")?[o("stateDebt").byValue(5),o("carRenewablePercentage").byValue(1),o("popularity").byValue(4).if(t===n)]:[]},priority(e){if(!p(e,"LadeinfrastrukturAusbauen"))return 0;const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return f(0,25,t)},citations:[],details:s`

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
  `}),qr=b({title:"Ladeinfrastruktur ausbauen",description:"Ausbau der Ladeinfrastruktur wird mit Steuermitteln stark gef\xF6rdert.",effects(e,t,n){return[o("stateDebt").byValue(5),o("carRenewablePercentage").byValue(1),o("popularity").byValue(2).if(t===n)]},priority(e){const t=e.values.co2emissionsMobility/e.values.co2emissions*100;return f(0,25,t)},citations:[Se],details:s`

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
  `}),Qr=b({title:"Windkraft vereinfachen",description:"Genehmigungen f\xFCr Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effects(e,t,n){return[]},priority(e){return f(80,27,Y(e))},citations:[],details:s`

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
  `}),Yr=b({title:"Abstandsregeln f\xFCr Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem \xFCber Abst\xE4nde zwischen den Windkraftanlagen und Wohngeb\xE4uden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,n){const r=p(e,"WindkraftVereinfachen")?0:5;return[o("electricityWindOnshoreMaxNew").setValue(6).if(n>=t+r)]},priority(e){return p(e,"AbstandsregelnFuerWindkraftLockern")?f(30,100,Y(e)):p(e,"AbstandsregelnFuerWindkraftVerschaerfen")?f(70,27,Y(e)):0}}),Xr=b({title:"Abstandsregeln f\xFCr Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln f\xFCr Windkraftanlagen sowie Bauerlaubniss in W\xE4ldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,n){const r=p(e,"WindkraftVereinfachen")?0:5;return[o("popularity").byValue(-3).if(t===n),o("electricityWindOnshoreMaxNew").setValue(30).if(n>=t+r)]},priority(e){return p(e,"AbstandsregelnFuerWindkraftWieBisher")?f(70,27,Y(e)):p(e,"AbstandsregelnFuerWindkraftAbschaffen")?f(30,100,Y(e)):0},citations:[],details:s`

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
  `}),ei=b({title:"Abstandsregeln f\xFCr Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,n){const r=p(e,"WindkraftVereinfachen")?0:5;return[o("popularity").byValue(-40).if(t===n),o("electricityWindOnshoreMaxNew").setValue(1e3).if(n>=t+r)]},priority(e){return p(e,"AbstandsregelnFuerWindkraftLockern")?f(80,25,Y(e)):0}}),ti=b({title:"Abstandsregeln f\xFCr Windkraft versch\xE4rfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngeb\xE4uden im Innenbereich muss das Zehnfache der Gesamth\xF6he der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,n){return[o("popularity").byValue(5).if(t===n),o("electricityWindOnshoreMaxNew").setValue(.42)]},priority(e){return p(e,"AbstandsregelnFuerWindkraftWieBisher")?f(0,100,Y(e)):0}}),ni=b({title:"Ausschreibungsverfahren f\xFCr Windkraft wie zu Beginn",description:"Windkraft Betreiber k\xF6nnen sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstm\xF6glichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,n){const r=p(e,"WindkraftVereinfachen")?0:5,i=Math.min(6.9,e.values.electricityWindOnshoreMaxNew),a=1.2;return[o("electricityWind").byValue((i+a)*e.values.electricityWindEfficiency/100).if(n>=t+r)]},priority(e){return p(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?f(60,100,B(e)):0}}),ri=b({title:"Ausschreibungsverfahren f\xFCr Windkraft verdoppeln",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,n){const r=p(e,"WindkraftVereinfachen")?0:5,i=Math.min(13.8,e.values.electricityWindOnshoreMaxNew),a=2.4;return[o("popularity").byValue(-1).if(t===n),o("unemployment").byValue(-20).if(t===n),o("electricityWind").byValue((i+a)*e.values.electricityWindEfficiency/100).if(n>=t+r)]},priority(e){return p(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?f(100,50,B(e)):p(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?f(40,100,B(e)):0}}),ii=b({title:"Ausschreibungsverfahren f\xFCr Windkraft vervierfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,n){const r=p(e,"WindkraftVereinfachen")?0:5,i=Math.min(27.6,e.values.electricityWindOnshoreMaxNew),a=4.8;return[o("popularity").byValue(-2).if(t===n),o("unemployment").byValue(-100).if(t===n),o("electricityWind").byValue((i+a)*e.values.electricityWindEfficiency/100).if(n>=t+r)]},priority(e){return p(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?f(100,50,B(e)):p(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?f(0,100,B(e)):0},citations:[],details:s`
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
  `}),si=b({title:"Ausschreibungsverfahren f\xFCr Windkraft verachtfachen",description:"Der j\xE4hrlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,n){const r=p(e,"WindkraftVereinfachen")?0:5,i=Math.min(55.2,e.values.electricityWindOnshoreMaxNew),a=9.6;return[o("popularity").byValue(-20).if(t===n),o("unemployment").byValue(-100).if(t===n),o("electricityWind").byValue((i+a)*e.values.electricityWindEfficiency/100).if(n>=t+r)]},priority(e){return p(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?f(100,50,B(e)):0}}),ai=b({title:"CO2 Preis Erh\xF6hen",description:"Die Preise werden schneller erh\xF6ht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,n){const r=le(50,0,B(e),-1),i=le(50,0,e.values.carRenewablePercentage,-1),a=-.5;return[o("stateDebt").byValue(-45/1e3*e.values.co2emissions).if(n>=t+2),o("stateDebt").byValue(-30/1e3*e.values.co2emissions).if(n>=t+4),o("popularity").byValue(r+i),o("co2emissionsIndustry").byPercent(a),o("co2emissionsAgriculture").byPercent(a),o("co2emissionsOthers").byPercent(a),P("electricityBrownCoal","electricityWind").byPercent(.7*a),P("electricityHardCoal","electricityWind").byPercent(.7*a),P("electricityBrownCoal","electricitySolar").byPercent(.3*a),P("electricityHardCoal","electricitySolar").byPercent(.3*a),P("buildingsSourceOil","buildingsSourceBio").byPercent(a),P("carUsage","publicNationalUsage").byPercent(.5*a),P("carUsage","publicLocalUsage").byPercent(.5*a)]},priority(e){return p(e,"VollerCO2Preis")||p(e,"WirksamerCO2Preis")?0:50},citations:[dt],details:s`

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
  `}),oi=b({title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,n){const r=le(80,50,B(e),-3),i=le(80,50,e.values.carRenewablePercentage,-3),a=-2;return[o("stateDebt").byValue(-125/1e3*e.values.co2emissions),o("popularity").byValue(r+i),o("co2emissionsIndustry").byPercent(a),o("co2emissionsAgriculture").byPercent(a),o("co2emissionsOthers").byPercent(a),P("electricityBrownCoal","electricityWind").byPercent(.7*a),P("electricityHardCoal","electricityWind").byPercent(.7*a),P("electricityBrownCoal","electricitySolar").byPercent(.3*a),P("electricityHardCoal","electricitySolar").byPercent(.3*a),P("buildingsSourceOil","buildingsSourceBio").byPercent(a),P("carUsage","publicNationalUsage").byPercent(.5*a),P("carUsage","publicLocalUsage").byPercent(.5*a)]},priority(e){return p(e,"CO2PreisErhoehen")?50:0},citations:[dt],details:s`

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
  `}),li=b({title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,n){const r=le(90,50,B(e),-10),i=le(90,50,e.values.carRenewablePercentage,-10),a=-5;return[o("stateDebt").byValue(-3*e.values.co2emissions),o("popularity").byValue(r+i),o("co2emissionsIndustry").byPercent(a),o("co2emissionsAgriculture").byPercent(a),o("co2emissionsOthers").byPercent(a),P("electricityBrownCoal","electricityWind").byPercent(.7*a),P("electricityHardCoal","electricityWind").byPercent(.7*a),P("electricityBrownCoal","electricitySolar").byPercent(.3*a),P("electricityHardCoal","electricitySolar").byPercent(.3*a),P("buildingsSourceOil","buildingsSourceBio").byPercent(a),P("carUsage","publicNationalUsage").byPercent(.5*a),P("carUsage","publicLocalUsage").byPercent(.5*a)]},priority(e){return p(e,"WirksamerCO2Preis")?50:0},citations:[Pn],details:s`

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
  `}),ui=b({title:"Solarstrom F\xF6rderung einstellen",description:"Mittlere bis gro\xDFe Solaranlagen sollten sich selbst tragen. Die F\xF6rderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects(){return[o("electricitySolar").byValue(2)]},priority(e){return p(e,"SolarstromFoerderungWieZuBeginn")?f(0,100,B(e)):0},details:s`

  `}),ci=b({title:"Solarstrom F\xF6rderung wie zu Beginn",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen wie bisher",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects(){return[o("electricitySolar").byValue(5)]},priority(e){return p(e,"SolarstromFoerdernx8")?f(70,100,B(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),di=b({title:"Solarstrom F\xF6rderung x2",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects(e,t,n){return[o("popularity").byValue(10).if(t===n),o("unemployment").byValue(-31e3).if(t===n),o("electricitySolar").byValue(10)]},priority(e){return p(e,"SolarstromFoerderungWieZuBeginn")?f(100,30,B(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `}),hi=b({title:"Solarstrom F\xF6rderung x4",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects(e,t,n){return[o("popularity").byValue(20).if(t===n),o("unemployment").byValue(-89e3).if(t===n),o("electricitySolar").byValue(20)]},priority(e){return p(e,"SolarstromFoerdernx2")?f(100,30,B(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:s`
    # Happy path 10

    ${A(ye)}
  `,citations:[ye]}),mi=b({title:"Solarstrom F\xF6rderung x8",description:"Subventionierung f\xFCr mittlere bis gro\xDFe Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects(e,t,n){return[o("popularity").byValue(-10).if(t===n),o("unemployment").byValue(-209e3).if(t===n),o("electricitySolar").byValue(40)]},priority(e){return p(e,"SolarstromFoerdernx4")?f(100,30,B(e)):0},details:s`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `}),gi=b({title:"Solar auf neuen D\xE4chern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die D\xE4cher.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects(e,t,n){return[o("popularity").byValue(-3).if(t===n),o("electricitySolar").byValue(2)]},priority(e){return p(e,"SolarstromFoerderungWieZuBeginn")?f(100,30,B(e)):0},details:s`

  `,internals:s`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `}),pi=b({title:"Forschung und Entwicklung zur Stromspeicherung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effects(e,t,n){const r=n<t+5,i=n>=t+3;return[o("stateDebt").byValue(2).if(r),o("electricityGridQuality").byValue(.2).if(i)]},priority(e){const t=e.values;return f(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),fi=b({title:"Forschung zur emissionsfreien Stahlproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Stahl mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effects(e,t,n){const r=n<t+5,i=n>=t+3,a=p(e,"WasserstofftechnologieFoerdern",3)?B(e)-70:0,c=p(e,"WirksamerCO2Preis");return[o("stateDebt").byValue(2).if(r),o("co2emissionsIndustry").byValue(-2).if(i),o("co2emissionsIndustry").byValue(-2).if(c),o("co2emissionsIndustry").byValue(-a).if(a>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return f(0,80,n)},citations:[],details:s`

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
  `}),bi=b({title:"Forschung zur emissionsfreien Zementproduktion f\xF6rdern",description:"Forschung und Entwicklung von Technologien zur Produktion von Zement mit stark reduzierten CO2-Emissionen wird stark gef\xF6rdert. 10 Mrd \u20AC \xFCber 5 Jahre.",effects(e,t,n){const r=n<t+5,i=n>=t+3,a=p(e,"WasserstofftechnologieFoerdern",3)?B(e)-70:0,c=p(e,"WirksamerCO2Preis");return[o("stateDebt").byValue(2).if(r),o("co2emissionsIndustry").byValue(-2).if(i),o("co2emissionsIndustry").byValue(-2).if(c),o("co2emissionsIndustry").byValue(-a).if(a>0)]},priority(e){const t=e.values,n=t.co2emissionsIndustry/t.co2emissions*100;return f(0,80,n)},citations:[],details:s`

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
  `}),vi=b({title:"Erforschung und Umsetzung dezentraler Stromerzeugung f\xF6rdern",description:"Ein F\xF6rderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur f\xFCr die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd \u20AC \xFCber 5 Jahre.",effects(e,t,n){const r=n<t+5,i=n>=t+1;return[o("stateDebt").byValue(2).if(r),o("electricityGridQuality").byValue(1).if(i)]},priority(e){const t=e.values;return f(80,45,t.electricityGridQuality)},citations:[],details:s`

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
  `}),wi=b({title:"Test",description:"Unsinniges Gesetz zum Testen.",effects(e,t,n){return[o("popularity").byPercent(50).if((n-t)%3!=0),o("popularity").byPercent(-50).if((n-t)%3==0),o("stateDebt").byPercent(-200).if(n===t),o("stateDebt").byPercent(50).if((n-t)%3!=0),o("stateDebt").byPercent(-50).if((n-t)%3==0),o("stateDebt").byPercent(-200).if(n===t+10)]},priority(e){return 0},citations:[],details:s`

  `,internals:s`

  `});const kt={AllesBleibtBeimAlten:dn,InitialAtomausstieg:Pr,KohleverstromungEinstellen:yr,EnergiemixRegeltDerMarkt:kr,KernenergienutzungVerlaengern:Sr,NetzausbauErleichtern:Dr,NetzausbauFoerdern:_r,ForschungUndEntwicklungStromspeicherung:pi,StromspeicherungErleichtern:Ar,StromspeicherungFoerdern:zr,ForschungDezentraleStromerzeugung:vi,WindkraftVereinfachen:Qr,AbstandsregelnFuerWindkraftVerschaerfen:ti,AbstandsregelnFuerWindkraftWieBisher:Yr,AbstandsregelnFuerWindkraftLockern:Xr,AbstandsregelnFuerWindkraftAbschaffen:ei,AusschreibungsverfahrenfuerWindkraftWieBisher:ni,AusschreibungsverfahrenfuerWindkraftVerdoppeln:ri,AusschreibungsverfahrenfuerWindkraftVervierfachen:ii,AusschreibungsverfahrenfuerWindkraftVerachtfachen:si,SolarstromFoerderungAbschaffen:ui,SolarstromFoerderungWieZuBeginn:ci,SolarstromFoerdernx2:di,SolarstromFoerdernx4:hi,SolarstromFoerdernx8:mi,SolarAufAllenDaechernVerpflichtend:gi,DaemmungAltbau1Percent:Fr,DaemmungAltbau2Percent:Cr,DaemmungAltbau4Percent:Er,DaemmungAltbauAbschaffen:Wr,NahverkehrKostenlos:Or,AutosInInnenstaedtenVerbieten:$r,WasserstofftechnologieFoerdern:Mr,WasserstoffmobilitaetFoerdern:Br,NahverkehrAusbauen:Lr,NahverkehrModernisieren:Tr,FernverkehrVerbindungenAusbauen:xr,FernverkehrModernisieren:Ir,AusbauVonStrassen:Ur,AbschaffungDerMineraloelsteuer:Nr,DieselPrivilegAbgeschaffen:Gr,DienstwagenPrivilegAbgeschaffen:Kr,Tempolimit130AufAutobahnen:Jr,Tempolimit120AufAutobahnen:Hr,Tempolimit100AufAutobahnen:jr,TempolimitAufAutobahnenAussitzen:Rr,ElektromobilitaetFoerdern:Zr,LadeinfrastrukturAusbauen:qr,FoerderungFuerTierhaltungAbschaffen:Vr,CO2PreisErhoehen:ai,WirksamerCO2Preis:oi,VollerCO2Preis:li,ForschungEmissionsfreieStahlproduktion:fi,ForschungEmissionsfreieZementproduktion:bi,Test:wi},yi=Object.keys(kt);function ki(e){return nt(e).map(t=>M(z({},t),{effort:t.effort||un}))}const re=ki(kt);function Si(e){const t=re.find(n=>n.id===e);if(t)return t;throw Error(`Law #${e} not found`)}function Pe(e){const t=Si(e.lawId);if(t)return M(z({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function De(e){return e.map(t=>{const n=re.find(r=>r.id===t);return n||console.error(`Inconsistency: Proposed law #${t} not found`),n}).filter(t=>t)}const Pi=(e,t,n)=>Object.fromEntries(e.map(r=>{const i=t(r),a=Object.fromEntries(pt.map(c=>[c,n(r,i,c)]));return[r.id,a]}));function f(e,t,n){const r=n-e,i=t-e;if(i===0)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return r/i*100}function le(e,t,n,r){return Math.max(0,f(e,t,n))/100*r}function p(e,t,n=0){if(!re.map(r=>r.id).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some(r=>r.lawId===t&&r.effectiveSince<=e.currentYear+n)}function Di(e,t){const n=e.sort((r,i)=>i.effectiveSince-r.effectiveSince).find(r=>t.test(r.lawId));return n==null?void 0:n.lawId}function Y(e){const t=e.values;return t.electricityWindUsable/t.electricityDemand*100}function B(e){return(e.values.electricityWindUsable+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}var _i=W({title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es f\xFCr unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply(){return[]},probability(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return Math.min(1,f(15,30,t)/100)}});function St(e){return e.find(t=>t.title.match(/subvention/i)&&t.title.match(/abbau/i))}var Ai=W({title:"Anruf von befreundetem Unternehmer",description:`Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und m\xF6chte dich in seine
    Ferienvilla auf Sardinien einladen. Er verl\xE4sst sich nat\xFCrlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,apply(e){if(e){const t=St(De(e.proposedLaws));if(t)return[ne("rejectLaw",{lawId:t.id})]}return[]},probability(e){return St(De(e.proposedLaws))?.5:0}}),zi=W({title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute \xFCber die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply(){return[]}}),Fi=W({title:"Zusammenbruch des Finanzsystems",description:`Deine Staatsfinanzen sind desastr\xF6s. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zur\xFCckahlen k\xF6nnen. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    k\xF6nntest. Das Spiel ist damit leider beendet.
  `,apply(){return[ne("gameOver")]},probability(e){return e.values.stateDebt>ae.stateDebt*2?pe.finanzKollaps:0}}),Ci=W({title:"Hitzeh\xF6lle",description:`Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen K\xFCstenregionen
  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr w\xE4chst.
  Um die verbleibdenden Teile sind erbitterte K\xE4mpfe ausgebrochen.
  `,apply(){return[ne("gameOver")]},probability(e){return e.values.co2budget<=0?pe.hitzehoelle:0}}),Ei=W({title:"Happy New Year!",description:`Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen T\xE4tigkeit aufgestellt
    und kommt zu dem nicht weiter \xFCberraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht \xFCberraschend - sieht die Sache anders und verurteilt die Regierungserkl\xE4rung als haltlos.
  `,apply(){return[ne("advanceYear")]},probability(e){return ve(e.currentDate).getYear()>e.currentYear?pe.newYear:0}}),Wi=W({title:"Social Media Alarm!",description:`Deine Wahlkampfberaterin ruft dich v\xF6llig aufgel\xF6st an. Ob denn an den Geschichten was dran sein, die da im
    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.
    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.
  `,apply(){return[o("popularity").byPercent(-20)]}}),Li=W({title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland m\xFCssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply(){return[]}}),Ti=W({title:"Du hast durchgehalten",description:`Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,
    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Ma\xDFnahmen waren zu finanzieren
    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!
  `,apply(){return[ne("gameOver")]},probability(e){return e.currentYear===2050?pe.timesUp:0}}),Vi=W({title:"Wahl verloren",description:`Deine Beliebtheit in der Bev\xF6lkerung ist katastrophal, lieber w\xFCrde man Mao Zedong w\xE4hlen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du geh\xF6rst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon l\xE4nger kein vern\xFCnftiger Mensch mehr geglaubt.
  `,apply(){return[ne("gameOver")]},probability(e){return e.values.popularity<=0?pe.wahlVerloren:0}}),Oi=W({title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply(){return[]},citations:[],details:s`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:s`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `}),$i=W({title:"B\xFCrgerinitiative fordert st\xE4rkere Solarf\xF6rderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungWieZuBeginn","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply(){return[]},probability(e){const t=p(e,"SolarstromFoerderungAbschaffen"),n=p(e,"SolarstromFoerderungWieZuBeginn"),r=p(e,"SolarstromFoerdernx2");return t||n||r?.5:0},citations:[rt],details:s`

  `,internals:s`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${A(rt)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}),xi=W({title:"Atom-Katastrophe",description:"Atomkraftwerk Tihange fliegt in die Luft",apply(){return[ne("gameOver")]},probability(e){return e.acceptedLaws.find(n=>n.lawId==="KernenergienutzungVerlaengern")?.5:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Ii=W({title:"Staatsoberhaupt verstorben",description:"Du stirbst an der neuen BSE Variante. Tja, h\xE4ttest du dich mal besser um das Tierwohl gek\xFCmmert...",apply(){return[ne("gameOver")]},probability(e){return De(e.acceptedLaws.map(n=>n.lawId)).find(n=>n.title.match(/tierwohl/i))?0:.5},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Mi=W({title:"D\xFCrreperiode",description:"Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausf\xE4lle sind enorm.",apply(){return[o("gdp").byValue(-100),o("popularity").byValue(-10)]},probability(e){return Math.min(1,f(400,0,e.values.co2budget)/100)},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Bi=W({title:"PR-Skandal",description:"Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und f\xFChrt zu einer neuen Diskussion \xFCber Lobbyismus.",apply(){return[o("popularity").byValue(-2)]},probability(e){return p(e,"WirksamerCO2Preis")||p(e,"KohleverstromungEinstellen")?0:.3},laws:[],citations:[],details:s`

  `,internals:s`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `}),Ni=W({title:"PR-Skandal",description:"Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.",apply(){return[o("popularity").byValue(-2)]},probability(){return .3},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Ui=W({title:"Klimafl\xFCchtlinge",description:"Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimafl\xFCchtlingen - auch in Deutschland. Das Kostet die Staatskasse.",apply(){return[o("stateDebt").byValue(10)]},probability(e){return e.values.co2budget<500?.2:0},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Gi=W({title:"Plagiatsaff\xE4re",description:"W\xE4hrend des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet W\xE4hlerstimmen.",apply(){return[o("popularity").byValue(-10)]},probability(e){return .5},laws:[],citations:[],details:s`

  `,internals:s`

  `}),Ki=W({title:"Debatte \xFCber CO2-Preise",description:"Eine marktliberale Kampagne ist sehr erfolgreich darin, Dich als Verbots-Kanzler hinzustellen. Aus allen Richtungen prasseln Forderungen nach einem ad\xE4quaten CO2-Preis auf Dich ein. Nur leider gehen die Vorstellungen \xFCber den genauen Preis sehr weit auseinander.",laws:["CO2PreisErhoehen","WirksamerCO2Preis","VollerCO2Preis"],apply(){return[]},probability(e){const t=(p(e,"AutosInInnenstaedtenVerbieten")?1:0)+(p(e,"KohleverstromungEinstellen")?1:0)+(p(e,"SolarAufAllenDaechernVerpflichtend")?1:0)+(p(e,"Tempolimit130AufAutobahnen")?1:0)+(p(e,"Tempolimit120AufAutobahnen")?1:0)+(p(e,"Tempolimit100AufAutobahnen")?1:0);return f(1,3,t)/100}});const Ji={AbstandsregelnWindkraft:ln,Altbausanierung:_i,Bestechung:Ai,EnergieStrategie:zi,FinanzKollaps:Fi,Hitzehoelle:Ci,NewYear:Ei,SocialMedia:Wi,TempolimitAufAutobahnen:Li,TimesUp:Ti,WahlVerloren:Vi,WindkraftAusschreibung:Oi,SolarstromFoerderung:$i,AtomKatastrophe:xi,BSE:Ii,Duerrewelle:Mi,PRKohleindustrie:Bi,PRInnenminister:Ni,Klimafluechtlinge:Ui,Plagiatsaffaere:Gi,CO2PreisDebatte:Ki},Hi=()=>.5,_e=nt(Ji).map(e=>M(z({},e),{probability:e.probability||Hi})),Pt={currentDate:sn,currentYear:se,values:ae,acceptedLaws:[],proposedLaws:[],rejectedLaws:[],events:[],over:!1,prngState:{}};function xe(e=Pt,t=Kt()){return{id:t,currentDate:e.currentDate,currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:oe(e.values),events:e.events,over:e.over,prngState:{}}}function Dt(e=re,t=Pt){const n=xe(t);return n.acceptedLaws=e.filter(r=>{var i;return(i=r.labels)==null?void 0:i.includes("initial")}).map(r=>({lawId:r.id,effectiveSince:n.currentYear})),n}const ue=[...Array(qe-se+1).keys()].map(e=>e+se);function ji(e,t){const n={lawId:e,effectiveSince:t.currentYear+1},r=Pe(n),i=r.effort(t);t.currentDate=ve(t.currentDate).plus(i.time).toJSON();const a=r.removeLawsWithLabels,c=t.acceptedLaws.map(Pe).filter(m=>!(a==null?void 0:a.some(d=>{var v;return(v=m.labels)==null?void 0:v.includes(d)}))).map(m=>({lawId:m.id,effectiveSince:m.effectiveSince}));return t.acceptedLaws=[...c,n],Ie(t)}function Ri(e){return e.currentDate=ve(e.currentDate).plus(an).toJSON(),Ie(e)}function Ie(e,t=re,n=_e,r=Xe){const i=Zi(e,n,r);if(i){const c={id:i.id,occuredIn:e.currentYear,acknowledged:!1};e.events.unshift(c)}const a=es(e,t,(i==null?void 0:i.laws)?i.laws:[]);return e.proposedLaws=ts(e.proposedLaws,a),i}function Zi(e,t,n){const r=qi(e,t),i=Qi(r);if(i)return i;const a=Yi(r);return Xi(a,n())}function qi(e,t){return t.map(n=>M(z({},n),{prob:n.probability(e)})).filter(n=>n.prob>0)}function Qi(e){return e.filter(t=>t.prob>1).reduce((t,n)=>n.prob>((t==null?void 0:t.prob)||0)?n:t,void 0)}function Yi(e){const t=e.map(r=>r.prob).reduce((r,i)=>r+i,0),n=on/t;return e.map(r=>M(z({},r),{prob:r.prob*n}))}function Xi(e,t){for(const n of e)if(t-=n.prob,t<0)return n}function es(e,t,n){const r=d=>{var v;return(v=e.acceptedLaws)==null?void 0:v.some(u=>u.lawId===d.id)},i=d=>{var v;return(v=e.rejectedLaws)==null?void 0:v.includes(d.id)},a=d=>{var v;return((v=d.labels)==null?void 0:v.includes("hidden"))||!1},c=d=>({law:d,priority:d.priority(e)}),m=d=>({law:d.law,priority:d.priority+(n.includes(d.law.id)?100:0)});return t.filter(Te(r)).filter(Te(i)).filter(Te(a)).map(c).filter(d=>d.priority>0).map(m).sort((d,v)=>v.priority-d.priority).map(d=>d.law.id).slice(0,Ye)}function ts(e,t){const n=[...e],r=t.filter(c=>n.includes(c)),i=t.filter(c=>!r.includes(c));for(var a=0;a<n.length;){if(r.includes(n[a])){a++;continue}if(i.length===0){n.splice(a,1);continue}n[a]=i.shift(),a++}return n.push(...i.slice(0,Ye-n.length)),n}function ns(e,t,n){return _t(e,t,n).values}function _t(e,t,n){const r=oe(e.values),i=t.sort((c,m)=>{var d,v;return((d=c.treatAfterLabels)==null?void 0:d.some(u=>{var w;return(w=m.labels)==null?void 0:w.includes(u)}))?1:((v=m.treatAfterLabels)==null?void 0:v.some(u=>{var w;return(w=c.labels)==null?void 0:w.includes(u)}))?-1:0}).filter(c=>c.effectiveSince<=n),a=Pi(i,c=>{const m=wr(r),d=c.effects(M(z({},e),{values:r}),c.effectiveSince,n);return $e({dispatch:()=>{},values:r},d),m},(c,m,d)=>r[d]-m[d]);return r.co2budget-=r.co2emissions,{values:r,effectsOfLaws:a}}function At(e){return Math.max(0,Math.min(100,e))}function rs(e){if(e.values.co2emissions===0)return 100;const n=e.values.co2budget*oe(ae).co2emissions/ae.co2budget/e.values.co2emissions;return At(n*50)}function is(e){const t=e.values.stateDebt/ae.stateDebt;return At(100-t*50)}const ce=[{id:"start",title:"Stell dir vor...",text:s`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du ausw\xE4hlen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die W\xE4hler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine W\xE4hler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];function ss(e,t){return{startGame(n){const r=Dt(),i=Ie(r);t.createGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i}),e.push("/games/"+r.id)},async loadGame(n,r){var i;if(((i=n.state.game)==null?void 0:i.id)!==r.gameId)try{const a=await t.loadGame(r.gameId);t.saveGame(a),e.push("/games/"+a.id+(a.over?"/over":"")),n.commit("setGameState",{game:a})}catch(a){n.dispatch("error",{error:a})}},gameOver(n){var r;n.commit("gameOver",void 0),e.push("/games/"+((r=n.state.game)==null?void 0:r.id)+"/over")},acceptLaw(n,r){const i=z({},n.state.game),a=ji(r.lawId,i);t.saveGame(i),n.commit("setGameState",{game:i}),n.dispatch("applyEvent",{event:a}),t.decisionMade(i,r.lawId,!0)},rejectLaw(n,r){const i=z({},n.state.game);i.rejectedLaws=[...i.rejectedLaws,r.lawId],t.decisionMade(i,r.lawId,!1),t.saveGame(i),n.commit("setGameState",{game:i})},sitOut(n){const r=z({},n.state.game);t.decisionMade(r,"sitOut",!0);const i=Ri(r);t.saveGame(r),n.commit("setGameState",{game:r}),n.dispatch("applyEvent",{event:i})},advanceYear(n){const r=z({},n.state.game),i=r.acceptedLaws.map(Pe);r.currentYear++,r.values=ns(r,i,r.currentYear),t.saveGame(r),n.commit("setGameState",{game:r})},applyEvent(n,r){if(!r.event)return;const i=z({},n.state.game);t.eventOccurred(i,r.event);const a=r.event.apply(i);n.dispatch("applyEffects",{changes:a})},acknowledgeEvent(n,r){const i=z({},n.state.game);i.events.find(a=>a.id===r.id).acknowledged=!0,t.saveGame(i),n.commit("setGameState",{game:i})},applyEffects(n,r){const i={dispatch:n.dispatch,values:oe(n.state.game.values)};$e(i,r.changes);const a=M(z({},n.state.game),{values:i.values});t.saveGame(a),n.commit("setGameState",{game:a})},setupTour(n){const r=localStorage.getItem("tour")||ce[0].id,i=ce.find(a=>r===a.id);i?n.commit("setTour",{step:i.id,active:!0}):n.dispatch("stopTour")},nextTourStep(n){const r=ce.findIndex(i=>n.state.tour.step===i.id);if(r<0||r==ce.length-1)n.dispatch("stopTour");else{const i=ce[r+1];n.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(n){n.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},error(n,r){n.commit("error",r)}}}const as={setGameState(e,t){e.game=t.game},gameOver(e){e.game=M(z({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},os={proposedLaws(e){return!e.game||!e.game.proposedLaws?[]:De(e.game.proposedLaws)}},ls={game:void 0,tour:{active:!0,step:"start"}};var E=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const us=T({props:{law:{type:Object,required:!0},selectable:{type:Boolean,required:!0},numCards:{type:Number,required:!0}},setup(){return{store:X()}},data(){return{accepted:!1}},computed:{zIndex(){return this.law.zIndex},transform(){const e=2*(this.law.pos-this.numCards/2),t=Math.abs(this.numCards/2-this.law.pos)*20;return`rotate(${e}deg) translate(${t}px, -50%)`}},methods:{select(){this.$emit("selected")},accept(){this.accepted=!0},sendAccept(e){e.animationName.match(/^twistOut-/)&&this.$emit("accepted",this.law.id)}}}),cs=e=>(he("data-v-f466f766"),e=e(),me(),e),ds={key:0,type:"radio"},hs=cs(()=>l("br",null,null,-1)),ms={key:0,class:"button-bar"};function gs(e,t,n,r,i,a){return h(),g("div",{class:x(["Law",{accepted:e.accepted}]),style:Fe({zIndex:e.zIndex}),onClick:t[1]||(t[1]=(...c)=>e.select&&e.select(...c)),onAnimationend:t[2]||(t[2]=(...c)=>e.sendAccept&&e.sendAccept(...c))},[l("label",null,[e.selectable?(h(),g("input",ds)):D("",!0),l("div",null,[l("h3",null,k(e.law.title),1),l("div",null,k(e.law.description),1),hs,l("div",null,k(e.law.effortComment),1),e.selectable?(h(),g("div",ms,[l("button",{class:"accept",onClick:t[0]||(t[0]=(...c)=>e.accept&&e.accept(...c))},"\u2713")])):D("",!0)])])],38)}var ps=E(us,[["render",gs],["__scopeId","data-v-f466f766"]]);const fs=T({components:{LawCard:ps},setup(){return{store:X()}},data(){return{zIndexes:[],poppedUp:!1}},computed:M(z({},Jt(["proposedLaws"])),{game(){return this.store.state.game},lawsToShow(){this.zIndexes.length||(this.zIndexes=tt(this.proposedLaws.length,0));const e=this.game;return e===void 0?[]:this.proposedLaws.map((t,n)=>M(z({},t),{zIndex:this.zIndexes[n],pos:n,effortComment:t.effort(e).text}))}}),methods:{accept(e){this.store.dispatch("acceptLaw",{lawId:e})},select(e){this.zIndexes=tt(this.proposedLaws.length,e)},sitOut(){this.store.dispatch("sitOut")}}});function bs(e,t,n,r,i,a){const c=V("LawCard");return h(),g(U,null,[l("div",{class:x(["ProposedLaws",{poppedUp:e.poppedUp}]),onClick:t[0]||(t[0]=m=>e.poppedUp=!0)},[(h(!0),g(U,null,H(e.lawsToShow,(m,d)=>(h(),j(c,{key:m.id,law:m,selectable:e.poppedUp,numCards:e.lawsToShow.length,onAccepted:()=>e.accept(m.id),onSelected:()=>e.select(d)},null,8,["law","selectable","numCards","onAccepted","onSelected"]))),128))],2),l("div",{class:"sitOutButton",onClick:t[1]||(t[1]=()=>e.sitOut())},"Aussitzen")],64)}var vs=E(fs,[["render",bs],["__scopeId","data-v-31cf5972"]]);const ws=T({props:{title:String,text:String},methods:{acknowledge(){this.$emit("acknowledge")}}}),ys={key:0};function ks(e,t,n,r,i,a){return e.text?(h(),g("div",{key:0,onClick:t[0]||(t[0]=(...c)=>e.acknowledge&&e.acknowledge(...c))},[e.title?(h(),g("h2",ys,k(e.title),1)):D("",!0),l("p",null,k(e.text),1)])):D("",!0)}var Ss=E(ws,[["render",ks],["__scopeId","data-v-2df6be4d"]]),Ps="/assets/money-short.7ce9dbed.png",Ds="/assets/money-less.184321f3.png",_s="/assets/money-more.44dccbaa.png",As="/assets/money-much.d486dae1.png";const zs=T({props:{title:{type:String,required:!0},value:{type:Number,required:!0}},computed:{indicatorStyle(){const e=this.value>40?"green":this.value>20?"goldenrod":"red";return{width:this.value+"%",backgroundColor:e}}}}),Fs={class:"container"},Cs={class:"title"},Es={class:"progress-bar"};function Ws(e,t,n,r,i,a){return h(),g("div",Fs,[l("div",Cs,k(e.title),1),l("div",Es,[l("div",{class:"indicator",style:Fe(e.indicatorStyle)},null,4)])])}var Me=E(zs,[["render",Ws],["__scopeId","data-v-c0bc928c"]]);const Ls={id:"finances"},Ts={key:0,src:Ps,id:"short"},Vs={key:1,src:Ds,id:"less"},Os={key:2,src:_s,id:"more"},$s={key:3,src:As,id:"much"},xs=T({props:{value:null},setup(e){const t=e,n=I(()=>t.value),r=I(()=>t.value<20),i=I(()=>t.value>=20&&t.value<50),a=I(()=>t.value>=50&&t.value<80),c=I(()=>t.value>=80);return(m,d)=>(h(),g("div",Ls,[O(Me,{id:"indicator",title:"Finanzen",value:ee(n)},null,8,["value"]),ee(r)?(h(),g("img",Ts)):D("",!0),ee(i)?(h(),g("img",Vs)):D("",!0),ee(a)?(h(),g("img",Os)):D("",!0),ee(c)?(h(),g("img",$s)):D("",!0)]))}});var Is=E(xs,[["__scopeId","data-v-35f23fc5"]]),Ms="/assets/people-happy.acaffc0b.png",Bs="/assets/people-angry.54c1d60c.png";const Ns=T({props:{value:{type:Number,required:!0}},components:{IndicatorBar:Me},computed:{areHappy(){return this.value>=50},areAngry(){return this.value<50}}}),Us={id:"popularity"},Gs={key:0,src:Ms,id:"happy"},Ks={key:1,src:Bs,id:"angry"};function Js(e,t,n,r,i,a){const c=V("IndicatorBar");return h(),g("div",Us,[O(c,{id:"indicator",title:"Beliebtheit",value:e.value},null,8,["value"]),e.areHappy?(h(),g("img",Gs)):D("",!0),e.areAngry?(h(),g("img",Ks)):D("",!0)])}var Hs=E(Ns,[["render",Js],["__scopeId","data-v-4add069c"]]),js="/assets/plant-healthy.97772624.png",Rs="/assets/plant-sick.5a0f1b46.png",Zs="/assets/plant-withered.b50106c7.png";const qs={id:"plant"},Qs=["src","id"],Ys=T({props:{value:null},setup(e){const t=e,n={healthy:js,sick:Rs,withered:Zs},r=I(()=>t.value>66?"healthy":t.value>33?"sick":"withered"),i=I(()=>n[r.value]);return(a,c)=>(h(),g("div",qs,[O(Me,{id:"indicator",title:"CO2-Budget",value:e.value},null,8,["value"]),l("img",{src:ee(i),id:ee(r)},null,8,Qs)]))}});var Xs=E(Ys,[["__scopeId","data-v-3e29c5c0"]]);const ea={id:"calendar"},ta=T({props:{year:null,month:null},setup(e){const t=e,n=I(()=>{const r=Math.floor((t.month-1)/4)*18+27+"%",i=(t.month-1)%4*21+12+"%";return{top:r,left:i}});return(r,i)=>(h(),g("div",ea,[N(k(e.year)+" ",1),l("span",{id:"month-indicator",style:Fe(ee(n))},null,4)]))}});var na=E(ta,[["__scopeId","data-v-78901c78"]]),ra="/assets/heater.43006232.png";const ia={},sa=e=>(he("data-v-c9039a0c"),e=e(),me(),e),aa={id:"heater"},oa=sa(()=>l("img",{src:ra},null,-1)),la=[oa];function ua(e,t){return h(),g("div",aa,la)}var ca=E(ia,[["render",ua],["__scopeId","data-v-c9039a0c"]]),da="/assets/table-top.c87bd2fd.png",zt="/assets/table-front.78c0f8c6.png",Ft="/assets/table-side.49774a53.png";const ha=T({}),fe=e=>(he("data-v-3902beeb"),e=e(),me(),e),ma={id:"table"},ga=fe(()=>l("img",{src:da,id:"table-top"},null,-1)),pa=fe(()=>l("img",{src:zt,id:"table-front"},null,-1)),fa=fe(()=>l("img",{src:zt,id:"table-back"},null,-1)),ba=fe(()=>l("img",{src:Ft,id:"table-left-side"},null,-1)),va=fe(()=>l("img",{src:Ft,id:"table-right-side"},null,-1)),wa=[ga,pa,fa,ba,va];function ya(e,t,n,r,i,a){return h(),g("div",ma,wa)}var ka=E(ha,[["render",ya],["__scopeId","data-v-3902beeb"]]),Sa="/assets/board-front.41330f02.png",Ct="/assets/board-side.d7181ded.png",Pa="/assets/tv-front.82df5c0c.png",Da="/assets/news.c4bbc2d0.png",Et="/assets/tvset-legs.78b387df.png";const _a=T({props:{withNews:Boolean}}),Be=e=>(he("data-v-118e7bdf"),e=e(),me(),e),Aa={id:"tvset"},za=Be(()=>l("div",{id:"board"},[l("img",{id:"board-front",src:Sa}),l("img",{id:"board-left",src:Ct}),l("img",{id:"board-right",src:Ct}),l("div",{id:"board-top"})],-1)),Fa={id:"tv"},Ca=Be(()=>l("img",{id:"tv-front",src:Pa},null,-1)),Ea={key:0,id:"news",src:Da},Wa=Be(()=>l("div",{id:"legs"},[l("img",{id:"legs-front",src:Et}),l("img",{id:"legs-back",src:Et})],-1));function La(e,t,n,r,i,a){return h(),g("div",Aa,[za,l("div",Fa,[Ca,e.withNews?(h(),g("img",Ea)):D("",!0)]),Wa])}var Ta=E(_a,[["render",La],["__scopeId","data-v-118e7bdf"]]);const Va={},Oa={class:"dialog"},$a={class:"buttons"};function xa(e,t,n,r,i,a){return h(),g("div",Oa,[Ce(e.$slots,"default",{},void 0,!0),l("div",$a,[Ce(e.$slots,"buttons",{},void 0,!0)])])}var Wt=E(Va,[["render",xa],["__scopeId","data-v-2419943a"]]);const Ia=T({setup(){const e=X();return e.dispatch("setupTour"),{store:e}},components:{Dialog:Wt},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return ce.find(e=>e.id===this.$store.state.tour.step)},title(){var e;return(e=this.currentStep)==null?void 0:e.title},text(){var e;return(e=this.currentStep)==null?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var n;const t=document.querySelector(".highlighted");t&&t.classList.remove("highlighted"),e&&e.highlight&&((n=document.querySelector(`#${e.highlight}`))==null||n.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}}),Ma=["innerHTML"];function Ba(e,t,n,r,i,a){const c=V("Dialog");return e.title&&e.text?(h(),j(c,{key:0},{buttons:be(()=>[l("button",{onClick:t[0]||(t[0]=(...m)=>e.stop&&e.stop(...m))},"Tour beenden"),l("button",{onClick:t[1]||(t[1]=(...m)=>e.next&&e.next(...m))},"Weiter")]),default:be(()=>[l("h2",null,k(e.title),1),l("div",{innerHTML:e.text},null,8,Ma)]),_:1})):D("",!0)}var Na=E(Ia,[["render",Ba]]);const Ua=T({components:{Calendar:na,ClimateIndicator:Xs,Heater:ca,LawProposals:vs,SpeechBubble:Ss,FinanceIndicator:Is,PopularityIndicator:Hs,Table:ka,Tour:Na,TVSet:Ta},data(){return{store:X()}},computed:{eventToShow(){var n;const e=((n=this.store.state.game)==null?void 0:n.events)||[];if(e.length===0)return;const t=e[0];if(!t.acknowledged)return _e.find(r=>r.id===t.id)},eventTitle(){var e;return((e=this.eventToShow)==null?void 0:e.title)||""},eventText(){var e;return((e=this.eventToShow)==null?void 0:e.description)||""},currentYear(){var e;return((e=this.store.state.game)==null?void 0:e.currentYear)||2021},currentMonth(){var e;return ve((e=this.store.state.game)==null?void 0:e.currentDate).lux.month},finance(){const e=this.store.state.game;return e?is(e):0},popularity(){var e;return((e=this.store.state.game)==null?void 0:e.values.popularity)||100},climate(){const e=this.store.state.game;return e?rs(e):0}},methods:{acknowledge(){this.$store.dispatch("acknowledgeEvent",this.eventToShow)}}}),Ga={class:"game-setup"},Ka=l("h1",null,"#ich-kann-klima",-1),Ja=l("div",{id:"walls"},[l("div",{id:"wall-back"}),l("div",{id:"wall-left"}),l("div",{id:"wall-right"})],-1);function Ha(e,t,n,r,i,a){const c=V("Calendar"),m=V("Heater"),d=V("PopularityIndicator"),v=V("TVSet"),u=V("ClimateIndicator"),w=V("Table"),ie=V("FinanceIndicator"),J=V("LawProposals"),y=V("SpeechBubble"),C=V("Tour");return h(),g("div",Ga,[Ka,Ja,O(c,{year:e.currentYear,month:e.currentMonth},null,8,["year","month"]),O(m),O(d,{value:e.popularity},null,8,["value"]),O(v,{"with-news":!!e.eventText},null,8,["with-news"]),O(u,{value:e.climate},null,8,["value"]),O(w),O(ie,{value:e.finance},null,8,["value"]),O(J),O(y,{title:e.eventTitle,text:e.eventText,onAcknowledge:e.acknowledge},null,8,["title","text","onAcknowledge"]),O(C)])}var ja=E(Ua,[["render",Ha]]);const Ra=T({setup(){const e=X();return{store:e,acceptedLaws:I(()=>{var t;return(t=e.state.game)==null?void 0:t.acceptedLaws})}},data(){return{opened:void 0}},computed:{visibleAccepted(){return re.filter(e=>{var t,n;return((t=this.acceptedLaws)==null?void 0:t.some(r=>r.lawId===e.id))&&!((n=e.labels)==null?void 0:n.includes("hidden"))})}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}}),Za=["onClick"];function qa(e,t,n,r,i,a){return h(!0),g(U,null,H(e.visibleAccepted,(c,m)=>(h(),g("div",{key:m,class:x(["Law",{opened:m===e.opened}]),onClick:d=>e.toggleOpen(m)},[l("h3",null,k(c.title),1),l("div",null,k(c.description),1)],10,Za))),128)}var Qa=E(Ra,[["render",qa],["__scopeId","data-v-aace6332"]]);const Ya=T({components:{GameSetup:ja,AcceptedLaws:Qa},setup(){return{store:X()}},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,n){n(r=>r.startGame(e.params.id))}});function Xa(e,t,n,r,i,a){const c=V("GameSetup");return h(),j(c)}var Lt=E(Ya,[["render",Xa],["__scopeId","data-v-3637ce73"]]);const eo=T({components:{Dialog:Wt},setup(){return{store:X()}},computed:{co2(){var n,r;const e=(n=this.store.state.game)==null?void 0:n.values.co2budget;return((r=this.store.state.game)==null?void 0:r.values.co2emissions)>0?e>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. H\xE4tte die AfD nicht besser hinbekommen.":e>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken k\xF6nnen. Punktlandung."},debt(){var t;return((t=this.store.state.game)==null?void 0:t.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilit\xE4tskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var t;const e=(t=this.store.state.game)==null?void 0:t.values.popularity;return e<20?"entspricht dem, was man von einem langh\xE4hrigen Diktator erwarten kann.":e<50?"ist nicht berauschend, wiedergew\xE4hlt w\xFCrdest du wohl eher nicht.":e<80?"reicht aus, dass du noch l\xE4nger am Ruder bleiben k\xF6nntest. Gratulation!":"ist v\xF6llig unglaubw\xFCrdig - war das wirklich eine freie Wahl?"}},methods:{loadGame(e){this.store.dispatch("loadGame",{gameId:e})},newGame(){this.$router.push("/games")}},beforeRouteEnter(e,t,n){n(r=>{r.loadGame(e.params.id)})}}),to=l("h2",null,"Das Spiel ist leider zu Ende",-1),no=l("p",null,"Deine Entscheidungen haben etwas ver\xE4ndert - soviel kann man sagen.",-1),ro=l("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),io={class:"button-bar"};function so(e,t,n,r,i,a){const c=V("Dialog");return h(),j(c,null,{default:be(()=>[to,no,l("ul",null,[l("li",null,"Die CO2-Emmissionen "+k(e.co2),1),l("li",null,"Die Staatsfinanzen "+k(e.debt),1),l("li",null,"Deine Beliebtheit "+k(e.popularity),1)]),ro,l("div",io,[l("button",{onClick:t[0]||(t[0]=(...m)=>e.newGame&&e.newGame(...m))},"Neuer Versuch")])]),_:1})}var ao=E(eo,[["render",so]]);const oo=[{path:"/",redirect:"/games"},{path:"/games",component:Lt},{path:"/games/:id",component:Lt},{path:"/games/:id/over",component:ao}],Tt=Ht({history:jt(),routes:oo});function lo(e){return{createGame(t){return e.add("post","/games",t)},loadGame(t){return e.add("get","/games/"+t,void 0,0)},saveGame(t){return e.remove("put","/games/"+t.id),e.add("put","/games/"+t.id,t)},decisionMade(t,n,r){return e.add("post","/games/"+t+"/decisions/"+n,{accepted:r})},eventOccurred(t,n){return e.add("post","/games/"+t+"/events/"+n)}}}function uo(e,t){let n=[],r;async function i(){if(r&&(clearTimeout(r),r=void 0),n.length){const{method:a,path:c,data:m,retry:d,resolve:v,reject:u}=n[0];try{if((t==null?void 0:t.navigator)&&!(t==null?void 0:t.navigator.onLine))throw Error("Browser is offline");const w=await e(a,c,m);n.shift(),v(w)}catch(w){d?n[0].retry=Math.max(-1,d-1):(n.shift(),u(w))}n.length&&(r=setTimeout(i,(t==null?void 0:t.timeout)||1e4))}}return{add(a,c,m,d=-1){return new Promise((v,u)=>{n.push({method:a,path:c,data:m,retry:d,resolve:v,reject:u}),r||i()})},remove(a,c){n=n.filter(m=>m.method.toLowerCase()!==a.toLowerCase()||m.path!==c)},callsPending(){return n.length>0}}}function co(e,t,n=console){return async function(r,i,a){var c;try{const m={method:r};["post","put","patch"].includes(r)&&(m.body=JSON.stringify(a),m.headers={["content-type"]:"application/json"});const d=await t(e+i,m),v=((c=d.headers.get("Content-Type"))==null?void 0:c.match(/json/))?await d.json():await d.text();if(d.ok)return v;throw Error(v.message||v)}catch(m){throw n.error(m),m}}}function ho({api:e,logger:t=console,storage:n=localStorage}){return{createGame(r){Le(r),n.setItem("game",JSON.stringify(r));try{e.createGame(r)}catch(i){t.warn("Cannot save new game - trying again later",i)}},async loadGame(r){const i=n.getItem("game");if(i){const c=JSON.parse(i);if(c.id===r)return Le(c),xe(c,r)}const a=await e.loadGame(r);return Le(a),xe(a,r)},saveGame(r){r.prngState=cn(),n.setItem("game",JSON.stringify(r));try{e.saveGame(r)}catch(i){t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",i)}},decisionMade(r,i,a){e.decisionMade(r.id,i,a)},eventOccurred(r,i){e.eventOccurred(r.id,i.id)}}}const mo=localStorage.getItem("backendURL")||"https://api.ich-kann-klima.de/api",go=co(mo,fetch),po=uo(go),fo=lo(po),bo=ho({api:fo}),vo=ss(Tt,bo),Vt=Symbol();function X(){return Rt(Vt)}const wo=Zt({state:ls,mutations:as,actions:vo,getters:os});function Ot(e,t,...n){for(const r of n){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function yo(e,t,n){function r(d){return e[d].toFixed(2)}function i(d){return(d>0?"+":"")+d.toFixed(2)}function a(d){const v=n.find(u=>u.type==="modify"&&u.name===d);return v&&v.condition?v.value:0}function c(d){const v=a(d),u=t?t[d]:0;return v&&Math.abs(v-u)<.001?i(v):v?i(v)+" / "+i(u):u!=0?i(u):""}return vt.map(d=>({id:d.name,unit:d.unit,value:r(d.name),effect:c(d.name),class:d.writable?"writable":"calculated"}))}function ko(e,t,n,r){const i=e.proposedLaws,a=e.acceptedLaws.map(d=>d.lawId),c=e.rejectedLaws;function m(d){return a.includes(d)?"a":i.includes(d)?"p":c.includes(d)?"r":"x"}return r.map(d=>({id:d.id,priority:d.priority(e),state:m(d.id)})).sort((d,v)=>Ot(d,v,t,"id")*n).map(d=>M(z({},d),{priority:d.priority.toFixed(2)}))}function So(e,t,n,r){return r.map(i=>({id:i.id,probability:i.probability(e)})).sort((i,a)=>Ot(i,a,t,"id")*n).map(i=>M(z({},i),{probability:(i.probability*100).toFixed(2)}))}const Po=T({props:{citation:{type:Object,required:!0},showInternals:{type:Boolean,default:!1}},computed:{href(){return this.citation.url.toString()},title(){return this.citation.title||this.citation.url.toString()}}}),Do={key:0},_o=["href"],Ao=N(". "),zo={key:1},Fo={key:2},Co=N("Bemerkung: "),Eo=["innerHTML"],Wo=N(". "),Lo={key:3},To=N("Internes: "),Vo=["innerHTML"],Oo=N(". "),$o={key:4},xo=["href"],Io=N(". "),Mo={key:5},Bo=["href"],No=N(". "),Uo={key:6},Go=["href"],Ko=N(". ");function Jo(e,t,n,r,i,a){return h(),g("p",null,[e.citation.authors?(h(),g("span",Do,k(e.citation.authors+e.citation.dateString())+". ",1)):D("",!0),l("a",{target:"_blank",rel:"noreferrer noopener",href:e.href},'"'+k(e.title)+'"',9,_o),Ao,e.citation.publisher?(h(),g("span",zo,k(e.citation.publisher)+". ",1)):D("",!0),e.citation.comment?(h(),g("span",Fo,[Co,l("span",{innerHTML:e.citation.comment},null,8,Eo),Wo])):D("",!0),e.showInternals&&e.citation.internalComment?(h(),g("span",Lo,[To,l("span",{innerHTML:e.citation.internalComment},null,8,Vo),Oo])):D("",!0),e.citation.referringUrl?(h(),g("span",$o,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,xo),Io])):D("",!0),e.citation.archiveUrl?(h(),g("span",Mo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,Bo),No])):D("",!0),e.citation.localCopy?(h(),g("span",Uo,[l("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,Go),Ko])):D("",!0)])}var Ho=E(Po,[["render",Jo]]);const jo=T({components:{apexchart:qt},props:{chartData:{type:Object,required:!0},paramId:{type:String,required:!0},selectedYear:{type:Number}},emits:["update:selectedYear"],setup(e,t){const n="#9c6d00",r="#ce900070",i="#644600",a=I(()=>({xaxis:{categories:ue,labels:{rotate:-90}},chart:{id:e.paramId+"-withLawEffects",animations:{enabled:!1},stacked:!0},colors:[n,i,r],legend:{show:!1},markers:{size:0},dataLabels:{enabled:!1}})),c=I(()=>e.chartData.values.map((y,C)=>({value:y[e.paramId],change:e.chartData.changes[C][e.paramId]}))),m=I(()=>c.value.map(y=>{const C=y.value-y.change;return y.change*y.value>0?C*y.value>0?{value:C,gain:y.change,loss:0}:{value:0,gain:y.value,loss:C}:{value:y.value,gain:0,loss:-y.change}})),d=I(()=>[{name:"Simulated "+e.paramId,data:m.value.map(y=>Math.round(y.value))},{name:"Gains of "+e.paramId+" by selected law",data:m.value.map(y=>Math.round(y.gain))},{name:"Losses of "+e.paramId+" by selected law",data:m.value.map(y=>Math.round(y.loss))}]),v=ge();var u=void 0;function w(){var y,C;((y=v.value)==null?void 0:y.chart)!=null&&u!=null&&((C=v.value)==null||C.toggleDataPointSelection(0,u)),u=void 0}function ie(y){var C,$;if(((C=v.value)==null?void 0:C.chart)!=null&&y){const L=y-ue[0];u!=L&&(w(),u=L,($=v.value)==null||$.toggleDataPointSelection(0,L))}else w()}Qt(()=>ie(e.selectedYear),{flush:"post"});function J(y,C,$){const L=$.dataPointIndex;L<0||(L===u?(u=void 0,t.emit("update:selectedYear",void 0)):(u=L,t.emit("update:selectedYear",L+ue[0])))}return{chartOptions:a,series:d,chart:v,click:J}}});function Ro(e,t,n,r,i,a){return h(),g("div",null,[l("div",null,k(e.paramId),1),(h(),j(Yt("apexchart"),{ref:"chart",type:"bar",options:e.chartOptions,series:e.series,onClick:e.click},null,8,["options","series","onClick"]))])}var Zo=E(jo,[["render",Ro]]);const qo=[{name:"Clear",laws:[]},{name:"Happy Path",laws:[{lawId:"NetzausbauErleichtern",effectiveSince:2021},{lawId:"WindkraftVereinfachen",effectiveSince:2021},{lawId:"StromspeicherungErleichtern",effectiveSince:2021},{lawId:"AbstandsregelnFuerWindkraftLockern",effectiveSince:2021},{lawId:"AusschreibungsverfahrenfuerWindkraftVervierfachen",effectiveSince:2021},{lawId:"ForschungUndEntwicklungStromspeicherung",effectiveSince:2022},{lawId:"ForschungDezentraleStromerzeugung",effectiveSince:2022},{lawId:"KohleverstromungEinstellen",effectiveSince:2022},{lawId:"WirksamerCO2Preis",effectiveSince:2022},{lawId:"DaemmungAltbau4Percent",effectiveSince:2022},{lawId:"ForschungEmissionsfreieZementproduktion",effectiveSince:2023},{lawId:"NetzausbauFoerdern",effectiveSince:2023},{lawId:"StromspeicherungFoerdern",effectiveSince:2023},{lawId:"WasserstofftechnologieFoerdern",effectiveSince:2023},{lawId:"SolarstromFoerdernx4",effectiveSince:2024},{lawId:"SolarAufAllenDaechernVerpflichtend",effectiveSince:2024},{lawId:"ForschungEmissionsfreieStahlproduktion",effectiveSince:2024},{lawId:"FernverkehrModernisieren",effectiveSince:2025},{lawId:"NahverkehrModernisieren",effectiveSince:2026},{lawId:"FernverkehrVerbindungenAusbauen",effectiveSince:2026},{lawId:"NahverkehrAusbauen",effectiveSince:2026},{lawId:"LadeinfrastrukturAusbauen",effectiveSince:2026},{lawId:"NahverkehrKostenlos",effectiveSince:2027},{lawId:"DienstwagenPrivilegAbgeschaffen",effectiveSince:2027},{lawId:"ElektromobilitaetFoerdern",effectiveSince:2027},{lawId:"WasserstoffmobilitaetFoerdern",effectiveSince:2027}]}],Ae=(e,t)=>e.lawId===t.lawId&&e.effectiveSince===t.effectiveSince,Qo=e=>e.map((t,n)=>M(z({},t),{sortId:n}));function Yo(...e){const t=e.map(n=>n.length===0?0:n[n.length-1].sortId+1);return t.length===0?0:Math.max.apply(Math,t)}function Xo(e){const t=ge([]),n=ge([]),r=ge(!1);function i(y,C){var Ge;const $=t.value,L={lawId:y,effectiveSince:C,sortId:0},Ue=(Ge=n.value.find(de=>Ae(L,de)))==null?void 0:Ge.sortId;L.sortId=Ue!=null?Ue:Yo($,n.value),t.value=$.filter(de=>de.lawId!=y).concat(L).sort((de,xt)=>de.sortId-xt.sortId)}function a(y){t.value=t.value.filter(C=>C.lawId!=y)}function c(y,C){const $={lawId:y,effectiveSince:C,sortId:0};t.value.some(L=>Ae(L,$))?a(y):i(y,C)}function m(y){t.value=Qo(y.laws)}function d(){r.value=!r.value,r.value?n.value=t.value:n.value=[]}const v=I(()=>{var y;return{name:"Current Game",laws:((y=e.value)==null?void 0:y.acceptedLaws)||[]}}),u=I(()=>[v.value,...qo]),w=I(()=>{const y=t.value.map($=>M(z({},$),{cls:n.value.some(L=>Ae($,L))?"both":"new"})),C=n.value.filter($=>!t.value.some(L=>Ae(L,$))).map($=>M(z({},$),{cls:"saved"}));return[...y,...C].sort(($,L)=>$.sortId-L.sortId)}),ie=$t(t),J=$t(n);return{addToSimulation:i,removeFromSimulation:a,toggleInSimulation:c,loadPreset:m,compareActive:r,toggleCompare:d,presets:u,simulatedLaws:w,simulation:ie,secondSimulation:J}}function $t(e){return I(()=>{const t=Dt(),n=e.value.map(i=>Pe(i));return ue.map(i=>{for(;i>t.currentYear;){t.currentYear++;const{values:a,effectsOfLaws:c}=_t(t,n,t.currentYear);if(t.values=a,i===t.currentYear)return{values:a,effectsOfLaws:c}}return{values:t.values,effectsOfLaws:{}}})})}const el=T({directives:{clickaway:Re},setup(e,t){const n=ge(!1);return{menuIsOpen:n,toggle:()=>n.value=!n.value,close:()=>n.value=!1}}});function tl(e,t,n,r,i,a){const c=Xt("clickaway");return en((h(),g("span",{onClick:t[0]||(t[0]=(...m)=>e.toggle&&e.toggle(...m)),class:x(["menu",{menuIsOpen:e.menuIsOpen}])},[Ce(e.$slots,"default",{},void 0,!0)],2)),[[c,e.close]])}var nl=E(el,[["render",tl],["__scopeId","data-v-06206e01"]]);const rl=T({directives:{clickaway:Re},components:{Citation:Ho,PeekChart:Zo,Menu:nl},setup(){const e=X(),t=I(()=>e.state.game),n=Xo(t);return z({store:e,game:t,gameYears:ue},n)},data(){return{lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lastSelected:void 0,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0,yearSelected:void 0,showDetails:!0,showCharts:!1,showParams:!0,showLaws:!0,showEvents:!1,showYears:!1}},methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},toggleLawList(){this.showLaws=!this.showLaws,this.showLaws&&(this.showEvents=!1)},toggleEventList(){this.showEvents=!this.showEvents,this.showEvents&&(this.showLaws=!1)},selectLaw(e){e===this.lawSelected?this.lawSelected=void 0:(this.lastSelected="law",this.lawSelected=e)},selectEvent(e){e===this.eventSelected?this.eventSelected=void 0:(this.lastSelected="event",this.eventSelected=e)},selectParam(e){e===this.paramSelected?this.paramSelected=void 0:(this.lastSelected="param",this.paramSelected=e)},selectYear(e){e===this.yearSelected?this.yearSelected=void 0:(this.lastSelected="year",this.yearSelected=e)},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0,this.yearSelected=void 0},dragStart(e,t){const{lawId:n,year:r}=t;!e.dataTransfer||(e.dataTransfer.dropEffect="link",n&&e.dataTransfer.setData("lawId",n),r&&e.dataTransfer.setData("year",r.toString()))},getDropped(e,t,n){if(!e.dataTransfer)return;const r=e.dataTransfer.getData(t);return n.find(i=>i==r)},onDrop(e,t){const{lawId:n,year:r}=t,i=this.getDropped(e,"lawId",yi),a=this.getDropped(e,"year",this.gameYears);r&&i?this.addToSimulation(i,r):n&&a?this.addToSimulation(n,a):n&&i&&this.removeFromSimulation(i)},rightClick(e,t){this.toggleInSimulation(e,t)}},computed:{startYearOfSelected(){if(!this.lawSelected)return;if(!this.game)return se;const e=this.simulatedLaws.find(t=>t.lawId===this.lawSelected);return e?e.effectiveSince:this.game.currentYear},selectedLaw(){return re.find(e=>e.id===this.lawSelected)},selectedEvent(){return _e.find(e=>e.id===this.eventSelected)},selectedParam(){return this.paramSelected?Z[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof S?e:void 0},cParam(){const e=this.selectedParam;return e instanceof K?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},currentYear(){return this.yearSelected?this.yearSelected:this.game?this.game.currentYear:se},effectsOfSelected(){return!this.selectedLaw||!this.startYearOfSelected||!this.game?[]:this.selectedLaw.effects(this.game,this.startYearOfSelected,this.currentYear)},sortedValues(){return this.game?yo(this.simOfYear.values,this.effectsOfLawInYear,this.effectsOfSelected):[]},sortedLaws(){return this.game?ko(this.game,this.lawsSortCol,this.lawsSortDir,re):[]},sortedEvents(){return this.game?So(this.game,this.eventsSortCol,this.eventsSortDir,_e):[]},effectsOfLawInYear(){if(this.lawSelected)return this.simOfYear.effectsOfLaws[this.lawSelected];if(this.yearSelected)return this.simEffectOfLaw[this.yearSelected-this.gameYears[0]]},simOfYear(){if(this.yearSelected===void 0&&this.game){const e=this.effectsOfSelected,t=this.game.values;if(this.lawSelected===void 0||e.length===0)return{values:t,effectsOfLaws:{}};const n=oe(t);$e({dispatch:()=>{},values:n},e);const i=Object.fromEntries(pt.map(a=>[a,n[a]-t[a]]));return{values:t,effectsOfLaws:{[this.lawSelected]:i}}}else{const e=this.yearSelected?this.yearSelected-this.gameYears[0]:0;return this.simulation[e]}},simulatedValues(){return this.simulation.map(e=>e.values)},simEffectOfLaw(){if(this.lawSelected){const e=this.lawSelected;return this.simulation.map(t=>{const n=t.effectsOfLaws[e];return n||wt})}return this.compareActive?this.secondSimulation.map((e,t)=>Object.fromEntries(Object.entries(e.values).map(([n,r])=>[n,this.simulation[t].values[n]-r]))):ue.map(e=>wt)},chartData(){return{values:this.simulatedValues,changes:this.simEffectOfLaw}},lawsInYear(){return e=>this.simulatedLaws.filter(t=>t.effectiveSince===e)}}}),q=e=>(he("data-v-73ca890e"),e=e(),me(),e),il={class:"peekData"},sl={class:"Menu"},al=N("\xA0 "),ol=N("\xA0 "),ll=N("\xA0 "),ul=N("\xA0 "),cl=N("\xA0 "),dl=N("\xA0 "),hl={key:1,class:"Details sidebyside"},ml={class:"Title"},gl={class:"Description"},pl=q(()=>l("div",{class:"SectionHead"},"Details:",-1)),fl=["innerHTML"],bl=q(()=>l("div",{class:"SectionHead"},"Internes:",-1)),vl=["innerHTML"],wl=q(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),yl={key:2,class:"Details sidebyside"},kl={class:"Title"},Sl={class:"Description"},Pl=q(()=>l("div",{class:"SectionHead"},"Details:",-1)),Dl=["innerHTML"],_l=q(()=>l("div",{class:"SectionHead"},"Internes:",-1)),Al=["innerHTML"],zl=q(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),Fl={key:3,class:"Details sidebyside"},Cl={class:"Title"},El={key:0},Wl={key:1},Ll={key:2},Tl=q(()=>l("div",{class:"SectionHead"},"Details:",-1)),Vl=["innerHTML"],Ol=q(()=>l("div",{class:"SectionHead"},"Internes:",-1)),$l=["innerHTML"],xl=q(()=>l("div",{class:"SectionHead"},"Referenzen:",-1)),Il={class:"paramsHeader"},Ml=["onClick"],Bl={class:"numbercol"},Nl={class:"effcol"},Ul={key:5,class:"lawList sidebyside"},Gl=["onClick","onDragstart","onDrop"],Kl={class:"priocol"},Jl={key:6,class:"eventList sidebyside"},Hl=["onClick"],jl={class:"priocol"},Rl={key:7,class:"yearList sidebyside"},Zl=q(()=>l("a",{class:"clickable"},"Presets",-1)),ql={class:"dropdown"},Ql=["onClick"],Yl=N("\xA0 "),Xl=["onClick","onDragstart","onDrop"],eu=["onClick","onContextmenu","onDragstart","onDrop"];function tu(e,t,n,r,i,a){var v;const c=V("PeekChart"),m=V("Citation"),d=V("Menu");return h(),g("details",il,[l("summary",{onClick:t[0]||(t[0]=u=>e.unselect()),class:"clickable"},"Peek"),l("div",sl,[l("a",{onClick:t[1]||(t[1]=u=>e.showCharts=!e.showCharts),class:x(["clickable",e.showCharts?"selected":""])},"Charts",2),al,l("a",{onClick:t[2]||(t[2]=u=>e.showDetails=!e.showDetails),class:x(["clickable",e.showDetails?"selected":""])},"Details",2),ol,l("a",{onClick:t[3]||(t[3]=u=>e.showParams=!e.showParams),class:x(["clickable",e.showParams?"selected":""])},"Params",2),ll,l("a",{onClick:t[4]||(t[4]=u=>e.toggleLawList()),class:x(["clickable",e.showLaws?"selected":""])},"Laws",2),ul,l("a",{onClick:t[5]||(t[5]=u=>e.toggleEventList()),class:x(["clickable",e.showEvents?"selected":""])},"Events",2),cl,l("a",{onClick:t[6]||(t[6]=u=>e.showYears=!e.showYears),class:x(["clickable",e.showYears?"selected":""])},"Years",2),dl]),e.showCharts?(h(),g("div",{key:0,class:x(["Details sidebyside",{lawSelected:e.lawSelected!=null}])},[e.paramSelected?(h(),j(c,{key:0,selectedYear:e.yearSelected,"onUpdate:selectedYear":t[7]||(t[7]=u=>e.yearSelected=u),chartData:e.chartData,paramId:e.paramSelected},null,8,["selectedYear","chartData","paramId"])):D("",!0),O(c,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[8]||(t[8]=u=>e.yearSelected=u),chartData:e.chartData,paramId:"co2emissions"},null,8,["selectedYear","chartData"]),O(c,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[9]||(t[9]=u=>e.yearSelected=u),chartData:e.chartData,paramId:"popularity"},null,8,["selectedYear","chartData"]),O(c,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[10]||(t[10]=u=>e.yearSelected=u),chartData:e.chartData,paramId:"stateDebt"},null,8,["selectedYear","chartData"]),O(c,{selectedYear:e.yearSelected,"onUpdate:selectedYear":t[11]||(t[11]=u=>e.yearSelected=u),chartData:e.chartData,paramId:"co2budget"},null,8,["selectedYear","chartData"])],2)):D("",!0),e.lastSelected==="law"&&e.selectedLaw&&e.showDetails?(h(),g("div",hl,[l("div",ml,k(e.selectedLaw.title),1),l("div",gl,k(e.selectedLaw.description),1),pl,l("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,fl),bl,l("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,vl),wl,(h(!0),g(U,null,H(e.citationsOfLaw,(u,w)=>(h(),j(m,{class:"Section",key:w,citation:u},null,8,["citation"]))),128))])):D("",!0),e.lastSelected==="event"&&e.selectedEvent&&e.showDetails?(h(),g("div",yl,[l("div",kl,k(e.selectedEvent.title),1),l("div",Sl,k(e.selectedEvent.description),1),Pl,l("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,Dl),_l,l("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,Al),zl,(h(!0),g(U,null,H((v=e.selectedEvent)==null?void 0:v.citations,(u,w)=>(h(),j(m,{class:"Section",key:w,citation:u},null,8,["citation"]))),128))])):D("",!0),e.lastSelected==="param"&&e.selectedParam&&e.showDetails?(h(),g("div",Fl,[l("div",Cl,k(e.paramSelected)+" ["+k(e.selectedParam.unit)+"]",1),e.wParam?(h(),g("div",El,"Initial value: "+k(e.wParam.initialValue)+" "+k(e.wParam.unit),1)):D("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(h(),g("div",Wl," Should initially be: "+k(e.cParam.shouldInitiallyBe)+" "+k(e.cParam.unit),1)):D("",!0),e.cParam?(h(),g("div",Ll," Calculation: "+k(e.cParam.valueGetter),1)):D("",!0),Tl,l("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,Vl),Ol,l("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,$l),xl,(h(!0),g(U,null,H(e.selectedParam.citations,(u,w)=>(h(),j(m,{class:"Section",key:w,citation:u},null,8,["citation"]))),128))])):D("",!0),e.showParams?(h(),g("div",{key:4,class:x(["paramsList sidebyside",{lawSelected:e.lawSelected!=null}])},[l("div",Il,[l("div",null,"Start of law: "+k(e.startYearOfSelected),1),l("div",null,"Current year: "+k(e.currentYear),1)]),l("table",null,[(h(!0),g(U,null,H(e.sortedValues,u=>(h(),g("tr",{key:u.id,class:x({clickable:!0,selected:e.paramSelected===u.id,[u.class]:!0}),onClick:w=>e.selectParam(u.id)},[l("td",null,k(u.id),1),l("td",Bl,k(u.value),1),l("td",Nl,k(u.effect),1),l("td",null,k(u.unit),1)],10,Ml))),128))])],2)):D("",!0),e.showLaws?(h(),g("div",Ul,[l("table",null,[l("tr",null,[l("th",{onClick:t[12]||(t[12]=u=>e.sortLaws("state")),class:"clickable"},"S"),l("th",{onClick:t[13]||(t[13]=u=>e.sortLaws("id")),class:"clickable"},"ID"),l("th",{onClick:t[14]||(t[14]=u=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(h(!0),g(U,null,H(e.sortedLaws,u=>(h(),g("tr",{key:u.id,class:x({clickable:!0,selected:e.lawSelected===u.id,[u.state]:!0}),onClick:w=>e.selectLaw(u.id),draggable:"true",onDragstart:w=>e.dragStart(w,{lawId:u.id}),onDrop:R(w=>e.onDrop(w,{lawId:u.id}),["prevent"]),onDragover:t[15]||(t[15]=R(()=>{},["prevent"])),onDragenter:t[16]||(t[16]=R(()=>{},["prevent"]))},[l("td",null,k(u.state),1),l("td",null,k(u.id),1),l("td",Kl,k(u.priority),1)],42,Gl))),128))])])):D("",!0),e.showEvents?(h(),g("div",Jl,[l("table",null,[l("tr",null,[l("th",{onClick:t[17]||(t[17]=u=>e.sortEvents("id")),class:"clickable"},"ID"),l("th",{onClick:t[18]||(t[18]=u=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(h(!0),g(U,null,H(e.sortedEvents,u=>(h(),g("tr",{key:u.id,class:x({clickable:!0,selected:e.eventSelected===u.id}),onClick:w=>e.selectEvent(u.id)},[l("td",null,k(u.id),1),l("td",jl,k(u.probability),1)],10,Hl))),128))])])):D("",!0),e.showYears?(h(),g("div",Rl,[l("div",null,[O(d,null,{default:be(()=>[Zl,l("ul",ql,[(h(!0),g(U,null,H(e.presets,u=>(h(),g("li",{key:u.name,class:"clickable",onClick:w=>e.loadPreset(u)},k(u.name),9,Ql))),128))])]),_:1}),Yl,l("a",{class:x(["clickable",e.compareActive?"selected":""]),onClick:t[19]||(t[19]=u=>e.toggleCompare())},"Compare",2)]),l("table",null,[(h(!0),g(U,null,H(e.gameYears,u=>(h(),g(U,{key:u},[l("tr",{class:x({clickable:!0,selected:e.yearSelected===u}),onClick:w=>e.selectYear(u),draggable:"true",onDragstart:w=>e.dragStart(w,{year:u}),onDrop:R(w=>e.onDrop(w,{year:u}),["prevent"]),onDragover:t[20]||(t[20]=R(()=>{},["prevent"])),onDragenter:t[21]||(t[21]=R(()=>{},["prevent"]))},[l("th",null,k(u),1)],42,Xl),(h(!0),g(U,null,H(e.lawsInYear(u),({lawId:w,cls:ie})=>(h(),g("tr",{key:w,class:x({clickable:!0,selected:e.lawSelected===w,[ie]:!0}),onClick:J=>e.selectLaw(w),onContextmenu:R(J=>e.rightClick(w,u),["right","prevent"]),draggable:"true",onDragstart:J=>e.dragStart(J,{lawId:w}),onDrop:R(J=>e.onDrop(J,{year:u}),["prevent"]),onDragover:t[22]||(t[22]=R(()=>{},["prevent"])),onDragenter:t[23]||(t[23]=R(()=>{},["prevent"]))},[l("td",null,k(w),1)],42,eu))),128))],64))),128))])])):D("",!0)])}var nu=E(rl,[["render",tu],["__scopeId","data-v-73ca890e"]]);const ru=T({components:{PeekInside:nu},setup(){return{store:X(),devMode:localStorage.getItem("devMode")==="true"}},methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,n=Math.min(e/800,t/1e3),r=(t-1e3*n)/2;document.documentElement.style.setProperty("--scale",`${n}`),document.documentElement.style.setProperty("--translateX",`${r}px`)}},mounted(){setTimeout(this.updateStyle,0),window.addEventListener("resize",this.updateStyle)}}),iu={class:"perspective"},su={class:"peek"};function au(e,t,n,r,i,a){const c=V("router-view"),m=V("PeekInside");return h(),g(U,null,[l("div",iu,[O(c)]),l("div",su,[e.devMode?(h(),j(m,{key:0})):D("",!0)])],64)}var ou=E(ru,[["render",au]]);const Ne=tn(ou);Ne.use(wo,Vt);Ne.use(Tt);Ne.mount("#app");
