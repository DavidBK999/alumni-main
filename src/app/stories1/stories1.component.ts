import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStories } from '../stories.model';
import { stories } from '../stories';

@Component({
  selector: 'app-stories1',
  templateUrl: './stories1.component.html',
  styleUrl: './stories1.component.css'
})
export class Stories1Component {
  stories: IStories[];
  story: IStories;
 
  constructor(private route: ActivatedRoute
  ){
    this.stories = stories;
    const id = +this.route.snapshot.params['id'];
    this.story = this.stories[id];
    console.log(stories);
    
  }
}
