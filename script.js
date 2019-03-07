function photoChoose(el) {
	if (el.src.match("image/mar38.png"))
		el.src="image/mar19.jpg"; //actual img
	else if (el.src.match("image/mar19.jpg"))
		el.src="image/mar20.png"
	else if (el.src.match("image/mar20.png"))
		el.src="image/mar35.png"
	else if (el.src.match("image/mar35.png"))
		el.src="image/mar38.png"
	else {
		//nothing
	}
		checkPhotos();
}

function photoChoose2(el) {
	if (el.src.match("image/mar23.png"))
		el.src="image/mar27.png"
	else if (el.src.match("image/mar27.png"))
		el.src="image/mar31.png"
	else if (el.src.match("image/mar31.png"))
		el.src="image/mar18.jpg" //actual img
	else if (el.src.match("image/mar18.jpg"))
		el.src="image/mar23.png"
	else {
		//nothing
	}
		checkPhotos();
}

function photoChoose3(el) {
	if (el.src.match("image/mar15.jpg"))
		el.src="image/mar36.png"
	else if (el.src.match("image/mar36.png"))
		el.src="image/mar17.jpg" //actual img
	else if (el.src.match("image/mar17.jpg"))
		el.src="image/mar26.png"
	else if (el.src.match("image/mar26.png"))
		el.src="image/mar15.jpg"
	else {
		//nothing
	}
		checkPhotos();
}

function photoChoose4(el) {
	if (el.src.match("image/mar10.jpg"))
		el.src="image/mar32.png"
	else if (el.src.match("image/mar32.png"))
		el.src="image/mar16.jpg" //actual img
	else if (el.src.match("image/mar16.jpg"))
		el.src="image/mar24.png"
	else if (el.src.match("image/mar24.png"))
		el.src="image/mar10.jpg"
	else {
		//nothing
	}
		checkPhotos();
}

function photoChoose5(el) {
	if (el.src.match("image/mar25.png"))
		el.src="image/mar15.jpg" //actual img
	else if (el.src.match("image/mar15.jpg"))
		el.src="image/mar34.png"
	else if (el.src.match("image/mar34.png"))
		el.src="image/mar18.jpg"
	else if (el.src.match("image/mar18.jpg"))
		el.src="image/mar25.png"
	else {
		//nothing
	}
		checkPhotos();
}

function photoChoose6(el) {
	if (el.src.match("image/mar33.png"))
		el.src="image/mar11.jpg"
	else if (el.src.match("image/mar11.jpg"))
		el.src="image/mar34.png"
	if (el.src.match("image/mar34.png"))
		el.src="image/mar14.jpg" //actual img
	else if (el.src.match("image/mar14.jpg"))
		el.src="image/mar33.png"
	else {
		//nothing
	}
		checkPhotos();
}

function photoChoose7(el) {
	if (el.src.match("image/mar31.png"))
		el.src="image/mar13.jpg" //actual img
	else if (el.src.match("image/mar13.jpg"))
		el.src="image/mar21.png"
	else if (el.src.match("image/mar21.png"))
		el.src="image/mar20.png"
	else if (el.src.match("image/mar20.png"))
		el.src="image/mar31.png"
	else {
		//nothing
	}
		checkPhotos();
}

function photoChoose8(el) {
	if (el.src.match("image/mar20.png"))
		el.src="image/mar21.png"
	else if (el.src.match("image/mar21.png"))
		el.src="image/mar11.jpg" //actual img
	else if (el.src.match("image/mar11.jpg"))
		el.src="image/mar32.png"
	else if (el.src.match("image/mar32.png"))
		el.src="image/mar20.png"
	else {
		//nothing
	}
		checkPhotos();
}

function photoChoose9(el) {
	if (el.src.match("image/mar28.png"))
		el.src="image/mar19.jpg"
	else if (el.src.match("image/mar19.jpg"))
		el.src="image/mar32.png"
	else if (el.src.match("image/mar32.png"))
		el.src="image/mar10.jpg" //actual img }
	else if (el.src.match("image/mar10.jpg"))
		el.src="image/mar28.png"
	else {
		//nothing
	}
		checkPhotos();
}

function checkPhotos() {
	if (mar1.getAttribute('src') == "image/mar19.jpg" && mar2.getAttribute('src') == "image/mar18.jpg" && mar3.getAttribute('src') == "image/mar17.jpg" && mar4.getAttribute('src') == "image/mar16.jpg" && mar5.getAttribute('src') == "image/mar15.jpg" && mar6.getAttribute('src') == "image/mar14.jpg" && mar7.getAttribute('src') == "image/mar13.jpg" && mar8.getAttribute('src') == "image/mar11.jpg" && mar9.getAttribute('src') == "image/mar10.jpg") {
		document.getElementById("switch").classList.add("pgswitch");
		document.getElementById("switch").classList.add("button");
	}
	else {
		// nothing
	}
}

function changePage() {
	mar1.classList.add("diamond");
	mar2.classList.add("diamond");
	mar3.classList.add("diamond");
	mar4.classList.add("diamond");
	mar5.classList.add("diamond");
	mar6.classList.add("diamond");
	mar7.classList.add("diamond");
	mar8.classList.add("diamond");
	mar9.classList.add("diamond");
	document.getElementById("pop").classList.remove("gone");
	document.getElementById("pop2").classList.remove("gone");
	document.getElementById("pop3").classList.remove("gone");
}

function imageReset() {
	if (mar1.getAttribute('src') != "image/mar19.jpg") {
		document.getElementById("mar1").src="image/mar38.png";
	}
	if (mar2.getAttribute('src') != "image/mar18.jpg") {
		document.getElementById("mar2").src="image/mar23.png";
	}
	if (mar3.getAttribute('src') != "image/mar17.jpg") {
		document.getElementById("mar3").src="image/mar15.jpg";
	}
	if (mar4.getAttribute('src') != "image/mar16.jpg") {
		document.getElementById("mar4").src="image/mar10.jpg";
	}
	if (mar5.getAttribute('src') != "image/mar15.jpg") {
		document.getElementById("mar5").src="image/mar25.png";
	}
	if (mar6.getAttribute('src') != "image/mar14.jpg") {
		document.getElementById("mar6").src="image/mar33.png";
	}
	if (mar7.getAttribute('src') != "image/mar13.jpg") {
		document.getElementById("mar7").src="image/mar31.png";
	}
	if (mar8.getAttribute('src') != "image/mar11.jpg") {
		document.getElementById("mar8").src="image/mar20.png";
	}
	if (mar9.getAttribute('src') != "image/mar10.jpg") {
		document.getElementById("mar9").src="image/mar28.png";
	}
	else {
		// nothing
	}
}


