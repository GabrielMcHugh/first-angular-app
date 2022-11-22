import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile-component',
  templateUrl: './github-profile-component.component.html',
  styleUrls: ['./github-profile-component.component.css']
})
export class GithubProfileComponentComponent implements OnInit {
  followers: [{
    id: 1,
    name: 'John'
  }, {
    id: 1,
    name: 'John'
  }, {
    id: 1,
    name: 'John'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
