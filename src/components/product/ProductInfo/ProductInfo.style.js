import styled from 'styled-components';

export const InfoArticle = styled.article`
	width: 50%;
	margin-left: 10px;
	padding: 40px;
`;

export const Title = styled.h1`
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 50px;
`;

export const PriceWrap = styled.div`
	margin-bottom: 10px;
`;

export const BasePrice = styled.span`
	text-decoration: line-through;
`;

export const SalePrice = styled.span`
	font-size: 20px;
	font-weight: bold;
	margin-right: 12px;
`;

export const SalePercent = styled.span`
	font-size: 18px;
	font-weight: bold;
`;

export const SaledPrice = styled.div`
	color: var(--color-palmoil);
	margin-bottom: 60px;
`;

export const SelectWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;

	& div:nth-child(2) {
		width: 70%;
		padding-right: 30px;
	}

	& select {
		width: 100%;
		height: 40px;
		border: 0.5px solid #dfdfdf;
		border-radius: 5px;
	}
`;

export const AddedItemWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--color-coconut);
	border-radius: 5px;
	height: 60px;
	margin-bottom: 10px;

	& div:nth-child(1) {
		padding-left: 10px;
	}
`;

export const Divider = styled.div`
	background-color: #dfdfdf;
	height: 1px;
	width: 100%;
	margin: 24px 0px;
`;

export const CountAndPriceWrap = styled.div`
	display: flex;
	align-items: center;

	& div:nth-child(1) {
		margin-right: 40px;
		& span {
			margin: 0 10px;
		}
	}

	& div:nth-child(2) {
		margin-right: 10px;

		& span {
			font-weight: bold;
			margin-right: 4px;
		}
	}
`;

export const Button = styled.button`
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;
`;

export const CountButton = styled.button`
	width: 24px;
	height: 24px;
	border: 0.5px solid #dfdfdf;
	border-radius: 50%;
	cursor: pointer;
`;

export const TotalPriceWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& div {
		display: flex;
		align-items: center;

		& span:nth-child(1) {
			font-size: 20px;
			font-weight: bold;
			margin-right: 10px;
		}
	}
`;

export const ButtonWrap = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const CartButton = styled(Button)`
	width: 50%;
	height: 60px;
	background-color: var(--color-coconut);
`;

export const PayButton = styled(Button)`
	width: 50%;
	height: 60px;
	color: var(--color-coconut);
	background-color: var(--color-palmoil);
`;
