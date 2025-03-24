// declaring Database

let database = {
    "zeus": {
        "title": "Zeus",
        "url": "./img/zeus.png",
        "alt": "Image of Zeus",
        "body": "Zeus is the chief deity of the Greek pantheon. He is a sky and thunder god in ancient Greek religion and mythology, who rules as king of the gods on Mount Olympus. Zeus is the child of Cronus and Rhea, the youngest of his siblings to be born, though sometimes reckoned the eldest as the others required disgorging from Cronus's stomach. In most traditions, he is married to Hera, by whom he is usually said to have fathered Ares, Eileithyia, Hebe, and Hephaestus. At the oracle of Dodona, his consort was said to be Dione, by whom the Iliad states that he fathered Aphrodite. According to the Theogony, Zeus's first wife was Metis, by whom he had Athena. Zeus was also infamous for his erotic escapades. These resulted in many divine and heroic offspring, including Apollo, Artemis, Hermes, Persephone, Dionysus, Perseus, Heracles, Helen of Troy, Minos, and the Muses."
    },

    "poseidon": {
        "title": "Poseidon",
        "url": "./img/poseidon.png",
        "alt": "Image of Poseidon",
        "body": "Poseidon is one of the twelve Olympians in ancient Greek religion and mythology, presiding over the sea, storms, earthquakes and horses.He was the protector of seafarers and the guardian of many Hellenic cities and colonies. In pre-Olympian Bronze Age Greece, Poseidon was venerated as a chief deity at Pylos and Thebes, with the cult title earth shaker; in the myths of isolated Arcadia, he is related to Demeter and Persephone and was venerated as a horse, and as a god of the waters. Poseidon maintained both associations among most Greeks: he was regarded as the tamer or father of horses, who, with a strike of his trident, created springs (the terms for horses and springs are related in the Greek language). His Roman equivalent is Neptune."
    },

    "hades": {
        "title": "Hades",
        "url": "./img/hades.png",
        "alt": "Image of Hades",
        "body": "Hades , in the ancient Greek religion and mythology, is the god of the dead and the king of the underworld, with which his name became synonymous. Hades was the eldest son of Cronus and Rhea, although this also made him the last son to be regurgitated by his father. He and his brothers, Zeus and Poseidon, defeated their father's generation of gods, the Titans, and claimed joint rulership over the cosmos. Hades received the underworld, Zeus the sky, and Poseidon the sea, with the solid earth (long the province of Gaia) available to all three concurrently. In artistic depictions, Hades is typically portrayed holding a bident and wearing his helm with Cerberus, the three-headed guard-dog of the underworld, standing at his side."    
        }
};

let content = document.querySelector(".content");
let btns = document.querySelectorAll(".controls button");

content.innerHTML = `
                            <h1>${database.zeus.title}</h1>
                            <img src="${database.zeus.url}" alt="${database.zeus.alt}">
                            <p>${database.zeus.body}</p>
                            `;


// Event handler function
function handleClick(e) {

    for (let btn of btns) {
        if (btn.hasAttribute('id')) {
            btn.removeAttribute('id')
        }
    }
    let currentlyClicked = e.target;

    

    //console.log(currentlyClicked.dataset.id);

    let key = currentlyClicked.dataset.id;
    content.innerHTML = `
                            <h1>${database[key].title}</h1>
                            <img src="${database[key].url}" alt="${database[key].alt}">
                            <p>${database[key].body}</p>`;

    

    // Add attribute id to currently clicked item
    currentlyClicked.id = 'active';
}

for (let btn of btns) {
    btn.addEventListener('click', handleClick);
}

