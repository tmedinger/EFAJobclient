import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snippet'
})
  export class SnippetPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }
}
