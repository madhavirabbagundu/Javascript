//closures give you access to an outer function scope from an inner function

//callback function is afunction that pass arguments to an another fnction then that function is excuted another function is called the callback function. 
// callback function is waitt for tehe another function.

//hoisting in javascipt is a function when a function or variable are excuted before the function excution.

//promises is a object . it will handle the asynchronous operations .
// promise is an object . it will handle the asynchronous operations. 
var promise = new Promise(function(res,rej)  {
    var a = 10;
    var b = 20;
    if(a===b){
        res()
    }
    else{
        rej()
    }

})
promise.then(function(){
    console.log("success")
})
.catch(function(){
console.log("reject")
})