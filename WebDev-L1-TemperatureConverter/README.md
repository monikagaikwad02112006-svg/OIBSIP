# Temperature Converter

A clean, responsive, and interactive **Temperature Converter Web Application** built using **HTML5, CSS3, and Vanilla JavaScript**.

The application allows users to convert temperature values between **Celsius, Fahrenheit, and Kelvin** with real-time input validation and absolute-zero error handling.

---

## Overview

The Temperature Converter provides a simple and user-friendly interface for performing accurate temperature conversions.

Users can:

* Enter a temperature value
* Select the input unit
* Convert the temperature with one click
* View the equivalent values in Celsius, Fahrenheit, and Kelvin
* Receive validation messages for invalid input
* Get an error message when the temperature is below absolute zero

---

## Features

* **Celsius, Fahrenheit & Kelvin Support**
* **Real-Time Input Validation**
* **Numeric Input Validation**
* **Absolute Zero Validation**
* **Instant Conversion**
* **All Converted Values Displayed Simultaneously**
* **Responsive Design**
* **Professional Dark Theme**
* **Clean and Minimal User Interface**
* **Interactive Input and Button States**
* **Mobile-Friendly Layout**

---

## Temperature Conversion Formulas

### Celsius to Fahrenheit

```text
°F = (°C × 9/5) + 32
```

### Fahrenheit to Celsius

```text
°C = (°F − 32) × 5/9
```

### Celsius to Kelvin

```text
K = °C + 273.15
```

### Kelvin to Celsius

```text
°C = K − 273.15
```

The application first converts the entered value to Celsius and then calculates the equivalent Fahrenheit and Kelvin values.

---

## Validation

The application includes input validation for common edge cases.

### Empty Input

Displays an error message when the temperature field is left empty.

### Invalid Input

Rejects invalid or non-numeric temperature values.

### Absolute Zero

The application prevents temperatures below:

```text
−273.15 °C
0 K
−459.67 °F
```

This ensures that physically invalid temperature values are not accepted.

---

## Technologies Used

| Technology | Purpose                                   |
| ---------- | ----------------------------------------- |
| HTML5      | Structure and semantic markup             |
| CSS3       | Styling, responsive design and dark theme |
| JavaScript | Conversion logic and validation           |

---

## Project Structure

```text
WebDev-L1-TemperatureConverter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/monikagaikwad02112006-svg/OIBSIP.git
```

### 2. Open the project folder

```bash
cd OIBSIP/WebDev-L1-TemperatureConverter
```

### 3. Run the project

Open `index.html` directly in a web browser.

You can also use the **Live Server** extension in Visual Studio Code for development.

---

## How It Works

1. Enter a temperature value.
2. Select the input unit.
3. Click **Convert Temperature**.
4. JavaScript validates the input.
5. The application checks for absolute-zero violations.
6. The temperature is converted into the other supported units.
7. The results are displayed instantly.

---

## Example

If the user enters:

```text
Temperature: 25
Unit: Celsius
```

The application displays:

```text
Celsius:     25.00 °C
Fahrenheit:  77.00 °F
Kelvin:      298.15 K
```

---

## Responsive Design

The application is designed to work across different screen sizes, including:

* Desktop
* Laptop
* Tablet
* Mobile

The layout automatically adjusts for smaller screens while maintaining usability and readability.

---

## Project Objective

The objective of this project is to build an interactive temperature conversion tool while practicing:

* HTML form elements
* CSS responsive design
* JavaScript DOM manipulation
* Event handling
* Input validation
* Mathematical calculations
* User-friendly error handling

---

## Future Improvements

Possible future enhancements include:

* Conversion history
* Copy result button
* Temperature conversion animations
* Additional temperature units
* Light/Dark theme switcher
* Keyboard shortcuts
* Conversion history stored in local storage

---

## Author

**Monika Gaikwad**

AI & Data Science Engineering Student

### Connect

* GitHub: [monikagaikwad02112006-svg](https://github.com/monikagaikwad02112006-svg)

---

## License

This project is created for **educational and internship purposes**.

© 2026 Monika Gaikwad. All Rights Reserved.
