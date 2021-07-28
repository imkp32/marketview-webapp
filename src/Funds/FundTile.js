import React from 'react'
import { AppContext } from '../App/AppProvider'
import { SelectableTile, DisabledTile } from '../Shared/Tile'
import FundHeaderGrid from './FundHeaderGrid'


function clickFundHandler(fundKey,addFund,confirmFavorites){
    return () => {
        addFund(fundKey);
        confirmFavorites();
    } 
}


export default function({fundKey}){
    return <AppContext.Consumer>
        {
            ({fundList,addFund,isInFavorites,confirmFavorites}) =>{
                let fund = fundList[fundKey];
                let TileClass = SelectableTile;
                if(isInFavorites(fundKey)){
                    TileClass = DisabledTile;
                }

                return <TileClass onClick={clickFundHandler(fundKey,addFund,confirmFavorites)}>
                        <FundHeaderGrid name ={fund.metaData.fundHouse} scheType={fund.metaData.schemeType} schemeCat={fund.metaData.schemeCategory} />
                    </TileClass>
            }
        }
    </AppContext.Consumer>
}