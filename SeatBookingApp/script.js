// JavaScript for seat booking (script.js)
const seats = document.querySelectorAll('.seat');
const selectedSeat = document.getElementById('selectedSeat');
const totalPrice = document.getElementById('totalPrice');

let selectedSeats = [];
let total = 0;

seats.forEach((seat) => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
        const seatNumber = seat.textContent;
        if (selectedSeats.includes(seatNumber)) {
            selectedSeats = selectedSeats.filter((seat) => seat !== seatNumber);
            total -= 10; // Adjust price as needed
        } else {
            selectedSeats.push(seatNumber);
            total += 10; // Adjust price as needed
        }
        selectedSeat.textContent = `Selected Seat(s): ${selectedSeats.join(', ')}`;
        totalPrice.textContent = `Total Price: $${total}`;
    });
});

// JavaScript for graph plotting (script.js)
const inputValue = document.getElementById('inputValue');
const maxValue = document.getElementById('maxValue');
const graphBar = document.getElementById('graphBar');

inputValue.addEventListener('input', updateGraph);

function updateGraph() {
    const input = parseFloat(inputValue.value);
    const max = parseFloat(maxValue.value);

    if (input > max) {
        alert('Input Value cannot be greater than Max Value.');
        return;
    }

    const percentage = (input / max) * 100;
    graphBar.style.width = `${percentage}%`;
}
