import { Component, OnInit, Input } from '@angular/core';
import { SortPipe } from 'src/app/pipes/sort.pipe';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.sass'],
  providers: [SortPipe]
})
export class FavouriteComponent implements OnInit {
  @Input() searchTerm: any;
  cardDetails = []

  constructor(
    private lengthPipe: SortPipe,
    private commonService: CommonService
  ) { }

  makeFavToUnfav = (selectedRow: any) => {
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
  }

  ngOnChanges() {
    this.getCurrentFavlist();
  }

  getCurrentFavlist = () => {
    let data = localStorage.getItem("savedData")
    if (data)
      this.cardDetails = this.lengthPipe.transform(JSON.parse(data), "favourites", this.searchTerm)
  }

  removeAllFavItem = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to remove all from your favourite.`,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.cardDetails.forEach((res: any) => {
          this.commonService.addOrRemoveFavourityItem(res.fullData);
          this.getCurrentFavlist();
        })
      }
    });

  }

  ngOnInit(): void {
  }
}
