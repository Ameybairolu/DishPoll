import { useEffect, useState } from 'react';
import classes from './DisplayEachItem.module.css';
import { useSelector } from 'react-redux';
// useDispatch 

const DisplayEachItem = (props) => {

    // <DisplayEachItem key={`item#${eachItem.id}`} itemInfo={eachItem} button={eachItemButtonClickHandle} loggedIn={props.loggedIn} />;

    const loginDetails = useSelector(state => state)
    // console.log(loginDetails);

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
            <button className={classes.position} onClick={props.button.bind(this, props.itemInfo.id)}>{label}
            </button>
        </div>
    )
}

export default DisplayEachItem;