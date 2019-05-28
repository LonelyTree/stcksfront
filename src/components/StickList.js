import React, { Component } from 'react';
import '../App.css';
import styled from 'styled-components';


const Wrapper = styled.div`
	backgroundColor: yellow;
	height: 50%;
	width: 50%;
    position: absolute;
`

const Title = styled.h1`
    position: absolute;
`

const Options = styled.h1`
    position: absolute;
`
const Form1=styled.form`
    position: absolute;
`

class Chopsticks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listOfSticks: [{ length: 'idk' }],
			moduleShowing: false,
			idToSend: null
		};
	}

	handleUpdate = (element) => {
		this.setState({
			moduleShowing: true,
			idToSend: element.id
		});
	};
	updateChopsticks = async () => {
		var length = document.getElementById('uniqueIDFive').value;
		var width = document.getElementById('uniqueIDSix').value;
		var color = document.getElementById('uniqueIDSeven').value;
		var message = document.getElementById('uniqueIDEight').value;
		let objectToSendOne = {
			length: length.toString() + 'px',
			width: width.toString() + 'px',
			color: color.toString(),
			message: message,
			owner: this.props.owner,
			created_by_id: 'Reed'
		};
		try {
			const registerCall = await fetch(
				`http://localhost:8000/api/v1/chopsticks/${this.state.idToSend}`,
				{
					method: 'PUT',
					body: JSON.stringify(objectToSendOne),
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
			const response = await registerCall.json();
			console.log(response, 'from the flask server on localhost:8000');
			this.getChopsticks();
		} catch (err) {
			console.log(err);
			this.getChopsticks();
		}
	};

	handleDelete = async (element) => {
		try {
			const response = await fetch(
				`http://localhost:8000/api/v1/chopsticks/${element.id}`,
				{
					method: 'DELETE',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
			if (response.ok) {
				const responseParsed = await response.json();
				console.log(responseParsed);
			}
			this.getChopsticks();
		} catch (err) {
			console.log(err);
		}
	};
	eatWith = (element) => {
											this.props.changeSticks(element);
	}

	getChopsticks = async () => {
		try {
			const response = await fetch(
				`http://localhost:8000/api/v1/chopsticks/list/${this.props.owner}`,
				{
					credentials: 'include'
				}
			);

			if (response.ok) {
				const responseParsed = await response.json();
				console.log(responseParsed);
				await this.setState({
					listOfSticks: responseParsed
				});
				this.addThings();
			}
		} catch (err) {
			console.log(err);
		}
	};

	addThings = () => {
		this.props.addToList(this.state.listOfSticks);
	};

	componentDidMount() {
		this.getChopsticks();
	}

	render() {
		return (
			<Wrapper>
				<Title>Your chopsticks</Title>

				{this.props.newList === undefined
					? undefined
					: this.props.newList.map((element, index) => (
							<Options>
								{element.length + '   '}
								{element.width + '   '}
								{element.color + '   '}
								<button onClick={this.eatWith(element)} type="submit" >Eat with these</button>
								<button onClick={this.handleDelete(element)}>Delete</button>
								<button onClick={this.handleUpdate(element)}>Update</button>
							</Options>
					  ))}
				{this.state.moduleShowing
					?(<Form1>
						<input id="uniqueIDFive" placeholder="length" />
						<input id="uniqueIDSix" placeholder="width" />
						<input id="uniqueIDSeven" placeholder="color" />
						<input id="uniqueIDEight" placeholder="message" />
						<button onClick={this.updateChopsticks} type="button">
							{' '}
							Update Chopsticks
						</button>
					</Form1>)
					:(undefined)}
			</Wrapper>
		);
	}
}
export default Chopsticks;
