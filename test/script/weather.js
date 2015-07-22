var tester;

var weather = function(locations){

	var city  = locations['New York, NY'];

	var current_temp = city.heatindex;
	var current_condition = city.currently;
	var city_name = city.city;
	$('.fayes-weather-line').html("It is " + current_temp + " degrees and " + "<span class='current-condition'>" + current_condition + "</span> in " + city_name + " City.");;

	var current_code = city.code;

	var codes = {
		0:    "tornado",
		1:    "tropical storm",
		2:    "hurricane",
		3:    "severe thunderstorms",
		4:    "thunderstorms",
		5:    "mixed rain and snow",
		6:    "mixed rain and sleet",
		7:    "mixed snow and sleet",
		8:    "freezing drizzle",
		9:    "drizzle",
		10:   "freezing rain",
		11:   "showers 1",
		12:   "showers 2",
		13:   "snow flurries",
		14:   "light snow showers",
		15:   "blowing snow",
		16:   "snow",
		17:   "hail",
		18:   "sleet",
		19:   "dust",
		20:   "foggy",
		21:   "haze",
		22:   "smoky",
		23:   "blustery",
		24:   "windy",
		25:   "cold",
		26:   "cloudy",
		27:   "mostly cloudy (night)",
		28:   "mostly cloudy (day)",
		29:   "partly cloudy (night)",
		30:   "partly cloudy (day)",
		31:   "clear (night)",
		32:   "sunny",
		33:   "fair (night)",
		34:   "fair (day)",
		35:   "mixed rain and hail",
		36:   "hot",
		37:   "isolated thunderstorms",
		38:   "scattered thunderstorms 1",
		39:   "scattered thunderstorms 2",
		40:   "scattered showers",
		41:   "heavy snow",
		42:   "scattered snow showers",
		43:   "heavy snow",
		44:   "partly cloudy",
		45:   "thundershowers",
		46:   "snow showers",
		47:   "isolated thundershowers",
		3200: "not available"
	};

	var make_condition_from_code = function(code) {

		var condition_from_code = codes[code];
		return condition_from_code;

	};

	// var x = make_condition_from_code(current_code);
	// console.log(x);

	var add_css_class_based_on_condition_in_city = function(city, code) {
		// Used below via: var condition = add_css_class_based_on_condition_in_city(new_haven, '.new-haven-forecast');

		if(code == undefined){
		  var code = city.weather_data.code;
		}

		console.log(city);
		var css_class = city.css_class;

		var condition_from_code = make_condition_from_code(code);

		// Alter the text to make all characters lowercase, and replace spaces with dashes.
		var css_class_from_condition = generate_css_class_from_condition(condition_from_code);

		console.log(css_class_from_condition);
		$('#weather-condition').addClass(css_class_from_condition)

		delete_condition_classes_from_element(css_class);
		$(css_class).addClass(css_class_from_condition); 

		return condition_from_code;

	};

	var generate_css_class_from_condition = function(condition) {
    var css_class = "c-" + condition.toLowerCase().replace(/'/g, '').replace("(", '').replace(")", '').replace(/\s+/g, '-');
    return css_class;
	}

	var delete_condition_classes_from_element = function(selector){

	if($(selector).length == 0){
	  return false;
	}

	var current_classes = $(selector).attr('class').split(/\s+/);
	var filtered_classes =[];

	for(var i = 0; i < current_classes.length; i++){
	  var current_class = current_classes[i];
	  if(current_class.indexOf('c-') == 0){
	    filtered_classes.push(current_class);
	  };
	};

	// Use jQuery or "$" to find an html element with class="new_haven_forecast" and then add our class.
	$(selector).removeClass(filtered_classes.join(' '))

	};

	add_css_class_based_on_condition_in_city(city_name, current_code);

};