import gsap from 'gsap';
export const handleScroll = () => {
  if (window.innerWidth > 992) {
    const srctl = gsap.timeline();
    if (window.scrollY > 20) {
      srctl
        .to('.navbar-animate', {
          duration: 0.1,
          backgroundColor: '#fff',
          boxShadow: '0px 5px 5px -5px rgba(0,0,0,0.5)',
        })
        .to('.nav-link', {
          duration: 0.1,
          color: '#818386',
          borderColor: '#818386',
        })
        .to('.navbar-brand', {
          duration: 0.1,
          fill: '#47b9bb',
        })
        .to('.header-icon', {
          duration: 0.1,
          color: '#818386',
        })
        .to('.language-animate', {
          duration: 0.1,
          backgroundColor: '#47b9bb',
        })
        .to('.animate-link', {
          duration: 0.1,
          color: '#eaeaea',
        });
    }

    if (window.scrollY < 20) {
      srctl
        .to('.navbar-animate', {
          duration: 0.1,
          backgroundColor: 'transparent',
          boxShadow: 'none',
        })

        .to('.nav-link', {
          duration: 0.1,
          color: '#eaeaea',
          borderColor: '#eaeaea',
        })
        .to('.navbar-brand', {
          duration: 0.1,
          fill: '#eaeaea',
        })
        .to('.header-icon', {
          duration: 0.1,
          color: '#eaeaea',
        })
        .to('.language-animate', {
          duration: 0.1,
          backgroundColor: 'transparent',
        });
    }
  }
};
