import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'
import FundTile from './FundTile'

export const FundGridStyled = styled.div`
    display:grid;
    grid-template-columns:repeat(1,1fr);
    grid-gap:15px;
    margin-top:40px;
`


function getFundsToDisplay(fundList,filteredFunds){
    return (filteredFunds && Object.keys(filteredFunds)) ||
    Object.keys(fundList).slice(0,50)
}

export default function(){
    return(
        <AppContext.Consumer>
            {
                ({fundList,filteredFunds}) => <FundGridStyled>
                    {getFundsToDisplay(fundList,filteredFunds).map(fundKey =>
                        <FundTile key= {fundKey} fundKey={fundKey}/>)}
                </FundGridStyled>
            }
        </AppContext.Consumer>
    )
}