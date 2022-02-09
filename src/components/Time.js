


export default function Timer(props) {
    const {hours, minutes, seconds, milliseconds} = props
    console.log(props)

    return (
      <div>
        <h1>{hours}:{minutes}:{seconds}:{milliseconds}</h1>
      </div>
    );
  }
  