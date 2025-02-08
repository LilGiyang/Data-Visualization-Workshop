// logs or display "Hellow world" to the console.
console.log("hello world");

// dateElement <- <span id="date">2/8/24</span>
// gets the element using the element's id ('date') and soter it to a container (variable) named dateElement
const dateElement = document.getElementById("date");

//generate the current date and store it to a container (variable) 'currentDate'

const currentDate = new Date();
console.log(currentDate);

let dateOptions = {year:"numeric", month:"long" , day:"numeric" , timeZone: "America/Los_Angeles"}
// en-US : month/day/year
// settings - dateOptions
dateElement.innerHTML = currentDate.toLocaleDateString('en-us',dateOptions);


// server api url
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	//http method 

	method: 'POST',
	headers: {
		'x-rapidapi-key': '79bf448b2amshcf94685757b11ccp1da9fbjsn8e52e7497e9e',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		// required request body type of our server ,example(name="topher")
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: '23424977'})
};
let graphData =[]
fetch(url, options)
.then(res=> res.json()) // to wait the response.
.then(data => {
console.log(data)// response of the server
	//i++ = i=i+i
	// For llops are used for repititive tasks, in this case to add each topic name and volume to  a collection (array) 'graphData'

	for(let i=0; i<25; i++){
		graphData.push({
			"name" : data.trends[i].name,
			"volume" : data.trends[i].volume
		})

	}
	console.log(graphData);
// object parameter here represents each of object of grapgData
		let topics = graphData.map(object => {
			return object.name


		})
		console.log(topics);
		let volumes = graphData.map(object => {
			return object.volume


		})
		console.log(volumes);


const myChart = document.getElementById("myChart");
console.log(myChart);

let barChart = new Chart(myChart, {
	type:'bar',
	data:{
		labels: topics, // our collected topics earlier
		datasets: [
			{
				label: '# of tweets/xeets',
				data: volumes, // this will be the basis if sizes of our bars in our bar graph
				borderWidth: 2, // thickness of the bargraphs or the bar' border
				backgroundColor:[
				'rgba(255, 99, 132, 0.2)',
	    		'rgba(255, 159, 64, 0.2)',
	    		'rgba(255, 205, 86, 0.2)',
	    		'rgba(75, 192, 192, 0.2)',
	    		'rgba(54, 162, 235, 0.2)',
	    		'rgba(153, 102, 255, 0.2)',
	    		'rgba(201, 203, 207, 0.2)'
					

				],
				borderColor: [
				'rgb(255, 99, 132)',
	    		'rgb(255, 159, 64)',
	    		'rgb(255, 205, 86)',
	    		'rgb(75, 192, 192)',
	    		'rgb(54, 162, 235)',
	    		'rgb(153, 102, 255)',
	    		'rgb(201, 203, 207)'
				],

				hoverBackgroundColor: [
				'rgb(255, 99, 132)',
	    		'rgb(255, 159, 64)',
	    		'rgb(255, 205, 86)',
	    		'rgb(75, 192, 192)',
	    		'rgb(54, 162, 235)',
	    		'rgb(153, 102, 255)',
	    		'rgb(201, 203, 207)'
				]
			}
		]
	},
	options : {
		indexAxis: 'y' , 
		scales: {
			y: {
				beginAtZero: true // value of the graph should start at zero
			}
		}
	}
})





	;})

//let myPost = {
	//name: "Date VIsualization Workshop DOne",
	//querryUrl: "search?q=%data+Visualization+Workshop",
	//volume: 31799
//}
//console.log(myPost);
// //dot notaiton to access the property / key of an object
// //objectName.keyName
//console.log(myPost.name);
//console.log(myPost.querryUrl);
//console.log(myPost.volume);

//let graphData = [
		//{name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
		//{name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400},	
	//];
	// //adds myPost to graphData collection (array)
	//graphData.push(myPost);

	//console.log(graphData[0].name);
	//console.log(graphData[0].volume);
	//console.log(graphData[1].name);
	//console.log(graphData[1].volume);
	//console.log(graphData[2].name);
	//console.log(graphData[2].volume);

	//console.log(graphData);
