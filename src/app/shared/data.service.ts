import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [{
      title: 'Title 1',
      complited: false
    }, {
      title: 'Title 2',
      complited: false
    }, {
      title: 'Title 3',
      complited: false
    }, {
      title: 'Title 4',
      complited: false
    }];

    return {todos: todos};
  }
}
