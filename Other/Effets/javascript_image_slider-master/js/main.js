// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var slider_name = document.querySelector('.slider-name');
var slider_type = document.querySelector('.slider-type');
var slider_tec = document.querySelector('.slider-tec');
var slider_btn = document.querySelector('.slider-btn');
var slider_dis = document.querySelector('.slider-dis');
var data = [
	{
		name: "Image 01",
		clientName: "Studio See Saw",
		discription: "a multi-disciplinary design studio based out of Mumbai, India. Work on design solutions to help your business grow multiple folds.",
		url: "https://greensock.com/docs/v3/GSAP/gsap.timeline()",
		img: 'a.jpg',
		type: "Website",
		technology: "Wordpress 01"
	},
	{
		name: "Image 02",
		clientName: "Amfah India",
		discription: "AMFAH India, an industry leader in air treatment products, is a group company from AMFAH General LLC Dubai. The 12-year-old company has introduced many such products to India, including domestic/commercial dehumidifiers, air purifiers and portable air conditioners.",
		url: "https://greensock.com/docs/v3/GSAP/gsap.timeline()",
		img: 'b.jpg',
		type: "Website",
		technology: "Wordpress"
	},
	{
		name: "Image 03",
		clientName: "Indian School Of Hospitality",
		discription: "We’re proud to be a college founded by the industry, for the industry. This means we understand the needs of the industry – and can create talented professionals who can flourish in numerous streams of the landscape.",
		url: "https://greensock.com/docs/v3/GSAP/gsap.timeline()",
		img: 'c.jpg',
		type: "Website",
		technology: "Wordpress 03"
	}, {
		name: "Image 03",
		clientName: "Srikant Villuri		",
		discription: "As a kid I was mesmerized by the magic of cinema and the art of story telling. To give a nudge to the art of storytelling, joined the premium - Film and Television Institute of India, Pune.",
		url: "https://greensock.com/docs/v3/GSAP/gsap.timeline()",
		img: 'd.jpg',
		type: "Website",
		technology: "Wordpress 03"
	},
	{
		name: "Image 03",
		clientName: "Ravebizz Solutions",
		discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam facere, dicta illum dolores adipisci doloremque animi vitae commodi ipsa assumenda, perferendis at nostrum? Nam reiciendis adipisci ad sint, minus error!",
		url: "https://greensock.com/docs/v3/GSAP/gsap.timeline()",
		img: 'e.jpg',
		type: "Website",
		technology: "Wordpress 03"
	},
];
var i = 0;

function prev() {
	if (i <= 0) i = data.length;
	i--;
	// return setImg();
	return setData();
}

function next() {
	if (i >= data.length - 1) i = -1;
	i++;
	var fadeOutImg = document.querySelector('.img-box');
	fadeOutImg.classList.add("fade-out");
	return setData();
}

// function setImg() {
// 	return slider_img.setAttribute('src', "data/" + data[i].img);
// }
function setData() {
	var HTML = '<img src="./data/' + data[i].img + '" class="slider-img fade-in"><p>' + data[i].name + '</p>';
	let dd = document.querySelector('.img-box');
	let img = document.getElementsByTagName('img')
	let text = document.getElementsByTagName('p')
	//gsap.timeline({onComplete: myFunction, repeat: 2, repeatDelay: 1, yoyo: true});
	var tl = gsap.timeline({ defaults: { duration: 1, ease: 'power4.easeInOut' } });
	tl
		.to(img, { x: -20, opacity: 0 })
		.to(text, { y: -20, opacity: 0 });
	return setTimeout(function () {
		tl.reverse();
		slider_img.setAttribute('src', "images/" + data[i].img);
		slider_name.innerHTML = data[i].clientName;
		// dd.innerHTML = HTML;
	}, 2000);
}
