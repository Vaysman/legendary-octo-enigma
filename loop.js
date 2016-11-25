$(function () {
    var a = fill_array();
    // console.log("array = " + a);
    task1(a);
    task2(a);
    task3(a);
    task4(a);
});

function fill_array() {
    var i = 0;
    var a = [];

    while (i < 100) {
        a[i] = ++i;
    }

    return a;
}

function task1(a) {
    var sum1 = 0;

    for (var i = 0; i < a.length; i++) {
        sum1 += a[i];
    }
    console.log("Cумма элементов массива = " + sum1);

}

function task2(a) {
    var multipl = 1;

    for (var i = 0; i < 17; i++) {
        multipl *= a[i];
    }
    console.log("Произведение первых 17 элементов массива = " + multipl);
}

function task3(a) {
    var multiplEven = 1;

    for (var i = 7; i < 34; i++) {
        if (a[i] % 2 == 0) {
            multiplEven *= a[i];
        }
    }
    console.log("Произведение четных элементов с 8 по 34 = " + multiplEven);
}


function task3_2(a) {
    var multiplEven = 1;

    for (var i = 7; i < 34; i++) {
        if (a[i] % 2 != 0) {
            continue;
        }
        multiplEven *= a[i];
    }
    console.log("Произведение четных элементов с 8 по 34 = " + multiplEven);
}

function task4(a) {
    var sumN = 0;

    for (var i = 0; i < a.length; i++) {
        if ((a[i] % 2 == 0) || (a[i] % 3 == 0) || (a[i] % 5 == 0) || (a[i] % 7 == 0)) {
            continue;
        }
        sumN += a[i];
    }
    console.log("Сумма элементов, которые не кратны 2,3,5,7 = " + sumN);
}
