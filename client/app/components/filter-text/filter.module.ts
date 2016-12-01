import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterComponent } from './filter.component';
import { FilterService } from './filter.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [FilterComponent],
  declarations: [FilterComponent],
  providers: [FilterService]
})
export class FilterModule { }