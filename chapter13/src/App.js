import About from './pages/About';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profiles';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';
import Login from './pages/Login';
import MyPage from './pages/MyPage';




function App()  {
  return(
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element= {<About/>} />
        <Route path="/profiles/:username" element={<Profile/>} />   {/*추측이지만 /:username이 useParams 에 의해 생성된 객체의 속성지정인듯 */}   
      </Route> 
      <Route path="/articles" element={<Articles/>}> 
        <Route path=":id" element={<Article/>} />
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path='/mypage' element={<MyPage/>}/>
      {/* <Route path="/articles/:id" element={<Article/>} /> */}
    </Routes>
  )
}
  

export default App;
