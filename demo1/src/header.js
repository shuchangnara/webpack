function Header(){
    let dom = document.getElementById("app")
    let header = document.createElement("div")
    header.innerText = "我是头部"
    dom.appendChild(header)
}
export default Header