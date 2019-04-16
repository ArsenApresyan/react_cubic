import React, { Component } from 'react';
import Public from './components/Public';
import Home from './components/Home';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from "react-router-dom";


class Test extends Component {
    render() {
        return (
            <div>

                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/public">Public Page</Link>
                            </li>
                            <li>
                                <Link to="/protected">Protected Page</Link>
                            </li>
                        </ul>
                        <Route path="/public" component={Public} />
                        <Route path="/protected" component={Home} />
                    </div>
                </Router>
            </div>
            
        );
    }
}

export default Test;