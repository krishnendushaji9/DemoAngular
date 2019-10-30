import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../asset';
import { AssetsService } from '../assets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  assets:Observable<Asset[]>
  constructor(private assetsService: AssetsService,
                private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.assets = this.assetsService.getAssetList();
  }

  deleteAsset(adId: number,asset:Asset){
    this.assetsService.deleteAsset(adId,asset)
    .subscribe(
      data =>{
        console.log(data);
        this.reloadData();
      },
      error=> console.log(error));
    }

  assetDetails(adId:number){
    console.log(adId);
    this.router.navigate(['assetdetails',adId]);
  }

  updateAsset(adId:number){
  console.log(adId);
  this.router.navigate(['updateasset',adId]);
  }

}


