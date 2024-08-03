import { useState } from 'react'

import gdgBracket from '@/assets/gdg.svg'
import { Button } from '@/components/ui/button'

export const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <img src={gdgBracket} className="logo" alt="GDG Bracket White logo" width={300} height={'auto'} />
        <h1 className="text-6xl font-bold">EventSync GDG</h1>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>Aqui foi onde tudo começou...</p>
      </div>
    </div>
  )
}
