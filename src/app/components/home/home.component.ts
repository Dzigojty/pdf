import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private router: Router) {}

  openPdf(pdfName: string) {
    // Переходим на страницу просмотра PDF с параметром
    this.router.navigate(['/pdf-viewer'], { 
      queryParams: { pdf: pdfName } 
    });
  }
}