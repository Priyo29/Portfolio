import React , {useRef, useEffect} from "react"

const ProgressBar: React.FC =()=>{

    const barRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const ProgressBar = barRef.current;

        if(!ProgressBar) return;

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            ProgressBar.style.width = scrollPercent + "%";
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[]);

    return <div className="progress-bar" ref={barRef}></div>

};

export default ProgressBar;