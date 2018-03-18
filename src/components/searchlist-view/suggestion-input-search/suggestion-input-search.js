import React from 'react';
import './suggestion-input-search.css';

const EMPTY_SEARCH_TERM = "";
const EMPTY_TERM = '';
const ENTER_KEY_CODE = 13;
const EMPTY_SUGGESTIONS = 0;

const SuggestionList = ({ show, suggestions, handleOnClick }) => {
    const suggestionList = suggestions.map((it) => {
        return <li key={it} onClick={event => handleOnClick(event)}><span>{it}</span></li>
    });

    if (show) {
        return <div className="suggestions-container">
            <ul>
                {suggestionList}
            </ul>
        </div>;
    } 
    return null;
}

class SuggestionInputSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = { showSuggestions: false, suggestions: [], recentSearches: this.props.recentSearches, term: EMPTY_TERM };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnSearch = this.handleOnSearch.bind(this);
        this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
    }

    submitSearch(term) {
        const { onSubmitFunction } = this.props;
        const { recentSearches } = this.state;
        onSubmitFunction(term);

        const termNotFound = !recentSearches.includes(term);
        let newSearches = recentSearches;

        if (termNotFound) {
            newSearches = [...this.state.recentSearches, term];
        }
        
        this.setState({ showSuggestions: false, suggestions: [], recentSearches: newSearches, term });
    }

    handleOnKeyPress(event) {
        const { keyCode }  = event;
        const term  = event.target.value;
        
        if (keyCode === ENTER_KEY_CODE && term !== EMPTY_SEARCH_TERM) {
            this.submitSearch(term);
        }
    }

    handleOnSearch(event) {
        const term = event.target.value;
        const suggestions = this.getSuggestionsFor(term);

        if (suggestions.length > EMPTY_SUGGESTIONS) {
            this.setState({ showSuggestions: true, suggestions, term });
        } else {
            this.setState({ showSuggestions: false, suggestions, term });
        }
    }

    handleOnClick(event) {
        const term = event.target.innerText;
        this.submitSearch(term);
    }

    getSuggestionsFor(term) {
        const { recentSearches } = this.state;
        return term !== EMPTY_SEARCH_TERM ? recentSearches.filter(it => it.includes(term)) : [];
    }

    render() {
        const { suggestions, showSuggestions } = this.state;
        const { placeholder } = this.props;

        return (
            <div>
                <input 
                    type="text" 
                    name="search" 
                    placeholder={placeholder} 
                    value={this.state.term}
                    onChange={this.handleOnSearch}
                    onKeyDown={this.handleOnKeyPress} 
                />
                <SuggestionList show={showSuggestions} suggestions={suggestions} handleOnClick={this.handleOnClick} />
            </div>
        )
    }
}

export default SuggestionInputSearch;