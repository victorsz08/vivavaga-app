


export interface IUser {
    id?: string
    name: string
    lastname?: string
    email?: string
}

export interface ICompany {
    id: string;
    name: string;
    price_per_hour: number;
    city: string;
    state: string;
}

export interface ILot {
    id: string;
    client: string;
    plate: string;
    price?: string;
    type_vehicle: string;
    status?: string;
    created_at?: string;
    company_lot?:  ICompany;
}