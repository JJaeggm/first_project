'use strict';

// localhost
// 1. import 방식 데이터 통신
import data from '../data.json';
// console.log(data);

const ulEl = document.querySelector('.list');
// console.log(ulEl);

data.forEach(listData => {
  // console.log(listData.familyName);
  ulEl.innerHTML += `<li>${listData.familyName} / ${listData.firstName}</li>`;
});

// // 2. data 통신 -> XMLHttpRequest() API
// try {
//   const _app_json_file = '/data.json';
//   const _app_request = new XMLHttpRequest();
//   _app_request.open("GET, _app_json_file");
//   _app_request.send(null);

//   const _app_json_data = JSON.parse(_app_request.responseText);
//   console.log(_app_json_data);
// } catch(error) {
//   alert(error);
// };


// 예전 방식의 데이터 불러오기
const ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(ajax.resposseText);
  }
};

ajax.open('https://jjaeggm.github.io/first_project/json.data', true)
ajax.send();