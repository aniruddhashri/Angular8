import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(list: any[], value: [], key: []): any {
      debugger;
    value.forEach((name, index) => {
      if (name) {
        list = list.filter((item) => {
          return (item[key[index]]
            .toString()
            .toLowerCase()
            .indexOf(name) !== -1)
        });
      }
    });
    return list;
  }
}
