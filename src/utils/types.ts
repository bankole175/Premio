export interface ICreateWidget {
  name: string
  width: number
  height: number
  elementList: IElement[]
}

export interface IElement {
  type: string
  value: string
  label: string
}
