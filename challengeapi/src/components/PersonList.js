import React from 'react';
import axios from 'axios';

class PersonList extends React.Component {
    state = {
        lists:[
            {
            quote: "By chilling my loins I increase the chances of impregnating my wife.",
            character: "Apu Nahasapeemapetilon",
            image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
            characterDirection: "Left"
            }
        ] 
    }

getCharacters = () => {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
    .then(res => this.setState({ lists: res.data }))
}

componentDidMount() {
    this.getCharacters()
}

  render() {
      const {lists} = this.state
    return (
        <div>
            <div>
                {lists.map(list => (
                <div>
                    <img src={list.image} alt={list.character}></img>
                    <p>{list.character}</p>
                    <p>{list.quote}</p>
                </div>
                ))}
            </div>
            
            <button onClick={this.getCharacters}>change</button>
        </div>

    )
  }
}
export default PersonList