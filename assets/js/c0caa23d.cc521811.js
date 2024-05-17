"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3642],{5680:(e,a,r)=>{r.d(a,{xA:()=>l,yg:()=>g});var o=r(6540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,o,n=function(e,a){if(null==e)return{};var r,o,n={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),d=function(e){var a=o.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},l=function(e){var a=d(e.components);return o.createElement(c.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var r=e.components,n=e.mdxType,t=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||t;return r?o.createElement(g,i(i({ref:a},l),{},{components:r})):o.createElement(g,i({ref:a},l))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=r.length,i=new Array(t);i[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<t;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4983:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var o=r(8168),n=(r(6540),r(5680));const t={sidebar_position:4},i="Configura\xe7\xe3o do ambiente",s={unversionedId:"Jexactyl/Instala\xe7\xe3o/environment",id:"Jexactyl/Instala\xe7\xe3o/environment",title:"Configura\xe7\xe3o do ambiente",description:"*",source:"@site/docs/3 - Jexactyl/2 - Instala\xe7\xe3o/environment.md",sourceDirName:"3 - Jexactyl/2 - Instala\xe7\xe3o",slug:"/Jexactyl/Instala\xe7\xe3o/environment",permalink:"/docs/Jexactyl/Instala\xe7\xe3o/environment",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configura\xe7\xe3o do Database",permalink:"/docs/Jexactyl/Instala\xe7\xe3o/database"},next:{title:"Inicializador do Jexactyl",permalink:"/docs/Jexactyl/Instala\xe7\xe3o/queue-workers"}},c={},d=[{value:"Criar arquivo de configura\xe7\xe3o",id:"criar-arquivo-de-configura\xe7\xe3o",level:3},{value:"Instalar pacotes do Composer",id:"instalar-pacotes-do-composer",level:3},{value:"Configurar ambiente do painel",id:"configurar-ambiente-do-painel",level:3},{value:"Migra\xe7\xe3o de banco de dados",id:"migra\xe7\xe3o-de-banco-de-dados",level:3},{value:"Criar usu\xe1rio administrador",id:"criar-usu\xe1rio-administrador",level:3},{value:"Atribuir permiss\xf5es",id:"atribuir-permiss\xf5es",level:3}],l={toc:d},p="wrapper";function u(e){let{components:a,...r}=e;return(0,n.yg)(p,(0,o.A)({},l,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"configura\xe7\xe3o-do-ambiente"},"Configura\xe7\xe3o do ambiente"),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"criar-arquivo-de-configura\xe7\xe3o"},"Criar arquivo de configura\xe7\xe3o"),(0,n.yg)("p",null,"Precisamos come\xe7ar copiando o arquivo de configura\xe7\xf5es padr\xe3o, chamado ",(0,n.yg)("inlineCode",{parentName:"p"},".env.example"),". vamos querer\nisso ser\xe1 chamado ",(0,n.yg)("inlineCode",{parentName:"p"},".env"),", ent\xe3o \xe9 s\xf3 copiar o arquivo para configurar o Painel\nexatamente como voc\xea quer."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"sudo cp .env.example .env\n")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"instalar-pacotes-do-composer"},"Instalar pacotes do Composer"),(0,n.yg)("p",null,"Depois disso, precisaremos instalar as depend\xeancias do Composer - o que permitir\xe1 o c\xf3digo PHP em nosso projeto\n(como back-end e admin-side) para funcionar corretamente."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"sudo composer install --no-dev --optimize-autoloader\n")),(0,n.yg)("p",null,"Por fim, geraremos um token aleat\xf3rio que ser\xe1 a chave de criptografia/aplicativo do nosso projeto."),(0,n.yg)("admonition",{type:"danger"},(0,n.yg)("p",{parentName:"admonition"},"Esta chave de criptografia \xe9 usada para armazenar dados importantes (como chaves de API).\nN\xc3O compartilhe esta chave com ningu\xe9m - proteja-a como uma senha.\nSe voc\xea perder esta chave, todos os dados ser\xe3o imposs\xedveis de recuperar.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan key:generate --force\n")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"configurar-ambiente-do-painel"},"Configurar ambiente do painel"),(0,n.yg)("p",null,"Jexactyl usa comandos CLI para definir a maioria das configura\xe7\xf5es b\xe1sicas do Painel.\nO seguinte permitir\xe1 que voc\xea defina configura\xe7\xf5es gerais, de banco de dados e de correio."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan p:environment:setup\nsudo php artisan p:environment:database\nsudo php artisan p:environment:mail # N\xe3o \xe9 necess\xe1rio executar o Painel.\n")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"migra\xe7\xe3o-de-banco-de-dados"},"Migra\xe7\xe3o de banco de dados"),(0,n.yg)("p",null,"Agora precisamos configurar todos os dados base para o Painel no banco de dados que voc\xea criou anteriormente. O comando abaixo pode levar algum tempo para ser executado dependendo da sua m\xe1quina. Por favor ",(0,n.yg)("strong",{parentName:"p"},"N\xc3O saia do processo")," at\xe9 que esteja completo! Este comando configurar\xe1 as tabelas do banco de dados e adicionar\xe1 todos os Nests & Eggs que alimentam o Jexactyl."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan migrate --seed --force\n")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"criar-usu\xe1rio-administrador"},"Criar usu\xe1rio administrador"),(0,n.yg)("p",null,"Para acessar o Painel pela primeira vez, voc\xea precisar\xe1 criar um usu\xe1rio via CLI - n\xe3o se preocupe, voc\xea pode\ncrie usu\xe1rios facilmente atrav\xe9s do frontend! Aqui est\xe1 um comando simples que o guiar\xe1 pelas etapas de\nconfigurando a conta de administrador inicial:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan p:user:make\n")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"atribuir-permiss\xf5es"},"Atribuir permiss\xf5es"),(0,n.yg)("p",null,"Para que o servidor web que voc\xea est\xe1 usando acesse os arquivos do Painel, precisamos atribuir permiss\xf5es a ele\ncom o comando ",(0,n.yg)("inlineCode",{parentName:"p"},"chown"),". Veja como fazer isso para todos os tipos de servidores da Web:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# Se estiver usando NGINX ou Apache (n\xe3o no CentOS):\nsudo chown -R www-data:www-data /var/www/jexactyl/*\n\n# Se estiver usando NGINX no CentOS:\nsudo chown -R nginx:nginx /var/www/jexactyl/*\n\n# Se estiver usando o Apache no CentOS:\nsudo chown -R apache:apache /var/www/jexactyl/*\n")))}u.isMDXComponent=!0}}]);