let loginButton = document.getElementById("logInButton");

loginButton.addEventListener("click", (e) => {
    
    e.preventDefault();

    window.location.href = 'viewRentalData.html';
})