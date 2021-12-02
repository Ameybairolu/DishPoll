import classes from './ShowPositionButton.module.css';

const ShowPositionButton = (props) => {
    return (
        <div className={classes.buttonsContainer}>
            <button onClick={props.buttonClick.bind(this, 1)} className={props.currentNumber === 1 ? `${classes.active}` : ''}>1</button>
            <button onClick={props.buttonClick.bind(this, 2)} className={props.currentNumber === 2 ? `${classes.active}` : ''}>2</button>
            <button onClick={props.buttonClick.bind(this, 3)} className={props.currentNumber === 3 ? `${classes.active}` : ''}>3</button>
        </div>
    );
}

export default ShowPositionButton;