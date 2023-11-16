import styled from 'styled-components';
import { useRef, useState } from 'react';
import DeleteModal from './DeleteModal';
import AddressChangeModal from './AddressChangeModal';
import TelChangeModal from './TelChangeModal';
import PasswordChangeModal from './PasswordChangeModal';

const UserWrapper = styled.body`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	flex-direction: column;
`;

const UserBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1380px;
	height: 100vh;
	flex-direction: column;
`;

const AccountDiv = styled.div`
	width: 90%;
	height: 40px;
	border-bottom: 2px solid #434343;
	font-weight: 500;
	font-size: 30px;
	padding-bottom: 50px;
	position: absolute;
	top: 80px;
`;

const UserContent = styled.div`
	padding-top: 30px;
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const UserNamePhotoDiv = styled.div`
	display: flex;
	position: absolute;
	top: 160px;
`;

const UserPhotoDiv = styled.div`
	width: 100px;
	height: 100px;
`;

const UserNameDiv = styled.div`
	font-size: 30px;
	font-weight: 500;
	color: #434343;
	height: 63px;
	width: 200px;
	display: flex;
	align-items: center;
	justify-content: left;
	padding-left: 20px;
`;

const UserItemDiv = styled.div`
	flex-direction: column;
	padding-top: 200px;
`;

const UserLeftItemDiv = styled.div`
	width: 782px;
	height: 48px;
	border-bottom: 1px solid #434343;
	font-size: 20px;
	justify-content: space-between;
	display: flex;
	align-items: center;
	margin-top: 16px;
	padding-right: 8px;
`;

const UserRightItemDiv = styled.div`
	width: 427px;
	height: 48px;
	border-bottom: 1px solid #434343;
	font-size: 20px;
	justify-content: space-between;
	display: flex;
	align-items: center;
	margin-top: 16px;
	padding-right: 8px;
`;

const UserItemTitleDiv = styled.div`
	width: 200px;
	height: 48px;
	display: flex;
	align-items: center;
`;

const UserItemContentDiv = styled.div`
	width: 500px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: left;
`;

const ProductRegisterButton = styled.button`
	width: 427px;
	height: 64px;
	background-color: #5d2510;
	font-size: 20px;
	color: #ede1d2;
	border: 0;
	&:hover {
		cursor: pointer;
	}
`;

const SignOutDiv = styled.div`
	width: 64px;
	padding-top: 100px;
	border-bottom: 1px solid #434343;
	font-size: 18px;
	&:hover {
		cursor: pointer;
	}
`;
const DeleteYourAccountDiv = styled.div`
	padding-top: 20px;
	border-bottom: 1px solid #434343;
	font-size: 18px;
	&:hover {
		cursor: pointer;
	}
`;
const ProfileImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const ProfileImgDiv = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	overflow: hidden;
	border: 2px solid var(--color-main-text);
`;

const ProfileImgLabel = styled.label`
	margin: 5px 0 20px 0;
	font-size: 16px;
	color: var(--color-main-text);
	display: inline-block;
	cursor: pointer;
`;

const ProfileImgInput = styled.input`
	display: none;
`;

const ModalDiv = styled.div`
	&:hover {
		cursor: pointer;
	}
`;
const GenderDiv = styled.div`
	width: 60px;
	height: 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const User = () => {
	const [imgFile, setImgFile] = useState('');
	const imgRef = useRef();

	const saveImgFile = () => {
		const file = imgRef.current.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImgFile(reader.result);
		};
	};

	const [deleteIsOpen, deleteSetIsOpen] = useState(false);
	const [addressIsOpen, addressSetIsOpen] = useState(false);
	const [telIsOpen, telSetIsOpen] = useState(false);
	const [passwordIsOpen, passwordSetIsOpen] = useState(false);

	const passwordOnClickButton = () => {
		passwordSetIsOpen(true);
	};

	const telOnClickButton = () => {
		telSetIsOpen(true);
	};

	const deleteOnClickButton = () => {
		deleteSetIsOpen(true);
	};

	const addressOnClickButton = () => {
		addressSetIsOpen(true);
	};

	const defaultUserImage = '/assets/icons/icon-user.png';
	return (
		<UserWrapper>
			<AccountDiv>ACCOUNT</AccountDiv>
			<UserBox>
				<UserContent>
					<UserItemDiv>
						<UserNamePhotoDiv>
							<UserPhotoDiv>
								<ProfileImgDiv>
									<ProfileImg
										src={
											imgFile
												? imgFile
												: `/images/icon/user.png` || defaultUserImage
										}
										alt=""
									/>
								</ProfileImgDiv>
								<ProfileImgLabel
									className="signup-profileImg-label"
									htmlFor="profileImg">
									Image select
								</ProfileImgLabel>
								<ProfileImgInput
									className="signup-profileImg-input"
									type="file"
									accept="image/*"
									id="profileImg"
									onChange={saveImgFile}
									ref={imgRef}
								/>
							</UserPhotoDiv>
						</UserNamePhotoDiv>
						<UserLeftItemDiv>
							<UserItemTitleDiv>address</UserItemTitleDiv>
							<UserItemContentDiv>
								대한민국 서울특별시 청와대 주소 123-456
							</UserItemContentDiv>
							<ModalDiv onClick={addressOnClickButton}>change</ModalDiv>
							{addressIsOpen && (
								<AddressChangeModal
									open={addressIsOpen}
									onClose={() => {
										addressSetIsOpen(false);
									}}
								/>
							)}
						</UserLeftItemDiv>
						<UserLeftItemDiv>
							<UserItemTitleDiv>e-mail</UserItemTitleDiv>
							<UserItemContentDiv>asdasd@asdasd.com</UserItemContentDiv>
							<ModalDiv>change</ModalDiv>
						</UserLeftItemDiv>
						<UserLeftItemDiv>
							<UserItemTitleDiv>phone number</UserItemTitleDiv>
							<UserItemContentDiv>010-000-00000</UserItemContentDiv>
							<ModalDiv onClick={telOnClickButton}>change</ModalDiv>
							{telIsOpen && (
								<TelChangeModal
									open={telIsOpen}
									onClose={() => {
										telSetIsOpen(false);
									}}
								/>
							)}
						</UserLeftItemDiv>
						<UserLeftItemDiv>
							<UserItemTitleDiv>password</UserItemTitleDiv>
							<div></div>
							<ModalDiv onClick={passwordOnClickButton}>change</ModalDiv>
							{passwordIsOpen && (
								<PasswordChangeModal
									open={passwordIsOpen}
									onClose={() => {
										passwordSetIsOpen(false);
									}}
								/>
							)}
						</UserLeftItemDiv>
					</UserItemDiv>
					<UserItemDiv>
						<UserRightItemDiv>
							<div>name</div>
							<div>조영상</div>
						</UserRightItemDiv>
						<UserRightItemDiv>
							<div>성별</div>
							<GenderDiv>
								<div>남</div>
								<div>여</div>
							</GenderDiv>
						</UserRightItemDiv>
						<UserRightItemDiv>
							<div>ONLY SELLER</div>
						</UserRightItemDiv>
						<ProductRegisterButton>PRODUCT REGISTRATION</ProductRegisterButton>
					</UserItemDiv>
				</UserContent>
				<UserContent>
					<div>
						<SignOutDiv>sign out</SignOutDiv>
						<DeleteYourAccountDiv onClick={deleteOnClickButton}>
							Delete Your account
						</DeleteYourAccountDiv>
						{deleteIsOpen && (
							<DeleteModal
								open={deleteIsOpen}
								onClose={() => {
									deleteSetIsOpen(false);
								}}
							/>
						)}
					</div>
				</UserContent>
			</UserBox>
		</UserWrapper>
	);
};

export default User;
