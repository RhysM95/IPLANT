// const lightHi = 12000;
// const lightLo = 5000;
// const tempHi = 50;
// const tempLo = 20;
// const humHi = 70;
// const humLo = 20;
// const moistHi = 600;
// const moistLo = 200;

// const currentUser = localStorage.getItem('name');

// if(currentUser == "admin")
// {
//     $.get(`${API_URL}/plants`).then(response =>
//     {
//         response.forEach(plant =>
//         {
//             end = plant.plantData.length -1
            
//             $('#alarms tbody').append(`
//             <tr> 
//             <td>${plant.user}</td>
//             <td>${plant.name}</td>
//             <td>${plant.plantData[end].temp + '°'}</td>
//             <td>${plant.plantData[end].light + ' LUX'}</td>
//             <td>${plant.plantData[end].humidity + ' %RH'}</td>
//             <td>${plant.plantData[end].moisture + ' MU'}</td>
//             </tr>
//             `);
//         });
               
//     }).catch(error =>
//     {
//         console.error(`Error: ${error}`);
//     });
// }

// else if (currentUser)
// {
//     $.get(`${API_URL}/users/${currentUser}/plants`).then(response => 
//     {
//         response.forEach((plant) => 
//         {
//             end = plant.plantData.length -1

//             $('#plants tbody').append(`
//             <tr data-plant-id=${plant._id}>
//             <td>${plant.user}</td>
//             <td>${plant.name}</td>
//             <td>${plant.plantData[end].temp + '°'}</td>
//             <td>${plant.plantData[end].light + ' LUX'}</td>
//             <td>${plant.plantData[end].humidity + ' %RH'}</td>
//             <td>${plant.plantData[end].moisture + ' MU'}</td>
//             </tr>
//             `);
//         });
        
//     }).catch(error => 
//     {
//         console.error(`Error: ${error}`);
//     });
// }

//     light_al(lightLo, lightHi);
//     temp_al(tempLo, tempHi);
//     hum_al(humLo, humHi);
//     moist_al(moistLo, moistHi);


// function light_al(lo, hi) 
// {
//     light_lo = false;
//     light_hi = false;
//     if (plant.plantData[plant.plantData.length -1].light <= lo)
//     {
//         light_lo = true;
//     };
//     if (plant.plantData[plant.plantData.length -1].light >= hi)
//     {
//         light_hi = true;
//     };
// }

// function temp_al(lo, hi) 
// {
//     temp_lo = false;
//     temp_hi = false;
//     if (plant.plantData[plant.plantData.length -1].temp <= lo)
//     {
//         temp_lo = true;
//     };
//     if (plantData.data[plant.plantData.length -1].temp >= hi)
//     {
//         temp_hi = true;
//     };
// }

// function hum_al(lo, hi) 
// {
//     hum_lo = false;
//     hum_hi = false;
//     if (plant.plantData[plant.plantData.length -1].humidity <= lo)
//     {
//         hum_lo = true;
//     };
//     if (plant.plantData[plant.plantData.length -1].humidity >= hi)
//     {
//         hum_hi = true;
//     };
// }

// function moist_al(lo, hi) 
// {
//     moist_lo = false;
//     moist_hi = false;
//     if (plant.plantData[plant.plantData.length -1].moisture <= lo)
//     {
//         moist_lo = true;
//     };
//     if (plant.plantData[plant.plantData.length -1].moisture >= hi)
//     {
//         moist_hi = true;
//     };
// }