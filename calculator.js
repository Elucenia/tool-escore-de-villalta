/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"escore-de-villalta","title":"Escore de Villalta","fields":[["dor","Sintoma: dor","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Grave"}}],["caibras","Sintoma: câimbras","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Grave"}}],["peso","Sintoma: peso na perna","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Grave"}}],["parestesia","Sintoma: parestesia","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Grave"}}],["prurido","Sintoma: prurido","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Grave"}}],["edema","Sinal: edema pré-tibial","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Grave"}}],["induracao","Sinal: endurecimento da pele","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Grave"}}],["hiperpig","Sinal: hiperpigmentação","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Grave"}}],["rubor","Sinal: vermelhidão","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Grave"}}],["ectasia","Sinal: ectasia venosa","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Grave"}}],["dor_compr","Sinal: dor à compressão da panturrilha","radio",{"opts":{"0":"Ausente","1":"Leve","2":"Moderado","3":"Grave"}}],["ulcera","Úlcera venosa na perna afetada","radio",{"opts":{"0":"Não","1":"Sim"}}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';

a.def("escore-de-villalta",function(a){var e=0;["dor","caibras","peso","parestesia","prurido","edema","induracao","hiperpig","rubor","ectasia","dor_compr"].forEach(function(o){e+=+a[o]||0});var o="1"===String(a.ulcera),r=o||e>=15?["high","Síndrome pós-trombótica grave"]:e>=10?["high","Síndrome pós-trombótica moderada"]:e>=5?["mid","Síndrome pós-trombótica leve"]:["low","Sem síndrome pós-trombótica"];return{main:[String(e),"de 33"],label:"Escore de Villalta",level:r[0],verdict:r[1]+(o?" (presença de úlcera venosa)":""),raw:{score:e,ulcera:o}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
