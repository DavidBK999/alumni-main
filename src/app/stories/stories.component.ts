import { Component } from '@angular/core';
import { IStories } from '../stories.model';
import { stories } from '../stories';
import { interviews } from '../stories';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent {
  stories: IStories[];
  interviews: IStories[];
  constructor ()
  {
    this.stories = stories;
    this.interviews = interviews;
  }
}
