import { useState } from 'react'
import Image from 'next/image'
import s from './comparison.module.css'
import { PlusIcon } from '@/components/icons'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement } from "chart.js";
import { Radar } from "react-chartjs-2";
import SidePanel from '@/components/ui/side-panel/side-panel';

ChartJS.register(ArcElement, RadialLinearScale, PointElement, LineElement, Tooltip);
  

export interface IPlayer {
    image: string,
    name: string
}

const Colors = [
    '#31D8BD',
    '#AA5D2B',
    '#5D80FF'
]

const Players: IPlayer[] = [
    {
        image: '/svgs/players/messi.svg',
        name: 'Messi'
    },
    {
        image: '/svgs/players/ronaldo.svg',
        name: 'Ronaldo'
    },
    {
        image: '/svgs/players/neymar.svg',
        name: 'Neymar'
    },
]

const TableData = [
    {
        header: 'Consistency',
        data: [
            '98%',
            '10%'
        ]
    },
    {
        header: 'Technique',
        data: [
            '45%',
            '55%'
        ]
    },
    {
        header: 'Distance',
        data: [
            '40%',
            '60%'
        ]
    },
    {
        header: 'Statics',
        data: [
            '49%',
            '51%'
        ]
    },
    {
        header: 'Training',
        data: [
            '70%',
            '30%'
        ]
    },
    {
        header: 'Conversion',
        data: [
            '40%',
            '60%'
        ]
    },
    {
        header: 'Smartness',
        data: [
            '45%',
            '55%'
        ]
    },
    {
        header: 'Angle',
        data: [
            '55%',
            '45%'
        ]
    },
]

const ChartData = {
    labels: [
      'Techniques',
      'Training Dedication',
      'Distance',
      'Conversion',
      'Technique',
      'Consistency',
    ],
    datasets: [{
      label: 'Messi',
      data: [98, 45, 40, 49, 70, 40, 45],
      fill: true,
      backgroundColor: 'rgba(49, 216, 189, 0.2)',
      borderColor: 'rgba(49, 216, 189, 1)',
      pointBackgroundColor: 'rgba(49, 216, 189, 1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(49, 216, 189, 1)'
    }, {
      label: 'Ronaldo',
      data: [10, 55, 60, 51, 30, 60, 55],
      fill: true,
      backgroundColor: 'rgba(170, 93, 43, 0.1)',
      borderColor: 'rgba(170, 93, 43, 1)',
      pointBackgroundColor: 'rgba(170, 93, 43, 1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(170, 93, 43, 1)'
    }]
};

const ComparisonPage = () => {

    const [ selectedPlayers, setSelectedPlayers ] = useState<IPlayer[]>([Players[0]]);
    const [ showPanel, setShowPanel ] = useState<boolean>(false);

    return (
        <>
            <main className={s.main}>
                <div className={`${s.playersSection} card`}>
                    { selectedPlayers.map((player, index) => {
                        return (
                            <>
                                <div className={`${s.player}`} key={`player-${player.name}-${index}`}>
                                    <Image 
                                        alt=""
                                        src={player.image}
                                        height={320}
                                        width={350}
                                    />
                                </div>
                                <div className={s.versusIcon}>
                                    VS
                                </div>
                            </>
                        )
                    })}
                    <div 
                        className={`${s.addPlayer}`}
                        onClick={() => setShowPanel(true)}
                    >
                        <div className={s.addPlayerIcon}>
                            <PlusIcon />
                        </div>
                        <p>Add Player</p>
                    </div>
                </div>

                {/* Comparison Section */}
                <div className={`${s.comparisonSection} card`}>
                    <div className={s.comparisonTable}>
                        <div className={s.comparisonTableRow}>
                            <div className={`${s.comparisonTableHeader} accent`}>
                                <p className='text-accent'>Comparison</p>
                            </div>
                            { selectedPlayers.map((player, index) => {
                                return (
                                    <div className={s.comparisonTableData} key={`player-name-header-${index}`}>
                                        <p>{ player.name }</p>
                                    </div>
                                )
                            })}
                        </div>
                        { TableData.map((data, index) => {
                            return (
                                <div className={s.comparisonTableRow} key={`comparison-table-row-${index}`}>
                                    <div className={`${s.comparisonTableHeader}`}>
                                        <p>{ data.header }</p>
                                    </div>
                                    { selectedPlayers.map((player, index) => {
                                        return (
                                            <div className={s.comparisonTableData} key={`comparison-table-data-${index}`}>
                                                <p>{ data.data[index] }</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <div className={s.comparisonChart}>
                        <Radar
                            data={ChartData}
                            options={{
                                backgroundColor: 'rgba(255, 255, 255, 0)',
                                borderColor: 'rgba(78, 85, 84, 1)'
                            }}
                        />
                        <div className={s.playerLegends}>
                            { selectedPlayers.map((player, index) => {
                                return (
                                    <div
                                        className={s.legendItem}
                                        key={`legend-item-${index}`}
                                    >
                                        <p>{ player.name }</p>
                                        <div
                                            className={`${s.legendIcon} bg-[${Colors[index]}]`}
                                        ></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>  
                <SidePanel
                    show={ showPanel }
                    players={Players}
                    selected={selectedPlayers}
                />
            </main>
        </>
    )
}

export default ComparisonPage;