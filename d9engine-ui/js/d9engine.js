// d9engine UI Logic
const d9 = {
    // Красивое уведомление
    notify: function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `d9-card d9-notification ${type}`;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            border-left: 5px solid ${type === 'premium' ? '#ffd700' : '#ff4444'};
            animation: d9SlideIn 0.5s ease forwards;
        `;
        notification.innerHTML = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'd9SlideOut 0.5s ease forwards';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }
};

// Анимация для уведомлений
const style = document.createElement('style');
style.innerHTML = `
    @keyframes d9SlideIn { from { transform: translateX(120%); } to { transform: translateX(0); } }
    @keyframes d9SlideOut { from { transform: translateX(0); } to { transform: translateX(120%); } }
`;
document.head.appendChild(style);
