import { NgModule } from '@angular/core';
import { CommpnUiComponent } from './commpn-ui.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { FormHeaderComponent } from './form-header/form-header.component';
import { FormSidenavComponent } from './form-sidenav/form-sidenav.component';
import { FormFooterComponent } from './form-footer/form-footer.component';
import { AppAsideModule, AppBreadcrumbModule, AppFooterModule, AppHeaderModule, AppSidebarModule } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import { AsideLayoutComponent } from './aside-layout/aside-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [CommpnUiComponent, FormLayoutComponent, FormHeaderComponent,
    FormSidenavComponent, FormFooterComponent, AsideLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppSidebarModule,
    AppAsideModule,
    RouterModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,

    AppHeaderModule
  ],
  exports: [CommpnUiComponent, FormLayoutComponent]
})
export class CommpnUiModule { }
