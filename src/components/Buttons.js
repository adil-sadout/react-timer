
export default function Buttons(props) {

    const {isDisabled, onStartTime, onPauseTime, onStopTime, onResetTime} = props

    return (
      <div>
        <>
        {
            (isDisabled === false) && <>
                <button onClick={onStartTime} >Start</button>
                <button onClick={onPauseTime} >Pause</button>
                <button onClick={onStopTime} >Stop</button>
            
            </>
        }
        </>
        
        <button onClick={onResetTime} >Reset</button>
      </div>
    );
  }
  