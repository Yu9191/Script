/**
 * 91视频为例https://mv.aff009.net/aff-cmAru
 * 本人不懂js别问我怎么用,脚本不加密一起学习,请勿贩卖转载,请勿售卖
 * 这里只是汤头条播放地址为例，其他的还有50度灰也是h5play，91短视频（通杀解锁vip视频），海角视频俩是10play，海角金币视频是12play
 * 妻友,糖人是120play，糖人部分视频h5play，91AV是120play，91AV部分视频10play,微密圈10play
 * 小蓝视频h5play，她趣-首页视频h5play，她趣-小视频10play，
 * 缅北禁地  https://ac9d.wykfnp.com
暗网解密  https://714.ndqvyg.com
51吃瓜Pro  https://3d4f.knjbzw.com
51猎奇  https://088f.bjzezy.com
私房ktv  https://89.rwhmcn.com
天涯社区  https://f3d.wchgdn.com
黑洞社区  https://ca64.mdplzw.com
暗网禁区  https://0b.yrhwse.com
她趣  https://5e7.rtlzhe.com
Blued  https://5ba.aryhca.com
妹团  https://36.paxvrh.com
杏吧  https://9923.hzbwia.com
老九品茶  https://0a.obntac.com
微密圈  https://a4.henwap.com
海角乱伦社区  https://f58d.ipqjlb.com
51动漫  https://75.luduwz.com
蜜豆视频  https://6de.scrrzr.com
黑料天堂  https://42fa.jaedlj.com
51吃瓜  https://lz7as.zzttja.com
新版滴滴  https://cf.sjlqjh.com
七度少女  https://11a.uvmtsn.com
91妻友  https://08c0.lvxpha.com
91制片厂Pro  https://baf.dhlwyz.com
抖阴Proj  https://6f7s.pbgrzh.com
果冻传媒APP  https://07.npcwwc.com
福利姬  https://9f.gectab.com
91fans  https://fc.zlnkbn.com
pilipili(二次元)  https://747.jkhpmy.com
歪歪视频  https://c8.qznpyr.com
GTV  https://958.xqhjej.com
91视频-全能版  https://fbrg.rzvwcq.com
撸先生  https://01f4.czhxnw.com
成人B站  https://d4.qhzvgn.com
小蓝俱乐部  https://ca.sbnyxu.com
50度灰  https://od5em.smpaqa.com
51品茶  https://f5f.vavkyj.com
蚂蚁翻墙  https://636d.obqyyh.com
91短视频  https://66.kccber.com
91AV  https://ca7.rahzss.com
快手  https://eb81.nnjzpw.com
汤头条  https://a3ou.cxuvtk.com
 * 在QuanX中运行的脚本 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
 * 用于捕获视频链接并显示通知
 * 适用于QuanX APP版本 1.0.10-build198及以上
 * @Author: ios151 
 *
 * 该脚本用于捕获视频链接并显示通知。可以适用于不同软件的视频链接格式。
 * 当捕获到符合指定模式的视频链接时，将在通知中显示捕获成功信息和视频链接，并在通知点击后打开视频链接。
 * 以下是举例,有很多不同的见https://github.com/blackmatrix7/MagicJS/blob/main/src/magic.js

 * 示例:
 * $.msg(title, subt, desc, 'twitter://')
 * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
 * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
 *
 * @param {*} title 标题
 * @param {*} subt 副标题
 * @param {*} desc 通知详情
 * @param {*} opts 通知参数


[rewrite_local]
#测试91
#^https?://120play\.zihzot\.com/videos2/\w{32}/\w{32}\.m3u8\?auth_key=\d+-\d+-\d+-[\w-]{32}&v=\d+$ url script-request-header https://raw.githubusercontent.com/Yu9191/Script/main/m3u8.js

#通用
^https?://(\w+\.vzcnqmr\.cn)/(\w+)/\w{32}/\w{32}\.m3u8\? url script-request-header https://raw.githubusercontent.com/Yu9191/Script/main/m3u8.js
#91制片厂
^https?://(\w+\.jhdfeyq\.cn)/(\w+)/\w{32}/\w{32}\.m3u8\? url script-request-header https://raw.githubusercontent.com/Yu9191/Script/main/m3u8.js
[mitm] 

hostname = *.vzcnqmr.cn, *.jhdfeyq.cn





*/
var version_='jsjiami.com.v7';function _0x43d8(){const _0x19076e=(function(){return[version_,'exjywsbRjGBGiMXamCWfip.LuctoAmd.XGv7kBpG==','WQldMmolWQddTCoWDq','oYuBsJeFW5uwC8kbW4ddMqa','sfLzWR7cR0dcO8omFvFcKW87WQu','xSo7WP9lW58BtMbphfdcL8k6vq','W5D8shNdOuFcTG','W6BcU8opW4pcPqGrfmoyW7nWW6un','W6/dLu9vyYDS','rmolW5Che8k2WRKHW6xcM2JdSSk8CCoNESoYWOdcSqtdUG'].concat((function(){return['WQPGW6mgW5VcGSkPktC','BSo+rM/cNw3dJW','WPVcRX/dImkviSohp8k8WODH','lCosWR9zrmo3W6m4W4lcGJ/dJCks','ogdcT8kqCmobx8oTWQbfiWCy','vNFcK8kZCuxdGY4LoYifgHG','W77dKmkrrmokW67dK8kQzCoDW711fa','W6xdMxjlsWnX','xZNdQcOMqmoviG3cR8oCEa','5Awj6BUe54gJ5yEG5Q226ygI552e5z2l57U06ksI556T'].concat((function(){return['5AsB6BUa5Rcr5OEv6lQ75l27','W54/E1FcQxWfWQr1','WOaMW41MzxVcUSorafZdT8o2WRVdOG','ku/cNvrvn8oMla','W75pxmoOWQNcSmoOcSklWO/cSLC','eMjHWRBcIMtcTG','W4tdJmo0W7hcPColFgXKWOn0BCo4'];}()));}()));}());_0x43d8=function(){return _0x19076e;};return _0x43d8();};const _0x571622=_0x9163;function _0x9163(_0x588f71,_0x20b778){const _0x43d8e4=_0x43d8();return _0x9163=function(_0x91639b,_0x2da6bc){_0x91639b=_0x91639b-0xff;let _0x3b939f=_0x43d8e4[_0x91639b];if(_0x9163['aJHIgq']===undefined){var _0x4d9b9d=function(_0x5b4716){const _0x294fe0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x188937='',_0x2b8bb9='';for(let _0x2d9a69=0x0,_0x38537e,_0x49f30d,_0x1f068f=0x0;_0x49f30d=_0x5b4716['charAt'](_0x1f068f++);~_0x49f30d&&(_0x38537e=_0x2d9a69%0x4?_0x38537e*0x40+_0x49f30d:_0x49f30d,_0x2d9a69++%0x4)?_0x188937+=String['fromCharCode'](0xff&_0x38537e>>(-0x2*_0x2d9a69&0x6)):0x0){_0x49f30d=_0x294fe0['indexOf'](_0x49f30d);}for(let _0x427559=0x0,_0x51c2e4=_0x188937['length'];_0x427559<_0x51c2e4;_0x427559++){_0x2b8bb9+='%'+('00'+_0x188937['charCodeAt'](_0x427559)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2b8bb9);};const _0x20db09=function(_0x59bf51,_0x80e7c8){let _0x4f9452=[],_0x256206=0x0,_0x291beb,_0x3f4231='';_0x59bf51=_0x4d9b9d(_0x59bf51);let _0x541f8a;for(_0x541f8a=0x0;_0x541f8a<0x100;_0x541f8a++){_0x4f9452[_0x541f8a]=_0x541f8a;}for(_0x541f8a=0x0;_0x541f8a<0x100;_0x541f8a++){_0x256206=(_0x256206+_0x4f9452[_0x541f8a]+_0x80e7c8['charCodeAt'](_0x541f8a%_0x80e7c8['length']))%0x100,_0x291beb=_0x4f9452[_0x541f8a],_0x4f9452[_0x541f8a]=_0x4f9452[_0x256206],_0x4f9452[_0x256206]=_0x291beb;}_0x541f8a=0x0,_0x256206=0x0;for(let _0x538bf9=0x0;_0x538bf9<_0x59bf51['length'];_0x538bf9++){_0x541f8a=(_0x541f8a+0x1)%0x100,_0x256206=(_0x256206+_0x4f9452[_0x541f8a])%0x100,_0x291beb=_0x4f9452[_0x541f8a],_0x4f9452[_0x541f8a]=_0x4f9452[_0x256206],_0x4f9452[_0x256206]=_0x291beb,_0x3f4231+=String['fromCharCode'](_0x59bf51['charCodeAt'](_0x538bf9)^_0x4f9452[(_0x4f9452[_0x541f8a]+_0x4f9452[_0x256206])%0x100]);}return _0x3f4231;};_0x9163['Fknbyy']=_0x20db09,_0x588f71=arguments,_0x9163['aJHIgq']=!![];}const _0x423ac0=_0x43d8e4[0x0],_0x1a85b9=_0x91639b+_0x423ac0,_0x48cfc8=_0x588f71[_0x1a85b9];return!_0x48cfc8?(_0x9163['ceiNxn']===undefined&&(_0x9163['ceiNxn']=!![]),_0x3b939f=_0x9163['Fknbyy'](_0x3b939f,_0x2da6bc),_0x588f71[_0x1a85b9]=_0x3b939f):_0x3b939f=_0x48cfc8,_0x3b939f;},_0x9163(_0x588f71,_0x20b778);}(function(_0x275a65,_0x5637a7,_0x157742,_0x5f4682,_0x4c7e66,_0xc6a10b,_0x40106a){return _0x275a65=_0x275a65>>0x5,_0xc6a10b='hs',_0x40106a='hs',function(_0xbe8f3b,_0x746858,_0xf2d840,_0x5b13df,_0x550f64){const _0x4f9c51=_0x9163;_0x5b13df='tfi',_0xc6a10b=_0x5b13df+_0xc6a10b,_0x550f64='up',_0x40106a+=_0x550f64,_0xc6a10b=_0xf2d840(_0xc6a10b),_0x40106a=_0xf2d840(_0x40106a),_0xf2d840=0x0;const _0x3d7a10=_0xbe8f3b();while(!![]&&--_0x5f4682+_0x746858){try{_0x5b13df=parseInt(_0x4f9c51(0x100,'G6cK'))/0x1+-parseInt(_0x4f9c51(0xff,'^R$b'))/0x2*(-parseInt(_0x4f9c51(0x108,'bK]o'))/0x3)+-parseInt(_0x4f9c51(0x10e,'I6^o'))/0x4+parseInt(_0x4f9c51(0x113,'ROI3'))/0x5*(parseInt(_0x4f9c51(0x111,'9rNh'))/0x6)+parseInt(_0x4f9c51(0x10a,'bVlG'))/0x7*(parseInt(_0x4f9c51(0x10f,'^R$b'))/0x8)+parseInt(_0x4f9c51(0x115,'om)h'))/0x9+-parseInt(_0x4f9c51(0x104,'AwID'))/0xa;}catch(_0x4cf912){_0x5b13df=_0xf2d840;}finally{_0x550f64=_0x3d7a10[_0xc6a10b]();if(_0x275a65<=_0x5f4682)_0xf2d840?_0x4c7e66?_0x5b13df=_0x550f64:_0x4c7e66=_0x550f64:_0xf2d840=_0x550f64;else{if(_0xf2d840==_0x4c7e66['replace'](/[uAbBdwkyRpWCMxXLetGf=]/g,'')){if(_0x5b13df===_0x746858){_0x3d7a10['un'+_0xc6a10b](_0x550f64);break;}_0x3d7a10[_0x40106a](_0x550f64);}}}}}(_0x157742,_0x5637a7,function(_0x1ccb74,_0x189aea,_0xa02d5f,_0x3d571b,_0xec5c69,_0x2a6494,_0x71320e){return _0x189aea='\x73\x70\x6c\x69\x74',_0x1ccb74=arguments[0x0],_0x1ccb74=_0x1ccb74[_0x189aea](''),_0xa02d5f='\x72\x65\x76\x65\x72\x73\x65',_0x1ccb74=_0x1ccb74[_0xa02d5f]('\x76'),_0x3d571b='\x6a\x6f\x69\x6e',(0x146347,_0x1ccb74[_0x3d571b](''));});}(0x1780,0x8178f,_0x43d8,0xbe),_0x43d8)&&(version_=_0x571622(0x116,'gW7z'));const $=new Env(_0x571622(0x105,'G6cK'));let url=$request['url'],headers=$request[_0x571622(0x112,'Mi9a')];url=url['replace'](/\/\/(?!long)[^\.]+\./,_0x571622(0x10d,'NJUR'))[_0x571622(0x109,'0i%1')](/\?.*/,'');headers[_0x571622(0x10b,'yBHT')](_0x571622(0x110,'pqdy'))&&$['msg']('视频链接捕获成功',_0x571622(0x101,'G6cK'),_0x571622(0x102,'gW7z'),url);$['done']({});var version_ = 'jsjiami.com.v7';



function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,a)=>{s.call(this,t,(t,s,r)=>{t?a(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const a=this.getdata(t);if(a)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,a)=>e(a))})}runScript(t,e){return new Promise(s=>{let a=this.getdata("@chavy_boxjs_userCfgs.httpapi");a=a?a.replace(/\n/g,"").trim():a;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[i,o]=a.split("@"),n={url:`http://${o}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":i,Accept:"*/*"},timeout:r};this.post(n,(t,e,a)=>s(a))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e);if(!s&&!a)return{};{const a=s?t:e;try{return JSON.parse(this.fs.readFileSync(a))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):a?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const a=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of a)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,a)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[a+1])>>0==+e[a+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,a]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,a,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,a,r]=/^@(.*?)\.(.*?)$/.exec(e),i=this.getval(a),o=a?"null"===i?null:i||"{}":"{}";try{const e=JSON.parse(o);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),a)}catch(e){const i={};this.lodash_set(i,r,t),s=this.setval(JSON.stringify(i),a)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:a,statusCode:r,headers:i,rawBody:o}=t,n=s.decode(o,this.encoding);e(null,{status:a,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:a,response:r}=t;e(a,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let a=require("iconv-lite");this.initGotEnv(t);const{url:r,...i}=t;this.got[s](r,i).then(t=>{const{statusCode:s,statusCode:r,headers:i,rawBody:o}=t,n=a.decode(o,this.encoding);e(null,{status:s,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:s,response:r}=t;e(s,r,r&&a.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in a)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t}queryStr(t){let e="";for(const s in t){let a=t[s];null!=a&&""!==a&&("object"==typeof a&&(a=JSON.stringify(a)),e+=`${s}=${a}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",a="",r){const i=t=>{switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{let e=t.url||t.openUrl||t["open-url"];return{url:e}}case"Loon":{let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}case"Quantumult X":{let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,a=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":a}}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,s,a,i(r));break;case"Quantumult X":$notify(e,s,a,i(r));break;case"Node.js":}if(!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),a&&t.push(a),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,t.stack)}}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(t,e)}
