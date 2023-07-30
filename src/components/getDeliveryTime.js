function getDeliveryTime(quantity) {

    let deliveryTime = null
    if(quantity <= 50) {
        deliveryTime = 12
    } else if(quantity > 50 && quantity <=100) {
        deliveryTime = 24
    } else if(quantity > 100) {
        deliveryTime = 48
    }
    return deliveryTime
}

export default getDeliveryTime