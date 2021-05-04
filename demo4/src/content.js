function Content(){
    let dom = document.getElementById("app")
    let content = document.createElement("div")
    content.innerText = "我是内容"
    content.classList.add("header")
    dom.appendChild(content)
}
export default Content