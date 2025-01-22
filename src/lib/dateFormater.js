export function formatTimeDifference(isoString) {
    const now = new Date();
    const givenDate = new Date(isoString);
    const timeDifference = now - givenDate; // Difference in milliseconds

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days

    if (daysDifference < 7) {
        return `${daysDifference} day${daysDifference !== 1 ? "s" : ""}`;
    } else {
        const weeks = Math.floor(daysDifference / 7);
        return `${weeks} week${weeks !== 1 ? "s" : ""}`;
    }
}
