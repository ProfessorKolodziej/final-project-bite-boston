// add restaurant data here
const restaurantList = [
    {
      name: 'Oishii Boston',
      location: {
        lat: 42.343349, lng: -71.066010
      },
      image: '../images/oishii.jpg',
      address: '1166 Washington St #110, Boston, MA 02118',
      phone: '(617)482-8868',
      hours: 'Tue–Thu 4:30 pm–10:00 pm & Fri, Sat 1:00 pm–10:00 pm',
      price: '$$$',
      cuisines:'Sushi, Japanese',
      diningstyle: 'Casual Elegant',
      dresscode: 'Smart Casual',
      icon: '../images/tuna.png',
      introduction:'High-concept sushi & other Japanese plates crafted in swish, dramatically lit environment.',
      url: '../detail.html',
      filterTag: ['price1','downtown','japanese']
    },
    {
      name: 'Grill 23 & Bar',
      location: {
        lat: 42.349411, lng: -71.071892
      },
      image: '../images/grill23.jpg',
      address: '161 Berkeley St, Boston, MA 02116',
      phone: ' (617)542-2255',
      hours: 'Tue-Sat 5:00pm - 9:00pm & Sun 12:00 pm-8:00 pm',
      price: '$$$$',
      cuisines:'Steak, Seafood, American',
      diningstyle: 'Fine Dining',
      dresscode: 'Business Casual',
      icon: '../images/meat.png',
      introduction:'Classy chophouse presenting surf ’n’ turf classics & an ample wine selection in ornate rooms.',
      url: 'https://grill23.com/',
      filterTag: ['price2','southend','steakhouse']
    },
    {
      name: 'Tatte Bakery & Cafe',
      location: {
        lat: 42.372589, lng: -71.116982
      },
      image: '../images/tatte.jpg',
      address: '1288 Massachusetts Ave, Cambridge, MA 02138',
      phone: ' (617)441-4011',
      hours: '7:00am - 8:00pm',
      price: '$$',
      cuisines:'Baked goods, Brunch',
      diningstyle: 'Casual',
      dresscode: 'Casual',
      icon: '../images/bread.png',
      introduction:'Cozy spot with a rustic feel serving breakfast, soups, sandwiches & an array of baked treats.',
      url: 'https://tattebakery.com//',
      filterTag: ['price3','northend','bakery']
    },
    {
      name: 'Neptune Oyster',
      location: {
        lat: 42.363220, lng: -71.055939
      },
      image: '../images/neptune.jpg',
      address: '63 Salem St # 1, Boston, MA 02113',
      phone: ' (617)742-3474',
      hours: '11:00am - 9:00pm',
      price: '$$$',
      cuisines:'American, Seafood',
      diningstyle: 'x',
      dresscode: 'x',
      icon: '../images/fish.png',
      introduction:'Lines form for the raw bar & warm, buttered lobster rolls at this tiny, high-end oyster bar.',
      url: 'https://www.neptuneoyster.com/',
      filterTag: ['price1','northend','seafood']
    },
    {
      name: 'O Ya',
      location: {
        lat: 42.351370, lng: -71.056940
      },
      image: '../images/OYa.jpg',
      address: '9 East St, Boston, MA 02111',
      phone: ' (617)654-9900',
      hours: 'Tue–Sat 5:00 pm–10:00 pm',
      price: '$$$$',
      cuisines:'Japanese',
      diningstyle: 'Casual Elegant',
      dresscode: 'Smart Casual',
      icon: '../images/tuna.png',
      introduction:'The sushi and omakase menu is a marvel of both flavor and presentation, with every morsel—from the foie gras nigiri to the bluefin tuna and smoked salmon sashimi—a delectable work of art.',
      url: 'https://www.o-ya.restaurant/location/o-ya-boston/',
      filterTag: ['price1','downtown','japanese']
    },
    {
      name: 'Tasting Counter',
      location: {
        lat: 42.381540, lng: -71.105570
      },
      image: '../images/tasting-counter.jpg',
      address: '14 Tyler St, Somerville, MA 02143',
      phone: ' (617)299-6362',
      hours: 'Sat-Sun 1:00pm & Thur – Sun 5:00pm & 7:30pm',
      price: '$$$$',
      cuisines:'New American',
      diningstyle: 'Fine Dining, Small Bites',
      dresscode: 'Elegant',
      icon: '../images/fancy.png',
      introduction:'Creative dishes are prepped in front of the 20-seat counter, thus the “dining as theater” aspect of the experience. ',
      url: 'https://tastingcounter.com/',
      filterTag: ['price1','northend','seafood']
    },
    {
      name: 'Menton',
      location: {
        lat: 42.350530, lng: -71.048260
      },
      image: '../images/menton.jpg',
      address: '354 Congress St, Boston, MA 02210',
      phone: ' (617)737-0099',
      hours: 'Wed-Sun 5:00pm - 9:00pm',
      price: '$$$$',
      cuisines:'French-Italian Hybrid',
      diningstyle: 'Fine Dining',
      dresscode: 'Elegant',
      icon: '../images/fancy.png',
      introduction:'The contemporary, French- and Italian-inspired cuisine, offered in both a la carte and a tasting menu, features luxurious ingredients such as sea urchin and black truffle. ',
      url: 'http://www.mentonboston.com/',
      filterTag: ['price1','northend','seafood']
    },
]

export default restaurantList;
