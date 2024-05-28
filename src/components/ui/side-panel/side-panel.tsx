import { CloseIcon } from '@/components/icons';
import s from './side-panel.module.css'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select/select"
import { Input } from '../input/input';
import { PlusIcon } from 'lucide-react';
import { IPlayer } from '@/pages/comparison';
import { Button } from '../button/button';
import { useState } from 'react';
  

interface ISidePanel {
    show: boolean,
    players: IPlayer[],
    selected: IPlayer[],
    setSelected?: void
}

const SidePanel = ({ show, players, selected, setSelected }: ISidePanel) => {

    const [ showPanel, setShowPanel ] = useState<boolean>(show)
    const [ selectedPlayers, setSelectedPlayers ] = useState<IPlayer[]>(selected)

    const closePanel = () => {
        setShowPanel(false)
        show = false
    }

    const selectPlayer = (player: IPlayer) => {
        setSelectedPlayers([...selectedPlayers, player])
    }

    const updateSelection = () => {
        return selectedPlayers
    }

    return (
        <aside className={`${s.sidePanel} ${show && s.show}`}>
            <div className={s.sidePanelContent}>
                <div
                    className={s.sidePanelHeader}
                >
                    <h2>Add Player</h2>
                    <div
                        className={s.closeIcon}
                        onClick={() => closePanel()}
                    >
                        <CloseIcon />
                    </div>
                </div>
                <div className={s.sidePanelFilter}>
                    <Select>
                        <SelectTrigger className={s.sidePanelFilterItem}>
                            <SelectValue placeholder="Filter By" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Teams">Teams</SelectItem>
                            <SelectItem value="Leagues">Leagues</SelectItem>
                            <SelectItem value="Country">Country</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input 
                        placeholder='Search'
                        className={`${s.sidePanelFilterItem} ${s.input}`}
                    />
                </div>
                <div 
                    className={s.sidePanelPlayerList}
                >
                    { players.map((player, index) => {
                        return (
                            <div className={s.playerItem} key={`player-${player.name}`}
                                onClick={() => selectPlayer(player)}
                            >
                                <p> { player.name }</p>
                                <div className={`${s.playerItemIcon} ${ selectedPlayers.includes(player) && s.selected}`}>
                                    <PlusIcon />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={s.sidePanelFooter}>
                    <Button
                        className={s.button}
                        onClick={() => {
                            closePanel()
                        }}
                    >
                        Done
                    </Button>
                </div>
            </div>
        </aside>
    )
}

export default SidePanel;