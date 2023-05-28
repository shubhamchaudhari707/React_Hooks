import React, { createContext } from 'react'
import UseState1 from './UseState1'
import UseState2 from './UseState2'
import UseState3 from './UseState3'
import UseStatePractice from './UseStatePractice'
import UseEffect1 from './UseEffect1'
import CompA from './CompA'
import CompC from './CompC'
import ControlledFormClass from './ControlledFormClass'
import ControlledFormFunction from './ControlledFormFunction'
import ControlledFormClass1 from './ControlledFormClass1'
import ControlledFormFunction1 from './ControlledFormFunction1'
import UseRefHooks from './UseRefHooks'


export let NameContext = createContext()
export let myChannelName = createContext()

const App = () => {
  return (
    <>
      {/* <UseState1/> */}
      {/* <UseState2/> */}
      {/* <UseState3/> */}
      {/* <UseStatePractice/> */}

      {/* <UseEffect1 /> */}

      {/* <NameContext.Provider value={'HArshal'}>
        <myChannelName.Provider value={'learning never ends'}>
          <CompA />
          <CompC />
        </myChannelName.Provider>
      </NameContext.Provider> */}

      {/* react forms */}

      {/* <ControlledFormClass/> */}
      {/* <ControlledFormFunction/> */}
      {/* <ControlledFormClass1/> */}
      <ControlledFormFunction1/>
      
      {/* <UseRefHooks/> */}

    </>
  )
}

export default App