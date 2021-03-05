import { Component } from '@angular/core';
import { Task } from './components/tasks/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Task[] = [
    {title: 'Buy Bread for breakfast', description:'Go to the supermarket and buy the bread along with batter'},
    {title:'Complete the angular material firebase application'}
  ];


}
