'use strict';


const portDb = [ 	{projectTitle:"Mission Control", description:"A website designed to access spaceX information and upcoming launches. Also designed to have a little fun by pulling the NASA picture of the day with a little information about it. You can also look up the current space weather information and past weather information.", languages:"JavaScript / CSS / HTML", linkGitHub:"https://github.com/philhaynes337/missioncontrol", linkActivePage:"https://philhaynes337.github.io/missioncontrol/", img:"port_snip_missioncontrol.JPG" },
					{projectTitle:"Weather Vision", description:"This app was created to allow weather enthusiasts to document their own observations. Observations are used for military and civilian operations, mainily flight operations. These observations are encoded in METAR's (Meteorological Aerodrome Reports) and this app allows the user to do just that. The app also gives the user to report in their own format to allow for amateur and training applications.", languages:"JavaScript, CSS, and ReactJS", linkGitHub:"https://github.com/philhaynes337/WeatherVisionClient", linkActivePage:"https://weather-vision.vercel.app/", img:"wvmain.JPG" },
					{projectTitle:"Happy Hours", description:"This app was created to mainly help track the hours and overtime for salaried employees. Non-salaried can also track. It tracks the hours and adds up the balance over any time worked over 40 hours. Any time over 40 hours these hours go towards your 'Happy Hours' time you should get off! The system also tracks if the salaried employee has any bonus money for that day.", languages:"JavaScript, CSS, and ReactJS", linkGitHub:"https://github.com/philhaynes337/Happy-Hours", linkActivePage:"https://happyhours-two.vercel.app/", img:"hhmain.JPG" }, 
					{projectTitle:"Project Title", description:"Description", languages:"Languages Used", linkGitHub:"_blank", linkActivePage:"_blank", img:"comingsoon.jpg" }


];

console.log(portDb[0]);

for (let i = 0; i < portDb.length; i++) {

	let projectHtml = document.getElementById('projects');

	projectHtml.innerHTML += `

	<div class="item">
		<img src="${portDb[i].img}" alt="${portDb[i].projectTitle}" class="img-crl">
	<ul>
		<li><strong>Project Title:</strong> ${portDb[i].projectTitle}</li>
		<li><strong>Description:</strong> ${portDb[i].description}</li>
		<li><strong>Languages Used:</strong> ${portDb[i].languages}</li>
		<li><strong>Link to GitHub:</strong> <a href="${portDb[i].linkGitHub}" target="_blank">Click Here</a></li>
		<li><strong>Link to Active Page / App:</strong> <a href="${portDb[i].linkActivePage}" target="_blank">Click Here</a></li>

	</ul>
	</div>

	`;

}