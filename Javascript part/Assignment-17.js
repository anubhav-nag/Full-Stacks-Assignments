const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const container = document.querySelector(".container")
const date = document.getElementById("date");

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);


function showTime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todayDate = today.toDateString();
    let amPm = hour > 12 ? 'PM' : 'AM';
    if (hour < 12){
        container.classList.add('morning');
        greeting.innerHTML = "Good Morning"
    }
    else if(hour > 12 & hour < 16){
        container.classList.remove('morning');
        container.classList.add('afternoon');
        greeting.innerHTML = "Good Afternoon";
        
    }
    else if(hour >= 16 & hour < 19 ){
        container.classList.remove('afternoon');
        container.classList.add('evening')
        greeting.innerHTML = "Good Evening";
        
    }
    else{
        container.classList.remove('evening');
        container.classList.add('night');
        greeting.innerHTML = "Good Night";
      
    }

    hour = hour%12 || 12;
    time.innerHTML = `${(parseInt(hour,10) > 9 ? '' : '0')+hour}:${(parseInt(min,10) > 9 ? '' : '0')+min}:${(parseInt(sec,10) > 9 ? '' : '0')+sec} ${amPm}`;
    date.innerHTML = `${todayDate}`;
    setTimeout(showTime, 1000);

    


}

function getName(){
    if (localStorage.getItem("name") === null){
        name.innerHTML = "[Enter Your Name]";
    }
    else{
        name.innerHTML = localStorage.getItem("name");
    }
}

function setName(e){
    if(e.type === "keypress"){
        if(e.keyCode === 13){
            {
                localStorage.setItem("name", e.target.innerHTML);
                name.blur();

        }
    }
    else{
        localStorage.setItem("name", e.target.innerHTML);
    }
 }
}

showTime();
getName();
setName();