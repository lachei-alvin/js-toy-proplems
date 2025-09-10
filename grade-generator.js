function generateGrade(marks) {
  // Validate the input range at first
  if (marks < 0 || marks > 100) {
    return "Invalid input. Marks must be between 0 and 100.";
  }

  // Grade rules to be followed in js
  if (marks > 79) {
    return "Grade: A";
  } else if (marks >= 60 && marks <= 78) {
    return "Grade: B";
  } else if (marks >= 49 && marks <= 59) {
    return "Grade: C";
  } else if (marks >= 40 && marks <= 48) {
    return "Grade: D";
  } else {
    return "Grade: E";
  }
}

// Example usage to find grades
let studentMarks = 45;
console.log(generateGrade(studentMarks)); // Output: Grade: D
