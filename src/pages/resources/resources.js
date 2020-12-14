import React from 'react';
import './resources.css';
import CoachingCover from '../../images/CoachingCover.jpg';
import TimesAndSeasons from '../../images/TimesAndSeasons.jpg';
import MyTrueIdentity from '../../images/MyTrueIdentity.jpg';
import IAmLoved from '../../images/IAmLoved.jpg';



function Resources() {
  return (
    <div className="resourcesContainer">
      <h2>Resources</h2>
      <p>We currently have a number of really amazing and lovely  journals, all written and designed by Karen (20cm square in size). All just £10 each, plus postage (£2 per journal) or free collection. To keep costs low we ask you to simply email us below the Journals you would like to purchase and your postage address and we will email you the payment information and post it to you… simple!</p>


      <h3>Journals</h3>
      <div className="container-fluid">
        {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
        <div className="row">

     

            <div className="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2">
              <div className="card">
                {/* <img class="card-img-top" src={TimesAndSeasons} alt={"TimesAndSeasons"}></img> */}
                <img class="card-img-top" src="../../images/TimesAndSeasons.jpg" alt="Not Displaying?"></img>
                {/* <div className="card-header">First Book</div> */}
                <div className="card-body">
                  <h5 className="card-title">Times and Seasons</h5>
                  <p className="card-text">40 Day Christian Growth Journal, perfect for change and Transition</p>
                  {/* <a href={`/blogDetail/${blog._id}`} className="btn btn-primary">Read more...</a> */}
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2">
              <div className="card">
                <img class="card-img-top" src={MyTrueIdentity} alt={"MyTrueIdentity"}></img>
                <div className="card-body">
                  <h5 className="card-title">My True Identity</h5>
                  <p className="card-text">40 Day Christian Growth Journal, perfect for deepening your awareness of who you truly are as God’s Child</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2">
              <div className="card">
                <img class="card-img-top" src={IAmLoved} alt={"IAmLoved"}></img>
                <div className="card-body">
                  <h5 className="card-title">I Am Loved</h5>
                  <p className="card-text">40 Day Christian Growth Journal, perfect for encountering God’s Love more fully and more personally</p>
                </div>
              </div>
            </div>

      

            <div className="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2">
              <div className="card">
                {/* <img class="card-img-top" src={TimesAndSeasons} alt={"TimesAndSeasons"}></img> */}
                <img class="card-img-top" src="../../images/TimesAndSeasons.jpg" alt="Not Displaying?"></img>
                {/* <div className="card-header">First Book</div> */}
                <div className="card-body">
                  <h5 className="card-title">Times and Seasons</h5>
                  <p className="card-text">40 Day Christian Growth Journal, perfect for change and Transition</p>
                  {/* <a href={`/blogDetail/${blog._id}`} className="btn btn-primary">Read more...</a> */}
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2">
              <div className="card">
                <img class="card-img-top" src={MyTrueIdentity} alt={"MyTrueIdentity"}></img>
                <div className="card-body">
                  <h5 className="card-title">My True Identity</h5>
                  <p className="card-text">40 Day Christian Growth Journal, perfect for deepening your awareness of who you truly are as God’s Child</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2">
              <div className="card">
                <img class="card-img-top" src={IAmLoved} alt={"IAmLoved"}></img>
                <div className="card-body">
                  <h5 className="card-title">I Am Loved</h5>
                  <p className="card-text">40 Day Christian Growth Journal, perfect for encountering God’s Love more fully and more personally</p>
                </div>
              </div>
            </div>


           


        </div>
      </div>


      {/* <Link to="/adminBlogs">Administration</Link> */}
      {/* <BlogList /> */}
    </div>
  )
}

// class Resources extends React.Component {
//     render() {
//         return (
//             <div class="resources">
//                 <h1>Treasures Resources</h1>
//             </div>
//         )
//     }
// }

export default Resources;