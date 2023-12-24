import { Button } from '@mui/material'

export function Start () {
  return (
    <div>
      <Button onClick={() => { console.log('click') }} variant="contained">
      ¡Empezar el juego!
      </Button>
    </div>
  )
}
