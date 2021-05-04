import "./header.css"
import "./icon/iconfont.css"
function Header(){
    let dom = document.getElementById("app")
    let header = document.createElement("div")
    let icon = document.createElement("span")
    header.innerText = "我是头部"
    header.classList.add("header")
    icon.className = "iconfont icon-dengpao1"
    dom.appendChild(header)
    dom.appendChild(icon)
}
export default Header