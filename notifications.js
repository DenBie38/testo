function showNotification(message, type = 'error', duration = 3000) {
    const notification = document.createElement('div');
    notification.id = 'notification';
    notification.classList.add(type);
    notification.textContent = message;
    document.body.appendChild(notification);

    // Zeige die Benachrichtigung an
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);

    // Entferne die Benachrichtigung nach der Dauer
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, duration);
}
