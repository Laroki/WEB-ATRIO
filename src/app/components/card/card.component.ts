import { Component, Input, OnInit } from '@angular/core';

import { Post } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  
 @Input() post!: Post;
}
