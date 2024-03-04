// Import icons from your './index' file
import {
   TSIcon,
   JSIcon,
   ReactIcon,
   NextJSIcon,
   ReduxIcon,
   TailwindIcon,
   HTMLIcon,
   CSSIcon,
   ChatGptIcon,
   GitIcon,
   ReactRouterIcon,
   NodeIcon
 } from './index';
 
 
 import { DevJobs, SpaceTourism, Windbnb, DashboardAnalytics } from './index';
 

 const paragraphs = {
   intro: `I build clean, responsive, and scalable websites.`,
   aboutMe:[ 
     `Hello! My name is Sathish. I hold a Bachelor's degree in Mechanical Engineering and I'm currently expanding my skill set by learning Full Stack Development from Guvi IIT Madras.`,
 
    ` I have hands-on experience as a Full Stack Developer, where I've had the opportunity to work on various projects that allowed me to apply and enhance my coding skills. My mechanical engineering background gives me a unique perspective in problem-solving and attention to detail, which I apply in coding scenarios.`,
 
    ` I'm eager to join a team where I can contribute my skills as a developer and continue to learn and grow in this field. I strongly believe in the transformative power of technology to solve problems and improve lives, and I'm excited to be part of that journey.
   `],
   joke: `✨ Fun Developer Joke: Why did the web developer go broke? Because they lost their domain in a bet!`
 };
 
 
 const techStacks = [
   { name: 'Node js', url: NodeIcon },
   { name: 'JavaScript', url: JSIcon },
   { name: 'React', url: ReactIcon },
   { name: 'NextJS', url: NextJSIcon },
   { name: 'Redux Toolkit', url: ReduxIcon },
   { name: 'Tailwind', url: TailwindIcon },
   { name: 'HTML', url: HTMLIcon },
   { name: 'CSS', url: CSSIcon }
 ];
 

 const toolStack = [
   { name: 'Git', url: GitIcon },
   { name: 'ChatGPT', url: ChatGptIcon },
   { name: 'React Router', url: ReactRouterIcon }
 ];
 
 
 const projects = [
   {
     name: 'Gmail Clone',
     imageUrl: DevJobs,
     liveLink: 'http://dev-jobs-seven-wine.vercel.app/',
     githubLink: 'https://github.com/emmaGH1/DevJobs',
     description: 'Developed DevJobs, a frontend web application for job listings in the tech industry.'
   },
   {
     name: 'Lite Chat',
     imageUrl: DashboardAnalytics,
     liveLink: 'https://geepayhq-analytics-dashboard.vercel.app/',
     githubLink: 'https://github.com/emmaGH1/geepayhq-analytics-dashboard',
     description: 'Participating in an online hackathon, where I was tasked with creating a visually appealing and responsive design for an analytics dashboard.'
   },
   {
     name: 'E-cart',
     imageUrl: Windbnb,
     liveLink: 'https://wind-bnb-sepia.vercel.app/',
     githubLink: 'https://github.com/emmaGH1/wind-bnb',
     description: 'I built a responsive web application Wind-BnB, that enables users to search and filter through a database of houses for short stays.'
   },
   {
     name: 'Space Tourism',
     imageUrl: SpaceTourism,
     liveLink: 'https://space-tourism-site-psi.vercel.app/',
     githubLink: 'https://github.com/emmaGH1/space_tourism_site',
     description: 'Created a landing page for space tourism.'
   }
 ];
 
 export {
   paragraphs,
   techStacks,
   toolStack,
   projects
 };
 