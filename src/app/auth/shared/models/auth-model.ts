export class LoginRequestModel {
    public username = ''
    public password = ''
}

export class LoginResponseModel {
    public username = ''
    public fullName = ''
    public id = ''
    public accessToken = ''
}

export class RegisterRequestModel {
    public password = ''
    public fullName = ''
    public username = ''
    public email = ''
}

export class RegisterResponseModel {
    // public temporaryToken = ''
}

export class VerifyOtpRequestModel {
    public otp = ''
}

export class EditProfileRequestModel {
    public fullname = ''
    public email = ''
}

export class ChangePasswordRequestModel {
    public oldPassword = ''
    public newPassword = ''
}

export class ForgotPasswordRequestModel {
    public email = ''
}

export class ResetPasswordRequestModel {
    public code = ''
    public newPassword = ''
}
