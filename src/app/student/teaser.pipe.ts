import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teaser'
})
export class TeaserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let discTeaser = "";
    return null;
  }

}
