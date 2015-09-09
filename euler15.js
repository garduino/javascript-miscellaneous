// Taken from http://ventusmoso.com/projecteuler/solutions-11-20/project-euler-solution-to-problem-15-written-in-perl-python-ruby-and-javascript/
function permutation(n) {
    var p = 1;
    while ( n != 1 ) {
        p *= n
        n--
    }

    return p
}

function combination(n,r) {
    return permutation(n) / (permutation(r) * permutation(n-r))
}
console.log("answer: " + parseInt(combination(40,20)));
