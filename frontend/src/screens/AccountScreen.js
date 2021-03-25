import React from 'react'
import { useStoreState } from 'easy-peasy'
import Typography from '@material-ui/core/Typography'

const AccountScreen = () => {
  const user = useStoreState((state) => state.userData)

  return (
    <div>
      <Typography>{user.name}</Typography>
    </div>
  )
}

export default AccountScreen
