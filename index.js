const container = document.querySelector('#container');
let data=JSON.parse(localStorage.getItem("newblog"));
for(let i in data){
   let heading=data[i].heading;
   let desc=data[i].desc;
   let div=document.createElement("div");
   div.classList.add("card");
   div.style.width="18 rem";
   div.innerHTML=`<div class="card-body">
   <h3 class="card-title">${heading}</h3>
   
   <p class="card-text">${desc}</p>
   <button class="delete">delete</button> 
   <button class="edit">Edit</button>
 </div>`
  container.appendChild(div);
  }
  const del=document.querySelectorAll(".delete");
let edit=document.querySelectorAll(".edit");
  const cards=document.querySelectorAll(".card");
  const headtag=document.querySelectorAll("h3");
  const para=document.querySelectorAll("p");
  for(let i=0;i<del.length;i++){
      del[i].addEventListener("click",()=>{
          let head=headtag[i].innerText;
          let desc=para[i].innerText;
          let newdata=[];
          for(let j in data){
              if(data[j].heading!=head && data[j].desc!=desc){
                   newdata.push(data[j]);
              }
          }
          localStorage.setItem("newblog",JSON.stringify(newdata));
          cards[i].remove();
      })
  }
  let editpageon=false;
  for(let i=0;i<edit.length;i++){
      edit[i].addEventListener("click",()=>{
         if(editpageon==false){
              let div=document.createElement("div");
              div.classList.add("editdiv");
        
               div.innerHTML=`<label for="h3">heading</label><input id="h3" value=${headtag[i].innerText}><br><br><label for="desc">description</label><textarea id="desc" row="10" col="30" placeholder=${para[i].innerText}></textarea><button id="update">Save</button>`
               container.appendChild(div);
               editpageon=true;
               document.querySelector("#update").addEventListener("click",()=>{
                for(let j in data){
                 if(data[j].heading==headtag[i].innerText && data[j].desc==para[i].innerText){
                     data[j].heading=document.querySelector(".editdiv input").value;
                     data[j].desc=document.querySelector(".editdiv textarea").value;
                     localStorage.setItem("newblog",JSON.stringify(data));

                 }
             }
   
                   headtag[i].innerText=document.querySelector(".editdiv input").value;
                   para[i].innerText=document.querySelector(".editdiv textarea").value;

                   document.querySelector(".editdiv").remove();
                   editpageon=false;
               })
         }
          
     })
  }
