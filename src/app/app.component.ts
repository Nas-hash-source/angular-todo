import { Component, Input } from "@angular/core";
import ToDo from "./toDo";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    filterList: Array<any> = ["All", "Active", "Completed"];
    filter: "All" | "Active" | "Completed" = "All";

    toDoList: Array<ToDo> = [];

    get filteredList(): Array<ToDo> {
        if (this.filter === "All") {
            return this.toDoList;
        }
        else if (this.filter === "Active") {
            return this.toDoList.filter((toDo) => !toDo.isComplete);
        }
        else {
            return this.toDoList.filter((toDo) => toDo.isComplete);
        }
        
    }


    addToDo(event: any, todo: string) {
        event.preventDefault();
        let id: number;
        if (this.toDoList.length > 0) {
            id = this.toDoList[this.toDoList.length - 1].id +1;
            this.toDoList = 
            [...this.toDoList, {task: todo, id, isComplete: false}];
        } else {
            this.toDoList = [{task: todo, id: 1, isComplete: false}];
        }
        
    }

    removeToDo(id: number) {
        this.toDoList = this.toDoList.filter(item => id!==item.id);
    }
}