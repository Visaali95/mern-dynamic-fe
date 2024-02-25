import React from "react";

class Bike extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            make: "Yamaha",
            model: "R15",
            color: "blue"
        };
    }
    changeBikeColor = () => {
        this.setState({ color: "red" })
    }
    render() {
        const { make, model, color } = this.state;
        return (
        <div>
            <h2>My {make}</h2>
            <h2>My {model}</h2>
            <h2>My {color}</h2>
            <button onClick={this.changeBikeColor}>Change Color</button>
        </div>
        )
    }
}
export default Bike;
