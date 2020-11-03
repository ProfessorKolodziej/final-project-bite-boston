// Add your scripts here
const restaurants = [
    {
      name: 'Oishii Boston',
      location: {
        lat: 42.343349, lng: -71.066010
      },
      hours: 'Tue–Thu 4:30 pm–10:00 pm Fri, Sat 1:00 pm–10:00 pm',
      price: '$$$',
      cuisines: 'Sushi, Japanese',
      diningstyle: 'Casual Elegant',
      dresscode: 'Smart Casual',
      image: '../images/oishii.jpg',
      address: '1166 Washington St #110, Boston, MA 02118',
      phone: '(617)482-8868',
      icon: '../images/tuna.png',
      url: 'https://www.oishiiboston.com/menu-2',
      bio: 'Oishii Boston is located in the South End SOWA district, the most artistic area in Boston. Oishii Boston is devoted to providing the most wonderful dining experience to every customer. Chef Ting San is dedicated to combining every dish with the freshest… '
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
        url: 'https://grill23.com/'
      }
    ]
    function restaurantdetailheader(restaurant) {
        return '<div class="restaurant-detail-name">' +
          `<h2> ${restaurant.name} </h2>` +
          '<div class="image-wrapper">' + 
            `<img src=${restaurant.image} class="restaurant-page-image" alt="restaurant-img"/>` +
          '</div>' +
          `<p> ${restaurant.phone} </p>` +
        '</div>'
      }
      function restaurantdetailbox(restaurant) {
        return '<div class="restaurant-detail-info">' +
          `<p> ${restaurant.address} </p>` +
          `<p> ${restaurant.hours} </p>` +
          `<p> ${restaurant.price} </p>` +
          `<p> ${restaurant.cuisines} </p>` +
          `<p> ${restaurant.diningstyle} </p>` +
          `<p> ${restaurant.dresscode} </p>` +
        '</div>'
      }
      function restaurantdetailintro(restaurant) {
        return '<div class="restaurant-detail-intro">' +
          `<p> ${restaurant.bio} </p>` +
        '</div>'
      }
