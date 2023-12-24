import React from 'react'
import "./Block.css"
import Author from '../Pages/Author';
import { Link, Route, Routes } from 'react-router-dom';
import National from '../Pages/National';
import International from '../Pages/International';
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
function Block(props) {
    var abc = Data.filter((b) => b.category == props.Category);
    return (
        <>
            <div className="container blockmain">
                <div className="row blockhead ">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h4 className='h'>{props.Category}</h4>
                    </div>
                </div>

                <div className="row">

                    {abc.map((a) => (
                        <div className="col-lg-6 col-sm-12 col-md-6 p-4">
                            <div className="row  border">
                                <div className="col-lg-5 col-sm-12">
                                    <Link to={"/author/" + a.id}> <img className='bimage img-fluid' src={a.image} alt="" /></Link>
                                </div>
                                <div className="col-lg-7 col-sm-12 bcont">
                                    <Link to={"/author/" + a.id} style={{ textDecoration: 'none', color: 'black' }}><h4>{a.title}</h4></Link>
                                    <p>{a.subtite}</p>
                                    <div className="row">
                                        <div className="col-lg-2 col-sm-2">
                                            <Link to="/postn"> <img className='iconimage' src={'/images/demopic/sm.jpeg'} alt="" /></Link>
                                        </div>
                                        <div className="col-lg-5 col-sm-8">
                                            <Link to="/postn" style={{ textDecoration: 'none', color: 'black' }}><p className='user'>{a.User}</p></Link> <p>{a.Date}</p>
                                        </div>
                                        <div className="col-lg-3 offset-lg-2  col-sm-2">
                                            <Link to="/postn" ><i class="plus bi bi-clipboard-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Block
