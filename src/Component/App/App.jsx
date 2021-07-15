import React from 'react';
import ResultContainer from '../ResultContainer/ResultContainer';
import Header from './../Header/Header';
import SearchBox from './../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headerText: 'Name IT!',
            headerExpanded: true,
            suggestNames: [],
        };
    }
    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestNames: inputText ? name(inputText) : [],
        });
    };
    render() {

        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultContainer suggestNames={this.state.suggestNames} />
            </div>
        );
    }
}
export default App;