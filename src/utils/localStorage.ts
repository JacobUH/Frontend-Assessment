
export function getCheckInStatus(id: number) {
    return localStorage.getItem(`checkin-${id}`);
}

export function toggleCheckIn(id: number) {
    const key = `checkin-${id}`;

    if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
        return false;
    } else {
        localStorage.setItem(key, "checked");
        return true
    }
}