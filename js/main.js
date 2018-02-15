function myMap(){
  $.ajax({
    type: "GET",
    url: "activity.xml",
    dataType: "xml",
    success: function(xmlData){
      var pointsJ = $("trkpt", xmlData);
      var points = [];
      $.each(pointsJ, function(i, currItem){
        lat = $(this).attr("lat");
        lon = $(this).attr("lon");
        point = new google.maps.LatLng(lat, lon);
        points.push(point);
      });
      console.log(pointsJ.length);

      var runPath = new google.maps.Polyline({
        path: points,
      });

      var mapProp={
        center:new google.maps.LatLng(55.667995, 12.580377),
        zoom:10,
      };
      var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
      runPath.setMap(map);

    }, error : function(){console.log("bleh");}
  });
}
