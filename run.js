//const gData2 = require('./Data/disney_heirarchy.json');
import * as THREE from 'three'






document.addEventListener('DOMContentLoaded', function() {
    // Fetch the JSON data
    fetch('./Data/disney_heirarchy.json')
      .then(response => response.json())
      .then(data => {
        console.log(data); // The JSON data is now available here
        
        // Assuming ForceGraph3D is globally available, e.g., via a script tag in your HTML
        const myGraph = ForceGraph3D();
        
        // Use the fetched data for your graph
        myGraph(document.getElementById('3d-graph')).graphData(data);
      })
      .catch(error => console.error('Error loading JSON:', error));
  });