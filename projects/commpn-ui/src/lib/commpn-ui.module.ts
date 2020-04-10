import { NgModule } from '@angular/core';
import { CommpnUiComponent } from './commpn-ui.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { FormHeaderComponent } from './form-header/form-header.component';
import { FormSidenavComponent } from './form-sidenav/form-sidenav.component';
import { FormFooterComponent } from './form-footer/form-footer.component';
import { AppAsideModule, AppBreadcrumbModule, AppFooterModule, AppHeaderModule } from '@coreui/angular';



@NgModule({
  declarations: [CommpnUiComponent, FormLayoutComponent, FormHeaderComponent, FormSidenavComponent, FormFooterComponent],
  imports: [
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule
  ],
  exports: [CommpnUiComponent]
})
export class CommpnUiModule { }
