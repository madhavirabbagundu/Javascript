// the closures are functions 
// the main thing is the closures are the outer function scope from an inner function scope
//  the real example of closures are the
// suppose, the we can cook the food right then we serve the food to the another 
// then the people are only see the food , they don.t think about the how to cook food right 
// cooking food is the outer function then serve is the inner function
// 
//example
function first(){
var res = "madhavi"
function second(){
    console.log(res)
}
second()
} 
first()

