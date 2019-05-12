import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-utility-service-update',
  templateUrl: './utility-service-update.component.html',
  styleUrls: ['./utility-service-update.component.css']
})
export class UtilityServiceUpdateComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'Field is required';
  post: any = '';
  states: string[] = ['State 1', 'State2', 'State 3'];
  classes: string[] = ['Class 1', 'Class 2', 'Class 3'];
  ownedByList: string[] = ['Owned By 1', 'Owned By 2', 'Owned BY 3'];
  managedByList: string[] = ['Managed By 1', 'Managed By 2', 'Managed By 3'];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'nickName': [null, [Validators.required]],
      'abbreviation': [null, [Validators.required]],
      'description': [null],
      'state': [null, [Validators.required]],
      'class': [null, [Validators.required]],
      'ownedBy': [null, [Validators.required]],
      'version': [null],
      'wikiAddress': [null],
      'managedBy': [null, [Validators.required]],
      'phase': [null],
      'purpose': [null],
      'startDate': [null],
      'targetDate': [null],
      'releaseDate': [null],
    });
  }

  onSubmit(post) {
    if (this.formGroup.valid) {
      this.post = post;
    }
  }

}
