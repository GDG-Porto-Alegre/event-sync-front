import { useState } from 'react'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
      </div>
      <h1>EventSync GDG</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}
