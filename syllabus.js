// syllabus.js

const chapterContents = {
  chapter1: `
    <h2>Intro to Tech</h2>
    <p>Technology is the sum of techniques, skills, methods, and processes used in the production of goods or services. It's been a transformative force that evolved from simple tools in ancient civilizations to complex machines and algorithms today. From stone tools to quantum computing, technology reflects human ingenuity. The purpose of technology is to make life easier, solve problems, and create new possibilities.</p>
    <p>In this chapter, we cover the basic understanding of what technology is, how it's classified, and how it integrates into dai
    ly life. You'll also understand the dif
    ference between hard and soft technologies and ex
    plore how innovation has driven societal evolution.</p>
    <p>Technology is the art of turning ideas into practical tools. It began when early humans shaped stones into weapons and has now evolved into AI-powered systems running global industries. It bridges imagination and reality, making the impossible possible.</p>

<p>From smartphones to smart homes, tech has redefined convenience. Tasks that once took hours now happen in seconds. Whether it’s ordering food, booking a cab, or finding love (shoutout to dating apps), tech is everywhere.</p>

<p>In education, technology has opened up access to learning for millions. Platforms like Khan Academy and Coursera prove that learning isn't confined to classrooms anymore. With just a phone and WiFi, anyone can level up their knowledge game.</p>

<p>Tech isn’t just gadgets and machines – it's also the systems that keep societies running. Banking, governance, health care, and logistics – all powered by some form of technology working silently in the background.</p>

<p>In short, tech is no longer optional. It’s a lifestyle. Understanding it is like having a superpower in today’s world – and bro, you're about to become a digital superhero 😎🦸‍♂️.</p>

  `,
  chapter2: `
    <h2>History of Tech</h2>
    <p>The journey of technology begins with the discovery of fire and invention of the wheel. Ancient civilizations used irrigation and metallurgy, while the Industrial Revolution brought mechanized production. The 20th century gave rise to electronics, computing, and the Internet, reshaping communication and information access.</p>
    <p>We'll explore timelines from the stone age to silicon valley, understand key inventions, meet legendary inventors like Nikola Tesla and Alan Turing, and discover how wars, needs, and economy shaped the face of modern tech.</p>
    <p>The journey of technology began with basic tools made of stone and wood. These were humanity’s first steps toward innovation. Fire, wheels, and agriculture followed, shaping ancient civilizations into powerhouses of progress.</p>

<p>During the Industrial Revolution, machines replaced manual labor, leading to mass production. Steam engines, textile machines, and ironworks changed everything — including where people lived and how they worked.</p>

<p>Then came the 20th century – the rise of electricity, telephone, radio, and finally, computers. Each invention connected the world more closely, shrinking time and distance like never before.</p>

<p>From the first room-sized computers to today’s pocket-sized smartphones, tech has evolved faster than anything else in history. Moore’s Law (tech doubling every 2 years) isn’t just a theory – it’s our reality.</p>

<p>The history of tech is a history of human resilience, curiosity, and ambition. It’s the story of how we turned dreams into devices – and we’re just getting started 🤖🚀.</p>

  `,
  chapter3: `
    <h2>Future Vision</h2>
    <p>The future of tech looks wild: AI overlords, neural implants, quantum leaps, interplanetary travel, sustainable energy, and a shitload of automation. Think smart toilets giving you health stats and drones delivering your 3 a.m. cravings.</p>
    <p>We'll deep dive into expected breakthroughs, ethical dilemmas, and
     what roles you’ll play in shaping tomorrow’s digital empire.</p>
     <p>The future of tech promises unimaginable advancements. Think flying taxis, holographic phones, AI therapists, and full-blown digital cities — all within reach. Innovation is no longer sci-fi, it’s tomorrow’s headline.</p>

<p>AI is getting smarter, not just learning but adapting. We’re entering an era where machines will understand emotions, creativity, and ethics. Your next best friend might just be a robot with jokes better than yours 💀.</p>

<p>Space tech is another beast. With Elon Musk pushing Mars colonization and NASA planning moon bases, we might soon be booking vacations beyond Earth. The universe is literally becoming the next playground.</p>

<p>Quantum computing will break current limits of processing. Problems that take supercomputers years could be solved in seconds. This will change medicine, climate models, cryptography — everything.</p>

<p>In the future, tech won’t just assist us, it’ll merge with us. Brain-computer interfaces, smart implants, and digital clones might make us half-human, half-code. We’re not just building the future — we’re becoming it 💫🧠.</p>

  `,
  // More chapters below in similar neat format
  chapter4: `
    <h2>HTML & CSS</h2>
    <p>This chapter introduces you to the backbone of the web. HTML (HyperText Markup Language) structures content,
     while CSS (Cascading St
     yle Sheets) makes it se
     xy. Learn tags, elements,
      styling, layouts, and animations that 
      take your pages from basic to badass.</p>
      <p>The future of tech promises unimaginable advancements. Think flying taxis, holographic phones, AI therapists, and full-blown digital cities — all within reach. Innovation is no longer sci-fi, it’s tomorrow’s headline.</p>

<p>AI is getting smarter, not just learning but adapting. We’re entering an era where machines will understand emotions, creativity, and ethics. Your next best friend might just be a robot with jokes better than yours 💀.</p>

<p>Space tech is another beast. With Elon Musk pushing Mars colonization and NASA planning moon bases, we might soon be booking vacations beyond Earth. The universe is literally becoming the next playground.</p>

<p>Quantum computing will break current limits of processing. Problems that take supercomputers years could be solved in seconds. This will change medicine, climate models, cryptography — everything.</p>

<p>In the future, tech won’t just assist us, it’ll merge with us. Brain-computer interfaces, smart implants, and digital clones might make us half-human, half-code. We’re not just building the future — we’re becoming it 💫🧠.</p>

  `,
  chapter5: `
    <h2>JS Basics</h2>
    <p>JavaScript makes websites dynamic and interactive. You’ll learn variables, functions, conditions, loops, DOM manipulation, and how to make websites talk back to users—without punching their screens.</p>
  `,
  chapter6: `
    <h2>Projects</h2>
    <p>Apply your knowledge by creating mini projects: portfolio site, calculator, to-do app, and more. This is where you build like Iron Man, brick by digital brick.</p>
  `,
  chapter7: `
    <h2>AI Overview</h2>
    <p>AI is like giving brains to computers. We explore what AI is, its types (narrow, general, superintelligence), and how it's already making decisions in your YouTube feed and Siri replies. We break down how it's trained and deployed.</p>
  `,
  chapter8: `
    <h2>Machine Learning</h2>
    <p>ML is a subset of AI where machines learn from data. From linear regression to neural nets, you’ll explore algorithms, training models, and building smart systems that evolve over time.</p>
  `,
  chapter9: `
    <h2>AI in Real Life</h2>
    <p>AI is in your phone, hospitals, finance, and even that cute Instagram filter. Understand how it’s transforming industries and the challenges of privacy, bias, and unemployment it can bring.</p>
  `,
  chapter10: `
    <h2>Hacking</h2>
    <p>Explore ethical hacking, penetration testing, types of hackers (black, white, grey), and basic tools like Kali Linux and Wireshark. Learn how hackers think and how systems get pwned.</p>
  `,
  chapter11: `
    <h2>Security Layers</h2>
    <p>Learn how digital systems are protected—from firewalls and antivirus to multi-factor auth and encryption. This chapter covers network security, system hardening, and real-world cyber attack case studies.</p>
  `,
  chapter12: `
    <h2>Preventive Steps</h2>
    <p>Simple steps to stay safe online: using strong passwords, not clicking shady links, and keeping software updated. Also covers awareness of phishing and social engineering.</p>
  `,
  chapter13: `
    <h2>Space Tech</h2>
    <p>From rockets to Mars missions, explore innovations by NASA, SpaceX, ISRO. We cover satellites, rovers, space stations, and the tech behind them.</p>
  `,
  chapter14: `
    <h2>Robotics</h2>
    <p>Learn how bots are made and controlled using sensors, actuators, and microcontrollers. Applications in surgery, war, cleaning, and entertainment included.</p>
  `,
  chapter15: `
    <h2>Smart World</h2>
    <p>Smart cities, homes, and wearables: explore how IoT and AI fuse to make everything responsive—from traffic lights to fridges.</p>
  `,
  chapter16: `
    <h2>Introduction to Cloud</h2>
    <p>Cloud = remote servers. Learn what it means, how services like AWS and Azure work, and the difference between IaaS, PaaS, and SaaS.</p>
  `,
  chapter17: `
    <h2>Cloud Storage</h2>
    <p>Understand how data is stored, accessed, and secured in the cloud. Topics include redundancy, backup systems, and sync services like Google Drive.</p>
  `,
  chapter18: `
    <h2>Cloud Security</h2>
    <p>Security measures unique to cloud—shared responsibility models, encryption in transit and at rest, and identity access management.</p>
  `,
  chapter19: `
    <h2>Introduction to Blockchain</h2>
    <p>Learn what blocks and chains really are. Understand decentralization, hashing, mining, and why blockchain is tamper-proof.</p>
  `,
  chapter20: `,
    <h2>Cryptocurrency</h2>
    <p>Dive into Bitcoin, Ethereum, and other altcoins. Understand wallets, exchanges, volatility, and the tech behind mining and trading.</p>
  `,
  chapter21: `
    <h2>Blockchain in Finance</h2>
    <p>Discover how blockchain is revolutionizing banking, remittance, identity verification, and fraud prevention in financial sectors.</p>
  `,
  chapter22: `
    <h2>What is IoT?</h2>
    <p>IoT connects physical objects to the internet. Learn how devices collect and exchange data using sensors, chips, and cloud APIs.</p>
  `,
  chapter23: `
    <h2>Applications of IoT</h2>
    <p>Explore IoT use-cases in agriculture, healthcare, transportation, and factories. Automation and data-driven systems are game changers.</p>
  `,
  chapter24: `
    <h2>IoT in Smart Homes</h2>
    <p>Think smart lights, fridges, and thermostats. This chapter shows how IoT enables control and monitoring of your home from anywhere.</p>
  `
};

function loadContent(chapterId) {
  const contentArea = document.getElementById("content-area");
  contentArea.innerHTML = `<div class='card'>${chapterContents[chapterId]}</div>`;
}

function toggleUnit(unitId) {
  const element = document.getElementById(unitId);
  element.style.display =
    element.style.display === "none" || !element.style.display ? "block" : "none";
} 