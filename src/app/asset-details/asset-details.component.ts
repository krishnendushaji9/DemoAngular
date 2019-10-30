import { Component, OnInit } from '@angular/core';
import { Asset } from '../asset';
import { AssetsService } from '../assets.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css']
})
export class AssetDetailsComponent implements OnInit {

  adId: number;
  asset : Asset;

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

  list(){
    this.router.navigate(['assets']);
  }
}
