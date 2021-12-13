export const validation =( data,type )=> {

    const errors = {};


    //    validation for username
    if (!data.UserName.trim()) {
        errors.UserName = "لطفا نام کاربری خود را وارد کنید"
    }

    else { delete errors.UserName }

    //    validation for email
    if (!data.email) {
        errors.email = "لطفا ایمیل خود را وراد کنید"
    }
    else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "ایمیل را به درستی وارد کنید"
    }
    else { delete errors.email }

    //    validation for password
    if (!data.pass) {
        errors.pass = "پسورد خود را وارد کنید"
    }
    else if (data.pass.lenght < 8) {
        errors.pass = "پسورد باید بیشتر از 8 کاراکتر باشد"
    }
    else { delete errors.pass
    }

    // validation for confirm password
    if (!data.confirmPass) {
        errors.confirmPass = "تایید پسورد خود را وارد کنید"
    }
    else if (data.confirmPass.lenght < 8) {
        errors.confirmPass = "تایید پسورد باید بیشتر از 8 کاراکتر باشد"
    }
    else if (data.pass !== data.confirmPass) {
        errors.confirmPass = "پسورد و تایید پسورد شما یکسان نیست"
    }
    else { delete errors.confirmPass }

    //validation for isaccepted checkbox
    if (data.isAccepted) { delete errors.isAccepted }
    else { errors.isAccepted = "قوانین را تایید کنید " }


    return errors;
}
