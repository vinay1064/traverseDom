// traversing the dom //


// var itemlist=document.querySelector('#items');


// // parenrtnode


//  console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);


//  parentElement  //

//  console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentElement.parentElement.parentElement);


// childNode //

// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor='yellow';




// firstchild//
// console.log(itemlist.firstChild);


// firstElementchild//

// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='hello';


// lastchild//
// console.log(itemlist.lastChild);

// lastElementchild//

// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent='hello';




// nextsibling//
// console.log(itemlist.nextSibling);

// nextElementsibling//
// console.log(itemlist.nextElementSibling);


// previoussibling//
// console.log(itemlist.previousSibling);



// previousElementSlibling//
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='red';





//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<  Create Element   >>>>>>>>>>>>>>>>>>>>>>>>>//

//   Create a  div  //


var newDiv = document.createElement('div');
// console.log(newDiv);


// add class  //
//  newDiv.className ='hello';

//  add id
//  newDiv.id ='hello';


//  add attribute //  
// (hello me h=H)
//  newDiv.setAttribute('title','Hello Div');






// //  create textnode 
// var newDivText=document.createTextNode('Hello world');
// // add text to div
// newDiv.appendChild(newDivText);



// var container =document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// container.insertBefore(newDiv,h1);

// newDiv.style.fontSize='30px';



