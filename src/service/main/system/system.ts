import httpRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return httpRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
