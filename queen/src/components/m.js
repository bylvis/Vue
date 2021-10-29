var count = 0
var list = []
function queen(a, cur) {
    
    if (cur==a.length) { 
        console.log(a);
        count++ 
        return a; 
    }
    // 第一个循环 循环八次
    for (var i = 0; i < a.length; i++) {
        // 每次循环 分别是 a[0] = 01234567
        a[cur] = i;
        // flag 标记
        var flag = true;

        for (var j = 0; j < cur; j++) {
            var ab = i - a[j];
            if (a[j]==i||(ab>0?ab:-ab)==cur-j) { 
                flag=false; break 
            };
        };
        if (flag) { 
            if(cur == 7){
                console.log('a',a);
                temp = [...a]
                list.push(temp)
            }
            queen(a,cur+1); 
        }
           
    };
};
queen([1,1,1,1,1,1,1,1],0);
console.log(count-1);
console.log('list',list);
