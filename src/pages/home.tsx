import { useState } from 'react'

import gdgBracket from '@/assets/gdg.svg'
import { Button } from '@/components/ui/button'

export const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <img alt="GDG Bracket White logo" className="logo" height={'auto'} src={gdgBracket} width={300} />
        <h1 className="text-6xl font-bold">EventSync GDG</h1>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Button onClick={() => setCount((count) => count + 1)} type="button">
          count is {count}
        </Button>
        <p>Aqui foi onde tudo começou...</p>
      </div>
    </div>
  )
}
