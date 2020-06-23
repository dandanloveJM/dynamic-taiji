let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `
/*你好，我是一名前端新人
接下来我演示一下我的前端功底
首先我要准备一个div
*/
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*
接下来我把div变成一个八卦图
首先，先把div变成一个圆
**/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/**
八卦是阴阳形成的
一黑一白
**/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(252,252,252,1) 50%, rgba(13,0,0,1) 50%, rgba(0,4,5,1) 100%);
}
/*
加两个神秘小球
*/
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(252,252,252,1) 24%, rgba(13,0,0,1) 24%, rgba(0,4,5,1) 100%);

}
#div1::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,4,5,1) 0%, rgba(13,0,0,1) 24%, rgba(252,252,252,1) 24%, rgba(255,255,255,1) 100%);

}
`
let n = 0;
let string2=''

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            //如果是回车，就加上换行符
            string2 += '<br>'
        } else if (string[n] === " ") {
            //如果是空格，就用&nbsp转成html里的空格，这是为了实现在打印css时可以缩进
            string2 += '&nbsp;'
        } else {
            // 如果不是回车，就照搬
            string2 += string[n]
        }

        console.log(`str2 is ${string.substring(0,n)}`)
        html.innerHTML = string2
        style.innerHTML = string.substring(0,n)
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length-1) {
            //如果n不是最后一个就继续
            n+=1
            step();

        }
    }, 50)

}

step();



