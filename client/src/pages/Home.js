import React from 'react'
import Layout from '../components/Layout'
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="container text-center my-5">
      <h1>MIT Campus Map</h1>
      <div className="mt-5">
        <h3>Get Started</h3>
        <p>Explore the links below:</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          {/* <Link href="/about" className="btn btn-outline-primary">About Us</Link> */}
          <NavLink to="/register" className="btn btn-primary mr-3">Sign Up</NavLink>
          <NavLink to="/login" className="btn btn-primary">Log in</NavLink>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Home