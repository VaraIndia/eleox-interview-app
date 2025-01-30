import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-create-person',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-person.component.html',
  styleUrl: './create-person.component.css'
})
export class CreatePersonComponent {
  first_name = '';
  last_name = '';
  email = '';
  job_title = '';
  avatar = '';

  constructor(private peopleService: PeopleService) {}

  createPerson() {
    if (!this.first_name || !this.last_name || !this.email) {
      alert("All fields are required!");
      return;
    }

    const personData = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      job_title: this.job_title,
      avatar: this.avatar || 'https://picsum.photos/120'
    };

    this.peopleService.createPerson(personData).subscribe({
      next: () => {
        alert("Person created successfully!");
        window.location.reload();
      },
      error: () => {
        alert("Error creating person. Try again.");
      }
    });
  }
}
