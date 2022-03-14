const mods = [
    {
        name: "The Wabbagat",
        img: "/img/wabbagat.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatur eveniet? Itaque voluptates omnis aut!",
        links: [
            { platform: "PC", url: "https://www.nexusmods.com/fallout4/mods/57779" },
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4255551" }
        ],
        tags: ['weapon']
        
    },
    {
        name: "SCP Foundation",
        img: "/img/default-mod-image.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatur eveniet? Itaque voluptates omnis aut!",
        links: [
            { platform: "PC", url: "https://www.nexusmods.com/fallout4/mods/49314" },
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4194418" }
        ],
        tags: ['workshop']
    },
    {
        name: "Workshop Rotation",
        img: "/img/WorkshopRotation.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatur eveniet? Itaque voluptates omnis aut!",
        links: [
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4127315" }
        ],
        tags: ['utility']
    },
    {
        name: "Hooded Synth Helmet",
        img: "/img/HoodedSynthHelmets.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatur eveniet? Itaque voluptates omnis aut!",
        links: [
            { platform: "PC", url: "https://www.nexusmods.com/fallout4/mods/54553" },
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4234354" }
        ],
        tags: ['armor']
    },
    {
        name: "Carts of The Commonwealth",
        img: "/img/CartsOfTheCommonwealth.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatur eveniet? Itaque voluptates omnis aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatur eveniet? Itaque voluptates omnis aut!",
        links: [
            { platform: "PC", url: "https://www.nexusmods.com/fallout4/mods/48318" },
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4185991" }
        ],
        tags: ['workshop']
    },
    {
        name: "New Worlds Holotape",
        img: "/img/NewWorldsHolotape.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatur eveniet? Itaque voluptates omnis aut!",
        links: [
            { platform: "PC", url: "https://www.nexusmods.com/fallout4/mods/47671" },
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4180698" }
        ],
        tags: ['new worlds', 'settlement']
    },
    {
        name: "The Cove",
        img: "/img/TheCove.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatur eveniet? Itaque voluptates omnis aut!",
        links: [
            { platform: "PC", url: "https://www.nexusmods.com/fallout4/mods/45985" },
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4167563" }
        ],
        tags: ['new worlds', 'settlement']
    },
    {
        name: "Pumpkin Helmet",
        img: "/img/default-mod-image.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatur eveniet? Itaque voluptates omnis aut!",
        links: [
            { platform: "PC", url: "https://www.nexusmods.com/fallout4/mods/55381" },
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4240373" }
        ],
        tags: ['armor']
    },
    {
        name: "Custom Armor Pieces",
        img: "/img/default-mod-image.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatur eveniet? Itaque voluptates omnis aut!",
        links: [
            { platform: "XB1", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4211767" }
        ],
        tags: ['armor']
    },
    {
        name: "Warehouse Shelves",
        img: "/img/default-mod-image.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatur eveniet? Itaque voluptates omnis aut!",
        links: [
            { platform: "PS4", url: "https://bethesda.net/en/mods/fallout4/mod-detail/4209815" }
        ],
        tags: ['workshop']
    }
];

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
        tagEl.querySelector("span").innerHTML = tag;
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
