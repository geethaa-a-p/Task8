//concat
var a = ["Everything", "is", "possible"]
var b = ["when", "you", "focus"]
console.log(a.concat(b))//Output :[ 'Everything', 'is', 'possible', 'when', 'you', 'focus' ]

//tostring
var num = 23;
console.log(typeof (num))//typeof num before changing to string
console.log(num.toString())//output 23
console.log(typeof (num.toString()))// typeof num after changed tostring

//push
var pusmethod = ["Everything", "is"]
pusmethod.push("possible")//adding any data in the last with the help of push
console.log(pusmethod)//[ 'Everything', 'is', 'possible' ]

//shift
var shiftmethod = ["Trying", "out", "shift", "method"]
console.log(shiftmethod.shift())//Trying
console.log(shiftmethod)//after removing the first element it will give [ 'out', 'shift', 'method' ]

//Unshift
var Unshiftmethod = ["Trying", "out", "Unshift", "method"]
Unshiftmethod.unshift("Javascript:")
console.log(Unshiftmethod)//[ 'Javascript:', 'Trying', 'out', 'Unshift', 'method' ]

//reverse
var revmethod = ["Trying", "out", "reverse", "method"]
revmethod.reverse()
console.log(revmethod)//output :[ 'method', 'reverse', 'out', 'Trying' ]

//length
var revmethod = ["Trying", "out", "length", "method"]
console.log(revmethod.length);//output 4

//find
var fndmeth = [23, 54, 84, 20]
//find returns the value of the first element in an array that passes a test .
function greaternum(findmeth) {
  return findmeth < 30
}
console.log(fndmeth.find(greaternum))//output :23

//findIndexof
var fndIndexofmeth = [23, 54, 84, 20]
console.log(fndIndexofmeth.indexOf(54))//1

//filter
var marks = [34, 56, 78, 56, 90, 48, 35]
function checkmarks(marks) {
  return marks >= 35
}
console.log(marks.find(checkmarks))//output 56

//map
var level = [4, 9, 16, 25, 36]
function methodmap(level) {
  return Math.sqrt(level)
}
console.log(level.map(methodmap))//output: [ 2, 3, 4, 5, 6 ]

//slice
var methslice = ["Trying", "out", "slice", "method"]
function basic(methslice) {
  return methslice.slice(0, 3)

}
console.log(basic(methslice))

//splice
var splicemeth = ["Trying", "out", "slice", "method"]
splicemeth.splice(1, 2, "the", "splice")
console.log(splicemeth)

//sort
var srtmethod = [1, 6, 8, 5, 3, 2, 9, 4, 7]
srtmethod.sort()//will sort in ascending or alphabeticla order.
console.log(srtmethod)

//reduce
var methreduce = [35, 24, 21, 80]
function getsum(value,num) {
  return value +num
}
console.log(methreduce.reduce(getsum, 0))

//every
var methevery = [34, 90, 14, 18, 90, 45]
function ages(methevery) {
  return ages >= 18
}
console.log(methevery.every(ages))//every checks all the elemnts in array is greater than or equal to 18 if every value in array passes the condition it will return the true else return false

//some
var methsome = [8, 9, 10, 25, 24, 13]
function isage(methsome) {
  return methsome < 10
}
console.log(methsome.some(isage))

//includes
var state = ["TamilNadu", "Karnataka", "Andhara", "Maharastra", "Delhi"]
function country(state) {
  return state
}
console.log(state.includes("TamilNadu"))

//entries
var entrymeth = ["100", "500", "600", "300", "200"]
for ([index, value] of entrymeth.entries()) {
  console.log(index, value)
}

//indexof
var array = ["All", "is", "well"]
console.log(array.indexOf("is"))