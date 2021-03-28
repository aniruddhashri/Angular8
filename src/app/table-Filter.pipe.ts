import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], value: String) {

    return value ? list.filter(item => item.dishtype === value) : list;
  }

}