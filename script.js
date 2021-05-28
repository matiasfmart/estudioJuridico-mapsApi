function iniciarMap(){
    var coord = {lat:-31.4192594 ,lng: -64.1828553};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}