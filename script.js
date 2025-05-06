const prayerTimes = [
    { name: "Fajr", time: "04:45 AM" }, // Example time, adjust as needed
    { name: "Duhr", time: "01:30 PM" }, // Example time, adjust as needed
    { name: "Asr", time: "07:30 PM" },  // Example time, adjust as needed
    { name: "Maghrib", time: "8:51 PM" }, // Example time, adjust as needed
    { name: "Isha", time: "10:15 PM" }  // Example time, adjust as needed
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
    "2025-05-01": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "07:30 PM", "maghrib": "08:39 PM", "isha": "10:00 PM" },
    "2025-05-02": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "07:30 PM", "maghrib": "08:41 PM", "isha": "10:00 PM" },
    "2025-05-03": { "fajr": "03:47 AM", "zuhr": "01:10 PM", "asr": "06:14 PM", "maghrib": "08:43 PM", "isha": "09:46 PM" },
    "2025-05-04": { "fajr": "03:45 AM", "zuhr": "01:10 PM", "asr": "06:15 PM", "maghrib": "08:44 PM", "isha": "09:46 PM" },
    "2025-05-05": { "fajr": "03:42 AM", "zuhr": "01:10 PM", "asr": "06:16 PM", "maghrib": "08:46 PM", "isha": "09:47 PM" },
    "2025-05-06": { "fajr": "03:40 AM", "zuhr": "01:10 PM", "asr": "06:17 PM", "maghrib": "08:48 PM", "isha": "09:48 PM" },
    "2025-05-07": { "fajr": "03:37 AM", "zuhr": "01:09 PM", "asr": "06:18 PM", "maghrib": "08:50 PM", "isha": "09:49 PM" },
    "2025-05-08": { "fajr": "04:30 AM", "zuhr": "01:30 PM", "asr": "07:30 PM", "maghrib": "08:51 PM", "isha": "10:15 PM" },
    "2025-05-09": { "fajr": "04:30 AM", "zuhr": "01:30 PM", "asr": "07:30 PM", "maghrib": "08:53 PM", "isha": "10:15 PM" },
    "2025-05-10": { "fajr": "03:31 AM", "zuhr": "01:09 PM", "asr": "06:21 PM", "maghrib": "08:55 PM", "isha": "09:52 PM" },
    "2025-05-11": { "fajr": "03:28 AM", "zuhr": "01:09 PM", "asr": "06:22 PM", "maghrib": "08:56 PM", "isha": "09:56 PM" },
    "2025-05-12": { "fajr": "03:27 AM", "zuhr": "01:09 PM", "asr": "06:23 PM", "maghrib": "08:58 PM", "isha": "09:58 PM" },
    "2025-05-13": { "fajr": "03:24 AM", "zuhr": "01:09 PM", "asr": "06:24 PM", "maghrib": "09:00 PM", "isha": "10:00 PM" },
    "2025-05-14": { "fajr": "03:22 AM", "zuhr": "01:09 PM", "asr": "06:25 PM", "maghrib": "09:01 PM", "isha": "10:01 PM" },
    "2025-05-15": { "fajr": "03:20 AM", "zuhr": "01:09 PM", "asr": "06:26 PM", "maghrib": "09:03 PM", "isha": "10:03 PM" },
    "2025-05-16": { "fajr": "04:15 AM", "zuhr": "01:30 PM", "asr": "07:30 PM", "maghrib": "09:04 PM", "isha": "10:15 PM" },
    "2025-05-17": { "fajr": "03:16 AM", "zuhr": "01:09 PM", "asr": "06:28 PM", "maghrib": "09:06 PM", "isha": "10:04 PM" },
    "2025-05-18": { "fajr": "03:14 AM", "zuhr": "01:09 PM", "asr": "06:29 PM", "maghrib": "09:07 PM", "isha": "10:05 PM" },
    "2025-05-19": { "fajr": "03:12 AM", "zuhr": "01:09 PM", "asr": "06:30 PM", "maghrib": "09:09 PM", "isha": "10:07 PM" },
    "2025-05-20": { "fajr": "03:10 AM", "zuhr": "01:09 PM", "asr": "06:31 PM", "maghrib": "09:11 PM", "isha": "10:09 PM" },
    "2025-05-21": { "fajr": "03:08 AM", "zuhr": "01:10 PM", "asr": "06:32 PM", "maghrib": "09:12 PM", "isha": "10:10 PM" },
    "2025-05-22": { "fajr": "03:07 AM", "zuhr": "01:10 PM", "asr": "06:32 PM", "maghrib": "09:13 PM", "isha": "10:11 PM" },
    "2025-05-23": { "fajr": "04:15 AM", "zuhr": "01:30 PM", "asr": "07:30 PM", "maghrib": "09:15 PM", "isha": "10:30 PM" },
    "2025-05-24": { "fajr": "03:02 AM", "zuhr": "01:10 PM", "asr": "06:34 PM", "maghrib": "09:16 PM", "isha": "10:14 PM" },
    "2025-05-25": { "fajr": "03:00 AM", "zuhr": "01:10 PM", "asr": "06:35 PM", "maghrib": "09:18 PM", "isha": "10:16 PM" },
    "2025-05-26": { "fajr": "02:59 AM", "zuhr": "01:10 PM", "asr": "06:36 PM", "maghrib": "09:19 PM", "isha": "10:17 PM" },
    "2025-05-27": { "fajr": "02:57 AM", "zuhr": "01:10 PM", "asr": "06:36 PM", "maghrib": "09:20 PM", "isha": "10:18 PM" },
    "2025-05-28": { "fajr": "02:56 AM", "zuhr": "01:10 PM", "asr": "06:37 PM", "maghrib": "09:22 PM", "isha": "10:20 PM" },
    "2025-05-29": { "fajr": "02:54 AM", "zuhr": "01:10 PM", "asr": "06:38 PM", "maghrib": "09:23 PM", "isha": "10:21 PM" },
    "2025-05-30": { "fajr": "04:00 AM", "zuhr": "01:30 PM", "asr": "07:30 PM", "maghrib": "09:24 PM", "isha": "10:40 PM" },
    "2025-05-31": { "fajr": "02:51 AM", "zuhr": "01:11 PM", "asr": "06:39 PM", "maghrib": "09:25 PM", "isha": "10:23 PM" }
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