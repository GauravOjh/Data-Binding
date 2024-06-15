import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './data-binding/databinding/databinding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatabindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Data-Binding';
}
