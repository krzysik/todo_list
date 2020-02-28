// Chowanie elementu listy
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Dodanie 'zaznaczenia' taska
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Ustawienie formatu daty
function dateTime() {
    var date = new Date();
    var year = date.getFullYear();
    var dat = date.getDate();
    var month = (date.getMonth() + 1);

    if (dat < 10) dat = "0" + dat;
    if (month < 10) month = "0" + month;
    var cur_day = dat + "-" + month + "-" + year;

    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return " - " + cur_day + " " + hours + ":" + minutes + ":" + seconds;
}

// Tworzenie nowego taska
function addTodo() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var text = document.createTextNode(inputValue + dateTime());
    li.appendChild(text);

    if (inputValue === '') {
        alert("Musisz wprowadzić nazwę tasku!");
    } else {
        document.getElementById("todoList").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    // Zamykanie taska
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
