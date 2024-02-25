import React from "react";
class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(id) {
        const {name} = this.props.items.find (item => item.id === id);
        console.log('clicked', `"${name}"`)
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map(item => (
                        <li key={item.id} onClick={() => this.onClick.bind(null,item.id)}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>);
    }
}
export default MyList;