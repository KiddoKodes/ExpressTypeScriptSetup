import user from '../db/models/user';
import makeHelloWorld from './makeHelloWorld';

const HelloWorld = makeHelloWorld({ user });
export { HelloWorld };
