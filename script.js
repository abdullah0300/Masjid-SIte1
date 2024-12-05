// Dummy prayer times and calculation logic
 // Dummy prayer times and calculation logic
 const prayerTimes = [
    { name: "Fajr", time: "05:00 AM" },
    { name: "Dhuhr", time: "12:30 PM" },
    { name: "Asr", time: "03:45 PM" },
    { name: "Maghrib", time: "06:15 PM" },
    { name: "Isha", time: "07:45 PM" }
];

// Function to get the time difference from the current time to the next prayer
function getRemainingTime(nextPrayerTime) {
    const now = new Date();
    const prayerTime = new Date(nextPrayerTime);
    const diffInSeconds = (prayerTime - now) / 1000;
    const hours = Math.floor(diffInSeconds / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = Math.floor(diffInSeconds % 60);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to update the prayer time information dynamically
function updateNamazTime() {
    const nextPrayer = prayerTimes[0]; // Just for demonstration, select Fajr
    const remainingTime = getRemainingTime(new Date().setHours(5, 0, 0)); // Example for Fajr time

    document.getElementById("namaz-name").innerText = nextPrayer.name;
    document.getElementById("remaining-time").innerText = remainingTime;
}

// Update every second to show real-time remaining time
setInterval(updateNamazTime, 1000);
