let classes=JSON.parse(localStorage.getItem("classesData"));
let i=localStorage.getItem("classIndex");

let cls=classes[i];
document.getElementById("title").innerText=cls.name;

let html="";

// Teachers
cls.teachers.forEach(t=>{
  html+=`<div class="card">${t.name}<br>${t.subject}<br>${t.period}</div>`;
});

// Marks
let marks=JSON.parse(localStorage.getItem("marks"))||[];
marks.forEach(m=>{
  html+=`<div class="card">📊 ${m.name}: ${m.marks}</div>`;
});

// Attendance
let att=JSON.parse(localStorage.getItem("attendance"))||[];
att.forEach(a=>{
  html+=`<div class="card">📅 ${a.name}: ${a.days}</div>`;
});

document.getElementById("data").innerHTML=html;
