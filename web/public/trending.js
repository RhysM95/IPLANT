if(currentUser == "admin")
{
    //const plantID = [];
    $.get(`${API_URL}/plants`).then(response =>
    {
        const plantID = [];
        const tempArray  = [];
        const lightArray = [];
        const humArray = [];
        const moistureArray = [];
        var labelArray = [];
        var increment = 0;      //900000

        for (var i = 0; i < 8; i++){
            labelArray.push(formatted_time(new Date(Date.now() - increment)));
            increment += 900000;
            //console.log("H");
        }
        //console.log (labelArray);

        response.forEach(plant =>
        {
            
            if (plantID.indexOf(plant.id, 0) == -1) plantID.push(plant.id)
            const ptempArray  = [0,0,0,0,0,0,0,0];
            const plightArray = [0,0,0,0,0,0,0,0];
            const phumArray = [0,0,0,0,0,0,0,0];
            const pmoistureArray = [0,0,0,0,0,0,0,0];
            const countArray = [0,0,0,0,0,0,0,0];
            const sumTempArray = [0,0,0,0,0,0,0,0];
            const sumLightArray = [0,0,0,0,0,0,0,0];
            const sumHumArray = [0,0,0,0,0,0,0,0];
            const sumMoistureArray = [0,0,0,0,0,0,0,0];


            for (var i = 0; i < plant.plantData.length; i++){
                if(plant.plantData[i].time > (Date.now() - 900000)){ 
                    //21600000 milli in 6 hours
                    //900000 milli in 15min

                    countArray[0]++;
                    sumTempArray[0]+= plant.plantData[i].temp;
                    sumLightArray[0]+= plant.plantData[i].light;
                    sumHumArray[0]+= plant.plantData[i].humidity;
                    sumMoistureArray[0]+= plant.plantData[i].moisture;
                   
                }else if (plant.plantData[i].time > (Date.now() - 1800000)){
                    countArray[1]++;
                    sumTempArray[1]+= plant.plantData[i].temp;
                    sumLightArray[1]+= plant.plantData[i].light;
                    sumHumArray[1]+= plant.plantData[i].humidity;
                    sumMoistureArray[1]+= plant.plantData[i].moisture;
                } else if (plant.plantData[i].time > (Date.now() - 2400000)){
                    countArray[2]++;
                    sumTempArray[2]+= plant.plantData[i].temp;
                    sumLightArray[2]+= plant.plantData[i].light;
                    sumHumArray[2]+= plant.plantData[i].humidity;
                    sumMoistureArray[2]+= plant.plantData[i].moisture;
                } else if (plant.plantData[i].time > (Date.now() - 3000000)){
                    countArray[3]++;
                    sumTempArray[3]+= plant.plantData[i].temp;
                    sumLightArray[3]+= plant.plantData[i].light;
                    sumHumArray[3]+= plant.plantData[i].humidity;
                    sumMoistureArray[3]+= plant.plantData[i].moisture;
                } else if (plant.plantData[i].time > (Date.now() - 3600000)){
                    countArray[4]++;
                    sumTempArray[4]+= plant.plantData[i].temp;
                    sumLightArray[4]+= plant.plantData[i].light;
                    sumHumArray[4]+= plant.plantData[i].humidity;
                    sumMoistureArray[4]+= plant.plantData[i].moisture;
                } else if (plant.plantData[i].time > (Date.now() - 4200000)){
                    countArray[5]++;
                    sumTempArray[5]+= plant.plantData[i].temp;
                    sumLightArray[5]+= plant.plantData[i].light;
                    sumHumArray[5]+= plant.plantData[i].humidity;
                    sumMoistureArray[5]+= plant.plantData[i].moisture;
                } else if (plant.plantData[i].time > (Date.now() - 4800000)){
                    countArray[6]++;
                    sumTempArray[6]+= plant.plantData[i].temp;
                    sumLightArray[6]+= plant.plantData[i].light;
                    sumHumArray[6]+= plant.plantData[i].humidity;
                    sumMoistureArray[6]+= plant.plantData[i].moisture;
                } else if (plant.plantData[i].time > (Date.now() - 5400000)){
                    countArray[7]++;
                    sumTempArray[7]+= plant.plantData[i].temp;
                    sumLightArray[7]+= plant.plantData[i].light;
                    sumHumArray[7]+= plant.plantData[i].humidity;
                    sumMoistureArray[7]+= plant.plantData[i].moisture;
                }
                console.log(countArray);
                //console.log(sumTempArray);

                for (var j = 0; j < countArray.length; j++){
                    ptempArray[j] = sumTempArray[j]/countArray[j];
                    plightArray[j] = sumLightArray[j]/countArray[j];
                    phumArray[j] = sumHumArray[j]/countArray[j];
                    pmoistureArray[j] = sumMoistureArray[j]/countArray[j];
                }
                //console.log(ptempArray);

                tempArray.push(ptempArray);
                lightArray.push(plightArray);
                humArray.push(phumArray);
                moistureArray.push(pmoistureArray);
            }
        });
        
        new Chartist.Line('#chart1', {
            labels: labelArray,
            series: tempArray
        }, {
            low: -40,
            showArea: false
        });

        new Chartist.Line('#chart2', {
            labels: labelArray,
            series: lightArray
        }, {
            low: 0,
            showArea: false
        });

        new Chartist.Line('#chart3', {
            labels: labelArray,
            series: humArray
        }, {
            low: 0,
            showArea: false
        });

        new Chartist.Line('#chart4', {
            labels: labelArray,
            series: moistureArray
        }, {
            low: 0,
            showArea: false
        });
    }).catch(error =>
    {
        console.error(`Error: ${error}`);
    });
}
else if (currentUser)
{
    $.get(`${API_URL}/users/${currentUser}/plants`).then(response => 
    {
        response.forEach((plant) => 
        {
            //
        });
        
    }).catch(error => 
    {
        console.error(`Error: ${error}`);
    });
}
else 
{
    const path = window.location.pathname;
    if (path !== '/login' && path !== '/registration') 
    {
        location.href = '/login';
    }
}
function formatted_time(d)
{
   return (d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}

function UpdateValue(){
    var temp=test.value;
    if (temp=="Melbourne"){
      hideAll();
      showCity("melbWeather");
    } 
    else if (temp=="Adelaide"){
      hideAll();
      showCity("adelWeather");
    }
    else if (temp=="Sydney"){
      hideAll();
      showCity("sydWeather");
    }
    else if (temp=="Hobart"){
      hideAll();
      showCity("hobWeather");
    }
    else if (temp=="Darwin"){
      hideAll();
      showCity("darwWeather");
    }
    else if (temp=="Perth"){
      hideAll();
      showCity("perWeather");
    }
    else if (temp=="Canberra"){
      hideAll();
      showCity("canbWeather");
    }
    else if (temp=="Brisbane"){
      hideAll();
      showCity("brisWeather");
    }
       

    else hideAll();

    function hideAll(){
      document.getElementById("melbWeather").style.visibility = "hidden";
      document.getElementById("melbWeather").style.height = "0px";
      document.getElementById("sydWeather").style.visibility = "hidden";
      document.getElementById("sydWeather").style.height = "0px";
      document.getElementById("adelWeather").style.visibility = "hidden";
      document.getElementById("adelWeather").style.height = "0px";
      document.getElementById("hobWeather").style.visibility = "hidden";
      document.getElementById("hobWeather").style.height = "0px";
      document.getElementById("brisWeather").style.visibility = "hidden";
      document.getElementById("brisWeather").style.height = "0px";
      document.getElementById("perWeather").style.visibility = "hidden";
      document.getElementById("perWeather").style.height = "0px";
      document.getElementById("darwWeather").style.visibility = "hidden";
      document.getElementById("darwWeather").style.height = "0px";
      document.getElementById("canbWeather").style.visibility = "hidden";
      document.getElementById("canbWeather").style.height = "0px";
    }
    
    function showCity(input){
      document.getElementById(input).style.visibility = "visible";
      document.getElementById(input).style.height = "200px";
    }    
}

function addData(value){
    
}
