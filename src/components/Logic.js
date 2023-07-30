import addHoursWithTimeConstraints from "./addHours";
import getDeliveryTime from "./getDeliveryTime"

// function FirstIsGreaterThan2nd(time1, time2) {
//     const hours1 = time1.getHours();
//     const minutes1 = time1.getMinutes();
//     const hours2 = time2.getHours();
//     const minutes2 = time2.getMinutes();

//     if (hours1 > hours2) {
//         return true;
//     } else if (hours1 === hours2 && minutes1 > minutes2) {
//         return true;
//     } else {
//         return false;
//     }
// }

function createDateByHrs(hours){
    const currentDate = new Date()
    currentDate.setHours(hours)
    return currentDate
}

function Logic(value, quantity) {

    const deliveryTime = getDeliveryTime(quantity)

    const requestedHours = value.getHours()
    const requestedTime = value
    let pickUpTime = null
    let dropTime = null

    if (requestedTime >= createDateByHrs(8) && requestedTime <= createDateByHrs(20)) {  //Ordered between 8am to 8pm | Give slot in next 1hour
        console.log("MID HIT")
        pickUpTime = requestedTime
        pickUpTime.setHours(requestedHours + 1)

    } else if (requestedTime <= createDateByHrs(8)) {  //Ordered in morning before 8am (1am, 7am) | Give slot at 8am 

        pickUpTime = requestedTime
        pickUpTime.setHours(8, 0, 0, 0)

    } else if (requestedTime > createDateByHrs(20)) {  //Ordered after 8pm (8:15pm, 10pm, 12am) give slot in next day morning

        // console.log("BLOCK RUN")
        pickUpTime = requestedTime
        pickUpTime.setDate(requestedTime.getDate() + 1)
        pickUpTime.setHours(8, 0, 0, 0)

    }
    console.log(pickUpTime)
    const pickUpTimeFinal = new Date(pickUpTime)

    dropTime = addHoursWithTimeConstraints(pickUpTime, deliveryTime)

    return [pickUpTimeFinal, dropTime]

}

export default Logic