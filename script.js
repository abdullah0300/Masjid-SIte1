const prayerTimes = [
    { name: "Fajr", time: "04:00 AM" }, // Example time, adjust as needed
    { name: "Duhr", time: "01:30 PM" }, // Example time, adjust as needed
    { name: "Asr", time: "07:00 PM" },  // Example time, adjust as needed
    { name: "Maghrib", time: "9:39 PM" }, // Example time, adjust as needed
    { name: "Isha", time: "10:55 PM" }  // Example time, adjust as needed
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
    "2025-07-01": { "fajr": "04:00 AM", "zuhr": "01:30 PM", "asr": "07:00 PM", "maghrib": "09:39 PM", "isha": "10:45 PM" },
    "2025-07-02": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:39 PM", "isha": "" },
    "2025-07-03": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:38 PM", "isha": "" },
    "2025-07-04": { "fajr": "04:00 AM", "zuhr": "01:30 PM", "asr": "07:00 PM", "maghrib": "09:38 PM", "isha": "10:45 PM" },
    "2025-07-05": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:37 PM", "isha": "" },
    "2025-07-06": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:37 PM", "isha": "" },
    "2025-07-07": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:36 PM", "isha": "" },
    "2025-07-08": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:35 PM", "isha": "" },
    "2025-07-09": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:35 PM", "isha": "" },
    "2025-07-10": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:34 PM", "isha": "" },
    "2025-07-11": { "fajr": "04:15 AM", "zuhr": "01:30 PM", "asr": "07:00 PM", "maghrib": "09:33 PM", "isha": "10:45 PM" },
    "2025-07-12": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:32 PM", "isha": "" },
    "2025-07-13": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:31 PM", "isha": "" },
    "2025-07-14": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:30 PM", "isha": "" },
    "2025-07-15": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:29 PM", "isha": "" },
    "2025-07-16": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:28 PM", "isha": "" },
    "2025-07-17": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:26 PM", "isha": "" },
    "2025-07-18": { "fajr": "04:30 AM", "zuhr": "01:30 PM", "asr": "07:00 PM", "maghrib": "09:25 PM", "isha": "10:30 PM" },
    "2025-07-19": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:24 PM", "isha": "" },
    "2025-07-20": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:23 PM", "isha": "" },
    "2025-07-21": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:21 PM", "isha": "" },
    "2025-07-22": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:20 PM", "isha": "" },
    "2025-07-23": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:19 PM", "isha": "" },
    "2025-07-24": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:17 PM", "isha": "" },
    "2025-07-25": { "fajr": "04:30 AM", "zuhr": "01:30 PM", "asr": "07:00 PM", "maghrib": "09:16 PM", "isha": "10:30 PM" },
    "2025-07-26": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:14 PM", "isha": "" },
    "2025-07-27": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:13 PM", "isha": "" },
    "2025-07-28": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:11 PM", "isha": "" },
    "2025-07-29": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:09 PM", "isha": "" },
    "2025-07-30": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:08 PM", "isha": "" },
    "2025-07-31": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:06 PM", "isha": "" }
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