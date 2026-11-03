
// 1. List of interns
let internList = [
  { id: 101, name: "Rahul Sharma", department: "IT", score: 85 },
  { id: 102, name: "Priya Patel", department: "HR", score: 78 },
  { id: 103, name: "Amit Verma", department: "IT", score: 90 },
  { id: 104, name: "Sneha Rao", department: "Marketing", score: 82 }
];


// 2. Add a new intern
function addIntern(id, name, department, score) {

  let newIntern = {
    id: id,
    name: name,
    department: department,
    score: score
  };

  internList.push(newIntern);

  console.log("Intern added successfully!");
}


// 3. Search intern by ID
function searchIntern(id) {

  for (let i = 0; i < internList.length; i++) {

    if (internList[i].id === id) {
      return internList[i];
    }

  }

  return null;
}


// 4. Search interns by department
function searchByDepartment(department) {

  let result = [];

  for (let i = 0; i < internList.length; i++) {

    if (internList[i].department === department) {
      result.push(internList[i]);
    }

  }

  return result;
}


// 5. Update intern score
function updateScore(id, newScore) {

  let intern = searchIntern(id);

  if (intern !== null) {

    intern.score = newScore;

    console.log("Score updated!");

  } else {

    console.log("Intern not found!");

  }
}


// 6. Calculate average score
function calculateAverage() {

  let total = 0;

  for (let i = 0; i < internList.length; i++) {
    total = total + internList[i].score;
  }

  let average = total / internList.length;

  return average;
}


// --------------------------------
// Call the functions
// --------------------------------


// Show all interns
console.log("All Interns:", internList);


// Add a new intern
addIntern(105, "Rohan Gupta", "IT", 88);

console.log("Updated Intern List:", internList);


// Search by ID
console.log("Search ID 102:", searchIntern(102));

console.log("Search ID 999:", searchIntern(999));


// Search by department
console.log("IT Department:", searchByDepartment("IT"));


// Update score
updateScore(101, 95);


// Show average score
console.log("Average Score:", calculateAverage());
