class Geoderock {
  constructor() {
  }




  render(div,result){
    div.innerHTML = `<img class="dirt" src='images/dirt.png'>`
    result.crystals.forEach(crystal => {
      div.innerHTML += `<img class="crystals" src=${crystal.img} width="200">`
    });
  }
}
