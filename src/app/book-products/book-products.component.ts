import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BookHelperService } from '../book-helper.service';

@Component({
  selector: 'app-book-products',
  templateUrl: './book-products.component.html',
  styleUrl: './book-products.component.css'
})
export class BookProductsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  public bookReview: string = 'Welcome to the mystical world of magic !!!!'

  public activated = false;
  
  public numberVal: number = 10;
  @Input('selectedBook') selectedBook!: string;

  constructor(private readonly bookHelperService: BookHelperService,
    private eleRef: ElementRef){}

  public ngOnInit(): void {
    console.log(' ngonInit', );
    const bookReview = [this.bookReview];
    this.bookReview = this.bookHelperService.upperCaseBooks(bookReview)[0];
  }
  public showReview(index: number){

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['selectedBook']) {

      console.info('book product ngOnChanges', changes['selectedBook'])
    }
  }

  ngAfterViewInit(): void {
    console.info('book product after view init')
  }

  ngOnDestroy(): void {
    console.log('Book products component Destroy')
  }

  public toggleActivation() {
    this.activated = !this.activated;
  }
  
}
