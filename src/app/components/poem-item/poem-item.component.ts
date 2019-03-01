import { Component, OnInit, Input } from '@angular/core';
import { Poem } from 'src/app/Models/Poem';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-poem-item',
  templateUrl: './poem-item.component.html',
  styleUrls: ['./poem-item.component.css']
})
export class PoemItemComponent implements OnInit {
  @Input() poem: Poem;

  constructor() { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      poem: true,
      'is_liked': this.poem.liked
    }
    return classes;
  }

  onToggle(poem) {
    poem.liked = !poem.liked;
  }
}
