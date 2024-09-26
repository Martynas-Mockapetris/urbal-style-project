    function initialize() {
        var mapCanvas = document.getElementById('mapCanvas');
        var myLatLng = new google.maps.LatLng(47.329404, 9.412003);
        
        var mapOptions = {
          center: myLatLng,
          zoom: 16,
          //mapTypeId: google.maps.MapTypeId.HYBRID
          //mapTypeId: google.maps.MapTypeId.TERRAIN
          //mapTypeId: google.maps.MapTypeId.SATELLITE
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        
        var map = new google.maps.Map(mapCanvas, mapOptions);
        
        var marker = new google.maps.Marker({
          position: myLatLng,
          title: "Eurotech Office"
        });
        
        marker.setMap(map);

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">Eurotech Global Sports AG</h3>'+
           '<div id="bodyContent">'+
           '<p><b>C/O Treuhand Fassler & Partner' +
           '<br>Appenzell AG Weissbadstrasse 14' +
           '<br>9050 Appenzell Switzerland</p>'+
            '</div>'+
            '</div>';
      
      var infoWindow = new google.maps.InfoWindow({
        content: contentString
      });
              
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map,marker);
      });

    }

    google.maps.event.addDomListener(window, 'load', initialize);