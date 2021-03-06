import React,{Component} from 'react'
import './App.css';
import Funds from '../Funds';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';
import Content from '../Shared/Content';
import Dashboard from '../Dashboard';


class App extends Component {
  render(){
    return(
      <AppLayout>
        <AppProvider>
          <AppBar/>
            <Content>
              <Funds/>
              <Dashboard/>
            </Content>
        </AppProvider>
      </AppLayout>
      
    )
  }
}

export default App;
