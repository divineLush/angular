import { Component, OnInit } from '@angular/core';
import { Poem } from '../../Models/Poem';
import { PoemService } from '../../services/poem.service';
import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})
export class PoemsComponent implements OnInit {
  poems:Poem[];

  constructor(private poemService: PoemService) { }

  ngOnInit() {
    this.poemService.getPoems().subscribe(poems => {
      this.poems = poems;
    });
  }

  deletePoem(poem: Poem) {
    this.poems = this.poems.filter(foo => foo.liked == true);
  }

}
