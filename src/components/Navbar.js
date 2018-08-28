import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state={
            openNav:false
        }
        this.handleOpenNav = this.handleOpenNav.bind(this);
    }
    handleOpenNav = () =>{

        this.setState({
            openNav:!this.state.openNav
        });
        console.log(this.state.openNav)
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={'/'} className="navbar-brand"> TEST </Link>
                <button className="navbar-toggler" type="button" onClick={this.handleOpenNav}>
                    <div id="menuanim">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div className={"collapse navbar-collapse "+ (!this.state.openNav ? '':'show')}>
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/'} className="nav-link"> Home </Link></li>
                        <li><Link to={'/contact'} className="nav-link">Tickets and Tours</Link></li>
                        <li><Link to={'/contact'} className="nav-link">Tickets and Tours</Link></li>
                        <li><Link to={'/contact'} className="nav-link">Tickets and Tours</Link></li>
                    </ul>
                </div>

            </nav>
        )
    }

}

export default Navbar;