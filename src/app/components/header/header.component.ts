import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      state('out', style({ opacity: 0, transform: 'translateY(-100%)' })),
      transition('out => in', [
        animate('300ms ease-in')
      ]),
      transition('in => out', [
        animate('300ms ease-out')
      ])
    ])
  ]
})
export class HeaderComponent {
  isVisible = false;
  
  @ViewChild('hero') heroSection!: ElementRef;
  @ViewChild('projects') projectsSection!: ElementRef;
  @ViewChild('about') aboutSection!: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 300;    
  }

  get headerState() {
    return this.isVisible ? 'in' : 'out';
  }

  scrollToSection(section: string) {
    let element: ElementRef;

    switch (section) {
      case 'hero':
        element = this.heroSection;
        break;
      case 'projects':
        element = this.projectsSection;
        break;
      case 'about':
        element = this.aboutSection;
        break;
      default:
        return;
    }

    element.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
