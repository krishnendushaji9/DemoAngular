import { Component, OnInit } from '@angular/core';
import { Asset } from '../asset';
import { AssetsService } from '../assets.service';
import { Router } from '@angular/router';
import {  Observable } from 'rxjs';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent implements OnInit {

  asset: Asset = new Asset();
  submitted = false;

  constructor(private assetsService: AssetsService,
    private router: Router) { }

    assets: Observable<Asset[]>; 

  ngOnInit() {
  }
  newAsset(): void {
    this.submitted = false;
    this.asset = new Asset();
    }

   save(){
     this.assetsService.createAsset(this.asset)
     .subscribe(data => console.log(data), error => console.log(error));
     //this.employee = new Employee();
     this.gotoList();
   }
   
   onSubmit(){
     this.submitted = true;
     this.save();
   }

   gotoList(){
     this.assets = this.assetsService.getAssetList();
     this.router.navigate(['/assets']);
   }

}

