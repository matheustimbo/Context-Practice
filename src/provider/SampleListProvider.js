import React, { useState } from 'react';

const SampleContext = React.createContext();

const SampleProvider = (props) => {
    const [list, setList] = useState([{key: 0, name: 'item 1'}, {key: 1, name: 'item 2'}])

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