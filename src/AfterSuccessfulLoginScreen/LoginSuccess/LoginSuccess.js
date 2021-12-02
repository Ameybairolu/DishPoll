import classes from './LoginSuccess.module.css';

// NOTE: This is a simple page that simply welcomes the user after successful login

const LoginSuccess = (props) => {
    return (
        <div className={classes.common}>
            <h1>
                Hey {props.loggedIn}!
            </h1>
            <h3>
                Lets start voting!
            </h3>
        </div>
    );
}

export default LoginSuccess;