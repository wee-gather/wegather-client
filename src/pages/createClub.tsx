import styled from 'styled-components';
import { clubCreationInfo } from '@/types/clubCreationInfo';
import { useState } from 'react';
const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const HeaderMenuConatainer = styled.div`
	width: 66.875rem;
	display: flex;
	flex-direction: row;
	position: fixed;
`;
const HeaderButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
const EssentialInfoConatainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: #fff;
	color: #000;
	border-radius: 10px;
`;
const AditionalInfoConatainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const ClubRowWrapper = styled.div`
	width: 58.625rem;
	display: flex;
	margin: 1rem 0;
	flex-direction: row;
	align-items: start;
	background-color: #fff;
	/* justify-content: space-between; */
`;
const InfoText = styled.span`
	width: 8rem;
	color: #585858;
	flex-shrink: 0;
	font-size: 0.875rem;
	font-weight: 800;
	padding-left: 1rem;
	margin-top: 0.45rem;
`;
const ClubNameInput = styled.input`
	width: 50.625rem;
	height: 1.875rem;
	border-radius: 5px;
	border: 1px solid #c9c9c9;
	background: #fff;
	color: #000;
`;
const ClubTypeContainer = styled.div`
	height: 5.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
`;
const ClubTypeWrapper = styled.div`
	width: 50.625rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
const ClubTypeRadio = styled.input.attrs(() => ({
	type: 'radio',
}))`
	color: #fff;
	&:checked {
		background-color: #36bf7f;
		border: 2px solid yellowgreen;
	}
`;
const ClubTypeRadioSpan = styled.span`
	color: #585858;
	font-size: 0.875rem;
	font-weight: 400;
	letter-spacing: 0.0625rem;
	margin: 0 1.2rem 0 0.4rem;
`;
const SchoolSelectWrapper = styled.div`
	display: flex;
	height: 5.5rem;
	flex-direction: row;
	align-items: center;
`;
const SchoolSelectInput = styled.input`
	width: 15.625rem;
	height: 1.875rem;
	border-radius: 5px;
	border: 1px solid #c9c9c9;
	background: #fff;
`;
const CreateForm = styled.form`
	width: 66.875rem;
	padding-top: 100px;
`;
const LogoColWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const LogoRowWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;
const LogoInput = styled.label`
	width: 22.25rem;
	height: 1.875rem;
	border-radius: 5px;
	border: 1px solid #c9c9c9;
	background: #eee;
	display: flex;
	align-items: center;
	margin-right: 0.5rem;
`;
const LogoButton = styled.label`
	width: 6.0625rem;
	height: 1.875rem;
	border-radius: 5px;
	border: 1px solid #585858;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ClubIntroductionInput = styled.textarea`
	width: 50.625rem;
	min-height: 4.6875rem;
	border-radius: 5px;
	border: 1px solid #c9c9c9;
	background: #fff;
	color: #000;
	resize: none;
`;
const ClubExplanationInput = styled.textarea`
	width: 50.625rem;
	min-height: 18rem;
	border-radius: 5px;
	border: 1px solid #c9c9c9;
	background: #FFF;
	color: #000;
	resize: none;

`;

export default function CreateClub() {
	const [clubCreationInfo, setClubCreationInfo] = useState<clubCreationInfo>({
		name: '',
		type: '',
		schoolId: 0,
		logo: '',
		introduction: '',
		explanation: '',
		catagory: '',
		tag: '',
		poster: '',
	});

	return (
		<>
			<MainContainer>
				<HeaderMenuConatainer>
					<p>동아리 생성</p>
					<HeaderButtonContainer>
						<button>test1</button>
						<button>test1</button>
						<button>test1</button>
						<button>test1</button>
					</HeaderButtonContainer>
				</HeaderMenuConatainer>
				<CreateForm>
					<EssentialInfoConatainer>
						<ClubRowWrapper>
							<InfoText>동아리 명</InfoText>
							<ClubNameInput
								type="text"
								value={clubCreationInfo.name}
								placeholder="동아리 명"
								onChange={(e: any) =>
									setClubCreationInfo({
										...clubCreationInfo,
										name: e.target.value,
									})
								}
								required
							/>
						</ClubRowWrapper>
						<ClubRowWrapper>
							<ClubTypeContainer>
								<InfoText>타입</InfoText>
								<ClubTypeWrapper>
									<div>
										<ClubTypeRadio
											id="general"
											value="general"
											name="type"
											onChange={(e: any) =>
												setClubCreationInfo({
													...clubCreationInfo,
													type: e.target.value,
												})
											}
											checked
										/>
										<ClubTypeRadioSpan>일반동아리</ClubTypeRadioSpan>
										<ClubTypeRadio
											id="union"
											value="union"
											name="type"
											onChange={(e: any) =>
												setClubCreationInfo({
													...clubCreationInfo,
													type: e.target.value,
												})
											}
										/>
										<ClubTypeRadioSpan>연합동아리</ClubTypeRadioSpan>
									</div>
									<SchoolSelectWrapper>
										<InfoText>학교명</InfoText>
										<SchoolSelectInput />
									</SchoolSelectWrapper>
								</ClubTypeWrapper>
							</ClubTypeContainer>
						</ClubRowWrapper>
						<ClubRowWrapper>
							<InfoText>로고</InfoText>
							<LogoRowWrapper>
								<LogoInput>파일을 업로드하세요 (JPG, JPEG, PNG)</LogoInput>
								<LogoButton htmlFor="input-file">찾아보기</LogoButton>
								<input
									type="file"
									id="input-file"
									style={{ display: 'none' }}
									onChange={(e: any) =>
										setClubCreationInfo({
											...clubCreationInfo,
											logo: e.target.value,
										})
									}
								/>
							</LogoRowWrapper>
						</ClubRowWrapper>
						<ClubRowWrapper>
							<InfoText></InfoText>
							이미지
						</ClubRowWrapper>
						<ClubRowWrapper>
							<InfoText>간단소개</InfoText>
							<ClubIntroductionInput
								value={clubCreationInfo.introduction}
								onChange={(e: any) =>
									setClubCreationInfo({
										...clubCreationInfo,
										introduction: e.target.value,
									})
								}
								required
							/>
						</ClubRowWrapper>
						<ClubRowWrapper>
							<InfoText>상세설명</InfoText>
							<ClubExplanationInput
								value={clubCreationInfo.explanation}
								onChange={(e: any) =>
									setClubCreationInfo({
										...clubCreationInfo,
										explanation: e.target.value,
									})
								}
								required
							/>
						</ClubRowWrapper>
					</EssentialInfoConatainer>
					<AditionalInfoConatainer>추가정보</AditionalInfoConatainer>
				</CreateForm>
			</MainContainer>
		</>
	);
}
