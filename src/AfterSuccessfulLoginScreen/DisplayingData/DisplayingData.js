import { useState } from "react";
import DisplayEachItem from "./DisplayEachItem/DisplayEachItem";
import ShowPositionButton from "./ShowPositionButtons/ShowPositionButton";

import { useDispatch } from "react-redux";
import { dataActions } from "../../store/storeIndex";

const DisplayingData = (props) => {

    const dispatch = useDispatch();
    // props: { data, loggedIn }
    const [activePosition, setPosition] = useState(0);

    const positionButtonClickedHandle = (pos) => {
        if (pos === activePosition) {
            setPosition(0);
            return;
        }
        setPosition(pos);
    }

    const eachItemButtonClickHandle = (id) => {
        if (activePosition === 0) {
            return;
        }
        else {
            dispatch(dataActions.setPositionHandler({
                id,
                loggedIn: props.loggedIn,
                activePosition
            }));
        }
    }

    return (
        <>
            <ShowPositionButton buttonClick={positionButtonClickedHandle} currentNumber={activePosition} />
            <div>
                {props.data.map(eachItem => {
                    return <DisplayEachItem key={`item#${eachItem.id}`} itemInfo={eachItem} button={eachItemButtonClickHandle} loggedIn={props.loggedIn} />;
                })}
            </div>
        </>
    )
}

export default DisplayingData;