var examResult = {
    name: "Alice",
    scores: [["Math", 85], ["Science", 92], ["History", 78]],
    totalScore: 255
};
// Function to calculate and display average score
function displayAverageScore(result) {
    var totalSubjects = result.scores.length;
    var totalScore = result.totalScore;
    var averageScore = totalScore / totalSubjects;
    console.log("Average Score for ".concat(result.name, ": ").concat(averageScore.toFixed(2)));
}
// Display average score
displayAverageScore(examResult);
