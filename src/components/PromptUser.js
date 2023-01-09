import { Prompt } from "react-router-dom";
import React from 'react'

const PromptUser = () => {
return (<Prompt
      when={true}
        message={
          `Are you sure you navigate away`
        }
      /> 
)
}

export default PromptUser 