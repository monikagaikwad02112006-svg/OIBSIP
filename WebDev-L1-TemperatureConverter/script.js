const form = document.getElementById("converterForm");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

function showError(message) {
    errorMessage.textContent = message;
}

function clearError() {
    errorMessage.textContent = "";
}

function formatTemperature(value, unit) {
    return `${value.toFixed(2)} ${unit}`;
}

form.addEventListener("submit", function (event) {

    event.preventDefault();

    clearError();

    const inputValue = temperatureInput.value.trim();
    const unit = unitSelect.value;

    // Empty input validation
    if (inputValue === "") {
        showError("Please enter a temperature value.");
        return;
    }

    const temperature = Number(inputValue);

    // Numeric validation
    if (!Number.isFinite(temperature)) {
        showError("Please enter a valid numeric temperature.");
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    // Convert input to Celsius first
    if (unit === "celsius") {

        celsius = temperature;

    } else if (unit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;

    } else if (unit === "kelvin") {

        celsius = temperature - 273.15;
    }

    // Absolute zero validation
    if (celsius < -273.15) {
        showError(
            "Invalid temperature. Temperature cannot be below absolute zero (−273.15 °C)."
        );

        celsiusResult.textContent = "-- °C";
        fahrenheitResult.textContent = "-- °F";
        kelvinResult.textContent = "-- K";

        return;
    }

    // Convert Celsius to other units
    fahrenheit = (celsius * 9 / 5) + 32;
    kelvin = celsius + 273.15;

    // Display results
    celsiusResult.textContent = formatTemperature(celsius, "°C");
    fahrenheitResult.textContent = formatTemperature(fahrenheit, "°F");
    kelvinResult.textContent = formatTemperature(kelvin, "K");
});

// Real-time validation
temperatureInput.addEventListener("input", function () {

    clearError();

    if (temperatureInput.value === "") {
        return;
    }

    const value = Number(temperatureInput.value);

    if (!Number.isFinite(value)) {
        showError("Please enter a valid numeric temperature.");
    }
});