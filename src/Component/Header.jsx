import React, { useState } from 'react'
import "./Header.css"
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import National from '../Pages/National'
import International from '../Pages/International'
import Author from '../Pages/Author'
import Category from './Categories'
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
function Header() {
    { var abc = Data.filter((b) => b.category) }

    const [searchQuery, setSearchQuery] = useState('');
    const [searchData, setSearchData] = useState([]);
    const handleSearch = (e) => {
        setSearchQuery(e.target.value)

        const filterdData = Data.filter((a) => {
            const name = a.category.toLowerCase();
            const query = searchQuery.toLowerCase();
            return name.includes(query);
        })
        setSearchData(filterdData);
    }

    const clearResults = () => {
        setSearchQuery('');
        setSearchData([]);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link className="navbar-brand fs-1" to="/">Mediumish</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/cat/politics">Politics</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/cat/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cat/national">National</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cat/international">International</Link>
                            </li>

                        </ul>
                        <form className="d-flex search" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search the title" aria-label="Search" value={searchQuery} onChange={handleSearch} />
                            <span className="searchicon"><i class="bi bi-search"></i></span>
                        </form>
                    </div>
                </div>
            </nav>
            <div className='row justify-content-center'>
                <div className="col-lg-4">
                    <ul className='list-group'>
                        {searchData.map((c) => (
                            <li className='list-group-item' key={c.id}> <Link to={`/author/${c.id}`} style={{color:'black', textDecoration:'none'}}>{c.title}</Link></li>
                        ))}

                        {searchData.length > 0 && (
                            <button onClick={clearResults} className='btn btn-primary'>Clear Results</button>
                        )}
                    </ul>
                </div>

            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cat/:cid" element={<Category />} />
                <Route path="/author/:aid" element={<Author />} />
                <Route path="/postn" element={<National />} />
                <Route path="/posti" element={<International />} />
            </Routes>
        </>
    )
}

export default Header
