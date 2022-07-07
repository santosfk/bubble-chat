import "styled-components";

import { 
  dark 
} from './themes/dark'

export type ITheme = typeof dark

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
