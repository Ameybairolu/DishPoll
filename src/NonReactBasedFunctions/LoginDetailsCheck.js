// NOTE: This function simply checks if the data entered by the user is correct

const LoginDetailsCheck = (obtainedUser, obtainedPassword, loginDetails) => {

    const filteredUser = loginDetails.filter(eachUser => {
        return eachUser.username === obtainedUser;
    })
    if (filteredUser.length === 1) {
        if (filteredUser[0].password === obtainedPassword) {
            return { bool: true, username_wrong: false };
        }
        return { bool: false, username_wrong: false };
    }

    return { bool: false, username_wrong: true };

}

export default LoginDetailsCheck;