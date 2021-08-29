import React from "react"
import '../styles/Coin.css';

class Coin extends React.Component {
    render() {
        return (
            <div className="Coin">
              <img src={this.props.source} alt={this.props.alt} />
            </div>
        )
    }
}

export default Coin