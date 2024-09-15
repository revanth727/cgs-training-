


function calculateAge() {
    var birthdate = new Date(document.getElementById('birthdate').value);
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    var d = today.getDate() - birthdate.getDate();
    if (m < 0 || (m === 0 && d < 0)) {
        age--;
    }
    document.getElementById('result').innerHTML = 'You are ' + age + ' years old.';
}



