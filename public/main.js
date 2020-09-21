
document.querySelector("form").addEventListener("submit", nameGen)

function nameGen (e){
  e.preventDefault()
  let nametoy = document.querySelectorAll(".toy:checked")[0].value;
  let namedessert = document.querySelectorAll(".dessert:checked")[0].value;
  let nameshow = document.querySelectorAll(".show:checked")[0].value;
  let namecolor = document.querySelectorAll(".color:checked")[0].value;
  let nameCity = document.querySelectorAll(".city:checked")[0].value
  let toyText = document.querySelectorAll(".toy:checked")[0].parentElement.children[1].innerText;
  let dessertText = document.querySelectorAll(".dessert:checked")[0].parentElement.children[1].innerText;
  let showText = document.querySelectorAll(".show:checked")[0].parentElement.children[1].innerText;
  let colorText = document.querySelectorAll(".color:checked")[0].parentElement.children[1].innerText;
  let cityText = document.querySelectorAll(".city:checked")[0].parentElement.children[1].innerText;


  class Choices {
    constructor(toy, dessert, show, color, city){
      this.toy = parseInt(toy),
      this.dessert = parseInt(dessert),
      this.show = parseInt(show),
      this.color = parseInt(color),
      this.city = parseInt(city)
    }
  }
  let newName = new Choices(nametoy, namedessert, nameshow, namecolor, nameCity);

  let total = 0;
  Object.values(newName).forEach(num => {
    total = total+num;
  })
  //console.log(checkResult(total))
  document.querySelector("span").textContent = checkResult(total);

  fetch('messages', {
            method: 'post',
            headers: {'Content-Type': 'application/json',
          'Accept': 'application/json'},
            body: JSON.stringify({
              'toy': toyText,
              'dessert': dessertText,
              'show': showText,
              'color': colorText,
              'city': cityText,
              'total': checkResult(total)
            })
          })
          .then(response => {
            //if (response.ok) return response.json()
          })
          .then(data => {
            //console.log("works")
            window.location.pathname = '/results'
          })

}

  function checkResult(total){
    if (total === 5){
      return "Tommy"
    }else if(total === 6){
      return "Chuckie"
    }else if(total === 7){
      return "Angelica"
    }else if(total === 8){
      return "Suzie"
    }else if(total === 9){
      return "Phil"
    }else if(total === 10){
      return "Lill"
    }else{
      return "Try Again"
    }
  }
