/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', 'Hello Mattie Mungane' etc]
*/

export function greetUsers(customers) {
    return customers.map(item => {
        return `Hello ${item.first_name} ${item.last_name}!`;
    });
}

/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', etc]
*/

export function greetUsersOverAge60(customers) {
    return customers
        .filter(item => item.age >= 60)
        .map(item => {
            return `Hello ${item.first_name} ${item.last_name}!`;
        });
}


/* 
Output: 
2125 is the total age
*/

export function addAllAges(customers) {
    let sum = 0;

    for(let person of customers) {
        sum += person.age;
    }
    return sum;
}

// export function addAllAges(customers) {
//     const sum = customers.reduce((acc, c) => acc + c.age, 0);

//     return sum;
// }

/* 
Output: 
4.5
*/

// do addAllAges, but with coolFactor, then divide by the number of customers
export function getAverageCoolFactor(customers) {
    let sum = 0;
    // let average = sum / customers.length;

    for(let customer of customers) {
        sum += customer.cool_factor;
    }
    return sum / customers.length;

}

/* 
Output: 
{
    female: 4,
    male: 3,
    nonbinary: 2,
    etc . . .
}
*/
// "if you ever want to find the count of something in javascript, use hashmap every single time"
export function getTotalOfEachGender(customers) {
    const countingHashMap = {};

    for(let customer of customers) {
        if(countingHashMap[customer.gender]) {
            countingHashMap[customer.gender]++;
        } else {
            countingHashMap[customer.gender] = 1;
        }
    }
    return countingHashMap;
}

/* 
Output: 
 {
    female: 3,
    male: 2,
    nonbinary: 1,
    etc . . .
 }
*/
// filter for ford owners, then run getTotalOfEachGender
export function getGenderBreakdownOfFordOwners(customers) {
    const fordOwners = customers.filter(item => item.car_make === 'Ford');
    return getTotalOfEachGender(fordOwners);
}

/* 
Output: 
{
    ford: {
        female: 3,
        male: 2,
        nonbinary: 1,
    },
    mercedes:  {
        female: 3,
        male: 2,
        nonbinary: 1,
    },
    etc . . .
}
*/

export function getGenderBreakdownOfEachCar(customers) {
    return true;
}

/* 
Output: 
{
    ford: [3, 5, 4, 4, 7, 5],
    mercedes: [8, 5, 6, 8, 3, 9],
    honda: [2, 4, 4, 3, 7, 1],
    etc. . .
}
*/


export function getAllCoolFactorsOfEachCar(customers) {
    return true;
}

/* 
Output: 
{
    ford: 5.4
    mercedes:  8.5
    honda: 2.3
}
*/

export function getAverageCoolFactorOfEachCar(customers) {
    return true;
}


/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 55,
    20:  38,
    30: 12,
    40: 31,
    50: 62,
    60: 93,
    70: 45,
    80: 32,
    90: 11,
}
*/

export function makeAgeBrackets(customers) {
    return true;
}

/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: [3, 5, 4, 4, 7, 5],
    20: [8, 5, 6, 8, 3, 9],
    30: [1, 8, 4, 1, 9, 2],
    40: [2, 4, 4, 3, 7, 1],
    etc . . .
}
*/

export function getCoolFactorsByAgeBracket(customers) {
    return true;
}


/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 5.6,
    20: 3.1
    30: 7.8,
    40: 9.5,
    etc . . .
}
*/

export function getAverageCoolFactorByAgeBracket(customers) {
    return true;
}

