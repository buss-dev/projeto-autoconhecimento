import QuizQuest from './QuizQuest'
import { useState, useEffect } from 'react'
import {Button} from 'react-bootstrap'
import QuizResult from './QuizResult'

export default function Quiz() {

    let allQuests = [
        {
            id:1,
            questionLine1: "Costumo ir a eventos,  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },

        {
            id:2,
            questionLine1: "Não consigo  realizar tudo  que me propus fazer no dia e preciso fazer hora extra e levar trabalho para casa.",
            imgSource: "https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            value: 0,
        },

        {
            id:3,
            questionLine1: "Quando recebo um novo e-mail, costumo dar uma olhada  para checar o conteúdo.",
            imgSource: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:4,
            questionLine1: "Costumo visitar  com  regularidade pessoas relevantes em  minha  vida  como amigos parentes, filhos",
            imgSource: "https://images.unsplash.com/photo-1608405133123-aa9791eb7eca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:5,
            questionLine1: "É comum aparecer problemas inesperados no meu dia a dia",
            imgSource: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80sss",
            value: 0,
        },
        {
            id:6,
            questionLine1: "Assumo compromissos com outras pessoas ou aceito novas posições na empresa, mesmo que  não  goste muito  da  nova  atividade, se  for para  aumentar meus rendimentos ou obter  uma promoção.   ",
            imgSource: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:7,
            questionLine1: "Tenho um tempo definido  para dedicar  a mim mesmo e nele, posso  fazer o que quiser.  ",
            imgSource: "https://images.unsplash.com/photo-1468322931232-d3cb4c7da350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            value: 0,
        },
        {
            id:8,
            questionLine1: "Costumo deixar  para  fazer  relatórios,   imposto de  renda,   compras de  Natal, estudar para provas e outras  tarefas perto do prazo de entrega.  ",
            imgSource: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:9,
            questionLine1: "Nos dias de descanso, costumo passar  boa  parte  do dia assistindo à televisão, jogando ou acessando a internet.  ",
            imgSource: "https://images.unsplash.com/photo-1586899028174-e7098604235b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            value: 0,
        },
        {
            id:10,
            questionLine1: "Faço um  planejamento por  escrito  de  tudo  que  preciso  fazer  durante minha semana.",
            imgSource: "https://images.unsplash.com/photo-1551643556-0e32e30fc8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:11,
            questionLine1: "Posso afirmar que estou conseguindo realizar tudo que gostaria em minha vida e que o tempo está passando na realidade correta.",
            imgSource: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:12,
            questionLine1: "Costumo participar de  reuniões sem  saber  direito  o conteúdo, o porquê devo participar ou a que resultado aquele encontro pode levar. ",
            imgSource: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:13,
            questionLine1: "Consigo  melhores resultados e  me  sinto  mais  produtivo quando estou sob pressão ou com o prazo curto.  ",
            imgSource: "https://images.unsplash.com/photo-1638202947561-e372255007b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:14,
            questionLine1: "Quando  quero  alguma  coisa,  defino   esse   objetivo   por  escrito,   estabeleço prazos em minha agenda, monitoro os resultados obtidos e os comparo com os esperados.",
            imgSource: "https://images.unsplash.com/photo-1536778215133-7e02ee89cb90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            value: 0,
        },
        {
            id:15,
            questionLine1: "Leio   muitos   e-mails   desnecessários,   com   piadas,   correntes,   propagandas, apresentações, produtos e etc.  ",
            imgSource: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:16,
            questionLine1: "Estive atrasado com minhas  tarefas ou reuniões nas últimas semanas.  ",
            imgSource: "https://images.unsplash.com/photo-1450897918656-527057db59d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            value: 0,
        },
        {
            id:17,
            questionLine1: "Faço esporte com regularidade, me alimento da forma adequada e tenho o lazer que gostaria.  ",
            imgSource: "https://images.unsplash.com/photo-1474859569645-e0def92b02bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:18,
            questionLine1: "É comum reduzir meu horário de almoço ou até mesmo comer enquanto trabalho para concluir um projeto ou tarefa.  ",
            imgSource: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
    ]

    const [id, setId] = useState(0)
    const [quest, setQuest] = useState(allQuests[id])

    const [valueData, setValueData] = useState({
    })

    return (
        
        <div>
            {id !== 18 ? <QuizQuest id={id} quest1={quest}/> : <QuizResult allQuests={valueData}/>}
            {id !== 18 ?
            <>
            <div className="row justify-content-between space-evenly botoesOpti">
                <p className='fontOptiMonka'>(1.Nunca - 2.Raramente - 3.Às vezes - 4.Quase sempre - 5.Sempre)</p>
                    <Button
                    variant='dark'
                    onClick={function() {
                        quest.value = 1
                        console.log(quest)
                        setId(id+1)
                        setQuest(allQuests[id+1])
                        setValueData({...valueData, ["id" + quest.id] : 1})
                    }}
                    className='col-2 pt-3 pb-3'>1</Button>
                    <Button
                    variant='dark'
                    onClick={function() {
                        quest.value = 2
                        console.log(quest)
                        setId(id+1)
                        setQuest(allQuests[id+1])
                        setValueData({...valueData, ["id" + quest.id] : 2})
                    }}
                    className='col-2 pt-3 pb-3'>2</Button>
                    <Button
                    variant='dark'
                    onClick={function() {
                        quest.value = 3
                        console.log(quest)
                        setId(id+1)
                        setQuest(allQuests[id+1])
                        setValueData({...valueData, ["id" + quest.id] : 3})
                    }}
                    className='col-2 pt-3 pb-3'>3</Button>
                    <Button
                    variant='dark'
                    onClick={function() {
                        quest.value = 4
                        console.log(quest)
                        setId(id+1)
                        setQuest(allQuests[id+1])
                        setValueData({...valueData, ["id" + quest.id] : 4})
                    }}
                    className='col-2 pt-3 pb-3'>4</Button>
                    <Button 
                    variant='dark'
                    onClick={function() {
                        quest.value = 5
                        console.log(quest)
                        setId(id+1)
                        setQuest(allQuests[id+1])
                        setValueData({...valueData, ["id" + quest.id] : 5})
                    }}
                    className='col-2 pt-3 pb-3'
                    >5</Button>
            </div>
                <div className='row mt-4'>
                    <Button
                    variant='dark'
                    className='mb-5 pb-2 pt-2'
                    onClick={function() {
                        setId(id-1)
                        setQuest(allQuests[id-1])
                        console.log(quest)
                    }}
                    disabled={id === 0 ? true : false}
                    >Voltar</Button>
                </div>
            </>
            : ""}
        </div>
        
    )
}