import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useCurrentSection(sections) {
    const [currentSection, setCurrentSection] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const section = entry.target.id;
                        setCurrentSection(section);
                        navigate('/section/' + section, { replace: true });
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((sectionId) => {
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                observer.observe(sectionElement);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [sections, navigate]);

    return null;
}

export default useCurrentSection;