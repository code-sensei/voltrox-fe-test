import s from './poll.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { Progress } from '../progressbar/ProgressBar';

export interface IPoll {
    items: {
        text: string;
        progress: number;
    }[];
    author: {
        name: string;
        avatar: string;
    };
    date: string;
    text: string;
    concluded: boolean;
}

const Poll = ({ items, author, date, text, concluded = false }: IPoll) => {

    const [ selectedOption, setSelectedOption ] = useState<string>('');

    const _id = Math.random().toString(36).substring(2, 15)

    return (
        <div className={s.main}>
            <div className={s.pollHeader}>
                <Image 
                    className={s.pollAvatar}
                    alt=""
                    src={author.avatar}
                    height={65}
                    width={65}
                />
                <div className={s.pollAuthor}>
                    <p>{author.name}</p>
                    <small
                        className={s.pollDate}
                    >
                        {date}
                    </small>
                </div>
            </div>
            <div
                className={s.pollBody}
            >
                <p className={s.pollText}>
                    { text }
                </p>
                <div
                    className={s.pollOptions}
                >
                    {items.map((pollItem, index) => {
                        return (
                            <div className={s.poll} key={`poll-${_id}-item-${index}`}>  
                                <div 
                                    className={s.pollOption}
                                    onClick={() => {
                                        setSelectedOption(pollItem.text)
                                    }}
                                >
                                    <input name="poll-1" 
                                        className={s.pollOptionInput} 
                                        id={`poll-1-pollItem-${_id}`}
                                        type="radio" 
                                        value={pollItem.text}
                                    />
                                    <div className={s.pollOptionText}>
                                        <div className={`${s.pollIndicator} ${ selectedOption === pollItem.text || concluded ? s.selected : ''}`}>
                                            <div className={`${s.pollOptionIndicator} ${ selectedOption === pollItem.text || concluded ? s.selected : ''}`} />
                                        </div>
                                        <div className={s.pollContent}>
                                            <label htmlFor={`poll-1-pollItem-${_id}`}>{ pollItem.text }</label>
                                            <Progress value={pollItem.progress} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Poll;