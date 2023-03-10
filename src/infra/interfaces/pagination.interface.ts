
export interface IPagination<typeitens>{
    itens: typeitens[]
    totalCount: number
}

export interface IPaginate{
    pageSize: number
    pageIndex: number
}
