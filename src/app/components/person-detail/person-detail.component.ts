import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-person-detail',
  imports: [CommonModule],
  templateUrl: './person-detail.component.html',
  styleUrl: './person-detail.component.css'
})
export class PersonDetailComponent implements OnInit {
  person: any;

  constructor(private route: ActivatedRoute, private peopleService: PeopleService) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      id = id.trim();
      this.peopleService.getPerson(id).subscribe((data) => {
        this.person = data;
      });
    }
  }

}
