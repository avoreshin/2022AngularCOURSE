import {Component, OnInit} from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task-Tracker';
  showAddTask: boolean = true;
  subscription: Subscription | undefined;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(Value => this.showAddTask = Value)
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }

  ngOnInit(): void {
  }
}
