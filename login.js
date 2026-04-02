function login(){
  let role = document.getElementById("role").value;
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if(role==="student" && u==="student" && p==="123"){
    localStorage.setItem("userRole","student");
    window.location.href="welcome.html";
  }
  else if(role==="teacher" && u==="teacher" && p==="456"){
    localStorage.setItem("userRole","teacher");
    window.location.href="teachers.html";
  }
  else if(role==="admin" && u==="admin" && p==="000"){
    localStorage.setItem("userRole","admin");
    window.location.href="admin.html";
  }
  else{
    document.getElementById("error").innerText="❌ Wrong Login!";
  }
}