import { Component, OnInit } from '@angular/core';

interface Job {
  id: number;
  title: string;
  firm: string;
  location: string;
  website: string;
}

@Component({
  selector: 'app-career2',
  templateUrl: './career2.component.html',
  styleUrls: ['./career2.component.css'],
})
export class Career2Component implements OnInit {
  jobs: Job[] = [
    {
      id: 1,
      title:
        'Development of a Web UI Demonstrator for our Quantum Management System',
      firm: 'AIT AUSTRIAN INSTITUTE OF TECHNOLOGY GMBH',
      location: 'Vienna',
      website: 'https://jobs.ait.ac.at/Job/222475',
    },
    {
      id: 2,
      title: 'Senior Angular Frontend Entwickler:in Web',
      firm: 'ÖBB',
      location: 'Vienna',
      website:
        'https://oebb.csod.com/ux/ats/careersite/4/home/requisition/18757?c=oebb',
    },
    {
      id: 3,
      title: '(Senior-) Frontend Developer (m/f/x)',
      firm: 'Dynatrace',
      location: 'Graz, Linz',
      website:
        'https://careers.dynatrace.com/jobs/9393e8ce-36b1-45c9-887c-11469f2482ea/',
    },
    {
      id: 4,
      title: 'Software Engineer: Frontend (F/M/D)',
      firm: 'Flinn.ai',
      location: 'Vienna',
      website: 'https://flinn.recruitee.com/o/frontend',
    },
    {
      id: 5,
      title: 'Frontend Developer',
      firm: 'Noir Consulting',
      location: 'Vienna',
      website:
        'https://www.noirconsulting.co.uk/job/464597-frontend-developer-vienna-50/',
    },
    {
      id: 6,
      title: 'Frontend Developer',
      firm: 'hello again gmbh',
      location: 'Linz',
      website: 'https://helloagain.bewerberportal.at/Job/230008',
    },
    {
      id: 7,
      title: 'Front End Software Engineer',
      firm: 'Viewpointsystem',
      location: 'Vienna',
      website:
        'https://at.linkedin.com/jobs/softwareingenieur-stellen?trk=expired_jd_redirect&position=1&pageNum=0',
    },
    {
      id: 8,
      title: 'Software Frontend Developer',
      firm: 'Vertical Codes GmbH',
      location: 'Vienna',
      website:
        'https://vertical.codes/karriere-software-frontend-entwickler.html',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
