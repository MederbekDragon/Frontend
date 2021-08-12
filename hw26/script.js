document.getElementById('check').onclick = function(){
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    if (login == 'meder' && password == '2021')
        alert("Welcome admin");
    else if (login != "meder")
        alert('wrong login');
    else if (password != '2021')
        alert('wrong password');

    else alert('Something went wrong');
};


function insert(num) {
    document.form.textview.value = 
    document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value  = exp.substring(0, 
    exp.length-1);
}

function equal() {
    var exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);
    }
} 
