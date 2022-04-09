export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    stock: number;
    quantity: number;
}
//Para modelado es recomendable usar una interface
//Para pasar valores a un campo es recomendable usar una clase

