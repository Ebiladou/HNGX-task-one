const currentDate = document.querySelector('.curdate');
const currentTime = document.querySelector('.curtime');

const getCurrentDate = () => {
    const date = new Date();
    const specifics = {
        weekday: "long",
    };
    return date.toLocaleDateString("en-NG", specifics);
}

const getCurrentTime = () => {
    const time = new Date();
    return time.getTime();
}

const updateDateAndTime = () => {
    currentDate.innerHTML = getCurrentDate();
    currentTime.innerHTML = getCurrentTime();
}
updateDateAndTime();
setInterval(updateDateAndTime, 1000);