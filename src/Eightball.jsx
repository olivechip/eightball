import {useState} from "react";

const Eightball = ({answers}) => {
    const randomNum = () => Math.floor(Math.random()*answers.length);
    const getMsg = answers[randomNum()].msg;
    const getColor = answers[randomNum()].color;

    // Color Functions
    const colorCount = () => {
        if (getColor === "green"){
            setGreenCount(greenCount+1);
        } else if (getColor === "goldenrod"){
            setGoldenrodCount(goldenrodCount+1);
        } else if (getColor === "red"){
            setRedCount(redCount+1);
        }
    }
    const resetColors = () => {
        setGreenCount(0),
        setGoldenrodCount(0),
        setRedCount(0)
    }

    // React States
    const [state, setState] = useState("question");
    const [msg, setMsg] = useState("Think of a question.");
    const [color, setColor] = useState("black");
    const [greenCount, setGreenCount] = useState(0);
    const [goldenrodCount, setGoldenrodCount] = useState(0);
    const [redCount, setRedCount] = useState(0);


    return (
    <>
    <div>
        <button style={{background: color}} onClick={ () => {
            setState("answer"),
            setMsg(`${getMsg}`),
            setColor(`${getColor}`),
            colorCount()
        }}>
            {msg}
        </button>
    </div>
    <div>
        <button onClick={ () => {
            setState("question"),
            setMsg("Think of a question."),
            setColor("black"),
            resetColors()
        }}>
            Reset
        </button>
    </div>
    <div>
        <span>Green: {greenCount} </span>
        <span>Goldenrod: {goldenrodCount} </span>
        <span>Red: {redCount} </span>
    </div>  
    </>
    )
}

Eightball.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
}

export default Eightball;