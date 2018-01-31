import React, { Component } from 'react';
import './film-filter.css';

class FilmFilter extends Component {
    node = null; 

    constructor() {
        super();
        this.state = { showFilter: false, chevronDown: false };
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    render() {
        const { onFilterSelected, selectedFilter } = this.props;
        const genres = ['All Genres', 'Drama', 'Mystery', 'Thriller', 'Adventure', 'Fantasy', 'Action', 'Animation'];

        const filterOptions = genres.map((genre) => {
            const selectedClass = genre === selectedFilter ? 'selected' : '';
            return <li key={genre}>
                <a id={genre} 
                   onClick={onFilterSelected} 
                   className={selectedClass}>
                    <i className="fas fa-check"></i>
                    {genre}
                </a>
            </li>;
        });

        const { showFilter, chevronDown } = this.state;
        const selectFilterClass = showFilter ? 'select-filter show' : 'select-filter';
        const chevronClass = chevronDown ? 'fas fa-chevron-down last-down' : 'fas fa-chevron-down last-up';

        return ( 
            <div>
                <button className="btn-filter" 
                    onClick={() => this.handleOnClick()}
                    ref={(node) => { this.node = node; }} >
                    <i className="fas fa-filter"></i> 
                    <span>{selectedFilter}</span>
                    <i className={chevronDown ? 'fas fa-chevron-down last-down' : 'fas fa-chevron-down last-up'}></i>
                </button>
                <ul className={selectFilterClass}>
                    {filterOptions}
                </ul>
            </div>
        );
    }

    handleOnClick() {
        this.setState(prevState => ({ 
            showFilter: !prevState.showFilter,
            chevronDown: !prevState.chevronDown 
        }));
    }

    handleClickOutside(event) {
        if (this.node.contains(event.target)) {
            return;
        } 
        this.setState({ showFilter: false });
    }
}

export default FilmFilter;