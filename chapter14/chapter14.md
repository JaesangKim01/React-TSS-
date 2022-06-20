14 . 외부 API를 연동하여 뉴스 뷰어 만들기

    1) 비동기 작업 
        클라이언트에서 요청하면 서버에서 바로바로 안줌 => 기다림 => 다음 작업을 못하고 계속 기다림
        ex) 서버 API 호출 / 특정 작업 예약 (setTimeout)

        1-1) 콜백 함수 - 파라미터에 함수가 들어가는 꼴?

            콜백함수는 자바스크립트 상에서 객체 
            콜백 함수 안에 콜백함수  -->  '콜백 지옥'
             
        1-2) Promise = 콜백 지옥 방지

            new Promise((resolve, reject) => {
                ///

                resolve(결과 값)
            })

            함수 실행
                .then {함수 실행
                }
                .then {함수 실행
                }
                .catch(e => {
                    //도중 에러 확인 
                })


        1-3) async/await => Promise 더욱 쉽게 사용   // then을 안 사용 
            
            async function runTasks() {
                try {
                    let result = await increase(0)
                    console.log(result)
                    result = await increase(result)
                    console.log(result)
                }                
            }

            

    2)axios로 API 호출하여 데이터 받아오기  
        HTTP 요청을 Promise 기반으로 처리 


    
    3) newsapi API 키 발급받기 

    4) 뉴스 뷰어 UI 만들기 

    7) 리액트 라우터 적용 
        



        



    

