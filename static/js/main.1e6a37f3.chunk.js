(window["webpackJsonpcolor-project"]=window["webpackJsonpcolor-project"]||[]).push([[0],{227:function(e,a,t){e.exports=t.p+"static/media/background.77428cd4.svg"},249:function(e,a,t){e.exports=t(491)},254:function(e,a,t){},317:function(e,a,t){},490:function(e,a,t){},491:function(e,a,t){"use strict";t.r(a);var o,n,r,l,c,i=t(0),s=t.n(i),m=t(7),u=t.n(m),d=t(31),p=(t(254),t(26)),f=t(8),h=t(61),g=t(555),b=t(538),v=t(47),E=t(27),C=t(56),y=t(57),x=t(59),j=t(498),w=t(222),O=t(6),N=t(39),S=t.n(N),k=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},F={colorBox:(o={width:"20%",height:function(e){return e.showingFullPalette?"25%":"40%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-4.5px","&:hover button":{opacity:"1",transition:"0.3s"}},Object(O.a)(o,k("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3333%"}}),Object(O.a)(o,k("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(O.a)(o,k("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),o),boxContent:{position:"absolute",width:"100%",left:"0",bottom:"0",padding:"10px",color:"#000",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},textColor:{color:function(e){return S()(e.background).luminance()>=.6?"rgba(0, 0, 0, 0.7)":"white"}},colorName:{color:function(e){return S()(e.background).luminance()<=.08?"#fff":"#000"}},seeMore:{color:"#fff",background:function(e){return S()(e.background).luminance()>=.6?"rgba(0, 0, 0, 0.6)":"rgba(255, 255, 255, 0.3)"},position:"absolute",border:"none",right:"0",bottom:"0",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px"},copyButton:{color:"#fff",position:"absolute",width:"100px",height:"30px",display:"inline-block",top:"50%",left:"50%",transform:"translate(-50%, -50%)",lineHeight:"30px",textAlign:"center",opacity:"0",background:function(e){return S()(e.background).luminance()>=.6?"rgba(0, 0, 0, 0.7)":"rgba(255,255,255, 0.3)"},outline:"none",border:"none",textTransform:"uppercase",cursor:"pointer"},copyOverlay:{opacity:"0",width:"100%",height:"100%",zIndex:"0",transition:"transform 0.45s ease-in-out"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"3rem",transform:"scale(0.1)",opacity:"0",color:"#fff","& h1":Object(O.a)({fontWeight:"400",textShadow:"1px 2px #000",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",textTransform:"uppercase"},k("xs"),{fontSize:"6rem"}),"& p":{fontSize:"2rem"}},showCopyMessage:{opacity:"1",transform:"scale(1)",zIndex:"15",transition:"all 0.4s ease-in-out",transitionDelay:"0.2s"}},P=function(e){function a(){var e,t;Object(v.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(C.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).state={copied:!1},t.changeCopyState=function(){t.setState({copied:!0},function(){setTimeout(function(){return t.setState({copied:!1})},1500)})},t}return Object(x.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=this.props,a=e.background,t=e.name,o=e.paletteId,n=e.colorId,r=e.showingFullPalette,l=e.classes,c=this.state.copied,i=s.a.createElement(d.b,{to:"/palette/".concat(o,"/").concat(n),onClick:function(e){return e.stopPropagation()}},s.a.createElement("span",{className:l.seeMore},"More"));return s.a.createElement(w.CopyToClipboard,{onCopy:this.changeCopyState,text:a},s.a.createElement("div",{className:l.colorBox,style:{backgroundColor:a}},s.a.createElement("div",{style:{backgroundColor:a},className:"".concat(l.copyOverlay," ").concat(c&&l.showOverlay)}),s.a.createElement("div",{className:"".concat(l.copyMessage," ").concat(c&&l.showCopyMessage)},s.a.createElement("h1",{className:l.textColor},"Copied!"),s.a.createElement("p",{className:l.textColor},a)),s.a.createElement("div",{className:"copy-container"},s.a.createElement("div",{className:l.boxContent},s.a.createElement("span",{className:l.textColor},t)),s.a.createElement("button",{className:"".concat(l.copyButton)},"Copy")),r?i:""))}}]),a}(i.Component),B=Object(j.a)(F)(P),D=t(552),I=t(536),A=t(553),R=t(537),L=t(116),G=t.n(L),M=t(235),z=(t(315),{navbar:{display:"flex",height:"5vh",alignItems:"center"},navbarLogo:(n={marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a ":{textDecoration:"none",color:"#000"}},Object(O.a)(n,k("md"),{fontSize:"18px"}),Object(O.a)(n,k("sm"),{fontSize:"16px"}),Object(O.a)(n,k("xs"),{display:"none"}),n),slider:Object(O.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",marginTop:"-3px",marginLeft:"-7px",width:"13px",height:"13px"}},k("md"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"}}),T=function(e){function a(){var e,t;Object(v.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(C.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).state={open:!1},t.closeSnackBar=function(){t.setState({open:!1})},t.handleChangeFormat=function(e){t.props.changeFormat(e),t.setState({open:!0})},t}return Object(x.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=this.state.open,a=this.props,t=a.level,o=a.changeLevel,n=a.format,r=a.hasLevel,l=a.classes;return s.a.createElement("header",{className:l.navbar},s.a.createElement("div",{className:l.navbarLogo},s.a.createElement(d.b,{to:"/"},"React Color Picker")),r&&s.a.createElement("div",{className:"slider-container"},s.a.createElement("span",null,"Level: ",t),s.a.createElement("div",{className:l.slider},s.a.createElement(M.a,{defaultValue:t,min:100,max:900,step:100,onAfterChange:o}))),s.a.createElement("div",{className:l.selectContainer},s.a.createElement(D.a,{onChange:this.handleChangeFormat,value:n},s.a.createElement(I.a,{value:"hex"},"HEX - #ffffff"),s.a.createElement(I.a,{value:"rgb"},"RGB - rgb(255, 255, 255)"),s.a.createElement(I.a,{value:"rgba"},"RGBA - rgba(255, 255, 255, 1)"))),s.a.createElement(A.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e,autoHideDuration:3e3,message:s.a.createElement("span",{id:"message-id"},"Format Changed to ",n.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackBar,action:[s.a.createElement(R.a,{onClick:this.closeSnackBar,color:"inherit",key:"close","aria-label":"close"},s.a.createElement(G.a,null))]}))}}]),a}(i.Component),V=Object(j.a)(z)(T),U=(t(317),function(e){var a=e.className?e.className:"Footer";return s.a.createElement("footer",{className:a},e.children)}),q=Object(j.a)({paletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})(function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return s.a.createElement(U,{className:o.paletteFooter},a,s.a.createElement("span",{className:o.emoji},t))}),H={singleColorPalette:{height:"100vh",display:"flex",flexDirection:"column"},paletteColors:{height:"90%"},goBack:(r={background:"black",width:"20%",height:"40%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-4.5px","& a":{textDecoration:"none",color:"white",position:"absolute",width:"100px",height:"30px",display:"inline-block",top:"50%",left:"50%",transform:"translate(-50%, -50%)",lineHeight:"30px",textAlign:"center",background:"rgba(255, 255, 255, 0.3)",outline:"none",border:"none",textTransform:"uppercase",cursor:"pointer"}},Object(O.a)(r,k("lg"),{width:"25%",height:"33.333%"}),Object(O.a)(r,k("md"),{width:"50%",height:"20%"}),Object(O.a)(r,k("xs"),{width:"100%",height:"10%"}),r)},W=function(e){function a(){var e,t;Object(v.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(C.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).state={format:"hex"},t.gatherShades=function(e,a){var t=[];for(var o in e)t.push.apply(t,Object(p.a)(e[o].filter(function(e){return e.id===a})));return t.slice(1)},t.changeFormat=function(e){t.setState({format:e.target.value})},t}return Object(x.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.emoji,o=e.paletteName,n=e.id,r=this.props,l=r.colorId,c=r.classes,i=this.state.format,m=this.gatherShades(a,l).map(function(e){return s.a.createElement(B,{key:e.name,name:e.name,background:e[i],showingFullPalette:!1})});return s.a.createElement("div",{className:c.singleColorPalette},s.a.createElement(V,{hasLevel:!1,format:this.state.format,changeFormat:this.changeFormat}),s.a.createElement("div",{className:c.paletteColors},m,s.a.createElement("div",{className:c.goBack},s.a.createElement(d.b,{to:"/palette/".concat(n)},"Go Back"))),s.a.createElement(q,{paletteName:o,emoji:t}))}}]),a}(i.Component),J=Object(j.a)(H)(W),Y=function(e){function a(){var e,t;Object(v.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(C.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).state={level:500,format:"hex"},t.changeLevel=function(e){t.setState({level:e})},t.changeFormat=function(e){t.setState({format:e.target.value})},t}return Object(x.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.id,o=e.paletteName,n=e.emoji,r=this.state,l=r.level,c=r.format,i=this.props.classes,m=a[l].map(function(e,a){return s.a.createElement(B,{key:e.id,background:e[c],name:e.name,colorId:e.id,paletteId:t,showingFullPalette:!0})});return s.a.createElement("div",{className:i.palette},s.a.createElement(V,{format:c,changeFormat:this.changeFormat,level:l,changeLevel:this.changeLevel,hasLevel:!0}),s.a.createElement("div",{className:i.paletteColors},m),s.a.createElement(q,{paletteName:o,emoji:n}))}}]),a}(i.Component),K=Object(j.a)({palette:{height:"100vh",display:"flex",flexDirection:"column"},paletteColors:{height:"90%",overflow:"hidden"}})(Y),Q=t(227),X={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 400ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#394bad",backgroundImage:"url(".concat(t.n(Q).a,")"),overflowY:"scroll"},heading:Object(O.a)({fontSize:"2rem"},k("sm"),{fontSize:"1.5rem"}),container:(l={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(O.a)(l,k("xl"),{width:"80%"}),Object(O.a)(l,k("xs"),{width:"75%"}),l),nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"#fff",alignItems:"center","& a":{color:"#fff",textDecoration:"none"}},palettes:(c={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.5rem",marginBottom:"2.5rem"},Object(O.a)(c,k("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(O.a)(c,k("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1rem",marginBottom:"1rem"}),c)},$=t(117),Z=t.n($),_=Object(j.a)({root:{backgroundColor:"white",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",border:"1px solid black",cursor:"pointer","&:hover svg":{opacity:"1"}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{margin:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},delete:{position:""},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",top:"0",right:"0",padding:"10px",zIndex:"10",opacity:"0"}})(function(e){var a=e.classes,t=e.paletteName,o=e.colors,n=e.emoji,r=e.goToPalette,l=e.openDialog,c=e.id,i=o.map(function(e){return s.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})});return s.a.createElement("div",{className:a.root,onClick:function(){return r(c)}},s.a.createElement("div",{className:a.delete,onClick:function(e){e.stopPropagation(),l(c)}},s.a.createElement(Z.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"}})),s.a.createElement("div",{className:a.colors},i),s.a.createElement("h3",{className:a.title},t," ",s.a.createElement("span",{className:a.emoji},n)))}),ee=t(542),ae=t(539),te=t(540),oe=t(535),ne=t(492),re=t(541),le=t(543),ce=t(230),ie=t.n(ce),se=t(158),me=t.n(se),ue=t(159),de=t.n(ue),pe=Object(j.a)(X)(function(e){var a=e.deletePalette,t=e.classes,o=e.palettes,n=e.history,r=function(e){return n.push("/palette/".concat(e))},l=Object(i.useState)(!1),c=Object(f.a)(l,2),m=c[0],u=c[1],p=Object(i.useState)(""),h=Object(f.a)(p,2),v=h[0],E=h[1],C=function(e){u(!0),E(e)},y=function(){u(!1),E("")};return s.a.createElement("div",{className:t.root},s.a.createElement("div",{className:t.container},s.a.createElement("nav",{className:t.nav},s.a.createElement("h1",{className:t.heading},"React Colors"),s.a.createElement(d.b,{to:"/palette/new"},"Create A Palette")),s.a.createElement(g.a,{className:t.palettes},o.map(function(e){return s.a.createElement(b.a,{key:e.id,classNames:"fade",timeout:400},s.a.createElement(_,Object.assign({openDialog:C,key:e.id},e,{goToPalette:r})))}))),s.a.createElement(ae.a,{open:m,onClose:y,"ria-labelledby":"delete-dialog-title"},s.a.createElement(te.a,{id:"delete-dialog-title"},"Delete this Palette?"),s.a.createElement(oe.a,null,s.a.createElement(ne.a,{button:!0},s.a.createElement(re.a,null,s.a.createElement(ee.a,{style:{backgroundColor:me.a[100],color:me.a[600]}},s.a.createElement(ie.a,null))),s.a.createElement(le.a,{primary:"Delete",onClick:function(){a(v),y()}},"Delete")),s.a.createElement(ne.a,{button:!0,onClick:y},s.a.createElement(re.a,null,s.a.createElement(ee.a,{style:{backgroundColor:de.a[100],color:de.a[600]}},s.a.createElement(G.a,null))),s.a.createElement(le.a,{primary:"Close"},"Close")))))}),fe=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],he=[50,100,200,300,400,500,600,700,800,900],ge=function(e,a){return S.a.scale(function(e){return[S()(e).darken(1.4).hex(),e,"#fff"]}(e)).mode("lab").colors(a)},be=function(e){var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}};for(var t in he)a.colors[he[t]]=[];var o,n=!0,r=!1,l=void 0;try{for(var c,i=e.colors[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var s=c.value,m=ge(s.color,10).reverse();for(var u in m)a.colors[he[u]].push({name:"".concat(s.name," ").concat(he[u]),id:(o=s.name,o.trim().split(" ").join("-")),hex:m[u],rgb:S()(m[u]).css(),rgba:S()(m[u]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(d){r=!0,l=d}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a},ve=t(4),Ee=t(554),Ce=t(81),ye=t(551),xe=t(234),je=t.n(xe),we=t(546),Oe=t(494);function Ne(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,o)}return t}function Se(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Ne(t,!0).forEach(function(a){Object(O.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ne(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var ke,Fe=Object(Oe.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(320,"px)"),marginLeft:320,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:320,flexShrink:0},drawerPaper:{width:320},drawerHeader:Se({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{height:"calc(100vh - 64px)",flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-320},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},formContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"},buttonContainer:{width:"100%",display:"flex",justifyContent:"center"},newPaletteForm:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:"80%",width:"80%"}}}),Pe=t(77),Be={root:(ke={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-6.5px"},Object(O.a)(ke,k("lg"),{width:"25%",height:"20%"}),Object(O.a)(ke,k("md"),{width:"50%",height:"10%"}),Object(O.a)(ke,k("sm"),{width:"100%",height:"5%"}),ke),boxContent:Object(O.a)({position:"absolute",left:"0px",bottom:"0px",width:"100%",padding:"5px 10px",color:function(e){return S()(e.color).luminance()<=.08?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.6)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},k("sm"),{padding:"0 10px"}),deleteIcon:{transition:"all .3s ease-in-out","&:hover":{color:"white",transform:"scale(1.3)"}}},De=Object(Pe.SortableElement)(function(e){var a=e.classes,t=e.color,o=e.colorName,n=e.handleClick;return s.a.createElement("div",{className:a.root,style:{backgroundColor:t}},s.a.createElement("div",{className:a.boxContent},s.a.createElement("span",null,o),s.a.createElement(Z.a,{className:a.deleteIcon,onClick:n})))}),Ie=Object(j.a)(Be)(De),Ae=Object(Pe.SortableContainer)(function(e){var a=e.colors,t=e.deleteColor,o=e.classes;return s.a.createElement("div",{className:o.root},a.map(function(e,a){return s.a.createElement(Ie,{index:a,handleClick:function(){return t(e.name)},key:e.name,color:e.color,colorName:e.name})}))}),Re=Object(j.a)({root:{height:"100%","@media (max-width: 599px)":{marginTop:"5px"}}})(Ae),Le=t(548),Ge=t(549),Me=t(550),ze=t(232),Te=t.n(ze),Ve=t(34),Ue=Object(Oe.a)(function(e){return{appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),display:"flex",flexDirection:"row",justifyContent:"space-between",height:"64px"},appBarShift:{width:"calc(100% - ".concat(320,"px)"),marginLeft:320,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:Object(O.a)({marginRight:e.spacing(2)},k("sm"),{marginRight:"0px"}),hide:{display:"none"},navButtons:Object(O.a)({display:"flex",justifyContent:"space-between",alignItems:"center",marginRight:"10px"},k("xs"),{marginRight:"0px"}),button:Object(O.a)({margin:"0 0.5rem"},k("sm"),{margin:"0 0.2rem",padding:"0.3rem",height:"36px",minWidth:"56px"})}}),qe=t(545),He=t(544),We=t(547),Je=t(236),Ye=(t(327),function(e){var a=e.openEmojiDialog,t=e.handleCloseEmoji,o=e.handleSubmit,n=Object(i.useState)(""),r=Object(f.a)(n,2),l=r[0],c=r[1];return s.a.createElement(ae.a,{open:a,onClose:t,"aria-labelledby":"form-dialog-title"},s.a.createElement(te.a,{id:"form-dialog-title"},"Choose an Emoji"),s.a.createElement(He.a,null,s.a.createElement(Je.a,{onSelect:function(e){var a=e.native;c(a)}})),s.a.createElement(qe.a,null,s.a.createElement(we.a,{onClick:t,color:"primary"},"Cancel"),s.a.createElement(we.a,{variant:"contained",color:"primary",onClick:function(){o(l),t()}},"Save Emoji")))}),Ke=function(e){var a=e.handleSave,t=e.setPaletteName,o=e.paletteName,n=e.openDialog,r=e.handleCloseDialog,l=Object(i.useState)(!1),c=Object(f.a)(l,2),m=c[0],u=c[1];return s.a.createElement("div",null,s.a.createElement(ae.a,{open:n,onClose:r,"aria-labelledby":"form-dialog-title"},s.a.createElement(te.a,{id:"form-dialog-title"},"Choose a Palette Name"),s.a.createElement(Ve.ValidatorForm,{onSubmit:function(){r(),u(!0)}},s.a.createElement(He.a,null,s.a.createElement(We.a,null,"Please enter a name for your new beautiful new palette. Make sure it's unique"),s.a.createElement(Ve.TextValidator,{fullWidth:!0,margin:"normal",label:"Palette Name",value:o,onChange:function(e){return t(e.target.value)},validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Palette Name Already Exist"]})),s.a.createElement(qe.a,null,s.a.createElement(we.a,{onClick:r,color:"primary"},"Cancel"),s.a.createElement(we.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))),s.a.createElement(Ye,{handleSubmit:a,openEmojiDialog:m,handleCloseEmoji:function(){u(!1)}}))},Qe=function(e){var a=e.open,t=e.handleDrawerOpen,o=e.handleSave,n=e.setPaletteName,r=e.paletteName,l=e.palettes,c=Ue(),m=Object(i.useState)(!1),u=Object(f.a)(m,2),p=u[0],h=u[1];return Object(i.useEffect)(function(){return Ve.ValidatorForm.addValidationRule("isPaletteNameUnique",function(e){return l.every(function(a){return a.paletteName.toLowerCase()!==e.toLowerCase()})}),function(){Ve.ValidatorForm.removeValidationRule("isPaletteNameUnique")}},[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(Le.a,null),s.a.createElement(Ge.a,{position:"fixed",color:"default",className:Object(ve.a)(c.appBar,Object(O.a)({},c.appBarShift,a))},s.a.createElement(Me.a,null,s.a.createElement(R.a,{color:"inherit","aria-label":"open drawer",onClick:t,edge:"start",className:Object(ve.a)(c.menuButton,a&&c.hide)},s.a.createElement(Te.a,null)),s.a.createElement(Ce.a,{variant:"h6",noWrap:!0},"New Palette")),s.a.createElement("div",{className:c.navButtons},s.a.createElement(Ke,{handleSave:o,setPaletteName:n,paletteName:r,openDialog:p,handleCloseDialog:function(){h(!1)}}),s.a.createElement(d.b,{to:"/",style:{textDecoration:"none"}},s.a.createElement(we.a,{className:c.button,variant:"contained",color:"secondary"},"Go Back")),s.a.createElement(we.a,{variant:"contained",color:"primary",onClick:function(){h(!0)},className:c.button},"Save"))))},Xe=t(233),$e=Object(j.a)({colorPicker:{display:"flex",flexDirection:"column",justifyContent:"center",width:"80% !important"},addColor:{display:"flex",flexDirection:"column",width:"100%"}})(function(e){var a=e.currentColor,t=e.setCurrentColor,o=e.addColor,n=e.colorName,r=e.setColorName,l=e.isPaletteFull,c=e.colors,m=e.classes;Object(i.useEffect)(function(){return Ve.ValidatorForm.addValidationRule("isColorNameUnique",function(e){return c.every(function(a){return a.name.toLowerCase()!==e.toLowerCase()})}),Ve.ValidatorForm.addValidationRule("isColorUnique",function(e){return c.every(function(e){return e.color!==a})}),function(){Ve.ValidatorForm.removeValidationRule("isColorNameUnique"),Ve.ValidatorForm.removeValidationRule("isColorValueUnique")}},[c,a]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(Xe.ChromePicker,{className:m.colorPicker,color:a,onChangeComplete:function(e){return t(e.hex)}}),s.a.createElement(Ve.ValidatorForm,{className:m.addColor,instantValidate:!1,onSubmit:function(){o(a,n)}},s.a.createElement(Ve.TextValidator,{style:{minWidth:"100%"},label:"New Color",value:n,onChange:function(e){return r(e.target.value)},name:"New Color Name",validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["This field is required","Color name already exist","Color already exist"]}),s.a.createElement(we.a,{type:"submit",variant:"contained",color:"primary",style:{backgroundColor:l?"rgba(0, 0, 0, 0.12)":a},disabled:l},l?"Palette Full":"Add Color")))}),Ze=function(e){var a=e.paletteLength?e.paletteLength:20,t=e.palettes,o=e.history,n=e.savePalette,r=Fe(),l=Object(i.useState)(!1),c=Object(f.a)(l,2),m=c[0],u=c[1],d=Object(i.useState)(fe[0].colors),h=Object(f.a)(d,2),g=h[0],b=h[1],v=Object(i.useState)(""),E=Object(f.a)(v,2),C=E[0],y=E[1],x=Object(i.useState)("purple"),j=Object(f.a)(x,2),w=j[0],N=j[1],S=Object(i.useState)(""),k=Object(f.a)(S,2),F=k[0],P=k[1],B=a===g.length;var D=function(e,a){b([].concat(Object(p.a)(g),[{name:a,color:e}])),y("")};return s.a.createElement("div",{className:r.root},s.a.createElement(Qe,{setPaletteName:P,open:m,handleDrawerOpen:function(){u(!0)},handleSave:function(e){var a={paletteName:F,id:F.toLowerCase().replace(/ /g,"-"),colors:g,emoji:e};n(a),o.push("/")},palettes:t,paletteName:F}),s.a.createElement(Ee.a,{className:r.drawer,variant:"persistent",anchor:"left",open:m,classes:{paper:r.drawerPaper}},s.a.createElement("div",{className:r.drawerHeader},s.a.createElement(R.a,{onClick:function(){u(!1)}},s.a.createElement(je.a,null))),s.a.createElement(ye.a,null),s.a.createElement("div",{className:r.formContainer},s.a.createElement("div",{className:r.newPaletteForm},s.a.createElement(Ce.a,{variant:"h4",style:{textAlign:"center"}},"Design your Palette"),s.a.createElement("div",{className:r.buttonContainer},s.a.createElement(we.a,{variant:"contained",color:"secondary",onClick:function(){b([]),y("")}},"Clear Palette"),s.a.createElement(we.a,{variant:"contained",color:"primary",disabled:B,onClick:function(){for(var e,a,t=fe.map(function(e){return e.colors}).flat(),o=!0;o;)e=Math.floor(Math.random()*t.length),a=t[e],o=g.some(function(e){return e.name===a.name});D(a.color,a.name)}},"Random Color")),s.a.createElement($e,{currentColor:w,setCurrentColor:N,addColor:D,colorName:C,setColorName:y,isPaletteFull:B,colors:g})))),s.a.createElement("main",{className:Object(ve.a)(r.content,Object(O.a)({},r.contentShift,m))},s.a.createElement("div",{className:r.drawerHeader}),s.a.createElement(Re,{axis:"xy",colors:g,deleteColor:function(e){b(g.filter(function(a){return a.name!==e}))},onSortEnd:function(e){var a=e.oldIndex,t=e.newIndex;b(Object(Pe.arrayMove)(g,a,t))},distance:20})))},_e=(t(490),function(e){return s.a.createElement("div",{className:"page"},e.children)});var ea=function(){var e=JSON.parse(localStorage.getItem("palettes")),a=Object(i.useState)(e||fe),t=Object(f.a)(a,2),o=t[0],n=t[1];Object(i.useEffect)(function(){localStorage.setItem("palettes",JSON.stringify(o))},[o]);var r=function(e){n([].concat(Object(p.a)(o),[e]))},l=function(e){n(o.filter(function(a){return a.id!==e}))},c=function(e){return o.find(function(a){return a.id===e})};return s.a.createElement(h.a,{render:function(e){var a=e.location;return s.a.createElement(g.a,null,s.a.createElement(b.a,{key:a.key,classNames:"page",timeout:400},s.a.createElement(h.c,{location:a},s.a.createElement(h.a,{exact:!0,path:"/palette/new",render:function(e){return s.a.createElement(_e,null,s.a.createElement(Ze,Object.assign({savePalette:r,palettes:o},e)))}}),s.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return s.a.createElement(_e,null,s.a.createElement(pe,Object.assign({deletePalette:l,palettes:o},e)))}}),s.a.createElement(h.a,{exact:!0,path:"/palette/:id",render:function(e){return s.a.createElement(_e,null,s.a.createElement(K,{palette:be(c(e.match.params.id))}))}}),s.a.createElement(h.a,{path:"/palette/:paletteId/:colorId",render:function(e){return s.a.createElement(_e,null,s.a.createElement(J,{colorId:e.match.params.colorId,palette:be(c(e.match.params.paletteId))}))}}),s.a.createElement(h.a,{render:function(e){return s.a.createElement(_e,null,s.a.createElement(pe,Object.assign({deletePalette:l,palettes:o},e)))}}))))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(s.a.createElement(d.a,null,s.a.createElement(ea,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[249,1,2]]]);
//# sourceMappingURL=main.1e6a37f3.chunk.js.map