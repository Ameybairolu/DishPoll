import { useState } from "react";
import DisplayEachItem from "./DisplayEachItem/DisplayEachItem";
import ShowPositionButton from "./ShowPositionButtons/ShowPositionButton";

import { useDispatch } from "react-redux";
import { dataActions } from "../../store/storeIndex";

// NOTE: This is the section that shows all the Dishes, and employs DisplayEachItem and ShowPositionButton components. 

const DisplayingData = (props) => {

    const dispatch = useDispatch();
    const [activePosition, setPosition] = useState(0);

    // NOTE: The below logic is required in order to perform voting
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
            // NOTE: Note the useDispatch hook used at line 12. Through that and the logic below, we are able to manipulate redux data. 
            dispatch(dataActions.setPositionHandler({
                id,
                loggedIn: props.loggedIn,
                activePosition
            }));
            setPosition(0);
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