import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService'

class AccountService {
  async editAccount(editable) {
    if (editable.graduted == null) {
      editable.graduated = false
    }
    const res = await api.put('account', editable)
    AppState.account = new Account(res.data)
    logger.log(AppState.account)
  }

  async getAccount() {
    try {
      if (AppState.account) {
        return AppState.account
      }
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
      return AppState.account
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???')
      return null
    }
  }
}

export const accountService = new AccountService()