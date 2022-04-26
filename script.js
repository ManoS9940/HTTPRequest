//Step 1: Create an XHR Request
var req=new XMLHttpRequest();
//Step 2: Open a Connection
req.open('GET', 'https://restcountries.com/v2/all');
//Step 3: Sending a Connection
req.send();
//Step 4: Once the date is successfully loaded from the server
req.onload=function(){
    var data=JSON.parse(req.response);
    console.log(data);
    //print all the country flags
    for(i=0;i<data.length;i++){
        console.log("Country flags:"+data[i].flags);
    }
    //print all the country name
    for(i=0;i<data.length;i++){
        console.log("Country name:"+data[i].name);
    }
    //print all the country region
    for(i=0;i<data.length;i++){
        console.log("Country region:"+data[i].region);
    }
    //print all the country subregion
    for(i=0;i<data.length;i++){
        console.log("Country subregion:"+data[i].subregion);
    }
    //print all the country population
    for(i=0;i<data.length;i++){
        console.log("Country population:"+data[i].population);
    }
}
