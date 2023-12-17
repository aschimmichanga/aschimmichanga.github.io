import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useCurrentSection(sections: string[]) {
    const [currentSection, setCurrentSection] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= 0 && rect.top <= window.innerHeight / 2;
                }
                return false;
            });
            if (current && current !== currentSection) {
                setCurrentSection(current);
                navigate('/section/' + current, { replace: true });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections, currentSection, navigate]);

    return currentSection;
}

export default useCurrentSection;
