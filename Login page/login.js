let submit = () => {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
  
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
  
    //    document.getElementById("name").value = "";
    //     document.getElementById("email").value = "";
    //     document.getElementById("password").value = "";
  
    if (name.value == "") {
      let messageName = document.getElementById("error_name");
      messageName.innerHTML = "Name is required";
    } else {
      document.getElementById("error_name").innerHTML = "";
    }
    if (email.value == "") {
      let emailMessae = document.getElementById("error1_email");
      emailMessae.style.color = "red";
      emailMessae.innerHTML = "Email is required";
    } else {
      document.getElementById("error1_email").innerHTML = "";
    }
    if (password.value == "") {
      let passwordMessage = document.getElementById("error1_password");
      passwordMessage.style.color = "red";
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
        // title: `Welcome to Website ${name}`,
        icon: "success",
        text: `Account Create successful! ${name.value}`,
      }).then(() => {
        name.value = "";
        email.value = "";
        password.value = "";
        location.href = "../login.html";
      });
    }
  };
  
  // login form functionality
  
  let loginForm = () => {
    let loginName = document.getElementById("login_name");
    let loginPassword = document.getElementById("login_password");
  
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
    let storeName = localStorage.getItem("name");
  
    // Reset error messages
    document.getElementById("loginErrorEmail").innerHTML = "";
    document.getElementById("loginErrorPassword").innerHTML = "";
  
    let isValid = true; // Flag to track validation status
  
    // Check if email is incorrect
    if (storedEmail !== loginName.value) {
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
      location.href = "../homePage"; // Redirect after user clicks OK
    });
  };