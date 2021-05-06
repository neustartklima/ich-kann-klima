var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,s=(e,s)=>{for(var o in s||(s={}))t.call(s,o)&&r(e,o,s[o]);if(a)for(var o of a(s))n.call(s,o)&&r(e,o,s[o]);return e};import{d as o,c as l,a as i,F as c,o as d,r as u,b as p,w as m,p as h,e as v,f as g,g as f,t as w,h as b,i as L,j as y,k,v as I,l as G,u as E,m as _}from"./vendor.e8381a74.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,s)=>{const o=new URL(e,n);if(self[t].moduleMap[o])return a(self[t].moduleMap[o]);const l=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){s(new Error(`Failed to import: ${e}`)),r(i)},onload(){a(self[t].moduleMap[o]),r(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/assets/");var C=o({});const S=i("h1",null,"#ich-kann-klima",-1);C.render=function(e,t,a,n,r,s){const o=u("router-view");return d(),l(c,null,[S,i(o)],64)};const D={gameLoaded(e,t){e.game=t.game}};var O=o({props:{value:{type:Number,required:!0},color:{type:String,required:!0}},computed:{emptyCircles(){return 10-this.value},filledCircles(){return this.value},style(){return e=>("filled"===e?"background":"border-color")+": "+this.color}}});const z=m();h("data-v-72f6494f");const Y={class:"Indicator"};v();const j=z(((e,t,a,n,r,s)=>(d(),l("div",Y,[(d(!0),l(c,null,p(e.emptyCircles,(t=>(d(),l("div",{class:"circle",style:e.style("empty")},null,4)))),256)),(d(!0),l(c,null,p(e.value,(t=>(d(),l("div",{class:"circle",style:e.style("filled")},null,4)))),256))]))));O.render=j,O.__scopeId="data-v-72f6494f";var M=o({setup(){const e=Me();return{store:e,currentYear:g((()=>{var t;return null==(t=e.state.game)?void 0:t.currentYear}))}},computed:{timespan:()=>29,years(){return this.currentYear-2020},height(){return"height: "+this.years/this.timespan*100+"%"}}});const P=m();h("data-v-ad8363c2");const A={class:"container"},$=i("div",{class:"arrow-head"},null,-1);v();const B=P(((e,t,a,n,r,s)=>(d(),l("div",A,[$,i("div",{class:"indicator",style:e.height},null,4)]))));M.render=B,M.__scopeId="data-v-ad8363c2";var K=o({components:{TimeIndicator:M,Indicator:O}});const R=m();h("data-v-7ff51cfb");const U={class:"CurrentIndicators"};v();const F=R(((e,t,a,n,r,s)=>{const o=u("Indicator"),c=u("TimeIndicator");return d(),l("div",U,[i(o,{value:1,color:"#EE8AC1"}),i(o,{value:3,color:"#A9D18E"}),i(o,{value:2,color:"#8FAADC"}),i(c)])}));K.render=F,K.__scopeId="data-v-7ff51cfb";var J=o({components:{CurrentIndicators:K}});const W={class:"game-setup"},x={class:"wrapper"};J.render=function(e,t,a,n,r,s){const o=u("CurrentIndicators");return d(),l("div",W,[i("div",x,[f(e.$slots,"default")]),i(o)])};var N=o({setup(){const e=Me();return{store:e,allLaws:g((()=>e.state.allLaws)),acceptedLaws:g((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({opened:void 0}),computed:{accepted(){return this.allLaws.filter((e=>{var t;return null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id))}))}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}});const q=m()(((e,t,a,n,r,s)=>(d(!0),l(c,null,p(e.accepted,((t,a)=>(d(),l("div",{key:a,class:["Law",{opened:a===e.opened}],onClick:t=>e.toggleOpen(a)},[i("h3",null,w(t.title),1),i("div",null,w(t.description),1)],10,["onClick"])))),128))));N.render=q,N.__scopeId="data-v-87402bbe";var T=o({setup(){const e=Me();return{store:e,allLaws:g((()=>e.state.allLaws)),acceptedLaws:g((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({declined:[]}),computed:{proposed(){return this.allLaws.filter((e=>{var t;return!(null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id)))&&!this.declined.includes(e.id)})).slice(0,6)}},methods:{accept(e){this.store.dispatch(Ce(e))},decline(e){this.declined.push(e)}}});const Z=m();h("data-v-54f052e4");const V={class:"ProposedLaws"},H={class:"button-bar"};v();const Q=Z(((e,t,a,n,r,s)=>(d(),l("div",V,[(d(!0),l(c,null,p(e.proposed,((t,a)=>(d(),l("div",{key:a,class:"Law"},[i("h3",null,w(t.title),1),i("div",null,w(t.description),1),i("div",H,[i("button",{class:"accept",onClick:a=>e.accept(t.id)},"✓",8,["onClick"]),i("button",{class:"decline",onClick:a=>e.decline(t.id)},"✗",8,["onClick"])])])))),128))]))));T.render=Q,T.__scopeId="data-v-54f052e4";var X=o({components:{GameSetup:J,LawProposals:T,AcceptedLaws:N},setup:()=>({store:Me()}),methods:{advanceYear(){this.$store.dispatch(Se())}}});const ee=m();h("data-v-30db5640");const te=i("h2",null,"Beschlossene Gesetze",-1),ae=i("p",null,"Wenn Du fertig bist, wechsle zum nächsten Jahr und sieh' Dir die Auswirkungen an.",-1),ne={class:"button-bar"};v();const re=ee(((e,t,a,n,r,s)=>{const o=u("LawProposals"),c=u("AcceptedLaws"),p=u("GameSetup");return d(),l(p,null,{default:ee((()=>[i(o),te,i(c),ae,i("div",ne,[i("button",{onClick:t[1]||(t[1]=(...t)=>e.advanceYear&&e.advanceYear(...t))},"Jahr abschließen")])])),_:1})}));X.render=re,X.__scopeId="data-v-30db5640";var se=o({components:{GameSetup:J},methods:{newGame(){this.$router.push("/games")}}});const oe=i("h2",null,"Deine erste Entscheidung steht bevor...",-1),le=i("p",null,[L("Wähle weise, denn "),i("u",null,"alles hat Einfluss"),L(" auf deine Beliebtheit, das Klimaziel sowie den Finanzhaushalt.")],-1),ie=i("p",null,[L(" Durch manche Entscheidungen entstehen neue Möglichkeiten."),i("br"),L(" Es kann aber auch sein, dass du dir durch bestimmte Entscheidungen andere Möglichkeiten nimmst. ")],-1),ce=L(" Gar nicht so einfach, Politiker zu sein, oder? "),de={class:"button-bar"};se.render=function(e,t,a,n,r,s){const o=u("o"),c=u("GameSetup");return d(),l(c,null,{default:b((()=>[oe,le,ie,i(o,null,{default:b((()=>[ce])),_:1}),i("div",de,[i("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Leg' los")])])),_:1})};var ue=o({methods:{start(){this.$router.push("/start")}}});const pe={class:"wrapper"},me=i("h2",null,"Stell dir vor...",-1),he=i("h3",null,"... du bist Politiker.",-1),ve=i("p",null," Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl! ",-1),ge=i("p",null," Du hast vier Jahre Zeit um... ",-1),fe=i("ul",null,[i("li",null,"Beliebtheit in der Bevölkerung zu erlangen"),i("li",null,"der Klimakatastrophe entgegenzusteuern"),i("li",null,"das Soll des Bundeshaushaltes zu erreichen/nicht zu übersteigen")],-1),we={class:"button-bar"};ue.render=function(e,t,a,n,r,s){return d(),l("div",pe,[me,he,ve,ge,fe,i("div",we,[i("button",{onClick:t[1]||(t[1]=(...t)=>e.start&&e.start(...t))},"Starte das Spiel!")])])};const be=[{path:"/",component:ue},{path:"/start",component:se},{path:"/games",component:X,beforeEnter:()=>je.dispatch(Ee())},{path:"/games/:id",component:X,beforeEnter:e=>je.dispatch(_e(e.params.id))}],Le=y({history:k(),routes:be});const ye={loadGame(e){const t=localStorage.getItem("game");if(!t)throw Error("Game not found");return JSON.parse(t)},saveGame(e){localStorage.setItem("game",JSON.stringify(e))}},ke={co2emmissions:805,stateDebt:1899,unemployment:2695,gdp:3332,electricityDemand:2300};function Ie(e){return ye.saveGame(e),(e=>Ye("gameLoaded",{game:e}))(e)}const Ge={startGame(){const e={id:I(),currentYear:2021,values:s({},ke),acceptedLaws:[]};ye.saveGame(e),Le.push("/games/"+e.id)},loadGame(e,t){e.commit(Ie(ye.loadGame(t.gameId)))},acceptLaw(e,t){const a=e.state.game,n={lawId:t.lawId,effectiveSince:a.currentYear+1};e.commit(Ie(s(s({},a),{acceptedLaws:[...a.acceptedLaws,n]})))},advanceYear(e){const t=e.state.game;e.commit(Ie(s(s({},t),{currentYear:t.currentYear+1})))}},Ee=()=>ze("startGame",{}),_e=e=>ze("loadGame",{gameId:e}),Ce=e=>ze("acceptLaw",{lawId:e}),Se=()=>ze("advanceYear",{});const De={allLaws:[{title:"Kohleverstromung einstellen",description:"Die Verstromung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,a){const n=a-t;return{co2emmissions:-200,stateDebt:-(n<18?0:1e3),unemployment:Math.max(50*(10-n)/10,0)}}},{id:"2",title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt."},{id:"3",title:"Kernenergienutzung verlängern",description:"Eigentlich bereits abgeschaltete Kernkraftwerke wieder in Betrieb nehmen und neue bauen."},{id:"4",title:"Windkraft fördern",description:"Garantierte Einspeisevergütung für neue und erneuterte Windanlagen"}],game:void 0},Oe=Symbol(),ze=(e,t)=>s({type:e},t),Ye=(e,t)=>s({type:e},t),je=G({state:De,mutations:D,actions:Ge});function Me(){return E(Oe)}const Pe=_(C);Pe.use(je,Oe),Pe.use(Le),Pe.mount("#app");
