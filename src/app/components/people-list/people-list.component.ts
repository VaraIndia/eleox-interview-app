import { Component } from "@angular/core";
import { PeopleService } from "../../services/people.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


@Component({
  selector: 'app-people-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
  people: any[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.loadPeople();
  }
  loadPeople() {
    this.peopleService.getPeople().subscribe((data) => {
      this.people = data.people;
    });
  }

  deletePerson(id: string) {
    if (confirm("Are you sure you want to delete this person?")) {
      this.peopleService.deletePerson(id).subscribe({
        next: () => {
          alert("Person deleted successfully!");
          this.loadPeople(); // Reload the list
        },
        error: () => {
          alert("Error deleting person. Try again.");
        }
      });
    }
  }
  openCreateModal() {
    window.location.href = '/create-person';
  }

}
