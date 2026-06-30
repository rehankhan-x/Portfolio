const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        themeBtn.innerHTML = "🌞";
    }
    else{
        themeBtn.innerHTML = "🌙";
    }

});