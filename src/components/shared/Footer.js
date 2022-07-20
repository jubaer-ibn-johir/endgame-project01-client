import React from 'react'
import { Link } from 'react-router-dom';
import openSource from '../../images/open_source.png'

const Footer = () => {
    return (
        <footer className="footer grid-rows-2 p-10 bg-secondary text-white">
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://opensource.fb.com/projects/"><img className='w-[160px] h-[40px]' src={openSource} alt="" /></a>
                <p>Copyright © 2022 Meta Platforms, Inc.</p>
            </div>

            <div>
                <span className="footer-title">CHANNELS</span>
                <a className="link link-hover">GitHub</a>
                <a className="link link-hover">Stack Overflow</a>
                <a className="link link-hover">Discussion Forums</a>
                <a className="link link-hover">Reactiflux Chat</a>
                <a className="link link-hover">DEV Community</a>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Twitter</a>
            </div>
            <div>
                <span className="footer-title">DOCS</span>
                <a className="link link-hover">Installation</a>
                <a className="link link-hover">Main Concepts</a>
                <a className="link link-hover">Advanced Guides</a>
                <a className="link link-hover">API Reference</a>
                <a className="link link-hover">Hooks</a>
                <a className="link link-hover">Testing</a>
                <a className="link link-hover">Contributing</a>
                <a className="link link-hover">FAQ</a>
            </div>
            <div>
                <span className="footer-title">COMMUNITY</span>
                <a className="link link-hover">Code of Conduct</a>
                <a className="link link-hover">Community Recources</a>
            </div>
            <div>
                <span className="footer-title">MORE</span>
                <a className="link link-hover">Tutorial</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Acknowledgements</a>
                <a className="link link-hover">React Native</a>
                <a className="link link-hover">Privacy</a>
                <a className="link link-hover">Terms</a>
            </div>
        </footer>
    );
};

export default Footer;