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
    "2025-06-01": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:27 PM", "isha": "10:40 PM" },
    "2025-06-02": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:28 PM", "isha": "10:40 PM" },
    "2025-06-03": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:29 PM", "isha": "" },
    "2025-06-04": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:30 PM", "isha": "" },
    "2025-06-05": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:31 PM", "isha": "" },
    "2025-06-06": { "fajr": "04:00 AM", "zuhr": "01:30 PM", "asr": "07:30 PM", "maghrib": "09:32 PM", "isha": "10:50 PM" },
    "2025-06-07": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:33 PM", "isha": "" },
    "2025-06-08": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:34 PM", "isha": "" },
    "2025-06-09": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:35 PM", "isha": "" },
    "2025-06-10": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:36 PM", "isha": "" },
    "2025-06-11": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:37 PM", "isha": "" },
    "2025-06-12": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:38 PM", "isha": "" },
    "2025-06-13": { "fajr": "04:00 AM", "zuhr": "01:30 PM", "asr": "07:30 PM", "maghrib": "09:39 PM", "isha": "10:50 PM" },
    "2025-06-14": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:40 PM", "isha": "" },
    "2025-06-15": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:41 PM", "isha": "" },
    "2025-06-16": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:42 PM", "isha": "" },
    "2025-06-17": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:43 PM", "isha": "" },
    "2025-06-18": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:44 PM", "isha": "" },
    "2025-06-19": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:45 PM", "isha": "" },
    "2025-06-20": { "fajr": "04:00 AM", "zuhr": "01:30 PM", "asr": "07:30 PM", "maghrib": "09:46 PM", "isha": "10:50 PM" },
    "2025-06-21": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:47 PM", "isha": "" },
    "2025-06-22": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:48 PM", "isha": "" },
    "2025-06-23": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:49 PM", "isha": "" },
    "2025-06-24": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:50 PM", "isha": "" },
    "2025-06-25": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:51 PM", "isha": "" },
    "2025-06-26": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:52 PM", "isha": "" },
    "2025-06-27": { "fajr": "04:00 AM", "zuhr": "01:30 PM", "asr": "07:30 PM", "maghrib": "09:53 PM", "isha": "10:50 PM" },
    "2025-06-28": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:54 PM", "isha": "" },
    "2025-06-29": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:55 PM", "isha": "" },
    "2025-06-30": { "fajr": "", "zuhr": "", "asr": "", "maghrib": "09:56 PM", "isha": "" }
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