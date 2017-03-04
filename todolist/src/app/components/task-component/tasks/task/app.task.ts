import  {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../../../accessoryClasses/task/Task";
import {TaskManagerService} from "../../../servicies/TaskManagerService";
import {MdDialog} from "@angular/material";

@Component({
  moduleId: module.id,
  selector: 'app-task',
  templateUrl: 'app.task.html',
  styleUrls: ['app.task.css'],
})

export class TaskComponent implements OnInit {
  @Input()
  task: Task;

  constructor(private taskManagerService: TaskManagerService,public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  focusOnEditTaskArea(element){
    element.focus();
  }



  updateText(inputText){
    this.task.title=inputText.value;
    this.taskManagerService.updateTask(this.task);
  }

  getPriorityColor(){//TODO:refactor this code
    switch (this.task.priority){
      case 0:
        return "gray"
      case 1:
        return "red"
      case 2:
        return "orange"
      case 3:
        return "green"
    }
  }

  completeTask(){
    this.taskManagerService.completeTask(this.task);
  }

  undoComplleteTask(){
    this.taskManagerService.undoCompleteTask(this.task);
  }

}
