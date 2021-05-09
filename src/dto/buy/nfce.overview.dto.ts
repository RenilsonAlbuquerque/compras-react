import { ProductOverviewDto } from "../product/product.overview.dto";


export interface NfceOverviewDto{
    id:number,
    products:ProductOverviewDto[]
    total:number
}