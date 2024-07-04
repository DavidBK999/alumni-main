import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStories } from '../stories.model';
import { interviews } from '../stories';

@Component({
  selector: 'app-stories2',
  templateUrl: './stories2.component.html',
  styleUrl: './stories2.component.css'
})
export class Stories2Component {
interviews: IStories[];
interview: IStories;


constructor(private route: ActivatedRoute
){
  this.interviews = interviews;
  const id = +this.route.snapshot.params['id2'];
  this.interview = this.interviews[id];


  
}
}
