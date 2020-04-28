import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ptkdev-instagram-widget-wc',
  templateUrl: './ptkdev-instagram-widget-wc.component.html',
  styleUrls: ['./ptkdev-instagram-widget-wc.component.scss']
})
export class PtkdevInstagramWidgetWcComponent implements OnInit {

  fgInputs: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.fgInputs = this.fb.group({
      accountName: new FormControl('manufrica', [Validators.required]),
      itemsLimit: new FormControl(9, [Validators.required]),
    });
  }

  onChangeInputs() {
    const accountName = this.fgInputs.value.accountName;
    const itemsLimit = this.fgInputs.value.itemsLimit;
    const widget = document.querySelector('ptkdev-instagram-widget');
    // @ts-ignore
    widget.username = accountName;
    // @ts-ignore
    widget.itemsLimit = itemsLimit;
  }
}
