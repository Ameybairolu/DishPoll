import classes from './ShowPositionButton.module.css';

// NOTE: This component is responsible for displaying the bar below NavBar when the user whats to perform voting

const ShowPositionButton = (props) => {
    return (
        <div className={classes.buttonsContainer}>
            <span>
                Select the position to set <i className="fas fa-arrow-right"></i> &nbsp;
            </span>
            <button onClick={props.buttonClick.bind(this, 1)} className={props.currentNumber === 1 ? `${classes.active}` : ''}>1</button>
            <button onClick={props.buttonClick.bind(this, 2)} className={props.currentNumber === 2 ? `${classes.active}` : ''}>2</button>
            <button onClick={props.buttonClick.bind(this, 3)} className={props.currentNumber === 3 ? `${classes.active}` : ''}>3</button>
        </div>
    );
}

export default ShowPositionButton;