//一个简单的curry封装
function curry(fn,...args){
    let _args=args//获得目前传给了fn的部分参数
    let _this=this
    return function(...rest){//后面调用的时候会传入剩余的参数
        let newArgs=_args.concat(rest)//将所有参数合并
        console.log(newArgs)
        return fn.apply(_this,newArgs)//把合并后的参数通过apply作为fn的参数执行。
    }
}
function add(){//累加
    let sum=0
    console.log(Array.from(arguments).reduce((a,b)=>{return a+b}))
}
// let a=curry(add,1,3)
// a(2,6)


//上面的柯里化比较简单，无法解决多参数调用。下面改进一下。
//这里限制一个fn的传参个数，当传入的参数等于fn应该传入的参数时候就调用fn，否则递归收集参数
let curry2=function(fn,...args){
    let len=fn.length//这是fn的实际参数个数
    console.log(args)
    let _args=args
    let _this=this
    return function(){
        let newArgs=_args.concat(Array.from(arguments))
        if(newArgs.length===len){
            console.log("dsfdaf:"+newArgs)
            return fn.call(_this,...newArgs)
        }else{
            return curry2.call(_this,fn,...newArgs)//注意这里的newArgs是数组，传入call的时候要打散，不然出错
        }
    }
}

function fn1(x,y,z){//设置成接收三个参数
    let sum=x*y+z
    console.log(sum)
}
let x=curry2(fn1)(1)(2)(3)

//下面一个常见面试题
// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.from(arguments);

    var _adder = function() { //因为要为它重写toString，因此要显示写出这个返回函数
        _args.push(...arguments);
        return _adder;
    };
    //重写toString，在toString中隐写相加函数。 
    //利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)                // 9
