import { ChangeEvent, useState } from "react";



const App = () => {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div>
      <div>
        Nome:
        <input type="text" onChange={(e)=>setName(e.target.value)} />
      </div>

      <div>
        Sobrenome:
        <input type="text" onChange={(e)=>setLastname(e.target.value)}  />
      </div>

      <div>
        Idade:
        <input type="number" onChange={(e:ChangeEvent<HTMLInputElement>)=>setAge(parseInt(e.target.value))}  />
      </div>

      <hr/>

      Olá {name} {lastname}, tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;