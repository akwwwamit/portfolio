import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email: string = 'akwwwamit@gmail.com';
  linkedIn:string='https://www.linkedin.com/in/amit-y-30a80483/';
  gitHub:string='https://github.com/akwwwamit';
  twittr:string='https://x.com/akwwwamit';
  facebook:string='https://www.facebook.com/amitkumaryadavtamkuhiroad?mibextid=ZbWKwL';
  resume:string='https://docs.google.com/document/d/1uDCYfQQ1tSrEif3mjdvScccDHnQMqV0-/edit?usp=drive_link&ouid=107916554056205880053&rtpof=true&sd=true';
}
