import QuizQuest from './QuizQuest'
import { useState } from 'react'
import {Button} from 'react-bootstrap'

export default function Quiz() {

    const allQuests = [
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
            questionLine1: "Quest3  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:4,
            questionLine1: "Quest4  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:5,
            questionLine1: "Quest4  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:6,
            questionLine1: "Quest4  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:7,
            questionLine1: "Quest4  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:8,
            questionLine1: "Quest4  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:9,
            questionLine1: "Quest4  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:10,
            questionLine1: "Quest4  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:11,
            questionLine1: "Quest4  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:12,
            questionLine1: "Quest4  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:13,
            questionLine1: "Quest4  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:14,
            questionLine1: "Quest4  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:15,
            questionLine1: "Quest4  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:16,
            questionLine1: "Quest4  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:17,
            questionLine1: "Quest4  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
        {
            id:18,
            questionLine1: "Quest18  festas  ou  cursos,  mesmo sem  ter  muita  vontade,  para agradar meu chefe meus amigos ou família.",
            imgSource: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            value: 0,
        },
    ]

    const [id, setId] = useState(0)
    const [quest, setQuest] = useState(allQuests[id])

    return (
        
        <div>
            {id !== 18 ? <QuizQuest id={id} quest1={quest}/> : ""}
            {id !== 18 ?
            <>
            <div className="row justify-content-between space-evenly">
                    <Button
                    onClick={function() {
                        quest.value = 1
                        console.log(quest)
                        setId(id+1)
                        setQuest(allQuests[id+1])
                    }}
                    className='col-2 pt-4 pb-4'>1</Button>
                    <Button
                    onClick={function() {
                        quest.value = 2
                        console.log(quest)
                        setId(id+1)
                        setQuest(allQuests[id+1])
                    }}
                    className='col-2 pt-4 pb-4'>2</Button>
                    <Button
                    onClick={function() {
                        quest.value = 3
                        console.log(quest)
                        setId(id+1)
                        setQuest(allQuests[id+1])
                    }}
                    className='col-2 pt-4 pb-4'>3</Button>
                    <Button
                    onClick={function() {
                        quest.value = 4
                        console.log(quest)
                        setId(id+1)
                        setQuest(allQuests[id+1])
                    }}
                    className='col-2 pt-4 pb-4'>4</Button>
                    <Button 
                    onClick={function() {
                        quest.value = 5
                        console.log(quest)
                        setId(id+1)
                        setQuest(allQuests[id+1])
                    }}
                    className='col-2 pt-4 pb-4'>5</Button>
            </div>
                <div className='row mt-4'>
                    <Button
                    onClick={function() {
                        setId(id-1)
                        setQuest(allQuests[id-1])
                    }}
                    >Voltar</Button>
                </div>
            </>
            : ""}
        </div>
        
    )
}