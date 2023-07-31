function addHoursWithTimeConstraints(pickUpTime, addHours) {
    let dropTime = pickUpTime
    let AdderVariable = addHours

    const minutesToAdd = pickUpTime.getMinutes()


    function addRecursive(oldtime) {

        const hoursCanBeCoveredThisDay = 21 - oldtime.getHours()
        if (hoursCanBeCoveredThisDay > AdderVariable) {

            dropTime.setHours(dropTime.getHours() + AdderVariable)

            return dropTime
        }
        AdderVariable = AdderVariable - hoursCanBeCoveredThisDay
        dropTime.setHours(dropTime.getHours() + hoursCanBeCoveredThisDay)
        // Change to next day
        dropTime.setDate(dropTime.getDate() + 1)
        dropTime.setHours(8, 0, 0, 0)
        return addRecursive(oldtime)
    }

    dropTime = addRecursive(pickUpTime)
    if (dropTime.getHours() === 21) {
        dropTime.setDate(dropTime.getDate() + 1)
        dropTime.setHours(8, minutesToAdd, 0, 0)
    } else {
        dropTime.setMinutes(minutesToAdd)
    }

    if (dropTime.getHours() === 8) {
        dropTime.setHours(9, 0,0,0)
    }

    return dropTime
}

export default addHoursWithTimeConstraints