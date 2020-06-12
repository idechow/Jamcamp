import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         dropdown: false
      }
      this.demo = this.demo.bind(this);
      this.toggleDropdown = this.toggleDropdown.bind(this);
   }

   toggleDropdown() {
      // console.log(this.state);
      // this.setState({ dropdown: !this.state.dropdown }, () => console.log(this.state));
      this.setState({ dropdown: !this.state.dropdown });
   }

   demo(e) {
      e.preventDefault();
      this.props.demoLogin({
         username: "Robert Hunter",
         password: "terrapin"
      });
   }

   renderDropDown() {
      if (this.state.dropdown) {
         return (
            <button className="logout-dropdown" onClick={this.props.logout}>Logout</button>
         )
      }
   }

   render() {

      const { currentUser, openModal } = this.props;

      const artistBar= () => (
         <ul className="right-side-nav">
            <li className="nav-element">
               <i className="fas fa-plus nav-icon" onClick={() => openModal('UNDER_CON')}></i>
            </li>
            <li className="nav-element">
               <Link to={`/user/${currentUser.id}`}>
                  <i className="fas fa-heart nav-icon"></i>
               </Link>
            </li>
            <li className="nav-element dropdown">
               <i className="fas fa-circle nav-icon" onClick={this.toggleDropdown}>
                     {this.renderDropDown()}
               </i>
            </li>
         </ul>
      );
   
      const fanBar = () => (
         <ul className="right-side-nav">
            <li className="nav-element">
               <Link to={`/user/${currentUser.id}`}>
                  <i className="fas fa-heart nav-icon"></i>
               </Link>
            </li>
            <li className="nav-element">
               <i className="fas fa-circle nav-icon" onClick={this.toggleDropdown}>
                  {this.renderDropDown()}
               </i>
            </li>
         </ul>
      );
      
      const display = currentUser ? (
         <div className="signed-in-nav">
            {Boolean(currentUser.band) ? artistBar() : fanBar() }
         </div>
      ) : (
            <div className='unassigned-nav'>
               <button className="nav-login" onClick={(e) => this.demo(e)}>Demo Login</button>
               <button className="nav-login" onClick={() => openModal('SIGNUP')}>Sign up</button>
               <button className="nav-login" onClick={() => openModal('LOGIN')}>Log in</button>
            </div>
         );

      return (
         <header id="nav-bar" className="nav-bar-row">
            <div className="nav-content">
               <div className="logo-shell">
                  <a href="#"><img className="logo" src={window.TerrapinURL}/></a>
               </div>
               <div>
                  {/* search */}
               </div>
               <div>
                  {display}
               </div>
            </div>
         </header>
      );
   }

};


export default Navbar;

{/* <p>I am an artist</p> */ }
{/* <i class="fas fa-search"></i> */ }
{/* <i class="fas fa-plus-square"></i> */ }