
import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2F1cmFiaHNpbmdoMDA0IiwiYSI6ImNsMGdjZWQxcjExY2szams2ZG9ieDloYXEifQ.q965bYVjp2My5eXVtrr1mQ';

// const data = [
// 	{
// 		"location": "Manhattan Ave & Norman Ave at NE corner",
// 		"city": "Brooklyn",
// 		"state": "New York",
// 		"coordinates": [-73.9516030004786,40.71557300071668],
// 	},
// 	{
// 		"location": "6th Ave & 42nd St at NW corner",
// 		"city": "Manhattan",
// 		"state": "New York",
// 		"coordinates": [-73.98393399979334,40.72533300052329],
// 	},
// 	{
// 		"location": "Essex St & Delancey St at SE corner",
// 		"city": "Manhattan",
// 		"state": "New York",
// 		"coordinates": [-73.9882730001973,40.718207001246554],
// 	}
// ]

class InitMap extends React.Component{

	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
			lng: -74,
			lat: 40.7128,
			zoom: 12
		}
	}

	// Create map and lay over markers
	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11', 
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

		// data.forEach((location) => {
		// 	console.log(location)
		// 	 new mapboxgl.Marker({
    //    draggable: true})
		// 					.setLngLat(location.coordinates)
		// 					.setPopup(new mapboxgl.Popup({ offset: 30 })
		// 					.setHTML('<h4>' + location.city + '</h4>' + location.location))
		// 					.addTo(map);
		// })
	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'80%', height:'80vh'}}/>
			</div>
		)
	}
}

export default InitMap;