// 1) Find your API's unique code.
//    To do this, go to your API's page and copy the string of numbers and letters after "apis/" in the URL
//    Paste this code in line 10 of the below code after "api/" and before the "?"

// 2) Find your username's unique API key.
//    When you are logged into Kimono, click your name at the top right and click "Account".
//    Your API key will appear. Paste this code in line 10 of the below code after "apikey-"

$.ajax({
    url:"https://www.kimonolabs.com/api/45555pns?apikey=9SIV1EtWYanL8sGIB0z5cBO3VHFDr75B",
    crossDomain:true,
    dataType:"jsonp",
    // Make a call to the Kimono API following the "url" 
    
    'success': function(response){ 
    // If the call request was successful and the data was retrieved, this function will create a list displaying the data
        
    $("h1").html(response.name);
    // Puts the API name into the panel heading  
        
    var collection = response.results.collection1;
    for (var i = 0; i < collection.length; i++){   
    // Traverses through every element in the entire collection

        var photoURL = collection[i].picture.src;
        // Records the URL of each photo in a variable called "photoURL"

        $('.inside').append('<img src="' + photoURL + '">');
        // Puts this URL inside an img tag within the "inside" class

      }
  }
 
  })