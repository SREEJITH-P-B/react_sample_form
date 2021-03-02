import React from 'react';

const Apihandling = () => {


	const [gallaries, SetGallaries] = React.useState({count:"",name: ""});

	const getGallaries =  () => {
		//const gallary = { count: "39",name: "jithu"}
		
		const response = fetch('http://127.0.0.1:3000/gallaries/20.json',{
			method: "DELETE",
			headers: {
    		'Content-Type': 'application/json'
 			 },
			mode: "cors",
			//body:  JSON.stringify({gallary})
		}).then(response => response.json()).then(result => {SetGallaries(result)})
		

	}
 
	React.useEffect(() => {
		getGallaries();
		sessionStorage.setItem('token','jithu');
		let data = sessionStorage.getItem('token');
		console.log(data);
	},[])


	return(
		<h1> hello</h1>

		);
}

export default Apihandling;