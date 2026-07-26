const button = document.getElementById('button');
const picturearea = document.getElementById('nina');

const images = [
    'nina1.jpg',
    'nina2.jpg',
    'nina3.jpg',
    'nina4.jpg',
    'nina5.jpg',
    'nina6.jpg',
    'nina7.jpg',
    'nina8.jpg',
    'nina9.jpg',
    'nina10.jpg',
    'nina11.jpg',
    'nina12.jpg',
    'nina13.jpg',
    'nina14.jpg',
    'nina15.jpg',
    'nina16.jpg',
]

button.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const chosenImage = images[randomIndex];
    picturearea.innerHTML = `<img src="img/nina/${chosenImage}" alt="nina">`;
});