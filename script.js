const quizData = [
    {
      question: "Qual o nome completo de Dexter?",
      choices: ["Dexter Morgan", "Dexter Phillips", "Dexter Johnson", "Dexter Williams"],
      correctAnswer: 0
    },
    {
      question: "O que Dexter faz para viver?",
      choices: ["Policial", "Médico", "Analista forense", "Advogado"],
      correctAnswer: 2
    },
    {
      question: "Quem é a irmã de Dexter?",
      choices: ["Debra", "Rita", "Lila", "Hannah"],
      correctAnswer: 0
    },
    {
        question: "Qual o verdadeiro nome do 'Assassino do Caminhão do Gelo'?",
        choices: ["Walter Kenney", "Oleg Mickc","Brian Moser", "Dexter Morgan"],
        correctAnswer: 2
      },

      {
        question: "Qual nome Dexter Morgan recebeu na mídia pelos seus assassinatos?",
        choices: ["Fada do Dente", "Trinity", "Assassino do Caminhão do Gelo", "Açougueiro de Bay Harbor"],
        correctAnswer: 3
      }
  ];
  
  const quiz = document.getElementById('quiz');
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const submitButton = document.getElementById('submit');
  const resultElement = document.getElementById('result');
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = "";
    currentQuizData.choices.forEach((choice, index) => {
      const choiceElement = document.createElement("button");
      choiceElement.innerText = choice;
      choiceElement.classList.add('choice');
      choiceElement.addEventListener("click", () => {
        if (index === currentQuizData.correctAnswer) {
          score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
          showQuestion();
        } else {
          showResult();
        }
      });
      choicesElement.appendChild(choiceElement);
    });
  }
  
  function showResult() {
    quiz.style.display = 'none';
    resultElement.innerText = `Você acertou ${score} de ${quizData.length} perguntas.`;
  }
  
  showQuestion();
  