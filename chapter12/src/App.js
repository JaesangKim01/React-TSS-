import produce from "immer";
import { useCallback, useRef, useState } from "react";


const App = () => {
  const nextId = useRef(1)
  const [form, setForm] = useState({name: '', username: ''})
  const [data, setData] = useState({
    array: [],
    uselessvalue: null
  })

  const onChange = useCallback(
    e=> {
      const {name,value} = e.target
      // if(name === "username" ){
      //   console.log(1)
      // }
      // else if(name ==="name"){
      //   console.log(2)
      // }
      setForm(
        produce(form, draft => {
          draft[name] = value 
        })
      )
    },
    [form]
  )
    //같은 onchange 함수인데 왜 이름만 변경되고 왜 아이디는 변경이 안되는 것인가?
    //name을  username이 아니라 usename으로 착각



  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      const info = {
        id : nextId.current,
        name : form.name,
        username: form.username 
      }

      setData(
        produce(data, draft => {
          draft.array.push(info)
        })
      )

      setForm({
        name: '',
        username: ''
      })
      nextId.current += 1
    },
    [data, form.name, form.username]
  )

  const onRemove = useCallback(
    id => {
      setData(
        produce(data, draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1)
        })
      )
    },
    [data]
  )

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
      <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info=> (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default App;