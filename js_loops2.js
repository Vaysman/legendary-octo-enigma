$(function() {
    var a = new Array(100);

    for(var i = 0 ; i < 100 ; i++) {
        a[i] = i + 1;
    }

    console.log("Array is " + a + "\n Size is " + a.length);

    var s = sum(a);

    console.log("s = " + s);

    var p = product(a);

    console.log("p = " + p);

    var p_even = product_even(a);

    console.log("p_even = " + p_even);

    var s_cond = sum_cond(a);
    console.log("s_cond = " + s_cond);

    var sqrt = heron(100, 0.001);
    console.log("sqrt = " + sqrt);
});

function heron(n, e) {
    var sqrt = 3;
    var prev_sqrt;
    do {
        prev_sqrt = sqrt;
        sqrt = (sqrt + n / sqrt) / 2;
    } while(Math.abs(prev_sqrt - sqrt) > e);

    return sqrt;
}

function sum_cond(a) {
    var s = 0;
    for(var i = 0 ; i < a.length ; i++) {
        if(!
                (
                a[i] % 2 == 0 ||
                a[i] % 3 == 0 ||
                a[i] % 5 == 0 ||
                a[i] % 7 == 0
                )
        ) {
            s += a[i];
        }
    }
    return s;
}

// a && b
// t && t = t !(t && t) = f    !t || !t = f
// t && f = f (t)
// f && t = f (t)
// f && f = f (t)

function product_even(a) {
    var p = 1;
    for(var i = 7 ; i < 34 ; i++) {
        if (a[i] % 2 == 0) {
            p *= a[i];
        }
    }
    return p;
}

function product(a) {
    var p = 1;
    for(var i = 0 ; i < 17 ; i++) {
        p *= a[i];
    }
    return p;
}

function sum(a) {
    var s = 0;
    for(var i = 0 ; i < a.length ; i++) {
        s += a[i]; // s = s + a[i];
    }
    return s;
}

function fib(n) {
    var a = [];
    if (n < 1) {
        throw "n must be greater of equal 1"
    }
    a.push(0);
    if (n == 1) {
        return a;
    }
    a.push(1);
    if (n == 2) {
        return a;
    }
    for(var i = 2 ; i < n ; i++ ) {
        a.push(a[i - 1] + a[i - 2]);
    }
    return a;
}
