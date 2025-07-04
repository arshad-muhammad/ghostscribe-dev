"use client"
import { MessagesContext } from '@/context/MessagesContext';
import { UserDetailContext } from '@/context/UserDetailContext';
import Colors from '@/data/Colors';
import Lookup from '@/data/Lookup'
import { ArrowRight, Link } from 'lucide-react'
import React, { useContext, useState } from 'react'
import SignInDialog from './SignInDialog';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';

function Hero() {
    const [userInput, setUserInput] = useState();
    const { messages, setMessages } = useContext(MessagesContext);
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    const [openDialog, setOpenDialog] = useState(false);
    const CreateWorkspace = useMutation(api.workspace.CreateWorkspace)
    const router = useRouter();
    const onGenerate = async (input) => {
        if (!userDetail?.name) {
            setOpenDialog(true);
            return;
        }
        if (userDetail?.token < 10) {
            toast('You dont have enough token!');
            return;
        }
        const msg = {
            role: 'user',
            content: input
        }
        setMessages(msg);

        const workspaceId = await CreateWorkspace({
            user: userDetail._id,
            messages: [msg]
        });
        console.log(workspaceId);
        router.push('/workspace/' + workspaceId);
    }

    return (
        <div className='flex flex-col items-center mt-28 justify-center gap-2 p-10'>
            <h2 className='font-bold text-4xl' style={{ color: Colors.TEXT }}>{Lookup.HERO_HEADING}</h2>
            <p className='font-medium' style={{ color: Colors.TEXT_MUTED }}>{Lookup.HERO_DESC}</p>
            <div className='p-5 rounded-xl max-w-xl w-full mt-3' style={{ background: Colors.SURFACE, border: `1.5px solid ${Colors.BORDER}` }}>
                <div className='flex gap-2 '>
                    <textarea placeholder={Lookup.INPUT_PLACEHOLDER}
                        onChange={(event) => setUserInput(event.target.value)}
                        className='outline-none bg-transparent w-full h-32 max-h-56 resize-none'
                        style={{ color: Colors.TEXT }}
                    />
                    {userInput?.length > 0 && <ArrowRight
                        onClick={() => onGenerate(userInput)}
                        className='p-2 h-10 w-10 rounded-md cursor-pointer'
                        style={{ background: Colors.PRIMARY, color: Colors.BACKGROUND }} />}
                </div>
                <div>
                    <Link className='h-5 w-5' style={{ color: Colors.PRIMARY }} />
                </div>
            </div>

            <div className='flex mt-8 flex-wrap max-w-2xl items-center justify-center gap-3'>
                {Lookup?.SUGGSTIONS.map((suggestion, index) => (
                    <h2 key={index}
                        onClick={() => onGenerate(suggestion)}
                        className='p-1 px-2 rounded-full text-sm cursor-pointer'
                        style={{ border: `1.5px solid ${Colors.BORDER}`, color: Colors.TEXT_MUTED }}
                        onMouseOver={e => e.target.style.color = Colors.TEXT}
                        onMouseOut={e => e.target.style.color = Colors.TEXT_MUTED}
                    >{suggestion}</h2>
                ))}
            </div>
            <SignInDialog openDialog={openDialog}
                closeDialog={(v) => setOpenDialog(v)} />
        </div>
    )
}

export default Hero