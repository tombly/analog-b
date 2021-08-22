import clock from "clock";
import document from "document";
import { HeartRateSensor } from "heart-rate";
import { display } from "display";
import { gettext } from "i18n";

setupClock();
setupHeartRate();

function setupClock() {

    // Tick every second. 
    clock.granularity = "seconds";

    const hourHand = document.getElementById("hour-hand");
    const minHand = document.getElementById("minute-hand");
    const secHand = document.getElementById("second-hand");
    const dayLabel = document.getElementById("day-label");
    const dateLabel = document.getElementById("date-label");

    // In the Clock API, tick events do not occur when the display is off,
    // to conserve battery.
    clock.addEventListener("tick", (evt) => {
        const today = new Date();
        const hours = today.getHours() % 12;
        const mins = today.getMinutes();
        const secs = today.getSeconds();

        hourHand.groupTransform.rotate.angle = hoursToAngle(hours, mins);
        minHand.groupTransform.rotate.angle = minutesToAngle(mins);
        secHand.groupTransform.rotate.angle = secondsToAngle(secs);

        dayLabel.text = gettext(`week${today.getDay()}`).toUpperCase();
        dateLabel.text = zeroPad(evt.date.getDate());
    });
}

function setupHeartRate() {
    if (HeartRateSensor) { //&& appbit.permissions.granted("access_heart_rate")) {
        const heartLabel = document.getElementById("heart-label");
        const sensor = new HeartRateSensor();
        sensor.addEventListener("reading", () => {
            heartLabel.text = sensor.heartRate;
        });

        // Automatically stop the sensor when the screen is off to conserve battery.
        display.addEventListener("change", () => {
            display.on ? sensor.start() : sensor.stop();
        });
        sensor.start();
    }
}

// Returns a zero-padded string of length 2.
function zeroPad(n) {
    const width = 2;
    const z = '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

// Returns an angle (0-360) for the current hour in the day, including minutes.
function hoursToAngle(hours, minutes) {
    const hourAngle = (360 / 12) * hours;
    const minAngle = (360 / 12 / 60) * minutes;
    return hourAngle + minAngle;
}

// Returns an angle (0-360) for minutes.
function minutesToAngle(minutes) {
    return (360 / 60) * minutes;
}

// Returns an angle (0-360) for seconds.
function secondsToAngle(seconds) {
    return (360 / 60) * seconds;
}