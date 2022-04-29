import React from "react";
import { decode } from "html-entities"
//special characters
// What is the name of Rivers Cuomo&#039;s wife?

export default function Questions(props){
    console.log("question")
    return(
        <div className="trivia-el">
            <h2 className="question">{decode(props.question)}</h2>
            {props.type==="multiple"?
            <form className="answers">
                <input 
                type="radio"
                id={props.answers[0]}
                name="answer"
                value={props.answers[0]}
                checked={props.answerSelected === props.answers[0]}
                onChange={(event)=>props.handleAnswer(props.question,event.target.value)}
                />
                <label 
                className={
                    `answer 
                    ${props.answerSelected === props.answers[0] && "selected " }
                    ${props.checkAnswers && "check " }
                    ${props.checkAnswers && props.correct === props.answers[0] && "correct "}
                    ${props.checkAnswers && props.answerSelected === props.answers[0] && props.correct !== props.answers[0] && "incorrect" } ` 
                }
                htmlFor={props.answers[0]}>
                {decode(props.answers[0])}
                </label>

                <input 
                type="radio"
                id={props.answers[1]}
                name="answer"
                value={props.answers[1]}
                checked={props.answerSelected === props.answers[1]}
                onChange={(event)=>props.handleAnswer(props.question,event.target.value)}
                />
                <label 
                className={
                    `answer 
                    ${props.answerSelected === props.answers[1] && "selected " }
                    ${props.checkAnswers && "check " }
                    ${props.checkAnswers && props.correct === props.answers[1] && "correct "}
                    ${props.checkAnswers && props.answerSelected === props.answers[1] && props.correct !== props.answers[1] && "incorrect"} ` 
                }  
                htmlFor={props.answers[1]}>
                {decode(props.answers[1])}
                </label>

                <input 
                type="radio"
                id={props.answers[2]}
                name="answer"
                value={props.answers[2]}
                checked={props.answerSelected === props.answers[2]}
                onChange={(event)=>props.handleAnswer(props.question,event.target.value)}
                />
                <label 
                className={
                    `answer 
                    ${props.answerSelected === props.answers[2] && "selected " }
                    ${props.checkAnswers && "check " }
                    ${props.checkAnswers && props.correct === props.answers[2] && "correct "}
                    ${props.checkAnswers && props.answerSelected === props.answers[2] && props.correct !== props.answers[2] && "incorrect"} ` 
                }  
                htmlFor={props.answers[2]}>
                {decode(props.answers[2])}
                </label>

                <input 
                type="radio"
                id={props.answers[3]}
                name="answer"
                value={props.answers[3]}
                checked={props.answerSelected === props.answers[3]}
                onChange={(event)=>props.handleAnswer(props.question,event.target.value)}
                />
                <label 
                className={
                    `answer 
                    ${props.answerSelected === props.answers[3] && "selected " }
                    ${props.checkAnswers && "check " }
                    ${props.checkAnswers && props.correct === props.answers[3] && "correct "}
                    ${props.checkAnswers && props.answerSelected === props.answers[3] && props.correct !== props.answers[3] && "incorrect"} ` 
                }  
                htmlFor={props.answers[3]}>
                {decode(props.answers[3])}
                </label>

            </form>
            :
            <form className="answers">
                <input 
                type="radio"
                id={props.question+"T"}
                name="answer"
                value="True"
                checked={props.answerSelected === "True"}
                onChange={(event)=>props.handleAnswer(props.question,event.target.value)}
                />
                <label 
                className={
                    `answer 
                    ${props.answerSelected === "True" && "selected " }
                    ${props.checkAnswers && "check " }
                    ${props.checkAnswers && props.correct === "True" && "correct "}
                    ${props.checkAnswers && props.answerSelected === "True" && props.correct !== "True" && "incorrect"} ` 
                }  
                htmlFor={props.question+"T"}>True</label>


            
            <input 
                type="radio"
                id={props.question+"F"}
                name="answer"
                value="False"
                checked={props.answerSelected === "False"}
                onChange={(event)=>props.handleAnswer(props.question,event.target.value)}
                />
                <label 
                className={
                    `answer 
                    ${props.answerSelected === "False" && "selected " }
                    ${props.checkAnswers && "check " }
                    ${props.checkAnswers && props.correct === "False" && "correct "}
                    ${props.checkAnswers && props.answerSelected === "False" && props.correct !== "False" && "incorrect"} ` 
                }  
                htmlFor={props.question+"F"}>False</label>
        </form>
            }
        </div>
    )
}

