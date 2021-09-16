let attractions;
fetch('./attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
		console.log('attractions - (a)', attractions);
		filterData();
	});

console.log('attractions - (b)', attractions);  

function filterData(category) {
	let dataFiltered = attractions;
	if (category && category!= "all"){
	dataFiltered = attractions.filter(d => {
		return d.Category == category;
	});
}
	attractions.sort(function(a, b) {
		 return b.Visitors - a.Visitors;
	});
	const data = dataFiltered.slice(0,5);
	console.log(data);
	renderBarChart(data);
}

document.querySelector('#attraction-category').addEventListener("change",event => { 
	console.log(event)
	filterData(event.target.value)
})
