export interface NavLinks {
  icon?: string | { svg: string }
  iconBgColor?: string
  badge?:
    | string
    | {
        text?: string
        type?: 'info' | 'tip' | 'warning' | 'danger'
      }
  title: string
  desc?: string
  link: string
}

export interface NavData {
  title: string
  items: NavLinks[]
}