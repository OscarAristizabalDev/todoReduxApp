import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

// estado inicial es un arreglo vacio de Todo
export const estadoInicial: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Vencer a batman'),
  new Todo('Comprar traje de superman'),
  new Todo('Robar escudo de capita america'),
];
 
const _todoReducer = createReducer(estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo( texto )]),
);

// [] las llaves es para retornar un nuevo arreglo
// ...state, para separar cada uno de los Todo que tenga, para extraerlos de manera independiente
// new Todo( texto ), es para agregar un nuevo Todo al final de ese nueva arreglo que se esta creando
//[...state, new Todo( texto )]

export function todoReducer(state: any, action: any ) {
  return _todoReducer(state, action);
}