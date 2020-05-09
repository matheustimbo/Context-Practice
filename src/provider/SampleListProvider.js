import React, { useState } from 'react';

const SampleContext = React.createContext();

const SampleProvider = (props) => {
    const [list, setList] = useState([])

    return (
        <SampleContext.Provider
            value={{
                list,
                setList
            }}
        >
            {props.children}
        </SampleContext.Provider>
    )
}

export { SampleContext, SampleProvider };