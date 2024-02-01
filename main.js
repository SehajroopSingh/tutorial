import { ForceGraph3D } from './node_modules/3d-force-graph';
//const gData2 = require('./Data/disney_heirarchy.json');
//import { ForceGraph3D } from 'https://unpkg.com/3d-force-graph';



// Log a message to the console
console.log('main.js is loaded and running!');

// DOM manipulation to add content to the page
document.addEventListener('DOMContentLoaded', () => {
  const graphDiv = document.getElementById('3d-graph');
  if (graphDiv) {
    // Create a new element
    const newElement = document.createElement('p');
    newElement.textContent = 'JavaScript is successfully connected and running.';
    // Append the new element to the '3d-graph' div
    graphDiv.appendChild(newElement);
  } else {
    console.error('Cannot find the #3d-graph element.');
  }
});