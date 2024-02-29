const modalBox = document.getElementById('modal-box');
const closeModal = document.getElementById('modal-close-icon');
const bookBTN = document.getElementById('book-btn');

closeModal.addEventListener('click', () => {
	modalBox.style.display = 'none';
});

const handleModalBox = (bgColor, text) => {
	document.getElementById('modal-text').innerText = text;
	modalBox.style.backgroundColor = bgColor;
	modalBox.style.display = 'flex';
};

bookBTN.addEventListener('click', (e) => {
	e.preventDefault();
	const fields = document['form'].elements;
	const { fullName, email, phoneNumber, datetime, reason } = fields;
	console.log(fullName.value);

	if (/^[^\s]+( [^\s]+)+$/.test(fullName.value)) {
		handleModalBox('#f46f74', 'Please enter valid full name');
	}
	if (/^[^ ]+@[^ ]+\.[a-z]{2,63}$/.test(email.value)) {
		handleModalBox('#f46f74', 'Please enter valid email address.');
	}
	if (/[0-9]{9,15}/.test(phoneNumber.value)) {
		handleModalBox('#f46f74', 'Please enter valid phone number');
	}
	// if (/^[^\s]+( [^\s]+)+$/.test(datetime)) {
	// 	handleModalBox('#f46f74', 'Please enter valid full name');
	// }
	if (/^\S.*(?:\r?\n\S.*)*$/u.test(reason.value)) {
		handleModalBox('#f46f74', 'Please enter valid full name');
	}

	handleModalBox('#25CED1', 'Appointment successfully booked.');
});
