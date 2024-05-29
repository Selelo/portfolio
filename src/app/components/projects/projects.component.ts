import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  works = WORKS;
}

export const WORKS = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    imageUrl: '/assets/screenshot1.png',
    link: 'http://example.com/project1'
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: '/assets/screenshot2.png',
    link: 'http://example.com/project2'
  },
  // Add more projects as needed
];
