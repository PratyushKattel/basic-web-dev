const submit_btn = document.querySelector('#submit-form')
const email_field = document.querySelector('#email')
const name_field = document.querySelector('#name')
const password_field = document.querySelector('#password')

function validateEmail() {
    const email = email_field.value.trim()
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (emailPattern.test(email)) {
        return true
    } else {
        console.log("Invalid email")
        return false
    }
}

function validateName() {
    const name = name_field.value.trim()

    if (name.length >= 3) {
        return true
    } else {
        console.log("Name must be at least 3 characters")
        return false
    }
}

function validatePassword() {
    const password = password_field.value.trim()

    if (password.length >= 6) {
        return true
    } else {
        console.log("Password must be at least 6 characters")
        return false
    }
}

submit_btn.addEventListener('click', (e) => {
    e.preventDefault()

    let em = validateEmail()
    let nm = validateName()
    let pw = validatePassword()

    if (em && nm && pw) {
        console.log("Form is valid and will be submitted")
    } else {
        console.log("Invalid form")
    }
})
