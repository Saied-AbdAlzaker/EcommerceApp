export const nameValidation = {
    required: "Name is required"
}

export const emailValidation = {
    required: "Email is required",
    pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Email is invalid"
    }
}

export const phoneValidation = {
    required: "Phone is required",
    pattern: {
        value: /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g,
        message: "Phone is invalid"
    }
}

export const passwordValidation = {
    required: "Password is required",
    pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        message: "Password is invalid"
    }
}

export const resetCodeValidation = {
    required: "Code is required",
}

