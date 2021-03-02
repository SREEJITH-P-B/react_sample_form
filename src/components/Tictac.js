import React from 'react';
import '../assets/tictac.css';

class Tictac extends React.Component {
	constructor(props){
		super(props);
		this.state = {

			testString: "Tic Tac Toe",
			board: Array(9).fill(null),
			player: "x"

		};
	}

	chekWinner(){
		let winLines = [
        ["0", "1", '2'],
        ["3", "4", '5'],
        ["6", "7", '8'],
        ["0", "3", '6'],
        ["1", "4", '7'],
        ["2", "5", '8'],
        ["0", "4", '8'],
        ["2", "4", '6'],
      ]
      for(let i of winLines){
      	
      	if(this.state.board[i[0]] && this.state.board[i[0]] === this.state.board[i[1]] && this.state.board[i[0]] === this.state.board[i[2]] ){
      		alert("You won");
      		console.log("won");
      		this.props.changeProductname("hay");
      		this.setState({
      		board: Array(9).fill(null),
			player: "x"


			})

      	}
      }
	}

	testFunction(iterate_variable){ 
		if(this.state.board[iterate_variable] === null){

			let newBoard = this.state.board

			newBoard[iterate_variable] = this.state.player
			this.setState({
				board: newBoard,
				player: this.state.player === "x" ? "o" : "x"
			})
		}

		this.chekWinner()
	}


	render() {
		//loop
		var Box = this.state.board.map((values_in_array, iterate_variable) => <div className = "box" key = {iterate_variable} 

			onClick	= {() => this.testFunction(iterate_variable)}> {values_in_array}</div> )  //passing the iterate variable here 
		// having an option for passing event also for that adding event name or just e on onClick{(event_name)....} passing the value
		return (

			<div className ="title-text-tic-tac-toe">
			<h1>{this.state.testString}</h1>
			<div className = "board">
			{Box}

			</div>
			</div>
			);
	}
}


export default Tictac;
