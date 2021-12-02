import { URL } from "./magicData";

//NOTE: This is a pure JS function for fetching data 

const fetchData = async () => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw response.status;
        }
        const result = await response.json();
        return result;

    } catch (e) {
        console.log();
        return e;
    }
}

export default fetchData;