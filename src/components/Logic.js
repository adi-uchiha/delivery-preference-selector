import addHoursWithTimeConstraints from "./addHours";
import getDeliveryTime from "./getDeliveryTime"

function Logic(value, quantity) {

    const deliveryTime = getDeliveryTime(quantity)
    const requestedHours = value.getHours()
    const requestedTime = value
    let pickUpTime = null
    let dropTime = null

    function createDateByHrs(hours){
        const currentDate = new Date(requestedTime)
        currentDate.setHours(hours)
        currentDate.setMinutes(0)
        return currentDate
    }

    // Formatting to 15mins ahead 
        const pickUpMins = requestedTime.getMinutes()
        const pickHrs = requestedTime.getHours()

        if(pickUpMins > 0 && pickUpMins < 15) {requestedTime.setMinutes(15); 
        }
        else if(pickUpMins > 15 && pickUpMins < 30) {requestedTime.setMinutes(30)}
        else if(pickUpMins > 30 && pickUpMins < 45) {requestedTime.setMinutes(45)}
        else if(pickUpMins > 45 && pickUpMins <= 59) {
            requestedTime.setMinutes(0)
            console.log("15 MIN Formated")

            const newHrs = requestedHours + 1
            console.log(newHrs)
            requestedTime.setHours(newHrs)
            console.log(requestedTime)
        }
        console.log(requestedTime)
    

    if (requestedTime >= createDateByHrs(7) && requestedTime < createDateByHrs(20)) {  //Ordered between 8am to 8pm | Give slot in next 1hour
        // console.log("MID HIT")
        pickUpTime = requestedTime
        const pickHoursAdder = requestedTime.getHours()
        pickUpTime.setHours(pickHoursAdder + 1)
        console.log(pickUpTime)

    } else if (requestedTime <= createDateByHrs(8)) {  //Ordered in morning before 8am (1am, 7am) | Give slot at 8am 

        pickUpTime = requestedTime
        pickUpTime.setHours(8, 0, 0, 0)

    } else if (requestedTime >= createDateByHrs(20)) {  //Ordered after 8pm (8:15pm, 10pm, 12am) give slot in next day morning

        // console.log("BLOCK RUN")
        pickUpTime = requestedTime
        pickUpTime.setDate(requestedTime.getDate() + 1)
        pickUpTime.setHours(8, 0, 0, 0)

    }
    // console.log(pickUpTime)
    // const pickUpTimeFinal = new Date(pickUpTime)

    

    const pickUpTimeFinal = new Date(pickUpTime)

    dropTime = addHoursWithTimeConstraints(pickUpTime, deliveryTime)

    return [pickUpTimeFinal, dropTime]

}

export default Logic