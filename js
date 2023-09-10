<!DOCTYPE html>
<html>
<head>
    <title>My Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            text-align: center;
        }
        .calculator {
            width: 300px;
            margin: 50px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px white;
            border: 2px solid white ;
            background-color: #fff;
            background-image: url('wp.jpg');
            background-position: 10%;
            background-attachment: fixed; 
            background-size: 200px;
            
        }
        input[type="text"] {
            width: 300px;
            margin-bottom: 50px;
            padding: 2%;
            font-size: 18px;
            margin-bottom: 10px;
            border: 2px solid rgba(98, 66, 66, 0.333);

           
        }
        .btn {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: 5px;
            border: 2px solid rgba(98, 66, 66, 0.333);
            cursor: pointer;
        }
        .btn:hover {
            background-color: #333;
            color: #fff;
        }
        
    </style>
</head>
<body>
    <h1>Cyn Kalku</h1>
    <div class="calculator">
        <input type="text" id="display" disabled>
        <br>
        <button class="btn" onclick="clearDisplay()">C</button>
        <button class="btn" onclick="appendToDisplay('+')">+</button>
        <button class="btn" onclick="appendToDisplay('-')">-</button>
        <button class="btn" onclick="backspace()">⌫</button>
        <br>
        <button class="btn" onclick="appendToDisplay('7')">7</button>
        <button class="btn" onclick="appendToDisplay('8')">8</button>
        <button class="btn" onclick="appendToDisplay('9')">9</button>
        <button class="btn" onclick="appendToDisplay('*')">*</button>
        <br>
        <button class="btn" onclick="appendToDisplay('4')">4</button>
        <button class="btn" onclick="appendToDisplay('5')">5</button>
        <button class="btn" onclick="appendToDisplay('6')">6</button>
        <button class="btn" onclick="appendToDisplay('/')">/</button>
        <br>
        <button class="btn" onclick="appendToDisplay('1')">1</button>
        <button class="btn" onclick="appendToDisplay('2')">2</button>
        <button class="btn" onclick="appendToDisplay('3')">3</button>
        <button class="btn" onclick="applyPercentage()">%</button>
        <br>
        <button class="btn" onclick="appendToDisplay('0')">0</button>
        <button class="btn" onclick="appendToDisplay('.')">.</button>
        <button class="btn" onclick="calculateResult()">=</button>
        
    </div>

    <script>
        let display = document.getElementById('display');

        function appendToDisplay(value) {
            display.value += value;
        }

        function backspace() {
            let displayValue = display.value;
            display.value = displayValue.slice(0, -1);
        }
        
        function clearDisplay() {
            display.value = '';
        }

        function applyPercentage() {
            let displayValue = display.value;
            try {
                const result = eval(displayValue) / 100; // Menghitung persen
                display.value = result;
            } catch (error) {
                display.value = 'Error';
            }
        }
        
        function calculateResult() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }
    </script>
</body>
</html>
