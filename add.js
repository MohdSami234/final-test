const heading = document.querySelector('#heading');
const desc = document.querySelector('#desc');
const button = document.querySelector('#button');

button.addEventListener("click",(e)=>{
      let data=JSON.parse(localStorage.getItem("newblog"));
      data.push({heading:heading.value,desc:desc.value});
      localStorage.setItem("newblog",JSON.stringify(data));
      window.location.replace("index.html");
  })
   



