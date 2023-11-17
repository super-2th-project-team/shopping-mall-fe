import styled from 'styled-components';

export const LoginWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	flex-direction: column;
`;

export const LoginDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const LoginTitleDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 427px;
	height: 40px;
	font-size: 30px;
	font-weight: 500;
	margin-bottom: 16px;
	color: #434343;
	line-height: 39.69px;
`;

export const LoginInput = styled.input`
	width: 427px;
	height: 40px;
	margin-bottom: 16px;
	border: 1px solid #434343;
	padding-left: 16px;
	font-size: 16px;

	::placeholder {
		color: #6a6a6a;
	}
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding-bottom: 40px;
`;

export const LoginButton = styled.button`
	background-color: #5d2510;
	color: #ede1d2;
	border: 1px solid #5d2510;
	padding: 8px, 52px, 8px, 52px;
	width: 427px;
	height: 42px;
	font-size: 20px;
	font-weight: 400;

	&:hover {
		cursor: pointer;
	}
`;

export const AccountDiv = styled.div`
	width: 80%;
	height: 40px;
	border-bottom: 2px solid #434343;
	font-weight: 500;
	font-size: 30px;
	padding-bottom: 50px;
	position: absolute;
	top: 80px;
`;

export const SignUpDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 20px;
	width: 427px;
	height: 50px;
	border-top: 1px solid #434343;
`;

export const SignUpButton = styled.button`
	width: 147px;
	height: 37px;
	font-size: 16px;
	color: #5d2510;
	border: 1px solid #5d2510;
	background-color: white;
	&:hover {
		cursor: pointer;
	}
`;

export const Paragraph = styled.p`
	width: 90%;
	text-align: left;
	font-size: 12px;
`;
