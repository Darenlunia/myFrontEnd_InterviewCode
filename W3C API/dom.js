//节点操作API 
//node 获得元素或元素集合
let p1=document.getElementById('p1')
let div1=document.getElementsByClassName('div')[0]
document.getElementsByTagName
document.querySelector
//property
p1.style.width
p1.className
p1.nodeName
p1.nodeType
p1.nodeValue
//attribute
p1.setAttribute("style","font-size:10px")
p1.getAttribute('data=naeme')
//结构操作API  增删
let p2=document.createElement('p')
p2.innerHTML="hello"
div1.append(p2)

p2.parentElement()
div1.children()
let childs=div1.childNodes()
let divChildNodes=[].slice.call(div1.childNodes).filter(
    child=>{
        if(chile.nodeType===1){
            return true
        }
        else return false
    }
)

div1.remove(childs[0])

