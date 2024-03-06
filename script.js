  //Slider projet
	$(document).ready(function(){
		$('.slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			arrows: true,
			dots: true
		});
	});

	//Download cv
	$(document).ready(function () {
		// Function to handle download event
		function handleDownload() {
			// Show download animation
			$(".download-animation").show();
			// Simulate a delay (you can adjust this based on your needs)
			setTimeout(function () {
				// Hide the download animation
				$(".download-animation").hide();
				// Show the "Download Complete" message
				$(".download-complete-message").fadeIn();
				// Hide the message after a few seconds (you can adjust this based on your needs)
				setTimeout(function () {
					$(".download-complete-message").fadeOut();
				}, 3000); // 3000 milliseconds (3 seconds) in this example
			}, 2000); // 2000 milliseconds (2 seconds) in this example
		}
		// Attach the handleDownload function to the click event of your download link
		$("#download-link").on("click", function () {
			handleDownload();
		});
	});
	// Function to scroll back to the top
	function backToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	// Show/hide the button based on scroll position
	window.onscroll = function() {
		var btn = document.getElementById("backToTopBtn");
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			btn.style.display = "block";
		} else {
			btn.style.display = "none";
		}
	};
	document.getElementById('contactForm').addEventListener('submit', function(event) {
		event.preventDefault(); // Empêche la soumission par défaut du formulaire

		// Vérifie les champs du formulaire
		let name = document.getElementById('name').value.trim();
		let email = document.getElementById('email').value.trim();
		let message = document.getElementById('message').value.trim();

		if (name === '' || email === '' || message === '') {
			alert('Veuillez remplir tous les champs.');
		} else {
			// Envoie le formulaire
			// Ici, tu peux envoyer les données du formulaire via AJAX ou tout autre méthode de ton choix

			// Affiche le message de confirmation
			document.getElementById('confirmation').style.display = 'block';
			// Efface les champs du formulaire
			document.getElementById('name').value = '';
			document.getElementById('email').value = '';
			document.getElementById('message').value = '';
		}
	});
 // creation des ball
	document.addEventListener('DOMContentLoaded', function() {
		const container = document.getElementById('cont2');
		let ballCount = 1;
   //dooner une couleur random
		function getRandomColor() {
			const letters = '0123456789ABCDEF';
			let color = '#';
			for (let i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		}

		//creer une ball
		function createBall(x, y, color) {
			const ball = document.createElement('div');
			ball.classList.add('ball');
			ball.style.backgroundColor = color;
			ball.style.left = `${x}px`;
			ball.style.top = `${y}px`;
			ball.style.cursor = 'pointer';
			ball.addEventListener('click', splitBall);
			container.appendChild(ball);
			moveBall(ball);
		}

		//fait bouger la ball
		function moveBall(ball) {
			const maxX = window.innerWidth - ball.offsetWidth;
			const maxY = document.getElementById('cont2').offsetHeight;
			let dx = (Math.random() - 0.5) * 10; // Random horizontal speed
			let dy = (Math.random() - 0.5) * 10; // Random vertical speed

			function updatePosition() {
				let x = parseFloat(ball.style.left) + dx;
				let y = parseFloat(ball.style.top) + dy;

				if (x < 0 || x > maxX) {
					dx = -dx;
					x = Math.min(Math.max(x, 0), maxX);
				}

				if (y < 0 || y > maxY) {
					dy = -dy;
					y = Math.min(Math.max(y, 0), maxY);
				}

				ball.style.left = `${x}px`;
				ball.style.top = `${y}px`;
			}

			setInterval(updatePosition, 10); // Update position every 50 milliseconds
		}

		//coupe la ball
		function splitBall(event) {
			const ball = event.target;
			if (ballCount < 50) {
				const rect = ball.getBoundingClientRect();
				const x = rect.left + rect.width / 2;
				const y = rect.top + rect.height / 2;
				createBall(x, y, getRandomColor());
				createBall(x, y, getRandomColor());
				ball.remove();
				ballCount++;
			}
		}

		createBall(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 'red');
	});

	//animate list profil
$(document).ready(function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        var listTop = $('.animated-list').offset().top;

        if (windowBottom > listTop) {
            $('.animated-list li').each(function(i) {
                var listItem = $(this);
                setTimeout(function() {
                    listItem.addClass('active');
                }, i * 100);
            });
        }
    });
});