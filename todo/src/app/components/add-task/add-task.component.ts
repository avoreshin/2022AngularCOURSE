import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Task} from "../../Task"
import {Subscription} from "rxjs";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>()
  text: string | undefined;
  day: string | undefined;
  reminder: boolean = false;
  showAddTask: boolean | undefined;
  subscription: Subscription | undefined;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(Value => this.showAddTask = Value)
  }

  ngOnInit():void {
  }

  onSubmit(){
    if(!this.text){
      alert ('Please add a task!')
      return
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask)

    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
