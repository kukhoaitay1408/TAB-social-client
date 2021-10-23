import { loginNav, loginResource, loginRoutes } from 'features/user/login/nav'
import {
  newsFeedMenu,
  newsFeedNav,
  newsFeedResource,
  newsFeedRoutes
} from 'features/newsFeed/nav'
import {
  registerNav,
  registerResource,
  registerRoutes
} from 'features/user/register/nav'
import {
  verifyEmailNav,
  verifyEmailResource,
  verifyEmailRoutes
} from 'features/user/verifyEmail/nav'
import {
  profileNav,
  profileResource,
  profileRoutes
} from 'features/profile/nav'
import {
  friendMenu,
  friendNav,
  friendResource,
  friendRoutes
} from 'features/friend/nav'
import {
  friendRequestMenu,
  friendRequestNav,
  friendRequestResource,
  friendRequestRoutes
} from 'features/friendRequest/nav'
import {
  passwordNav,
  passwordResource,
  passwordRoutes
} from 'features/user/password/nav'

export const mainNav = [
  ...loginNav,
  ...registerNav,
  ...verifyEmailNav,
  ...passwordNav,

  ...profileNav,
  ...friendNav,
  ...friendRequestNav,

  ...newsFeedNav
]

export const routes = {
  ...loginRoutes,
  ...registerRoutes,
  ...verifyEmailRoutes,
  ...passwordRoutes,

  ...profileRoutes,
  ...friendRoutes,
  ...friendRequestRoutes,

  ...newsFeedRoutes
}

export const resources = {
  ...loginResource,
  ...registerResource,
  ...verifyEmailResource,
  ...passwordResource,

  ...profileResource,
  ...friendResource,
  ...friendRequestResource,

  ...newsFeedResource
}

export const menu = [...newsFeedMenu, ...friendMenu, ...friendRequestMenu]
