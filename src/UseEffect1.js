import React,{useState, useEffect} from 'react'

const UseEffect1 = () => {
    let [count, setCount] = useState(0)
    let [name, setName] = useState('Shubham')

    useEffect(()=>{
        console.log('Whole page Update and render repeat and repeat')
    })

    useEffect(()=>{
        console.log('only once render')
    },[])

    useEffect(()=>{
        console.log('Only count function render = '+count)
    },[count])

    useEffect(()=>{
        console.log('Only name function is render  = '+name)
    },[name])

    useEffect(()=>{
        console.log('Only name function is render  = '+name)
    },[count, name])

  return (
    <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>

        <h1>{name}</h1>
        <button onClick={()=>setName('chuadhari')}>Update Name</button>
    </>
  )
}

export default UseEffect1