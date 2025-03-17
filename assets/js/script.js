const content = [
{
    image: "assets/images/january.jpg",
    title: "Front",
    medium: "Acrylic on Canvas"
},
{
    image: "assets/images/february.jpg",
    title: "Apples",
    medium: "Acrylic on Canvas"
},
{
    image: "assets/images/march.jpg",
    title: "Morning Watch",
    medium: "Mixed Acrylic on Canvas"
},
{
    image: "assets/images/april.jpg",
    title: "All in All",
    medium: "Mixed Media on Paper"
},
{
    image: "assets/images/may.jpg",
    title: "May - Fallow",
    medium: "Watercolor"
},
{
    image: "assets/images/june.jpg",
    title: "Summer Inlet",
    medium: "Acrylic on Canvas"
},
{
    image: "assets/images/july.jpg",
    title: "Jump",
    medium: "Mixed Media on Canvas"
},
{
    image: "assets/images/august.jpg",
    title: "Buttermilk Morning",
    medium: "Acrylic on Canvas"
},
{
    image: "assets/images/september.jpg",
    title: "Morning Call",
    medium: "Watercolor"
},
{
    image: "assets/images/october.jpg",
    title: "Dawn",
    medium: "Acrylic on Textured Paper"
},
{
    image: "assets/images/november.jpg",
    title: "November Storm",
    medium: "Mixed Media on Canvas"
},
{
    image: "assets/images/december.jpg",
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

    imageTag.src = `images/${dict["image"]}`;
    titleTag.textContent = dict["title"];
    mediumTag.textContent = `Medium: ${dict["medium"]}`;
}