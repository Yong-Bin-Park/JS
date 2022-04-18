// 랜덤값 (정렬 x, 폰트 size 추가 x)
var notSortArr = [];
// notSortArr.length = 10;
// 랜덤값 (정렬 o, 폰트 size 추가 x)
var sortArr= [9,8,7,6,5,4,3,2,1,10];
// 랜덤값 (정렬 x, 폰트 size 추가 o)
var notSortArr_f = [];
// 랜덤값 (정렬 o, 폰트 size 추가 o)
var sortArr_f = [];
var pArr = [];
var str = ["#text1", "#text2", "#text3", "#text4", "#text5", "#text6", "#text7", "#text8", "#text9", "#text10"]
let index = 0;

function bubbleSort1(array) {
    var length = array.length;
    var i, j, temp;
    for (i = 0; i < length - 1; i++) { // 순차적으로 비교하기 위한 반복문
      for (j = 0; j < length - 1 - i; j++) { // 끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
        if (array[j] > array[j + 1]) { // 두 수를 비교하여 앞 수가 뒷 수보다 크면
          temp = array[j]; // 두 수를 서로 바꿔준다
          array[j] = array[j + 1];
          array[j + 1] = temp;  
        }
        pArr[index] == array;
        index++;
      }
    }
    
    return array;
    
  };
  
bubbleSort1([5,1,7,4,6,3,2,8]);

// 그냥 일반 정렬은 두자리수가 넘어가면 유니코드로 정렬을 하기 때문에 
// 유니코드로 정렬하지않고 숫자의 값에 따라 오름차순 정렬을 하는 함수


// #btn1 -> id가 btn1인 button click시 이벤트 발생 
// <p> </p> 내부의 값이 html()내부 값으로 바뀐다.
// (index 가능)

// 3번째 $안에 있는 #text1 -> id가 text1인 내부 값을 바꾼다.
// 굳이 <a> </a> 태그 사용하지 않아도 된다.

// notSortArr에 랜덤값 추가 (생성버튼 클릭시 이벤트 발생)
$(document).ready(function () {
    $("#btn1").click(function () {
        for (var i = 0; i < 10; i++){
            // 1 ~ 50 (floor로 소수점 제거)
            notSortArr[i] = Math.floor(Math.random() * 50 + 1);
        }
        for (var i = 0; i < 10; i++){
            $(str[i]).html(notSortArr[i]+"  ");
        }
        
    });
});

// $(document).ready(function () {
//     $("#btn1").click(function () {
//         for (var i = 0; i < 10; i++){
//             $(str[i]).html(reArr[i[i]]);
//         }
//     });
// });

$(document).ready(function () {
    $("#btn2").click(function () {
        sortArr = notSortArr;
        sortArr.sort(function (a, b) {
            return a - b;
        });
        for (var i = 0; i < 10; i++){
            $(str[i]).html(sortArr[i] + "  ");
        }
    });
});