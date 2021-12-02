import { useRef } from 'react';
import classes from './LoginScreen.module.css'

const LoginScreen = (props) => {

    const inputUser = useRef(null);
    const inputPassword = useRef(null);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(inputUser.current.value);
        const user = inputUser.current.value;
        const pass = inputPassword.current.value;
        if (user.length === 0 || pass.length === 0) {
            if (user.length === 0) {
                inputUser.current.focus();
            }
            else {
                inputPassword.current.focus();
            }
        }
        else {
            props.submitHandler(user, pass);
        }

    }

    return (
        <div className={classes.formContainer}>
            <div className={classes.boxshadow}>
                <form className={classes.form} onSubmit={onSubmitHandler.bind(this)}>
                    <h1>Login</h1>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="username" >Username: </label></td>
                                <td><input id="username" ref={inputUser} placeholder="Enter username" required /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="password" >Password: </label>
                                </td>
                                <td><input id="password" ref={inputPassword} type="password" placeholder="Enter password" required /></td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ textAlign: 'center' }}>
                                    <button type="submit">Login</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />

                </form>
            </div>
        </div>
    )
}

export default LoginScreen;