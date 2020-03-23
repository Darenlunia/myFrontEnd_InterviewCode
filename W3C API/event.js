//事件绑定
let but = document.getElementById('btn1')
but.addEventListener("click",(event)=>{
    console.log(event.target)
    console.log(event.nodeName)
    event.preventDefault()
    event.stopPropagation()
})

//事件委托-模拟瀑布流
let div1=document.getElementById('div1')
div1.addEventListener('click',(e)=>{
    console.log('i"m clicked')
    let target=e.target//获得真实的最上层的被点击的元素
    if(e.nodeName='A'){
        console.log('i"m '+target)
    }
})

//手写通用的事件绑定函数
function bindEvent(elem,type,selector,fn){
    if(fn==null){
        fn=selector
        selector=null
    }
    elem.addEventListener(type,e=>{
        let target
        if(selector){
            //需要代理
            target=e.target
            if(e.nodeName==selector){
                fn.call(target,e)
            }
        }else{
            //不需要代理
            fn(e)
        }
    })
}