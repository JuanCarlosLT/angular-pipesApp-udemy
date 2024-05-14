import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  nameLower: string = 'carlos';
  nameUpper: string = 'CARLOS';
  fullName: string = 'jUaN CArLoS';
  customDate: Date = new Date();
}
