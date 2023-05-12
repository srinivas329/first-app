import { Component } from 'react'

import Header from '../Header'

class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div>
                    <h1>Hello! Everyone</h1>
                </div>
            </div>
        )
    }
}

export default Home