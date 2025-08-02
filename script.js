const prayerTimes = [
    { name: "Fajr", time: "04:45 AM" },
    { name: "Duhr", time: "01:30 PM" },
    { name: "Asr", time: "06:45 PM" },
    { name: "Maghrib", time: "09:01 PM" },
    { name: "Isha", time: "10:15 PM" }
];

// Function to parse time in "HH:MM AM/PM" format into a Date object
function parseTime(timeString) {
    const [time, modifier] = timeString.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);
}

// Function to get the next prayer
function getNextPrayer() {
    const now = new Date();
    for (const prayer of prayerTimes) {
        const prayerTime = parseTime(prayer.time);
        if (prayerTime > now) return { ...prayer, date: prayerTime };
    }
    // If all prayers for today are over, return the first prayer for tomorrow
    const firstPrayerTime = parseTime(prayerTimes[0].time);
    firstPrayerTime.setDate(firstPrayerTime.getDate() + 1);
    return { ...prayerTimes[0], date: firstPrayerTime };
}

// Function to calculate the remaining time
function getRemainingTime(prayerTime) {
    const now = new Date();
    const diffInSeconds = Math.max(0, (prayerTime - now) / 1000); // Avoid negative times
    const hours = Math.floor(diffInSeconds / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = Math.floor(diffInSeconds % 60);

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Function to update the next prayer dynamically
function updatePrayerTimer() {
    const nextPrayer = getNextPrayer();
    const remainingTime = getRemainingTime(nextPrayer.date);

    document.getElementById("namaz-name").innerText = nextPrayer.name;
    document.getElementById("remaining-time").innerText = remainingTime;
}

// Update every second
setInterval(updatePrayerTimer, 1000);
updatePrayerTimer();



const prayerTimes2 = {
    "2025-08-01": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "06:45 PM", "maghrib": "09:04 PM", "isha": "10:15 PM" },
    "2025-08-02": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "06:45 PM", "maghrib": "09:02 PM", "isha": "10:15 PM" },
    "2025-08-03": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "06:45 PM", "maghrib": "09:01 PM", "isha": "10:15 PM" },
    "2025-08-04": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "06:45 PM", "maghrib": "08:59 PM", "isha": "10:15 PM" },
    "2025-08-05": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "06:45 PM", "maghrib": "08:57 PM", "isha": "10:15 PM" },
    "2025-08-06": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "06:45 PM", "maghrib": "08:55 PM", "isha": "10:15 PM" },
    "2025-08-07": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "06:45 PM", "maghrib": "08:53 PM", "isha": "10:15 PM" },
    "2025-08-08": { "fajr": "05:00 AM", "zuhr": "01:30 PM", "asr": "06:30 PM", "maghrib": "08:51 PM", "isha": "10:00 PM" },
    "2025-08-09": { "fajr": "05:00 AM", "zuhr": "01:30 PM", "asr": "06:30 PM", "maghrib": "08:49 PM", "isha": "10:00 PM" },
    "2025-08-10": { "fajr": "05:00 AM", "zuhr": "01:30 PM", "asr": "06:30 PM", "maghrib": "08:47 PM", "isha": "10:00 PM" },
    "2025-08-11": { "fajr": "05:00 AM", "zuhr": "01:30 PM", "asr": "06:30 PM", "maghrib": "08:45 PM", "isha": "10:00 PM" },
    "2025-08-12": { "fajr": "05:00 AM", "zuhr": "01:30 PM", "asr": "06:30 PM", "maghrib": "08:43 PM", "isha": "10:00 PM" },
    "2025-08-13": { "fajr": "05:00 AM", "zuhr": "01:30 PM", "asr": "06:30 PM", "maghrib": "08:41 PM", "isha": "10:00 PM" },
    "2025-08-14": { "fajr": "05:00 AM", "zuhr": "01:30 PM", "asr": "06:30 PM", "maghrib": "08:39 PM", "isha": "10:00 PM" },
    "2025-08-15": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "06:30 PM", "maghrib": "08:37 PM", "isha": "09:45 PM" },
    "2025-08-16": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "06:30 PM", "maghrib": "08:35 PM", "isha": "09:45 PM" },
    "2025-08-17": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "06:30 PM", "maghrib": "08:33 PM", "isha": "09:45 PM" },
    "2025-08-18": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "06:30 PM", "maghrib": "08:31 PM", "isha": "09:45 PM" },
    "2025-08-19": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "06:30 PM", "maghrib": "08:29 PM", "isha": "09:45 PM" },
    "2025-08-20": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "06:30 PM", "maghrib": "08:26 PM", "isha": "09:45 PM" },
    "2025-08-21": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "06:30 PM", "maghrib": "08:24 PM", "isha": "09:45 PM" },
    "2025-08-22": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "06:15 PM", "maghrib": "08:22 PM", "isha": "09:30 PM" },
    "2025-08-23": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "06:15 PM", "maghrib": "08:20 PM", "isha": "09:30 PM" },
    "2025-08-24": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "06:15 PM", "maghrib": "08:18 PM", "isha": "09:30 PM" },
    "2025-08-25": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "06:15 PM", "maghrib": "08:15 PM", "isha": "09:30 PM" },
    "2025-08-26": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "06:15 PM", "maghrib": "08:13 PM", "isha": "09:30 PM" },
    "2025-08-27": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "06:15 PM", "maghrib": "08:11 PM", "isha": "09:30 PM" },
    "2025-08-28": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "06:15 PM", "maghrib": "08:08 PM", "isha": "09:30 PM" },
    "2025-08-29": { "fajr": "05:30 AM", "zuhr": "01:30 PM", "asr": "06:00 PM", "maghrib": "08:06 PM", "isha": "09:30 PM" },
    "2025-08-30": { "fajr": "05:30 AM", "zuhr": "01:30 PM", "asr": "06:00 PM", "maghrib": "08:04 PM", "isha": "09:30 PM" },
    "2025-08-31": { "fajr": "05:30 AM", "zuhr": "01:30 PM", "asr": "06:00 PM", "maghrib": "08:02 PM", "isha": "09:30 PM" }
};
   
function getWeeklyPrayerTime(prayer) {
    let currentDate = new Date();
    let foundTime = null;
    
    for (let i = 0; i < 7; i++) {
        let formattedDate = currentDate.toISOString().split('T')[0];
        if (prayerTimes2[formattedDate] && prayerTimes2[formattedDate][prayer]) {
            foundTime = prayerTimes2[formattedDate][prayer];
            break;
        }
        currentDate.setDate(currentDate.getDate() - 1);
    }
    return foundTime || "N/A";
}

function updatePrayerTimes2() {
    document.querySelectorAll("[data-prayer]").forEach(element => {
        let prayer = element.getAttribute("data-prayer");
        element.textContent = getWeeklyPrayerTime(prayer);
    });
}

document.addEventListener("DOMContentLoaded", updatePrayerTimes2);



// popup

document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('rmdnPopup');
    const minimized = document.getElementById('rmdnMinimized');
    const closeBtn = document.getElementById('rmdnCloseBtn');
    
    // Close popup and show minimized version
    closeBtn.addEventListener('click', function() {
        popup.style.opacity = '0';
        setTimeout(function() {
            popup.classList.add('rmdn-hidden');
            minimized.classList.remove('rmdn-hidden');
            
            // Animation to slide in from left
            setTimeout(function() {
                minimized.style.left = '0';
            }, 100);
        }, 300);
    });
    
    // Open popup from minimized version
    minimized.addEventListener('click', function() {
        minimized.style.left = '-70px';
        setTimeout(function() {
            minimized.classList.add('rmdn-hidden');
            popup.classList.remove('rmdn-hidden');
            
            // Animation to fade in
            setTimeout(function() {
                popup.style.opacity = '1';
            }, 100);
        }, 300);
    });
});