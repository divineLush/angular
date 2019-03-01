import { Component, EventEmitter, Output } from '@angular/core';
import { Poem } from './Models/Poem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Today\'s Poetry';

  @Output() deletePoem: EventEmitter<Poem> = new EventEmitter();

  onDelete(poem: Poem) {
      this.deletePoem.emit(poem);
  }
}
