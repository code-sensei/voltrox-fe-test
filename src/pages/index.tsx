import s from './index.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { ActionIcon, CloseIcon, FeedsIcon } from '@/components/icons'
import { Progress } from '@/components/ui/progressbar/ProgressBar'
import Poll, { IPoll } from '@/components/ui/poll/poll'

const updateTypes: {
    text: string;
    icon: string
}[] = [
    {
        text: "Live Video",
        icon: "/icons/live-video.svg"
    },
    {
        text: "Media",
        icon: "/icons/media.svg"
    },
    {
        text: "Feelings",
        icon: "/icons/feelings.svg"
    },
    {
        text: "Poll",
        icon: "/icons/poll.svg"
    },
]

const Polls: IPoll[] = [
    {
        text: "Which of this player is the most accurate in playing straight free kick from any angle on the pitch",
        items: [
            {
                text: 'Erling Haaland',
                progress: 50
            },
            {
                text: 'Lionel Messi',
                progress: 10
            },
            {
                text: 'Cristiano Ronaldo',
                progress: 90
            },
        ],
        date: '2 days ago',
        author: {
            name: 'Bennita@Festus',
            avatar: '/svgs/avatars/avatar-2.svg'
        },
        concluded: false
    },
    {
        text: "Which of the team is likely to win the Champions League",
        items: [
            {
                text: 'Dortmund',
                progress: 10
            },
            {
                text: 'Real Madrid',
                progress: 90
            },
        ],
        date: '2 days ago',
        author: {
            name: 'KamaruAyobami',
            avatar: '/svgs/avatars/avatar-3.svg'
        },
        concluded: true
    },
]

const FeedsPage = () => {

    const [ selectedOption, setSelectedOption ] = useState<string>('');

    return (
        <>
            <div className={s.main}>
                <div className={s.left}>
                    <section className={`${s.updateSection} card`}>
                        <Image 
                            className={s.updateAvatar}
                            height={50}
                            width={50}
                            alt=""
                            src="/svgs/avatars/avatar-1.svg"
                        />
                        <div
                            className={s.updatePost}
                        >
                            <input 
                                className={s.updateInput}
                                placeholder="What is on your mind, make a post.."
                            />
                            <div
                                className={s.updateTypes}
                            >
                                { updateTypes.map((updateType, index) => {
                                    return (
                                        <div
                                            key={`update-type-${index}`}
                                            className={s.updateType}
                                        >
                                            <Image 
                                                alt=""
                                                src={updateType.icon}
                                                height={16}
                                                width={16}
                                            />
                                            <span>
                                                { updateType.text }
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                    {/* Posts Section */}
                    <section className={s.postsSection}>
                        <div
                            className={`${s.post} card`}
                        >
                            <div
                                className={s.postHeader}
                            >
                                <Image 
                                    className={s.postAvatar}
                                    alt=""
                                    src="/svgs/avatars/avatar-2.svg"
                                    height={65}
                                    width={65}
                                />
                                <div
                                    className={s.postAuthor}
                                >
                                    <p>Bennita@Festus</p>
                                    <small
                                        className={s.postDate}
                                    >
                                        2 days ago
                                    </small>
                                </div>
                                <div
                                    className={s.postActions}
                                >
                                    <div 
                                        className={s.action}
                                    >
                                        <ActionIcon />
                                    </div>
                                    <div 
                                        className={s.action}
                                    >
                                        <CloseIcon />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={s.postBody}
                            >
                                <p className={s.postText}>
                                    Be equipped with the skills and competencies to help you become a research-led, interdisciplinary and human-centred designer.
                                </p>
                                <div 
                                    className={s.postImage}
                                />
                            </div>
                        </div>
                    </section>
                </div>
                {/* Polls Section */}
                <div className={s.right}>
                    <div className={`${s.pollsSection} card`}>
                        <p className={s.pollsHeading}>
                            Recent Polls
                        </p>
                        { Polls.map((pollItem, index) => {
                            return (
                                <Poll 
                                    items={pollItem.items} 
                                    key={index} 
                                    author={pollItem.author}
                                    text={pollItem.text}
                                    date={pollItem.date}
                                    concluded={pollItem.concluded}
                                />
                            )
                        }) }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeedsPage;