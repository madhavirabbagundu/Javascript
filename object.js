const obj = {
    name : "madhavi",
    age:21,
   data1: function(){
      console.log(this.name+this.age)
    }


}
console.log(obj.data1())

function SecondObject(){
    this.school = "mjp";
    this.class = "10th";
    this.first = function(){
        console.log(this.school+"    "+this.class)
    }
}
var third = new SecondObject()
console.log(third.first())

const data = new Object({
    name : "pushpa",
    degree:"inter",
    data:function(){
        return this.name+this.degree
    }

})
console.log(data.name)
console.log(data.data())


const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };