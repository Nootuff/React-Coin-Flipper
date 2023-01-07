import React from "react"
import Coin from "./Coin"
import HeadsImg from "../assets/heads.jpg"
import TailsImg from "../assets/tails.jpg"

class Flipper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            coinImg: null,
            result: null,
            flipped: 0,
            heads: 0,
            tails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flip() {
        const imgArray = [HeadsImg, TailsImg];
        let rand = Math.floor(Math.random() * 2); //Generate a random number either 0 or 1 to get either first or second image in the array.
        var isHead = (rand == 0) ? true : false; //Ternary operator. 
        this.setState((prevState) => ({
            coinImg: imgArray[rand],
            flipped: prevState.flipped + 1,
            heads: prevState.heads + (isHead ? 1 : 0), //Ternary operator within setstate to allow for conditional setstating. If isHead is true then it will "exist" & its existance trigger the first value, if it is false it will not exist, it will not be there and the second value will be selected. Other than the way this is laid out, this is a normal ternary. 
            tails: prevState.tails + (isHead ? 0 : 1),
            result: (isHead ? "Heads" : "Tails")
        }));
    }

    handleClick() { //Having this function call the actual function is apparently good practice. 
        this.flip()
    }

    render() {
        return (
            <div>
                <h1>Flip the Coin!</h1>
                <h2>{this.rand}</h2>
                <Coin source={this.state.coinImg} alt={this.state.result} /> {/*The coin component*/}
                <h3>{this.state.result}</h3>
                <p>Test change</p>
                <p>Out of <b>{this.state.flipped}</b> flips, <b>{this.state.heads}</b> heads and <b>{this.state.tails}</b> tails.</p>
                <button onClick={this.handleClick}>Flip</button>
            </div>
        )
    }
}

export default Flipper