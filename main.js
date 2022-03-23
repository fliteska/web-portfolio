const mods = [
    {
        name: "The Wabbagat",
        img: "/img/wabbagat.png",
        description: "Sheogorath has found his way into Boston and lost his Wabbagat, a gun inspired by the Wabbajack from The Elder Scrolls.",
        links: [
            { platform: "PC", url: "https://www.nexusmods.com/fallout4/mods/57779" },
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4255551" }
        ],
        tags: ['weapon']
        
    },
    {
        name: "SCP Foundation",
        img: "/img/default-mod-image.png",
        description: "Adds craftable SCP themed objects to the build menu.",
        links: [
            { platform: "PC", url: "https://www.nexusmods.com/fallout4/mods/49314" },
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4194418" }
        ],
        tags: ['workshop']
    },
    {
        name: "Workshop Rotation",
        img: "/img/WorkshopRotation.png",
        description: "Allows users on XB1 to rotate objects on different axises.",
        links: [
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4127315" }
        ],
        tags: ['utility']
    },
    {
        name: "Hooded Synth Helmet",
        img: "/img/HoodedSynthHelmets.png",
        description: "Adds craftable synth helmets with hoods to the chem station.",
        links: [
            { platform: "PC", url: "https://www.nexusmods.com/fallout4/mods/54553" },
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4234354" }
        ],
        tags: ['armor']
    },
    {
        name: "Carts of The Commonwealth",
        img: "/img/CartsOfTheCommonwealth.png",
        description: "Adds craftable carts and buggies to the build menu because how else do settlers carry stuff around without breaking immersion.",
        links: [
            { platform: "PC", url: "https://www.nexusmods.com/fallout4/mods/48318" },
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4185991" }
        ],
        tags: ['workshop']
    },
    {
        name: "New Worlds Holotape",
        img: "/img/NewWorldsHolotape.png",
        description: "Adds a holotape with access to multiple worldspaces for building settlements.",
        links: [
            { platform: "PC", url: "https://www.nexusmods.com/fallout4/mods/47671" },
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4180698" }
        ],
        tags: ['new worlds', 'settlement']
    },
    {
        name: "The Cove",
        img: "/img/TheCove.png",
        description: "Adds a new island worldspace with a settlement, accessible from the docks by Croup Manor. Also adds a few pirate themed armor mash ups craftable at the chem station.",
        links: [
            { platform: "PC", url: "https://www.nexusmods.com/fallout4/mods/45985" },
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4167563" }
        ],
        tags: ['new worlds', 'settlement']
    },
    {
        name: "Pumpkin Helmet",
        img: "/img/default-mod-image.png",
        description: "Adds the plastic pumpkin as a helmet for halloween, craftable at the chem station.",
        links: [
            { platform: "PC", url: "https://www.nexusmods.com/fallout4/mods/55381" },
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4240373" }
        ],
        tags: ['armor']
    },
    {
        name: "Custom Armor Pieces",
        img: "/img/default-mod-image.png",
        description: "Just a random collection of armor mash ups made by request of users.",
        links: [
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4211767" }
        ],
        tags: ['armor']
    },
    {
        name: "Warehouse Shelves",
        img: "/img/default-mod-image.png",
        description: "Prebuilt Warehouse shelves made by request of users.",
        links: [
            { platform: "PS4", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4209815" }
        ],
        tags: ['workshop']
    }
];

const getIconClassesByTag = tag => {
    switch (tag) {
        case "weapon": return ["fa-solid", "fa-gun"];
        case "utility": return ["fa-solid", "fa-toolbox"];
        case "settlement": return ["fa-solid", "fa-house"];
        case "new worlds": return ["fa-solid", "fa-map-location-dot"];
        case "armor": return ["fa-solid", "fa-shield"];
        case "workshop": return ["fa-solid", "fa-screwdriver-wrench"];
        default: return [];
    }
}

const modSection = document.querySelector("#mods");
const modTemplate = document.querySelector("#mod-template");
const downloadBtnTemplate = document.querySelector("#download-button-template");
const tagTemplate = document.querySelector("#tags-template");

mods.map(mod => {
    const clone = modTemplate.content.cloneNode(true);
    clone.querySelector("strong").innerHTML = mod.name;
    clone.querySelector("img").src = mod.img;
    clone.querySelector("p").innerHTML = mod.description;
    mod.tags.map(tag => {
        const tagEl = tagTemplate.content.cloneNode(true);
        tagEl.querySelector("span").setAttribute("title", tag);
        const iconClasses = getIconClassesByTag(tag);
        console.log(iconClasses)
        iconClasses.map(iconClass => tagEl.querySelector("i").classList.add(iconClass));
        clone.querySelector('.tags').appendChild(tagEl);
    });
    mod.links.map(link => {
        const downloadBtn = downloadBtnTemplate.content.cloneNode(true);
        downloadBtn.querySelector("a").setAttribute('title', `Download on ${link.platform}`);
        switch (link.platform) {
            case "XB1":
                downloadBtn.querySelector("i").classList.add("fab");
                downloadBtn.querySelector("i").classList.add("fa-xbox");
                downloadBtn.querySelector("a").classList.add("bg-xb");
                break;
            case "PS4":
                downloadBtn.querySelector("i").classList.add("fab");
                downloadBtn.querySelector("i").classList.add("fa-playstation");
                downloadBtn.querySelector("a").classList.add("bg-ps");
                break;
            case "PC":
                downloadBtn.querySelector("i").classList.add("fas");
                downloadBtn.querySelector("i").classList.add("fa-desktop");
                downloadBtn.querySelector("a").classList.add("bg-pc");
                break;
        }
        downloadBtn.querySelector("a").setAttribute("href", link.url);
        clone.querySelector(".downloads").appendChild(downloadBtn);
    });
    modSection.appendChild(clone);
});
