import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfileService {
  async getProfile(profileId) {
    const res = await api.get('api/profiles/' + profileId)
    AppState.profile = new Profile(res.data)
    logger.log(AppState.profile)
  }

}

export const profileService = new ProfileService()