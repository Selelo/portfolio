import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HeroComponent } from './components/hero/hero.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { HeaderComponent } from './components/header/header.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, ProjectsComponent, HeroComponent, BackToTopComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const heroSection = document.getElementById('hero')?.offsetTop;
      const projectsSection = document.getElementById('projects')?.offsetTop;
      const aboutSection = document.getElementById('about')?.offsetTop;

      if (scrollPosition < heroSection!) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (scrollPosition < projectsSection!) {
        window.scrollTo({ top: heroSection, behavior: 'smooth' });
      } else if (scrollPosition < aboutSection!) {
        window.scrollTo({ top: projectsSection, behavior: 'smooth' });
      }
    }
  }
}
