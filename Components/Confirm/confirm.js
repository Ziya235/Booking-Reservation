const doctor = localStorage.getItem('selectedDoctor');
const service = localStorage.getItem('selectedService');


if (doctor) {

    const userData = JSON.parse(doctor);
    const name = userData.name;
    const nameElement = document.querySelector('.staff');
    nameElement.textContent = name;

} else {
    console.log('No user data found in localStorage');
}


if (service) {

    const userData = JSON.parse(service);
    const name = userData.name;
    const price = userData.price;

    const priceElement = document.querySelector('.price');
    const serviceElement = document.querySelector('.service');

    serviceElement.textContent = name;
    priceElement.textContent = "$ " + price;


} else {
    console.log('No user data found in localStorage');
}

const appointmentDataString = localStorage.getItem('selectedDateTime');

if (appointmentDataString) {

    const appointmentData = JSON.parse(appointmentDataString);

    const date = appointmentData.date;
    const startTime = appointmentData.time.start_time;
    const endTime = appointmentData.time.end_time;

    const dateElement = document.querySelector('.appointment-date');
    const startTimeElement = document.querySelector('.start-time');
    const endTimeElement = document.querySelector('.end-time');

    dateElement.textContent = date;
    startTimeElement.textContent = startTime;
    endTimeElement.textContent = endTime;

}
else {
    console.log('No appointment data found in localStorage');
}




/////////////////////////////////////////////////////////////////


const confirmButton = document.querySelector(".confirm");

confirmButton.addEventListener("click", function () {
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value


    if (!firstName || !lastName || !email) {
        alert("Please fill in all required fields.");
    }

    else {
        alert("Confirmation succesfully");

        const servis_id = JSON.parse(service);
        const id = servis_id.id;

        const doktor_id = JSON.parse(doctor);
        const id2 = doktor_id.id;

        const appointmentData = JSON.parse(appointmentDataString);

        const date = appointmentData.date;
        const startTime = appointmentData.time.start_time;

        const formData = {
            customer: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
            },
            service_id: id,
            staff_id: id2,
            date: date,
            time: startTime
        };

        console.log("Form Data:", formData);

        localStorage.clear();


    }
});