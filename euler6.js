function ssq(n) {
    var sum = 0;
    for (var i=1; i<=n; i++) {
        sum += Math.pow(i,2);
    }
    return sum;
}

function sqs(n) {
    var sum = 0;
    for (var i=1; i<=n; i++) {
        sum += i;
    }
    return Math.pow(sum,2);
}

console.log("answer: " + ( sqs(100) - ssq(100) ) );
