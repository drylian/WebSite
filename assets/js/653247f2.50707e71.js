"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6460],{5680:(e,a,o)=>{o.d(a,{xA:()=>p,yg:()=>u});var r=o(6540);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function c(e,a){if(null==e)return{};var o,r,n=function(e,a){if(null==e)return{};var o,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),l=function(e){var a=r.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},p=function(e){var a=l(e.components);return r.createElement(s.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var o=e.components,n=e.mdxType,t=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(o),m=n,u=d["".concat(s,".").concat(m)]||d[m]||g[m]||t;return o?r.createElement(u,i(i({ref:a},p),{},{components:o})):r.createElement(u,i({ref:a},p))}));function u(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=o.length,i=new Array(t);i[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<t;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4825:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=o(8168),n=(o(6540),o(5680));const t={sidebar_position:2},i="Configurar pagamentos com Mercado Pago",c={unversionedId:"Jexactyl/Extras/Adicional/Mercado_Pago",id:"Jexactyl/Extras/Adicional/Mercado_Pago",title:"Configurar pagamentos com Mercado Pago",description:"*",source:"@site/docs/3 - Jexactyl/6 - Extras/2 - Adicional/Mercado_Pago.md",sourceDirName:"3 - Jexactyl/6 - Extras/2 - Adicional",slug:"/Jexactyl/Extras/Adicional/Mercado_Pago",permalink:"/docs/Jexactyl/Extras/Adicional/Mercado_Pago",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configurar Discord 0Auth para Jexactyl",permalink:"/docs/Jexactyl/Extras/Adicional/configura\xe7\xe3o"},next:{title:"Aceite pagamentos com PayPal",permalink:"/docs/Jexactyl/Extras/Adicional/paypal"}},s={},l=[{value:"Obtenha o Access Token",id:"obtenha-o-access-token",level:3},{value:"1. Fa\xe7a login no portal do desenvolvedor do Mercado Pago",id:"1-fa\xe7a-login-no-portal-do-desenvolvedor-do-mercado-pago",level:3},{value:"2. V\xe1 para o painel e crie uma nova aplica\xe7\xe3o em Suas integra\xe7\xf5es",id:"2-v\xe1-para-o-painel-e-crie-uma-nova-aplica\xe7\xe3o-em-suas-integra\xe7\xf5es",level:3},{value:"3. Preencha as informa\xe7\xf5es da sua aplica\xe7\xe3o da seguinte forma:",id:"3-preencha-as-informa\xe7\xf5es-da-sua-aplica\xe7\xe3o-da-seguinte-forma",level:3},{value:"4. Obtenha o Access Token",id:"4-obtenha-o-access-token",level:3},{value:"5. Adicionar Access Token do Cliente ao Jexactyl",id:"5-adicionar-access-token-do-cliente-ao-jexactyl",level:3},{value:"6. Ative o gateway do Mercado Pago nas configura\xe7\xf5es",id:"6-ative-o-gateway-do-mercado-pago-nas-configura\xe7\xf5es",level:3},{value:"7. Teste sua configura\xe7\xe3o",id:"7-teste-sua-configura\xe7\xe3o",level:3}],p={toc:l},d="wrapper";function g(e){let{components:a,...o}=e;return(0,n.yg)(d,(0,r.A)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"configurar-pagamentos-com-mercado-pago"},"Configurar pagamentos com Mercado Pago"),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Mostraremos nesse guia como fazer as configura\xe7\xf5es para come\xe7ar a utilizar o Mercado Pago\npara processar as compras de forma pr\xe1tica e segura."),(0,n.yg)("admonition",{title:"Aviso:",type:"danger"},(0,n.yg)("p",{parentName:"admonition"},"Este metodo de pagamento \xe9 ",(0,n.yg)("inlineCode",{parentName:"p"},"Exclusivo")," da Nextpanel e foi implementado na ",(0,n.yg)("inlineCode",{parentName:"p"},"v3.8.4"),"."),(0,n.yg)("p",{parentName:"admonition"},"Verifique se voc\xea est\xe1 executando esta vers\xe3o ou a mais recente para usar o sistema do Mercado Pago.")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"obtenha-o-access-token"},"Obtenha o Access Token"),(0,n.yg)("p",null,"Voc\xea precisar\xe1 primeiro criar uma nova 'Aplica\xe7\xe3o' com o Mercado Pago para obter um Access Token\npara usar no Jexactyl."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"1-fa\xe7a-login-no-portal-do-desenvolvedor-do-mercado-pago"},"1. Fa\xe7a login no ",(0,n.yg)("a",{parentName:"h3",href:"https://www.mercadopago.com.br/developers/panel/app"},"portal do desenvolvedor")," do Mercado Pago"),(0,n.yg)("p",null,"Caso n\xe3o tenha conta no Mercado Pago, ",(0,n.yg)("a",{parentName:"p",href:"https://www.mercadopago.com.br/hub/registration/landing"},"Crie uma Conta")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://github.com/Next-Panel/Docs/assets/30575805/1183ce43-04e1-492f-bfc3-f0c678ab2865",alt:"image"})),(0,n.yg)("h3",{id:"2-v\xe1-para-o-painel-e-crie-uma-nova-aplica\xe7\xe3o-em-suas-integra\xe7\xf5es"},"2. V\xe1 para o painel e crie uma nova aplica\xe7\xe3o em ",(0,n.yg)("a",{parentName:"h3",href:"https://www.mercadopago.com.br/developers/panel/app"},"Suas integra\xe7\xf5es")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://github.com/Next-Panel/Docs/assets/30575805/510bfa90-55e1-4b79-a55b-dca398ce374e",alt:"image"})),(0,n.yg)("h3",{id:"3-preencha-as-informa\xe7\xf5es-da-sua-aplica\xe7\xe3o-da-seguinte-forma"},"3. Preencha as informa\xe7\xf5es da sua aplica\xe7\xe3o da seguinte forma:"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://github.com/Next-Panel/Docs/assets/30575805/33673f6c-605b-482d-87a9-f73f939bc483",alt:"image"})),(0,n.yg)("h3",{id:"4-obtenha-o-access-token"},"4. Obtenha o Access Token"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://github.com/Next-Panel/Docs/assets/30575805/83d4d56b-6cd7-4a6c-a647-113b57d5f873",alt:"image"})),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://github.com/Next-Panel/Docs/assets/30575805/b072392a-316b-4f13-a629-3ba203d9633c",alt:"image"})),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"5-adicionar-access-token-do-cliente-ao-jexactyl"},"5. Adicionar Access Token do Cliente ao Jexactyl"),(0,n.yg)("p",null,"Em seguida, voc\xea precisar\xe1 colocar o Access Token em seu arquivo ",(0,n.yg)("inlineCode",{parentName:"p"},".env")," para permitir que o Jexactyl fa\xe7a login."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/jexactyl\nnano .env\n\n# No final do arquivo .env preencha o campo MPAGO_ACCESS_TOKEN=\n# Caso ele n\xe3o exista, crie ele.\n")),(0,n.yg)("h3",{id:"6-ative-o-gateway-do-mercado-pago-nas-configura\xe7\xf5es"},"6. Ative o gateway do Mercado Pago nas configura\xe7\xf5es"),(0,n.yg)("admonition",{title:"Informa\xe7\xe3o",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Certifique-se de que a configura\xe7\xe3o 'Mercado Pago' esteja definida como 'Habilitado'.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://github.com/Next-Panel/Docs/assets/30575805/a2041795-d1af-4822-a2fe-cb0a2c6e66d7",alt:"image"})),(0,n.yg)("p",null,"Scrolle o navegador para baixo e salve as altera\xe7\xf5es:"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://github.com/Next-Panel/Docs/assets/30575805/f46a2927-1197-4082-8709-74147f2dcb34",alt:"image"})),(0,n.yg)("h3",{id:"7-teste-sua-configura\xe7\xe3o"},"7. Teste sua configura\xe7\xe3o"),(0,n.yg)("p",null,"V\xe1 at\xe9 a Loja e clique na guia 'Saldo'. Quando estiver l\xe1, tente comprar cr\xe9ditos ",(0,n.yg)("inlineCode",{parentName:"p"},"x")," com o Mercado Pago.\nSe a p\xe1gina redirecionar para um portal de compras do Mercado Pago, parab\xe9ns! Voc\xea configurou tudo com sucesso!"),(0,n.yg)("admonition",{title:"Informa\xe7\xe3o",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Se voc\xea tiver problemas ao come\xe7ar a usar o Mercado Pago, informe-nos no nosso ",(0,n.yg)("a",{parentName:"p",href:"https://discord.gg/8r7n7mU33R"},"Discord"))))}g.isMDXComponent=!0}}]);