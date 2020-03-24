//DOM优化
//方式有2。1、自设缓存(例如常量代替循环中每次都要计算的元素长度)
// 2、合并DOM结构操作 例如 批量插入新元素

//缓存
let plist=document.getElementsByTagName('p')
const length=plist.length//length就相当于一个缓存
for( let i=0;i<length;i++){
    //操作
}

//频繁操作合并为一次操作
let listNode=document.getElementById("lilist")
let frag=document.createDocumentFragment()
for(let i=0;i<10;i++){
    let li = document.createElement('li')
    li.innerHTML=i
    frag.appendChild(li)
}
listNode.appendChild(frag)

