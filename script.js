function main(){   
const images = [
    "img-0",
    "img-1",
    "img-2",
    "img-3",
    "img-4",
    "img-5"

];

const texts= [
    `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus corrupti pariatur unde a quidem nulla obcaecati dignissimos, commodi, itaque in, dolores odit? Laborum nulla minima debitis fugit mollitia dolorem delectus</p>`,
    `Lorem ipsum dolor sit amet consectetur  elit. Fugiat  corrupti pariatur unde a quidem nulla obcaecati dignissimos, commodi, itaque in, dolores odit? Laborum nulla minima debitis fugit mollitia dolorem delectus`,
    `Lorem ipsum dolor sit  consectetur adipisicing elit. Fugiat repellendus corrupti pariatur unde a quidem nulla obcaecati dignissimos, commodi, itaque in, dolores odit? Laborum nulla minima debitis fugit mollitia dolorem delectus`,
    `Lorem ipsum dolor sit amet  adipisicing elit. Fugiat repellendus corrupti pariatur unde a quidem nulla obcaecati dignissimos, commodi, itaque in, dolores odit? Laborum nulla minima debitis fugit mollitia dolorem delectus`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus corrupti pariatur unde a quidem nulla obcaecati dignissimos, commodi, itaque in`,
   ` Lorem ipsum  sit amet consectetur adipisicing elit. Fugiat repellendus corrupti pariatur unde a quidem nulla obcaecati dignissimos, commodi, itaque in, dolores odit?`
];

const names = [
    "Place holder",
    "name full",
    "John legend",
    "name something",
    "name one",
    "name two"
];

const buttons = document.querySelectorAll(".btn");
const imageContainer = document.querySelector(".img");
const textContainer = document.querySelector(".lorem");
const nameContainer = document.querySelector(".name");
let counter =0;


        buttons.forEach(function(button){
            button.addEventListener("click", function(e){
                if(button.classList.contains("btn-left")){
                    counter --
                    if (counter < 0) {
                        counter = images.length - 1;
                    }
                    imageContainer.setAttribute("src", `/img/${images[counter]}.jpg`);
                    textContainer.textContent = `${texts[counter]}`;
                    nameContainer.textContent = `${names[counter]}`;
                }
    
    
                if (button.classList.contains("btn-right")){
                    counter++;
                    if (counter > images.length -1){
                        counter =0;
                    }
                    imageContainer.setAttribute("src", `img/${images[counter]}.jpg`);
                    textContainer.textContent = `${texts[counter]}`;
                    nameContainer.textContent = `${names[counter]}`;
                }
            });
        });
    }
    

    main();    


