const content = [
{
    image: "january.jpg",
    title: "Front",
    medium: "Acrylic on Canvas"
},
{
    image: "february.jpg",
    title: "Apples",
    medium: "Acrylic on Canvas"
},
{
    image: "march.jpg",
    title: "Morning Watch",
    medium: "Mixed Acrylic on Canvas"
},
{
    image: "april.jpg",
    title: "All in All",
    medium: "Mixed Media on Paper"
},
{
    image: "may.jpg",
    title: "May - Fallow",
    medium: "Watercolor"
},
{
    image: "june.jpg",
    title: "Summer Inlet",
    medium: "Acrylic on Canvas"
},
{
    image: "july.jpg",
    title: "Jump",
    medium: "Mixed Media on Canvas"
},
{
    image: "august.jpg",
    title: "Buttermilk Morning",
    medium: "Acrylic on Canvas"
},
{
    image: "september.jpg",
    title: "Morning Call",
    medium: "Watercolor"
},
{
    image: "october.jpg",
    title: "Dawn",
    medium: "Acrylic on Textured Paper"
},
{
    image: "november.jpg",
    title: "November Storm",
    medium: "Mixed Media on Canvas"
},
{
    image: "december.jpg",
    title: "First Snow",
    medium: "Watercolor"
},
];





const main = document.querySelector("main");

for (let dict of content) {
    let newElement = document.createElement('div');
    main.appendChild(newElement);
    
    
    imageTag = document.createElement('img');
    titleTag = document.createElement('h3');
    mediumTag = document.createElement('p'); 

    newElement.appendChild(imageTag);
    newElement.appendChild(titleTag);
    newElement.appendChild(mediumTag);

    imageTag.src = `assets/images/${dict["image"]}`;
    titleTag.textContent = dict["title"];
    mediumTag.textContent = `Medium: ${dict["medium"]}`;
}