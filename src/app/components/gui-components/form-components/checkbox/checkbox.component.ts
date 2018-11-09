import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector    : 'checkbox',
  	templateUrl : './checkbox.component.html'
})
export class CheckboxComponent{
	@Input() label : string;
	@Input() value : string;
	@Input() name  : string  = '';
	@Input() group : FormGroup = new FormGroup({});

	@Output() valueChange:EventEmitter<String> = new EventEmitter<String>()

	update(value) {
		this.valueChange.emit(value);
	}

	changeCheck(e){
		this.valueChange.emit(e.checked);
	}
}



