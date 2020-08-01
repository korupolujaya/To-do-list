import { Component, OnInit ,HostBinding,HostListener} from '@angular/core';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  todoArray:any=[];
  constructor() { }

  ngOnInit(): void {
    
  }
  AddTodoItem(todo:any){
   
    if(todo.value){
            this.todoArray.push(todo.value);
            todo.value = '';
        }
  }
  // @HostBinding('style.backgroundColor') backgroundcolor = "red";
   
  // @HostListener('mouseenter') OnMouseOver(eventdata:Event) {
  //   this.backgroundcolor= "blue" ;
  //  }
 
  //  @HostListener('mouseleave') OnMouseLeave(eventdata:Event) {
  //   this.backgroundcolor = "yellow" ;
  //  } 

  Edititem(){

  }
  DeleteTodoItem(index:any){
          this.todoArray.splice(index,1);
        }
         
       
  }

  
