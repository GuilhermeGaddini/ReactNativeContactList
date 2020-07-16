export const ADD_CONTATO = 'ADD_CONTATO';

export const addContato = (nome, telefone) => {
    console.log('Action Log | nome, telefone: ', nome, telefone);
    return {
        type: ADD_CONTATO, dadosContato: { nomeContato: nome, telefone: telefone }
    }
}