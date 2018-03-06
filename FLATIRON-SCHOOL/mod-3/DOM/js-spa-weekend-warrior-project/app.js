class App {
  constructor() {
    this.rocklist = document.getElementsByClassName("main-container");
  }

  fetchGeoderocks(){
    fetch("http://localhost:3000/geoderocks")
    .then(res => res.json())
    .then(json => this.listOfGeodes(json));
  };

  listOfGeodes(json){
    json.forEach(result => {
      let div = document.createElement("div");
      div.innerHTML = `<img src='images/boulder.png'>`
      div.className = "geode"
      this.rocklist[0].appendChild(div);

      div.addEventListener("click", event => {
          let geoderock = new Geoderock()
          geoderock.render(div,result);
      });
    });
  }

}
