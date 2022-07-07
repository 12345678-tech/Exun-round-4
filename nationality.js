import fetch from 'node-fetch';

const myArgs = process.argv.slice(2);
if(!myArgs.length){
	console.log("Please provide person's name to get nationality");
}
else {
console.log('Fetching nationality....')
const getNationality = async () => {
	try{
			const response = await fetch(`https://api.nationalize.io?name=${myArgs}`);
			const nationality = await response.json();
			nationality.country.length ? 
			console.log(`${myArgs} nationality is ${nationality.country[0].country_id}`) : 
			console.log(`${myArgs} nationality not available`);
			
	} catch(error){
		console.log("error",error)
		switch(error.code) {
		  case 401:
		    console.log('unauthorized request');
		    break;
		  case 402:
		    console.log('payment required');
		    break;
		  case 422:
		  	console.log('missing/invalid name parameter');
		  	break;
		  case 429:
		  	console.log('Too many requests');
		  	break;
		  default:
		    console.log('Something went wrong in api call');
		}
	}

}

await getNationality();	

}

