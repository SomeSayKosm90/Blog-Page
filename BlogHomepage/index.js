const dateEl = document.querySelectorAll(".date")
const date = new Date()
const monthNames = ["Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

function getTime(){
const date = new Date()
const currentTime = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
dateEl.forEach(el => el.textContent = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${currentTime}`)
}

setInterval(getTime,1000)

