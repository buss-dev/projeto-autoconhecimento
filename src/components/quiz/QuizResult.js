import './QuizResult.css'
import {RadialChart} from 'react-vis'

export default function QuizResult({allQuests}) {

    console.log(allQuests)

    const conjuntoA = [allQuests.id1,allQuests.id3,allQuests.id6,allQuests.id9,allQuests.id12,allQuests.id15]
    const conjuntoB = [allQuests.id4,allQuests.id7,allQuests.id10,allQuests.id11,allQuests.id14,allQuests.id17]
    const conjuntoC = [allQuests.id2,allQuests.id5,allQuests.id8,allQuests.id13,allQuests.id16,allQuests.id18]

    const totalA = conjuntoA.reduce((a,b) => a+b)
    const totalB = conjuntoB.reduce((a,b) => a+b)
    const totalC = conjuntoC.reduce((a,b) => a+b)
    const totalGeral = totalA + totalB + totalC

    const esfImport = (totalB/totalGeral) * 100
    const esfUrgenc = (totalA/totalGeral) * 100
    const esfCircun = (totalC/totalGeral) * 100

    let result = ''
    if (esfImport > esfUrgenc && esfImport > esfCircun) {
        result = "Esfera da importância"
    } else if (esfUrgenc > esfImport && esfUrgenc > esfCircun) {
        result = "Esfera da urgência"
    } else if (esfCircun > esfImport && esfCircun > esfUrgenc) {
        result = "Esfera circunstancial"
    } else {
        result = "Inconclusivo"
    }

    console.log(esfCircun,esfImport,esfUrgenc)

    const myData = [{angle: esfCircun}, {angle: esfImport}, {angle: esfCircun}]

    return (
        <div>
            <p>Resultado: {result} </p>
            {/* <RadialChart
            data={myData}
            width={300}
            height={300} /> */}
        </div>
    )
}