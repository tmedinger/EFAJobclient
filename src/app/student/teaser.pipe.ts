import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teaser'
})
export class TeaserPipe implements PipeTransform {

  jobTeaser: string = "";
    transform(value: any, limit: number = 10, trail: string = '...'): string {
      if (value == null) {
          return "";
      }
      return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
