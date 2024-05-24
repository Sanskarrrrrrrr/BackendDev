//how to use package/module
const fs = require('fs');//all power of fs from node is in fs
//write file,copy file,rename,append,unlink


/*
write file
fs.writeFile(file, data[, options], callback)
->new file, data , func/callback
*/
// fs.writeFile("hey.txt","hey bhai aur bhi likho",function(err){
//   if(err)console.log(err);
//   else console.log("done");
// })
/*


append file
->file name,added data,callback
*/
// fs.appendFile("hey.txt"," likh diya bhai",function(err){
//   if(err)console.log(err);
//   else console.log("done");
// })
/*


rename a file
->old file name,new file name,callback
*/
// fs.rename("hey.txt","hehe.txt",function(err){
//   if(err)console.error(err);
//   else console.log("done");
// })


//copy file
//hehe bhai ko copy.txt karke copy folder me
//err is there to give the err msg if wrong copying file loc is given ie /copy/...
// fs.copyFile("hehe.txt","./copy/copy.txt",function(err){
//   if(err)console.log(err);
//   else console.log("done");
// })

// fs.writeFile("delete.txt","hey bhai aur bhi likho",function(err){
//   if(err)console.log(err);
//   else console.log("done");
// })

//unlink - delete a file
// fs.unlink("delete.txt",function(err){
//   if(err)console.log(err);
//   else console.log("removed");
// })

//rmdir - remove director(only to remove blank folder by default,not a folder with data)
//(path,[,options],callback)
//use rm for new nodejs instead of rmdir
// fs.rm("./Naya",{recursive:true},function(err){
//   if(err)console.log(err);
//   else console.log("removed");
// })

//creat folder
//fs.mkdir(path[, options], callback)
// fs.mkdir("./Naya",{ recursive: true },function(err){
//   if(err)console.log(err);
//   else console.log("ban gya");
// })

//read a folder
//fs.readFile(path[, options], callback)
//options me specify krna hoga type of data contennts in file
//
// fs.readFile("hehe.txt",'utf8',function(err,data){
//   if(err)console.log(err);
//   else console.log(data);
// })







