import { Component } from '@angular/core';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  constructor(private service: SharedService) { }

  ngOnInit() {



  }
  data: any; // for pagination
  alldata: number = 0; // for pagination
  pagination: number = 1; // for pagination

  fetchbooks() {
    this.service.getpagebooks(this.pagination).subscribe((res: any) => {
      this.data = res.data;
      this.alldata = res.total;
      console.log(res.total);
    });
  }
  renderPage(event: number) {
    this.pagination = event;
    this.fetchbooks();
  }

}
