let str1 = '这是我们过的第一个七夕';
let str2 = '以后，我们还会要一起过好多节';
let str3 = '和你在一起的日子里真的非常开心';
let str4 = '我们要一直好好的';
let str5 = '宝贝，七夕快乐！';
let str6 = '- 大猪蹄子';

function typing(id, str) {
    var text = document.getElementById(id);
    var str = str;
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(str[i])
    }
    var text1 = '';
    var num = 0;
    var timer = setInterval(function () {
        if (num < arr.length) {
            text1 += arr[num];
            text.innerHTML = text1
            num++;
        } else {
            clearInterval(timer)
        }
    }, 200)
}

function typingLine() {
    setTimeout(f1, 0);
    setTimeout(f2, 4000);
    setTimeout(f3, 8000);
    setTimeout(f4, 13000);
    setTimeout(f5, 16500);
    setTimeout(f6, 19000);

    function f1() {
        typing('say1', str1);
    }

    function f2() {
        typing('say2', str2);
    }

    function f3() {
        typing('say3', str3);
    }

    function f4() {
        typing('say4', str4);
    }

    function f5() {
        typing('say5', str5);
    }

    function f6() {
        typing('say6', str6);
    }
}

typingLine();