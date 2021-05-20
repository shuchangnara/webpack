// import "@babel/polyfill";
new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log('执行定时器~');
      resolve('hello world');
    }, 1000);
  }).then(res=>{
    console.log(res);
  })
