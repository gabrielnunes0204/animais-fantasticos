/* JS ASSÍNCRONO */

// 01° CONTEÚDO - PROMISE (É um objeto usado para processamento assíncrono)

/* Uma Promise com Then, Catch, Finally */
// const promessa = new Promise((resolve, reject) => {  
//                                                      // Os parâmetros 'resolve' e 'reject' são funções também obrigatórias, ou a Promise é resolvida ou rejeitada
//     let condicao = true;

//     if(condicao){
//         setTimeout(() => {
//             resolve({nome: 'Gabriel', idade: 21}); // Caso a condição seja true, ou seja, 'Resolve', isso irá executar
//         }, 1000)
//     } else {                                
//         reject(Error('Não estou pronto'));         // Caso a condição seja false, ou seja, 'Reject', isso irá executar
//     }
// })

// const retorno = promessa.then((resolucao) => {     // O 'Then' fica observando o 'Resolve', quando o 'Resolve' ficar pronto, o Then é acionado
//                                                    // O 'resolucao' é o 'Estou Pronto' da condição true acima
//     console.log(resolucao);
//     resolucao.profissao = 'Programador';
//     return resolucao;       
// }).then((resolucao) => {                           // Um 'the' dentro de outro
//     console.log(resolucao);
// }).catch((rejeitada) => {                          // Ao contrário do 'then', o 'catch' é usado para tratamento de erro, ou seja, quando o reject é usado
//     console.log(rejeitada);
// }).finally(() => {
//     console.log('Sempre executado. Acabou');       // Diferente do 'then' e 'catch', o 'finally' sempre será executado, independente da condição true ou false
// })

// console.log(retorno);

// /* Uma Promise com um método interno de Promise */

// const login = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Login Efetuado');
//     }, 1000);
// });

// const dados = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Dados Carregados');
//     }, 1500);
// });

// const carregarTudoAll = Promise.all([login, dados]);   // Promise.all e seus parâmetros pega todas as Promises passadas
// const carregarTudoRace = Promise.race([login, dados]);  // Promise.race e seus parâmetros pega somente a Promise que executa de forma mais rápida

// carregarTudoAll.then((respostas) => {
//     console.log(respostas);
// })

// carregarTudoRace.then((respostas) => {
//     console.log(respostas);
// })

// 02° CONTEÚDO - FETCH (Usado para fazer requisições via HTTP)

/*  */
fetch('./arquivo.txt').then((response) => {
    console.log(response);
})














