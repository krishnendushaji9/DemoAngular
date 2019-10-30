import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Asset } from '../asset';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.css']
})
export class UpdateAssetComponent implements OnInit {

  adId: number;
  asset : Asset;

  assets:Observable<Asset[]>


  constructor(private route:ActivatedRoute,private router:Router,
    private assetsService:AssetsService) {}

  ngOnInit() {
    this.asset = new Asset();
    this.adId = this.route.snapshot.params['adId'];

    this.assetsService.getAsset(this.adId)
      .subscribe(data =>{
        console.log(data)
        this.asset= data;
      },error=>console.log(error));

    }

    updateAsset(){
      console.log(this.adId);
      this.assetsService.updateAsset(this.adId,this.asset)
      .subscribe(data =>console.log(data),error=>console.log(error));
      this.asset = new Asset();
      this.gotoList();
    }
  
      onSubmit(){
        this.updateAsset();
  
      }   
    gotoList(){
      this.assets = this.assetsService.getAssetList();
      this.router.navigate(['/employees']);
    }
  }
