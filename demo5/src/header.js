import "./header.css"
let num  = 100
function Header(){
    let dom = document.getElementById("app")
    let btn = document.createElement("button")
    btn.innerText = "按钮"+num
    btn.onclick = create
    dom.appendChild(btn)
}
function create(){
    num++

    let dom = document.getElementById("app")
    let header = document.createElement("div")
    header.innerText = "我是头部" + num
    header.classList.add("header")
    dom.appendChild(header)
}
export default Header