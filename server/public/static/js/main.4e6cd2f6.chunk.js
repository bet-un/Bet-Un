(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{117:function(e,a,t){e.exports=t(260)},122:function(e,a,t){},260:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(27),c=t.n(r),s=(t(122),t(6)),o=t(9),i=t(11),m=t(10),u=t(12),d=t(29),h=t(50),p=t.n(h),E=function e(){var a=this;Object(s.a)(this,e),this.signup=function(e,t){return a.service.post("signup",{username:e,password:t})},this.login=function(e,t){return a.service.post("login",{username:e,password:t})},this.logout=function(){return a.service.post("logout")},this.loggedin=function(){return a.service.get("loggedin")},this.updateUser=function(){return a.service.post("update")},this.service=p.a.create({baseURL:"".concat("https://betoon.herokuapp.com/api/"),withCredentials:!0})},g=t(20),b=t(41),v=function e(){var a=this;Object(s.a)(this,e),this.getLeagues=function(e){return a.service.get("https://apiv2.apifootball.com/?action=get_standings&league_id=".concat(e,"&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1"))},this.getClubs=function(e){return a.service.get("https://apiv2.apifootball.com/?action=get_teams&league_id=".concat(e,"&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1"))},this.getJornada=function(e){return a.service.get("https://apiv2.apifootball.com/?action=get_events&from=2019-08-23&to=2019-08-26&league_id=".concat(e,"&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1"))},this.getPredictions=function(e){return a.service.get("https://apiv2.apifootball.com/?action=get_predictions&from=2019-08-30&to=2019-09-01&league_id=".concat(e,"&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1"))},this.getPredictionsCarousel=function(){return a.service.get("https://apiv2.apifootball.com/?action=get_predictions&from=2019-08-30&to=2019-09-01&league_id=468&APIkey=4312cac6d96f0cdc803bd9c9065d0c6f7d6e7750302012b19a8790e6d64251a1")},this.getBets=function(){return a.service.get("getAllBets")},this.postBet=function(e){return a.service.post("postBet",e)},this.service=p.a.create({baseURL:"".concat("https://betoon.herokuapp.com/api/")})},f=(t(57),function(e){e.match_id;var a=e.match_awayteam_score,t=e.match_hometeam_score,n=e.match_status,r=e.match_date,c=e.prob_D,s=e.prob_AW,o=e.prob_HW,i=e.match_time,m=e.match_awayteam_name,u=e.match_hometeam_name,d=e.onClick;return l.a.createElement("tr",{className:"timeM pointer",onClick:d},l.a.createElement("td",null,l.a.createElement("p",null,u)),l.a.createElement("td",null,l.a.createElement("p",null,t)),l.a.createElement("td",null,l.a.createElement("p",null,"-")),l.a.createElement("td",null,l.a.createElement("p",null,a)),l.a.createElement("td",null,l.a.createElement("p",null,m)),l.a.createElement("td",null,l.a.createElement("p",null,i)),l.a.createElement("td",null,l.a.createElement("p",{className:"p-date"},r)),l.a.createElement("td",null,l.a.createElement("p",null,n)),l.a.createElement("td",null,l.a.createElement("p",null,o)),l.a.createElement("td",null,l.a.createElement("p",null,s)),l.a.createElement("td",null,l.a.createElement("p",null,c)))}),w=t(111),y=function(e){var a=e.match_time,t=e.match_date,n=e.match_awayteam_name,r=e.match_hometeam_name;return l.a.createElement("div",{style:{whiteSpace:"nowrap"}}," |  ",r," - ",n," on ",t," at ",a,"  |")},C=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={tickers:[]},e.services=new v,e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.services.getPredictionsCarousel("").then(function(a){return e.setState({tickers:a.data})}).catch(function(e){return console.log({err:e})})}},{key:"render",value:function(){var e=this;return 0!==this.state.tickers.length?l.a.createElement(w.a,{speed:5,mode:"smooth"},function(){return l.a.createElement("div",{className:"tick-pos"},e.state.tickers.map(function(e,a){return l.a.createElement(y,Object.assign({key:a},e))}))}):l.a.createElement("span",null,"Loading...")}}]),a}(n.Component),N=t(262),O=t(263),j=t(265);function S(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function k(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?S(t,!0).forEach(function(a){Object(g.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var _=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleModal=function(e,a){var n=!t.state.showModal[a],l=Object(b.a)(t.state.showModal);l[a]=n,t.setState(k({},t.state,{showModal:l}))},t.handleInputChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(k({},t.state,Object(g.a)({},n,l)))},t.handleFormSubmit=function(e){e.preventDefault(),console.log(t.state.user.balance[t.state.user.balance.length-1]),console.log(t.state.cantidad);var a=parseFloat(t.state.user.balance[t.state.user.balance.length-1])-parseFloat(t.state.cantidad);console.log(a),t.authServices.updateUser(t.state).then(function(e){t.setState({balance:a})}),t.services.postBet(t.state).then(function(e){}).catch(function(e){return console.log("error",e)})},t.handleChangeInput=function(e){e.preventDefault(),t.services.getPredictions(e.target.value).then(function(e){return t.setState({apuesta:e.data})}).catch(function(e){return console.log(e)})},t.state={apuesta:[],copy:[],showModal:[],user:[],balance:"",cantidad:"",apuestas:"",local:"",visitante:"",unoxdos:""},t.services=new v,t.authServices=new E,t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.services.getPredictions().then(function(a){return e.setState({apuesta:a.data,copy:a.data,showModal:Array(a.data.length-1).fill(!1)})}).catch(function(e){return console.log(e)}),this.authServices.loggedin().then(function(a){return e.setState({user:a.data})})}},{key:"render",value:function(){var e=this,a=this.state.user;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"carousel marg-bot"},l.a.createElement(C,null)),l.a.createElement("div",{className:"container tables"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group linea"},l.a.createElement("label",{htmlFor:"ligas"}),l.a.createElement("select",{name:"liga",className:"form-control",id:"ligas",value:this.state.liga,onChange:function(a){e.handleChangeInput(a)}},l.a.createElement("option",null,"Leagues"),l.a.createElement("option",{value:"468"},"Liga Santander"),l.a.createElement("option",{value:"148"},"Premier League"),l.a.createElement("option",{value:"176"},"Ligue 1"),l.a.createElement("option",{value:"195"},"Bundesliga"),l.a.createElement("option",{value:"262"},"Serie A"),l.a.createElement("option",{value:"343"},"Eredivisie")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"timeM"},l.a.createElement("th",null,l.a.createElement("p",null,"Local")),l.a.createElement("th",null,l.a.createElement("p",null,"G.L.")),l.a.createElement("th",null,l.a.createElement("p",null,"-")),l.a.createElement("th",null,l.a.createElement("p",null,"G.V.")),l.a.createElement("th",null,l.a.createElement("p",null,"Visitante")),l.a.createElement("th",null,l.a.createElement("p",null,"Hora")),l.a.createElement("th",null,l.a.createElement("p",null,"Fecha")),l.a.createElement("th",null,l.a.createElement("p",null,"Estado")),l.a.createElement("th",null,l.a.createElement("p",null,"Prob.V.L.")),l.a.createElement("th",null,l.a.createElement("p",null,"Prob.V.V.")),l.a.createElement("th",null,l.a.createElement("p",null,"Prob.E."))),this.state.apuesta&&this.state.apuesta.map(function(t,n){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,Object.assign({key:n},t,{onClick:function(a){return e.handleModal(a,n)}})),l.a.createElement(N.a,{centered:!0,size:"lg",show:e.state.showModal[n],onHide:function(a){return e.handleModal(a,n)}},l.a.createElement(N.a.Header,{closeButton:!0}),l.a.createElement("h3",{className:"center marg-top apuModal"},t.match_hometeam_name," - ",t.match_awayteam_name," "),l.a.createElement(N.a.Body,null,l.a.createElement("h4",{className:"center apuModal"},"Bet"),l.a.createElement("h5",{className:"apuModal"},"Salary: ",a.balance&&a.balance[a.balance.length-1],"\u20ac"),l.a.createElement(O.a,{onSubmit:e.handleFormSubmit},l.a.createElement("div",{className:"cont-bets marg-top-bot"},l.a.createElement("div",{className:"bets pointer"},"1"),l.a.createElement("div",{className:"bets pointer"},"X"),l.a.createElement("div",{className:"bets pointer"},"2")),l.a.createElement(O.a.Label,{htmlFor:"input-local"},"Local"),l.a.createElement(O.a.Control,{name:"local",type:"text",id:"input-local",value:e.state.local,placeholder:t.match_hometeam_name,onChange:e.handleInputChange}),l.a.createElement(O.a.Label,{htmlFor:"input-visitante"},"Visitante"),l.a.createElement(O.a.Control,{name:"visitante",type:"text",id:"input-visitante",value:e.state.visitante,placeholder:t.match_awayteam_name,onChange:e.handleInputChange}),l.a.createElement(O.a.Group,{controlId:"formGridState"},l.a.createElement(O.a.Label,{htmlFor:"input-apuestas"},"Seleccionar apuesta..."),l.a.createElement(O.a.Control,{as:"select",name:"apuestas",id:"input-apuestas",value:e.state.apuestas,onChange:e.handleInputChange},l.a.createElement("option",null,"Choose..."),l.a.createElement("option",{value:t.prob_HW},"1 => ",t.prob_HW),l.a.createElement("option",{value:t.prob_D},"X => ",t.prob_D),l.a.createElement("option",{value:t.prob_AW},"2 => ",t.prob_AW))),l.a.createElement("div",{className:"form-group"},l.a.createElement(O.a.Label,{htmlFor:"input-cantidad"},"Cantidad"),l.a.createElement(O.a.Control,{name:"cantidad",type:"number",id:"input-cantidad",value:e.state.cantidad,placeholder:"Cantidad",onChange:e.handleInputChange})),l.a.createElement("div",{className:"d-flex flex-column marg-top"},l.a.createElement(j.a,{variant:"dark",type:"submit",onClick:function(a){return e.handleModal(a,n)}},"BET!")))),l.a.createElement(N.a.Footer,null,l.a.createElement(j.a,{variant:"secondary",onClick:function(a){return e.handleModal(a,n)}},"Close"))))}))))))}}]),a}(n.Component),L=function(e){var a=e.statistics,t=e.match_time,n=e.match_status,r=e.match_awayteam_name,c=e.match_hometeam_score,s=e.match_awayteam_score,o=e.match_hometeam_name;return l.a.createElement("tr",null,l.a.createElement("td",null,o),l.a.createElement("td",null,c),l.a.createElement("td",null,l.a.createElement("p",null,"-")),l.a.createElement("td",null,s),l.a.createElement("td",null,r),l.a.createElement("td",null,t),l.a.createElement("td",null,n),l.a.createElement("td",null,a[0].home,"-",a[0].away))},P=(t(93),function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).handleChangeInput=function(a){a.preventDefault(),e.services.getJornada(a.target.value).then(function(a){return e.setState({jornadas:a.data})}).catch(function(e){return console.log(e)})},e.state={jornadas:[]},e.services=new v,e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.services.getJornada().then(function(a){return e.setState({jornadas:a.data})}).catch(function(e){return console.log(e)}),console.log(this.state.jornadas)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"carousel marg-bot"},l.a.createElement(C,null)),l.a.createElement("div",{className:"container tables"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("img",{src:"../logo192.png",alt:"Liga",width:"10%"})),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",{className:"form-group linea"},l.a.createElement("label",{htmlFor:"ligas"}),l.a.createElement("select",{name:"liga",className:"form-control",id:"ligas",value:this.state.liga,onChange:this.handleChangeInput},l.a.createElement("option",null),l.a.createElement("option",{value:"468"},"Liga Santander"),l.a.createElement("option",{value:"148"},"Premier League"),l.a.createElement("option",{value:"176"},"Ligue 1"),l.a.createElement("option",{value:"195"},"Bundesliga"),l.a.createElement("option",{value:"262"},"Serie A"),l.a.createElement("option",{value:"343"},"Eredivisie")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Local"),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null,"Visitante"),l.a.createElement("th",null,"Hora"),l.a.createElement("th",null,"Estado"),l.a.createElement("th",null,"Posesion")),this.state.jornadas&&this.state.jornadas.map(function(e,a){return l.a.createElement(L,Object.assign({key:a},e))})))))}}]),a}(n.Component)),M=t(8),I=function(e){var a=e.overall_league_PTS,t=e.overall_league_GA,n=e.overall_league_GF,r=e.overall_league_position,c=e.team_name,s=e.overall_league_payed,o=e.overall_league_L,i=e.overall_league_W,m=e.overall_league_D;return l.a.createElement("tr",null,l.a.createElement("th",null,r),l.a.createElement("td",null,l.a.createElement(M.b,{className:"club-links",to:"/Clubs"},c)),l.a.createElement("td",null,s),l.a.createElement("td",null,o),l.a.createElement("td",null,i),l.a.createElement("td",null,m),l.a.createElement("td",null,n),l.a.createElement("td",null,t),l.a.createElement("th",null,a))},U=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleChangeInput=function(e){e.preventDefault(),t.services.getLeagues(e.target.value).then(function(e){return t.setState({leagues:e.data})}).catch(function(e){return console.log(e)})},t.state={leagues:[],liga:""},t.services=new v,t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"carousel marg-bot"},l.a.createElement(C,null)),l.a.createElement("div",{className:"container tables"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("img",{src:"../laliga-santander-v-1200x1200_2018.png",alt:"Liga",width:"15%"}),l.a.createElement("img",{src:"../Premier League.png",alt:"Liga",width:"15%"}),l.a.createElement("img",{src:"../ligue_1.png",alt:"Liga",width:"15%"}),l.a.createElement("img",{src:"../bundesliga.png",alt:"Liga",width:"15%"}),l.a.createElement("img",{src:"../serie-a.png",alt:"Liga",width:"15%"}),l.a.createElement("img",{src:"../erediv.png",alt:"Liga",width:"12%"})),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",{className:"form-group linea"},l.a.createElement("label",{htmlFor:"ligas"}),l.a.createElement("select",{name:"liga",className:"form-control",id:"ligas",value:this.state.liga,onChange:function(a){e.handleChangeInput(a)}},l.a.createElement("option",null,"Leagues"),l.a.createElement("option",{value:"468"},"Liga Santander"),l.a.createElement("option",{value:"148"},"Premier League"),l.a.createElement("option",{value:"176"},"Ligue 1"),l.a.createElement("option",{value:"195"},"Bundesliga"),l.a.createElement("option",{value:"262"},"Serie A"),l.a.createElement("option",{value:"343"},"Eredivisie")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Clasificaci\xf3n"),l.a.createElement("th",null,"Equipo"),l.a.createElement("th",null,"P.J."),l.a.createElement("th",null,"P.P."),l.a.createElement("th",null,"P.G."),l.a.createElement("th",null,"P.E."),l.a.createElement("th",null,"G.F."),l.a.createElement("th",null,"G.C."),l.a.createElement("th",null,"Puntos")),this.state.leagues&&this.state.leagues.map(function(e,a){return l.a.createElement(I,Object.assign({key:a},e))})))))}}]),a}(n.Component),B=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleInputChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(g.a)({},n,l),function(){return t.props.findProducts(t.state.search)})},t.state={search:""},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("input",{type:"text",name:"search",value:this.state.search,placeholder:"Search",onChange:this.handleInputChange})}}]),a}(n.Component),F=function(e){var a=e.team_name,t=e.team_badge,n=e.players;return l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"cardClub"},l.a.createElement("h4",null,a),l.a.createElement("img",{className:"marg-bot",src:t,alt:"Escudo",width:"15%"}),l.a.createElement("table",{className:"table white-let"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Jugador"),l.a.createElement("th",null,"Dorsal"),l.a.createElement("th",null,"A\xf1os"),l.a.createElement("th",null,"P.J."),l.a.createElement("th",null,"Goles"),l.a.createElement("th",null,"T.A."),l.a.createElement("th",null,"T.R.")),n&&n.map(function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,e.player_name),l.a.createElement("td",null,e.player_number),l.a.createElement("td",null,e.player_age),l.a.createElement("td",null,e.player_match_played),l.a.createElement("td",null,e.player_goals),l.a.createElement("td",null,e.player_yellow_cards),l.a.createElement("td",null,e.player_red_cards))})))))};function D(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}var x=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).handleChangeInput=function(a){a.preventDefault(),e.services.getClubs(a.target.value).then(function(a){return e.setState({clubs:a.data,copy:a.data,showModal:Array(a.data.length-1).fill(!1)})}).catch(function(e){return console.log(e)})},e.findProducts=function(a){var t=Object(b.a)(e.state.copy);t=t.filter(function(e){return e.team_name.toLowerCase().includes(a.toLowerCase())}),e.setState({clubs:t})},e.handleModalModal=function(a,t){var n=!e.state.showModal[t],l=Object(b.a)(e.state.showModal);l[t]=n,e.setState(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?D(t,!0).forEach(function(a){Object(g.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},e.state,{showModal:l}))},e.state={clubs:[],copy:[],showModal:[],liga:""},e.services=new v,e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"carousel marg-bot"},l.a.createElement(C,null)),l.a.createElement("div",{className:"container tables"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("h2",{className:"clubs-title"},"Clubs")),l.a.createElement(B,{findProducts:this.findProducts}),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",{className:"form-group linea"},l.a.createElement("label",{htmlFor:"ligas"}),l.a.createElement("select",{name:"liga",className:"form-control",id:"ligas",value:this.state.liga,onChange:this.handleChangeInput},l.a.createElement("option",null,"Leagues"),l.a.createElement("option",{value:"468"},"Liga Santander"),l.a.createElement("option",{value:"148"},"Premier League"),l.a.createElement("option",{value:"176"},"Ligue 1"),l.a.createElement("option",{value:"195"},"Bundesliga"),l.a.createElement("option",{value:"262"},"Serie A"),l.a.createElement("option",{value:"343"},"Eredivisie")))),l.a.createElement("div",{className:"row"},this.state.copy&&this.state.clubs.map(function(a,t){return l.a.createElement("div",{key:t,className:"col-md-3"},l.a.createElement("div",{key:t,onClick:function(a){return e.handleModalModal(a,t)},className:"marg border pointer"},l.a.createElement("p",null,a.team_name),l.a.createElement("img",{className:"img-marg",src:a.team_badge,alt:a.team_name}),l.a.createElement(N.a,{size:"lg",show:e.state.showModal[t],onHide:function(a){return e.handleModalModal(a,t)}},l.a.createElement(N.a.Header,{closeButton:!0}),l.a.createElement(N.a.Body,null,l.a.createElement(F,Object.assign({key:t},a))),l.a.createElement(N.a.Footer,null,l.a.createElement(j.a,{variant:"secondary",onClick:function(a){return e.handleModalModal(a,t)}},"Close")))))}))))}}]),a}(n.Component),A=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleInputChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(g.a)({},n,l))},t.handleFormSubmit=function(e){e.preventDefault();var a=t.state,n=a.username,l=a.password;t.authServices.login(n,l).then(function(e){t.setState({username:"",password:""}),t.props.setUser(e),t.props.handleModalLogin()}).catch(function(e){var a=!t.state.error;t.setState({error:a})})},t.state={username:"",password:"",error:!1},t.authServices=new E,t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return 0==this.state.error?l.a.createElement(O.a,{onSubmit:this.handleFormSubmit},l.a.createElement(O.a.Group,{controlId:"formBasicUser"},l.a.createElement("div",{className:"signup-form"},l.a.createElement(O.a.Label,{className:"labels"},"Username"),l.a.createElement(O.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange}))),l.a.createElement(O.a.Group,{controlId:"formBasicPassword"},l.a.createElement("div",{className:"signup-form"},l.a.createElement(O.a.Label,{className:"labels"},"Password"),l.a.createElement(O.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),l.a.createElement("button",{className:"form-btn",type:"submit"},"Login"))):l.a.createElement(O.a,{onSubmit:this.handleFormSubmit},l.a.createElement(O.a.Group,{controlId:"formBasicUser"},l.a.createElement("div",{className:"signup-form"},l.a.createElement(O.a.Label,{className:"labels"},"Username"),l.a.createElement(O.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange}))),l.a.createElement(O.a.Group,{controlId:"formBasicPassword"},l.a.createElement("div",{className:"signup-form"},l.a.createElement(O.a.Label,{className:"labels"},"Password"),l.a.createElement(O.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),l.a.createElement("p",{className:"warning-msg"},"User or password incorrect"),l.a.createElement("button",{className:"form-btn-err",type:"submit"},"Login")))}}]),a}(n.Component),G=t(14),H=t.n(G),J=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleInputChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(g.a)({},n,l))},t.handleFormSubmit=function(e){e.preventDefault();var a=t.state,n=a.username,l=a.password;t.authServices.signup(n,l).then(function(e){t.setState({username:"",password:"",error:!1}),t.props.setUser(e),t.props.handleModalSignup()}).catch(function(e){var a=!t.state.error;t.setState({error:a})})},t.state={username:"",password:"",error:!1},t.authServices=new E,t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return 0==this.state.error?l.a.createElement(H.a,{onSubmit:this.handleFormSubmit},l.a.createElement(H.a.Group,{controlId:"formBasicUser"},l.a.createElement("div",{className:"signup-form"},l.a.createElement(H.a.Label,{className:"labels"},"Username"),l.a.createElement(H.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange}))),l.a.createElement(H.a.Group,{controlId:"formBasicPassword"},l.a.createElement("div",{className:"signup-form"},l.a.createElement(H.a.Label,{className:"labels"},"Password"),l.a.createElement(H.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),l.a.createElement("button",{className:"form-btn",type:"submit"},"Register"))):this.state.password.length<7?l.a.createElement(H.a,{onSubmit:this.handleFormSubmit},l.a.createElement(H.a.Group,{controlId:"formBasicUser"},l.a.createElement("div",{className:"signup-form"},l.a.createElement(H.a.Label,{className:"labels"},"Username"),l.a.createElement(H.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange}))),l.a.createElement(H.a.Group,{controlId:"formBasicPassword"},l.a.createElement("div",{className:"signup-form"},l.a.createElement(H.a.Label,{className:"labels"},"Password"),l.a.createElement(H.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),l.a.createElement("p",{className:"warning-msg"},"Password must contain at least 8 characters"),l.a.createElement("button",{className:"form-btn-err",type:"submit"},"Register"))):l.a.createElement(H.a,{onSubmit:this.handleFormSubmit},l.a.createElement(H.a.Group,{controlId:"formBasicUser"},l.a.createElement("div",{className:"signup-form"},l.a.createElement(H.a.Label,{className:"labels"},"Username"),l.a.createElement(H.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange}))),l.a.createElement(H.a.Group,{controlId:"formBasicPassword"},l.a.createElement("div",{className:"signup-form"},l.a.createElement(H.a.Label,{className:"labels"},"Password"),l.a.createElement(H.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),l.a.createElement("p",{className:"warning-msg"},"User or password not available"),l.a.createElement("button",{className:"form-btn-err",type:"submit"},"Register")))}}]),a}(n.Component),T=t(264),W=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).logout=function(){t.authServices.logout().then(function(e){t.props.setUser(null)}).catch(function(e){return console.log(e)})},t.handleModalSignup=function(){var e=!t.state.showModalSignup;t.setState({showModalSignup:e})},t.handleModalLogin=function(){var e=!t.state.showModalLogin;t.setState({showModalLogin:e})},t.authServices=new E,t.state={showModalSignup:!1,showModalLogin:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){if(this.props.userInSession){var e=this.props.userInSession.data.username;return"ironhack"===this.props.userInSession.data.username?l.a.createElement(T.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(T.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(T.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(M.b,{className:"links-nav marg-lat home",to:"/"},l.a.createElement("img",{src:"../logoApp.png",alt:"logoApp"})),l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/Jornada"},"Matchday"),l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/Clubs"},"Clubs"),l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/LigaSantander"},"Leagues"),l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/Apuesta"},"Bet Now!"),l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/Secret"},"IH")),l.a.createElement(T.a.Collapse,{className:"justify-content-end"},l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/Perfil"},"Profile"),l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/",onClick:this.logout},"Log out"),l.a.createElement("small",{className:"nav-small"},"Welcome ",e))):l.a.createElement(T.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(T.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(T.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(M.b,{className:"links-nav marg-lat home",to:"/"},l.a.createElement("img",{src:"../logoApp.png",alt:"logoApp"})),l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/Jornada"},"Matchday"),l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/Clubs"},"Clubs"),l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/LigaSantander"},"Leagues"),l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/Apuesta"},"Bet Now!")),l.a.createElement(T.a.Collapse,{className:"justify-content-end"},l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/Perfil"},"Profile"),l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/",onClick:this.logout},"Log out"),l.a.createElement("small",{className:"nav-small"},"Welcome ",e)))}return l.a.createElement(l.a.Fragment,null,l.a.createElement(T.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(T.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(T.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(M.b,{className:"links-nav marg-lat home",to:"/"},l.a.createElement("img",{src:"../logoApp.png",alt:"logoApp"})),l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/Jornada"},"Matchday"),l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/Clubs"},"Clubs"),l.a.createElement(M.b,{className:"links-nav marg-lat",to:"/LigaSantander"},"Leagues")),l.a.createElement(T.a.Collapse,{className:"justify-content-end"},l.a.createElement("button",{className:"register-btn marg-lat",onClick:this.handleModalSignup},"Register now"),l.a.createElement("button",{className:"login-btn",onClick:this.handleModalLogin},"Login"))),l.a.createElement(N.a,{show:this.state.showModalSignup,onHide:this.handleModalSignup},l.a.createElement("div",{style:{backgroundColor:"black",color:"white",opacity:".9",top:"20px",display:"block",position:"absolute",width:"100%",borderRadius:"5%"}},l.a.createElement(N.a.Header,{closeButton:!0}),l.a.createElement("h4",{className:"center"},"Signup"),l.a.createElement(N.a.Body,null,l.a.createElement(J,{handleModalSignup:this.handleModalSignup,setUser:this.props.setUser})))),l.a.createElement(N.a,{show:this.state.showModalLogin,onHide:this.handleModalLogin},l.a.createElement("div",{style:{backgroundColor:"black",color:"white",opacity:".9",top:"20px",display:"block",position:"absolute",width:"100%",borderRadius:"5%"}},l.a.createElement(N.a.Header,{closeButton:!0}),l.a.createElement("h4",{className:"center"},"Login"),l.a.createElement(N.a.Body,null,l.a.createElement(A,{handleModalLogin:this.handleModalLogin,setUser:this.props.setUser})))))}}]),a}(n.Component),R=t(115),V=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={chartData:e.chartData,apuesta:e.apuesta},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"chart"},l.a.createElement(R.a,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Historico de apuestas"+this.props.location,fontSize:20},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}))}}]),a}(n.Component);V.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"right",location:"City"};var z=V,X=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={chartData:{}},e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentWillMount",value:function(){this.getChartData()}},{key:"getChartData",value:function(){this.setState({chartData:{labels:["Levante - Villareal","Real Madrid - Valladoril","Barcelona - Betis","Tottenham - Newcastle","Alaves - Espanyol","Celta de Vigo - Valencia"],datasets:[{label:"Bets",data:[10,25,50,42,13,15],borderColor:["rgba(31,31,31, .52)","rgba(31,31,31, .52)","rgba(31,31,31, .52)","rgba(31,31,31, .52)","rgba(31,31,31, .52)","rgba(31,31,31, .52)"],backgroundColor:["rgba(45, 235, 17, .52)","rgba(45, 235, 17, .52)","rgba(45, 235, 17, .52)","rgba(45, 235, 17, .52)","rgba(45, 235, 17, .52)","rgba(45, 235, 17, .52)"]}]}})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"carousel marg-bot"},l.a.createElement(C,null)),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement(z,{chartData:this.state.chartData,location:"=>Usuario",legendPosition:"bottom"})))))}}]),a}(n.Component),q=function(e){var a=e.local,t=e.visitante,n=e.cantidad,r=e.apuestas;return l.a.createElement("tr",{className:"timeM pointer"},l.a.createElement("td",null,l.a.createElement("p",null,a," - ",t)),l.a.createElement("td",null,l.a.createElement("p",null,n)),l.a.createElement("td",null,l.a.createElement("p",null,r)))},$=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={bets:[],user:[]},t.services=new v,t.authServices=new E,t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.authServices.loggedin().then(function(a){return e.setState({user:a.data})}),this.services.getBets().then(function(a){return e.setState({bets:a.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.user;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"carousel marg-bot"},l.a.createElement(C,null)),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 botones"},l.a.createElement(M.b,{to:"/Apuesta"},l.a.createElement("img",{src:"../bet.png",alt:"Bet",width:"15%"})),l.a.createElement("h5",null,"User: ",e.username&&e.username),l.a.createElement("h6",null,"Salary: ",e.balance&&e.balance[e.balance.length-1],"\u20ac")),l.a.createElement("div",{className:"col-md-6 botones"},l.a.createElement(X,null)),l.a.createElement("table",{className:"table tables"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"timeM"},l.a.createElement("th",null,l.a.createElement("p",null,"Partido")),l.a.createElement("th",null,l.a.createElement("p",null,"Cantidad apostada")),l.a.createElement("th",null,l.a.createElement("p",null,"Cantidad por euro apostado"))),this.state.bets&&this.state.bets.map(function(e){return l.a.createElement(q,Object.assign({key:e._id},e))}))))))}}]),a}(n.Component),K=function(){return l.a.createElement("div",{className:"carousel marg-bot"},l.a.createElement(C,null))},Q=function(){return l.a.createElement("section",{className:"bg clean"},l.a.createElement("h1",null,"Hola"))},Y=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).setTheUser=function(a){e.setState({loggedInUser:a})},e.fetchUser=function(){null===e.state.loggedInUser&&e.authServices.loggedin().then(function(a){return e.setState({loggedInUser:a})}).catch(function(a){return e.setState({loggedInUser:!1})})},e.handleMenu=function(){var a=!e.state.showMenu;e.setState({showMenu:a})},e.state={loggedInUser:null,showMenu:!1},e.authServices=new E,e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return this.fetchUser(),this.state.loggedInUser?l.a.createElement(l.a.Fragment,null,l.a.createElement(W,{setUser:this.setTheUser,userInSession:this.state.loggedInUser}),l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",exact:!0,component:K}),l.a.createElement(d.a,{path:"/LigaSantander",exact:!0,component:U}),l.a.createElement(d.a,{path:"/Clubs",exact:!0,component:x}),l.a.createElement(d.a,{path:"/Jornada",exact:!0,component:P}),l.a.createElement(d.a,{path:"/Apuesta",exact:!0,component:_}),l.a.createElement(d.a,{path:"/Perfil",exact:!0,component:$}),l.a.createElement(d.a,{path:"/Historico",exact:!0,component:X}),l.a.createElement(d.a,{path:"/Secret",exact:!0,component:Q}))):l.a.createElement(l.a.Fragment,null,l.a.createElement(W,{setUser:this.setTheUser,userInSession:this.state.loggedInUser}),l.a.createElement("div",{className:"offer"},"Register now and get 10\u20ac. Limited to the first 100 users!"),l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",exact:!0,component:K}),l.a.createElement(d.a,{path:"/LigaSantander",exact:!0,component:U}),l.a.createElement(d.a,{path:"/Clubs",exact:!0,component:x}),l.a.createElement(d.a,{path:"/Jornada",exact:!0,component:P})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(M.a,null,l.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,a,t){},93:function(e,a,t){}},[[117,1,2]]]);
//# sourceMappingURL=main.4e6cd2f6.chunk.js.map