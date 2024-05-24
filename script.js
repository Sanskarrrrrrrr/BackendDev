//how to use package/module
const fs = require('fs');//all power of fs from node is in fs
//write file,copy file,rename,append,unlink
/*
write file
fs.writeFile(file, data[, options], callback)
->new file, data , func/callback
fs.writeFile("hey bhai.txt","hey bhai aur bhi likho",function(err){
  if(err)console.log(err);
  else console.log("done");
})
*/
/*
append file
->file name,added data,callback
fs.appendFile("hey bhai.txt"," likh diya bhai",function(err){
  if(err)console.log(err);
  else console.log("done");
})
*/
/*
rename a file
->old file name,new file name,callback
fs.rename("hey bhai.txt","hello bhai.txt",function(err){
  if(err)console.error(err);
  else console.log("done");
})
*/
//copy file
fs.copyFile("hello bhai.txt","./copy/chachat.txt",function(err){
  if(err)console.log(err);
  else console.log("done");
})



