const boxes = document.getElementById('boxes');
const auth = document.getElementById('authorisation');
const dropDown = document.getElementById('dropDown');
const enter = document.getElementById('enter');






enter.addEventListener('click', () => {
    if (dropDown.style.height == '150px') {
        dropDown.style.height = '0px';
    }else {
        dropDown.style.height = '150px';
        menuBar.style.width = '0px';
        menuBar.style.overflow = 'hidden';

    }
})



let newDoc = [
{
    head : 'მაგიდის დამზადება',
    price : 'ფასი შეთავაზებით'
},
{
    head : 'საათის შეკეთება',
    price : '50ლარი'
},
{
    head : 'სამაჯური',
    price : 'ფასი შეთავაზებით'
},
{
    head : 'ქვის დამუშავება',
    price : 'ფასი შეთავაზებით'
},
{
    head : 'კაბის შეკერვა',
    price : '200 ლარი'
},
{
    head : 'ჩანთის შეკერვა',
    price : '100 ლარი'
},
{
    head : 'ოქრომჭედელი',
    price : 'ფასი შეთავაზებით'
},
{
    head : 'ქრომირება',
    price : '250ლარი'
},
{
    head : 'შეღებვა',
    price : '20ლარი'
}
]

    for (let i = 0; i < 9; i++) {
        boxes.innerHTML += 
        `<div  class="adv marg">
            <h4> <a href="#"> ${newDoc[i].head} </a></h4>
            <p> ${newDoc[i].price} </p>
        </div>
        `
    }



// -------------responsive-----------


const thirdBox = document.getElementById('3rd')
const fourthBox = document.getElementById('4th');
const menuButton = document.getElementById('menu');
const menuBar = document.getElementById('menuBar');
const closeBar = document.getElementById('close');


// function addMarge(res1) {
//     if (res1.matches) { 
//         fourthBox.classList.add('marg');

//     } else {
//         fourthBox.classList.remove('marg');
//     }
//   }
  
//   var res1 = window.matchMedia("(max-width: 930px)")
//   addMarge(res1);
//   res1.addListener(addMarge);





menuButton.addEventListener('click', () => {
    menuBar.style.width = '100%';
    menuBar.style.height = '100%'
    menuBar.style.overflow = 'visible';
    dropDown.style.height = '0px';
})

closeBar.addEventListener('click', () => {
    menuBar.style.width = '0px';
    menuBar.style.overflow = 'hidden';
})
