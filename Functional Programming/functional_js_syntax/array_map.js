// 1. Write a map function to reverse this array:

const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reversedArray = start.map((item, index, array) => {
    return array[array.length - index - 1];          
});

console.log(reversedArray);

// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ----------------------------------------------------------
// 2. Write a map function to print the Job: Name:
const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]];

const jobName = shipMates.map((val) => val[1]);
console.log(jobName);

//expected output: Array ["Captain: Mal", etc...]

// ----------------------------------------------------------
// 3. Write a map function that prints the name: even|odd
 const awayTeam = ["Picard", "Riker", "Troy", "Data"]

 const evenOdd = awayTeam.map((item, index) => index % 2 == 0 ? `${item}: Even` : `${item}: Odd`);
 console.log(evenOdd);

// expected output: Array: ["Picard: even", "Riker: odd", etc...]

// ----------------------------------------------------------
// 4. Create a multidimensional array of each item and its index in the original Array.

const sci_fi_shows = ['Manedlorian', 'Enterprise', 'Firefly', 'Battlestar Galactica'];

const moviesAndIndex = sci_fi_shows.map((item, index) => [item, index]);
console.log(moviesAndIndex);

// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

// ----------------------------------------------------------
// 5. For each item in this array, create a multidimensional array containing the entire original array.

const arrayOfNumbers = [1, 2, 3, 4];

const newArray = arrayOfNumbers.map((item, index, array) => array);
console.log(newArray);

// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]
