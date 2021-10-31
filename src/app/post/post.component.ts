import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from '../components/card/card.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post!: any;
  
  constructor(private location: Location) {}

  ngOnInit(): void {
    this.post = this.location.getState();
  }
}
