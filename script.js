function calculateBMI() {
    var feet = parseFloat(document.getElementById('feet').value);
    var inches = parseFloat(document.getElementById('inches').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(feet) || isNaN(inches) || isNaN(weight) || feet < 0 || inches < 0 || weight <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid height and weight!";
        return;
    }

    var heightInInches = (feet * 12) + inches;
    var heightInMeters = heightInInches * 0.0254; // Convert height to meters
    var bmi = weight / (heightInMeters ** 2);

    var result = "Your BMI is " + bmi.toFixed(2) + ". ";
    if (bmi < 18.5) {
        result += "Underweight";
    } else if (bmi < 25) {
        result += "Healthy";
    } else if (bmi < 30) {
        result += "Overweight";
    } else {
        result += "Obese";
    }

    document.getElementById('result').innerHTML = result;
    updateColorIndicator(bmi);
}

function updateColorIndicator(bmi) {
    var indicator = document.getElementById('result');
    if (bmi < 18.5) {
        indicator.style.color = 'blue'; // Underweight
    } else if (bmi < 25) {
        indicator.style.color = 'green'; // Healthy
    } else if (bmi < 30) {
        indicator.style.color = 'orange'; // Overweight
    } else {
        indicator.style.color = 'red'; // Obese
    }
}

function convertToCm() {
    var feetInput = parseFloat(document.getElementById('feetInput').value);
    var inchesInput = parseFloat(document.getElementById('inchesInput').value);

    if (isNaN(feetInput) || isNaN(inchesInput) || feetInput < 0 || inchesInput < 0) {
        document.getElementById('conversionResult').innerHTML = "Please enter valid feet and inches!";
        return;
    }

    var heightInCm = (feetInput * 30.48) + (inchesInput * 2.54);
    document.getElementById('conversionResult').innerHTML = "Height in Centimeters: " + heightInCm.toFixed(1) + " cm";
}
