const path = require('path');
const express = require('express');
/* 
const { nowDateIso } = require('./modules/sample');

const dt = require('./modules/sample');//.js는 생략 가능
console.log(dt.nowDateIso());
console.log(dt.nowDateKorean());
 */

const {moment,nowDateIso,nowDateKorean} = require('./modules/sample');//.js는 생략 가능
//console.log(nowDateIso());
//console.log(nowDateKorean());
//console.log(moment);


const notFound = path.join(__dirname,'./public/404.html');

const app = express();
app.listen(3000,() => {console.log('http://127.0.0.1:3000')});

app.use('/',express.static(path.join(__dirname,'./public')));//public폴더에 index.html로 감

app.get('/',(req, res)=>{ //get방식을 받는애
    res.send('<h1>hi~jenny~</h1>');
});

app.use((req,res)=>{// 다 받아주는 애 에러 처리 애를 맨 밑에 작성할 것
    //res.redirect('/404.html');  //redirect - 다시 리턴해줘라 (여러번 요청)
    //res.sendFile(path.join(__dirname,'./public/404.html'));//(한번만 요청)
    res.sendFile(notFound);//(const로 저장하여 요청)
});
