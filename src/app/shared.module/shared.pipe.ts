import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sharedpipe'
})

export class SharedPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    return value;
  }
}
