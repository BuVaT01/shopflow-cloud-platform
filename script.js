function loginUser(event){
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  if(username === "admin" && password === "admin123"){
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginMessage").innerText = "Login yoki parol noto‘g‘ri.";
  }
  return false;
}
