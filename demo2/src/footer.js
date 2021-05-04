const shuchang = require("./image/pic.jpeg") 
console.log(shuchang.default)
function Footer(){
    let dom = document.getElementById("app")
    let img = document.createElement("img")
    img.src = shuchang.default
    dom.appendChild(img)
}
// export default Footer
module.exports = Footer