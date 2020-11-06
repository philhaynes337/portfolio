'use strict';


const portDb = [ 	{projectTitle:"Mission Control", description:"A website designed to access spaceX information and upcoming launches. Also designed to have a little fun by pulling the NASA picture of the day with a little information about it. You can also look up the current space weather information and past weather information.", languages:"JavaScript / CSS / HTML", linkGitHub:"https://github.com/philhaynes337/missioncontrol", linkActivePage:"https://philhaynes337.github.io/missioncontrol/", img:"port_snip_missioncontrol.JPG" },
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