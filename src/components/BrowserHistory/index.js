import React, {Component} from 'react'
import './index.css'

const initialHistoryList = [...
]

export default class BrowserHistory extends Component {

    state = {historyList: initialHistoryList}
    getSearchResults = (e) => {
        const searchTerm =e.target.value
        const filteredItems = initialHistoryList.filter(each => each.title.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        this.setState({historyList: filteredItems})
        console.log(filteredItems) 
    }

   deleteItem = id => {
       const {historyList} = this.state
       const filteredList = historyList.filter(each => each.id !== id)
       this.setState({historyList: filteredList})
   }

    render() {
        const {historyList} = this.state
        return (
            <div>
                <div className = "navBar">
                    <img src = "https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt = "logo"/>
                    <div className = "searchBox">
                        <img src = "https://assets.ccbp.in/frontend/react-js/search-img.png" alt = "search"/>
                        <input type = "search" placeholder = "Search history" onChange = {this.getSearchResults}/>
                    </div>
                </div>
                <div className = "searchResultsContainer">
                    {historyList.length<1 ? <div className = "noItems"><p>There is no history to show</p></div> : <ul>
                        {historyList.map(each => <HistoryItem key = {each.id} historyItem = {each} deleteItem={this.deleteItem}/>)}
                    </ul>}
                </div>
            </div>
        )
    }
}


