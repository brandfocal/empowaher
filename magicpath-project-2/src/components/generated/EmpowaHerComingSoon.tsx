import { useEffect } from 'react';
import { ArrowUpRight, Download, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
const programmeItems = [{
  id: 'dates',
  number: '01',
  label: 'DATES',
  value: '29–31 October 2026',
  revealDelay: '0ms'
}, {
  id: 'venue',
  number: '02',
  label: 'VENUE',
  value: 'EmpowaWorx House, Randburg, Johannesburg',
  revealDelay: '60ms'
}, {
  id: 'format',
  number: '03',
  label: 'FORMAT',
  value: 'Three-day, multi-track leadership and opportunity experience',
  revealDelay: '120ms'
}, {
  id: 'audience',
  number: '04',
  label: 'AUDIENCE',
  value: 'Emerging women leaders, graduates, professionals, entrepreneurs, executives and aspiring board members aged 18–35',
  revealDelay: '180ms'
}, {
  id: 'delegate-model',
  number: '05',
  label: 'DELEGATE MODEL',
  value: 'Selected and vetted through a curated nomination process involving 200 leading organisations',
  revealDelay: '240ms'
}, {
  id: 'nominating-network',
  number: '06',
  label: 'NOMINATING NETWORK',
  value: 'Leading brands and organisations across industries, communities, academia, multinationals, foundations and civic organisations',
  revealDelay: '300ms'
}, {
  id: 'core-outcome',
  number: '07',
  label: 'CORE OUTCOME',
  value: 'A high-potential leadership pipeline connected to capability, capital, careers, global exposure and board opportunity',
  revealDelay: '360ms'
}];
function SocialIcons() {
  const socialLinkClasses = 'flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white ring-ring transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2';
  return <div className="hidden items-center gap-2 sm:flex">
      <a href="#" className={socialLinkClasses} aria-label="EmpowaHer on LinkedIn">
        <Linkedin className="h-4 w-4" strokeWidth={1.5} />
      </a>
      <a href="#" className={socialLinkClasses} aria-label="EmpowaHer on Instagram">
        <Instagram className="h-4 w-4" strokeWidth={1.5} />
      </a>
      <a href="#" className={socialLinkClasses} aria-label="EmpowaHer on Twitter">
        <Twitter className="h-4 w-4" strokeWidth={1.5} />
      </a>
      <a href="#" className={socialLinkClasses} aria-label="EmpowaHer on Facebook">
        <Facebook className="h-4 w-4" strokeWidth={1.5} />
      </a>
      <a href="#" className={socialLinkClasses} aria-label="EmpowaHer on YouTube">
        <Youtube className="h-4 w-4" strokeWidth={1.5} />
      </a>
    </div>;
}
export function EmpowaHerComingSoon() {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      revealElements.forEach(element => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });
    revealElements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }
    const heroImg = document.getElementById('hero-parallax-img');
    if (!heroImg) {
      return;
    }
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.35;
      heroImg.style.transform = `translateY(${scrollY * speed}px) scale(1.15)`;
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <main className="min-h-screen w-full bg-background font-body text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col">
        {/* Hero Content */}
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Navigation */}
          <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-3 px-4 pb-6 pt-6 text-white sm:px-6 md:px-12">
            <div className="flex items-center gap-2 font-heading text-[1rem] font-black leading-none tracking-[-0.02em] text-white">
              <span className="flex h-8 w-8 items-center justify-center bg-primary text-[1rem] font-black leading-none text-primary-foreground" aria-hidden="true">
                <span>E</span>
              </span>
              <div className="flex flex-col leading-none">
                <span>
                  <span>Empowa</span>
                  <span>HER</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[0.625rem] font-semibold uppercase tracking-[0.12em] sm:gap-6 sm:text-[0.6875rem]">
              <a href="#programme" className="block rounded-full border-2 border-white/30 px-4 py-2 font-black text-white ring-ring transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:px-6">
                <span>Programme Detail</span>
              </a>
              <SocialIcons />
            </div>
          </header>

          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <img id="hero-parallax-img" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=85" alt="Women leaders collaborating in a bright contemporary workplace" className="h-full w-full object-cover object-center will-change-transform" style={{
            transform: 'translateY(0) scale(1.15)'
          }} onError={event => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=85';
          }} />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.08)_100%)]" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-5 px-5 pb-10 sm:px-8 sm:pb-14 md:px-12 md:pb-16 lg:px-16 lg:pb-14">
            <div className="hero-reveal flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[0.5625rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:px-4 sm:text-[0.625rem] sm:tracking-[0.15em]" style={{
            animationDelay: '0ms'
          }}>
              <span className="flex h-2 w-2 items-center justify-center" aria-hidden="true">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span>Official Website Under Construction</span>
              <span className="mx-1 h-1 w-1 rounded-full bg-white/70 sm:mx-2" />
              <span>Launching Soon</span>
            </div>

            <div className="hero-reveal flex flex-wrap items-center gap-0 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-white/80 sm:tracking-[0.16em] lg:tracking-[0.22em] [font-variant-caps:all-small-caps]" style={{
            animationDelay: '60ms'
          }}>
              <span>EmpowaHer™ Leadership Programme</span>
              <span className="mx-3 inline-block h-3 w-px bg-white/40 align-middle" aria-hidden="true" />
              <span className="rounded-full bg-primary px-2 py-0.5 text-primary-foreground [font-variant-numeric:tabular-nums]">Summit 2026</span>
            </div>

            <div className="grid w-full grid-cols-1 items-end gap-y-6 text-left lg:grid-cols-[2fr_1.2fr_1fr] lg:gap-x-12">
              <div className="hero-reveal flex flex-col border-white/15 lg:border-r lg:pr-8" style={{
              animationDelay: '120ms'
            }}>
                <h1 className="font-heading text-[clamp(2.5rem,4.5vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-white [text-wrap:balance]">
                  <span>THE EMPOWAHER™</span>
                  <br />
                  <span>EXPERIENCE</span>
                </h1>
                <div className="hero-reveal mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start" style={{
                animationDelay: '300ms'
              }}>
                  <button className="empowaher-primary-cta flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-primary-foreground ring-ring transition-transform duration-150 ease-out active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
                    <span>Download Programme (PDF)</span>
                  </button>
                  <button className="empowaher-secondary-cta flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm ring-ring transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
                    <span>Download Prospectus</span>
                  </button>
                </div>
              </div>

              <div className="hero-reveal border-white/15 lg:border-r lg:pr-8" style={{
              animationDelay: '180ms'
            }}>
                <h2 className="font-heading text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.25] tracking-[-0.01em] text-white/80 [text-wrap:balance]">
                  <span>A Three-Day Leadership Experience for Africa's Next Generation of Women Leaders (18–35)</span>
                </h2>
              </div>

              <div className="hero-reveal" style={{
              animationDelay: '240ms'
            }}>
                <p className="font-body text-[0.875rem] font-normal leading-[1.65] text-white/60 [text-wrap:pretty]">
                  <span>EmpowaHer™ Leadership Summit — The Future Is Female™ is a three-day leadership experience designed to prepare Africa's next generation of women leaders to compete, lead and succeed across business, government, entrepreneurship, civil society and the boardroom.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Detail Section */}
      <section id="programme" className="flex min-h-screen flex-col border-t-4 border-primary bg-background text-foreground lg:flex-row [font-kerning:normal]">
        <div className="flex min-h-screen w-full flex-col lg:min-h-[800px] lg:flex-row">
          <aside className="relative order-2 flex w-full flex-col bg-background p-5 lg:sticky lg:top-0 lg:order-1 lg:h-screen lg:min-h-[520px] lg:w-[40%] lg:self-start lg:p-10">
            <figure className="relative aspect-[4/3] min-h-0 flex-1 overflow-hidden rounded-2xl lg:aspect-auto">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" alt="Professional African woman in business attire holding a portfolio outside a modern glass building" className="h-full w-full rounded-2xl object-cover object-top" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" aria-hidden="true" />
            </figure>

            <p className="mt-4 text-right font-body text-[0.5rem] font-medium uppercase tracking-[0.08em] text-foreground/30">
              <span>Produced by EmpowaWorx™</span>
            </p>
          </aside>

          <div className="order-1 flex flex-1 flex-col border-foreground/10 lg:order-2 lg:border-l">
            <div className="reveal border-b border-foreground/10 px-5 py-8 lg:px-12 lg:pb-14 lg:pt-12">
              <div className="mb-3 border-l-2 border-primary pl-3 text-[0.5625rem] font-bold uppercase tracking-[0.25em] text-primary [font-variant-numeric:tabular-nums]">
                <span>2026 SUMMIT OVERVIEW</span>
              </div>
              <h2 className="mb-2 font-heading text-[clamp(2rem,_3.5vw,_3rem)] font-black uppercase leading-[1.1] tracking-[-0.02em] text-foreground [text-wrap:balance]">
                <span>PROGRAMME DETAIL</span>
              </h2>
              <p className="mb-5 max-w-[42ch] font-body text-[0.875rem] font-normal leading-[1.6] text-muted-foreground">
                <span>Seven pillars of leadership, connection and opportunity</span>
              </p>
              <button className="empowaher-primary-cta inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[0.625rem] font-bold uppercase tracking-[0.1em] text-primary-foreground transition-transform duration-150 ease-out active:scale-[0.97] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto">
                <Download className="h-4 w-4" />
                <span>Download Programme (PDF)</span>
              </button>
            </div>

            <div className="flex flex-col" aria-label="Programme detail pillars">
              {programmeItems.map(item => {
              const isCoreOutcome = item.id === 'core-outcome';
              return <article key={item.id} className="programme-row reveal group relative flex w-full cursor-default flex-row items-start gap-4 border-b border-l-2 border-b-foreground/10 border-l-transparent bg-transparent px-5 py-6 transition-colors duration-300 ease-out lg:gap-8 lg:px-12 lg:py-10 lg:pl-[calc(3rem-2px)] lg:pr-12" style={{
                transitionDelay: item.revealDelay
              }}>
                  <span className="programme-row-number mt-[-0.5rem] w-[56px] shrink-0 select-none font-heading text-[3.5rem] font-black leading-none text-foreground opacity-[0.07] lg:mt-[-0.75rem] lg:w-[80px] lg:text-[5rem] [font-variant-numeric:tabular-nums]" aria-hidden="true">
                    <span>{item.number}</span>
                  </span>
                  <div className="flex flex-1 flex-col gap-1 pt-1">
                    <h3 className="programme-row-label font-heading text-[0.5625rem] font-bold uppercase tracking-[0.18em] text-primary/80 transition-colors duration-300 ease-out [font-variant-caps:all-small-caps]">
                      <span>{item.label}</span>
                    </h3>
                    <p className={`programme-row-value font-body text-[0.9375rem] leading-[1.55] text-foreground transition-colors duration-300 ease-out [text-wrap:pretty] ${isCoreOutcome ? 'font-bold' : 'font-semibold'}`}>
                      <span>{item.value}</span>
                    </p>
                  </div>
                </article>;
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Info Section */}
      <section className="bg-[#3f3f3f] px-5 pb-12 text-accent-foreground sm:px-6 md:px-10 md:pb-16 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 border-t border-white/15 pt-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 lg:pt-16">
            {/* About */}
            <div className="reveal" style={{
            transitionDelay: '0ms'
          }}>
              <div className="mb-3 border-l-2 border-primary pl-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-primary">
                <span>01 — About</span>
              </div>
              <h3 className="mb-5 font-heading text-[clamp(1.5rem,_2.5vw,_2rem)] font-black uppercase leading-[1.15] tracking-[-0.01em] text-white">
                <span>The Future Is Female™</span>
              </h3>
              <p className="mb-8 font-body text-[0.9375rem] font-normal leading-[1.65] text-white/60 md:max-w-[42ch]">
                <span>EmpowaHer™ equips and elevates young African women leaders with executive mentorship, actionable masterclasses, and strategic networks to compete and lead across business, government, and the boardroom.</span>
              </p>
              <div className="flex flex-col gap-2.5 text-[0.625rem] font-bold uppercase tracking-[0.12em] text-white/50">
                <a href="#" className="flex items-center gap-1 hover:text-primary">
                  <span>Download Programme (PDF)</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-primary">
                  <span>Download Prospectus (PDF)</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="reveal" style={{
            transitionDelay: '80ms'
          }}>
              <div className="mb-3 border-l-2 border-primary pl-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-primary">
                <span>02 — Contact</span>
              </div>
              <h3 className="mb-5 font-heading text-[clamp(1.5rem,_2.5vw,_2rem)] font-black uppercase leading-[1.15] tracking-[-0.01em] text-white">
                <span>Start A Conversation.</span>
              </h3>
              <div className="mb-5">
                <div className="text-[1.125rem] font-black text-white">
                  <span>Doric Sithole</span>
                </div>
                <div className="text-[0.5625rem] font-bold uppercase tracking-[0.18em] text-primary">
                  <span>Managing Executive of EmpowaHer</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 font-body text-[0.875rem] font-normal leading-[1.55] text-white/60 [font-variant-numeric:tabular-nums]">
                <a href="mailto:doric@empowaworx.co.za" className="flex items-center gap-3 hover:text-primary">
                  <Mail className="h-4 w-4 shrink-0 text-primary/60" />
                  <span>doric@empowaworx.co.za</span>
                </a>
                <a href="tel:+27786489522" className="flex items-center gap-3 hover:text-primary">
                  <Phone className="h-4 w-4 shrink-0 text-primary/60" />
                  <span>+27 (0) 78 648 9522</span>
                </a>
                <a href="tel:+27114827256" className="flex items-center gap-3 hover:text-primary">
                  <Phone className="h-4 w-4 shrink-0 text-primary/60" />
                  <span>+27 (0) 11 482 7256</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                  <span>EmpowaWorx House, 364 Pine Avenue, Ferndale, Randburg 2194</span>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="reveal md:col-span-2 lg:col-span-1" style={{
            transitionDelay: '160ms'
          }}>
              <div className="mb-3 border-l-2 border-primary pl-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-primary">
                <span>03 — Follow Us</span>
              </div>
              <h3 className="mb-5 font-heading text-[clamp(1.5rem,_2.5vw,_2rem)] font-black uppercase leading-[1.15] tracking-[-0.01em] text-white">
                <span>Stay Connected.</span>
              </h3>
              <p className="mb-6 font-body text-[0.9375rem] font-normal leading-[1.65] text-white/60 md:max-w-[42ch]">
                <span>Follow EmpowaWomen and meet the women engineering what comes next.</span>
              </p>
              <div className="flex items-center gap-2">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors duration-200 hover:border-white/40 hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="EmpowaHer on LinkedIn">
                  <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors duration-200 hover:border-white/40 hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="EmpowaHer on Instagram">
                  <Instagram className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors duration-200 hover:border-white/40 hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="EmpowaHer on Twitter">
                  <Twitter className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors duration-200 hover:border-white/40 hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="EmpowaHer on Facebook">
                  <Facebook className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors duration-200 hover:border-white/40 hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="EmpowaHer on YouTube">
                  <Youtube className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-5 pb-6 pt-8 text-accent-foreground md:px-12 lg:px-16 lg:pb-10 lg:pt-12" style={{
      backgroundColor: '#3f3f3f'
    }}>
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-3 text-left text-[0.5625rem] font-semibold uppercase tracking-[0.12em] text-accent-foreground md:flex-row md:items-center [font-variant-numeric:tabular-nums]">
          <div>
            <span>© 2026 EMPOWAHER • AN EMPOWAWORX INITIATIVE • OFFICIAL WEBSITE LAUNCHING SOON.</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1 transition-colors hover:text-primary">
            <span>— EMPOWERING WOMEN. ENGINEERING THE FUTURE.</span>
            <ArrowUpRight className="h-3 w-3" />
          </div>
        </div>
      </footer>
    </main>;
}