import NavBarComponent from "./NavBar/NavBarComponent";

import { Route, Routes } from "react-router-dom";

import DisplayingData from "./DisplayingData/DisplayingData";

import LoginSuccess from "./LoginSuccess/LoginSuccess";

import DisplayResult from "./DisplayResults/DisplayResults";

// NOTE: This component is the container of all the sections required to display to a user who is logged in

const AfterSuccessfulLoginScreen = (props) => {
    return (
        <>
            <NavBarComponent logoutHandler={props.logoutHandler} />
            <Routes>
                <Route path='dishes'
                    element={<DisplayingData data={props.data} loggedIn={props.loggedIn} />}
                />
                <Route path='scores'
                    element={<DisplayResult data={props.data} loggedIn={props.loggedIn} />}
                />
                <Route path='*'
                    element={<LoginSuccess loggedIn={props.loggedIn} />}
                />
            </Routes>
        </>
    );
}

export default AfterSuccessfulLoginScreen;