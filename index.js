// Code your solution here

let even = arr.filter(n => {
    return n % 2 === 0;
  });
  // even = [2,4,6]





  //2. Write a function to Case - insensitvly match
  //findMatching() 
    // returns all drivers that match the passed in name
    // returns matching drivers if case does not match but letters do
    // to do this logic, convert the match and the string to both lowercase
    //returns an empty array if there is no match
    function findMatching(drivers, String) {
        return drivers.filter( possibleMatch => possibleMatch.toLowerCase() === String.toLowerCase()
        )
    }

  //3. Write a function to partially match substrings
  // fuzzyMatch() returns a driver if beginning provided letters match
  //does not return drivers if on ly middle or ending letters match
  //does not return drivers if only middle or ending letters match
  //This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
  //pass in the drivers and a test string into the function
  //return a filter looking at each possible match where possibleMatch is lowercase is the same as the lowercase test string. 
  //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    function fuzzyMatch(drivers, testString) {
        return drivers.filter( possibleMatch => possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0 
        ) 
    }


  //4. Write a function to match an object Values to a provided string 
  //matchName()
    // accesses the data structure to check if name matches
    // each element of the drivers array is a JavaScript object that has a property of name.
    // the record name matches the test string that is passed into the filter
function matchName(drivers, testString) {
    return drivers.filter ( record => record.name === testString)
  }