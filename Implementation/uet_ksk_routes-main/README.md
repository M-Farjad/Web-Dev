map.js 

copy from mapbox documentation
no code is written from it self
1. First Line token , without token map cannot be load
2. Create a Map object from line 5-11
    current center is lahore longtitude and latitude
3.  top right button on map to show current location
    from map box documentation built in 
    line-12-24
4.  mapbox setting to change map layout
    not using this
    line -26-35

5. button with (2) that enables location 
    it bring map focus on you 

6. line 44
    nothing

Index.js 
all functions that i wrote on my own 

var allMarkers = []; // to hold pointer of all markers for deletion
var allPopups = []; // all popup when click on map , hold all there pointer
var allMarkersLocation = [];
var allMarkersButton = [];


1. From line 10-24
    if you select another route it will be call
    1. remove all info box shown at bottom of previous route
    2. remove all markers shown to map of previous route
    3. remove all popup ( when click on marker small box) of previous route
    4. we are deleing all the markers bcz we can't update there value so we are making new markers 
    5. As all are made using New so we need to store there addresses in above variable to delte all of them 

2. From Line 26-33
    use to show position of specific marker 
    its box is shown just after selecting route
    if you select any bus stop this function will be call
    result into map will focus to that marker

3. cleanInfoBox - line 44 
    simply just clean all the info boxes value to ""

4. appened - line 48
    use to insert info box at the end of the secreen

5. displayMarkerPos(lon,lat) - line 64
    1. from line 26-33 is using this 
    2. purpose it takes lon and lat of any position and then move map focus to that area

6. buildRoute() - line 72
    1. takes route no  - route1
    2. open its json file using -line 73
    3. read all json file 
    4. read both path & route 
    Path = gray line made from list of lon and lat
    route = markers position with names
    5. then call follwing function for selected route no .

7. removeMarker() = line 85
    it is importatnt to remove previous selected route markers
    otherwise markers will be shown or consume memory 

8. removePopups() = line 94
    it is importatnt to remove previous selected route markers
    otherwise markers will be shown or consume memory 

9. _addMyPoint , _addStart , _addEnd , _addPath  - line 106-289
    1. all are copy from mapbox documentaion 
    2. Block of code  nedded to update map values 



10. _addMarkers ( rsp) line 291 
    1. rsp here means routes details 
    2. or we can say data read from jason file 
    3. for each item (sigle stop detial) in rsp calls a function
    4. Create a Marker 
    5. Create a Popup of that marker
    6. push marker and popup pointer in list to delte them when another route is selected

11. _addButtons (pos) - line 311
    1. OPtion right after Select Route 
    2.  When u select route after routeBuild is call this function is call
    3. add markers names in list 
    4. due to push at line=316 it will add to end so 
    5. for each marker add its name will be add in options at the end 



Route.jason
     "route": [
        {
            "name": String,
            "time":String,
            "latitude": String,
            "longitude": String,
            "visibility": "show" / "hide" 
        },
        ],
    "path":[
        [longtitude,latitude],

1.  jason is map 
2.  route is used to get list of Stop details
    markers are adding using this value
3.  path contain list of [long,lat]. single [long,lat] is called point 
    that Mapbox has a function 
    that take 2 points and draw line btween them 
    it also takes list of points and drawe line bewtween the cosnectuives points 
    grey line on map is adding using this




CSS
uses bootstrap and little bit editing from code with harry

Assets 
contains images


    