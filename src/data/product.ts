export type Product = {
    id?: string,
    name: string,
    prize: string
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Pralka',
        prize: '3333.33'
    },
    {
        name: 'Suszarka',
        prize: '44.39'
    },
    {
        id: '3',
        name: 'Monitor',
        prize: '999.99'
    }
]