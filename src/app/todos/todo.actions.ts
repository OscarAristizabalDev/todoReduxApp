import { createAction, props } from '@ngrx/store';

// Accion para crear un todo
export const crear = createAction(
    '[TODO] Crea todo',
    props<{texto: string}>()
);