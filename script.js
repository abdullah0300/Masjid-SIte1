const prayerTimes = [
    { name: "Fajr", time: "05:15 AM" }, // Example time, adjust as needed
    { name: "Duhr", time: "01:30 PM" }, // Example time, adjust as needed
    { name: "Asr", time: "07:15 PM" },  // Example time, adjust as needed
    { name: "Maghrib", time: "8:17 PM" }, // Example time, adjust as needed
    { name: "Isha", time: "09:45 PM" }  // Example time, adjust as needed
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
    "2025-04-01": { "fajr": "05:45 AM", "zuhr": "01:30 PM", "asr": "06:45 PM", "maghrib": "07:46 PM", "isha": "09:15 PM" },
    "2025-04-02": { "fajr": "05:02 AM", "zuhr": "01:16 PM", "asr": "05:38 PM", "maghrib": "07:48 PM", "isha": "09:03 PM" },
    "2025-04-03": { "fajr": "05:00 AM", "zuhr": "01:16 PM", "asr": "05:39 PM", "maghrib": "07:50 PM", "isha": "09:04 PM" },
    "2025-04-04": { "fajr": "05:45 AM", "zuhr": "01:30 PM", "asr": "06:45 PM", "maghrib": "07:51 PM", "isha": "09:30 PM" },
    "2025-04-05": { "fajr": "04:55 AM", "zuhr": "01:16 PM", "asr": "05:42 PM", "maghrib": "07:53 PM", "isha": "09:07 PM" },
    "2025-04-06": { "fajr": "04:53 AM", "zuhr": "01:15 PM", "asr": "05:43 PM", "maghrib": "07:55 PM", "isha": "09:09 PM" },
    "2025-04-07": { "fajr": "04:50 AM", "zuhr": "01:15 PM", "asr": "05:44 PM", "maghrib": "07:57 PM", "isha": "09:11 PM" },
    "2025-04-08": { "fajr": "04:48 AM", "zuhr": "01:15 PM", "asr": "05:45 PM", "maghrib": "07:58 PM", "isha": "09:12 PM" },
    "2025-04-09": { "fajr": "04:46 AM", "zuhr": "01:14 PM", "asr": "05:47 PM", "maghrib": "08:00 PM", "isha": "09:13 PM" },
    "2025-04-10": { "fajr": "05:30 AM", "zuhr": "01:30 PM", "asr": "07:00 PM", "maghrib": "08:02 PM", "isha": "09:45 PM" },
    "2025-04-11": { "fajr": "05:30 AM", "zuhr": "01:30 PM", "asr": "07:00 PM", "maghrib": "08:04 PM", "isha": "09:45 PM" },
    "2025-04-12": { "fajr": "04:39 AM", "zuhr": "01:14 PM", "asr": "05:50 PM", "maghrib": "08:06 PM", "isha": "09:19 PM" },
    "2025-04-13": { "fajr": "04:37 AM", "zuhr": "01:13 PM", "asr": "05:52 PM", "maghrib": "08:07 PM", "isha": "09:20 PM" },
    "2025-04-14": { "fajr": "04:34 AM", "zuhr": "01:13 PM", "asr": "05:53 PM", "maghrib": "08:09 PM", "isha": "09:22 PM" },
    "2025-04-15": { "fajr": "04:32 AM", "zuhr": "01:13 PM", "asr": "05:54 PM", "maghrib": "08:11 PM", "isha": "09:24 PM" },
    "2025-04-16": { "fajr": "04:30 AM", "zuhr": "01:13 PM", "asr": "05:55 PM", "maghrib": "08:13 PM", "isha": "09:26 PM" },
    "2025-04-17": { "fajr": "04:28 AM", "zuhr": "01:12 PM", "asr": "05:56 PM", "maghrib": "08:14 PM", "isha": "09:26 PM" },
    "2025-04-18": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "07:15 PM", "maghrib": "08:16 PM", "isha": "09:45 PM" },
    "2025-04-19": { "fajr": "04:22 AM", "zuhr": "01:12 PM", "asr": "05:59 PM", "maghrib": "08:18 PM", "isha": "09:30 PM" },
    "2025-04-20": { "fajr": "04:20 AM", "zuhr": "01:12 PM", "asr": "06:00 PM", "maghrib": "08:20 PM", "isha": "09:32 PM" },
    "2025-04-21": { "fajr": "04:17 AM", "zuhr": "01:12 PM", "asr": "06:01 PM", "maghrib": "08:22 PM", "isha": "09:34 PM" },
    "2025-04-22": { "fajr": "04:15 AM", "zuhr": "01:11 PM", "asr": "06:02 PM", "maghrib": "08:23 PM", "isha": "09:35 PM" },
    "2025-04-23": { "fajr": "04:12 AM", "zuhr": "01:11 PM", "asr": "06:03 PM", "maghrib": "08:25 PM", "isha": "09:37 PM" },
    "2025-04-24": { "fajr": "04:09 AM", "zuhr": "01:11 PM", "asr": "06:04 PM", "maghrib": "08:27 PM", "isha": "09:38 PM" },
    "2025-04-25": { "fajr": "05:00 AM", "zuhr": "01:30 PM", "asr": "07:30 PM", "maghrib": "08:29 PM", "isha": "10:00 PM" },
    "2025-04-26": { "fajr": "04:05 AM", "zuhr": "01:11 PM", "asr": "06:07 PM", "maghrib": "08:30 PM", "isha": "09:42 PM" },
    "2025-04-27": { "fajr": "04:02 AM", "zuhr": "01:11 PM", "asr": "06:08 PM", "maghrib": "08:32 PM", "isha": "09:44 PM" },
    "2025-04-28": { "fajr": "04:00 AM", "zuhr": "01:10 PM", "asr": "06:09 PM", "maghrib": "08:34 PM", "isha": "09:44 PM" },
    "2025-04-29": { "fajr": "03:58 AM", "zuhr": "01:10 PM", "asr": "06:10 PM", "maghrib": "08:36 PM", "isha": "09:44 PM" },
    "2025-04-30": { "fajr": "03:55 AM", "zuhr": "01:10 PM", "asr": "06:11 PM", "maghrib": "08:37 PM", "isha": "09:45 PM" }
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