import NavBarComponent from "./NavBar/NavBarComponent";

import { Route, Routes } from "react-router-dom";

import DisplayingData from "./DisplayingData/DisplayingData";

import LoginSuccess from "./LoginSuccess/LoginSuccess";

import DisplayResult from "./DisplayResults/DisplayResults";

const AfterSuccessfulLoginScreen = (props) => {
    // props: {data,loggedIn}
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