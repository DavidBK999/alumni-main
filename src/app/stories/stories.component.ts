import { Component } from '@angular/core';
import { IStories } from '../stories.model';
import { stories } from '../stories';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent {
  stories: IStories[];
  constructor ()
  {
    this.stories = stories;
  }
}
