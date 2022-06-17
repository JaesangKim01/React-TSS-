13단원 요약

    1) 라우팅이란 
        URL에 맞게 페이지 설정 
        route 설정  ex) google/email/  ... / 
        
        => route 마다 여러 페이지가 필요

        페이지 별 컴포넌트 분리 -> 라우팅 시스템

            리액트 라우터 (라이브러리)

            next.js (프레임워크)


    2) 싱글 페이지 애플리케이션?
        멀티 페이지 애플리케익션 - 각 페이지마다 다른 html 파일을 서버에서 제공(비효율)


        : 뷰렌더링은 브라우저가 담당 / 웹 애플리케이션 불러와서 실행 / 인터렉션 발생시 업데이트  |  "한번만" html 받아옴 

            리액트 라우터의 경우 : 다른 페이지 이동시 history api 를 사용하여 주소값만 변경 / 기존의 웹 애플리케이션유지 / 설정에 맞게 다른 페이지 보여줌

    
    3) 리액트 라우터 적용 및 기본 사용법
        ReactDOM.render 에서 메인 컴포넌트 <App.js>를 <BrowserRouter>로 감싸기 

            ReactDOM.render(
                <BrowserRouter>
                    <App/>
                <BrowserRouter/>,
                document.getElementById('root')
            )
        
        Route 컴포넌트로 특정 경로에 원하는 컴포넌트 보여주기

            return(
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" elemnt= {<About/>} />
                </Routes>
            ) 

        Link 컴포넌트로 다른페이지 이동 방법 제공

            <Link to="/about">소개</Link>


    4) URL 파라미터 / 쿼리스트링 (method와 연관)
        파라미터 : /profile/veloport    |   쿼리스트링 : /articles?page=1 ...

            4-1) 파라미터 이용 : useParams (Hook) 사용을 통한 파라미터를 객체로 
                 ex) <Route path="/profiles/:username" element={<Profile/>}></Route> 
                    /:username 을 쓰면 객체의 속성으로 접근 가능 
                
            4-2) 쿼리스트링 : useLocation(Hook) 사용 => location 객체 반환 / location은 사용자가 현재 보는 페이지 정보
                location 객체에 있는 값
                    pathname : 현재주소 경로 (쿼리스트링 제외)
                    search : 맨앞의 ?문자를 포함한 쿼리스트링 값
                    state : 페이지로 이동할때 사용하는 값
                    key : location객체의 고유값 
                
                -> 쿼리스틀링 = location.search

                쿼리스트링 파싱 : useSearchParams - 배열타입 반환 , 첫번째 원소 - 쿼리를 조회 및 수정 가능한 메서드가 담긴 객체 반환  // 두번째 원소 - 쿼리파라미터를 객체로 업데이트 하는 함수 


    5)중첩된 라우트
        중첩을 통해서 코드 간략화 

        --- App.js ---
            <Route path="/articles" element={<Articles/>}> 
                <Route path=":id" element={<Article/>} />
            </Route>

        --- Article.js ---
            <Outlet />    => 개별 id 까지로 파라미터 변경시 해당 내용이 나타날 컨포넌트 
            <ul>
                <li>
                    <Link to="/articles/1">게시글 1</Link>
                </li>
                <li>
                    <Link to="/articles/2">게시글 2</Link>
                </li>
                <li>
                    <Link to="/articles/3">게시글 3</Link>
                </li>
            </ul>


        공통 레이아웃 
            <Route element={<Layout/>} >  ----------------------> path가 없는 걸로 보아 무조건 나타나는 공통 레이아웃 컨포넌트
                <Route path="/" element={<Home />} />
                <Route path="/about" element= {<About/>} />
                <Route path="/profiles/:username" element={<Profile/>}></Route>    {/*추측이지만 /:username이 useParams 에 의해 생성된 객체의 속성지정인듯 */}    
                <Route path="/articles" element={<Articles/>}> 
                    <Route path=":id" element={<Article/>} />
                </Route>


        Route의 index props  ->  path="/" 와 동일
            단, 오로직 최상위 디렉토리만 지정한다는 점... 

        
    6) 부가 기능
        6-1) useNavigate => link 컴포넌트 없이 다른 페이지로 이동하는 함수 제공

            const navigate = useNavigate()

            navigate(-1) 이전 페이지 이동  // navigate(1) 앞의 페이지로 이동
            navigate("/articles") articles 경로 이동

            replace 옵션 : 이동시 현재 페이지 기록 x  //  A -> B(현재 페이지) -> C  =>  A -> C (B는 기록 안남음) , C에서 뒤로가면 A가 나옴 

        6-2) NavLink : 링크에서 사용되는 경로가 라우트 경로와 일칠하면 특성 스타일 적용 

        
        6-3)NotFound 페이지 
         와일드카드 * 사용 ==>  switch 와 동일 

            <Route path="*" element={<NotFound/>}> /> => 이 코드 위의 루트를 다 확인하고 마지막에 남으면 해당 페이지 접속

        6-4) Navigate 컴포넌트

            redirect 하기 

            login 에서 많이 사용되는  







        
          