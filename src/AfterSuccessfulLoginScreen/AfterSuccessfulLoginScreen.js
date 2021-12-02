import NavBarComponent from "./NavBar/NavBarComponent";

import { Route, Routes } from "react-router-dom";

const AfterSuccessfulLoginScreen = () => {
    return (
        <>
            <NavBarComponent />
            <Routes>
                <Route path='tabone'
                    element={<h1>First</h1>}
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