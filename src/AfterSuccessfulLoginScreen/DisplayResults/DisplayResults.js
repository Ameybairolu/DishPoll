import DisplayEachRow from "./DisplayEachRow/DisplayEachRow";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const DisplayResults = (props) => {

    const loginDetails = useSelector(state => state);

    const [finalScores, setFinalScores] = useState([]);

    const dataWithPointsField = props.data.map(eachItem => {
        return { ...eachItem, point: 0 };
    });
    useEffect(() => {
        const points = new Array(31).fill(0);
        loginDetails.map(eachUser => {
            points[eachUser.first] += 30;
            points[eachUser.second] += 20;
            points[eachUser.third] += 10;
            return eachUser;
        });

        const result = dataWithPointsField.map((eachItem, index) => {
            const updatedField = eachItem;
            updatedField.point = points[index + 1];
            return updatedField;

        });

        const sortedResult = result.sort((firstDish, secondDish) => {
            if (firstDish.point < secondDish.point) {
                return 1;
            }
            if (firstDish.point > secondDish.point) {
                return -1;
            }
            return 0;
        })

        setFinalScores(sortedResult);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div>
                {finalScores.map((eachItem, index) => {
                    return <DisplayEachRow key={`item#${eachItem.id}`} itemInfo={eachItem} loggedIn={props.loggedIn} points={eachItem.point} index={index} idForRef={eachItem.id} />;
                })}
            </div>
        </>
    )
}

export default DisplayResults;