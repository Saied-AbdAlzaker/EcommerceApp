const BASE_URL = `https://ecommerce.routemisr.com/api/v1`

export const AUTH = {
    signup: `${BASE_URL}/auth/signup`,
    signin: `${BASE_URL}/auth/signin`,
    forgetPassword: `${BASE_URL}/auth/forgotPasswords`,
    verifyCode: `${BASE_URL}/auth/verifyResetCode`,
    resetPassword: `${BASE_URL}/auth/resetPassword`,
}

export const DASHBOARD = {
    products: `${BASE_URL}/products`,
    categories: `${BASE_URL}/categories`,
    brands: `${BASE_URL}/brands`,
    cart:`${BASE_URL}/cart`,
    checkout:`${BASE_URL}/orders/checkout-session`,
    orders:`${BASE_URL}/orders/user`,
}
