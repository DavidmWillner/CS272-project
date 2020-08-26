import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanban';

  showVar : boolean = false;
    
  showMe():boolean{
    this.showVar =!this.showVar;
    return this.showVar;
  }



}
