import React from 'react'

const GenericPage = ({title, children}) => {
    return (
        <div style={{
            justifyContent:'center',
            alignItems: 'center', 
            height:'90vh',
            margin: 30,
        }}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default GenericPage;