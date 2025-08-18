function validate(e) {
    // we prevent the default behavior of automatic  submition even if the values are not present
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');
    
    let message = '';
    if (email == '') {
        message = 'Please enter an email!';
        msgBox.style.color = 'red';

    }
    else if (pass == '') {
        message = 'Password must me 8 chrs long!';
        msgBox.style.color = 'red';

    }
    else if (age == '') {
        message = 'Age must be 12 to 50';
        msgBox.style.color = 'red';

    }
    else {
        message = 'Login Successful!';
        msgBox.style.color = 'green';
    }

    msgBox.innerHTML = message;
}