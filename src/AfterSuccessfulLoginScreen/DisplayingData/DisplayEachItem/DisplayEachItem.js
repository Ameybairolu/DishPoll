import { useEffect, useState } from 'react';
import classes from './DisplayEachItem.module.css';
import { useSelector } from 'react-redux';


// NOTE: This component is responsible for rendering each food item row-wise. 

const DisplayEachItem = (props) => {

    const loginDetails = useSelector(state => state)

    const [label, setLabel] = useState(null);



    useEffect(() => {
        const loggedInUserAllDetails = loginDetails.filter(eachUser => {
            return eachUser.username === props.loggedIn;
        });
        if (props.itemInfo.id === loggedInUserAllDetails[0].first) {
            setLabel("1");
        }
        else if (props.itemInfo.id === loggedInUserAllDetails[0].second) {
            setLabel("2");
        }
        else if (props.itemInfo.id === loggedInUserAllDetails[0].third) {
            setLabel("3");
        }
        else {
            setLabel(null);
        }
    }, [props.itemInfo.id, loginDetails, props.loggedIn])

    return (
        <div className={classes.common_row}>
            <img src={props.itemInfo.image} alt="display pic" className={classes.imageStyle} />
            <div className={classes.description}>
                <h3>
                    {props.itemInfo.dishName}
                </h3>
                <p>
                    {props.itemInfo.description}
                </p>
            </div>
            <button className={`${classes.position} ${classes[`pos${label}`]} `} onClick={props.button.bind(this, props.itemInfo.id)}>{label ? label : '❌'}
            </button>
        </div>
    )
}

export default DisplayEachItem;