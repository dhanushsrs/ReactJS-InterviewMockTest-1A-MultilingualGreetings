import {Component} from 'react'
import TabItems from './components/TabItems'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
// const App = () => <h1>Hello World</h1>

class App extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  renderSelectedImage = () => {
    const {activeTabId} = this.state

    const imageDetails =
      languageGreetingsList[
        languageGreetingsList.findIndex(eachItem => activeTabId === eachItem.id)
      ]

    const {imageUrl, imageAltText} = imageDetails
    return <img src={imageUrl} alt={imageAltText} className="image-size" />
  }

  activeBtn = id => {
    this.setState({activeTabId: id})
  }

  render() {
    const {activeTabId} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="list-items">
          {languageGreetingsList.map(eachItem => (
            <TabItems
              key={eachItem.id}
              buttonDetails={eachItem}
              isActive={eachItem.id === activeTabId}
              activeBtn={this.activeBtn}
            />
          ))}
        </ul>
        {this.renderSelectedImage()}
      </div>
    )
  }
}

export default App
