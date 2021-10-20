import thenFS from 'then-fs'

// 不能保证
thenFS.readFile('./file/1.txt','utf-8').then(r1=>{console.log(r1);},err=>{console.log(err.message);})
thenFS.readFile('./file/2.txt','utf-8').then(r2=>{console.log(r2);},err=>{console.log(err.message);})
thenFS.readFile('./file/3.txt','utf-8').then(r3=>{console.log(r3);},err=>{console.log(err.message);})