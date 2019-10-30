import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ReserveComponent} from './reserve/reserve.component';

import { AuthGuard } from './auth.guard';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';



const routes: Routes = [{path:'',pathMatch:'full',redirectTo:'login'},
                        {path:'login',component:LoginComponent},
                        {path:'admin',component:AdminComponent},
                        {path:'reserve',component:ReserveComponent},

                        {path:'employees',component:EmployeeListComponent},
                        {path:'add',component:CreateEmployeeComponent},
                        {path:'update/:id',component:UpdateEmployeeComponent},
                        {path:'details/:id',component:EmployeeDetailsComponent},

                        {path:'assets',component:AssetListComponent},
                        {path:'addasset',component:CreateAssetComponent},
                        {path:'updateasset/:id',component:UpdateAssetComponent},
                        {path:'assetdetails/:id',component:AssetDetailsComponent}

                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
