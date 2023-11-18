import React, { useState } from 'react';
import {
	CloseButton,
	Contents,
	DeleteButton,
	ModalForm,
	ModalInput,
	ModalWrap,
	Overlay,
	Paragraph,
	TitleDiv,
} from './DeleteModal.style';
import { signOutUser } from '../../../api/AuthApi';
import localToken from '../../../api/LocalToken';
import { useNavigate } from 'react-router-dom';

const DeleteModal = (props) => {
	const navigate = useNavigate();
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [textIsTouched, setTextIsTouched] = useState(false);
	const [inputValue, setInputValue] = useState({
		mobile: '',
		email: '',
		password: '',
	});

	const signOutHandler = async (e) => {
		e.preventDefault();
		try {
			const response = await signOutUser(inputValue);

			if (!response) return;

			localToken.remove();

			// navigate('/');
		} catch (error) {
			if (error.response.status === '403') {
				console.error(error.message);
			}
			console.error(error.message);
		}
	};

	const inputValueHandler = (e) => {
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });

		setTextIsTouched(true);

		if (name === 'email') {
			if (e.target.value.trim() === '') {
				setEmailIsValid(false);
			}
			if (e.target.value.length > 0 && /^.+@.+\..+$/.test(e.target.value)) {
				setEmailIsValid(true);
			} else {
				setEmailIsValid(false);
			}
		}

		if (name === 'password') {
			if (e.target.value.trim() === '') {
				setPasswordIsValid(false);
			}

			if (e.target.value.length > 0 && e.target.value.length < 6) {
				setPasswordIsValid(false);
			} else setPasswordIsValid(true);
		}
	};

	const nameEmailInputIsInValid = !emailIsValid && textIsTouched;
	const namePasswordInputIsInValid = !passwordIsValid && textIsTouched;

	const { onClose } = props;

	return (
		<Overlay>
			<ModalWrap>
				<Contents>
					<TitleDiv>
						<h1>Delete Account</h1>
					</TitleDiv>
					<ModalForm onSubmit={signOutHandler}>
						<ModalInput
							type="text"
							placeholder="mobile"
							name="mobile"
							onChange={inputValueHandler}></ModalInput>
						<ModalInput
							type="email"
							placeholder="e-mail"
							name="email"
							onChange={inputValueHandler}></ModalInput>

						<ModalInput
							type="password"
							placeholder="password"
							name="password"
							onChange={inputValueHandler}></ModalInput>

						<DeleteButton type="submit">Delete My Account</DeleteButton>
						<CloseButton
							onClick={() => {
								onClose(false);
							}}>
							Close
						</CloseButton>
					</ModalForm>
				</Contents>
			</ModalWrap>
		</Overlay>
	);
};

export default DeleteModal;
