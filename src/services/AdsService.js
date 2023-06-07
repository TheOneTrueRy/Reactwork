import { AppState } from "../AppState.js"
import { Ad } from "../models/Ad.js"
import { api } from "./AxiosService.js"

class AdsService {
  async getAds() {
    const res = await api.get('api/ads')
    AppState.ads = res.data.map(a => new Ad(a))
  }

}

export const adsService = new AdsService()