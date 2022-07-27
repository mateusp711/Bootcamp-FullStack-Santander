const button = document.getElementById("mode-selector");
const everything = document.getElementsByTagName("body")[0];
const h1 = document.getElementById("page-title"); 


button.addEventListener("click", toggleDark); 

function toggleDark() {
    changeClasses();
    changeText();
    
}

function changeClasses() {
    button.classList.toggle("dark-mode");
    everything.classList.toggle("dark-mode");
}

function changeText() {
    if(everything.classList.contains("dark-mode")){
        button.innerHTML = "Dark Mode";
        h1.innerHTML = "Dark Mode ON";
    }
    else {
        button.innerHTML ="Light Mode";
        h1.innerHTML = "Light Mode ON";
    }
}