import fetchData from "./NonReactBasedFunctions/fetchData";

import { useCallback, useEffect, useState } from "react";

import LoginScreen from "./LoginScreen/LoginScreen";

function App() {

  const [data, setData] = useState([]);

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

  return (
    <LoginScreen />
  );
}

export default App;
