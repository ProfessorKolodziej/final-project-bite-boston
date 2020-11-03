
var restaurants = [
    {
      name: 'Oishii Boston',
      location: {
        lat: 42.343349, lng: -71.066010
      },
      image: '../images/oishii.jpg',
      address: '1166 Washington St #110, Boston, MA 02118',
      phone: '(617)482-8868',
      icon: '../images/tuna.png',
      introduction:'High-concept sushi & other Japanese plates crafted in swish, dramatically lit environment.',
      url: 'https://www.oishiiboston.com/menu-2'
    },
    {
      name: 'Grill 23 & Bar',
      location: {
        lat: 42.349411, lng: -71.071892
      },
      image: '../images/grill23.jpg',
      address: 'an161 Berkeley St, Boston, MA 02116',
      phone: ' (617)542-2255',
      icon: '../images/meat.png',
      introduction:'Classy chophouse presenting surf ’n’ turf classics & an ample wine selection in ornate rooms.',
      url: 'https://grill23.com/'
    }
  ];

//use this function to show data on the pages. I'm showing these information on a info-window here.
function mapInfoWindow(restaurant) {
  return '<div class="info-card">' +
    `<h3> ${restaurant.name} </h3>` +
    '<div class="image-wrapper">' +
      `<img src=${restaurant.image} class="info-card-image" alt="restaurant-img"/>` +
    '</div>' +
    `<p> ${restaurant.phone} </p>`+
    `<p> ${restaurant.address} </p>` +
    `<p> ${restaurant.introduction} </p>` +
    `<a type="button" class="indo-card-details" href=${restaurant.url} target="_blank">Details</a>` +
  '</div>'
}

function restaurantList(){
  console.log(restaurants);
  restaurants.forEach(function(restaurant){
    var ul= document.getElementById("restaurant-list");
    var li = document.createElement("li");
    li.innerHTML=mapInfoWindow(restaurant);
    ul.appendChild(li);
  });
}
document.addEventListener("DOMContentLoaded", restaurantList);