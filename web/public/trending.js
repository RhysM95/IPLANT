if(currentUser == "admin")
{
    //const plantID = [];
    $.get(`${API_URL}/plants`).then(response =>
    {

        const plantID = [];
        const dataArray = []
        const labelArray = [];
        const tempArray  = [];
        const lightArray = [];
        const humArray = [];
        const moistureArray = [];
        
        response.forEach(plant =>
        {
            const plantArray = []

            if (plantID.indexOf(plant.id, 0) == -1) plantID.push(plant.id)
            plantArray.push(plant.id);
            plantArray.push(plant.temp);
            plantArray.push(plant.light);
            plantArray.push(plant.humidity);
            plantArray.push(plant.moisture);

            dataArray.push(plantArray);
        });
        //console.log(plantID)
        //console.log(dataArray);

        //const output = []
        plantID.forEach(element => {
            //console.log(element);
            const result = dataArray.filter(plant_id => element == plant_id[0]);
            //console.log(result);
            //output.push(result)

            const arr1 = [];
            const arr2 = [];
            const arr3 = [];
            const arr4 = [];

            result.forEach(element => {
                //label will be plantID element value
                arr1.push(element[1]);  //temp
                arr2.push(element[2]);  //??
                arr3.push(element[3]);
                arr4.push(element[4]);
            });

            labelArray.push(1);
            tempArray.push(arr1);
            lightArray.push(arr2);
            humArray.push(arr3);
            moistureArray.push(arr4);

            console.log(tempArray);

        });
        
        new Chartist.Line('#chart1', {
            labels: labelArray,
            series: [
                tempArray
            ]
        }, {
            low: -40,
            showArea: false
        });

        new Chartist.Line('#chart2', {
            labels: labelArray,
            series: [
                lightArray
            ]
        }, {
            low: 0,
            showArea: false
        });

        new Chartist.Line('#chart3', {
            labels: labelArray,
            series: [
                humArray
            ]
        }, {
            low: 0,
            showArea: false
        });

        new Chartist.Line('#chart4', {
            labels: labelArray,
            series: [
                moistureArray
            ]
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
