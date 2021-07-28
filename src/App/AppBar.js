import React from 'react'
import './styles.css'
import styled from 'styled-components'
import { AppContext } from './AppProvider'


const BarStyle = styled.div`
    display : grid;
    grid-template-columns:180px auto 100px 100px;
`

export default function(){
    return (
        <AppContext.Consumer>
            {
                ({setPage})=>(
                <nav>
                        <div class="nav-wrapper">
                            <a href="#" class="brand-logo center" onClick={()=>setPage("Funds")}>MarketView</a>
                                <ul  class="right hide-on-med-and-down">
                                    <li><a href="#" onClick={()=>setPage("Funds")}>Funds</a></li>
                                    <li><a href="#" onClick={()=>setPage("Dashboard")}>Dashboard</a></li>
                                </ul>
                        </div>
                    </nav>
        
                )     
            }
        </AppContext.Consumer>
                                                       
    )
            
}