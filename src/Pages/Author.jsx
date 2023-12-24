import React from 'react'
import "./Author.css"
import { Link, useParams } from 'react-router-dom'
const Data = [
    {
        "id": 1,
        "title": "We're living some strange times",
        "subtite": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "image": "/images/thumb.jpeg",
        "category": "Politics",
        "body": " Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift  stealth mass market seed money rockstar niche market marketing buzz market.Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market. ",
        "User": "Steve",
        "Date": "22 July 2017"
    },

    {
        "id": 2,
        "title": "Arrest warrant issued against former minister",
        "subtite": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "image": "/images/thumb1.jpeg",
        "category": "Politics",
        "body": " Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift  stealth mass market seed money rockstar niche market marketing buzz market.Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market. ",
        "User": "Mary",
        "Date": "22 July 2017"
    },


    {
        "id": 3,
        "title": "grows amid changing nature of cyber crimes",
        "subtite": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "image": "/images/thumb2.jpeg",
        "category": "Politics",
        "body": " Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift  stealth mass market seed money rockstar niche market marketing buzz market.Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market. ",
        "User": "Jane",
        "Date": "22 July 2017"
    },



    {
        "id": 4,
        "title": "We're living some strange times",
        "subtite": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "image": "/images/thumb.jpeg",
        "category": "Sports",
        "body": " Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift  stealth mass market seed money rockstar niche market marketing buzz market.Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market. ",
        "User": "Sal",
        "Date": "22 July 2017"
    },



    {
        "id": 5,
        "title": "times We're living some strange ",
        "subtite": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "image": "/images/thumb3.jpeg",
        "category": "Sports",
        "body": " Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift  stealth mass market seed money rockstar niche market marketing buzz market.Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market. ",
        "User": "Sal",
        "Date": "22 July 2017"
    },


    {
        "id": 6,
        "title": "Nepal We're living some strange times",
        "subtite": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "image": "/images/thumb.jpeg",
        "category": "Sports",
        "body": " Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift  stealth mass market seed money rockstar niche market marketing buzz market.Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market. ",
        "User": "Sal",
        "Date": "22 July 2017"
    },


    {
        "id": 7,
        "title": "Bhutan We're living some strange times",
        "subtite": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "image": "/images/thumb4.jpeg",
        "category": "National",
        "body": " Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift  stealth mass market seed money rockstar niche market marketing buzz market.Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market. ",
        "User": "Sal",
        "Date": "22 July 2017"
    },


    {
        "id": 8,
        "title": " strange times We're living some",
        "subtite": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "image": "/images/thumb.jpeg",
        "category": "National",
        "body": " Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift  stealth mass market seed money rockstar niche market marketing buzz market.Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market. ",
        "User": "Sal",
        "Date": "22 July 2017"
    },


    {
        "id": 9,
        "title": "Kafle living some strange times",
        "subtite": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "image": "/images/thumb5.jpeg",
        "category": "International",
        "body": " Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift  stealth mass market seed money rockstar niche market marketing buzz market.Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market. ",
        "User": "Sal",
        "Date": "22 July 2017"
    },



    {
        "id": 10,
        "title": "aarambha some strange times",
        "subtite": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "image": "/images/thumb6.jpeg",
        "category": "International",
        "body": " Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift  stealth mass market seed money rockstar niche market marketing buzz market.Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market. ",
        "User": "Sal",
        "Date": "22 July 2017"
    },


    {
        "id": 11,
        "title": "Mero Heading strange times",
        "subtite": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "image": "/images/thumb7.jpeg",
        "category": "National",
        "body": " Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift  stealth mass market seed money rockstar niche market marketing buzz market.Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market. ",
        "User": "Sal",
        "Date": "22 July 2017"
    },


    {
        "id": 12,
        "title": "Is China planning to recruit Nepalis in PLA",
        "subtite": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "image": "/images/thumb8.jpeg",
        "category": "Sports",
        "body": " Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift  stealth mass market seed money rockstar niche market marketing buzz market.Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market. ",
        "User": "Sal",
        "Date": "22 July 2017"
    },


]
function Author() {
    let { aid } = useParams();
    { var aa = Data.find((abc) => (abc.id) == aid) };
    { var bb = Data.filter((a) => a.category == aa.category) }
    return (
        <div className='container pp'>
            <div className="row">
                <div className="col-lg-2 side col-sm-12 col-md-12 col-12">
                    <ul>
                        <li>Share</li>
                        <li><Link to=""><i class="bi bi-twitter"></i></Link></li>
                        <li><Link to=""><i class="bi bi-facebook"></i></Link></li>
                        <li>Talk</li>
                        <li><Link to="" style={{ color: 'gray' }}>42</Link></li>
                        <li><Link to=""><i class="bi bi-facebook"></i></Link></li>
                        <li><Link to=""><i class="bi bi-whatsapp"></i></Link></li>
                    </ul>
                </div>
                <div className="col-lg-10 right col-sm-12 col-md-12  col-12">
                    <div className="d-flex align-content-center gap-5">
                        <div className="img">
                            <Link to=""> <img className='iconimage1 img-fluid ' src={'/images/demopic/sm.jpeg'} alt="" /></Link>
                        </div>
                        <div className="ss d-flex gap-3 align-content-center">
                            <div className="user">
                                <Link to="" style={{ textDecoration: 'none', color: 'black' }}><p> Sal </p></Link>
                            </div>
                            <div className="b">
                                <span className='follow'>Follow</span><br /><span className='d'>{aa.Date}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-sm-12 col-md-12 col-12">
                            <h1>18 Things You Should Learn Before Moving Into a New Home</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 my-4 col-sm-12 col-md-12 col-12">
                            <img className='w-100 img-fluid' src={aa.image} alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-sm-12 col-md-12 col-12">
                            <p className='fs-5'>{aa.body}</p>
                            <p className='fs-5'>Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.</p>
                            <p className='fs-5'>Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market.</p>
                            <p className='bl fs-5 fst-italic'>Gen-z strategy long tail churn rate seed money channels user experience incubator startup partner network low hanging fruit direct mailing. Client backing success startup assets responsive web design burn rate A/B testing metrics first mover advantage conversion.</p>
                            <p className='fs-5'>Freemium non-disclosure agreement lean startup bootstrapping holy grail ramen MVP iteration accelerator. Strategy market ramen leverage paradigm shift seed round entrepreneur crowdfunding social proof angel investor partner network virality.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-5 last">
                <h3 className='text-decoration-underline'>Related Products</h3>
                {bb.map((b) => (
                    <div className="col-lg-4 border col-sm-12 col-md-12 col-12">
                        <Link to={"/author/" + b.id}><img className='w-100 img-fluid' src={b.image} alt="" /></Link>
                        <Link to={"/author/" + b.id} style={{color:'black', textDecoration:'none'}}><h4>{b.title}</h4></Link>
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-md-2 col-12">
                                <Link to="/postn"> <img className='iconimage' src={'/images/demopic/sm.jpeg'} alt="" /></Link>
                            </div>
                            <div className="col-lg-5 col-sm-4 col-md-5 col-12">
                                <Link to="/postn" style={{ textDecoration: 'none', color: 'black' }}><p className='user'>Sal <br />{b.Date}</p></Link>
                            </div>
                            <div className="col-lg-3 offset-lg-2 col-sm-4 offset-sm-3 col-md-3 offser-md-2 col-12">
                                <Link to="/postn"><i class="plus bi bi-clipboard-plus"></i></Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Author