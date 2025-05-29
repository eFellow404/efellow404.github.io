const button = document.getElementById('themechange');
const header = document.getElementById('news-spinner');

button.addEventListener('click', function() {
    document.body.classList.toggle('darkbody');
    header.classList.toggle('dark-news-spinner');
});