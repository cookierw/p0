function rand() {
    return (Math.floor(Math.random() * 3) + 1);
}

function imageString() {
    return `/SLDS/images/product${rand()}.jpg`;
}

export const items = [
    {
        id: 1,
        name: "Gravenstein Apple",
        image: imageString(),
        description: "Tart, crispy baking apple.",
        price: "$1",
        rating: 5,
        seller: "John Appleseed",
        ordered: 0
    },
    {
        id: 2,
        name: "Fuji Apple",
        image: imageString(),
        description: "Sweet, crispy snacking apple.",
        price: "$1",
        rating: 4,
        seller: "Grandma Smith",
        ordered: 0
    },
    {
        id: 3,
        name: "Pink Pearl Apple",
        image: imageString(),
        description: "Tart apple with bright pink flesh.",
        price: "$1",
        rating: 5,
        seller: "Belle McIntosh",
        ordered: 0
    },
    {
        id: 4,
        name: "Gravenstein Apple",
        image: imageString(),
        description: "Tart, crispy baking apple.",
        price: "$1",
        rating: 5,
        seller: "John Appleseed",
        ordered: 0
    },
    {
        id: 5,
        name: "Fuji Apple",
        image: imageString(),
        description: "Sweet, crispy snacking apple.",
        price: "$1",
        rating: 4,
        seller: "Grandma Smith",
        ordered: 0
    },
    {
        id: 6,
        name: "Pink Pearl Apple",
        image: imageString(),
        description: "Tart apple with bright pink flesh.",
        price: "$1",
        rating: 5,
        seller: "Belle McIntosh",
        ordered: 0
    }
]