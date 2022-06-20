9단원 : 컴포넌트 스타일링


    1) 가장 흔한 방식, 일반 css

        1-1) 이름 짓는 규칙 

        1-2) css 선택자 (selector)

            .App

            .App .logo // App 안에 logo에 적용

    
    2) Sass 사용하기 (.scss / .sass )

    : css 전처리기  

    sass - 중괄호와 세미콜론 사용 x
    scss - css와 비슷

        믹스인 만들기 - 재사용되는 스타일 블록을 마치 함수처럼 

            @mixin square(size) {
                $calculated : 32px * $size;
                width : $calculated;
                height : $calculated;
            }

            @include square(1)

        변수 만들기 - 반복사용하는 거 간단하게 대체

            // $red : #fa5252; // 매번 복잡한 코드를 치는 게 아니라 간단한 변수 사용

        cursor 

            => 요소 위에 마우스 커서가 올라갔을때 보여줄 마우스의 모양 

        transition 

            => 속성 변경 딜레이 시간 설정

        & .red {
            // .red 클래스가 부모와 함께 사용시  ex) 부모.red
        }

    2-1) utils 함수 분리

        sass 변수 및 믹스인은 다른 파일로 따로 분리하여 작성한 뒤 필요한 곳에서 쉽게 불러와 사용 // @import './styles/utils'

    2-2) sass-loader 설정 커스터마이징하기

    2-3) node_modules에서 라이브러리 불러오기

    3)css module 

        css 이름 지을때 고유성 걱정 x

        3-1) classnames - css 클래스를 조건부로 설정할떄 유용한 라이브러리 
                                props에 따라 다른 스타일 

                        - classNames.bind(styles) => styles.클래스 이름 안써도 됨

        3-2) Sass와 함께 사용하기

        3-3) css module이 아닌 파일에서 css module 사용하기
        
    4) styled-components

        hover : 사용자가 상호작용중인 요소

        자바스크립트 파일 안에 스타일 선언 

        4-1) tagged 템플릿 리터럴

            `` => tagged 템플릿 리터럴 

            fucntion function1(...args){   ///함수 작성

            }

            function1`hello $(객체) $(함수)` => 객체나 함수 보존

        4-3) 스타일에서 props 조회하기

        4-4) props 에 따른 조건부 스타일링

        4-5) 반응형 디자인

            @media  쿼리 => 화면, 프린터, tv 와 같은 미디어 타입과 적어도 하나 이상의 표현식 (미디어 특성) // 특정 조건에 맞을 때 css 속성 가져옴

            모든 컴포넌트에 media 사용은 불편 => styled-components에서 제공 

                const sizes = {
                    desktop : 1024;
                    tablet : 768;
                }

                => size 객체에 따라 자동으로 media 쿼리 함수 생성

                








            