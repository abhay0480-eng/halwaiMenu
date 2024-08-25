import React from 'react'
import { useSelector } from 'react-redux'

const PackageDetailPage = () => {
  const count = useSelector((state) => state.package.value)

  return (
    <div>
      {count}
    </div>
  )
}

export default PackageDetailPage