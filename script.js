let MakeUp_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';
let searchpagination = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=${company}&product_type=${product_name}'

var data1 = document.querySelector('body')
// var data= fetch(searchpagination);
// console.log("my data",data.json());

let container = document.createElement("div");
container.setAttribute("class", "body");
document.body.append(container);



let footer = document.createElement("div");
footer.setAttribute("class", "pagination bottom");
container.appendChild(footer);

let pagination = document.querySelector(".pagination");
let link = document.getElementsByClassName("pagination-link")
let currentvalue = 1;




function makeuppagination(e) {

  for (var i = 0; i < link.length; i++) {
    console.log(link[i])
    link[i].classList.remove("active")
  }

  e.target.classList.add("active")
  currentvalue = e.target.value
  console.log(currentvalue)
}


function previousbtn() {
  console.log(currentvalue);
  for (var i = 0; i < link.length; i++) {
    link[i].classList.remove("active")
  }
  if (currentvalue == 1) {
    link[0].classList.add("active")
  }
  else if (currentvalue > 1) {
    currentvalue--
    console.log(currentvalue)
    link[currentvalue - 1].classList.add("active")
  }
}



function nextbtn() {
  for (var i = 0; i < link.length; i++) {
    link[i].classList.remove("active")
  }
  if (currentvalue == 10) {
    link[9].classList.add("active")
  }
  else if (currentvalue <= 10) {
    currentvalue++
    link[currentvalue - 1].classList.add("active");
    console.log(currentvalue);
  }
}




function firstbtn() {
  for (var i = 0; i < link.length; i++) {
    link[i].classList.remove("active")

  }
  link[0].classList.add("active")
  currentvalue = 1;
  console.log(currentvalue)
}



function lastbtn() {
  for (var i = 0; i < link.length; i++) {
    link[i].classList.remove("active")
  }
  link[9].classList.add("active")
  currentvalue = 10;
  console.log(currentvalue)
}

pagination.innerHTML += `<ul class="pagination-body">
                        <li class="first " value="1" onclick="firstbtn()">First</li>
                        <li class="previous " onclick="previousbtn()">&laquo;</li>
                        <li class="pagination-link active" value="1" onclick="makeuppagination(e)">1</li>
                        <li class="pagination-link" value="2" onclick="makeuppagination(e)">2</li>
                        <li class="pagination-link" value="3" onclick="makeuppagination(e)">3</li>
                        <li class="pagination-link" value="4" onclick="makeuppagination(e)">4</li>
                        <li class="pagination-link" value="5" onclick="makeuppagination(e)">5</li>
                        <li class="pagination-link" value="6" onclick="makeuppagination(e)">6</li>
                        <li class="pagination-link" value="7" onclick="makeuppagination(e)">7</li>
                        <li class="pagination-link" value="8" onclick="makeuppagination(e)">8</li>
                        <li class="pagination-link" value="9" onclick="makeuppagination(e)">9</li>
                        <li class="pagination-link" value="10" onclick="makeuppagination(e)">10</li>
                        <li class="next" onclick="nextbtn()">&raquo;</li>
                        <li class="last"  onclick="lastbtn()">Last</li>
                        </ul>`

async function Makeup(start, end) {
  try{
    var response = await fetch(MakeUp_URL, {
      "method": "GET",
      "contentType": "application/json ; charset: utf-8",
  
    });
  
    var data = await response.json();
    console.log(data);
    for (var i = start; i < end; i++) {
      var company = data[i].brand;
      var product_name = data[i].name;
      var product_price = data[i].price;
      var image = data[i].image_link;
      var productlink = data[i].product_link
      var Description = data[i].description
  
      // var container = document.createElement('div');
  
      // var imgtag = document.createElement('img');
      // imgtag.src = image;
      let card = document.createElement("div");
      card.setAttribute("class", "main-card");
      container.appendChild(card);
  
      let productCards = document.querySelector(".main-card")
  
      productCards.innerHTML = `<div class="card" style="width: 18rem;">
          <h5 class="card-title">Brand Name:${company}</h5>
          <h5 class="card-title">Product Name:${product_name}</h5>
          <img class="card-img-top" src="${image}" alt="Card image cap">
          <div class="card-body">
            
            <p class="card-text">${Description}</p>
            <a href="${productlink}"> Product Link</a>
            <button class="btn btn-success"> ${product_price}|BUY</button>
          
          </div>
        </div>`
      data1.append(productCards);
    }
  }
  catch (error) {
    console.log(error)
  }
}

Makeup(0, 30);




let paginationBody = document.querySelector(".pagination-body");
paginationBody.addEventListener("click", () => {

  if (currentvalue == 1) {
    let productCards = document.querySelector(".main-card");
    productCards.remove();
    Makeup(0, 30);
  }
  else if (currentvalue == 2) {
    let productCards = document.querySelector(".main-card");
    productCards.remove();
    Makeup(30, 60);
  }
  else if (currentvalue == 3) {
    let productCards = document.querySelector(".main-card");
    productCards.remove();
    Makeup(60, 90);
  }
  else if (currentvalue == 4) {
    let productCards = document.querySelector(".main-card");
    productCards.remove();
    Makeup(90, 120);
  }
  else if (currentvalue == 5) {
    let productCards = document.querySelector(".main-card");
    productCards.remove();
    Makeup(120, 150);
  }
  else if (currentvalue == 6) {
    let productCards = document.querySelector(".main-card");
    productCards.remove();
    Makeup(150, 180);
  }
  else if (currentvalue == 7) {
    let productCards = document.querySelector(".main-card");
    productCards.remove();
    Makeup(180, 210);
  }
  else if (currentvalue == 8) {
    let productCards = document.querySelector(".main-card");
    productCards.remove();
    Makeup(210, 240);
  }
  else if (currentvalue == 9) {
    let productCards = document.querySelector(".main-card");
    productCards.remove();
    Makeup(240, 270);
  }
  else if (currentvalue == 10) {
    let productCards = document.querySelector(".main-card");
    productCards.remove();
    Makeup(270, 300);
  }
})