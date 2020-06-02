function a(){
    let b=10;
    console.log("外层被执行了"+b)
    return function(){
        console.log("内层被执行了"+b)
    }
}
let c=a()//会执行外层函数，因此c直接被赋值了return的函数
let b=20;
c() 

function d(){
    let e=10;
    console.log("测试被执行了"+e)
}
let f=d()//如果没有闭包，这样赋值是没有意义的。
// f()//报错


//下面这个输出100
function print(fn){
    let g=100
    fn(g)//此时g不是自由变量
}
function fn(h){
    console.log(h)
}
let g=200 
print(fn)

// 下面的输出200
function print2(fn){
    let g2=100
    fn()
}
let g2=200
function fn2(){
    console.log(g2)
}
print2(fn2)