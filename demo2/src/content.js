function Content(){
    let dom = document.getElementById("app")
    let content = document.createElement("div")
    content.innerText = "我是内容"
    dom.appendChild(content)
}
export default Content