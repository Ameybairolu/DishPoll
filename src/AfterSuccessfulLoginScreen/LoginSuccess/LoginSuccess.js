import classes from './LoginSuccess.module.css';

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