// Import icons from your './index' file
import {
   
   JSIcon,
   ReactIcon,
  
   ReduxIcon,
  
   HTMLIcon,
   CSSIcon,
   ChatGptIcon,
   GitIcon,
   ReactRouterIcon,
   NodeIcon,
   Express,
   BootStrap,
   mui,
   mysql,
   mongo,
   chat,
   ecart,
   blog
 } from './index';
 
 
 import {gmail, SpaceTourism, Windbnb, DashboardAnalytics } from './index';
 

 const paragraphs = {
   intro: `A Certified Full Stack Developer from GUVI,Incubated With IIT Madras.`,
   aboutMe:[ 
     `Hello! My name is Sathish. I hold a Bachelor's degree in Mechanical Engineering and I'm currently expanding my skill set by learning Full Stack Development from Guvi IIT Madras.`,
 
    ` I have hands-on experience as a Full Stack Developer, where I've had the opportunity to work on various projects that allowed me to apply and enhance my coding skills. My mechanical engineering background gives me a unique perspective in problem-solving and attention to detail, which I apply in coding scenarios.`,
 
    ` I'm eager to join a team where I can contribute my skills as a developer and continue to learn and grow in this field. I strongly believe in the transformative power of technology to solve problems and improve lives, and I'm excited to be part of that journey.
   `],
   joke: `✨ Fun Developer Joke: Why did the web developer go broke? Because they lost their domain in a bet!`
 };
 
 
 const techStacks = [
   { name: 'Node js', url: NodeIcon },
   { name: 'Express js', url: Express },
   { name: 'JavaScript', url: JSIcon },
   { name: 'React', url: ReactIcon },
   
   { name: 'Redux Toolkit', url: ReduxIcon },
   { name: 'BootStrap', url: BootStrap },
   { name: 'Material UI', url:mui },
   { name: 'HTML', url: HTMLIcon },
   { name: 'CSS', url: CSSIcon },
   { name: 'MySql', url: mysql },
   { name: 'MongoDB', url: mongo }
 ];
 

 const toolStack = [
   { name: 'Git', url: GitIcon },
   { name: 'ChatGPT', url: ChatGptIcon },
   { name: 'React Router', url: ReactRouterIcon }
 ];
 
 
 const projects = [
   {
     name: 'Gmail Clone',
     imageUrl: gmail,
     liveLink: 'https://gmail-clone96.netlify.app/',
     githubLink: 'https://github.com/Sathishramesh1/GmailClone-FrontEnd.git',
     description: 'Created a Gmail clone web application for email management and communication.'
   },
   {
     name: 'Chat-Byte',
     imageUrl: chat,
     liveLink: 'https://chat-byte.netlify.app/',
     githubLink: 'https://github.com/Sathishramesh1/chat-app-frontend.git',
     description: 'Chat-Byte is real time chat application using socket.io'
   },
   {
     name: 'E-cart',
     imageUrl: ecart,
     liveLink: 'https://ec-cart.netlify.app/',
     githubLink: 'https://github.com/Sathishramesh1/E-cart-frontend.git',
     description: 'Minimalistic E-commerce Application'
   },
   {
     name: 'Blog-Byte',
     imageUrl: blog,
     liveLink: 'https://blog-byte.netlify.app/',
     githubLink: 'https://github.com/Sathishramesh1/blog-frontend.git',
     description: 'Blog-Byte is A simple blog Application'
   }
 ];
 
 export {
   paragraphs,
   techStacks,
   toolStack,
   projects
 };
 