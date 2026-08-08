'use strict';
(function(){
  if (window.__QZ_TOOLS_RUNTIME__ && window.__QZ_TOOLS_RUNTIME__.loaded) return;
  var rt = window.__QZ_TOOLS_RUNTIME__ = window.__QZ_TOOLS_RUNTIME__ || {};
  rt.loaded = true;

  // Shared data for tool modules
/* Shared data for tools - periodic table, constants, morse code, typing texts */

const PT_SYM='H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og'.split(' ');
const PT_CN='氢 氦 锂 铍 硼 碳 氮 氧 氟 氖 钠 镁 铝 硅 磷 硫 氯 氩 钾 钙 钪 钛 钒 铬 锰 铁 钴 镍 铜 锌 镓 锗 砷 硒 溴 氪 铷 锶 钇 锆 铌 钼 锝 钌 铑 钯 银 镉 铟 锡 锑 碲 碘 氙 铯 钡 镧 铈 镨 钕 钷 钐 铕 钆 铽 镝 钬 铒 铥 镱 镥 铪 钽 钨 铼 锇 铱 铂 金 汞 铊 铅 铋 钋 砹 氡 钫 镭 锕 钍 镤 铀 镎 钚 镅 锔 锫 锎 锿 镄 钔 锘 铹 𬬻 𬭊 𬭳 𬭛 𬭶 鿏 鿔 鿬 Cn Nh Fl Mc Lv Ts Og'.split(' ');
const PT_MASS='1.008 4.003 6.941 9.012 10.81 12.01 14.01 16.00 19.00 20.18 22.99 24.31 26.98 28.09 30.97 32.07 35.45 39.95 39.10 40.08 44.96 47.87 50.94 52.00 54.94 55.85 58.93 58.69 63.55 65.38 69.72 72.63 74.92 78.97 79.90 83.80 85.47 87.62 88.91 91.22 92.91 95.95 98 101.1 102.9 106.4 107.9 112.4 114.8 118.7 121.8 127.6 126.9 131.3 132.9 137.3 138.9 140.1 140.9 144.2 145 150.4 152.0 157.3 158.9 162.5 164.9 167.3 168.9 173.0 175.0 178.5 180.9 183.8 186.2 190.2 192.2 195.1 197.0 200.6 204.4 207.2 209.0 209 210 222 223 226 227 232.0 231.0 238.0 237 244 243 247 247 251 252 257 258 259 266 267 268 269 270 277 278 281 282 285 286 289 290 293 294 294'.split(' ');

/* Electron configurations for all 118 elements */
const PT_ECONF=[
'1s¹','1s²','[He]2s¹','[He]2s²','[He]2s²2p¹','[He]2s²2p²','[He]2s²2p³','[He]2s²2p⁴','[He]2s²2p⁵','[He]2s²2p⁶',
'[Ne]3s¹','[Ne]3s²','[Ne]3s²3p¹','[Ne]3s²3p²','[Ne]3s²3p³','[Ne]3s²3p⁴','[Ne]3s²3p⁵','[Ne]3s²3p⁶',
'[Ar]4s¹','[Ar]4s²','[Ar]3d¹4s²','[Ar]3d²4s²','[Ar]3d³4s²','[Ar]3d⁵4s¹','[Ar]3d⁵4s²','[Ar]3d⁶4s²','[Ar]3d⁷4s²','[Ar]3d⁸4s²','[Ar]3d¹⁰4s¹','[Ar]3d¹⁰4s²',
'[Ar]3d¹⁰4s²4p¹','[Ar]3d¹⁰4s²4p²','[Ar]3d¹⁰4s²4p³','[Ar]3d¹⁰4s²4p⁴','[Ar]3d¹⁰4s²4p⁵','[Ar]3d¹⁰4s²4p⁶',
'[Kr]5s¹','[Kr]5s²','[Kr]4d¹5s²','[Kr]4d²5s²','[Kr]4d⁴5s¹','[Kr]4d⁵5s¹','[Kr]4d⁵5s²','[Kr]4d⁷5s¹','[Kr]4d⁸5s¹','[Kr]4d¹⁰','[Kr]4d¹⁰5s¹','[Kr]4d¹⁰5s²',
'[Kr]4d¹⁰5s²5p¹','[Kr]4d¹⁰5s²5p²','[Kr]4d¹⁰5s²5p³','[Kr]4d¹⁰5s²5p⁴','[Kr]4d¹⁰5s²5p⁵','[Kr]4d¹⁰5s²5p⁶',
'[Xe]6s¹','[Xe]6s²','[Xe]5d¹6s²','[Xe]4f¹5d¹6s²','[Xe]4f³6s²','[Xe]4f⁴6s²','[Xe]4f⁵6s²','[Xe]4f⁶6s²','[Xe]4f⁷6s²','[Xe]4f⁷5d¹6s²','[Xe]4f⁹6s²','[Xe]4f¹⁰6s²','[Xe]4f¹¹6s²','[Xe]4f¹²6s²','[Xe]4f¹³6s²','[Xe]4f¹⁴6s²','[Xe]4f¹⁴5d¹6s²',
'[Xe]4f¹⁴5d²6s²','[Xe]4f¹⁴5d³6s²','[Xe]4f¹⁴5d⁴6s²','[Xe]4f¹⁴5d⁵6s²','[Xe]4f¹⁴5d⁶6s²','[Xe]4f¹⁴5d⁷6s²','[Xe]4f¹⁴5d⁹6s¹','[Xe]4f¹⁴5d¹⁰6s¹','[Xe]4f¹⁴5d¹⁰6s²',
'[Xe]4f¹⁴5d¹⁰6s²6p¹','[Xe]4f¹⁴5d¹⁰6s²6p²','[Xe]4f¹⁴5d¹⁰6s²6p³','[Xe]4f¹⁴5d¹⁰6s²6p⁴','[Xe]4f¹⁴5d¹⁰6s²6p⁵','[Xe]4f¹⁴5d¹⁰6s²6p⁶',
'[Rn]7s¹','[Rn]7s²','[Rn]6d¹7s²','[Rn]6d²7s²','[Rn]5f²6d¹7s²','[Rn]5f³6d¹7s²','[Rn]5f⁴6d¹7s²','[Rn]5f⁶7s²','[Rn]5f⁷7s²','[Rn]5f⁷6d¹7s²','[Rn]5f⁹7s²','[Rn]5f¹⁰7s²','[Rn]5f¹¹7s²','[Rn]5f¹²7s²','[Rn]5f¹³7s²','[Rn]5f¹⁴7s²','[Rn]5f¹⁴7s²7p¹',
'[Rn]5f¹⁴6d²7s²','[Rn]5f¹⁴6d³7s²','[Rn]5f¹⁴6d⁴7s²','[Rn]5f¹⁴6d⁵7s²','[Rn]5f¹⁴6d⁶7s²','[Rn]5f¹⁴6d⁷7s²','[Rn]5f¹⁴6d⁹7s¹','[Rn]5f¹⁴6d¹⁰7s¹','[Rn]5f¹⁴6d¹⁰7s²',
'[Rn]5f¹⁴6d¹⁰7s²7p¹','[Rn]5f¹⁴6d¹⁰7s²7p²','[Rn]5f¹⁴6d¹⁰7s²7p³','[Rn]5f¹⁴6d¹⁰7s²7p⁴','[Rn]5f¹⁴6d¹⁰7s²7p⁵','[Rn]5f¹⁴6d¹⁰7s²7p⁶'
];

/* Melting points (°C), -9999 = unknown */
const PT_MP=[-259,-272,181,1287,2075,3550,-210,-219,-220,-249,98,650,660,1414,44,115,-101,-189,63,842,1541,1668,1910,1907,1246,1538,1495,1455,1085,420,30,938,817,221,-7,-157,39,777,1526,1855,2477,2623,2157,2334,1964,1555,962,321,157,232,631,450,114,-112,28,727,920,795,935,1024,1042,1072,822,1312,1356,1412,1474,1529,1545,824,1663,2233,3017,3422,3186,3033,2466,1769,1064,357,304,327,271,254,302,-71,27,700,1050,1842,1568,1132,637,639,1176,1340,900,860,1527,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999];

/* Boiling points (°C), -9999 = unknown */
const PT_BP=[-253,-269,1342,2468,4000,4027,-196,-183,-188,-246,883,1090,2519,3265,281,445,-34,-186,759,1484,2836,3287,3407,2671,2061,2862,2927,2913,2562,907,2204,2833,614,685,59,-153,688,1377,3345,4406,4741,4639,4265,4147,3695,2963,2162,767,2072,2602,1587,988,184,-108,671,1845,3464,3443,3520,3074,3000,1794,1527,3273,3230,2567,2720,2868,1950,1196,3402,4603,5458,5555,5596,5012,4428,3825,2856,2856,630,1473,1749,962,345,211,-62,677,1737,3200,5061,4027,4131,4000,3228,2607,2011,2720,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999,-9999];

/* Electronegativity (Pauling scale, 0 = N/A) */
const PT_EN=[2.20,0,0.98,1.57,2.04,2.55,3.04,3.44,3.98,0,0.93,1.31,1.61,1.90,2.19,2.58,3.16,0,0.82,1.00,1.36,1.54,1.63,1.66,1.55,1.83,1.88,1.91,1.90,1.65,1.81,2.01,2.18,2.55,2.96,3.00,0.82,0.95,1.22,1.33,1.60,2.16,1.90,2.20,2.28,2.20,1.93,1.69,1.78,1.96,2.05,2.10,2.66,2.60,0.79,0.89,1.10,1.12,1.13,1.14,0,1.17,0,1.20,0,1.22,1.23,1.24,1.25,0,1.27,1.30,1.50,2.36,1.90,2.20,2.20,2.28,2.54,2.00,1.62,2.33,2.02,2.00,2.20,0,0.70,0.90,1.10,1.30,1.50,1.38,1.36,1.28,1.30,1.30,1.30,1.30,1.30,1.30,1.30,1.30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

/* Density (g/cm³), 0 = unknown, for gases at STP in g/L */
const PT_DENS=[0.09,0.18,0.53,1.85,2.34,2.27,1.25,1.43,1.70,0.90,0.97,1.74,2.70,2.33,1.82,2.07,3.21,1.78,0.86,1.55,2.99,4.51,6.11,7.19,7.44,7.87,8.90,8.91,8.96,7.13,5.91,5.32,5.73,4.81,3.12,3.75,1.53,2.63,4.47,6.51,8.57,10.28,11.5,12.37,12.45,12.02,10.50,8.65,7.31,7.29,6.70,6.24,4.93,5.89,1.87,3.59,6.15,6.77,6.77,7.01,7.26,7.52,5.24,7.90,8.23,8.55,8.80,9.07,9.32,6.90,9.84,13.31,16.65,19.35,21.02,22.59,22.56,21.45,19.32,13.55,11.85,11.34,9.75,9.20,0,9.73,0,5.50,10.07,11.72,15.40,19.10,20.45,19.84,13.69,13.51,14.78,15.10,8.84,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

const PT_GRID=[
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[3,4,0,0,0,0,0,0,0,0,0,0,5,6,7,8,9,10],
[11,12,0,0,0,0,0,0,0,0,0,0,13,14,15,16,17,18],
[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],
[37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],
[55,56,-1,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86],
[87,88,-2,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,-3,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71],
[0,0,-4,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103]
];
function ptCatColor(z){
  if([3,11,19,37,55,87].includes(z))return'#ff6b6b';
  if([4,12,20,38,56,88].includes(z))return'#ffa94d';
  if([9,17,35,53,85,117].includes(z))return'#a9e34b';
  if([2,10,18,36,54,86,118].includes(z))return'#74c0fc';
  if([5,14,32,33,51,52].includes(z))return'#da77f2';
  if([1,6,7,8,15,16,34].includes(z))return'#69db7c';
  if(z>=57&&z<=71)return'#ffd43b';if(z>=89&&z<=103)return'#f783ac';
  if((z>=21&&z<=30)||(z>=39&&z<=48)||(z>=72&&z<=80)||(z>=104&&z<=112))return'#91d5ff';
  return'#d0d0d0';
}
function ptCatName(z){
  if([3,11,19,37,55,87].includes(z))return'碱金属';
  if([4,12,20,38,56,88].includes(z))return'碱土金属';
  if([9,17,35,53,85,117].includes(z))return'卤素';
  if([2,10,18,36,54,86,118].includes(z))return'稀有气体';
  if([5,14,32,33,51,52].includes(z))return'类金属';
  if([1,6,7,8,15,16,34].includes(z))return'非金属';
  if(z>=57&&z<=71)return'镧系元素';if(z>=89&&z<=103)return'锕系元素';
  if((z>=21&&z<=30)||(z>=39&&z<=48)||(z>=72&&z<=80)||(z>=104&&z<=112))return'过渡金属';
  return'主族金属';
}
function ptState(z){var mp=PT_MP[z-1],bp=PT_BP[z-1];if(mp===-9999)return'未知';if(mp>25)return'固体';if(bp!==-9999&&bp<25)return'气体';return'液体'}

const MORSE={'A':'.-','B':'-...','C':'-.-.','D':'-..','E':'.','F':'..-.','G':'--.','H':'....','I':'..','J':'.---','K':'-.-','L':'.-..','M':'--','N':'-.','O':'---','P':'.--.','Q':'--.-','R':'.-.','S':'...','T':'-','U':'..-','V':'...-','W':'.--','X':'-..-','Y':'-.--','Z':'--..','0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.'};
const MORSE_REV={};Object.entries(MORSE).forEach(([k,v])=>MORSE_REV[v]=k);


  // Tool definitions (loaded on demand after click)
  rt.tools = [
{id:'audioplayer',name:'\u97f3\u9891\u64ad\u653e\u5668',icon:'\ud83c\udfa7',cat:'music',desc:'\u7f51\u6613\u4e91/QQ/\u9177\u72d7\u89e3\u6790 \u00b7 \u6b4c\u8bcd \u00b7 \u4e0b\u8f7d',
html(){return '<style>'
+'.ap-upper{display:flex;gap:10px;margin:4px 0;flex-wrap:wrap}'
+'.ap-input-area{flex:1;min-width:200px}'
+'.ap-lrc-area{background:linear-gradient(135deg,#0d1117,#161b22);border-radius:10px;padding:22px 16px;min-height:80px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:6px 0;gap:4px}'
+'.ap-lrc-line{color:rgba(255,255,255,.35);font-size:13px;line-height:1.8;transition:all .35s ease;text-align:center}'
+'.ap-lrc-line.active{color:#fff;font-size:16px;font-weight:600;text-shadow:0 0 12px rgba(64,158,255,.45)}'
+'.ap-lrc-empty{color:rgba(255,255,255,.2);font-size:13px}'
+'.ap-player-box{margin:6px 0}'
+'.ap-player-box.aplayer{box-shadow:none!important;border:1px solid #e8e8e8!important;border-radius:10px!important}'
+'.ap-player-box .aplayer-lrc{height:0!important;overflow:hidden!important;margin:0!important;padding:0!important}'
+'.ap-player-box .aplayer-list{display:block!important;height:auto!important;max-height:400px!important;overflow-y:auto!important}'
+'.ap-player-box .aplayer-list ol{display:block!important}'
+'.ap-ctrls{display:none;align-items:center;justify-content:center;gap:16px;margin:6px 0;padding:6px 0}'
+'.ap-cb{background:none;border:1px solid #ddd;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;color:#666;padding:0}'
+'.ap-cb:hover{border-color:#409EFF;color:#409EFF}'
+'.ap-cb-sm{width:32px;height:32px;font-size:13px}'
+'.ap-cb-lg{width:42px;height:42px;font-size:18px;border-color:#409EFF;color:#409EFF}'
+'.ap-status{text-align:center;font-size:.72em;margin:2px 0;min-height:1.2em}'
+'.ap-player-box .aplayer-list ol li{position:relative!important;padding-right:48px!important}'
+'.ap-dl-wrap{position:absolute;right:4px;top:0;bottom:0;display:flex;align-items:center;gap:2px}'
+'.ap-player-box .aplayer-list ol li .ap-dl-wrap{opacity:0;transition:opacity .15s}'
+'.ap-player-box .aplayer-list ol li:hover .ap-dl-wrap{opacity:1}'
+'.ap-dl-wrap a{color:#bbb;font-size:11px;text-decoration:none;padding:2px 3px;border-radius:3px;transition:color .2s;cursor:pointer}'
+'.ap-dl-wrap a:hover{color:#409EFF}'
+'.ap-mode-inline{cursor:pointer;display:inline-flex!important;align-items:center;justify-content:center;padding:0 3px}'
+'.ap-mode-inline svg{width:15px;height:15px;fill:#409EFF;opacity:.7;transition:opacity .2s}'
+'.ap-mode-inline:hover svg{opacity:1}'
+'@media(hover:none){.ap-dl-wrap{opacity:1!important}}'
+'</style>'
+'<div class="ap-upper"><div class="ap-input-area">'
+'<input class="t-in" id="apUrl" placeholder="\u7c98\u8d34\u97f3\u4e50\u94fe\u63a5\u6216\u8f93\u5165 ID\u2026" style="width:100%;margin-bottom:6px">'
+'<div style="font-size:.68em;color:#aaa;margin:2px 0">\u652f\u6301\u7f51\u6613\u4e91/QQ\u97f3\u4e50/\u9177\u72d7 \u00b7 \u6b4c\u5355/\u5355\u66f2/\u4e13\u8f91 \u00b7 \u7c98\u8d34\u94fe\u63a5\u81ea\u52a8\u89e3\u6790<br>\u26a0 \u4ec5\u53ef\u89e3\u6790\u514d\u8d39\u6b4c\u66f2\uff0cVIP\u53ca\u4e91\u76d8\u6b4c\u66f2\u65e0\u6cd5\u64ad\u653e</div>'
+'<div class="t-row" style="gap:6px">'
+'<button class="t-btn" id="apGo">\u25b6 \u52a0\u8f7d</button>'
+'<label class="t-btn t-btn-s" style="cursor:pointer">\ud83d\udcc2 \u672c\u5730\u6587\u4ef6<input type="file" id="apFile" accept="audio/*" multiple style="display:none"></label>'
+'</div></div></div>'
+'<div class="ap-lrc-area" id="apLrc"><span class="ap-lrc-empty">\u266a</span></div>'
+'<div class="ap-ctrls" id="apCtrls">'
+'<button class="ap-cb ap-cb-sm" id="apPrev" title="\u4e0a\u4e00\u9996">\u23ee</button>'
+'<button class="ap-cb ap-cb-lg" id="apPlayPause" title="\u64ad\u653e/\u6682\u505c">\u25b6</button>'
+'<button class="ap-cb ap-cb-sm" id="apNext" title="\u4e0b\u4e00\u9996">\u23ed</button>'
+'</div>'
+'<div class="ap-player-box" id="apBox"></div>'
+'<div class="ap-status" id="apStatus"></div>'
+'<div id="apAlbumDl" style="display:none;margin:6px 0;text-align:center">'
+'<div class="t-row" style="gap:6px;justify-content:center;flex-wrap:wrap">'
+'<button class="t-btn t-btn-o" id="apDlAllAudio" style="font-size:.72em">\u2b07 \u5168\u90e8\u97f3\u9891</button>'
+'<button class="t-btn t-btn-o" id="apDlAllLrc" style="font-size:.72em">\ud83d\udcdd \u5168\u90e8\u6b4c\u8bcd</button>'
+'</div>'
+'<div style="font-size:.65em;color:#bbb;margin-top:2px">\u26a0 \u5927\u91cf\u4e0b\u8f7d\u53ef\u80fd\u89e6\u53d1\u6d4f\u89c8\u5668\u5f39\u7a97\u62e6\u622a</div>'
+'</div>'},
init(el){
  var q=function(s){return el.querySelector(s)};
  var lrcEl=q('#apLrc'),statusEl=q('#apStatus');
  var apInstance=null,trackList=[];

  function setStatus(msg,type){statusEl.textContent=msg||'';statusEl.style.color=type==='error'?'#f56c6c':type==='warn'?'#e6a23c':'#909399'}

  /* ===== URL \u89e3\u6790 ===== */
  function parseUrl(input){
    input=input.trim();var r={server:'netease',type:'song',id:''};var m;
    if(m=input.match(/music\.163\.com.*(?:#\/|\/)(song|playlist|album|artist)\?id=(\d+)/i)){r.server='netease';r.type=m[1];r.id=m[2];return r}
    if(m=input.match(/music\.163\.com.*[?&]id=(\d+)/i)){r.server='netease';r.id=m[1];if(/playlist/i.test(input))r.type='playlist';else if(/album/i.test(input))r.type='album';else if(/artist/i.test(input))r.type='artist';return r}
    if(m=input.match(/y\.qq\.com.*\/(songDetail|playlist|albumDetail)\/(\w+)/i)){r.server='tencent';r.id=m[2];r.type=m[1]==='playlist'?'playlist':m[1]==='albumDetail'?'album':'song';return r}
    if(m=input.match(/y\.qq\.com.*[?&]id=(\w+)/i)){r.server='tencent';r.id=m[1];return r}
    if(/kugou\.com/i.test(input)){r.server='kugou';if(m=input.match(/hash=([a-fA-F0-9]+)/i))r.id=m[1];else if(m=input.match(/(\d{5,})/))r.id=m[1];return r}
    if(/^\d+$/.test(input)){r.id=input;return r}
    if(m=input.match(/(\d{5,})/))r.id=m[1];else r.id=input;return r;
  }

  /* ===== \u4f9d\u8d56\u52a0\u8f7d ===== */
  function ensureAP(cb){
    if(window.APlayer){cb();return}
    if(!document.querySelector('link[href*="APlayer"]')){var l=document.createElement('link');l.rel='stylesheet';l.href='/js/aplayer/APlayer.min.css';document.head.appendChild(l)}
    var s=document.createElement('script');s.src='/js/aplayer/APlayer.min.js';s.onload=cb;document.head.appendChild(s);
  }

  /* ===== Meting API \u76f4\u63a5\u8bf7\u6c42 + \u6b4c\u8bcd\u9884\u53d6 + sessionStorage \u7f13\u5b58 ===== */
  function metingFetch(server,type,id,cb){
    var cacheKey='ap_'+server+'_'+type+'_'+id;
    try{var cached=sessionStorage.getItem(cacheKey);if(cached){cb(null,JSON.parse(cached));return}}catch(e){}
    var apis=window.meting_api_list||[window.meting_api||'https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&r=:r'];
    function tryApi(idx){
      if(idx>=apis.length){cb(new Error('\u6240\u6709API\u5747\u4e0d\u53ef\u7528'));return}
      var api=apis[idx];
      var url=api.replace(':server',server).replace(':type',type).replace(':id',id).replace(':r',Math.random());
      fetch(url).then(function(r){return r.json()}).then(function(data){
        if(!Array.isArray(data)){
          tryApi(idx+1);return;
        }
        var list=[];
        data.forEach(function(d){
          if(d.url)list.push({name:d.name||d.title||'Unknown',artist:d.artist||d.author||'',url:d.url,cover:d.pic||d.cover||'',lrc:d.lrc||''});
        });
        if(!list.length){tryApi(idx+1);return}
        var lrcItems=list.filter(function(it){return it.lrc&&it.lrc.indexOf('http')===0});
        function fetchBatch(bIdx){
          if(bIdx>=lrcItems.length){try{sessionStorage.setItem(cacheKey,JSON.stringify(list))}catch(e){}cb(null,list);return}
          var batch=lrcItems.slice(bIdx,bIdx+5);
          Promise.all(batch.map(function(it){
            var u=it.lrc;
            return fetch(u).then(function(r){return r.text()}).then(function(txt){it.lrc=(txt&&txt.indexOf('[')>=0)?txt:''}).catch(function(){it.lrc=''});
          })).then(function(){fetchBatch(bIdx+5)});
        }
        if(lrcItems.length){fetchBatch(0)}else{try{sessionStorage.setItem(cacheKey,JSON.stringify(list))}catch(e){}cb(null,list)}
      }).catch(function(e){
        tryApi(idx+1);
      });
    }
    tryApi(0);
  }

  /* ===== \u6b4c\u8bcd\u955c\u50cf ===== */
  function mirrorLrc(){
    var box=q('#apBox');if(!box)return;
    var cur=box.querySelector('.aplayer-lrc-current');
    if(!cur||!cur.textContent.trim()){lrcEl.innerHTML='<span class="ap-lrc-empty">\u266a</span>';return}
    var html='';
    var p=cur.previousElementSibling;
    if(p&&p.textContent.trim())html+='<div class="ap-lrc-line">'+p.textContent+'</div>';
    html+='<div class="ap-lrc-line active">'+cur.textContent+'</div>';
    var n1=cur.nextElementSibling;
    if(n1&&n1.textContent.trim())html+='<div class="ap-lrc-line">'+n1.textContent+'</div>';
    var n2=n1&&n1.nextElementSibling;
    if(n2&&n2.textContent.trim())html+='<div class="ap-lrc-line">'+n2.textContent+'</div>';
    lrcEl.innerHTML=html;
  }

  /* ===== \u6bcf\u9996\u6b4c\u4e0b\u8f7d (MP3 + LRC) ===== */
  function injectDlBtns(){
    var box=q('#apBox');if(!box||!trackList.length)return;
    var items=box.querySelectorAll('.aplayer-list ol li');
    items.forEach(function(li,i){
      if(li.querySelector('.ap-dl-wrap'))return;
      var t=trackList[i];if(!t)return;
      var wrap=document.createElement('span');wrap.className='ap-dl-wrap';
      /* MP3 */
      if(t.url){
        var a=document.createElement('a');a.href=t.url;a.target='_blank';
        a.download=(t.name||'track')+'.mp3';a.title='\u4e0b\u8f7d\u97f3\u9891';a.textContent='\u2b07';
        a.onclick=function(e){e.stopPropagation()};wrap.appendChild(a);
      }
      /* LRC */
      if(t.lrc&&t.lrc.indexOf('[')>=0){
        var la=document.createElement('a');la.href='#';la.title='\u4e0b\u8f7d\u6b4c\u8bcd';la.textContent='\ud83d\udcdd';
        var lrcText=t.lrc;var lrcName=t.name;
        la.onclick=function(e){e.preventDefault();e.stopPropagation();
          var blob=new Blob([lrcText],{type:'text/plain'});var dl=document.createElement('a');
          dl.href=URL.createObjectURL(blob);dl.download=(lrcName||'lyrics')+'.lrc';
          document.body.appendChild(dl);dl.click();document.body.removeChild(dl);URL.revokeObjectURL(dl.href);
        };
        wrap.appendChild(la);
      }
      li.appendChild(wrap);
    });
  }

  /* ===== \u64ad\u653e\u6a21\u5f0f ===== */
  var svgShuffle='<svg viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"/></svg>';
  var svgRepeat='<svg viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"/></svg>';
  var svgRepeat1='<svg viewBox="0 0 33 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"/></svg>';
  var svgOnce='<svg viewBox="0 0 22 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988z"/></svg>';
  var modeList=[
    {svg:svgShuffle,title:'\u5217\u8868\u968f\u673a'},
    {svg:svgRepeat,title:'\u5217\u8868\u987a\u5e8f'},
    {svg:svgRepeat1,title:'\u5355\u66f2\u5faa\u73af'},
    {svg:svgOnce,title:'\u64ad\u5b8c\u505c\u6b62'}
  ];
  var mi=0;

  function setupModeBtn(){
    var box=q('#apBox');
    var loopBtn=box.querySelector('.aplayer-icon-loop');
    var orderBtn=box.querySelector('.aplayer-icon-order');
    if(!loopBtn||!orderBtn)return;
    var hideCSS=';width:0!important;padding:0!important;margin:0!important;overflow:hidden;opacity:0;pointer-events:none';
    loopBtn.style.cssText+=hideCSS;orderBtn.style.cssText+=hideCSS;
    var btn=document.createElement('span');btn.className='aplayer-icon ap-mode-inline';
    mi=0;
    function upd(){btn.innerHTML=modeList[mi].svg;btn.title=modeList[mi].title}
    upd();
    var clickMap=[
      function(){orderBtn.click()},
      function(){loopBtn.click()},
      function(){loopBtn.click()},
      function(){loopBtn.click();orderBtn.click()}
    ];
    btn.onclick=function(e){e.stopPropagation();clickMap[mi]();mi=(mi+1)%modeList.length;upd()};
    orderBtn.parentNode.insertBefore(btn,orderBtn);
  }

  /* ===== \u5f3a\u5236\u5e03\u5c40 ===== */
  function forceLayout(){
    var box=q('#apBox');if(!box)return;
    box.classList.remove('aplayer-narrow');
    box.classList.remove('aplayer-arrow');
    box.classList.remove('aplayer-withlrc');
    box.classList.add('aplayer-withlist');
    var tn=box.querySelector('.aplayer-time');if(tn)tn.classList.remove('aplayer-time-narrow');
    var list=box.querySelector('.aplayer-list');if(list){list.style.display='block';list.style.height='auto'}
    var lo=box.querySelector('.aplayer-list ol');if(lo)lo.style.display='block';
  }

  /* ===== \u6838\u5fc3 ===== */
  function createPlayer(audioList){
    if(apInstance){try{apInstance.pause();apInstance.destroy()}catch(e){}apInstance=null}
    var box=q('#apBox');box.innerHTML='';
    ensureAP(function(){
      var hasLrc=false;
      for(var i=0;i<audioList.length;i++){if(audioList[i].lrc&&audioList[i].lrc.indexOf('[')>=0){hasLrc=true;break}}
      apInstance=new APlayer({container:box,audio:audioList,theme:'#409EFF',volume:0.7,lrcType:hasLrc?1:0,listFolded:false,loop:'all',order:audioList.length>1?'random':'list'});
      trackList=audioList;
      function tryInject(n){
        forceLayout();
        var lis=box.querySelectorAll('.aplayer-list ol li');
        if(lis&&lis.length){injectDlBtns();setupModeBtn();showAlbumDl()}
        else if(n<10){setTimeout(function(){tryInject(n+1)},300)}
      }
      setTimeout(function(){tryInject(0)},200);
      q('#apCtrls').style.display='flex';
      hookAudio();
    });
  }

  function loadMeting(server,type,id){
    setStatus('\u52a0\u8f7d\u4e2d\u2026');
    metingFetch(server,type,id,function(err,list){
      if(err||!list||!list.length){setStatus(err&&err.message&&err.message!=='empty'?err.message:'\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u94fe\u63a5\u6216\u7f51\u7edc','error');return}
      setStatus('');
      createPlayer(list);
    });
  }

  function loadLocal(files){
    var list=[];
    Array.from(files).forEach(function(f){list.push({name:f.name.replace(/\.[^.]+$/,''),artist:'Local',url:URL.createObjectURL(f),cover:'',lrc:''})});
    createPlayer(list);
  }

  function hookAudio(){
    if(!apInstance)return;
    var audio=apInstance.audio;if(!audio)return;
    var ppBtn=q('#apPlayPause');
    audio.addEventListener('play',function(){setStatus('');if(ppBtn)ppBtn.textContent='\u23f8'});
    audio.addEventListener('pause',function(){if(ppBtn)ppBtn.textContent='\u25b6'});
    audio.addEventListener('timeupdate',function(){mirrorLrc()});
    audio.addEventListener('error',function(){
      var msg='\u64ad\u653e\u5931\u8d25';
      if(audio.error){
        switch(audio.error.code){
          case 1:msg='\u52a0\u8f7d\u88ab\u4e2d\u65ad';break;
          case 2:msg='\u7f51\u7edc\u9519\u8bef';break;
          case 3:msg='\u97f3\u9891\u89e3\u7801\u5931\u8d25';break;
          case 4:msg='\u97f3\u6e90\u4e0d\u53ef\u7528\uff0c\u53ef\u80fd\u4e3a VIP \u6216\u5df2\u4e0b\u67b6';break;
        }
      }
      setStatus(msg,'error');
    });
    if(apInstance.on){
      apInstance.on('listswitch',function(){
        setStatus('');lrcEl.innerHTML='<span class="ap-lrc-empty">\u266a</span>';
        setTimeout(function(){injectDlBtns()},400);
      });
    }
  }

  /* ===== \u6279\u91cf\u4e0b\u8f7d ===== */
  function showAlbumDl(){q('#apAlbumDl').style.display=trackList.length>=2?'':'none'}

  q('#apDlAllAudio').onclick=function(){
    if(!trackList.length)return;
    if(trackList.length>10&&!confirm('\u5c06\u4e0b\u8f7d '+trackList.length+' \u4e2a\u97f3\u9891\u6587\u4ef6\uff0c\u53ef\u80fd\u89e6\u53d1\u6d4f\u89c8\u5668\u62e6\u622a\u3002\u7ee7\u7eed\uff1f'))return;
    var i=0;
    function dlNext(){
      if(i>=trackList.length)return;var t=trackList[i];
      if(t.url){var a=document.createElement('a');a.href=t.url;a.target='_blank';a.download=(t.name||'track_'+i)+'.mp3';document.body.appendChild(a);a.click();document.body.removeChild(a)}
      i++;setTimeout(dlNext,500);
    }
    dlNext();
  };

  q('#apDlAllLrc').onclick=function(){
    var lrcT=trackList.filter(function(t){return t.lrc&&t.lrc.indexOf('[')>=0});
    if(!lrcT.length){setStatus('\u6682\u65e0\u53ef\u4e0b\u8f7d\u7684\u6b4c\u8bcd','warn');return}
    if(!confirm('\u5c06\u4e0b\u8f7d '+lrcT.length+' \u4e2a\u6b4c\u8bcd\u6587\u4ef6\uff0c\u53ef\u80fd\u89e6\u53d1\u6d4f\u89c8\u5668\u62e6\u622a\u3002\u7ee7\u7eed\uff1f'))return;
    lrcT.forEach(function(t,i){
      setTimeout(function(){
        var blob=new Blob([t.lrc],{type:'text/plain'});var a=document.createElement('a');
        a.href=URL.createObjectURL(blob);a.download=(t.name||'lyrics_'+i)+'.lrc';
        document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(a.href);
      },i*300);
    });
  };

  /* ===== \u4e8b\u4ef6 ===== */
  q('#apPrev').onclick=function(){if(apInstance)apInstance.skipBack()};
  q('#apPlayPause').onclick=function(){if(apInstance)apInstance.toggle()};
  q('#apNext').onclick=function(){if(apInstance)apInstance.skipForward()};

  q('#apGo').onclick=function(){
    var v=q('#apUrl').value;if(!v.trim())return;
    var r=parseUrl(v);if(!r.id)return;
    if(apInstance){try{apInstance.pause();apInstance.destroy()}catch(e){}}
    trackList=[];apInstance=null;setStatus('');
    loadMeting(r.server,r.type,r.id);
  };
  q('#apUrl').onkeydown=function(e){if(e.key==='Enter')q('#apGo').click()};
  q('#apFile').onchange=function(){
    var f=this.files;if(!f||!f.length)return;
    if(apInstance){try{apInstance.pause();apInstance.destroy()}catch(e){}}
    trackList=[];apInstance=null;setStatus('');
    loadLocal(f);
  };

  /* ===== \u6e05\u7406 ===== */
  el._cleanup=function(){
    if(apInstance){try{apInstance.pause();apInstance.destroy()}catch(e){}}
    apInstance=null;trackList=[];
  };
}},
{id:'base64',name:'Base64 编解码',icon:'🔄',cat:'dev',desc:'双向实时互转 · 文件模式',
html(){return'<div class="t-row"><button class="t-btn t-btn-o" id="b64ModeText" style="font-weight:700">文本模式</button><button class="t-btn t-btn-o" id="b64ModeFile">文件模式</button></div><div id="b64TextMode"><div class="t-split"><div><div class="t-lbl">📝 原文（输入即转换）</div><textarea class="t-ta" id="b64Text" rows="5">Hello, 工具箱!</textarea></div><div><div class="t-lbl">🔑 Base64（输入即转换）</div><textarea class="t-ta" id="b64Code" rows="5"></textarea></div></div></div><div id="b64FileMode" style="display:none"><input type="file" id="b64File"><div id="b64FileOut" class="t-res" style="max-height:200px;margin-top:8px"></div><button class="t-btn t-btn-o" id="b64FileCopy" style="margin-top:6px">📋 复制</button></div>'},
init(el){
  const txt=el.querySelector('#b64Text'),code=el.querySelector('#b64Code');
  let lock=false;
  txt.oninput=()=>{if(lock)return;lock=true;try{code.value=btoa(unescape(encodeURIComponent(txt.value)))}catch(e){code.value='⚠ '+e.message}lock=false};
  code.oninput=()=>{if(lock)return;lock=true;try{txt.value=decodeURIComponent(escape(atob(code.value)))}catch(e){txt.value='⚠ '+e.message}lock=false};
  txt.oninput();
  el.querySelector('#b64ModeText').onclick=()=>{el.querySelector('#b64TextMode').style.display='';el.querySelector('#b64FileMode').style.display='none';el.querySelector('#b64ModeText').style.fontWeight='700';el.querySelector('#b64ModeFile').style.fontWeight=''};
  el.querySelector('#b64ModeFile').onclick=()=>{el.querySelector('#b64TextMode').style.display='none';el.querySelector('#b64FileMode').style.display='';el.querySelector('#b64ModeFile').style.fontWeight='700';el.querySelector('#b64ModeText').style.fontWeight=''};
  el.querySelector('#b64File').onchange=function(){const f=this.files[0];if(!f)return;const r=new FileReader();r.onload=e=>{el.querySelector('#b64FileOut').textContent=e.target.result.split(',')[1]||''};r.readAsDataURL(f)};
  el.querySelector('#b64FileCopy').onclick=()=>navigator.clipboard.writeText(el.querySelector('#b64FileOut').textContent);
}},
{id:'colorpicker',name:'调色板',icon:'🎨',cat:'fun',desc:'HSL / RGB / HEX 互转 · 色彩空间分组',
html(){return'<div style="display:flex;gap:14px;flex-wrap:wrap;align-items:flex-start"><div style="flex:1;min-width:200px"><div class="t-row"><span class="t-lbl">HEX</span><input class="t-in" id="cpHex" value="#4a90d9" style="width:100px"></div><fieldset style="border:1px solid #e0e0e0;border-radius:8px;padding:8px 10px;margin:6px 0"><legend style="font-size:.78em;font-weight:600;color:#409eff;padding:0 4px">🔴 RGB 色彩空间</legend><div class="t-row"><span class="t-lbl" style="color:#e74c3c;font-weight:600">R</span><input type="range" id="cpR" min="0" max="255" value="74" style="width:110px;accent-color:#e74c3c"><span class="t-val" id="cpRv">74</span></div><div class="t-row"><span class="t-lbl" style="color:#27ae60;font-weight:600">G</span><input type="range" id="cpG" min="0" max="255" value="144" style="width:110px;accent-color:#27ae60"><span class="t-val" id="cpGv">144</span></div><div class="t-row"><span class="t-lbl" style="color:#2980b9;font-weight:600">B</span><input type="range" id="cpB" min="0" max="255" value="217" style="width:110px;accent-color:#2980b9"><span class="t-val" id="cpBv">217</span></div></fieldset><fieldset style="border:1px solid #e0e0e0;border-radius:8px;padding:8px 10px;margin:6px 0"><legend style="font-size:.78em;font-weight:600;color:#e6a23c;padding:0 4px">🌈 HSL 色彩空间</legend><div class="t-row"><span class="t-lbl" style="font-weight:600">H</span><input type="range" id="cpH" min="0" max="360" value="211" style="width:110px;accent-color:#e6a23c"><span class="t-val" id="cpHv">211°</span></div><div class="t-row"><span class="t-lbl" style="font-weight:600">S</span><input type="range" id="cpS" min="0" max="100" value="63" style="width:110px;accent-color:#e6a23c"><span class="t-val" id="cpSv">63%</span></div><div class="t-row"><span class="t-lbl" style="font-weight:600">L</span><input type="range" id="cpL" min="0" max="100" value="57" style="width:110px;accent-color:#e6a23c"><span class="t-val" id="cpLv">57%</span></div></fieldset><div style="font-size:.68em;color:#aaa;margin-top:2px">RGB 和 HSL 是两种等价的色彩描述方式，调整任意一组即可</div></div><div style="flex:0 0 auto;text-align:center"><div class="color-swatch" id="cpSwatch" style="width:110px;height:110px;border-radius:14px;border:2px solid #e0e0e0;background:#4a90d9;box-shadow:0 4px 16px rgba(0,0,0,.12);transition:background .15s"></div><div style="margin-top:8px;font-size:.78em;color:#555;font-family:monospace" id="cpCss">rgb(74, 144, 217)</div><div style="margin-top:2px;font-size:.78em;color:#555;font-family:monospace" id="cpHsl">hsl(211, 63%, 57%)</div><button class="t-btn t-btn-d" id="cpCopy" style="margin-top:8px;font-size:.72em">📋 复制 HEX</button></div></div>'},
init(el){
  const q=s=>el.querySelector(s);
  function hex2rgb(h){h=h.replace('#','');if(h.length===3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.substr(0,2),16),parseInt(h.substr(2,2),16),parseInt(h.substr(4,2),16)]}
  function rgb2hex(r,g,b){return'#'+[r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('')}
  function rgb2hsl(r,g,b){r/=255;g/=255;b/=255;const mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2;let h=0,s=0;
    if(mx!==mn){const d=mx-mn;s=l>.5?d/(2-mx-mn):d/(mx+mn);switch(mx){case r:h=((g-b)/d+(g<b?6:0))/6;break;case g:h=((b-r)/d+2)/6;break;case b:h=((r-g)/d+4)/6;break}}
    return[Math.round(h*360),Math.round(s*100),Math.round(l*100)]}
  function hsl2rgb(h,s,l){h/=360;s/=100;l/=100;let r,g,b;
    if(s===0)r=g=b=l;else{const hue2rgb=(p,q,t)=>{if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p};
      const Q=l<.5?l*(1+s):l+s-l*s,P=2*l-Q;r=hue2rgb(P,Q,h+1/3);g=hue2rgb(P,Q,h);b=hue2rgb(P,Q,h-1/3)}
    return[Math.round(r*255),Math.round(g*255),Math.round(b*255)]}
  function updateUI(r,g,b){
    const hex=rgb2hex(r,g,b),[h,s,l]=rgb2hsl(r,g,b);
    q('#cpHex').value=hex;q('#cpR').value=r;q('#cpG').value=g;q('#cpB').value=b;
    q('#cpH').value=h;q('#cpS').value=s;q('#cpL').value=l;
    q('#cpRv').textContent=r;q('#cpGv').textContent=g;q('#cpBv').textContent=b;
    q('#cpHv').textContent=h+'°';q('#cpSv').textContent=s+'%';q('#cpLv').textContent=l+'%';
    q('#cpSwatch').style.background=hex;
    q('#cpCss').textContent='rgb('+r+', '+g+', '+b+')';
    q('#cpHsl').textContent='hsl('+h+', '+s+'%, '+l+'%)';
  }
  ['cpR','cpG','cpB'].forEach(id=>q('#'+id).oninput=()=>updateUI(+q('#cpR').value,+q('#cpG').value,+q('#cpB').value));
  ['cpH','cpS','cpL'].forEach(id=>q('#'+id).oninput=()=>{const rgb=hsl2rgb(+q('#cpH').value,+q('#cpS').value,+q('#cpL').value);updateUI(...rgb)});
  q('#cpHex').oninput=function(){const v=this.value;if(/^#?[0-9a-fA-F]{3,6}$/.test(v)){const rgb=hex2rgb(v);updateUI(...rgb)}};
  q('#cpCopy').onclick=()=>navigator.clipboard.writeText(q('#cpHex').value).then(()=>{q('#cpCopy').textContent='✓';setTimeout(()=>q('#cpCopy').textContent='📋 复制 HEX',1500)});
  updateUI(74,144,217);
}},
{id:'countdown',name:'倒计时',icon:'⏳',cat:'fun',desc:'距离目标时刻还有…',
html(){
  function opts(min,max,pad){let h='';for(let i=min;i<=max;i++)h+='<option value="'+i+'">'+(pad&&i<10?'0'+i:i)+'</option>';return h}
  return'<div style="display:flex;gap:3px;align-items:center;flex-wrap:wrap;justify-content:center">'+
  '<select class="t-sel cd-u" id="cdY" style="width:75px">'+opts(2025,2040)+'</select><span style="color:#aaa;font-size:.78em">年</span>'+
  '<select class="t-sel cd-u" id="cdM" style="width:52px">'+opts(1,12,true)+'</select><span style="color:#aaa;font-size:.78em">月</span>'+
  '<select class="t-sel cd-u" id="cdD" style="width:52px">'+opts(1,31,true)+'</select><span style="color:#aaa;font-size:.78em">日</span>'+
  '<select class="t-sel cd-u" id="cdHH" style="width:52px">'+opts(0,23,true)+'</select><span style="font-weight:700;color:#999">:</span>'+
  '<select class="t-sel cd-u" id="cdMM" style="width:52px">'+opts(0,59,true)+'</select>'+
  '<button class="t-btn t-btn-s" id="cdStart" style="margin-left:6px">▶ 开始</button>'+
  '</div><div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin:8px 0"><button class="t-btn t-btn-d cd-preset" data-v="ny">🎆 新年</button><button class="t-btn t-btn-d cd-preset" data-v="mid">🌕 中秋</button><button class="t-btn t-btn-d cd-preset" data-v="nat">🇨🇳 国庆</button><button class="t-btn t-btn-d cd-preset" data-v="cx">🎄 圣诞</button></div><div class="pomo-label" id="cdLabel" style="margin-top:10px"></div><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:8px"><div style="text-align:center"><div style="font-size:2em;font-weight:700;color:#f44" id="cdDy">0</div><div style="font-size:.72em;color:#888">天</div></div><div style="text-align:center"><div style="font-size:2em;font-weight:700;color:#fa1" id="cdH">0</div><div style="font-size:.72em;color:#888">时</div></div><div style="text-align:center"><div style="font-size:2em;font-weight:700;color:#4a90d9" id="cdMi">0</div><div style="font-size:.72em;color:#888">分</div></div><div style="text-align:center"><div style="font-size:2em;font-weight:700;color:#52c41a" id="cdS">0</div><div style="font-size:.72em;color:#888">秒</div></div></div><div style="text-align:center;margin-top:8px;font-size:.78em;color:#888" id="cdTotal"></div>';
},
init(el){
  let target=null,iv=null;
  const q=s=>el.querySelector(s);
  function daysInMonth(y,m){return new Date(y,m,0).getDate()}
  function updateDays(){
    var y=+q('#cdY').value,m=+q('#cdM').value,maxD=daysInMonth(y,m),curD=+q('#cdD').value;
    var sel=q('#cdD'),html='';for(var i=1;i<=maxD;i++)html+='<option value="'+i+'">'+(i<10?'0'+i:i)+'</option>';
    sel.innerHTML=html;sel.value=Math.min(curD,maxD);
  }
  function fillSel(d){q('#cdY').value=d.getFullYear();q('#cdM').value=d.getMonth()+1;updateDays();q('#cdD').value=d.getDate();q('#cdHH').value=d.getHours();q('#cdMM').value=d.getMinutes()}
  q('#cdY').onchange=updateDays;q('#cdM').onchange=updateDays;
  function getPresetDate(key){
    const now=new Date(),y=now.getFullYear();
    if(key==='ny')return new Date(y+1,0,1);
    if(key==='mid'){const dates={2025:'2025-10-06',2026:'2026-09-25',2027:'2027-09-15'};return new Date(dates[y]||y+'-09-20')}
    if(key==='nat')return new Date(now>new Date(y,9,1)?y+1:y,9,1);
    if(key==='cx')return new Date(now>new Date(y,11,25)?y+1:y,11,25);
    return new Date(y+1,0,1);
  }
  function tick(){
    if(!target)return;const diff=target-Date.now();
    if(diff<=0){q('#cdDy').textContent=q('#cdH').textContent=q('#cdMi').textContent=q('#cdS').textContent='0';q('#cdLabel').textContent='🎉 已到达！';q('#cdTotal').textContent='';clearInterval(iv);return}
    const s=Math.floor(diff/1000),m=Math.floor(s/60),h=Math.floor(m/60),d=Math.floor(h/24);
    q('#cdDy').textContent=d;q('#cdH').textContent=h%24;q('#cdMi').textContent=m%60;q('#cdS').textContent=s%60;
    q('#cdTotal').textContent='共计 '+s.toLocaleString()+' 秒';
  }
  function start(){
    clearInterval(iv);
    target=new Date(+q('#cdY').value,+q('#cdM').value-1,+q('#cdD').value,+q('#cdHH').value,+q('#cdMM').value).getTime();
    q('#cdLabel').textContent='⏳ 目标: '+new Date(target).toLocaleString('zh-CN');
    tick();iv=setInterval(tick,1000);
  }
  q('#cdStart').onclick=start;
  el.querySelectorAll('.cd-preset').forEach(b=>b.onclick=function(){
    const d=getPresetDate(this.dataset.v);fillSel(d);start();
  });
  const ny=new Date(new Date().getFullYear()+1,0,1);fillSel(ny);start();
  el._cleanup=()=>clearInterval(iv);
}},
{id:'cron',name:'Cron 解析',icon:'⏰',cat:'dev',desc:'可视化 Cron 表达式',
html(){return'<div class="t-row"><input class="t-in" id="cronIn" value="*/5 * * * *" style="flex:1"><button class="t-btn" id="cronParse">解析</button></div><div id="cronOut" class="t-res"></div><div style="font-size:.72em;color:#999;margin-top:4px">格式: 分(0-59) 时(0-23) 日(1-31) 月(1-12) 周(0-7)</div>'},
init(el){
  const N=[['分钟',60],['小时',24],['日',31],['月',12],['星期',7]];
  function desc(v,i){const name=N[i][0];if(v==='*')return'每'+name;if(v.startsWith('*/'))return'每隔 '+v.slice(2)+' '+name;if(v.includes(','))return name+' 为 '+v;if(v.includes('-')){const[a,b]=v.split('-');return name+' '+a+' 至 '+b}return name+' 为 '+v}
  function go(){
    const p=el.querySelector('#cronIn').value.trim().split(/\s+/);
    if(p.length<5){el.querySelector('#cronOut').textContent='需要 5 个字段';return}
    const lines=p.slice(0,5).map((v,i)=>desc(v,i));
    el.querySelector('#cronOut').textContent='含义:\n'+lines.join('\n')+'\n\n→ '+lines.join('，');
  }
  el.querySelector('#cronParse').onclick=go;
  el.querySelector('#cronIn').addEventListener('keydown',e=>{if(e.key==='Enter')go()});
}},
{id:'diff',name:'文本对比',icon:'📃',cat:'dev',desc:'LCS 算法 · 并排/统一视图 · 文件对比',
html(){return'<div class="t-split"><div><div class="t-row" style="justify-content:space-between;align-items:center"><span class="t-lbl">原始文本</span><label class="t-btn t-btn-d" style="font-size:.7em;cursor:pointer;margin:0">📂 上传<input type="file" id="diffFileA" accept=".txt,.md,.py,.js,.ts,.sh,.css,.html,.json,.xml,.yml,.yaml,.c,.cpp,.h,.java,.go,.rs,.rb,.php,.sql,.log,.csv,.ini,.cfg,.toml,.bat,.ps1" style="display:none"></label></div><textarea class="t-ta" id="diffA" rows="8" placeholder="粘贴或上传原始文本…"></textarea></div><div><div class="t-row" style="justify-content:space-between;align-items:center"><span class="t-lbl">修改文本</span><label class="t-btn t-btn-d" style="font-size:.7em;cursor:pointer;margin:0">📂 上传<input type="file" id="diffFileB" accept=".txt,.md,.py,.js,.ts,.sh,.css,.html,.json,.xml,.yml,.yaml,.c,.cpp,.h,.java,.go,.rs,.rb,.php,.sql,.log,.csv,.ini,.cfg,.toml,.bat,.ps1" style="display:none"></label></div><textarea class="t-ta" id="diffB" rows="8" placeholder="粘贴或上传修改文本…"></textarea></div></div><div class="t-row" style="gap:8px;margin-top:6px;flex-wrap:wrap;align-items:center"><button class="t-btn" id="diffRun">🔍 对比</button><button class="t-btn t-btn-o diffView active" data-v="split">并排视图</button><button class="t-btn t-btn-o diffView" data-v="unified">统一视图</button><label style="font-size:.75em"><input type="checkbox" id="diffTrim"> 忽略行首尾空白</label><span id="diffStats" style="font-size:.75em;color:#888;margin-left:auto"></span></div><div id="diffResult" style="margin-top:8px;border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;max-height:420px;overflow-y:auto;background:#fafafa"></div>'},
init(el){
  var q=function(s){return el.querySelector(s)};
  var viewMode='split';
  q('#diffA').value='第一行内容\n第二行不变\n第三行要改\n第四行要删';
  q('#diffB').value='第一行内容\n第二行不变\n第三行改了\n新增第五行';
  /* 文件上传 */
  function bindUpload(fileId,taId){q(fileId).onchange=function(){var f=this.files[0];if(!f)return;var r=new FileReader();r.onload=function(){q(taId).value=r.result};r.readAsText(f)}}
  bindUpload('#diffFileA','#diffA');bindUpload('#diffFileB','#diffB');
  /* 视图切换 */
  el.querySelectorAll('.diffView').forEach(function(b){b.onclick=function(){el.querySelectorAll('.diffView').forEach(function(x){x.classList.remove('active')});this.classList.add('active');viewMode=this.dataset.v;run()}});
  /* LCS 差异 */
  function diff(){
    var trim=q('#diffTrim').checked;
    var a=q('#diffA').value.split('\n'),b=q('#diffB').value.split('\n');
    var af=trim?a.map(function(s){return s.trim()}):a;
    var bf=trim?b.map(function(s){return s.trim()}):b;
    var n=af.length,m=bf.length;
    var dp=[];for(var i=0;i<=n;i++){dp[i]=[];for(var j=0;j<=m;j++)dp[i][j]=0}
    for(var i=1;i<=n;i++)for(var j=1;j<=m;j++)dp[i][j]=af[i-1]===bf[j-1]?dp[i-1][j-1]+1:Math.max(dp[i-1][j],dp[i][j-1]);
    var ops=[];var i=n,j=m;
    while(i>0||j>0){
      if(i>0&&j>0&&af[i-1]===bf[j-1]){ops.unshift({type:'eq',a:a[i-1],b:b[j-1],ai:i,bi:j});i--;j--}
      else if(j>0&&(i===0||dp[i][j-1]>=dp[i-1][j])){ops.unshift({type:'add',b:b[j-1],bi:j});j--}
      else{ops.unshift({type:'del',a:a[i-1],ai:i});i--}
    }
    return ops;
  }
  function esc(s){return s?s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'):''}
  /* 字符级差异高亮 */
  function charDiff(old,nw){
    if(!old||!nw)return{a:esc(old),b:esc(nw)};
    var n=old.length,m=nw.length;
    var dp=[];for(var i=0;i<=n;i++){dp[i]=[];for(var j=0;j<=m;j++)dp[i][j]=0}
    for(var i=1;i<=n;i++)for(var j=1;j<=m;j++)dp[i][j]=old[i-1]===nw[j-1]?dp[i-1][j-1]+1:Math.max(dp[i-1][j],dp[i][j-1]);
    var ra='',rb='';var i=n,j=m;
    while(i>0||j>0){
      if(i>0&&j>0&&old[i-1]===nw[j-1]){ra=esc(old[i-1])+ra;rb=esc(nw[j-1])+rb;i--;j--}
      else if(j>0&&(i===0||dp[i][j-1]>=dp[i-1][j])){rb='<mark style="background:#a6f3a6;border-radius:2px">'+esc(nw[j-1])+'</mark>'+rb;j--}
      else{ra='<mark style="background:#f8b4b4;border-radius:2px">'+esc(old[i-1])+'</mark>'+ra;i--}
    }
    return{a:ra,b:rb};
  }
  function renderSplit(ops){
    var adds=0,dels=0,mods=0;
    var rows='';
    for(var k=0;k<ops.length;k++){
      var o=ops[k];
      if(o.type==='eq'){
        rows+='<tr><td class="dln">'+o.ai+'</td><td class="dtd">'+esc(o.a)+'</td><td class="dln">'+o.bi+'</td><td class="dtd">'+esc(o.b)+'</td></tr>';
      }else if(o.type==='del'){
        /* 查看下一项是否是 add，形成修改对 */
        if(k+1<ops.length&&ops[k+1].type==='add'){
          var cd=charDiff(o.a,ops[k+1].b);
          rows+='<tr><td class="dln dln-d">'+o.ai+'</td><td class="dtd dtd-d">'+cd.a+'</td><td class="dln dln-a">'+ops[k+1].bi+'</td><td class="dtd dtd-a">'+cd.b+'</td></tr>';
          k++;mods++;
        }else{
          rows+='<tr><td class="dln dln-d">'+o.ai+'</td><td class="dtd dtd-d">'+esc(o.a)+'</td><td class="dln"></td><td class="dtd" style="background:#f9f9f9"></td></tr>';
          dels++;
        }
      }else{
        rows+='<tr><td class="dln"></td><td class="dtd" style="background:#f9f9f9"></td><td class="dln dln-a">'+o.bi+'</td><td class="dtd dtd-a">'+esc(o.b)+'</td></tr>';
        adds++;
      }
    }
    q('#diffStats').innerHTML='<span style="color:#27ae60">+'+adds+'</span> <span style="color:#e74c3c">-'+dels+'</span> <span style="color:#e6a23c">~'+mods+'</span>';
    return'<table class="dtbl dtbl-split">'+rows+'</table>';
  }
  function renderUnified(ops){
    var adds=0,dels=0;
    var rows='';
    for(var k=0;k<ops.length;k++){
      var o=ops[k];
      if(o.type==='eq'){rows+='<tr><td class="dln">'+o.ai+'</td><td class="dln">'+o.bi+'</td><td class="dtd">&nbsp; '+esc(o.a)+'</td></tr>'}
      else if(o.type==='del'){rows+='<tr><td class="dln dln-d">'+o.ai+'</td><td class="dln"></td><td class="dtd dtd-d">- '+esc(o.a)+'</td></tr>';dels++}
      else{rows+='<tr><td class="dln"></td><td class="dln dln-a">'+o.bi+'</td><td class="dtd dtd-a">+ '+esc(o.b)+'</td></tr>';adds++}
    }
    q('#diffStats').innerHTML='<span style="color:#27ae60">+'+adds+'</span> <span style="color:#e74c3c">-'+dels+'</span>';
    return'<table class="dtbl">'+rows+'</table>';
  }
  function run(){
    var ops=diff();
    var same=ops.every(function(o){return o.type==='eq'});
    if(same){q('#diffResult').innerHTML='<div style="text-align:center;padding:30px;color:#67c23a;font-size:.9em">✓ 两段文本完全相同</div>';q('#diffStats').innerHTML='';return}
    q('#diffResult').innerHTML=viewMode==='split'?renderSplit(ops):renderUnified(ops);
  }
  q('#diffRun').onclick=run;
  q('#diffTrim').onchange=run;
  /* 在 init 最后注入样式 */
  if(!document.getElementById('diffCSS')){
    var st=document.createElement('style');st.id='diffCSS';
    st.textContent='.dtbl{width:100%;border-collapse:collapse;font-family:Consolas,Monaco,monospace;font-size:.78em;line-height:1.6;table-layout:fixed}.dtbl td{padding:0 6px;white-space:pre-wrap;word-break:break-all;vertical-align:top}.dln{width:32px;min-width:32px;max-width:32px;text-align:right;color:#bbb;font-size:.85em;user-select:none;border-right:1px solid #eee;background:#fafafa}.dtbl-split .dtd{width:calc(50% - 32px)}.dln-d{background:#fde8e8;color:#c0392b}.dln-a{background:#e6f9e6;color:#27ae60}.dtd-d{background:#fef0f0}.dtd-a{background:#f0faf0}.dtbl tr:hover td{background:rgba(64,158,255,.04)}';
    document.head.appendChild(st);
  }
}},
{id:'favicon',name:'Favicon生成',icon:'🖼️',cat:'productivity',desc:'上传图片 → 多尺寸 favicon',
html(){return'<div class="t-row" style="justify-content:center"><label class="t-btn t-btn-s" style="cursor:pointer">📂 上传图标 <input type="file" id="favFile" accept="image/*" style="display:none"></label></div><div style="text-align:center;margin:8px 0"><canvas id="favPrev" width="128" height="128" style="border:1px solid #eee;border-radius:8px;background:#f9f9f9"></canvas></div><div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin:8px 0" id="favSizes"><label><input type="checkbox" value="16" checked> 16px</label><label><input type="checkbox" value="32" checked> 32px</label><label><input type="checkbox" value="48" checked> 48px</label><label><input type="checkbox" value="64" checked> 64px</label><label><input type="checkbox" value="128"> 128px</label><label><input type="checkbox" value="192"> 192px</label><label><input type="checkbox" value="512"> 512px</label></div><div id="favOut" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:10px"></div>'},
init(el){
  let img=null;
  el.querySelector('#favFile').onchange=function(){
    const f=this.files[0];if(!f)return;
    img=new Image();img.onload=()=>{
      const c=el.querySelector('#favPrev'),ctx=c.getContext('2d');ctx.clearRect(0,0,128,128);
      const s=Math.min(128/img.width,128/img.height);const w=img.width*s,h=img.height*s;
      ctx.drawImage(img,(128-w)/2,(128-h)/2,w,h);gen();
    };if(el._favUrl)URL.revokeObjectURL(el._favUrl);el._favUrl=URL.createObjectURL(f);img.src=el._favUrl;
  };
  function gen(){
    if(!img)return;const out=el.querySelector('#favOut');out.innerHTML='';
    el.querySelectorAll('#favSizes input:checked').forEach(cb=>{
      const sz=+cb.value,c=document.createElement('canvas');c.width=c.height=sz;
      var s=Math.min(sz/img.width,sz/img.height),w=img.width*s,h=img.height*s;
      c.getContext('2d').drawImage(img,(sz-w)/2,(sz-h)/2,w,h);
      c.toBlob(blob=>{
        const wrap=document.createElement('div');wrap.style.cssText='text-align:center';
        const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='favicon-'+sz+'x'+sz+'.png';
        a.className='t-btn t-btn-d';a.style.cssText='font-size:.72em;display:block;text-decoration:none';
        a.textContent='💾 '+sz+'px';
        const prev=document.createElement('canvas');prev.width=prev.height=Math.min(sz,64);prev.style.cssText='border:1px solid #eee;border-radius:4px';
        prev.getContext('2d').drawImage(img,0,0,prev.width,prev.height);
        wrap.appendChild(prev);wrap.appendChild(document.createElement('br'));wrap.appendChild(a);
        out.appendChild(wrap);
      },'image/png');
    });
  }
  el.querySelectorAll('#favSizes input').forEach(cb=>cb.onchange=gen);
  el._cleanup=function(){if(el._favUrl)URL.revokeObjectURL(el._favUrl)};
}},
{id:'frontmatter',name:'文章模板',icon:'📝',cat:'productivity',desc:'Front-matter 生成 · 下载 .md',
html(){return'<div style="font-size:.75em;color:#888;margin-bottom:10px">✍️ 生成 Hexo 文章 Front-matter · 自动 UUID · 一键下载 .md</div>'
+'<div class="t-row"><span class="t-lbl" style="min-width:55px">标题 *</span><input class="t-in" id="fmTitle" placeholder="文章标题（必填）" style="flex:1"></div>'
+'<div class="t-row"><span class="t-lbl" style="min-width:55px">文件名</span><input class="t-in" id="fmSlug" placeholder="英文 slug，如 article-title" style="flex:1"><span style="font-size:.7em;color:#888">不填则自动生成</span></div>'
+'<div class="t-row"><span class="t-lbl" style="min-width:55px">作者</span><input class="t-in" id="fmAuthor" value="yeliqin666" placeholder="多人用逗号分隔" style="flex:1"></div>'
+'<div class="t-row"><span class="t-lbl" style="min-width:55px">标签</span><input class="t-in" id="fmTags" placeholder="逗号分隔，如: 物理,备考" style="flex:1"></div>'
+'<div class="t-row"><span class="t-lbl" style="min-width:55px">分类</span><input class="t-in" id="fmCats" placeholder="逗号分隔，如: 资源" style="flex:1"></div>'
+'<div style="display:flex;flex-wrap:wrap;gap:8px 16px;margin:8px 0;font-size:.82em">'
+'<label title="生成带编号的章节标题"><input type="checkbox" id="fmNumSec"> 章节编号</label>'
+'<label title="生成目录"><input type="checkbox" id="fmToc"> 目录(toc)</label>'
+'<label title="文章置顶"><input type="checkbox" id="fmTop"> 置顶(top)</label>'
+'<label title="加密文章"><input type="checkbox" id="fmEncrypt"> 加密</label>'
+'<label title="关闭评论"><input type="checkbox" id="fmNoComment"> 关闭评论</label>'
+'</div>'
+'<div id="fmEncRow" class="t-row" style="display:none"><span class="t-lbl" style="min-width:55px">密码</span><input class="t-in" id="fmPwd" type="password" placeholder="加密密码" style="flex:1;max-width:200px"></div>'
+'<div class="t-row"><span class="t-lbl" style="min-width:55px">专栏</span><input class="t-in" id="fmSeries" placeholder="需与 series.yml 中名称一致" style="flex:1"><input class="t-in" id="fmSeriesIndex" type="number" min="1" placeholder="篇序" style="max-width:80px"></div>'
+'<div class="t-row" style="justify-content:center;gap:8px;margin-top:10px">'
+'<button class="t-btn t-btn-s" id="fmGen">⚡ 生成预览</button>'
+'<button class="t-btn" id="fmDl">📥 下载 .md</button>'
+'<button class="t-btn t-btn-o" id="fmCopy" style="font-size:.75em">📋 复制</button></div>'
+'<div style="margin-top:6px;display:flex;flex-wrap:wrap;gap:6px;justify-content:center;font-size:.72em">'
+'<button class="t-btn t-btn-o fm-preset" data-p="essay" style="padding:4px 10px;font-size:.9em">💬 随笔</button>'
+'<button class="t-btn t-btn-o fm-preset" data-p="academic" style="padding:4px 10px;font-size:.9em">📚 学术</button>'
+'<button class="t-btn t-btn-o fm-preset" data-p="resource" style="padding:4px 10px;font-size:.9em">📦 资源</button>'
+'<button class="t-btn t-btn-o fm-preset" data-p="reading" style="padding:4px 10px;font-size:.9em">📖 读书</button>'
+'</div>'
+'<pre id="fmOut" class="t-res" style="min-height:120px;white-space:pre;font-size:.8em"></pre>'},
init(el){
  function q(s){return el.querySelector(s)}
  function uuid(){var s4=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return s4()+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+s4()+s4()}
  var currentUuid=uuid();
  function yaml(s){return JSON.stringify(String(s))}
  function slugify(s){return String(s||'').trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
  function pad2(n){return n<10?'0'+n:''+n}
  function now(){var d=new Date();return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate())+' '+pad2(d.getHours())+':'+pad2(d.getMinutes())+':'+pad2(d.getSeconds())}
  function splitTrim(s){return s?s.split(',').map(function(x){return x.trim()}).filter(function(x){return x}):[]}
  q('#fmEncrypt').onchange=function(){q('#fmEncRow').style.display=this.checked?'flex':'none'};
  var presets={
    essay:{tags:'随笔',cats:'有感',numSec:false,toc:false,series:''},
    academic:{tags:'物理,备考',cats:'资源',numSec:true,toc:true,series:''},
    resource:{tags:'工具,资源',cats:'资源',numSec:false,toc:false,series:''},
    reading:{tags:'读书',cats:'读书',numSec:false,toc:false,series:''}
  };
  el.querySelectorAll('.fm-preset').forEach(function(btn){btn.onclick=function(){
    var p=presets[btn.dataset.p];if(!p)return;
    q('#fmTags').value=p.tags;q('#fmCats').value=p.cats;
    q('#fmNumSec').checked=p.numSec;q('#fmToc').checked=p.toc;
    q('#fmSeries').value=p.series;q('#fmSeriesIndex').value='';
    gen();
  }});
  function gen(){
    var title=q('#fmTitle').value.trim();
    if(!title){q('#fmOut').textContent='⚠️ 请输入标题';return''}
    var lines=[];
    lines.push('---');
    lines.push('uuid: '+currentUuid);
    lines.push('title: '+yaml(title));
    lines.push('date: '+now());
    var authors=splitTrim(q('#fmAuthor').value);
    if(authors.length===0)authors=['yeliqin666'];
    if(authors.length===1){lines.push('author: '+yaml(authors[0]))}
    else{lines.push('author:');authors.forEach(function(a){lines.push('  - '+yaml(a))})}
    if(q('#fmNumSec').checked){lines.push('numbersections: true');lines.push('secnumdepth: 3')}
    if(q('#fmToc').checked)lines.push('toc: true');
    var series=q('#fmSeries').value.trim();
    if(series){lines.push('series: '+yaml(series));var seriesIndex=parseInt(q('#fmSeriesIndex').value,10);if(seriesIndex>0)lines.push('series_index: '+seriesIndex);else lines.push('# series_index: 请填写专栏篇序')}
    if(q('#fmTop').checked)lines.push('top: true');
    if(q('#fmEncrypt').checked){var pwd=q('#fmPwd').value.trim();if(pwd)lines.push('password: '+yaml(pwd))}
    if(q('#fmNoComment').checked)lines.push('comment: false');
    var tags=splitTrim(q('#fmTags').value);
    lines.push('tags:');if(tags.length)tags.forEach(function(t){lines.push('  - '+yaml(t))});
    var cats=splitTrim(q('#fmCats').value);
    lines.push('categories:');if(cats.length)cats.forEach(function(c){lines.push('  - '+yaml(c))});
    lines.push('---');lines.push('');lines.push('在这里写导语。');lines.push('');lines.push('<!-- more -->');lines.push('');lines.push('## 正文');lines.push('');
    var result=lines.join('\n');
    q('#fmOut').textContent=result;
    return result
  }
  q('#fmGen').onclick=gen;
  q('#fmDl').onclick=function(){
    var content=gen();if(!content)return;
    var title=q('#fmTitle').value.trim();
    var slug=slugify(q('#fmSlug').value)||slugify(title)||('post-'+Date.now());
    var a=document.createElement('a');
    a.href='data:text/plain;charset=utf-8,'+encodeURIComponent(content);
    a.download=slug+'.md';a.style.display='none';
    document.body.appendChild(a);a.click();document.body.removeChild(a);
  };
  q('#fmCopy').onclick=function(){
    var content=gen();if(!content)return;
    navigator.clipboard.writeText(content).then(function(){q('#fmCopy').textContent='✓ 已复制';setTimeout(function(){q('#fmCopy').textContent='📋 复制'},1500)});
  };
  q('#fmTitle').oninput=gen;
}},
{id:'gradient',name:'CSS 渐变',icon:'🌈',cat:'dev',desc:'可视化 CSS 渐变编辑器',
html(){return'<div class="grad-preview" id="gradPrev"></div><div class="t-row"><label class="t-lbl">色1</label><input type="color" id="gradC1" value="#409eff"><label class="t-lbl">色2</label><input type="color" id="gradC2" value="#67c23a"><label class="t-lbl">角度</label><input type="range" id="gradAngle" min="0" max="360" value="135" style="flex:1"><span id="gradDeg">135°</span></div><div class="t-row"><label class="t-lbl">色3</label><input type="color" id="gradC3" value="#f56c6c"><label><input type="checkbox" id="gradUse3"> 三色</label><label class="t-lbl" style="margin-left:12px">类型</label><select class="t-sel" id="gradType"><option value="linear">线性</option><option value="radial">径向</option></select></div><div id="gradCode" class="t-res" style="cursor:pointer" title="点击复制"></div>'},
init(el){
  function up(){
    const c1=el.querySelector('#gradC1').value,c2=el.querySelector('#gradC2').value,c3=el.querySelector('#gradC3').value;
    const a=el.querySelector('#gradAngle').value,u3=el.querySelector('#gradUse3').checked,type=el.querySelector('#gradType').value;
    el.querySelector('#gradDeg').textContent=a+'°';
    el.querySelector('#gradAngle').disabled=type!=='linear';el.querySelector('#gradAngle').style.opacity=type==='linear'?'1':'0.4';el.querySelector('#gradDeg').style.opacity=type==='linear'?'1':'0.4';
    const stops=u3?c1+', '+c3+', '+c2:c1+', '+c2;
    const css=type==='linear'?'linear-gradient('+a+'deg, '+stops+')':'radial-gradient(circle, '+stops+')';
    el.querySelector('#gradPrev').style.background=css;
    el.querySelector('#gradCode').textContent='background: '+css+';';
  }
  ['gradC1','gradC2','gradC3','gradAngle','gradUse3','gradType'].forEach(id=>el.querySelector('#'+id).addEventListener('input',up));
  el.querySelector('#gradCode').onclick=function(){navigator.clipboard.writeText(this.textContent);this.textContent='✓ 已复制';setTimeout(up,1000)};
  up();
}},
{id:'hash',name:'Hash 计算',icon:'🔑',cat:'dev',desc:'MD5 / SHA 多算法 · 文本与文件',
html(){return'<div class="t-row"><label><input type="checkbox" id="haMd5"> MD5</label><label><input type="checkbox" id="haSha1"> SHA-1</label><label><input type="checkbox" id="haSha256" checked> SHA-256</label><label><input type="checkbox" id="haSha384"> SHA-384</label><label><input type="checkbox" id="haSha512"> SHA-512</label></div><div class="t-lbl">文本输入</div><textarea class="t-ta" id="hashIn" rows="3">Hello World</textarea><div class="t-row" style="margin-top:6px"><button class="t-btn" id="hashCalc">计算文本Hash</button><span style="color:#999;font-size:.82em">或</span><input type="file" id="hashFile"><button class="t-btn t-btn-o" id="hashFileCalc">计算文件Hash</button></div><div id="hashOut" class="t-res"></div>'},
async init(el){
  if(!window.crypto||!window.crypto.subtle){el.querySelector('#hashOut').textContent='⚠️ 此功能需要 HTTPS 或 localhost 环境（crypto.subtle 不可用）';el.querySelector('#hashCalc').disabled=true;el.querySelector('#hashFileCalc').disabled=true;return}
  async function hashData(data){
    var algos=[];
    if(el.querySelector('#haMd5').checked)algos.push('MD5');
    if(el.querySelector('#haSha1').checked)algos.push('SHA-1');
    if(el.querySelector('#haSha256').checked)algos.push('SHA-256');
    if(el.querySelector('#haSha384').checked)algos.push('SHA-384');
    if(el.querySelector('#haSha512').checked)algos.push('SHA-512');
    if(!algos.length){el.querySelector('#hashOut').textContent='请至少选择一种算法';return}
    var results=[];
    for(var ai=0;ai<algos.length;ai++){
      var algo=algos[ai];
      if(algo==='MD5'){
        if(typeof md5==='undefined')await loadJS('https://cdn.jsdelivr.net/npm/js-md5@0.8.3/src/md5.min.js');
        results.push('MD5: '+md5(data));
      }else{
        var buf=await crypto.subtle.digest(algo,data);
        var hex=[].slice.call(new Uint8Array(buf)).map(function(b){return b.toString(16).padStart(2,'0')}).join('');
        results.push(algo+': '+hex);
      }
    }
    el.querySelector('#hashOut').textContent=results.join('\n');
  }
  el.querySelector('#hashCalc').onclick=function(){hashData(new TextEncoder().encode(el.querySelector('#hashIn').value))};
  el.querySelector('#hashFileCalc').onclick=function(){var f=el.querySelector('#hashFile').files[0];if(!f){el.querySelector('#hashOut').textContent='请先选择文件';return}f.arrayBuffer().then(function(buf){hashData(new Uint8Array(buf))})};
}},
{id:'imgcompress',name:'图片压缩',icon:'🗜️',cat:'productivity',desc:'纯浏览器端 · JPEG/WebP/PNG/GIF',
html(){return'<div class="t-row" style="justify-content:center"><label class="t-btn t-btn-s" style="cursor:pointer">📂 选择图片 <input type="file" id="icFile" accept="image/*" style="display:none"></label></div><div class="t-row"><span class="t-lbl">格式</span><select class="t-sel" id="icFmt"><option value="image/jpeg">JPEG</option><option value="image/webp">WebP</option><option value="image/png">PNG（无损）</option><option value="image/gif">GIF（保留动图）</option></select></div><div class="t-row"><span class="t-lbl">画质</span><input type="range" id="icQ" min="1" max="100" value="75" style="width:160px"><span id="icQVal" style="font-size:.78em;color:#888">75%</span></div><div class="t-row"><span class="t-lbl">最大宽度</span><input type="number" class="t-in" id="icMaxW" value="0" style="width:80px"><span style="font-size:.75em;color:#888">px (0=原尺寸)</span></div><div id="icInfo" style="font-size:.78em;color:#888;text-align:center;margin:8px 0"></div><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><div style="text-align:center"><div style="font-size:.75em;color:#888">原图</div><canvas id="icOrig" style="max-width:200px;max-height:160px;border:1px solid #eee;border-radius:4px"></canvas></div><div style="text-align:center"><div style="font-size:.75em;color:#888">压缩后</div><canvas id="icComp" style="max-width:200px;max-height:160px;border:1px solid #eee;border-radius:4px"></canvas></div></div><div class="t-row" style="justify-content:center;margin-top:8px"><a id="icDl" class="t-btn t-btn-s" style="display:none;text-decoration:none">💾 下载</a></div><div style="font-size:.7em;color:#999;text-align:center;margin-top:4px">GIF 模式会保留动图帧；若输入不是 GIF，将自动回退为静态图压缩。</div>'},
init(el){
  var qsl=el.querySelector('#icQ'),qv=el.querySelector('#icQVal');
  var fmtSel=el.querySelector('#icFmt');
  var reqId=0;
  qsl.oninput=function(){qv.textContent=qsl.value+'%'};

  function fmt(b){if(b<1024)return b+'B';if(b<1048576)return(b/1024).toFixed(1)+'KB';return(b/1048576).toFixed(2)+'MB'}
  function isGifFile(f){return !!f&&((f.type||'').toLowerCase()==='image/gif'||/\.gif$/i.test(f.name||''))}
  function canvasToBlob(canvas,mime,quality){return new Promise(function(resolve,reject){canvas.toBlob(function(blob){if(blob)resolve(blob);else reject(new Error('导出失败'))},mime,mime==='image/png'?undefined:quality)})}
  function drawPreview(canvas,img,w,h){canvas.width=w;canvas.height=h;canvas.getContext('2d').drawImage(img,0,0,w,h)}

  async function ensureGifLib(){
    if(!window.GIF)await loadJS('https://cdn.jsdelivr.net/npm/gif.js.optimized/dist/gif.js');
    if(!window.parseGIF||!window.decompressFrames)await loadJS('https://cdn.jsdelivr.net/npm/gifuct-js/dist/gifuct.min.js');
  }

  async function compressGif(file,maxW,quality){
    await ensureGifLib();
    var parse=window.parseGIF||(window.gifuct&&window.gifuct.parseGIF);
    var decompress=window.decompressFrames||(window.gifuct&&window.gifuct.decompressFrames);
    if(!parse||!decompress||!window.GIF)throw new Error('GIF 编解码库加载失败');

    var buf=await file.arrayBuffer();
    var parsed=parse(buf);
    var frames=decompress(parsed,true);
    if(!frames||!frames.length)throw new Error('GIF 帧解析失败');

    var srcW=(parsed.lsd&&parsed.lsd.width)||frames[0].dims.width;
    var srcH=(parsed.lsd&&parsed.lsd.height)||frames[0].dims.height;
    var outW=srcW,outH=srcH;
    if(maxW>0&&srcW>maxW){outW=maxW;outH=Math.max(1,Math.round(srcH*maxW/srcW))}

    var stage=document.createElement('canvas');stage.width=srcW;stage.height=srcH;
    var sctx=stage.getContext('2d');
    var outCanvas=document.createElement('canvas');outCanvas.width=outW;outCanvas.height=outH;
    var octx=outCanvas.getContext('2d');

    var gif=new GIF({
      workers:2,
      quality:Math.max(1,Math.round((101-quality)/4)),
      width:outW,
      height:outH,
      workerScript:'https://cdn.jsdelivr.net/npm/gif.js.optimized/dist/gif.worker.js'
    });

    frames.forEach(function(frame){
      var d=frame.dims;
      var imageData=sctx.createImageData(d.width,d.height);
      imageData.data.set(frame.patch);
      sctx.putImageData(imageData,d.left,d.top);

      octx.clearRect(0,0,outW,outH);
      octx.drawImage(stage,0,0,outW,outH);
      gif.addFrame(outCanvas,{copy:true,delay:Math.max(20,(frame.delay||10)*10)});

      if(frame.disposalType===2){
        sctx.clearRect(d.left,d.top,d.width,d.height);
      }
    });

    var blob=await new Promise(function(resolve,reject){
      gif.on('finished',resolve);
      gif.on('abort',function(){reject(new Error('GIF 渲染中断'))});
      gif.render();
    });

    return {blob:blob,width:outW,height:outH,srcWidth:srcW,srcHeight:srcH};
  }

  async function compress(){
    var file=el._file;if(!file)return;
    var myReq=++reqId;
    var info=el.querySelector('#icInfo');
    var dl=el.querySelector('#icDl');
    var oc=el.querySelector('#icOrig'),cc=el.querySelector('#icComp');
    var mime=fmtSel.value;
    var q=qsl.value/100;
    var quality=+qsl.value;
    var mw=+el.querySelector('#icMaxW').value;
    var srcIsGif=isGifFile(file);
    var useGif=(mime==='image/gif'&&srcIsGif);

    try{
      info.textContent='处理中...';
      var blob,w,h,sw,sh;

      if(useGif){
        var gifRes=await compressGif(file,mw,quality);
        if(myReq!==reqId)return;
        blob=gifRes.blob;w=gifRes.width;h=gifRes.height;sw=gifRes.srcWidth;sh=gifRes.srcHeight;
      }else{
        if(mime==='image/gif')mime='image/webp';
        var img=el._img;if(!img)throw new Error('图片尚未加载完成');
        sw=img.width;sh=img.height;w=sw;h=sh;
        if(mw>0&&w>mw){h=Math.round(h*mw/w);w=mw}
        drawPreview(oc,img,sw,sh);
        drawPreview(cc,img,w,h);
        blob=await canvasToBlob(cc,mime,q);
      }

      if(myReq!==reqId)return;

      var pct=((1-blob.size/(el._origSize||blob.size))*100).toFixed(1);
      var bigger=blob.size>=(el._origSize||blob.size);
      var color=bigger?'#e74c3c':'#27ae60';
      var warn='';
      if(bigger)warn=' ⚠️ 压缩后更大，建议降画质或改 WebP';
      if(srcIsGif&&!useGif&&fmtSel.value==='image/gif')warn=' 已自动回退为 WebP（输入不是 GIF）';
      info.innerHTML='原始: '+fmt(el._origSize||0)+' → 压缩: <span style="color:'+color+';font-weight:600">'+fmt(blob.size)+'</span> ('+pct+'% 减少)'+warn+'<br>尺寸: '+sw+'×'+sh+' → '+w+'×'+h;

      if(useGif){
        var pImg=new Image();
        pImg.onload=function(){drawPreview(cc,pImg,pImg.width,pImg.height);URL.revokeObjectURL(pImg.src)};
        pImg.src=URL.createObjectURL(blob);
      }else{
        var cImg=new Image();
        cImg.onload=function(){drawPreview(cc,cImg,cImg.width,cImg.height);URL.revokeObjectURL(cImg.src)};
        cImg.src=URL.createObjectURL(blob);
      }

      if(el._dlUrl)URL.revokeObjectURL(el._dlUrl);
      el._dlUrl=URL.createObjectURL(blob);
      var ext=mime==='image/webp'?'webp':mime==='image/png'?'png':mime==='image/gif'?'gif':'jpg';
      dl.href=el._dlUrl;dl.download='compressed.'+ext;dl.style.display='';
    }catch(err){
      info.innerHTML='<span style="color:#e74c3c">压缩失败：'+(err&&err.message?err.message:'未知错误')+'</span>';
    }
  }

  fmtSel.onchange=function(){
    var isPng=this.value==='image/png';
    qsl.disabled=isPng;qsl.style.opacity=isPng?0.4:1;
    if(el._file)compress();
  };

  el.querySelector('#icFile').onchange=function(){
    var f=this.files[0];if(!f)return;
    el._file=f;el._origSize=f.size;
    if(el._imgUrl)URL.revokeObjectURL(el._imgUrl);
    el._imgUrl=URL.createObjectURL(f);
    var img=new Image();
    img.onload=function(){
      el._img=img;
      var oc=el.querySelector('#icOrig');
      drawPreview(oc,img,img.width,img.height);
      compress();
    };
    img.src=el._imgUrl;
  };

  qsl.onchange=function(){if(el._file)compress()};
  el.querySelector('#icMaxW').onchange=function(){if(el._file)compress()};
  el._cleanup=function(){
    if(el._imgUrl)URL.revokeObjectURL(el._imgUrl);
    if(el._dlUrl)URL.revokeObjectURL(el._dlUrl);
  };
}},
{id:'json',name:'JSON 格式化',icon:'🔧',cat:'dev',desc:'美化 · 压缩 · 树形浏览 · 语法高亮',
html(){return'<style>'
+'.jt-tree{font-family:"Fira Code",monospace;font-size:.82em;line-height:1.8;padding:4px 0}'
+'.jt-tree details{margin-left:18px;border-left:1px solid var(--border-warm);padding-left:0}'
+'.jt-tree details>div{padding-left:12px}'
+'.jt-tree summary{cursor:pointer;list-style:none;position:relative;padding:2px 0 2px 20px;border-radius:var(--radius-xs);transition:background .15s}'
+'.jt-tree summary:hover{background:var(--bg-zebra)}'
+'.jt-tree summary::-webkit-details-marker{display:none}'
+'.jt-tree summary::before{content:"▸";position:absolute;left:4px;font-size:13px;color:var(--font-color-2);transition:transform .2s var(--ease-soft)}'
+'.jt-tree details[open]>summary::before{transform:rotate(90deg)}'
+'.jt-tree .jk{color:var(--accent);font-weight:500}'
+'.jt-tree .js{color:var(--series-accent)}'
+'.jt-tree .jn{color:var(--accent);font-weight:600}'
+'.jt-tree .jb{color:var(--font-color-3);font-style:italic}'
+'.jt-tree .jnull{color:var(--font-color-2);font-style:italic}'
+'.jt-tree .jbracket{color:var(--font-color-2);font-weight:600}'
+'.jt-tree .jcount{color:var(--font-color-3);font-size:.8em;opacity:.7;margin-left:6px;font-weight:400}'
+'.jt-tree .jleaf{padding:2px 0 2px 20px}'
+'.jt-tree .jclose{padding-left:20px;color:var(--font-color-2);font-weight:600}'
+'</style>'
+'<div class="t-lbl">输入 JSON</div><textarea class="t-ta" id="jsonIn" rows="6">{"name":"工具箱","tools":31,"nested":{"a":[1,2,3],"deep":{"x":true,"y":null}}}</textarea><div class="t-row" style="margin-top:6px"><button class="t-btn" id="jsonFmt">格式化</button><button class="t-btn t-btn-o" id="jsonTree">🌲 树形</button><button class="t-btn t-btn-o" id="jsonMin">压缩</button><button class="t-btn t-btn-o" id="jsonCopy">复制</button></div><div id="jsonOut" class="t-res" style="max-height:400px"></div>'},
init(el){
  const inp=el.querySelector('#jsonIn'),out=el.querySelector('#jsonOut');
  function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
  function color(s){s=esc(s);return s
    .replace(/("(?:\\.|[^"\\])*")\s*:/g,'<span class="jk">$1</span>:')
    .replace(/:(\s*)("(?:\\.|[^"\\])*")/g,':$1<span class="js">$2</span>')
    .replace(/:\s*(\d+\.?\d*)/g,': <span class="jn">$1</span>')
    .replace(/:\s*(true|false|null)/g,': <span class="jb">$1</span>')}
  /* ===== 树形渲染 ===== */
  function buildTree(val,key,depth){
    depth=depth||0;
    var prefix=key!==undefined?'<span class="jk">"'+esc(String(key))+'"</span>: ':'';
    if(val===null)return'<div class="jleaf">'+prefix+'<span class="jnull">null</span></div>';
    if(typeof val!=='object')return'<div class="jleaf">'+prefix+(typeof val==='string'?'<span class="js">"'+esc(val)+'"</span>':typeof val==='number'?'<span class="jn">'+val+'</span>':'<span class="jb">'+val+'</span>')+'</div>';
    var isArr=Array.isArray(val);var keys=Object.keys(val);var len=keys.length;
    var bracket=isArr?['[',']']:['{','}'];
    var label=prefix+'<span class="jbracket">'+bracket[0]+'</span><span class="jcount">'+len+(isArr?' items':' keys')+'</span>';
    var h='<details'+(depth<3?' open':'')+'><summary>'+label+'</summary>';
    keys.forEach(function(k){h+=buildTree(val[isArr?+k:k],isArr?+k:k,depth+1)});
    h+='<div class="jclose">'+bracket[1]+'</div></details>';return h;
  }
  el.querySelector('#jsonFmt').onclick=()=>{try{out.innerHTML='<pre style="margin:0;white-space:pre-wrap;word-break:break-all">'+color(JSON.stringify(JSON.parse(inp.value),null,2))+'</pre>'}catch(e){out.textContent='错误: '+e.message}};
  el.querySelector('#jsonTree').onclick=()=>{try{var obj=JSON.parse(inp.value);out.innerHTML='<div class="jt-tree">'+buildTree(obj)+'</div>'}catch(e){out.textContent='错误: '+e.message}};
  el.querySelector('#jsonMin').onclick=()=>{try{out.textContent=JSON.stringify(JSON.parse(inp.value))}catch(e){out.textContent='错误: '+e.message}};
  el.querySelector('#jsonCopy').onclick=()=>{navigator.clipboard.writeText(out.textContent);el.querySelector('#jsonCopy').textContent='✓';setTimeout(()=>el.querySelector('#jsonCopy').textContent='复制',1200)};
}},
{id:'jwt',name:'JWT 解码',icon:'🎫',cat:'dev',desc:'解析 Header/Payload · 时间转换',
html(){return'<div class="t-lbl">粘贴 JWT</div><textarea class="t-ta" id="jwtIn" rows="3">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IuW3peWFt-eosSIsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</textarea><button class="t-btn" id="jwtDec" style="margin-top:6px">解码</button><div id="jwtOut" style="margin-top:8px"></div>'},
init(el){
  el.querySelector('#jwtDec').onclick=()=>{try{
    const parts=el.querySelector('#jwtIn').value.trim().split('.');
    if(parts.length!==3)throw new Error('JWT 应有 3 段');
    function b64d(s){s=s.replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';var bin=atob(s),bytes=new Uint8Array(bin.length);for(var i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);return new TextDecoder().decode(bytes)}function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}const dec=s=>esc(JSON.stringify(JSON.parse(b64d(s)),null,2));
    let payload=JSON.parse(b64d(parts[1]));
    let extra='';
    if(payload.exp)extra+='\n⏰ 过期: '+new Date(payload.exp*1000).toLocaleString('zh-CN');
    if(payload.iat)extra+='\n📅 签发: '+new Date(payload.iat*1000).toLocaleString('zh-CN');
    if(payload.exp){const left=payload.exp*1000-Date.now();extra+='\n'+(left>0?'✅ 剩余 '+Math.floor(left/3600000)+'h '+Math.floor(left%3600000/60000)+'m':'❌ 已过期')}
    el.querySelector('#jwtOut').innerHTML='<div class="t-lbl">Header</div><pre class="jwt-part jwt-header">'+dec(parts[0])+'</pre><div class="t-lbl">Payload</div><pre class="jwt-part jwt-payload">'+dec(parts[1])+(extra?'\n───'+extra:'')+'</pre><div class="t-lbl">Signature</div><div class="jwt-part jwt-sig">'+parts[2]+'</div>';
  }catch(e){el.querySelector('#jwtOut').innerHTML='<div class="t-res" style="color:#f56c6c">'+e.message+'</div>'}}
}},
{id:'metronome',name:'节拍器',icon:'🥁',cat:'music',desc:'可调节拍 · 多种拍号',
html(){return'<div style="text-align:center"><div id="metBpm" style="font-size:3em;font-weight:700;color:#409eff;margin:12px 0">120</div><div style="color:#888;margin-bottom:8px">BPM</div><div class="t-row" style="justify-content:center"><span class="t-lbl">40</span><input type="range" id="metSpeed" min="40" max="240" value="120" style="width:200px"><span class="t-lbl">240</span></div><div class="t-row" style="justify-content:center;margin-top:8px"><select class="t-sel" id="metSig"><option value="4">4/4</option><option value="3">3/4</option><option value="2">2/4</option><option value="6">6/8</option></select></div><div id="metDots" style="margin:16px 0;display:flex;gap:10px;justify-content:center"></div><button class="t-btn" id="metToggle" style="width:120px;height:48px;border-radius:24px;font-size:1.1em">▶ 开始</button></div>'},
init(el){
  let running=false,timer=null,beat=0,actx=null;
  const beats=()=>+el.querySelector('#metSig').value;
  function renderDots(){const d=el.querySelector('#metDots');d.innerHTML='';for(let i=0;i<beats();i++){const c=document.createElement('span');c.className='metro-circle';d.appendChild(c)}}
  renderDots();
  el.querySelector('#metSig').onchange=()=>{renderDots();beat=0};
  el.querySelector('#metSpeed').oninput=function(){el.querySelector('#metBpm').textContent=this.value};
  function tick(){
    if(!actx)actx=new(window.AudioContext||window.webkitAudioContext)();
    const dots=el.querySelectorAll('.metro-circle');
    dots.forEach(d=>d.classList.remove('beat','accent'));
    const cur=dots[beat%beats()];
    if(cur)cur.classList.add(beat%beats()===0?'accent':'beat');
    const osc=actx.createOscillator();const g=actx.createGain();
    osc.connect(g);g.connect(actx.destination);
    osc.frequency.value=beat%beats()===0?880:660;
    g.gain.setValueAtTime(0.3,actx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001,actx.currentTime+0.08);
    osc.start(actx.currentTime);osc.stop(actx.currentTime+0.08);
    beat++;
  }
  el.querySelector('#metToggle').onclick=function(){
    if(running){running=false;clearInterval(timer);this.textContent='▶ 开始';this.classList.remove('t-btn-d');this.classList.add('t-btn')}
    else{running=true;beat=0;tick();timer=setInterval(tick,60000/(+el.querySelector('#metSpeed').value));this.textContent='⏸ 停止';this.classList.add('t-btn-d')}
  };
  el.querySelector('#metSpeed').addEventListener('input',()=>{if(running){clearInterval(timer);timer=setInterval(tick,60000/(+el.querySelector('#metSpeed').value))}});
  el._cleanup=()=>{clearInterval(timer);if(actx)try{actx.close()}catch(e){}};
}},
{id:'morse',name:'摩尔斯电码',icon:'📡',cat:'fun',desc:'双向实时互转 · 音频播放',
html(){return'<div class="t-split"><div><div class="t-lbl">📝 文字（输入即转换）</div><textarea class="t-ta" id="morText" rows="3" placeholder="输入文字，如 HELLO"></textarea></div><div><div class="t-lbl">📡 摩尔斯电码（输入即转换）</div><textarea class="t-ta" id="morCode" rows="3" placeholder="输入电码，空格分隔字母，/ 分隔单词"></textarea></div></div><div class="t-row" style="justify-content:center;margin-top:8px"><button class="t-btn t-btn-s" id="morPlay">🔊 播放电码音</button></div>'},
init(el){
  const txt=el.querySelector('#morText'),code=el.querySelector('#morCode');
  let lock=false;
  function encode(text){return text.toUpperCase().split('').map(c=>c===' '?'/':MORSE[c]||c).join(' ')}
  function decode(s){return s.split(' / ').map(word=>word.split(' ').map(c=>MORSE_REV[c]||c).join('')).join(' ')}
  txt.oninput=()=>{if(lock)return;lock=true;code.value=encode(txt.value);lock=false};
  code.oninput=()=>{if(lock)return;lock=true;txt.value=decode(code.value);lock=false};
  txt.value='HELLO WORLD';txt.oninput();
  el.querySelector('#morPlay').onclick=()=>{
    const c=code.value;if(!c)return;
    const actx=new(window.AudioContext||window.webkitAudioContext)();
    let t=actx.currentTime;const dot=0.08,dash=0.24,gap=0.08,lgap=0.16,wgap=0.4;
    for(const ch of c){
      if(ch==='.'){const o=actx.createOscillator();o.frequency.value=700;const g=actx.createGain();g.gain.value=0.3;o.connect(g).connect(actx.destination);o.start(t);o.stop(t+dot);t+=dot+gap}
      else if(ch==='-'){const o=actx.createOscillator();o.frequency.value=700;const g=actx.createGain();g.gain.value=0.3;o.connect(g).connect(actx.destination);o.start(t);o.stop(t+dash);t+=dash+gap}
      else if(ch===' ')t+=lgap;else if(ch==='/')t+=wgap;
    }
  };
}},
{id:'password',name:'密码生成',icon:'🔐',cat:'productivity',desc:'CSPRNG 真随机 · 可选字符集',
html(){return'<div style="font-size:.75em;color:#888;margin-bottom:10px">🔒 使用 <code>crypto.getRandomValues()</code>，基于操作系统熵源的密码学安全随机（CSPRNG）</div><div class="t-row"><span class="t-lbl">长度</span><input type="range" id="pwLen" min="4" max="64" value="16" style="width:150px"><span id="pwLenVal" style="font-size:.78em;color:#888">16</span></div><div style="display:flex;flex-wrap:wrap;gap:6px 14px;margin:8px 0"><label><input type="checkbox" id="pwUp" checked> A-Z</label><label><input type="checkbox" id="pwLo" checked> a-z</label><label><input type="checkbox" id="pwDig" checked> 0-9</label><label><input type="checkbox" id="pwSym" checked> !@#$...</label></div><div class="t-row" style="justify-content:center"><button class="t-btn t-btn-s" id="pwGen">🎲 生成密码</button></div><div style="margin-top:8px;font-family:monospace;font-size:1.1em;word-break:break-all;background:#252b3b;color:#7fefb0;padding:10px;border-radius:6px;min-height:30px;text-align:center;letter-spacing:1px" id="pwOut"></div><div style="margin-top:6px;display:flex;justify-content:space-between;align-items:center"><div id="pwStr" style="font-size:.78em;color:#888"></div><button class="t-btn t-btn-d" id="pwCopy" style="font-size:.75em">📋 复制</button></div>'},
init(el){
  var len=el.querySelector('#pwLen'),lv=el.querySelector('#pwLenVal');
  len.oninput=function(){lv.textContent=len.value};
  function gen(){
    var up='ABCDEFGHIJKLMNOPQRSTUVWXYZ',lo='abcdefghijklmnopqrstuvwxyz',dig='0123456789',sym='!@#$%^&*()_+-=[]{}|;:,.<>?';
    var sets=[];
    if(el.querySelector('#pwUp').checked)sets.push(up);if(el.querySelector('#pwLo').checked)sets.push(lo);
    if(el.querySelector('#pwDig').checked)sets.push(dig);if(el.querySelector('#pwSym').checked)sets.push(sym);
    if(!sets.length){el.querySelector('#pwOut').textContent='请至少选择一种字符';return}
    var pool=sets.join('');
    var n=+len.value;if(n<sets.length)n=sets.length;
    var arr=new Uint32Array(n+n);crypto.getRandomValues(arr);
    var chars=[];
    for(var i=0;i<sets.length;i++)chars.push(sets[i][arr[i]%sets[i].length]);
    for(var i=sets.length;i<n;i++)chars.push(pool[arr[i]%pool.length]);
    for(var i=chars.length-1;i>0;i--){var j=arr[n+i]%(i+1);var tmp=chars[i];chars[i]=chars[j];chars[j]=tmp}
    el.querySelector('#pwOut').textContent=chars.join('');
    var e=Math.log2(Math.pow(pool.length,n));
    var s='';if(e<40)s='⚠️ 弱 ('+e.toFixed(0)+' bit)';else if(e<60)s='🔶 中等 ('+e.toFixed(0)+' bit)';else if(e<80)s='✅ 强 ('+e.toFixed(0)+' bit)';else s='🛡️ 极强 ('+e.toFixed(0)+' bit)';
    el.querySelector('#pwStr').innerHTML=s;
  }
  el.querySelector('#pwGen').onclick=gen;
  el.querySelector('#pwCopy').onclick=function(){var t=el.querySelector('#pwOut').textContent;if(t)navigator.clipboard.writeText(t).then(function(){el.querySelector('#pwCopy').textContent='✓ 已复制';setTimeout(function(){el.querySelector('#pwCopy').textContent='📋 复制'},1500)})};
  gen();
}},
{id:'periodic',name:'元素周期表',icon:'⚛️',cat:'academic',desc:'交互式 · 详尽元素信息',
html(){
  let h='<div style="overflow-x:auto"><div class="pt-grid">';
  PT_GRID.forEach(row=>{
    row.forEach(z=>{
      if(z===0)h+='<div class="pt-empty"></div>';
      else if(z<0)h+='<div class="pt-marker">'+(z===-1?'La-Lu':z===-2?'Ac-Lr':z===-3?'镧系▶':'锕系▶')+'</div>';
      else{const bg=ptCatColor(z);h+='<div class="pt-cell" data-z="'+z+'" style="background:'+bg+'22;border-color:'+bg+'"><span class="n">'+z+'</span><span class="s">'+PT_SYM[z-1]+'</span></div>'}
    });
  });
  return h+'</div></div><div id="ptInfo" class="t-res" style="margin-top:8px;min-height:80px;line-height:1.8">👆 点击任意元素查看详细信息</div>';
},
init(el){
  el.querySelectorAll('.pt-cell[data-z]').forEach(c=>{
    c.onclick=()=>{
      const z=+c.dataset.z,i=z-1;
      const mp=PT_MP[i],bp=PT_BP[i],en=PT_EN[i],dens=PT_DENS[i];
      let info='<div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:2.2em;font-weight:700;color:'+ptCatColor(z)+'">'+PT_SYM[i]+'</span><div><b style="font-size:1.1em">'+PT_CN[i]+'</b> ('+PT_SYM[i]+')<br><span style="color:#888;font-size:.82em">原子序数 '+z+' · '+ptCatName(z)+'</span></div></div>';
      info+='<table style="width:100%;font-size:.82em;border-collapse:collapse">';
      info+='<tr><td style="padding:4px 8px;color:#888">相对原子质量</td><td><b>'+PT_MASS[i]+'</b></td>';
      info+='<td style="padding:4px 8px;color:#888">电子构型</td><td><b>'+PT_ECONF[i]+'</b></td></tr>';
      info+='<tr><td style="padding:4px 8px;color:#888">熔点</td><td>'+(mp===-9999?'未知':mp+' °C')+'</td>';
      info+='<td style="padding:4px 8px;color:#888">沸点</td><td>'+(bp===-9999?'未知':bp+' °C')+'</td></tr>';
      info+='<tr><td style="padding:4px 8px;color:#888">密度</td><td>'+(dens?dens+' g/cm³':'未知')+'</td>';
      info+='<td style="padding:4px 8px;color:#888">电负性</td><td>'+(en?en+' (Pauling)':'N/A')+'</td></tr>';
      info+='</table>';
      el.querySelector('#ptInfo').innerHTML=info;
    };
  });
}},
{id:'plotter',name:'函数绘图',icon:'📈',cat:'academic',desc:'高清 · 三种坐标 · 多参数 · 分段函数 · 描迹动画',
html(){return '<style>.pk{display:flex;flex-wrap:wrap;gap:3px;margin:4px 0;justify-content:center}.pk button{background:#f5f7fa;border:1px solid #e4e7ed;border-radius:4px;padding:2px 7px;cursor:pointer;font-size:.72em;font-family:inherit;transition:.15s;color:#606266}.pk button:hover{border-color:#409eff;color:#409eff;background:#ecf5ff}.psl-row{display:flex;gap:4px;align-items:center;margin-bottom:4px;background:#f8f9fa;border-radius:6px;padding:4px 8px}.psl-row select{border:1px solid #ddd;border-radius:4px;padding:2px 4px;font-size:.78em;background:#fff;font-family:inherit}.psl-row input[type=range]{flex:1;min-width:50px}@media (max-width:640px){.psl-row{flex-wrap:wrap;gap:6px}.psl-row select{width:60px}.psl-row input[type=range]{order:10;width:100%;min-width:100%}.psl-row .pvl{order:11}.psl-row .pani{order:12}.psl-row .pdel{order:13}}</style>'
+'<div class="t-row" style="gap:6px;flex-wrap:wrap;justify-content:center">'
+'<button class="t-btn t-btn-o plot-mode active" data-m="cart" style="font-weight:700">\u76f4\u89d2\u5750\u6807</button>'
+'<button class="t-btn t-btn-o plot-mode" data-m="polar">\u6781\u5750\u6807 r(\u03b8)</button>'
+'<button class="t-btn t-btn-o plot-mode" data-m="param">\u53c2\u6570\u65b9\u7a0b</button>'
+'</div>'
/* 函数键盘 */
+'<div class="pk" id="plotKb"></div>'
/* 直角坐标 */
+'<div id="plotCartIn">'
+'<div class="t-row"><input class="t-in plot-fin" id="plotExpr" placeholder="y = f(x)\uff0c\u5206\u53f7\u5206\u9694" value="sin(a*x); x^2; x>0 ? exp(-x) : 0" style="flex:1"><button class="t-btn" id="plotDraw">\u7ed8\u5236</button></div></div>'
/* 极坐标 */
+'<div id="plotPolarIn" style="display:none">'
+'<div class="t-row"><input class="t-in plot-fin" id="plotPolar" placeholder="r = f(\u03b8)\uff0c\u03b8\u7528t\uff0c\u5206\u53f7\u5206\u9694" value="2+cos(a*5*t); a+sin(2*t)" style="flex:1"><button class="t-btn" id="plotDrawP">\u7ed8\u5236</button></div></div>'
/* 参数方程 */
+'<div id="plotParamIn" style="display:none">'
+'<div class="t-row"><input class="t-in plot-fin" id="plotParam" placeholder="x(t), y(t) \u9017\u53f7\u5206\u9694\uff0c\u5206\u53f7\u591a\u7ec4" value="a*cos(t), a*sin(t); 2*cos(t)+cos(a*t), 2*sin(t)-sin(a*t)" style="flex:1"><button class="t-btn" id="plotDrawPm">\u7ed8\u5236</button></div>'
+'<div class="t-row" style="gap:6px"><span class="t-lbl" style="white-space:nowrap">t \u8303\u56f4</span><input class="t-in" id="plotTmin" value="-6.28" style="width:55px"><span>~</span><input class="t-in" id="plotTmax" value="6.28" style="width:55px">'
+'<label style="font-size:.78em;white-space:nowrap"><input type="checkbox" id="plotTrace"> \ud83d\udd8a\ufe0f \u63cf\u8ff9</label></div></div>'
/* 参数面板 */
+'<fieldset style="border:1px solid #e8e8e8;border-radius:8px;padding:6px 10px;margin:4px 0">'
+'<legend style="font-size:.72em;color:#888;padding:0 4px">\u53c2\u6570</legend>'
+'<div id="plotSliders"></div>'
+'<button class="t-btn t-btn-d" id="plotAddParam" style="font-size:.68em;padding:3px 10px;margin-top:2px">+ \u6dfb\u52a0</button></fieldset>'
/* 画布 */
+'<div style="position:relative;margin-top:4px"><canvas id="plotCv" style="width:100%;height:340px;background:#fafafa;border-radius:8px;display:block;cursor:crosshair;border:1px solid #eee"></canvas>'
+'<div id="plotCoord" style="position:absolute;top:6px;right:8px;font-size:.72em;color:#888;pointer-events:none"></div></div>'
+'<div class="t-row" style="gap:8px;margin-top:4px;justify-content:center">'
+'<button class="t-btn t-btn-d" id="plotReset" style="font-size:.72em">\u21ba \u590d\u4f4d</button>'
+'<button class="t-btn t-btn-d" id="plotExport" style="font-size:.72em">\ud83d\udce5 PNG</button></div>'
+'<div style="font-size:.65em;color:#bbb;margin-top:2px;text-align:center">^ = \u5e42 \u00b7 \u5206\u6bb5: x>0?f(x):g(x) \u00b7 \u6eda\u8f6e\u7f29\u653e \u00b7 \u62d6\u62fd\u5e73\u79fb \u00b7 \u52a8\u753b\u6216\u5927\u91cf\u66f2\u7ebf\u53ef\u80fd\u5361\u987f</div>'},
init(el){
  var cv=el.querySelector('#plotCv'),ctx=cv.getContext('2d');
  var dpr=window.devicePixelRatio||1;
  var scale=50,ox=0,oy=0,W=0,H=0;
  var colors=['#409eff','#f56c6c','#67c23a','#e6a23c','#9b59b6','#00bcd4','#ff5722','#795548'];
  var S={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,atan2:Math.atan2,sinh:Math.sinh,cosh:Math.cosh,tanh:Math.tanh,exp:Math.exp,log:Math.log,ln:Math.log,log2:Math.log2,log10:Math.log10,sqrt:Math.sqrt,abs:Math.abs,pow:Math.pow,ceil:Math.ceil,floor:Math.floor,sign:Math.sign,max:Math.max,min:Math.min,PI:Math.PI,E:Math.E,step:function(v){return v>=0?1:0},rect:function(v){return Math.abs(v)<=0.5?1:0},clamp:function(v,lo,hi){return Math.max(lo,Math.min(hi,v))}};
  var curMode='cart',traceId=null,animId=null;
  /* 安全参数名白名单 */
  var SAFE_NAMES='a,b,c,d,f,g,h,k,m,n,p,q,r,s,u,v,w'.split(',');

  /* ===== 函数键盘 ===== */
  var kbItems=['sin(','cos(','tan(','exp(','log(','sqrt(','abs(','PI','x','t','^','(',')','?',':','+','-','*','/','asin(','acos(','atan(','sinh(','cosh(','ln(','log10(','sign(','step(','clamp(','max(','min(','floor(','ceil('];
  var activeInput=el.querySelector('#plotExpr');
  var kbDiv=el.querySelector('#plotKb');
  kbItems.forEach(function(item){
    var btn=document.createElement('button');btn.textContent=item;
    btn.onclick=function(){
      var inp=activeInput;if(!inp)return;
      var s=inp.selectionStart||0,e=inp.selectionEnd||0;
      inp.value=inp.value.substring(0,s)+item+inp.value.substring(e);
      inp.focus();var pos=s+item.length;inp.setSelectionRange(pos,pos);
    };
    kbDiv.appendChild(btn);
  });
  el.querySelectorAll('.plot-fin').forEach(function(inp){inp.onfocus=function(){activeInput=inp}});

  /* ===== 参数管理 ===== */
  var params=[{name:'a',min:-5,max:5,step:0.05,val:1}];
  var slidersEl=el.querySelector('#plotSliders');
  function usedNames(){var u={};params.forEach(function(p){u[p.name]=1});return u}
  function renderParams(){
    _fnCache={};
    var html='';
    for(var i=0;i<params.length;i++){
      var p=params[i];
      var opts='';SAFE_NAMES.forEach(function(n){opts+='<option value="'+n+'"'+(n===p.name?' selected':'')+'>'+n+'</option>'});
      html+='<div class="psl-row" data-pi="'+i+'">'
       +'<select class="pn" title="\u53c2\u6570\u540d">'+opts+'</select>'
       +'<input class="t-in pmn" value="'+p.min+'" style="width:36px;padding:2px 4px;font-size:.75em" title="min">'
       +'<input type="range" class="psl" min="'+p.min+'" max="'+p.max+'" step="'+p.step+'" value="'+p.val+'">'
       +'<input class="t-in pmx" value="'+p.max+'" style="width:36px;padding:2px 4px;font-size:.75em" title="max">'
       +'<span class="pvl" style="font-size:.75em;color:#555;min-width:36px;text-align:center;font-family:monospace">'+p.val+'</span>'
       +'<label style="font-size:.68em;white-space:nowrap"><input type="checkbox" class="pani"> \u25b6</label>'
       +(params.length>1?'<button class="pdel" style="background:none;border:none;color:#f56c6c;cursor:pointer;font-size:.9em;padding:0 2px">\u00d7</button>':'')
       +'</div>';
    }
    slidersEl.innerHTML=html;
    slidersEl.querySelectorAll('[data-pi]').forEach(function(row){
      var idx=+row.dataset.pi;
      row.querySelector('.psl').oninput=function(){params[idx].val=+this.value;row.querySelector('.pvl').textContent=(+this.value).toFixed(2);draw()};
      row.querySelector('.pn').onchange=function(){params[idx].name=this.value;draw()};
      row.querySelector('.pmn').onchange=function(){var v=+this.value;params[idx].min=v;row.querySelector('.psl').min=v;draw()};
      row.querySelector('.pmx').onchange=function(){var v=+this.value;params[idx].max=v;row.querySelector('.psl').max=v;draw()};
      row.querySelector('.pani').onchange=function(){if(this.checked)startAnim();else stopAnim()};
      var del=row.querySelector('.pdel');if(del)del.onclick=function(){params.splice(idx,1);renderParams();draw()};
    });
  }
  renderParams();
  el.querySelector('#plotAddParam').onclick=function(){
    var u=usedNames();var nm='b';
    for(var i=0;i<SAFE_NAMES.length;i++){if(!u[SAFE_NAMES[i]]){nm=SAFE_NAMES[i];break}}
    params.push({name:nm,min:-5,max:5,step:0.05,val:1});renderParams();
  };

  /* ===== 动画 ===== */
  function startAnim(){
    if(animId)return;
    function loop(){
      var anyActive=false;
      slidersEl.querySelectorAll('[data-pi]').forEach(function(row){
        var idx=+row.dataset.pi,cb=row.querySelector('.pani');
        if(!cb||!cb.checked)return;anyActive=true;
        var p=params[idx];p.val+=p.step*2;if(p.val>p.max)p.val=p.min;
        row.querySelector('.psl').value=p.val;row.querySelector('.pvl').textContent=p.val.toFixed(2);
      });
      if(!anyActive){animId=null;return}
      draw();animId=requestAnimationFrame(loop);
    }
    animId=requestAnimationFrame(loop);
  }
  function stopAnim(){if(animId){cancelAnimationFrame(animId);animId=null}}

  /* ===== 核心 ===== */
  function resize(){W=cv.offsetWidth;H=cv.offsetHeight;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);if(!ox&&!oy){ox=W/2;oy=H/2}}
  resize();

  function preprocess(expr){return expr.replace(/\^/g,'**')}

  var _fnCache={};
  function safeEval(expr,vars){
    try{
      var fn=_fnCache[expr];
      if(!fn){var keys=Object.keys(S).concat(Object.keys(vars));fn=_fnCache[expr]=Function.apply(null,keys.concat(['return '+preprocess(expr)]))}
      return fn.apply(null,Object.values(S).concat(Object.values(vars)));
    }catch(e){return NaN}
  }

  function getParamVals(){var v={};params.forEach(function(p){v[p.name]=p.val});return v}

  function adaptGrid(s){var g=[0.1,0.2,0.5,1,2,5,10,20,50,100,200,500,1000];for(var i=0;i<g.length;i++){if(g[i]*s>35)return g[i]}return 1000}

  function drawGrid(){
    var gs=adaptGrid(scale);
    ctx.strokeStyle='#f0f0f0';ctx.lineWidth=.6;
    var x0=Math.floor(-ox/(gs*scale)),x1=Math.ceil((W-ox)/(gs*scale));
    var y0=Math.floor(-(H-oy)/(gs*scale)),y1=Math.ceil(oy/(gs*scale));
    for(var i=x0;i<=x1;i++){var px=ox+i*gs*scale;ctx.beginPath();ctx.moveTo(px,0);ctx.lineTo(px,H);ctx.stroke()}
    for(var i=y0;i<=y1;i++){var py=oy-i*gs*scale;ctx.beginPath();ctx.moveTo(0,py);ctx.lineTo(W,py);ctx.stroke()}
    ctx.strokeStyle='#bbb';ctx.lineWidth=1.2;
    ctx.beginPath();ctx.moveTo(0,oy);ctx.lineTo(W,oy);ctx.stroke();
    ctx.beginPath();ctx.moveTo(ox,0);ctx.lineTo(ox,H);ctx.stroke();
    ctx.fillStyle='#aaa';ctx.font='10px sans-serif';ctx.textAlign='center';
    for(var i=x0;i<=x1;i++){if(i===0)continue;var v=i*gs;var lbl=gs<1?v.toFixed(Math.max(0,-Math.floor(Math.log10(gs)))):String(v);ctx.fillText(lbl,ox+v*scale,oy+13)}
    ctx.textAlign='right';
    for(var i=y0;i<=y1;i++){if(i===0)continue;var v=i*gs;var lbl=gs<1?v.toFixed(Math.max(0,-Math.floor(Math.log10(gs)))):String(v);ctx.fillText(lbl,ox-4,oy-v*scale+4)}
  }

  function drawCart(){
    var pv=getParamVals();
    var exprs=el.querySelector('#plotExpr').value.split(';').map(function(s){return s.trim()}).filter(Boolean);
    ctx.clearRect(0,0,W,H);drawGrid();
    exprs.forEach(function(expr,idx){
      ctx.strokeStyle=colors[idx%colors.length];ctx.lineWidth=2;ctx.beginPath();var first=true;var prevY=0;
      for(var px=0;px<W;px+=0.5){
        var x=(px-ox)/scale;var vars=Object.assign({x:x,t:x},pv);
        var y=safeEval(expr,vars);
        if(isNaN(y)||!isFinite(y)||Math.abs(y)>1e6){first=true;continue}
        var py=oy-y*scale;
        if(!first&&Math.abs(py-prevY)>H*2){first=true}
        if(first){ctx.moveTo(px,py);first=false}else ctx.lineTo(px,py);prevY=py;
      }
      ctx.stroke();
      ctx.fillStyle=colors[idx%colors.length];ctx.font='11px sans-serif';ctx.textAlign='left';
      ctx.fillText('y='+expr,8,16+idx*16);
    });
  }

  function drawPolar(){
    var pv=getParamVals();
    var exprs=el.querySelector('#plotPolar').value.split(';').map(function(s){return s.trim()}).filter(Boolean);
    ctx.clearRect(0,0,W,H);drawGrid();
    exprs.forEach(function(expr,idx){
      ctx.strokeStyle=colors[idx%colors.length];ctx.lineWidth=2;ctx.beginPath();var first=true;
      for(var i=0;i<=2000;i++){var t=i/2000*4*Math.PI;var vars=Object.assign({t:t,x:t},pv);
        var r=safeEval(expr,vars);if(isNaN(r)||!isFinite(r))continue;
        var px=ox+r*Math.cos(t)*scale,py=oy-r*Math.sin(t)*scale;
        if(first){ctx.moveTo(px,py);first=false}else ctx.lineTo(px,py);
      }
      ctx.stroke();
      ctx.fillStyle=colors[idx%colors.length];ctx.font='11px sans-serif';ctx.textAlign='left';
      ctx.fillText('r='+expr,8,16+idx*16);
    });
  }

  function drawParam(traceProgress){
    var pv=getParamVals();
    var tmin=parseFloat(el.querySelector('#plotTmin').value)||(-2*Math.PI);
    var tmax=parseFloat(el.querySelector('#plotTmax').value)||(2*Math.PI);
    var exprs=el.querySelector('#plotParam').value.split(';').map(function(s){return s.trim()}).filter(Boolean);
    ctx.clearRect(0,0,W,H);drawGrid();
    var N=2000;var maxI=typeof traceProgress==='number'?Math.floor(traceProgress*N):N;
    exprs.forEach(function(pair,idx){
      var parts=pair.split(',');if(parts.length<2)return;
      var exprX=parts[0].trim(),exprY=parts.slice(1).join(',').trim();
      ctx.strokeStyle=colors[idx%colors.length];ctx.lineWidth=2;ctx.beginPath();var first=true;
      for(var i=0;i<=maxI;i++){var t=tmin+i/N*(tmax-tmin);var vars=Object.assign({t:t,x:t},pv);
        var xv=safeEval(exprX,vars),yv=safeEval(exprY,vars);
        if(isNaN(xv)||isNaN(yv)||!isFinite(xv)||!isFinite(yv))continue;
        var px=ox+xv*scale,py=oy-yv*scale;
        if(first){ctx.moveTo(px,py);first=false}else ctx.lineTo(px,py);
      }
      ctx.stroke();
      if(typeof traceProgress==='number'&&maxI>0){
        var tEnd=tmin+maxI/N*(tmax-tmin);var vars2=Object.assign({t:tEnd,x:tEnd},pv);
        var hx=safeEval(exprX,vars2),hy=safeEval(exprY,vars2);
        if(isFinite(hx)&&isFinite(hy)){ctx.beginPath();ctx.arc(ox+hx*scale,oy-hy*scale,5,0,Math.PI*2);ctx.fillStyle=colors[idx%colors.length];ctx.fill()}
      }
      ctx.fillStyle=colors[idx%colors.length];ctx.font='11px sans-serif';ctx.textAlign='left';
      ctx.fillText(exprX+', '+exprY,8,16+idx*16);
    });
  }

  function draw(){if(curMode==='cart')drawCart();else if(curMode==='polar')drawPolar();else drawParam()}

  /* 描迹 */
  var traceCb=el.querySelector('#plotTrace');
  function startTrace(){stopTrace();var p=0;function loop(){p+=0.003;if(p>1)p=0;drawParam(p);traceId=requestAnimationFrame(loop)};traceId=requestAnimationFrame(loop)}
  function stopTrace(){if(traceId){cancelAnimationFrame(traceId);traceId=null}}
  traceCb.onchange=function(){if(this.checked&&curMode==='param')startTrace();else{stopTrace();draw()}};

  /* Mode */
  el.querySelectorAll('.plot-mode').forEach(function(b){b.onclick=function(){
    el.querySelectorAll('.plot-mode').forEach(function(x){x.classList.remove('active');x.style.fontWeight=''});
    this.classList.add('active');this.style.fontWeight='700';curMode=this.dataset.m;
    el.querySelector('#plotCartIn').style.display=curMode==='cart'?'':'none';
    el.querySelector('#plotPolarIn').style.display=curMode==='polar'?'':'none';
    el.querySelector('#plotParamIn').style.display=curMode==='param'?'':'none';
    /* 切换时更新 activeInput */
    if(curMode==='cart')activeInput=el.querySelector('#plotExpr');
    else if(curMode==='polar')activeInput=el.querySelector('#plotPolar');
    else activeInput=el.querySelector('#plotParam');
    stopTrace();if(curMode==='param'&&traceCb.checked)startTrace();else draw();
  }});

  /* Draw */
  el.querySelector('#plotDraw').onclick=draw;
  el.querySelector('#plotDrawP').onclick=draw;
  el.querySelector('#plotDrawPm').onclick=function(){if(traceCb.checked)startTrace();else draw()};
  el.querySelector('#plotExpr').onkeydown=function(e){if(e.key==='Enter')draw()};
  el.querySelector('#plotPolar').onkeydown=function(e){if(e.key==='Enter')draw()};
  el.querySelector('#plotParam').onkeydown=function(e){if(e.key==='Enter'){if(traceCb.checked)startTrace();else draw()}};

  /* Mouse */
  cv.onmousemove=function(e){var rect=cv.getBoundingClientRect();var mx=e.clientX-rect.left,my=e.clientY-rect.top;el.querySelector('#plotCoord').textContent='('+((mx-ox)/scale).toFixed(3)+', '+(-(my-oy)/scale).toFixed(3)+')'};
  cv.onmouseleave=function(){el.querySelector('#plotCoord').textContent=''};

  /* Zoom+Pan */
  cv.addEventListener('wheel',function(e){e.preventDefault();var rect=cv.getBoundingClientRect();var mx=e.clientX-rect.left,my=e.clientY-rect.top;var f=e.deltaY>0?0.9:1.1;ox=mx-(mx-ox)*f;oy=my-(my-oy)*f;scale*=f;draw()},{passive:false});
  var dragging=false,ddx=0,ddy=0;
  cv.onmousedown=function(e){dragging=true;ddx=e.clientX-ox;ddy=e.clientY-oy;cv.style.cursor='grabbing'};
  cv.addEventListener('mousemove',function(e){if(dragging){ox=e.clientX-ddx;oy=e.clientY-ddy;draw()}});
  cv.onmouseup=function(){dragging=false;cv.style.cursor='crosshair'};
  cv.onmouseleave=function(){dragging=false;cv.style.cursor='crosshair';el.querySelector('#plotCoord').textContent=''};
  cv.addEventListener('touchstart',function(e){if(e.touches.length===1){var t=e.touches[0];dragging=true;ddx=t.clientX-ox;ddy=t.clientY-oy}},{passive:true});
  cv.addEventListener('touchmove',function(e){if(dragging&&e.touches.length===1){e.preventDefault();var t=e.touches[0];ox=t.clientX-ddx;oy=t.clientY-ddy;draw()}},{passive:false});
  cv.addEventListener('touchend',function(){dragging=false},{passive:true});

  el.querySelector('#plotReset').onclick=function(){scale=50;ox=W/2;oy=H/2;params=[{name:'a',min:-5,max:5,step:0.05,val:1}];renderParams();draw()};
  el.querySelector('#plotExport').onclick=function(){var link=document.createElement('a');link.download='plot.png';link.href=cv.toDataURL('image/png');link.click()};
  var ro=new ResizeObserver(function(){resize();draw()});ro.observe(cv);
  draw();
  el._cleanup=function(){stopAnim();stopTrace();ro.disconnect()};
}},
{id:'qrcode',name:'QR 生成器',icon:'📱',cat:'productivity',desc:'样式 · 颜色 · 中心图标',
html(){return'<div class="t-lbl">输入文本或链接</div><input class="t-in" id="qrIn" value="https://example.com"><div class="t-row" style="margin-top:8px"><label class="t-lbl">前景</label><input type="color" id="qrFg" value="#000000"><label class="t-lbl">背景</label><input type="color" id="qrBg" value="#ffffff"><label class="t-lbl">Emoji</label><input class="t-in" id="qrEmoji" placeholder="如 😀" style="width:60px"></div><div class="t-row"><span class="t-lbl">样式:</span><span class="qr-shape active" data-s="square">■ 方块</span><span class="qr-shape" data-s="round">● 圆点</span><span class="qr-shape" data-s="diamond">◆ 菱形</span></div><div class="t-row"><span class="t-lbl">容错:</span><select class="t-sel" id="qrLevel"><option value="H" selected>高 (H 30%)</option><option value="M">中 (M 15%)</option><option value="L">低 (L 7%)</option></select></div><div style="text-align:center;margin-top:12px"><canvas id="qrCv"></canvas></div>'},
async init(el){
  await loadJS('https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js');
  let style='square';
  el.querySelectorAll('.qr-shape').forEach(s=>{s.onclick=()=>{el.querySelectorAll('.qr-shape').forEach(x=>x.classList.remove('active'));s.classList.add('active');style=s.dataset.s;render()}});
  function render(){
    const text=el.querySelector('#qrIn').value;if(!text){var c0=el.querySelector('#qrCv');c0.getContext('2d').clearRect(0,0,c0.width,c0.height);return}
    const fg=el.querySelector('#qrFg').value,bg=el.querySelector('#qrBg').value,emoji=el.querySelector('#qrEmoji').value.trim();
    const lvl=el.querySelector('#qrLevel').value;
    const qr=qrcode(0,lvl);qr.addData(text);qr.make();
    const count=qr.getModuleCount(),size=6,margin=4,total=(count+margin*2)*size;
    const cv=el.querySelector('#qrCv'),ctx=cv.getContext('2d');
    cv.width=cv.height=total;ctx.fillStyle=bg;ctx.fillRect(0,0,total,total);
    for(let r=0;r<count;r++)for(let c=0;c<count;c++){
      if(!qr.isDark(r,c))continue;
      const x=(c+margin)*size,y=(r+margin)*size;
      ctx.fillStyle=fg;
      if(style==='round'){ctx.beginPath();ctx.arc(x+size/2,y+size/2,size/2-.5,0,Math.PI*2);ctx.fill()}
      else if(style==='diamond'){ctx.beginPath();ctx.moveTo(x+size/2,y);ctx.lineTo(x+size,y+size/2);ctx.lineTo(x+size/2,y+size);ctx.lineTo(x,y+size/2);ctx.closePath();ctx.fill()}
      else ctx.fillRect(x,y,size,size);
    }
    if(emoji){const es=size*5;ctx.font=es+'px serif';ctx.textAlign='center';ctx.textBaseline='middle';const cx=total/2,cy=total/2;ctx.fillStyle=bg;ctx.beginPath();ctx.arc(cx,cy,es*.6,0,Math.PI*2);ctx.fill();ctx.fillText(emoji,cx,cy)}
  }
  ['qrIn','qrFg','qrBg','qrEmoji','qrLevel'].forEach(id=>el.querySelector('#'+id).addEventListener('input',render));
  render();
}},
{id:'radix',name:'进制转换',icon:'🔢',cat:'dev',desc:'二/八/十/十六进制实时联动',
html(){return'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div><div class="t-lbl">二进制 BIN</div><input class="t-in rx" id="rxBin" data-base="2" placeholder="如 11111111" style="font-family:monospace"></div><div><div class="t-lbl">八进制 OCT</div><input class="t-in rx" id="rxOct" data-base="8" placeholder="如 377" style="font-family:monospace"></div><div><div class="t-lbl">十进制 DEC</div><input class="t-in rx" id="rxDec" data-base="10" value="255" placeholder="如 255" style="font-family:monospace"></div><div><div class="t-lbl">十六进制 HEX</div><input class="t-in rx" id="rxHex" data-base="16" placeholder="如 FF" style="font-family:monospace"></div></div><div style="font-size:.72em;color:#999;margin-top:6px;text-align:center">在任意框内输入，其余三个自动联动转换</div>'},
init(el){
  const fields=el.querySelectorAll('.rx');
  function sync(src){
    const base=+src.dataset.base,v=src.value.trim();
    if(!v){fields.forEach(f=>{if(f!==src)f.value=''});return}
    const n=parseInt(v,base);
    if(isNaN(n)){return}
    fields.forEach(f=>{if(f!==src)f.value=n.toString(+f.dataset.base).toUpperCase()});
  }
  fields.forEach(f=>f.addEventListener('input',()=>sync(f)));
  sync(el.querySelector('#rxDec'));
}},
{id:'regex',name:'正则测试',icon:'🔍',cat:'dev',desc:'实时匹配 · 捕获组高亮',
html(){return'<div class="t-row"><input class="t-in" id="regPat" placeholder="正则表达式" value="(\\w+)@(\\w+\\.\\w+)" style="flex:1"><input class="t-in" id="regFlag" value="gi" style="width:60px"></div><div class="t-lbl">测试文本</div><textarea class="t-ta" id="regText" rows="4">联系 alice@test.com 或 bob@example.org 获取信息</textarea><div class="t-lbl" style="margin-top:6px">匹配结果</div><div id="regOut" style="padding:12px;background:#f8f9fa;border-radius:8px;line-height:2;min-height:40px"></div><div id="regInfo" style="font-size:.78em;color:#888;margin-top:4px"></div>'},
init(el){
  function run(){try{
    const re=new RegExp(el.querySelector('#regPat').value,el.querySelector('#regFlag').value);
    const text=el.querySelector('#regText').value;
    let html='',last=0,count=0,groups=[];
    if(re.global){let m;while((m=re.exec(text))!==null){
      if(m.index>last)html+=text.slice(last,m.index).replace(/</g,'&lt;');
      html+='<mark style="background:#ffd700;padding:1px 2px;border-radius:2px">'+m[0].replace(/</g,'&lt;')+'</mark>';
      if(m.length>1)groups.push('匹配'+(count+1)+': ['+m.slice(1).map(function(g){return g==null?'undefined':String(g).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}).join(', ')+']');
      last=m.index+m[0].length;count++;if(m[0].length===0)re.lastIndex++;if(count>200)break;
    }}else{const m=re.exec(text);if(m){html=text.slice(0,m.index).replace(/</g,'&lt;')+'<mark style="background:#ffd700;padding:1px 2px;border-radius:2px">'+m[0].replace(/</g,'&lt;')+'</mark>'+text.slice(m.index+m[0].length).replace(/</g,'&lt;');count=1;if(m.length>1)groups.push('捕获: ['+m.slice(1).map(function(g){return g==null?'undefined':String(g).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}).join(', ')+']')}else html=text.replace(/</g,'&lt;')}
    if(last<text.length&&re.global)html+=text.slice(last).replace(/</g,'&lt;');
    el.querySelector('#regOut').innerHTML=html||'<span style="color:#999">无匹配</span>';
    el.querySelector('#regInfo').innerHTML=count+' 个匹配'+(groups.length?'<br>'+groups.join('<br>'):'');
  }catch(e){el.querySelector('#regOut').innerHTML='<span style="color:#f56c6c">'+e.message+'</span>'}}
  ['regPat','regFlag','regText'].forEach(id=>el.querySelector('#'+id).oninput=run);run();
}},
{id:'texttools',name:'文本处理',icon:'📝',cat:'dev',desc:'行排序 · 去重 · 查找替换 · 前后缀 · 命名风格',
html(){return '<div class="t-row" style="justify-content:center;gap:8px;margin-bottom:4px"><label class="t-btn t-btn-s" style="cursor:pointer">\ud83d\udcc2 \u6253\u5f00\u6587\u4ef6<input type="file" id="ttFile" accept=".txt,.csv,.tsv,.md,.log,.json,.xml,.yaml,.yml,.ini,.cfg,.conf,.sh,.bat,.py,.js,.ts,.html,.css,.sql,.c,.cpp,.h,.java,.go,.rs,.rb,.php,.pl,.r,.m,.tex,.bib" style="display:none"></label></div>'
+'<textarea class="t-ta" id="ttIn" rows="6" placeholder="在此粘贴文本（按行处理）… 或点击上方按钮上传文件"></textarea>'
+'<div style="font-size:.78em;color:#888;text-align:center;margin:4px 0" id="ttStats"></div>'
/* 行操作 */
+'<fieldset style="border:1px solid #e8e8e8;border-radius:8px;padding:6px 10px;margin:4px 0"><legend style="font-size:.72em;color:#888;padding:0 4px">\ud83d\udcc4 \u884c\u64cd\u4f5c</legend>'
+'<div style="display:flex;flex-wrap:wrap;gap:4px">'
+'<button class="t-btn t-btn-o tt-op" data-op="sort" style="font-size:.75em">\u2191 \u6392\u5e8f</button>'
+'<button class="t-btn t-btn-o tt-op" data-op="rsort" style="font-size:.75em">\u2193 \u5012\u5e8f</button>'
+'<button class="t-btn t-btn-o tt-op" data-op="dedup" style="font-size:.75em">\u2716 \u53bb\u91cd</button>'
+'<button class="t-btn t-btn-o tt-op" data-op="trim" style="font-size:.75em">\u2702 \u53bb\u7a7a\u884c</button>'
+'<button class="t-btn t-btn-o tt-op" data-op="reverse" style="font-size:.75em">\u21c5 \u53cd\u8f6c\u884c\u5e8f</button>'
+'<button class="t-btn t-btn-o tt-op" data-op="number" style="font-size:.75em"># \u52a0\u884c\u53f7</button>'
+'<button class="t-btn t-btn-o tt-op" data-op="shuffle" style="font-size:.75em">\ud83c\udfb2 \u6253\u4e71</button>'
+'</div></fieldset>'
/* 文本转换 */
+'<fieldset style="border:1px solid #e8e8e8;border-radius:8px;padding:6px 10px;margin:4px 0"><legend style="font-size:.72em;color:#888;padding:0 4px">\ud83d\udd24 \u6587\u672c\u8f6c\u6362</legend>'
+'<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:6px">'
+'<button class="t-btn t-btn-o tt-op" data-op="upper" style="font-size:.75em">ABC \u5927\u5199</button>'
+'<button class="t-btn t-btn-o tt-op" data-op="lower" style="font-size:.75em">abc \u5c0f\u5199</button>'
+'<button class="t-btn t-btn-o tt-op" data-op="snake" style="font-size:.75em">snake_case</button>'
+'<button class="t-btn t-btn-o tt-op" data-op="camel" style="font-size:.75em">camelCase</button>'
+'<button class="t-btn t-btn-o tt-op" data-op="kebab" style="font-size:.75em">kebab-case</button>'
+'<button class="t-btn t-btn-o tt-op" data-op="title" style="font-size:.75em">Title Case</button>'
+'</div>'
+'<div class="t-row" style="gap:4px"><input class="t-in" id="ttPrefix" placeholder="\u524d\u7f00" style="width:80px"><input class="t-in" id="ttSuffix" placeholder="\u540e\u7f00" style="width:80px"><button class="t-btn t-btn-o tt-op" data-op="wrap" style="font-size:.75em">\u2795 \u52a0\u524d\u540e\u7f00</button></div>'
+'</fieldset>'
/* 查找替换 */
+'<fieldset style="border:1px solid #e8e8e8;border-radius:8px;padding:6px 10px;margin:4px 0"><legend style="font-size:.72em;color:#888;padding:0 4px">\ud83d\udd0d \u67e5\u627e\u66ff\u6362</legend>'
+'<div class="t-row" style="gap:4px"><input class="t-in" id="ttFind" placeholder="\u67e5\u627e" style="flex:1"><input class="t-in" id="ttRepl" placeholder="\u66ff\u6362\u4e3a" style="flex:1">'
+'<label style="font-size:.72em;white-space:nowrap"><input type="checkbox" id="ttRegex"> \u6b63\u5219</label>'
+'<button class="t-btn t-btn-o tt-op" data-op="replace" style="font-size:.75em">\u5168\u90e8\u66ff\u6362</button></div>'
+'</fieldset>'
/* 输出 */
+'<textarea class="t-ta" id="ttOut" rows="6" readonly style="background:#f8f9fa"></textarea>'
+'<div class="t-row" style="justify-content:center;gap:8px;margin-top:4px">'
+'<button class="t-btn" id="ttCopy" style="font-size:.75em">\ud83d\udccb \u590d\u5236\u7ed3\u679c</button>'
+'<button class="t-btn t-btn-d" id="ttApply" style="font-size:.75em">\u21a9 \u5e94\u7528\u5230\u8f93\u5165</button></div>'},
init(el){
  var q=function(s){return el.querySelector(s)};
  function stats(){var t=q('#ttIn').value;
    var chars=t.length,words=t.trim()?t.trim().split(/\s+/).length:0,lines=t?t.split('\n').length:0;
    var cn=(t.match(/[\u4e00-\u9fff]/g)||[]).length;
    q('#ttStats').textContent='\u5b57\u7b26: '+chars+' | \u8bcd: '+words+' | \u884c: '+lines+' | \u4e2d\u6587: '+cn;
  }
  q('#ttIn').oninput=stats;stats();
  q('#ttFile').onchange=function(){var f=this.files[0];if(!f)return;var r=new FileReader();r.onload=function(){q('#ttIn').value=r.result;stats()};r.readAsText(f)};
  el.querySelectorAll('.tt-op').forEach(function(btn){btn.onclick=function(){
    var t=q('#ttIn').value,lines=t.split('\n'),out='';
    switch(this.dataset.op){
      case'sort':out=lines.slice().sort(function(a,b){return a.localeCompare(b,'zh')}).join('\n');break;
      case'rsort':out=lines.slice().sort(function(a,b){return b.localeCompare(a,'zh')}).join('\n');break;
      case'dedup':var s=[];var seen={};lines.forEach(function(l){if(!seen[l]){seen[l]=1;s.push(l)}});out=s.join('\n');break;
      case'trim':out=lines.filter(function(l){return l.trim()}).join('\n');break;
      case'upper':out=t.toUpperCase();break;
      case'lower':out=t.toLowerCase();break;
      case'reverse':out=lines.slice().reverse().join('\n');break;
      case'number':out=lines.map(function(l,i){return(i+1)+'. '+l}).join('\n');break;
      case'shuffle':var arr=lines.slice();for(var i=arr.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=arr[i];arr[i]=arr[j];arr[j]=tmp;}out=arr.join('\n');break;
      case'snake':out=lines.map(function(l){return l.replace(/([a-z])([A-Z])/g,'$1_$2').replace(/[\s\-]+/g,'_').toLowerCase()}).join('\n');break;
      case'camel':out=lines.map(function(l){return l.replace(/[-_\s]+(.)/g,function(_,c){return c.toUpperCase()})}).join('\n');break;
      case'kebab':out=lines.map(function(l){return l.replace(/([a-z])([A-Z])/g,'$1-$2').replace(/[\s_]+/g,'-').toLowerCase()}).join('\n');break;
      case'title':out=lines.map(function(l){return l.replace(/\b\w/g,function(c){return c.toUpperCase()})}).join('\n');break;
      case'wrap':var pre=q('#ttPrefix').value,suf=q('#ttSuffix').value;out=lines.map(function(l){return pre+l+suf}).join('\n');break;
      case'replace':
        var find=q('#ttFind').value,repl=q('#ttRepl').value;if(!find){out=t;break}
        if(q('#ttRegex').checked){try{out=t.replace(new RegExp(find,'g'),repl)}catch(e){out='\u6b63\u5219\u8868\u8fbe\u5f0f\u9519\u8bef: '+e.message}}
        else{out=t.split(find).join(repl)}break;
    }
    q('#ttOut').value=out;
  }});
  q('#ttCopy').onclick=function(){var t=q('#ttOut').value;if(t)navigator.clipboard.writeText(t).then(function(){q('#ttCopy').textContent='\u2713';setTimeout(function(){q('#ttCopy').textContent='\ud83d\udccb \u590d\u5236\u7ed3\u679c'},1500)})};
  q('#ttApply').onclick=function(){var t=q('#ttOut').value;if(t){q('#ttIn').value=t;q('#ttOut').value='';stats()}};
}},
{id:'timestamp',name:'时间戳转换',icon:'🕐',cat:'dev',desc:'Unix 时间戳 · 实时互转 · 时区支持',
html(){
  function opts(min,max,pad){let h='';for(let i=min;i<=max;i++)h+='<option value="'+i+'">'+(pad&&i<10?'0'+i:i)+'</option>';return h}
  return'<div class="t-split"><div><div class="t-lbl">Unix 时间戳 (秒)</div><input class="t-in" id="tsUnix" style="font-family:monospace;font-size:1.1em"></div><div><div class="t-lbl">毫秒时间戳</div><input class="t-in" id="tsMs" style="font-family:monospace;font-size:1.1em"></div></div>'+
  '<div style="margin:12px 0"><div class="t-lbl" style="margin-bottom:6px">📅 日期时间选择</div>'+
  '<div style="display:flex;gap:3px;align-items:center;flex-wrap:wrap">'+
  '<select class="t-sel ts-u" id="tsY" style="width:75px">'+opts(1970,2100)+'</select><span style="color:#aaa;font-size:.78em">年</span>'+
  '<select class="t-sel ts-u" id="tsM" style="width:52px">'+opts(1,12,true)+'</select><span style="color:#aaa;font-size:.78em">月</span>'+
  '<select class="t-sel ts-u" id="tsD" style="width:52px">'+opts(1,31,true)+'</select><span style="color:#aaa;font-size:.78em">日</span>'+
  '<span style="color:#ccc;margin:0 2px">|</span>'+
  '<select class="t-sel ts-u" id="tsHH" style="width:52px">'+opts(0,23,true)+'</select><span style="font-weight:700;color:#999">:</span>'+
  '<select class="t-sel ts-u" id="tsMM" style="width:52px">'+opts(0,59,true)+'</select><span style="font-weight:700;color:#999">:</span>'+
  '<select class="t-sel ts-u" id="tsSS" style="width:52px">'+opts(0,59,true)+'</select>'+
  '</div></div>'+
  '<div id="tsLive" style="text-align:center;margin:14px 0;padding:12px;background:linear-gradient(135deg,#f0f4ff,#f8f9fa);border-radius:10px">'+
  '<div style="font-size:.72em;color:#999">当前时间</div>'+
  '<div id="tsNow" style="font-size:1.4em;font-weight:700;font-family:monospace;color:#409eff"></div>'+
  '<div id="tsNowUnix" style="font-size:.82em;color:#888;font-family:monospace"></div>'+
  '</div><div id="tsDetail" class="t-res" style="line-height:1.6"></div>';
},
init(el){
  const q=s=>el.querySelector(s);
  const days=['日','一','二','三','四','五','六'];
  function daysInMonth(y,m){return new Date(y,m,0).getDate()}
  function updateDays(){
    var y=+q('#tsY').value,m=+q('#tsM').value,maxD=daysInMonth(y,m),curD=+q('#tsD').value;
    var sel=q('#tsD'),html='';for(var i=1;i<=maxD;i++)html+='<option value="'+i+'">'+(i<10?'0'+i:i)+'</option>';
    sel.innerHTML=html;sel.value=Math.min(curD,maxD);
  }
  function setNow(){const n=new Date();q('#tsNow').textContent=n.toLocaleString('zh-CN',{hour12:false});q('#tsNowUnix').textContent='Unix: '+Math.floor(n.getTime()/1000)}
  function showDetail(d){
    var tz=d.getTimezoneOffset(),tzH=Math.floor(Math.abs(tz)/60),tzM=Math.abs(tz)%60,tzSign=tz<=0?'+':'-',tzStr='UTC'+tzSign+String(tzH).padStart(2,'0')+':'+String(tzM).padStart(2,'0');
    q('#tsDetail').textContent=tzStr+': '+d.toLocaleString('zh-CN',{hour12:false})+'\nUTC:  '+d.toUTCString()+'\nISO:  '+d.toISOString()+'\n星期'+days[d.getDay()]+' · 第'+(Math.floor((d-new Date(d.getFullYear(),0,1))/86400000)+1)+'天 · '+d.getFullYear()+'年';
  }
  function fillParts(d){q('#tsY').value=d.getFullYear();q('#tsM').value=d.getMonth()+1;updateDays();q('#tsD').value=d.getDate();q('#tsHH').value=d.getHours();q('#tsMM').value=d.getMinutes();q('#tsSS').value=d.getSeconds()}
  function partsToDate(){return new Date(+q('#tsY').value,+q('#tsM').value-1,+q('#tsD').value,+q('#tsHH').value,+q('#tsMM').value,+q('#tsSS').value)}
  let lock=false;
  function fromUnix(){if(lock)return;lock=true;const ts=+q('#tsUnix').value;if(!isNaN(ts)){const d=new Date(ts*1000);q('#tsMs').value=ts*1000;fillParts(d);showDetail(d)}lock=false}
  function fromMs(){if(lock)return;lock=true;const ms=+q('#tsMs').value;if(!isNaN(ms)){const d=new Date(ms);q('#tsUnix').value=Math.floor(ms/1000);fillParts(d);showDetail(d)}lock=false}
  function fromParts(){if(lock)return;lock=true;const d=partsToDate();const ts=Math.floor(d.getTime()/1000);q('#tsUnix').value=ts;q('#tsMs').value=d.getTime();showDetail(d);lock=false}
  const now=new Date();q('#tsUnix').value=Math.floor(now.getTime()/1000);q('#tsMs').value=now.getTime();fillParts(now);showDetail(now);
  q('#tsUnix').addEventListener('input',fromUnix);q('#tsMs').addEventListener('input',fromMs);
  q('#tsY').addEventListener('change',function(){updateDays();fromParts()});
  q('#tsM').addEventListener('change',function(){updateDays();fromParts()});
  el.querySelectorAll('.ts-u').forEach(inp=>{if(inp.id!=='tsY'&&inp.id!=='tsM')inp.addEventListener('change',fromParts)});
  setNow();const timer=setInterval(setNow,1000);
  el._cleanup=()=>clearInterval(timer);
}},
{id:'unlockmusic',name:'UnlockMusic',icon:'\ud83d\udd13',cat:'music',desc:'\u89e3\u5bc6 QMC/NCM \u52a0\u5bc6\u97f3\u4e50',
html(){return '<style>'
+'.um-frame{width:100%;height:70vh;border:none;border-radius:8px;background:#fafafa}'
+'</style>'
+'<iframe class="um-frame" id="umFrame" src="/unlockmusic/" sandbox="allow-scripts allow-same-origin allow-downloads allow-forms allow-popups"></iframe>'},
init(el){}},
{id:'webvpn',name:'WebVPN 转换',icon:'🔗',cat:'campus',desc:'内网地址 ↔ WebVPN 地址',
html(){return'<div style="font-size:.75em;color:#888;margin-bottom:10px">🔒 AES-128-CFB 加密 · 纯客户端 · 密钥 <code>wrdvpnisthebest!</code></div><div class="t-lbl">🌐 原始 URL（校内网址）</div><textarea class="t-ta" id="vpnIn" rows="2" placeholder="https://ehall.xjtu.edu.cn/xxx 或 http://dean.xjtu.edu.cn/xxx" style="min-height:50px"></textarea><div class="t-row" style="justify-content:center;margin:10px 0"><button class="t-btn t-btn-s" id="vpnEnc">🔒 加密 → WebVPN</button><button class="t-btn" id="vpnDec">🔓 解密 → 原始</button></div><div class="t-lbl">🛡️ WebVPN URL</div><textarea class="t-ta" id="vpnOut" rows="2" placeholder="https://webvpn.xjtu.edu.cn/..." style="min-height:50px"></textarea><div class="t-row" style="justify-content:center;margin-top:8px"><button class="t-btn t-btn-o" id="vpnCopy" style="font-size:.75em">📋 复制结果</button></div><div id="vpnMsg" style="text-align:center;margin-top:6px;font-size:.78em;color:#888"></div>'},
init(el){
  var KEY=[0x77,0x72,0x64,0x76,0x70,0x6e,0x69,0x73,0x74,0x68,0x65,0x62,0x65,0x73,0x74,0x21];
  var IV=KEY.slice();
  var HOST='webvpn.xjtu.edu.cn';
  function hex(b){var s='';for(var i=0;i<b.length;i++)s+=('0'+b[i].toString(16)).slice(-2);return s}
  function unhex(s){var a=[];for(var i=0;i<s.length;i+=2)a.push(parseInt(s.substr(i,2),16));return a}
  function aesBlock(key){
    var Sbox=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22];
    var Rcon=[1,2,4,8,16,32,64,128,27,54];
    function subWord(w){return(Sbox[(w>>>24)&255]<<24)|(Sbox[(w>>>16)&255]<<16)|(Sbox[(w>>>8)&255]<<8)|Sbox[w&255]}
    function rotWord(w){return((w<<8)|(w>>>24))>>>0}
    var Nk=4,Nr=10,w=new Array(44);
    for(var i=0;i<Nk;i++)w[i]=((key[4*i]<<24)|(key[4*i+1]<<16)|(key[4*i+2]<<8)|key[4*i+3])>>>0;
    for(var i=Nk;i<4*(Nr+1);i++){var t=w[i-1];if(i%Nk===0)t=subWord(rotWord(t))^((Rcon[i/Nk-1]<<24)>>>0);w[i]=(w[i-Nk]^t)>>>0}
    function subBytes(s){for(var i=0;i<16;i++)s[i]=Sbox[s[i]]}
    function shiftRows(s){var t=s[1];s[1]=s[5];s[5]=s[9];s[9]=s[13];s[13]=t;t=s[2];s[2]=s[10];s[10]=t;t=s[6];s[6]=s[14];s[14]=t;t=s[3];s[3]=s[15];s[15]=s[11];s[11]=s[7];s[7]=t}
    function xtime(a){return((a<<1)^(a&128?0x1b:0))&255}
    function mixCol(s){for(var c=0;c<4;c++){var i=4*c,a=s[i],b=s[i+1],cx=s[i+2],d=s[i+3];s[i]=xtime(a^b)^b^cx^d;s[i+1]=xtime(b^cx)^cx^d^a;s[i+2]=xtime(cx^d)^d^a^b;s[i+3]=xtime(d^a)^a^b^cx}}
    function addRoundKey(s,r){for(var i=0;i<4;i++){var ww=w[r*4+i];s[4*i]^=(ww>>>24)&255;s[4*i+1]^=(ww>>>16)&255;s[4*i+2]^=(ww>>>8)&255;s[4*i+3]^=ww&255}}
    return function(block){var s=block.slice();addRoundKey(s,0);for(var r=1;r<Nr;r++){subBytes(s);shiftRows(s);mixCol(s);addRoundKey(s,r)}subBytes(s);shiftRows(s);addRoundKey(s,Nr);return s}
  }
  var encrypt=aesBlock(KEY);
  function cfbEncrypt(plain){
    var out=[];var fb=IV.slice();
    for(var i=0;i<plain.length;i+=16){
      var enc=encrypt(fb);
      var chunk=[];
      for(var j=0;j<16&&i+j<plain.length;j++){var c=plain[i+j]^enc[j];chunk.push(c);out.push(c)}
      fb=chunk.slice();while(fb.length<16)fb.push(0);
    }
    return out
  }
  function cfbDecrypt(cipher){
    var out=[];var fb=IV.slice();
    for(var i=0;i<cipher.length;i+=16){
      var enc=encrypt(fb);
      var chunk=cipher.slice(i,i+16);
      for(var j=0;j<chunk.length;j++)out.push(chunk[j]^enc[j]);
      fb=chunk.slice();while(fb.length<16)fb.push(0);
    }
    return out
  }
  function utf8Encode(s){var a=[];for(var i=0;i<s.length;i++){var c=s.charCodeAt(i);if(c<128)a.push(c);else if(c<2048){a.push(192|(c>>6));a.push(128|(c&63))}else if(c>=0xD800&&c<=0xDBFF){var hi=c,lo=s.charCodeAt(++i);var cp=0x10000+((hi-0xD800)<<10)+(lo-0xDC00);a.push(240|(cp>>18));a.push(128|((cp>>12)&63));a.push(128|((cp>>6)&63));a.push(128|(cp&63))}else{a.push(224|(c>>12));a.push(128|((c>>6)&63));a.push(128|(c&63))}}return a}
  function utf8Decode(a){var s='';for(var i=0;i<a.length;){var c=a[i];if(c<128){s+=String.fromCharCode(c);i++}else if(c<224){s+=String.fromCharCode(((c&31)<<6)|(a[i+1]&63));i+=2}else if(c<240){s+=String.fromCharCode(((c&15)<<12)|((a[i+1]&63)<<6)|(a[i+2]&63));i+=3}else{var cp=((c&7)<<18)|((a[i+1]&63)<<12)|((a[i+2]&63)<<6)|(a[i+3]&63);s+=String.fromCodePoint(cp);i+=4}}return s}
  var msg=el.querySelector('#vpnMsg');
  el.querySelector('#vpnEnc').onclick=function(){
    var url=el.querySelector('#vpnIn').value.trim();if(!url){msg.textContent='请输入原始 URL';return}
    try{
      var parts=url.split('://');if(parts.length<2){msg.textContent='请输入完整 URL（含 http:// 或 https://）';return}
      var pro=parts[0],rest=parts.slice(1).join('://');
      var segs=rest.split('/'),hostPort=segs[0],path=segs.slice(1).join('/');
      var hp=hostPort.split(':'),domain=hp[0],port=hp.length>1?'-'+hp[1]:'';
      var plainBytes=utf8Encode(domain);
      var cipherBytes=cfbEncrypt(plainBytes);
      var ivHex=hex(IV),cipherHex=hex(cipherBytes);
      var result='https://'+HOST+'/'+pro+port+'/'+ivHex+cipherHex+(path?'/'+path:'');
      el.querySelector('#vpnOut').value=result;
      msg.textContent='✅ 转换成功';msg.style.color='#67c23a';
    }catch(e){msg.textContent='❌ '+e.message;msg.style.color='#f56c6c'}
  };
  el.querySelector('#vpnDec').onclick=function(){
    var url=el.querySelector('#vpnOut').value.trim();if(!url){msg.textContent='请输入 WebVPN URL';return}
    try{
      var parts=url.split('/');if(parts.length<5){msg.textContent='WebVPN URL 格式不正确';return}
      var pro=parts[3],keyCipher=parts[4],path=parts.slice(5).join('/');
      var port='';if(pro.indexOf('-')>0){var pp=pro.split('-');pro=pp[0];port=':'+pp[1]}
      var cipherHex=keyCipher.substring(32);
      var cipherBytes=unhex(cipherHex);
      var plainBytes=cfbDecrypt(cipherBytes);
      var domain=utf8Decode(plainBytes);
      var result=pro+'://'+domain+port+(path?'/'+path:'');
      el.querySelector('#vpnIn').value=result;
      msg.textContent='✅ 解密成功';msg.style.color='#67c23a';
    }catch(e){msg.textContent='❌ '+e.message;msg.style.color='#f56c6c'}
  };
  el.querySelector('#vpnCopy').onclick=function(){var t=el.querySelector('#vpnOut').value||el.querySelector('#vpnIn').value;if(t)navigator.clipboard.writeText(t).then(function(){el.querySelector('#vpnCopy').textContent='✓ 已复制';setTimeout(function(){el.querySelector('#vpnCopy').textContent='📋 复制结果'},1500)})};
}}
  ];
})();
