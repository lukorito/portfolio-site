import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';


export default () => {

    const data = useStaticQuery(graphql`
        query ProfileImageQuery{
            profileImage: file(relativePath: {eq: "Kelvin_Kitika-4-X3.jpg"}){
                childImageSharp {
                    fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                    } 
                }
            }
        }
    `)

    return (
        <aside className="sidebar">
            <section className="sidebar section">
                <Link to='/'>
                    <Img fixed={data.profileImage.childImageSharp.fixed} className="profile-image"/>
                </Link>
                <div className="name">Kelvin Kitika</div>
                <div className="job-title">Fullstack Javascript Developer</div>
            </section>
            <section className="sidebar section sidebar-section white">
                <nav className="nav">
                    <ul>
                        <Link to='/'>About Me</Link>
                    </ul>
                </nav>
            </section>
            <section className="sidebar section sidebar-section"></section>
        </aside>
        
    )
}

