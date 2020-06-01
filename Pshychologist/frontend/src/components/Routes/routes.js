import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Reviews from '../scenes/Reviews'
import AboutMe from '../scenes/AboutMe'
import Services from '../scenes/Services'
import LandingPage from '../scenes/LandingPage';
import Literature from '../scenes/Literature'
import Blog from '../scenes/Blog'
import Contacts from '../scenes/Contacts'
import Blog1 from '../Blogs/Blog1'
import Blog2 from '../Blogs/Blog2'

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/aboutMe" component={AboutMe} />
            <Route path="/services" component={Services} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog1" component={Blog1} />
            <Route path="/blog2" component={Blog2} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/literature" component={Literature} />


        </Switch>
    )
}