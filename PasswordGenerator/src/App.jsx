import { useCallback, useEffect, useRef, useState } from 'react'
import './index.css'

function App() {
 const[length , setLength] = useState(8);
 const[numberAllowed , setNumberAllowed] = useState(false);
 const[charAllowed , setCharAllowed] = useState(false);
 const[password , setPassword] = useState("");

 const passwordRef = useRef(null);

 const passwordGenerator = useCallback(()=>{
  let myPass = "";
  let str = "ABCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberAllowed){
    str+="0123456789";
  }
  if(charAllowed){
    str+="$#@!%^&*(){}?";
  }
  for(let i=1;i<=length;i++){
    let char = Math.floor(Math.random() * str.length + 1);
    myPass+=str.charAt(char);
  }
  setPassword(myPass);

 }, [length,numberAllowed,charAllowed,setPassword]
)

useEffect(()=> {
  passwordGenerator()
} , [length,numberAllowed,charAllowed,passwordGenerator])

const Copy = useCallback(()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
}, [password])

  return (
    <div className='text-center'>
      <h1 className='text-2xl text-white font-bold m-5'>Password Generator</h1>
      <div className='flex justify-center'>
        <input type="text" value={password} readOnly className='px-24 py-2' ref={passwordRef}/>
        <button className='bg-orange-600 px-6 font-bold text-white hover:bg-orange-400' onClick={Copy}>Copy</button>
      </div>
      <div className='text-white'>
        <input type="range" value={length} min={6} max={20} onChange={(e)=>{setLength(e.target.value)}} />
        <label>Length: {length}</label> <br />

        <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{
          setNumberAllowed((prev)=> !prev);
        }}/><label>Numbers</label>

        <input type="checkbox" defaultChecked={charAllowed} className='ml-2' onChange={()=>{
          setCharAllowed((prev)=> !prev);
        }}/><label>Special Characters</label>
      </div>
    </div>
  )
}

export default App
