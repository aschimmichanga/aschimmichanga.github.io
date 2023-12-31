import starMenu from '~/assets/star-menu.svg';
import githubIcon from '~/assets/icons/github.svg';
import resumeIcon from '~/assets/icons/resume.svg';
import linkedinIcon from '~/assets/icons/linkedin.svg';
import { useState } from 'react';

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
    const [isSpinning, setIsSpinning] = useState(false);

    const handleHomeClick = () => {
        setIsSpinning(true); // Start spinning
        window.scrollTo({
            top: 50,
            behavior: 'smooth'
        });

        // Optional: Stop spinning after some time
        setTimeout(() => setIsSpinning(false), 800); // Adjust time as needed
    };
    return (
        <header className="fixed top-0 left-0 w-full z-10 flex justify-between p-3 bg-purple-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 shadow-l">
            <img className={`w-14 h-14 ${isSpinning ? 'home-spin' : ''}`} src={starMenu} alt="Home Star" onClick={handleHomeClick} />
            <div className='flex'>
                <LinkIcon icon={githubIcon} alt="Github" link="https://github.com/aschimmichanga" />
                <LinkIcon icon={resumeIcon} alt="Resume" link="https://drive.google.com/file/d/1unaHFbXkZoGH8EKXN0y0AMp_TF4Pkgum/view?usp=sharing" />
                <LinkIcon icon={linkedinIcon} alt="LinkedIn" link="https://www.linkedin.com/in/srivastava-as/" isLast />
            </div>
        </header>
    );
}

export default Header;
