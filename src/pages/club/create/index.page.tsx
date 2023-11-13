import { useState } from 'react';
import React from 'react';

import GreenBorderButton from '@/components/button/GreanMediumButton';
import CategoryList from '@/components/Category/CategoryList';
import ImagePreview from '@/components/ImagePreview';
import TagList from '@/components/tag/TagList';
import TextEditor from '@/components/TextEditor';
import { ClubCategory, ClubCreationInfo } from '@/types/clubCreationInfo';

import {
  ClubExplanationInput,
  ClubIntroductionInput,
  ClubNameInput,
  ClubRowWrapper,
  ClubTypeContainer,
  ClubTypeRadio,
  ClubTypeRadioSpan,
  ClubTypeWrapper,
  CountText,
  CreateForm,
  HeaderButtonContainer,
  HeaderMenuConatainer,
  InfoConatainer,
  InfoText,
  InfoType,
  MainContainer,
  SchoolSelectInput,
  SchoolSelectWrapper,
  TagAddInput,
  TagContainer,
  TagRowWrapper,
  TextCountInputWrapper,
  TextCountWrapper
} from './style';

// import { axios } from '@/config/axiosConfig';

export default function CreateClub() {
  const [clubCreationInfo, setClubCreationInfo] = useState<ClubCreationInfo>({
    name: '',
    type: '',
    schoolId: 0,
    logo: undefined,
    introduction: '',
    explanation: '',
    // category: '',
    tag: [],
    poster: undefined,
  });
  const [tag, setTag] = useState<string>('');

  const [isComposing, setIsComposing] = useState(false);

  const clubCategoryList: ClubCategory[] = [
    {
      id: '1',
      name: '테스트1',
      sub: [
        {
          id: '11',
          name: '테스트11',
          sub: [
            {
              id: '111',
              name: '테스트111',
              sub: [],
            },
          ],
        },
        {
          id: '12',
          name: '테스트12',
          sub: [
            {
              id: '121',
              name: '테스트121',
              sub: [],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: '테스트2',
      sub: [
        { id: '21', name: '테스트21', sub: [] },
        { id: '22', name: '테스트22', sub: [] },
      ],
    },
  ];
  // const handler = () => {
  // 	setClubCreationInfo({
  // 		name: 'test',
  // 		type: 'union',
  // 		schoolId: 1,
  // 		logo: '',
  // 		introduction: 'adf',
  // 		explanation: 'dddd',
  // 		// category: '',
  // 		// tag: '',
  // 		poster: '',
  // 	});
  // 	axios
  // 		.post('/club', clubCreationInfo)
  // 		.then((res: any) => {
  // 			console.log(res);
  // 		})
  // 		.catch((err: any) => {
  // 			console.log(err);
  // 		});
  // };

  return (
    <>
      <MainContainer>
        <HeaderMenuConatainer>
          <span>동아리 생성</span>
          <HeaderButtonContainer>
            <GreenBorderButton
              text='미리보기'
              onClick={() => {
                console.log(clubCreationInfo);
              }}
            />
            <GreenBorderButton
              text='불러오기'
              onClick={() => {
                console.log(clubCreationInfo);
              }}
            />
            <GreenBorderButton
              text='임시저장'
              onClick={() => {
                console.log(clubCreationInfo);
              }}
            />
            <GreenBorderButton
              background='#1CA526'
              text='생성하기'
              textcolor='#FFF'
              onClick={() => {
                console.log(clubCreationInfo);
              }}
            />
          </HeaderButtonContainer>
        </HeaderMenuConatainer>
        <CreateForm>
          <InfoType required>필수정보</InfoType>
          <InfoConatainer>
            <ClubRowWrapper>
              <InfoText required>① 동아리명</InfoText>
              <ClubNameInput
                type='text'
                value={clubCreationInfo.name}
                placeholder='최대 20자'
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
                <InfoText required>② 타입</InfoText>
                <ClubTypeWrapper>
                  <div>
                    <ClubTypeRadio
                      id='general'
                      value='general'
                      name='type'
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
                      id='union'
                      value='union'
                      name='type'
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
                    <InfoText required>③ 학교명</InfoText>
                    <SchoolSelectInput />
                  </SchoolSelectWrapper>
                </ClubTypeWrapper>
              </ClubTypeContainer>
            </ClubRowWrapper>
            <ClubRowWrapper>
              <InfoText required>④ 로고</InfoText>
              <ImagePreview
                inputId='logo'
                setFile={(file: File) =>
                  setClubCreationInfo({
                    ...clubCreationInfo,
                    logo: file,
                  })
                }
              />
            </ClubRowWrapper>
            <ClubRowWrapper>
              <TextCountWrapper>
                <TextCountInputWrapper>
                  <InfoText required>⑤ 간단소개</InfoText>
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
                </TextCountInputWrapper>
                <CountText>
                  <span>{clubCreationInfo.introduction.length}</span>/120자
                </CountText>
              </TextCountWrapper>
            </ClubRowWrapper>
            <ClubRowWrapper>
              <TextCountWrapper>
                <TextCountInputWrapper>
                  <InfoText required>⑥ 상세설명</InfoText>
                  <ClubExplanationInput>
                    <TextEditor
                      value={clubCreationInfo.explanation}
                      onChange={(value: string) =>
                        setClubCreationInfo({
                          ...clubCreationInfo,
                          explanation: value,
                        })
                      }
                      minHeight='16rem'
                      borderRadius='5px'
                      placeholder={'상세설명'}
                    />
                  </ClubExplanationInput>
                </TextCountInputWrapper>
                <CountText>
                  <span>{clubCreationInfo.explanation.length}</span>/2000자
                </CountText>
              </TextCountWrapper>
            </ClubRowWrapper>
          </InfoConatainer>
          <InfoType>선택정보</InfoType>
          <InfoConatainer>
            <ClubRowWrapper>
              <InfoText>⑦ 카테고리</InfoText>
              <CategoryList
                clubCategoryList={clubCategoryList}
                // setClubCreationInfo로 다시 가져와야함.
              />
            </ClubRowWrapper>
            <ClubRowWrapper>
              <InfoText>⑧ 태그</InfoText>
              <TagContainer>
                <TagRowWrapper>
                  <TagAddInput
                    value={tag}
                    onChange={(e: any) => setTag(e.target.value)}
                    onCompositionStart={() => setIsComposing(true)}
                    onCompositionEnd={() => setIsComposing(false)}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (isComposing) return;
                      if (e.key !== 'Enter') return;
                      e.preventDefault();
                      if (tag.trim() !== '') {
                        setClubCreationInfo(prevInfo => ({
                          ...prevInfo,
                          tag: [...prevInfo.tag, tag],
                        }));
                        setTag('');
                      }
                    }}
                  />
                </TagRowWrapper>
                <TagList
                  tagList={clubCreationInfo.tag}
                  deleteFunc={(index: number) => {
                    const updatedTags = [...clubCreationInfo.tag];
                    updatedTags.splice(index, 1);

                    setClubCreationInfo(prevInfo => ({
                      ...prevInfo,
                      tag: updatedTags,
                    }));
                  }}
                  width={'33.375rem'}
                  height={'6.5rem'}
                />
              </TagContainer>
            </ClubRowWrapper>
            <ClubRowWrapper>
              <InfoText>⑨ 포스터</InfoText>
              <ImagePreview
                inputId='poster'
                setFile={(file: File) =>
                  setClubCreationInfo({
                    ...clubCreationInfo,
                    poster: file,
                  })
                }
                height={200}
                width={200}
              />
            </ClubRowWrapper>
          </InfoConatainer>
        </CreateForm>
      </MainContainer>
    </>
  );
}