import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Column } from '../../models/column.model';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

   board: Board = new Board('test board', [
     new Column('Ideas',[
       "Some random idea",
       "this is another random idea",
       "build an awesome application"
   ]),
      new Column('Research', ["Lorem Ipsum",
          "foo",
          "things",
          "stuff"
    ]),
    new Column('Todo', ["Lorem Ipsum",
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
    ]),
    new Column('Done', ["Lorem Ipsum",
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
    ])

  ]);

  ngOnInit(): void {
  }

//cdk drag and drop code from https://material.angular.io/cdk/drag-drop/overview


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }



}
