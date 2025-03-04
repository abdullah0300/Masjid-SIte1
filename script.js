const prayerTimes = [
    { name: "Fajr", time: "05:30 AM" }, // Example time, adjust as needed
    { name: "Duhr", time: "01:00 PM" }, // Example time, adjust as needed
    { name: "Asr", time: "04:30 PM" },  // Example time, adjust as needed
    { name: "Maghrib", time: "05:45 PM" }, // Example time, adjust as needed
    { name: "Isha", time: "07:15 PM" }  // Example time, adjust as needed
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
    "2025-03-01": { "fajr": "05:30 AM", "zuhr": "01:30 PM", "asr": "04:45 PM", "maghrib": "05:50 PM", "isha": "07:30 PM" },
    "2025-03-02": { "fajr": "05:30 AM", "zuhr": "01:30 PM", "asr": "04:45 PM", "maghrib": "05:52 PM", "isha": "07:30 PM" },
    "2025-03-03": { "fajr": "05:30 AM", "zuhr": "01:30 PM", "asr": "04:45 PM", "maghrib": "05:54 PM", "isha": "07:30 PM" },
    "2025-03-04": { "fajr": "05:30 AM", "zuhr": "01:30 PM", "asr": "04:45 PM", "maghrib": "05:55 PM", "isha": "07:30 PM" },
    "2025-03-05": { "fajr": "05:30 AM", "zuhr": "01:30 PM", "asr": "04:45 PM", "maghrib": "05:57 PM", "isha": "07:30 PM" },
    "2025-03-06": { "fajr": "05:30 AM", "zuhr": "01:30 PM", "asr": "04:45 PM", "maghrib": "05:59 PM", "isha": "07:30 PM" },
    "2025-03-07": { "fajr": "05:15 AM", "zuhr": "12:30 PM", "asr": "05:00 PM", "maghrib": "06:01 PM", "isha": "07:45 PM" },
    "2025-03-08": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "05:00 PM", "maghrib": "06:03 PM", "isha": "07:45 PM" },
    "2025-03-09": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "05:00 PM", "maghrib": "06:05 PM", "isha": "07:45 PM" },
    "2025-03-10": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "05:00 PM", "maghrib": "06:06 PM", "isha": "07:45 PM" },
    "2025-03-11": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "05:00 PM", "maghrib": "06:08 PM", "isha": "07:45 PM" },
    "2025-03-12": { "fajr": "05:15 AM", "zuhr": "01:30 PM", "asr": "05:00 PM", "maghrib": "06:10 PM", "isha": "07:45 PM" },
    "2025-03-13": { "fajr": "05:15 AM", "zuhr": "12:30 PM", "asr": "05:00 PM", "maghrib": "06:12 PM", "isha": "07:45 PM" },
    "2025-03-14": { "fajr": "05:00 AM", "zuhr": "01:30 PM", "asr": "05:15 PM", "maghrib": "06:14 PM", "isha": "07:45 PM" },
    "2025-03-15": { "fajr": "05:00 AM", "zuhr": "01:30 PM", "asr": "05:15 PM", "maghrib": "06:16 PM", "isha": "07:45 PM" },
    "2025-03-16": { "fajr": "05:00 AM", "zuhr": "01:30 PM", "asr": "05:15 PM", "maghrib": "06:17 PM", "isha": "07:45 PM" },
    "2025-03-17": { "fajr": "05:00 AM", "zuhr": "01:30 PM", "asr": "05:15 PM", "maghrib": "06:19 PM", "isha": "07:45 PM" },
    "2025-03-18": { "fajr": "05:00 AM", "zuhr": "01:30 PM", "asr": "05:15 PM", "maghrib": "06:21 PM", "isha": "07:45 PM" },
    "2025-03-19": { "fajr": "05:00 AM", "zuhr": "01:30 PM", "asr": "05:15 PM", "maghrib": "06:23 PM", "isha": "07:45 PM" },
    "2025-03-20": { "fajr": "05:00 AM", "zuhr": "12:30 PM", "asr": "05:15 PM", "maghrib": "06:25 PM", "isha": "07:45 PM" },
    "2025-03-21": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "05:30 PM", "maghrib": "06:26 PM", "isha": "08:00 PM" },
    "2025-03-22": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "05:30 PM", "maghrib": "06:28 PM", "isha": "08:00 PM" },
    "2025-03-23": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "05:30 PM", "maghrib": "06:30 PM", "isha": "08:00 PM" },
    "2025-03-24": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "05:30 PM", "maghrib": "06:32 PM", "isha": "08:00 PM" },
    "2025-03-25": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "05:30 PM", "maghrib": "06:34 PM", "isha": "08:00 PM" },
    "2025-03-26": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "05:30 PM", "maghrib": "06:35 PM", "isha": "08:00 PM" },
    "2025-03-27": { "fajr": "04:45 AM", "zuhr": "01:30 PM", "asr": "05:30 PM", "maghrib": "06:37 PM", "isha": "08:00 PM" },
    "2025-03-28": { "fajr": "04:30 AM", "zuhr": "12:30 PM", "asr": "05:45 PM", "maghrib": "06:39 PM", "isha": "08:15 PM" },
    "2025-03-29": { "fajr": "04:30 AM", "zuhr": "01:30 PM", "asr": "05:45 PM", "maghrib": "06:41 PM", "isha": "08:15 PM" },
    "2025-03-30": { "fajr": "05:30 AM", "zuhr": "01:30 PM", "asr": "06:00 PM", "maghrib": "07:42 PM", "isha": "09:15 PM" },
    "2025-03-31": { "fajr": "05:30 AM", "zuhr": "01:30 PM", "asr": "05:35 PM", "maghrib": "07:44 PM", "isha": "09:15 PM" }
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