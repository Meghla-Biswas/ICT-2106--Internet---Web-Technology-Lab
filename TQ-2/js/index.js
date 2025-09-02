// Initial students
let students = [
  { id: 1, name: "Rahim", section: "A", year: 2023 },
  { id: 2, name: "Karim", section: "B", year: 2023 },
  { id: 3, name: "Sumaiya", section: "A", year: 2024 }
];

// Function to display students in table
function displayStudents() {
  let tbody = document.querySelector("#studentTable tbody");
  tbody.innerHTML = ""; // Clear old rows

  students.forEach(student => {
    let row = `<tr>
                 <td>${student.id}</td>
                 <td>${student.name}</td>
                 <td>${student.section}</td>
                 <td>${student.year}</td>
               </tr>`;
    tbody.innerHTML += row;
  });
}

// Function to update list (remove first, add new)
function updateStudents() {
  // Remove first student
  students.shift();

  // Add new student
  let newStudent = { id: 4, name: "Prity", section: "C", year: 2025 };
  students.push(newStudent);

  // Refresh table
  displayStudents();
}

// Show initial list on page load
window.onload = displayStudents;
