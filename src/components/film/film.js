import React from 'react';

const FilmView = ({film, match }) => {
    if(!film) {
        return <div>The resource does not exist</div>;
    }
    return (
        <div>Here is where the film will be displayed {film.name}</div>
    )
};

export default FilmView;