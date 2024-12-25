// Select the display and buttons
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // Handle clear (C) button
        if (value === 'C') {
            display.value = '';
        } 
        // Handle equals (=) button
        else if (value === '=') {
            try {
                // Use eval to calculate the result
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error'; // Show error for invalid inputs
            }
        } 
        // Append numbers and operators to the display
        else {
            display.value += value;
        }
    });
});
