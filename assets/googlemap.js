// Define your predefined list of shops with their coordinates and additional data if needed
var shops = [
  {
    name: 'Leclerc Francoville',
    location: {
      lat: 48.9892703,
      lng: 2.2065353,
    },
    address: '362 RUE DU GENERAL LECLERC, 95130, FRANCONVILLE',
    picture:
      'https://lh3.googleusercontent.com/p/AF1QipNLvofSWzrBLI4UvbfPooXHmvDT2akGytCE4Yv2=s1360-w1360-h1020',
  },
  {
    name: 'Leclerc Epinay sur Seine',
    location: {
      lat: 48.954206,
      lng: 2.334852,
    },
    address: '159 ROUTE DE SAINT LEU, 93800, EPINAY SUR SEINE',
    picture:
      'https://lh3.googleusercontent.com/p/AF1QipM_UaH-LuyuVO9Q7e54RwN2s1tAlFCYVdJjhYwW=s1360-w1360-h1020',
  },
  {
    name: "Leclerc Bois d'Arcy",
    location: {
      lat: 48.7988312,
      lng: 2.0374821,
    },
    address: "11 AVENUE JEAN JAURES, 78390, BOIS D'ARCY",
    picture:
      'https://lh3.googleusercontent.com/p/AF1QipMAcou6x6jg8GCxFhcUEJh8jZCumvEDs16uG08c=s1360-w1360-h1020',
  },
  {
    name: "Leclerc Saint Ouen L'aumone",
    location: {
      lat: 49.0569041,
      lng: 2.1238225,
    },
    address: "27 RUE DES EPLUCHES, 95310, ST OUEN L'AUMONE",
    picture:
      'https://lh3.googleusercontent.com/p/AF1QipOWDh6vmBulfaDcd282Vup9ijlAnpQRLfMV2dN7=s1360-w1360-h1020',
  },
  {
    name: 'Leclerc Carrières Sous Poissy',
    location: {
      lat: 48.9597468,
      lng: 2.0575975,
    },
    address: "485 ROUTE D'ANDRESY,78955, CARRIERES SOUS POISSY",
    picture:
      'https://lh3.googleusercontent.com/p/AF1QipMlOHelPHAxB8iO1Kr23tlOkglt4TltT8sD5Swa=s1360-w1360-h1020',
  },
  {
    name: 'Leclerc Express Magny en vexin',
    location: {
      lat: 48.9550341,
      lng: 2.0411895,
    },
    address: 'ROUTE DE MANTES, 95420, MAGNY EN VEXIN',
    picture:
      'https://photos.leclercdrive.fr/photo/leclerc-drive-magny-en-vexin/magasin.ashx?idunivers=2&idmarque=1&idmagasin=126011',
  },
  {
    name: 'Intermarché Senlis',
    location: {
      lat: 49.144069,
      lng: 1.7875617,
    },
    address: 'CENTRE CIAL VILLEVERT, 60300, SENLIS',
    picture:
      'https://lh3.googleusercontent.com/p/AF1QipMspMjv4EiVxrZ655wV5rVYPgcwTn3_zdQqtUMH=s1360-w1360-h1020',
  },
  {
    name: 'Super U Ecouen',
    location: {
      lat: 49.22109,
      lng: 2.59011,
    },
    address: '56 RUE DE LA LIBERATION, 95440, ECOUEN',
    picture:
      'https://lh3.googleusercontent.com/p/AF1QipMI4S2swihsz1keGkH67pfFg7jnmRInHpTpXJGK=s1360-w1360-h1020',
  },
  {
    name: 'Le petit Casino Cergy village',
    location: {
      lat: 49.035394,
      lng: 2.0614912,
    },
    address: '19 RUE NATIONALE, 95000, CERGY VILLAGE',
    picture:
      'https://lh3.googleusercontent.com/p/AF1QipMumXVMxnXgGlr7BU3O1RAgPilmp_NA_ieEnCb-=s1360-w1360-h1020',
  },
  {
    name: "U Express Ville d'Avray",
    location: {
      lat: 48.8269239,
      lng: 2.1895344,
    },
    address: "9 RUE DE SEVRES, 92410, VILLE D'AVRAY",
    picture:
      'https://lh3.googleusercontent.com/p/AF1QipPc7P4c_Rs_ksRwDCxqavRgI0reoebvSUj4Auz7=s1360-w1360-h1020',
  },
  {
    name: 'Carrefour Express',
    location: {
      lat: 48.8850188,
      lng: 2.3210654,
    },
    address: '28 RUE DES BATIGNOLLES, 75017, PARIS',
    picture:
      'https://lh3.googleusercontent.com/p/AF1QipPRh14PsSitqOSCL-GhaUNUOshur1ujrDSY67Ez=s1360-w1360-h1020',
  },
  {
    name: 'Intermarché Saint Cloud',
    location: {
      lat: 48.85084149999999,
      lng: 2.2216999,
    },
    address: '54 RUE DU 18 JUIN 1940, 92210, ST CLOUD',
    picture:
      'https://lh3.googleusercontent.com/p/AF1QipO1PlIYuT_6DskpGSlbUjJfIJwwwsaCnGg_ICf4=s1360-w1360-h1020',
  },
];

$(function () {
  initMap();
});
var map;
var autocomplete;
var markers = [];

function initMap() {
  $('#staticMap').addClass('hidden');
  $('#map').removeClass('hidden');

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
  });

  // Add markers
  for (let index = 0; index < shops.length; index++) {
    addMarker(shops[index]);
  }
  // Center map on the first shop's location
  if (shops.length > 0) {
    map.setCenter(shops[0].location);
  }

  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('userAddress'),
    { types: ['geocode'] },
  );

  autocomplete.addListener('place_changed', updateMapAndMarkers);
}

function updateMapAndMarkers() {
  var place = autocomplete.getPlace();

  if (!place.geometry) {
    alert("No details available for input: '" + place.name + "'");
    return;
  }

  var nearestShop = findNearestShop(place.geometry.location);

  if (nearestShop) {
    map.setCenter(nearestShop.location);
    map.setZoom(16);
    // Clear existing markers
    //removeAllMarkers();

    // Add marker for the nearest shop
    addMarker(nearestShop);
  }
}
function findNearestShop(userLocation) {
  var nearestShop = null;
  var nearestDistance = Number.MAX_VALUE;

  for (var i = 0; i < shops.length; i++) {
    var shopLocation = new google.maps.LatLng(
      shops[i].location.lat,
      shops[i].location.lng,
    );
    var distance = google.maps.geometry.spherical.computeDistanceBetween(
      userLocation,
      shopLocation,
    );

    if (distance < nearestDistance) {
      nearestShop = shops[i];
      nearestDistance = distance;
    }
  }

  return nearestShop;
}

function removeAllMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

function addMarker(shop) {
  // Construct the URL to your marker image

  var markerImage = {
    url: markerImageUrl,
    scaledSize: new google.maps.Size(40, 40),
  };
  var marker = new google.maps.Marker({
    map: map,
    position: shop.location,
    title: shop.name,
    icon: markerImage,
  });

  // Add click event listener to display info window when a user clicks on the marker
  marker.addListener('click', function () {
    var content =
      '<div>' +
      '<h2>' +
      shop.name +
      '</h2>' +
      '<p>' +
      shop.address +
      '</p>' +
      '<img src="' +
      shop.picture +
      '" width="200" height="150">' +
      '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: content,
    });
    infowindow.open(map, marker);
  });

  markers.push(marker);
}
