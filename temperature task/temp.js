function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const convertFrom = document.getElementById('convertFrom').value;
    const convertTo = document.getElementById('convertTo').value;

    if (isNaN(tempInput)) {
        document.getElementById('result').innerHTML = "Please enter a valid number.";
        return;
    }

    let result;

    if (convertFrom === convertTo) {
        result = tempInput;
    } else if (convertFrom === "Celsius" && convertTo === "Fahrenheit") {
        result = (tempInput * 9/5) + 32;
    } else if (convertFrom === "Celsius" && convertTo === "Kelvin") {
        result = tempInput + 273.15;
    } else if (convertFrom === "Fahrenheit" && convertTo === "Celsius") {
        result = (tempInput - 32) * 5/9;
    } else if (convertFrom === "Fahrenheit" && convertTo === "Kelvin") {
        result = ((tempInput - 32) * 5/9) + 273.15;
    } else if (convertFrom === "Kelvin" && convertTo === "Celsius") {
        result = tempInput - 273.15;
    } else if (convertFrom === "Kelvin" && convertTo === "Fahrenheit") {
        result = ((tempInput - 273.15) * 9/5) + 32;
    }

    document.getElementById('result').innerHTML = `Result: ${result.toFixed(2)} ${convertTo}`;
}
