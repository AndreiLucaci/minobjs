export interface IObjs {
  merge(...items: any[]): any;

  isEmpty(obj: any): boolean;
}

export class Objs implements IObjs {
  public merge(...items: any[]): any {
    return items.reduce((x, y) => (Object.assign(x, y)));
  }

  public isEmpty(obj: any): boolean {
    return obj && typeof obj === 'object' && Object.keys(obj).length === 0;
  }
}
