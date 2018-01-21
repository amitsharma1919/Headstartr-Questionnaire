import React from 'react';

class Profile extends React.Component{
  render(){
    return(
      <div>
        <div className="item1">
          <div className='grid-container'>
            <div className="image">
              <img src="http://glia.ca/scm/2013/ge1127_b/wp-content/uploads/2013/10/594partner-profile-pic-An.jpg"></img>
            </div>
            <div className="info">
              <h1>ABC Company</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa. Id ornare arcu odio ut. Amet risus nullam eget felis eget. Duis at consectetur lorem donec massa sapien faucibus et molestie. Scelerisque viverra mauris in aliquam sem fringilla. Duis convallis convallis tellus id.</p>
            </div>
            <div className="graph">
                <img src="https://cdn2.iconfinder.com/data/icons/infographics-linear-black/614/5212_-_Inflation_Graph-512.png"></img>
            </div>
          </div>
        </div>

        <div className="item2">
          <ol>
              <li>Will your business be primarily home-based?<br />
                  <input type="radio" value="Yes" name="1"></input>
                  <label>Yes</label>
                  <br />
                  <input type="radio" value="Yes" name="1"></input>
                  <label>No</label>
              </li>
              <li>Will your business be full-time or part-time?<br />
                  <input type="radio" value="Yes" name="2"></input>
                  <label>Full-time</label>
                  <br />
                  <input type="radio" value="Yes" name="2"></input>
                  <label>Part time</label>
              </li>
              <li>What will be the form of business ownership?<br />
                  <input type="radio" value="Yes" name="3"></input>
                  <label>Individual(Sole Proprietorship)</label>
                  <br />
                  <input type="radio" value="Yes" name="3"></input>
                  <label>Partnership</label>
                  <br />
                  <input type="radio" value="Yes" name="3"></input>
                  <label>Corporation</label>
              </li>
              <li>Have you registered the business with the corporate affairs commission?<br />
                    <input type="radio" value="Yes" name="4"></input>
                    <label>Yes</label>
                    <br />
                    <input type="radio" value="Yes" name="4"></input>
                    <label>No</label>
              </li>
              <li>How will you pay for the supplies/ materials?<br />
                    <input type="radio" value="Yes" name="5"></input>
                    <label>Cash</label>
                    <br />
                    <input type="radio" value="Yes" name="5"></input>
                    <label>Lease</label>
                    <br />
                    <input type="radio" value="Yes" name="5"></input>
                    <label>Cash and Lease</label>
                    <br />
                    <input type="radio" value="Yes" name="5"></input>
                    <label>Others</label>
              </li>
          </ol>
        </div>
      </div>
    );
  }
}
export default Profile;
