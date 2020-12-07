// add restaurant data here
const restaurantList = [
  {
    name: 'Oishii Boston',
    location: {
      lat: 42.343349, lng: -71.066010,
    },
    image: '../images/oishii.jpg',
    imageDetail: '../images/oishii-detail.jpg',
    pictureOne: '../images/oishii-1.jpeg',
    pictureTwo: '../images/oishii-2.jpeg',
    pictureThree: '../images/oishii-3.jpeg',
    pictureFour: '../images/oishii-4.jpeg',
    address: '1166 Washington St #110, Boston, MA 02118',
    phone: '(617)482-8868',
    hours: 'Tue–Thu 4:30 pm–10:00 pm & Fri, Sat 1:00 pm–10:00 pm',
    price: '$$$',
    cuisines: 'Sushi, Japanese',
    diningstyle: 'Casual Elegant',
    dresscode: 'Smart Casual',
    icon: '../images/tuna.png',
    introduction: 'High-concept sushi & other Japanese plates crafted in swish, dramatically lit environment.',
    url: '../detail.html',
    filterTag: ['price1', 'downtown', 'japanese'],
  },
  {
    name: 'Grill 23 & Bar',
    location: {
      lat: 42.349411, lng: -71.071892,
    },
    image: '../images/grill23.jpg',
    imageDetail: '../images/grill23-detail.jpg',
    pictureOne: '../images/grill-23-1.jpg',
    pictureTwo: '../images/grill-23-2.jpg',
    pictureThree: '../images/grill-23-3.jpg',
    pictureFour: '../images/grill-23-4.jpg',
    address: '161 Berkeley St, Boston, MA 02116',
    phone: ' (617)542-2255',
    hours: 'Tue-Sat 5:00pm - 9:00pm & Sun 12:00 pm-8:00 pm',
    price: '$$$$',
    cuisines: 'Steak, Seafood, American',
    diningstyle: 'Fine Dining',
    dresscode: 'Business Casual',
    icon: '../images/meat.png',
    introduction: 'Classy chophouse presenting surf ’n’ turf classics & an ample wine selection in ornate rooms.',
    url: 'https://grill23.com/',
    filterTag: ['price2', 'southend', 'steakhouse'],
  },
  {
    name: 'Tatte Bakery & Cafe',
    location: {
      lat: 42.372589, lng: -71.116982,
    },
    image: '../images/tatte.jpg',
    imageDetail: '../images/tatte-detail.jpg',
    pictureOne: '../images/tatte-1.jpg',
    pictureTwo: '../images/tatte-2.jpg',
    pictureThree: '../images/tatte-3.jpg',
    pictureFour: '../images/tatte-4.jpg',
    address: '1288 Massachusetts Ave, Cambridge, MA 02138',
    phone: ' (617)441-4011',
    hours: '7:00am - 8:00pm',
    price: '$$',
    cuisines: 'Baked goods, Brunch',
    diningstyle: 'Casual',
    dresscode: 'Casual',
    icon: '../images/bread.png',
    introduction: 'Cozy spot with a rustic feel serving breakfast, soups, sandwiches & an array of baked treats.',
    url: 'https://tattebakery.com//',
    filterTag: ['price3', 'northend', 'bakery'],
  },
  {
    name: 'Neptune Oyster',
    location: {
      lat: 42.363220, lng: -71.055939,
    },
    image: '../images/neptune.jpg',
    imageDetail: '../images/neptune-detail.jpg',
    pictureOne: '../images/neptune-1.png',
    pictureTwo: '../images/neptune-2.jpg',
    pictureThree: '../images/neptune-3.jpg',
    pictureFour: '../images/neptune-4.png',
    address: '63 Salem St # 1, Boston, MA 02113',
    phone: ' (617)742-3474',
    hours: '11:00am - 9:00pm',
    price: '$$$',
    cuisines: 'American, Seafood',
    diningstyle: 'Casual Elegant',
    dresscode: 'Smart Casual',
    icon: '../images/fish.png',
    introduction: 'Lines form for the raw bar & warm, buttered lobster rolls at this tiny, high-end oyster bar.',
    url: 'https://www.neptuneoyster.com/',
    filterTag: ['price1', 'northend', 'seafood'],
  },
  {
    name: 'O Ya',
    location: {
      lat: 42.351370, lng: -71.056940,
    },
    image: '../images/OYa.jpg',
    imageDetail: '../images/OYa-detail.jpg',
    pictureOne: '../images/oya-1.jpg',
    pictureTwo: '../images/oya-2.jpg',
    pictureThree: '../images/oya-3.jpg',
    pictureFour: '../images/oya-4.jpg',
    address: '9 East St, Boston, MA 02111',
    phone: ' (617)654-9900',
    hours: 'Tue–Sat 5:00 pm–10:00 pm',
    price: '$$$$',
    cuisines: 'Japanese',
    diningstyle: 'Casual Elegant',
    dresscode: 'Smart Casual',
    icon: '../images/tuna.png',
    introduction: 'The sushi and omakase menu is a marvel of both flavor and presentation, with every morsel—from the foie gras nigiri to the bluefin tuna and smoked salmon sashimi—a delectable work of art.',
    url: 'https://www.o-ya.restaurant/location/o-ya-boston/',
    filterTag: ['price1', 'downtown', 'japanese'],
  },
  {
    name: 'Tasting Counter',
    location: {
      lat: 42.381540, lng: -71.105570,
    },
    image: '../images/tasting-counter.jpg',
    imageDetail: '../images/tasting-counter-detail.jpg',
    pictureOne: '../images/tastingcounter-1.jpg',
    pictureTwo: '../images/tastingcounter-2.jpg',
    pictureThree: '../images/tastingcounter-3.jpg',
    pictureFour: '../images/tastingcounter-4.jpg',
    address: '14 Tyler St, Somerville, MA 02143',
    phone: ' (617)299-6362',
    hours: 'Sat-Sun 1:00pm & Thur – Sun 5:00pm & 7:30pm',
    price: '$$$$',
    cuisines: 'New American',
    diningstyle: 'Fine Dining, Small Bites',
    dresscode: 'Elegant',
    icon: '../images/fancy.png',
    introduction: 'Creative dishes are prepped in front of the 20-seat counter, thus the “dining as theater” aspect of the experience. ',
    url: 'https://tastingcounter.com/',
    filterTag: ['price1', 'northend', 'seafood'],
  },
  {
    name: 'Menton',
    location: {
      lat: 42.350530, lng: -71.048260,
    },
    image: '../images/menton.jpg',
    imageDetail: '../images/menton-detail.jpg',
    pictureOne: '../images/menton-1.jpg',
    pictureTwo: '../images/menton-2.jpg',
    pictureThree: '../images/menton-3.jpg',
    pictureFour: '../images/menton-4.jpg',
    address: '354 Congress St, Boston, MA 02210',
    phone: ' (617)737-0099',
    hours: 'Wed-Sun 5:00pm - 9:00pm',
    price: '$$$$',
    cuisines: 'French-Italian Hybrid',
    diningstyle: 'Fine Dining',
    dresscode: 'Elegant',
    icon: '../images/fancy.png',
    introduction: 'The contemporary, French- and Italian-inspired cuisine, offered in both a la carte and a tasting menu, features luxurious ingredients such as sea urchin and black truffle. ',
    url: 'http://www.mentonboston.com/',
    filterTag: ['price1', 'northend', 'seafood'],
  },
  {
    name: 'No. 9 Park',
    location: {
      lat: 42.357640, lng: -71.062790,
    },
    image: '../images/No9park.jpg',
    imageDetail: '../images/No9park-detail.jpg',
    pictureOne: '../images/no9park-1.jpg',
    pictureTwo: '../images/no9park-2.jpg',
    pictureThree: '../images/no9park-3.jpg',
    pictureFour: '../images/no9park-4.jpg',
    address: '9 Park St Pl, Boston, MA 02108',
    phone: ' (617)742-9991',
    hours: 'Wed-Sun 5:00pm - 9:00pm',
    price: '$$$$',
    cuisines: 'French',
    diningstyle: 'Fine Dining',
    dresscode: 'Elegant',
    icon: '../images/fancy.png',
    introduction: 'Situated in the shadow of the State House, Barbara Lynch’s flagship restaurant offers a head-on view of Boston Common. The sleek, cosmopolitan environs are patrolled by attentive servers. Lynch’s culinary team produces a harmonious blend of regionally-inspired Italian and French dishes, served a la carte or as part of a chefs tasting menu. ',
    url: 'http://www.no9park.com/',
    filterTag: ['price1', 'downtown', 'seafood'],
  },
  {
    name: 'Toro',
    location: {
      lat: 42.336930, lng: -71.075880,
    },
    image: '../images/toro.jpg',
    imageDetail: '../images/toro-detail.jpg',
    pictureOne: '../images/toro-1.jpg',
    pictureTwo: '../images/toro-2.jpg',
    pictureThree: '../images/toro-3.jpg',
    pictureFour: '../images/toro-4.jpg',
    address: '1704 Washington St, Boston, MA 02118',
    phone: ' (617)536-4300',
    hours: 'Wed-Sun 5:00pm - 9:00pm',
    price: '$$$',
    cuisines: 'Spanish',
    diningstyle: 'Small Bites',
    dresscode: 'Casual',
    icon: '../images/paella.png',
    introduction: 'For all its dynamism, Toro really hasn’t changed much in the decade-plus since it opened, blowing the roof off of Boston’s then-gentrifying South End. The rustic cubbyhole of a storefront it occupies is as jam-packed and convivial as ever with revelers passing porróns of Cava around; day-one staples like grilled street corn and quince-glazed duck drumsticks are still breaking the hearts of every tapas virgin who wanders in unawares.',
    url: 'https://www.toro-restaurant.com/',
    filterTag: ['price2', 'downtown', 'seafood'],
  },
  {
    name: 'Row 34',
    location: {
      lat: 42.349610, lng: -71.047640,
    },
    image: '../images/row34.jpg',
    imageDetail: '../images/row34-detail.jpg',
    pictureOne: '../images/row34-1.jpg',
    pictureTwo: '../images/row34-2.jpg',
    pictureThree: '../images/row34-3.jpg',
    pictureFour: '../images/row34-4.jpg',
    address: '383 Congress St, Boston, MA 02210',
    phone: ' (617)553-5900',
    hours: 'Wed-Fri 5:00pm - 9:00pm & Sat-Sun 12:00pm-9:00pm',
    price: '$$$',
    cuisines: 'Seafood',
    diningstyle: 'Fine Dining',
    dresscode: 'Business Casual',
    icon: '../images/fish.png',
    introduction: 'The team at Row 34 loves beer as much as they love oysters, so be sure to pair your oysters with whatever is recommended from the list of small-production, local, and rare craft beers on tap.',
    url: 'https://www.row34.com/',
    filterTag: ['price2', 'downtown', 'seafood'],
  },
];

export default restaurantList;
