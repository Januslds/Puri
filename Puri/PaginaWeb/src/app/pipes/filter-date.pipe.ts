import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterById'
})
export class FilterByIdPipe implements PipeTransform {
  transform(items: any[], startId: number, endId: number): any[] {
    if (!items) {
      return [];
    }
    if (startId == null || endId == null) {
      return items;
    }
    return items.filter(item => {
      const itemId = item.id; // Asegúrate de que el ID esté presente en los elementos y sea un número
      return itemId >= startId && itemId <= endId;
    });
  }
}
