import Component from '@glimmer/component';

interface Args {
  hello: string;
}

// The following line does not work
// export default class MyComponent extends Component<Args> {

export default class MyComponent extends Component {
  public args!: Args;

  public constructor(owner: never, args: Args) {
    super(owner, args);
  }

  didInsertElement() {
    console.log(this.element)
  }
}
