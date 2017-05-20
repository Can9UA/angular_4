import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [{
      id: 0,
      title: 'Title 1',
      complited: false
    }, {
      id: 1,
      title: 'Title 2',
      complited: false
    }, {
      id: 2,
      title: 'Title 3',
      complited: false
    }, {
      id: 3,
      title: 'Title 4',
      complited: false
    }];

    return {todos: todos};
  }
}
