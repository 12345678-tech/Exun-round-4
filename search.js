const toBeSearched = process.argv.slice(2);

if(!toBeSearched.length){
	console.log("Please provide string to search");
}
else {
	const sampleText = 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.'
	console.log(sampleText.includes(toBeSearched))
}