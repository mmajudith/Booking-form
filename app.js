//Global variable declarations
const modalBox = document.getElementById('modal-box');
const closeModal = document.getElementById('modal-close-icon');
const bookBTN = document.getElementById('book-btn');
let modalBoxTimer;

closeModal.addEventListener('click', () => {
	modalBox.style.display = 'none';
});

//This function handled the change of backgroundColor, message text and the display method of modal box
const handleModalBox = (bgColor, text) => {
	document.getElementById('modal-text').innerText = text;
	modalBox.style.backgroundColor = bgColor;
	modalBox.style.display = 'flex';

	clearTimeout(modalBoxTimer);
	modalBoxTimer = setTimeout(() => (modalBox.style.display = 'none'), 5000);
};

bookBTN.addEventListener('click', (e) => {
	e.preventDefault();
	// Get the whole form elements and destructure it
	const fields = document['form'].elements;
	const { fullName, email, phoneNumber, datetimelocal, reason } = fields;

	//Assigning today's date and time to datetime-local min property,
	//this prevent the user from selecting unactive date and time from the calendar
	datetimelocal.min = new Date()
		.toISOString()
		.slice(0, new Date().toISOString().lastIndexOf(':'));

	//Inputs and textarea field validations using regular expression
	if (!/^[^\s]+( [^\s]+)+$/.test(fullName.value)) {
		return handleModalBox('#f46f74', 'Please enter valid full name');
	}
	if (!/^[^ ]+@[^ ]+\.[a-z]{2,63}$/.test(email.value)) {
		return handleModalBox('#f46f74', 'Please enter valid email address.');
	}
	if (!/[0-9]{9,15}/.test(phoneNumber.value)) {
		return handleModalBox('#f46f74', 'Please enter valid phone number');
	}
	if (!/^\S.*(?:\r?\n\S.*)*$/u.test(reason.value)) {
		return handleModalBox('#f46f74', 'Please state your reason/purpose');
	}

	return handleModalBox('#25CED1', 'Appointment successfully booked.');
});
