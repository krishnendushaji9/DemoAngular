import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Asset } from './asset';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private httpService:HttpClient) { }

  getAsset(adId: number):Observable<any>{
    return this.httpService.get(environment.assetUrl+'/assetbyid/'+adId);
  }

  createAsset(asset:Object):Observable<any>{
    return this.httpService.post(environment.assetUrl+'/insertasset',asset);
  }

  updateAsset(adId:number, asset:Asset):Observable<any>{
    return this.httpService.put(environment.assetUrl+'/updateasset/'+adId,asset);
  }

  deleteAsset(adId:number, asset:Asset):Observable<any>{
    return this.httpService.put(environment.assetUrl+'/disableasset/'+adId,asset);

  }

  getAssetList():Observable<any>{
    return this.httpService.get(environment.assetUrl+'/asset');
  }
}

