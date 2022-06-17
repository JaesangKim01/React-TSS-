import { useParams } from "react-router-dom"



const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자'
    },
    
    gildong : {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    }
}

const Profile = () => {
    const params = useParams()  // hook을 통하여 파라미터를 객체(params)로 받아서 변수에 저장
    const profile = data[params.username]  //data에 값이 있으면 profile은 해당 값이 배정 , 없다면 나중에 삼항연산자에서 false 

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (       
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다</p>
            )}
        </div>
    )
}

export default Profile