import { getDevice } from './global';
import anime from 'animejs/lib/anime.es';
import { homeSections, mobileSections } from './data/sectionData';

export const animations = () => {
	const t5 = anime.timeline({
		easing: 'easeInOutQuad',
		duration: 750,
		autoplay: true
	});
	t5
		.add({
			delay: '1000',
			duration: '1000',
			targets: '.track-ml',
			translateY: '13em',
			opacity: '1'
		})
		.add(
			{
				delay: '1000',
				targets: '.track-ARVR',
				keyframes: [ { translateY: '25em' } ],
				opacity: '1'
			},
			600
		)
		.add(
			{
				delay: '1000',
				targets: '.track-BC',
				keyframes: [ { translateY: '39em' } ],
				opacity: '1'
			},
			800
		)
		.add(
			{
				delay: '1000',
				targets: '.track-OI',
				keyframes: [ { translateY: '45em' } ],
				opacity: '1'
			},
			1200
		);

	document.querySelector('.tracks').onClick = t5.play();
};

export const getOtherSections = (selector) => {
	const device = getDevice();
	const rest = Array.prototype.filter.call(document.querySelectorAll('#section'), (node) => {
		return !node.classList.contains(selector);
	});
	Array.prototype.push.apply(rest, [
		document.querySelector('.cod-title'),
		document.querySelector('.cod-register'),
		document.querySelector(`.${selector} > h2`),
		document.querySelector('#smj')
	]);
	console.log(selector);
	if (device === 'xs') {
		Array.prototype.push.apply(rest, [ document.querySelector(`.${selector}`) ]);
	}
	return rest;
};

export const goBack = (selector, firstRow) => {
	if (selector.includes('mobile')) {
		const section = mobileSections.filter((s) => s.class === selector)[0];
		section.reverseAnimation('reverse');
	} else {
		if (firstRow) {
			const section = homeSections.firstRow.filter((s) => s.class === selector)[0];
			section.reverseAnimation('reverse');
		} else {
			const section = homeSections.secondRow.filter((s) => s.class === selector)[0];
			section.reverseAnimation('reverse');
		}
	}

	const t6 = anime.timeline({
		easing: 'easeInOutQuad',
		duration: 750,
		autoplay: true
	});

	t6
		.add({
			targets: '.track-ml',
			keyframes: [ { translateY: 0 } ],
			opacity: '0'
		})
		.add(
			{
				targets: '.track-ARVR',
				keyframes: [ { translateY: 0 } ],
				opacity: '0'
			},
			100
		)
		.add(
			{
				targets: '.track-BC',
				keyframes: [ { translateY: 0 } ],
				opacity: '0'
			},
			200
		)
		.add(
			{
				targets: '.track-OI',
				keyframes: [ { translateY: 0 } ],
				opacity: '0'
			},
			300
		);
};

export const showSection = (selector, transforms, direction) => {
	const rest = getOtherSections(selector);
	const target = document.querySelector(`.${selector} > svg`);
	if (selector.includes('mobile-')) selector = selector.replace('mobile-', '');
	const targetSection = document.querySelector(`#${selector}-section`);
	targetSection.style.display = 'block';
	target.style.zIndex = 3;
	target.style.cursor = direction === 'normal' ? 'default' : 'pointer';
	const jet = document.querySelector('#jet-plane > svg');

	const t1 = anime.timeline({
		easing: 'easeInOutExpo',
		duration: 2000,
		autoplay: true
	});

	const t2 = anime.timeline({
		easing: 'easeInOutExpo',
		duration: 1000,
		autoplay: true
	});

	const t3 = anime.timeline({
		easing: 'easeInOutExpo',
		duration: 1500,
		autoplay: true
	});

	const t4 = anime.timeline({
		easing: 'easeInOutExpo',
		duration: 1500,
		autoplay: true
	});

	t1
		.add({
			targets: `.${selector} > svg`,
			scale: transforms.scale,
			rotate: transforms.rotate,
			translateX: transforms.translate.x,
			translateY: transforms.translate.y,
			opacity: transforms.opacity
		})
		.add(
			{
				targets: '#down-arrow',
				opacity: direction === 'normal' ? 0 : 1
			},
			0
		);

	t2
		.add({
			targets: [ `#${selector}-section` ],
			opacity: direction === 'normal' ? 1 : 0
		})
		.add({
			targets: '.revealing-soon',
			translateY: '30vh',
			easing: 'easeOutBounce'
		});

	t3.add({
		targets: rest,
		opacity: direction === 'normal' ? 0 : 1,
		complete: () => {
			if (direction === 'normal') {
				rest.forEach((node) => {
					node.style.pointerEvents = 'none';
				});
			} else {
				targetSection.style.display = 'none';
				rest.forEach((node) => {
					node.style.pointerEvents = 'auto';
				});
			}
		}
	});

	t4.add({
		targets: jet,
		opacity: direction === 'normal' ? 0 : 0.18
	});
};
