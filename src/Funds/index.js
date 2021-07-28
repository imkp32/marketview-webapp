import React from 'react'
import Page from '../Shared/Page'
import FundGrid from './FundGrid'
import Search from './Search'

export default function(){
    return(
        <Page name="Funds">
            <div className="row">
                <div className="col s12 m12">
                    <Search/>
                </div>
            </div>  
            <FundGrid/>
        </Page>
    )
}