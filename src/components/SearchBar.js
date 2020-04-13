import React from "react";

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(`onFormSubmit - SearchBar.js state: ${this.state.term}`);

        // 3) call callback function as a prop from onTextSubmit function & pass state
        this.props.onTextSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>

        )
    }

}

export default SearchBar