const classes = [];

for(let i=1;i<=12;i++){
  let teachers=[];
  for(let j=1;j<=3;j++){
    teachers.push({
      name:"Teacher "+j,
      subject:"Subject "+j,
      period:"Period "+j
    });
  }

  classes.push({name:"Class "+i,teachers});
}

localStorage.setItem("classesData",JSON.stringify(classes));

let html="";
classes.forEach((c,i)=>{
  html+=`<div class="card" onclick="openClass(${i})">${c.name}</div>`;
});

document.getElementById("classes").innerHTML=html;

function openClass(i){
  localStorage.setItem("classIndex",i);
  window.location.href="class-details.html";
}