import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DASHBOARD } from '../../../Constants/END_POINTS'
import { HashLoader } from 'react-spinners'

export default function Brands() {
  const [brandList, setBrandList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function getBrands() {
    setIsLoading(true)
    let { data } = await axios.get(DASHBOARD.brands)
    setIsLoading(false)
    setBrandList(data.data)
  }

  useEffect(() => {
    getBrands()
  }, [])

  return (
    <div className="row">
      {isLoading ? <div className="vh-100 d-flex justify-content-center align-items-center">
        <HashLoader color='#0aad0a' size={100} />
      </div> : <>
        {brandList.map((brand) => {
          return <div className="col-md-4">
            <img src={brand.image} alt={brand.name} />
            <p>{brand.name}</p>
          </div>
        })}</>
      }
    </div>
  )
}
