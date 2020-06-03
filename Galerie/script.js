let listImages = [{
    url: "Images/mais1.jpg"
},
{
    url: "Images/mais2.jpg"
},
{
    url: "Images/mais3.jpg"
},
{
    url: "Images/mais4.jpg"
},
{
     url: "Images/mais5.jpg"
},
{
    url: "Images/mais6.jpg"
}
];

let listImages1 = [{
    url: "Images/maison2.jpg"
},
{
    url: "Images/maison3.jpg"
},
{
    url: "Images/maison4.jpg"
},
{
    url: "Images/maison5.jpg"
},
{
     url: "Images/maison6.jpg"
},
{
    url: "Images/maison7.jpg"
}
];

let listImages2 = [{
    url: "Images/maiso1.jpg"
},
{
    url: "Images/maiso2.jpg"
},
{
    url: "Images/maiso3.jpg"
},
{
    url: "Images/maiso4.jpg"
},
{
     url: "Images/maiso5.jpg"
},
{
    url: "Images/maiso6.jpg"
}
];



let listImages3 = [{
    url: "Images/m1.jpg"
},
{
    url: "Images/m2.jpg"
},
{
    url: "Images/m3.jpg"
},
{
    url: "Images/m4.jpg"
},
{
     url: "Images/m5.jpg"
},
{
    url: "Images/m6.jpg"
}
];



let listImages4 = [{
    url: "Images/ma1.jpg"
},
{
    url: "Images/ma2.jpg"
},
{
    url: "Images/ma3.jpg"
},
{
    url: "Images/ma4.jpg"
},
{
     url: "Images/ma5.jpg"
},
{
    url: "Images/ma6.jpg"
}
];




let listImages5 = [{
    url: "Images/mai1.jpg"
},
{
    url: "Images/mai2.jpg"
},
{
    url: "Images/mai3.jpg"
},
{
    url: "Images/mai4.jpg"
},
{
     url: "Images/mai5.jpg"
},
{
    url: "Images/mai6.jpg"
}
];


let listImages6 = [{
    url: "Images/maison11.jpg"
},
{
    url: "Images/maison12.jpg"
},
{
    url: "Images/maison13.jpg"
},
{
    url: "Images/maison14.jpg"
},
{
    url: "Images/maison15.jpg"
},
{
     url: "Images/maison16.jpg"
}
];



let listImages7 = [{
    url: "Images/maison111.jpg"
},
{
    url: "Images/maison112.jpg"
},
{
    url: "Images/maison113.jpg"
},
{
    url: "Images/maison114.jpg"
},
{
    url: "Images/maison115.jpg"
},
{
     url: "Images/maison116.jpg"
}
];



let listImages8 = [{
    url: "Images/maison1111.jpg"
},
{
    url: "Images/maison1112.jpg"
},
{
    url: "Images/maison1113.jpg"
},
{
    url: "Images/maison1114.jpg"
},
{
    url: "Images/maison1115.jpg"
},
{
     url: "Images/maison1116.jpg"
}
];



let listImages9 = [{
    url: "Images/h1.jpg"
},
{
    url: "Images/h2.jpg"
},
{
    url: "Images/h3.jpg"
},
{
    url: "Images/h4.jpg"
},
{
     url: "Images/h5.jpg"
},
{
    url: "Images/h6.jpg"
}
];


let listImages10 = [{
    url: "Images/hom1.jpg"
},
{
    url: "Images/hom2.jpg"
},
{
    url: "Images/hom3.jpg"
},
{
    url: "Images/hom4.jpg"
},
{
     url: "Images/hom5.jpg"
},
{
    url: "Images/hom6.jpg"
}
];


let listImages11 = [{
    url: "Images/home1.jpg"
},
{
    url: "Images/home2.jpg"
},
{
    url: "Images/home3.jpg"
},
{
    url: "Images/home4.jpg"
},
{
     url: "Images/home5.jpg"
},
{
    url: "Images/home6.jpg"
}
];


const allImages = [
    listImages,
    listImages1,
    listImages2,
    listImages3,
    listImages4,
    listImages5,
    listImages6,
    listImages7,
    listImages8,
    listImages9,
    listImages10,
    listImages11
]
let indexes = [0,0,0,0,0,0,0,0,0,0,0,0];

let right = document.getElementsByClassName('fa-chevron-right');
let left = document.getElementsByClassName('fa-chevron-left');
// 
for (let i = 0; i < right.length; i++) {
    right[i].addEventListener('click',()=>{
        if (indexes[i] < allImages[i].length - 1)
            indexes[i]++;
        else 
            indexes[i] = 0;
        // 
        switchImage(i);
    });
    left[i].addEventListener('click',()=>{
        if (indexes[i] > 0)
            indexes[i]--;
        else 
            indexes[i] = allImages[i].length - 1;
        // 
        switchImage(i);
    });
}
// 
function switchImage(pos){
    let name = "image";
    if(pos > 0)
        name += pos;
    document.getElementById(name).src = allImages[pos][indexes[pos]].url;
}



/*  let index = 0;
function switchImage() {
    document.getElementById("image").src = listImages[index].url;
}

function moveLeft() {
    if (index > 0) {
        index--;
    } else {
        index = listImages.length - 1;
    }
    switchImage();
}


function moveRight() {
    if (index < (listImages.length - 1)) {
        index++;
    } else {
        index = 0;
    }
    switchImage();
}*/


var btns = document.getElementsByClassName('reservBtn');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',()=>{
        sessionStorage.setItem("image", `../Galerie/${allImages[i][0].url}`);
    });
}