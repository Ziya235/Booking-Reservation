
const date = document.querySelector(".date");

const daysContainer = document.querySelector(".days");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const time = [
    {
        "start_time": "09:00",
        "end_time": "09:30"
    },
    {
        "start_time": "09:30",
        "end_time": "10:00"
    },
    {
        "start_time": "10:00",
        "end_time": "10:30"
    }
]

const dates = [
    "2024-02-02", "2024-02-03", "2024-02-22"
]


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];




function initCalendar() {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    console.log("Current Month:", months[month]);
    console.log("Current Year:", year);
    console.log(lastDay.getDay());
    console.log("Current day:", day);



    date.innerHTML = months[month] + " " + year;

    //adding days on date

    let days = "";

    //prev month days

    for (let x = day; x > 0; x--) {
        days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
    }

    //current  month days
    for (let i = 1; i <= lastDate; i++) {
        const currentDate = new Date(year, month, i);

        // Check if the date is in the dates array
        const isHighlighted = dates.some(date => {
            const [highlightedYear, highlightedMonth, highlightedDay] = date.split("-");
            return (
                currentDate.getFullYear() === parseInt(highlightedYear) &&
                currentDate.getMonth() + 1 === parseInt(highlightedMonth) &&
                currentDate.getDate() === parseInt(highlightedDay)
            );
        });

        if (i === new Date().getDate() &&
            year === new Date().getFullYear() &&
            month === new Date().getMonth()
        ) {
            days += `<div class="day ">${i}</div>`;

        }
        else if (isHighlighted) {
            days += `<div class="day highlighted">${i}</div>`;
        }
        //add remaining as it is
        else {
            days += `<div class="day">${i}</div>`;
        }
    };

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day next-date">${j}</div>`;

    }
    daysContainer.innerHTML = days;
}

initCalendar();

function prevMonth() {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    initCalendar();
}
function nextMonth() {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    initCalendar()
}

prev.addEventListener("click", prevMonth)
next.addEventListener("click", nextMonth)




daysContainer.addEventListener("click", function (event) {
    const clickedDay = event.target;

    if (clickedDay.classList.contains("highlighted")) {
        const clickedDate = parseInt(clickedDay.textContent); 
        getActivDay(clickedDate);
    }
});

const eventDay = document.querySelector(".active-date");


const vaxt = document.getElementById('vaxt');

function getActivDay(date) {
    const monthNumber = month + 1; 
    const formattedDate = `${year}-${monthNumber.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
    eventDay.innerHTML = formattedDate;

    if (!vaxt.querySelector(".time-card")) {
        time.forEach(time => {
            const timeCard = document.createElement("div");
            timeCard.classList.add("time-card");

            const start_time = document.createElement("p");
            start_time.textContent = time.start_time;

            const end_time = document.createElement("p");
            end_time.textContent = time.end_time;

            timeCard.append(start_time, end_time);

            vaxt.appendChild(timeCard);
        });
    }
}



let selectedTimeCard = null;



vaxt.addEventListener("click", function (event) {
    const clickedElement = event.target;
    const timeCard = clickedElement.closest(".time-card");
    if (timeCard) {
        if (selectedTimeCard !== null) {
            selectedTimeCard.style.backgroundColor = "";
        }
        timeCard.style.backgroundColor = "#53D56C";
        selectedTimeCard = timeCard;

        const startTime = timeCard.querySelector("p:first-child").textContent;
        const endTime = timeCard.querySelector("p:last-child").textContent;

        const selectedDate = eventDay.textContent.trim();

        const selectedDateTime = {
            date: selectedDate,
            time: {
                start_time: startTime,
                end_time: endTime
            }
        };

        localStorage.setItem("selectedDateTime", JSON.stringify(selectedDateTime));
    }
});


document.getElementById('next').addEventListener('click', function (event) {

    if (!localStorage.getItem('selectedDateTime')) {
        event.preventDefault();
        alert('Please select a date before proceeding.');

    }
    else {
        // Redirect to the next page
        window.location.href = "../Service/service.html";
    }
});

