function distanceFromHqInBlocks(pickUpBlock) {
    return Math.abs(pickUpBlock - 42);
}

function distanceFromHqInFeet(pickUpBlock) {
    return distanceFromHqInBlocks(pickUpBlock) * 264;
}

function distanceTravelledInFeet(start, end) {
    return Math.abs((end - start) * 264);
}

function calculatesFarePrice(start, end) {
    const totalDistance = distanceTravelledInFeet(start, end)
    if (totalDistance <= 400) {
        return 0;
    } else if (totalDistance > 400 && totalDistance < 2000) {
        return (totalDistance - 400) * .02
    } else if (totalDistance >= 2000 && totalDistance <= 2500) {
        return 25;
    } else {
        return `cannot travel that far`;
    }
}