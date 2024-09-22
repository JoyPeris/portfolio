import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  phoneNumber: string = '+254 719 724 004';

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Phone number copied to clipboard: ${text}`);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
}
