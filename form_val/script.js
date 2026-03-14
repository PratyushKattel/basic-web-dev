const submit_btn = document.querySelector('#submit-form')
const email_field = document.querySelector('#email')
const name_field = document.querySelector('#name')
const password_field = document.querySelector('#password')
const error_div = document.querySelector('#error')

// Error state object to track all current errors
let errors = {
    email: null,
    name: null,
    password: null
}

// Validation functions that return error message or null
function validateEmail() {
    const email = email_field.value.trim()
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (email === '') {
        return 'Email is required'
    }
    if (!emailPattern.test(email)) {
        return 'Invalid email format'
    }
    return null
}

function validateName() {
    const name = name_field.value.trim()

    if (name === '') {
        return 'Name is required'
    }
    if (name.length < 3) {
        return 'Name must be at least 3 characters'
    }
    return null
}

function validatePassword() {
    const password = password_field.value.trim()

    if (password === '') {
        return 'Password is required'
    }
    if (password.length < 6) {
        return 'Password must be at least 6 characters'
    }
    return null
}

// Display all errors dynamically
function displayErrors() {
    error_div.innerHTML = ''
    
    // Check if there are any errors
    const hasErrors = Object.values(errors).some(error => error !== null)
    
    if (!hasErrors) {
        error_div.style.color = 'green'
        return
    }
    
    // Build error list
    error_div.style.color = 'red'
    for (const [field, errorMessage] of Object.entries(errors)) {
        if (errorMessage !== null) {
            const errorItem = document.createElement('div')
            errorItem.textContent = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${errorMessage}`
            errorItem.style.marginBottom = '8px'
            error_div.appendChild(errorItem)
        }
    }
}

// Real-time validation on input
email_field.addEventListener('input', () => {
    errors.email = validateEmail()
    displayErrors()
})

name_field.addEventListener('input', () => {
    errors.name = validateName()
    displayErrors()
})

password_field.addEventListener('input', () => {
    errors.password = validatePassword()
    displayErrors()
})

// Form submission
submit_btn.addEventListener('click', (e) => {
    e.preventDefault()

    // Validate all fields
    errors.email = validateEmail()
    errors.name = validateName()
    errors.password = validatePassword()

    // Display errors
    displayErrors()

    // Check if form is valid
    const isValid = Object.values(errors).every(error => error === null)
    
    if (isValid) {
        console.log("Form is valid and will be submitted")
        alert("Form submitted successfully!")
        // Here you could send the form data to a server
        // form.submit() or send via fetch/axios
    } else {
        console.log("Invalid form")
    }
})
