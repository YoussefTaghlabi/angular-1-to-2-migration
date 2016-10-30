import { Injectable } from '@angular/core';

@Injectable()
export class NameParserService {
  parse(blobInput: any) {
    let lines = blobInput.split(/\r?\n/);
    lines.forEach((line, idx) => {
      let pieces = line.split('|');
      lines[idx] = {
        email: pieces[0],
        firstName: pieces[1],
        lastName: pieces[2]
      }
    })
    return lines;
  }
}