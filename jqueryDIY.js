//手写jQuery
//封装两个jQuery常用方法
console.log("test")
class jQuery{
    constructor(selector){
        let result=document.querySelectorAll(selector)
        this.length=result.length
        for(let i=0;i<this.length;i++){
            this[i]=result[i]
        }
        this.selector=selector
    }
    get(index){
        return this[index]
    }
    each(fn){
        for(let i=0;i<this.length;i++){
            const elment=this[i]
            fn(elment)
        }
    }
    on(type,fn){
        return this.each(elem=>{
            elem.addEventListener(type,fn,false)
        })
    }
}


//可以在浏览器的控制台直接执行,在此处不能执行
const $p=new jQuery('p')
console.log($p)
console.log($p.get(1),$p[1])
console.log($p.each(e=>console.log(e)))
console.log($p.on('click',()=>alert('clicked')))


//扩展性延展：

//插件方式：
jQuery.prototype.dialog(info)=function{
    alert(info)
}

//“造轮子方式”
class myJQuery extends jQuery{
    constructor(selector){
        super(selector)
    }
    //扩展自己的方法
    addFunction(para){

    }
}