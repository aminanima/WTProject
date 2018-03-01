import React from 'react';
import App from './components/App/App';
import Home from './components/App/Home';
import Rating from './components/App/rating';
import Login from './components/App/login';
import {render} from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './bootstrap/css/bootstrap.css';
import './main.css'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();


render(
    <Router> 
        <div className="main">
	        	 <Breadcrumb tag="nav">
		                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
		                <BreadcrumbItem><Link to="/rating">Rating</Link></BreadcrumbItem>
		                <BreadcrumbItem><Link to="/login">Login</Link></BreadcrumbItem>
		                <BreadcrumbItem><Link to="/search">TMDb Search</Link></BreadcrumbItem>
		            <hr/>
		                <Route exact path="/" component={Home} />
		                <Route exact path="/rating" component={Rating} />
		                <Route exact path="/login" component={Login} />
		                <Route exact path="/search" component={App} />
		        </Breadcrumb>
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();

