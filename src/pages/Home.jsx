import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Handshake,
  Factory,
  FlaskConical,
  ShieldCheck,
  MessageSquareText,
  BadgeCheck,
  HeartHandshake,
  Landmark,
  CalendarCheck,
  MapPin,
  LayoutGrid,
  UserCheck,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Eye,
  Target,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import Section from '../components/Section';
import SealBadge from '../components/SealBadge';
import HashLink from '../components/HashLink';
import ContactForm from '../components/ContactForm';
import TherapeuticAreaCard from '../components/TherapeuticAreaCard';
import CardIcon from '../components/CardIcon';
import TickItem from '../components/TickItem';
import { therapeuticAreas } from '../data/therapeuticAreas';
import { products } from '../data/products';
import aboutUsImage from '../assets/photos/about-us.webp';
import qualityIsFirstImage from '../assets/photos/quality-is-first.webp';
import therapeuticAreaImage from '../assets/photos/our-therapeutic-area.webp';
import ourProductsImage from '../assets/photos/our-products.webp';
import partnerUsImage from '../assets/photos/partner-us.webp';
import contactUsImage from '../assets/photos/contact-us.webp';

const WHATSAPP_NUMBER = '917879555517';
const CONTACT_WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Galbha Remedies, I'd like to know more about your products and services."
)}`;

const QUALITY_APPROACH = [
  {
    icon: Handshake,
    title: 'Responsible Partner Selection',
    text: 'We seek manufacturing relationships with organizations demonstrating appropriate infrastructure, technical capabilities and established quality systems.',
  },
  {
    icon: Factory,
    title: 'Standards-Focused Manufacturing',
    text: 'We collaborate with manufacturing facilities operating under applicable pharmaceutical quality and regulatory requirements.',
  },
  {
    icon: FlaskConical,
    title: 'Product Quality Orientation',
    text: 'We focus on building a portfolio where quality, therapeutic relevance and consistency are important considerations.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsible Market Introduction',
    text: 'We believe medicines should be introduced and promoted through disciplined, ethical and professional practices.',
  },
];

const ETHICAL_MARKETING = [
  {
    icon: MessageSquareText,
    title: 'Responsible Communication',
    text: 'Presenting product information appropriately and responsibly.',
  },
  {
    icon: BadgeCheck,
    title: 'Professional Integrity',
    text: 'Building relationships based on honesty, respect and transparency.',
  },
  {
    icon: HeartHandshake,
    title: 'Patient-Centric Thinking',
    text: 'Remembering that every pharmaceutical product ultimately serves a person.',
  },
  {
    icon: Landmark,
    title: 'Long-Term Trust',
    text: 'Building a reputation through consistency rather than promises.',
  },
];

const WHY_US = [
  {
    icon: CalendarCheck,
    title: '18+ Years of Professional Experience',
    text: 'Our foundation comes from more than 18 years of professional and business experience across multiple manufacturing sectors.',
  },
  {
    icon: Factory,
    title: 'Quality-Focused Manufacturing Network',
    text: 'We work with carefully selected manufacturing partners operating under recognized quality and regulatory frameworks, as applicable.',
  },
  {
    icon: ShieldCheck,
    title: 'Ethical Pharmaceutical Approach',
    text: 'We believe sustainable pharmaceutical growth should be built on ethical and responsible practices.',
  },
  {
    icon: MapPin,
    title: 'PAN-India Vision',
    text: 'From our base in Chandigarh, we are developing a network for pharmaceutical marketing, trading, wholesale and third-party manufacturing coordination across India.',
  },
  {
    icon: LayoutGrid,
    title: 'Diverse Therapeutic Portfolio',
    text: 'Our portfolio spans several important therapeutic areas, allowing us to address a broad range of healthcare requirements.',
  },
  {
    icon: UserCheck,
    title: 'Founder-Led Commitment',
    text: 'Galbha Remedies is led by its Founder and Proprietor, Shiv Galbha, bringing direct leadership, professional experience and a long-term vision to the organization.',
  },
];

const SEALS = ['WHO-GMP', 'ISO', 'GLP'];

export default function Home() {
  const location = useLocation();
  const [enquiryPrefill, setEnquiryPrefill] = useState({ type: null, key: 0 });
  const visionMissionRef = useReveal();

  const handlePartnerCta = (event) => {
    event.preventDefault();
    setEnquiryPrefill((prev) => ({ type: 'Distribution Opportunity', key: prev.key + 1 }));
    const target = document.querySelector('#contact');
    target?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    if (!location.hash) return;
    const target = document.querySelector(location.hash);
    if (target) {
      requestAnimationFrame(() =>
        target.scrollIntoView({ behavior: 'auto', block: 'start' })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* 01 — HOME */}
      <Section id="hero" bg="paper" className="hero-section">
        <div className="hero-grid hero-grid--copy-only">
          <div className="hero-copy">
            <span className="eyebrow">Chandigarh-Based Pharmaceutical Company</span>
            <h1>Quality Medicines. Ethical Principles. Trusted Care.</h1>
            <p className="hero-body">
              Galbha Remedies is a quality-focused pharmaceutical company committed to bringing
              reliable, quality-oriented medicines to the healthcare market across India. Founded
              on extensive professional and business experience, we work with carefully selected
              manufacturing partners operating under recognized quality and regulatory standards.
            </p>

            <div className="hero-credentials">
              <span className="hero-credentials__label mono">Recognized Standards</span>
              <div className="seal-row">
                {SEALS.map((seal) => (
                  <SealBadge key={seal} label={seal} />
                ))}
              </div>
            </div>

            <p className="hero-statement">
              Our approach is simple: <strong>Select Responsibly. Promote Ethically. Serve Reliably.</strong>
            </p>

            <div className="hero-ctas">
              <Link to="/products" className="btn btn-primary">
                Explore Our Products <ArrowRight size={16} />
              </Link>
              <HashLink hash="#quality" className="btn btn-secondary">
                Our Commitment to Quality
              </HashLink>
            </div>
          </div>
        </div>
      </Section>

      <div className="stats-bar">
        <div className="container stats-bar__inner">
          <div className="stats-bar__item">
            <span className="stats-bar__number mono">18+</span>
            <span className="stats-bar__label">Years Experience</span>
          </div>
          <div className="stats-bar__item">
            <span className="stats-bar__number mono">{therapeuticAreas.length}</span>
            <span className="stats-bar__label">Therapeutic Areas</span>
          </div>
          <div className="stats-bar__item">
            <span className="stats-bar__number mono">{products.length}+</span>
            <span className="stats-bar__label">Products</span>
          </div>
          <div className="stats-bar__item">
            <span className="stats-bar__number mono">PAN</span>
            <span className="stats-bar__label">India Presence</span>
          </div>
        </div>
      </div>

      {/* 02 — ABOUT */}
      <Section id="about" bg="paper-alt">
        <div className="about-layout">
          <div className="about-copy">
            <h2>Building a Pharmaceutical Company With Purpose</h2>
            <p>
              Galbha Remedies is a <strong>Chandigarh-based pharmaceutical company</strong> engaged
              in ethical pharmaceutical marketing, trading, wholesale operations and third-party
              manufacturing coordination, with a vision to establish a strong{' '}
              <strong>PAN-India presence</strong>.
            </p>
            <p>
              The company has been founded with a clear purpose: to make quality-oriented medicines
              available through responsible sourcing, trusted manufacturing relationships and
              ethical pharmaceutical practices.
            </p>
            <p>We believe that healthcare is ultimately about people.</p>
            <p>
              Every medicine represented by us eventually reaches a patient, and that responsibility
              influences the way we approach our products, manufacturing partners, business
              relationships and market practices.
            </p>
            <p>
              Our aim is to build Galbha Remedies as an organization recognized for:
            </p>
            <div className="chip-row">
              {['Quality', 'Integrity', 'Responsibility', 'Reliability'].map((v) => (
                <span key={v} className="chip">
                  {v}
                </span>
              ))}
            </div>
          </div>
          <div className="about-media">
            <div className="about-media__frame">
              <img src={aboutUsImage} alt="Galbha Remedies pharmaceutical professional illustration" />
            </div>
          </div>
        </div>
      </Section>

      {/* 03 — OUR STORY */}
      <Section id="story" bg="paper">
        <h2>From Diverse Experience to a Focused Pharmaceutical Vision</h2>
        <p>
          Galbha Remedies is the result of a professional journey that has crossed several
          important manufacturing sectors.
        </p>
        <p>
          Our Founder, <strong>Shiv Galbha</strong>, began his professional career as an HR
          professional and has worked with organizations associated with{' '}
          <strong>Textiles, FMCG, Pharmaceuticals, Steel and Agriculture</strong>.
        </p>
        <p>
          Working across these diverse industries provided exposure to much more than human
          resources. It offered a practical understanding of organizational structures, people
          management, operational requirements, business processes, manufacturing environments
          and the challenges involved in running and growing a business.
        </p>
        <p>
          His professional exposure to the pharmaceutical sector also provided an opportunity to
          understand the industry&rsquo;s requirements and challenges more closely.
        </p>
        <p>
          Over time, this experience led to a clear realization:{' '}
          <strong>
            A pharmaceutical organization can create greater value when quality, ethical
            principles and responsible business practices are built into its foundation.
          </strong>
        </p>
        <p>This understanding became the inspiration behind Galbha Remedies.</p>
        <p>
          Today, the company is focused on building a quality-oriented pharmaceutical portfolio
          through carefully selected manufacturing partnerships and responsible ethical
          marketing across India.
        </p>
      </Section>

      {/* 04 — FOUNDER */}
      <Section id="founder" bg="mist" className="founder-section">
        <div className="founder-layout">
          <div
            className="founder-portrait placeholder-frame"
            role="img"
            aria-label="Founder photo placeholder"
          >
            <span className="placeholder-frame__label mono">Founder photo — TBD</span>
          </div>
          <div>
            <h2>Shiv Galbha — Founder &amp; Proprietor</h2>
            <p>
              Galbha Remedies is founded by <strong>Shiv Galbha</strong>, an HR and business
              professional with more than <strong>18 years of professional and business
              experience</strong> across diverse manufacturing sectors.
            </p>
            <p>His professional journey includes experience with organizations associated with:</p>
            <p className="pipe-list">
              {['Textiles', 'FMCG', 'Pharmaceuticals', 'Steel', 'Agriculture'].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </p>
            <p>
              This cross-industry experience has helped him develop a practical understanding of
              people, processes, operational requirements, organizational challenges and business
              relationships.
            </p>
            <p>
              His exposure to different manufacturing environments also provided valuable insight
              into the importance of quality, consistency, efficient operations and responsible
              business practices.
            </p>
            <p>
              With this experience, he identified an opportunity to establish a pharmaceutical
              organization built around a clear set of principles:
            </p>
            <ul className="founder-principles tick-list">
              <TickItem>Quality-oriented products</TickItem>
              <TickItem>Trusted manufacturing partnerships</TickItem>
              <TickItem>Ethical pharmaceutical marketing</TickItem>
              <TickItem>Responsible business practices</TickItem>
              <TickItem>Long-term professional relationships</TickItem>
              <TickItem>Patient-focused thinking</TickItem>
            </ul>
            <p>This vision led to the establishment of <strong>Galbha Remedies</strong>.</p>
            <p>
              The objective is not simply to build another pharmaceutical company, but to build
              an organization whose reputation develops through{' '}
              <strong>consistent quality, responsible practices and the trust it earns over
              time</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* 05 — FOUNDER'S MESSAGE */}
      <Section id="founder-message" bg="paper-alt">
        <h2>A Message From the Founder</h2>
        <blockquote className="founder-letter">
          <p>
            My professional journey has given me the opportunity to work with organizations
            across diverse manufacturing sectors, including Textiles, FMCG, Pharmaceuticals,
            Steel and Agriculture.
          </p>
          <p>
            Working across these industries has helped me understand the importance of people,
            processes, operational discipline, quality and strong business relationships in
            building a sustainable organization.
          </p>
          <p>
            Over the years, my exposure to the pharmaceutical sector also gave me an opportunity
            to understand the industry&rsquo;s requirements and challenges more closely.
          </p>
          <p>
            This experience led me to a simple realization:{' '}
            <strong>
              There is an opportunity to build a pharmaceutical organization where quality,
              ethical principles and responsible business practices are not merely statements,
              but the foundation of the business.
            </strong>
          </p>
          <p>This belief became the inspiration behind Galbha Remedies.</p>
          <p>
            Our objective is to work with carefully selected manufacturing partners, develop
            quality-oriented product portfolios and serve the healthcare market through ethical
            and responsible pharmaceutical practices.
          </p>
          <p>
            I believe that a pharmaceutical company carries a responsibility that goes beyond
            business. Every product ultimately reaches a patient, and that thought should
            influence every decision we make.
          </p>
          <p>
            As we build Galbha Remedies, our focus will remain on creating long-term value
            through <strong>quality, integrity, reliability and trust</strong>.
          </p>
          <p>
            We may measure our growth through business milestones, but ultimately,{' '}
            <strong>our reputation will be built through the trust we earn.</strong>
          </p>
          <footer className="founder-letter__sign">
            — <strong>Shiv Galbha</strong>, Founder &amp; Proprietor, Galbha Remedies
          </footer>
        </blockquote>
      </Section>

      {/* 06 / 07 — VISION / MISSION */}
      <div className="split-section reveal" id="vision-mission" ref={visionMissionRef}>
        <div className="split-panel split-panel--dark on-dark" id="vision">
          <span className="split-panel__icon">
            <Eye size={24} strokeWidth={1.6} aria-hidden="true" />
          </span>
          <h2>Our Vision</h2>
          <p className="split-panel__lead">
            To build a trusted pharmaceutical organization where quality, ethical
            responsibility and healthcare value come together to create lasting confidence
            among patients, healthcare professionals and our partners.
          </p>
          <p>
            We envision Galbha Remedies as a pharmaceutical organization known not only for
            its products, but also for the principles behind them.
          </p>
          <div className="chip-row">
            {['Quality', 'Ethics', 'Trust', 'Growth'].map((v) => (
              <span key={v} className="chip chip--dark">
                {v}
              </span>
            ))}
          </div>
        </div>

        <div className="split-panel split-panel--light" id="mission">
          <span className="split-panel__icon">
            <Target size={24} strokeWidth={1.6} aria-hidden="true" />
          </span>
          <h2>Our Mission</h2>
          <p className="split-panel__lead">
            To responsibly bring quality-oriented medicines to the market through trusted
            manufacturing partnerships, ethical pharmaceutical practices and continuous
            improvement, while keeping patient well-being at the heart of our purpose.
          </p>
          <p>We pursue this mission by:</p>
          <ul className="split-panel__list tick-list">
            <TickItem>Working with carefully selected manufacturing partners.</TickItem>
            <TickItem>Focusing on applicable quality and regulatory standards.</TickItem>
            <TickItem>Building responsible and ethical pharmaceutical practices.</TickItem>
            <TickItem>Developing relevant therapeutic portfolios.</TickItem>
            <TickItem>
              Creating long-term relationships with healthcare professionals and business
              partners.
            </TickItem>
            <TickItem>Expanding our pharmaceutical presence across India.</TickItem>
            <TickItem>Continuously improving our products, processes and capabilities.</TickItem>
          </ul>
        </div>
      </div>

      {/* 08 — QUALITY */}
      <Section id="quality" bg="paper">
        <div className="section-intro">
          <div className="section-intro__text">
            <h2>Quality Is Our Starting Point.</h2>
            <p>
              At Galbha Remedies, we believe that quality should be considered from the very
              beginning of the pharmaceutical journey.
            </p>
            <p>
              We therefore seek to work with carefully selected manufacturing partners that have
              appropriate manufacturing capabilities and operate under recognized quality and
              regulatory frameworks.
            </p>
            <p>
              Depending on the facility and applicable product requirements, our manufacturing
              network includes facilities associated with standards and regulatory frameworks
              such as:
            </p>
            <div className="seal-row">
              {SEALS.map((seal) => (
                <SealBadge key={seal} label={seal} />
              ))}
            </div>
          </div>
          <div className="section-intro__media">
            <div className="section-intro__media__frame">
              <img src={qualityIsFirstImage} alt="Galbha Remedies quality-first pharmaceutical illustration" />
            </div>
          </div>
        </div>

        <p className="section-spacer-top">
          Our approach focuses on responsible partner selection, manufacturing capabilities,
          quality systems, regulatory compliance and consistency.
        </p>

        <h3 className="subsection-heading">Our Quality Approach</h3>
        <ul className="quality-approach-list">
          {QUALITY_APPROACH.map(({ icon: Icon, title, text }, index) => (
            <li className="quality-approach-list__item" key={title}>
              <CardIcon icon={Icon} variant={index % 3} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="closing-statement">
          Our goal is not simply to bring a medicine to the market. Our goal is to build
          confidence in every medicine we represent.
        </p>
      </Section>

      {/* 09 — ETHICAL MARKETING */}
      <Section id="ethical-marketing" bg="mist">
        <h2>Ethical Marketing. Responsible Healthcare.</h2>
        <p>
          Pharmaceutical marketing carries a responsibility that is different from ordinary
          commercial marketing.
        </p>
        <p>
          At Galbha Remedies, we believe communication around medicines should be guided by{' '}
          <strong>
            professional ethics, responsible information and respect for healthcare
            professionals and patients
          </strong>
          .
        </p>
        <p>
          Our approach is focused on building long-term relationships rather than short-term
          business outcomes.
        </p>
        <p>
          We aim to represent our products responsibly and support healthcare professionals
          with appropriate product information while maintaining the highest standards of
          professional conduct applicable to our business.
        </p>

        <h3 className="subsection-heading">For Us, Ethical Marketing Means</h3>
        <div className="card-grid card-grid--4">
          {ETHICAL_MARKETING.map(({ icon: Icon, title, text }, index) => (
            <div className="card" key={title}>
              <CardIcon icon={Icon} variant={index % 3} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <p className="closing-statement">
          For us, trust is not a promotional strategy. It is a business principle.
        </p>
      </Section>

      {/* 10 — THERAPEUTIC AREAS */}
      <Section id="therapeutic-areas" bg="paper-alt">
        <div className="section-intro">
          <div className="section-intro__text">
            <h2>Focused Therapeutic Expertise</h2>
            <p>
              Our pharmaceutical portfolio is being developed across key therapeutic areas with
              the objective of addressing diverse healthcare requirements.
            </p>
          </div>
          <div className="section-intro__media">
            <div className="section-intro__media__frame">
              <img src={therapeuticAreaImage} alt="Galbha Remedies therapeutic areas illustration" />
            </div>
          </div>
        </div>
        <div className="card-grid card-grid--4">
          {therapeuticAreas.map((area, index) => (
            <TherapeuticAreaCard area={area} variant={index % 3} key={area.slug} />
          ))}
        </div>
      </Section>

      {/* 11 — PRODUCTS */}
      <Section id="products-teaser" bg="paper">
        <div className="section-intro">
          <div className="section-intro__text">
            <h2>Quality-Oriented Products Across Key Therapeutic Areas</h2>
            <p>
              We are developing a diversified pharmaceutical portfolio with a focus on{' '}
              <strong>
                therapeutic relevance, quality-oriented manufacturing and responsible
                pharmaceutical marketing
              </strong>
              .
            </p>
            <p>Our product selection is guided by the belief that a strong pharmaceutical portfolio should combine:</p>
            <p className="pipe-list">
              {['Relevant Formulations', 'Responsible Sourcing', 'Quality-Focused Manufacturing', 'Ethical Promotion'].map(
                (s) => (
                  <span key={s}>{s}</span>
                )
              )}
            </p>
            <p>
              As our portfolio expands, we aim to provide healthcare professionals with reliable
              pharmaceutical options across important therapeutic areas.
            </p>
            <Link to="/products" className="btn btn-primary">
              View Our Products <ArrowRight size={16} />
            </Link>
          </div>
          <div className="section-intro__media">
            <div className="section-intro__media__frame">
              <img src={ourProductsImage} alt="Galbha Remedies pharmaceutical products illustration" />
            </div>
          </div>
        </div>
      </Section>

      {/* 12 — WHY GALBHA REMEDIES */}
      <Section id="why-us" bg="mist">
        <h2>Why Choose Galbha Remedies?</h2>
        <div className="card-grid card-grid--3">
          {WHY_US.map(({ icon: Icon, title, text }, index) => (
            <div className="card" key={title}>
              <CardIcon icon={Icon} variant={index % 3} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 13 — PAN-INDIA OPERATIONS */}
      <Section id="pan-india" bg="paper">
        <h2>From Chandigarh to Healthcare Markets Across India</h2>
        <p>
          Based in <strong>Chandigarh</strong>, Galbha Remedies is building its
          pharmaceutical operations with a PAN-India vision.
        </p>
        <p>Our business activities include:</p>
        <p className="pipe-list">
          {[
            'Ethical Pharmaceutical Marketing',
            'Trading & Wholesale',
            'Third-Party Manufacturing Coordination',
            'Pharmaceutical Distribution & Business Partnerships',
          ].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </p>
        <p>
          We aim to develop strong relationships with distributors, stockists, wholesalers,
          healthcare professionals and business partners across India.
        </p>
        <p className="closing-statement">Build locally. Think nationally. Serve responsibly.</p>
      </Section>

      {/* 14 — PARTNER */}
      <Section id="partner" bg="navy" onDark className="partner-section">
        <div className="section-intro section-intro--on-dark">
          <div className="section-intro__text">
            <h2>Let&rsquo;s Build Healthcare Partnerships on Trust.</h2>
            <p>
              We welcome enquiries from organizations and professionals interested in building
              long-term pharmaceutical business relationships with Galbha Remedies.
            </p>
            <p>We welcome enquiries from:</p>
            <p className="pipe-list">
              {[
                'Pharmaceutical Distributors',
                'Stockists & Wholesalers',
                'Healthcare Professionals',
                'Business Partners',
                'Marketing Associates',
              ].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </p>
            <p>We believe successful partnerships are built through:</p>
            <div className="chip-row">
              {['Quality', 'Transparency', 'Professionalism', 'Ethical Practices', 'Mutual Growth'].map((v) => (
                <span key={v} className="chip chip--dark">
                  {v}
                </span>
              ))}
            </div>
            <a href="#contact" onClick={handlePartnerCta} className="btn btn-primary partner-cta">
              Partner With Galbha Remedies <ArrowRight size={16} />
            </a>
          </div>
          <div className="section-intro__media">
            <div className="section-intro__media__frame">
              <img src={partnerUsImage} alt="Galbha Remedies partnership illustration" />
            </div>
          </div>
        </div>
      </Section>

      {/* 15 — CONTACT */}
      <Section id="contact" bg="paper-alt">
        <div className="section-intro">
          <div className="section-intro__text">
            <h2>Connect With Galbha Remedies</h2>
            <p>
              Whether you have a product enquiry, distribution opportunity, business proposal or
              general enquiry, we would be pleased to hear from you.
            </p>
          </div>
          <div className="section-intro__media">
            <div className="section-intro__media__frame">
              <img src={contactUsImage} alt="Galbha Remedies contact support illustration" />
            </div>
          </div>
        </div>

        <div className="contact-layout">
          <div className="contact-info on-dark">
            <h3>Galbha Remedies</h3>
            <p className="contact-info__lead">
              Reach out directly — we&rsquo;re happy to answer product, distribution or
              partnership questions.
            </p>
            <ul className="contact-info__list">
              <li>
                <span className="contact-info__icon">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="contact-info__label mono">Location</span>
                  <span className="contact-info__value">Chandigarh, India</span>
                </span>
              </li>
              <li>
                <span className="contact-info__icon">
                  <Phone size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="contact-info__label mono">Mobile</span>
                  <a href="tel:+917879555517" className="contact-info__value">
                    +91 7879555517
                  </a>
                </span>
              </li>
              <li>
                <span className="contact-info__icon">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="contact-info__label mono">Email</span>
                  <a href="mailto:info@galbharemedies.com" className="contact-info__value">
                    info@galbharemedies.com
                  </a>
                </span>
              </li>
              <li>
                <span className="contact-info__icon">
                  <Globe size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="contact-info__label mono">Website</span>
                  <a href="https://www.galbharemedies.com" className="contact-info__value">
                    www.galbharemedies.com
                  </a>
                </span>
              </li>
            </ul>

            <div className="contact-info__actions">
              <a href="tel:+917879555517" className="btn btn-secondary">
                <Phone size={16} /> Call Now
              </a>
              <a
                href={CONTACT_WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>

          <ContactForm prefill={enquiryPrefill} />
        </div>
      </Section>
    </>
  );
}
