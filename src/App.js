import fetchData from "./NonReactBasedFunctions/fetchData";

import { useCallback, useEffect, useState } from "react";

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
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
