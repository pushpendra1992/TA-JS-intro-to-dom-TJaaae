function showGot(houses) {
    const container = document.querySelector(".container");

    houses.forEach((house) => {
        for (let people of house.people) {
            const box = document.createElement("div");
            const innerBox = document.createElement("div");
            const img = document.createElement("img");
            const name = document.createElement("h2");
            const description = document.createElement("p");
            const link = document.createElement("a");

            img.src = people.image;
            name.textContent = people.name;
            description.textContent = people.description;
            link.href = people.wikiLink;
            link.classList.add("btn");
            link.innerText = "Learn More!";

            box.classList.add("box");
            innerBox.classList.add("innerBox");

            innerBox.append(img, name);
            box.append(innerBox, description, link);
            container.append(box);
        }
    });
}

showGot(got.houses);
