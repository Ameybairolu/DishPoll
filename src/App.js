import fetchData from "./NonReactBasedFunctions/fetchData";
import LoginDetailsCheck from "./NonReactBasedFunctions/LoginDetailsCheck";

import { useCallback, useEffect, useState } from "react";

import LoginScreen from "./LoginScreen/LoginScreen";
import AfterSuccessfulLoginScreen from "./AfterSuccessfulLoginScreen/AfterSuccessfulLoginScreen";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  // NOTE: Data received from the API is stored in data 
  const [data, setData] = useState([]);

  // NOTE: To get all user data
  const loginDetails = useSelector(state => state);

  // NOTE: The gotError state gets error if thrown at the time of data fetching
  const [gotError, setErrorState] = useState(null);

  // NOTE: This state is required to get the state of the userlogin and username

  const [loggedInUser, setLoggedInUser] = useState({ bool: false, name: '' });

  const fetchDishData = useCallback(
    async () => {
      const receivedData = await fetchData();
      if (typeof receivedData === 'number') {
        setErrorState(receivedData);
      } else {
        setData(receivedData);
      }
    }
    , []
  );

  useEffect(() => {
    fetchDishData();
  }, [fetchDishData]);

  // NOTE: When the login form is properly filled, the below function is triggered

  const onSubmitCheckDataHandler = (obtainedUser, obtainedPass) => {
    const checkData = LoginDetailsCheck(obtainedUser, obtainedPass, loginDetails);
    if (!checkData.bool) {
      if (checkData.username_wrong) {
        window.alert("Please check your username");
      }
      else {
        window.alert("Please check your password");
      }
    } else {
      setLoggedInUser({ bool: true, name: obtainedUser });
      navigate('/home');
    }
  }

  const logoutClickHandler = () => {
    setLoggedInUser({ bool: false, name: '' });
  };

  return (
    <>
      {gotError && <div style={{
        textAlign: 'center',
        width: "100vw",
        height: "100vh",
        display: 'flex',
        alignItems: 'center'
      }}
      ><h1>Error: {gotError} Please try again later</h1></div>}

      {!gotError && !loggedInUser.bool && <LoginScreen submitHandler={onSubmitCheckDataHandler} />}
      {!gotError && loggedInUser.bool && <AfterSuccessfulLoginScreen data={data} loggedIn={loggedInUser.name} logoutHandler={logoutClickHandler} />}
    </>

  );
}

export default App;
