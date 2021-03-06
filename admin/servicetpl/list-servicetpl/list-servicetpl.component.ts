import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '@clr/angular';
import { ServiceTpl } from '../../../shared/model/servicetpl';
import { Page } from '../../../../src/app/shared/page/page-state';

@Component({
  selector: 'list-servicetpl',
  templateUrl: 'list-servicetpl.component.html'
})
export class ListServiceTplComponent implements OnInit {

  @Input() serviceTpls: ServiceTpl[];

  @Input() page: Page;
  currentPage: number = 1;
  state: State;

  @Output() paginate = new EventEmitter<State>();
  @Output() delete = new EventEmitter<ServiceTpl>();
  @Output() edit = new EventEmitter<ServiceTpl>();


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  pageSizeChange(pageSize: number) {
    this.state.page.to = pageSize - 1;
    this.state.page.size = pageSize;
    this.currentPage = 1;
    this.paginate.emit(this.state);
  }

  refresh(state: State) {
    this.state = state;
    this.paginate.emit(state);
  }

  deleteServiceTpl(serviceTpl: ServiceTpl) {
    this.delete.emit(serviceTpl);
  }

  editServiceTpl(serviceTpl: ServiceTpl) {
    this.edit.emit(serviceTpl);
  }
}
