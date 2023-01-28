import { Component, EventEmitter, Input, Output } from "@angular/core";
import toDo from "../toDo";

@Component({
    selector: "todo-item",
    templateUrl: "./toDoItem.component.html",
    styleUrls: ['./toDoItem.component.css']
})
export class toDoItem {
    editable: boolean = false;
    @Input() item: toDo;
    @Output() readonly remove = new EventEmitter<toDo>();

    saveItem(event:Event, value: string) {
        event.preventDefault();
        this.item.task = value;
        this.editable = false;
    }
}