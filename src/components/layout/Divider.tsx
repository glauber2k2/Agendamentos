import { FunctionComponent, HTMLAttributes } from 'react'

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  bgTheme: 'light' | 'dark'
}

const Divider: FunctionComponent<DividerProps> = ({ title, bgTheme }) => {
  const color = {
    light: 'black',
    dark: 'bg-white',
  }

  return (
    <div className={`text-white flex items-center gap-4 w-full truncate my-4`}>
      <span className={`${color[bgTheme]} w-full h-0.5`} />
      {title}
      <span className={`bg-${color[bgTheme]} w-full h-0.5`} />
    </div>
  )
}

export default Divider
