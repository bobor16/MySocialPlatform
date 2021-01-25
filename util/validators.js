module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {};
    if (username.trim() === '') {
        errors.username = 'Username cant be empty'
    }
    if (email.trim() === '') {
        errors.username = 'email cant be empty'
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-Za-Z][2,9])$/
        if (!email.match(regEx)) {
            errors.email = 'Email must be a valid email address';
        }
    }
    if (password === '') {
        errors.password = 'Password cant be empty'
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Password must match';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};

module.exports.validateLoginInput = (username, password) => {
    const errors = {};
    if (username.trim() === '') {
        errors.username = 'Username cant be empty'
    }
    if (password.trim() === '') {
        errors.password = 'Password cant be empty'
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
}