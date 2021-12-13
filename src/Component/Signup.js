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

    const [errors,setErrors]=useState({});

    useEffect(() => {
        setErrors(validation(data))
    }, [data] )

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ... data, [event.target.name]: event.target.chacked })
           
        }
        else {
            setData({ ... data, [event.target.name]: event.target.value })
        }
        console.log(data)
    }

    return (
        <div>
            <form>
                <h2> signup form </h2>
                <div>
                    <label>UserName</label>
                    <input type="text" name="UserName" value={data.UserName} onChange={changeHandler}></input>
                    {errors.UserName && <span>{errors.UserName}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} onChange={changeHandler}></input>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input type="Password" name="pass" value={data.pass} onChange={changeHandler}></input>
                    {errors.pass && <span>{errors.pass}</span>}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="Password" name="confirmPass" value={data.confirmPass} onChange={changeHandler}></input>
                    {errors.confirmPass && <span>{errors.confirmPass}</span>}
                </div>
                <div>
                    <label>I accept all provicy policy</label>
                    <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler}></input>
                    {errors.isAccepted && <span>{errors.isAccepted}</span>}
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