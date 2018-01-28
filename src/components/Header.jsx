import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <h2 className='logo'>Logo Here</h2>
        <input className="textBox" type="text"></input>
        <p className='lorem'>Lorem</p>
        <p className='lorem'>Lorem</p>
          <img className='icons' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Plain_Disc_20%25_grey.svg/2000px-Plain_Disc_20%25_grey.svg.png"></img>
          <img className='icons' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Plain_Disc_20%25_grey.svg/2000px-Plain_Disc_20%25_grey.svg.png"></img>
          <img className='icons' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Plain_Disc_20%25_grey.svg/2000px-Plain_Disc_20%25_grey.svg.png"></img>

          <div className=''>
            <img className='icons' src="http://glia.ca/scm/2013/ge1127_b/wp-content/uploads/2013/10/594partner-profile-pic-An.jpg"></img>
            <img className='dropdownbtn' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Ic_arrow_drop_down_48px.svg/2000px-Ic_arrow_drop_down_48px.svg.png"></img>
        </div>
      </div>
    );
  }
}
export default Header;
