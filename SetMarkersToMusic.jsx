var bpm = 150;
var beatsPerMeasure = 4;
var showBeats = false;

var myComp = app.project.activeItem;
var myLayer = myComp.selectedLayers[0];
var t = myLayer.inPoint;
var measure = 1;
var beat = 0;
while (t < myLayer.outPoint)
{
  if(showBeats)
  {
    var myMarkerVal = new MarkerValue(measure+":"+(beat%beatsPerMeasure+1));
    if(beat%beatsPerMeasure==0) myMarkerVal.duration = 1/bpm*60*beatsPerMeasure;
    myLayer.property("Marker").setValueAtTime(t, myMarkerVal);
  }
  else
  {
    if(beat%beatsPerMeasure==0)
    {
      var myMarkerVal = new MarkerValue(measure);
      myMarkerVal.duration = 1/bpm*60*beatsPerMeasure;
      myLayer.property("Marker").setValueAtTime(t, myMarkerVal);
    }
    else
      myLayer.property("Marker").addKey(t);
  }
  t += 1/bpm*60;
  beat++
  if(beat%beatsPerMeasure==0) measure++
}