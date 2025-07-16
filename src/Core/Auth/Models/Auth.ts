export interface Register {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    phone: string;
}
export interface Login {
    email: string;
    password: string;
}
export interface ForgetPass {
    email: string;
}
export interface ResetCode {
    resetCode: number;
}
export interface ResetPass {
    email: string,
    newPassword: string
}