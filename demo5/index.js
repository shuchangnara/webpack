import header from "./src/header.js";
// import footer from "./src/footer.js"
import content from "./src/content.js"
// const footer = require("./src/footer.js")

new header()
new content()

if (module.hot) {
    module.hot.accept('./src/content.js', function() {
      console.log('Accepting the updated printMe module!');
      new content()

    })
  }
// new footer()
