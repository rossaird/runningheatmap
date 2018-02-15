var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    aggregateXML(xhttp.responseXML);
  }
};
xhttp.open("GET", "testfiles/activity.gpx", true);
xhttp.send();

function aggregateXML(xml){
  var points;
  var pointstxt;
  path="/gpx/trk/trkseg";
  if(xml.evaluate){
    var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
    var result = nodes.iterateNext();
    while (result){
      lat = result.childNodes[0].getAttributeNode("lat");
      lng = result.childNodes[0].getAttributeNode("lng");
      point = new google.maps.LatLng(lat, lng);
      points.push(point);
      pointstxt += lat + ", " + lng + "</br>";
    }
  }
  document.getElementById("testoutput").innerHTML = pointstxt


}
