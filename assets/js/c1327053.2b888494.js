"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8545],{5680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>g});var o=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,r=function(e,a){if(null==e)return{};var n,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var a=o.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=d(e.components);return o.createElement(l.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var n=e.components,r=e.mdxType,t=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||t;return n?o.createElement(g,i(i({ref:a},p),{},{components:n})):o.createElement(g,i({ref:a},p))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=n.length,i=new Array(t);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<t;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7358:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var o=n(8168),r=(n(6540),n(5680));const t={},i="Instalando a Wings",s={unversionedId:"Pterodactyl/Wings/Instala\xe7\xe3o",id:"Pterodactyl/Wings/Instala\xe7\xe3o",title:"Instalando a Wings",description:"Wings \xe9 o daemon de controle de servidor de pr\xf3xima gera\xe7\xe3o da Pterodactyl. Foi reconstru\xeddo a partir do",source:"@site/docs/2 - Pterodactyl/4 - Wings/Instala\xe7\xe3o.md",sourceDirName:"2 - Pterodactyl/4 - Wings",slug:"/Pterodactyl/Wings/Instala\xe7\xe3o",permalink:"/docs/Pterodactyl/Wings/Instala\xe7\xe3o",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Apache com SSL",permalink:"/docs/Pterodactyl/Servidor Web/apache"},next:{title:"Migrar Paineis da Pterodactyl",permalink:"/docs/Pterodactyl/Extras/Migra\xe7\xe3o/pterodactyl-atual"}},l={},d=[{value:"Sistemas suportados",id:"sistemas-suportados",level:2},{value:"Requisitos do Sistema",id:"requisitos-do-sistema",level:2},{value:"Depend\xeancias",id:"depend\xeancias",level:2},{value:"Instalando o Docker",id:"instalando-o-docker",level:3},{value:"Iniciar o Docker na inicializa\xe7\xe3o",id:"iniciar-o-docker-na-inicializa\xe7\xe3o",level:4},{value:"Habilitando Swap",id:"habilitando-swap",level:4},{value:"Instalando o Wings",id:"instalando-o-wings",level:2},{value:"Configurar",id:"configurar",level:2},{value:"Iniciando Wings",id:"iniciando-wings",level:3},{value:"Daemoniza\xe7\xe3o (usando systemd)",id:"daemoniza\xe7\xe3o-usando-systemd",level:3},{value:"Aloca\xe7\xf5es de Nodes",id:"aloca\xe7\xf5es-de-nodes",level:3}],p={toc:d},u="wrapper";function c(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,o.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"instalando-a-wings"},"Instalando a Wings"),(0,r.yg)("p",null,"Wings \xe9 o daemon de controle de servidor de pr\xf3xima gera\xe7\xe3o da Pterodactyl. Foi reconstru\xeddo a partir do\nGround Up usando o Go e as li\xe7\xf5es aprendidas com o nosso primeiro Nodejs Daemon."),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"Voc\xea s\xf3 deve instalar o Wings se estiver executando ",(0,r.yg)("strong",{parentName:"mdxAdmonitionTitle"},"Pterodactyl 1.x"),". N\xe3o instale este software para vers\xf5es anteriores de Pterodactyl.")),(0,r.yg)("h2",{id:"sistemas-suportados"},"Sistemas suportados"),(0,r.yg)("p",null,"A seguir est\xe1 uma lista de sistemas operacionais suportados. Por favor, esteja ciente de que esta n\xe3o \xe9 uma lista exaustiva,\nh\xe1 uma alta probabilidade de que voc\xea pode executar o software em outras distribui\xe7\xf5es Linux sem muito esfor\xe7o.\nVoc\xea \xe9 respons\xe1vel por determinar quais pacotes podem ser necess\xe1rios nesses sistemas. H\xe1 tamb\xe9m um muito\nalta probabilidade de que as novas vers\xf5es dos sistemas operacionais suportados abaixo funcionem muito bem, voc\xea n\xe3o est\xe1 restrito a\napenas as vers\xf5es listadas abaixo."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Operating System"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Supported"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Ubuntu")),(0,r.yg)("td",{parentName:"tr",align:null},"18.04"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Documenta\xe7\xe3o escrita assumindo o Ubuntu 18.04 como o sistema operacional base.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"20.04"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"22.04"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"22.04.1"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"22.10"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"CentOS")),(0,r.yg)("td",{parentName:"tr",align:null},"7"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Observe que o CentOS 8 \xe9 EOL. Use Rocky ou Alma Linux.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Debian")),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"11"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Windows")),(0,r.yg)("td",{parentName:"tr",align:null},"Todos"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.yg)("td",{parentName:"tr",align:null},"Este software n\xe3o ser\xe1 executado em ambientes Windows.")))),(0,r.yg)("h2",{id:"requisitos-do-sistema"},"Requisitos do Sistema"),(0,r.yg)("p",null,"Para executar o Wings, voc\xea precisar\xe1 de um sistema Linux capaz de executar cont\xeaineres do Docker. A maioria dos VPS e quase todos\nservidores dedicados devem ser capazes de executar o Docker, mas h\xe1 casos de borda."),(0,r.yg)("p",null,"Quando seu provedor usa a virtualiza\xe7\xe3o ",(0,r.yg)("inlineCode",{parentName:"p"},"Virtuozzo"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"OpenVZ")," (ou ",(0,r.yg)("inlineCode",{parentName:"p"},"OVZ"),") ou ",(0,r.yg)("inlineCode",{parentName:"p"},"LXC"),", voc\xea provavelmente n\xe3o ir\xe1 conseguir executar as Wings. Alguns provedores fizeram as altera\xe7\xf5es necess\xe1rias para a virtualiza\xe7\xe3o aninhada para oferecer suporte ao Docker. Pe\xe7a \xe0 equipe de suporte do seu provedor para se certificar. KVM \xe9 garantido que funcion."),(0,r.yg)("p",null,"A maneira mais f\xe1cil de verificar \xe9 digitar ",(0,r.yg)("inlineCode",{parentName:"p"},"systemd-detect-virt"),".\nSe o resultado n\xe3o contiver ",(0,r.yg)("inlineCode",{parentName:"p"},"OpenVZ")," ou ",(0,r.yg)("inlineCode",{parentName:"p"},"LXC"),", tudo bem. O resultado de ",(0,r.yg)("inlineCode",{parentName:"p"},"nenhum")," aparecer\xe1 ao executar hardware dedicado sem qualquer virtualiza\xe7\xe3o."),(0,r.yg)("p",null,"Se isso n\xe3o funcionar por algum motivo, ou voc\xea ainda n\xe3o tiver certeza, voc\xea tamb\xe9m pode executar o comando abaixo."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo dmidecode -s system-manufacturer\nVMware, Inc.\n")),(0,r.yg)("h2",{id:"depend\xeancias"},"Depend\xeancias"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"curl"),(0,r.yg)("li",{parentName:"ul"},"Docker")),(0,r.yg)("h3",{id:"instalando-o-docker"},"Instalando o Docker"),(0,r.yg)("p",null,"Para uma instala\xe7\xe3o r\xe1pida do Docker CE, voc\xea pode executar o comando abaixo:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://get.docker.com/ | CHANNEL=stable bash\n")),(0,r.yg)("p",null,"Se voc\xea preferir fazer uma instala\xe7\xe3o manual, consulte a documenta\xe7\xe3o oficial do Docker para saber como instalar o Docker CE em seu servidor. Alguns links r\xe1pidos\nest\xe3o listados abaixo para sistemas comumente suportados."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce"},"Ubuntu")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.docker.com/install/linux/docker-ce/centos/#install-docker-ce"},"CentOS")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.docker.com/install/linux/docker-ce/debian/#install-docker-ce"},"Debian"))),(0,r.yg)("admonition",{title:"Verifique seu Kernel",type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"Lembre-se de que alguns hosts instalam um kernel modificado que n\xe3o oferece suporte a recursos importantes do docker. Por favor\nverifique seu kernel executando ",(0,r.yg)("inlineCode",{parentName:"p"},"uname -r"),". Se o seu kernel termina em ",(0,r.yg)("inlineCode",{parentName:"p"},"-xxxx-grs-ipv6-64")," ou ",(0,r.yg)("inlineCode",{parentName:"p"},"-xxxx-mod-std-ipv6-64")," voc\xea est\xe1\nprovavelmente usando um kernel n\xe3o suportado. Verifique nossas ",(0,r.yg)("a",{parentName:"p",href:"https://pterodactyl.io/daemon/0.6/kernel_modifications.html"},"Modifica\xe7\xf5es do Kernel(Em Ingles atualmente)")," guia para mais detalhes.")),(0,r.yg)("h4",{id:"iniciar-o-docker-na-inicializa\xe7\xe3o"},"Iniciar o Docker na inicializa\xe7\xe3o"),(0,r.yg)("p",null,"Se voc\xea estiver em um sistema operacional com systemd (Ubuntu 16+, Debian 8+, CentOS 7+) execute o comando abaixo para que o Docker inicie quando voc\xea inicializar sua m\xe1quina."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now docker\n")),(0,r.yg)("h4",{id:"habilitando-swap"},"Habilitando Swap"),(0,r.yg)("p",null,"Na maioria dos sistemas, o Docker n\xe3o poder\xe1 configurar o espa\xe7o de permuta por padr\xe3o. Voc\xea pode confirmar isso executando ",(0,r.yg)("inlineCode",{parentName:"p"},"docker info")," e procurando a sa\xedda de ",(0,r.yg)("inlineCode",{parentName:"p"},"AVISO: Sem suporte a limite de swap")," perto da parte inferior."),(0,r.yg)("p",null,"Habilitar a troca \xe9 totalmente opcional, mas recomendamos faz\xea-lo se voc\xea estiver hospedando para outras pessoas e para evitar erros de OOM."),(0,r.yg)("p",null,"Para habilitar o Swap, abra ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/default/grub")," como um usu\xe1rio root e encontre a linha come\xe7ando com ",(0,r.yg)("inlineCode",{parentName:"p"},"GRUB_CMDLINE_LINUX_DEFAULT"),". Fazer\ncerteza de que a linha inclui ",(0,r.yg)("inlineCode",{parentName:"p"},"swapaccount=1")," em algum lugar dentro das aspas duplas."),(0,r.yg)("p",null,"Depois disso, execute ",(0,r.yg)("inlineCode",{parentName:"p"},"sudo update-grub")," seguido de ",(0,r.yg)("inlineCode",{parentName:"p"},"sudo reboot")," para reiniciar o servidor e ter o swap habilitada.\nAbaixo est\xe1 um exemplo de como a linha deve ser, ",(0,r.yg)("em",{parentName:"p"},"do n\xe3o copie essa linha textualmente. Muitas vezes, ele tem parameters.")," adicionais espec\xedficos do sistema operacional"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},'GRUB_CMDLINE_LINUX_DEFAULT="swapaccount=1"\n')),(0,r.yg)("admonition",{title:"Configura\xe7\xe3o do GRUB",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Algumas distribui\xe7\xf5es Linux podem ignorar ",(0,r.yg)("inlineCode",{parentName:"p"},"GRUB_CMDLINE_LINUX_DEFAULT"),'.\nPortanto, voc\xea pode ter que usar "GRUB_CMDLINE_LINUX" em vez disso, caso o padr\xe3o n\xe3o funcione para voc\xea.')),(0,r.yg)("h2",{id:"instalando-o-wings"},"Instalando o Wings"),(0,r.yg)("p",null,"O primeiro passo para instalar o Wings \xe9 garantir que tenhamos a configura\xe7\xe3o de estrutura de diret\xf3rios necess\xe1ria. Para isso,\nexecute os comandos abaixo, que criar\xe3o o diret\xf3rio base e baixar\xe3o o execut\xe1vel wings."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'sudo mkdir -p /etc/pterodactyl\nsudo curl -L -o /usr/local/bin/wings "https://github.com/pterodactyl/wings/releases/latest/download/wings_linux_$([[ "$(uname -m)" == "x86_64" ]] && echo "amd64" || echo "arm64")"\nsudo chmod u+x /usr/local/bin/wings\n')),(0,r.yg)("admonition",{title:"Servidores OVH/SYS.",type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"Se estiver a utilizar um servidor fornecido pela OVH ou SoYouStart, esteja ciente de que o seu espa\xe7o em disco principal est\xe1 provavelmente atribu\xeddo a\n",(0,r.yg)("inlineCode",{parentName:"p"},"/home"),", e n\xe3o ",(0,r.yg)("inlineCode",{parentName:"p"},"/")," por padr\xe3o. Por favor, considere o uso de ",(0,r.yg)("inlineCode",{parentName:"p"},"/home/daemon-data")," para dados do servidor. Isso pode ser facilmente\nao criar o node.")),(0,r.yg)("h2",{id:"configurar"},"Configurar"),(0,r.yg)("p",null,"Depois de instalar o Wings e os componentes necess\xe1rios, o pr\xf3ximo passo \xe9 criar um node no painel instalado. V\xe1 para a visualiza\xe7\xe3o administrativa do Painel, selecione Node na barra lateral e, no lado direito, clique no bot\xe3o Criar Novo."),(0,r.yg)("p",null,"Depois de criar um nodes, clique nele e haver\xe1 uma guia chamada Configura\xe7\xe3o. Copie o conte\xfado do bloco de c\xf3digo, cole-o em um novo arquivo chamado ",(0,r.yg)("inlineCode",{parentName:"p"},"config.yml")," em ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/pterodactyl")," e salve-o."),(0,r.yg)("p",null,"Alternativamente, voc\xea pode clicar no bot\xe3o Gerar Token, copiar o comando bash e col\xe1-lo em seu terminal(em alguns casos se isso n\xe3o funcionar use o metodo normal)."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30575805/208731635-7873f964-fb97-410b-b643-ef6f1104d8d4.png",alt:"imagem de exemplo de configura\xe7\xe3o de Wings"})),(0,r.yg)("admonition",{title:"Quando seu Painel estiver usando SSL",type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"As Wings tamb\xe9m devem ter uma criada para seu FQDN. Consulte a p\xe1gina de documenta\xe7\xe3o ",(0,r.yg)("a",{parentName:"p",href:"/docs/Pterodactyl/Servidor%20Web/setup-ssl"},"Configurar SSL")," para saber como criar esses certificados antes de continuar.")),(0,r.yg)("h3",{id:"iniciando-wings"},"Iniciando Wings"),(0,r.yg)("p",null,"Para iniciar o Wings, basta executar o comando abaixo, que o iniciar\xe1 em um modo de depura\xe7\xe3o. Depois de confirmar que ele est\xe1 sendo executado sem erros, use ",(0,r.yg)("inlineCode",{parentName:"p"},"CTRL + C")," para encerrar o processo e daemoniz\xe1-lo seguindo as instru\xe7\xf5es abaixo. Dependendo da conex\xe3o de internet do seu servidor, puxar e iniciar o Wings pela primeira vez pode levar alguns minutos."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo wings --debug\n")),(0,r.yg)("p",null,"Opcionalmente, voc\xea pode adicionar o sinalizador ",(0,r.yg)("inlineCode",{parentName:"p"},"--debug")," para executar o Wings no modo de depura\xe7\xe3o."),(0,r.yg)("h3",{id:"daemoniza\xe7\xe3o-usando-systemd"},"Daemoniza\xe7\xe3o (usando systemd)"),(0,r.yg)("p",null,"Executar Wings em segundo plano \xe9 uma tarefa simples, apenas certifique-se de que ele \xe9 executado sem erros antes de fazer\neste. Coloque o conte\xfado abaixo em um arquivo chamado ",(0,r.yg)("inlineCode",{parentName:"p"},"wings.service")," no diret\xf3rio ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/systemd/system"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"[Unit]\nDescription=Pterodactyl Wings Daemon\nAfter=docker.service\nRequires=docker.service\nPartOf=docker.service\n\n[Service]\nUser=root\nWorkingDirectory=/etc/pterodactyl\nLimitNOFILE=4096\nPIDFile=/var/run/wings/daemon.pid\nExecStart=/usr/local/bin/wings\nRestart=on-failure\nStartLimitInterval=180\nStartLimitBurst=30\nRestartSec=5s\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.yg)("p",null,"Em seguida, execute os comandos abaixo para recarregar systemd e iniciar o Wings."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now wings\n")),(0,r.yg)("h3",{id:"aloca\xe7\xf5es-de-nodes"},"Aloca\xe7\xf5es de Nodes"),(0,r.yg)("p",null,"A aloca\xe7\xe3o \xe9 uma combina\xe7\xe3o de IP e Porta que voc\xea pode atribuir a um servidor. Cada servidor criado deve ter pelo menos uma aloca\xe7\xe3o. A aloca\xe7\xe3o seria o endere\xe7o IP da sua interface de rede. Em alguns casos, como quando atr\xe1s do NAT, seria o IP interno. Para criar novas aloca\xe7\xf5es, v\xe1 para Nodes > seu node > Aloca\xe7\xe3o."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30575805/208731965-a044d57c-d421-47f0-8a69-02217b23c2b0.png",alt:"imagem de exemplo de aloca\xe7\xf5es de node"})),(0,r.yg)("p",null,"Digite ",(0,r.yg)("inlineCode",{parentName:"p"},"hostname -I | awk '{print $1}'")," para encontrar o IP a ser usado para a aloca\xe7\xe3o. Alternativamente, voc\xea pode digitar ",(0,r.yg)("inlineCode",{parentName:"p"},'ip addr | grep "inet "')," para ver todas as suas interfaces dispon\xedveis e endere\xe7os IP. N\xe3o use 127.0.0.1 para aloca\xe7\xf5es."))}c.isMDXComponent=!0}}]);