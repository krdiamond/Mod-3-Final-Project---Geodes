class App {
  constructor() {
    this.mainPage = document.getElementsByTagName("body");
    this.sparkles = document.getElementById("sparkles")
    this.pouch = document.getElementById("pouch");
  }

//-------------------DISPLAY ITEMS THAT THE USER HAS FOUND -------------------//
  fetchUserItems(){
    fetch("http://localhost:3000/users/1") //need to figure this out for when I have a login page
    .then(res => res.json())
    .then(json => this.renderStoragePouch(json));
  };

  renderStoragePouch(json){
    this.pouch.innerHTML = ""
    json.items.forEach(result => {
      let userItems = document.createElement("div");
      userItems.innerHTML = ""
      userItems.id = result.id
      userItems.innerHTML = `<img src="${result.img}" height="100">`
      userItems.innerHTML += `<button class="delete-button" onclick="app.deleteButton(event)">X</button>`
      userItems.className = "user-items"
      this.pouch.appendChild(userItems);
    });
  }

  deleteButton(event){
    let id = event.target.parentElement.id
    let options = {
      method:'DELETE',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
      },
    }
    fetch(`http://localhost:3000/user_items/${id}`, options)
      .then(res => res.json())
      .then(json => this.fetchUserItems());
  };



//-------------------------- HIDDEN GEODES -----------------------------------//
  renderhiddenGeodeDivs(){
    let divID = 1
    Array(20).fill().map(Math.random).forEach(result => {
      let hiddenGeodeDiv = document.createElement("div");
      hiddenGeodeDiv.className = "hidden-geode"
      hiddenGeodeDiv.id = `hidden-geode-${divID}`
      this.mainPage[0].appendChild(hiddenGeodeDiv);
      divID++

      hiddenGeodeDiv.addEventListener("click", event => {
        hiddenGeodeDiv.innerHTML= ""
        let geodeImage = document.createElement("div");
        geodeImage.innerHTML = `<img src="images/ice_geode.png" width="100">`
        hiddenGeodeDiv.appendChild(geodeImage);


        geodeImage.addEventListener("click", event => {
          this.mainPage[0].removeChild(hiddenGeodeDiv)
          this.sparkles.innerHTML = ""
          this.fetchRandomItems()
        });
      });
    });
  }

  //---------------------GIVE 2 RANDOM ITEMS TO USER--------------------------//

  fetchRandomItems(){
    fetch("http://localhost:3000/items")
    .then(res => res.json())
    .then(json => this.randomizeItems(json));
  }

  randomizeItems(json){
    let randomItem1 = json[Math.floor(Math.random()*json.length)];
    let randomItem2 = json[Math.floor(Math.random()*json.length)];
    let randomItem3 = json[Math.floor(Math.random()*json.length)];

    this.sparkles.innerHTML = `<style> #sparkles {background-image: url("images/sparkles.png");} </style>`

    this.sparkles.innerHTML +=  `<div class="row clearfix">
    <div class="span_4 column" id="${randomItem1.id}"><img class="found-item" src="${randomItem1.img}" height="200"></div>
    <div class="span_4 column" id="${randomItem2.id}"><img class="found-item" src="${randomItem2.img}" height="200"></div>
    <div class="span_4 column" id="${randomItem3.id}"><img class="found-item" src="${randomItem3.img}" height="200"></div>
    </div>`

    let items = document.getElementsByClassName("span_4 column")
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener("click", event => {
        this.addItemToPouch({user_id:1, item_id: items[[i]].id}, event)
      });
    };
  }


//------------------------ADD NEW ITEMS TO POUCH------------------------------//
  addItemToPouch(itemInputs, event){
    let itemObj = {user_items: itemInputs}

    let options = {
      method:'POST',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body:JSON.stringify(itemObj)
    }
    fetch('http://localhost:3000/user_items', options)
      .then(res => res.json())
      .then(json => this.canAddItem(json, event));
  };

  canAddItem(json, event){
    let clearfix = document.getElementsByClassName("clearfix")
    let counter = 0
    for (let i = 0; i < clearfix[0].children.length; i++){
      if (clearfix[0].children[i].innerHTML === ""){
        counter++;
      }
    }


    if (json.error === undefined) {
      this.fetchUserItems()
      clearfix[0].children[1].innerHTML
      event.target.remove()
    };

    if(json.error === undefined && counter === 2) {
      this.sparkles.innerHTML = ""
    }
  }

}
