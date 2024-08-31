document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve input values
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let resultMessage = '';

    // Conversion logic
    if (unit === 'celsius') {
        // Convert Celsius to Fahrenheit
        const fahrenheit = (temperature * 9/5) + 32;
        resultMessage = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
        // Convert Fahrenheit to Celsius
        const celsius = (temperature - 32) * 5/9;
        resultMessage = `${temperature}°F is equal to ${celsius.toFixed(2)}°C`;
    }

    // Display the result
    document.getElementById('resultMessage').textContent = resultMessage;
});
