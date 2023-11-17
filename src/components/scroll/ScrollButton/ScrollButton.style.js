import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';

export const ScrollButtonWrap = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	right: 0;
	bottom: 100px;
	width: 50px;
	height: 100px;
	background-color: var(--color-coconut);
	border-radius: 10px 0px 0px 10px;
`;

export const ScrollButtons = styled.div`
	display: flex;
	flex-direction: column;

	& button:nth-child(1) {
		margin-bottom: 20px;
	}
`;

export const Button = styled.button`
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;
`;

export const StyledFaArrowUp = styled(FaArrowUp)`
	font-size: 20px;
	color: var(--color-palmoil);
`;

export const StyledFaArrowDown = styled(FaArrowDown)`
	font-size: 20px;
	color: var(--color-palmoil);
`;
