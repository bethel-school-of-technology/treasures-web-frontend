import React from 'react';
import './resources.css';

import TimesAndSeasons from '../../images/TimesAndSeasons.jpg';
import MyTrueIdentity from '../../images/MyTrueIdentity.jpg';
import IAmLoved from '../../images/IAmLoved.jpg';
import PreciousAndBeautiful from '../../images/PreciousAndBeautiful.jpg';
import FaithHopeLove from '../../images/FaithHopeLove.jpg';
import LetMeBe from '../../images/LetMeBe.jpg';
import CoachingCover from '../../images/CoachingCover.jpg';
import DareToDream from '../../images/DareToDream.jpg'
import Encounters from '../../images/Encounters.jpg';
import WhoAmI from '../../images/WhoAmI.jpg';


function Resources() {

  const cardInfo = [
    { image: "../../images/TimesAndSeasons.jpg", header: "40 Day Christian Growth Journal", title: "Times and Season", text: "Perfect for change and Transition" },
    { image: "../../images/MyTrueIdentity.jpg", header: "40 Day Christian Growth Journal", title: "My True Identity", text: "Perfect for deepening your awareness of who you truly are as God’s Child" },
    { image: { IAmLoved }, header: "40 Day Christian Growth Journal", title: "I Am Loved", text: "Perfect for encountering God’s Love more fully and more personally" },
    { image: "../../images/PreciousAndBeautiful.jpg", header: "Prayer Journal", title: "Precious &amp; Beautiful", text: "Praying to know and live out your beauty" },
    { image: "../../images/FaithHopeLove.jpg", header: "Prayer Journal", title: "Faith, Hope &amp; Love", text: "Praying to live this more and change our world" },
    { image: "../../images/LetMeBe.jpg", header: "Prayer Journal", title: "Let Me Be…", text: "Praying into being a gift to the world" },
    { image: "../../images/CoachingCover.jpg", header: "Growth Journal", title: "Life-Coaching Journal", text: "Over 12 Coaching Exercises that take you on a personal coaching journey" },
    { image: "../../images/DareToDream.jpg", header: "Growth Journal", title: "Dreams Journal", text: "Inspiring Quotes, lined and blank pages for visioning and dreaming" }
  ];

  const renderCard = (card, index) => {
    return (
      // <Card style={{ width: '24rem' }} key={index}>
      //   <Card.Img variant="top" src={card.image} />
      //   <Card.Body>
      //     <Card.Title>{card.title}</Card.Title>
      //     <Card.Text>{card.text}</Card.Text>
      //   </Card.Body>
      // </Card>
      <div className="card" key={index}>
        <div className="card-header">{card.header}</div>
        <img className="card-img-top" src={card.image} alt={"dummy text"}></img>
        {/* <img className="card-img-top" src={TimesAndSeasons} alt={"TimesAndSeasons"}></img> */}
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.text}</p>
        </div>
      </div>
    )
  };

  return (
    <div className="resources">
      <h2>Resources</h2>
      <p>We currently have a number of really amazing and lovely journals, all written and designed by Karen (20cm square in size). All just £10 each, plus postage (£2 per journal) or free collection. To keep costs low we ask you to simply email us below the Journals you would like to purchase and your postage address and we will email you the payment information and post it to you… simple!</p>


      <h2>Looping through the cardRender</h2>
      <div className="sideBySide">
        {cardInfo.map(renderCard)}
      </div>


      <hr></hr>

      <div className="container-fluid">
        <h2>Contact us directly to purchase these Journals</h2>

        {/* <div className="row justify-content-around"> */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-around">

          <div className="col mb-4">
            <div className="card">
              <div className="card-header">40 Day Growth Journal</div>
              <img className="card-img-top" src={TimesAndSeasons} alt={"TimesAndSeasons"}></img>
              {/* <img className="card-img-top" src="../../images/TimesAndSeasons.jpg" alt="Not Displaying?"></img> */}
              {/* <img className="card-img-top" src="../../../public/images/TimesAndSeasons_cover-s.jpg" alt="Not Displaying?"></img> */}
              {/* <div className="card-header">First Book</div> */}
              <div className="card-body">
                <h5 className="card-title">Times and Seasons</h5>
                <p className="card-text">Perfect for change and Transition</p>
                {/* <a href={`/blogDetail/${blog._id}`} className="btn btn-primary">Read more...</a> */}
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <div className="card-header">40 Day Growth Journal</div>
              <img className="card-img-top" src={MyTrueIdentity} alt={"MyTrueIdentity"}></img>
              <div className="card-body">
                <h5 className="card-title">My True Identity</h5>
                <p className="card-text">Perfect for deepening your awareness of who you truly are as God’s Child</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <div className="card-header">40 Day Growth Journal</div>
              <img className="card-img-top" src={IAmLoved} alt={"IAmLoved"}></img>
              <div className="card-body">
                <h5 className="card-title">I Am Loved</h5>
                <p className="card-text">Perfect for encountering God’s Love more fully and more personally</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <div className="card-header">Prayer Journal</div>
              <img className="card-img-top" src={PreciousAndBeautiful} alt={"PreciousAndBeautiful"}></img>
              <div className="card-body">
                <h5 className="card-title">Precious &amp; Beautiful</h5>
                <p className="card-text">Praying to know and live out your beauty</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <div className="card-header">Prayer Journal</div>
              <img className="card-img-top" src={FaithHopeLove} alt={"FaithHopeLove"}></img>
              <div className="card-body">
                <h5 className="card-title">Faith, Hope &amp; Love</h5>
                <p className="card-text">Praying to live this more and change our world</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <div className="card-header">Prayer Journal</div>
              <img className="card-img-top" src={LetMeBe} alt={"LetMeBe"}></img>
              <div className="card-body">
                <h5 className="card-title">Let Me Be…</h5>
                <p className="card-text">Praying into being a gift to the world</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <div className="card-header">Growth Journal</div>
              <img className="card-img-top" src={CoachingCover} alt={"CoachingCover"}></img>
              <div className="card-body">
                <h5 className="card-title">Life-Coaching Journal</h5>
                <p className="card-text">Over 12 Coaching Exercises that take you on a personal coaching journey</p>
              </div>
            </div>
          </div><div className="col mb-4">
            <div className="card">
              <div className="card-header">Growth Journal</div>
              <img className="card-img-top" src={DareToDream} alt={"DareToDream"}></img>
              <div className="card-body">
                <h5 className="card-title">Dreams Journal</h5>
                <p className="card-text">Inspiring Quotes, lined and blank pages for visioning and dreaming</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="container-fluid">
        <h2>Books that are available on Amazon</h2>

        <div className="row justify-content-around bookSelf">
          <div className="col-6 col-md-4">
            <a href="https://www.amazon.co.uk/dp/B08B35T9MC">
              <img className="img-responsive" src={Encounters} alt={"Encounters"}></img>
            </a>
          </div>
          <div className="col-12 col-md-8">
            <h3>Encounters</h3>
            <p >Just one short encounter with Jesus was all it took for people to step into freedom, wholeness and life, even after years of suffering with complex issues. Yet each encounter was the result of a journey. What was going on in their hearts and minds as they reached out to Jesus? What were their hopes and fears as they journeyed towards Him? - Maybe they were the same ones as you have?</p>
            <p>These ten stories are based on the accounts found in the gospels but they are not meant to be read as scripture. However, they are written to be consistent with both God’s and man’s nature. By dramatising the accounts, my hope is that they would help you experience just one possibility of what it might have been like for each person. A glimpse into the unique journey of their hearts and minds, of their hopes and fears, leading up to the moment of their encounter with Jesus and subsequent breakthrough. Every story, every breakthrough, has been recorded in scripture to encourage us. For what God has done for one, is available for all… for you!</p>
            <p>After each short story I have added a few thoughts and questions to help you ponder, explore and go on your own journey encountering Jesus.</p>
            <a className="btn btn-primary" href="https://www.amazon.co.uk/dp/B08B35T9MC">Amazon UK</a> &nbsp; <a className="btn btn-primary" href="https://www.amazon.com/dp/B08B35T9MC">Amazon USA</a>
          </div>
        </div>

        <div className="row justify-content-around bookSelf">
          <div className="col-6 col-md-4">
            <a href="https://www.amazon.co.uk/dp/B08B35T9MC">
              <img className="img-responsive" src={WhoAmI} alt={"WhoAmI"}></img>
            </a>
          </div>
          <div className="col-12 col-md-8">
            <h3>Who Am I? &amp; Who Are You?</h3>
            <p>This book is not simply a book... it’s an adventure!</p>
            <p>A treasure map to discovering the gold that is hidden inside yourself and all those amazing people around you! God sees the gold and the goodness in YOU and in every single person in your world!</p>
            <p>So here begins the adventure... an adventure you can go on by yourself, with friends and family or in a group whatever age you all are, isn’t that cool! An adventure that will help you to see the Bible and hear God’s voice in a new way. An adventure that will take you through all seven continents of the world as we explore lots of different animals, enjoy fun and creative activities and learn many ways to discover the gold in ourselves and others!</p>
            <p>Enjoy the adventure!!!</p>
            <a className="btn btn-primary" href="https://www.amazon.co.uk/dp/B08P3QTMK4">Amazon UK</a> &nbsp; <a className="btn btn-primary" href="https://www.amazon.com/dp/B08P3QTMK4">Amazon USA</a>
          </div>
        </div>
      </div>

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