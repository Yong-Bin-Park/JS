// 자신의 값과 fontSize를 가지고 있는 class 객체
class Font {
    // 생성자
    constructor(num, sizeText) {
    this.num = num; //숫자
    this.sizeText = sizeText; //폰트 크기
    } 
}

// 배열을 섞어버리는 함수
function shuffle(array) { 
    array.sort(() => Math.random() - 0.5); 
}

// 랜덤값 
var notSortArr = [];
// 랜덤값 절렬
var sortArr = [];
// 자신의 폰트 size 기억 및 무작위로 섞인 배열
var classArr = [];

var pArr = [];
var str = ["text1", "text2", "text3", "text4", "text5", "text6", "text7", "text8", "text9", "text10"]
var str1 = ["#text1", "#text2", "#text3", "#text4", "#text5", "#text6", "#text7", "#text8", "#text9", "#text10"]
let index = 0;
let index2 = 0;

var arr = new Array(10);
for (var i = 0; i < 8; i++) {
    arr[i] = new Array(8);
}
for (var i = 0; i < 8; i++) {
    for (var ii = 0; ii < 8 - i; ii++) {
        arr[i][ii] = new Array(8);
    }
}

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
            for (ii = 0; ii < length; ii++) {
                arr[i][j][ii] = array[ii];
            }
            index2++;
        }
        index++;
    }

    return array;

};

index = 0;
for (var i = 0; i < 8; i++) {
    for (var ii = 0; ii < 8 - i; ii++) {
        pArr[index] = arr[i][ii];
        index++;
    }
}

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
        // for (var i = 0; i < 10; i++) {
        //     // 1 ~ 50 (floor로 소수점 제거)
        //     notSortArr[i] = Math.floor(Math.random() * 50 + 1);
        // }
        // 랜덤 값을 10개 그냥 생성해버리면 에러가 발생해 중복된 랜덤값은 발생하지 않도록 수정
        var i = 0;
        while(true){
            var rNum = Math.floor(Math.random() * 50 + 1);
            var check = false;
            for(var ii = 0; ii < i; ii++){
                if(notSortArr[ii] == rNum){
                    check = true;
                    break;
                }
            }
            // 중복된 값이 있는 경우라면
            if(check){
            }
            // 중복된 값이 없는 경우라면
            else{
                if(i == 10){
                    break;
                }else{
                    notSortArr[i] = rNum;
                    i++;
                }
            }
        }
        console.log(notSortArr);

        for(var i =0; i <10; i++){
            sortArr[i] = notSortArr[i];
        }
        sortArr.sort(function (a, b) {
            return a - b;
        });

        var one = new Font(sortArr[0],str[0])
        var two = new Font(sortArr[1],str[1])
        var three = new Font(sortArr[2],str[2])
        var four = new Font(sortArr[3],str[3])
        var five = new Font(sortArr[4],str[4])
        var six = new Font(sortArr[5],str[5])
        var seven = new Font(sortArr[6],str[6])
        var eight = new Font(sortArr[7],str[7])
        var nine = new Font(sortArr[8],str[8])
        var ten = new Font(sortArr[9],str[9])

        classArr[0] = one;
        classArr[1] = two;
        classArr[2] = three;
        classArr[3] = four;
        classArr[4] = five;
        classArr[5] = six;
        classArr[6] = seven;
        classArr[7] = eight;
        classArr[8] = nine;
        classArr[9] = ten;

        shuffle(classArr);
        
        var element = [];
        for(var i = 0; i < 10; i++){
            element[i] = document.getElementById("text" + (i +1));
        }
        for(var i = 0; i < 10; i++){
            element[i].innerHTML = classArr[i].num + " ";
            element[i].id = classArr[i].sizeText;
        }

        // var element1 = document.getElementById("text1");
        // var element2 = document.getElementById("text2");
        // var element3 = document.getElementById("text3");
        // var element4 = document.getElementById("text4");
        // var element5 = document.getElementById("text5");
        // var element6 = document.getElementById("text6");
        // var element7 = document.getElementById("text7");
        // var element8 = document.getElementById("text8");
        // var element9 = document.getElementById("text9");
        // var element10 = document.getElementById("text10");

        // element1.innerHTML = classArr[0].num + " ";
        // element1.id=classArr[0].sizeText;

        // element2.innerHTML = classArr[1].num + " ";
        // element2.id=classArr[1].sizeText;

        // element3.innerHTML = classArr[2].num + " ";
        // element3.id=classArr[2].sizeText;

        // element4.innerHTML = classArr[3].num + " ";
        // element4.id=classArr[3].sizeText;

        // element5.innerHTML = classArr[4].num + " ";
        // element5.id=classArr[4].sizeText;

        // element6.innerHTML = classArr[5].num + " ";
        // element6.id=classArr[5].sizeText;

        // element7.innerHTML = classArr[6].num + " ";
        // element7.id=classArr[6].sizeText;

        // element8.innerHTML = classArr[7].num + " ";
        // element8.id=classArr[7].sizeText;

        // element9.innerHTML = classArr[8].num + " ";
        // element9.id=classArr[8].sizeText;

        // element10.innerHTML = classArr[9].num + " ";
        // element10.id=classArr[9].sizeText;
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
        var info_lb = document.getElementById("b");
        var info_rb = document.getElementById("b");
        sortArr = notSortArr;
        sortArr.sort(function (a, b) {
            return a - b;
        });
        for (var i = 0; i < 10; i++) {
            $(str[i]).html(sortArr[i] + "  ");
            
            if(sortArr[i]>sortArr[i+1]){
                info_lb.innerText = 'pass(',i,') ',sortArr[i],'가',sortArr[i+1],'보다 크기 때문에 오른쪽으로 갈수록 값이 커지도록 정렬되어야 하므로 ',sortArr[i],'과 ',sortArr[i+1],' 이 자리교체 됌';
            }
            else {
                info_rb.innerText = 'pass(',i,') ',sortArr[i],'가',sortArr[i+1],'보다 작기 때문에 오른쪽으로 갈수록 값이 커지도록 정렬되어야 하므로 ',sortArr[i],'과 ',sortArr[i+1],' 이 자리교체 되지 않음';
            }
        }

        
    });
});

//설명버튼 클릭이벤트
$(document).ready(function () {
    $("#btn4").click(function () {
        var info = document.getElementById("b");   //'b'라는 id를 가진 element를 가져옵니다.
        info.innerHTML = '<b>이것은 버블정렬입니다.</b><br>버블정렬(bubble sort)이란 서로 인접한 2개의 레코드를 비교하여 크기가 순서대로 되어 있지 않으면 서로 교환하여 정렬하는 알고리즘입니다.<br><b>버블 정렬(bubble sort) 알고리즘의 특징</b><br>장점 : 구현이 매우 간단하다.<br>단점 : 1.순서에 맞지 않은 요소를 인접한 요소와 교환한다.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2.하나의 요소가 가장 왼쪽에서 가장 오른쪽으로 이동하기 위해서는 배열에서 모든 다른 요소들과 교환되어야 한다.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3.특히 특정 요소가 최종 정렬 위치에 이미 있는 경우라도 교환되는 일이 일어난다.<br><b>버블 정렬(bubble sort)의 시간복잡도</b><br>Best : O(n^2) , Avg : O(n^2) , Worst : O(n^2)'; 
    });
});