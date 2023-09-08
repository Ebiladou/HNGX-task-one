const currentDate = document.querySelector('.curdate');
const currentTime = document.querySelector('.curtime');

const getCurrentDate = () => {
    const date = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
}

const getCurrentTime = () => {
    const time = new Date ();
    return time.toLocaleTimeString();
}

const updateDateAndTime = () => {
    currentDate.innerHTML = getCurrentDate();
    currentTime.innerHTML = getCurrentTime();
}
updateDateAndTime();
setInterval(updateDateAndTime, 1000);