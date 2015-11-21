$(document).ready(function(){

  var dir = "images";
  var fileextension = ".jpg";
  $.ajax({
      url: dir,
      success: function (data) {

          var image_list = [];

          $(data).find("a:contains(" + fileextension + ")").each(function () {
              var filename = this.href.replace(window.location.host, "").replace("http://", "").replace("/tumblr", "/" + dir + "/tumblr");
              image_list.push(filename);
              console.log(filename);
              console.log(dir);
          });

          console.log(image_list);

          for (var i = 0; i < 3; i++){

            var random_image = image_list[Math.floor(Math.random()*image_list.length)];

            if(i == 0){
              $('.cube-side.top').append('<img src="' + random_image + '">');
            }
            if(i == 1){
              $('.cube-side.left').append('<img src="' + random_image + '">');
            }
            if(i == 2){
              $('.cube-side.right').append('<img src="' + random_image + '">');
            }

          }

      }
  });

});