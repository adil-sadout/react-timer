


export default function Timer(props) {
    const {hours, minutes, seconds} = props
    console.log(props)

    return (
      <div>
        <h1>{hours}:{minutes}:{seconds}</h1>
      </div>
    );
  }
  