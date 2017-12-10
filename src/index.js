import React from 'react';
import ReactDOM from 'react-dom';

//Components and containers
import App from './components/app/App';
import WatchList from './containers/watchlist/watchlist';
import Nav from './components/nav/nav';
import registerServiceWorker from './registerServiceWorker';

//Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers';

// Global styles
import './index.css';
import './buttons.css'

const initialState = {
    playlist: [
        { 
            id: 1,
            name: 'Shutter Island', 
            director: 'Martin Scorsese',
            genre: 'Mystery', 
            releaseDate: '2010', 
            posterUrl: 'http://is4.mzstatic.com/image/thumb/Video/v4/70/d7/df/70d7df59-803c-db3e-a13e-0239be4c0738/source/227x227bb.jpg',
            synopsis: `U.S. Marshals Teddy Daniels (Leonardo DiCaprio) and Chuck Aule (Mark Ruffalo) are on a ferryboat in foggy Boston Harbour headed towards Shutter Island, an island containing a federal mental hospital for the criminally insane. They are going to the island because a woman patient named Rachel escaped the day before. Teddy is very ill, sweating and throwing up in the toilet, telling himself to get it together, it's just water. Then he looks out the window and says it's a LOT of water. He goes up on deck to talk to Chuck, and it's apparent that they are new partners working for the first time together. During their conversation it is revealed that Teddy's wife died in an apartment fire several years before. Chuck is sorry he brought it up. He refers to Teddy as boss all the way through the movie, and at one point mentions that Teddy is a legend, so we know that Teddy is well known through the Marshal Service and that he is Chuck's superior.` ,
            inWatchList: false
        }, 
        {
            id: 2, 
            name: 'Django Unchained',
            director: 'Quentin Tarantino',
            genre: 'Thriller',
            releaseDate: '2012',
            posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
            synopsis: `In 1858, Django (Jamie Foxx), a slave, is chained to a bunch of other slaves and being marched to his new owner's estate in Texas by the Speck brothers. At nightfall, a German man in a dentist cart pulls up and hails the Speck brothers. He introduces himself as Dr. King Schultz (Christoph Waltz).   
            Schultz is clearly more intelligent and enlightened than the Specks. He says he is looking for a slave who can identify a band of wanted fugitives known as the Brittle brothers. Django announces that he knows the Brittle brothers and can identify them. Schultz offers to buy Django, but his polite and educated manner rubs the ill-mannered Specks the wrong way, and Ace Speck threatens to shoot him with his shotgun. In response, Schultz lowers his lantern, whips out a revolver, and shoots Ace, then Dicky's horse, causing Dicky to fall off his horse. The horse carcass then lands on and crushes Dicky's leg, leaving him screaming in pain. Crippled, he agrees to sell Django, and Schultz pays the man (for both Django, and the dead Speck's horse), gets an official title to Django, and prepares to ride off.`,
            inWatchList: false
        }
    ],
    watchlist: []
};

const store = createStore(
    rootReducer,
    initialState
);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <div className="App">
                <Nav />
                <Route exact path='/' component={App} />
                <Route path='/playlist' component={App} />
                <Route path='/watchlist' component={WatchList} />
            </div>
        </Router>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
