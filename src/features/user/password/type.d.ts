declare module 'Models' {
  export interface ChangePassword {
    password?: string
    confirmPassword?: string
    oldPassword?: string
    newPassword?: string
    confirmNewPassword?: string
  }
}
