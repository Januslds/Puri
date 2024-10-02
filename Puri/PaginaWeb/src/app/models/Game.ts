import { Title } from '@angular/platform-browser';

export interface Game {
    id?: number,
    vendedor?: string,
    unidades?: number,
    cliente?: string,
    telefono?: number,
    precio_unitario?: number
    tipo?:string,
    fecha?: Date
};