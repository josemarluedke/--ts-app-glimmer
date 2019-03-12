import Component from '@glimmer/component';
import { Owner } from '@glimmer/di';

interface Args {
  hello: string;
}

// Type definitions coming from:

// node_modules/@glimmer/component/dist/types/src/component.d.ts


// The following line does not work
// export default class MyComponent extends Component<Args> {

export default class MyComponent extends Component {
  public args!: Args;

  public constructor(owner: Owner, args: Args) {
    super(owner, args);
  }

  didInsertElement() {
    console.log(this.element)
  }
}
