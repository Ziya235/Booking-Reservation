

const dataDiv = document.getElementById('doktors');
data.forEach(doctor => {
    // Create a div for each doctor
    const doctorCard = document.createElement('div');
    doctorCard.classList.add('card');

    // Create an image element
    const image = document.createElement('img');
    image.src = doctor.image;
    image.alt = doctor.name;
    image.classList.add('doctor-image');

    // Create paragraph elements for name and email
    const nameParagraph = document.createElement('h3');
    nameParagraph.textContent = doctor.name;
    const emailParagraph = document.createElement('p');
    emailParagraph.textContent = doctor.email;

    const name_and_email = document.createElement("div");
    name_and_email.classList.add("name_and_email");
    name_and_email.append(nameParagraph, emailParagraph);

    // Append the elements to the doctorCard
    doctorCard.appendChild(image);
    doctorCard.appendChild(name_and_email)

    // Append the doctorCard to the dataDisplay div
    dataDiv.appendChild(doctorCard);
    
    doctorCard.addEventListener('click', function () {
        // Set data to localStorage
        localStorage.setItem('selectedDoctor', JSON.stringify(doctor));
    });
});

const faqs = document.querySelectorAll(".card");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faqs.forEach(x => { x.classList.remove("active") });
        faq.classList.toggle("active");
    })
})

// Add event listener to the "Next" button
document.querySelector('a').addEventListener('click', function (event) {
    console.log("Next button clicked."); // Debugging message
    // Check if localStorage has selectedDoctor key
    if (!localStorage.getItem('selectedDoctor')) {
        event.preventDefault();
        // Display error message
        alert('Please select a doctor before proceeding.');
    } else {
        // Redirect to the next page
        window.location.href = "../Service/service.html";
    }
});

// Add an event listener for when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Check if there is a selectedDoctor in localStorage
    const selectedDoctor = localStorage.getItem('selectedDoctor');
    if (selectedDoctor) {
        // Parse the selectedDoctor object from localStorage
        const doctor = JSON.parse(selectedDoctor);
        // Find the card element corresponding to the selected doctor
        const doctorCard = document.querySelector(`.card img[alt="${doctor.name}"]`).parentNode;
        // Add the 'active' class to the card element
        doctorCard.classList.add('active');
    }
});
