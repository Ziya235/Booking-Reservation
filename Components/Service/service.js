const serviceListContainer = document.getElementById('service-list');

// Loop through the service data and create HTML elements for each service
service.forEach(serviceItem => {
  const serviceCard = document.createElement('div');
  serviceCard.classList.add('service-card');

  const image = document.createElement('img');
  image.src = serviceItem.image;
  image.alt = serviceItem.name;
  image.classList.add('service-image');
  serviceCard.appendChild(image);

  const serviceName = document.createElement('h3');
  serviceName.textContent = serviceItem.name;
  serviceName.classList.add('service-name');

  const duration = document.createElement('p');
  duration.textContent = ` ${serviceItem.duration}`;
  duration.classList.add('service-duration');

  const name_duration = document.createElement("div");
  name_duration.append(serviceName, duration)
  name_duration.classList.add("name_and_duration");

  const image_name_duration = document.createElement("div");
  image_name_duration.append(image, name_duration);
  image_name_duration.classList.add("image_name_duration")

  serviceCard.appendChild(image_name_duration);

  const price = document.createElement('p');
  price.textContent = `$${Math.floor(serviceItem.price)} `;
  price.classList.add("service-price")
  serviceCard.appendChild(price);

  serviceListContainer.appendChild(serviceCard);
  serviceCard.addEventListener('click', function () {
    // Set data to localStorage
    localStorage.setItem('selectedService', JSON.stringify(serviceItem));
  });
});

const faqs = document.querySelectorAll(".service-card");


faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach(x => { x.classList.remove("active") });
    faq.classList.toggle("active");
  })
})

document.getElementById('next').addEventListener('click', function (event) {

  if (!localStorage.getItem('selectedService')) {
    event.preventDefault();
    alert('Please select a service before proceeding.');
  }
  else {
    window.location.href = "../Service/service.html";
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const selectedService = localStorage.getItem('selectedService');
  if (selectedService) {
    const service = JSON.parse(selectedService);
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
      const serviceName = card.querySelector('.service-name').textContent;
      if (serviceName === service.name) {
        card.classList.add('active');
      }
    });
  }
});
