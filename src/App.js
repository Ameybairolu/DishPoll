import fetchData from "./NonReactBasedFunctions/fetchData";
import LoginDetailsCheck from "./NonReactBasedFunctions/LoginDetailsCheck";

import { useCallback, useEffect, useState } from "react";

import LoginScreen from "./LoginScreen/LoginScreen";
import AfterSuccessfulLoginScreen from "./AfterSuccessfulLoginScreen/AfterSuccessfulLoginScreen";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const loginDetails = useSelector(state => state);

  const [loggedInUser, setLoggedInUser] = useState({ bool: false, name: '' });

  const fetchDishData = useCallback(
    async () => {
      const receivedData = await fetchData();
      setData(receivedData);
    }
    , []
  );

  useEffect(() => {
    fetchDishData();
  }, [fetchDishData]);

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
      {!loggedInUser.bool && <LoginScreen submitHandler={onSubmitCheckDataHandler} />}
      {loggedInUser.bool && <AfterSuccessfulLoginScreen data={data} loggedIn={loggedInUser.name} logoutHandler={logoutClickHandler} />}
    </>

  );
}

export default App;
