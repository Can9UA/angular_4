export class Todo {
  id: number;
  constructor(
    public title: string,
    public complited: boolean = false
  ) {}
}
