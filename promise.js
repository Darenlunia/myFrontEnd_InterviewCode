// //写一个简单的promise案例
// function loadImg(src){
//     return new Promise((resolve,reject)=>{
//         let img=document.createElement('img')
//         img.src=src
//         img.onload=()=>{
//             resolve(img.width)
//         }
//         img.onerror=()=>{
//             let err=new Error("图片加载失败"+src)
//             reject(err)
//         }
//     })
// }

// let url="https://img1"
// let url2="https://img2"

// loadImg(url).then(loadImg(url2)).then((res)=>{console.log(res)}).catch(rej=>console.log(rej))
// //注意，then中的参数中的第一个函数的参数是上一次promise返回的resolve的值。

//promise源码简单实现
const PNEDING='pending'
const RESOLVED='funfilled'
const REJECTED='rejected'

function MyPromsie(fn){
    const that=this;
    that.value=null
    that.state=PNEDING
    that.resolvedCallbacks=[]
    that.rejectedCallbacks=[]

    //resolve
    function resolve(value){
        if(value instanceof MyPromsie){
            return value.then(resolve,reject)//递归，如果resolve的值是一个Promise对象的话，返回的值是这个对象的resolve值。
        }
        setTimeout(()=>{
            if(that.state===PENDING){
                that.state=RESOLVED;
                that.value=value;
                that.resolvedCallbacks.forEach(cb=>cb(that.value)) //执行回调
            }
        },0)
    }
    function reject(value){
        setTimeout(()=>{
            if(that.state===PENDING){
                that.state=REJECTED
                that.value=value
                that.rejectedCallbacks.forEach(cb=>cb(that.value))
            }
        },0)
    }
    try{
        fn(resolve,reject)
    }catch{
        reject(e)
    }
}
//实现then
MyPromsie.prototype.then=function(onFulfilled,onRejected){
    const that=this
    onFulfilled = typeof onFulfilled==='function'?onFulfilled:v=>v;
    onRejected=typeof onRejected==='function'?onRejected:v=>{throw v};
    if(that.state===PENDING){
        that.resolvedCallbacks.push(onFulfilled)
        that.rejectedCallbacks.push(onRejected)
    }
    if(that.state===RESOLVED){
        onFulfilled(that.value)
    }
    if(this.state===REJECTED){
        onRejected(that.value)
    }

}
