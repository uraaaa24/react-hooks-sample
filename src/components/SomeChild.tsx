import { Button } from '@mui/material'

type SomeChildProps = {
  showCount: () => void
}

const SomeChild = ({ showCount }: SomeChildProps) => {
  return (
    <>
      <Button variant="outlined" onClick={showCount}>
        <div>SomeChild</div>
      </Button>
    </>
  )
}

export default SomeChild
