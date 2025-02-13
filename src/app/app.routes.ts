import { Routes } from '@angular/router';
import { TemplateFormValidationComponent } from './topics/template-form-validation/template-form-validation.component';
import { ReactiveFormValidationComponent } from './topics/reactive-form-validation/reactive-form-validation.component';
import { ControlFlowComponent } from './topics/control-flow/control-flow.component';
import { MasterComponent } from './components/master/master.component';
import { UserComponent } from './components/user/user.component';
import { CustomerComponent } from './components/customer/customer.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full',
  },
  {
    path: 'templateFormValidation',
    component: TemplateFormValidationComponent,
  },
  {
    path: 'reactiveFormValidation',
    component: ReactiveFormValidationComponent,
  },
  {
    path: 'control-flow',
    component: ControlFlowComponent,
  },
  {
    path: 'master',
    component: MasterComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
];
