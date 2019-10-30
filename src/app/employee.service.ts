import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService:HttpClient) { }

  getEmployee(id: number):Observable<any>{
    return this.httpService.get(environment.baseUrl+'/employeebyid/'+id);
  }

  createEmployee(employee:Object):Observable<any>{
    return this.httpService.post(environment.baseUrl+'/insertemployee',employee);
  }

  updateEmployee(id:number, employee:Employee):Observable<any>{
    return this.httpService.put(environment.baseUrl+'/update/'+id,employee);
  }

  deleteEmployee(id:number, employee:Employee):Observable<any>{
    return this.httpService.put(environment.baseUrl+'/disable/'+id,employee);

  }
  getEmployeeList():Observable<any>{
    return this.httpService.get(environment.baseUrl+'/employees');
  }
}

