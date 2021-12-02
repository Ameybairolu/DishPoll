import NavBarComponent from "./NavBar/NavBarComponent";

import { Route, Routes } from "react-router-dom";

import DisplayingData from "./DisplayingData/DisplayingData";

const AfterSuccessfulLoginScreen = (props) => {
    // props: {data,loggedIn}
    return (
        <>
            <NavBarComponent />
            <Routes>
                <Route path='tabone'
                    element={<DisplayingData data={props.data} loggedIn={props.loggedIn} />}
                />
                <Route path='tabtwo'
                    element={<h1>Second</h1>}
                />
                <Route path='*'
                    element={<h1>Hey man</h1>}
                />
            </Routes>
        </>
    );
}

export default AfterSuccessfulLoginScreen;