let submit = () => {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
  
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
  
    if (name.value == "") {
      let messageName = document.getElementById("error_name");
      messageName.style.color = "red";
      messageName.style.fontWeight = "600";
      messageName.innerHTML = "Name is required";
    } else {
      document.getElementById("error_name").innerHTML = "";
    }
    if (email.value == "") {
      let emailMessae = document.getElementById("error1_email");
      emailMessae.style.color = "red";
      emailMessae.style.fontWeight = "600";
      emailMessae.innerHTML = "Email is required";
    } else {
      document.getElementById("error1_email").innerHTML = "";
    }
    if (password.value == "") {
      let passwordMessage = document.getElementById("error1_password");
      passwordMessage.style.color = "red";
      passwordMessage.style.fontWeight = "700";
      passwordMessage.style.fontSize = "13px";
      passwordMessage.innerHTML = "Password id Required";
    } else {
      document.getElementById("error1_password").innerHTML = "";
    }
    if (password.value.length < 8) {
      let passwordMessage = document.getElementById("error1_password");
      passwordMessage.style.color = "red";
      passwordMessage.innerHTML = "Password must be at least 8 characters long";
    } else {
      document.getElementById("error1_password").innerHTML = "";
  
      Swal.fire({
        icon: "success",
        text: `Account Create successful! ${name.value}`,
      }).then(() => {
        name.value = "";
        email.value = "";
        password.value = "";
        location.href = "../Login page/login.html";
      });
    }
  };
  
  // login form functionality
  
  let loginForm = () => {
    let loginEmail = document.getElementById("login_email");
    let loginPassword = document.getElementById("login_password");
  
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
    let storeName = localStorage.getItem("name");
  
    // Reset error messages
    document.getElementById("loginErrorEmail").innerHTML = "";
    document.getElementById("loginErrorPassword").innerHTML = "";
  
    let isValid = true; // Flag to track validation status
  
    // Check if email is incorrect
    if (storedEmail !== loginEmail.value) {
      let loginErrorEmail = document.getElementById("loginErrorEmail");
      loginErrorEmail.innerHTML = "Incorrect Email";
      loginErrorEmail.style.color = "red";
      isValid = false;
    }
  
    // Check if password is incorrect
    if (storedPassword !== loginPassword.value) {
      let loginErrorPassword = document.getElementById("loginErrorPassword");
      loginErrorPassword.innerHTML = "Incorrect Password";
      loginErrorPassword.style.color = "red";
      isValid = false;
    }
    
    // Stop function if any validation failed
    if (!isValid) return;
  
    // Show success alert and then redirect
    Swal.fire({
      title: `Welcome to Website ${storeName}`,
      text: "Login successful!",
      icon: "success",
    }).then(() => {
        location.href = "../Home page/home-page.html";
      });
  };