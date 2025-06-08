export function formatTimeDifference(isoString) {
    const now = new Date();
    const givenDate = new Date(isoString);
    const timeDifference = now - givenDate; // Difference in milliseconds

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
        return "just now";
    } else if (minutes < 60) {
        return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
    } else if (hours < 24) {
        return `${hours} hour${hours !== 1 ? "s" : ""}`;
    } else if (days < 7) {
        return `${days} day${days !== 1 ? "s" : ""}`;
    } else if (days < 30) {
        const weeks = Math.floor(days / 7);
        return `${weeks} week${weeks !== 1 ? "s" : ""}`;
    } else {
        const months = Math.floor(days / 30);
        return `${months} month${months !== 1 ? "s" : ""}`;
    }
}
