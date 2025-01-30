import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = 'interview';
  password = 'eleox';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        if (response.access_token) {
        console.log("Login successful! Token:", response.access_token);
        this.authService.saveToken(response.access_token);
        this.router.navigate(['/people']);
        }else {
          this.errorMessage = "Invalid credentials!";
        }
      },
      error: (err) => {
        console.error("Login failed!", err)
        this.errorMessage = 'Invalid credentials!';
      }
    });
  }
}


