jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect
		revealDuration = 600,
		revealAnimationDelay = 1500;

	initHeadline();


	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    // word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);

			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);

		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');
			setTimeout(function(){
				parentSpan.removeClass('selected');
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');

		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
		} else if($bool) {
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		}
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');

		if(!$letter.is(':last-child')) {
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
		} else {
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});

// var TxtRotate = function(el, toRotate, period) {
// 	this.toRotate = toRotate;
// 	this.el = el;
// 	this.loopNum = 0;
// 	this.period = parseInt(period, 10) || 2000;
// 	this.txt = '';
// 	this.tick();
// 	this.isDeleting = false;
// };
//
// TxtRotate.prototype.tick = function() {
// 	var i = this.loopNum % this.toRotate.length;
// 	var fullTxt = this.toRotate[i];
//
// 	if (this.isDeleting) {
// 		this.txt = fullTxt.substring(0, this.txt.length - 1);
// 	} else {
// 		this.txt = fullTxt.substring(0, this.txt.length + 1);
// 	}
//
// 	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
//
// 	var that = this;
// 	var delta = 300 - Math.random() * 100;
//
// 	if (this.isDeleting) { delta /= 2; }
//
// 	if (!this.isDeleting && this.txt === fullTxt) {
// 		delta = this.period;
// 		this.isDeleting = true;
// 	} else if (this.isDeleting && this.txt === '') {
// 		this.isDeleting = false;
// 		this.loopNum++;
// 		delta = 500;
// 	}
//
// 	setTimeout(function() {
// 		that.tick();
// 	}, delta);
// };
//
// window.onload = function() {
// 	var elements = document.getElementsByClassName('txt-rotate');
// 	for (var i=0; i<elements.length; i++) {
// 		var toRotate = elements[i].getAttribute('data-rotate');
// 		var period = elements[i].getAttribute('data-period');
// 		if (toRotate) {
// 			new TxtRotate(elements[i], JSON.parse(toRotate), period);
// 		}
// 	}
// 	// INJECT CSS
// 	var css = document.createElement("style");
// 	css.type = "text/css";
// 	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
// 	document.body.appendChild(css);
// };
//
// //for small nav
// $(document).ready(function(){
// 	$('.sidenav').sidenav();
// });
//
// //for the quote
// function splitWords() {
// 	var quote = document.querySelector("blockquote q");
// 	quote.innerText.replace(/(<([^>]+)>)/ig,"");
// 	quotewords = quote.innerText.split(" "),
// 		wordCount = quotewords.length;
// 	quote.innerHTML = "";
// 	for (var i=0; i < wordCount; i++) {
// 		quote.innerHTML += "<span>"+quotewords[i]+"</span>";
// 		if (i < quotewords.length - 1) {
// 			quote.innerHTML += " ";
// 		}
// 	}
// 	quotewords = document.querySelectorAll("blockquote q span");
// 	fadeWords(quotewords);
// }
//
// function getRandom(min, max) {
// 	return Math.random() * (max - min) + min;
// }
//
// function fadeWords(quotewords) {
// 	Array.prototype.forEach.call(quotewords, function(word) {
// 		var animate = word.animate([{
// 				opacity: 0,
// 				filter: "blur("+getRandom(2,5)+"px)"
// 			}, {
// 				opacity: 1,
// 				filter: "blur(0px)"
// 			}],
// 			{
// 				duration: 1000,
// 				delay: getRandom(500,1300),
// 				fill: 'forwards'
// 			}
// 		)
// 	})
// }
//
//
// splitWords();