(this.webpackJsonpalnft=this.webpackJsonpalnft||[]).push([[0],{130:function(e,t,i){},131:function(e,t,i){},138:function(e,t){},147:function(e,t){},486:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),s=i(115),l=i.n(s),c=(i(130),i(131),i(32)),o=i(490),r=i(488),d=i(30),h=i.p+"static/media/logo.3bf408b0.svg",p=i(4),m=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:h,alt:"",className:"w-32 h-auto"})})},u=function(e){var t=e.link,i=e.active;console.log(t);var n=i?"text-primary font-semibold":"text-gray-300 hover:text-gray-300";return Object(p.jsx)(d.b,{to:"/".concat(t.linkUrl),children:Object(p.jsx)("li",{className:"".concat(n," font-medium text-sm font-alien mr-4 cursor-pointer"),children:t.linkText})})},g=i(16),x=function(){var e=Object(g.f)();return Object(p.jsx)("ul",{className:"hidden sm:flex items-center",children:[{linkText:"Home",linkUrl:""},{linkText:"Discover",linkUrl:"discover"}].map((function(t){var i=e.pathname.includes(t.linkUrl);return Object(p.jsx)(u,{link:t,active:i})}))})},b=i(487),j=function(){var e=Object(n.useRef)();return Object(p.jsxs)("div",{className:"hidden md:flex items-center justify-between w-40 duration-500 ease-in-out transition-width border-b-2 border-white pb-2 mr-8",ref:e,onMouseEnter:function(){e.current.classList.add("w-56")},onMouseLeave:function(){e.current.classList.remove("w-56")},children:[Object(p.jsx)("input",{type:"text",className:"w-32 outline-none bg-transparent placeholder-white text-white",placeholder:"Search..."}),Object(p.jsx)(b.a,{size:20,weight:"bold",className:"text-white"})]})},w=i.p+"static/media/metamask.09e5f554.svg",f=function(e){var t=e.closePopup,i=Object(n.useContext)(O),a=i.setWalletAddress,s=i.setisConnected,l=i.setBalance;return Object(p.jsx)("div",{onClick:function(e){e.target===e.currentTarget&&t()},className:"fixed top-0 left-0 w-screen h-screen z-40 bg-gray-darkest bg-opacity-75 flex items-center justify-centre",children:Object(p.jsxs)("div",{className:"bg-black w-1/4 mx-auto flex flex-col h-64 rounded-md",children:[Object(p.jsxs)("div",{className:"flex justify-between items-center border-b border-gray-darkest px-4 py-3",children:[Object(p.jsx)("h3",{className:"font-alien text-white",children:"Connect wallet"}),Object(p.jsx)("button",{onClick:function(){t()},children:Object(p.jsx)(r.a,{size:24,weight:"light",className:"text-white"})})]}),Object(p.jsx)("div",{className:"flex-grow flex items-center justify-center",children:Object(p.jsxs)("div",{onClick:function(){window.ethereum&&window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){var t=function(e){return e=e.split(""),"".concat(e[0]).concat(e[1]).concat(e[2]).concat(e[3]).concat(e[4],"...").concat(e.length-4).concat(e.length-3).concat(e[e.length-2]).concat(e[e.length-1])}(e[0]);a(t),s(!0),window.ethereum.request({method:"eth_getBalance",params:[e[0].toString(),"latest"]}).then((function(e){l(e)}))}))},className:"flex flex-col items-center justify-center cursor-pointer",children:[Object(p.jsx)("img",{src:w,alt:"",className:"w-12 h-12 mb-2"}),Object(p.jsx)("span",{className:"text-white font-medium text-center",children:"MetaMask"})]})})]})})},N=i(123),v=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),i=t[0],s=t[1],l=Object(n.useState)(!1),o=Object(c.a)(l,2),r=o[0],d=o[1],h=Object(n.useContext)(O),m=h.walletAddress,u=h.isConnected,g=h.balance;return Object(p.jsxs)(a.a.Fragment,{children:[u?Object(p.jsxs)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},className:"relative",children:[Object(p.jsx)("button",{className:"md:px-7 px-3 md:py-2.5 py-2 bg-primary text-black text-sm font-semibold font-nunito md:font-alien",children:m}),r&&Object(p.jsx)("div",{className:"bg-primary absolute w-full md:px-7 px-3 md:py-2.5 py-2 border-t border-black",children:Object(p.jsxs)("div",{className:"flex justify-between items-center",children:[Object(p.jsx)("span",{className:"text-black",children:"balance:"}),Object(p.jsx)("p",{className:"text-black font-bold",children:N.a.utils.formatEther(g.toString())})]})})]}):Object(p.jsx)("button",{onClick:function(){s(!0)},className:"md:px-7 px-3 md:py-2.5 py-2 bg-primary text-black text-sm font-semibold font-nunito md:font-alien",children:"Connect"}),i&&Object(p.jsx)(f,{closePopup:function(){s(!1)}})]})},O=a.a.createContext(),y=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),i=t[0],a=t[1],s=Object(n.useState)(null),l=Object(c.a)(s,2),h=l[0],u=l[1],g=Object(n.useState)(null),b=Object(c.a)(g,2),w=b[0],f=b[1],N=Object(n.useState)(!1),y=Object(c.a)(N,2),A=y[0],_=y[1];return Object(n.useEffect)((function(){window.ethereum&&window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){var t=function(e){return e=e.split(""),"".concat(e[0]).concat(e[1]).concat(e[2]).concat(e[3]).concat(e[4],"...").concat(e.length-4).concat(e.length-3).concat(e[e.length-2]).concat(e[e.length-1])}(e[0]);u(t),a(!0),window.ethereum.request({method:"eth_getBalance",params:[e[0].toString(),"latest"]}).then((function(e){f(e)}))}))}),[]),Object(p.jsx)(O.Provider,{value:{walletAddress:h,setWalletAddress:u,balance:w,setBalance:f,isConnected:i,setisConnected:a},children:Object(p.jsxs)("div",{className:"max-w-screen-xl absolute top-0 left-0 right-0 mx-auto w-full bg-green-900 bg-opacity-25 flex items-center justify-between md:px-12 px-6 py-4",children:[Object(p.jsxs)("div",{className:"flex items-center",children:[Object(p.jsx)(m,{}),Object(p.jsx)("span",{className:"hidden md:inline w-0.5 h-6 mx-8 bg-white"}),Object(p.jsx)(x,{})]}),Object(p.jsxs)("div",{className:"flex items-center",children:[Object(p.jsx)(j,{}),Object(p.jsx)(v,{}),Object(p.jsx)("div",{className:"md:hidden ml-2",children:Object(p.jsx)("button",{onClick:function(){_(!0)},children:Object(p.jsx)(o.a,{size:24,className:"text-white"})})})]}),A&&Object(p.jsxs)("div",{className:"w-screen h-screen fixed flex flex-col top-0 right-0 bg-black z-30",children:[Object(p.jsxs)("div",{className:"flex items-center justify-between px-6 py-4",children:[Object(p.jsx)(m,{}),Object(p.jsx)("button",{onClick:function(){_(!1)},children:Object(p.jsx)(r.a,{size:24,className:"text-white"})})]}),Object(p.jsxs)("div",{className:"flex-grow flex flex-col items-center justify-center",children:[Object(p.jsx)("div",{onClick:function(){_(!1)},children:Object(p.jsx)(d.b,{to:"/",children:Object(p.jsx)("span",{className:"font-medium text-4xl text-white font-alien mr-4 cursor-pointer mb-6",children:"Home"})})}),Object(p.jsx)("div",{onClick:function(){_(!1)},children:Object(p.jsx)(d.b,{to:"/discover",children:Object(p.jsx)("span",{className:"font-medium text-4xl text-white font-alien mr-4 cursor-pointer",children:"Discover"})})})]})]})]})})},A=function(e){var t=e.collectionName,i=e.active?"bg-primary font-semibold text-black px-6 py-1.5":"text-white";return Object(p.jsx)("button",{className:"mr-6 text-xs font-alien ".concat(i),children:t})},_=function(){return Object(p.jsxs)("div",{className:"flex items-center",children:[Object(p.jsx)(A,{active:!0,collectionName:"All items"}),Object(p.jsx)(A,{active:!1,collectionName:"Magic Alien"})]})},F=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h3",{className:"text-4xl text-white font-semibold font-alien mb-8",children:"Discover our items"})})},S=i(491),k=function(){var e=Object(n.useContext)(R),t=e.nftList,i=e.setSelectedNft;return Object(p.jsx)("div",{className:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-12 my-20",children:t.map((function(e){return Object(p.jsx)(d.b,{to:"/nfts/".concat(e.id),children:Object(p.jsxs)("div",{onClick:function(){i(e),console.log(e)},className:"border border-primary border-opacity-25 hover:border-opacity-50 p-3",children:[Object(p.jsx)("div",{className:"relative bg-green-900 bg-opacity-25 w-full",children:Object(p.jsx)("img",{src:e.imageUrl,alt:"",className:"w-full h-full object-cover h-56 mb-5"})}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"flex items-center mb-1",children:[Object(p.jsx)(S.a,{size:7,weight:"fill",className:"text-red-600 mr-1"}),Object(p.jsx)("span",{className:"text-red-500",children:"Not for sale"})]}),Object(p.jsx)("h3",{className:"text-gray-200 font-semibold font-epilogue mb-3",children:"".concat(e.collectionName," ").concat(e.name)}),Object(p.jsx)("span",{className:"font-epilogue font-semibold text-white text-lg",children:"xx.xx ALNFT"})]})]})})}))})},U=function(){return Object(p.jsxs)("div",{className:"max-w-screen-xl mx-auto md:px-12 px-6 mt-40",children:[Object(p.jsx)(F,{}),Object(p.jsx)("div",{className:"flex items-center justify-between mb-16",children:Object(p.jsx)(_,{})}),Object(p.jsx)(k,{})]})},M=function(){var e=Object(n.useContext)(R).selectedNft;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"flex items-center mb-1",children:[Object(p.jsx)(S.a,{size:7,weight:"fill",className:"text-red-600 mr-1"}),Object(p.jsx)("span",{className:"text-red-500",children:"Not for sale"})]}),Object(p.jsx)("h3",{className:"font-alien font-semibold text-3xl mb-8 text-white",children:e.name}),Object(p.jsxs)("div",{className:"mb-8",children:[Object(p.jsxs)("div",{className:"flex items-center",children:[Object(p.jsx)(S.a,{size:7,weight:"fill",className:"text-primary mr-1"}),Object(p.jsx)("p",{className:"font-medium text-gray-500",children:"collection"})]}),Object(p.jsx)("div",{className:"mb-8",children:Object(p.jsx)("p",{className:"text-lg font-medium text-gray-300",children:e.collectionName})}),Object(p.jsx)("div",{className:"mb-8",children:Object(p.jsx)("p",{className:"text-3xl font-bold text-white",children:"xx.xx ALNFT"})}),Object(p.jsx)("div",{className:"mb-8",children:Object(p.jsx)("p",{className:"font-nunito text-gray-300",children:e.description})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"px-8 py-2 bg-primary font-semibold cursor-not-allowed",children:"Buy Now"})})]})]})},T=(i.p,function(){var e=Object(n.useContext)(R).selectedNft;return Object(p.jsxs)(a.a.Fragment,{children:[Object(p.jsx)(S.a,{size:12,weight:"fill",className:"hidden md:block text-primary mr-16"}),Object(p.jsx)("img",{src:e.imageUrl,alt:"",className:"w-full md:w-3/4 object-cover mb-12"})]})}),P=i(51),C=(i.p,function(){var e=Object(n.useContext)(R),t=e.nftList,i=e.setSelectedNft;return Object(p.jsxs)(a.a.Fragment,{children:[Object(p.jsx)("h3",{className:"text-4xl font-bold text-white mb-12",children:"You might also like"}),Object(p.jsx)("div",{className:"w-12 h-2 bg-primary mb-16 rounded"}),Object(p.jsx)("div",{className:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-8",children:Object(P.a)(Array(4)).map((function(){var e=Math.floor(Math.random()*t.length);return Object(p.jsx)(d.b,{to:"/nfts/".concat(e),children:Object(p.jsxs)("div",{onClick:function(){i(t[e])},className:"border border-primary border-opacity-25 hover:border-opacity-50 p-3",children:[Object(p.jsx)("div",{className:"relative bg-green-900 bg-opacity-25 w-full",children:Object(p.jsx)("img",{src:t[e].imageUrl,alt:"",className:"w-full h-full object-cover h-56 mb-5"})}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"flex items-center mb-1",children:[Object(p.jsx)(S.a,{size:7,weight:"fill",className:"text-red-600 mr-1"}),Object(p.jsx)("span",{className:"text-red-500",children:"Not for sale"})]}),Object(p.jsx)("h3",{className:"text-gray-200 font-semibold font-epilogue mb-3",children:t[e].name}),Object(p.jsx)("span",{className:"font-epilogue font-semibold text-white text-lg",children:"xx.xx ALNFT"})]})]})})}))})]})}),G=function(){var e=Object(n.useContext)(R),t=e.nftList,i=e.selectedNft,a=e.setSelectedNft,s=Object(g.g)();return Object(n.useEffect)((function(){if(null===i){var e=t.filter((function(e){return e.id==s.id}))[0];a(e)}}),[]),Object(p.jsx)("div",{className:"max-w-screen-xl mx-auto md:px-12 px-6 ",children:null!==i&&Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"md:flex items-center mt-44",children:[Object(p.jsx)("div",{className:"w-full md:w-1/2 flex justify-end md:pr-8",children:Object(p.jsx)(T,{})}),Object(p.jsx)("div",{className:"w-full md:w-1/2 md:pl-12",children:Object(p.jsx)(M,{})})]}),Object(p.jsx)("div",{className:"my-44",children:Object(p.jsx)(C,{})})]})})},D=i(492),z=i(493),J=i(494),B=function(){return Object(p.jsxs)("div",{className:"max-w-screen-xl mx-auto w-full border-t border-primary border-opacity-25 flex items-center justify-between px-12 pt-6 pb-12",children:[Object(p.jsx)("img",{src:h,alt:"",className:"w-32"}),Object(p.jsxs)("div",{className:"flex items-center",children:[Object(p.jsx)("a",{href:"https://twitter.com/AlienNFT_bsc",target:"_blank",children:Object(p.jsx)(D.a,{size:24,weight:"bold",className:"text-white mr-4"})}),Object(p.jsx)("a",{href:"https://www.instagram.com/alienft_bsc/",target:"_blank",children:Object(p.jsx)(z.a,{size:24,weight:"bold",className:"text-white mr-4"})}),Object(p.jsx)("a",{href:"https://t.me/AlieNftBsc",target:"_blank",children:Object(p.jsx)(J.a,{size:24,weight:"bold",className:"text-white mr-4"})})]})]})},E=function(){return Object(p.jsxs)("div",{className:"h-screen flex flex-col justify-center items-center mt-10",children:[Object(p.jsx)("h1",{className:"text-6xl text-white font-bold font-alien px-8 max-w-screen-lg mx-auto text-center mb-12",children:"Welcome the new era of art trading"}),Object(p.jsx)("p",{className:"text-xl text-white font-light font-nunito text-center mb-12",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus eum minus excepturi sit debiti"}),Object(p.jsx)("button",{className:"bg-primary font-semibold font-nunito  px-8 py-3",children:"Discover our collection"})]})};var Y=Object(g.h)((function(e){var t=e.history;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null})),R=a.a.createContext();var q=function(){var e=Object(n.useState)([{id:1,collectionName:"First gen Aliens",name:"#001",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235559/upload%20cloud/33_xwjzvh.png",description:"This is the Yellow Alien, on the Night Forest ,with Super Star glasses, Jet headphones, Nose and Ear Piercings, a Mask and Devil Horns ",price:null},{id:2,collectionName:"First gen Aliens",name:"#002",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235557/upload%20cloud/3_cixblf.png",description:"This is the Red Alien, on the Night Forest ,with Black Sunglasses, a Roman Crown and a Medal ",price:null},{id:3,collectionName:"First gen Aliens",name:"#003",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235557/upload%20cloud/7_mgdpqr.png",description:"This is the Purple Alien, on the Moon ,with Sherrif's glasses, Jet headphones, a Gold chain hidden behind the scarf and a sweat band ",price:null},{id:4,collectionName:"First gen Aliens",name:"#004",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235556/upload%20cloud/40_kviiff.png",description:"This is the Red Alien, on the Snowy Mountains ,with Sherrif's glasses, Jet headphones, a Pipe, and Devil horns ",price:null},{id:5,collectionName:"First gen Aliens",name:"#005",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235556/upload%20cloud/5_craqj9.png",description:"This is the Green Alien, on the Snowy Mountains ,with 3D glasses, Fluffy headphones, Ninja Band and a scarf ",price:null},{id:6,collectionName:"First gen Aliens",name:"#006",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235556/upload%20cloud/50_j9nuoj.png",description:"This is the Yellow Alien, on the Night Forest ,with Black glasses, a Medal and a Unicorn ",price:null},{id:7,collectionName:"First gen Aliens",name:"#007",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235556/upload%20cloud/6_qxu8pp.png",description:"This is the Purple Alien, on the Egyptian Desert ,with Alien glasses, a Gas Mask, a Medal and a Unicorn ",price:null},{id:8,collectionName:"First gen Aliens",name:"#008",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235555/upload%20cloud/49_eeeaqx.png",description:"This is the Green Alien, on the Moon ,with 3D glasses, a spaceship over his head and a Gold chain ",price:null},{id:9,collectionName:"First gen Aliens",name:"#009",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235555/upload%20cloud/47_jfxob4.png",description:"This is the Yellow Alien, on the Snowy Mountains ,with Black glasses, Jet headphones and a Medal ",price:null},{id:10,collectionName:"First gen Aliens",name:"#010",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235555/upload%20cloud/48_ik3s7r.png",description:"This is the Yellow Alien, on the Moon, a Ninja Band, a Pipe, a Forehead piercing and a Gold chain ",price:null},{id:11,collectionName:"First gen Aliens",name:"#011",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235554/upload%20cloud/46_neufp9.png",description:"This is the Green Alien, on the Night Forest ,with Sheriff's glasses, Fluffy headphones, a spaceship over his head and a Gas Mask "},{id:12,collectionName:"First gen Aliens",name:"#012",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235554/upload%20cloud/45_phsyba.png",description:"This is the Green Alien, on the Night Forest ,with Super Star glasses, Jet headphones, a Spaceship over his Head a Forehead Piercing and A Gas Mask ",price:null},{id:13,collectionName:"First gen Aliens",name:"#013",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235554/upload%20cloud/44_feiri9.png",description:"This is the Green Alien, on the Night Forest ,with 3D glasses, Jet headphones, Nose and Ear Piercings, a Mask and a Unicorn ",price:null},{id:14,collectionName:"First gen Aliens",name:"#014",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235554/upload%20cloud/43_xzlsxv.png",description:"This is the Yellow Alien, on the Egyptian Desert ,with Star glasses, Jet headphones, a Pipe, a Sweatband and a Scarf",price:null},{id:15,collectionName:"First gen Aliens",name:"#015",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235553/upload%20cloud/42_too7ys.png",description:"This is the Red Alien, on the Snowy Mountains ,with Star glasses, Jet headphones, a Pipe and Devil Horns ",price:null},{id:16,collectionName:"First gen Aliens",name:"#016",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235553/upload%20cloud/41_xu0tcf.png",description:"This is the Purple Alien, on the Snowy Mountains ,with Sherrif's glasses, Forehead Piercings, Devil Horns and a Scarf",price:null},{id:17,collectionName:"First gen Aliens",name:"#017",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235553/upload%20cloud/4_fpxmhw.png",description:"This is the Purple Alien, on the Night Forest ,with Star glasses, Roman Crown, a Pipe, a Medal and a Scarf ",price:null},{id:18,collectionName:"First gen Aliens",name:"#018",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235552/upload%20cloud/38_soyrvm.png",description:"This is the Purple Alien, on the Night Forst ,with Sheriff's glasses, Jet headphones, a Spaceship over his head and a Scarf ",price:null},{id:19,collectionName:"First gen Aliens",name:"#019",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235552/upload%20cloud/39_pmy7yx.png",description:"This is the Red Alien, on the Moon ,with Alien glasses, Jet headphones, a Cowboy's Hat and a Mask ",price:null},{id:20,collectionName:"First gen Aliens",name:"#020",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235552/upload%20cloud/27_ccxaxg.png",description:"This is the Green Alien, on the Egyptian Desert with Jet headphones ",price:null},{id:21,collectionName:"First gen Aliens",name:"#021",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235551/upload%20cloud/37_tx8pgq.png",description:"This is the Red Alien, on the Moon ,with Superstar glasses, Jet headphones, Nose and Ear Piercings, Sweatband and a Scarf",price:null},{id:22,collectionName:"First gen Aliens",name:"#022",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235551/upload%20cloud/36_i9ylyw.png",description:"This is the Green Alien, on the Night Forest ,with Superstar glasses, Jet headphones, a Ninja Band and a Scarf ",price:null},{id:23,collectionName:"First gen Aliens",name:"#023",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235551/upload%20cloud/34_hwpksr.png",description:"This is the Purple Alien, on the Snowy Mountains ,with Star glasses, a Beanie, a Mask and a Scarf ",price:null},{id:24,collectionName:"First gen Aliens",name:"#024",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235551/upload%20cloud/35_d7jcbi.png",description:"This is the Yellow Alien, on the Snowy Mountains ,with a Forehead Piercing, a Bandana and a Scarf ",price:null},{id:25,collectionName:"First gen Aliens",name:"#025",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235550/upload%20cloud/1_r1fxop.png",description:"This is the Yellw Alien, on the Moon ,with Black glasses, Jet headphones, a Mask, Forhead Piercings, Devil Horns and a Gold chain ",price:null},{id:26,collectionName:"First gen Aliens",name:"#026",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235550/upload%20cloud/32_pvrlzm.png",description:"This is the Yellow Alien, on the Snowy Maintains ,with Star glasses, a Roman Crown And a Mask ",price:null},{id:27,collectionName:"First gen Aliens",name:"#027",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235550/upload%20cloud/31_djwblh.png",description:"This is the Green Alien, on the Egyptian Desert ,with Sherrif's glasses, Jets headphones, a Bandana, a Forhead Piercing and a Pipe ",price:null},{id:28,collectionName:"First gen Aliens",name:"#028",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235550/upload%20cloud/29_prvffe.png",description:"This is the Yellow Alien, on the Egyptian Desert ,with Superstar glasses, a Sweatband, a Gas Mask and a Scarf ",price:null},{id:29,collectionName:"First gen Aliens",name:"#029",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235550/upload%20cloud/30_jwkxso.png",description:"This is the Yellow Alien, on the Night Forest ,with Star glasses, Jet headphones, Nose and Ear Piercings and a Unicorn",price:null},{id:30,collectionName:"First gen Aliens",name:"#030",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235549/upload%20cloud/28_xyw6nr.png",description:"This is the Yellow Alien, on the Night Forest ,with 3D glasses, Fluffy headphones, Devil Horns, a Gas Mask and a Scarf ",price:null},{id:31,collectionName:"First gen Aliens",name:"#031",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235549/upload%20cloud/25_sz26py.png",description:"This is the Purple Alien, on the Moon ,with Sherrif's glasses, Jet headphones, a Mask, a Medal, a Scarf and a Unicorn ",price:null},{id:32,collectionName:"First gen Aliens",name:"#032",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235549/upload%20cloud/26_zofoxx.png",description:"This is the Yellow Alien, on the Snowy Mountains ,with Alien glasses, a Mask, a Roman Crown and a Scarf ",price:null},{id:33,collectionName:"First gen Aliens",name:"#033",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235549/upload%20cloud/11_dzuih9.png",description:"This is the Green Alien, on the Egyptian Desert ,with Black glasses, a Mask, a Ninja Band and a Gold chain ",price:null},{id:34,collectionName:"First gen Aliens",name:"#034",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235548/upload%20cloud/24_jlxoz2.png",description:"This is the Red Alien, on the Snowy Mountans ,with Black glasses, Devil Horns, a Medal and a Scarf ",price:null},{id:35,collectionName:"First gen Aliens",name:"#035",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235548/upload%20cloud/12_egqjwb.png",description:"This is the Red Alien, on the Night Forest ,with Jet headphones, a Mask and a Unicorn ",price:null},{id:36,collectionName:"First gen Aliens",name:"#036",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235548/upload%20cloud/23_udx14b.png",description:"This is the Yellow Alien, on the Moon ,with 3D glasses, Forehead Piercings, a Mask, a Medal, a Scarf and a Unicorn ",price:null},{id:37,collectionName:"First gen Aliens",name:"#037",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235548/upload%20cloud/22_wugty8.png",description:"This is the Purple Alien, on the Night Forest ,with Jet headphones, Black glasses, a Pipe, Roman Crown and a Gold chain ",price:null},{id:38,collectionName:"First gen Aliens",name:"#038",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235548/upload%20cloud/21_zzjuxg.png",description:"This is the Red Alien, on the Night Forest ,with Black glasses, Jet headphones, a Gas Mask and a Gold Chain ",price:null},{id:39,collectionName:"First gen Aliens",name:"#039",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235547/upload%20cloud/20_brhlgh.png",description:"This is the Green Alien, on the Snowy Mountains ,with Sherrif's glasses, Jet headphones, Devil Horns and a Gold chain ",price:null},{id:40,collectionName:"First gen Aliens",name:"#040",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235547/upload%20cloud/19_rszupf.png",description:"This is the Green Alien, on the Egyptian Desert ,with Star glasses, Fluffy headphones, a Sweatband, a Mask, and a Medal ",price:null},{id:41,collectionName:"First gen Aliens",name:"#041",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235547/upload%20cloud/2_go0zzl.png",description:"This is the Purple Alien, on the Night Forest ,with Superstar glasses, Jet headphones, Nose and Ear Piercings and a Unicorn ",price:null},{id:42,collectionName:"First gen Aliens",name:"#042",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235546/upload%20cloud/17_ii1fis.png",description:"This is the Purple Alien, on the Snowy Mountains ,with Sherrif's glasses, Jet headphones, a Mask, a Bandana and a Gold chain ",price:null},{id:43,collectionName:"First gen Aliens",name:"#043",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235546/upload%20cloud/15_rmvfap.png",description:"This is the Yellow Alien, on the Moon ,with 3D glasses, Nose and Ear Piercings and a Sweatband ",price:null},{id:44,collectionName:"First gen Aliens",name:"#044",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235546/upload%20cloud/16_q3etkl.png",description:"This is the Green Alien, on the Egyptian desert ,with Sheriff's glasses, Jet headphones, a Beanie, a Pipe and a Scarf ",price:null},{id:45,collectionName:"First gen Aliens",name:"#045",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235545/upload%20cloud/18_cn1mro.png",description:"This is the Yellow Alien, on the Egyptian Desert ,with Superstar glasses, Fluffy headphones, Nose and Ear Piercings, Ninja Bnad and a Gold chain ",price:null},{id:46,collectionName:"First gen Aliens",name:"#046",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235545/upload%20cloud/14_vk8ae1.png",description:"This is the Red Alien, on the Egyptian Desert ,with 3D glasses, Fluffy headphones, a Ninja Band and a Medal",price:null},{id:47,collectionName:"First gen Aliens",name:"#047",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235544/upload%20cloud/9_fgja61.png",description:"This is the Green Alien, on the Egyptian Desert ,with Alien glasses, Jet headphones, a Spaceship over his head, a Gold medal and a Scarf ",price:null},{id:48,collectionName:"First gen Aliens",name:"#048",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235545/upload%20cloud/13_hwxfxz.png",description:"This is the Purple Alien, on the Snowy Mountains ,with a Bandana and a Medal ",price:null},{id:49,collectionName:"First gen Aliens",name:"#049",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235544/upload%20cloud/8_ut2vkc.png",description:"This is the Purple Alien, on the Night Forest ,with a Gas mask and a Unicorn ",price:null},{id:50,collectionName:"First gen Aliens",name:"#050",imageUrl:"https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235544/upload%20cloud/10_nzbdbi.png",description:"This is the Green Alien, on the Snowy Mountains ,with Superstar glasses, Jet headphones, a Forehead Piercing, a Pipe and a Medal ",price:null}]),t=Object(c.a)(e,2),i=t[0],a=t[1],s=Object(n.useState)(null),l=Object(c.a)(s,2),o=l[0],r=l[1];return Object(p.jsx)("div",{className:"App z-20 w-full",children:Object(p.jsx)(R.Provider,{value:{nftList:i,setNftList:a,selectedNft:o,setSelectedNft:r},children:Object(p.jsxs)(d.a,{basename:"/",children:[Object(p.jsx)(Y,{}),Object(p.jsx)(y,{}),Object(p.jsxs)(g.c,{children:[Object(p.jsx)(g.a,{path:"/discover",exact:!0,component:U}),Object(p.jsx)(g.a,{path:"/",exact:!0,component:E}),Object(p.jsx)(g.a,{path:"/nfts/:id",exact:!0,component:G})]}),Object(p.jsx)(B,{})]})})})};i(122);l.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root"))}},[[486,1,2]]]);
//# sourceMappingURL=main.84f2b7d3.chunk.js.map