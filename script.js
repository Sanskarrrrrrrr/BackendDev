//fundamentals of js
var arr = [1,2,3,4,5]
//for each
arr.forEach(function(val){
    console.log(val + "hello");
})
// map - returns a new arr with the size of given arr
var ans = arr.map(function(val){

    return (val*3+1);
})
console.log(ans);
//filter : if we have to make a new arr with size<= original size
//then we tend to use the new arr...filter original arr ko change nhi krta

var newans = ans.filter(function(val){
   if(val%2==0){
    return true;
   }else return false;
})
console.log(newans);
//find : to find something in arr,first index only(pehle jo aya)

var narr = ans.find(function(val){
    if(val === 16){
        return val;
    }
})
console.log(narr);
//indexOf
var idx = ans.indexOf(2);//gives -1 if doesnt exist
var idx2 = ans.indexOf(16);//gives the idx if exist
console.log(idx,idx2)

//OBJECTS : key-value pairs must have - {} "" : 

var obj = {
    name : "sanskar",
    age : 22
}
console.log(obj['name']);
//to not allow obj value changes,we can freeze it
//Object.freeze(obj);

function abcd(a,b,c){}
//functions are basically objects,so no of params = size of function

///FUNCTIONS

function abc(){
    return 10;
}
console.log(abc());

//async js coding
var blg = await fetch(`https://randomuser.me/api/`);
var res = await blg.json();
console.log(res);

//sync js coding = the line by line code excution
//the code of async nature must be kept in side stack and sync code must be executed
//till all the code ends,then check side stack if async code is complete or not,if
//it is completed then move it to main stack and execute
//fetch - async by nature cause it might take time to fetch from url etc
async function ab(){
   var blob = await fetch();
   var ans = await blob.json();
   return ans;
}

