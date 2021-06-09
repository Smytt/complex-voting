(this["webpackJsonpcomplex-voting"]=this["webpackJsonpcomplex-voting"]||[]).push([[0],{148:function(e,a,n){"use strict";n.r(a);var r=n(12),t=n(0),c=n.n(t),i=n(33),s=n.n(i),o=(n(90),n(91),n(20)),m=n(18),u=n(151),l=n(152),d=n(153),j=n(14),b=n(50),p=n.n(b),O=n(25),h=n(3),f=function(){Object(j.b)();var e=Object(t.useState)({loading:!0}),a=Object(m.a)(e,2),n=a[0],r=a[1];return Object(t.useEffect)((function(){o.a.firestore().collection("meetings").get().then((function(e){var a=e.docs.map((function(e){return{id:e.id,data:e.data()}}));r({loading:!1,all:a})}))}),[]),Object(h.jsx)("div",{children:n.loading?Object(h.jsx)("div",{className:"text-center m-4",children:Object(h.jsx)(u.a,{animation:"border",className:"m-auto",variant:"primary"})}):Object(h.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"\u0418\u043c\u0435"}),Object(h.jsx)("th",{children:"\u0414\u0430\u0442\u0430"}),Object(h.jsx)("th",{children:"\u041a\u0432\u043e\u0440\u0443\u043c"}),Object(h.jsx)("th",{children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"}),Object(h.jsx)("th",{children:"\u0415\u043a\u0441\u043f\u043e\u0440\u0442"})]})}),Object(h.jsx)("tbody",{children:n.all.map((function(e,a){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.data.name}),Object(h.jsx)("td",{children:p()(e.data.date).locale("bg").format("LL")}),Object(h.jsx)("td",{children:e.data.quorum.length}),Object(h.jsx)("td",{children:e.data.open?Object(h.jsx)(O.c,{to:"/meeting/".concat(e.id),children:Object(h.jsx)(d.a,{size:"sm",children:"\u0421\u0442\u0430\u0440\u0442"})}):Object(h.jsx)(d.a,{size:"sm",variant:"secondary",disabled:!0,children:"\u041f\u0440\u0438\u043a\u043b\u044e\u0447\u0438\u043b\u043e"})}),Object(h.jsx)("td",{children:Object(h.jsx)(d.a,{size:"sm",variant:"success",disabled:e.data.open,children:"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b"})})]},a)}))})]})})},x=n(162),v=n(15),g=n(24),y=n(21),E=n.n(y),C=n(27),N=n(154),k=n(159),w=n(155),S=n(79),T=function(){var e=Object(v.e)(),a=Object(t.useState)(""),n=Object(m.a)(a,2),r=n[0],c=n[1],i=Object(t.useState)(""),s=Object(m.a)(i,2),u=s[0],l=s[1],j=Object(t.useState)([{position:1,text:""}]),b=Object(m.a)(j,2),O=b[0],f=b[1],x=function(){var a=Object(C.a)(E.a.mark((function a(){return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o.a.firestore().collection("meetings").doc(r.replace(/ /g,"-")).set({name:r,date:p()(u).format("DD-MM-YYYY"),open:!0,quorum:[],topics:O});case 3:e.push("/"),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.error(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(){return a.apply(this,arguments)}}();return Object(h.jsxs)(N.a,{className:"my-4",children:[Object(h.jsx)("h1",{children:"\u0414\u043e\u0431\u0430\u0432\u044f\u043d\u0435 \u043d\u0430 \u043d\u043e\u0432\u043e \u041e\u0421"}),Object(h.jsxs)(k.a,{children:[Object(h.jsxs)(k.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(k.a.Label,{children:"\u0418\u043c\u0435"}),Object(h.jsx)(k.a.Control,{type:"text",placeholder:"\u0418\u043c\u0435 \u043d\u0430 \u041e\u0421",value:r,onChange:function(e){return c(e.target.value)}})]}),Object(h.jsxs)(k.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(k.a.Label,{children:"\u0414\u0430\u0442\u0430"}),Object(h.jsx)(k.a.Control,{type:"text",placeholder:"\u0414\u0430\u0442\u0430 \u0437\u0430 \u043f\u0440\u043e\u0432\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u041e\u0421",onChange:function(e){return l(e.target.value)}})]}),Object(h.jsx)("h2",{children:"\u0422\u0435\u043c\u0438:"}),O.map((function(e){return Object(h.jsxs)(w.a,{className:"mb-3",children:[Object(h.jsxs)(w.a.Text,{children:[e.position," "]}),Object(h.jsx)(S.a,{type:"text",value:e.text,onChange:function(a){return function(e,a){O&&(O.find((function(e){return e.position===a})).text=e.target.value,a===O.length&&O.push({position:O.length+1,text:""}),f(Object(g.a)(O)))}(a,e.position)}}),Object(h.jsx)(d.a,{variant:"primary",onClick:function(a){!function(e,a){var n=O.find((function(e){return e.position===a})),r=O.find((function(e){return e.position===a-1}));n.position=n.position-1,r.position=r.position+1,f(Object(g.a)(O.sort((function(e,a){return e.position<a.position?-1:1}))))}(0,e.position)},disabled:1===e.position||e.position===O.length,children:"\u2191"}),Object(h.jsx)(d.a,{variant:"primary",onClick:function(a){!function(e,a){var n=O.find((function(e){return e.position===a})),r=O.find((function(e){return e.position===a+1}));n.position=n.position+1,r.position=r.position-1,f(Object(g.a)(O.sort((function(e,a){return e.position<a.position?-1:1}))))}(0,e.position)},disabled:e.position>=O.length-1,children:"\u2193"})]},e.position)})),Object(h.jsx)(d.a,{variant:"primary",onClick:x,disabled:!r,children:"\u0417\u0430\u043f\u0430\u0437\u0438"})]})]})},I=[{name:"\u0410-001\u0410",area:"2.50"},{name:"\u041c-01",area:"1.84"},{name:"\u041c-02",area:"1.70"},{name:"\u041c-03",area:"1.94"},{name:"\u041c-04",area:"1.93"},{name:"\u041c-05",area:"1.84"},{name:"\u041c-06",area:"2.39"},{name:"\u041c-07",area:"1.19"},{name:"\u041c-08",area:"1.05"},{name:"\u041c-09",area:"10.11"},{name:"\u041c-10",area:"1.76"},{name:"\u041c-11",area:"1.94"},{name:"\u041c-12",area:"1.55"},{name:"\u041c-13",area:"1.55"},{name:"\u041c-14",area:"2.04"},{name:"\u041c-15",area:"1.24"},{name:"\u041c-16",area:"1.24"},{name:"\u041c-17",area:"2.45"},{name:"\u041c-18",area:"1.41"},{name:"\u041c-19",area:"1.41"},{name:"\u041c-20",area:"2.45"},{name:"\u041c-21",area:"1.24"},{name:"\u041c-22",area:"1.24"},{name:"\u041c-23",area:"3.63"},{name:"\u0410-01",area:"16.35"},{name:"\u0410-02",area:"13.52"},{name:"\u0410-03",area:"14.10"},{name:"\u0411-01",area:"14.10"},{name:"\u0411-02",area:"13.52"},{name:"\u0411-03",area:"14.09"},{name:"\u0412-01",area:"20.23"},{name:"\u0412-02",area:"8.93"},{name:"\u0412-03",area:"10.63"},{name:"\u0412-04",area:"14.81"},{name:"\u0412-05",area:"13.32"},{name:"\u0412-06",area:"9.54"},{name:"\u0413-01",area:"14.18"},{name:"\u0413-02",area:"13.63"},{name:"\u0413-03",area:"8.41"},{name:"\u0413-04",area:"14.23"},{name:"\u0414-01",area:"14.23"},{name:"\u0414-02",area:"8.41"},{name:"\u0414-03",area:"13.63"},{name:"\u0414-04",area:"14.18"},{name:"\u0415-01",area:"14.15"},{name:"\u0415-02",area:"9.63"},{name:"\u0415-03",area:"8.42"},{name:"\u0415-04",area:"17.09"},{name:"\u0416-01",area:"8.42"},{name:"\u0416-02",area:"17.09"},{name:"\u0416-03",area:"9.63"},{name:"\u0416-04",area:"14.15"},{name:"\u0417-01",area:"14.18"},{name:"\u0417-02",area:"13.96"},{name:"\u0417-03",area:"16.37"},{name:"\u0410-04",area:"16.35"},{name:"\u0410-05",area:"13.52"},{name:"\u0410-06",area:"14.10"},{name:"\u0411-04",area:"14.10"},{name:"\u0411-05",area:"13.52"},{name:"\u0411-06",area:"14.09"},{name:"\u0412-07",area:"20.23"},{name:"\u0412-08",area:"8.93"},{name:"\u0412-09",area:"10.63"},{name:"\u0412-10",area:"14.81"},{name:"\u0412-11",area:"13.32"},{name:"\u0412-12",area:"9.54"},{name:"\u0413-05",area:"14.18"},{name:"\u0413-06",area:"13.63"},{name:"\u0413-07",area:"8.41"},{name:"\u0413-08",area:"14.23"},{name:"\u0414-05",area:"14.23"},{name:"\u0414-06",area:"8.41"},{name:"\u0414-07",area:"13.63"},{name:"\u0414-08",area:"14.18"},{name:"\u0415-05",area:"14.15"},{name:"\u0415-06",area:"9.63"},{name:"\u0415-07",area:"8.42"},{name:"\u0415-08",area:"17.09"},{name:"\u0416-05",area:"8.42"},{name:"\u0416-06",area:"17.09"},{name:"\u0416-07",area:"9.63"},{name:"\u0416-08",area:"14.15"},{name:"\u0417-04",area:"14.19"},{name:"\u0417-05",area:"14.33"},{name:"\u0417-06",area:"16.51"},{name:"\u0410-07",area:"16.35"},{name:"\u0410-08",area:"13.52"},{name:"\u0410-09",area:"14.10"},{name:"\u0411-07",area:"14.10"},{name:"\u0411-08",area:"13.52"},{name:"\u0411-09",area:"14.09"},{name:"\u0412-13",area:"20.23"},{name:"\u0412-14",area:"8.93"},{name:"\u0412-15",area:"10.63"},{name:"\u0412-16",area:"14.81"},{name:"\u0412-17",area:"13.32"},{name:"\u0412-18",area:"9.54"},{name:"\u0413-09",area:"14.18"},{name:"\u0413-10",area:"13.63"},{name:"\u0413-11",area:"8.41"},{name:"\u0413-12",area:"14.23"},{name:"\u0414-09",area:"14.23"},{name:"\u0414-10",area:"8.42"},{name:"\u0414-11",area:"13.63"},{name:"\u0414-12",area:"14.18"},{name:"\u0415-09",area:"14.15"},{name:"\u0415-10",area:"9.63"},{name:"\u0415-11",area:"8.42"},{name:"\u0415-12",area:"17.09"},{name:"\u0416-09",area:"8.42"},{name:"\u0416-10",area:"17.09"},{name:"\u0416-11",area:"9.63"},{name:"\u0416-12",area:"14.15"},{name:"\u0417-07",area:"14.24"},{name:"\u0417-08",area:"14.33"},{name:"\u0417-09",area:"16.51"},{name:"\u0410-10",area:"16.35"},{name:"\u0410-11",area:"13.52"},{name:"\u0410-12",area:"14.10"},{name:"\u0411-10",area:"14.10"},{name:"\u0411-11",area:"13.52"},{name:"\u0411-12",area:"14.09"},{name:"\u0412-19",area:"20.23"},{name:"\u0412-20",area:"8.93"},{name:"\u0412-21",area:"10.63"},{name:"\u0412-22",area:"14.81"},{name:"\u0412-23",area:"13.32"},{name:"\u0412-24",area:"9.54"},{name:"\u0413-13",area:"14.18"},{name:"\u0413-14",area:"13.63"},{name:"\u0413-15",area:"8.41"},{name:"\u0413-16",area:"14.23"},{name:"\u0414-13",area:"14.23"},{name:"\u0414-14",area:"8.41"},{name:"\u0414-15",area:"13.63"},{name:"\u0414-16",area:"14.18"},{name:"\u0415-13",area:"14.15"},{name:"\u0415-14",area:"9.63"},{name:"\u0415-15",area:"8.42"},{name:"\u0415-16",area:"17.09"},{name:"\u0416-13",area:"8.42"},{name:"\u0416-14",area:"17.09"},{name:"\u0416-15",area:"9.63"},{name:"\u0416-16",area:"14.15"},{name:"\u0417-10",area:"14.19"},{name:"\u0417-11",area:"14.33"},{name:"\u0417-12",area:"16.51"},{name:"\u0410-13",area:"16.28"},{name:"\u0410-14",area:"13.52"},{name:"\u0410-15",area:"14.10"},{name:"\u0411-13",area:"14.10"},{name:"\u0411-14",area:"13.52"},{name:"\u0411-15",area:"14.09"},{name:"\u0412-25",area:"20.24"},{name:"\u0412-26",area:"8.93"},{name:"\u0412-27",area:"10.63"},{name:"\u0412-28",area:"14.81"},{name:"\u0412-29",area:"13.32"},{name:"\u0412-30",area:"9.54"},{name:"\u0413-17",area:"14.18"},{name:"\u0413-18",area:"13.63"},{name:"\u0413-19",area:"8.41"},{name:"\u0413-20",area:"14.23"},{name:"\u0414-17",area:"14.23"},{name:"\u0414-18",area:"8.41"},{name:"\u0414-19",area:"13.63"},{name:"\u0414-20",area:"14.18"},{name:"\u0415-17",area:"14.15"},{name:"\u0415-18",area:"9.63"},{name:"\u0415-19",area:"8.42"},{name:"\u0415-20",area:"17.09"},{name:"\u0416-17",area:"8.42"},{name:"\u0416-18",area:"17.09"},{name:"\u0416-19",area:"9.63"},{name:"\u0416-20",area:"14.15"},{name:"\u0417-13",area:"14.19"},{name:"\u0417-14",area:"14.33"},{name:"\u0417-15",area:"16.51"},{name:"\u0410-16",area:"14.12"},{name:"\u0410-17",area:"9.39"},{name:"\u0410-18",area:"14.10"},{name:"\u0411-16",area:"14.10"},{name:"\u0411-17",area:"13.52"},{name:"\u0411-18",area:"14.09"},{name:"\u0412-31",area:"20.23"},{name:"\u0412-32",area:"8.93"},{name:"\u0412-33",area:"10.63"},{name:"\u0412-34",area:"14.81"},{name:"\u0412-35",area:"13.32"},{name:"\u0412-36",area:"9.54"},{name:"\u0413-21",area:"14.18"},{name:"\u0413-22",area:"13.63"},{name:"\u0413-23",area:"8.41"},{name:"\u0413-24",area:"14.23"},{name:"\u0414-21",area:"14.23"},{name:"\u0414-22",area:"8.41"},{name:"\u0414-23",area:"13.63"},{name:"\u0414-24",area:"14.18"},{name:"\u0415-21",area:"14.15"},{name:"\u0415-22",area:"9.63"},{name:"\u0415-23",area:"8.42"},{name:"\u0415-24",area:"17.09"},{name:"\u0416-21",area:"8.42"},{name:"\u0416-22",area:"17.09"},{name:"\u0416-23",area:"9.63"},{name:"\u0416-24",area:"14.15"},{name:"\u0417-16",area:"14.22"},{name:"\u0417-17",area:"14.33"},{name:"\u0417-18",area:"16.51"},{name:"\u0410-19",area:"11.91"},{name:"\u0410-20",area:"9.39"},{name:"\u0410-21",area:"14.10"},{name:"\u0411-19",area:"14.10"},{name:"\u0411-20",area:"13.52"},{name:"\u0411-21",area:"14.09"},{name:"\u0412-37",area:"20.24"},{name:"\u0412-38",area:"8.93"},{name:"\u0412-39",area:"10.63"},{name:"\u0412-40",area:"14.81"},{name:"\u0412-41",area:"13.32"},{name:"\u0412-42",area:"9.54"},{name:"\u0413-25",area:"14.18"},{name:"\u0413-26",area:"13.63"},{name:"\u0413-27",area:"8.41"},{name:"\u0413-28",area:"14.23"},{name:"\u0414-25",area:"14.23"},{name:"\u0414-26",area:"8.41"},{name:"\u0414-27",area:"13.63"},{name:"\u0414-28",area:"14.18"},{name:"\u0415-25",area:"14.15"},{name:"\u0415-26",area:"9.63"},{name:"\u0415-27",area:"8.42"},{name:"\u0415-28",area:"17.09"},{name:"\u0416-25",area:"8.42"},{name:"\u0416-26",area:"17.09"},{name:"\u0416-27",area:"9.63"},{name:"\u0416-28",area:"14.15"},{name:"\u0417-19",area:"14.19"},{name:"\u0417-20",area:"14.33"},{name:"\u0417-21",area:"16.51"},{name:"\u0410-22",area:"10.45"},{name:"\u0410-23",area:"19.09"},{name:"\u0411-22",area:"10.49"},{name:"\u0411-23",area:"20.24"},{name:"\u0412-43",area:"20.30"},{name:"\u0412-44",area:"18.40"},{name:"\u0412-45",area:"19.18"},{name:"\u0413-29",area:"13.50"},{name:"\u0413-30",area:"10.85"},{name:"\u0413-31",area:"17.01"},{name:"\u0414-29",area:"17.01"},{name:"\u0414-30",area:"10.84"},{name:"\u0414-31",area:"15.39"},{name:"\u0415-29",area:"15.39"},{name:"\u0415-30",area:"10.92"},{name:"\u0415-31",area:"17.02"},{name:"\u0416-29",area:"17.02"},{name:"\u0416-30",area:"10.88"},{name:"\u0416-31",area:"15.41"},{name:"\u0417-22",area:"15.46"},{name:"\u0417-23",area:"19.09"}],_=function(){var e=[],a=[],n=[],r=[],t=[],c=[],i=[],s=[],o=[];return I.forEach((function(m){switch(m.name[0]){case"\u0410":e.push({name:m.name,area:+m.area});break;case"\u0411":a.push({name:m.name,area:+m.area});break;case"\u0412":n.push({name:m.name,area:+m.area});break;case"\u0413":r.push({name:m.name,area:+m.area});break;case"\u0414":t.push({name:m.name,area:+m.area});break;case"\u0415":c.push({name:m.name,area:+m.area});break;case"\u0416":i.push({name:m.name,area:+m.area});break;case"\u0417":s.push({name:m.name,area:+m.area});break;case"\u041c":o.push({name:m.name,area:+m.area});break;default:console.log(m)}})),[].concat(e,a,n,r,t,c,i,s,o)},R=["\u0410","\u0411","\u0412","\u0413","\u0414","\u0415","\u0416","\u0417","\u041c"],G="FETCH_PROPERTIES_LOADING",F="FETCH_PROPERTIES_SUCCESS",L="FETCH_PROPERTIES_ERROR",P="FETCH_MEETINGS_LOADING",A="FETCH_MEETINGS_SUCCESS",q="FETCH_MEETINGS_ERROR",B="FETCH_MEETING_LOADING",H="FETCH_MEETING_SUCCESS",M="FETCH_MEETING_ERROR",D="SET_SUPPORTED",z="SET_AGAINST",K="SET_REFRAINED",U=function(){var e=Object(j.c)((function(e){return e.properties}));return e.loading?Object(h.jsx)("p",{children:"loading..."}):Object(h.jsx)("div",{children:e.all.map((function(e){return Object(h.jsxs)("p",{children:[e.name," \u0441 ",e.area," \u043a\u0432.\u043c. \u0438\u0434\u0435\u0430\u043b\u043d\u0438 \u0447\u0430\u0441\u0442\u0438"]})}))})},Y=n(160),W=n(158),J=n(156),Q=function(e){var a=e.handler,n=e.text,r=Object(t.useState)(!1),c=Object(m.a)(r,2),i=c[0],s=c[1],o=function(){var e=Object(C.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,a();case 3:s(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(d.a,{className:"w-100 my-2",variant:"info",onClick:o,disabled:i,children:i?Object(h.jsx)(u.a,{animation:"grow",size:"sm",className:"m-auto"}):n})},V=function(e,a){var n=e.filter((function(e){return a.some((function(a){return a===e.name}))})).reduce((function(e,a){return e+=a.area}),0),r=e.reduce((function(e,a){return e+=a.area}),0);return Math.round(100*n*100/r)/100},X=function(e){var a=e.reduce((function(e,a){var n=a.name.split("-")[1];return e[n]?(e[n].push(a),e):(e[n]=[a],e)}),{});return Object.keys(a).forEach((function(e){var n=R.map((function(n,r){return a[e].find((function(e){return e.name.startsWith(n)}))||""}));a[e]=n})),a},Z=function(){var e=Object(v.f)().id,a=Object(j.c)((function(e){return e.meeting.data.quorum})),n=Object(t.useState)(a),r=Object(m.a)(n,2),c=r[0],i=r[1],s=Object(j.c)((function(e){return e.properties})),u=Object(j.c)((function(e){return X(e.properties.all)})),b=V(s.all,c),p=function(){var a=Object(C.a)(E.a.mark((function a(){return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.firestore().collection("meetings").doc(e).update({quorum:c});case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)(J.a,{striped:!0,variant:b<50?"danger":"success",className:"my-2",now:b,label:"".concat(b,"%")}),Object(h.jsx)(Q,{text:"\u0417\u0430\u043f\u0430\u0437\u0438",handler:p}),Object(h.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,className:"text-center",children:[Object(h.jsxs)("thead",{children:[Object(h.jsx)("tr",{children:R.map((function(e){return Object(h.jsx)("th",{children:e},e)}))}),Object.keys(u).sort((function(e,a){return e<a?-1:1})).map((function(e){return Object(h.jsx)("tr",{children:u[e].map((function(e,a){return e.name?Object(h.jsx)("td",{className:"p-1",children:Object(h.jsx)(d.a,{size:"sm",id:"toggle-check",variant:c.includes(e.name)?"primary":"outline-secondary",onClick:function(a){return n=e.name,void(c.includes(n)?i(c.filter((function(e){return e!==n}))):i([].concat(Object(g.a)(c),[n])));var n},children:e.name})},e.name):Object(h.jsx)("td",{},a)}))},e)}))]}),Object(h.jsx)("tbody",{})]})]})},$=n(161),ee=n(163),ae=n(157),ne=n(80),re=function(e){var a=e.topic,n=Object(v.f)().id,r=Object(j.c)((function(e){return e.meeting.data.quorum})),c=Object(j.c)((function(e){return e.properties.all.filter((function(e){return r.includes(e.name)}))})),i=Object(j.c)((function(e){return e.meeting.data.topics})),s=Object(j.c)((function(e){return X(e.properties.all.filter((function(a){return e.meeting.data.quorum.some((function(e){return e===a.name}))})))})),u=Object(j.c)((function(e){var n,r,t;return{supported:(null===(n=a.votes)||void 0===n?void 0:n.supported)||[],against:(null===(r=a.votes)||void 0===r?void 0:r.against)||[],refrained:(null===(t=a.votes)||void 0===t?void 0:t.refrained)||e.meeting.data.quorum}})),b=Object(t.useReducer)((function(e,a){switch(console.log(a),a.type){case D:return{supported:[].concat(Object(g.a)(e.supported),Object(g.a)(a.payload)),against:e.against.filter((function(e){return!a.payload.includes(e)})),refrained:e.refrained.filter((function(e){return!a.payload.includes(e)}))};case z:return{supported:e.supported.filter((function(e){return!a.payload.includes(e)})),against:[].concat(Object(g.a)(e.against),Object(g.a)(a.payload)),refrained:e.refrained.filter((function(e){return!a.payload.includes(e)}))};case K:return{supported:e.supported.filter((function(e){return!a.payload.includes(e)})),against:e.against.filter((function(e){return!a.payload.includes(e)})),refrained:[].concat(Object(g.a)(e.refrained),Object(g.a)(a.payload))};default:return e}}),u),p=Object(m.a)(b,2),O=p[0],f=p[1];Object(t.useEffect)((function(){var e=r.filter((function(e){return!O.supported.includes(e)&&!O.against.includes(e)&&!O.refrained.includes(e)}));e.length>0&&f({type:K,payload:e})}),[r]);var x=function(){var e=Object(C.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.find((function(e){return e.position===a.position})).votes=O,e.next=3,o.a.firestore().collection("meetings").doc(n).update({topics:Object(g.a)(i)});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=V(c,O.supported)||0,N=V(c,O.against)||0,k=V(c,O.refrained)||0;return Object(h.jsxs)("div",{children:[Object(h.jsx)(J.a,{striped:!0,variant:"success",className:"my-2",now:y,label:"\u0417\u0410 - ".concat(y,"%")}),Object(h.jsx)(J.a,{striped:!0,variant:"danger",className:"my-2",now:N,label:"\u0417\u0410 - ".concat(N,"%")}),Object(h.jsx)(J.a,{striped:!0,variant:"warning",className:"my-2",now:k,label:"\u0417\u0410 - ".concat(k,"%")}),Object(h.jsx)(Q,{text:"\u0417\u0430\u043f\u0430\u0437\u0438",handler:x}),Object(h.jsxs)(ae.a,{className:"my-2",children:[Object(h.jsx)(ne.a,{children:Object(h.jsxs)(d.a,{className:"w-100",variant:"success",onClick:function(){return f({type:D,payload:r})},children:["100% ",Object(h.jsx)("strong",{children:'"\u0417\u0410"'})]})}),Object(h.jsx)(ne.a,{children:Object(h.jsxs)(d.a,{className:"w-100",variant:"warning",onClick:function(){return f({type:K,payload:r})},children:["100% ",Object(h.jsx)("strong",{children:'"\u0412\u042a\u0417\u0414\u042a\u0420\u0416\u0410\u041b \u0421\u0415"'})]})}),Object(h.jsx)(ne.a,{children:Object(h.jsxs)(d.a,{className:"w-100",variant:"danger",onClick:function(){return f({type:z,payload:r})},children:["100% ",Object(h.jsx)("strong",{children:'"\u041f\u0420\u041e\u0422\u0418\u0412"'})]})})]}),Object(h.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,className:"text-center",children:[Object(h.jsxs)("thead",{children:[Object(h.jsx)("tr",{children:R.map((function(e){return Object(h.jsx)("th",{children:e},e)}))}),Object.keys(s).sort((function(e,a){return e<a?-1:1})).map((function(e){return Object(h.jsx)("tr",{children:s[e].map((function(e,a){return e.name?Object(h.jsx)("td",{className:"p-1",children:Object(h.jsx)(d.a,{size:"sm",variant:(n=e.name,O.supported.includes(n)?"success":O.against.includes(n)?"danger":O.refrained.includes(n)?"warning":void 0),onClick:function(a){return function(e){O.supported.includes(e)?f({type:z,payload:[e]}):O.against.includes(e)?f({type:K,payload:[e]}):O.refrained.includes(e)&&f({type:D,payload:[e]})}(e.name)},children:e.name})},e.name):Object(h.jsx)("td",{},a);var n}))},e)}))]}),Object(h.jsx)("tbody",{})]})]})},te=function(){var e=Object(v.f)().id,a=Object(j.c)((function(e){return e.meeting.data.topics})),n=Object(t.useState)(""),r=Object(m.a)(n,2),c=r[0],i=r[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)($.a,{defaultActiveKey:"0",children:a.slice(0,a.length-1).map((function(e){return Object(h.jsxs)(ee.a,{children:[Object(h.jsx)(ee.a.Header,{children:Object(h.jsxs)($.a.Toggle,{as:d.a,variant:"link",eventKey:e.position,children:[e.position,". ",e.text.length>500?e.text.substr(0,500)+"...":e.text]})}),Object(h.jsx)($.a.Collapse,{eventKey:e.position,children:Object(h.jsxs)(ee.a.Body,{children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"\u0412\u044a\u043f\u0440\u043e\u0441:"})," ",e.text]}),Object(h.jsx)(re,{topic:e})]})})]},e.position)}))}),Object(h.jsxs)(k.a,{className:"my-2",children:[Object(h.jsx)(k.a.Label,{children:"\u0414\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u0435\u043d \u0432\u044a\u043f\u0440\u043e\u0441:"}),Object(h.jsxs)(w.a,{children:[Object(h.jsx)(S.a,{type:"text",placeholder:"\u0412\u044a\u043f\u0440\u043e\u0441...",value:c,onChange:function(e){return i(e.target.value)}}),Object(h.jsx)(d.a,{onClick:function(){return a[a.length-1].text=c,a.push({position:a.length+1,text:""}),void o.a.firestore().collection("meetings").doc(e).update({topics:Object(g.a)(a)})},children:"\u0414\u043e\u0431\u0430\u0432\u0438"})]})]})]})},ce=function(){var e=Object(v.f)().id,a=Object(j.b)(),n=Object(t.useState)("quorum"),r=Object(m.a)(n,2),c=r[0],i=r[1],s=Object(j.c)((function(e){return e.meeting}));return Object(t.useEffect)((function(){var n=function(){};return a(function(e,a){return function(){var n=Object(C.a)(E.a.mark((function n(r){var t;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r({type:B});try{t=o.a.firestore().collection("meetings").doc(e).onSnapshot((function(e){r({type:H,payload:e.data()})})),a(t)}catch(c){r({type:M,payload:c})}case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(e,(function(e){return n=e}))),function(){return n()}}),[]),Object(h.jsx)("div",{children:s.loading?"loading........":Object(h.jsx)(N.a,{className:"my-4",children:s.loading?Object(h.jsx)("div",{className:"text-center m-4",children:Object(h.jsx)(u.a,{animation:"border",className:"m-auto",variant:"primary"})}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:s.data.name}),Object(h.jsxs)(Y.a,{id:"controlled-tab-example",activeKey:c,onSelect:function(e){return i(e||"quorum")},className:"mb-3",children:[Object(h.jsx)(W.a,{eventKey:"quorum",title:"\u041a\u0432\u043e\u0440\u0443\u043c",children:Object(h.jsx)(Z,{})}),Object(h.jsx)(W.a,{eventKey:"topics",title:"\u0422\u0435\u043c\u0438",children:Object(h.jsx)(te,{})})]})]})})})};var ie=function(e){e.user;var a=Object(j.b)();return Object(t.useEffect)((function(){a(function(){var e=Object(C.a)(E.a.mark((function e(a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:G}),a({type:F,payload:_()});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}),[]),Object(h.jsxs)("div",{children:[Object(h.jsxs)(x.a,{bg:"light",children:[Object(h.jsx)(O.c,{to:"/",children:Object(h.jsx)(x.a.Brand,{children:"\u0421\u043e\u043d\u0430\u0442\u0430 378"})}),Object(h.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsxs)(x.a.Collapse,{id:"basic-navbar-nav",children:[Object(h.jsx)(O.c,{className:"mr-auto",to:"/add-meeting",children:Object(h.jsx)(d.a,{variant:"outline-secondary",children:"\u041d\u043e\u0432\u043e \u041e\u0421"})}),Object(h.jsx)(O.c,{className:"mr-auto",to:"/properties",children:Object(h.jsx)(d.a,{variant:"outline-secondary",children:"\u0421\u043f\u0438\u0441\u044a\u043a \u0441 \u0438\u043c\u043e\u0442\u0438"})}),Object(h.jsx)(d.a,{variant:"outline-success",onClick:function(){return o.a.auth().signOut()},children:"\u0418\u0437\u0445\u043e\u0434"})]})]}),Object(h.jsxs)(O.b,{basename:"/",children:[Object(h.jsx)(v.a,{path:"/",component:f,exact:!0}),Object(h.jsx)(v.a,{path:"/properties",component:U,exact:!0}),Object(h.jsx)(v.a,{path:"/add-meeting",component:T}),Object(h.jsx)(v.a,{path:"/meeting/:id",component:ce})]})]})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,164)).then((function(a){var n=a.getCLS,r=a.getFID,t=a.getFCP,c=a.getLCP,i=a.getTTFB;n(e),r(e),t(e),c(e),i(e)}))},oe=n(83),me=n(72),ue=(n(145),n(146),n(147),function(){var e=Object(t.useState)(""),a=Object(m.a)(e,2),n=a[0],r=a[1],c=Object(t.useState)(""),i=Object(m.a)(c,2),s=i[0],u=i[1];return Object(h.jsxs)(N.a,{style:{width:"500px"},children:[Object(h.jsx)("h1",{children:"\u041c\u043e\u043b\u044f, \u0432\u043b\u0435\u0437\u0442\u0435 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u0430 \u0441\u0438."}),Object(h.jsxs)(k.a,{children:[Object(h.jsxs)(k.a.Group,{controlId:"formBasicEmail",className:"mb-3",children:[Object(h.jsx)(k.a.Label,{children:"Email"}),Object(h.jsx)(k.a.Control,{type:"email",onChange:function(e){return r(e.target.value)}})]}),Object(h.jsxs)(k.a.Group,{controlId:"formBasicPassword",className:"mb-3",children:[Object(h.jsx)(k.a.Label,{children:"\u041f\u0430\u0440\u043e\u043b\u0430"}),Object(h.jsx)(k.a.Control,{type:"password",onChange:function(e){return u(e.target.value)}})]}),Object(h.jsx)(d.a,{variant:"primary",onClick:function(){return o.a.auth().signInWithEmailAndPassword(n,s)},children:"\u0412\u043b\u0435\u0437"})]})]})}),le=n(58),de=n(85),je={loading:!1,all:[],error:{}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case G:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case F:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,all:a.payload,error:{}});case L:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:a.payload});default:return e}},pe={loading:!1,all:[],error:{}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case P:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case A:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,all:a.payload,error:{}});case q:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:a.payload});default:return e}},he={loading:!0,data:{},error:{}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case B:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case H:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,data:a.payload,error:{}});case M:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:a.payload});default:return e}},xe=Object(le.b)({properties:be,meetings:Oe,meeting:fe}),ve=Object(le.c)(xe,Object(le.a)(de.a));s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(j.a,{store:ve,children:Object(h.jsx)(me.b,Object(r.a)(Object(r.a)({firebase:oe.a},{apiKey:"AIzaSyBg49A4-rwUOkdAWEIv7k_4h6k4U3GTvxg",authDomain:"complex-voting.firebaseapp.com",projectId:"complex-voting",databaseURL:"https://complex-voting-default-rtdb.firebaseio.com/",storageBucket:"complex-voting.appspot.com",messagingSenderId:"129002144891",appId:"1:129002144891:web:50972f69a2954940b18ede"}),{},{children:Object(h.jsx)(me.a,{children:function(e){var a=e.isSignedIn;e.user;return a?Object(h.jsx)(O.a,{children:Object(h.jsx)(ie,{user:!0})}):Object(h.jsx)(ue,{})}})}))})}),document.getElementById("root")),se()},90:function(e,a,n){},91:function(e,a,n){}},[[148,1,2]]]);
//# sourceMappingURL=main.7c43b698.chunk.js.map