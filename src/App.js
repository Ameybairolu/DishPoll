import fetchData from "./NonReactBasedFunctions/fetchData";
import LoginDetailsCheck from "./NonReactBasedFunctions/LoginDetailsCheck";

import { useCallback, useEffect, useState } from "react";

import LoginScreen from "./LoginScreen/LoginScreen";

function App() {

  const [data, setData] = useState([]);

  const [loggedInUser, setLoggedInUser] = useState({ bool: false, name: null });

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

  console.log(data);

  const onSubmitCheckDataHandler = (obtainedUser, obtainedPass) => {
    const checkData = LoginDetailsCheck(obtainedUser, obtainedPass);
    console.log(checkData);
    if (!checkData.bool) {
      if (checkData.username_wrong) {
        window.alert("Please check your username");
      }
      else {
        window.alert("Please check your password");
      }
    } else {
      setLoggedInUser({ bool: true, name: obtainedUser });
    }
  }

  return (
    <>
      {!loggedInUser.bool && <LoginScreen submitHandler={onSubmitCheckDataHandler} />}
    </>

  );
}

export default App;
