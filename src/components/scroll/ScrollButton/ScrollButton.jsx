import {
	ScrollButtonWrap,
	Button,
	ScrollButtons,
	StyledFaArrowUp,
	StyledFaArrowDown,
} from './ScrollButton.style';

const ScrollButton = () => {
	const scrollToHandler = (direction) => {
		window.scrollTo({
			top: direction === 'up' ? 0 : document.documentElement.scrollHeight,
			behavior: 'smooth',
		});
	};

	return (
		<ScrollButtonWrap>
			<ScrollButtons>
				<Button onClick={() => scrollToHandler('up')}>
					<StyledFaArrowUp />
				</Button>
				<Button onClick={() => scrollToHandler('down')}>
					<StyledFaArrowDown />
				</Button>
			</ScrollButtons>
		</ScrollButtonWrap>
	);
};

export default ScrollButton;
