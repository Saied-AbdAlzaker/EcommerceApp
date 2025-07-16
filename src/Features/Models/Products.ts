export interface AllProducts {
    results: number
    metadata: Metadata
    data: IProducts[]
}

export interface Metadata {
    currentPage: number
    numberOfPages: number
    limit: number
    nextPage: number
}

export interface IProducts {
    sold: number
    images: string[]
    subcategory: Subcategory[]
    ratingsQuantity: number
    _id: string
    title: string
    slug: string
    description: string
    quantity: number
    price: number
    imageCover: string
    category: ICategory
    brand: IBrand
    ratingsAverage: number
    createdAt: string
    updatedAt: string
    id: string
    priceAfterDiscount?: number
    availableColors?: any[]
}

export interface Subcategory {
    _id: string
    name: string
    slug: string
    category: string
}

export interface ICategory {
    _id: string
    name: string
    slug: string
    image: string
}

export interface IBrand {
    _id: string
    name: string
    slug: string
    image: string
}

export interface IProductDetails {
    sold: number
    images: string[]
    subcategory: Subcategory[]
    ratingsQuantity: number
    _id: string
    title: string
    slug: string
    description: string
    quantity: number
    price: number
    imageCover: string
    category: ICategory
    brand: IBrand
    ratingsAverage: number
    createdAt: string
    updatedAt: string
    __v: number
    reviews: any[]
    id: string
}
// 

export type IOrders = Orders[]

export interface Orders {
  shippingAddress?: ShippingAddress
  taxPrice: number
  shippingPrice: number
  totalOrderPrice: number
  paymentMethodType: string
  isPaid: boolean
  isDelivered: boolean
  _id: string
  user: User
  cartItems: CartItem[]
  createdAt: string
  updatedAt: string
  id: number
  __v: number
  paidAt?: string
}

export interface ShippingAddress {
  details: string
  city: string
  phone?: string
  postalCode?: string
}

export interface User {
  _id: string
  name: string
  email: string
  phone: string
}

export interface CartItem {
  count: number
  product: IProducts
  price: number
  _id: string
}







