export default class CreateMap {
  constructor(lat, lng) {
    this.center = new google.maps.LatLng(lat, lng);
  }


  // window.onload = function () {
  //     LoadMap();
  // }
  LoadMap() {
    let styles = [
      {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "saturation": "-66"
          },
          {
            "lightness": "1"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 13
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#144b53"
          },
          {
            "lightness": 14
          },
          {
            "weight": 1.4
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#223c35"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#172720"
          },
          {
            "lightness": 5
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#162723"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "saturation": "14"
          },
          {
            "weight": "0.43"
          },
          {
            "color": "#357464"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#1f3222"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "lightness": 25
          },
          {
            "color": "#133f19"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "lightness": 16
          },
          {
            "color": "#1ad9ba"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#26625a"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#48b697"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "color": "#233833"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#131d19"
          },
          {
            "visibility": "on"
          }
        ]
      }
    ];

    // JSON for locations
    let locations = [
      { "CountryName": "Somaliland", "CapitalName": "Hargeisa", "lat": "9.55", "lng": "44.050000", "CountryCode": "NULL", "ContinentName": "Africa" }, { "CountryName": "South Georgia and South Sandwich Islands", "CapitalName": "King Edward Point", "lat": "-54.283333", "lng": "-36.500000", "CountryCode": "GS", "ContinentName": "Antarctica" }, { "CountryName": "French Southern and Antarctic Lands", "CapitalName": "Port-aux-FranГѓВ§ais", "lat": "-49.35", "lng": "70.216667", "CountryCode": "TF", "ContinentName": "Antarctica" }, { "CountryName": "Palestine", "CapitalName": "Jerusalem", "lat": "31.766666666666666", "lng": "35.233333", "CountryCode": "PS", "ContinentName": "Asia" }, { "CountryName": "Aland Islands", "CapitalName": "Mariehamn", "lat": "60.116667", "lng": "19.900000", "CountryCode": "AX", "ContinentName": "Europe" }, { "CountryName": "Nauru", "CapitalName": "Yaren", "lat": "-0.5477", "lng": "166.920867", "CountryCode": "NR", "ContinentName": "Australia" }, { "CountryName": "Saint Martin", "CapitalName": "Marigot", "lat": "18.0731", "lng": "-63.082200", "CountryCode": "MF", "ContinentName": "North America" }, { "CountryName": "Tokelau", "CapitalName": "Atafu", "lat": "-9.166667", "lng": "-171.833333", "CountryCode": "TK", "ContinentName": "Australia" }, { "CountryName": "Western Sahara", "CapitalName": "El-AaiГѓВєn", "lat": "27.153611", "lng": "-13.203333", "CountryCode": "EH", "ContinentName": "Africa" }, { "CountryName": "Afghanistan", "CapitalName": "Kabul", "lat": "34.516666666666666", "lng": "69.183333", "CountryCode": "AF", "ContinentName": "Asia" }, { "CountryName": "Albania", "CapitalName": "Tirana", "lat": "41.31666666666667", "lng": "19.816667", "CountryCode": "AL", "ContinentName": "Europe" }, { "CountryName": "Algeria", "CapitalName": "Algiers", "lat": "36.75", "lng": "3.050000", "CountryCode": "DZ", "ContinentName": "Africa" }, { "CountryName": "American Samoa", "CapitalName": "Pago Pago", "lat": "-14.266666666666667", "lng": "-170.700000", "CountryCode": "AS", "ContinentName": "Australia" }, { "CountryName": "Andorra", "CapitalName": "Andorra la Vella", "lat": "42.5", "lng": "1.516667", "CountryCode": "AD", "ContinentName": "Europe" }, { "CountryName": "Angola", "CapitalName": "Luanda", "lat": "-8.833333333333334", "lng": "13.216667", "CountryCode": "AO", "ContinentName": "Africa" }, { "CountryName": "Anguilla", "CapitalName": "The Valley", "lat": "18.216666666666665", "lng": "-63.050000", "CountryCode": "AI", "ContinentName": "North America" }, { "CountryName": "Antigua and Barbuda", "CapitalName": "Saint John's", "lat": "17.116666666666667", "lng": "-61.850000", "CountryCode": "AG", "ContinentName": "North America" }, { "CountryName": "Argentina", "CapitalName": "Buenos Aires", "lat": "-34.583333333333336", "lng": "-58.666667", "CountryCode": "AR", "ContinentName": "South America" }, { "CountryName": "Armenia", "CapitalName": "Yerevan", "lat": "40.166666666666664", "lng": "44.500000", "CountryCode": "AM", "ContinentName": "Europe" }, { "CountryName": "Aruba", "CapitalName": "Oranjestad", "lat": "12.516666666666667", "lng": "-70.033333", "CountryCode": "AW", "ContinentName": "North America" }, { "CountryName": "Australia", "CapitalName": "Canberra", "lat": "-35.266666666666666", "lng": "149.133333", "CountryCode": "AU", "ContinentName": "Australia" }, { "CountryName": "Austria", "CapitalName": "Vienna", "lat": "48.2", "lng": "16.366667", "CountryCode": "AT", "ContinentName": "Europe" }, { "CountryName": "Azerbaijan", "CapitalName": "Baku", "lat": "40.38333333333333", "lng": "49.866667", "CountryCode": "AZ", "ContinentName": "Europe" }, { "CountryName": "Bahamas", "CapitalName": "Nassau", "lat": "25.083333333333332", "lng": "-77.350000", "CountryCode": "BS", "ContinentName": "North America" }, { "CountryName": "Bahrain", "CapitalName": "Manama", "lat": "26.233333333333334", "lng": "50.566667", "CountryCode": "BH", "ContinentName": "Asia" }, { "CountryName": "Bangladesh", "CapitalName": "Dhaka", "lat": "23.716666666666665", "lng": "90.400000", "CountryCode": "BD", "ContinentName": "Asia" }, { "CountryName": "Barbados", "CapitalName": "Bridgetown", "lat": "13.1", "lng": "-59.616667", "CountryCode": "BB", "ContinentName": "North America" }, { "CountryName": "Belarus", "CapitalName": "Minsk", "lat": "53.9", "lng": "27.566667", "CountryCode": "BY", "ContinentName": "Europe" }, { "CountryName": "Belgium", "CapitalName": "Brussels", "lat": "50.833333333333336", "lng": "4.333333", "CountryCode": "BE", "ContinentName": "Europe" }, { "CountryName": "Belize", "CapitalName": "Belmopan", "lat": "17.25", "lng": "-88.766667", "CountryCode": "BZ", "ContinentName": "Central America" }, { "CountryName": "Benin", "CapitalName": "Porto-Novo", "lat": "6.483333333333333", "lng": "2.616667", "CountryCode": "BJ", "ContinentName": "Africa" }, { "CountryName": "Bermuda", "CapitalName": "Hamilton", "lat": "32.28333333333333", "lng": "-64.783333", "CountryCode": "BM", "ContinentName": "North America" }, { "CountryName": "Bhutan", "CapitalName": "Thimphu", "lat": "27.466666666666665", "lng": "89.633333", "CountryCode": "BT", "ContinentName": "Asia" }, { "CountryName": "Bolivia", "CapitalName": "La Paz", "lat": "-16.5", "lng": "-68.150000", "CountryCode": "BO", "ContinentName": "South America" }, { "CountryName": "Bosnia and Herzegovina", "CapitalName": "Sarajevo", "lat": "43.86666666666667", "lng": "18.416667", "CountryCode": "BA", "ContinentName": "Europe" }, { "CountryName": "Botswana", "CapitalName": "Gaborone", "lat": "-24.633333333333333", "lng": "25.900000", "CountryCode": "BW", "ContinentName": "Africa" }, { "CountryName": "Brazil", "CapitalName": "Brasilia", "lat": "-15.783333333333333", "lng": "-47.916667", "CountryCode": "BR", "ContinentName": "South America" }, { "CountryName": "British Virgin Islands", "CapitalName": "Road Town", "lat": "18.416666666666668", "lng": "-64.616667", "CountryCode": "VG", "ContinentName": "North America" }, { "CountryName": "Brunei Darussalam", "CapitalName": "Bandar Seri Begawan", "lat": "4.883333333333333", "lng": "114.933333", "CountryCode": "BN", "ContinentName": "Asia" }, { "CountryName": "Bulgaria", "CapitalName": "Sofia", "lat": "42.68333333333333", "lng": "23.316667", "CountryCode": "BG", "ContinentName": "Europe" }, { "CountryName": "Burkina Faso", "CapitalName": "Ouagadougou", "lat": "12.366666666666667", "lng": "-1.516667", "CountryCode": "BF", "ContinentName": "Africa" }, { "CountryName": "Myanmar", "CapitalName": "Rangoon", "lat": "16.8", "lng": "96.150000", "CountryCode": "MM", "ContinentName": "Asia" }, { "CountryName": "Burundi", "CapitalName": "Bujumbura", "lat": "-3.3666666666666667", "lng": "29.350000", "CountryCode": "BI", "ContinentName": "Africa" }, { "CountryName": "Cambodia", "CapitalName": "Phnom Penh", "lat": "11.55", "lng": "104.916667", "CountryCode": "KH", "ContinentName": "Asia" }, { "CountryName": "Cameroon", "CapitalName": "Yaounde", "lat": "3.8666666666666667", "lng": "11.516667", "CountryCode": "CM", "ContinentName": "Africa" }, { "CountryName": "Canada", "CapitalName": "Ottawa", "lat": "45.416666666666664", "lng": "-75.700000", "CountryCode": "CA", "ContinentName": "Central America" }, { "CountryName": "Cape Verde", "CapitalName": "Praia", "lat": "14.916666666666666", "lng": "-23.516667", "CountryCode": "CV", "ContinentName": "Africa" }, { "CountryName": "Cayman Islands", "CapitalName": "George Town", "lat": "19.3", "lng": "-81.383333", "CountryCode": "KY", "ContinentName": "North America" }, { "CountryName": "Central African Republic", "CapitalName": "Bangui", "lat": "4.366666666666666", "lng": "18.583333", "CountryCode": "CF", "ContinentName": "Africa" }, { "CountryName": "Chad", "CapitalName": "N'Djamena", "lat": "12.1", "lng": "15.033333", "CountryCode": "TD", "ContinentName": "Africa" }, { "CountryName": "Chile", "CapitalName": "Santiago", "lat": "-33.45", "lng": "-70.666667", "CountryCode": "CL", "ContinentName": "South America" }, { "CountryName": "China", "CapitalName": "Beijing", "lat": "39.916666666666664", "lng": "116.383333", "CountryCode": "CN", "ContinentName": "Asia" }, { "CountryName": "Christmas Island", "CapitalName": "The Settlement", "lat": "-10.416666666666666", "lng": "105.716667", "CountryCode": "CX", "ContinentName": "Australia" }, { "CountryName": "Cocos Islands", "CapitalName": "West Island", "lat": "-12.166666666666666", "lng": "96.833333", "CountryCode": "CC", "ContinentName": "Australia" }, { "CountryName": "Colombia", "CapitalName": "Bogota", "lat": "4.6", "lng": "-74.083333", "CountryCode": "CO", "ContinentName": "South America" }, { "CountryName": "Comoros", "CapitalName": "Moroni", "lat": "-11.7", "lng": "43.233333", "CountryCode": "KM", "ContinentName": "Africa" }, { "CountryName": "Democratic Republic of the Congo", "CapitalName": "Kinshasa", "lat": "-4.316666666666666", "lng": "15.300000", "CountryCode": "CD", "ContinentName": "Africa" }, { "CountryName": "Republic of Congo", "CapitalName": "Brazzaville", "lat": "-4.25", "lng": "15.283333", "CountryCode": "CG", "ContinentName": "Africa" }, { "CountryName": "Cook Islands", "CapitalName": "Avarua", "lat": "-21.2", "lng": "-159.766667", "CountryCode": "CK", "ContinentName": "Australia" }, { "CountryName": "Costa Rica", "CapitalName": "San Jose", "lat": "9.933333333333334", "lng": "-84.083333", "CountryCode": "CR", "ContinentName": "Central America" }, { "CountryName": "Cote d'Ivoire", "CapitalName": "Yamoussoukro", "lat": "6.816666666666666", "lng": "-5.266667", "CountryCode": "CI", "ContinentName": "Africa" }, { "CountryName": "Croatia", "CapitalName": "Zagreb", "lat": "45.8", "lng": "16.000000", "CountryCode": "HR", "ContinentName": "Europe" }, { "CountryName": "Cuba", "CapitalName": "Havana", "lat": "23.116666666666667", "lng": "-82.350000", "CountryCode": "CU", "ContinentName": "North America" }, { "CountryName": "CuraГѓВ§ao", "CapitalName": "Willemstad", "lat": "12.1", "lng": "-68.916667", "CountryCode": "CW", "ContinentName": "North America" }, { "CountryName": "Cyprus", "CapitalName": "Nicosia", "lat": "35.166666666666664", "lng": "33.366667", "CountryCode": "CY", "ContinentName": "Europe" }, { "CountryName": "Czech Republic", "CapitalName": "Prague", "lat": "50.083333333333336", "lng": "14.466667", "CountryCode": "CZ", "ContinentName": "Europe" }, { "CountryName": "Denmark", "CapitalName": "Copenhagen", "lat": "55.666666666666664", "lng": "12.583333", "CountryCode": "DK", "ContinentName": "Europe" }, { "CountryName": "Djibouti", "CapitalName": "Djibouti", "lat": "11.583333333333334", "lng": "43.150000", "CountryCode": "DJ", "ContinentName": "Africa" }, { "CountryName": "Dominica", "CapitalName": "Roseau", "lat": "15.3", "lng": "-61.400000", "CountryCode": "DM", "ContinentName": "North America" }, { "CountryName": "Dominican Republic", "CapitalName": "Santo Domingo", "lat": "18.466666666666665", "lng": "-69.900000", "CountryCode": "DO", "ContinentName": "North America" }, { "CountryName": "Ecuador", "CapitalName": "Quito", "lat": "-0.21666666666666667", "lng": "-78.500000", "CountryCode": "EC", "ContinentName": "South America" }, { "CountryName": "Egypt", "CapitalName": "Cairo", "lat": "30.05", "lng": "31.250000", "CountryCode": "EG", "ContinentName": "Africa" }, { "CountryName": "El Salvador", "CapitalName": "San Salvador", "lat": "13.7", "lng": "-89.200000", "CountryCode": "SV", "ContinentName": "Central America" }, { "CountryName": "Equatorial Guinea", "CapitalName": "Malabo", "lat": "3.75", "lng": "8.783333", "CountryCode": "GQ", "ContinentName": "Africa" }, { "CountryName": "Eritrea", "CapitalName": "Asmara", "lat": "15.333333333333334", "lng": "38.933333", "CountryCode": "ER", "ContinentName": "Africa" }, { "CountryName": "Estonia", "CapitalName": "Tallinn", "lat": "59.43333333333333", "lng": "24.716667", "CountryCode": "EE", "ContinentName": "Europe" }, { "CountryName": "Ethiopia", "CapitalName": "Addis Ababa", "lat": "9.033333333333333", "lng": "38.700000", "CountryCode": "ET", "ContinentName": "Africa" }, { "CountryName": "Falkland Islands", "CapitalName": "Stanley", "lat": "-51.7", "lng": "-57.850000", "CountryCode": "FK", "ContinentName": "South America" }, { "CountryName": "Faroe Islands", "CapitalName": "Torshavn", "lat": "62", "lng": "-6.766667", "CountryCode": "FO", "ContinentName": "Europe" }, { "CountryName": "Fiji", "CapitalName": "Suva", "lat": "-18.133333333333333", "lng": "178.416667", "CountryCode": "FJ", "ContinentName": "Australia" }, { "CountryName": "Finland", "CapitalName": "Helsinki", "lat": "60.166666666666664", "lng": "24.933333", "CountryCode": "FI", "ContinentName": "Europe" }, { "CountryName": "France", "CapitalName": "Paris", "lat": "48.86666666666667", "lng": "2.333333", "CountryCode": "FR", "ContinentName": "Europe" }, { "CountryName": "French Polynesia", "CapitalName": "Papeete", "lat": "-17.533333333333335", "lng": "-149.566667", "CountryCode": "PF", "ContinentName": "Australia" }, { "CountryName": "Gabon", "CapitalName": "Libreville", "lat": "0.38333333333333336", "lng": "9.450000", "CountryCode": "GA", "ContinentName": "Africa" }, { "CountryName": "The Gambia", "CapitalName": "Banjul", "lat": "13.45", "lng": "-16.566667", "CountryCode": "GM", "ContinentName": "Africa" }, { "CountryName": "Georgia", "CapitalName": "Tbilisi", "lat": "41.68333333333333", "lng": "44.833333", "CountryCode": "GE", "ContinentName": "Europe" }, { "CountryName": "Germany", "CapitalName": "Berlin", "lat": "52.516666666666666", "lng": "13.400000", "CountryCode": "DE", "ContinentName": "Europe" }, { "CountryName": "Ghana", "CapitalName": "Accra", "lat": "5.55", "lng": "-0.216667", "CountryCode": "GH", "ContinentName": "Africa" }, { "CountryName": "Gibraltar", "CapitalName": "Gibraltar", "lat": "36.13333333333333", "lng": "-5.350000", "CountryCode": "GI", "ContinentName": "Europe" }, { "CountryName": "Greece", "CapitalName": "Athens", "lat": "37.983333333333334", "lng": "23.733333", "CountryCode": "GR", "ContinentName": "Europe" }, { "CountryName": "Greenland", "CapitalName": "Nuuk", "lat": "64.18333333333334", "lng": "-51.750000", "CountryCode": "GL", "ContinentName": "Central America" }, { "CountryName": "Grenada", "CapitalName": "Saint George's", "lat": "12.05", "lng": "-61.750000", "CountryCode": "GD", "ContinentName": "North America" }, { "CountryName": "Guam", "CapitalName": "Hagatna", "lat": "13.466666666666667", "lng": "144.733333", "CountryCode": "GU", "ContinentName": "Australia" }, { "CountryName": "Guatemala", "CapitalName": "Guatemala City", "lat": "14.616666666666667", "lng": "-90.516667", "CountryCode": "GT", "ContinentName": "Central America" }, { "CountryName": "Guernsey", "CapitalName": "Saint Peter Port", "lat": "49.45", "lng": "-2.533333", "CountryCode": "GG", "ContinentName": "Europe" }, { "CountryName": "Guinea", "CapitalName": "Conakry", "lat": "9.5", "lng": "-13.700000", "CountryCode": "GN", "ContinentName": "Africa" }, { "CountryName": "Guinea-Bissau", "CapitalName": "Bissau", "lat": "11.85", "lng": "-15.583333", "CountryCode": "GW", "ContinentName": "Africa" }, { "CountryName": "Guyana", "CapitalName": "Georgetown", "lat": "6.8", "lng": "-58.150000", "CountryCode": "GY", "ContinentName": "South America" }, { "CountryName": "Haiti", "CapitalName": "Port-au-Prince", "lat": "18.533333333333335", "lng": "-72.333333", "CountryCode": "HT", "ContinentName": "North America" }, { "CountryName": "Vatican City", "CapitalName": "Vatican City", "lat": "41.9", "lng": "12.450000", "CountryCode": "VA", "ContinentName": "Europe" }, { "CountryName": "Honduras", "CapitalName": "Tegucigalpa", "lat": "14.1", "lng": "-87.216667", "CountryCode": "HN", "ContinentName": "Central America" }, { "CountryName": "Hungary", "CapitalName": "Budapest", "lat": "47.5", "lng": "19.083333", "CountryCode": "HU", "ContinentName": "Europe" }, { "CountryName": "Iceland", "CapitalName": "Reykjavik", "lat": "64.15", "lng": "-21.950000", "CountryCode": "IS", "ContinentName": "Europe" }, { "CountryName": "India", "CapitalName": "New Delhi", "lat": "28.6", "lng": "77.200000", "CountryCode": "IN", "ContinentName": "Asia" }, { "CountryName": "Indonesia", "CapitalName": "Jakarta", "lat": "-6.166666666666667", "lng": "106.816667", "CountryCode": "ID", "ContinentName": "Asia" }, { "CountryName": "Iran", "CapitalName": "Tehran", "lat": "35.7", "lng": "51.416667", "CountryCode": "IR", "ContinentName": "Asia" }, { "CountryName": "Iraq", "CapitalName": "Baghdad", "lat": "33.333333333333336", "lng": "44.400000", "CountryCode": "IQ", "ContinentName": "Asia" }, { "CountryName": "Ireland", "CapitalName": "Dublin", "lat": "53.31666666666667", "lng": "-6.233333", "CountryCode": "IE", "ContinentName": "Europe" }, { "CountryName": "Isle of Man", "CapitalName": "Douglas", "lat": "54.15", "lng": "-4.483333", "CountryCode": "IM", "ContinentName": "Europe" }, { "CountryName": "Israel", "CapitalName": "Jerusalem", "lat": "31.766666666666666", "lng": "35.233333", "CountryCode": "IL", "ContinentName": "Asia" }, { "CountryName": "Italy", "CapitalName": "Rome", "lat": "41.9", "lng": "12.483333", "CountryCode": "IT", "ContinentName": "Europe" }, { "CountryName": "Jamaica", "CapitalName": "Kingston", "lat": "18", "lng": "-76.800000", "CountryCode": "JM", "ContinentName": "North America" }, { "CountryName": "Japan", "CapitalName": "Tokyo", "lat": "35.68333333333333", "lng": "139.750000", "CountryCode": "JP", "ContinentName": "Asia" }, { "CountryName": "Jersey", "CapitalName": "Saint Helier", "lat": "49.18333333333333", "lng": "-2.100000", "CountryCode": "JE", "ContinentName": "Europe" }, { "CountryName": "Jordan", "CapitalName": "Amman", "lat": "31.95", "lng": "35.933333", "CountryCode": "JO", "ContinentName": "Asia" }, { "CountryName": "Kazakhstan", "CapitalName": "Astana", "lat": "51.166666666666664", "lng": "71.416667", "CountryCode": "KZ", "ContinentName": "Asia" }, { "CountryName": "Kenya", "CapitalName": "Nairobi", "lat": "-1.2833333333333332", "lng": "36.816667", "CountryCode": "KE", "ContinentName": "Africa" }, { "CountryName": "Kiribati", "CapitalName": "Tarawa", "lat": "-0.8833333333333333", "lng": "169.533333", "CountryCode": "KI", "ContinentName": "Australia" }, { "CountryName": "North Korea", "CapitalName": "Pyongyang", "lat": "39.016666666666666", "lng": "125.750000", "CountryCode": "KP", "ContinentName": "Asia" }, { "CountryName": "South Korea", "CapitalName": "Seoul", "lat": "37.55", "lng": "126.983333", "CountryCode": "KR", "ContinentName": "Asia" }, { "CountryName": "Kosovo", "CapitalName": "Pristina", "lat": "42.666666666666664", "lng": "21.166667", "CountryCode": "KO", "ContinentName": "Europe" }, { "CountryName": "Kuwait", "CapitalName": "Kuwait City", "lat": "29.366666666666667", "lng": "47.966667", "CountryCode": "KW", "ContinentName": "Asia" }, { "CountryName": "Kyrgyzstan", "CapitalName": "Bishkek", "lat": "42.86666666666667", "lng": "74.600000", "CountryCode": "KG", "ContinentName": "Asia" }, { "CountryName": "Laos", "CapitalName": "Vientiane", "lat": "17.966666666666665", "lng": "102.600000", "CountryCode": "LA", "ContinentName": "Asia" }, { "CountryName": "latvia", "CapitalName": "Riga", "lat": "56.95", "lng": "24.100000", "CountryCode": "LV", "ContinentName": "Europe" }, { "CountryName": "Lebanon", "CapitalName": "Beirut", "lat": "33.86666666666667", "lng": "35.500000", "CountryCode": "LB", "ContinentName": "Asia" }, { "CountryName": "Lesotho", "CapitalName": "Maseru", "lat": "-29.316666666666666", "lng": "27.483333", "CountryCode": "LS", "ContinentName": "Africa" }, { "CountryName": "Liberia", "CapitalName": "Monrovia", "lat": "6.3", "lng": "-10.800000", "CountryCode": "LR", "ContinentName": "Africa" }, { "CountryName": "Libya", "CapitalName": "Tripoli", "lat": "32.88333333333333", "lng": "13.166667", "CountryCode": "LY", "ContinentName": "Africa" }, { "CountryName": "Liechtenstein", "CapitalName": "Vaduz", "lat": "47.13333333333333", "lng": "9.516667", "CountryCode": "LI", "ContinentName": "Europe" }, { "CountryName": "Lithuania", "CapitalName": "Vilnius", "lat": "54.68333333333333", "lng": "25.316667", "CountryCode": "LT", "ContinentName": "Europe" }, { "CountryName": "Luxembourg", "CapitalName": "Luxembourg", "lat": "49.6", "lng": "6.116667", "CountryCode": "LU", "ContinentName": "Europe" }, { "CountryName": "Macedonia", "CapitalName": "Skopje", "lat": "42", "lng": "21.433333", "CountryCode": "MK", "ContinentName": "Europe" }, { "CountryName": "Madagascar", "CapitalName": "Antananarivo", "lat": "-18.916666666666668", "lng": "47.516667", "CountryCode": "MG", "ContinentName": "Africa" }, { "CountryName": "Malawi", "CapitalName": "Lilongwe", "lat": "-13.966666666666667", "lng": "33.783333", "CountryCode": "MW", "ContinentName": "Africa" }, { "CountryName": "Malaysia", "CapitalName": "Kuala Lumpur", "lat": "3.1666666666666665", "lng": "101.700000", "CountryCode": "MY", "ContinentName": "Asia" }, { "CountryName": "Maldives", "CapitalName": "Male", "lat": "4.166666666666667", "lng": "73.500000", "CountryCode": "MV", "ContinentName": "Asia" }, { "CountryName": "Mali", "CapitalName": "Bamako", "lat": "12.65", "lng": "-8.000000", "CountryCode": "ML", "ContinentName": "Africa" }, { "CountryName": "Malta", "CapitalName": "Valletta", "lat": "35.88333333333333", "lng": "14.500000", "CountryCode": "MT", "ContinentName": "Europe" }, { "CountryName": "Marshall Islands", "CapitalName": "Majuro", "lat": "7.1", "lng": "171.383333", "CountryCode": "MH", "ContinentName": "Australia" }, { "CountryName": "Mauritania", "CapitalName": "Nouakchott", "lat": "18.066666666666666", "lng": "-15.966667", "CountryCode": "MR", "ContinentName": "Africa" }, { "CountryName": "Mauritius", "CapitalName": "Port Louis", "lat": "-20.15", "lng": "57.483333", "CountryCode": "MU", "ContinentName": "Africa" }, { "CountryName": "Mexico", "CapitalName": "Mexico City", "lat": "19.433333333333334", "lng": "-99.133333", "CountryCode": "MX", "ContinentName": "Central America" }, { "CountryName": "Federated States of Micronesia", "CapitalName": "Palikir", "lat": "6.916666666666667", "lng": "158.150000", "CountryCode": "FM", "ContinentName": "Australia" }, { "CountryName": "Moldova", "CapitalName": "Chisinau", "lat": "47", "lng": "28.850000", "CountryCode": "MD", "ContinentName": "Europe" }, { "CountryName": "Monaco", "CapitalName": "Monaco", "lat": "43.733333333333334", "lng": "7.416667", "CountryCode": "MC", "ContinentName": "Europe" }, { "CountryName": "Mongolia", "CapitalName": "Ulaanbaatar", "lat": "47.916666666666664", "lng": "106.916667", "CountryCode": "MN", "ContinentName": "Asia" }, { "CountryName": "Montenegro", "CapitalName": "Podgorica", "lat": "42.43333333333333", "lng": "19.266667", "CountryCode": "ME", "ContinentName": "Europe" }, { "CountryName": "Montserrat", "CapitalName": "Plymouth", "lat": "16.7", "lng": "-62.216667", "CountryCode": "MS", "ContinentName": "North America" }, { "CountryName": "Morocco", "CapitalName": "Rabat", "lat": "34.016666666666666", "lng": "-6.816667", "CountryCode": "MA", "ContinentName": "Africa" }, { "CountryName": "Mozambique", "CapitalName": "Maputo", "lat": "-25.95", "lng": "32.583333", "CountryCode": "MZ", "ContinentName": "Africa" }, { "CountryName": "Namibia", "CapitalName": "Windhoek", "lat": "-22.566666666666666", "lng": "17.083333", "CountryCode": "NA", "ContinentName": "Africa" }, { "CountryName": "Nepal", "CapitalName": "Kathmandu", "lat": "27.716666666666665", "lng": "85.316667", "CountryCode": "NP", "ContinentName": "Asia" }, { "CountryName": "Netherlands", "CapitalName": "Amsterdam", "lat": "52.35", "lng": "4.916667", "CountryCode": "NL", "ContinentName": "Europe" }, { "CountryName": "New Caledonia", "CapitalName": "Noumea", "lat": "-22.266666666666666", "lng": "166.450000", "CountryCode": "NC", "ContinentName": "Australia" }, { "CountryName": "New Zealand", "CapitalName": "Wellington", "lat": "-41.3", "lng": "174.783333", "CountryCode": "NZ", "ContinentName": "Australia" }, { "CountryName": "Nicaragua", "CapitalName": "Managua", "lat": "12.133333333333333", "lng": "-86.250000", "CountryCode": "NI", "ContinentName": "Central America" }, { "CountryName": "Niger", "CapitalName": "Niamey", "lat": "13.516666666666667", "lng": "2.116667", "CountryCode": "NE", "ContinentName": "Africa" }, { "CountryName": "Nigeria", "CapitalName": "Abuja", "lat": "9.083333333333334", "lng": "7.533333", "CountryCode": "NG", "ContinentName": "Africa" }, { "CountryName": "Niue", "CapitalName": "Alofi", "lat": "-19.016666666666666", "lng": "-169.916667", "CountryCode": "NU", "ContinentName": "Australia" }, { "CountryName": "Norfolk Island", "CapitalName": "Kingston", "lat": "-29.05", "lng": "167.966667", "CountryCode": "NF", "ContinentName": "Australia" }, { "CountryName": "Northern Mariana Islands", "CapitalName": "Saipan", "lat": "15.2", "lng": "145.750000", "CountryCode": "MP", "ContinentName": "Australia" }, { "CountryName": "Norway", "CapitalName": "Oslo", "lat": "59.916666666666664", "lng": "10.750000", "CountryCode": "NO", "ContinentName": "Europe" }, { "CountryName": "Oman", "CapitalName": "Muscat", "lat": "23.616666666666667", "lng": "58.583333", "CountryCode": "OM", "ContinentName": "Asia" }, { "CountryName": "Pakistan", "CapitalName": "Islamabad", "lat": "33.68333333333333", "lng": "73.050000", "CountryCode": "PK", "ContinentName": "Asia" }, { "CountryName": "Palau", "CapitalName": "Melekeok", "lat": "7.483333333333333", "lng": "134.633333", "CountryCode": "PW", "ContinentName": "Australia" }, { "CountryName": "Panama", "CapitalName": "Panama City", "lat": "8.966666666666667", "lng": "-79.533333", "CountryCode": "PA", "ContinentName": "Central America" }, { "CountryName": "Papua New Guinea", "CapitalName": "Port Moresby", "lat": "-9.45", "lng": "147.183333", "CountryCode": "PG", "ContinentName": "Australia" }, { "CountryName": "Paraguay", "CapitalName": "Asuncion", "lat": "-25.266666666666666", "lng": "-57.666667", "CountryCode": "PY", "ContinentName": "South America" }, { "CountryName": "Peru", "CapitalName": "Lima", "lat": "-12.05", "lng": "-77.050000", "CountryCode": "PE", "ContinentName": "South America" }, { "CountryName": "Philippines", "CapitalName": "Manila", "lat": "14.6", "lng": "120.966667", "CountryCode": "PH", "ContinentName": "Asia" }, { "CountryName": "Pitcairn Islands", "CapitalName": "Adamstown", "lat": "-25.066666666666666", "lng": "-130.083333", "CountryCode": "PN", "ContinentName": "Australia" }, { "CountryName": "Poland", "CapitalName": "Warsaw", "lat": "52.25", "lng": "21.000000", "CountryCode": "PL", "ContinentName": "Europe" }, { "CountryName": "Portugal", "CapitalName": "Lisbon", "lat": "38.71666666666667", "lng": "-9.133333", "CountryCode": "PT", "ContinentName": "Europe" }, { "CountryName": "Puerto Rico", "CapitalName": "San Juan", "lat": "18.466666666666665", "lng": "-66.116667", "CountryCode": "PR", "ContinentName": "North America" }, { "CountryName": "Qatar", "CapitalName": "Doha", "lat": "25.283333333333335", "lng": "51.533333", "CountryCode": "QA", "ContinentName": "Asia" }, { "CountryName": "Romania", "CapitalName": "Bucharest", "lat": "44.43333333333333", "lng": "26.100000", "CountryCode": "RO", "ContinentName": "Europe" }, { "CountryName": "Russia", "CapitalName": "Moscow", "lat": "55.75", "lng": "37.600000", "CountryCode": "RU", "ContinentName": "Europe" }, { "CountryName": "Rwanda", "CapitalName": "Kigali", "lat": "-1.95", "lng": "30.050000", "CountryCode": "RW", "ContinentName": "Africa" }, { "CountryName": "Saint Barthelemy", "CapitalName": "Gustavia", "lat": "17.883333333333333", "lng": "-62.850000", "CountryCode": "BL", "ContinentName": "North America" }, { "CountryName": "Saint Helena", "CapitalName": "Jamestown", "lat": "-15.933333333333334", "lng": "-5.716667", "CountryCode": "SH", "ContinentName": "Africa" }, { "CountryName": "Saint Kitts and Nevis", "CapitalName": "Basseterre", "lat": "17.3", "lng": "-62.716667", "CountryCode": "KN", "ContinentName": "North America" }, { "CountryName": "Saint Lucia", "CapitalName": "Castries", "lat": "14", "lng": "-61.000000", "CountryCode": "LC", "ContinentName": "North America" }, { "CountryName": "Saint Pierre and Miquelon", "CapitalName": "Saint-Pierre", "lat": "46.766666666666666", "lng": "-56.183333", "CountryCode": "PM", "ContinentName": "Central America" }, { "CountryName": "Saint Vincent and the Grenadines", "CapitalName": "Kingstown", "lat": "13.133333333333333", "lng": "-61.216667", "CountryCode": "VC", "ContinentName": "Central America" }, { "CountryName": "Samoa", "CapitalName": "Apia", "lat": "-13.816666666666666", "lng": "-171.766667", "CountryCode": "WS", "ContinentName": "Australia" }, { "CountryName": "San Marino", "CapitalName": "San Marino", "lat": "43.93333333333333", "lng": "12.416667", "CountryCode": "SM", "ContinentName": "Europe" }, { "CountryName": "Sao Tome and Principe", "CapitalName": "Sao Tome", "lat": "0.3333333333333333", "lng": "6.733333", "CountryCode": "ST", "ContinentName": "Africa" }, { "CountryName": "Saudi Arabia", "CapitalName": "Riyadh", "lat": "24.65", "lng": "46.700000", "CountryCode": "SA", "ContinentName": "Asia" }, { "CountryName": "Senegal", "CapitalName": "Dakar", "lat": "14.733333333333333", "lng": "-17.633333", "CountryCode": "SN", "ContinentName": "Africa" }, { "CountryName": "Serbia", "CapitalName": "Belgrade", "lat": "44.833333333333336", "lng": "20.500000", "CountryCode": "RS", "ContinentName": "Europe" }, { "CountryName": "Seychelles", "CapitalName": "Victoria", "lat": "-4.616666666666667", "lng": "55.450000", "CountryCode": "SC", "ContinentName": "Africa" }, { "CountryName": "Sierra Leone", "CapitalName": "Freetown", "lat": "8.483333333333333", "lng": "-13.233333", "CountryCode": "SL", "ContinentName": "Africa" }, { "CountryName": "Singapore", "CapitalName": "Singapore", "lat": "1.2833333333333332", "lng": "103.850000", "CountryCode": "SG", "ContinentName": "Asia" }, { "CountryName": "Sint Maarten", "CapitalName": "Philipsburg", "lat": "18.016666666666666", "lng": "-63.033333", "CountryCode": "SX", "ContinentName": "North America" }, { "CountryName": "Slovakia", "CapitalName": "Bratislava", "lat": "48.15", "lng": "17.116667", "CountryCode": "SK", "ContinentName": "Europe" }, { "CountryName": "Slovenia", "CapitalName": "Ljubljana", "lat": "46.05", "lng": "14.516667", "CountryCode": "SI", "ContinentName": "Europe" }, { "CountryName": "Solomon Islands", "CapitalName": "Honiara", "lat": "-9.433333333333334", "lng": "159.950000", "CountryCode": "SB", "ContinentName": "Australia" }, { "CountryName": "Somalia", "CapitalName": "Mogadishu", "lat": "2.066666666666667", "lng": "45.333333", "CountryCode": "SO", "ContinentName": "Africa" }, { "CountryName": "South Africa", "CapitalName": "Pretoria", "lat": "-25.7", "lng": "28.216667", "CountryCode": "ZA", "ContinentName": "Africa" }, { "CountryName": "South Sudan", "CapitalName": "Juba", "lat": "4.85", "lng": "31.616667", "CountryCode": "SS", "ContinentName": "Africa" }, { "CountryName": "Spain", "CapitalName": "Madrid", "lat": "40.4", "lng": "-3.683333", "CountryCode": "ES", "ContinentName": "Europe" }, { "CountryName": "Sri Lanka", "CapitalName": "Colombo", "lat": "6.916666666666667", "lng": "79.833333", "CountryCode": "LK", "ContinentName": "Asia" }, { "CountryName": "Sudan", "CapitalName": "Khartoum", "lat": "15.6", "lng": "32.533333", "CountryCode": "SD", "ContinentName": "Africa" }, { "CountryName": "Suriname", "CapitalName": "Paramaribo", "lat": "5.833333333333333", "lng": "-55.166667", "CountryCode": "SR", "ContinentName": "South America" }, { "CountryName": "Svalbard", "CapitalName": "Longyearbyen", "lat": "78.21666666666667", "lng": "15.633333", "CountryCode": "SJ", "ContinentName": "Europe" }, { "CountryName": "Swaziland", "CapitalName": "Mbabane", "lat": "-26.316666666666666", "lng": "31.133333", "CountryCode": "SZ", "ContinentName": "Africa" }, { "CountryName": "Sweden", "CapitalName": "Stockholm", "lat": "59.333333333333336", "lng": "18.050000", "CountryCode": "SE", "ContinentName": "Europe" }, { "CountryName": "Switzerland", "CapitalName": "Bern", "lat": "46.916666666666664", "lng": "7.466667", "CountryCode": "CH", "ContinentName": "Europe" }, { "CountryName": "Syria", "CapitalName": "Damascus", "lat": "33.5", "lng": "36.300000", "CountryCode": "SY", "ContinentName": "Asia" }, { "CountryName": "Taiwan", "CapitalName": "Taipei", "lat": "25.033333333333335", "lng": "121.516667", "CountryCode": "TW", "ContinentName": "Asia" }, { "CountryName": "Tajikistan", "CapitalName": "Dushanbe", "lat": "38.55", "lng": "68.766667", "CountryCode": "TJ", "ContinentName": "Asia" }, { "CountryName": "Tanzania", "CapitalName": "Dar es Salaam", "lat": "-6.8", "lng": "39.283333", "CountryCode": "TZ", "ContinentName": "Africa" }, { "CountryName": "Thailand", "CapitalName": "Bangkok", "lat": "13.75", "lng": "100.516667", "CountryCode": "TH", "ContinentName": "Asia" }, { "CountryName": "Timor-Leste", "CapitalName": "Dili", "lat": "-8.583333333333334", "lng": "125.600000", "CountryCode": "TL", "ContinentName": "Asia" }, { "CountryName": "Togo", "CapitalName": "Lome", "lat": "6.116666666666666", "lng": "1.216667", "CountryCode": "TG", "ContinentName": "Africa" }, { "CountryName": "Tonga", "CapitalName": "Nuku'alofa", "lat": "-21.133333333333333", "lng": "-175.200000", "CountryCode": "TO", "ContinentName": "Australia" }, { "CountryName": "Trinidad and Tobago", "CapitalName": "Port of Spain", "lat": "10.65", "lng": "-61.516667", "CountryCode": "TT", "ContinentName": "North America" }, { "CountryName": "Tunisia", "CapitalName": "Tunis", "lat": "36.8", "lng": "10.183333", "CountryCode": "TN", "ContinentName": "Africa" }, { "CountryName": "Turkey", "CapitalName": "Ankara", "lat": "39.93333333333333", "lng": "32.866667", "CountryCode": "TR", "ContinentName": "Europe" }, { "CountryName": "Turkmenistan", "CapitalName": "Ashgabat", "lat": "37.95", "lng": "58.383333", "CountryCode": "TM", "ContinentName": "Asia" }, { "CountryName": "Turks and Caicos Islands", "CapitalName": "Grand Turk", "lat": "21.466666666666665", "lng": "-71.133333", "CountryCode": "TC", "ContinentName": "North America" }, { "CountryName": "Tuvalu", "CapitalName": "Funafuti", "lat": "-8.516666666666667", "lng": "179.216667", "CountryCode": "TV", "ContinentName": "Australia" }, { "CountryName": "Uganda", "CapitalName": "Kampala", "lat": "0.31666666666666665", "lng": "32.550000", "CountryCode": "UG", "ContinentName": "Africa" }, { "CountryName": "Ukraine", "CapitalName": "Kyiv", "lat": "50.43333333333333", "lng": "30.516667", "CountryCode": "UA", "ContinentName": "Europe" }, { "CountryName": "United Arab Emirates", "CapitalName": "Abu Dhabi", "lat": "24.466666666666665", "lng": "54.366667", "CountryCode": "AE", "ContinentName": "Asia" }, { "CountryName": "United Kingdom", "CapitalName": "London", "lat": "51.5", "lng": "-0.083333", "CountryCode": "GB", "ContinentName": "Europe" }, { "CountryName": "United States", "CapitalName": "Washington", "lat": " D.C.", "lng": "38.883333", "CountryCode": "-77.000000", "ContinentName": "US" }, { "CountryName": "Uruguay", "CapitalName": "Montevideo", "lat": "-34.85", "lng": "-56.166667", "CountryCode": "UY", "ContinentName": "South America" }, { "CountryName": "Uzbekistan", "CapitalName": "Tashkent", "lat": "41.31666666666667", "lng": "69.250000", "CountryCode": "UZ", "ContinentName": "Asia" }, { "CountryName": "Vanuatu", "CapitalName": "Port-Vila", "lat": "-17.733333333333334", "lng": "168.316667", "CountryCode": "VU", "ContinentName": "Australia" }, { "CountryName": "Venezuela", "CapitalName": "Caracas", "lat": "10.483333333333333", "lng": "-66.866667", "CountryCode": "VE", "ContinentName": "South America" }, { "CountryName": "Vietnam", "CapitalName": "Hanoi", "lat": "21.033333333333335", "lng": "105.850000", "CountryCode": "VN", "ContinentName": "Asia" }, { "CountryName": "US Virgin Islands", "CapitalName": "Charlotte Amalie", "lat": "18.35", "lng": "-64.933333", "CountryCode": "VI", "ContinentName": "North America" }, { "CountryName": "Wallis and Futuna", "CapitalName": "Mata-Utu", "lat": "-13.95", "lng": "-171.933333", "CountryCode": "WF", "ContinentName": "Australia" }, { "CountryName": "Yemen", "CapitalName": "Sanaa", "lat": "15.35", "lng": "44.200000", "CountryCode": "YE", "ContinentName": "Asia" }, { "CountryName": "Zambia", "CapitalName": "Lusaka", "lat": "-15.416666666666666", "lng": "28.283333", "CountryCode": "ZM", "ContinentName": "Africa" }, { "CountryName": "Zimbabwe", "CapitalName": "Harare", "lat": "-17.816666666666666", "lng": "31.033333", "CountryCode": "ZW", "ContinentName": "Africa" }, { "CountryName": "US Minor Outlying Islands", "CapitalName": "Washington", "lat": " D.C.", "lng": "38.883333", "CountryCode": "-77.000000", "ContinentName": "UM" }, { "CountryName": "Antarctica", "CapitalName": "N/A", "lat": "0", "lng": "0.000000", "CountryCode": "AQ", "ContinentName": "Antarctica" }, { "CountryName": "Northern Cyprus", "CapitalName": "North Nicosia", "lat": "35.183333", "lng": "33.366667", "CountryCode": "NULL", "ContinentName": "Europe" }, { "CountryName": "Hong Kong", "CapitalName": "N/A", "lat": "0", "lng": "0.000000", "CountryCode": "HK", "ContinentName": "Asia" }, { "CountryName": "Heard Island and McDonald Islands", "CapitalName": "N/A", "lat": "0", "lng": "0.000000", "CountryCode": "HM", "ContinentName": "Antarctica" }, { "CountryName": "British Indian Ocean Territory", "CapitalName": "Diego Garcia", "lat": "-7.3", "lng": "72.400000", "CountryCode": "IO", "ContinentName": "Africa" }, { "CountryName": "Macau", "CapitalName": "N/A", "lat": "0", "lng": "0.000000", "CountryCode": "MO", "ContinentName": "Asia" }
    ];

    var mapOptions = {
      center: this.center || new google.maps.LatLng(locations[0].lat, locations[0].lng),
      //center: new google.maps.LatLng(48.775847, 9.18296),
      zoom: 2,
      disableDefaultUI: true,
      zoomControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var infoWindow = new google.maps.InfoWindow();
    var latlngbounds = new google.maps.LatLngBounds();
    var map = new google.maps.Map(document.querySelector(".main___map"), mapOptions);
    let markers = [];
    for (var i = 0; i < locations.length; i++) {
      var data = locations[i]
      var myLatlng = new google.maps.LatLng(data.lat, data.lng);
      var pin = {
        path: 'M12.8,0c0,6.9-5.6,12.5-12.5,12.5S-12.2,6.9-12.2,0c0-4.4,2.3-8.3,5.8-10.5c1.9-1.2,4.2-2,6.7-2C7.2-12.5,12.8-6.9,12.8,0z',
        fillColor: '#1e7199',
        fillOpacity: .95,
        scale: .875,
        strokeColor: '#FFFAF0',
        strokeWeight: 7,
        strokeOpacity: 0.5,
      };
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: pin,
        title: data.title
      });
      markers.push(marker);

      // (function (marker, data) {
      //     google.maps.event.addListener(marker, "click", function (e) {
      //         infoWindow.setContent(
      //             "<div class='local-info-window'>" +
      //             "<h2>" +
      //             data.title +
      //             "</h2>" +
      //             data.photo +
      //             data.slideshow +
      //             data.video +
      //             data.description +
      //             "<ul>" +
      //             "<li>" +
      //             "<b>" +
      //             data.investment +
      //             "</b>" +
      //             " total investment" +
      //             "</li>" +
      //             "<li>" +
      //             "<b>" +
      //             data.leveraged +
      //             "</b>" +
      //             " leveraged" +
      //             "</li>" +
      //             "<li>" +
      //             "<b>" +
      //             data.squarefeet +
      //             "</b>" +
      //             " sq. ft. retail & community space" +
      //             "</li>" +
      //             "<li>" +
      //             "<b>" +
      //             data.code +
      //             "</b>" +
      //             " affordable code" +
      //             "</li>" +
      //             "</ul>" +
      //             "</div>"
      //         );
      //         infoWindow.open(map, marker);
      //         var iwBackground = $(".gm-style-iw").prev();
      //         var iwCloseBtn = $(".gm-style-iw").next();

      //         // Add a class to the tail's shadow
      //         iwBackground.children(':nth-child(1)').addClass('infowindow-tail-shadow');

      //         // Add a class to the background shadow DIV
      //         iwBackground.children(':nth-child(2)').addClass('infowindow-shadow');

      //         // Add a class to the white background DIV
      //         iwBackground.children(':nth-child(4)').addClass('infowindow-background');

      //         // Add a class to the tail outline.
      //         // The outline of the tail is composed of two descendants of div which contains the tail.
      //         iwBackground.children(':nth-child(3)').find('div').children().addClass('infowindow-tail');

      //         // Add a class to the close button
      //         iwCloseBtn.addClass('infowindow-close');
      //     });
      // })(marker, data);
      latlngbounds.extend(marker.position);
    }

    new MarkerClusterer(map, markers, {
      imagePath:
              "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
    var bounds = new google.maps.LatLngBounds();
    map.setCenter(latlngbounds.getCenter());
    //map.fitBounds(latlngbounds);
    map.setOptions({ styles: styles });



    // var myLatlng = { lat: 48.775847, lng: 9.18296 };
    // function placeMarkerAndPanTo(latLng, map) {
    //     map.panTo(myLatlng);
    // }

    map.addListener('click', function (e) {
    console.log(e.latLng);
      placeMarkerAndPanTo(e.latLng, map);
    });
  }



  // /*
  //  * The google.maps.event.addListener() event waits for
  //  * the creation of the infowindow HTML structure 'domready'
  //  * and before the opening of the infowindow defined styles
  //  * are applied.
  //  */
  // google.maps.event.addListener(infoWindow, 'domready', function () {


  // });
}

