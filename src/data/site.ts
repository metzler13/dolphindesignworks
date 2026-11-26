// All of the homepage's editable copy lives here so it can be changed without touching layout code.
import type { ImageMetadata } from 'astro';
import vgm from '../assets/uploads/2026-07-vgm_th-scaled.jpg';
import pluggedin from '../assets/uploads/2026-09-pluggedin-th.png';
import vschoa from '../assets/uploads/2025-09-vschoa-2025-th-scaled.png';
import xtreme from '../assets/uploads/2025-09-xtremelimo_v2-th-scaled.png';
import clean from '../assets/uploads/2025-09-completelyclean_th-scaled.png';
import raybar from '../assets/uploads/2025-09-raybarco-th-scaled.png';
import jlawn from '../assets/uploads/2025-09-jlawcare-th-scaled.png';
import emraxx from '../assets/uploads/2026-04-emraxx-v4-th.png';
import pnrc from '../assets/uploads/2026-10-pnrc-miami-26_th-scaled.png';
import ffg from '../assets/uploads/2026-03-ffg_v2_th.png';
import stjohns from '../assets/uploads/2026-03-stjohns_th.png';

export const site = {
  name: 'Dolphin Design Works',
  title: 'Dolphin Design Works - Innovative Website Solutions',
  description:
    'Affordable, professional web design for Ohio small businesses, churches, and nonprofits. Websites, hosting, daily backups, and ongoing support from Pickerington, Ohio.',
  url: 'https://dolphindesignworks.com',
  owner: 'Rick Metzler',
  email: 'rick@dolphindesignworks.com',
  phone: '614.524.4430',
  phoneHref: 'tel:+16145244430',
  location: 'Pickerington, Ohio',
  facebook: 'https://facebook.com/dolphindesign',
  facebookHandle: '@dolphindesign',
  // Contact form: paste a Web3Forms access key here to use Web3Forms (works on any host, e.g. Cloudflare).
  // Leave empty to use Netlify Forms instead (only works when hosted on Netlify).
  web3formsKey: '',
  analytics: {
    ga4: 'G-LV537LZB1M',
    metaPixel: '965510615821434',
  },
};

export const nav = [
  { label: 'About', href: '/#who' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#how' },
  { label: 'Work', href: '/#projects' },
  { label: 'Testimonials', href: '/#clients' },
  { label: 'Articles', href: '/blog-articles/' },
];

export const heroPoints = ['Local Ohio Business', 'Daily Website Backup', 'Web Hosting Services'];

export type IconName = 'code' | 'layout' | 'gem' | 'cart' | 'cloud' | 'chart' | 'pencil' | 'network' | 'rocket';

export const services: { title: string; text: string; icon: IconName }[] = [
  { title: 'Web development', icon: 'code', text: 'Build responsive, fast, and modern websites that turn visitors into customers.' },
  { title: 'UI/UX design', icon: 'layout', text: 'We craft intuitive, human-centered interfaces that make every click feel natural.' },
  { title: 'Branding', icon: 'gem', text: 'Define your visual identity with design that connects emotionally and communicates clearly.' },
  // TODO(owner): on the old site this card reused the UI/UX text word for word; replace with e-commerce copy if wanted.
  { title: 'E-commerce solutions', icon: 'cart', text: 'We craft intuitive, human-centered interfaces that make every click feel natural.' },
  { title: 'Cloud hosting', icon: 'cloud', text: 'Reliable, scalable, and lightning-fast — keep your business online, always.' },
  { title: 'SEO optimization', icon: 'chart', text: 'Boost visibility, climb rankings, and drive targeted traffic to your site.' },
];

export const process: { title: string; text: string; icon: IconName; points: string[] }[] = [
  {
    title: 'Planning',
    icon: 'pencil',
    text: 'Based on our planning discussion, we will provide you with a detailed estimate for your review, ensuring that both parties are aligned with the desired project scope and timeline.',
    points: ['Project Consultation', 'Clear Scope Definition', 'Requirements Gathering'],
  },
  {
    title: 'Design & Development',
    icon: 'network',
    text: "I will craft your custom website with modern design principles, ensuring it's both beautiful and functional across all devices and browsers.",
    points: ['Custom Responsive Design', 'Modern User Interface', 'Performance Optimization'],
  },
  {
    title: 'Launch & Support',
    icon: 'rocket',
    text: 'We handle the complete launch process and provide ongoing support to ensure your website continues to serve your business goals effectively.',
    points: ['Domain & Hosting Setup', 'Ongoing Maintenance', 'Technical Support'],
  },
];

export const projects: { name: string; domain: string; image: ImageMetadata }[] = [
  { name: 'Plugged In Study', domain: 'pluggedin.study', image: pluggedin },
  { name: 'Video Game Missions', domain: 'videogamemissions.com', image: vgm },
  { name: 'Joint Pediatric Nephrology Meeting', domain: 'pnrc.miami', image: pnrc },
  { name: 'Emraxx Services, LLC', domain: 'emraxxservices.com', image: emraxx },
  { name: 'Forward Financial Group', domain: 'forwardfinancialgroup.com', image: ffg },
  { name: "St John's Lutheran", domain: 'stjohnslinnville.org', image: stjohns },
  { name: 'Villages at Sycamore Creek HOA', domain: 'vschoa.com', image: vschoa },
  { name: 'Xtreme Limo, LLC', domain: 'xtremelimo.com', image: xtreme },
  { name: 'Completely Clean', domain: 'completelycleancarpet.com', image: clean },
  { name: 'Ray Bar Co.', domain: 'raybarco.com', image: raybar },
  { name: "J's Lawn Care", domain: 'jlawncareinc.com', image: jlawn },
];

export const testimonials = [
  {
    quote:
      'Our company had a great experience working with Dolphin Design Works. Rick provided a prompt and detailed estimate of work, which we believed was fairly priced. Although our own content creation and review process took longer than expected, the team at Dolphin Design was very patient with us. Whenever we requested updates during development, they were completed within a day. We appreciated that they allowed us to pay half upfront and half upon completion of the project. We are pleased with the finished website, and would highly recommend Dolphin Design Works to anyone in need of professional web design services.',
    name: 'Joel Beyer',
    role: 'Forward Financial Group',
  },
  {
    quote:
      'Rick with Dolphin Design Works is great to work with! He helped bring our business website up to par, and has great patience and pride in what he does.',
    name: 'Rick Epling',
    role: 'Owner, Completely Clean Carpet',
  },
  {
    quote:
      'I have used Rick at Dolphin Design Works for multiple website projects, and my expectations for every step of our work together were exceeded. Unlike prior experiences with programmers, Rick is quick to respond to my requests. His quotes are fair, and the end product offered a level of creativity that I didn’t possess. I thoroughly enjoyed working with the folks at Dolphin Design Works.',
    name: 'Fernando Crosa',
    role: 'Owner, Xtreme Limo Columbus',
  },
  {
    quote:
      'Working with Rick/Dolphin Design is like sitting down for coffee with a best friend you haven’t seen in years; you just know that they “get you”. He asks the right questions, and professionally challenges your preconceived ideas all with the goal to make your website look and function as it should.',
    name: 'Corinna Bowers',
    role: 'Executive Director, Pediatric Nephrology Research Consortium',
  },
  {
    quote:
      'Working with Rick Metzler at Dolphin Design Works was as good as it gets when it comes to web designing. He was fast at building and responsive when I had questions. His solutions were refreshingly simple and creative. We had a web-site built and running in an unbelievably short amount of time. Rick is professional, personable, and will also work at your pace. I would recommend Dolphin Design Works to anyone looking for professional experience and a quality product.',
    name: 'Glenn Mellott',
    role: "Pastor, St. John's Free Lutheran Church - Newark, OH",
  },
];

export const whyChoose = ['Free Consultation', 'Transparent, Affordable Pricing', 'Local Ohio Business', 'Ongoing Support'];
