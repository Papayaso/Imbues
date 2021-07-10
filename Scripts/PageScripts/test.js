const htmlModal = '<div class="choose"><span class="choose-title"> Opción [N] </span><a class="btn btn-primary"> Aceptar </a></div>';
let selected;
function clickImg(e){
		e.preventDefault();
		//Cleans clickeds
		selected = e;
		$(document).trigger('imageClick');
	}
$(document).ready(function(){
	$(document).on('imageClick', function(){
		let images = $('.test-image');
		Object.keys(images).forEach(function(img){
			if (img.search("(length|prevObject)") == -1)
				images[img].classList.remove("clicked");
		});
		let chosen = $('.choose');
		Object.keys(chosen).forEach(function(choose){
			if (choose.search("(length|prevObject)") == -1)
				chosen[choose].outerHTML = "";
		});

		let img = selected.target;
		img.classList.add("clicked");
		let option = Object.keys(images).map(function(key){
				if (key.search("(length|prevObject)") == -1)
					if (images[key].className.indexOf("clicked") != -1)
						return (parseInt(key) + 1).toString();
			}).filter(function(img){
				return img;
				})[0];
		let parent = img.parentNode;
		parent.outerHTML = parent.outerHTML + htmlModal.replace("[N]", option);
	});
});
