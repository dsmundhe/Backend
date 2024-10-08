function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function suqr(a) {
    return a * a;
}
function div(a, b) {
    return a / b;
}

// Export this local modules

module.exports = { add, mul, div, suqr, sub };