import { createElement } from 'lwc';
import MyApp from 'my/app';

const app = createElement('c-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
