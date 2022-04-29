import React from "react";

export default function Category(props){
    return(
        <div>
                    <div>
            <label htmlFor="category">Select Category:</label>
            <br/>
            <select
            id="category"
            value={props.category}
            onChange={(event)=>props.handleCategory(event.target.value)}
            name="category"
            >
            <option value="">--Choose--</option>
            <option value="29">Comics</option>
            <option value="27">Animals</option>
            <option value="23">History</option>
            <option value="15">Video Games</option>
            <option value="25">Art</option>
        </select>
        </div>
        <div>
        <label htmlFor="difficulty">Select Difficulty:</label>
        <br/>
        <select
        id="difficulty"
        value={props.difficulty}
        onChange={(event)=>props.handleDifficulty(event.target.value)}
    name="difficulty"
        >
        <option value="">--Choose--</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        </select>

        </div>

        </div>
    )
}