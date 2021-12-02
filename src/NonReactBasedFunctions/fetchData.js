import { URL } from "./magicData";

const fetchData = async () => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const result = await response.json();
        return result;

    } catch (e) {
        console.log(e);
    }
}

export default fetchData;