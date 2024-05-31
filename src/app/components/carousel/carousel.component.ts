import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  currentIndex: number = 0;
  links = [
    { logo: 'https://res.cloudinary.com/ddss6c7zr/image/upload/v1717004487/my-portfolio-assets/github-svgrepo-com_v8wxvf.svg', url: 'https://github.com/Selelo/' },
    { logo: 'https://res.cloudinary.com/ddss6c7zr/image/upload/v1717004470/my-portfolio-assets/stackoverflow-svgrepo-com_usejpz.svg', url: 'https://stackoverflow.com/users/9581108/coder-kamui/' },
    { logo: 'https://res.cloudinary.com/ddss6c7zr/image/upload/v1717004476/my-portfolio-assets/hashnode-icon-svgrepo-com_sgsdv8.svg', url: 'https://angular-to-bedtime.hashnode.dev/' },
    { logo: 'https://res.cloudinary.com/ddss6c7zr/image/upload/v1717006337/my-portfolio-assets/linkedin_fjbr1s.svg', url: 'https://www.linkedin.com/in/selelo-mogapi/' }
  ];

  prev() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.links.length - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex < this.links.length - 1) ? this.currentIndex + 1 : 0;
  }
}
