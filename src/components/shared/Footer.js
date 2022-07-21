import React from 'react'
import { Link } from 'react-router-dom';
import openSource from '../../images/open_source.png'

const Footer = () => {
    return (
        <footer class="footer p-10 bg-neutral text-neutral-content">
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://opensource.fb.com/projects/"><img className='w-[320px] h-[80px]' src={openSource} alt="" /></a>
                <p style={{ color: '#999' }} className='text-xl'>Copyright © 2022 Meta Platforms, Inc.</p>
            </div>
            <div>
                <span class="footer-title text-2xl">Docs</span>
                <a class="link link-hover text-xl text-white mt-3">Installation</a>
                <a class="link link-hover text-xl text-white">main concepts</a>
                <a class="link link-hover text-xl text-white">Advanced Guide</a>
                <a class="link link-hover text-xl text-white">API Reference</a>
                <a class="link link-hover text-xl text-white">Hooks</a>
                <a class="link link-hover text-xl text-white">Testing</a>
                <a class="link link-hover text-xl text-white">Contribuiting</a>
                <a class="link link-hover text-xl text-white">FAQ</a>
            </div>
            <div>
                <span class="footer-title text-2xl">Channel</span>
                <a class="link link-hover text-xl text-white mt-3">Github</a>
                <a class="link link-hover text-xl text-white">Stack overflow</a>
                <a class="link link-hover text-xl text-white">Discussion forums</a>
                <a class="link link-hover text-xl text-white">Reactiflux chat</a>
                <a class="link link-hover text-xl text-white">DEV Community</a>
                <a class="link link-hover text-xl text-white">Facebook</a>
                <a class="link link-hover text-xl text-white">Twiter</a>
            </div>
            <div>
                <span class="footer-title text-2xl">Community</span>
                <a class="link link-hover text-xl text-white mt-3">Code of contact</a>
                <a class="link link-hover text-xl text-white">Community Resources</a>
                <a class="link link-hover text-xl text-white">Discussion forums</a>
                <a class="link link-hover text-xl text-white">Reactiflux chat</a>
                <a class="link link-hover text-xl text-white">DEV Community</a>
                <a class="link link-hover text-xl text-white">Facebook</a>
                <a class="link link-hover text-xl text-white">Twiter</a>
            </div>
            <div>
                <span class="footer-title text-2xl">More</span>
                <a class="link link-hover text-xl text-white mt-3">Tutorial</a>
                <a class="link link-hover text-xl text-white">Blog</a>
                <a class="link link-hover text-xl text-white">Acknowledgements</a>
                <a class="link link-hover text-xl text-white">React Native</a>
                <a class="link link-hover text-xl text-white">Privacy</a>
                <a class="link link-hover text-xl text-white">Facebook</a>
                <a class="link link-hover text-xl text-white">terms</a>
            </div>
        </footer>
    );
};

export default Footer;