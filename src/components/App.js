import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = {images: []};

    // 1) create callback function to get state from a child - SearchBar
    // recommended arrow function to use this.state without errors
    // 4) send request with term param to Unsplash API using axios
    onSearchSubmit = async (term) => {
        await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        }).then(r => this.setState({images: r.data.results}));
    };

    render() {
        return (
            <div className="ui container">
                <br/>
                {/* 2) pass callback function as value of a prop with argument onTextSubmit */}
                <SearchBar onTextSubmit={this.onSearchSubmit}/>
                <p>Results: {this.state.images.length} images</p>
                <ImageList images={this.state.images}/>
            </div>
        );
    }

}

export default App