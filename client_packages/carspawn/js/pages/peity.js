// peity

$(function () {
  'use strict';
	
	// pie chart
	$("span.pie").peity("pie");
	
	
	// line chart
	$("span.line1").peity("line", {
	  fill: ["#383f48"],
	  stroke: ["#33CABB"],
	  height: 32,
	  width: 120,
	});
	
	$("span.line2").peity("line", {
	  fill: ["#33cabb"],
	  stroke: ["#33cabb"],
	  height: 64,
	  width: 250,
	});
	
	$("span.line3").peity("line", {
	  fill: ["transparent"],
	  stroke: ["#ef5350"],
	  height: 96,
	  width: 250,
	});
	
	
	// donut chart
	$('.donut').peity('donut');
	
	
	// bar chart
	$(".bar").peity("bar");
	
	
	// updatingChart chart
	var updatingChart = $(".updating-chart").peity("line", { 
		height: 38,
	    width: 120, 
		fill: ["#383f48"],
	    stroke: ["#33cabb"],
	});

	setInterval(function() {
	  var random = Math.round(Math.random() * 10);
	  var values = updatingChart.text().split(",");
	  values.shift();
	  values.push(random);

	  updatingChart
		.text(values.join(","))
		.change();
	}, 1000);
	
});// End of use strict