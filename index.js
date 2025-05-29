const button = document.getElementById('themechange');
const header = document.getElementById('news-spinner');

button.addEventListener('click', function() {
    document.body.classList.toggle('lightbody');
    header.classList.toggle('light-news-spinner');
});

// Initial link
const German = document.getElementById('german');
German.addEventListener('click', function (e) {
    e.preventDefault();
    setGermanContent();
});

const aboutme = document.getElementById('main');
const textspinner = document.getElementById('text-spinner');
const interest = document.getElementById('intre')
const old = document.getElementById('old')
const boxcontent = document.getElementById('box-container')


function setGermanContent() {
    aboutme.innerHTML = `
        <h2>Willkommen auf eFellow's Seite!</h2>
        <p>Dies ist meine persönliche Seite</p>
        <p>Die Navigationsleiste enthält ein paar Informationen über mich</p>
        <p>Ich spreche <a href="#" id="english" class="langlink">Englisch</a> und Deutsch
        <br>Fühlen Sie sich frei, mit mir in einer der beiden Sprachen zu kommunizieren</p>
    `;

    textspinner.innerHTML = `
        <span>Willkommen auf eFellow's Seite!</span>
    `;

    interest.innerHTML = `
        <h2>meiner Interessen</h2>
    `;

    boxcontent.innerHTML = `
        <div class="box">
            <h2>Politik</h2>
            <p>Ich bin Sozialist<br>In Bezug auf moderne Parteien identifiziere ich mich am meisten mit Die Linke</p>
            <p>Ich bin ein großer Fan von politischen Theoriebüchern. Einige meiner Favoriten sind:<br>Das Kapital - Karl Marx<br>The Soviets expected it - Anna Strong</p>
            <p>Ich benutze oft das ☭<br>Das bedeutet nicht, dass ich die USSR unterstütze<br>Es symbolisiert die Einheit zwischen Landarbeitern und Fabrikarbeitern</p>
        </div>
        <div class="box">
            <h2>Informatik</h2>
            <p>Ich interessiere mich sehr für Informatik und Programmierung<br>Ich benutze Linux seit zwei Jahren</p>
            <p>Die Programmiersprachen, die ich gerne benutze, sind:<br>Lua<br>JavaScript<br>Web Dev</p>
            <p>Ich studiere Informatik und Mathematik an der Universität</p>
            <p>Ich habe das Programmieren zuerst mit Scratch gelernt<br><a href="old/123.html" target="_blank" rel="noopener noreferrer" class="langlink">Das</a> war mein erstes Programmierprojekt<br>
                <a href="old/index.html" target="_blank" rel="noopener noreferrer" class="langlink">Hier</a> sind meine alte Setien</p>
        </div>
        <div class="box">
            <h2>Gaming</h2>
            <p>Spiele zu spielen ist ein großes Hobby von mir<br>Ich spiele meistens Automatisierungs- oder Städtebauspiele alleine<br>Mit Freunden spiele ich meistens FPS-Spiele</p>
            <p>Ich spiele viele Spiele, einige meiner Favoriten sind:<br>Satisfactory<br>Cities: Skylines 2<br>Slime Rancher</p>
            <p>Einige meiner Lieblings-FPS-Spiele sind:<br>CS:GO<br>Rainbow 6 Siege<br>Overwatch</p>
        </div>
        <div class="box">
            <h2>Erhaltung digitaler Medien</h2>
            <p>Ich liebe es, alte Medien zu bewahren, besonders alte Spiele und Fernsehsendungen, die mich interessieren</p>
            <p>Ich habe eine riesige Sammlung von Xbox-360-Spielen<br>Ich sammle mehrere Spieleserien wie:<br>Halo<br>Assassin's Creed<br>Mass Effect</p>
            <p>Einige meiner Lieblingsfilme und Fernsehsendungen sind:<br>Die Matrix<br>Rome (HBO)<br>Star Wars</p>
        </div>
    `;


    const englishLink = document.getElementById('english');
    englishLink.addEventListener('click', setEnglishContent);
}

function setEnglishContent() {
    aboutme.innerHTML = `
        <h2>Welcome to eFellow's site!</h2>
        <p>This is my personal site</p>
        <p>The nav bar has a few things about me</p>
        <p>I speak English and <a href="#" id="german" class="langlink">German</a><br>Feel free to communicate to me in either</p>
    `;

    textspinner.innerHTML = `
        <span>Welcome to eFellow's website!</span>
    `;

    interest.innerHTML = `
        <h2>Here are some of my interests</h2>
    `;

    boxcontent.innerHTML = `
        <div class="box">
            <h2> Politics</h2>
            <p> I'm a Socialist <br> In relation to modern parties, I relate most to "Die Linke" in Germany</p>
            <p> I'm a big fan of political theory books. Some of my favourites are: <br> Das Kapital - Karl Marx <br> The Soviets expected it - Anna strong</p>
            <p> I make great use of the ☭ <br>This does not mean I support the USSR<br>It symbolises the unity between agricultural workers and factory workers</p>
        </div>
        <div class="box">
            <h2>Programming</h2>
            <p>I'm very interested in Computer Science and programming<br>I've ran linux for years</p>
            <p>The languages I enjoy to program in are:<br>Lua<br>JavaScript<br>Web Dev</p>
            <p>I'm persuing CS and Maths at university</p>
            <p>I first learned how to program through Scratch<br><a href="old/123.html" target="_blank" rel="noopener noreferrer" class="langlink">This</a> was my first coding project<br>
                <a href="old/index.html" target="_blank" rel="noopener noreferrer" class="langlink">Here</a> are some of my old WebSites</p>
        </div>
        <div class="box">
            <h2>Gaming</h2>
            <p>Playing games is a big hobby of mine<br>I mostly play Automation or city building games alone<br>When with friend I mostly play FPS games</p>
            <p>I play a lot of games, some of my favourites are:<br>Satisfactory<br>Cities: Skylines 2<br>Slime Rancher</p>
            <p>Some of my favourite FPS games are:<br>CS:GO<br>Rainbow 6 Siege<br>Overwatch</p>
        </div>
        <div class="box">
            <h2>Media Preservation</h2>
            <p>I love to preserve old media, especially old games and TV shows I'm intersted in</p>
            <p>I have a huge collection of xbox 360 games<br>I collect multiple game series such as:<br>Halo<br> Assassin's creed<br>Mass Effect</p>
            <p>Some of my favourite Movies and TV shows are:<br>The Matrix<br>Rome (HBO)<br>Star Wars</p>
        </div>
    `;

    const germanLink = document.getElementById('german');
    germanLink.addEventListener('click', setGermanContent);
};

