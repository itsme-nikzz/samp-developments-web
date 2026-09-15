fetch('https://discord.com/api/v10/invites/9FJx5RSv6B?with_counts=true')
.then(response => response.json())
.then(data => {
    document.getElementById('discord-members').innerText = `${data.approximate_member_count} MEMBERS`;
    document.getElementById('member-badge').classList.remove('hidden');
})
.catch(error => console.error(error));

const scrollBtn = document.getElementById('scroll-btn');
const scrollIcon = document.getElementById('scroll-icon');

function updateScrollButton() {
    const nearTop = window.scrollY < 200;
    scrollIcon.style.transform = nearTop ? 'rotate(0deg)' : 'rotate(180deg)';
    scrollBtn.setAttribute('aria-label', nearTop ? 'Scroll down' : 'Scroll up');
    scrollBtn.dataset.direction = nearTop ? 'down' : 'up';
}

scrollBtn.addEventListener('click', () => {
    if (scrollBtn.dataset.direction === 'down') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

window.addEventListener('scroll', updateScrollButton);
updateScrollButton();