import { Component, OnInit } from '@angular/core';

interface Job {
  id: number;
  title: string;
  firm: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit {
  jobs: Job[] = [
    {
      id: 1,
      title:
        'Development of a Web UI Demonstrator for our Quantum Management System',
      firm: 'AIT AUSTRIAN INSTITUTE OF TECHNOLOGY GMBH',
      description:
        'As Austrias largest research and technology organisation for applied research, we have set ourselves the goal of making substantial contributions to solving the major challenges of our time, climate change and digitisation. To achieve our goals, we rely on our specific research, development and technology competencies, which are the basis of our commitment to excellence in all areas.',
    },
    {
      id: 2,
      title: 'Senior Angular Frontend Entwickler:in Web',
      firm: 'ÖBB',
      description:
        'ÖV Ticketshop GmbH develops and operates THE sales platform for passenger transport throughout Austria and beyond its borders. We, the approximately 200 people who make it possible, take care of the operation and further development of the system as well as the sustainable anchoring of our ticket shop with our customers. We are looking for a dedicated and motivated Senior Angular Frontend Web Developer.',
    },
    {
      id: 3,
      title: '(Senior-) Frontend Developer (m/f/x)',
      firm: 'Dynatrace',
      description:
        'Your work will include tasks such as building and maintaining web applications using React and Node.js in collaboration with cross-functional teams, writing clean, maintainable, and efficient code, optimizing and enhancing the performance and user experience of our applications, and participating in code reviews to provide constructive feedback.',
    },
    {
      id: 4,
      title: 'Software Engineer: Frontend (F/M/D)',
      firm: 'Flinn.ai',
      description:
        'To extend and scale our technical platform, we are looking for an experienced frontend engineer. You will be able to work with one of the most senior early-stage tech teams in Europe and contribute to building a platform with the highest quality standards and a cutting edge tech-stack.',
    },
    {
      id: 5,
      title: 'Frontend Developer',
      firm: 'Noir Consulting',
      description:
        'They are seeking a Front End Developer with experience in some or all of the following technologies (full training will be provided to fill any gaps in your skill set): JavaScript, LESS, SASS, ES6, HTML5, CSS3, Angular, KnockoutJS, BackboneJS, React, VueJS, jQuery, Typescript, and AJAX.',
    },
    {
      id: 6,
      title: 'Frontend Developer',
      firm: 'hello again gmbh',
      description:
        'Our mission at hello again is to support companies to attract and retain customers by creating an easy-to-use loyalty program. Our main goal is to become the leading digital loyalty provider throughout europe. With our loyalty app (including crm) companies gain new and loyal customers. We are proud that already 600 happy customers are using our loyalty app.',
    },
    {
      id: 7,
      title: 'Front End Software Engineer (Vienna)',
      firm: 'Viewpointsystem',
      description:
        'Oper, a European Fintech company, is a leader in cloud-based digital mortgage software. We provide personalized journeys for borrowers and lenders. Opers technology streamlines the mortgage application process, eliminates paperwork, and increases transparency. Currently collaborating with 16 leading financial institutions across 6 European countries, our digital solutions result in a +27% increase in digital customer conversion, +81% faster mortgage decisions, and a 90% first-time-right. Furthermore, the solution integrates seamlessly with core banking, CRM, and online banking systems, offering a compelling and comprehensive service to borrowers.',
    },
    {
      id: 8,
      title: 'Software Frontend Developer',
      firm: 'Vertical Codes GmbH',
      description:
        'At Vertical Codes, we have embarked on a new path in customer support. Our flagship product, "Bonder," an intuitively designed service management solution, is revolutionizing the way companies assist their customers. We are not just a software company; we are innovators redefining customer service.',
    },
  ];

  faqs: FAQ[] = [
    {
      question: 'What are Alumni Career Services?',
      answer:
        ' It is a service to showcase career opportunities upon completing CodeFactory.',
      open: false,
    },
    {
      question: 'How can. stay up to date with Jobs?',
      answer:
        'Just come to the Alumni page every now and then and see whats on offer.',
      open: false,
    },
    { question: 'How are you doing?', answer: ':)', open: false },
    {
      question: 'What Have the Romans Ever Done for Us?',
      answer:
        'All right, but apart from the sanitation, medicine, education, wine, public order, irrigation, roads, the fresh water system and public health, what have the Romans ever done for us?',
      open: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleFaq(faq: FAQ): void {
    faq.open = !faq.open;
  }
}
