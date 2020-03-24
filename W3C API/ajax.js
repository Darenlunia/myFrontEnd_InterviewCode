//手写简单的ajax：
function ajax(type,url,successFn,para){
    let xhr=new XMLHttpRequest()
    xhr.open(type,url,true) //type是get或post，true为确认异步
    xhr.onreadystatechange()=()=>{
        if(xhr.readyState==="4"){
            if(xhr.status==="200"){
                successFn(JSON.parse(xhr.responseText))//传回来的是字符串，转成JSON对象
            }else{
                console.log("错误状态")
            }
        }    
    }
    if(type==="post"){xhr.send(JSON.stringify(para))}
        else{xhr.send(null)}
}

//扩展版ajax，使用异步写ajax
function ajax2(type,url,para){//回调函数在then的时候使用
    //para是post请求的时候，传入的JSON对象
    return new Promise((resolved,reject)=>{
        let xhr=new XMLHttpRequest()
        xhr.open(type,url,true)
        xhr.onreadystatechange()=()=>{
            if(xhr.readyState==="4"){
                if(xhr.status==="200"){
                    resolved(xhr.responseText)
                }else if(xhr.status==="404"){
                    reject(new Error("404 not found!"))
                }
            }
        }
        if(type==="post"){xhr.send(JSON.stringify(para))}
        else{xhr.send(null)}
        //如果是post 就需要传参
    })
}

ajax2("GET","/a/b.json").then(res=>console.log(res)).catch(err=>console.log(err))
