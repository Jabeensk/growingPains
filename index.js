//console.log('running script...');

const PI = 3.1415;
const maxCapacity = PI * 5 * 5 / 0.8; // Maximum capacity of the garden

function predictPlantGrowth(weeks) {
    let plantCount = 20;

    for (let i = 1; i <= weeks; i++) {
        plantCount *= 2; // Plants double in number every week
    }

    return plantCount;
}

function controlPlantGrowth(weeks) {
    const plantCount = predictPlantGrowth(weeks);

    if (plantCount > 0.8 * maxCapacity) {
        console.log(`Prune the plants. Plant count exceeds 80% of the maximum capacity.`);
    } else if (plantCount >= 0.5 * maxCapacity && plantCount <= 0.8 * maxCapacity) {
        console.log(`Monitor the plants. Plant count is between 50% and 80% of the maximum capacity.`);
    } else {
        console.log(`Plant more plants. There is room for additional growth.`);
    }
}

// Results for 1, 2, and 3 weeks of growth
console.log(`Week 1: ${predictPlantGrowth(1)} plants`);
controlPlantGrowth(1);

console.log(`Week 2: ${predictPlantGrowth(2)} plants`);
controlPlantGrowth(2);

console.log(`Week 3: ${predictPlantGrowth(3)} plants`);
controlPlantGrowth(3);
