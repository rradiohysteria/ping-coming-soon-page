document.getElementById('email-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('useremail');
    const error_msg = document.getElementById('error-msg');
    const error_empty = document.getElementById('error-empty');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //reset message when script runs
    error_empty.classList.add('hidden');

    if (email.value == '') {
        return error_empty.classList.remove('hidden');
    }

    email.value == '' ? error_empty.classList.remove('hidden') : error_empty.classList.add('hidden');

    if (!emailRegex.test(email.value)) {
        error_msg.classList.remove('hidden');
        email.classList.add('error');
    } else {
        error_msg.classList.add('hidden');
        email.classList.remove('error');
    }
})