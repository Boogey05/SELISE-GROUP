import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = 'Boogey';

  role = 'IT Student & Developer';
  
  location = 'Phuntsholing, Bhutan';

  introduction = 'I enjoy building software, exploring AI and machine learning, and learning new technologies.';

  skills = [
    'HTML',
    'ML',
    'Angular',
    'Python',
    'Docker',
    'Git'
  ];

  email = 'kinleyphuntsho2005@email.com';
}
