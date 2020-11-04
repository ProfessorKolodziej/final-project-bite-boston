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
for (let i=0; i<restaurant.length; i++)
return (restaurant[i].name)


   