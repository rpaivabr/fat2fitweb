import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  configForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.configForm = this.fb.group({
      option: this.fb.control('weight'),
      weight: this.fb.control(''),
      date: this.fb.control(''),
    });
  }

  get isWeight(): boolean {
    return this.configForm.controls['option'].value === 'weight';
  }

  changeOption(event: any) {
    const option = event.value;
    this.configForm.patchValue({ option });
  }

  saveConfig(event: Event): void {
    event.preventDefault();
    const value = this.configForm.value;

    this.isWeight ? delete value.date : delete value.weight;

    console.log(value);
  }

}
