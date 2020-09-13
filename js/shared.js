// Convert Temperature from Celsius to Fahrenheit
function convertTemperature(temperature) {
    let celsius = Math.round(temperature);
    let fahrenheit = Math.round(temperature * 1.8 + 32);
    return {
        fahrenheit: fahrenheit,
        celsius: celsius
    };
};

// Convert Wind Direction from degrees to 8-point compass rose
function convertDirection(wDir) {
    let direction;
    if (wDir >0 && wDir <=22) {
        direction = 'North'
    }
    else if (wDir >22 && wDir <=67) {
        direction = 'Northeast'
    }
    else if (wDir >67 && wDir <=112) {
        direction = 'East'
    }
    else if (wDir >112 && wDir <=157) {
        direction = 'Southeast'
    }
    else if (wDir >157 && wDir <=202) {
        direction = 'South'
    }
    else if (wDir >202 && wDir <=247) {
        direction = 'Southwest'
    }
    else if (wDir >247 && wDir <=292) {
        direction = 'West'
    }
    else if (wDir >292 && wDir <=337) {
        direction = 'Northwest'
    }
    else if (wDir >337 && wDir <=360) {
        direction = 'North'
    }
    else if (wDir === 0) {
        direction = null;
    }
    else if (wDir === null) {
        direction = 'Variable'
    }
    else {
        direction = 'Unknown'
    }
    return direction
};

// Convert Speed from ms^-1 to mph
function convertMsToMph(spd) {
    let speed = Math.round(spd * 2.236936);
    return speed
};