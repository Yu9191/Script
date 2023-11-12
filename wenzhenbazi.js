/*
问真八字

[rewrite_local]
^https?:\/\/bzpp2\.iwzbz\.com\/api\/.*\/user\/getvipinfo url script-response-body wenzhenpaipan.js
[mitm]
hostname = bzpp2.iwzbz.com
*/
var body = $response.body.replace(/vipLevel": \d+/g,'vipLevel": 3')
.replace(/expires": ".*?"/g,'expires": "2999-11-28 06:06:06"')
.replace(/vipTipsType": -\d+/g,'vipTipsType": 0')
.replace(/adtype": \d+/g,'adtype": 0')
$done({ body });
