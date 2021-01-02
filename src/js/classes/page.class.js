export default class Page{

    constructor(name, level = null){
        this.container = document.createElement('div');
        this.container.classList.add('page-overlay');
        

        // Close Button
        let close = document.createElement('div');
        close.classList.add('close-overlay');
        close.innerText = "✕";
        close.addEventListener('click', (e) =>{
            e.target.parentNode.parentNode.removeChild(close.parentNode);
        });

        if (level){
            this.level = level;
            close.addEventListener('click', (e) =>{
                this.level.pauseGame();// Toggle Pause
            });
        }

        this.container.appendChild(close);

        let pageData;
        if (name == "rules"){
            pageData = this.buildRules();
        }else if (name == "about"){
            pageData = this.buildAbout();
        }else if (name == "credits"){
            pageData = this.buildCredits();
        }else if (name == "settings"){
            pageData = this.buildSettings();
        }

        this.container.appendChild(pageData);
        return this.container;
    }

    buildRules(){
        let frame = document.createElement('div');
        frame.innerHTML = 
        '<p>...I am still working on adding the rules...</p>' +
        '<h1>Game Rules</h1>' +
        '<ul>' +
        '<li>Clean all the viruses before your time runs out</li>' + 
        '<li>Ensure the room does not become too dirty</li>' +
        '</ul>';

        return frame;
    }

    buildAbout(){
        let frame = document.createElement('div');
        frame.innerHTML = 
        '<p>...I am still working on adding the about...</p>' +
        '<h1>About</h1>';

        return frame;
    }

    buildCredits(){
        let frame = document.createElement('div');
        frame.innerText = "Credits Page";

        frame.innerHTML = 
        '<p>...I am still working on adding the credits...</p>' +
        '<h1>Attributions</h1>' +
        '<h2>Illustrations</h2>' +
        '<a href="https://www.freepik.es/vectorpouch">Background Images Created by vectorpouch</a>' +
        'Sound Recorded by Mike Koenig Attibution 3'+
        'Music: “Foggy Forest”, from PlayOnLoop.com Attribution 4.0';

        return frame;
    }

    buildSettings(){
        let frame = document.createElement('div');
        frame.innerText = "Settings Page";

        frame.innerHTML = 
        '<p>...I am still working on adding the settings...</p>' +
        '<h1>Settings</h1>' +
        '<h2>Audio</h2>' +
        '<label><input type="checkbox" /> Enable Audio</label>' +
        '<label><input type="checkbox" /> Play Background Music</label>' +
        '<label><input type="checkbox" /> Play Action Sounds</label>' +
        '<label><input type="range" /> Volume</label>'

        return frame;
    }
}