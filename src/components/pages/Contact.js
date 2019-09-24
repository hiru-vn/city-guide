import React from 'react'
import {Link} from 'react-router-dom'

class Contact extends React.Component {
    render() {
        return (
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1dxzBvpHj1qwNamQ3mzJUl29uvjDEekF1"
                                style={{
                                    border: '0', width: '100%', height: '315px',
                                }} allowFullScreen></iframe>
                        </div>
                        <div className="col-md-5">
                            <h4><strong>Contact us</strong></h4>
                            <form>
                                <div className="form-group">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Name"></input>
                                </div>
                                <div className="form-group">
                                    <input type="email"
                                        className="form-control"
                                        placeholder="Email"></input>
                                </div>
                                <div className="form-group">
                                    <input type="tel"
                                        className="form-control"
                                        placeholder="Phone"></input>
                                </div>
                                <textarea cols="30" rows="3"
                                    placeholder="Message"
                                    className="form-control"></textarea>
                                <Link className="btn btn-outline-primary text-uppercase mt-2">
                                    <i className="fab fa-telegram-plane"></i>
                                    &nbsp;Send
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact