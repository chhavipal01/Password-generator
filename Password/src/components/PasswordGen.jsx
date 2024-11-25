import React, { useState } from 'react';
import './PasswordGen.css';

const lowercaseList ='abcdefghijklmnopqrstuvwxyz';
const uppercaseList ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersList = '0123456789';
const symbolsList = '!@#$%^&*()?';


function PasswordGen(){
   const[password, setPassword]= useState('');
   const [lowerCase , setLowerCase]= useState(true);
   const [upperCase , setUpperCase]= useState(true);
   const [numbers , setNumbers]= useState(true);
   const [symbols , setSymbols]= useState(true);
   const[passwordLength,setPasswordLength]=useState(6);

  const generatePassword = ()=>{
    
    let characterList = '';
    if(lowerCase){
      characterList += lowercaseList;
    }
    if(upperCase){
      characterList += uppercaseList;
    
    }
    if(numbers){
      characterList += numbersList;
    }
    if(symbols){
      characterList += symbolsList;
    }
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * characterList.length);
      password += characterList.charAt(characterIndex);
    }
  
    setPassword(password);
  }  

   const copyPassword =async() =>{
    const copiedText = await navigator.clipboard.readtext();
    if(password.length){
        navigator.clipboard.writeText(password);
    }
   }

     
    return <>
    <div className='container'>
        <h1 className='title'> Random Password </h1>
        <div className='password-wrapper'>
            <div className='password- area'>
                <div className='password'>
                    <input className="form-control" type="text" value={password} placeholder="Click on the Generate Password" disabled></input> 
                </div>
            </div>
        </div>
        <div className='setting'>
  <h4>Customize your Password</h4>
  <div className='customize'>
    <div className="checkboxes">
      <div className='left'>
        <div className="checkbox-field">
        <input type="checkbox" name='lower' id='lower'checked={lowerCase} onChange={() =>setLowerCase(!lowerCase)}/>
        <label htmlFor="lower">Include Lower Case(a-z)</label>
        </div>

        <div className="checkbox-field">
        <input type="checkbox" name='upper' id='upper'checked={upperCase} onChange={() =>setUpperCase(!upperCase)}/>
        <label htmlFor="upper">Include Upper Case(A-Z)</label>
        </div>
        
      </div>

      <div className='right'>
        
      <div className="checkbox-field">
        <input type="checkbox" name='numbers' id='numbers'checked={numbers} onChange={() =>setNumbers(!numbers)}/>
        <label htmlFor="Numbers">Include Numbers(0-9)</label>
        </div>
        <div className="checkbox-field">
        <input type="checkbox" name='symbols' id='symbols'checked={symbols} onChange={() =>setSymbols(!symbols)}/>
        <label htmlFor="symbols">Include symbols(&-#)</label>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className='password-length'>
        <h4>Password Length</h4>
        <p className='rangeValue'>{passwordLength}</p>
     <label htmlFor="password-length"className="range"></label>
      <input type="range" className="form-range" id="customRange1" min={6} max={30} defaultValue={passwordLength} onChange={(event)=> setPasswordLength(event.currentTarget.value)}/>
</div>
     <div className='buttons'>
     <button type="button" className="btn btn-warning" onClick={copyPassword}>Copy Password</button>
     <button type="button" className="btn btn-warning" onClick={generatePassword}>Generate Password</button>
     </div>
    </div> 
    </>
}
export default PasswordGen;