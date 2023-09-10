const current_time_h2 = document.querySelector("#current_time")
const current_date_h2 = document.querySelector("#current_date")

const d = new Date()

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

current_date_h2.innerText = days[d.getDay()]
setInterval(() => {
    const d = new Date()

    current_time_h2.innerText = `${d.getTime()}`
}, 1000)
