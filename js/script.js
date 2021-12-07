const cardBox = document.querySelector('.mainContent .containerMain .displ1');

const searchInput = document.querySelector('#search');

const elemHeader = document.querySelector('.menuItems');

const displ1 = document.querySelector('.displ1');

const hamburger = document.querySelector(".hamburger");


function getCardHtml(el) {
    return `
        <a class="card shadow">
            <div class="iconCard">
                <img class="iconCardSmall" src="${el.img}">
            </div>
            <div class="sizeTextCard">
                <h3 class="cardDesc">${el.title}</h3>
                <p>
                ${el.desc}
                </p>
            </div>
        </a>
    `;
  }

 function searchFilter(result) {
  result.forEach(el => {
    cardBox.innerHTML+=getCardHtml(el);
    });
  }
  
  function errorString() {
    cardBox.innerHTML=`<p class="noResults">No results</p>`;
  }

  function clearCardBox() {
     cardBox.innerHTML = '';
  }

  function renderFirst() {
    for (let i = 0; i < cards.length; i++) {
      cardBox.innerHTML+=getCardHtml(cards[i]);
    }
  }
  
  renderFirst();

  searchInput.addEventListener('keyup', e => {
    const result = cards.filter(word =>
      word.title.toLowerCase().includes(e.target.value.toLowerCase())||
      word.desc.toLowerCase().includes(e.target.value.toLowerCase())    
    );
    setTimeout(clearCardBox, 300)
    if(result.length != 0){
      setTimeout(searchFilter, 300, result);}else{
       setTimeout(errorString, 300);
    }
    if (e.target.value == '') {
      clearCardBox();
      renderFirst();
    }
  
  });

  
  function getHeaderElem(el) {
    let section=``;
    if(el.article){
    for(let i=0; i< el.article.length; i++){
      section+=`
      <li class="${el.article[i].elementClass}"><a href="#">${el.article[i].headerSubElem}</a></li>
      `;
      }
    }
    else{
      return`
      <li class="nav-link menu"><span>${el.headerElem}</span></li>
      `
    }
    return `
    <div class = "M">
    <li class="menu">
    <span class="nav-link">${el.headerElem}</span>
    <div class="dropdownMenu"></div>
  </li>
  <ul class="dropdown">
    ${section}
    </ul>
    </div>
    `;
  }

  function elemHeaderMenu() {
    for (let i = 0; i < menu.length; i++) {
      elemHeader.innerHTML+=getHeaderElem(menu[i]);
    }
  }
  
  elemHeaderMenu();

  

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    elemHeader.classList.toggle("active");
})
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  }))

  hamburger.addEventListener("click", el => {
    if(hamburger.className.split(' ').length===2){
      displ1.classList.add("active")
    }else{
      setTimeout(() => displ1.classList.remove("active"), 188)
    }
  })

  document.querySelectorAll(".M").forEach(n => n.addEventListener("click", () => 
  {n.querySelector(".dropdown").classList.toggle("active");
  }))

  document.querySelectorAll(".M").forEach(n => n.addEventListener("click", () => 
  {n.querySelector(".dropdownMenu").classList.toggle("active");
  }))