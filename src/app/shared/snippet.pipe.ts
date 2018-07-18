import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'snippet'})

  export class SnippetPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    let discTeaser = value;
    if(discTeaser.length >= 150){
      
    }
    return discTeaser;
  }
}
