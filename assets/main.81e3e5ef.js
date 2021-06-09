var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(t,i,s)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,o=(e,t)=>{for(var i in t||(t={}))a.call(t,i)&&r(e,i,t[i]);if(s)for(var i of s(t))n.call(t,i)&&r(e,i,t[i]);return e},l=(e,s)=>t(e,i(s));import{d as c,c as d,a as u,F as m,o as p,r as h,b as v,w as g,p as w,e as b,f as y,v as f,t as A,g as k,h as L,m as S,i as C,j as D,k as I,l as M,n as G,u as E,q as B}from"./vendor.7e46efa5.js";var x=c({});const z=u("details",{class:"attribution"},[u("summary",null,"Attribution"),u("ul",null,[u("li",null,"CO2 symbol: Tommaso.sansone91, CC0 1.0, via Wikimedia commons"),u("li",null,"Euro coin: Verdy_p, Public domain, via Wikimedia commons"),u("li",null,"Clapping hands: pngimg.com, CC 4.0 BY-NC")])],-1);x.render=function(e,t,i,s,a,n){const r=h("router-view");return p(),d(m,null,[u(r),z],64)};var K=c({props:{value:{type:Number,required:!0},color:{type:String,required:!0},img:{type:String}},computed:{emptyCircles(){return 10-this.value},filledCircles(){return this.value},style(){return e=>"empty"===e?"border-color: "+this.color:this.$props.img?"background-image: url("+this.$props.img+")":"background: "+this.color}}});const O=g();w("data-v-574125c9");const N={class:"Indicator"};b();const W=O(((e,t,i,s,a,n)=>(p(),d("div",N,[(p(!0),d(m,null,v(e.emptyCircles,(t=>(p(),d("div",{class:"circle",style:e.style("empty")},null,4)))),256)),(p(!0),d(m,null,v(e.value,(t=>(p(),d("div",{class:"circle",style:e.style("filled")},null,4)))),256))]))));K.render=W,K.__scopeId="data-v-574125c9";var T=c({setup(){const e=Dt();return{store:e,currentYear:y((()=>{var t;return null==(t=e.state.game)?void 0:t.currentYear}))}},data:()=>({orientation:"portrait"}),computed:{timespan:()=>29,years(){return this.currentYear-2021+1},size(){return(this.orientation.match(/landscape/)?"height":"width")+": "+this.years/this.timespan*100+"%"}},mounted(){window.addEventListener("orientationchange",this.setOrientation),this.setOrientation()},methods:{setOrientation(){screen.orientation?this.orientation=screen.orientation.type||screen.mozOrientation||screen.msOrientation:this.orientation=window.innerWidth>window.innerHeight?"landscape":"portrait"}}});const V=g()(((e,t,i,s,a,n)=>(p(),d("div",{class:"Indicator",style:e.size},null,4))));T.render=V,T.__scopeId="data-v-55ce16e8";const P={co2budget:6700,stateDebt:1899,popularity:50,unemployment:2695,gdp:3332,electricityDemand:480.54,electricitySolar:51.42,electricityWind:131.85,electricityWater:14.99,electricityHardCoal:35.46,electricityBrownCoal:82.13,electricityBiomass:43.19,electricityNuclear:60.91,co2emissionsIndustry:186,co2emissionsBuildings:118,co2emissionsMobility:150,co2emissionsAgriculture:70,co2emissionsOthers:9},j={currentYear:2021,values:P,acceptedLaws:[],proposedLaws:[],rejectedLaws:[]};function Q(e){return l(o({},e),{get electricityCoal(){return this.electricityHardCoal+this.electricityBrownCoal},get electricityGas(){return this.electricityDemand-this.electricitySolar-this.electricityWind-this.electricityWater-this.electricityHardCoal-this.electricityBrownCoal-this.electricityBiomass-this.electricityNuclear},get co2emissionsEnergy(){return.399*this.electricityGas+.058*this.electricitySolar+.005*this.electricityWind+.02*this.electricityWater+.835*this.electricityHardCoal+1.137*this.electricityBrownCoal+0*this.electricityBiomass+.005*this.electricityNuclear},get co2emissions(){return this.co2emissionsEnergy+this.co2emissionsIndustry+this.co2emissionsMobility+this.co2emissionsBuildings+this.co2emissionsAgriculture+this.co2emissionsOthers}})}function U(e=j){return{id:f(),currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:Q(e.values),events:[],over:!1}}function R(e,t,i){const s=Q(e);return t.forEach((e=>{const t=e.effects(s,e.effectiveSince,i);!function(e,t){Object.keys(t).forEach((i=>{e[i]+=t[i]||0}))}(s,t)})),s.co2budget-=s.co2emissions,s}function H(e){return Math.max(0,Math.min(100,e))}function J(e){if(0===e.values.co2emissions)return 100;return H(50*(e.values.co2budget*Q(P).co2emissions/P.co2budget/e.values.co2emissions))}function X(e){return H(100-50*(e.values.stateDebt/P.stateDebt))}function Y(e,t){return e?Math.round(t(e)/10):0}var Z=c({components:{TimeIndicator:T,Indicator:K},setup:()=>({store:Dt(),co2:"data:image/png;base64,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",coin:"/assets/euro.4b74462e.svg",hands:"/assets/clapping-hands.2a0f82d4.png"}),computed:{game(){return this.store.state.game},co2value(){return Y(this.game,J)},financeValue(){return Y(this.game,X)},popularityValue(){return Y(this.game,(e=>e.values.popularity))}}});const F=g();w("data-v-c937a0d2");const q={class:"CurrentIndicators"};b();const _=F(((e,t,i,s,a,n)=>{const r=h("TimeIndicator"),o=h("Indicator");return p(),d("div",q,[u(r),u(o,{value:e.co2value,color:"#EE8AC1",img:e.co2},null,8,["value","img"]),u(o,{value:e.financeValue,color:"#A9D18E",img:e.coin},null,8,["value","img"]),u(o,{value:e.popularityValue,color:"#8FAADC",img:e.hands},null,8,["value","img"])])}));Z.render=_,Z.__scopeId="data-v-c937a0d2";var $=c({props:{event:{type:Object,required:!0}},data:()=>({open:!1}),methods:{toggle(){const e=this.$refs.p;e.style.setProperty("--max-height",e.scrollHeight+"px"),this.open=!this.open}}});$.render=function(e,t,i,s,a,n){return p(),d("li",{class:{new:!e.event.acknowledged,open:e.open}},[u("title",{onClick:t[1]||(t[1]=(...t)=>e.toggle&&e.toggle(...t))},A(e.event.title),1),u("p",{ref:"p"},A(e.event.description),513)],2)};var ee=c({components:{EventItem:$},setup(){const e=Dt();return{store:e,events:y((()=>{var t;return null==(t=e.state.game)?void 0:t.events}))}},data:()=>({visible:!1}),methods:{close(){var e;this.visible=!1,null==(e=this.events)||e.filter((e=>!e.acknowledged)).forEach((e=>e.acknowledged=!0))},show(){this.visible=!0}}});const te=g();w("data-v-6e882f0b");const ie={key:0},se=u("header",null," News Ticker ",-1),ae={key:0},ne={key:1};b();const re=te(((e,t,i,s,a,n)=>{var r;const o=h("EventItem");return e.visible?(p(),d("div",ie,[se,(null==(r=e.events)?void 0:r.length)?(p(),d("ul",ae,[(p(!0),d(m,null,v(e.events,(e=>(p(),d(o,{key:e.title,event:e},null,8,["event"])))),128))])):(p(),d("p",ne," Keine Nachrichten bisher ")),u("footer",null,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.close&&e.close(...t))},"Ok")])])):(p(),d("button",{key:1,onClick:t[2]||(t[2]=(...t)=>e.show&&e.show(...t))}," News "))}));ee.render=re,ee.__scopeId="data-v-6e882f0b";const oe={co2budget:100,co2emissionsIndustry:200,co2emissionsMobility:200,co2emissionsBuildings:200,co2emissionsAgriculture:200,co2emissionsOthers:200,co2emissionsEnergy:200,co2emissions:299,electricityDemand:300,electricitySolar:400,electricityWind:400,electricityWater:400,electricityBiomass:400,electricityHardCoal:450,electricityBrownCoal:450,electricityCoal:459,electricityNuclear:430,electricityGas:460,stateDebt:500,popularity:600,unemployment:700,gdp:800};var le=c({setup(){const e=Dt();return{store:e,game:y((()=>e.state.game))}},data:()=>({lawsSortCol:"state",lawsSortDir:1,lawSelected:void 0}),methods:{sortLaws(e){e===this.lawsSortCol&&(this.lawsSortDir=this.lawsSortDir>0?-1:1),this.lawsSortCol=e},selectLaw(e){this.lawSelected=e}},computed:{effectsOfSelected(){if(!this.lawSelected||!this.game)return{};const e=this.game,t=this.store.state.allLaws.find((e=>e.id===this.lawSelected));return t?t.effects(e.values,2021,e.currentYear):{}},sortedValues(){if(void 0===this.game)return[];const e=this.game.values,t=this.effectsOfSelected;return Object.entries(oe).sort(((e,t)=>e[1]-t[1])).map((e=>e[0])).map((i=>{return[i,e[i].toFixed(2),(s=t[i],s?s.toFixed(2):"-")];var s}))},sortedLaws(){if(void 0===this.game)return[];const e=this.game,t=this.lawsSortCol,i=this.game.proposedLaws,s=this.game.acceptedLaws.map((e=>e.lawId)),a=this.game.rejectedLaws;return this.store.state.allLaws.map((t=>{return{id:t.id,priority:t.priority(e),state:(n=t.id,s.includes(n)?"a":i.includes(n)?"p":a.includes(n)?"r":"x")};var n})).sort(((e,i)=>function(e,t){return e<t?-1:e>t?1:0}(e[t],i[t])*this.lawsSortDir)).map((e=>l(o({},e),{priority:e.priority.toFixed(2)})))}}});const ce=g();w("data-v-2841ee83");const de={class:"peekData"},ue=u("summary",null,"Peek",-1),me={class:"numbercol"},pe={class:"numbercol"};b();const he=ce(((e,t,i,s,a,n)=>(p(),d("details",de,[ue,u("table",null,[(p(!0),d(m,null,v(e.sortedValues,(([e,t,i])=>(p(),d("tr",{key:e},[u("td",null,A(e),1),u("td",me,A(t),1),u("td",null,A(i),1)])))),128))]),u("table",null,[u("tr",null,[u("th",{onClick:t[1]||(t[1]=t=>e.sortLaws("state"))},"S"),u("th",{onClick:t[2]||(t[2]=t=>e.sortLaws("id"))},"ID"),u("th",{onClick:t[3]||(t[3]=t=>e.sortLaws("priority")),class:"numbercol"},"Priority")]),(p(!0),d(m,null,v(e.sortedLaws,(i=>(p(),d("tr",{key:i.id,class:i.state,onMouseenter:t=>e.selectLaw(i.id),onMouseleave:t[4]||(t[4]=t=>e.selectLaw(void 0))},[u("td",null,A(i.state),1),u("td",null,A(i.id),1),u("td",pe,A(i.priority),1)],42,["onMouseenter"])))),128))])]))));le.render=he,le.__scopeId="data-v-2841ee83";var ve=c({components:{CurrentIndicators:Z,EventList:ee,PeekInside:le},data:()=>({devMode:"true"===localStorage.getItem("devMode")})});const ge={class:"game-setup"},we={class:"wrapper"},be=u("h1",null,"#ich-kann-klima",-1),ye={class:"indicators"},fe={class:"peek"};ve.render=function(e,t,i,s,a,n){const r=h("EventList"),o=h("CurrentIndicators"),l=h("PeekInside");return p(),d(m,null,[u("div",ge,[u("div",we,[be,u(r),k(e.$slots,"default")]),u("div",ye,[u(o)])]),u("div",fe,[e.devMode?(p(),d(l,{key:0})):L("",!0)])],64)};var Ae=c({setup(){const e=Dt();return{store:e,allLaws:y((()=>e.state.allLaws)),acceptedLaws:y((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({opened:void 0}),computed:{visibleAccepted(){return this.allLaws.filter((e=>{var t,i;return(null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id)))&&!(null==(i=e.labels)?void 0:i.includes("hidden"))}))}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}});const ke=g()(((e,t,i,s,a,n)=>(p(!0),d(m,null,v(e.visibleAccepted,((t,i)=>(p(),d("div",{key:i,class:["Law",{opened:i===e.opened}],onClick:t=>e.toggleOpen(i)},[u("h3",null,A(t.title),1),u("div",null,A(t.description),1)],10,["onClick"])))),128))));Ae.render=ke,Ae.__scopeId="data-v-5f028f12";var Le=c({setup:()=>({store:Dt()}),data:()=>({selectedLaw:void 0}),props:{proposedLaws:Array},methods:{select(e){this.selectedLaw=e},accept(e){this.store.dispatch("acceptLaw",{lawId:e})},decline(e){this.store.dispatch("rejectLaw",{lawId:e})}}});const Se=g();w("data-v-0b6efcd1");const Ce={class:"ProposedLaws"},De={class:"button-bar"};b();const Ie=Se(((e,t,i,s,a,n)=>(p(),d("div",Ce,[(p(!0),d(m,null,v(e.proposedLaws,((t,i)=>(p(),d("div",{key:i,class:["Law",{selected:t.id===e.selectedLaw}]},[u("div",{onClick:i=>e.select(t.id)},[u("h3",null,A(t.title),1),u("div",null,A(t.description),1),u("div",De,[u("button",{class:"accept",onClick:i=>e.accept(t.id)},"✓",8,["onClick"]),u("button",{class:"decline",onClick:i=>e.decline(t.id)},"✗",8,["onClick"])])],8,["onClick"])],2)))),128))]))));Le.render=Ie,Le.__scopeId="data-v-0b6efcd1";var Me=c({components:{GameSetup:ve,LawProposals:Le,AcceptedLaws:Ae},setup(){const e=Dt();return{store:e,allLaws:y((()=>e.state.allLaws)),acceptedLaws:y((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},computed:o({},S(["proposedLaws"])),methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)},advanceYear(){this.store.dispatch("advanceYear",void 0)}},beforeRouteEnter(e,t,i){i((t=>t.startGame(e.params.id)))}});const Ge=g();w("data-v-418e0cea");const Ee=u("h2",null,"Beschlossene Gesetze",-1),Be=u("p",null,"Wenn Du fertig bist, wechsle zum nächsten Jahr und sieh' Dir die Auswirkungen an.",-1),xe={class:"button-bar"};b();const ze=Ge(((e,t,i,s,a,n)=>{const r=h("LawProposals"),o=h("AcceptedLaws"),l=h("GameSetup");return p(),d(l,null,{default:Ge((()=>[u(r,{"proposed-laws":e.proposedLaws},null,8,["proposed-laws"]),Ee,u(o),Be,u("div",xe,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.advanceYear&&e.advanceYear(...t))},"Jahr abschließen")])])),_:1})}));Me.render=ze,Me.__scopeId="data-v-418e0cea";var Ke=c({components:{GameSetup:ve},methods:{newGame(){this.$router.push("/games")}}});const Oe=u("h2",null,"Deine erste Entscheidung steht bevor...",-1),Ne=u("p",null,[D("Wähle weise, denn "),u("u",null,"alles hat Einfluss"),D(" auf deine Beliebtheit, das Klimaziel sowie den Finanzhaushalt.")],-1),We=u("p",null,[D(" Durch manche Entscheidungen entstehen neue Möglichkeiten."),u("br"),D(" Es kann aber auch sein, dass du dir durch bestimmte Entscheidungen andere Möglichkeiten nimmst. ")],-1),Te=u("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Ve={class:"button-bar"};Ke.render=function(e,t,i,s,a,n){const r=h("GameSetup");return p(),d(r,null,{default:C((()=>[Oe,Ne,We,Te,u("div",Ve,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Leg' los")])])),_:1})};var Pe=c({methods:{start(){this.$router.push("/start")}}});const je={class:"wrapper"},Qe=u("h2",null,"Stell dir vor...",-1),Ue=u("h3",null,"... du bist Politiker.",-1),Re=u("p",null," Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl! ",-1),He=u("p",null," Du hast vier Jahre Zeit um... ",-1),Je=u("ul",null,[u("li",null,"Beliebtheit in der Bevölkerung zu erlangen"),u("li",null,"der Klimakatastrophe entgegenzusteuern"),u("li",null,"das Soll des Bundeshaushaltes zu erreichen/nicht zu übersteigen")],-1),Xe={class:"button-bar"};Pe.render=function(e,t,i,s,a,n){return p(),d("div",je,[Qe,Ue,Re,He,Je,u("div",Xe,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.start&&e.start(...t))},"Starte das Spiel!")])])};var Ye=c({components:{GameSetup:ve},methods:{newGame(){this.$router.push("/games")}}});const Ze={class:"wrapper"},Fe=u("h2",null,"Das Spiel ist leider zu Ende",-1),qe=u("p",null,"Deine Entscheidungen haben etwas verändert - soviel kann man sagen.",-1),_e=u("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),$e={class:"button-bar"};Ye.render=function(e,t,i,s,a,n){const r=h("GameSetup");return p(),d(r,null,{default:C((()=>[u("div",Ze,[Fe,qe,_e,u("div",$e,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Neuer Versuch")])])])),_:1})};const et=[{path:"/",component:Pe},{path:"/start",component:Ke},{path:"/games",component:Me},{path:"/games/:id",component:Me},{path:"/games/:id/over",component:Ye}],tt=I({history:M(),routes:et});var it={title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,i){const s=i-t,a=s<18?4.3/18:0,n=(10-s)/55,r=Math.max(50*n,0);return{electricityHardCoal:-e.electricityHardCoal,electricityBrownCoal:-e.electricityBrownCoal,stateDebt:2.5-a,unemployment:r}},priority:e=>e.values.electricityCoal/e.values.electricityDemand<=.1?0:1e4-e.values.unemployment/100},st={title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effects:(e,t,i)=>({stateDebt:-37,electricityHardCoal:Math.max(-e.electricityHardCoal,-.1*P.electricityHardCoal),electricityBrownCoal:Math.max(-e.electricityBrownCoal,-.05*P.electricityBrownCoal),electricityWind:5,electricitySolar:3,electricityWater:.5}),priority:e=>(2050-e.currentYear)/29*100},at={title:"Kernenergienutzung verlängern",description:"Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effects:(e,t,i)=>({electricityNuclear:104.3-e.electricityNuclear,stateDebt:-2.5,popularity:Math.max(-e.popularity,-4)}),priority:e=>1e3*(e.values.electricityGas-56.77)/56.77},nt={title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects:(e,t,i)=>({electricityNuclear:({2021:60.45,2022:30.21}[i]||0)-e.electricityNuclear}),priority:e=>0},rt={title:"Windenergie subventionieren",description:"Garantierte Einspeisevergütung für neue und erneuterte Windanlagen",effects:(e,t,i)=>({electricityWind:20,stateDebt:1}),priority:e=>100*((e.values.electricityDemand-e.values.electricityWind-e.values.electricitySolar-e.values.electricityWater-e.values.electricityBiomass)/e.values.electricityDemand)},ot={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit günstigen Krediten gefördert.",effects:(e,t,i)=>i-t>=2?{stateDebt:1,co2emissionsBuildings:Math.max(-e.co2emissionsBuildings,-2)}:{stateDebt:1},priority:e=>1e3*(e.values.co2emissionsBuildings/e.values.co2emissions-.15)},lt={title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",effects:(e,t,i)=>i-t>=5?{stateDebt:3,co2emissionsMobility:Math.max(-e.co2emissionsMobility,-2),popularity:Math.min(100-e.popularity,2)}:{stateDebt:3},priority:e=>1e3*(e.values.co2emissionsMobility/e.values.co2emissions-.25)},ct={title:"Förderung für Tierhaltung abschaffen",description:"Subventionen für Tierhaltung werden ersatzlos gestrichen",effects:(e,t,i)=>t===i?{co2emissionsAgriculture:Math.max(-e.co2emissionsAgriculture,-10),stateDebt:-10,popularity:Math.max(-e.popularity,-20)}:{stateDebt:-10},priority:e=>100-e.values.unemployment/100},dt={title:"Nahverkehr Kostenlos",description:"Die Kosten für den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr benötigt werden.",effects:(e,t,i)=>t===i?{unemployment:20,stateDebt:10,popularity:Math.min(100-e.popularity,10),co2emissionsMobility:Math.max(-e.co2emissionsMobility,-2)}:{stateDebt:10,co2emissionsMobility:Math.max(-e.co2emissionsMobility,-2)},priority:e=>1e3*(e.values.co2emissionsMobility/e.values.co2emissions)};const ut=Object.entries({KohleverstromungEinstellen:it,EnergiemixRegeltDerMarkt:st,KernenergienutzungVerlaengern:at,InitialAtomausstieg:nt,WindenergieSubventionieren:rt,DaemmungVonWohngebaeudenFoerdern:ot,NahverkehrAusbauen:lt,FoerderungFuerTierhaltungAbschaffen:ct,NahverkehrKostenlos:dt}).map((([e,t])=>{return i=e,l(o({},t),{id:i});var i}));function mt(e,t){const i=6-e.proposedLaws.length;if(i>0){const s=t.filter((t=>!e.proposedLaws.includes(t.id))).filter((t=>{var i;return!(null==(i=e.acceptedLaws)?void 0:i.some((e=>e.lawId===t.id)))})).filter((t=>{var i;return!(null==(i=e.rejectedLaws)?void 0:i.includes(t.id))})).filter((e=>{var t;return!(null==(t=e.labels)?void 0:t.includes("hidden"))})).map((t=>({law:t,priority:t.priority?t.priority(e):1}))).filter((e=>e.priority>0)).sort(((e,t)=>e.priority-t.priority)).slice(0,i);e.proposedLaws=e.proposedLaws.concat(s.map((e=>e.law.id)))}}function pt(e,t){e.proposedLaws=e.proposedLaws.filter((e=>e!==t)),mt(e,ut)}function ht(e){const t=function(e){const t=ut.find((t=>t.id===e));if(t)return t;throw Error(`Law #${e} not found`)}(e.lawId);if(t)return l(o({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function vt(e,t){let i;function s(){if(e.state.game){const i=t.map((t=>l(o({},t),{priority:t.probability(e)*Math.random()}))).filter((e=>e.priority)).sort(((e,t)=>t.priority-e.priority));i.length&&e.dispatch("applyEvent",{event:i[0]})}}return{start(){this.pause(),i=setTimeout(s,6e4*Math.random())},pause(){i&&clearTimeout(i),i=0},initiateEvent:s}}function gt(e){return e.find((e=>e.title.match(/subvention/i)&&e.title.match(/abbau/i)))}const wt=[{title:"Social Media Alarm!",description:"Deine Wahlkampfberaterin ruft dich völlig aufgelöst an. Ob denn an den Geschichten was dran sein, die da im\n    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.\n    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.\n  ",apply(e){const t=e.state.game;t&&(t.values.popularity+=Math.max(-t.values.popularity,-20))},probability:()=>Math.random()},{title:"Anruf von befreundetem Unternehmer",description:"Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine\n    Ferienvilla auf Sardinien einladen. Er verlässt sich natürlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen\n    nicht zustimmen wirst.\n  ",apply(e){const t=gt(e.getters.proposedLaws);t&&e.dispatch("rejectLaw",{lawId:t.id})},probability:e=>gt(e.getters.proposedLaws)?Math.random():0},{title:"Wahl verloren",description:"Deine Beliebtheit in der Bevölkerung ist katastrophal, lieber würde man Mao Zedong wählen als dich.\n    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du gehörst) und ist damit unter\n    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon länger kein vernünftiger Mensch mehr geglaubt.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.state.game&&e.state.game.values.popularity<=0?1:0},{title:"Zusammenbruch des Finanzsystems",description:"Deine Staatsfinanzen sind desaströs. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden\n    jemals wieder wirst zurückahlen können. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen\n    könntest. Das Spiel ist damit leider beendet.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.state.game&&e.state.game.values.stateDebt>2*P.stateDebt?1:0},{title:"Du hast durchgehalten",description:"Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,\n    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Maßnahmen waren zu finanzieren\n    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.state.game&&2050===e.state.game.currentYear?1:0},{title:"Hitzehölle",description:"Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen Küstenregionen\n  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr wächst.\n  Um die verbleibdenden Teile sind erbitterte Kämpfe ausgebrochen.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.state.game&&e.state.game.values.co2budget<=0?1:0}],bt={loadGame(e){const t=localStorage.getItem("game");if(!t)throw Error("Game not found");const i=U(JSON.parse(t));return i.id=e,i},saveGame(e){localStorage.setItem("game",JSON.stringify(e))}};let yt;function ft(){return yt||(yt=vt(It,wt))}const At={startGame(e){const t=U();t.acceptedLaws=e.state.allLaws.filter((e=>{var t;return null==(t=e.labels)?void 0:t.includes("initial")})).map((e=>({lawId:e.id,effectiveSince:t.currentYear}))),mt(t,e.state.allLaws),bt.saveGame(t),ft().start(),tt.push("/games/"+t.id)},loadGame(e,t){const i=bt.loadGame(t.gameId);bt.saveGame(i),ft().start(),e.commit("setGameState",{game:i})},gameOver(e){var t;e.commit("gameOver",void 0),tt.push("/games/"+(null==(t=e.state.game)?void 0:t.id)+"/over")},acceptLaw(e,t){const i=o({},e.state.game),s={lawId:t.lawId,effectiveSince:i.currentYear+1},a=ht(s).removeLawsWithLabels,n=i.acceptedLaws.map(ht).filter((e=>!(null==a?void 0:a.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)}))))).map((e=>({lawId:e.id,effectiveSince:e.effectiveSince})));i.acceptedLaws=[...n,s],pt(i,t.lawId),bt.saveGame(i),e.commit("setGameState",{game:i})},rejectLaw(e,t){const i=o({},e.state.game);i.rejectedLaws=[...i.rejectedLaws,t.lawId],pt(i,t.lawId),bt.saveGame(i),e.commit("setGameState",{game:i})},advanceYear(e){const t=o({},e.state.game),i=t.acceptedLaws.map(ht);t.currentYear++,t.values=R(t.values,i,t.currentYear),bt.saveGame(t),e.commit("setGameState",{game:t}),ft().start()},applyEvent(e,t){t.event.apply(e);const i=o({},e.state.game);i.events.unshift(t.event),e.commit("setGameState",{game:i}),bt.saveGame(e.state.game)}},kt={setGameState(e,t){e.game=t.game},gameOver(e){e.game=l(o({},e.game),{over:!0})}},Lt={proposedLaws:e=>e.game&&e.game.proposedLaws?e.game.proposedLaws.map((t=>{const i=e.allLaws.find((e=>e.id===t));return i||console.error(`Inconsistency: Proposed law #${t} not found`),i})).filter((e=>e)):[]},St={allLaws:ut,game:void 0,visibleEvent:null},Ct=Symbol();function Dt(){return E(Ct)}const It=G({state:St,mutations:kt,actions:At,getters:Lt}),Mt=B(x);Mt.use(It,Ct),Mt.use(tt),Mt.mount("#app");
