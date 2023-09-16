import { Component, Input, Output , EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('searchTag')
  public inputSearch!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder:string='';

  @Output()
  public myEvent :  EventEmitter<string> = new EventEmitter();

  Capital(b: string){
    // const valor= this.inputSearch.nativeElement.value;
    this.myEvent.emit(b);
    // this.inputSearch.nativeElement.value='';
  }


}
