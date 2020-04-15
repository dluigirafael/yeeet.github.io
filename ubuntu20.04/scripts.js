function border(id) {

    if (document.getElementById(id).style.borderBottom === "") {
        document.getElementById(id).style.borderBottom = "solid #FF4623 2.5px"
    } else {
        document.getElementById(id).style.borderBottom = "";
    }
}

function clock() {

    let today = new Date();
    let date = today.getDate();
    let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    let month = months[today.getMonth()]
    let hour = today.getHours();
    let minute = today.getMinutes();
    if (minute < 10) {
        minute = "0" + minute
    };

    document.getElementById('time').innerHTML = ` ${month} ${date}&nbsp;&nbsp; ${hour}:${minute}`;
    setTimeout(clock, 30000);

}

function show(id , display) {
    if (document.getElementById(id).style.display === "") {
        document.getElementById(id).style.display = display;
        setTimeout(()=>{id.style.opacity = 1;id.style.transform = 'scale(1)';},0)
    } else {
        document.getElementById(id).style.display = "";
    }
}
