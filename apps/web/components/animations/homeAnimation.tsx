import { gsap } from 'gsap';

export const animateHomepage = (
    containerRef: React.RefObject<HTMLDivElement>,
    titleRef: React.RefObject<HTMLHeadingElement>,
    subtitleRef: React.RefObject<HTMLHeadingElement>,
    paragraphRef: React.RefObject<HTMLParagraphElement>,
    buttonRef: React.RefObject<HTMLButtonElement>
) => {

    gsap.set([titleRef.current, subtitleRef.current, paragraphRef.current, buttonRef.current], {
        opacity: 0,
        y: 50
    });

 
    const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 }
    });

 
    tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        skewY: 0
    })
        .to(subtitleRef.current, {
            opacity: 1,
            y: 0,
            stagger: 0.1
        }, "-=0.8")
        .to(paragraphRef.current, {
            opacity: 1,
            y: 0
        }, "-=0.6")
        .to(buttonRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "elastic.out(1, 0.5)",
            duration: 0.6
        }, "-=0.4");

 
    gsap.to(titleRef.current, {
        backgroundPositionX: "100%",
        duration: 10,
        repeat: -1,
        ease: "none"
    });


    buttonRef.current?.addEventListener('mouseenter', () => {
        gsap.to(buttonRef.current, {
            scale: 1.05,
            boxShadow: "0 8px 25px -5px rgba(226, 212, 187, 0.4)",
            duration: 0.3
        });
    });

    buttonRef.current?.addEventListener('mouseleave', () => {
        gsap.to(buttonRef.current, {
            scale: 1,
            boxShadow: "0 4px 6px -1px rgba(226, 212, 187, 0.1)",
            duration: 0.3
        });
    });

    return () => {
        gsap.killTweensOf([titleRef.current, subtitleRef.current, paragraphRef.current, buttonRef.current]);
        buttonRef.current?.removeEventListener('mouseenter', () => { });
        buttonRef.current?.removeEventListener('mouseleave', () => { });
    };
};