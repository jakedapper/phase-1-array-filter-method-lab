// Code your solution here
function findMatching (driverArray, name){
    return driverArray.filter((driver) => driver.toLowerCase() === name.toLowerCase())
}


function fuzzyMatch (driverArray, name){
    return driverArray.filter((driver) => driver[0].toLowerCase() === name[0].toLowerCase())
}

function matchName (driverObjectArray, names) {
    return driverObjectArray.filter((driver)=> driver.name === names)
}