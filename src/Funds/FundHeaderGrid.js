import React from 'react'
import styled from 'styled-components'

// export const FundHeaderGridStyled = styled.div`
//     display:grid;
//     grid-template-columns:1,1fr;
// `

// export const FundSchemeStyled = styled.div`
//     color:black;
// `

// export const FundNameStyled = styled.div`
//     font-weight:bold;
//     font-size:1.25em;
// `


export default function({name,scheType,schemeCat}){
    return(
        <div class="col s12 m12">
      <div class="card-panel white">
        <span class="black-text">{name}<div/> {scheType}<div/> {schemeCat}
        </span>
      </div>
    </div>
    )
}