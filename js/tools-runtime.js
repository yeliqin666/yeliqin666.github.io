'use strict';
(function(){
  if (window.__QZ_TOOLS_RUNTIME__ && window.__QZ_TOOLS_RUNTIME__.loaded) return;
  var rt = window.__QZ_TOOLS_RUNTIME__ = window.__QZ_TOOLS_RUNTIME__ || {};
  rt.loaded = true;

  // Shared data for tool modules
/* Shared data for tools - periodic table, constants, morse code, typing texts */

const CONSTS=[
['c','光速','2.998 \\times 10^{8}','m/s'],
['h','普朗克常数','6.626 \\times 10^{-34}','J \\cdot s'],
['\\hbar','约化普朗克','1.055 \\times 10^{-34}','J \\cdot s'],
['k_B','玻尔兹曼常数','1.381 \\times 10^{-23}','J/K'],
['N_A','阿伏伽德罗常数','6.022 \\times 10^{23}','mol^{-1}'],
['e','元电荷','1.602 \\times 10^{-19}','C'],
['m_e','电子质量','9.109 \\times 10^{-31}','kg'],
['m_p','质子质量','1.673 \\times 10^{-27}','kg'],
['G','万有引力常数','6.674 \\times 10^{-11}','N \\cdot m^2/kg^2'],
['\\varepsilon_0','真空介电常数','8.854 \\times 10^{-12}','F/m'],
['\\mu_0','真空磁导率','1.257 \\times 10^{-6}','H/m'],
['\\alpha','精细结构常数','7.297 \\times 10^{-3}',''],
['a_0','玻尔半径','5.292 \\times 10^{-11}','m'],
['R_\\infty','里德伯常数','1.097 \\times 10^{7}','m^{-1}'],
['R','气体常数','8.314','J/(mol \\cdot K)'],
['\\sigma','斯特藩-玻尔兹曼','5.670 \\times 10^{-8}','W/(m^2 \\cdot K^4)'],
['u','原子质量单位','1.661 \\times 10^{-27}','kg'],
['\\mu_B','玻尔磁子','9.274 \\times 10^{-24}','J/T'],
['eV','电子伏','1.602 \\times 10^{-19}','J'],
['g','重力加速度','9.807','m/s^2'],
['\\lambda_C','康普顿波长','2.426 \\times 10^{-12}','m'],
['F','法拉第常数','96485','C/mol']
];

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

const TYPING_TEXTS={en:[
'the quick brown fox jumps over the lazy dog near the bank where flowers bloom in spring',
'coding is not just writing code it is solving problems and creating solutions that matter',
'the only way to do great work is to love what you do keep looking do not settle',
'science is organized knowledge wisdom is organized life every advance issued from audacity',
'in the middle of difficulty lies opportunity imagination is more important than knowledge'
],cn:['春眠不觉晓处处闻啼鸟夜来风雨声花落知多少这是一段经典的唐诗','明月几时有把酒问青天不知天上宫阙今夕是何年我欲乘风归去又恐琼楼玉宇高处不胜寒','天行健君子以自强不息地势坤君子以厚德载物这是中华民族历久弥新的精神财富','科学技术是第一生产力创新是引领发展的第一动力要坚持走中国特色自主创新道路','人生得意须尽欢莫使金樽空对月天生我材必有用千金散尽还复来会须一饮三百杯']};


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
{id:'constants',name:'物理常数',icon:'📏',cat:'academic',desc:'CODATA 标准值 · LaTeX 渲染',
html(){return'<input class="t-in" id="constSearch" placeholder="搜索常数..." style="margin-bottom:8px"><div id="constBody" style="overflow:auto;max-height:420px"></div>'},
async init(el){
  await loadKaTeX();
  var h='<table class="ct-table"><tr><th>符号</th><th>名称</th><th>数值</th><th>单位</th></tr>';
  CONSTS.forEach(function(c){h+='<tr class="const-row"><td>'+tex(c[0])+'</td><td>'+c[1]+'</td><td>'+tex(c[2])+'</td><td>'+(c[3]?tex(c[3]):'—')+'</td></tr>'});
  h+='</table>';
  el.querySelector('#constBody').innerHTML=h;
  el.querySelector('#constSearch').oninput=function(){
    var q=this.value.toLowerCase();
    el.querySelectorAll('.const-row').forEach(function(r){r.style.display=r.textContent.toLowerCase().includes(q)?'':'none'});
  };
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
{
  id: 'eigenvalue',
  name: '本征值求解',
  icon: '⚛',
  cat: 'academic',
  desc: '1D 薛定谔方程双侧打靶法求解器 — 求本征能量与波函数',

  html: function () {
    return ''
      + '<div class="t-row">'
      +   '<label class="t-lbl">V(x) 表达式</label>'
      +   '<input id="eigVx" class="t-in" value="0" style="flex:1" placeholder="例: x^2, (x^2-4)^2/4">'
      + '</div>'
      + '<div class="t-row">'
      +   '<label class="t-lbl">区间 a</label>'
      +   '<input id="eigA" class="t-in" value="0" style="width:80px">'
      +   '<label class="t-lbl" style="margin-left:12px">b</label>'
      +   '<input id="eigB" class="t-in" value="1" style="width:80px">'
      + '</div>'
      + '<div class="t-row">'
      +   '<label class="t-lbl">E<sub>min</sub></label>'
      +   '<input id="eigEmin" class="t-in" value="1" style="width:80px">'
      +   '<label class="t-lbl" style="margin-left:12px">E<sub>max</sub></label>'
      +   '<input id="eigEmax" class="t-in" value="200" style="width:80px">'
      + '</div>'
      + '<div class="t-row">'
      +   '<label class="t-lbl">γ = √(2m/ℏ²)</label>'
      +   '<input id="eigGamma" class="t-in" value="3.14159265" style="width:120px" placeholder="γ 系数">'
      + '</div>'
      + '<div class="t-row">'
      +   '<label class="t-lbl">网格点数 N</label>'
      +   '<input id="eigN" type="range" min="200" max="2000" step="50" value="500" style="flex:1">'
      +   '<span id="eigNVal" style="min-width:40px;text-align:right">500</span>'
      + '</div>'
      + '<div class="t-row">'
      +   '<label class="t-lbl">扫描步数</label>'
      +   '<input id="eigScan" class="t-in" value="500" style="width:80px">'
      + '</div>'
      + '<div class="t-row">'
      +   '<label class="t-lbl">方法</label>'
      +   '<label style="margin-right:12px"><input type="radio" name="eigMethod" value="numerov" checked> Numerov</label>'
      +   '<label><input type="radio" name="eigMethod" value="rk4"> RK4</label>'
      + '</div>'
      + '<div class="t-row" style="flex-wrap:wrap;gap:6px">'
      +   '<button class="t-btn t-btn-o" id="eigPre1">无限深方势阱</button>'
      +   '<button class="t-btn t-btn-o" id="eigPre2">谐振子</button>'
      +   '<button class="t-btn t-btn-o" id="eigPre3">双势阱</button>'
      +   '<button class="t-btn t-btn-o" id="eigPre4">Morse 势</button>'
      +   '<button class="t-btn t-btn-o" id="eigPre5">Lennard-Jones</button>'
      + '</div>'
      + '<div class="t-row">'
      +   '<button class="t-btn" id="eigSolve">求 解</button>'
      + '</div>'
      + '<canvas id="eigCv1" class="t-cv" width="600" height="400"></canvas>'
      + '<canvas id="eigCv2" class="t-cv" width="600" height="260"></canvas>'
      + '<div id="eigRes" class="t-res"></div>';
  },

  init: async function (el) {

    /* ── KaTeX + math.js ── */
    await loadKaTeX();
    var math = await loadMath();

    /* ── CSS 变量缓存 ── */
    var cs = getComputedStyle(document.documentElement);
    var C_ACCENT = cs.getPropertyValue('--accent').trim() || '#5B8BA4';
    var C_FONT1  = cs.getPropertyValue('--font-color-1').trim() || '#333';
    var C_FONT3  = cs.getPropertyValue('--font-color-3').trim() || '#999';
    var C_BG     = cs.getPropertyValue('--background').trim() || '#fff';

    var PALETTE = [C_ACCENT, '#67c23a', '#f56c6c', '#e6a23c', '#9b59b6', '#00bcd4', '#ff5722', '#795548'];
    var MAX_SHOW = 8;

    /* ── DOM 元素 ── */
    var inVx     = el.querySelector('#eigVx');
    var inA      = el.querySelector('#eigA');
    var inB      = el.querySelector('#eigB');
    var inEmin   = el.querySelector('#eigEmin');
    var inEmax   = el.querySelector('#eigEmax');
    var inGamma  = el.querySelector('#eigGamma');
    var inN      = el.querySelector('#eigN');
    var spNVal   = el.querySelector('#eigNVal');
    var inScan   = el.querySelector('#eigScan');
    var btnSolve = el.querySelector('#eigSolve');
    var cv1      = el.querySelector('#eigCv1');
    var cv2      = el.querySelector('#eigCv2');
    var divRes   = el.querySelector('#eigRes');

    inN.addEventListener('input', function () { spNVal.textContent = inN.value; });

    /* ── 预设 ── */
    var presets = [
      { vx: '0',                       a: '0',   b: '1',  emin: '1',   emax: '200', gamma: '3.14159265' },
      { vx: 'x^2',                     a: '-5',  b: '5',  emin: '0',   emax: '20',  gamma: '3.16227766' },
      { vx: '(x^2-4)^2/4',             a: '-4',  b: '4',  emin: '0',   emax: '20',  gamma: '1'          },
      { vx: '10*(1-exp(-x))^2',        a: '-1',  b: '5',  emin: '0',   emax: '10',  gamma: '1'          },
      { vx: '4*(x^(-12)-x^(-6))',      a: '0.9', b: '3',  emin: '-1',  emax: '0',   gamma: '1'          }
    ];

    var activePresetIdx = -1;

    function applyPreset(idx) {
      var p = presets[idx];
      inVx.value    = p.vx;
      inA.value     = p.a;
      inB.value     = p.b;
      inEmin.value  = p.emin;
      inEmax.value  = p.emax;
      inGamma.value = p.gamma;
      activePresetIdx = idx;
      var btns = el.querySelectorAll('[id^="eigPre"]');
      for (var i = 0; i < btns.length; i++) {
        if (i === idx) {
          btns[i].className = 't-btn';
          btns[i].style.fontWeight = '700';
        } else {
          btns[i].className = 't-btn t-btn-o';
          btns[i].style.fontWeight = '';
        }
      }
    }

    el.querySelector('#eigPre1').addEventListener('click', function () { applyPreset(0); });
    el.querySelector('#eigPre2').addEventListener('click', function () { applyPreset(1); });
    el.querySelector('#eigPre3').addEventListener('click', function () { applyPreset(2); });
    el.querySelector('#eigPre4').addEventListener('click', function () { applyPreset(3); });
    el.querySelector('#eigPre5').addEventListener('click', function () { applyPreset(4); });

    /* ── 工具函数 ── */
    function getMethod() {
      var radios = el.querySelectorAll('input[name="eigMethod"]');
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) return radios[i].value;
      }
      return 'numerov';
    }

    function compileV(expr) {
      var node = math.compile(expr);
      return function (x) {
        return node.evaluate({ x: x });
      };
    }

    /* ── Numerov 正向积分 ── */
    function numerovForward(V, a, xEnd, nPts, E, g2) {
      var h = (xEnd - a) / nPts;
      var psi = new Array(nPts + 1);
      psi[0] = 0;
      psi[1] = 1e-6;
      for (var i = 1; i < nPts; i++) {
        var km1 = g2 * (E - V(a + (i - 1) * h));
        var ki  = g2 * (E - V(a + i * h));
        var kp1 = g2 * (E - V(a + (i + 1) * h));
        psi[i + 1] = (2 * (1 - 5 * h * h * ki / 12) * psi[i] - (1 + h * h * km1 / 12) * psi[i - 1]) / (1 + h * h * kp1 / 12);
      }
      return psi;
    }

    /* ── Numerov 反向积分 ── */
    function numerovBackward(V, xStart, b, nPts, E, g2) {
      var h = (b - xStart) / nPts;
      var psi = new Array(nPts + 1);
      psi[nPts] = 0;
      psi[nPts - 1] = 1e-6;
      for (var i = nPts - 1; i > 0; i--) {
        var kp1 = g2 * (E - V(xStart + (i + 1) * h));
        var ki  = g2 * (E - V(xStart + i * h));
        var km1 = g2 * (E - V(xStart + (i - 1) * h));
        psi[i - 1] = (2 * (1 - 5 * h * h * ki / 12) * psi[i] - (1 + h * h * kp1 / 12) * psi[i + 1]) / (1 + h * h * km1 / 12);
      }
      return psi;
    }

    /* ── RK4 正向积分 ── */
    function rk4Forward(V, a, xEnd, nPts, E, g2) {
      var h = (xEnd - a) / nPts;
      var psi = new Array(nPts + 1);
      var y = 0;
      var dy = 1e-6;
      psi[0] = y;
      for (var i = 0; i < nPts; i++) {
        var xi = a + i * h;
        var k1y  = dy;
        var k1dy = g2 * (V(xi) - E) * y;
        var y2   = y + 0.5 * h * k1y;
        var dy2  = dy + 0.5 * h * k1dy;
        var k2y  = dy2;
        var k2dy = g2 * (V(xi + 0.5 * h) - E) * y2;
        var y3   = y + 0.5 * h * k2y;
        var dy3  = dy + 0.5 * h * k2dy;
        var k3y  = dy3;
        var k3dy = g2 * (V(xi + 0.5 * h) - E) * y3;
        var y4   = y + h * k3y;
        var dy4  = dy + h * k3dy;
        var k4y  = dy4;
        var k4dy = g2 * (V(xi + h) - E) * y4;
        y  += h * (k1y  + 2 * k2y  + 2 * k3y  + k4y)  / 6;
        dy += h * (k1dy + 2 * k2dy + 2 * k3dy + k4dy) / 6;
        psi[i + 1] = y;
      }
      return psi;
    }

    /* ── RK4 反向积分 ── */
    function rk4Backward(V, xStart, b, nPts, E, g2) {
      var h = (b - xStart) / nPts;
      var psi = new Array(nPts + 1);
      var y = 0;
      var dy = -1e-6;
      psi[nPts] = y;
      for (var i = nPts; i > 0; i--) {
        var xi = xStart + i * h;
        var k1y  = dy;
        var k1dy = g2 * (V(xi) - E) * y;
        var y2   = y - 0.5 * h * k1y;
        var dy2  = dy - 0.5 * h * k1dy;
        var k2y  = dy2;
        var k2dy = g2 * (V(xi - 0.5 * h) - E) * y2;
        var y3   = y - 0.5 * h * k2y;
        var dy3  = dy - 0.5 * h * k2dy;
        var k3y  = dy3;
        var k3dy = g2 * (V(xi - 0.5 * h) - E) * y3;
        var y4   = y - h * k3y;
        var dy4  = dy - h * k3dy;
        var k4y  = dy4;
        var k4dy = g2 * (V(xi - h) - E) * y4;
        y  -= h * (k1y  + 2 * k2y  + 2 * k3y  + k4y)  / 6;
        dy -= h * (k1dy + 2 * k2dy + 2 * k3dy + k4dy) / 6;
        psi[i - 1] = y;
      }
      return psi;
    }

    /* ── 双侧打靶 (bidirectional shooting) ── */
    function shootBidirectional(V, a, b, N, E, g2, useNumerov) {
      var h = (b - a) / N;

      /* 找匹配点：最靠近中间的经典转折点 V(x)≈E */
      var iMatch = Math.floor(N / 2);
      var midDist = Infinity;
      for (var i = 1; i < N; i++) {
        var vPrev = V(a + (i - 1) * h);
        var vCurr = V(a + i * h);
        if ((vPrev - E) * (vCurr - E) < 0) {
          var dist = Math.abs(i - N / 2);
          if (dist < midDist) {
            midDist = dist;
            iMatch = i;
          }
        }
      }

      /* 确保 iMatch 不在边缘 */
      if (iMatch < 2) iMatch = 2;
      if (iMatch > N - 2) iMatch = N - 2;

      var xMatch = a + iMatch * h;
      var NL = iMatch;
      var NR = N - iMatch;

      /* 积分 */
      var psiL, psiR;
      if (useNumerov) {
        psiL = numerovForward(V, a, xMatch, NL, E, g2);
        psiR = numerovBackward(V, xMatch, b, NR, E, g2);
      } else {
        psiL = rk4Forward(V, a, xMatch, NL, E, g2);
        psiR = rk4Backward(V, xMatch, b, NR, E, g2);
      }

      /* 计算对数导数匹配值 F(E) */
      var valL = psiL[NL];
      var valR = psiR[0];

      /* 避免除零 */
      if (Math.abs(valL) < 1e-30 || Math.abs(valR) < 1e-30) {
        return { psi: null, F: NaN };
      }

      var dLogL = (psiL[NL] - psiL[NL - 1]) / (h * psiL[NL]);
      var dLogR = (psiR[1] - psiR[0]) / (h * psiR[0]);
      var F = dLogL - dLogR;

      /* 拼合全波函数 */
      var scale = valL / valR;
      var psi = new Array(N + 1);
      for (var i = 0; i <= NL; i++) {
        psi[i] = psiL[i];
      }
      for (var i = 1; i <= NR; i++) {
        psi[NL + i] = psiR[i] * scale;
      }

      return { psi: psi, F: F };
    }

    /* ── 求解主函数 ── */
    function solve() {
      var exprStr = inVx.value.trim();
      var a     = parseFloat(inA.value);
      var b     = parseFloat(inB.value);
      var Emin  = parseFloat(inEmin.value);
      var Emax  = parseFloat(inEmax.value);
      var gamma = parseFloat(inGamma.value);
      var N     = parseInt(inN.value, 10);
      var nScan = parseInt(inScan.value, 10) || 500;
      var method = getMethod();

      if (isNaN(a) || isNaN(b) || a >= b) {
        divRes.innerHTML = '<span style="color:#f56c6c">区间参数无效</span>';
        return;
      }
      if (isNaN(Emin) || isNaN(Emax) || Emin >= Emax) {
        divRes.innerHTML = '<span style="color:#f56c6c">能量范围无效</span>';
        return;
      }
      if (isNaN(gamma) || gamma <= 0) {
        divRes.innerHTML = '<span style="color:#f56c6c">γ 参数无效（需为正数）</span>';
        return;
      }

      var V;
      try {
        V = compileV(exprStr);
        V(a);
        V(b);
        V((a + b) / 2);
      } catch (e) {
        divRes.innerHTML = '<span style="color:#f56c6c">V(x) 表达式错误: ' + e.message + '</span>';
        return;
      }

      var g2 = gamma * gamma;
      var useNumerov = (method === 'numerov');

      /* ── 扫描 F(E) ── */
      var dE = (Emax - Emin) / nScan;
      var scanE = [];
      var scanF = [];
      var prevF = null;
      var signChanges = [];

      for (var s = 0; s <= nScan; s++) {
        var E = Emin + s * dE;
        var result = shootBidirectional(V, a, b, N, E, g2, useNumerov);
        var Fval = result.F;

        scanE.push(E);
        scanF.push(isFinite(Fval) ? Fval : null);

        if (prevF !== null && isFinite(Fval) && isFinite(prevF) && prevF * Fval < 0) {
          signChanges.push([E - dE, E]);
        }
        if (isFinite(Fval)) prevF = Fval;
      }

      /* ── 二分法精确求解 ── */
      var eigenvalues = [];
      var eigenfunctions = [];

      for (var sc = 0; sc < signChanges.length && eigenvalues.length < MAX_SHOW; sc++) {
        var Eleft  = signChanges[sc][0];
        var Eright = signChanges[sc][1];

        var fL = shootBidirectional(V, a, b, N, Eleft,  g2, useNumerov).F;
        var fR = shootBidirectional(V, a, b, N, Eright, g2, useNumerov).F;

        if (!isFinite(fL) || !isFinite(fR)) continue;

        for (var bisect = 0; bisect < 60; bisect++) {
          var Emid = (Eleft + Eright) / 2;
          var fM = shootBidirectional(V, a, b, N, Emid, g2, useNumerov).F;
          if (!isFinite(fM)) break;
          if (fL * fM < 0) {
            Eright = Emid;
            fR = fM;
          } else {
            Eleft = Emid;
            fL = fM;
          }
          if (Math.abs(Eright - Eleft) < 1e-12) break;
        }

        var Efound = (Eleft + Eright) / 2;
        var resFound = shootBidirectional(V, a, b, N, Efound, g2, useNumerov);

        if (!resFound.psi) continue;

        var psiFound = resFound.psi;

        /* 梯形法归一化 */
        var hStep = (b - a) / N;
        var norm2 = 0;
        for (var j = 0; j < N; j++) {
          norm2 += (psiFound[j] * psiFound[j] + psiFound[j + 1] * psiFound[j + 1]) * hStep / 2;
        }
        var normFactor = Math.sqrt(norm2);
        if (normFactor > 0) {
          for (var j = 0; j <= N; j++) {
            psiFound[j] /= normFactor;
          }
        }

        eigenvalues.push(Efound);
        eigenfunctions.push(psiFound);
      }

      /* ── 计算节点数 ── */
      var nodeCounts = [];
      for (var ei = 0; ei < eigenfunctions.length; ei++) {
        var nodes = 0;
        var pf = eigenfunctions[ei];
        for (var j = 1; j < pf.length; j++) {
          if (pf[j - 1] * pf[j] < 0) nodes++;
        }
        nodeCounts.push(nodes);
      }

      /* ── 绘制 ── */
      drawPotentialAndWavefunctions(V, a, b, N, eigenvalues, eigenfunctions, g2);
      drawScanCurve(scanE, scanF, eigenvalues);

      /* ── 解析值对比 ── */
      var hasAnalytic = false;
      var analyticVals = [];
      var analyticLabel = '';

      if (activePresetIdx === 0) {
        /* 无限深方势阱: E_n = n²π² / γ² (当 γ=π 时 E_n=n²) */
        hasAnalytic = true;
        analyticLabel = 'n^2\\pi^2/\\gamma^2';
        for (var i = 0; i < eigenvalues.length; i++) {
          var n = i + 1;
          analyticVals.push(n * n * Math.PI * Math.PI / g2);
        }
      } else if (activePresetIdx === 1) {
        /* 谐振子: E_n = (2n-1)/γ */
        hasAnalytic = true;
        analyticLabel = '(2n-1)/\\gamma';
        for (var i = 0; i < eigenvalues.length; i++) {
          var n = i + 1;
          analyticVals.push((2 * n - 1) / gamma);
        }
      }

      /* ── 结果表格 ── */
      if (eigenvalues.length === 0) {
        divRes.innerHTML = '<span style="color:#e6a23c">未找到本征值，尝试调整能量范围或增加扫描步数</span>';
      } else {
        var html = '<b>找到 ' + eigenvalues.length + ' 个本征值</b>'
          + '&ensp;<span style="font-size:12px;color:' + C_FONT3 + '">(方法: ' + method.toUpperCase() + ', γ = ' + gamma.toFixed(6) + ', γ² = ' + g2.toFixed(6) + ')</span><br>'
          + '<table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:13px">'
          + '<tr style="border-bottom:1px solid ' + C_FONT3 + '">'
          + '<th style="text-align:left;padding:4px">n</th>'
          + '<th style="text-align:left;padding:4px">' + tex('E_n') + ' (数值)</th>'
          + '<th style="text-align:left;padding:4px">节点</th>';
        if (hasAnalytic) {
          html += '<th style="text-align:left;padding:4px">' + tex(analyticLabel) + '</th>';
          html += '<th style="text-align:left;padding:4px">相对误差</th>';
        }
        html += '</tr>';

        for (var i = 0; i < eigenvalues.length; i++) {
          var color = PALETTE[i % PALETTE.length];
          html += '<tr>'
            + '<td style="padding:4px;color:' + color + '"><b>' + tex('E_{' + (i + 1) + '}') + '</b></td>'
            + '<td style="padding:4px">' + eigenvalues[i].toFixed(8) + '</td>'
            + '<td style="padding:4px">' + nodeCounts[i] + '</td>';
          if (hasAnalytic) {
            var exact = analyticVals[i];
            var relErr = Math.abs(exact) > 1e-15 ? Math.abs(eigenvalues[i] - exact) / Math.abs(exact) : 0;
            html += '<td style="padding:4px">' + exact.toFixed(8) + '</td>';
            html += '<td style="padding:4px">' + relErr.toExponential(2) + '</td>';
          }
          html += '</tr>';
        }
        html += '</table>';

        if (hasAnalytic) {
          html += '<div style="margin-top:6px;font-size:12px;color:' + C_FONT3 + '">解析: '
            + tex('E_n = ' + analyticLabel) + '</div>';
        }

        divRes.innerHTML = html;
      }
    }

    /* ── Canvas 绘制: 势能 + 波函数 ── */
    function drawPotentialAndWavefunctions(V, a, b, N, eigenvalues, eigenfunctions, g2) {
      var dpr = window.devicePixelRatio || 1;
      var W = cv1.clientWidth || 600;
      var H = cv1.clientHeight || 400;
      cv1.width = W * dpr;
      cv1.height = H * dpr;
      var ctx = cv1.getContext('2d');
      ctx.scale(dpr, dpr);

      var pad = { top: 20, right: 20, bottom: 40, left: 50 };
      var pw = W - pad.left - pad.right;
      var ph = H - pad.top - pad.bottom;

      ctx.clearRect(0, 0, W, H);

      var h = (b - a) / N;

      /* 计算 V(x) 数据 */
      var vData = [];
      for (var i = 0; i <= N; i++) {
        var x = a + i * h;
        var v;
        try { v = V(x); } catch (e) { v = 0; }
        vData.push(v);
      }

      /* 确定 Y 轴范围 */
      var yMin = Infinity, yMax = -Infinity;
      for (var i = 0; i < vData.length; i++) {
        if (isFinite(vData[i])) {
          if (vData[i] < yMin) yMin = vData[i];
          if (vData[i] > yMax) yMax = vData[i];
        }
      }
      for (var i = 0; i < eigenvalues.length; i++) {
        if (eigenvalues[i] < yMin) yMin = eigenvalues[i];
        if (eigenvalues[i] > yMax) yMax = eigenvalues[i];
      }

      /* 波函数幅度 → 扩展 Y 范围 */
      var maxPsiAmp = 0;
      for (var ei = 0; ei < eigenfunctions.length; ei++) {
        for (var j = 0; j <= N; j++) {
          var amp = Math.abs(eigenfunctions[ei][j]);
          if (amp > maxPsiAmp) maxPsiAmp = amp;
        }
      }

      var Espan = (eigenvalues.length > 1)
        ? (eigenvalues[eigenvalues.length - 1] - eigenvalues[0])
        : (yMax - yMin) || 1;
      var psiScale = Espan * 0.15 / (maxPsiAmp || 1);

      var margin = (yMax - yMin) * 0.15 || 1;
      yMin -= margin;
      yMax += margin + Espan * 0.2;

      function mapX(x) { return pad.left + (x - a) / (b - a) * pw; }
      function mapY(y) { return pad.top + ph - (y - yMin) / (yMax - yMin) * ph; }

      /* 坐标轴 */
      ctx.strokeStyle = C_FONT3;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pad.left, pad.top);
      ctx.lineTo(pad.left, pad.top + ph);
      ctx.lineTo(pad.left + pw, pad.top + ph);
      ctx.stroke();

      /* X 轴刻度 */
      ctx.fillStyle = C_FONT3;
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      var nTickX = 6;
      for (var t = 0; t <= nTickX; t++) {
        var xv = a + (b - a) * t / nTickX;
        var sx = mapX(xv);
        ctx.beginPath();
        ctx.moveTo(sx, pad.top + ph);
        ctx.lineTo(sx, pad.top + ph + 4);
        ctx.stroke();
        ctx.fillText(xv.toFixed(2), sx, pad.top + ph + 16);
      }
      ctx.fillText('x', pad.left + pw / 2, H - 4);

      /* Y 轴刻度 */
      ctx.textAlign = 'right';
      var nTickY = 5;
      for (var t = 0; t <= nTickY; t++) {
        var yv = yMin + (yMax - yMin) * t / nTickY;
        var sy = mapY(yv);
        ctx.beginPath();
        ctx.moveTo(pad.left - 4, sy);
        ctx.lineTo(pad.left, sy);
        ctx.stroke();
        ctx.fillText(yv.toFixed(1), pad.left - 6, sy + 4);
      }
      ctx.save();
      ctx.translate(12, pad.top + ph / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = 'center';
      ctx.fillText('E / V(x)', 0, 0);
      ctx.restore();

      /* V(x) 填充 */
      ctx.beginPath();
      for (var i = 0; i <= N; i++) {
        var x = a + i * h;
        var v = isFinite(vData[i]) ? vData[i] : 0;
        var clipped = Math.max(yMin, Math.min(yMax, v));
        if (i === 0) ctx.moveTo(mapX(x), mapY(clipped));
        else ctx.lineTo(mapX(x), mapY(clipped));
      }
      ctx.lineTo(mapX(b), mapY(yMin));
      ctx.lineTo(mapX(a), mapY(yMin));
      ctx.closePath();
      ctx.fillStyle = 'rgba(150,150,150,0.15)';
      ctx.fill();

      /* V(x) 曲线 */
      ctx.beginPath();
      for (var i = 0; i <= N; i++) {
        var x = a + i * h;
        var v = isFinite(vData[i]) ? vData[i] : 0;
        var clipped = Math.max(yMin, Math.min(yMax, v));
        if (i === 0) ctx.moveTo(mapX(x), mapY(clipped));
        else ctx.lineTo(mapX(x), mapY(clipped));
      }
      ctx.strokeStyle = C_FONT3;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      /* 本征能级线 + 波函数 */
      for (var ei = 0; ei < eigenvalues.length; ei++) {
        var E = eigenvalues[ei];
        var color = PALETTE[ei % PALETTE.length];
        var psi = eigenfunctions[ei];

        /* 能级水平线 (虚线) */
        ctx.save();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.5;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(mapX(a), mapY(E));
        ctx.lineTo(mapX(b), mapY(E));
        ctx.stroke();
        ctx.restore();

        /* 能级标注 */
        ctx.fillStyle = color;
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('E' + (ei + 1), mapX(b) + 4, mapY(E) + 4);

        /* 波函数 (偏移到能级处) */
        ctx.beginPath();
        for (var j = 0; j <= N; j++) {
          var x = a + j * h;
          var yVal = E + psi[j] * psiScale;
          var px = mapX(x);
          var py = mapY(yVal);
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    /* ── Canvas 绘制: F(E) 扫描曲线 ── */
    function drawScanCurve(scanE, scanF, eigenvalues) {
      var dpr = window.devicePixelRatio || 1;
      var W = cv2.clientWidth || 600;
      var H = cv2.clientHeight || 260;
      cv2.width = W * dpr;
      cv2.height = H * dpr;
      var ctx = cv2.getContext('2d');
      ctx.scale(dpr, dpr);

      var pad = { top: 16, right: 20, bottom: 40, left: 60 };
      var pw = W - pad.left - pad.right;
      var ph = H - pad.top - pad.bottom;

      ctx.clearRect(0, 0, W, H);

      if (scanE.length === 0) return;

      var eMin = scanE[0], eMax = scanE[scanE.length - 1];

      /* 自动 Y 范围 (截断极端值) */
      var finiteFvals = [];
      for (var i = 0; i < scanF.length; i++) {
        if (scanF[i] !== null && isFinite(scanF[i])) finiteFvals.push(scanF[i]);
      }
      if (finiteFvals.length === 0) return;

      finiteFvals.sort(function (x, y) { return x - y; });
      var lo = finiteFvals[Math.floor(finiteFvals.length * 0.05)] || -1;
      var hi = finiteFvals[Math.floor(finiteFvals.length * 0.95)] || 1;
      var yRange = hi - lo || 1;
      var yMin = lo - yRange * 0.15;
      var yMax = hi + yRange * 0.15;

      function mapX(e) { return pad.left + (e - eMin) / (eMax - eMin) * pw; }
      function mapY(v) { return pad.top + ph - (v - yMin) / (yMax - yMin) * ph; }

      /* 坐标轴 */
      ctx.strokeStyle = C_FONT3;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pad.left, pad.top);
      ctx.lineTo(pad.left, pad.top + ph);
      ctx.lineTo(pad.left + pw, pad.top + ph);
      ctx.stroke();

      /* 零线 */
      if (yMin < 0 && yMax > 0) {
        ctx.save();
        ctx.setLineDash([3, 3]);
        ctx.strokeStyle = C_FONT3;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.moveTo(pad.left, mapY(0));
        ctx.lineTo(pad.left + pw, mapY(0));
        ctx.stroke();
        ctx.restore();
      }

      /* X 轴刻度 */
      ctx.fillStyle = C_FONT3;
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      var nTickX = 6;
      for (var t = 0; t <= nTickX; t++) {
        var ev = eMin + (eMax - eMin) * t / nTickX;
        var sx = mapX(ev);
        ctx.beginPath();
        ctx.moveTo(sx, pad.top + ph);
        ctx.lineTo(sx, pad.top + ph + 4);
        ctx.stroke();
        ctx.fillText(ev.toFixed(1), sx, pad.top + ph + 16);
      }
      ctx.fillText('E', pad.left + pw / 2, H - 4);

      /* Y 轴标签 */
      ctx.save();
      ctx.translate(14, pad.top + ph / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = 'center';
      ctx.fillText('F(E)', 0, 0);
      ctx.restore();

      /* Y 轴刻度 */
      ctx.textAlign = 'right';
      var nTickY = 4;
      for (var t = 0; t <= nTickY; t++) {
        var yv = yMin + (yMax - yMin) * t / nTickY;
        var sy = mapY(yv);
        ctx.beginPath();
        ctx.moveTo(pad.left - 4, sy);
        ctx.lineTo(pad.left, sy);
        ctx.stroke();
        ctx.fillText(yv.toExponential(1), pad.left - 6, sy + 4);
      }

      /* F(E) 曲线 */
      ctx.beginPath();
      var started = false;
      for (var i = 0; i < scanE.length; i++) {
        var v = scanF[i];
        if (v === null || !isFinite(v)) { started = false; continue; }
        var clipped = Math.max(yMin, Math.min(yMax, v));
        var px = mapX(scanE[i]);
        var py = mapY(clipped);
        if (!started) { ctx.moveTo(px, py); started = true; }
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = C_ACCENT;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      /* 本征值标记 */
      for (var i = 0; i < eigenvalues.length; i++) {
        var ex = mapX(eigenvalues[i]);
        var ey = mapY(0);
        var color = PALETTE[i % PALETTE.length];

        /* 垂直辅助线 */
        ctx.save();
        ctx.setLineDash([2, 3]);
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        ctx.moveTo(ex, pad.top);
        ctx.lineTo(ex, pad.top + ph);
        ctx.stroke();
        ctx.restore();

        /* 标记点 */
        ctx.beginPath();
        ctx.arc(ex, ey, 4, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = C_BG;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    /* ── 事件绑定 ── */
    btnSolve.addEventListener('click', function () {
      try {
        solve();
      } catch (e) {
        divRes.innerHTML = '<span style="color:#f56c6c">计算错误: ' + e.message + '</span>';
      }
    });
  }
},
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
{id:'focus',name:'专注助手',icon:'🍅',cat:'productivity',desc:'番茄钟 · 白噪音 · 自定义音频',
html(){
  let wopts='',bopts='';
  for(let i=1;i<=120;i++){wopts+='<option value="'+i+'"'+(i===25?' selected':'')+'>'+i+'</option>';if(i<=60)bopts+='<option value="'+i+'"'+(i===5?' selected':'')+'>'+i+'</option>'}
  return'<div class="t-row" style="justify-content:center"><span class="t-lbl">工作</span><select class="t-sel" id="focWork" style="width:auto">'+wopts+'</select><span class="t-lbl">分钟</span><span class="t-lbl" style="margin-left:8px">休息</span><select class="t-sel" id="focBreak" style="width:auto">'+bopts+'</select><span class="t-lbl">分钟</span></div><div class="pomo-label" id="focPhase">专注时间</div><div class="pomo-time" id="focTime">25:00</div><div class="t-row" style="justify-content:center"><button class="t-btn t-btn-s" id="focToggle" style="min-width:100px">▶ 开始</button><button class="t-btn t-btn-d" id="focReset">↺ 重置</button></div><div style="text-align:center;margin:12px 0;font-size:.82em;color:#888">🍅 × <span id="focDone">0</span></div><div style="border-top:1px solid #f0f0f0;margin-top:10px;padding-top:10px"><div class="t-lbl" style="text-align:center;margin-bottom:8px">🎧 环境音</div><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center"><span class="focus-sound" data-type="white">🌊 白噪音</span><span class="focus-sound" data-type="brown">🌲 棕噪音</span><span class="focus-sound" data-type="pink">🌸 粉噪音</span><span class="focus-sound" data-type="rain">🌧️ 雨声</span><span class="focus-sound" data-type="fire">🔥 壁炉</span><span class="focus-sound" data-type="wind">💨 微风</span><span class="focus-sound" data-type="custom">🔗 自定义</span></div><div id="focCustomWrap" style="display:none;margin-top:8px;text-align:center"><input type="text" class="t-in" id="focCustomUrl" placeholder="粘贴 MP3/OGG 音频 URL" style="width:80%;font-size:.82em"><div style="font-size:.7em;color:#999;margin-top:4px">💡 可从 <a href="https://freesound.org" target="_blank">Freesound</a> / <a href="https://pixabay.com/sound-effects" target="_blank">Pixabay</a> 获取免费音效</div></div><div class="t-row" style="justify-content:center;margin-top:8px"><span class="t-lbl">音量</span><input type="range" id="focVol" min="0" max="100" value="20" style="width:150px"><span id="focVolVal" style="font-size:.78em;color:#888">20%</span></div></div>'},
init(el){
  let secs,running=false,timer=null,isWork=true,done=0;
  let actx=null,noiseNode=null,gainNode=null,activeSound=null,customAudio=null;
  function getWork(){return(+el.querySelector('#focWork').value||25)*60}
  function getBreak(){return(+el.querySelector('#focBreak').value||5)*60}
  function fmt(s){return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
  function reset(){running=false;clearInterval(timer);secs=getWork();isWork=true;
    el.querySelector('#focPhase').textContent='专注时间';
    el.querySelector('#focTime').textContent=fmt(secs);
    el.querySelector('#focToggle').textContent='▶ 开始';el.querySelector('#focToggle').className='t-btn t-btn-s';
  }
  secs=getWork();
  function tick(){
    if(!running)return;secs--;el.querySelector('#focTime').textContent=fmt(secs);
    if(secs<=0){
      if(isWork){done++;el.querySelector('#focDone').textContent=done;secs=getBreak();isWork=false;el.querySelector('#focPhase').textContent='☕ 休息时间'}
      else{secs=getWork();isWork=true;el.querySelector('#focPhase').textContent='专注时间'}
      el.querySelector('#focTime').textContent=fmt(secs);
      try{new Notification(isWork?'休息结束，继续专注！':'🍅 番茄完成！休息一下')}catch(e){}
    }
  }
  el.querySelector('#focToggle').onclick=function(){
    if(running){running=false;clearInterval(timer);this.textContent='▶ 继续';this.className='t-btn t-btn-s'}
    else{running=true;timer=setInterval(tick,1000);this.textContent='⏸ 暂停';this.className='t-btn t-btn-o';try{Notification.requestPermission()}catch(e){}}
  };
  el.querySelector('#focReset').onclick=reset;
  el.querySelector('#focWork').onchange=()=>{if(!running)reset()};
  el.querySelector('#focBreak').onchange=()=>{if(!running&&!isWork){secs=getBreak();el.querySelector('#focTime').textContent=fmt(secs)}};

  function stopSound(){
    if(noiseNode)try{noiseNode.stop()}catch(e){}
    noiseNode=null;
    if(customAudio){customAudio.pause();customAudio.src='';customAudio=null}
  }

  function playCustom(url){
    if(!actx)actx=new(window.AudioContext||window.webkitAudioContext)();
    if(actx.state==='suspended')actx.resume();
    stopSound();
    customAudio=new Audio();customAudio.crossOrigin='anonymous';customAudio.loop=true;customAudio.src=url;
    const src=actx.createMediaElementSource(customAudio);
    gainNode=actx.createGain();gainNode.gain.value=el.querySelector('#focVol').value/100;
    src.connect(gainNode).connect(actx.destination);
    customAudio.play().catch(e=>{el.querySelector('#focCustomUrl').placeholder='❌ 无法播放此 URL'});
  }

  function makeNoise(type){
    if(!actx)actx=new(window.AudioContext||window.webkitAudioContext)();
    if(actx.state==='suspended')actx.resume();
    stopSound();
    if(type==='custom'){
      const url=el.querySelector('#focCustomUrl').value.trim();
      if(url)playCustom(url);
      return;
    }
    const sr=actx.sampleRate,dur=10,buf=actx.createBuffer(2,sr*dur,sr),dL=buf.getChannelData(0),dR=buf.getChannelData(1);
    const len=dL.length;
    if(type==='white'){
      for(let i=0;i<len;i++){dL[i]=(Math.random()*2-1)*.4;dR[i]=(Math.random()*2-1)*.4}
    }else if(type==='brown'){
      let vL=0,vR=0;
      for(let i=0;i<len;i++){vL+=(Math.random()*2-1)*.015;vR+=(Math.random()*2-1)*.015;vL=Math.max(-.5,Math.min(.5,vL));vR=Math.max(-.5,Math.min(.5,vR));dL[i]=vL;dR[i]=vR}
    }else if(type==='pink'){
      let b0L=0,b1L=0,b2L=0,b3L=0,b4L=0,b5L=0,b6L=0;
      let b0R=0,b1R=0,b2R=0,b3R=0,b4R=0,b5R=0,b6R=0;
      for(let i=0;i<len;i++){
        const wL=Math.random()*2-1,wR=Math.random()*2-1;
        b0L=.99886*b0L+wL*.0555179;b1L=.99332*b1L+wL*.0750759;b2L=.969*b2L+wL*.153852;b3L=.8665*b3L+wL*.3104856;b4L=.55*b4L+wL*.5329522;b5L=-.7616*b5L-wL*.016898;
        dL[i]=(b0L+b1L+b2L+b3L+b4L+b5L+b6L+wL*.5362)*.11;b6L=wL*.115926;
        b0R=.99886*b0R+wR*.0555179;b1R=.99332*b1R+wR*.0750759;b2R=.969*b2R+wR*.153852;b3R=.8665*b3R+wR*.3104856;b4R=.55*b4R+wR*.5329522;b5R=-.7616*b5R-wR*.016898;
        dR[i]=(b0R+b1R+b2R+b3R+b4R+b5R+b6R+wR*.5362)*.11;b6R=wR*.115926;
      }
    }else if(type==='rain'){
      for(let i=0;i<len;i++){
        let v=(Math.random()*2-1)*.12;
        if(Math.random()<.0003)v+=Math.random()*.6-.3;
        if(Math.random()<.001)v+=(Math.random()-.5)*.3;
        dL[i]=v+(Math.random()*2-1)*.03;dR[i]=v+(Math.random()*2-1)*.03;
      }
    }else if(type==='fire'){
      let crack=0;
      for(let i=0;i<len;i++){
        let v=(Math.random()*2-1)*.08;crack*=.999;if(Math.random()<.0008)crack=(Math.random()-.3)*.6;v+=crack;
        const drift=Math.sin(i/sr*2)*0.02;
        dL[i]=v+drift+(Math.random()-.5)*.02;dR[i]=v-drift+(Math.random()-.5)*.02;
      }
    }else if(type==='wind'){
      let vL=0,vR=0,gust=0;
      for(let i=0;i<len;i++){
        gust+=(Math.random()-.5)*.0001;gust=Math.max(-.1,Math.min(.1,gust));
        vL+=(Math.random()-.5)*.008+gust;vR+=(Math.random()-.5)*.008+gust*.8;
        vL*=.9995;vR*=.9995;
        dL[i]=vL+(Math.random()-.5)*.02;dR[i]=vR+(Math.random()-.5)*.02;
      }
    }
    noiseNode=actx.createBufferSource();noiseNode.buffer=buf;noiseNode.loop=true;
    const filter=actx.createBiquadFilter();
    if(type==='white'){filter.type='lowpass';filter.frequency.value=8000}
    else if(type==='rain'){filter.type='bandpass';filter.frequency.value=2000;filter.Q.value=0.5}
    else if(type==='wind'){filter.type='lowpass';filter.frequency.value=600}
    else{filter.type='lowpass';filter.frequency.value=12000}
    gainNode=actx.createGain();gainNode.gain.value=el.querySelector('#focVol').value/100;
    noiseNode.connect(filter).connect(gainNode).connect(actx.destination);noiseNode.start();
  }

  el.querySelectorAll('.focus-sound').forEach(s=>{
    s.onclick=()=>{
      const isCustom=s.dataset.type==='custom';
      el.querySelector('#focCustomWrap').style.display=isCustom?'':'none';
      if(activeSound===s){s.classList.remove('active');stopSound();activeSound=null;return}
      el.querySelectorAll('.focus-sound').forEach(x=>x.classList.remove('active'));
      s.classList.add('active');activeSound=s;
      if(!isCustom)makeNoise(s.dataset.type);
    }
  });
  el.querySelector('#focCustomUrl').onchange=()=>{if(activeSound&&activeSound.dataset.type==='custom')makeNoise('custom')};
  el.querySelector('#focVol').oninput=function(){el.querySelector('#focVolVal').textContent=this.value+'%';if(gainNode)gainNode.gain.value=this.value/100;if(customAudio)customAudio.volume=this.value/100};
  el._cleanup=()=>{clearInterval(timer);stopSound();if(actx)try{actx.close()}catch(e){}};
}},
{id:'fourier',name:'傅里叶合成器',icon:'〰️',cat:'music',desc:'傅里叶级数 · 乐器音色 · 手绘波形 · 音频播放',
html:function(){
  return '<div class="t-row" style="flex-wrap:wrap">'+
    '<label class="t-lbl">波形/音色</label>'+
    '<select class="t-sel" id="fouWave">'+
      '<option value="square">方波</option>'+
      '<option value="sawtooth">锯齿波</option>'+
      '<option value="triangle">三角波</option>'+
      '<option disabled>──── 乐器音色 ────</option>'+
      '<option value="piano">🎹 钢琴</option>'+
      '<option value="erhu">🎻 二胡</option>'+
      '<option value="clarinet">🎷 单簧管</option>'+
      '<option value="trumpet">🎺 小号</option>'+
      '<option value="flute">🪈 笛子</option>'+
      '<option value="organ">🎙️ 风琴</option>'+
      '<option disabled>────────────</option>'+
      '<option value="custom">自由调节</option>'+
      '<option value="draw">✏️ 手绘波形</option>'+
    '</select>'+
    '<label class="t-lbl" style="margin-left:12px">谐波数 N</label>'+
    '<input class="t-in" id="fouN" type="number" min="1" max="32" value="8" style="width:60px">'+
    '<label class="t-lbl" style="margin-left:12px">基频 f₀</label>'+
    '<input class="t-in" id="fouFreq" type="number" min="20" max="2000" value="220" style="width:70px">'+
    '<span class="t-lbl">Hz</span>'+
  '</div>'+
  '<canvas id="fouCv" class="t-cv" style="max-width:760px;height:360px;margin:8px auto;display:block"></canvas>'+
  '<div id="fouDrawHint" style="text-align:center;font-size:12px;color:#99AAB5;display:none">🎨 在画布左半部分拖动绘制一个周期的波形，松开后自动计算傅里叶系数</div>'+
  '<div id="fouSliders" style="max-width:760px;margin:0 auto;max-height:220px;overflow-y:auto;padding:4px 0"></div>'+
  '<div class="t-row" style="justify-content:center;margin-top:6px;flex-wrap:wrap">'+
    '<button class="t-btn" id="fouPlay">▶ 播放</button>'+
    '<button class="t-btn t-btn-o" id="fouStop" style="display:none">■ 停止</button>'+
    '<button class="t-btn t-btn-o" id="fouAnim">🎬 逐项叠加</button>'+
    '<button class="t-btn t-btn-o" id="fouReset">重置系数</button>'+
  '</div>'+
  '<div id="fouFormula" class="t-res" style="text-align:center;margin-top:6px"></div>';
},
init:function(el){
  var cv=el.querySelector('#fouCv');
  var ctx=cv.getContext('2d');
  var dpr=window.devicePixelRatio||1;
  var CW=Math.min(760,cv.parentElement.clientWidth-4),CH=Math.round(CW*0.47);
  cv.width=CW*dpr;cv.height=CH*dpr;
  cv.style.width=CW+'px';cv.style.height=CH+'px';
  ctx.scale(dpr,dpr);

  var cs=getComputedStyle(document.documentElement);
  var accent=cs.getPropertyValue('--accent').trim()||'#5B8BA4';
  var bgPaper=cs.getPropertyValue('--bg-paper').trim()||'#FCFCFD';
  var fontColor1=cs.getPropertyValue('--font-color-1').trim()||'#2D2D32';
  var fontColor3=cs.getPropertyValue('--font-color-3').trim()||'#99AAB5';
  var borderWarm=cs.getPropertyValue('--border-warm').trim()||'#DCE1E7';

  var selWave=el.querySelector('#fouWave');
  var inpN=el.querySelector('#fouN');
  var inpFreq=el.querySelector('#fouFreq');
  var divSliders=el.querySelector('#fouSliders');
  var btnPlay=el.querySelector('#fouPlay');
  var btnStop=el.querySelector('#fouStop');
  var btnAnim=el.querySelector('#fouAnim');
  var btnReset=el.querySelector('#fouReset');
  var divFormula=el.querySelector('#fouFormula');
  var divDrawHint=el.querySelector('#fouDrawHint');

  var MAX_N=32;
  var amplitudes=[];
  var phases=[];
  var N=8;
  var audioCtx=null;
  var audioNode=null;
  var playing=false;
  var animating=false;
  var animTimerId=null;

  var DRAW_M=200;
  var drawnWave=null;
  var isDrawing=false;
  var lastDrawIdx=-1;

  var padL=50,padR=20,padT=30,padB=30;
  var plotW=CW-padL-padR,plotH=CH-padT-padB;
  var midY=padT+plotH/2;
  var yScale=plotH/2*0.85;
  var periods=2;

  /* ===== 乐器谐波频谱表 ===== */
  var TIMBRES={
    piano:   [0,1.0,.70,.40,.25,.18,.12,.08,.06,.04,.03],
    erhu:    [0,1.0,.85,.65,.45,.30,.20,.12,.08,.05,.03],
    clarinet:[0,1.0,.06,.85,.04,.55,.03,.35,.02,.18,.01],
    trumpet: [0,1.0,.90,.85,.70,.55,.40,.30,.20,.12,.08],
    flute:   [0,1.0,.12,.04,.02,.01],
    organ:   [0,1.0,.80,.60,.50,.40,.35,.28,.20,.15,.10]
  };

  function isTimbre(t){return !!TIMBRES[t]}

  /* ===== 理论系数 ===== */
  function theoreticalCoeffs(type,n){
    if(type==='square'){
      if(n%2===0)return{a:0,p:0};
      return{a:4/(Math.PI*n),p:0};
    }
    if(type==='sawtooth'){
      return{a:2/(Math.PI*n)*((n%2===0)?-1:1),p:0};
    }
    if(type==='triangle'){
      if(n%2===0)return{a:0,p:0};
      var sign=((n-1)/2%2===0)?1:-1;
      return{a:sign*8/(Math.PI*Math.PI*n*n),p:0};
    }
    if(TIMBRES[type]){
      var arr=TIMBRES[type];
      return{a:n<arr.length?arr[n]:0,p:0};
    }
    return{a:0,p:0};
  }

  function setCoeffsFromWave(){
    var type=selWave.value;
    for(var n=1;n<=MAX_N;n++){
      var c=theoreticalCoeffs(type,n);
      amplitudes[n]=c.a;phases[n]=c.p;
    }
  }

  function computeDFT(){
    if(!drawnWave)return;
    for(var n=1;n<=MAX_N;n++){
      var sum=0;
      for(var k=0;k<DRAW_M;k++){
        sum+=(drawnWave[k]||0)*Math.sin(2*Math.PI*n*k/DRAW_M);
      }
      amplitudes[n]=Math.max(-1,Math.min(1,2*sum/DRAW_M));
    }
  }

  /* ===== 目标波形 ===== */
  function targetWave(t){
    var type=selWave.value;
    var ph=t-Math.floor(t);
    if(type==='square') return ph<0.5?1:-1;
    if(type==='sawtooth'){
      if(ph<0.5)return 2*ph;return 2*ph-2;
    }
    if(type==='triangle'){
      if(ph<0.25)return 4*ph;
      if(ph<0.75)return 2-4*ph;
      return 4*ph-4;
    }
    if(type==='draw'&&drawnWave){
      var idx=Math.floor(ph*DRAW_M);
      if(idx>=DRAW_M)idx=DRAW_M-1;
      return drawnWave[idx]||0;
    }
    if(TIMBRES[type]){
      var sum2=0;
      for(var nn=1;nn<=MAX_N;nn++){
        var cc=theoreticalCoeffs(type,nn);
        if(Math.abs(cc.a)>1e-10)sum2+=cc.a*Math.sin(2*Math.PI*nn*t);
      }
      return sum2;
    }
    return 0;
  }

  /* ===== 合成 ===== */
  function evaluate(t){
    var sum=0;
    for(var n=1;n<=N;n++){
      var a=amplitudes[n]||0;
      if(Math.abs(a)<1e-10)continue;
      sum+=a*Math.sin(2*Math.PI*n*t+(phases[n]||0));
    }
    return sum;
  }

  function computeRMS(){
    var type=selWave.value;
    if(type==='custom')return -1;
    var M=400,sumSq=0;
    for(var k=0;k<M;k++){
      var t=k/M;
      var d=evaluate(t)-targetWave(t);
      sumSq+=d*d;
    }
    return Math.sqrt(sumSq/M);
  }

  /* ===== 滑块面板 ===== */
  function buildSliders(){
    N=parseInt(inpN.value)||8;
    if(N<1)N=1;if(N>MAX_N)N=MAX_N;
    divSliders.innerHTML='';
    for(var n=1;n<=N;n++){
      (function(n){
        var hue=((n-1)*37)%360;
        var row=document.createElement('div');
        row.style.cssText='display:flex;align-items:center;gap:6px;margin:2px 0;font-size:13px';
        var dot=document.createElement('span');
        dot.style.cssText='width:10px;height:10px;border-radius:50%;flex-shrink:0;background:hsl('+hue+',55%,55%)';
        var lbl=document.createElement('span');
        lbl.style.cssText='width:28px;text-align:right;color:'+fontColor1;
        lbl.textContent='n='+n;
        var sl=document.createElement('input');
        sl.type='range';sl.min='-1';sl.max='1';sl.step='0.01';
        sl.value=amplitudes[n]||0;
        sl.style.cssText='flex:1;max-width:280px';
        var val=document.createElement('span');
        val.style.cssText='width:48px;font-size:12px;color:'+fontColor3;
        val.textContent=(amplitudes[n]||0).toFixed(2);
        sl.oninput=function(){
          amplitudes[n]=parseFloat(sl.value);
          val.textContent=amplitudes[n].toFixed(2);
          drawWave();updateFormula();
        };
        row.appendChild(dot);
        row.appendChild(lbl);
        row.appendChild(sl);
        row.appendChild(val);
        divSliders.appendChild(row);
      })(n);
    }
  }

  /* ===== 绘制 ===== */
  function drawWave(){
    ctx.clearRect(0,0,CW,CH);
    ctx.fillStyle=bgPaper;
    ctx.fillRect(0,0,CW,CH);

    ctx.strokeStyle=borderWarm;ctx.lineWidth=1;
    ctx.beginPath();
    ctx.moveTo(padL,padT);ctx.lineTo(padL,padT+plotH);ctx.lineTo(padL+plotW,padT+plotH);
    ctx.stroke();

    ctx.strokeStyle=fontColor3;ctx.setLineDash([4,4]);
    ctx.beginPath();ctx.moveTo(padL,midY);ctx.lineTo(padL+plotW,midY);ctx.stroke();
    ctx.setLineDash([]);

    ctx.font='11px sans-serif';ctx.fillStyle=fontColor3;
    ctx.textAlign='right';ctx.textBaseline='middle';
    ctx.fillText('+1',padL-6,padT+plotH*0.075);
    ctx.fillText('0',padL-6,midY);
    ctx.fillText('-1',padL-6,padT+plotH*0.925);
    ctx.textAlign='center';ctx.textBaseline='top';
    ctx.fillText('0',padL,padT+plotH+4);
    ctx.fillText('T',padL+plotW/2,padT+plotH+4);
    ctx.fillText('2T',padL+plotW,padT+plotH+4);

    if(selWave.value==='draw'){
      ctx.strokeStyle='rgba(91,139,164,0.2)';ctx.setLineDash([3,5]);ctx.lineWidth=1;
      ctx.beginPath();ctx.moveTo(padL+plotW/2,padT);ctx.lineTo(padL+plotW/2,padT+plotH);ctx.stroke();
      ctx.setLineDash([]);
      ctx.font='11px sans-serif';ctx.fillStyle='rgba(91,139,164,0.5)';ctx.textBaseline='top';
      ctx.fillText('← 绘制区',padL+plotW/4,padT+4);
    }

    var samples=plotW;
    var type=selWave.value;

    if(type!=='custom'){
      ctx.strokeStyle=fontColor3;ctx.setLineDash([3,3]);ctx.lineWidth=1.5;
      ctx.beginPath();
      for(var i=0;i<samples;i++){
        var t=i/samples*periods;
        var y=targetWave(t);
        var px=padL+i;
        var py=midY-y*yScale;
        if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
      }
      ctx.stroke();ctx.setLineDash([]);
    }

    for(var n=1;n<=N;n++){
      var a=amplitudes[n]||0;
      if(Math.abs(a)<0.005)continue;
      ctx.strokeStyle='hsla('+((n-1)*37)%360+',55%,55%,0.25)';
      ctx.lineWidth=1;
      ctx.beginPath();
      for(var i=0;i<samples;i++){
        var t=i/samples*periods;
        var y=a*Math.sin(2*Math.PI*n*t+(phases[n]||0));
        var px=padL+i;
        var py=midY-y*yScale;
        if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
      }
      ctx.stroke();
    }

    ctx.strokeStyle=accent;ctx.lineWidth=2.5;
    ctx.beginPath();
    for(var i=0;i<samples;i++){
      var t=i/samples*periods;
      var y=evaluate(t);
      var px=padL+i;
      var py=midY-y*yScale;
      if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
    }
    ctx.stroke();

    ctx.font='12px sans-serif';ctx.textAlign='left';ctx.textBaseline='top';
    var lx=padL+10,ly=padT+6;
    ctx.fillStyle=accent;
    ctx.fillRect(lx,ly+2,16,3);
    ctx.fillText('合成 (N='+N+')',lx+20,ly-2);
    if(type!=='custom'){
      ly+=16;
      ctx.fillStyle=fontColor3;
      ctx.setLineDash([3,3]);
      ctx.beginPath();ctx.moveTo(lx,ly+3);ctx.lineTo(lx+16,ly+3);ctx.stroke();
      ctx.setLineDash([]);
      var nm={square:'方波',sawtooth:'锯齿波',triangle:'三角波',draw:'手绘',
              piano:'钢琴',erhu:'二胡',clarinet:'单簧管',trumpet:'小号',flute:'笛子',organ:'风琴'};
      ctx.fillText('目标: '+(nm[type]||type),lx+20,ly-2);
    }
    var rms=computeRMS();
    if(rms>=0){
      ly+=16;
      ctx.fillStyle='#e17055';
      ctx.fillText('RMS 误差 = '+rms.toFixed(4),lx+20,ly-2);
    }
  }

  /* ===== 公式 ===== */
  function updateFormula(){
    var terms=[];
    for(var n=1;n<=N;n++){
      var a=amplitudes[n]||0;
      if(Math.abs(a)<0.005)continue;
      var coeff=Math.abs(a).toFixed(3);
      var sign=a<0?' − ':' + ';
      if(terms.length===0&&a>0)sign='';
      terms.push(sign+coeff+'sin('+n+'ωt)');
      if(terms.length>=6){terms.push('…');break;}
    }
    divFormula.textContent='f(t) ≈ '+(terms.length?terms.join(''):'0');
  }

  /* ===== 逐项叠加动画 ===== */
  function startAnimFou(){
    if(animating)return;
    animating=true;
    btnAnim.textContent='⏳ 动画中...';
    var maxN=parseInt(inpN.value)||8;
    if(maxN>MAX_N)maxN=MAX_N;
    var curN=0;
    function tick(){
      curN++;
      if(curN>maxN){animating=false;btnAnim.textContent='🎬 逐项叠加';inpN.value=maxN;buildSliders();drawWave();updateFormula();return}
      inpN.value=curN;buildSliders();drawWave();updateFormula();
      animTimerId=setTimeout(tick,350);
    }
    tick();
  }
  function stopAnimFou(){
    if(!animating)return;
    animating=false;
    if(animTimerId){clearTimeout(animTimerId);animTimerId=null}
    btnAnim.textContent='🎬 逐项叠加';
  }

  /* ===== 手绘交互 ===== */
  function canvasToWave(e){
    var rect=cv.getBoundingClientRect();
    var scX=CW/rect.width,scY=CH/rect.height;
    var cx=e.clientX||(e.touches&&e.touches[0].clientX);
    var cy=e.clientY||(e.touches&&e.touches[0].clientY);
    var x=(cx-rect.left)*scX,y=(cy-rect.top)*scY;
    var halfW=plotW/2;
    var idx=Math.floor((x-padL)/halfW*DRAW_M);
    var val=(midY-y)/yScale;
    val=Math.max(-1,Math.min(1,val));
    return{idx:idx,val:val};
  }
  function interpDraw(from,to,fv,tv){
    if(from<0)from=0;if(to>=DRAW_M)to=DRAW_M-1;
    if(from>to){var t2=from;from=to;to=t2;var v2=fv;fv=tv;tv=v2}
    for(var i=from;i<=to;i++){
      var t=(to===from)?0:(i-from)/(to-from);
      drawnWave[i]=fv+(tv-fv)*t;
    }
  }
  function initDrawn(){if(!drawnWave){drawnWave=[];for(var i=0;i<DRAW_M;i++)drawnWave[i]=0}}
  function finishDraw(){isDrawing=false;lastDrawIdx=-1;computeDFT();buildSliders();drawWave();updateFormula();}

  cv.addEventListener('mousedown',function(e){
    if(selWave.value!=='draw')return;
    var c=canvasToWave(e);if(c.idx<0||c.idx>=DRAW_M)return;
    isDrawing=true;initDrawn();drawnWave[c.idx]=c.val;lastDrawIdx=c.idx;drawWave();
  });
  cv.addEventListener('mousemove',function(e){
    if(!isDrawing||selWave.value!=='draw')return;
    var c=canvasToWave(e);if(c.idx<0||c.idx>=DRAW_M)return;
    if(lastDrawIdx>=0)interpDraw(lastDrawIdx,c.idx,drawnWave[lastDrawIdx]||0,c.val);
    else drawnWave[c.idx]=c.val;
    lastDrawIdx=c.idx;drawWave();
  });
  cv.addEventListener('mouseup',function(){if(isDrawing&&selWave.value==='draw')finishDraw()});
  cv.addEventListener('mouseleave',function(){if(isDrawing&&selWave.value==='draw')finishDraw()});

  cv.addEventListener('touchstart',function(e){
    if(selWave.value!=='draw')return;e.preventDefault();
    var c=canvasToWave(e);if(c.idx<0||c.idx>=DRAW_M)return;
    isDrawing=true;initDrawn();drawnWave[c.idx]=c.val;lastDrawIdx=c.idx;drawWave();
  },{passive:false});
  cv.addEventListener('touchmove',function(e){
    if(!isDrawing||selWave.value!=='draw')return;e.preventDefault();
    var c=canvasToWave(e);if(c.idx<0||c.idx>=DRAW_M)return;
    if(lastDrawIdx>=0)interpDraw(lastDrawIdx,c.idx,drawnWave[lastDrawIdx]||0,c.val);
    else drawnWave[c.idx]=c.val;
    lastDrawIdx=c.idx;drawWave();
  },{passive:false});
  cv.addEventListener('touchend',function(e){
    if(selWave.value!=='draw')return;e.preventDefault();finishDraw();
  },{passive:false});

  /* ===== Web Audio（含包络与颤音） ===== */
  function startAudio(){
    if(playing)return;
    try{audioCtx=new(window.AudioContext||window.webkitAudioContext)()}catch(e){return}
    var f0=parseFloat(inpFreq.value)||220;
    var bufSize=4096;
    audioNode=audioCtx.createScriptProcessor(bufSize,0,1);
    var sr=audioCtx.sampleRate;
    var ph=0;
    var noteAge=0;
    var oscPh=[];
    for(var nn=0;nn<=MAX_N;nn++)oscPh[nn]=0;
    var curType=selWave.value;
    audioNode.onaudioprocess=function(e){
      var out=e.outputBuffer.getChannelData(0);
      for(var s=0;s<bufSize;s++){
        var t=ph/sr;
        var noteT=noteAge/sr;

        /* 包络 */
        var env=1.0;
        if(curType==='piano'){
          env=Math.exp(-noteT*4);
          if(env<0.003){noteAge=0;for(var nn=1;nn<=MAX_N;nn++)oscPh[nn]=0}
        }else if(curType==='erhu'){
          env=Math.min(1,noteT*4);
        }

        /* 频率（二胡加颤音 ±2.5%@5.5Hz） */
        var freq=f0;
        if(curType==='erhu') freq=f0*(1+0.025*Math.sin(2*Math.PI*5.5*t));

        /* 合成 */
        var v=0;
        for(var n=1;n<=N;n++){
          var a=amplitudes[n]||0;
          if(Math.abs(a)<1e-10)continue;
          oscPh[n]+=2*Math.PI*n*freq/sr;
          v+=a*Math.sin(oscPh[n]);
        }
        out[s]=v*0.3*env;
        ph++;noteAge++;
      }
    };
    audioNode.connect(audioCtx.destination);
    playing=true;btnPlay.style.display='none';btnStop.style.display='';
  }
  function stopAudio(){
    if(!playing)return;
    if(audioNode){audioNode.disconnect();audioNode=null}
    if(audioCtx){audioCtx.close();audioCtx=null}
    playing=false;btnPlay.style.display='';btnStop.style.display='none';
  }

  /* ===== 事件 ===== */
  selWave.onchange=function(){
    stopAnimFou();
    var mode=selWave.value;
    divDrawHint.style.display=mode==='draw'?'':'none';
    if(mode==='draw'){drawnWave=null}
    else if(mode!=='custom')setCoeffsFromWave();
    buildSliders();drawWave();updateFormula();
  };
  inpN.onchange=function(){
    stopAnimFou();
    N=parseInt(inpN.value)||8;if(N<1)N=1;if(N>MAX_N)N=MAX_N;
    var m=selWave.value;
    if(m!=='custom'&&m!=='draw')setCoeffsFromWave();
    if(m==='draw'&&drawnWave)computeDFT();
    buildSliders();drawWave();updateFormula();
  };
  btnPlay.onclick=startAudio;
  btnStop.onclick=stopAudio;
  btnAnim.onclick=function(){if(animating)stopAnimFou();else startAnimFou()};
  btnReset.onclick=function(){
    stopAnimFou();
    if(selWave.value==='draw'){drawnWave=null}
    else if(selWave.value!=='custom')setCoeffsFromWave();
    else{for(var n=1;n<=MAX_N;n++){amplitudes[n]=0;phases[n]=0}}
    buildSliders();drawWave();updateFormula();
  };

  /* ===== 初始化 ===== */
  for(var n=0;n<=MAX_N;n++){amplitudes[n]=0;phases[n]=0}
  setCoeffsFromWave();
  buildSliders();drawWave();updateFormula();

  el._cleanup=function(){stopAudio();stopAnimFou()};
}},
{id:'frontmatter',name:'文章模板',icon:'📝',cat:'productivity',desc:'Front-matter 生成 · 下载 .md',
html(){return'<div style="font-size:.75em;color:#888;margin-bottom:10px">✍️ 生成 Hexo 文章 Front-matter · 自动 UUID · 一键下载 .md</div>'
+'<div class="t-row"><span class="t-lbl" style="min-width:55px">标题 *</span><input class="t-in" id="fmTitle" placeholder="文章标题（必填）" style="flex:1"></div>'
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
+'<div class="t-row"><span class="t-lbl" style="min-width:55px">专栏</span><input class="t-in" id="fmSeries" placeholder="如: 原子物理学（可选）" style="flex:1"><input class="t-in" id="fmSeriesSlug" placeholder="slug: atomic-physics" style="flex:1;max-width:160px"></div>'
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
  function pad2(n){return n<10?'0'+n:''+n}
  function now(){var d=new Date();return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate())+' '+pad2(d.getHours())+':'+pad2(d.getMinutes())+':'+pad2(d.getSeconds())}
  function splitTrim(s){return s?s.split(',').map(function(x){return x.trim()}).filter(function(x){return x}):[]}
  q('#fmEncrypt').onchange=function(){q('#fmEncRow').style.display=this.checked?'flex':'none'};
  var presets={
    essay:{tags:'随笔',cats:'有感',numSec:false,toc:false,series:'',slug:''},
    academic:{tags:'物理,备考',cats:'资源',numSec:true,toc:true,series:'',slug:''},
    resource:{tags:'工具,资源',cats:'资源',numSec:false,toc:false,series:'',slug:''},
    reading:{tags:'读书',cats:'读书',numSec:false,toc:false,series:'',slug:''}
  };
  el.querySelectorAll('.fm-preset').forEach(function(btn){btn.onclick=function(){
    var p=presets[btn.dataset.p];if(!p)return;
    q('#fmTags').value=p.tags;q('#fmCats').value=p.cats;
    q('#fmNumSec').checked=p.numSec;q('#fmToc').checked=p.toc;
    q('#fmSeries').value=p.series;q('#fmSeriesSlug').value=p.slug;
    gen();
  }});
  function gen(){
    var title=q('#fmTitle').value.trim();
    if(!title){q('#fmOut').textContent='⚠️ 请输入标题';return''}
    var lines=[];
    lines.push('---');
    lines.push('uuid: '+uuid());
    lines.push('title: '+title);
    lines.push('date: '+now());
    var authors=splitTrim(q('#fmAuthor').value);
    if(authors.length===0)authors=['yeliqin666'];
    if(authors.length===1){lines.push('author: '+authors[0])}
    else{lines.push('author:');authors.forEach(function(a){lines.push('  - '+a)})}
    if(q('#fmNumSec').checked){lines.push('numbersections: true');lines.push('secnumdepth: 3')}
    if(q('#fmToc').checked)lines.push('toc: true');
    var series=q('#fmSeries').value.trim();
    if(series){lines.push('series: '+series);var slug=q('#fmSeriesSlug').value.trim();if(slug)lines.push('series_slug: '+slug)}
    if(q('#fmTop').checked)lines.push('top: true');
    if(q('#fmEncrypt').checked){var pwd=q('#fmPwd').value.trim();if(pwd)lines.push('password: '+pwd)}
    if(q('#fmNoComment').checked)lines.push('comment: false');
    var tags=splitTrim(q('#fmTags').value);
    lines.push('tags:');if(tags.length)tags.forEach(function(t){lines.push('  - '+t)});else lines.push('  - ');
    var cats=splitTrim(q('#fmCats').value);
    lines.push('categories:');if(cats.length)cats.forEach(function(c){lines.push('  - '+c)});else lines.push('  - ');
    lines.push('---');lines.push('');
    var result=lines.join('\n');
    q('#fmOut').textContent=result;
    return result
  }
  q('#fmGen').onclick=gen;
  q('#fmDl').onclick=function(){
    var content=gen();if(!content)return;
    var title=q('#fmTitle').value.trim();
    var a=document.createElement('a');
    a.href='data:text/plain;charset=utf-8,'+encodeURIComponent(content);
    a.download=title+'.md';a.style.display='none';
    document.body.appendChild(a);a.click();document.body.removeChild(a);
  };
  q('#fmCopy').onclick=function(){
    var content=gen();if(!content)return;
    navigator.clipboard.writeText(content).then(function(){q('#fmCopy').textContent='✓ 已复制';setTimeout(function(){q('#fmCopy').textContent='📋 复制'},1500)});
  };
  q('#fmTitle').oninput=gen;
}},
{id:'gpa',name:'GPA 计算器',icon:'📊',cat:'campus',desc:'绩点计算 · XJTU 默认规则 · 可自定义',
html:function(){return '<div class="t-row" style="align-items:center;flex-wrap:wrap">'+
  '<span class="t-lbl" id="gpaRuleDesc" style="flex:1;font-size:.75em;color:#888">📐 XJTU 研究生绩点: 95→4.3 · 90→4.0 · 85→3.7 · 81→3.3 · 78→3.0 · 75→2.7 · 72→2.3 · 68→2.0 · 64→1.7 · 60→1.0</span>'+
  '<button class="t-btn t-btn-o" id="gpaRuleBtn" style="font-size:.72em;padding:3px 10px">⚙ 规则设置</button>'+
'</div>'+
'<div id="gpaRulePanel" style="display:none;border:1px solid #DCE1E7;border-radius:8px;padding:10px;margin:6px 0;background:#F5F7F9">'+
  '<div class="t-row" style="justify-content:space-between;align-items:center;margin-bottom:6px">'+
    '<span class="t-lbl" style="font-weight:600">分数→绩点 映射规则</span>'+
    '<div><button class="t-btn t-btn-o" id="gpaAddRule" style="padding:2px 8px;font-size:.72em">＋ 添加区间</button>'+
    '<button class="t-btn t-btn-o" id="gpaResetRule" style="padding:2px 8px;font-size:.72em;margin-left:4px">恢复 XJTU 默认</button></div>'+
  '</div>'+
  '<div id="gpaRuleBody" style="max-height:200px;overflow-y:auto"></div>'+
  '<div style="font-size:.7em;color:#99AAB5;margin-top:6px">提示: 分数区间从高到低排列，不在任何区间内的分数绩点为 0。不同学校可能有不同的分段与满绩。</div>'+
'</div>'+
'<div style="overflow-x:auto"><table class="ct-table" id="gpaTable"><thead><tr><th style="min-width:140px">课程名称</th><th style="width:70px">学分</th><th style="width:70px">分数</th><th style="width:60px">绩点</th><th style="width:40px"></th></tr></thead><tbody id="gpaTbody"></tbody></table></div>'+
'<div class="t-row" style="justify-content:center;margin:10px 0"><button class="t-btn t-btn-s" id="gpaAdd">＋ 添加课程</button><button class="t-btn t-btn-o" id="gpaClear" style="font-size:.75em">🗑️ 清空</button></div>'+
'<div id="gpaResult" style="background:#f0f7ff;border-radius:10px;padding:14px;text-align:center;margin-top:8px"><div style="font-size:.78em;color:#888">加权平均绩点</div><div id="gpaVal" style="font-size:2.2em;font-weight:700;color:#409eff">—</div><div id="gpaDetail" style="font-size:.75em;color:#999;margin-top:4px"></div></div>'},
init:function(el){
  /* XJTU 默认规则 */
  var XJTU_RULES=[[95,100,4.3],[90,94,4.0],[85,89,3.7],[81,84,3.3],[78,80,3.0],[75,77,2.7],[72,74,2.3],[68,71,2.0],[64,67,1.7],[60,63,1.0],[0,59,0]];
  var rules=[];
  function cloneRules(src){var r=[];for(var i=0;i<src.length;i++)r.push([src[i][0],src[i][1],src[i][2]]);return r}

  /* 绩点查询 */
  function toGPA(s){for(var i=0;i<rules.length;i++){if(s>=rules[i][0]&&s<=rules[i][1])return rules[i][2]}return 0}

  /* ===== 规则编辑面板 ===== */
  var rulePanel=el.querySelector('#gpaRulePanel');
  var ruleBody=el.querySelector('#gpaRuleBody');
  var ruleDesc=el.querySelector('#gpaRuleDesc');
  var rulePanelVisible=false;

  function buildRuleDesc(){
    var parts=[];
    for(var i=0;i<rules.length;i++){
      if(rules[i][2]>0) parts.push(rules[i][0]+'→'+rules[i][2]);
    }
    ruleDesc.textContent='📐 当前规则: '+parts.join(' · ');
  }

  function buildRuleEditor(){
    ruleBody.innerHTML='';
    for(var i=0;i<rules.length;i++){
      (function(i){
        var row=document.createElement('div');
        row.style.cssText='display:flex;align-items:center;gap:4px;margin:3px 0;font-size:.78em';
        row.innerHTML='<input class="t-in" type="number" min="0" max="100" value="'+rules[i][0]+'" style="width:50px" data-field="min">'+
          '<span>~</span>'+
          '<input class="t-in" type="number" min="0" max="100" value="'+rules[i][1]+'" style="width:50px" data-field="max">'+
          '<span>分 → 绩点</span>'+
          '<input class="t-in" type="number" min="0" max="5" step="0.1" value="'+rules[i][2]+'" style="width:55px" data-field="gpa">'+
          '<button class="t-btn t-btn-d" style="padding:2px 6px;font-size:.7em">✕</button>';
        var inputs=row.querySelectorAll('input');
        inputs[0].oninput=function(){rules[i][0]=parseFloat(this.value)||0;onRuleChange()};
        inputs[1].oninput=function(){rules[i][1]=parseFloat(this.value)||0;onRuleChange()};
        inputs[2].oninput=function(){rules[i][2]=parseFloat(this.value)||0;onRuleChange()};
        row.querySelector('button').onclick=function(){rules.splice(i,1);buildRuleEditor();onRuleChange()};
        ruleBody.appendChild(row);
      })(i);
    }
  }

  function onRuleChange(){buildRuleDesc();calc()}

  el.querySelector('#gpaRuleBtn').onclick=function(){
    rulePanelVisible=!rulePanelVisible;
    rulePanel.style.display=rulePanelVisible?'':'none';
    if(rulePanelVisible)buildRuleEditor();
  };

  el.querySelector('#gpaAddRule').onclick=function(){
    rules.push([0,0,0]);buildRuleEditor();onRuleChange();
  };

  el.querySelector('#gpaResetRule').onclick=function(){
    rules=cloneRules(XJTU_RULES);buildRuleEditor();onRuleChange();
  };

  /* ===== 课程表 ===== */
  var tbody=el.querySelector('#gpaTbody');

  function addRow(name,credit,score){
    var tr=document.createElement('tr');
    tr.innerHTML='<td><input class="t-in gpa-name" value="'+(name||'')+'" placeholder="课程名"></td>'
      +'<td><input class="t-in gpa-credit" type="number" min="0" max="20" step="0.5" value="'+(credit||'')+'" placeholder="学分" style="width:60px"></td>'
      +'<td><input class="t-in gpa-score" type="number" min="0" max="100" value="'+(score||'')+'" placeholder="分数" style="width:60px"></td>'
      +'<td class="gpa-gp" style="font-weight:600;color:#409eff;text-align:center">—</td>'
      +'<td><button class="t-btn t-btn-d" style="padding:3px 8px;font-size:.7em">✕</button></td>';
    tr.querySelector('.gpa-score').oninput=function(){calc()};
    tr.querySelector('.gpa-credit').oninput=function(){calc()};
    tr.querySelector('button').onclick=function(){tr.remove();calc()};
    tbody.appendChild(tr);
    calc();
    return tr;
  }

  function calc(){
    var rows=tbody.querySelectorAll('tr');
    var totalCredit=0,totalGP=0,totalScore=0,cnt=0;
    rows.forEach(function(tr){
      var c=parseFloat(tr.querySelector('.gpa-credit').value);
      var s=parseFloat(tr.querySelector('.gpa-score').value);
      var gpCell=tr.querySelector('.gpa-gp');
      if(isNaN(c)||isNaN(s)){gpCell.textContent='—';gpCell.style.color='#ccc';return}
      var g=toGPA(s);gpCell.textContent=g.toFixed(1);
      gpCell.style.color=g>=3.7?'#67c23a':g>=2.0?'#409eff':g>=1.0?'#e6a23c':'#f56c6c';
      totalCredit+=c;totalGP+=c*g;totalScore+=c*s;cnt++;
    });
    if(totalCredit>0){
      var gpa=(totalGP/totalCredit);
      el.querySelector('#gpaVal').textContent=gpa.toFixed(4);
      el.querySelector('#gpaVal').style.color=gpa>=3.7?'#67c23a':gpa>=2.0?'#409eff':'#f56c6c';
      el.querySelector('#gpaDetail').textContent=cnt+' 门课 · 总学分 '+totalCredit+' · 加权均分 '+(totalScore/totalCredit).toFixed(2);
    }else{
      el.querySelector('#gpaVal').textContent='—';
      el.querySelector('#gpaVal').style.color='#409eff';
      el.querySelector('#gpaDetail').textContent='';
    }
  }

  el.querySelector('#gpaAdd').onclick=function(){addRow('','','')};
  el.querySelector('#gpaClear').onclick=function(){tbody.innerHTML='';calc()};

  /* 初始化 */
  rules=cloneRules(XJTU_RULES);
  buildRuleDesc();
  addRow('示例：自然辩证法',1,92);addRow('示例：数值分析',3,87);addRow('示例：矩阵论',3,78);
  calc();
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
{id:'integration',name:'数值积分',icon:'∫',cat:'academic',desc:'单重 · 二重 · 梯形 · Simpson · 自动误差估计',
html(){return `
<div class="t-row" style="margin-bottom:12px">
  <button id="intTab1" class="t-btn" style="font-weight:700">单重积分</button>
  <button id="intTab2" class="t-btn t-btn-o">二重积分</button>
</div>
<div id="intP1">
  <label class="t-lbl">f(x)</label>
  <input id="intExpr" class="t-in" value="sin(x)" placeholder="如 sin(x), exp(-x^2)">
  <div class="t-row" style="gap:8px;margin-top:6px">
    <div style="flex:1"><label class="t-lbl">a</label><input id="intA" class="t-in" value="0"></div>
    <div style="flex:1"><label class="t-lbl">b</label><input id="intB" class="t-in" value="pi"></div>
    <div style="flex:1"><label class="t-lbl">n</label><input id="intN" class="t-in" value="100"></div>
  </div>
  <div style="margin:8px 0">
    <label class="t-lbl" style="margin-right:12px"><input type="checkbox" id="intChkTrap" checked> 梯形法</label>
    <label class="t-lbl" style="margin-right:12px"><input type="checkbox" id="intChkS13" checked> Simpson 1/3</label>
    <label class="t-lbl"><input type="checkbox" id="intChkS38"> Simpson 3/8</label>
  </div>
  <div id="intPresets" style="margin-bottom:8px">
    <span class="t-lbl" style="margin-right:4px">预设:</span>
    <button class="t-btn t-btn-o" data-e="sin(x)" data-a="0" data-b="pi">sin(x) [0,π]</button>
    <button class="t-btn t-btn-o" data-e="exp(-x^2)" data-a="-3" data-b="3">e^(-x²) [-3,3]</button>
    <button class="t-btn t-btn-o" data-e="1/(1+x^2)" data-a="-5" data-b="5">1/(1+x²) [-5,5]</button>
  </div>
  <button id="intCalc" class="t-btn">计算</button>
</div>
<div id="intP2" style="display:none">
  <label class="t-lbl">f(x, y)</label>
  <input id="intExpr2" class="t-in" value="sin(x)*cos(y)" placeholder="如 x^2+y^2">
  <div class="t-row" style="gap:8px;margin-top:6px">
    <div style="flex:1"><label class="t-lbl">a</label><input id="intA2" class="t-in" value="0"></div>
    <div style="flex:1"><label class="t-lbl">b</label><input id="intB2" class="t-in" value="pi"></div>
    <div style="flex:1"><label class="t-lbl">nx</label><input id="intNx" class="t-in" value="50"></div>
  </div>
  <div class="t-row" style="gap:8px;margin-top:6px">
    <div style="flex:1"><label class="t-lbl">c</label><input id="intC2" class="t-in" value="0"></div>
    <div style="flex:1"><label class="t-lbl">d</label><input id="intD2" class="t-in" value="pi"></div>
    <div style="flex:1"><label class="t-lbl">ny</label><input id="intNy" class="t-in" value="50"></div>
  </div>
  <div style="margin:8px 0">
    <label class="t-lbl" style="margin-right:12px"><input type="checkbox" id="intChk2Trap" checked> 2D 梯形法</label>
    <label class="t-lbl"><input type="checkbox" id="intChk2Simp" checked> 2D Simpson</label>
  </div>
  <div id="intPresets2" style="margin-bottom:8px">
    <span class="t-lbl" style="margin-right:4px">预设:</span>
    <button class="t-btn t-btn-o" data-e="sin(x)*cos(y)" data-a="0" data-b="pi" data-c="0" data-d="pi">sin·cos [0,π]²</button>
    <button class="t-btn t-btn-o" data-e="x^2+y^2" data-a="0" data-b="1" data-c="0" data-d="1">x²+y² [0,1]²</button>
  </div>
  <button id="intCalc2" class="t-btn">计算</button>
</div>
<div id="intRes" class="t-res"></div>`},
async init(el){
  var q=function(s){return el.querySelector(s)};
  var res=q('#intRes'), mode=1;
  var cardS='border-radius:8px;border:1px solid var(--border-warm);padding:10px;background:var(--bg-zebra);margin-bottom:8px';
  // tabs
  q('#intTab1').onclick=function(){mode=1;q('#intP1').style.display='';q('#intP2').style.display='none';
    q('#intTab1').className='t-btn';q('#intTab1').style.fontWeight='700';
    q('#intTab2').className='t-btn t-btn-o';q('#intTab2').style.fontWeight='';res.innerHTML=''};
  q('#intTab2').onclick=function(){mode=2;q('#intP1').style.display='none';q('#intP2').style.display='';
    q('#intTab2').className='t-btn';q('#intTab2').style.fontWeight='700';
    q('#intTab1').className='t-btn t-btn-o';q('#intTab1').style.fontWeight='';res.innerHTML=''};
  // presets 1D
  q('#intPresets').querySelectorAll('.t-btn-o').forEach(function(b){
    b.onclick=function(){q('#intExpr').value=b.dataset.e;q('#intA').value=b.dataset.a;q('#intB').value=b.dataset.b}});
  // presets 2D
  q('#intPresets2').querySelectorAll('.t-btn-o').forEach(function(b){
    b.onclick=function(){q('#intExpr2').value=b.dataset.e;q('#intA2').value=b.dataset.a;q('#intB2').value=b.dataset.b;
      q('#intC2').value=b.dataset.c;q('#intD2').value=b.dataset.d}});
  // helpers
  function ev1(compiled,x){return compiled.evaluate({x:x,e:Math.E,pi:Math.PI})}
  function ev2(compiled,x,y){return compiled.evaluate({x:x,y:y,e:Math.E,pi:Math.PI})}
  function trapezoid(f,a,b,n){var h=(b-a)/n,s=0.5*(ev1(f,a)+ev1(f,b));for(var i=1;i<n;i++)s+=ev1(f,a+i*h);return s*h}
  function simpson13(f,a,b,n){if(n%2!==0)n++;var h=(b-a)/n,s=ev1(f,a)+ev1(f,b);
    for(var i=1;i<n;i++)s+=ev1(f,a+i*h)*(i%2===0?2:4);return s*h/3}
  function simpson38(f,a,b,n){while(n%3!==0)n++;var h=(b-a)/n,s=ev1(f,a)+ev1(f,b);
    for(var i=1;i<n;i++){var w=i%3===0?2:3;s+=ev1(f,a+i*h)*w}return s*3*h/8}
  function trap2d(f,a,b,c,d,nx,ny){var hx=(b-a)/nx,hy=(d-c)/ny,s=0;
    for(var i=0;i<nx;i++)for(var j=0;j<ny;j++){var x0=a+i*hx,x1=x0+hx,y0=c+j*hy,y1=y0+hy;
      s+=ev2(f,x0,y0)+ev2(f,x1,y0)+ev2(f,x0,y1)+ev2(f,x1,y1)}return s*hx*hy/4}
  function simp2d(f,a,b,c,d,nx,ny){if(nx%2!==0)nx++;if(ny%2!==0)ny++;
    var hx=(b-a)/nx,hy=(d-c)/ny;
    function wx(i){return i===0||i===nx?1:i%2===0?2:4}
    function wy(j){return j===0||j===ny?1:j%2===0?2:4}
    var s=0;for(var i=0;i<=nx;i++)for(var j=0;j<=ny;j++)s+=wx(i)*wy(j)*ev2(f,a+i*hx,c+j*hy);
    return s*hx*hy/9}
  function fmt(v){return typeof v==='number'?v.toPrecision(12):String(v)}
  function card(title,val,err,ms){return '<div style="'+cardS+'"><b>'+title+'</b><br>结果: <code>'+fmt(val)+
    '</code><br>误差估计: <code>'+err.toPrecision(4)+'</code><br><span style="color:var(--font-color-3)">耗时 '+ms.toFixed(1)+' ms</span></div>'}
  // 1D calc
  async function calc1d(){
    var m=await loadMath();var expr=q('#intExpr').value.trim();
    if(!expr){res.innerHTML='<span style="color:#f56c6c">请输入表达式</span>';return}
    var a,b,n;try{a=m.evaluate(q('#intA').value);b=m.evaluate(q('#intB').value);n=parseInt(q('#intN').value)}
    catch(e){res.innerHTML='<span style="color:#f56c6c">区间参数错误</span>';return}
    if(isNaN(n)||n<1){res.innerHTML='<span style="color:#f56c6c">n 须为正整数</span>';return}
    if(n>100000){res.innerHTML='<span style="color:#f56c6c">n 不能超过 100000</span>';return}
    var compiled;try{compiled=m.compile(expr)}catch(e){res.innerHTML='<span style="color:#f56c6c">表达式错误: '+e.message+'</span>';return}
    var methods=[],chk=[[q('#intChkTrap'),'梯形法',trapezoid,null],
      [q('#intChkS13'),'Simpson 1/3',simpson13,function(n){return n%2!==0?'Simpson 1/3 要求 n 为偶数':''}],
      [q('#intChkS38'),'Simpson 3/8',simpson38,function(n){return n%3!==0?'Simpson 3/8 要求 n 为 3 的倍数':''}]];
    var html='',warns=[];
    chk.forEach(function(c){if(!c[0].checked)return;
      if(c[3]){var w=c[3](n);if(w){warns.push(w);return}}
      var t0=performance.now();var v1=c[2](compiled,a,b,n);var v2=c[2](compiled,a,b,n*2);var ms=performance.now()-t0;
      html+=card(c[1],v1,Math.abs(v2-v1),ms)});
    if(warns.length)html='<div style="color:#e6a23c;margin-bottom:8px">⚠ '+warns.join('；')+'</div>'+html;
    if(!html)html='<span style="color:#e6a23c">请至少选择一种方法</span>';
    // comparison line
    var vals=[];chk.forEach(function(c){if(c[0].checked&&(!c[3]||!c[3](n))){
      var v=c[2](compiled,a,b,n);vals.push({name:c[1],val:v})}});
    if(vals.length>1){var mn=Math.min.apply(null,vals.map(function(v){return v.val}));
      var mx=Math.max.apply(null,vals.map(function(v){return v.val}));
      html+='<div style="color:var(--font-color-3);font-size:0.9em;margin-top:4px">方法间最大差异: <code>'+(mx-mn).toPrecision(4)+'</code></div>'}
    res.innerHTML=html}
  // 2D calc
  async function calc2d(){
    var m=await loadMath();var expr=q('#intExpr2').value.trim();
    if(!expr){res.innerHTML='<span style="color:#f56c6c">请输入表达式</span>';return}
    var a,b,c,d,nx,ny;
    try{a=m.evaluate(q('#intA2').value);b=m.evaluate(q('#intB2').value);
      c=m.evaluate(q('#intC2').value);d=m.evaluate(q('#intD2').value);
      nx=parseInt(q('#intNx').value);ny=parseInt(q('#intNy').value)}
    catch(e){res.innerHTML='<span style="color:#f56c6c">参数错误</span>';return}
    if(isNaN(nx)||isNaN(ny)||nx<1||ny<1){res.innerHTML='<span style="color:#f56c6c">nx, ny 须为正整数</span>';return}
    if(nx>100000||ny>100000){res.innerHTML='<span style="color:#f56c6c">步数不能超过 100000</span>';return}
    var compiled;try{compiled=m.compile(expr)}catch(e){res.innerHTML='<span style="color:#f56c6c">表达式错误: '+e.message+'</span>';return}
    var html='',warns=[];
    if(q('#intChk2Simp').checked&&(nx%2!==0||ny%2!==0))warns.push('2D Simpson 要求 nx, ny 均为偶数');
    if(q('#intChk2Trap').checked){var t0=performance.now();var v1=trap2d(compiled,a,b,c,d,nx,ny);
      var v2=trap2d(compiled,a,b,c,d,nx*2,ny*2);var ms=performance.now()-t0;
      html+=card('2D 梯形法',v1,Math.abs(v2-v1),ms)}
    if(q('#intChk2Simp').checked&&nx%2===0&&ny%2===0){var t0=performance.now();
      var v1=simp2d(compiled,a,b,c,d,nx,ny);var v2=simp2d(compiled,a,b,c,d,nx*2,ny*2);
      var ms=performance.now()-t0;html+=card('2D Simpson',v1,Math.abs(v2-v1),ms)}
    if(warns.length)html='<div style="color:#e6a23c;margin-bottom:8px">⚠ '+warns.join('；')+'</div>'+html;
    if(!html&&!warns.length)html='<span style="color:#e6a23c">请至少选择一种方法</span>';
    // comparison
    var vals=[];
    if(q('#intChk2Trap').checked)vals.push({name:'2D梯形',val:trap2d(compiled,a,b,c,d,nx,ny)});
    if(q('#intChk2Simp').checked&&nx%2===0&&ny%2===0)vals.push({name:'2DSimpson',val:simp2d(compiled,a,b,c,d,nx,ny)});
    if(vals.length>1){var mn=Math.min.apply(null,vals.map(function(v){return v.val}));
      var mx=Math.max.apply(null,vals.map(function(v){return v.val}));
      html+='<div style="color:var(--font-color-3);font-size:0.9em;margin-top:4px">方法间最大差异: <code>'+(mx-mn).toPrecision(4)+'</code></div>'}
    res.innerHTML=html}
  q('#intCalc').onclick=calc1d;
  q('#intCalc2').onclick=calc2d;
  // Enter key
  el.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();mode===1?calc1d():calc2d()}});
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
{id:'latex',name:'LaTeX 公式',icon:'📐',cat:'academic',desc:'实时渲染 · 符号键盘 · 下载 SVG/PNG',
html(){return '<div class="t-lbl">LaTeX 输入</div><textarea class="t-ta" id="latexIn" rows="3">E = mc^2</textarea>'
+'<div class="pk" id="latexKb" style="margin:4px 0"></div>'
+'<div class="t-lbl" style="margin-top:6px">渲染结果</div>'
+'<div id="latexOut" class="t-res" style="text-align:center;font-size:1.2em;min-height:50px"></div>'
+'<div class="t-row" style="justify-content:center;margin-top:6px"><button class="t-btn" id="latexDlSvg" style="font-size:.72em">\u2b07 \u4e0b\u8f7d SVG</button><button class="t-btn t-btn-o" id="latexDlPng" style="font-size:.72em">\u2b07 \u4e0b\u8f7d PNG</button></div>'
+'<details style="margin-top:6px;font-size:.72em;color:#999"><summary style="cursor:pointer">\ud83d\udcd6 \u5e38\u7528\u8bed\u6cd5\u53c2\u8003</summary>'
+'<div style="columns:2;column-gap:12px;margin-top:4px;line-height:1.8">'
+'<code>\\frac{a}{b}</code> \u5206\u6570<br>'
+'<code>\\sqrt{x}</code> \u5e73\u65b9\u6839<br>'
+'<code>\\sqrt[n]{x}</code> n\u6b21\u6839<br>'
+'<code>x^{2}</code> \u4e0a\u6807<br>'
+'<code>x_{i}</code> \u4e0b\u6807<br>'
+'<code>\\sum_{i=0}^{n}</code> \u6c42\u548c<br>'
+'<code>\\prod_{i=1}^{n}</code> \u8fde\u4e58<br>'
+'<code>\\int_a^b</code> \u79ef\u5206<br>'
+'<code>\\lim_{x\\to 0}</code> \u6781\u9650<br>'
+'<code>\\vec{a}</code> \u5411\u91cf<br>'
+'<code>\\hat{a}</code> \u5e3d\u5b50<br>'
+'<code>\\dot{x}</code> \u70b9<br>'
+'<code>\\bar{x}</code> \u6a2a\u7ebf<br>'
+'<code>\\partial</code> \u504f\u5bfc<br>'
+'<code>\\nabla</code> \u68af\u5ea6<br>'
+'<code>\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}</code> \u77e9\u9635<br>'
+'<code>\\begin{cases}...\\end{cases}</code> \u5206\u6bb5<br>'
+'<code>\\left(\\right)</code> \u81ea\u9002\u5e94\u62ec\u53f7<br>'
+'</div></details>'},
async init(el){
  await loadKaTeX();
  var inp=el.querySelector('#latexIn'),out=el.querySelector('#latexOut');
  function render(){try{katex.render(inp.value,out,{displayMode:true,throwOnError:false})}catch(e){out.textContent=e.message}}
  inp.oninput=render;render();
  /* 符号键盘 */
  var keys=[
    ['\\frac{}{}','\\frac{a}{b}'],['\\sqrt{}','\\sqrt{x}'],['\\sqrt[n]{}','\\sqrt[n]{x}'],
    ['^{}','x^{n}'],['_{}','x_{i}'],['\\sum_{}^{}','\\sum'],['\\prod_{}^{}','\\prod'],
    ['\\int_{}^{}','\\int'],['\\lim_{}','\\lim'],['\\to','\\to'],['\\infty','\\infty'],
    ['\\alpha','\\alpha'],['\\beta','\\beta'],['\\gamma','\\gamma'],['\\delta','\\delta'],
    ['\\theta','\\theta'],['\\lambda','\\lambda'],['\\mu','\\mu'],['\\pi','\\pi'],
    ['\\sigma','\\sigma'],['\\omega','\\omega'],['\\phi','\\phi'],['\\psi','\\psi'],
    ['\\partial','\\partial'],['\\nabla','\\nabla'],['\\vec{}','\\vec'],['\\hat{}','\\hat'],
    ['\\dot{}','\\dot'],['\\bar{}','\\bar'],['\\cdot','\\cdot'],['\\times','\\times'],
    ['\\div','\\div'],['\\pm','\\pm'],['\\leq','\\leq'],['\\geq','\\geq'],['\\neq','\\neq'],
    ['\\approx','\\approx'],['\\equiv','\\equiv'],['\\in','\\in'],['\\subset','\\subset'],
    ['\\cup','\\cup'],['\\cap','\\cap'],['\\forall','\\forall'],['\\exists','\\exists'],
    ['\\left(\\right)','( )'],['\\left[\\right]','[ ]'],['\\left\\{\\right\\}','\\{ \\}'],
    ['\\begin{pmatrix}\\end{pmatrix}','matrix'],['\\begin{cases}\\end{cases}','cases'],
    ['\\text{}','text'],['\\mathbf{}','bf'],['\\mathrm{}','rm']
  ];
  var kb=el.querySelector('#latexKb');
  if(!document.getElementById('pkCSS')){var st=document.createElement('style');st.id='pkCSS';st.textContent='.pk{display:flex;flex-wrap:wrap;gap:3px;justify-content:center}.pk button{background:#f5f7fa;border:1px solid #e4e7ed;border-radius:4px;padding:2px 6px;cursor:pointer;font-size:.7em;font-family:inherit;transition:.15s;color:#606266}.pk button:hover{border-color:#409eff;color:#409eff;background:#ecf5ff}';document.head.appendChild(st)}
  keys.forEach(function(pair){
    var insert=pair[0],label=pair[1];
    var btn=document.createElement('button');btn.textContent=label;btn.title=insert;
    btn.onclick=function(){
      var s=inp.selectionStart||0,e=inp.selectionEnd||0;
      inp.value=inp.value.substring(0,s)+insert+inp.value.substring(e);
      inp.focus();
      /* 光标放到第一个 {} 内部 */
      var brace=insert.indexOf('{}');
      var pos=brace>=0?s+brace+1:s+insert.length;
      inp.setSelectionRange(pos,pos);
      render();
    };
    kb.appendChild(btn);
  });
  /* SVG 下载 */
  el.querySelector('#latexDlSvg').onclick=function(){
    var html=out.innerHTML;if(!html)return;
    var r=out.getBoundingClientRect();var w=Math.ceil(r.width)+40,h=Math.ceil(r.height)+40;
    var css='';var links=document.querySelectorAll('link[rel="stylesheet"]');
    for(var i=0;i<links.length;i++){if(links[i].href.indexOf('katex')>=0)css+='@import url("'+links[i].href+'");\n';}
    var svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+w+'" height="'+h+'"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"><style>'+css+'</style>'+html+'</div></foreignObject></svg>';
    var blob=new Blob([svg],{type:"image/svg+xml"});var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='formula.svg';a.click();setTimeout(function(){URL.revokeObjectURL(a.href)},3e3);
  };
  /* PNG 下载 */
  el.querySelector('#latexDlPng').onclick=function(){
    var btn=el.querySelector('#latexDlPng');btn.textContent='\u23f3 \u751f\u6210\u4e2d\u2026';btn.disabled=true;
    var origBg=out.style.background;out.style.background='transparent';
    loadJS('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js').then(function(){
      return html2canvas(out,{backgroundColor:null,scale:3});
    }).then(function(cv){out.style.background=origBg;
      cv.toBlob(function(blob){var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='formula.png';a.click();setTimeout(function(){URL.revokeObjectURL(a.href)},3e3);btn.textContent='\u2b07 \u4e0b\u8f7d PNG';btn.disabled=false});
    }).catch(function(){out.style.background=origBg;btn.textContent='\u2b07 \u4e0b\u8f7d PNG';btn.disabled=false});
  };
}},
{id:'life',name:'生命游戏',icon:'🦠',cat:'fun',desc:'Conway 生命游戏 · 经典预设 · 速度可调',
html:function(){
  return '<div class="t-row" style="flex-wrap:wrap">'+
    '<label class="t-lbl">预设</label>'+
    '<select class="t-sel" id="lifPreset">'+
      '<option value="">空白</option>'+
      '<option value="glider">滑翔机 Glider</option>'+
      '<option value="blinker">闪烁器 Blinker</option>'+
      '<option value="pulsar">脉冲星 Pulsar</option>'+
      '<option value="rpent">R-五联骨牌</option>'+
      '<option value="lwss">轻型飞船 LWSS</option>'+
      '<option value="gosper">Gosper 滑翔机枪</option>'+
      '<option value="random">随机 25%</option>'+
    '</select>'+
    '<label class="t-lbl" style="margin-left:8px">速度</label>'+
    '<input class="t-in" id="lifSpeed" type="range" min="1" max="30" value="10" style="width:100px">'+
    '<span class="t-lbl" id="lifSpeedVal">10 代/s</span>'+
  '</div>'+
  '<div class="t-row" style="gap:6px;flex-wrap:wrap">'+
    '<button class="t-btn t-btn-o" id="lifStep">单步</button>'+
    '<button class="t-btn" id="lifPlay">▶ 播放</button>'+
    '<button class="t-btn t-btn-o" id="lifClear">清空</button>'+
    '<span class="t-lbl" id="lifGen" style="margin-left:auto">代: 0 · 存活: 0</span>'+
  '</div>'+
  '<canvas id="lifCv" class="t-cv" style="width:100%;max-width:640px;margin:6px auto;display:block;cursor:crosshair;image-rendering:pixelated;max-height:calc(88vh - 220px)"></canvas>';
},
init:function(el){
  var COLS=80,ROWS=60,CELL=8;
  var cv=el.querySelector('#lifCv');
  cv.style.maxWidth=(COLS*CELL)+'px';
  var W=cv.clientWidth||Math.min(COLS*CELL,el.clientWidth-4);
  var scale=W/(COLS*CELL);
  var H=Math.round(ROWS*CELL*scale);
  /* canvas 高度上限：取 el 实际高度（扣控件）或保守 fallback，确保不溢出 modal */
  var bodyH=el.clientHeight;
  var maxH=bodyH>100?Math.max(150,bodyH-100):Math.max(150,Math.round(window.innerHeight*0.45));
  if(H>maxH){H=maxH;scale=H/(ROWS*CELL);W=Math.round(COLS*CELL*scale);}

  var ctx=cv.getContext('2d');
  var dpr=window.devicePixelRatio||1;
  cv.width=W*dpr;cv.height=H*dpr;
  cv.style.height=H+'px';
  ctx.scale(dpr,dpr);

  var cs=getComputedStyle(document.documentElement);
  var accent=cs.getPropertyValue('--accent').trim()||'#5B8BA4';
  var bgPaper=cs.getPropertyValue('--bg-paper').trim()||'#FCFCFD';
  var borderWarm=cs.getPropertyValue('--border-warm').trim()||'#DCE1E7';

  var grid=[];
  var buf=[];
  var gen=0;
  var alive=0;
  var running=false;
  var timerId=null;
  var speed=10;
  var drawing=false;
  var drawVal=1;

  var selPreset=el.querySelector('#lifPreset');
  var inpSpeed=el.querySelector('#lifSpeed');
  var lblSpeed=el.querySelector('#lifSpeedVal');
  var btnStep=el.querySelector('#lifStep');
  var btnPlay=el.querySelector('#lifPlay');
  var btnClear=el.querySelector('#lifClear');
  var lblGen=el.querySelector('#lifGen');

  function makeGrid(){
    var g=[];
    for(var r=0;r<ROWS;r++){
      g[r]=[];
      for(var c=0;c<COLS;c++) g[r][c]=0;
    }
    return g;
  }

  function clearGrid(){
    grid=makeGrid();
    buf=makeGrid();
    gen=0;alive=0;
    updateLabel();
  }

  function updateLabel(){
    lblGen.textContent='代: '+gen+' · 存活: '+alive;
  }

  function countAlive(){
    var cnt=0;
    for(var r=0;r<ROWS;r++)
      for(var c=0;c<COLS;c++)
        if(grid[r][c])cnt++;
    return cnt;
  }

  /* ===== 预设图案 ===== */
  var PATTERNS={
    glider:[[0,1],[1,2],[2,0],[2,1],[2,2]],
    blinker:[[0,0],[0,1],[0,2]],
    lwss:[[0,1],[0,4],[1,0],[2,0],[2,4],[3,0],[3,1],[3,2],[3,3]],
    rpent:[[0,1],[0,2],[1,0],[1,1],[2,1]],
    pulsar:[
      [0,2],[0,3],[0,4],[0,8],[0,9],[0,10],
      [2,0],[2,5],[2,7],[2,12],
      [3,0],[3,5],[3,7],[3,12],
      [4,0],[4,5],[4,7],[4,12],
      [5,2],[5,3],[5,4],[5,8],[5,9],[5,10],
      [7,2],[7,3],[7,4],[7,8],[7,9],[7,10],
      [8,0],[8,5],[8,7],[8,12],
      [9,0],[9,5],[9,7],[9,12],
      [10,0],[10,5],[10,7],[10,12],
      [12,2],[12,3],[12,4],[12,8],[12,9],[12,10]
    ],
    gosper:[
      [0,24],
      [1,22],[1,24],
      [2,12],[2,13],[2,20],[2,21],[2,34],[2,35],
      [3,11],[3,15],[3,20],[3,21],[3,34],[3,35],
      [4,0],[4,1],[4,10],[4,16],[4,20],[4,21],
      [5,0],[5,1],[5,10],[5,14],[5,16],[5,17],[5,22],[5,24],
      [6,10],[6,16],[6,24],
      [7,11],[7,15],
      [8,12],[8,13]
    ]
  };

  function loadPreset(name){
    clearGrid();
    if(name==='random'){
      for(var r=0;r<ROWS;r++)
        for(var c=0;c<COLS;c++)
          grid[r][c]=Math.random()<0.25?1:0;
      alive=countAlive();
      updateLabel();
      render();
      return;
    }
    var pat=PATTERNS[name];
    if(!pat){render();return}
    var offR=Math.floor(ROWS/2)-6;
    var offC=Math.floor(COLS/2)-6;
    if(name==='gosper'){offR=Math.floor(ROWS/2)-5;offC=4;}
    for(var i=0;i<pat.length;i++){
      var r=pat[i][0]+offR;
      var c=pat[i][1]+offC;
      if(r>=0&&r<ROWS&&c>=0&&c<COLS) grid[r][c]=1;
    }
    alive=countAlive();
    updateLabel();
    render();
  }

  /* ===== 演化 ===== */
  function step(){
    for(var r=0;r<ROWS;r++){
      for(var c=0;c<COLS;c++){
        var nb=0;
        for(var dr=-1;dr<=1;dr++){
          for(var dc=-1;dc<=1;dc++){
            if(dr===0&&dc===0)continue;
            var nr=(r+dr+ROWS)%ROWS;
            var nc=(c+dc+COLS)%COLS;
            nb+=grid[nr][nc];
          }
        }
        if(grid[r][c]){
          buf[r][c]=(nb===2||nb===3)?1:0;
        }else{
          buf[r][c]=(nb===3)?1:0;
        }
      }
    }
    var tmp=grid;grid=buf;buf=tmp;
    gen++;
    alive=countAlive();
    updateLabel();
  }

  /* ===== 渲染 ===== */
  function render(){
    ctx.fillStyle=bgPaper;
    ctx.fillRect(0,0,W,H);

    // 网格线
    ctx.strokeStyle=borderWarm;
    ctx.lineWidth=0.5;
    for(var r=0;r<=ROWS;r++){
      ctx.beginPath();ctx.moveTo(0,r*CELL);ctx.lineTo(W,r*CELL);ctx.stroke();
    }
    for(var c=0;c<=COLS;c++){
      ctx.beginPath();ctx.moveTo(c*CELL,0);ctx.lineTo(c*CELL,H);ctx.stroke();
    }

    // 存活细胞
    ctx.fillStyle=accent;
    for(var r=0;r<ROWS;r++){
      for(var c=0;c<COLS;c++){
        if(grid[r][c]){
          ctx.fillRect(c*CELL+0.5,r*CELL+0.5,CELL-1,CELL-1);
        }
      }
    }
  }

  /* ===== 播放控制 ===== */
  function startPlay(){
    if(running)return;
    running=true;
    btnPlay.textContent='⏸ 暂停';
    tick();
  }

  function stopPlay(){
    running=false;
    btnPlay.textContent='▶ 播放';
    if(timerId){clearTimeout(timerId);timerId=null}
  }

  function tick(){
    if(!running)return;
    step();
    render();
    timerId=setTimeout(tick,1000/speed);
  }

  /* ===== 交互：画格子 ===== */
  function getCellFromEvent(e){
    var rect=cv.getBoundingClientRect();
    var scaleX=W/rect.width,scaleY=H/rect.height;
    var clientX,clientY;
    if(e.touches){clientX=e.touches[0].clientX;clientY=e.touches[0].clientY}
    else{clientX=e.clientX;clientY=e.clientY}
    var x=(clientX-rect.left)*scaleX;
    var y=(clientY-rect.top)*scaleY;
    return{r:Math.floor(y/CELL),c:Math.floor(x/CELL)};
  }

  function toggleCell(e){
    var cell=getCellFromEvent(e);
    if(cell.r<0||cell.r>=ROWS||cell.c<0||cell.c>=COLS)return;
    grid[cell.r][cell.c]=drawVal;
    alive=countAlive();
    updateLabel();
    render();
  }

  cv.addEventListener('mousedown',function(e){
    var cell=getCellFromEvent(e);
    if(cell.r<0||cell.r>=ROWS||cell.c<0||cell.c>=COLS)return;
    drawVal=grid[cell.r][cell.c]?0:1;
    drawing=true;
    toggleCell(e);
  });
  cv.addEventListener('mousemove',function(e){
    if(drawing)toggleCell(e);
  });
  cv.addEventListener('mouseup',function(){drawing=false});
  cv.addEventListener('mouseleave',function(){drawing=false});

  cv.addEventListener('touchstart',function(e){
    e.preventDefault();
    var cell=getCellFromEvent(e);
    if(cell.r>=0&&cell.r<ROWS&&cell.c>=0&&cell.c<COLS){
      drawVal=grid[cell.r][cell.c]?0:1;
      drawing=true;
      toggleCell(e);
    }
  },{passive:false});
  cv.addEventListener('touchmove',function(e){
    e.preventDefault();
    if(drawing)toggleCell(e);
  },{passive:false});
  cv.addEventListener('touchend',function(e){
    e.preventDefault();drawing=false;
  },{passive:false});

  /* ===== 控件事件 ===== */
  selPreset.onchange=function(){
    stopPlay();
    if(selPreset.value) loadPreset(selPreset.value);
    else{clearGrid();render();}
  };

  inpSpeed.oninput=function(){
    speed=parseInt(inpSpeed.value)||10;
    lblSpeed.textContent=speed+' 代/s';
  };

  btnStep.onclick=function(){
    stopPlay();
    step();
    render();
  };

  btnPlay.onclick=function(){
    if(running)stopPlay();else startPlay();
  };

  btnClear.onclick=function(){
    stopPlay();
    selPreset.value='';
    clearGrid();
    render();
  };

  /* ===== 初始化 ===== */
  clearGrid();
  render();

  el._cleanup=function(){
    stopPlay();
  };
}},
{id:'markdown',name:'Markdown 预览',icon:'✏️',cat:'dev',desc:'GFM · 表格 · 任务列表 · 脚注 · 语法高亮',
html(){return'<style>.md-prev{flex:1;overflow:auto;padding:16px 20px;background:#fff;border-radius:8px;border:1px solid #ddd;min-height:260px;font-size:.9em;line-height:1.75;color:#333;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif}.md-prev h1{font-size:1.6em;border-bottom:2px solid #eaecef;padding-bottom:.3em;margin:1.2em 0 .6em}.md-prev h2{font-size:1.35em;border-bottom:1px solid #eaecef;padding-bottom:.25em;margin:1em 0 .5em}.md-prev h3{font-size:1.15em;margin:.9em 0 .4em}.md-prev h4{font-size:1em;margin:.8em 0 .3em}.md-prev blockquote{margin:.8em 0;padding:.6em 1em;border-left:4px solid #42b983;background:#f8f8f8;color:#555;border-radius:0 4px 4px 0}.md-prev pre{background:#282c34;color:#abb2bf;padding:14px 16px;border-radius:6px;overflow-x:auto;font-size:.85em;line-height:1.5;margin:.8em 0}.md-prev code{background:#f0f0f0;padding:2px 5px;border-radius:3px;font-size:.88em;color:#e96900}.md-prev pre code{background:none;padding:0;color:inherit;font-size:inherit}.md-prev table{border-collapse:collapse;width:100%;margin:.8em 0}.md-prev th,.md-prev td{border:1px solid #dfe2e5;padding:8px 12px;text-align:left}.md-prev th{background:#f6f8fa;font-weight:600}.md-prev tr:nth-child(2n){background:#fafbfc}.md-prev img{max-width:100%;border-radius:4px}.md-prev a{color:#42b983;text-decoration:none}.md-prev a:hover{text-decoration:underline}.md-prev hr{border:none;border-top:2px solid #eaecef;margin:1.5em 0}.md-prev ul,.md-prev ol{padding-left:1.8em}.md-prev li{margin:.25em 0}.md-prev .task-list-item{list-style:none;margin-left:-1.5em}.md-prev .task-list-item input{margin-right:.4em;vertical-align:middle}.md-prev mark{background:#fff3bf;padding:1px 4px;border-radius:2px}.md-prev sup{font-size:.75em}.md-prev .footnotes-sep{margin-top:2em}.md-prev .footnotes{font-size:.85em;color:#666}.md-prev del{color:#999}</style><div class="t-row" style="gap:6px;margin-bottom:6px;flex-wrap:wrap;justify-content:center"><button class="t-btn t-btn-d" id="mdCopy" style="font-size:.75em">📋 复制 HTML</button><button class="t-btn t-btn-d" id="mdClear" style="font-size:.75em">🗑️ 清空</button><span id="mdStatus" style="font-size:.72em;color:#888"></span></div><div class="t-split" style="height:440px;max-height:80vh"><div style="display:flex;flex-direction:column"><div class="t-lbl">Markdown 源码</div><textarea class="t-ta" id="mdIn" style="flex:1;min-height:220px;resize:none;font-family:Cascadia Code,Fira Code,Consolas,monospace;font-size:.85em;line-height:1.5;tab-size:4"></textarea></div><div style="display:flex;flex-direction:column"><div class="t-lbl">实时预览</div><div id="mdOut" class="md-prev"></div></div></div>'},
async init(el){
  var defaultMd='# Markdown 预览器\n\n## 基本语法\n\n**加粗** *斜体* ~~删除线~~ `行内代码` ==高亮==\n\n> 引用文本，支持嵌套\n> > 二层引用\n\n---\n\n## 列表\n\n- 无序列表\n  - 嵌套项\n- [x] 已完成任务\n- [ ] 未完成任务\n\n1. 有序列表\n2. 第二项\n\n## 表格\n\n| 语法 | 描述 | 示例 |\n|:-----|:----:|-----:|\n| 加粗 | 两个星号 | **文字** |\n| 斜体 | 一个星号 | *文字* |\n| 代码 | 反引号 | `code` |\n\n## 代码块\n\n```javascript\nfunction hello(name) {\n  console.log("Hello, " + name + "!");\n  return { greeting: true };\n}\n```\n\n## 链接与脚注\n\n[GitHub](https://github.com) · 脚注示例[^1]\n\n[^1]: 这是一条脚注说明。';
  el.querySelector('#mdIn').value=defaultMd;
  var out=el.querySelector('#mdOut');
  var status=el.querySelector('#mdStatus');
  out.innerHTML='<span style="color:#999">正在加载 markdown-it ...</span>';
  function miniMd(s){
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/^#### (.+)$/gm,'<h4>$1</h4>').replace(/^### (.+)$/gm,'<h3>$1</h3>')
      .replace(/^## (.+)$/gm,'<h2>$1</h2>').replace(/^# (.+)$/gm,'<h1>$1</h1>')
      .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\*(.+?)\*/g,'<em>$1</em>')
      .replace(/~~(.+?)~~/g,'<del>$1</del>').replace(/`([^`]+)`/g,'<code>$1</code>')
      .replace(/==(.+?)==/g,'<mark>$1</mark>')
      .replace(/^> (.+)$/gm,'<blockquote>$1</blockquote>')
      .replace(/^- \[x\] (.+)$/gm,'<li class="task-list-item"><input type="checkbox" checked disabled> $1</li>')
      .replace(/^- \[ \] (.+)$/gm,'<li class="task-list-item"><input type="checkbox" disabled> $1</li>')
      .replace(/^- (.+)$/gm,'<li>$1</li>')
      .replace(/^---$/gm,'<hr>')
      .replace(/\n{2,}/g,'<br><br>').replace(/\n/g,'<br>');
  }
  var md=null;
  var coreCdns=['https://cdn.jsdelivr.net/npm/markdown-it@14.1.0/dist/markdown-it.min.js','https://cdnjs.cloudflare.com/ajax/libs/markdown-it/14.1.0/markdown-it.min.js','https://unpkg.com/markdown-it@14.1.0/dist/markdown-it.min.js'];
  var loaded=false;
  for(var ci=0;ci<coreCdns.length;ci++){try{await loadJS(coreCdns[ci]);loaded=true;break}catch(e){continue}}
  if(loaded&&typeof markdownit!=='undefined'){
    md=markdownit({html:true,linkify:true,typographer:true,breaks:true});
    try{await loadJS('https://cdn.jsdelivr.net/npm/markdown-it-footnote@4.0.0/dist/markdown-it-footnote.min.js');md.use(markdownitFootnote)}catch(e){}
    try{await loadJS('https://cdn.jsdelivr.net/npm/markdown-it-task-lists@2.1.1/dist/markdown-it-task-lists.min.js');md.use(markdownitTaskLists)}catch(e){}
    try{await loadJS('https://cdn.jsdelivr.net/npm/markdown-it-mark@2.0.0/dist/markdown-it-mark.min.js');md.use(markdownitMark)}catch(e){}
    status.textContent='✅ markdown-it 14.1 已加载';
  }else{status.textContent='⚠️ CDN 不可用，使用内置解析器'}
  var inp=el.querySelector('#mdIn');
  inp.addEventListener('keydown',function(e){
    if(e.key==='Tab'){e.preventDefault();var s=inp.selectionStart,en=inp.selectionEnd;inp.value=inp.value.substring(0,s)+'    '+inp.value.substring(en);inp.selectionStart=inp.selectionEnd=s+4;inp.dispatchEvent(new Event('input'))}
  });
  var render=function(){try{out.innerHTML=md?md.render(inp.value):miniMd(inp.value)}catch(e){out.innerHTML=miniMd(inp.value)}};
  inp.oninput=render;render();
  el.querySelector('#mdCopy').onclick=function(){var h=out.innerHTML;navigator.clipboard.writeText(h).then(function(){el.querySelector('#mdCopy').textContent='✓ 已复制';setTimeout(function(){el.querySelector('#mdCopy').textContent='📋 复制 HTML'},1500)})};
  el.querySelector('#mdClear').onclick=function(){inp.value='';render()};
}},
{id:'matrix',name:'矩阵计算',icon:'🔢',cat:'academic',desc:'复数 · 行列式 · 逆 · 特征值 · KaTeX',
html(){return'<div class="t-split"><div><div class="t-lbl">矩阵 A（逗号分隔，换行分行，复数如 3+2i）</div><textarea class="t-ta" id="matA" rows="3">1+i, 2\n3, 4-i</textarea></div><div><div class="t-lbl">矩阵 B</div><textarea class="t-ta" id="matB" rows="3">5, 6i\n7, 8</textarea></div></div><div class="t-row" style="margin-top:6px;flex-wrap:wrap"><button class="t-btn" data-op="det">det(A)</button><button class="t-btn" data-op="inv">A⁻¹</button><button class="t-btn" data-op="mul">A × B</button><button class="t-btn" data-op="trans">Aᵀ</button><button class="t-btn t-btn-o" data-op="conj">A*（共轭转置）</button><button class="t-btn t-btn-o" data-op="trace">tr(A)</button><button class="t-btn t-btn-o" data-op="rank">rank(A)</button><button class="t-btn t-btn-o" data-op="add">A + B</button><button class="t-btn t-btn-o" data-op="scale">kA</button><button class="t-btn t-btn-o" data-op="eigen">特征值</button></div><div class="t-row"><span class="t-lbl">标量 k =</span><input class="t-in" id="matK" value="2" style="width:60px"></div><div id="matRes" style="max-height:280px;overflow:auto;padding:12px;background:#fafafa;border-radius:8px;border:1px solid #eee;line-height:1.8"></div>'},
async init(el){
  await loadKaTeX();
  /* Complex number: [re, im] */
  function C(re,im){return[re||0,im||0]}
  function cadd(a,b){return[a[0]+b[0],a[1]+b[1]]}
  function csub(a,b){return[a[0]-b[0],a[1]-b[1]]}
  function cmul(a,b){return[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]]}
  function cdiv(a,b){var d=b[0]*b[0]+b[1]*b[1];if(d===0)throw new Error('除以零');return[(a[0]*b[0]+a[1]*b[1])/d,(a[1]*b[0]-a[0]*b[1])/d]}
  function cconj(a){return[a[0],-a[1]]}
  function cneg(a){return[-a[0],-a[1]]}
  function csqrt(a){var r=Math.sqrt(a[0]*a[0]+a[1]*a[1]);var t=Math.atan2(a[1],a[0]);return[Math.sqrt(r)*Math.cos(t/2),Math.sqrt(r)*Math.sin(t/2)]}
  function cabs(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1])}
  function cfmt(c){var re=+c[0].toFixed(4),im=+c[1].toFixed(4);if(im===0)return String(re);if(re===0)return im===1?'i':im===-1?'-i':im+'i';var sign=im>0?'+':'-';var absIm=Math.abs(im);return re+(sign)+(absIm===1?'':absIm)+'i'}
  function cLatex(c){var re=+c[0].toFixed(4),im=+c[1].toFixed(4);if(im===0)return String(re);if(re===0)return im===1?'i':im===-1?'-i':im+'i';var sign=im>0?'+':'';return re+sign+im+'i'}
  function parseC(s){s=s.trim();if(!s)return C(0,0);s=s.replace(/\s/g,'');if(s.match(/^[+-]?\d*\.?\d+$/))return C(+s,0);if(s.match(/^[+-]?\d*\.?\d*i$/)){var ts=s.replace('i','');var iv=ts===''||ts==='+'?1:ts==='-'?-1:+ts;return C(0,iv)}var m=s.match(/^([+-]?\d*\.?\d+)([+-]\d*\.?\d*)i$/);if(m){var re=+m[1];var imStr=m[2];var im=imStr==='+'?1:imStr==='-'?-1:+imStr;return C(re,im)}throw new Error('无法解析: '+s)}
  function matToLatex(m){var s='\\begin{pmatrix}';for(var i=0;i<m.length;i++){for(var j=0;j<m[i].length;j++){s+=cLatex(m[i][j]);if(j<m[i].length-1)s+=' & '}if(i<m.length-1)s+='\\\\'}s+='\\end{pmatrix}';return s}
  function parse(s){var rows=s.trim().split('\n').map(function(r){return r.split(',').map(function(v){return parseC(v)})});var cols=rows[0].length;rows.forEach(function(r,i){if(r.length!==cols)throw new Error('第'+(i+1)+'行列数不一致')});return rows}
  function isSquare(m){return m.length===m[0].length}
  function det(m){
    if(!isSquare(m))throw new Error('行列式要求方阵');
    var n=m.length;if(n===1)return m[0][0];if(n===2)return csub(cmul(m[0][0],m[1][1]),cmul(m[0][1],m[1][0]));
    var d=C(0,0);for(var j=0;j<n;j++){var sub=m.slice(1).map(function(r){return r.slice(0,j).concat(r.slice(j+1))});var cofactor=cmul(m[0][j],det(sub));d=j%2===0?cadd(d,cofactor):csub(d,cofactor)}return d;
  }
  function inv(m){
    if(!isSquare(m))throw new Error('求逆要求方阵');
    var n=m.length,d=det(m);if(cabs(d)<1e-10)throw new Error('矩阵奇异，不可逆');
    if(n===2)return[[cdiv(m[1][1],d),cdiv(cneg(m[0][1]),d)],[cdiv(cneg(m[1][0]),d),cdiv(m[0][0],d)]];
    var adj=[];for(var i=0;i<n;i++){adj[i]=[];for(var j=0;j<n;j++){var sub=m.filter(function(_,r){return r!==i}).map(function(r){return r.filter(function(_,c){return c!==j})});adj[i][j]=cdiv((i+j)%2===0?det(sub):cneg(det(sub)),d)}}
    return adj[0].map(function(_,c){return adj.map(function(r){return r[c]})});
  }
  function mul(a,b){
    if(a[0].length!==b.length)throw new Error('A列数 ≠ B行数');
    var r=[];for(var i=0;i<a.length;i++){r[i]=[];for(var j=0;j<b[0].length;j++){var s=C(0,0);for(var k=0;k<b.length;k++)s=cadd(s,cmul(a[i][k],b[k][j]));r[i][j]=s}}return r;
  }
  function add(a,b){if(a.length!==b.length||a[0].length!==b[0].length)throw new Error('矩阵尺寸不一致');return a.map(function(r,i){return r.map(function(v,j){return cadd(v,b[i][j])})})}
  function rank(m){var a=m.map(function(r){return r.map(function(c){return c.slice()})});var rows=a.length,cols=a[0].length;var r=0;for(var c=0;c<cols&&r<rows;c++){var p=-1;for(var i=r;i<rows;i++)if(cabs(a[i][c])>1e-10){p=i;break}if(p===-1)continue;var tmp=a[r];a[r]=a[p];a[p]=tmp;var f=a[r][c];for(var j=c;j<cols;j++)a[r][j]=cdiv(a[r][j],f);for(var i=0;i<rows;i++){if(i===r)continue;var f2=a[i][c];for(var j=c;j<cols;j++)a[i][j]=csub(a[i][j],cmul(f2,a[r][j]))}r++}return r}
  function eigen2x2(m){if(m.length!==2)throw new Error('特征值仅支持 2×2');var tr=cadd(m[0][0],m[1][1]),dt=det(m);var disc=csub(cmul(tr,tr),cmul(C(4,0),dt));var sq=csqrt(disc);return[cdiv(cadd(tr,sq),C(2,0)),cdiv(csub(tr,sq),C(2,0))]}
  var res=el.querySelector('#matRes');
  el.querySelectorAll('[data-op]').forEach(function(btn){
    btn.onclick=function(){try{
      var a=parse(el.querySelector('#matA').value);var html='';var aL=matToLatex(a);
      switch(btn.dataset.op){
        case'det':html+=texD('\\det'+aL+' = '+cLatex(det(a)));break;
        case'inv':var iv=inv(a);html+=texD(aL+'^{-1} = '+matToLatex(iv));break;
        case'mul':var b=parse(el.querySelector('#matB').value);html+=texD(aL+'\\times'+matToLatex(b)+' = '+matToLatex(mul(a,b)));break;
        case'trans':var t=a[0].map(function(_,c){return a.map(function(r){return r[c]})});html+=texD(aL+'^{\\mathsf{T}} = '+matToLatex(t));break;
        case'conj':var ct=a[0].map(function(_,c){return a.map(function(r){return cconj(r[c])})});html+=texD(aL+'^{\\dagger} = '+matToLatex(ct));break;
        case'trace':if(!isSquare(a))throw new Error('迹要求方阵');var tr=C(0,0);for(var i=0;i<a.length;i++)tr=cadd(tr,a[i][i]);html+=texD('\\text{tr}'+aL+' = '+cLatex(tr));break;
        case'rank':html+=texD('\\text{rank}'+aL+' = '+rank(a));break;
        case'add':var b=parse(el.querySelector('#matB').value);html+=texD(aL+'+'+matToLatex(b)+' = '+matToLatex(add(a,b)));break;
        case'scale':var k=+el.querySelector('#matK').value;var km=a.map(function(r){return r.map(function(v){return cmul(C(k,0),v)})});html+=texD(k+'\\cdot'+aL+' = '+matToLatex(km));break;
        case'eigen':if(!isSquare(a))throw new Error('特征值要求方阵');if(a.length===2){var ev=eigen2x2(a);html+='<strong>特征方程</strong> '+texD('\\det(A-\\lambda I)=0');html+=texD('\\lambda_1='+cLatex(ev[0]));html+=texD('\\lambda_2='+cLatex(ev[1]))}else if(a.length===1){html+=texD('\\lambda='+cLatex(a[0][0]))}else{html+='<div style="color:#e6a23c">⚠ 特征值计算仅支持 1×1 和 2×2。</div>';var tr=C(0,0);for(var i=0;i<a.length;i++)tr=cadd(tr,a[i][i]);html+=tex('\\text{tr}(A)=\\sum\\lambda_i='+cLatex(tr))+' &nbsp; '+tex('\\det(A)=\\prod\\lambda_i='+cLatex(det(a)))}break;
      }
      res.innerHTML=html;
    }catch(e){res.innerHTML='<span style="color:#f56c6c">⚠ '+e.message+'</span>'}};
  });
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
{id:'montecarlo',name:'Monte Carlo',icon:'🎲',cat:'academic',desc:'MC积分 · 估算π · 舍选法 · MCMC · 随机游走 · Ising模型',
html(){return ''+
'<div class="t-row" id="mcTabs" style="flex-wrap:wrap"></div>'+
'<div id="mcP0">'+
  '<div class="t-res" style="font-size:.78em;margin-bottom:10px;padding:8px 12px;background:var(--bg-zebra)">用 N 个随机点估计定积分 <b>∫<sub>a</sub><sup>b</sup>f(x)dx</b>。上图: 采样点与函数曲线；下图: 估计值随 N 收敛（误差 ∝ 1/√N）</div>'+
  '<label class="t-lbl">f(x) 表达式</label><input class="t-in" id="mcF0" value="sin(x)*x" spellcheck="false">'+
  '<div class="t-row"><label class="t-lbl">a</label><input class="t-in" id="mcA0" value="0" style="width:80px"><label class="t-lbl" style="margin-left:8px">b</label><input class="t-in" id="mcB0" value="3.14159" style="width:80px"><label class="t-lbl" style="margin-left:8px">N</label><input class="t-in" id="mcN0" value="5000" style="width:90px"></div>'+
  '<div class="t-row"><button class="t-btn" id="mcRun0">运行</button></div>'+
  '<canvas class="t-cv" id="mcCv0a" style="width:100%;height:220px"></canvas>'+
  '<canvas class="t-cv" id="mcCv0b" style="width:100%;height:220px;margin-top:6px"></canvas>'+
  '<div class="t-res" id="mcR0"></div>'+
'</div>'+
'<div id="mcP1" style="display:none">'+
  '<div class="t-res" style="font-size:.78em;margin-bottom:10px;padding:8px 12px;background:var(--bg-zebra)">在单位正方形随机撒点，落入内切圆 (x²+y²≤1) 的比例 × 4 ≈ π。经典 hit-or-miss 方法。</div>'+
  '<div class="t-row"><label class="t-lbl">采样数 N</label><input class="t-in" id="mcN1" value="10000" style="width:120px"></div>'+
  '<div class="t-row"><button class="t-btn" id="mcRun1">开始</button><button class="t-btn t-btn-o" id="mcStop1">停止</button></div>'+
  '<canvas class="t-cv" id="mcCv1" style="width:100%;height:280px"></canvas>'+
  '<div class="t-res" id="mcR1"></div>'+
'</div>'+
'<div id="mcP2" style="display:none">'+
  '<div class="t-res" style="font-size:.78em;margin-bottom:10px;padding:8px 12px;background:var(--bg-zebra)">Von Neumann 舍选法: 在 [a,b]×[0,M] 均匀撒点，保留 y≤f(x) 的样本，实现从任意 PDF 采样。上图: 接受/拒绝点；下图: 采样直方图。</div>'+
  '<label class="t-lbl">目标 PDF f(x)</label><input class="t-in" id="mcF2" value="exp(-x^2/2)" spellcheck="false">'+
  '<div class="t-row"><label class="t-lbl">a</label><input class="t-in" id="mcA2" value="-4" style="width:70px"><label class="t-lbl" style="margin-left:8px">b</label><input class="t-in" id="mcB2" value="4" style="width:70px"><label class="t-lbl" style="margin-left:8px">M(上界)</label><input class="t-in" id="mcM2" placeholder="自动" style="width:70px"><label class="t-lbl" style="margin-left:8px">N</label><input class="t-in" id="mcN2" value="8000" style="width:80px"></div>'+
  '<div class="t-row">预设: <span class="t-btn t-btn-o" style="font-size:12px;padding:4px 8px" id="mcPre2a">高斯</span> <span class="t-btn t-btn-o" style="font-size:12px;padding:4px 8px" id="mcPre2b">sin²(x)</span></div>'+
  '<div class="t-row"><button class="t-btn" id="mcRun2">运行</button></div>'+
  '<canvas class="t-cv" id="mcCv2a" style="width:100%;height:220px"></canvas>'+
  '<canvas class="t-cv" id="mcCv2b" style="width:100%;height:220px;margin-top:6px"></canvas>'+
  '<div class="t-res" id="mcR2"></div>'+
'</div>'+
'<div id="mcP3" style="display:none">'+
  '<div class="t-res" style="font-size:.78em;margin-bottom:10px;padding:8px 12px;background:var(--bg-zebra)">Metropolis-Hastings 算法: 从目标分布 π(x)∝f(x) 采样。σ 控制提议步长，Burn-in 丢弃初始样本以消除初始状态偏差。上图: 马尔可夫链轨迹；下图: 采样直方图 vs 目标。</div>'+
  '<label class="t-lbl">目标分布 π(x) ∝ f(x)</label><input class="t-in" id="mcF3" value="exp(-x^2/2)" spellcheck="false">'+
  '<div class="t-row" style="flex-wrap:wrap"><label class="t-lbl">x₀</label><input class="t-in" id="mcX3" value="0" style="width:60px"><label class="t-lbl" style="margin-left:8px">σ</label><input class="t-in" id="mcS3" value="1" style="width:60px"><label class="t-lbl" style="margin-left:8px">N</label><input class="t-in" id="mcN3" value="10000" style="width:80px"><label class="t-lbl" style="margin-left:8px">Burn-in</label><input class="t-in" id="mcB3" value="1000" style="width:80px"></div>'+
  '<div class="t-row">预设: <span class="t-btn t-btn-o" style="font-size:12px;padding:4px 8px" id="mcPre3a">标准正态</span> <span class="t-btn t-btn-o" style="font-size:12px;padding:4px 8px" id="mcPre3b">双峰</span></div>'+
  '<div class="t-row"><button class="t-btn" id="mcRun3">运行</button></div>'+
  '<canvas class="t-cv" id="mcCv3a" style="width:100%;height:220px"></canvas>'+
  '<canvas class="t-cv" id="mcCv3b" style="width:100%;height:220px;margin-top:6px"></canvas>'+
  '<div class="t-res" id="mcR3"></div>'+
'</div>'+
'<div id="mcP4" style="display:none">'+
  '<div class="t-res" style="font-size:.78em;margin-bottom:10px;padding:8px 12px;background:var(--bg-zebra)">2D 简单随机游走: 每步等概率选择 ↑↓←→ 移动一格。均方位移 ⟨R²⟩ ∝ N（扩散律），上图: 轨迹；下图: |R| 随步数变化。</div>'+
  '<div class="t-row"><label class="t-lbl">步数 N</label><input class="t-in" id="mcN4" value="500" style="width:90px"><label class="t-lbl" style="margin-left:8px">轨迹数 M</label><input class="t-in" id="mcM4" value="5" style="width:70px"></div>'+
  '<div class="t-row">预设: <span class="t-btn t-btn-o" style="font-size:12px;padding:4px 8px" id="mcPre4a">短程 (N=100,M=20)</span> <span class="t-btn t-btn-o" style="font-size:12px;padding:4px 8px" id="mcPre4b">长程 (N=2000,M=5)</span></div>'+
  '<div class="t-row"><button class="t-btn" id="mcRun4">运行</button></div>'+
  '<canvas class="t-cv" id="mcCv4a" style="width:100%;height:300px"></canvas>'+
  '<canvas class="t-cv" id="mcCv4b" style="width:100%;height:220px;margin-top:6px"></canvas>'+
  '<div class="t-res" id="mcR4"></div>'+
'</div>'+
'<div id="mcP5" style="display:none">'+
  '<div id="mcDesc5" class="t-res" style="font-size:.78em;margin-bottom:10px;padding:8px 12px;background:var(--bg-zebra)">2D 正方格子 Ising 模型（Metropolis 算法）。每个格点自旋 σ=±1，哈密顿量 H = −J Σ σᵢσⱼ。温度 T 以 J/k<sub>B</sub> 为单位 (J=k<sub>B</sub>=1)，临界温度 T<sub>c</sub> = 2/ln(1+√2) ≈ 2.269：低温铁磁有序，高温顺磁无序。</div>'+
  '<div class="t-row" style="flex-wrap:wrap"><label class="t-lbl">格子 L</label><input type="range" id="mcL5" min="8" max="80" value="16" style="width:120px"><span id="mcL5v">16</span><label class="t-lbl" style="margin-left:12px">温度 T</label><input type="range" id="mcT5" min="0.5" max="5.0" step="0.1" value="2.3" style="width:140px"><span id="mcT5v">2.30</span></div>'+
  '<div class="t-row" style="flex-wrap:wrap">预设: <span class="t-btn t-btn-o" style="font-size:12px;padding:4px 8px" id="mcPre5a">低温有序 T=1.5</span> <span class="t-btn t-btn-o" style="font-size:12px;padding:4px 8px" id="mcPre5b">临界点 T=2.27</span> <span class="t-btn t-btn-o" style="font-size:12px;padding:4px 8px" id="mcPre5c">高温无序 T=4.0</span></div>'+
  '<div class="t-row"><button class="t-btn" id="mcPlay5">▶ Play</button><button class="t-btn t-btn-o" id="mcPause5">⏸ Pause</button><button class="t-btn t-btn-o" id="mcReset5">↺ Reset</button></div>'+
  '<canvas class="t-cv" id="mcCv5a" style="width:100%;height:320px"></canvas>'+
  '<canvas class="t-cv" id="mcCv5b" style="width:100%;height:200px;margin-top:6px"></canvas>'+
  '<div class="t-res" id="mcR5"></div>'+
'</div>';},

async init(el){
  var math=await loadMath();
  var q=function(s){return el.querySelector(s)};
  var qa=function(s){return el.querySelectorAll(s)};
  var cs=getComputedStyle(document.documentElement);
  var C_ACCENT=cs.getPropertyValue('--accent').trim()||'#5B8BA4';
  var C_FONT1=cs.getPropertyValue('--font-color-1').trim()||'#333';
  var dpr=window.devicePixelRatio||1;
  var rafId=null;
  var curTab=0;
  var PAD={l:45,r:15,t:15,b:30};
  var TOTAL_TABS=6;

  /* ========== Tab 切换 ========== */
  var tabNames=['MC 积分','估算 π','舍选法','MCMC','随机游走','Ising 模型'];
  var tabsEl=q('#mcTabs');
  tabNames.forEach(function(n,i){
    var b=document.createElement('span');
    b.textContent=n;
    b.className=i===0?'t-btn':'t-btn t-btn-o';
    if(i===0)b.style.fontWeight='700';
    b.style.cursor='pointer';
    b.onclick=function(){switchTab(i)};
    tabsEl.appendChild(b);
  });

  function stopAnim(){if(rafId){cancelAnimationFrame(rafId);rafId=null}}
  function switchTab(i){
    stopAnim();piRunning=false;isingRunning=false;curTab=i;
    var btns=tabsEl.children;
    for(var j=0;j<btns.length;j++){
      btns[j].className=j===i?'t-btn':'t-btn t-btn-o';
      btns[j].style.fontWeight=j===i?'700':'';
    }
    for(var j=0;j<TOTAL_TABS;j++){
      var p=q('#mcP'+j);
      if(p)p.style.display=j===i?'':'none';
    }
  }

  /* ========== Canvas 工具 ========== */
  function setupCanvas(cv){
    var rect=cv.getBoundingClientRect();
    var w=rect.width,h=rect.height;
    cv.width=w*dpr;cv.height=h*dpr;
    var ctx=cv.getContext('2d');
    ctx.scale(dpr,dpr);
    return{ctx:ctx,w:w,h:h,pw:w-PAD.l-PAD.r,ph:h-PAD.t-PAD.b};
  }

  function drawAxes(ctx,w,h,xMin,xMax,yMin,yMax,opts){
    var pw=w-PAD.l-PAD.r,ph=h-PAD.t-PAD.b;
    ctx.clearRect(0,0,w,h);
    ctx.strokeStyle='#eee';ctx.lineWidth=1;
    var nx=5,ny=4;
    for(var i=0;i<=nx;i++){var x=PAD.l+pw*i/nx;ctx.beginPath();ctx.moveTo(x,PAD.t);ctx.lineTo(x,PAD.t+ph);ctx.stroke()}
    for(var i=0;i<=ny;i++){var y=PAD.t+ph*i/ny;ctx.beginPath();ctx.moveTo(PAD.l,y);ctx.lineTo(PAD.l+pw,y);ctx.stroke()}
    ctx.strokeStyle='#333';ctx.lineWidth=1.2;
    ctx.beginPath();ctx.moveTo(PAD.l,PAD.t+ph);ctx.lineTo(PAD.l+pw,PAD.t+ph);ctx.stroke();
    ctx.beginPath();ctx.moveTo(PAD.l,PAD.t);ctx.lineTo(PAD.l,PAD.t+ph);ctx.stroke();
    ctx.fillStyle='#888';ctx.font='10px sans-serif';ctx.textAlign='center';
    for(var i=0;i<=nx;i++){var v=xMin+(xMax-xMin)*i/nx;ctx.fillText(v.toFixed(2),PAD.l+pw*i/nx,PAD.t+ph+14)}
    ctx.textAlign='right';
    for(var i=0;i<=ny;i++){var v=yMax-(yMax-yMin)*i/ny;ctx.fillText(v.toFixed(opts&&opts.yDig!==undefined?opts.yDig:2),PAD.l-4,PAD.t+ph*i/ny+4)}
    if(opts&&opts.title){ctx.fillStyle=C_FONT1;ctx.font='11px sans-serif';ctx.textAlign='left';ctx.fillText(opts.title,PAD.l+4,PAD.t+12)}
  }

  function mapX(v,xMin,xMax,pw){return PAD.l+pw*(v-xMin)/(xMax-xMin)}
  function mapY(v,yMin,yMax,ph){return PAD.t+ph*(1-(v-yMin)/(yMax-yMin))}

  function parseF(expr){
    var node=math.parse(expr);var code=node.compile();
    return function(x){try{return code.evaluate({x:x,pi:Math.PI,e:Math.E})}catch(e){return NaN}};
  }

  function simpson(f,a,b,n){
    if(n%2!==0)n++;var h=(b-a)/n;var s=f(a)+f(b);
    for(var i=1;i<n;i++)s+=f(a+i*h)*(i%2===0?2:4);
    return s*h/3;
  }

  function randn(){var u1=Math.random(),u2=Math.random();return Math.sqrt(-2*Math.log(u1))*Math.cos(2*Math.PI*u2)}

  /* ========== 模式 0: MC 积分 ========== */
  q('#mcRun0').onclick=function(){
    stopAnim();
    try{
      var f=parseF(q('#mcF0').value);
      var a=parseFloat(q('#mcA0').value),b=parseFloat(q('#mcB0').value);
      var N=parseInt(q('#mcN0').value)||5000;
      if(isNaN(a)||isNaN(b)||a>=b){q('#mcR0').innerHTML='<span style="color:#f56c6c">区间无效</span>';return}
      var fmax=0;for(var i=0;i<=200;i++){var v=f(a+(b-a)*i/200);if(v>fmax)fmax=v}fmax*=1.1;if(fmax<=0)fmax=1;
      var cv0a=q('#mcCv0a'),s0a=setupCanvas(cv0a);
      drawAxes(s0a.ctx,s0a.w,s0a.h,a,b,0,fmax,{title:'散点图'});
      s0a.ctx.strokeStyle='#409eff';s0a.ctx.lineWidth=2;s0a.ctx.beginPath();
      for(var i=0;i<=200;i++){var xi=a+(b-a)*i/200;var yi=f(xi);var px=mapX(xi,a,b,s0a.pw);var py=mapY(yi,0,fmax,s0a.ph);i===0?s0a.ctx.moveTo(px,py):s0a.ctx.lineTo(px,py)}
      s0a.ctx.stroke();
      var sum=0,sum2=0;var xs=[],ys=[],hits=[];
      for(var i=0;i<N;i++){var xi=a+Math.random()*(b-a);var yi=Math.random()*fmax;var fv=f(xi);xs.push(xi);ys.push(yi);hits.push(yi<=fv);sum+=fv;sum2+=fv*fv}
      for(var i=0;i<N;i++){s0a.ctx.fillStyle=hits[i]?'rgba(103,194,58,0.4)':'rgba(180,180,180,0.3)';s0a.ctx.fillRect(mapX(xs[i],a,b,s0a.pw)-1,mapY(ys[i],0,fmax,s0a.ph)-1,2,2)}
      var cv0b=q('#mcCv0b'),s0b=setupCanvas(cv0b);
      var mcEst=(b-a)*sum/N;var se=Math.sqrt(((b-a)*(b-a))*(sum2/N-(sum/N)*(sum/N))/N);
      var simpVal=simpson(f,a,b,1000);
      var cumEst=[];var runSum=0;
      for(var i=0;i<N;i++){runSum+=f(xs[i]);cumEst.push((b-a)*runSum/(i+1))}
      var eMin=cumEst[0],eMax=cumEst[0];
      for(var i=0;i<cumEst.length;i++){if(cumEst[i]<eMin)eMin=cumEst[i];if(cumEst[i]>eMax)eMax=cumEst[i]}
      var pad2=(eMax-eMin)*0.15||1;eMin-=pad2;eMax+=pad2;
      drawAxes(s0b.ctx,s0b.w,s0b.h,0,N,eMin,eMax,{title:'收敛曲线'});
      s0b.ctx.strokeStyle='#f56c6c';s0b.ctx.lineWidth=1.2;s0b.ctx.setLineDash([6,4]);s0b.ctx.beginPath();
      var refY=mapY(simpVal,eMin,eMax,s0b.ph);s0b.ctx.moveTo(PAD.l,refY);s0b.ctx.lineTo(PAD.l+s0b.pw,refY);s0b.ctx.stroke();s0b.ctx.setLineDash([]);
      s0b.ctx.strokeStyle=C_ACCENT;s0b.ctx.lineWidth=1.5;s0b.ctx.beginPath();
      var step=Math.max(1,Math.floor(N/500));
      for(var i=0;i<N;i+=step){var px=mapX(i,0,N,s0b.pw);var py=mapY(cumEst[i],eMin,eMax,s0b.ph);i===0?s0b.ctx.moveTo(px,py):s0b.ctx.lineTo(px,py)}
      s0b.ctx.stroke();
      var relErr=simpVal!==0?Math.abs(mcEst-simpVal)/Math.abs(simpVal)*100:0;
      q('#mcR0').innerHTML='MC 估计值: <b>'+mcEst.toFixed(6)+'</b> ± '+se.toFixed(6)+'<br>Simpson 参考: <b>'+simpVal.toFixed(6)+'</b><br>相对误差: <b>'+relErr.toFixed(3)+'%</b>';
    }catch(e){q('#mcR0').innerHTML='<span style="color:#f56c6c">'+e.message+'</span>'}
  };

  /* ========== 模式 1: 估算 π ========== */
  var piRunning=false;
  q('#mcRun1').onclick=function(){
    stopAnim();piRunning=true;
    var N=parseInt(q('#mcN1').value)||10000;
    var cv1=q('#mcCv1'),s1=setupCanvas(cv1);
    drawAxes(s1.ctx,s1.w,s1.h,-1,1,-1,1,{title:'估算 π'});
    var cx=mapX(0,-1,1,s1.pw),cy=mapY(0,-1,1,s1.ph);
    var rx=s1.pw/2,ry=s1.ph/2;
    s1.ctx.strokeStyle='#409eff';s1.ctx.lineWidth=1.5;s1.ctx.beginPath();s1.ctx.ellipse(cx,cy,rx,ry,0,0,2*Math.PI);s1.ctx.stroke();
    var inside=0,total=0,batch=50;
    function tick(){
      if(!piRunning||total>=N)return;
      for(var i=0;i<batch&&total<N;i++){
        var x=Math.random()*2-1,y=Math.random()*2-1;
        var inC=x*x+y*y<=1;if(inC)inside++;total++;
        s1.ctx.fillStyle=inC?'rgba(103,194,58,0.5)':'rgba(180,180,180,0.35)';
        s1.ctx.fillRect(mapX(x,-1,1,s1.pw)-1,mapY(y,-1,1,s1.ph)-1,2.5,2.5);
      }
      var est=4*inside/total;
      q('#mcR1').innerHTML='采样: <b>'+total+'/'+N+'</b> | π ≈ <b>'+est.toFixed(6)+'</b> | 误差: <b>'+(Math.abs(est-Math.PI)/Math.PI*100).toFixed(3)+'%</b>';
      if(total<N){rafId=requestAnimationFrame(tick)}else{piRunning=false}
    }
    rafId=requestAnimationFrame(tick);
  };
  q('#mcStop1').onclick=function(){piRunning=false;stopAnim()};

  /* ========== 模式 2: 舍选法 ========== */
  q('#mcPre2a').onclick=function(){q('#mcF2').value='exp(-x^2/2)';q('#mcA2').value='-4';q('#mcB2').value='4';q('#mcM2').value=''};
  q('#mcPre2b').onclick=function(){q('#mcF2').value='sin(x)^2';q('#mcA2').value='0';q('#mcB2').value='3.14159265';q('#mcM2').value=''};

  q('#mcRun2').onclick=function(){
    stopAnim();
    try{
      var f=parseF(q('#mcF2').value);
      var a=parseFloat(q('#mcA2').value),b=parseFloat(q('#mcB2').value);
      var N=parseInt(q('#mcN2').value)||8000;
      if(isNaN(a)||isNaN(b)||a>=b){q('#mcR2').innerHTML='<span style="color:#f56c6c">区间无效</span>';return}
      var M=parseFloat(q('#mcM2').value);
      if(isNaN(M)||M<=0){M=0;for(var i=0;i<=200;i++){var v=f(a+(b-a)*i/200);if(v>M)M=v}M*=1.05;if(M<=0)M=1}
      var accepted=[],rejected=[];
      for(var i=0;i<N;i++){
        var x=a+Math.random()*(b-a);var u=Math.random()*M;var fv=f(x);
        if(u<fv){accepted.push({x:x,y:u})}else{rejected.push({x:x,y:u})}
      }
      var cv2a=q('#mcCv2a'),s2a=setupCanvas(cv2a);
      drawAxes(s2a.ctx,s2a.w,s2a.h,a,b,0,M,{title:'舍选法散点'});
      s2a.ctx.strokeStyle='#409eff';s2a.ctx.lineWidth=2;s2a.ctx.beginPath();
      for(var i=0;i<=200;i++){var xi=a+(b-a)*i/200;var yi=f(xi);var px=mapX(xi,a,b,s2a.pw);var py=mapY(yi,0,M,s2a.ph);i===0?s2a.ctx.moveTo(px,py):s2a.ctx.lineTo(px,py)}
      s2a.ctx.stroke();
      for(var i=0;i<rejected.length;i++){s2a.ctx.fillStyle='rgba(180,180,180,0.3)';s2a.ctx.fillRect(mapX(rejected[i].x,a,b,s2a.pw)-1,mapY(rejected[i].y,0,M,s2a.ph)-1,2,2)}
      for(var i=0;i<accepted.length;i++){s2a.ctx.fillStyle='rgba(103,194,58,0.45)';s2a.ctx.fillRect(mapX(accepted[i].x,a,b,s2a.pw)-1,mapY(accepted[i].y,0,M,s2a.ph)-1,2,2)}
      var cv2b=q('#mcCv2b'),s2b=setupCanvas(cv2b);
      var bins=30,binW=(b-a)/bins,counts=[];for(var i=0;i<bins;i++)counts.push(0);
      for(var i=0;i<accepted.length;i++){var bi=Math.floor((accepted[i].x-a)/binW);if(bi>=bins)bi=bins-1;if(bi<0)bi=0;counts[bi]++}
      var maxC=0;for(var i=0;i<bins;i++)if(counts[i]>maxC)maxC=counts[i];
      var fMaxV=0;for(var i=0;i<=200;i++){var v=f(a+(b-a)*i/200);if(v>fMaxV)fMaxV=v}
      var scale=fMaxV>0?maxC/fMaxV:1;
      drawAxes(s2b.ctx,s2b.w,s2b.h,a,b,0,maxC*1.1,{title:'接受样本直方图',yDig:0});
      s2b.ctx.fillStyle='rgba(103,194,58,0.5)';
      for(var i=0;i<bins;i++){
        var bx=mapX(a+i*binW,a,b,s2b.pw);var bx2=mapX(a+(i+1)*binW,a,b,s2b.pw);
        var by=mapY(counts[i],0,maxC*1.1,s2b.ph);var by0=mapY(0,0,maxC*1.1,s2b.ph);
        s2b.ctx.fillRect(bx,by,bx2-bx-1,by0-by);
      }
      s2b.ctx.strokeStyle='#f56c6c';s2b.ctx.lineWidth=2;s2b.ctx.beginPath();
      for(var i=0;i<=200;i++){var xi=a+(b-a)*i/200;var yi=f(xi)*scale;var px=mapX(xi,a,b,s2b.pw);var py=mapY(yi,0,maxC*1.1,s2b.ph);i===0?s2b.ctx.moveTo(px,py):s2b.ctx.lineTo(px,py)}
      s2b.ctx.stroke();
      var rate=(accepted.length/N*100).toFixed(1);
      q('#mcR2').innerHTML='接受率: <b>'+rate+'%</b> ('+accepted.length+'/'+N+')<br>有效样本数: <b>'+accepted.length+'</b> | 包络上界 M: '+M.toFixed(4);
    }catch(e){q('#mcR2').innerHTML='<span style="color:#f56c6c">'+e.message+'</span>'}
  };

  /* ========== 模式 3: MCMC Metropolis-Hastings ========== */
  q('#mcPre3a').onclick=function(){q('#mcF3').value='exp(-x^2/2)';q('#mcX3').value='0';q('#mcS3').value='1'};
  q('#mcPre3b').onclick=function(){q('#mcF3').value='exp(-(x-3)^2/2)+0.5*exp(-(x+2)^2/(2*0.5^2))';q('#mcX3').value='0';q('#mcS3').value='1.5'};

  q('#mcRun3').onclick=function(){
    stopAnim();
    try{
      var f=parseF(q('#mcF3').value);
      var x0=parseFloat(q('#mcX3').value)||0;
      var sigma=parseFloat(q('#mcS3').value)||1;
      var N=parseInt(q('#mcN3').value)||10000;
      var burnin=parseInt(q('#mcB3').value)||1000;
      if(burnin>=N){q('#mcR3').innerHTML='<span style="color:#f56c6c">Burn-in 须小于 N</span>';return}
      var chain=[x0],accepts=0;
      var cur=x0,curF=f(cur);
      for(var i=1;i<N;i++){
        var prop=cur+sigma*randn();
        var propF=f(prop);
        var alpha=curF>0?Math.min(1,propF/curF):1;
        if(Math.random()<alpha){cur=prop;curF=propF;accepts++}
        chain.push(cur);
      }
      var cv3a=q('#mcCv3a'),s3a=setupCanvas(cv3a);
      var cMin=chain[0],cMax=chain[0];
      for(var i=0;i<chain.length;i++){if(chain[i]<cMin)cMin=chain[i];if(chain[i]>cMax)cMax=chain[i]}
      var cPad=(cMax-cMin)*0.08||1;cMin-=cPad;cMax+=cPad;
      drawAxes(s3a.ctx,s3a.w,s3a.h,0,N,cMin,cMax,{title:'链轨迹 (Trace Plot)'});
      var burnX=mapX(burnin,0,N,s3a.pw);
      s3a.ctx.fillStyle='rgba(180,180,180,0.15)';
      s3a.ctx.fillRect(PAD.l,PAD.t,burnX-PAD.l,s3a.ph);
      s3a.ctx.fillStyle='#888';s3a.ctx.font='10px sans-serif';s3a.ctx.textAlign='center';
      s3a.ctx.fillText('burn-in',(PAD.l+burnX)/2,PAD.t+s3a.ph/2);
      s3a.ctx.strokeStyle=C_ACCENT;s3a.ctx.lineWidth=0.8;s3a.ctx.beginPath();
      var step3=Math.max(1,Math.floor(N/800));
      for(var i=0;i<N;i+=step3){var px=mapX(i,0,N,s3a.pw);var py=mapY(chain[i],cMin,cMax,s3a.ph);i===0?s3a.ctx.moveTo(px,py):s3a.ctx.lineTo(px,py)}
      s3a.ctx.stroke();
      var cv3b=q('#mcCv3b'),s3b=setupCanvas(cv3b);
      var samples=chain.slice(burnin);
      var sMin=samples[0],sMax=samples[0];
      for(var i=0;i<samples.length;i++){if(samples[i]<sMin)sMin=samples[i];if(samples[i]>sMax)sMax=samples[i]}
      var sPad=(sMax-sMin)*0.08||1;sMin-=sPad;sMax+=sPad;
      var hBins=40,hW=(sMax-sMin)/hBins,hCounts=[];for(var i=0;i<hBins;i++)hCounts.push(0);
      for(var i=0;i<samples.length;i++){var bi=Math.floor((samples[i]-sMin)/hW);if(bi>=hBins)bi=hBins-1;if(bi<0)bi=0;hCounts[bi]++}
      var hMax=0;for(var i=0;i<hBins;i++)if(hCounts[i]>hMax)hMax=hCounts[i];
      drawAxes(s3b.ctx,s3b.w,s3b.h,sMin,sMax,0,hMax*1.15,{title:'后验直方图',yDig:0});
      s3b.ctx.fillStyle='rgba(64,158,255,0.45)';
      for(var i=0;i<hBins;i++){
        var bx=mapX(sMin+i*hW,sMin,sMax,s3b.pw);var bx2=mapX(sMin+(i+1)*hW,sMin,sMax,s3b.pw);
        var by=mapY(hCounts[i],0,hMax*1.15,s3b.ph);var by0=mapY(0,0,hMax*1.15,s3b.ph);
        s3b.ctx.fillRect(bx,by,bx2-bx-1,by0-by);
      }
      var fMaxV=0;for(var i=0;i<=200;i++){var v=f(sMin+(sMax-sMin)*i/200);if(v>fMaxV)fMaxV=v}
      var fScale=fMaxV>0?hMax/fMaxV:1;
      s3b.ctx.strokeStyle='#f56c6c';s3b.ctx.lineWidth=2;s3b.ctx.beginPath();
      for(var i=0;i<=200;i++){var xi=sMin+(sMax-sMin)*i/200;var yi=f(xi)*fScale;var px=mapX(xi,sMin,sMax,s3b.pw);var py=mapY(yi,0,hMax*1.15,s3b.ph);i===0?s3b.ctx.moveTo(px,py):s3b.ctx.lineTo(px,py)}
      s3b.ctx.stroke();
      var sMean=0;for(var i=0;i<samples.length;i++)sMean+=samples[i];sMean/=samples.length;
      var sVar=0;for(var i=0;i<samples.length;i++)sVar+=(samples[i]-sMean)*(samples[i]-sMean);sVar/=(samples.length-1);
      var sStd=Math.sqrt(sVar);
      var accRate=(accepts/(N-1)*100).toFixed(1);
      q('#mcR3').innerHTML='总接受率: <b>'+accRate+'%</b><br>样本均值: <b>'+sMean.toFixed(4)+'</b> | 样本标准差: <b>'+sStd.toFixed(4)+'</b><br>有效样本数: <b>'+samples.length+'</b> (去除 '+burnin+' burn-in)';
    }catch(e){q('#mcR3').innerHTML='<span style="color:#f56c6c">'+e.message+'</span>'}
  };

  /* ========== 模式 4: 随机游走 ========== */
  var WALK_COLORS=['#e63946','#457b9d','#2a9d8f','#e9c46a','#f4a261','#264653','#6a4c93','#1982c4','#8ac926','#ff595e','#ff924c','#ffca3a','#c77dff','#72efdd','#480ca8','#3a86ff','#8338ec','#fb5607','#06d6a0','#118ab2'];

  q('#mcPre4a').onclick=function(){q('#mcN4').value='100';q('#mcM4').value='20'};
  q('#mcPre4b').onclick=function(){q('#mcN4').value='2000';q('#mcM4').value='5'};

  q('#mcRun4').onclick=function(){
    stopAnim();
    var N=parseInt(q('#mcN4').value)||500;
    var M=parseInt(q('#mcM4').value)||5;
    if(N<1)N=1;if(M<1)M=1;if(M>50)M=50;
    var dirs=[[1,0],[-1,0],[0,1],[0,-1]];
    var trails=[];
    var allEndX=[],allEndY=[];
    var globalMinX=0,globalMaxX=0,globalMinY=0,globalMaxY=0;
    for(var m=0;m<M;m++){
      var tx=[0],ty=[0];
      var cx=0,cy=0;
      for(var s=0;s<N;s++){
        var d=dirs[Math.floor(Math.random()*4)];
        cx+=d[0];cy+=d[1];
        tx.push(cx);ty.push(cy);
        if(cx<globalMinX)globalMinX=cx;if(cx>globalMaxX)globalMaxX=cx;
        if(cy<globalMinY)globalMinY=cy;if(cy>globalMaxY)globalMaxY=cy;
      }
      trails.push({x:tx,y:ty});
      allEndX.push(cx);allEndY.push(cy);
    }
    var padW=Math.max(5,Math.ceil((globalMaxX-globalMinX)*0.1));
    var padH=Math.max(5,Math.ceil((globalMaxY-globalMinY)*0.1));
    globalMinX-=padW;globalMaxX+=padW;globalMinY-=padH;globalMaxY+=padH;
    var rangeX=globalMaxX-globalMinX;
    var rangeY=globalMaxY-globalMinY;
    if(rangeX>rangeY){var dd=(rangeX-rangeY)/2;globalMinY-=dd;globalMaxY+=dd}
    else{var dd=(rangeY-rangeX)/2;globalMinX-=dd;globalMaxX+=dd}

    var cv4a=q('#mcCv4a'),s4a=setupCanvas(cv4a);
    var pw4=s4a.pw,ph4=s4a.ph;
    function mx4(v){return PAD.l+pw4*(v-globalMinX)/(globalMaxX-globalMinX)}
    function my4(v){return PAD.t+ph4*(1-(v-globalMinY)/(globalMaxY-globalMinY))}

    var drawnUpTo=0;
    var stepsPerFrame=Math.max(1,Math.floor(N/120));

    drawAxes(s4a.ctx,s4a.w,s4a.h,globalMinX,globalMaxX,globalMinY,globalMaxY,{title:'2D 格点随机游走',yDig:0});
    s4a.ctx.fillStyle='#333';s4a.ctx.beginPath();s4a.ctx.arc(mx4(0),my4(0),4,0,2*Math.PI);s4a.ctx.fill();

    function animWalk(){
      var nextUpTo=Math.min(N,drawnUpTo+stepsPerFrame);
      for(var m=0;m<M;m++){
        var col=WALK_COLORS[m%WALK_COLORS.length];
        s4a.ctx.strokeStyle=col;s4a.ctx.lineWidth=1.2;s4a.ctx.globalAlpha=0.7;
        s4a.ctx.beginPath();
        s4a.ctx.moveTo(mx4(trails[m].x[drawnUpTo]),my4(trails[m].y[drawnUpTo]));
        for(var ss=drawnUpTo+1;ss<=nextUpTo;ss++){
          s4a.ctx.lineTo(mx4(trails[m].x[ss]),my4(trails[m].y[ss]));
        }
        s4a.ctx.stroke();
        s4a.ctx.globalAlpha=1.0;
        if(nextUpTo<N){
          s4a.ctx.fillStyle=col;s4a.ctx.beginPath();
          s4a.ctx.arc(mx4(trails[m].x[nextUpTo]),my4(trails[m].y[nextUpTo]),2.5,0,2*Math.PI);
          s4a.ctx.fill();
        }
      }
      drawnUpTo=nextUpTo;
      if(drawnUpTo<N){
        rafId=requestAnimationFrame(animWalk);
      }else{
        for(var m=0;m<M;m++){
          var col=WALK_COLORS[m%WALK_COLORS.length];
          s4a.ctx.fillStyle=col;s4a.ctx.beginPath();
          s4a.ctx.arc(mx4(allEndX[m]),my4(allEndY[m]),4,0,2*Math.PI);s4a.ctx.fill();
          s4a.ctx.strokeStyle='#fff';s4a.ctx.lineWidth=1;s4a.ctx.beginPath();
          s4a.ctx.arc(mx4(allEndX[m]),my4(allEndY[m]),4,0,2*Math.PI);s4a.ctx.stroke();
        }
        drawEndpoints4();
        showWalkStats4();
      }
    }
    rafId=requestAnimationFrame(animWalk);

    function drawEndpoints4(){
      var cv4b=q('#mcCv4b'),s4b=setupCanvas(cv4b);
      var exMin=allEndX[0],exMax=allEndX[0],eyMin=allEndY[0],eyMax=allEndY[0];
      for(var i=0;i<M;i++){
        if(allEndX[i]<exMin)exMin=allEndX[i];if(allEndX[i]>exMax)exMax=allEndX[i];
        if(allEndY[i]<eyMin)eyMin=allEndY[i];if(allEndY[i]>eyMax)eyMax=allEndY[i];
      }
      var ep=Math.max(5,Math.ceil(Math.max(exMax-exMin,eyMax-eyMin)*0.2));
      exMin-=ep;exMax+=ep;eyMin-=ep;eyMax+=ep;
      var rx2=exMax-exMin,ry2=eyMax-eyMin;
      if(rx2>ry2){var dd=(rx2-ry2)/2;eyMin-=dd;eyMax+=dd}else{var dd=(ry2-rx2)/2;exMin-=dd;exMax+=dd}
      drawAxes(s4b.ctx,s4b.w,s4b.h,exMin,exMax,eyMin,eyMax,{title:'终点分布',yDig:0});
      var ox=mapX(0,exMin,exMax,s4b.pw),oy=mapY(0,eyMin,eyMax,s4b.ph);
      s4b.ctx.strokeStyle='#ccc';s4b.ctx.lineWidth=1;s4b.ctx.setLineDash([4,4]);
      s4b.ctx.beginPath();s4b.ctx.moveTo(ox,PAD.t);s4b.ctx.lineTo(ox,PAD.t+s4b.ph);s4b.ctx.stroke();
      s4b.ctx.beginPath();s4b.ctx.moveTo(PAD.l,oy);s4b.ctx.lineTo(PAD.l+s4b.pw,oy);s4b.ctx.stroke();
      s4b.ctx.setLineDash([]);
      for(var i=0;i<M;i++){
        var col=WALK_COLORS[i%WALK_COLORS.length];
        s4b.ctx.fillStyle=col;s4b.ctx.beginPath();
        s4b.ctx.arc(mapX(allEndX[i],exMin,exMax,s4b.pw),mapY(allEndY[i],eyMin,eyMax,s4b.ph),5,0,2*Math.PI);
        s4b.ctx.fill();
        s4b.ctx.strokeStyle='#fff';s4b.ctx.lineWidth=1;s4b.ctx.beginPath();
        s4b.ctx.arc(mapX(allEndX[i],exMin,exMax,s4b.pw),mapY(allEndY[i],eyMin,eyMax,s4b.ph),5,0,2*Math.PI);
        s4b.ctx.stroke();
      }
    }

    function showWalkStats4(){
      var sumR=0,sumR2=0;
      for(var i=0;i<M;i++){
        var r=Math.sqrt(allEndX[i]*allEndX[i]+allEndY[i]*allEndY[i]);
        sumR+=r;sumR2+=r*r;
      }
      var avgR=sumR/M;
      var rms=Math.sqrt(sumR2/M);
      var theory=Math.sqrt(N);
      q('#mcR4').innerHTML='轨迹数: <b>'+M+'</b> | 步数: <b>'+N+'</b><br>平均位移 ⟨r⟩: <b>'+avgR.toFixed(2)+'</b><br>均方根位移 √⟨r²⟩: <b>'+rms.toFixed(2)+'</b><br>理论值 √N: <b>'+theory.toFixed(2)+'</b>';
    }
  };

  /* ========== 模式 5: Ising 模型 ========== */
  var isingRunning=false;
  var isingSpins=null;
  var isingSweeps=0;
  var isingMagHistory=[];

  q('#mcL5').oninput=function(){q('#mcL5v').textContent=this.value};
  q('#mcT5').oninput=function(){q('#mcT5v').textContent=parseFloat(this.value).toFixed(2)};

  q('#mcPre5a').onclick=function(){q('#mcT5').value='1.5';q('#mcT5v').textContent='1.50'};
  q('#mcPre5b').onclick=function(){q('#mcT5').value='2.27';q('#mcT5v').textContent='2.27'};
  q('#mcPre5c').onclick=function(){q('#mcT5').value='4.0';q('#mcT5v').textContent='4.00'};

  function isingInit(){
    var L=parseInt(q('#mcL5').value)||16;
    isingSpins=[];
    for(var i=0;i<L;i++){
      isingSpins[i]=[];
      for(var j=0;j<L;j++){
        isingSpins[i][j]=Math.random()<0.5?1:-1;
      }
    }
    isingSweeps=0;
    isingMagHistory=[];
  }

  function isingDrawConfig(){
    var L=isingSpins.length;
    var cv5a=q('#mcCv5a');
    var rect=cv5a.getBoundingClientRect();
    var w=rect.width,h=rect.height;
    cv5a.width=w*dpr;cv5a.height=h*dpr;
    var ctx=cv5a.getContext('2d');
    ctx.scale(dpr,dpr);
    var margin=10;
    var availW=w-2*margin,availH=h-2*margin-20;
    var cellSize=Math.floor(Math.min(availW/L,availH/L));
    if(cellSize<2)cellSize=2;
    var offX=margin+Math.floor((availW-cellSize*L)/2);
    var offY=margin+20+Math.floor((availH-cellSize*L)/2);
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle=C_FONT1;ctx.font='11px sans-serif';ctx.textAlign='left';
    ctx.fillText('自旋构型 (L='+L+', sweep='+isingSweeps+')',margin,margin+12);
    for(var i=0;i<L;i++){
      for(var j=0;j<L;j++){
        ctx.fillStyle=isingSpins[i][j]===1?C_ACCENT:'#eee';
        ctx.fillRect(offX+j*cellSize,offY+i*cellSize,cellSize-1,cellSize-1);
      }
    }
  }

  function isingDrawMag(){
    var cv5b=q('#mcCv5b'),s5b=setupCanvas(cv5b);
    if(isingMagHistory.length<2){
      drawAxes(s5b.ctx,s5b.w,s5b.h,0,1,0,1,{title:'|M|/N² vs 扫描次数'});
      return;
    }
    var xMax=isingMagHistory.length-1;
    var yMin=0,yMax=1.05;
    drawAxes(s5b.ctx,s5b.w,s5b.h,0,xMax,yMin,yMax,{title:'|M|/N² vs 扫描次数',yDig:2});
    s5b.ctx.strokeStyle=C_ACCENT;s5b.ctx.lineWidth=1.5;s5b.ctx.beginPath();
    var step5=Math.max(1,Math.floor(isingMagHistory.length/500));
    for(var i=0;i<isingMagHistory.length;i+=step5){
      var px=mapX(i,0,xMax,s5b.pw);
      var py=mapY(isingMagHistory[i],yMin,yMax,s5b.ph);
      i===0?s5b.ctx.moveTo(px,py):s5b.ctx.lineTo(px,py);
    }
    s5b.ctx.stroke();
    var T=parseFloat(q('#mcT5').value);
    s5b.ctx.fillStyle='#888';s5b.ctx.font='10px sans-serif';s5b.ctx.textAlign='right';
    s5b.ctx.fillText('T='+T.toFixed(2),PAD.l+s5b.pw-4,PAD.t+14);
  }

  function isingComputeEnergy(){
    var L=isingSpins.length;
    var E=0;
    for(var i=0;i<L;i++){
      for(var j=0;j<L;j++){
        var s=isingSpins[i][j];
        var right=isingSpins[i][(j+1)%L];
        var down=isingSpins[(i+1)%L][j];
        E+=-s*(right+down);
      }
    }
    return E;
  }

  function isingComputeMag(){
    var L=isingSpins.length;
    var m=0;
    for(var i=0;i<L;i++)for(var j=0;j<L;j++)m+=isingSpins[i][j];
    return Math.abs(m)/(L*L);
  }

  function isingSweep(){
    var L=isingSpins.length;
    var T=parseFloat(q('#mcT5').value)||2.27;
    var N2=L*L;
    for(var t=0;t<N2;t++){
      var i=Math.floor(Math.random()*L);
      var j=Math.floor(Math.random()*L);
      var s=isingSpins[i][j];
      var top=isingSpins[(i-1+L)%L][j];
      var bottom=isingSpins[(i+1)%L][j];
      var left=isingSpins[i][(j-1+L)%L];
      var right=isingSpins[i][(j+1)%L];
      var dE=2*s*(top+bottom+left+right);
      if(dE<=0||Math.random()<Math.exp(-dE/T)){
        isingSpins[i][j]=-s;
      }
    }
    isingSweeps++;
    isingMagHistory.push(isingComputeMag());
  }

  function isingUpdateResults(){
    var L=isingSpins.length;
    var T=parseFloat(q('#mcT5').value)||2.27;
    var mag=isingComputeMag();
    var energy=isingComputeEnergy();
    q('#mcR5').innerHTML='扫描次数: <b>'+isingSweeps+'</b> | 温度 T: <b>'+T.toFixed(2)+'</b><br>磁化强度 |M|/N²: <b>'+mag.toFixed(4)+'</b><br>能量 E: <b>'+energy+'</b> | 格子: <b>'+L+'×'+L+'</b>';
  }

  function isingLoop(){
    if(!isingRunning)return;
    isingSweep();
    isingDrawConfig();
    if(isingSweeps%3===0)isingDrawMag();
    isingUpdateResults();
    rafId=requestAnimationFrame(isingLoop);
  }

  q('#mcPlay5').onclick=function(){
    stopAnim();
    if(!isingSpins)isingInit();
    isingRunning=true;
    isingLoop();
  };

  q('#mcPause5').onclick=function(){
    isingRunning=false;
    stopAnim();
  };

  q('#mcReset5').onclick=function(){
    isingRunning=false;
    stopAnim();
    isingInit();
    isingDrawConfig();
    isingDrawMag();
    isingUpdateResults();
  };

  /* ========== 清理 ========== */
  el._cleanup=function(){stopAnim();piRunning=false;isingRunning=false};
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
{id:'ode',name:'ODE 求解',icon:'📐',cat:'academic',desc:'Euler · RK4 · 隐式 · 自适应 · 方程组 · 相空间',
html(){return `
<div class="t-row" style="gap:6px;margin-bottom:12px">
  <button id="odeTabSingle" class="t-btn">单方程</button>
  <button id="odeTabSystem" class="t-btn t-btn-o">方程组</button>
  <button id="odeTabNumerov" class="t-btn t-btn-o">二阶ODE</button>
</div>
<div id="odePanelSingle">
  <label class="t-lbl">dy/dx = f(x, y)</label>
  <input class="t-in" id="odeExpr" placeholder="-0.5*y + sin(2*x)">
  <div class="t-row" style="gap:8px;margin-top:6px">
    <div style="flex:1"><label class="t-lbl">初始 x</label><input class="t-in" id="odeX0" value="0"></div>
    <div style="flex:1"><label class="t-lbl">初始 y</label><input class="t-in" id="odeY0" value="0"></div>
    <div style="flex:1"><label class="t-lbl">终点 x</label><input class="t-in" id="odeXend" value="15"></div>
    <div style="flex:1"><label class="t-lbl">步长 h</label><input class="t-in" id="odeH" value="0.05"></div>
  </div>
  <label class="t-lbl" style="margin-top:8px">求解方法</label>
  <div style="display:flex;flex-wrap:wrap;gap:6px 16px;margin:4px 0 8px">
    <label><input type="checkbox" id="odeMEuler" checked> Euler</label>
    <label><input type="checkbox" id="odeMHeun" checked> 改进Euler(Heun)</label>
    <label><input type="checkbox" id="odeMRK4" checked> RK4</label>
    <label><input type="checkbox" id="odeMImpl"> 隐式Euler</label>
    <label><input type="checkbox" id="odeMRK45"> 自适应RK45</label>
  </div>
  <div id="odeTolRow" style="display:none;margin-bottom:8px">
    <label class="t-lbl">容差 (自适应RK45)</label>
    <input class="t-in" id="odeTol" value="1e-6" style="width:120px">
  </div>
  <div class="t-row" style="flex-wrap:wrap;gap:6px;margin-bottom:8px">
    <span class="t-lbl" style="margin-right:4px">预设:</span>
    <button class="t-btn t-btn-o" data-preset="decay">衰减振荡</button>
    <button class="t-btn t-btn-o" data-preset="exp">指数增长</button>
    <button class="t-btn t-btn-o" data-preset="logistic">Logistic</button>
    <button class="t-btn t-btn-o" data-preset="stiff">刚性方程</button>
  </div>
  <button class="t-btn" id="odeSolve">求解</button>
</div>
<div id="odePanelSystem" style="display:none">
  <div id="odeSysEqs"></div>
  <button class="t-btn t-btn-o" id="odeSysAdd" style="margin-top:6px">+ 添加方程</button>
  <div class="t-row" style="gap:8px;margin-top:8px">
    <div style="flex:1"><label class="t-lbl">初始 t</label><input class="t-in" id="odeSysT0" value="0"></div>
    <div style="flex:1"><label class="t-lbl">终点 t</label><input class="t-in" id="odeSysTend" value="15"></div>
    <div style="flex:1"><label class="t-lbl">步长 h</label><input class="t-in" id="odeSysH" value="0.05"></div>
  </div>
  <label class="t-lbl" style="margin-top:8px">求解方法</label>
  <div style="display:flex;flex-wrap:wrap;gap:6px 16px;margin:4px 0 8px">
    <label><input type="checkbox" id="odeSysMEuler" checked> Euler</label>
    <label><input type="checkbox" id="odeSysMHeun" checked> Heun</label>
    <label><input type="checkbox" id="odeSysMRK4" checked> RK4</label>
  </div>
  <label class="t-lbl">绘图模式</label>
  <div style="display:flex;gap:16px;margin:4px 0 4px">
    <label><input type="radio" name="odePlotMode" value="time" checked> 时间演化</label>
    <label><input type="radio" name="odePlotMode" value="phase"> 相空间</label>
  </div>
  <div id="odePhaseAxes" style="display:none;margin:4px 0 8px">
    <div class="t-row" style="gap:8px;align-items:center">
      <span class="t-lbl">X 轴:</span>
      <select class="t-sel" id="odePhaseX" style="width:80px"></select>
      <span class="t-lbl">Y 轴:</span>
      <select class="t-sel" id="odePhaseY" style="width:80px"></select>
    </div>
  </div>
  <div class="t-row" style="flex-wrap:wrap;gap:6px;margin-bottom:8px">
    <span class="t-lbl" style="margin-right:4px">预设:</span>
    <button class="t-btn t-btn-o" data-syspreset="osc">阻尼振子</button>
    <button class="t-btn t-btn-o" data-syspreset="lv">Lotka-Volterra</button>
    <button class="t-btn t-btn-o" data-syspreset="chaos">混沌摆</button>
  </div>
  <button class="t-btn" id="odeSysSolve">求解</button>
</div>
<div id="odePanelNumerov" style="display:none">
  <div class="t-res" style="font-size:.78em;margin-bottom:10px;padding:8px 12px;background:var(--bg-zebra)">
    求解 <b>y'' + k²(x)·y = s(x)</b> — Numerov 算法 (O(h⁶)局部精度)
  </div>
  <label class="t-lbl">k²(x) 表达式</label>
  <input class="t-in" id="odeNK2" placeholder="例: 4*pi^2" value="4*pi^2">
  <label class="t-lbl" style="margin-top:6px">s(x) 源项</label>
  <input class="t-in" id="odeNS" placeholder="0 (齐次)" value="0">
  <div class="t-row" style="gap:8px;margin-top:6px">
    <div style="flex:1"><label class="t-lbl">x₀</label><input class="t-in" id="odeNX0" value="0"></div>
    <div style="flex:1"><label class="t-lbl">x_end</label><input class="t-in" id="odeNXend" value="1"></div>
    <div style="flex:1"><label class="t-lbl">y(x₀)</label><input class="t-in" id="odeNY0" value="1"></div>
    <div style="flex:1"><label class="t-lbl">y'(x₀)</label><input class="t-in" id="odeNDY0" value="0"></div>
  </div>
  <div class="t-row" style="margin-top:6px">
    <label class="t-lbl">网格点数 N</label>
    <input type="range" id="odeNN" min="50" max="2000" step="50" value="500" style="flex:1">
    <span id="odeNNVal" style="min-width:40px;text-align:right">500</span>
  </div>
  <div class="t-row" style="flex-wrap:wrap;gap:6px;margin:8px 0">
    <span class="t-lbl" style="margin-right:4px">预设:</span>
    <button class="t-btn t-btn-o" data-numpreset="harmonic">简谐振动 k²=4π²</button>
    <button class="t-btn t-btn-o" data-numpreset="airy">Airy 型 k²=x</button>
    <button class="t-btn t-btn-o" data-numpreset="bessel">类 Bessel k²=1-1/(4x²)</button>
  </div>
  <button class="t-btn" id="odeNSolve">Numerov 求解</button>
</div>
<canvas id="odeCanvas" class="t-cv" style="width:100%;margin-top:10px;display:none"></canvas>
<div style="margin-top:8px">
  <button class="t-btn t-btn-o" id="odeToggleTable" style="display:none">显示数据表</button>
</div>
<div id="odeTableWrap" style="display:none;margin-top:8px;max-height:400px;overflow:auto"></div>
<div id="odeResult" class="t-res"></div>`},
async init(el){
  var math=await loadMath();
  var q=function(s){return el.querySelector(s)};
  var qa=function(s){return el.querySelectorAll(s)};

  /* ========== CSS 变量缓存 ========== */
  var cs=getComputedStyle(document.documentElement);
  var C_ACCENT=cs.getPropertyValue('--accent').trim()||'#5B8BA4';
  var colors=[C_ACCENT,'#67c23a','#f56c6c','#e6a23c','#9b59b6','#00bcd4','#ff7043','#8d6e63','#78909c','#26a69a'];

  /* ========== DOM 引用 ========== */
  var cvs=q('#odeCanvas'),ctx=cvs.getContext('2d');
  var resEl=q('#odeResult'),tableWrap=q('#odeTableWrap'),toggleBtn=q('#odeToggleTable');
  var panelS=q('#odePanelSingle'),panelY=q('#odePanelSystem'),panelN=q('#odePanelNumerov');
  var lastRedraw=null;

  /* ========== 下标字符工具 ========== */
  var subDigits=['\u2080','\u2081','\u2082','\u2083','\u2084','\u2085','\u2086','\u2087','\u2088','\u2089'];
  function toSub(n){return String(n).split('').map(function(d){return subDigits[+d]}).join('')}

  /* ========== 动态方程组管理 ========== */
  var sysEqContainer=q('#odeSysEqs');
  var sysEqCount=0;
  var MAX_EQ=10;
  var MIN_EQ=2;

  function addEqRow(idx,fVal,y0Val){
    sysEqCount++;
    var row=document.createElement('div');
    row.className='t-row ode-eq-row';
    row.dataset.idx=idx;
    row.style.cssText='gap:6px;margin-bottom:4px;align-items:center';
    row.innerHTML=
      '<span class="t-lbl" style="white-space:nowrap">dy'+toSub(idx)+'/dt =</span>'+
      '<input class="t-in ode-sys-f" data-idx="'+idx+'" value="'+(fVal||'')+'" style="flex:1">'+
      '<span class="t-lbl" style="white-space:nowrap">y'+toSub(idx)+'(0) =</span>'+
      '<input class="t-in ode-sys-y0" data-idx="'+idx+'" value="'+(y0Val||'0')+'" style="width:60px">'+
      '<button class="t-btn t-btn-d ode-sys-del" data-idx="'+idx+'" style="padding:2px 8px">\u2715</button>';
    sysEqContainer.appendChild(row);
    updateDelButtons();
    updatePhaseSelectors();
  }

  function removeEqRow(idx){
    var row=sysEqContainer.querySelector('.ode-eq-row[data-idx="'+idx+'"]');
    if(row){row.remove();sysEqCount--;renumberEqs();updateDelButtons();updatePhaseSelectors()}
  }

  function renumberEqs(){
    var rows=sysEqContainer.querySelectorAll('.ode-eq-row');
    for(var i=0;i<rows.length;i++){
      var newIdx=i+1;
      rows[i].dataset.idx=newIdx;
      rows[i].querySelector('.ode-sys-f').dataset.idx=newIdx;
      rows[i].querySelector('.ode-sys-y0').dataset.idx=newIdx;
      rows[i].querySelector('.ode-sys-del').dataset.idx=newIdx;
      rows[i].querySelectorAll('span')[0].textContent='dy'+toSub(newIdx)+'/dt =';
      rows[i].querySelectorAll('span')[1].textContent='y'+toSub(newIdx)+'(0) =';
    }
  }

  function updateDelButtons(){
    var dels=sysEqContainer.querySelectorAll('.ode-sys-del');
    for(var i=0;i<dels.length;i++){
      dels[i].style.display=sysEqCount<=MIN_EQ?'none':'';
    }
  }

  function updatePhaseSelectors(){
    var selX=q('#odePhaseX'),selY=q('#odePhaseY');
    var prevX=selX.value,prevY=selY.value;
    selX.innerHTML='';selY.innerHTML='';
    var rows=sysEqContainer.querySelectorAll('.ode-eq-row');
    for(var i=0;i<rows.length;i++){
      var idx=i+1;
      var optX=document.createElement('option');optX.value='y'+idx;optX.textContent='y'+toSub(idx);
      var optY=document.createElement('option');optY.value='y'+idx;optY.textContent='y'+toSub(idx);
      selX.appendChild(optX);selY.appendChild(optY);
    }
    if(prevX&&selX.querySelector('option[value="'+prevX+'"]'))selX.value=prevX;
    else selX.value='y1';
    if(prevY&&selY.querySelector('option[value="'+prevY+'"]'))selY.value=prevY;
    else if(rows.length>=2)selY.value='y2';
    else selY.value='y1';
  }

  function getEqCount(){return sysEqContainer.querySelectorAll('.ode-eq-row').length}

  function clearAllEqs(){sysEqContainer.innerHTML='';sysEqCount=0}

  function setSystemEqs(eqs){
    clearAllEqs();
    for(var i=0;i<eqs.length;i++) addEqRow(i+1,eqs[i].f,eqs[i].y0);
  }

  /* 初始化默认 2 个方程 */
  addEqRow(1,'y2','2');
  addEqRow(2,'-4*y1 - 0.5*y2','0');

  /* 添加方程按钮 */
  q('#odeSysAdd').onclick=function(){
    if(getEqCount()>=MAX_EQ)return;
    addEqRow(getEqCount()+1,'','0');
  };

  /* 删除方程按钮（事件代理） */
  sysEqContainer.addEventListener('click',function(e){
    var btn=e.target.closest('.ode-sys-del');
    if(!btn)return;
    if(getEqCount()<=MIN_EQ)return;
    removeEqRow(+btn.dataset.idx);
  });

  /* ========== tab 切换 ========== */
  var tabS=q('#odeTabSingle'),tabY=q('#odeTabSystem'),tabN=q('#odeTabNumerov');
  function setTab(which){
    tabS.className=which==='single'?'t-btn':'t-btn t-btn-o';
    tabS.style.fontWeight=which==='single'?'700':'';
    tabY.className=which==='system'?'t-btn':'t-btn t-btn-o';
    tabY.style.fontWeight=which==='system'?'700':'';
    tabN.className=which==='numerov'?'t-btn':'t-btn t-btn-o';
    tabN.style.fontWeight=which==='numerov'?'700':'';
    panelS.style.display=which==='single'?'':'none';
    panelY.style.display=which==='system'?'':'none';
    panelN.style.display=which==='numerov'?'':'none';
    resEl.innerHTML='';cvs.style.display='none';toggleBtn.style.display='none';
    tableWrap.style.display='none';
  }
  tabS.onclick=function(){setTab('single')};
  tabY.onclick=function(){setTab('system')};
  tabN.onclick=function(){setTab('numerov')};

  /* ========== 相空间轴选择显示/隐藏 ========== */
  var phaseAxesDiv=q('#odePhaseAxes');
  qa('input[name="odePlotMode"]').forEach(function(r){
    r.onchange=function(){phaseAxesDiv.style.display=this.value==='phase'?'':'none'};
  });

  /* ========== RK45 容差行 ========== */
  q('#odeMRK45').onchange=function(){q('#odeTolRow').style.display=this.checked?'':'none'};

  /* ========== 单方程预设 ========== */
  var presets={
    decay:{e:'-0.5*y + sin(2*x)',x0:'0',y0:'0',xe:'15',h:'0.05'},
    exp:{e:'0.5*y',x0:'0',y0:'1',xe:'5',h:'0.05'},
    logistic:{e:'y*(1-y)',x0:'0',y0:'0.1',xe:'10',h:'0.05'},
    stiff:{e:'-1000*(y - sin(x)) + cos(x)',x0:'0',y0:'0',xe:'5',h:'0.001'}
  };
  qa('[data-preset]').forEach(function(b){b.onclick=function(){
    var p=presets[this.dataset.preset];
    q('#odeExpr').value=p.e;q('#odeX0').value=p.x0;q('#odeY0').value=p.y0;
    q('#odeXend').value=p.xe;q('#odeH').value=p.h;
    if(this.dataset.preset==='stiff')
      resEl.innerHTML='<span style="color:#e6a23c">\u63d0\u793a\uff1a\u521a\u6027\u65b9\u7a0b\u9002\u5408\u4f7f\u7528\u9690\u5f0fEuler\u6cd5</span>';
  }});

  /* ========== 方程组预设 ========== */
  var sysP={
    osc:{eqs:[{f:'y2',y0:'2'},{f:'-4*y1 - 0.5*y2',y0:'0'}],t0:'0',te:'15',h:'0.05'},
    lv:{eqs:[{f:'1.5*y1 - y1*y2',y0:'1'},{f:'-3*y2 + y1*y2',y0:'1'}],t0:'0',te:'20',h:'0.01'},
    chaos:{eqs:[{f:'y2',y0:'0.5'},{f:'-0.5*y2 - sin(y1) + 1.15*cos(0.667*t)',y0:'0'}],t0:'0',te:'100',h:'0.02'}
  };
  qa('[data-syspreset]').forEach(function(b){b.onclick=function(){
    var p=sysP[this.dataset.syspreset];
    setSystemEqs(p.eqs);
    q('#odeSysT0').value=p.t0;q('#odeSysTend').value=p.te;q('#odeSysH').value=p.h;
    if(this.dataset.syspreset==='chaos')
      resEl.innerHTML='<span style="color:#e6a23c">\u63d0\u793a\uff1a\u6df7\u6c8c\u6446\u7cfb\u7edf\uff0c\u5c1d\u8bd5\u76f8\u7a7a\u95f4\u7ed8\u56fe\u67e5\u770b\u5438\u5f15\u5b50</span>';
    solveSystem();
  }});

  /* ========== niceStep ========== */
  function niceStep(range,tgt){
    if(range<=0) return 1;
    var r=range/tgt,m=Math.pow(10,Math.floor(Math.log10(r))),n=r/m;
    return (n<1.5?1:n<3?2:n<7?5:10)*m;
  }

  /* ========== Canvas 绘图 ========== */
  function drawCanvas(series,labels,xLbl,yLbl){
    cvs.style.display='';
    var dpr=window.devicePixelRatio||1;
    var w=cvs.clientWidth,h=Math.min(w*0.55,400);
    cvs.width=w*dpr;cvs.height=h*dpr;cvs.style.height=h+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    var pad={l:50,r:20,t:10,b:30},pw=w-pad.l-pad.r,ph=h-pad.t-pad.b;
    /* 边界 */
    var xMin=Infinity,xMax=-Infinity,yMin=Infinity,yMax=-Infinity;
    series.forEach(function(s){s.forEach(function(p){
      if(isFinite(p[0])&&isFinite(p[1])){
        if(p[0]<xMin)xMin=p[0];if(p[0]>xMax)xMax=p[0];
        if(p[1]<yMin)yMin=p[1];if(p[1]>yMax)yMax=p[1];
      }
    })});
    if(xMin===xMax){xMin-=1;xMax+=1}
    if(yMin===yMax){yMin-=1;yMax+=1}
    var xP=(xMax-xMin)*0.05||1,yP=(yMax-yMin)*0.05||1;
    xMin-=xP;xMax+=xP;yMin-=yP;yMax+=yP;
    function tx(v){return pad.l+(v-xMin)/(xMax-xMin)*pw}
    function ty(v){return pad.t+(1-(v-yMin)/(yMax-yMin))*ph}
    /* 清空 */
    ctx.clearRect(0,0,w,h);
    /* 网格 */
    var xS=niceStep(xMax-xMin,8),yS=niceStep(yMax-yMin,6);
    ctx.strokeStyle='#eee';ctx.lineWidth=1;ctx.beginPath();
    for(var gx=Math.ceil(xMin/xS)*xS;gx<=xMax;gx+=xS){var px=tx(gx);ctx.moveTo(px,pad.t);ctx.lineTo(px,pad.t+ph)}
    for(var gy=Math.ceil(yMin/yS)*yS;gy<=yMax;gy+=yS){var py=ty(gy);ctx.moveTo(pad.l,py);ctx.lineTo(pad.l+pw,py)}
    ctx.stroke();
    /* 坐标轴 */
    ctx.strokeStyle='#333';ctx.lineWidth=1.5;ctx.beginPath();
    ctx.moveTo(pad.l,pad.t+ph);ctx.lineTo(pad.l+pw,pad.t+ph);
    ctx.moveTo(pad.l,pad.t);ctx.lineTo(pad.l,pad.t+ph);ctx.stroke();
    /* y=0 基线 */
    if(yMin<0&&yMax>0){
      ctx.save();ctx.strokeStyle='#ccc';ctx.lineWidth=1;ctx.setLineDash([4,3]);ctx.beginPath();
      var zy=ty(0);ctx.moveTo(pad.l,zy);ctx.lineTo(pad.l+pw,zy);ctx.stroke();ctx.restore();
    }
    /* 刻度 */
    ctx.fillStyle='#888';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.textBaseline='top';
    for(var gx=Math.ceil(xMin/xS)*xS;gx<=xMax;gx+=xS) ctx.fillText(+gx.toPrecision(4),tx(gx),pad.t+ph+4);
    ctx.textAlign='right';ctx.textBaseline='middle';
    for(var gy=Math.ceil(yMin/yS)*yS;gy<=yMax;gy+=yS) ctx.fillText(+gy.toPrecision(4),pad.l-6,ty(gy));
    /* 曲线 */
    series.forEach(function(s,i){
      ctx.strokeStyle=colors[i%colors.length];ctx.lineWidth=1.8;ctx.beginPath();
      var started=false;
      s.forEach(function(p){
        if(!isFinite(p[0])||!isFinite(p[1]))return;
        var px=tx(p[0]),py=ty(p[1]);
        if(!started){ctx.moveTo(px,py);started=true}else ctx.lineTo(px,py);
      });
      ctx.stroke();
    });
    /* 图例 右上角 */
    if(labels&&labels.length){
      ctx.font='11px sans-serif';
      var maxW=0;labels.forEach(function(l){var tw=ctx.measureText(l).width;if(tw>maxW)maxW=tw});
      var lx=pad.l+pw-maxW-24;
      labels.forEach(function(l,i){
        var ly=pad.t+14+i*16;
        ctx.fillStyle=colors[i%colors.length];ctx.fillRect(lx,ly-4,14,3);
        ctx.fillStyle='#555';ctx.textAlign='left';ctx.fillText(l,lx+18,ly);
      });
    }
    /* 轴标签 */
    ctx.fillStyle='#888';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.textBaseline='top';
    ctx.fillText(xLbl||'x',pad.l+pw/2,h-2);
    ctx.save();ctx.translate(12,pad.t+ph/2);ctx.rotate(-Math.PI/2);
    ctx.textBaseline='middle';ctx.fillText(yLbl||'y',0,0);ctx.restore();
  }
  /* resize 重绘 */
  var rTimer;
  window.addEventListener('resize',function(){clearTimeout(rTimer);rTimer=setTimeout(function(){if(lastRedraw)lastRedraw()},200)});

  /* ========== 表达式编译 ========== */
  function compileE(str){
    try{var nd=math.compile(str);return{fn:function(sc){return nd.evaluate(sc)},err:null}}
    catch(e){return{fn:null,err:e.message}}
  }

  /* ========== 单方程求解 ========== */
  function solveSingle(){
    var expr=q('#odeExpr').value.trim();
    if(!expr){resEl.innerHTML='<span style="color:#f56c6c">\u8bf7\u8f93\u5165\u8868\u8fbe\u5f0f</span>';return}
    var comp=compileE(expr);
    if(comp.err){resEl.innerHTML='<span style="color:#f56c6c">\u8868\u8fbe\u5f0f\u9519\u8bef: '+comp.err+'</span>';return}
    var f=comp.fn;
    var x0=parseFloat(q('#odeX0').value),y0=parseFloat(q('#odeY0').value);
    var xend=parseFloat(q('#odeXend').value),h=parseFloat(q('#odeH').value);
    var tol=parseFloat(q('#odeTol').value)||1e-6;
    if([x0,y0,xend,h].some(isNaN)){resEl.innerHTML='<span style="color:#f56c6c">\u53c2\u6570\u65e0\u6548</span>';return}
    if(h<=0){resEl.innerHTML='<span style="color:#f56c6c">\u6b65\u957f\u5fc5\u987b\u4e3a\u6b63</span>';return}
    var methods=[];
    if(q('#odeMEuler').checked)methods.push('euler');
    if(q('#odeMHeun').checked)methods.push('heun');
    if(q('#odeMRK4').checked)methods.push('rk4');
    if(q('#odeMImpl').checked)methods.push('implicit');
    if(q('#odeMRK45').checked)methods.push('rk45');
    if(!methods.length){resEl.innerHTML='<span style="color:#f56c6c">\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u79cd\u65b9\u6cd5</span>';return}
    var MAX=100000,allS=[],allL=[],allT=[],warns=[];
    function ef(x,y){try{return f({x:x,y:y})}catch(e){return NaN}}
    methods.forEach(function(m){
      var pts=[[x0,y0]],x=x0,y=y0;
      if(m==='rk45'){
        var hc=h,steps=0,hmin=1e-10;
        while(x<xend-hmin&&steps<MAX){
          if(x+hc>xend)hc=xend-x;
          var k1=ef(x,y);
          var k2=ef(x+hc/5,y+hc*k1/5);
          var k3=ef(x+3*hc/10,y+hc*(3*k1/40+9*k2/40));
          var k4=ef(x+4*hc/5,y+hc*(44*k1/45-56*k2/15+32*k3/9));
          var k5=ef(x+8*hc/9,y+hc*(19372*k1/6561-25360*k2/2187+64448*k3/6561-212*k4/729));
          var k6=ef(x+hc,y+hc*(9017*k1/3168-355*k2/33+46732*k3/5247+49*k4/176-5103*k5/18656));
          var y5=y+hc*(35*k1/384+500*k3/1113+125*k4/192-2187*k5/6784+11*k6/84);
          var k7=ef(x+hc,y5);
          var y4=y+hc*(5179*k1/57600+7571*k3/16695+393*k4/640-92097*k5/339200+187*k6/2100+k7/40);
          var err=Math.abs(y5-y4);
          if(!isFinite(y5)){warns.push('RK45: \u6570\u503c\u6ea2\u51fa\u4e8e x='+x.toFixed(6));break}
          if(err<=tol||hc<=hmin){x+=hc;y=y5;pts.push([x,y])}
          var hn=err>0?hc*0.84*Math.pow(tol/err,0.25):hc*4;
          hc=Math.max(hmin,Math.min(4*hc,Math.max(0.1*hc,hn)));
          steps++;
        }
        if(steps>=MAX)warns.push('RK45: \u8fbe\u5230\u6700\u5927\u6b65\u6570');
      }else{
        var n=Math.ceil(Math.abs(xend-x0)/h);if(n>MAX)n=MAX;
        for(var i=0;i<n;i++){
          var xn=x,yn=y,yNew;
          if(m==='euler'){
            yNew=yn+h*ef(xn,yn);
          }else if(m==='heun'){
            var k1=ef(xn,yn),k2=ef(xn+h,yn+h*k1);
            yNew=yn+h*(k1+k2)/2;
          }else if(m==='rk4'){
            var k1=ef(xn,yn),k2=ef(xn+h/2,yn+h*k1/2);
            var k3=ef(xn+h/2,yn+h*k2/2),k4=ef(xn+h,yn+h*k3);
            yNew=yn+h*(k1+2*k2+2*k3+k4)/6;
          }else if(m==='implicit'){
            var xn1=xn+h,yg=yn+h*ef(xn,yn),conv=false;
            for(var it=0;it<50;it++){
              var yNxt=yn+h*ef(xn1,yg);
              if(Math.abs(yNxt-yg)<1e-12){conv=true;yg=yNxt;break}
              yg=yNxt;
            }
            if(!conv)warns.push('\u9690\u5f0fEuler: \u8fed\u4ee3\u672a\u6536\u655b\u4e8e x='+(xn+h).toFixed(6));
            yNew=yg;
          }
          if(!isFinite(yNew)){warns.push(m+': \u6570\u503c\u6ea2\u51fa\u4e8e x='+(xn+h).toFixed(6));break}
          x=xn+h;y=yNew;pts.push([x,y]);
        }
      }
      var mname={euler:'Euler',heun:'Heun',rk4:'RK4',implicit:'\u9690\u5f0fEuler',rk45:'RK45'}[m];
      allS.push(pts);allL.push(mname);allT.push({name:mname,pts:pts});
    });
    lastRedraw=function(){drawCanvas(allS,allL,'x','y')};lastRedraw();
    var info=allT.map(function(t){
      var last=t.pts[t.pts.length-1];
      return t.name+': '+t.pts.length+' \u70b9, y('+last[0].toPrecision(5)+') = '+last[1].toPrecision(8);
    }).join('<br>');
    if(warns.length)info+='<br><span style="color:#e6a23c">\u26a0 '+warns.join('<br>\u26a0 ')+'</span>';
    resEl.innerHTML=info;
    buildTable(allT,false,0);toggleBtn.style.display='';
  }

  /* ========== N 维方程组求解器 ========== */
  function buildScope(t,Y){
    var scope={t:t};
    for(var i=0;i<Y.length;i++) scope['y'+(i+1)]=Y[i];
    return scope;
  }

  function sysEuler(fs,t,Y,h){
    var N=Y.length;
    var scope=buildScope(t,Y);
    var Ynew=[];
    for(var i=0;i<N;i++) Ynew.push(Y[i]+h*fs[i](scope));
    return Ynew;
  }

  function sysHeun(fs,t,Y,h){
    var N=Y.length;
    var scope1=buildScope(t,Y);
    var k1=[];
    for(var i=0;i<N;i++) k1.push(fs[i](scope1));
    var Ytmp=[];
    for(var i=0;i<N;i++) Ytmp.push(Y[i]+h*k1[i]);
    var scope2=buildScope(t+h,Ytmp);
    var k2=[];
    for(var i=0;i<N;i++) k2.push(fs[i](scope2));
    var Ynew=[];
    for(var i=0;i<N;i++) Ynew.push(Y[i]+h*(k1[i]+k2[i])/2);
    return Ynew;
  }

  function sysRK4(fs,t,Y,h){
    var N=Y.length;
    var k1=[],k2=[],k3=[],k4=[];
    var scope1=buildScope(t,Y);
    for(var i=0;i<N;i++) k1.push(fs[i](scope1));
    var Y2=[];
    for(var i=0;i<N;i++) Y2.push(Y[i]+h*k1[i]/2);
    var scope2=buildScope(t+h/2,Y2);
    for(var i=0;i<N;i++) k2.push(fs[i](scope2));
    var Y3=[];
    for(var i=0;i<N;i++) Y3.push(Y[i]+h*k2[i]/2);
    var scope3=buildScope(t+h/2,Y3);
    for(var i=0;i<N;i++) k3.push(fs[i](scope3));
    var Y4=[];
    for(var i=0;i<N;i++) Y4.push(Y[i]+h*k3[i]);
    var scope4=buildScope(t+h,Y4);
    for(var i=0;i<N;i++) k4.push(fs[i](scope4));
    var Ynew=[];
    for(var i=0;i<N;i++) Ynew.push(Y[i]+h*(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6);
    return Ynew;
  }

  /* ========== 方程组求解 ========== */
  function solveSystem(){
    var rows=sysEqContainer.querySelectorAll('.ode-eq-row');
    var N=rows.length;
    if(N<2){resEl.innerHTML='<span style="color:#f56c6c">\u81f3\u5c11\u9700\u8981 2 \u4e2a\u65b9\u7a0b</span>';return}
    var fs=[],Y0=[],compileOk=true;
    for(var i=0;i<N;i++){
      var fInput=rows[i].querySelector('.ode-sys-f');
      var y0Input=rows[i].querySelector('.ode-sys-y0');
      var fStr=fInput.value.trim();
      var y0Str=y0Input.value.trim();
      if(!fStr){resEl.innerHTML='<span style="color:#f56c6c">\u65b9\u7a0b '+(i+1)+' \u8868\u8fbe\u5f0f\u4e3a\u7a7a</span>';compileOk=false;break}
      var comp=compileE(fStr);
      if(comp.err){resEl.innerHTML='<span style="color:#f56c6c">f'+toSub(i+1)+' \u9519\u8bef: '+comp.err+'</span>';compileOk=false;break}
      var y0v=parseFloat(y0Str);
      if(isNaN(y0v)){resEl.innerHTML='<span style="color:#f56c6c">y'+toSub(i+1)+'(0) \u65e0\u6548</span>';compileOk=false;break}
      fs.push(function(fn){return function(scope){try{return fn(scope)}catch(e){return NaN}}}(comp.fn));
      Y0.push(y0v);
    }
    if(!compileOk)return;
    var t0=parseFloat(q('#odeSysT0').value),tend=parseFloat(q('#odeSysTend').value);
    var h=parseFloat(q('#odeSysH').value);
    if([t0,tend,h].some(isNaN)){resEl.innerHTML='<span style="color:#f56c6c">\u53c2\u6570\u65e0\u6548</span>';return}
    if(h<=0){resEl.innerHTML='<span style="color:#f56c6c">\u6b65\u957f\u5fc5\u987b\u4e3a\u6b63</span>';return}
    var methods=[];
    if(q('#odeSysMEuler').checked)methods.push('euler');
    if(q('#odeSysMHeun').checked)methods.push('heun');
    if(q('#odeSysMRK4').checked)methods.push('rk4');
    if(!methods.length){resEl.innerHTML='<span style="color:#f56c6c">\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u79cd\u65b9\u6cd5</span>';return}
    var plotMode=q('input[name="odePlotMode"]:checked').value;
    var phaseXKey=q('#odePhaseX').value;
    var phaseYKey=q('#odePhaseY').value;
    var phaseXIdx=parseInt(phaseXKey.replace('y',''))-1;
    var phaseYIdx=parseInt(phaseYKey.replace('y',''))-1;
    var MAX=200000,allS=[],allL=[],allT=[];
    var stepFns={euler:sysEuler,heun:sysHeun,rk4:sysRK4};
    methods.forEach(function(m){
      var stepper=stepFns[m];
      var pts=[],t=t0,Y=Y0.slice();
      var rec={t:t};for(var j=0;j<N;j++) rec['y'+(j+1)]=Y[j];
      pts.push(rec);
      var nSteps=Math.ceil(Math.abs(tend-t0)/h);if(nSteps>MAX)nSteps=MAX;
      var ok=true;
      for(var i=0;i<nSteps&&ok;i++){
        var Ynew=stepper(fs,t,Y,h);
        for(var j=0;j<N;j++){
          if(!isFinite(Ynew[j])){ok=false;break}
        }
        if(!ok)break;
        t+=h;Y=Ynew;
        var r={t:t};for(var j=0;j<N;j++) r['y'+(j+1)]=Y[j];
        pts.push(r);
      }
      var mname={euler:'Euler',heun:'Heun',rk4:'RK4'}[m];
      if(plotMode==='time'){
        for(var j=0;j<N;j++){
          allS.push(pts.map(function(p){return[p.t,p['y'+(j+1)]]}));
          allL.push(mname+' y'+toSub(j+1));
        }
      }else{
        allS.push(pts.map(function(p){return[p['y'+(phaseXIdx+1)],p['y'+(phaseYIdx+1)]]}));
        allL.push(mname);
      }
      allT.push({name:mname,pts:pts,N:N});
    });
    var xL,yL;
    if(plotMode==='time'){xL='t';yL='y'}
    else{xL='y'+toSub(phaseXIdx+1);yL='y'+toSub(phaseYIdx+1)}
    lastRedraw=function(){drawCanvas(allS,allL,xL,yL)};lastRedraw();
    var info=allT.map(function(tb){
      var last=tb.pts[tb.pts.length-1];
      var vals=[];
      for(var j=0;j<tb.N;j++) vals.push('y'+toSub(j+1)+'='+last['y'+(j+1)].toPrecision(6));
      return tb.name+': '+tb.pts.length+' \u70b9, '+vals.join(', ');
    }).join('<br>');
    resEl.innerHTML=info;
    buildTable(allT,true,N);toggleBtn.style.display='';
  }

  /* ========== 数据表 ========== */
  function buildTable(tables,isSys,N){
    var html='';
    tables.forEach(function(tb){
      var pts=tb.pts,n=pts.length,show;
      if(n>50){show=pts.slice(0,20).concat([null]).concat(pts.slice(n-20))}else{show=pts.slice()}
      html+='<div style="font-weight:700;margin:8px 0 4px">'+tb.name+' ('+n+' \u70b9)</div>';
      html+='<table style="width:100%;border-collapse:collapse;font-size:12px">';
      html+='<thead><tr style="position:sticky;top:0;background:var(--bg-zebra,#f9f9f9)">';
      if(isSys){
        html+='<th style="padding:4px 8px;border-bottom:2px solid #ddd;text-align:left">t</th>';
        for(var j=1;j<=N;j++) html+='<th style="padding:4px 8px;border-bottom:2px solid #ddd;text-align:left">y'+toSub(j)+'</th>';
      }else{
        html+='<th style="padding:4px 8px;border-bottom:2px solid #ddd;text-align:left">x</th><th style="padding:4px 8px;border-bottom:2px solid #ddd;text-align:left">y</th>';
      }
      html+='</tr></thead><tbody>';
      var colSpan=isSys?(N+1):2;
      show.forEach(function(p,i){
        if(!p){html+='<tr><td colspan="'+colSpan+'" style="text-align:center;padding:6px;color:#999">\u2026 \u7701\u7565 '+(n-40)+' \u884c \u2026</td></tr>';return}
        var bg=i%2?'background:var(--bg-zebra,#f9f9f9)':'';
        if(isSys){
          html+='<tr style="'+bg+'"><td style="padding:3px 8px">'+p.t.toPrecision(6)+'</td>';
          for(var j=1;j<=N;j++) html+='<td style="padding:3px 8px">'+p['y'+j].toPrecision(8)+'</td>';
          html+='</tr>';
        }else{
          html+='<tr style="'+bg+'"><td style="padding:3px 8px">'+p[0].toPrecision(6)+'</td>';
          html+='<td style="padding:3px 8px">'+p[1].toPrecision(8)+'</td></tr>';
        }
      });
      html+='</tbody></table>';
    });
    tableWrap.innerHTML=html;
  }

  /* ========== 切换数据表 ========== */
  toggleBtn.onclick=function(){
    var vis=tableWrap.style.display==='none';
    tableWrap.style.display=vis?'':'none';
    this.textContent=vis?'\u9690\u85cf\u6570\u636e\u8868':'\u663e\u793a\u6570\u636e\u8868';
  };

  /* ========== Numerov 算法 ========== */
  function mynumerov(k2Fn,sFn,x0,xEnd,N,y0,dy0){
    var h=(xEnd-x0)/N;
    var x=new Array(N+1);
    var y=new Array(N+1);
    for(var i=0;i<=N;i++) x[i]=x0+i*h;
    y[0]=y0;
    y[1]=y0+h*dy0+h*h/2*(sFn(x[0])-k2Fn(x[0])*y0);
    for(var i=2;i<=N;i++){
      var k2m1=k2Fn(x[i-1]),k2m2=k2Fn(x[i-2]),k2i=k2Fn(x[i]);
      var sm1=sFn(x[i-1]),sm2=sFn(x[i-2]),si=sFn(x[i]);
      y[i]=(2*(1-5*h*h/12*k2m1)*y[i-1]
           -(1+h*h/12*k2m2)*y[i-2]
           +h*h/12*(si+10*sm1+sm2))
           /(1+h*h/12*k2i);
    }
    return{x:x,y:y};
  }

  /* ========== Numerov 预设 ========== */
  var numPresets={
    harmonic:{k2:'4*pi^2',s:'0',x0:'0',xe:'1',y0:'1',dy0:'0'},
    airy:{k2:'x',s:'0',x0:'0',xe:'10',y0:'0.355028',dy0:'-0.258819'},
    bessel:{k2:'1-1/(4*x^2)',s:'0',x0:'0.5',xe:'20',y0:'0.9385',dy0:'-0.2423'}
  };
  qa('[data-numpreset]').forEach(function(b){b.onclick=function(){
    var p=numPresets[this.dataset.numpreset];
    q('#odeNK2').value=p.k2;q('#odeNS').value=p.s;
    q('#odeNX0').value=p.x0;q('#odeNXend').value=p.xe;
    q('#odeNY0').value=p.y0;q('#odeNDY0').value=p.dy0;
    solveNumerov();
  }});

  /* ========== Numerov 滑块 ========== */
  q('#odeNN').oninput=function(){q('#odeNNVal').textContent=this.value};

  /* ========== Numerov 求解 ========== */
  function solveNumerov(){
    var k2str=q('#odeNK2').value.trim();
    var sstr=q('#odeNS').value.trim()||'0';
    var x0=parseFloat(q('#odeNX0').value);
    var xEnd=parseFloat(q('#odeNXend').value);
    var y0=parseFloat(q('#odeNY0').value);
    var dy0=parseFloat(q('#odeNDY0').value);
    var N=parseInt(q('#odeNN').value);
    if([x0,xEnd,y0,dy0].some(isNaN)){resEl.innerHTML='<span style="color:#f56c6c">参数无效</span>';return}
    var compK2=compileE(k2str);
    var compS=compileE(sstr);
    if(compK2.err){resEl.innerHTML='<span style="color:#f56c6c">k²表达式错误: '+compK2.err+'</span>';return}
    if(compS.err){resEl.innerHTML='<span style="color:#f56c6c">s(x)表达式错误: '+compS.err+'</span>';return}
    var k2Fn=function(xv){return compK2.fn({x:xv})};
    var sFn=function(xv){return compS.fn({x:xv})};
    var result=mynumerov(k2Fn,sFn,x0,xEnd,N,y0,dy0);
    var pts=[];
    for(var i=0;i<=N;i++) pts.push([result.x[i],result.y[i]]);
    drawCanvas([pts],['Numerov'],'x','y(x)');
    lastRedraw=function(){drawCanvas([pts],['Numerov'],'x','y(x)')};
    resEl.innerHTML='Numerov 求解完成 | N='+N+' | h='+((xEnd-x0)/N).toExponential(3)+
      ' | y('+xEnd.toFixed(2)+')='+result.y[N].toFixed(8);
    /* 数据表 */
    var tb={name:'Numerov',pts:pts};
    buildTable([tb],false,0);toggleBtn.style.display='';
  }

  /* ========== 事件绑定 ========== */
  q('#odeSolve').onclick=solveSingle;
  q('#odeSysSolve').onclick=solveSystem;
  q('#odeNSolve').onclick=solveNumerov;
  el.addEventListener('keydown',function(e){
    if(e.key==='Enter'){
      e.preventDefault();
      if(panelS.style.display!=='none')solveSingle();
      else if(panelY.style.display!=='none')solveSystem();
      else solveNumerov();
    }
  });
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
{id:'pde',name:'PDE 求解',icon:'∇²',cat:'academic',desc:'椭圆 · 抛物 · 双曲 · SOR · 热力图动画',
html(){return '<div class="t-row" id="pdeTabs" style="margin-bottom:8px">'+
'<button class="t-btn" data-tab="elliptic" style="font-weight:700">椭圆型</button>'+
'<button class="t-btn t-btn-o" data-tab="parabolic">抛物型</button>'+
'<button class="t-btn t-btn-o" data-tab="hyperbolic">双曲型</button></div>'+
'<div id="pdeElliptic"><div class="t-row"><label class="t-lbl">源项 f(x,y)</label>'+
'<input class="t-in" id="pdeFExpr" value="0" placeholder="0 = Laplace"></div>'+
'<div class="t-row"><label class="t-lbl">域 Lx×Ly</label>'+
'<input class="t-in" id="pdeLx" value="1" style="width:60px"> × '+
'<input class="t-in" id="pdeLy" value="1" style="width:60px"></div>'+
'<div class="t-row"><label class="t-lbl">网格 N=<span id="pdeNVal">40</span></label>'+
'<input type="range" id="pdeN" min="10" max="200" value="40" style="flex:1"></div>'+
'<div class="t-row"><label class="t-lbl">边界(Dirichlet)</label>'+
'上<input class="t-in" id="pdeBT" value="100" style="width:50px"> '+
'下<input class="t-in" id="pdeBB" value="0" style="width:50px"> '+
'左<input class="t-in" id="pdeBL" value="0" style="width:50px"> '+
'右<input class="t-in" id="pdeBR" value="0" style="width:50px"></div>'+
'<div class="t-row"><label class="t-lbl">方法</label>'+
'<label><input type="radio" name="pdeMethod" value="jacobi" checked> Jacobi</label> '+
'<label><input type="radio" name="pdeMethod" value="gs"> Gauss-Seidel</label> '+
'<label><input type="radio" name="pdeMethod" value="sor"> SOR</label></div>'+
'<div class="t-row" id="pdeSorRow" style="display:none"><label class="t-lbl">ω=<span id="pdeOmVal">1.50</span></label>'+
'<input type="range" id="pdeOmega" min="100" max="200" value="150" style="flex:1"></div>'+
'<div class="t-row"><label class="t-lbl">最大迭代</label><input class="t-in" id="pdeMaxIt" value="10000" style="width:80px">'+
' <label class="t-lbl">容差</label><input class="t-in" id="pdeTol" value="1e-6" style="width:80px"></div>'+
'<div class="t-row"><button class="t-btn" id="pdeSolveE">求解</button>'+
'<button class="t-btn t-btn-o" id="pdePreE1">热板</button>'+
'<button class="t-btn t-btn-o" id="pdePreE2">对角加热</button></div>'+
'<div id="pdeEInfo" class="t-res" style="display:none"></div>'+
'<canvas class="t-cv" id="pdeHeat" style="width:100%;max-width:450px;height:300px;display:none"></canvas>'+
'<canvas class="t-cv" id="pdeConv" style="width:100%;max-width:450px;height:150px;display:none"></canvas></div>'+
'<div id="pdeParabolic" style="display:none">'+
'<div class="t-row"><label class="t-lbl">扩散系数 α</label><input class="t-in" id="pdeAlpha" value="0.01" style="width:80px">'+
' <label class="t-lbl">域</label><input class="t-in" id="pdePLx" value="1" style="width:50px">×'+
'<input class="t-in" id="pdePLy" value="1" style="width:50px"></div>'+
'<div class="t-row"><label class="t-lbl">网格 N=<span id="pdePNVal">30</span></label>'+
'<input type="range" id="pdePNN" min="10" max="150" value="30" style="flex:1"></div>'+
'<div class="t-row"><label class="t-lbl">初始条件</label>'+
'<select class="t-sel" id="pdeIC"><option value="gauss">中心热斑</option><option value="step">左热右冷</option></select></div>'+
'<div class="t-row"><label class="t-lbl">边界</label>'+
'上<input class="t-in" id="pdePBT" value="0" style="width:45px"> '+
'下<input class="t-in" id="pdePBB" value="0" style="width:45px"> '+
'左<input class="t-in" id="pdePBL" value="0" style="width:45px"> '+
'右<input class="t-in" id="pdePBR" value="0" style="width:45px"></div>'+
'<div class="t-row"><label class="t-lbl">方法</label>'+
'<label><input type="radio" name="pdePMethod" value="ftcs" checked> FTCS</label> '+
'<label><input type="radio" name="pdePMethod" value="cn"> Crank-Nicolson</label></div>'+
'<div class="t-row"><label class="t-lbl">dt</label><input class="t-in" id="pdeDt" value="0.0001" style="width:80px">'+
' <label class="t-lbl">总时间 T</label><input class="t-in" id="pdeTT" value="0.5" style="width:80px"></div>'+
'<div id="pdeCFL" style="display:none;color:#e6a23c;font-size:12px;margin:4px 0"></div>'+
'<div class="t-row" style="flex-wrap:wrap"><button class="t-btn" id="pdePPlay">▶ Play</button>'+
'<button class="t-btn t-btn-o" id="pdePPause" disabled>⏸</button>'+
'<button class="t-btn t-btn-o" id="pdePReset">Reset</button></div>'+
'<div id="pdePInfo" class="t-res" style="display:none"></div>'+
'<canvas class="t-cv" id="pdePHeat" style="width:100%;max-width:450px;height:300px;display:none"></canvas></div>'+
'<div id="pdeHyperbolic" style="display:none">'+
'<div class="t-row"><label class="t-lbl">波速 c</label><input class="t-in" id="pdeC" value="1.0" style="width:80px">'+
' <label class="t-lbl">域</label><input class="t-in" id="pdeHLx" value="1" style="width:50px">×'+
'<input class="t-in" id="pdeHLy" value="1" style="width:50px"></div>'+
'<div class="t-row"><label class="t-lbl">网格 N=<span id="pdeHNVal">30</span></label>'+
'<input type="range" id="pdeHNN" min="10" max="150" value="30" style="flex:1"></div>'+
'<div class="t-row"><label class="t-lbl">初始位移</label>'+
'<select class="t-sel" id="pdeHIC"><option value="center">中心脉冲</option><option value="corner">角脉冲</option></select></div>'+
'<div class="t-row"><label class="t-lbl">dt</label><input class="t-in" id="pdeHDt" value="0.001" style="width:80px">'+
' <label class="t-lbl">总时间 T</label><input class="t-in" id="pdeHT" value="2.0" style="width:80px"></div>'+
'<div id="pdeHCFL" style="display:none;color:#e6a23c;font-size:12px;margin:4px 0"></div>'+
'<div class="t-row" style="flex-wrap:wrap"><button class="t-btn" id="pdeHPlay">▶ Play</button>'+
'<button class="t-btn t-btn-o" id="pdeHPause" disabled>⏸</button>'+
'<button class="t-btn t-btn-o" id="pdeHReset">Reset</button></div>'+
'<div id="pdeHInfo" class="t-res" style="display:none"></div>'+
'<canvas class="t-cv" id="pdeHHeat" style="width:100%;max-width:450px;height:300px;display:none"></canvas></div>'},
async init(el){
  var q=function(s){return el.querySelector(s)};
  var qa=function(s){return el.querySelectorAll(s)};
  var cs=getComputedStyle(document.documentElement);
  var C_ACCENT=cs.getPropertyValue('--accent').trim()||'#5B8BA4';
  var C_FONT1=cs.getPropertyValue('--font-color-1').trim()||'#333';
  var C_FONT3=cs.getPropertyValue('--font-color-3').trim()||'#999';
  var C_BORDER=cs.getPropertyValue('--border-warm').trim()||'#ccc';
  var animId=null,animTimeout=null,running=false;
  function stopAnim(){running=false;if(animId){cancelAnimationFrame(animId);animId=null;}
    if(animTimeout){clearTimeout(animTimeout);animTimeout=null;}}
  el._cleanup=function(){stopAnim()};

  /* --- jet colormap --- */
  function jetColor(t){var r,g,b;
    if(t<0.25){r=0;g=Math.round(255*t*4);b=255}
    else if(t<0.5){r=0;g=255;b=Math.round(255*(1-(t-0.25)*4))}
    else if(t<0.75){r=Math.round(255*(t-0.5)*4);g=255;b=0}
    else{r=255;g=Math.round(255*(1-(t-0.75)*4));b=0}
    return [r,g,b]}

  /* --- DPR setup --- */
  function setupCanvas(cv,w,h){var dpr=window.devicePixelRatio||1;
    cv.width=w*dpr;cv.height=h*dpr;cv.style.width=w+'px';cv.style.height=h+'px';
    return dpr}

  /* --- colorbar --- */
  function drawColorbar(ctx,x,y,w,h,vmin,vmax){
    for(var i=0;i<h;i++){var t=1-i/h;var c=jetColor(t);
      ctx.fillStyle='rgb('+c[0]+','+c[1]+','+c[2]+')';ctx.fillRect(x,y+i,w-15,1)}
    ctx.fillStyle=C_FONT1;ctx.font='11px sans-serif';ctx.textAlign='left';
    ctx.fillText(vmax.toPrecision(3),x+w-14,y+10);
    ctx.fillText(vmin.toPrecision(3),x+w-14,y+h-2);
    ctx.fillText(((vmin+vmax)/2).toPrecision(3),x+w-14,y+h/2+4)}

  /* --- heatmap render --- */
  function renderHeatmap(canvas,u,N,vmin,vmax){
    var dpr=window.devicePixelRatio||1;var ctx=canvas.getContext('2d');
    var W=canvas.width,H=canvas.height;var padR=60;
    var plotW=W/dpr-padR,plotH=H/dpr;
    var tmp=document.createElement('canvas');tmp.width=N;tmp.height=N;
    var tctx=tmp.getContext('2d');var img=tctx.createImageData(N,N);
    var range=vmax-vmin||1;
    for(var j=0;j<N;j++){for(var i=0;i<N;i++){
      var t=(u[j][i]-vmin)/range;t=Math.max(0,Math.min(1,t));
      var rgb=jetColor(t);var idx=(j*N+i)*4;
      img.data[idx]=rgb[0];img.data[idx+1]=rgb[1];img.data[idx+2]=rgb[2];img.data[idx+3]=255}}
    tctx.putImageData(img,0,0);
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W/dpr,H/dpr);
    ctx.imageSmoothingEnabled=false;ctx.drawImage(tmp,0,0,plotW,plotH);
    drawColorbar(ctx,plotW+5,0,padR-5,plotH,vmin,vmax)}

  /* --- convergence curve --- */
  function drawConvCurve(canvas,residuals){
    var dpr=window.devicePixelRatio||1;var ctx=canvas.getContext('2d');
    var W=canvas.width/dpr,H=canvas.height/dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);
    if(residuals.length<2)return;
    var pad=40;var pw=W-pad-10,ph=H-pad-10;
    var logs=[];for(var i=0;i<residuals.length;i++){
      var v=residuals[i]>0?Math.log10(residuals[i]):-16;logs.push(v)}
    var ymin=logs[logs.length-1],ymax=logs[0];
    if(ymin>=ymax)ymax=ymin+1;
    ctx.strokeStyle=C_BORDER;ctx.lineWidth=0.5;ctx.beginPath();
    ctx.moveTo(pad,5);ctx.lineTo(pad,H-pad);ctx.lineTo(W-5,H-pad);ctx.stroke();
    ctx.fillStyle=C_FONT3;ctx.font='10px sans-serif';ctx.textAlign='right';
    for(var k=0;k<=4;k++){var yv=ymax+(ymin-ymax)*k/4;
      var yy=5+ph*k/4;ctx.fillText(yv.toFixed(1),pad-3,yy+3);
      ctx.beginPath();ctx.moveTo(pad,yy);ctx.lineTo(W-5,yy);ctx.stroke()}
    ctx.textAlign='center';
    ctx.fillText('0',pad,H-pad+12);ctx.fillText(''+(residuals.length-1),W-5,H-pad+12);
    ctx.strokeStyle=C_ACCENT;ctx.lineWidth=1.5;ctx.beginPath();
    var step=Math.max(1,Math.floor(logs.length/pw));
    for(var i=0;i<logs.length;i+=step){
      var xx=pad+pw*i/(logs.length-1);var yy=5+ph*(logs[i]-ymax)/(ymin-ymax);
      if(i===0)ctx.moveTo(xx,yy);else ctx.lineTo(xx,yy)}
    ctx.stroke()}

  /* --- 2D array creation --- */
  function make2D(n,val){var a=[];for(var j=0;j<n;j++){
    var row=[];for(var i=0;i<n;i++)row.push(val);a.push(row)}return a}
  function copy2D(a){var b=[];for(var j=0;j<a.length;j++)b.push(a[j].slice());return b}
  function minMax(u,N){var mn=Infinity,mx=-Infinity;
    for(var j=0;j<N;j++)for(var i=0;i<N;i++){if(u[j][i]<mn)mn=u[j][i];if(u[j][i]>mx)mx=u[j][i]}
    return [mn,mx]}

  /* --- Tab switching --- */
  var tabs=qa('#pdeTabs button');var panels={elliptic:q('#pdeElliptic'),parabolic:q('#pdeParabolic'),hyperbolic:q('#pdeHyperbolic')};
  var curTab='elliptic';
  function switchTab(t){stopAnim();curTab=t;
    for(var i=0;i<tabs.length;i++){var b=tabs[i];
      if(b.dataset.tab===t){b.style.fontWeight='700';b.className='t-btn'}
      else{b.style.fontWeight='';b.className='t-btn t-btn-o'}}
    for(var k in panels)panels[k].style.display=k===t?'':'none'}
  for(var i=0;i<tabs.length;i++){tabs[i].addEventListener('click',function(){switchTab(this.dataset.tab)})}

  /* --- Elliptic sliders --- */
  var nSlider=q('#pdeN'),nVal=q('#pdeNVal');
  nSlider.addEventListener('input',function(){nVal.textContent=this.value});
  var omSlider=q('#pdeOmega'),omVal=q('#pdeOmVal'),sorRow=q('#pdeSorRow');
  omSlider.addEventListener('input',function(){omVal.textContent=(this.value/100).toFixed(2)});
  var radios=qa('input[name="pdeMethod"]');
  for(var i=0;i<radios.length;i++){radios[i].addEventListener('change',function(){
    sorRow.style.display=this.value==='sor'?'flex':'none'})}

  /* --- Elliptic presets --- */
  q('#pdePreE1').addEventListener('click',function(){
    q('#pdeBT').value='100';q('#pdeBB').value='0';q('#pdeBL').value='0';q('#pdeBR').value='0';q('#pdeFExpr').value='0'});
  q('#pdePreE2').addEventListener('click',function(){
    q('#pdeBT').value='100';q('#pdeBB').value='0';q('#pdeBL').value='0';q('#pdeBR').value='50';q('#pdeFExpr').value='0'});

  /* --- Elliptic solve --- */
  q('#pdeSolveE').addEventListener('click',async function(){
    stopAnim();
    var N=parseInt(nSlider.value);var Lx=parseFloat(q('#pdeLx').value)||1;
    var Ly=parseFloat(q('#pdeLy').value)||1;
    var bT=parseFloat(q('#pdeBT').value)||0,bB=parseFloat(q('#pdeBB').value)||0;
    var bL=parseFloat(q('#pdeBL').value)||0,bR=parseFloat(q('#pdeBR').value)||0;
    var hx=Lx/(N-1),hy=Ly/(N-1),h=hx,hx2=hx*hx,hy2=hy*hy,denom2=2/hx2+2/hy2;
    var maxIt=parseInt(q('#pdeMaxIt').value)||10000;
    var tol=parseFloat(q('#pdeTol').value)||1e-6;
    var method='jacobi';for(var i=0;i<radios.length;i++){if(radios[i].checked)method=radios[i].value}
    var omega=parseFloat(omSlider.value)/100;
    var fExpr=q('#pdeFExpr').value.trim();var hasSrc=fExpr&&fExpr!=='0';
    var fFunc=null;
    if(hasSrc){try{var m=await loadMath();var node=m.parse(fExpr);var compiled=node.compile();
      fFunc=function(x,y){return compiled.evaluate({x:x,y:y})}}
      catch(e){q('#pdeEInfo').style.display='block';q('#pdeEInfo').innerHTML='<span style="color:#f56c6c">表达式错误: '+e.message+'</span>';return}}

    var u=make2D(N,0);
    /* Boundary */
    for(var i=0;i<N;i++){u[0][i]=bT;u[N-1][i]=bB;u[i][0]=bL;u[i][N-1]=bR}

    var cvH=q('#pdeHeat');var cvC=q('#pdeConv');
    cvH.style.display='block';cvC.style.display='block';
    var dpr=setupCanvas(cvH,Math.min(450,el.clientWidth-20),300);
    setupCanvas(cvC,Math.min(450,el.clientWidth-20),150);

    var info=q('#pdeEInfo');info.style.display='block';info.textContent='求解中...';
    var t0=performance.now();var residuals=[];

    var batchSize=N<=50?maxIt:500;
    var iter=0;var converged=false;

    function solveBatch(){
      var bEnd=Math.min(iter+batchSize,maxIt);
      for(;iter<bEnd;iter++){
        var maxRes=0;
        if(method==='jacobi'){
          var uNew=copy2D(u);
          for(var j=1;j<N-1;j++){for(var i=1;i<N-1;i++){
            var fv=fFunc?fFunc(i*hx,j*hy):0;
            uNew[j][i]=((u[j][i-1]+u[j][i+1])/hx2+(u[j-1][i]+u[j+1][i])/hy2-fv)/denom2;
            var d=Math.abs(uNew[j][i]-u[j][i]);if(d>maxRes)maxRes=d}}
          u=uNew;
        }else{
          for(var j=1;j<N-1;j++){for(var i=1;i<N-1;i++){
            var fv=fFunc?fFunc(i*hx,j*hy):0;
            var gs=((u[j][i-1]+u[j][i+1])/hx2+(u[j-1][i]+u[j+1][i])/hy2-fv)/denom2;
            var newVal=method==='sor'?(1-omega)*u[j][i]+omega*gs:gs;
            var d=Math.abs(newVal-u[j][i]);if(d>maxRes)maxRes=d;u[j][i]=newVal}}}
        if(iter%50===0)residuals.push(maxRes);
        if(maxRes<tol){converged=true;residuals.push(maxRes);break}}
      var mm=minMax(u,N);renderHeatmap(cvH,u,N,mm[0],mm[1]);drawConvCurve(cvC,residuals);
      var elapsed=(performance.now()-t0).toFixed(1);
      if(converged||iter>=maxIt){
        var last=residuals[residuals.length-1];
        info.innerHTML=(converged?'<span style="color:#67c23a">收敛</span>':'<span style="color:#e6a23c">未收敛</span>')+
          ' | 迭代: '+iter+' | 残差: '+last.toExponential(2)+' | 耗时: '+elapsed+'ms';
      }else{info.textContent='迭代: '+iter+'/'+maxIt+' ...';animTimeout=setTimeout(solveBatch,0)}}
    solveBatch()});

  /* ===== Parabolic ===== */
  var pnSlider=q('#pdePNN'),pnVal=q('#pdePNVal');
  pnSlider.addEventListener('input',function(){pnVal.textContent=this.value});

  function makeIC_P(N,Lx,Ly,type){
    var u=make2D(N,0);var hx=Lx/(N-1),hy=Ly/(N-1);
    for(var j=1;j<N-1;j++){for(var i=1;i<N-1;i++){
      var x=i*hx,y=j*hy;
      if(type==='gauss')u[j][i]=Math.exp(-((x-Lx/2)*(x-Lx/2)+(y-Ly/2)*(y-Ly/2))/0.04)*100;
      else if(type==='step')u[j][i]=x<0.3*Lx?100:0}}
    return u}

  function applyBC_P(u,N,bt,bb,bl,br){
    for(var i=0;i<N;i++){u[0][i]=bt;u[N-1][i]=bb}
    for(var j=0;j<N;j++){u[j][0]=bl;u[j][N-1]=br}}

  function checkCFL_P(){
    var alpha=parseFloat(q('#pdeAlpha').value)||0.01;
    var N=parseInt(pnSlider.value);var Lx=parseFloat(q('#pdePLx').value)||1;
    var h=Lx/(N-1);var dt=parseFloat(q('#pdeDt').value)||0.0001;
    var r=alpha*dt/(h*h);var cfl=q('#pdeCFL');
    if(r>0.25){cfl.style.display='block';cfl.style.color='#e6a23c';cfl.textContent='⚠ CFL: r=α·dt/h²='+r.toFixed(4)+' > 0.25，FTCS 可能不稳定'}
    else{cfl.style.display='block';cfl.style.color='#67c23a';cfl.textContent='CFL: r='+r.toFixed(4)+' ≤ 0.25 ✓'}}

  q('#pdeAlpha').addEventListener('input',checkCFL_P);q('#pdeDt').addEventListener('input',checkCFL_P);
  pnSlider.addEventListener('input',function(){pnVal.textContent=this.value;checkCFL_P()});

  var pState={u:null,t:0,cMin:0,cMax:100};

  function initParabolic(){
    stopAnim();
    var N=parseInt(pnSlider.value);var Lx=parseFloat(q('#pdePLx').value)||1;
    var Ly=parseFloat(q('#pdePLy').value)||1;
    var ic=q('#pdeIC').value;
    pState.u=makeIC_P(N,Lx,Ly,ic);
    var bt=parseFloat(q('#pdePBT').value)||0,bb=parseFloat(q('#pdePBB').value)||0;
    var bl=parseFloat(q('#pdePBL').value)||0,br=parseFloat(q('#pdePBR').value)||0;
    applyBC_P(pState.u,N,bt,bb,bl,br);pState.t=0;
    var mm=minMax(pState.u,N);pState.cMin=mm[0];pState.cMax=mm[1];
    var cvP=q('#pdePHeat');cvP.style.display='block';
    setupCanvas(cvP,Math.min(450,el.clientWidth-20),300);
    renderHeatmap(cvP,pState.u,N,pState.cMin,pState.cMax);
    var info=q('#pdePInfo');info.style.display='block';info.textContent='t=0.000';
    q('#pdePPlay').disabled=false;q('#pdePPause').disabled=true;checkCFL_P()}

  function stepFTCS(u,N,alpha,dt,h){
    var r=alpha*dt/(h*h);var uNew=copy2D(u);
    for(var j=1;j<N-1;j++){for(var i=1;i<N-1;i++){
      uNew[j][i]=u[j][i]+r*(u[j-1][i]+u[j+1][i]+u[j][i-1]+u[j][i+1]-4*u[j][i])}}
    return uNew}

  function stepCN(u,N,alpha,dt,h){
    var r=alpha*dt/(2*h*h);var uNew=copy2D(u);var denom=1+4*r;
    for(var k=0;k<200;k++){var uTmp=copy2D(uNew);var maxDiff=0;
      for(var j=1;j<N-1;j++){for(var i=1;i<N-1;i++){
        var lapOld=u[j-1][i]+u[j+1][i]+u[j][i-1]+u[j][i+1]-4*u[j][i];
        var lapNew=uTmp[j-1][i]+uTmp[j+1][i]+uTmp[j][i-1]+uTmp[j][i+1];
        var newVal=(u[j][i]+r*lapOld+r*lapNew)/denom;
        var d=Math.abs(newVal-uNew[j][i]);if(d>maxDiff)maxDiff=d;
        uNew[j][i]=newVal}}
      if(maxDiff<1e-8)break}
    return uNew}

  function runParabolic(){
    var N=parseInt(pnSlider.value);var alpha=parseFloat(q('#pdeAlpha').value)||0.01;
    var Lx=parseFloat(q('#pdePLx').value)||1;var h=Lx/(N-1);
    var dt=parseFloat(q('#pdeDt').value)||0.0001;var T=parseFloat(q('#pdeTT').value)||0.5;
    var method='ftcs';var rads=qa('input[name="pdePMethod"]');
    for(var i=0;i<rads.length;i++){if(rads[i].checked)method=rads[i].value}
    var bt=parseFloat(q('#pdePBT').value)||0,bb=parseFloat(q('#pdePBB').value)||0;
    var bl=parseFloat(q('#pdePBL').value)||0,br=parseFloat(q('#pdePBR').value)||0;
    var stepsPerFrame=Math.max(1,Math.min(20,Math.round(0.005/dt)));
    var cvP=q('#pdePHeat');var info=q('#pdePInfo');
    running=true;q('#pdePPlay').disabled=true;q('#pdePPause').disabled=false;

    function frame(){if(!running)return;
      for(var s=0;s<stepsPerFrame&&pState.t<T;s++){
        pState.u=method==='ftcs'?stepFTCS(pState.u,N,alpha,dt,h):stepCN(pState.u,N,alpha,dt,h);
        applyBC_P(pState.u,N,bt,bb,bl,br);pState.t+=dt}
      var mm=minMax(pState.u,N);renderHeatmap(cvP,pState.u,N,pState.cMin,pState.cMax);
      info.textContent='t='+pState.t.toFixed(4)+' / '+T;
      if(pState.t>=T){running=false;q('#pdePPlay').disabled=false;q('#pdePPause').disabled=true;
        q('#pdePPlay').textContent='▶ Replay';
        info.textContent='完成 t='+T;return}
      animId=requestAnimationFrame(frame)}
    frame()}

  q('#pdePPlay').addEventListener('click',function(){
    if(!pState.u||pState.t>=parseFloat(q('#pdeTT').value)){initParabolic()}
    q('#pdePPlay').textContent='▶ Play';
    runParabolic()});
  q('#pdePPause').addEventListener('click',function(){stopAnim();q('#pdePPlay').disabled=false;q('#pdePPause').disabled=true});
  q('#pdePReset').addEventListener('click',initParabolic);

  /* ===== Hyperbolic ===== */
  var hnSlider=q('#pdeHNN'),hnVal=q('#pdeHNVal');
  hnSlider.addEventListener('input',function(){hnVal.textContent=this.value});


  function makeIC_H(N,Lx,Ly,type){
    var u=make2D(N,0);var hx=Lx/(N-1),hy=Ly/(N-1);
    for(var j=1;j<N-1;j++){for(var i=1;i<N-1;i++){
      var x=i*hx,y=j*hy;
      if(type==='center')u[j][i]=Math.exp(-((x-Lx/2)*(x-Lx/2)+(y-Ly/2)*(y-Ly/2))/0.005);
      else u[j][i]=Math.exp(-((x-0.1*Lx)*(x-0.1*Lx)+(y-0.1*Ly)*(y-0.1*Ly))/0.005)}}
    return u}

  function checkCFL_H(){
    var c=parseFloat(q('#pdeC').value)||1;var N=parseInt(hnSlider.value);
    var Lx=parseFloat(q('#pdeHLx').value)||1;var h=Lx/(N-1);
    var dt=parseFloat(q('#pdeHDt').value)||0.001;
    var cfl=c*dt/h;var limit=1/Math.sqrt(2);var el2=q('#pdeHCFL');
    if(cfl>limit){el2.style.display='block';el2.style.color='#e6a23c';
      el2.textContent='⚠ CFL: c·dt/h='+cfl.toFixed(4)+' > 1/√2≈'+limit.toFixed(4)+'，不稳定'}
    else{el2.style.display='block';el2.style.color='#67c23a';
      el2.textContent='CFL: c·dt/h='+cfl.toFixed(4)+' ≤ 1/√2 ✓'}}

  q('#pdeC').addEventListener('input',checkCFL_H);q('#pdeHDt').addEventListener('input',checkCFL_H);
  hnSlider.addEventListener('input',function(){hnVal.textContent=this.value;checkCFL_H()});

  var hState={u:null,uPrev:null,t:0};

  function initHyperbolic(){
    stopAnim();
    var N=parseInt(hnSlider.value);var Lx=parseFloat(q('#pdeHLx').value)||1;
    var Ly=parseFloat(q('#pdeHLy').value)||1;var ic=q('#pdeHIC').value;
    var c=parseFloat(q('#pdeC').value)||1;var dt=parseFloat(q('#pdeHDt').value)||0.001;
    var h=Lx/(N-1);var r2=(c*dt/h)*(c*dt/h);
    hState.u=makeIC_H(N,Lx,Ly,ic);
    /* First step: u1 = u0 + dt*v0 + 0.5*r²*Lap(u0), v0=0 */
    var u1=make2D(N,0);
    for(var j=1;j<N-1;j++){for(var i=1;i<N-1;i++){
      var lap=hState.u[j-1][i]+hState.u[j+1][i]+hState.u[j][i-1]+hState.u[j][i+1]-4*hState.u[j][i];
      u1[j][i]=hState.u[j][i]+0.5*r2*lap}}
    hState.uPrev=hState.u;hState.u=u1;hState.t=dt;
    var cvH=q('#pdeHHeat');cvH.style.display='block';
    setupCanvas(cvH,Math.min(450,el.clientWidth-20),300);
    var mm=minMax(hState.u,N);renderHeatmap(cvH,hState.u,N,mm[0],mm[1]);
    var info=q('#pdeHInfo');info.style.display='block';info.textContent='t=0.000';
    q('#pdeHPlay').disabled=false;q('#pdeHPause').disabled=true;checkCFL_H()}

  function runHyperbolic(){
    var N=parseInt(hnSlider.value);var c=parseFloat(q('#pdeC').value)||1;
    var Lx=parseFloat(q('#pdeHLx').value)||1;var h=Lx/(N-1);
    var dt=parseFloat(q('#pdeHDt').value)||0.001;var T=parseFloat(q('#pdeHT').value)||2;
    var r2=(c*dt/h)*(c*dt/h);
    var stepsPerFrame=Math.max(1,Math.min(20,Math.round(0.01/dt)));
    var cvH=q('#pdeHHeat');var info=q('#pdeHInfo');
    running=true;q('#pdeHPlay').disabled=true;q('#pdeHPause').disabled=false;
    /* track global min/max for stable color range */
    var gMin=Infinity,gMax=-Infinity;
    var mmInit=minMax(hState.u,N);gMin=mmInit[0];gMax=mmInit[1];

    function frame(){if(!running)return;
      for(var s=0;s<stepsPerFrame&&hState.t<T;s++){
        var uNext=make2D(N,0);
        for(var j=1;j<N-1;j++){for(var i=1;i<N-1;i++){
          var lap=hState.u[j-1][i]+hState.u[j+1][i]+hState.u[j][i-1]+hState.u[j][i+1]-4*hState.u[j][i];
          uNext[j][i]=2*hState.u[j][i]-hState.uPrev[j][i]+r2*lap}}
        hState.uPrev=hState.u;hState.u=uNext;hState.t+=dt}
      var mm=minMax(hState.u,N);
      if(mm[0]<gMin)gMin=mm[0];if(mm[1]>gMax)gMax=mm[1];
      renderHeatmap(cvH,hState.u,N,gMin,gMax);
      info.textContent='t='+hState.t.toFixed(4)+' / '+T;
      if(hState.t>=T){running=false;q('#pdeHPlay').disabled=false;q('#pdeHPause').disabled=true;
        q('#pdeHPlay').textContent='▶ Replay';
        info.textContent='完成 t='+T.toFixed(3);return}
      animId=requestAnimationFrame(frame)}
    frame()}

  q('#pdeHPlay').addEventListener('click',function(){
    if(!hState.u||hState.t>=parseFloat(q('#pdeHT').value)){initHyperbolic()}
    q('#pdeHPlay').textContent='▶ Play';
    runHyperbolic()});
  q('#pdeHPause').addEventListener('click',function(){stopAnim();q('#pdeHPlay').disabled=false;q('#pdeHPause').disabled=true});
  q('#pdeHReset').addEventListener('click',initHyperbolic);

  /* --- init default view --- */
  checkCFL_P();checkCFL_H();
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
{id:'rain',name:'代码雨',icon:'🌧️',cat:'fun',desc:'10 种主题 · 速度/字号可调 · 全屏',
html(){return'<div class="t-row" style="flex-wrap:wrap;gap:6px;justify-content:center"><span class="t-lbl">主题</span><select class="t-in" id="rainTheme" style="width:auto"><option value="matrix">🟢 经典 Matrix</option><option value="cyber">🔵 赛博朋克</option><option value="fire">🔴 数字烈焰</option><option value="gold">🟡 黄金矩阵</option><option value="sakura">🌸 樱花飘落</option><option value="panda">🐼 熊猫烧香</option><option value="ai">🤖 AI 神经</option><option value="virus">☣️ 高级病毒</option><option value="binary">💾 纯二进制</option><option value="rainbow">🌈 RGB 彩虹</option></select></div><div class="t-row" style="flex-wrap:wrap;gap:6px;justify-content:center"><span class="t-lbl">速度</span><input type="range" id="rainSpd" min="10" max="120" value="60" style="width:80px"><span class="t-lbl">字号</span><input type="range" id="rainFS" min="10" max="24" value="14" style="width:60px"></div><div class="t-row" style="justify-content:center;gap:8px"><button class="t-btn t-btn-s" id="rainToggle">▶ 开始</button><button class="t-btn t-btn-d" id="rainFull">⛶ 全屏</button></div><canvas id="rainCvs" style="width:100%;height:260px;background:#0a0a0a;border-radius:6px;display:block"></canvas>'},
init(el){
  const cvs=el.querySelector('#rainCvs'),ctx=cvs.getContext('2d');
  let raf=null,running=false,cols,drops,hue=0;
  const themes={
    matrix:{bg:'rgba(0,0,0,0.05)',chars:'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789',fg(i,h){return'#0f0'}},
    cyber:{bg:'rgba(0,0,20,0.06)',chars:'01<>{}[]|/\\+=_-*&^%λΔΩψ◊◆□■',fg(i,h){return`hsl(${190+Math.sin(i*0.1)*20},100%,60%)`}},
    fire:{bg:'rgba(0,0,0,0.04)',chars:['♨️','🔥','❤️‍🔥','💥','火','焰','炎','灼','烧','0','1'],fg(i,h){return`hsl(${Math.max(0,30-i*0.5)},100%,55%)`}},
    gold:{bg:'rgba(0,0,0,0.05)',chars:'$¥€£₿₹₩₽01234金银财富',fg(i,h){return`hsl(${45+Math.sin(i*0.08)*10},100%,55%)`}},
    sakura:{bg:'rgba(0,0,0,0.03)',chars:'🌸🌺🌷💮✿❀花春桜梅風雪',fg(i,h){return`hsl(${330+Math.sin(i*0.1)*15},80%,72%)`}},
    panda:{bg:'rgba(0,0,0,0.05)',chars:'TROJAN.EXE WORM.DLL INFECT COPY DELETE CORRUPT FORMAT',fg(i,h){return i%7===0?'#f00':'#aaa'}},
    ai:{bg:'rgba(0,0,10,0.05)',chars:'⬡◇◈⬢△▽○●◐◑⊕⊗∞≈∇∂∫∑∏λσπ',fg(i,h){return`hsl(${220+Math.sin(h*0.02+i*0.05)*40},90%,65%)`}},
    virus:{bg:'rgba(10,0,0,0.04)',chars:'0xDEAD 0xBEEF KERNEL PANIC FATAL SYSTEM HALT BREACH ROOT',fg(i,h){const flicker=Math.random()>0.92;return flicker?'#fff':`hsl(${0+Math.random()*10},100%,${45+Math.random()*15}%)`}},
    binary:{bg:'rgba(0,0,0,0.06)',chars:'01',fg(i,h){return'#0a0'}},
    rainbow:{bg:'rgba(0,0,0,0.05)',chars:'01234567890ABCDEF<>{}[]|/*#',fg(i,h){return`hsl(${(h*2+i*8)%360},100%,55%)`}}
  };
  function init(){
    cvs.width=cvs.offsetWidth;cvs.height=cvs.offsetHeight;
    const fs=+el.querySelector('#rainFS').value;
    cols=Math.floor(cvs.width/fs);drops=Array(cols).fill(1);
  }
  function draw(){
    const tk=el.querySelector('#rainTheme').value;
    const theme=themes[tk]||themes.matrix;
    const fs=+el.querySelector('#rainFS').value;
    ctx.fillStyle=theme.bg;ctx.fillRect(0,0,cvs.width,cvs.height);
    ctx.font=fs+'px monospace';
    const chars=[...theme.chars];
    hue++;
    for(let i=0;i<cols;i++){
      const c=chars[Math.floor(Math.random()*chars.length)];
      ctx.fillStyle=theme.fg(i,hue);
      /* 头部高亮效果 */
      if(drops[i]>1&&drops[i]<4){ctx.shadowColor=theme.fg(i,hue);ctx.shadowBlur=12}
      else{ctx.shadowBlur=0}
      ctx.fillText(c,i*fs,drops[i]*fs);
      ctx.shadowBlur=0;
      if(drops[i]*fs>cvs.height&&Math.random()>.975)drops[i]=0;
      drops[i]++;
    }
  }
  /* 速度: slider 值越大→delay越小→越快 */
  function getDelay(){const v=+el.querySelector('#rainSpd').value;return 130-v}
  function loop(){draw();raf=setTimeout(loop,getDelay())}
  el.querySelector('#rainToggle').onclick=function(){
    if(running){running=false;clearTimeout(raf);this.textContent='▶ 开始';this.className='t-btn t-btn-s'}
    else{running=true;init();loop();this.textContent='⏸ 暂停';this.className='t-btn t-btn-o'}
  };
  el.querySelector('#rainFull').onclick=()=>{cvs.requestFullscreen?cvs.requestFullscreen():cvs.webkitRequestFullscreen&&cvs.webkitRequestFullscreen()};
  el.querySelector('#rainTheme').onchange=()=>{if(running){clearTimeout(raf);ctx.fillStyle='#000';ctx.fillRect(0,0,cvs.width,cvs.height);init();loop()}};
  el.querySelector('#rainFS').oninput=()=>{if(running){clearTimeout(raf);init();loop()}};
  var ro=new ResizeObserver(()=>{if(running){clearTimeout(raf);init();loop()}});ro.observe(cvs);
  el._cleanup=()=>{running=false;clearTimeout(raf);ro.disconnect()};
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
{id:'rootfinding',name:'方程求根',icon:'🎯',cat:'academic',desc:'二分法 · 牛顿法 · 弦割法 · 迭代可视化',
html(){return '<div class="t-lbl">f(x) = 0</div>'
+'<div class="t-row"><input class="t-in" id="rfExpr" value="x^3 - x - 2" style="flex:1" placeholder="如 x^3 - x - 2, sin(x) - 0.5"></div>'
+'<div class="t-lbl" style="margin-top:8px">求解方法</div>'
+'<div class="t-row" style="gap:4px;flex-wrap:wrap">'
+'<button class="t-btn rf-method" data-m="bisect" style="font-weight:700">二分法</button>'
+'<button class="t-btn t-btn-o rf-method" data-m="newton">牛顿法</button>'
+'<button class="t-btn t-btn-o rf-method" data-m="secant">弦割法</button></div>'
+'<div id="rfParams" style="margin-top:8px">'
+'<div id="rfBisect"><div class="t-row" style="gap:6px"><span class="t-lbl" style="margin:0">a =</span><input class="t-in" id="rfA" value="1" style="width:70px"><span class="t-lbl" style="margin:0">b =</span><input class="t-in" id="rfB" value="2" style="width:70px"></div></div>'
+'<div id="rfNewton" style="display:none"><div class="t-row" style="gap:6px"><span class="t-lbl" style="margin:0">x\u2080 =</span><input class="t-in" id="rfX0" value="1.5" style="width:70px"></div></div>'
+'<div id="rfSecant" style="display:none"><div class="t-row" style="gap:6px"><span class="t-lbl" style="margin:0">x\u2080 =</span><input class="t-in" id="rfS0" value="1" style="width:70px"><span class="t-lbl" style="margin:0">x\u2081 =</span><input class="t-in" id="rfS1" value="2" style="width:70px"></div></div>'
+'</div>'
+'<div class="t-row" style="gap:6px;margin-top:6px;flex-wrap:wrap"><span class="t-lbl" style="margin:0">\u03b5 =</span><input class="t-in" id="rfTol" value="1e-6" style="width:80px"><span class="t-lbl" style="margin:0">最大迭代</span><input class="t-in" id="rfMax" value="100" style="width:60px"><button class="t-btn t-btn-s" id="rfSolve">求解</button></div>'
+'<div id="rfResult" class="t-res" style="margin-top:8px;max-height:320px;overflow:auto"></div>'
+'<canvas id="rfCv" style="width:100%;height:200px;margin-top:8px;border-radius:8px;display:none"></canvas>'},
async init(el){
  var M=await loadMath();
  var q=function(s){return el.querySelector(s)};
  var curMethod='bisect';

  /* method toggle */
  el.querySelectorAll('.rf-method').forEach(function(btn){
    btn.onclick=function(){
      el.querySelectorAll('.rf-method').forEach(function(b){b.className='t-btn t-btn-o rf-method';b.style.fontWeight=''});
      btn.className='t-btn rf-method';btn.style.fontWeight='700';
      curMethod=btn.dataset.m;
      q('#rfBisect').style.display=curMethod==='bisect'?'':'none';
      q('#rfNewton').style.display=curMethod==='newton'?'':'none';
      q('#rfSecant').style.display=curMethod==='secant'?'':'none';
    };
  });

  /* safe eval via math.js */
  function makeF(expr){
    try{var node=M.compile(expr);return function(x){return node.evaluate({x:x})};}
    catch(e){return null;}
  }

  /* numerical derivative */
  function deriv(f,x){var h=1e-8;return(f(x+h)-f(x-h))/(2*h)}

  /* bisection */
  function bisect(f,a,b,tol,maxIt){
    var hist=[];
    if(f(a)*f(b)>0) return{err:'端点同号：f(a) 与 f(b) 符号相同，无法保证区间内有根'};
    for(var i=0;i<maxIt;i++){
      var c=(a+b)/2,fc=f(c);
      var dx=i===0?Math.abs(b-a):Math.abs(b-a)/2;
      hist.push({n:i,x:c,fx:fc,dx:dx});
      if(Math.abs(fc)<tol||Math.abs(b-a)/2<tol) return{root:c,fx:fc,iter:i+1,hist:hist};
      if(f(a)*fc<0) b=c; else a=c;
    }
    return{root:(a+b)/2,fx:f((a+b)/2),iter:maxIt,hist:hist,warn:'达到最大迭代次数，可能未收敛'};
  }

  /* newton-raphson */
  function newton(f,x0,tol,maxIt){
    var hist=[],x=x0;
    for(var i=0;i<maxIt;i++){
      var fx=f(x),fp=deriv(f,x);
      if(Math.abs(fp)<1e-14) return{err:'导数为零：x = '+x.toFixed(8)+' 处 f\'(x) ≈ 0',hist:hist};
      var x1=x-fx/fp;
      var dx=Math.abs(x1-x);
      hist.push({n:i,x:x,fx:fx,dx:dx});
      if(Math.abs(fx)<tol||dx<tol) return{root:x1,fx:f(x1),iter:i+1,hist:hist};
      x=x1;
    }
    return{root:x,fx:f(x),iter:maxIt,hist:hist,warn:'达到最大迭代次数，可能未收敛'};
  }

  /* secant */
  function secant(f,x0,x1,tol,maxIt){
    var hist=[];
    for(var i=0;i<maxIt;i++){
      var f0=f(x0),f1=f(x1);
      if(Math.abs(f1-f0)<1e-14) return{err:'f(xₙ) ≈ f(xₙ₋₁)，弦割法分母趋近零',hist:hist};
      var x2=x1-f1*(x1-x0)/(f1-f0);
      var dx=Math.abs(x2-x1);
      hist.push({n:i,x:x1,fx:f1,dx:dx});
      if(Math.abs(f1)<tol||dx<tol) return{root:x2,fx:f(x2),iter:i+1,hist:hist};
      x0=x1;x1=x2;
    }
    return{root:x1,fx:f(x1),iter:maxIt,hist:hist,warn:'达到最大迭代次数，可能未收敛'};
  }

  /* draw convergence curve on canvas */
  function drawCurve(hist){
    var cv=q('#rfCv');if(!hist||hist.length<2){cv.style.display='none';return;}
    cv.style.display='block';
    var dpr=window.devicePixelRatio||1;
    var rect=cv.getBoundingClientRect();
    var W=rect.width*dpr,H=200*dpr;
    cv.width=W;cv.height=H;
    var ctx=cv.getContext('2d');
    ctx.scale(dpr,dpr);
    var w=rect.width,h=200;

    /* bg */
    var bgColor=getComputedStyle(el).getPropertyValue('--bg-zebra').trim()||'#f8f9fa';
    ctx.fillStyle=bgColor;ctx.fillRect(0,0,w,h);

    var vals=hist.map(function(r){var v=Math.abs(r.fx);return v>0?Math.log10(v):-16});
    var n=vals.length;
    var ymin=Math.min.apply(null,vals),ymax=Math.max.apply(null,vals);
    if(ymax-ymin<1){ymin-=1;ymax+=1;}
    var pad={l:50,r:15,t:15,b:30};
    var pw=w-pad.l-pad.r,ph=h-pad.t-pad.b;

    /* axes */
    ctx.strokeStyle='#ccc';ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(pad.l,pad.t);ctx.lineTo(pad.l,h-pad.b);ctx.lineTo(w-pad.r,h-pad.b);ctx.stroke();

    /* y ticks */
    ctx.fillStyle=getComputedStyle(el).getPropertyValue('--font-color-3').trim()||'#999';
    ctx.font='10px sans-serif';ctx.textAlign='right';ctx.textBaseline='middle';
    var yStep=Math.max(1,Math.ceil((ymax-ymin)/5));
    for(var y=Math.ceil(ymin);y<=Math.floor(ymax);y+=yStep){
      var py=pad.t+ph*(1-(y-ymin)/(ymax-ymin));
      ctx.fillText('1e'+y,pad.l-4,py);
      ctx.beginPath();ctx.moveTo(pad.l,py);ctx.lineTo(w-pad.r,py);ctx.strokeStyle='#eee';ctx.stroke();
    }

    /* x ticks */
    ctx.textAlign='center';ctx.textBaseline='top';
    var xStep=Math.max(1,Math.floor(n/8));
    for(var i=0;i<n;i+=xStep){
      var px=pad.l+pw*i/(n-1);
      ctx.fillText(hist[i].n,px,h-pad.b+4);
    }

    /* labels */
    ctx.fillStyle=getComputedStyle(el).getPropertyValue('--font-color-3').trim()||'#999';
    ctx.font='10px sans-serif';ctx.textAlign='center';
    ctx.fillText('迭代次数 n',w/2,h-4);
    ctx.save();ctx.translate(10,h/2);ctx.rotate(-Math.PI/2);ctx.fillText('|f(xₙ)|',0,0);ctx.restore();

    /* line */
    var accent=getComputedStyle(el).getPropertyValue('--accent').trim()||'#5B8BA4';
    ctx.strokeStyle=accent;ctx.lineWidth=2;ctx.lineJoin='round';
    ctx.beginPath();
    for(var i=0;i<n;i++){
      var px=pad.l+pw*i/(n-1);
      var py=pad.t+ph*(1-(vals[i]-ymin)/(ymax-ymin));
      if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
    }
    ctx.stroke();

    /* dots */
    ctx.fillStyle=accent;
    for(var i=0;i<n;i++){
      var px=pad.l+pw*i/(n-1);
      var py=pad.t+ph*(1-(vals[i]-ymin)/(ymax-ymin));
      ctx.beginPath();ctx.arc(px,py,3,0,Math.PI*2);ctx.fill();
    }
  }

  /* format number */
  function fmt(v){if(v==null||isNaN(v))return'NaN';if(Math.abs(v)<1e-14)return'0';if(Math.abs(v)>1e6||Math.abs(v)<1e-4)return v.toExponential(8);return v.toFixed(8)}

  /* solve */
  q('#rfSolve').onclick=function(){
    var expr=q('#rfExpr').value.trim();
    var tol=parseFloat(q('#rfTol').value)||1e-6;
    var maxIt=parseInt(q('#rfMax').value)||100;
    var res=q('#rfResult');

    var f=makeF(expr);
    if(!f){res.innerHTML='<span style="color:var(--accent)">⚠ 无法解析表达式，请检查语法</span>';q('#rfCv').style.display='none';return;}

    /* test f */
    try{f(1);}catch(e){res.innerHTML='<span style="color:var(--accent)">⚠ 表达式求值出错：'+e.message+'</span>';q('#rfCv').style.display='none';return;}

    var result;
    var methodName='';
    if(curMethod==='bisect'){
      var a=parseFloat(q('#rfA').value),b=parseFloat(q('#rfB').value);
      if(isNaN(a)||isNaN(b)){res.innerHTML='<span style="color:var(--accent)">⚠ 请输入有效的区间端点</span>';return;}
      result=bisect(f,a,b,tol,maxIt);methodName='二分法';
    }else if(curMethod==='newton'){
      var x0=parseFloat(q('#rfX0').value);
      if(isNaN(x0)){res.innerHTML='<span style="color:var(--accent)">⚠ 请输入有效的初始猜测</span>';return;}
      result=newton(f,x0,tol,maxIt);methodName='牛顿法';
    }else{
      var s0=parseFloat(q('#rfS0').value),s1=parseFloat(q('#rfS1').value);
      if(isNaN(s0)||isNaN(s1)){res.innerHTML='<span style="color:var(--accent)">⚠ 请输入有效的初始点</span>';return;}
      result=secant(f,s0,s1,tol,maxIt);methodName='弦割法';
    }

    if(result.err){res.innerHTML='<span style="color:var(--accent)">⚠ '+result.err+'</span>';q('#rfCv').style.display='none';return;}

    /* build output */
    var html='<div style="margin-bottom:8px">';
    html+='<b>'+methodName+'</b>';
    if(result.warn) html+=' <span style="color:#e6a23c;font-size:.85em">⚠ '+result.warn+'</span>';
    html+='</div>';
    html+='<div style="display:grid;grid-template-columns:auto 1fr;gap:2px 12px;font-size:.9em;margin-bottom:10px">';
    html+='<span style="color:var(--font-color-3)">x* =</span><span style="font-family:monospace">'+fmt(result.root)+'</span>';
    html+='<span style="color:var(--font-color-3)">f(x*) =</span><span style="font-family:monospace">'+fmt(result.fx)+'</span>';
    html+='<span style="color:var(--font-color-3)">迭代次数</span><span>'+result.iter+'</span>';
    html+='</div>';

    /* iteration table */
    if(result.hist&&result.hist.length>0){
      html+='<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:.78em;font-family:monospace">';
      html+='<thead><tr style="background:var(--bg-zebra,#f5f5f5);border-bottom:2px solid var(--border-warm,#e8e8e8)">'
        +'<th style="padding:4px 8px;text-align:center">n</th>'
        +'<th style="padding:4px 8px;text-align:right">x\u2099</th>'
        +'<th style="padding:4px 8px;text-align:right">f(x\u2099)</th>'
        +'<th style="padding:4px 8px;text-align:right">|x\u2099 \u2212 x\u2099\u208b\u2081|</th></tr></thead><tbody>';
      result.hist.forEach(function(r,i){
        var bg=i%2===0?'transparent':'var(--bg-zebra,#fafafa)';
        html+='<tr style="background:'+bg+';border-bottom:1px solid var(--border-warm,#eee)">'
          +'<td style="padding:3px 8px;text-align:center">'+r.n+'</td>'
          +'<td style="padding:3px 8px;text-align:right">'+fmt(r.x)+'</td>'
          +'<td style="padding:3px 8px;text-align:right">'+fmt(r.fx)+'</td>'
          +'<td style="padding:3px 8px;text-align:right">'+fmt(r.dx)+'</td></tr>';
      });
      html+='</tbody></table></div>';
    }
    res.innerHTML=html;
    drawCurve(result.hist);
  };
}},
{id:'stats',name:'\u7edf\u8ba1\u5206\u6790',icon:'\ud83d\udcca',cat:'academic',desc:'\u591a\u7ec4\u6570\u636e \u00b7 \u56de\u5f52\u5206\u6790 \u00b7 \u591a\u79cd\u56fe\u8868 \u00b7 \u516c\u5f0f\u6e32\u67d3',
html(){return '<style>'
+'.stat-grp{display:flex;gap:4px;align-items:center;margin:3px 0}'
+'.sg-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}'
+'.sg-del{background:none;border:none;color:#f56c6c;cursor:pointer;font-size:.9em;padding:0 2px}'
+'.stat-ctrl{display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding:10px 12px;background:#f8f9fa;border-radius:8px;margin:8px 0}'
+'.stat-ctrl .t-sel,.stat-ctrl .t-btn{font-size:.82em}'
+'.stat-sub{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:4px 0;padding:6px 12px;background:#fafbfc;border-radius:6px;font-size:.8em}'
+'.stat-chk{display:inline-flex;align-items:center;gap:2px;cursor:pointer;font-size:.78em}'
+'.stat-chk input{margin:0}'
+'.stat-sep{width:1px;height:18px;background:#e0e0e0;margin:0 2px}'
+'.stat-ext-row{display:flex;flex-wrap:wrap;gap:4px;margin:6px 0}'
+'</style>'
+'<div style="margin-bottom:6px">'
+'<div class="t-lbl">\u6570\u636e\u7ec4\uff08\u7a7a\u683c\u6216\u9017\u53f7\u5206\u9694\u6570\u503c\uff09</div>'
+'<div id="statsGroups"></div>'
+'<div style="margin-top:4px"><button class="t-btn t-btn-d" id="statsAddGroup" style="font-size:.72em;padding:3px 10px">+ \u6dfb\u52a0\u6570\u636e\u7ec4</button></div>'
+'</div>'
+'<div class="stat-ctrl">'
+'<button class="t-btn" id="statsCalc">\ud83d\udd2c \u5206\u6790</button>'
+'<span class="stat-sep"></span>'
+'<select class="t-sel" id="statsChart"><option value="hist">\u76f4\u65b9\u56fe</option><option value="scatter">\u6563\u70b9\u56fe+\u56de\u5f52</option><option value="box">\u7bb1\u7ebf\u56fe</option><option value="line">\u6298\u7ebf\u56fe</option></select>'
+'<select class="t-sel" id="statsTheme"><option value="default">\u9ed8\u8ba4</option><option value="pastel">\u67d4\u548c</option><option value="vivid">\u9c9c\u8273</option><option value="warm">\u6696\u8272</option><option value="cool">\u51b7\u8272</option><option value="mono">\u5355\u8272</option></select>'
+'</div>'
+'<div class="stat-sub" id="statsSubCtrl">'
+'<span id="statsXYSel" style="display:none;gap:4px;align-items:center"><select class="t-sel" id="statsXAxis"></select><span style="color:#888;font-size:.9em">vs</span><select class="t-sel" id="statsYAxis"></select></span>'
+'<span id="statsBinsCtrl" style="display:inline-flex;gap:4px;align-items:center"><span class="t-lbl" style="margin:0">\u5206\u7ec4</span><input type="range" id="statsBins" min="3" max="20" value="8" style="width:70px"><span id="statsBinVal">8</span></span>'
+'<span id="statsDataSel" style="display:inline-flex;gap:6px;flex-wrap:wrap;align-items:center"></span>'
+'</div>'
+'<div class="stat-ext-row">'
+'<button class="t-btn t-btn-o stat-ext" data-op="cov">\u534f\u65b9\u5dee\u77e9\u9635</button>'
+'<button class="t-btn t-btn-o stat-ext" data-op="zscore">Z-scores</button>'
+'<button class="t-btn t-btn-o stat-ext" data-op="cosine">\u4f59\u5f26\u76f8\u4f3c\u5ea6</button>'
+'<button class="t-btn t-btn-o stat-ext" data-op="spearman">Spearman</button>'
+'</div>'
+'<div id="statsRes" style="max-height:280px;overflow:auto;padding:10px;background:#fafafa;border-radius:8px;border:1px solid #eee;font-size:.88em;line-height:1.7"></div>'
+'<canvas id="statsCv" class="t-cv" width="700" height="280" style="margin-top:8px"></canvas>'},
async init(el){
  await loadKaTeX();
  var q=function(s){return el.querySelector(s)};
  function esc(s){return(s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;')}

  /* ===== \u914d\u8272\u4e3b\u9898 ===== */
  var themes={
    default:['#409eff','#f56c6c','#67c23a','#e6a23c','#9b59b6','#e91e63'],
    pastel:['#a8d8ea','#f3b4c4','#c6e5b3','#f9e4a7','#d5b8f2','#f7c5a0'],
    vivid:['#ff4757','#2ed573','#1e90ff','#ffa502','#a55eea','#ff6348'],
    warm:['#e74c3c','#e67e22','#f1c40f','#d35400','#c0392b','#f39c12'],
    cool:['#2980b9','#3498db','#1abc9c','#16a085','#2c3e50','#27ae60'],
    mono:['#1a1a2e','#3a3a5e','#5a5a8e','#7a7abe','#9a9aee','#babafe']
  };
  function getColors(){return themes[q('#statsTheme').value]||themes.default}

  /* ===== \u6570\u636e\u7ec4\u7ba1\u7406 ===== */
  var groups=[
    {name:'\u6570\u636e1',data:'12 15 18 22 25 28 30 33 35 40 45 50'},
    {name:'\u6570\u636e2',data:'10 14 20 24 22 30 28 35 32 42 44 48'}
  ];
  var checked={};
  function renderGroups(){
    var cols=getColors(),html='';
    groups.forEach(function(g,i){
      html+='<div class="stat-grp" data-gi="'+i+'">'
       +'<span class="sg-dot" style="background:'+cols[i%cols.length]+'"></span>'
       +'<input class="t-in sg-name" value="'+esc(g.name)+'" style="width:60px;font-size:.8em" placeholder="\u540d\u79f0">'
       +'<input class="t-in sg-data" value="'+esc(g.data)+'" style="flex:1;font-size:.8em" placeholder="\u7a7a\u683c\u6216\u9017\u53f7\u5206\u9694\u6570\u503c">'
       +(groups.length>1?'<button class="sg-del" title="\u5220\u9664">\u00d7</button>':'')
       +'</div>';
    });
    q('#statsGroups').innerHTML=html;
    q('#statsGroups').querySelectorAll('.stat-grp').forEach(function(row){
      var idx=+row.dataset.gi;
      row.querySelector('.sg-name').onchange=function(){groups[idx].name=this.value;updateSelectors()};
      row.querySelector('.sg-data').onchange=function(){groups[idx].data=this.value};
      var del=row.querySelector('.sg-del');
      if(del)del.onclick=function(){groups.splice(idx,1);renderGroups();updateSelectors()};
    });
    updateSelectors();
  }
  renderGroups();
  q('#statsAddGroup').onclick=function(){
    var n=groups.length+1;
    groups.push({name:'\u6570\u636e'+n,data:''});
    checked[groups.length-1]=true;
    renderGroups();
  };
  q('#statsTheme').onchange=function(){renderGroups()};

  /* ===== \u9009\u62e9\u5668\u7edf\u4e00\u66f4\u65b0 ===== */
  function updateSelectors(){
    var names=getNames();
    /* X/Y \u8f74 */
    var selX=q('#statsXAxis'),selY=q('#statsYAxis');
    var oldX=selX.value,oldY=selY.value;
    selX.innerHTML='';selY.innerHTML='';
    names.forEach(function(n,i){
      selX.innerHTML+='<option value="'+i+'">'+esc(n)+'</option>';
      selY.innerHTML+='<option value="'+i+'">'+esc(n)+'</option>';
    });
    selX.value=(oldX&&+oldX<names.length)?oldX:'0';
    selY.value=(oldY&&+oldY<names.length)?oldY:(names.length>1?'1':'0');
    /* \u6570\u636e\u52fe\u9009 */
    var dsel=q('#statsDataSel'),html='';
    var cols=getColors();
    names.forEach(function(n,i){
      if(typeof checked[i]==='undefined')checked[i]=true;
      html+='<label class="stat-chk"><input type="checkbox" data-di="'+i+'"'+(checked[i]?' checked':'')+'/><span style="color:'+cols[i%cols.length]+'">'+esc(n)+'</span></label>';
    });
    dsel.innerHTML=html;
    dsel.querySelectorAll('input[type=checkbox]').forEach(function(cb){
      cb.onchange=function(){checked[+this.dataset.di]=this.checked;calc()};
    });
    updateCtrlVisibility();
  }
  function updateCtrlVisibility(){
    var type=q('#statsChart').value;
    var isXY=type==='scatter'||type==='line';
    q('#statsXYSel').style.display=isXY?'inline-flex':'none';
    q('#statsBinsCtrl').style.display=type==='hist'?'inline-flex':'none';
    q('#statsDataSel').style.display=isXY?'none':'inline-flex';
  }
  q('#statsChart').onchange=function(){updateCtrlVisibility();calc()};
  q('#statsXAxis').onchange=function(){calc()};
  q('#statsYAxis').onchange=function(){calc()};
  updateSelectors();

  /* ===== \u6570\u636e\u89e3\u6790 ===== */
  function syncGroups(){
    q('#statsGroups').querySelectorAll('.stat-grp').forEach(function(row){
      var idx=+row.dataset.gi;
      groups[idx].name=row.querySelector('.sg-name').value;
      groups[idx].data=row.querySelector('.sg-data').value;
    });
  }
  function parseData(){
    syncGroups();
    return groups.map(function(g){return g.data.trim().split(/[\s,]+/).map(Number).filter(function(n){return!isNaN(n)})}).filter(function(d){return d.length>0});
  }
  function getNames(){return groups.map(function(g,i){return g.name||('\u6570\u636e'+(i+1))})}
  function getCheckedIndices(){
    var indices=[];
    groups.forEach(function(g,i){if(checked[i]!==false)indices.push(i)});
    return indices;
  }

  /* ===== \u7edf\u8ba1\u51fd\u6570 ===== */
  function desc(d){var n=d.length,sum=d.reduce(function(a,b){return a+b}),mean=sum/n,sorted=d.slice().sort(function(a,b){return a-b});var median=n%2?sorted[Math.floor(n/2)]:(sorted[n/2-1]+sorted[n/2])/2;var q1=sorted[Math.floor(n*.25)],q3=sorted[Math.floor(n*.75)];var variance=n>1?d.reduce(function(a,v){return a+Math.pow(v-mean,2)},0)/(n-1):0;var mode_map={};d.forEach(function(v){mode_map[v]=(mode_map[v]||0)+1});var mode_val=null,mode_cnt=0;Object.keys(mode_map).forEach(function(k){if(mode_map[k]>mode_cnt){mode_cnt=mode_map[k];mode_val=+k}});var skew=d.reduce(function(a,v){return a+Math.pow((v-mean)/Math.sqrt(variance),3)},0)/n;var kurt=d.reduce(function(a,v){return a+Math.pow((v-mean)/Math.sqrt(variance),4)},0)/n-3;return{n:n,sum:sum,mean:mean,median:median,std:Math.sqrt(variance),variance:variance,min:sorted[0],max:sorted[n-1],q1:q1,q3:q3,iqr:q3-q1,sorted:sorted,mode:mode_val,modeCnt:mode_cnt,skew:isNaN(skew)?0:skew,kurtosis:isNaN(kurt)?0:kurt}}
  function pearson(a,b){var n=Math.min(a.length,b.length);var ma=a.slice(0,n).reduce(function(s,v){return s+v},0)/n,mb=b.slice(0,n).reduce(function(s,v){return s+v},0)/n;var num=0,da=0,db=0;for(var i=0;i<n;i++){num+=(a[i]-ma)*(b[i]-mb);da+=Math.pow(a[i]-ma,2);db+=Math.pow(b[i]-mb,2)}return da&&db?num/Math.sqrt(da*db):0}
  function spearmanF(a,b){var n=Math.min(a.length,b.length);function ranks(arr){var s=arr.slice(0,n).map(function(v,i){return{v:v,i:i}}).sort(function(a,b){return a.v-b.v});var r=new Array(n);s.forEach(function(x,rank){r[x.i]=rank+1});return r}var ra=ranks(a),rb=ranks(b);var d2=0;for(var i=0;i<n;i++)d2+=Math.pow(ra[i]-rb[i],2);return 1-6*d2/(n*(n*n-1))}
  function covF(a,b){var n=Math.min(a.length,b.length);var ma=a.slice(0,n).reduce(function(s,v){return s+v},0)/n,mb=b.slice(0,n).reduce(function(s,v){return s+v},0)/n;var c=0;for(var i=0;i<n;i++)c+=(a[i]-ma)*(b[i]-mb);return c/n}
  function linReg(x,y){var n=Math.min(x.length,y.length);var mx=x.slice(0,n).reduce(function(s,v){return s+v},0)/n,my=y.slice(0,n).reduce(function(s,v){return s+v},0)/n;var num=0,den=0;for(var i=0;i<n;i++){num+=(x[i]-mx)*(y[i]-my);den+=Math.pow(x[i]-mx,2)}var b=den?num/den:0,a=my-b*mx;var yp=x.slice(0,n).map(function(v){return a+b*v});var sstot=0,ssres=0;for(var i=0;i<n;i++){sstot+=Math.pow(y[i]-my,2);ssres+=Math.pow(y[i]-yp[i],2)}var r2=sstot?1-ssres/sstot:0;return{a:a,b:b,r2:r2}}

  /* ===== \u8ba1\u7b97 ===== */
  function calc(){
    var datasets=parseData();if(!datasets.length)return;
    var names=getNames(),cols=getColors();
    var html='';
    datasets.forEach(function(d,idx){
      var s=desc(d);
      html+='<div style="margin-bottom:10px;padding:8px;background:#fff;border-radius:6px;border-left:3px solid '+cols[idx%cols.length]+'">';
      html+='<strong>'+esc(names[idx])+'</strong> '+tex('(n='+s.n+')')+'<br>';
      html+=tex('\\bar{x}='+s.mean.toFixed(4))+' &nbsp; '+tex('\\tilde{x}='+s.median)+' &nbsp; \u4f17\u6570: '+tex(s.mode+'\\,(\\times'+s.modeCnt+')')+'<br>';
      html+=tex('\\sigma='+s.std.toFixed(4))+' &nbsp; '+tex('\\sigma^2='+s.variance.toFixed(4))+'<br>';
      html+=tex('Q_1='+s.q1)+' &nbsp; '+tex('Q_3='+s.q3)+' &nbsp; '+tex('\\text{IQR}='+s.iqr)+' &nbsp; ['+s.min+', '+s.max+']<br>';
      html+='\u504f\u5ea6 '+tex('\\gamma_1='+s.skew.toFixed(4))+' &nbsp; \u5cf0\u5ea6 '+tex('\\kappa='+s.kurtosis.toFixed(4));
      html+='</div>';
    });
    if(datasets.length>=2){
      var xi=+q('#statsXAxis').value||0,yi=+q('#statsYAxis').value||1;
      if(xi>=datasets.length)xi=0;if(yi>=datasets.length)yi=Math.min(1,datasets.length-1);
      html+='<div style="padding:8px;background:#f0f7ff;border-radius:6px">';
      html+='<strong>\u76f8\u5173\u6027 \u00b7 \u56de\u5f52</strong> <span style="font-size:.78em;color:#999">'+esc(names[xi])+' \u2194 '+esc(names[yi])+'</span><br>';
      var lr=linReg(datasets[xi],datasets[yi]);
      var pv=pearson(datasets[xi],datasets[yi]).toFixed(4);
      var sv=spearmanF(datasets[xi],datasets[yi]).toFixed(4);
      html+=tex('r_{\\text{Pearson}}='+pv)+' &nbsp; '+tex('\\rho_{\\text{Spearman}}='+sv)+'<br>';
      var bSign=lr.b>=0?'':'-';var bAbs=Math.abs(lr.b).toFixed(4);
      var aSign=lr.a>=0?'+':'-';var aAbs=Math.abs(lr.a).toFixed(4);
      html+=texD('y = '+bSign+bAbs+'x '+aSign+' '+aAbs+'\\quad (R^2='+lr.r2.toFixed(4)+')');
      html+='</div>';
    }
    q('#statsRes').innerHTML=html;drawChart(datasets);
  }

  /* ===== \u6269\u5c55\u5206\u6790 ===== */
  el.querySelectorAll('.stat-ext').forEach(function(btn){btn.onclick=function(){
    var datasets=parseData();if(!datasets.length)return;var names=getNames(),html='';
    var xi=+q('#statsXAxis').value||0,yi=+q('#statsYAxis').value||1;
    if(xi>=datasets.length)xi=0;if(yi>=datasets.length)yi=Math.min(1,datasets.length-1);
    if(this.dataset.op==='cov'&&datasets.length>=2){
      html+='<strong>\u534f\u65b9\u5dee\u77e9\u9635</strong><br>';
      var latex='\\begin{pmatrix}';
      datasets.forEach(function(a,i){datasets.forEach(function(b,j){latex+=covF(a,b).toFixed(4);if(j<datasets.length-1)latex+=' & '});if(i<datasets.length-1)latex+='\\\\'});
      latex+='\\end{pmatrix}';html+=texD(latex);
    }else if(this.dataset.op==='zscore'){
      html+='<strong>Z-scores</strong><br>';
      datasets.forEach(function(d,idx){var s=desc(d);html+='<strong>'+esc(names[idx])+'</strong>: '+tex('z_i = \\frac{x_i - \\bar{x}}{\\sigma}')+'<br>';html+='<span style="font-family:monospace;font-size:.85em">'+d.map(function(v){return((v-s.mean)/s.std).toFixed(3)}).join(', ')+'</span><br>'});
    }else if(this.dataset.op==='cosine'&&datasets.length>=2){
      html+='<strong>\u4f59\u5f26\u76f8\u4f3c\u5ea6\u77e9\u9635</strong><br>';
      var latex='\\begin{pmatrix}';
      datasets.forEach(function(a,i){
        datasets.forEach(function(b,j){
          var n=Math.min(a.length,b.length),dot=0,na=0,nb=0;
          for(var k=0;k<n;k++){dot+=a[k]*b[k];na+=a[k]*a[k];nb+=b[k]*b[k]}
          var cs=(na&&nb)?dot/Math.sqrt(na*nb):0;
          latex+=cs.toFixed(4);if(j<datasets.length-1)latex+=' & ';
        });if(i<datasets.length-1)latex+='\\\\';
      });
      latex+='\\end{pmatrix}';html+=texD(latex);
    }else if(this.dataset.op==='spearman'&&datasets.length>=2){
      html+='<strong>Spearman \u79e9\u76f8\u5173\u77e9\u9635</strong><br>';
      var latex='\\begin{pmatrix}';
      datasets.forEach(function(a,i){datasets.forEach(function(b,j){latex+=spearmanF(a,b).toFixed(4);if(j<datasets.length-1)latex+=' & '});if(i<datasets.length-1)latex+='\\\\'});
      latex+='\\end{pmatrix}';html+=texD(latex);
    }
    if(html)q('#statsRes').innerHTML=html;
  }});

  /* ===== \u7ed8\u56fe ===== */
  function drawChart(datasets){
    var names=getNames(),cols=getColors();
    var cv=q('#statsCv'),ctx=cv.getContext('2d'),type=q('#statsChart').value;
    ctx.clearRect(0,0,cv.width,cv.height);var pad=40,w=cv.width-pad*2,h=cv.height-pad*2;
    /* \u7f51\u683c */
    ctx.strokeStyle='#f0f0f0';ctx.lineWidth=.6;
    for(var gi=0;gi<=4;gi++){var gy=pad+gi*(h/4);ctx.beginPath();ctx.moveTo(pad,gy);ctx.lineTo(pad+w,gy);ctx.stroke()}
    /* \u8f74\u7ebf */
    function drawAxes(){ctx.strokeStyle='#bbb';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(pad,pad+h);ctx.lineTo(pad+w,pad+h);ctx.stroke();ctx.beginPath();ctx.moveTo(pad,pad);ctx.lineTo(pad,pad+h);ctx.stroke()}

    var ci=getCheckedIndices();

    if(type==='hist'){
      var bins=+q('#statsBins').value;
      var filtD=ci.map(function(i){return datasets[i]}).filter(Boolean);
      if(!filtD.length)return;
      var globalMax=0;
      filtD.forEach(function(d){var s=desc(d),bw=(s.max-s.min)/bins||1,hist=new Array(bins).fill(0);d.forEach(function(v){var i=Math.min(Math.floor((v-s.min)/bw),bins-1);hist[i]++});var hm=Math.max.apply(null,hist);if(hm>globalMax)globalMax=hm});
      drawAxes();
      ctx.fillStyle='#888';ctx.font='10px sans-serif';ctx.textAlign='right';
      for(var yi=0;yi<=4;yi++){var yv=Math.round(globalMax*(4-yi)/4);ctx.fillText(yv,pad-4,pad+yi*(h/4)+4)}
      filtD.forEach(function(d,di){
        var oi=ci[di];
        var s=desc(d),bw=(s.max-s.min)/bins||1,hist=new Array(bins).fill(0);d.forEach(function(v){var i=Math.min(Math.floor((v-s.min)/bw),bins-1);hist[i]++});
        var bpx=w/(bins*filtD.length);
        hist.forEach(function(c,i){var bh=globalMax?c/globalMax*h:0;ctx.fillStyle=cols[oi%cols.length]+'55';ctx.fillRect(pad+i*filtD.length*bpx+di*bpx,pad+h-bh,bpx-1,bh);ctx.strokeStyle=cols[oi%cols.length];ctx.lineWidth=1.2;ctx.strokeRect(pad+i*filtD.length*bpx+di*bpx,pad+h-bh,bpx-1,bh)});
        if(di===0){ctx.fillStyle='#888';ctx.font='9px sans-serif';ctx.textAlign='center';for(var xi=0;xi<=bins;xi+=Math.max(1,Math.floor(bins/6))){var xv=s.min+xi*bw;ctx.fillText(xv.toFixed(1),pad+xi*filtD.length*bpx,pad+h+13)}}
      });
      ctx.textAlign='start';
      drawLegend(cv,ctx,ci.map(function(i){return names[i]}),ci.map(function(i){return cols[i%cols.length]}),pad);

    }else if(type==='scatter'&&datasets.length>=2){
      var xi=+q('#statsXAxis').value||0,yi=+q('#statsYAxis').value||1;
      if(!datasets[xi]||!datasets[yi])return;
      var a=datasets[xi],b=datasets[yi],n=Math.min(a.length,b.length);
      var xmin=Math.min.apply(null,a),xmax=Math.max.apply(null,a),ymin=Math.min.apply(null,b),ymax=Math.max.apply(null,b);
      var sx=function(v){return pad+(v-xmin)/(xmax-xmin||1)*w},sy=function(v){return pad+h-(v-ymin)/(ymax-ymin||1)*h};
      drawAxes();
      ctx.fillStyle='#888';ctx.font='10px sans-serif';
      ctx.textAlign='center';for(var ti=0;ti<=4;ti++){var xv=xmin+(xmax-xmin)*ti/4;ctx.fillText(xv.toFixed(1),sx(xv),pad+h+13)}
      ctx.textAlign='right';for(var ti=0;ti<=4;ti++){var yv=ymin+(ymax-ymin)*ti/4;ctx.fillText(yv.toFixed(1),pad-4,sy(yv)+4)}
      ctx.textAlign='start';
      /* \u6563\u70b9\u7528X\u6570\u636e\u7ec4\u8272 */
      var dotCol=cols[xi%cols.length];
      for(var i=0;i<n;i++){ctx.beginPath();ctx.arc(sx(a[i]),sy(b[i]),4,0,Math.PI*2);ctx.fillStyle=dotCol;ctx.fill()}
      /* \u56de\u5f52\u7ebf\u7528Y\u6570\u636e\u7ec4\u8272\uff0c\u865a\u7ebf */
      var lr=linReg(a,b),regCol=cols[yi%cols.length];
      ctx.strokeStyle=regCol;ctx.lineWidth=2;ctx.setLineDash([6,3]);ctx.beginPath();ctx.moveTo(sx(xmin),sy(lr.a+lr.b*xmin));ctx.lineTo(sx(xmax),sy(lr.a+lr.b*xmax));ctx.stroke();ctx.setLineDash([]);
      /* \u6807\u6ce8 */
      ctx.fillStyle='#666';ctx.font='10px sans-serif';
      ctx.fillText(names[xi]+' vs '+names[yi]+' | R\u00b2='+lr.r2.toFixed(3),pad+4,pad+14);

    }else if(type==='box'){
      var filtI=ci.filter(function(i){return datasets[i]&&datasets[i].length>0});
      if(!filtI.length)return;
      var filtD=filtI.map(function(i){return datasets[i]});
      var bAllVals=filtD.reduce(function(a,b){return a.concat(b)},[]),bGmin=Math.min.apply(null,bAllVals),bGmax=Math.max.apply(null,bAllVals);
      var bsyf=function(v){return pad+h-(v-bGmin)/(bGmax-bGmin||1)*h};
      drawAxes();
      ctx.fillStyle='#888';ctx.font='10px sans-serif';ctx.textAlign='right';
      for(var yi=0;yi<=4;yi++){var yv=bGmin+(bGmax-bGmin)*(4-yi)/4;ctx.fillText(yv.toFixed(1),pad-4,pad+yi*(h/4)+4)}
      ctx.textAlign='start';
      filtD.forEach(function(d,di){
        var oi=filtI[di];
        var s=desc(d),bw=Math.min(40,w/filtD.length-10),x=pad+di*(bw+20)+20;
        ctx.fillStyle=cols[oi%cols.length]+'33';ctx.fillRect(x,bsyf(s.q3),bw,bsyf(s.q1)-bsyf(s.q3));
        ctx.strokeStyle=cols[oi%cols.length];ctx.lineWidth=2;ctx.strokeRect(x,bsyf(s.q3),bw,bsyf(s.q1)-bsyf(s.q3));
        ctx.beginPath();ctx.moveTo(x,bsyf(s.median));ctx.lineTo(x+bw,bsyf(s.median));ctx.lineWidth=3;ctx.stroke();ctx.lineWidth=1;
        ctx.beginPath();ctx.moveTo(x+bw/2,bsyf(s.q3));ctx.lineTo(x+bw/2,bsyf(s.max));ctx.moveTo(x+bw/2,bsyf(s.q1));ctx.lineTo(x+bw/2,bsyf(s.min));ctx.stroke();
        ctx.fillStyle=cols[oi%cols.length];ctx.font='10px sans-serif';ctx.fillText(names[oi],x+2,pad+h+14);
      });

    }else if(type==='line'&&datasets.length>=2){
      var lxi=+q('#statsXAxis').value||0,lyi=+q('#statsYAxis').value||1;
      if(!datasets[lxi]||!datasets[lyi])return;
      var la=datasets[lxi],lb=datasets[lyi],ln=Math.min(la.length,lb.length);
      var lxmin=Math.min.apply(null,la),lxmax=Math.max.apply(null,la),lymin=Math.min.apply(null,lb),lymax=Math.max.apply(null,lb);
      var lsx=function(v){return pad+(v-lxmin)/(lxmax-lxmin||1)*w},lsy=function(v){return pad+h-(v-lymin)/(lymax-lymin||1)*h};
      drawAxes();
      ctx.fillStyle='#888';ctx.font='10px sans-serif';
      ctx.textAlign='center';for(var ti=0;ti<=4;ti++){var xv=lxmin+(lxmax-lxmin)*ti/4;ctx.fillText(xv.toFixed(1),lsx(xv),pad+h+13)}
      ctx.textAlign='right';for(var ti=0;ti<=4;ti++){var yv=lymin+(lymax-lymin)*ti/4;ctx.fillText(yv.toFixed(1),pad-4,lsy(yv)+4)}
      ctx.textAlign='start';
      var pts=[];for(var pi=0;pi<ln;pi++)pts.push({x:la[pi],y:lb[pi]});
      pts.sort(function(a,b){return a.x-b.x});
      var lnCol=cols[lyi%cols.length];
      ctx.strokeStyle=lnCol;ctx.lineWidth=2;ctx.beginPath();
      pts.forEach(function(p,i){var px=lsx(p.x),py=lsy(p.y);i===0?ctx.moveTo(px,py):ctx.lineTo(px,py)});
      ctx.stroke();
      pts.forEach(function(p){ctx.beginPath();ctx.arc(lsx(p.x),lsy(p.y),3.5,0,Math.PI*2);ctx.fillStyle=lnCol;ctx.fill()});
      ctx.fillStyle='#666';ctx.font='10px sans-serif';
      ctx.fillText(names[lxi]+' \u2192 '+names[lyi],pad+4,pad+14);
    }
  }

  /* ===== \u56fe\u4f8b ===== */
  function drawLegend(cv,ctx,labels,labelCols,pad){
    if(!labels.length)return;
    ctx.save();ctx.font='11px sans-serif';ctx.textAlign='left';
    var maxW=0;labels.forEach(function(n){var tw=ctx.measureText(n).width;if(tw>maxW)maxW=tw});
    var lw=maxW+24,lh=labels.length*16+8,lx=cv.width-pad-lw-4,ly=pad+4;
    ctx.fillStyle='rgba(255,255,255,.88)';ctx.fillRect(lx,ly,lw,lh);
    ctx.strokeStyle='#e0e0e0';ctx.lineWidth=.6;ctx.strokeRect(lx,ly,lw,lh);
    labels.forEach(function(n,i){ctx.fillStyle=labelCols[i]||'#333';ctx.fillRect(lx+4,ly+6+i*16,10,10);ctx.fillStyle='#333';ctx.fillText(n,lx+18,ly+14+i*16)});
    ctx.restore();
  }

  q('#statsCalc').onclick=function(){updateSelectors();calc()};
  q('#statsBins').oninput=function(){q('#statsBinVal').textContent=this.value;calc()};
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
}},
{id:'xjtucal',name:'交大日历',icon:'🏫',cat:'campus',desc:'作息时间 · 学期周数 · 教学楼查询',
html(){
  var tabs='<div class="t-row" style="justify-content:center;gap:6px;margin-bottom:12px">'
    +'<button class="t-btn xc-tab" data-tab="schedule" style="font-weight:700">📅 作息时间</button>'
    +'<button class="t-btn t-btn-o xc-tab" data-tab="week">📆 学期周数</button>'
    +'<button class="t-btn t-btn-o xc-tab" data-tab="building">🏢 教学楼</button></div>';
  var schedule='<div id="xcSchedule">'
    +'<div class="t-row" style="justify-content:center"><span id="xcSeason" style="font-size:.82em;font-weight:600;color:#409eff"></span></div>'
    +'<table class="ct-table" id="xcTimeTable"><thead><tr><th>节次</th><th>上课</th><th>下课</th><th>考勤开始</th><th>考勤结束</th></tr></thead><tbody id="xcTimeTbody"></tbody></table></div>';
  var week='<div id="xcWeek" style="display:none">'
    +'<div class="t-lbl">📅 开学日期</div>'
    +'<div class="t-row"><input type="date" class="t-in" id="xcStart" style="max-width:200px"><button class="t-btn t-btn-s" id="xcCalcWeek">计算</button></div>'
    +'<div id="xcWeekResult" style="background:#f0f7ff;border-radius:10px;padding:18px;text-align:center;margin-top:10px"><div style="font-size:.78em;color:#888">当前是</div><div id="xcWeekVal" style="font-size:2.5em;font-weight:700;color:#409eff">—</div><div id="xcWeekDay" style="font-size:.82em;color:#999;margin-top:4px"></div></div></div>';
  var building='<div id="xcBuilding" style="display:none">'
    +'<div class="t-lbl">🔍 搜索教学楼</div>'
    +'<input class="t-in" id="xcBldSearch" placeholder="输入关键词，如 主楼、C座、创新港...">'
    +'<div id="xcBldResult" class="t-res" style="margin-top:8px;max-height:400px"></div></div>';
  return tabs+schedule+week+building
},
init(el){
  var W={1:{s:'8:00',e:'8:50',as:'7:20',ae:'8:05'},2:{s:'9:00',e:'9:50',as:'8:20',ae:'9:05'},3:{s:'10:10',e:'11:00',as:'9:35',ae:'10:15'},4:{s:'11:10',e:'12:00',as:'10:35',ae:'11:15'},5:{s:'14:00',e:'14:50',as:'13:20',ae:'14:05'},6:{s:'15:00',e:'15:50',as:'14:20',ae:'15:05'},7:{s:'16:10',e:'17:00',as:'15:35',ae:'16:15'},8:{s:'17:10',e:'18:00',as:'16:35',ae:'17:15'},9:{s:'19:10',e:'20:00',as:'18:30',ae:'19:15'},10:{s:'20:10',e:'21:00',as:'19:35',ae:'20:15'},11:{s:'21:10',e:'22:00',as:'20:35',ae:'21:15'}};
  var S={1:{s:'8:00',e:'8:50',as:'7:20',ae:'8:05'},2:{s:'9:00',e:'9:50',as:'8:20',ae:'9:05'},3:{s:'10:10',e:'11:00',as:'9:35',ae:'10:15'},4:{s:'11:10',e:'12:00',as:'10:35',ae:'11:15'},5:{s:'14:30',e:'15:20',as:'13:50',ae:'14:35'},6:{s:'15:30',e:'16:20',as:'14:50',ae:'15:35'},7:{s:'16:40',e:'17:30',as:'16:05',ae:'16:45'},8:{s:'17:40',e:'18:30',as:'17:05',ae:'17:45'},9:{s:'19:40',e:'20:30',as:'19:00',ae:'19:45'},10:{s:'20:40',e:'21:30',as:'20:05',ae:'20:45'},11:{s:'21:40',e:'22:30',as:'21:05',ae:'21:45'}};
  var nowM=new Date().getMonth()+1;
  var isSummer=(nowM>=5&&nowM<=9);
  var T=isSummer?S:W;
  el.querySelector('#xcSeason').textContent=isSummer?'☀️ 当前：夏季作息（5-9月）':'❄️ 当前：冬季作息（10-次年4月）';
  var tb=el.querySelector('#xcTimeTbody');
  var nowH=new Date().getHours(),nowMi=new Date().getMinutes(),nowStr=('0'+nowH).slice(-2)+':'+('0'+nowMi).slice(-2);
  for(var i=1;i<=11;i++){
    var t=T[i];
    var active=nowStr>=t.s.replace(/^(\d):/, '0$1')&&nowStr<=t.e.replace(/^(\d):/, '0$1');
    var tr=document.createElement('tr');
    if(active)tr.style.cssText='background:#f0f7ff;font-weight:600';
    tr.innerHTML='<td style="text-align:center;font-weight:700">第 '+i+' 节'+(active?' 🔵':'')+'</td><td>'+t.s+'</td><td>'+t.e+'</td><td style="color:#888">'+t.as+'</td><td style="color:#888">'+t.ae+'</td>';
    tb.appendChild(tr);
  }
  el.querySelector('#xcCalcWeek').onclick=function(){
    var start=el.querySelector('#xcStart').value;if(!start){el.querySelector('#xcWeekVal').textContent='请选择日期';return}
    var sd=new Date(start+'T00:00:00'),now=new Date();now.setHours(0,0,0,0);
    var diff=now-sd,days=Math.floor(diff/86400000),week=Math.floor(days/7)+1;
    var dayNames=['日','一','二','三','四','五','六'];
    if(week<1){el.querySelector('#xcWeekVal').textContent='还未开学';el.querySelector('#xcWeekDay').textContent='距开学还有 '+(-days)+' 天'}
    else{el.querySelector('#xcWeekVal').textContent='第 '+week+' 周';el.querySelector('#xcWeekDay').textContent='星期'+dayNames[now.getDay()]+' · 开学第 '+days+' 天 · '+now.toLocaleDateString('zh-CN')}
  };
  var BLDS=[
    {campus:'兴庆校区',buildings:['主楼（A、B、C、D座）','理科楼','工程馆','逸夫科学馆','逸夫外文楼','教学主楼','东一楼','东二楼','东三楼','东四楼','东五楼','中一楼','中二楼','中三楼','西一楼','西二楼','西三楼','财经校区主楼','宪梓堂']},
    {campus:'雁塔校区',buildings:['教学楼（教一~教六）','实验楼','图书馆']},
    {campus:'创新港校区',buildings:['涵英楼','博学楼','格物楼','明德楼','立德楼','弘文楼','笃行楼','致远楼','崇实楼','敏行楼','博观楼','慎思楼','求是楼','正心楼','诚意楼','致知楼','行健楼','日新楼']},
    {campus:'曲江校区',buildings:['教学楼']},
    {campus:'医学校区(含附属医院)',buildings:['基础医学院教学楼','公共卫生学院','药学院','口腔医院教学楼']}
  ];
  function renderBuildings(keyword){
    var html='';
    BLDS.forEach(function(c){
      var matched=c.buildings.filter(function(b){return!keyword||b.indexOf(keyword)>=0||c.campus.indexOf(keyword)>=0});
      if(matched.length){html+='<div style="font-weight:600;color:#409eff;margin:8px 0 4px">🏫 '+c.campus+' ('+matched.length+')</div>';matched.forEach(function(b){html+='<div style="padding:3px 0 3px 16px;font-size:.85em;border-bottom:1px solid #f5f5f5">📍 '+b+'</div>'})}
    });
    el.querySelector('#xcBldResult').innerHTML=html||'<div style="color:#999;text-align:center">未找到匹配的教学楼</div>';
  }
  renderBuildings('');
  el.querySelector('#xcBldSearch').oninput=function(){renderBuildings(this.value.trim())};
  var tabs=el.querySelectorAll('.xc-tab');
  var panels={schedule:el.querySelector('#xcSchedule'),week:el.querySelector('#xcWeek'),building:el.querySelector('#xcBuilding')};
  tabs.forEach(function(btn){btn.onclick=function(){
    tabs.forEach(function(b){b.className='t-btn t-btn-o xc-tab'});btn.className='t-btn xc-tab';btn.style.fontWeight='700';
    Object.keys(panels).forEach(function(k){panels[k].style.display='none'});panels[btn.dataset.tab].style.display='';
  }});
}}
  ];
})();
