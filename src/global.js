export const disableScroll = () => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	window.onscroll = function() {
		window.scrollTo(scrollLeft, scrollTop);
	};
};

export const getDevice = () => {
	let device = '';
	const w = window.innerWidth;
	if (w < 576) device = 'xs';
	else if (w < 768) device = 'sm';
	else if (w < 992) device = 'md';
	else if (w < 1024) device = 'lg';
	else device = 'xl';

	return device;
};

export const enableScroll = () => {
	let lastScrollTop = 0;
	window.onscroll = () => {
		let st = window.pageYOffset || document.documentElement.scrollTop;
		const totalScroll = document.documentElement.scrollTop;
		const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const scroll = `${totalScroll / windowHeight}`;
		if (st > lastScrollTop) {
			document.querySelectorAll('#section').forEach((section) => {
				section.style.pointerEvents = 'none';
			});
			document.getElementById('main-div').style.opacity = 1 - scroll;
			if (scroll > 0.9) {
				document.querySelector('#smj').style.zIndex = Infinity;
			}
		} else {
			document.getElementById('main-div').style.opacity = 1 - scroll;
			if (scroll <= 0.8) {
				document.querySelectorAll('#section').forEach((section) => {
					section.style.pointerEvents = 'auto';
				});
			}
		}
		lastScrollTop = st <= 0 ? 0 : st;
	};
};
