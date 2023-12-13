import starMenu from '~/assets/star-menu.svg';
import githubIcon from '~/assets/icons/github.svg';
import resumeIcon from '~/assets/icons/resume.svg';
import linkedinIcon from '~/assets/icons/linkedin.svg';
import { Component } from 'react';
import { Link } from 'react-router-dom';

interface LinkIconProps {
    icon: string;
    alt: string;
    link: string;
    isLast?: boolean;
}

function LinkIcon({ icon, alt, link, isLast = false }: LinkIconProps) {
    const className = "btn btn-square btn-ghost px-2 w-14 h-14" + (isLast ? '' : ' mr-4');
    return (<a href={link} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={alt} className={className} />
    </a >);
}

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-10 flex justify-between p-3 bg-purple-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 shadow-l">
            <img src={starMenu} alt="Home Star" className="w-14 h-14" />
            <div className='flex'>
                <LinkIcon icon={githubIcon} alt="Github" link="https://github.com/aschimmichanga" />
                <LinkIcon icon={resumeIcon} alt="Resume" link="https://drive.google.com/file/d/1RPuiWhxQBH7IhH3rD-0iev792K4hgTSD/view?pli=1" />
                <LinkIcon icon={linkedinIcon} alt="LinkedIn" link="https://www.linkedin.com/in/srivastava-as/" isLast />
            </div>
        </header>
    );
}

export default Header;
