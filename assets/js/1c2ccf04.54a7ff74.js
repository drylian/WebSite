"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2217],{5680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>g});var n=r(6540);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,n,o=function(e,a){if(null==e)return{};var r,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var a=n.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},p=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,o=e.mdxType,t=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||t;return r?n.createElement(g,i(i({ref:a},p),{},{components:r})):n.createElement(g,i({ref:a},p))}));function g(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=r.length,i=new Array(t);i[0]=m;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<t;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4349:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>s});var n=r(8168),o=(r(6540),r(5680));const t={sidebar_position:4},i="Apache com SSL",l={unversionedId:"Jexactyl/Servidor Web/apache-ssl",id:"Jexactyl/Servidor Web/apache-ssl",title:"Apache com SSL",description:"*",source:"@site/docs/3 - Jexactyl/3 - Servidor Web/apache-ssl.md",sourceDirName:"3 - Jexactyl/3 - Servidor Web",slug:"/Jexactyl/Servidor Web/apache-ssl",permalink:"/docs/Jexactyl/Servidor Web/apache-ssl",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Nginx sem SSL",permalink:"/docs/Jexactyl/Servidor Web/nginx"},next:{title:"Apache com SSL",permalink:"/docs/Jexactyl/Servidor Web/apache"}},c={},s=[{value:"Desativando a configura\xe7\xe3o padr\xe3o",id:"desativando-a-configura\xe7\xe3o-padr\xe3o",level:3},{value:"Criar arquivo de configura\xe7\xe3o",id:"criar-arquivo-de-configura\xe7\xe3o",level:3},{value:"Ativando a configura\xe7\xe3o",id:"ativando-a-configura\xe7\xe3o",level:3}],p={toc:s},u="wrapper";function d(e){let{components:a,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"apache-com-ssl"},"Apache com SSL"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"desativando-a-configura\xe7\xe3o-padr\xe3o"},"Desativando a configura\xe7\xe3o padr\xe3o"),(0,o.yg)("p",null,"Em primeiro lugar, vamos remover a configura\xe7\xe3o padr\xe3o do Apache do seu servidor."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"a2dissite 000-default.conf\n")),(0,o.yg)("p",null,"Feito isso, podemos fazer nossa configura\xe7\xe3o para o Jexactyl rodar."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"criar-arquivo-de-configura\xe7\xe3o"},"Criar arquivo de configura\xe7\xe3o"),(0,o.yg)("admonition",{type:"danger"},(0,o.yg)("p",{parentName:"admonition"},"Certifique-se de substituir ",(0,o.yg)("inlineCode",{parentName:"p"},"<domain>")," pelo seu pr\xf3prio dom\xednio neste arquivo de configura\xe7\xe3o.\nObserve tamb\xe9m que esta configura\xe7\xe3o \xe9 para Apache com SSL ativado.\nSe voc\xea deseja usar o NGINX como um servidor web ou n\xe3o deseja usar SSL, consulte\n\xe0s instru\xe7\xf5es do outro servidor web.")),(0,o.yg)("p",null,"Nota: Ao usar o Apache, certifique-se de ter o pacote ",(0,o.yg)("inlineCode",{parentName:"p"},"libapache2-mod-php")," instalado ou ent\xe3o o PHP n\xe3o ser\xe1 exibido em seu servidor web."),(0,o.yg)("p",null,"Fa\xe7a um arquivo chamado ",(0,o.yg)("inlineCode",{parentName:"p"},"panel.conf")," em ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/apache2/sites-available")," e insira o seguinte:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-apache"},'<VirtualHost *:80>\n  ServerName <domain>\n  \n  RewriteEngine On\n  RewriteCond %{HTTPS} !=on\n  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] \n</VirtualHost>\n\n<VirtualHost *:443>\n  ServerName <domain>\n  DocumentRoot "/var/www/jexactyl/public"\n\n  AllowEncodedSlashes On\n  \n  php_value upload_max_filesize 100M\n  php_value post_max_size 100M\n\n  <Directory "/var/www/jexactyl/public">\n    Require all granted\n    AllowOverride all\n  </Directory>\n\n  SSLEngine on\n  SSLCertificateFile /etc/letsencrypt/live/<domain>/fullchain.pem\n  SSLCertificateKeyFile /etc/letsencrypt/live/<domain>/privkey.pem\n</VirtualHost> \n')),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"ativando-a-configura\xe7\xe3o"},"Ativando a configura\xe7\xe3o"),(0,o.yg)("p",null,"Em primeiro lugar, vamos vincular o arquivo que criamos ao diret\xf3rio que o Apache usa para as configura\xe7\xf5es."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"ln -s /etc/apache2/sites-available/panel.conf /etc/apache2/sites-enabled/panel.conf\n")),(0,o.yg)("p",null,"Em seguida, aplicaremos as configura\xe7\xf5es que o Apache precisa para hospedar o Jexactyl."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo a2enmod rewrite\nsudo a2enmod ssl\n")),(0,o.yg)("p",null,"Por fim, reiniciaremos o Apache para colocar o Jexactyl online."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"systemctl restart apache2\n")),(0,o.yg)("admonition",{title:"Parab\xe9ns! ",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Jexactyl est\xe1 instalado e deve estar funcionando normalmente.\nSe voc\xea encontrar algum problema, informe-nos em nosso ",(0,o.yg)("a",{parentName:"p",href:"https://discord.gg/8r7n7mU33R"},"Discord"),".")))}d.isMDXComponent=!0}}]);