import axios from 'axios'
import React from 'react'
import { DASHBOARD } from '../../../Constants/END_POINTS'
import { useQuery } from 'react-query'
import { HashLoader } from 'react-spinners'

export default function Brands() {

  async function getBrands() {
    return await axios.get(DASHBOARD.brands)
  }

  let { data, isLoading, isFetching, isError, refetch } = useQuery('AllBrands', getBrands, {
    // refetchInterval:3000,
    // cacheTime:3000,
    // refetchOnMount:false
  })


  return (
    <div className="row">
      {isLoading ? <div className="vh-100 d-flex justify-content-center align-items-center">
        <HashLoader color='#0aad0a' size={100} />
      </div> : <>
        {data?.data.data.map((brand) => {
          return <div className="col-md-4">
            <img src={brand.image} alt={brand.name} />
            <p>{brand.name}</p>
          </div>
        })}</>
      }
    </div>
  )
}
