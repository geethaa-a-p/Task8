var myname ='GeethaaParameswaran'
//length of the string
console.log(myname.length)

//startswith 
var myname ='GeethaaParameswaran'
var nme=myname.startsWith("G")
console.log(nme)//output true

//endswith
var myname ='GeethaaParameswaran'
var methends=myname.endsWith("G")
console.log(methends)//output false

//toUppercase and lower case
var myname ='GeethaaParameswaran'
console.log(myname.toLowerCase())//output geethaaparameswaran
console.log(myname.toUpperCase())//output GEETHAAPARAMESWARAN

//concat
var a='Geethaa'
var b='A.P'
console.log(a.concat(b))//GeethaaA.P

//Split
var a='Geethaa is a bad girl'
console.log(a.split(" "))//[ 'Geethaa', 'is', 'a', 'bad', 'girl' ]

//reverse
var Revstr=["Geethaa", "isa","badgirl"]
console.log(Revstr.reverse());//output [ 'badgirl', 'isa', 'Geethaa' ]

// Join
var Revstr=["Geethaa", "isa","badgirl"]
var textjoin= Revstr.join();
console.log(textjoin)//badgirl,isa,Geethaa

//includes
var myname ='GeethaaParameswaran'
var inmeth=myname.includes('n')
console.log(inmeth)// output true


//slice
var slicearray=["Java","script","includes","string","methods"]
var ArraySlice= slicearray.slice(2,4)
console.log(ArraySlice)// output [ 'includes', 'string' ]

//indexof
var x='Java script'
console.log(x.indexOf("s"))//output 5

//replace
var y="Java script includes string methods"
var change=y.replace('t','p')
console.log(change)// output :Java scripp includes string methods

//replaceall
var z="Java script includes string methods"
console.log(z.replaceAll('t','p'))// output: Java scripp includes spring mephods

//trim
var xy='      Java script includes string methods '
console.log(xy.length)//output before trim:42
console.log(xy.trim())// output: Java script includes string methods
console.log(xy.trim().length)// output after trim:35

//lastIndexof
var yz="Java script is a scripting language"
console.log(yz.length)//35
console.log(yz.lastIndexOf('l'))//output : 27

//tostring
var str= new String('javascript')
console.log(typeof(str))// output  typeof before changing tostring:object
console.log(str.toString())//output: javascript
console.log(typeof(str.toString()))// output typeof after changing tostring: string

//substr or substring
var zx='JavaScript'
console.log(zx.substring(4))//output :Script