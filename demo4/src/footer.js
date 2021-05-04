const shuchang = require("./image/pic.jpeg") 
require("./foot.scss")
console.log(shuchang.default)
function Footer(){
    let dom = document.getElementById("app")
    let img = document.createElement("img")
    img.src = shuchang.default
    img.classList.add("shuchang")
    dom.appendChild(img)
}
// export default Footer
module.exports = Footer