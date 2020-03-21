//闭包完成一个缓存区
function cache(){
    data={}
    return {
        set:(k,v)=>{
            data[k]=v
        },
        get:(k)=>{
            return data[k]
        }

    }//注意这个返回值是函数组成的对象，也是闭包
}

let a=cache()
a.set('x',1)
console.log(a.get('x'))