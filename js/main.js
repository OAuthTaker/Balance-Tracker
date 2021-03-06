var ref = firebase.database().ref('balance');

ref.on('value', getData);

function getData(data) {
    var bal = data.val()
    document.querySelector(".amount").innerHTML = bal;
}

function add() {
    var bal = document.querySelector(".amount").innerHTML;
    var update = document.getElementById("update-amt").value;
    var newb = parseInt(bal) + parseInt(update)
    ref.set(newb)
}

function remove() {
    var bal = document.querySelector(".amount").innerHTML;
    var update = document.getElementById("update-amt").value;
    var newb = parseInt(bal) - parseInt(update)
    ref.set(newb)
}

function reset() {
    ref.set(0)
}

document.getElementById("remove").addEventListener('click', () => {
    document.getElementById("remove").classList.add("active");
    document.getElementById("add").classList.remove("active");
})
document.getElementById("add").addEventListener('click', () => {
    document.getElementById("add").classList.add("active");
    document.getElementById("remove").classList.remove("active");
})

document.getElementById("submit").addEventListener('click', () => {
    if (document.getElementById("update-amt").value != ''){
        if (document.getElementById("add").classList.contains("active"))
            add();
        else
            remove()
        document.getElementById("update-amt").value = ''
    }
    else {
        alert("Empty!!")
    }
})

document.getElementById("reset").addEventListener('click', reset)