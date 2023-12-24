import React from 'react'
import "./Footer.css";
function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row ff">
                        <div className="col-lg-4 col-sm-12 col-md-6">
                            <p>Copyright © 2018 Your Website Name</p>
                        </div>
                        <div className="col-lg-2 offset-lg-6 text-end col-sm-12 col-md-4 offset-md-2 col-12 lf">
                            <p>MyCompany</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
