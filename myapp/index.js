// index.js

function convertToYear(selectedTypeDuration, inputDuration) {
    let denom;
    switch(selectedTypeDuration) {
        case "1":
            denom = 365;
            break;
        case "2":
            denom = 12;
            break;
        case "3":
            denom = 1;
            break;
        default:
            denom = 1;
    }
    console.log(`inputDuration/denom`, inputDuration/denom);
    return inputDuration/denom;
}

function compoundingFrequency(frequencyType) {
    var frequency
    switch(frequencyType) {
        case "1":
            frequency = 365;
            break;
        case "2":
            frequency = 12;
            break;
        case "3":
            frequency = 1;
            break;
        default:
            frequency = 1;
            break;
    }
    console.log(`insideFunction`, frequency);
    return frequency;
}

function calculateInterest() {
    var accumulatedAmount = document.getElementById("accumulatedAmount");

    var apr = document.getElementById("apr").value/100;
    var initial = document.getElementById("initial").value;
    var duration = document.getElementById("duration").value;
    var durationType = document.getElementById('durationType').value;
    var frequencyType = document.getElementById('frequencyType').value;
    console.log(`Compounding Frequency1`, frequencyType);
    console.log(`Compounding Frequency1 type`, typeof frequencyType);
    var convertedDuration = convertToYear(durationType, duration);
    var frequency = compoundingFrequency(frequencyType);
    var calculatedAmount = 0;
    
    calculatedAmount = initial * ( 1 + apr / frequency ) ** (frequency * convertedDuration);
    accumulatedAmount.innerText = `$${calculatedAmount.toFixed(2)}`;
    console.log(`accumulatedAmount`, accumulatedAmount);
};

exports._test = {
    convertToYear,
    compoundingFrequency,
    calculateInterest
};
