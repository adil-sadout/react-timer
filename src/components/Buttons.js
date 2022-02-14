
export default function Buttons(props) {

    const {isDisabled, onStartTime, onPauseTime, onStopTime, onResetTime} = props;

    return (
      <div className=" text-center">
        {
            (isDisabled === false) &&
            <>
                <button className="btn btn-dark  mx-1" onClick={onStartTime} >Start</button>
                <button className="btn btn-dark mx-1" onClick={onPauseTime} >Pause</button>
                <button className="btn btn-dark mx-1" onClick={onStopTime} >Stop</button>
            </>
        }
        <button className="btn btn-dark mx-1" onClick={onResetTime} >Reset</button>
      </div>
    );
  }
  