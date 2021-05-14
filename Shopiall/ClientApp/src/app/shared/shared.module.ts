import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SidebarComponent],
})
export class SharedModule {}
