import React, {Components} from 'react';
import Navbar from '../components/Navbar';
import Home from "../components/Home";
import Footer from "../components/Footer";
import About from "../about/About";
import Contact from "../components/Contact";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Layout(props){
	return(
		<div className="App">
			<Navbar/>
			{props.children}
			<Footer/>
		</div>
	)
}
export default Layout;