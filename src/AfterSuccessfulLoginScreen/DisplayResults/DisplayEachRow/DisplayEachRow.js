import { useSelector } from 'react-redux';
import classes from './DisplayEachRow.module.css';
// useDispatch 

const DisplayEachRow = (props) => {

    const userData = useSelector(state => state);

    const getLoggedInData = userData.filter(eachUser => {
        return eachUser.username === props.loggedIn;
    });


    return (
        <div className={`${classes.common_row} ${classes[`pos${props.index + 1}`]}`}>
            <div className={classes.image_container}>

                <img src={props.itemInfo.image} alt="display pic" className={classes.imageStyle} />

                {(props.idForRef === getLoggedInData[0].first || props.idForRef === getLoggedInData[0].second || props.idForRef === getLoggedInData[0].third) && <span><i className="fas fa-user fa-2x"></i></span>}
            </div>
            <div className={classes.description}>
                <h3>
                    {props.itemInfo.dishName}
                </h3>
                <p>
                    {props.itemInfo.description}
                </p>
            </div>
            <button className={classes.position}>{props.points}
            </button>
        </div>
    )
}

export default DisplayEachRow;