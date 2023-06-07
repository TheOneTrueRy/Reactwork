import { AppState } from "../AppState.js"
import { Ad } from "../models/Ad.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class AdsService {
  async getAds() {
    const res = await api.get('api/ads')
    logger.log(res.data)
    AppState.ads = res.data.map(a => new Ad(a))
    logger.log(AppState.ads)
  }

}

export const adsService = new AdsService()