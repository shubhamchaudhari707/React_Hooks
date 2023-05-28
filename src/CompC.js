import React,{useContext} from 'react'
import { NameContext, myChannelName } from './App'

const CompC = () => {
    let myName = useContext(NameContext)
    let mychannel = useContext(myChannelName)
    return (
        <>
            <h1>I am Component C</h1>
            <h1>{myName}</h1>
            <h1>{mychannel}</h1>
        </>
    )
}

export default CompC