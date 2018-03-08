class App {
  constructor() {
    this.mainPage = document.getElementsByTagName("body");
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
      userItems.innerHTML = `<img src="${result.img}" height="100">`
      userItems.className = "user-items"
      this.pouch.appendChild(userItems);
    });
  }

//-------------------------- HIDDEN GEODES -----------------------------------//
  renderhiddenGeodeDivs(){
    let divID = 1
    Array(5).fill().map(Math.random).forEach(result => {
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
          this.fetchItems()
          this.mainPage[0].removeChild(hiddenGeodeDiv)
          this.mainPage[0].children[7].innerHTML = ""
          this.mainPage[0].children[7].id = "" //this has something to do with why the box is jumping around. this should be fixed
        });
      });
    });
  }

  //---------------------GIVE 2 RANDOM ITEMS TO USER--------------------------//

  fetchItems(){
    fetch("http://localhost:3000/items")
    .then(res => res.json())
    .then(json => this.randomizeItems(json));
  }

  randomizeItems(json){
    let randomItem1 = json[Math.floor(Math.random()*json.length)];
    let randomItem2 = json[Math.floor(Math.random()*json.length)];
    let randomItem3 = json[Math.floor(Math.random()*json.length)];

    let sparklesDiv = document.createElement("div");
    sparklesDiv.id = "sparkles"
    sparklesDiv.innerHTML = `<div class="row clearfix">
                                <div class="span_4 column" id="${randomItem1.id}">
                                    <img class="found-item" src="${randomItem1.img}" height="200">
                                </div>
                                <div class="span_4 column" id="${randomItem2.id}">
                                    <img class="found-item" src="${randomItem2.img}" height="200">
                                </div>
                                <div class="span_4 column" id="${randomItem3.id}">
                                    <img class="found-item" src="${randomItem3.img}" height="200">
                                </div>
                              </div>`
    this.mainPage[0].appendChild(sparklesDiv);

    let item = document.getElementsByClassName("span_4 column")
    for (let i = 0; i < item.length; i++) {
      item[i].addEventListener("click", event => {
        this.addItemToPouch({user_id:1, item_id: item[[i]].id})
        let selectedItem = document.getElementById(item[i].id)
        selectedItem.innerHTML = ""
      });
    };
  }

  addItemToPouch(itemInputs){
    console.log(itemInputs)
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
      .then(json => this.fetchUserItems());
  };

}
