// @flow
import React, { Component } from 'react';
import './film-filter.css';

type Props = {
    onFilterSelected: Function,
    selectedFilter: Function,
    selectedFilter: string
};

type State = {
    showFilter: boolean,
    chevronDown: boolean
};

class FilmFilter extends Component <Props, State> {
    node: any = null; 

    constructor() {
        super();
        this.state = { showFilter: false, chevronDown: false };
        //$FlowFixMe
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        //$FlowFixMe
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        //$FlowFixMe
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
        const chevronDownClass = chevronDown ? 'fas fa-chevron-down last-down' : 'fas fa-chevron-down last-up';

        return ( 
            <div>
                <button className="btn-filter" 
                    onClick={() => this.handleOnClick()}
                    ref={(node) => { this.node = node; }} >
                    <i className="fas fa-filter"></i> 
                    <span>{selectedFilter}</span>
                    <i className={chevronDownClass}></i>
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

    handleClickOutside(event: Object) {
        if (this.node.contains(event.target)) {
            return;
        } 
        this.setState({ showFilter: false, chevronDown: false });
    }
}

export default FilmFilter;