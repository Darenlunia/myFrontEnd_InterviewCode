//写一个简单的promise
function loadImg(src){
    return new Promise((resolve,reject)=>{
        let img=document.createElement('img')
        img.src=src
        img.onload=()=>{
            resolve(img.width)
        }
        img.onerror=()=>{
            let err=new Error("图片加载失败"+src)
            reject(err)
        }
    })
}

let url="https://img1"
let url2="https://img2"

loadImg(url).then(loadImg(url2)).then((res)=>{console.log(res)}).catch(rej=>console.log(rej))
//注意，then中的参数中的第一个函数的参数是上一次promise返回的resolve的值。