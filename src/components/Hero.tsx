import React , {useRef, useEffect} from "react"
import {gsap} from "gsap"
import {motion} from "framer-motion"

const Hero : React.FC =() =>{
    const herRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const tagRef = useRef<HTMLDivElement>(null);
    const roleRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{

        const tl = gsap.timeline({delay:0.2});
        tl.to(titleRef.current?.querySelector("#heroLine1"),{
            y:"0%",
            duration:1.1,
            ease:"expo.out"
        }),
        tl.to (titleRef.current?.querySelector("#heroLine2"),{
            y:"0%",
            duration:1.1,
    },[]);

};
