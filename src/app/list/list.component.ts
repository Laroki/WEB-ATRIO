import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public posts = [
    { id : 1, label : "Mon titre", content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, similique? Doloribus dicta esse tenetur accusantium sunt eveniet distinctio ducimus quas a, inventore fugiat, et ullam deleniti nisi. Nihil, sunt vitae!" },
    { id : 2, label : "Mon titre", content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, similique? Doloribus dicta esse tenetur accusantium sunt eveniet distinctio ducimus quas a, inventore fugiat, et ullam deleniti nisi. Nihil, sunt vitae!" },
    { id : 3, label : "Mon titre", content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, similique? Doloribus dicta esse tenetur accusantium sunt eveniet distinctio ducimus quas a, inventore fugiat, et ullam deleniti nisi. Nihil, sunt vitae!" },
    { id : 4, label : "Mon titre", content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, similique? Doloribus dicta esse tenetur accusantium sunt eveniet distinctio ducimus quas a, inventore fugiat, et ullam deleniti nisi. Nihil, sunt vitae!" },
    { id : 5, label : "Mon titre", content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, similique? Doloribus dicta esse tenetur accusantium sunt eveniet distinctio ducimus quas a, inventore fugiat, et ullam deleniti nisi. Nihil, sunt vitae!" },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
