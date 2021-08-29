import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { OperationstockComponent } from './operationstock/operationstock.component';
import { StockComponent } from './stock.component';
import { StockRoutingModule } from './stock-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArticleComponent,
    OperationstockComponent,
    StockComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    StockRoutingModule
  ]
})
export class StockModule { }
