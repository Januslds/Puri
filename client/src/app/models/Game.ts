import { Title } from '@angular/platform-browser';

export interface Game {
    id?: number,
    nombre?: string,
    categoria?: string,
    cantidad?: number,
    precio?: number
    fecha_registro?: Date
};