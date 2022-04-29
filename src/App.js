import React from "react";
import Questions from "./components/Question";
import CatAndDif from "./components/CatAndDif";

function App() {
  const [gameStarted, setGameStarted] = React.useState(false)
  const [category,setCategory] = React.useState("29")
  const [difficulty,setDifficulty] = React.useState("easy")
  const [trivia,setTrivia] = React.useState([])
  const [checkA,setCheckA] = React.useState(false)
  const [count,setCount] = React.useState(0) 

  console.log("primero")

  React.useEffect(()=>{
    fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}`)
      .then(response => response.json())
      .then(data => setTrivia(data.results))
      .catch(error => console.log(error))
      console.log("segundo")

  },[category,difficulty])

  function handleCategory(catg){
    setCategory(catg)
  }

  function handleDifficulty(diff){
    setDifficulty(diff)
  }

  function startGame(){
    setGameStarted(true)
  }

  function checkAnswers(){
    setCheckA(true)
    
      for(let i=0; i<trivia.length; i++){
        if(trivia[i].correct_answer===trivia[i].answer) setCount(prev=>prev+1)
      }
  }





  function restart(){
    setCheckA(false)
    setCount(0)
    fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}`)
      .then(response => response.json())
      .then(data => setTrivia(data.results));
  }

//   function handleChange(value){
//     !checkA && setAnswerSelected(value)
// }

function handleAnswer(question,value){
  !checkA && setTrivia(prev=> prev.map(elem=>{
      if(question===elem.question){
        return{
          ...elem, answer:value
        }
      }else{
        return {...elem}
      }
    
  }))
}


  const questions = trivia.map(elem=>{
    const answers = [...elem.incorrect_answers]
    answers.unshift(elem.correct_answer)
    answers.sort()
    return(
      <Questions
        key={elem.question}
        type = {elem.type}
        question= {elem.question}
        answers= {answers}
        checkAnswers = {checkA}
        correct = {elem.correct_answer}
        answerSelected ={elem.answer}
        handleAnswer = {handleAnswer}
      />
    )
  })

  return (
    <div className="App">
      {!gameStarted?
      <div className='starting-pag'>
        <h1>Quizzical</h1>
        <p>Prove your knowledge with this trivia of 5 questions</p>
        <CatAndDif category={category} handleCategory={handleCategory} difficulty={difficulty} handleDifficulty={handleDifficulty} />
        <button onClick={startGame}>Start quiz</button>

      </div>:
      <div className="questions">
        {questions}
        {checkA?
        <footer>
          <h2>You scored {count}/5 correct answers</h2>
          <button className="restart" onClick={restart}>Play again</button>
          <button onClick={()=>{
            setGameStarted(false)
            restart()
          }}>Change category/difficulty</button>
        </footer>:
        <button onClick={checkAnswers}>Check answers</button>
        }
      </div>
      }

    </div>
  );
}

export default App;
