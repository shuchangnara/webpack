function Footer(){
    let dom = document.getElementById("app")
    let footer = document.createElement("div")
    footer.innerText = "我是底部"
    dom.appendChild(footer)
}
// export default Footer
module.exports = Footer