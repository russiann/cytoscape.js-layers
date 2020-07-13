export interface IElementLayerOptions {
  /**
   * selector to determine elements to render
   * @default :visible
   */
  selector: string;
  /**
   * whether to update the collection on each update
   */
  queryEachTime: boolean;
  /**
   * automatically update the layer upon a certain event
   * @default auto = render in case of a queryEachTime else position
   */
  updateOn: 'render' | 'position' | 'none';

  /**
   * whether to check that the element is actually visible
   * @default true
   */
  checkBounds: boolean;
}

export function defaultElementLayerOptions(o?: Partial<IElementLayerOptions>): IElementLayerOptions {
  return {
    selector: ':visible',
    updateOn: o != null && o.queryEachTime ? 'render' : 'position',
    queryEachTime: false,
    checkBounds: true,
  };
}
