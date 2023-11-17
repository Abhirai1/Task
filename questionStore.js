// questionStore.js

const questionStore = [
    { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
    // Add more sample questions as needed
  ];
  
  module.exports = {
    getQuestions: () => questionStore,
  };
  // console.log("Working fine")