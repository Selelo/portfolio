import { Component } from '@angular/core';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  works = WORKS;

  viewProject(link: string) {
    window.open(link, '_blank');
  }
}

export const WORKS = [
  {
    title: 'Absa Insurance Self-Service Portal',
    description: `<div>
    <p>The Absa Insurance Self-Service Portal is a user-friendly web application designed for Absa customers to manage their insurance policies online. This convenient platform allows users to:</p>
    <ul>
      <li><b>View and Update Policies</b>: Customers can easily access detailed information about their insurance policies, including coverage details, premium amounts, and renewal dates. They can also make updates to their personal information and policy preferences.</li>
      <li><b>File and Track Claims</b>: The portal streamlines the claims process, enabling users to submit claims online and track their status in real-time, ensuring a hassle-free experience during stressful times.</li>
      <li><b>Make Payments</b>: Users can securely pay their insurance premiums through the portal, with options for one-time payments or setting up automatic payments for added convenience.</li>
      <li><b>Download Documents</b>: Important documents such as policy statements, claims reports, and payment receipts can be downloaded directly from the portal, keeping everything organized and easily accessible.</li>
    </ul>
    <p>This web app is intended for Absa insurance policyholders who seek a straightforward, digital solution to manage their insurance needs anytime, anywhere. It's ideal for individuals who prefer the convenience of handling their insurance matters online rather than through traditional phone calls or in-person visits.</p>
  </div>
  `,
    imageUrl: 'https://res.cloudinary.com/ddss6c7zr/image/upload/v1716991403/my-portfolio-assets/aic_ss_jno3lm.jpg',
    link: 'https://insurance.absa.africa/iss/'
  },
  {
    title: 'Absa Insurance Instant Quote',
    description: `<div>
    <p>The Absa Insurance Instant Quote web application is a fast and efficient tool designed to provide potential customers with insurance quotes in under 60 seconds. This user-friendly platform offers:</p>
    <ul>
      <li><b>Rapid Quotes</b>: By entering minimal information about themselves and their insurance requirements, users receive an instant, personalized insurance quote within seconds, making it quick and convenient.</li>
      <li><b>Comparison of Options</b>: The app presents various coverage options and premium rates, allowing users to compare and select the plan that best suits their needs and budget.</li>
      <li><b>Streamlined Application Process</b>: Satisfied with their quote, users can immediately apply for the insurance policy through the app, ensuring a seamless transition from quote to coverage.</li>
      <li><b>Detailed Product Information</b>: Users can access comprehensive details about different insurance products, including benefits and exclusions, aiding in informed decision-making.</li>
    </ul>
    <p>This web app is intended for potential Absa insurance customers who want a quick and easy way to get insurance quotes. It is ideal for individuals seeking new insurance policies and preferring the convenience and speed of a digital-first solution.</p>
  </div>
  `,
    imageUrl: 'https://res.cloudinary.com/ddss6c7zr/image/upload/v1716991403/my-portfolio-assets/coming_soon_ya7hi3.jpg',
    link: 'https://insurance.absa.africa/iss/instantquote/'
  },
  {
    title: 'InfoByte Technologies',
    description: `<div>
    <p>Infobyte Tech's website, developed using a PHP theme, represents a comprehensive and customized online presence for the company. The development process included:</p>
    <ul>
      <li><b>Customization</b>: The PHP theme was extensively customized to align with Infobyte Tech's branding and functional requirements, creating a unique and engaging user experience.</li>
      <li><b>Database Integration</b>: A MySQL database was integrated and uploaded to manage the website's data efficiently, ensuring smooth performance and reliable data handling.</li>
      <li><b>Deployment</b>: The website was deployed to a cPanel server, leveraging cPanel's robust hosting environment for ease of management and enhanced security.</li>
      <li><b>DNS Management</b>: The process included updating all DNS records and handling domain migration to ensure a seamless transition and minimal downtime, maintaining consistent website accessibility.</li>
    </ul>
    <p>This meticulous development effort showcases my technical capabilities and commitment to delivering high-quality digital solutions. The website serves as a central hub for the company's services, providing valuable information and resources their clients and visitors.</p>
  </div>
  `,
    imageUrl: 'https://res.cloudinary.com/ddss6c7zr/image/upload/v1716991410/my-portfolio-assets/infobyte_ewqhkl.jpg',
    link: 'https://infobytetech.co.za/'
  },
  {
    title: 'White Hat Gaming',
    description: `
  <p>I worked on 21 casinos and Sportsbook apps UI and 2 white label casino for EU and US customers. Also worked on a shared library based on and 14 and PHP for the legacy components. These house the white label parts and allow for full customization and toggling.</p>
<p>Some casinos are:</p>
<ul>
  <li><a href="https://www.casigo.com/">Casigo</a></li>
  <li><a href="https://www.captainspins.com/">CaptainSpins</a></li>
  <li><a href="https://www.vegasloungecasino.com/">VegasLounge</a></li>
  <li><a href="https://www.slotnite.com/">Slotnite</a></li>
  <li><a href="https://www.21casino.com/en/">21casino</a></li>
</ul>
<p>These examples showcase the variety of projects you've been involved in, each with its unique branding and user experience.</p>
<p>Overall, your experience demonstrates a strong understanding of UI development for the online gaming industry, along with the ability to create customizable solutions to meet diverse market needs.</p>
`,
    imageUrl: 'https://res.cloudinary.com/ddss6c7zr/image/upload/v1716991403/my-portfolio-assets/coming_soon_ya7hi3.jpg',
    link: 'https://www.whitehatgaming.com/'
  },
  // Add more projects as needed
];
