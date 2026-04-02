<script>
function addNews(){
  let news = document.getElementById("newsInput").value;

  let allNews = JSON.parse(localStorage.getItem("news")) || [];
  allNews.push(news);

  localStorage.setItem("news", JSON.stringify(allNews));
  showNews();
}

function deleteNews(index){
  let allNews = JSON.parse(localStorage.getItem("news")) || [];
  allNews.splice(index,1);

  localStorage.setItem("news", JSON.stringify(allNews));
  showNews();
}

function showNews(){
  let allNews = JSON.parse(localStorage.getItem("news")) || [];
  let html = "";

  allNews.forEach((n,i)=>{
    html += `
      <div class="card">
        ${n}
        <br>
        <button onclick="deleteNews(${i})">❌ Delete</button>
      </div>
    `;
  });

  document.getElementById("newsList").innerHTML = html;
}

showNews();

function logout(){
  localStorage.removeItem("userRole");
  window.location.href = "login.html";<script>
function showData(){
  let marks = JSON.parse(localStorage.getItem("marks")) || [];
  let html = "";

  marks.forEach((m,i)=>{
    html += `<div class="card">
      ${m.name}: ${m.marks}
      <br><button onclick="deleteMarks(${i})">Delete</button>
    </div>`;
  });

  document.getElementById("marksList").innerHTML = html;

  let att = JSON.parse(localStorage.getItem("attendance")) || [];
  let html2 = "";

  att.forEach((a,i)=>{
    html2 += `<div class="card">
      ${a.name}: ${a.days}
      <br><button onclick="deleteAtt(${i})">Delete</button>
    </div>`;
  });

  document.getElementById("attList").innerHTML = html2;
}

function deleteMarks(i){
  let data = JSON.parse(localStorage.getItem("marks")) || [];
  data.splice(i,1);
  localStorage.setItem("marks", JSON.stringify(data));
  showData();
}

function deleteAtt(i){
  let data = JSON.parse(localStorage.getItem("attendance")) || [];
  data.splice(i,1);
  localStorage.setItem("attendance", JSON.stringify(data));
  showData();
}

showData();
</script>
}
</script>