const DateDisplay = ({date, type}) => {

    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' });
    let hours = date.getHours()
    let minutes = date.getMinutes()

    const amPm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;


    return <>
    <div className="flex flex-col justify-center align-middle items-center">
        <div className="flex flex-col items-center text-white pt-2 pb-2 pl-5 pr-5 border-2 border-cyan-400 rounded-md max-w-min">
            <h1 className="text-5xl">{day}</h1>

            <div className="font-semibold">{month}</div>

            <div className="flex flex-row">
                <div className="">{hours}</div>
                <div className="">:</div>
                <div className="">{minutes}</div>
                <div className="pl-1">{amPm}</div>
            </div>
        <span className="text-white font-light text-xs">{type}</span>
        </div>
    </div>
    </>
}

export default DateDisplay