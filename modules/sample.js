const moment = require('moment');

//var nowDate = moment().format('YYYY-MM-DD HH:mm:ss');
//var nowDate2 = moment().format('YYYY년 MM월 DD일 HH시 mm분 ss초');


// console.log(new Date()); 
// console.log(nowDate); 
// console.log(nowDate2); 
//IOS Date - 2020-10-20 21:05:10 (ios 날짜 표기법)
//IOS Date - 2020년 10월 20일 21시 05분 10초 (한국식 날짜 표기법)


const nowDateIso = () =>{
    return moment().format('YYYY-MM-DD HH:mm:ss');
}
const nowDateKorean = () =>{
    return moment().format('YYYY년 MM월 DD일 HH시 mm분 ss초');
}

/* ES5 문법 */
/* const obj = {
    moment: moment,
    nowDateIso : nowDateIso,
    nowDateKorean : nowDateKorean
} */

/* Es6 키값과 value값이 같을 경우 생략 가능 */
const obj = {
    moment,
    nowDateIso,
    nowDateKorean
}

//module.exports = obj;
module.exports = {moment,nowDateIso,nowDateKorean}


