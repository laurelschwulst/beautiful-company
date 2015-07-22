//(function(){
// Made this stuff global.

	var cities = {};
	var request_number = 1;

	var request_weather_data = function(location, location_index){

		$.simpleWeather({
			location: location,
			unit: 'f',
			success: function(data){

			    console.log('Weather information loaded succesfully!', data);

				cities[location] = data;
				request_number += 1;

				if(request_number == Locations.length + 1){  	
					weather(cities);	
				}	

			},
			error: function(data){

			    console.error('Weather information could not be loaded!', data);
			    
			}
		});

	};

// Made this into a function.
var load_all_cities = function(){
  for(var i = 0; i < Locations.length; i++) {
    // Reset request_number when loading locations subsequently.
    request_number = 1;
    request_weather_data(Locations[i], i);
  };
}

// Made this stuff global.
//}());
