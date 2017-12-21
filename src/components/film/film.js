import React from 'react';

const FilmView = ({film, match }) => {
    if(!film) {
        return '';
    }
    return (
        <div>Here is where the film will be displayed {film.name}</div>
    )
};

export default FilmView;