const Type = {
    FLOWER: 1,
    SUCCULANT: 2,
    TREE: 3,
    VEGETABLE: 4,
    FRUIT: 5,
    HERB: 6
};
Object.freeze(Type);

const lightHi;
const lightLo;
const tempHi;
const tempLo;
const humHi;
const humLo;
const moistHi;
const moistLo;

Plant.findOne({"type": data.id }, (err, plant) => 
{
    switch (plant.type) {
        case FLOWER:
            lightHi = 12000;
            lightLo = 2000;
            tempHi = 30;
            tempLo = 20;
            humHi = 80;
            humLo = 50;
            moistHi = 700;
            moistLo = 200;
            light_al(lightLo, lightHi);
            temp_al(tempLo, tempHi);
            hum_al(humLo, humHi);
            moist_al(moistLo, moistHi);
        break;
        case SUCCULANT:
            lightHi = 10000;
            lightLo = 5000;
            tempHi = 80;
            tempLo = 60;
            humHi = 40;
            humLo = 10;
            moistHi = 500;
            moistLo = 100;
            light_al(lightLo, lightHi);
            temp_al(tempLo, tempHi);
            hum_al(humLo, humHi);
            moist_al(moistLo, moistHi);
        break;
        case TREE:
            lightHi = 15000;
            lightLo = 3000;
            tempHi = 40;
            tempLo = 15;
            humHi = 70;
            humLo = 20;
            moistHi = 600;
            moistLo = 300;
            light_al(lightLo, lightHi);
            temp_al(tempLo, tempHi);
            hum_al(humLo, humHi);
            moist_al(moistLo, moistHi);
        break;
        case VEGETABLE:
            lightHi = 8000;
            lightLo = 4000;
            tempHi = 50;
            tempLo = 30;
            humHi = 75;
            humLo = 40;
            moistHi = 500;
            moistLo = 300;
            light_al(lightLo, lightHi);
            temp_al(tempLo, tempHi);
            hum_al(humLo, humHi);
            moist_al(moistLo, moistHi);
        break;
        case FRUIT:
            lightHi = 10000;
            lightLo = 4000;
            tempHi = 30;
            tempLo = 15;
            humHi = 70;
            humLo = 50;
            moistHi = 600;
            moistLo = 150;
            light_al(lightLo, lightHi);
            temp_al(tempLo, tempHi);
            hum_al(humLo, humHi);
            moist_al(moistLo, moistHi);
        break;
        case HERB:
            lightHi = 15000;
            lightLo = 6000;
            tempHi = 250;
            tempLo = 10;
            humHi = 60;
            humLo = 30;
            moistHi = 500;
            moistLo = 100;
            light_al(lightLo, lightHi);
            temp_al(tempLo, tempHi);
            hum_al(humLo, humHi);
            moist_al(moistLo, moistHi);
        break;
    }

function light_al(lo, hi) 
{
    light_lo = false;
    light_hi = flase;
    if (plantData.data.light <= lo)
    {
        light_lo = true;
    };
    if (plantData.data.light >= hi)
    {
        light_hi = true;
    };
}
function temp_al(lo, hi) 
{
    temp_lo = false;
    temp_hi = flase;
    if (plantData.data.temp <= lo)
    {
        temp_lo = true;
    };
    if (plantData.data.temp >= hi)
    {
        temp_hi = true;
    };
}
function hum_al(lo, hi) 
{
    hum_lo = false;
    hum_hi = flase;
    if (plantData.data.hum <= lo)
    {
        hum_lo = true;
    };
    if (plantData.data.hum >= hi)
    {
        hum_hi = true;
    };
}
function moist_al(lo, hi) 
{
    moist_lo = false;
    moist_hi = flase;
    if (plantData.data.smoist <= lo)
    {
        moist_lo = true;
    };
    if (plantData.data.smoist >= hi)
    {
        moist_hi = true;
    };
}
