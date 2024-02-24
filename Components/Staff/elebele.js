

const dataDiv = document.getElementById('dataDisplay');
data.forEach(doctor => {
    // Create a div for each doctor
    const doctorCard = document.createElement('div');
    doctorCard.classList.add('doctor-card');
    
    // Create an image element
    const image = document.createElement('img');
    image.src = doctor.image;
    image.alt = doctor.name;
    image.classList.add('doctor-image');
    
    // Create paragraph elements for name and email
    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = 'Name: ' + doctor.name;
    const emailParagraph = document.createElement('p');
    emailParagraph.textContent = 'Email: ' + doctor.email;
    
    // Append the elements to the doctorCard
    doctorCard.appendChild(image);
    doctorCard.appendChild(nameParagraph);
    doctorCard.appendChild(emailParagraph);
    
    // Append the doctorCard to the dataDisplay div
    dataDiv.appendChild(doctorCard);
});