import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-menu',
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.css']
})
export class SelectMenuComponent implements OnInit {
  @Output() optionChange = new EventEmitter<Object>();

  constructor() { }

  dropDownOptions: string[] = ['Air', 'Earth', 'Fire', 'Water'];
  showMenu = false;
  currentType = 'Air';

  showOptions(visibility): void {
    this.showMenu = visibility;

    // child -> parent
    this.optionChange.emit(this.currentType);
  }

  ngOnInit() { }

}
