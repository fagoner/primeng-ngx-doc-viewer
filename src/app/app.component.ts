import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng-ngx-doc-viewer';
  pdfOption: string = "https://www2.cs.arizona.edu/~mercer/Presentations/18-BinaryTrees.pdf";

  displayMaximizable: boolean;

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

}
