//手写bind
Function.prototype.bind1=function(t,...arg){
    self=this
    return function(){
        self.apply(t,arg)
    }//注意这里是个闭包，t和arg都是bind1中的值。
}   
a={x:1,y:2}
function bign(n){
    console.log(this)
    console.log(n)
}
let b=bign.bind1(a,3)
b()
// bign.apply(a,[2])

