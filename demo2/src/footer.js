import shuchang  from "./image/pic.jpeg"
console.log(shuchang)
function Footer(){
    let dom = document.getElementById("app")
    let img = document.createElement("img")
    img.src = shuchang
    dom.appendChild(img)
}
export default Footer
