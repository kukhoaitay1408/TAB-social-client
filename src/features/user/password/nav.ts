import { lazy } from 'react'
import { NavigatorParams } from 'Models'
import { createNav } from 'utils/createNav'
import { navName } from 'constants/navName'

const AddPassword = lazy(() => import('./AddPassword'))

export const passwordNavName: string = 'password'

const nav: NavigatorParams[] = [
  {
    component: AddPassword,
    isMenu: false,
    isProtected: true,
    path: `${navName.ADD_PASSWORD}`,
    isAuth: false
  }
]

export const { passwordNav, passwordResource, passwordRoutes, passwordMenu } =
  createNav({
    name: `${passwordNavName}`,
    nav
  })
