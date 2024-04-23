import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-inicial';

  typeInput = 'password';
  password: string = '';
  passwordVisible: boolean = true;



  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    if (this.passwordVisible) {
      (document.getElementById('passwordInput') as HTMLInputElement).type = 'password';
    } else {
      (document.getElementById('passwordInput') as HTMLInputElement).type = 'text';
    }
  }

}
