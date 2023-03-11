export interface ICreateWidget {
  name: string
  widgetBackground: string
  width: number
  height: number
  elementList: IElement[]
}

export interface IElement {
  type: string
  value: string
  label: string
  inputType?: string
  width?: number
  color?: string
  x?: number
  y?: number
}
