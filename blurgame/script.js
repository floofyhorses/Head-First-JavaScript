window.onload = function() {
			var images = document.getElementsByTagName("img");
			for ( var i = 0; i < images.length; i++) {
				images[i].onclick = showAnswer;
			}
		};

		function showAnswer(eventObj) {
			var image = eventObj.target;
			var name = image.id;
			name = name + ".jpg";
			image.src = name;

			setTimeout(reblur, 3000, image);
         }

//LEARNING MOMENT: The photos for the unblurred image broke every time no matter what I did
//I finally realized that I had added an extra space in the "" when concatenating, (at line 11),which
//made the file name not add the .jpg properly and thus not return the img file. *facepalms*


		function reblur(image) {
			var name = image.id;
			name = name + "blur.jpg";
			image.src = name;
		}
