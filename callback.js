// callbacks are pass on argument from function to another function then 
// that function is excuted then the another function is called is called closure

// example of callback

function callback(sum){
console.log(sum)
}
function first(a,b,callback1){
    var sum = a+b
    callback1(sum)

}
first(23,4,callback)
