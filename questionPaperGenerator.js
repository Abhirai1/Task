// questionPaperGenerator.js

const { getQuestions } = require('./questionStore');

const generateQuestionPaper = (totalMarks, difficultyDistribution) => {
  const questions = getQuestions();
  const questionPaper = [];

  difficultyDistribution.forEach(({ difficulty, percentage }) => {
    const filteredQuestions = questions.filter(q => q.difficulty === difficulty);
    const count = Math.floor((percentage / 100) * totalMarks);

    questionPaper.push(...filteredQuestions.slice(0, count));
  });

  return questionPaper;
};

module.exports = {
  generateQuestionPaper,
};
// console.log("working fine")