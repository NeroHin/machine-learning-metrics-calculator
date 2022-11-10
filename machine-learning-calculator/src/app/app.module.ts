import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_TW } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ConfusionMatrixInputComponent } from './confusion-matrix-input/confusion-matrix-input.component';
import { ResultTableComponent } from './result-table/result-table.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ConfusionMatrixInputComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzInputNumberModule,
    NzTableModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_TW }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
