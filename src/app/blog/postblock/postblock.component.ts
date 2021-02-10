import { Component, OnInit,Input } from '@angular/core';
import { Post } from '../post';
@Component({
  selector: 'app-postblock',
  templateUrl: './postblock.component.html',
  styleUrls: ['./postblock.component.css']
})
export class PostblockComponent implements OnInit {
  @Input()  post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
