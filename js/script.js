const cardBox = document.querySelector('.mainContent .containerMain .displ1');

const searchInput = document.querySelector('#search');

const elemHeader = document.querySelector('.menuItems');

const displ1 = document.querySelector('.displ1');

const hamburger = document.querySelector(".hamburger");


 function searchFilter(result) {
  result.forEach(el => {
    const a = document.createElement('a');
    a.className = "card shadow";
    const div1 = document.createElement('div');
    div1.className = "iconCard";
    const img = document.createElement('img');
    img.className = "iconCardSmall";
    img.src = el.img;
    const div2 = document.createElement('div');
    div2.className = "sizeTextCard";
    const h3 = document.createElement('h3');
    h3.textContent= el.title;
    h3.className = "cardDesc";
    const p = document.createElement('p');
    p.textContent= el.desc;

    div1.appendChild(img)
    div2.appendChild(h3)
    div2.appendChild(p)
    a.appendChild(div1);
    a.appendChild(div2);
    cardBox.appendChild(a);

  
    });
  }
  
  function errorString() {
    const p = document.createElement('p');
    p.className = "noResults";
    p.textContent= "No results"
    cardBox.appendChild(p);
  
  }

  function clearCardBox() {
     cardBox.innerHTML = '';
  }

  function renderFirst() {
    searchFilter(cards)
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
    let section = [];
    if(el.article){
    for(let i=0; i< el.article.length; i++){

      const li = document.createElement('li');
      li.className = el.article[i].elementClass;
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = el.article[i].headerSubElem;
      li.appendChild(a)
      section.push(li)
      }
    }
    else{
      const li = document.createElement('li')
      li.className = 'nav-link menu'
      const span = document.createElement('span')
      span.textContent = el.headerElem
      li.appendChild(span) 
      elemHeader.appendChild(li)
      return
    }
    const div1 = document.createElement('div')
    div1.className = 'M'
    const li = document.createElement('li')
    li.className = 'menu'
    const span = document.createElement('span')
    span.className = 'nav-link'
    span.textContent = el.headerElem
    const div2 = document.createElement('div')
    div2.className = 'dropdownMenu'
    const ul = document.createElement('ul')
    ul.className = 'dropdown'

    li.appendChild(span)
    li.appendChild(div2)
    for(i=0; section.length > i; i++){
      ul.appendChild(section[i])
    }
    div1.appendChild(li)
    div1.appendChild(ul)
    elemHeader.appendChild(div1)
   }

  function elemHeaderMenu() {
    for (let i = 0; i < menu.length; i++) {
    getHeaderElem(menu[i]);
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