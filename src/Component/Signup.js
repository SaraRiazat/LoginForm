import React, { useState ,useEffect } from 'react';
import { validation } from './validation';

const SignUp = () => {

    const [data, setData] = useState({
        UserName: "",
        email: "",
        pass: "",
        confirmPass: "",
        isAccepted: false
    });

    const[touched,setTouched]=useState({});

    const [errors,setErrors]=useState({});

    useEffect(() => {
        setErrors(validation(data))
    }, [data, touched] )

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.chacked })
           
        }
        else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    const touchHandler=event=>{
        setTouched({...touched,[event.target.name]:true})
    }

    return (
        <div>
            <form>
                <h2> signup form </h2>
                <div>
                    <label>UserName</label>
                    <input type="text" name="UserName" value={data.UserName} onChange={changeHandler} onFocus={touchHandler}></input>
                    {errors.UserName && touched.UserName && <span>{errors.UserName}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} onChange={changeHandler} onFocus={touchHandler}></input>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input type="Password" name="pass" value={data.pass} onChange={changeHandler} onFocus={touchHandler}></input>
                    {errors.pass && touched.pass && <span>{errors.pass}</span>}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="Password" name="confirmPass" value={data.confirmPass} onChange={changeHandler} onFocus={touchHandler}></input>
                    {errors.confirmPass && touched.confirmPass && <span>{errors.confirmPass}</span>}
                </div>
                <div>
                    <label>I accept all provicy policy</label>
                    <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={touchHandler}></input>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div>
                    <a href=''>Login</a>
                </div>
                <div>
                    <input type="submit" name='submit' value="Sign in" onChange={changeHandler}></input>
                </div>
            </form>
        </div>
    );
};

export default SignUp;