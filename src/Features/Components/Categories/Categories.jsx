import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DASHBOARD } from '../../../Constants/END_POINTS';
import { HashLoader } from 'react-spinners';

export default function Categories() {
  const [categoryList, setCategoryList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function getCategories() {
    setIsLoading(true)
    let { data } = await axios.get(DASHBOARD.categories)
    setIsLoading(false)
    setCategoryList(data.data)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className="row my-3">
      {isLoading ? <div className="vh-100 d-flex justify-content-center align-items-center">
        <HashLoader color='#0aad0a' size={100} />
      </div> : <>
        {categoryList.map((category) => {
          return <div className="col-md-3">
            <img src={category.image} alt={category.name} className='w-100' height={200} />
            <p className='text-main'>{category.name}</p>
          </div>
        })}
      </>
      }
    </div>
  )
}
