import{UPPER_PATH}from"../utility/render.js";const Image=(t,e)=>{if(t.includes("%PUBLIC_IMAGE%")){const i=location.pathname.replace(UPPER_PATH,"");var r=(i.match(/\//g)||[]).length;return`<img src="${t.replace(/%PUBLIC_IMAGE%/,"../".repeat(r-1)+"imgs/")}" width="${""}" height="${""}">`}return t.match(/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+/g)?`<img src=${t} width="${""}" height="${""}">`:`<img src="${UPPER_PATH+t}">`};export{Image};