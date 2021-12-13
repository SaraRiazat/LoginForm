import React, { useState } from 'react';

const SignUp = () => {

    const [data, setData] = useState({
        UserName: "",
        email: "",
        pass: "",
        confirmPass: "",
        isAccepted: false
    })

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.chacked })
        }
        else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
        console.log(event.target.value)
    }

    return (
        <div>
            <form>
                <h2> signup form </h2>
                <div>
                    <label>UserName</label>
                    <input type="text" name="Username" value={data.UserName} onChange={changeHandler}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} onChange={changeHandler}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="Password" name="Pass" value={data.pass} onChange={changeHandler}></input>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="Password" name="confirmPass" value={data.confirmPass} onChange={changeHandler}></input>
                </div>
                <div>
                    <label>I accept all provicy policy</label>
                    <input type="checkbox" name="Accept" value={data.isAccepted} onChange={changeHandler}></input>
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