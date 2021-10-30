import React from 'react'
import Andrabank from './Andrabank'
import CorporationBank from './CorporationBank'

export default function UnionBank() {
    let data={
        firstName:'Manohar',
        lastName:'songa'


    }
    return (
        <div>
            <Andrabank info={data}/>
            <CorporationBank info={data} />
        </div>
    )
}
