import { Component, Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.sass']
})
export class RecentSearchComponent {
  @Input() searchTerm: string | undefined;
  cardDetails = []

  constructor(
    private commonService: CommonService
  ) { }

  makeUnFavOrFav = (selectedRow: any) => {
    if (selectedRow.fullData.favourity) {
      Swal.fire({
        title: 'Are you sure?',
        text: `You want to remove ${selectedRow.city} from your favourite.`,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.value) {
          this.commonService.addOrRemoveFavourityItem(selectedRow.fullData);
          this.getCurrentFavlist();
        }
      });
    } else {
      this.commonService.addOrRemoveFavourityItem(selectedRow.fullData);
      this.getCurrentFavlist();
    }
  }


  getCurrentFavlist = () => {
    let data = localStorage.getItem("savedData")
    if (data)
      this.cardDetails = JSON.parse(data)
  }

  clearAllItem = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to clear all from your recent search.`,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        this.cardDetails = []
      }
    });
  }
  ngOnInit(): void {
    this.getCurrentFavlist();
  }
}
