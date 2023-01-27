const express = require('express')

const router = express.Router();


router.get('/grade', (req, res) => {
    let obj ={
        cursando:[
            {
            id: "ESM100",
            materia: "Estágio Supervisionado em Desenvolvimento de Software Multiplataforma",
            semestre: 20231,
            nota: "--",
            aproveitamento: "--",
            status: "Em Curso"
            },
            {
            id: "IBD016",
            materia: "Banco de Dados - Não relacional",
            semestre: 20231,
            nota: "--",
            aproveitamento: "--",
            status: "Em Curso"
            },
            {
            id: "IHC004",
            materia: "Interação Humano Computador",
            semestre: 20231,
            nota: "--",
            aproveitamento: "--",
            status: "Em Curso"
            },
            {
            id: "ILP037",
            materia: "Técnica de Programação II",
            semestre: 20231,
            nota: "--",
            aproveitamento: "--",
            status: "Em Curso"
            },
            {
            id: "ING085",
            materia: "Inglês I",
            semestre: 20231,
            nota: "--",
            aproveitamento: "--",
            status: "Em Curso"
            },
            {
            id: "ISW029",
            materia: "Desenvolvimento Web II",
            semestre: 20231,
            nota: "--",
            aproveitamento: "--",
            status: "Em Curso"
            },
            {
            id: "ISW030",
            materia: "Desenvolvimento Web III",
            semestre: 20231,
            nota: "--",
            aproveitamento: "--",
            status: "Em Curso"
            },
            {
            id: "MAG004",
            materia: "Álgebra Linear",
            semestre: 20231,
            nota: "--",
            aproveitamento: "--",
            status: "Em Curso"
            }
        ]
    }
        
       res.render('grade', obj); 
})

router.get('/historico',(req, res) => {
    let obj = {
        grade:[
            {
             id: "ESM100",
             materia: "Estágio Supervisionado em Desenvolvimento de Software Multiplataforma",
             semestre: 20231,
             nota: "--",
             aproveitamento: "--",
             status: "Em Curso"
            },
            {
             id: "IAL010",
             materia: "Algoritmo e Lógica de Programação",
             semestre: 20221,
             nota: "9.5",
             aproveitamento: "90.00%",
             status: "Aprovado por Nota e Frequência"
            },
            {
             id: "IBD014",
             materia: "Modelagem de Banco de Dados",
             semestre: 20221,
             nota: "7.0",
             aproveitamento: "80.00%",
             status: "Aprovado por Nota e Frequência"
            },
            {
             id: "IBD015",
             materia: "Banco de Dados – Relacional",
             semestre: 20222,
             nota: "8.6",
             aproveitamento: "97.50%",
             status: "Aprovado por Nota e Frequência"
            },
            {
             id: "IBD016",
             materia: "Banco de Dados - Não relacional",
             semestre: 20231,
             nota: "--",
             aproveitamento: "--",
             status: "Em Curso"
            },
            {
             id: "IED005",
             materia: "Estrutura de Dados",
             semestre: 20222,
             nota: "8.5",
             aproveitamento: "95.00%",
             status: "Aprovado por Nota e Frequência"
            },
            {
             id: "IES011",
             materia: "Engenharia de Software I",
             semestre: 20221,
             "--": "6.1",
             "--": "90.00%",
             status: "Aprovado por Nota e Frequência"
            },
            {
             id: "IES012",
             materia: "Engenharia de Software II",
             semestre: 20222,
             nota: "6.8",
             aproveitamento: "95.00%",
             status: "Aprovado por Nota e Frequência"
            },
            {
             id: "IHC004",
             materia: "Interação Humano Computador",
             semestre: 20231,
             nota: "--",
             aproveitamento: "--",
             status: "Em Curso"
            },
            {
             id: "ILP036",
             materia: "Técnica de Programação I",
             semestre: 20222,
             nota: "9.0",
             aproveitamento: "85.00%",
             status: "Aprovado por Nota e Frequência"
            },
            {
             id: "ILP037",
             materia: "Técnica de Programação II",
             semestre: 20231,
             nota: "--",
             aproveitamento: "--",
             status: "Em Curso"
            },
            {
             id: "ING085",
             materia: "Inglês I",
             semestre: 20231,
             nota: "--",
             aproveitamento: "--",
             status: "Em Curso"
            },
            {
             id: "ISO011",
             materia: "Sistemas Operacionais e Redes de Computadores",
             semestre: 20221,
             nota: "7.3",
             aproveitamento: "98.75%",
             status: "Aprovado por Nota e Frequência"
            },
            {
             id: "ISW028",
             materia: "Desenvolvimento Web I",
             semestre: 20221,
             nota: "8.8",
             aproveitamento: "85.00%",
             status: "Aprovado por Nota e Frequência"
            },
            {
             id: "ISW029",
             materia: "Desenvolvimento Web II",
             semestre: 20231,
             nota: "--",
             aproveitamento: "--",
             status: "Em Curso"
            },
            {
             id: "ISW030",
             materia: "Desenvolvimento Web III",
             semestre: 20231,
             nota: "--",
             aproveitamento: "--",
             status: "Em Curso"
            },
            {
             id: "ISW031",
             materia: "Design Digital",
             semestre: 20221,
             nota: "8.8",
             aproveitamento: "87.50%",
             status: "Aprovado por Nota e Frequência"
            },
            {
             id: "MAT019",
             materia: "Matemática para Computação",
             semestre: 20222,
             nota: "8.8",
             aproveitamento: "90.00%",
             status: "Aprovado por Nota e Frequência"
            }
           ]
    }
    res.render('historico', obj);   
});

module.exports = router;