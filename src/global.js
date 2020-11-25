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

export const disableScroll = () => {
	window.scrollTo(0, 0);
	window.onscroll = () => {
		window.scrollTo(0, 0);
	};
};

export const enableScroll = () => {
	window.onscroll = () => {};
};
