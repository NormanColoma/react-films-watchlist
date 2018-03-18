import React from 'react';

const SuggestionList = ({ suggestions, handleOnClick, show, selectedItemIndex }) => {

    let suggestionListRef = null;

    const onMouseOver = () => {
        const childrenElems = suggestionListRef.children;
        
        for(let i=0; i<childrenElems.length; i++) {
            childrenElems[i].className = "";
        }
    }

    const suggestionList = suggestions.map((it, index) => {
        if (index === selectedItemIndex) {
            return <li key={it} className='selected' onClick={event => handleOnClick(event)}>
                <span>{it}</span>
            </li>;
        }
        return <li key={it} onClick={event => handleOnClick(event)} onMouseOver={() => onMouseOver()}>
            <span>{it}</span>
            </li>;
    });

    if (show) {
        return <div className="suggestions-container">
            <ul ref={(list) => { suggestionListRef = list; }}>
                {suggestionList}
            </ul>
        </div>;
    } 
    return null;
}

export default SuggestionList;