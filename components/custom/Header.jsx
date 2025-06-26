import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { Button } from '../ui/button'
import Colors from '@/data/Colors'
import { UserDetailContext } from '@/context/UserDetailContext'
import Link from 'next/link'
import { LucideDownload, Rocket } from 'lucide-react'
import { useSidebar } from '../ui/sidebar'
import { usePathname } from 'next/navigation'
import { ActionContext } from '@/context/ActionContext'
import SignInDialog from './SignInDialog'

function Header() {
  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  const {toggleSidebar}=useSidebar();
  const {action,setAction}=useContext(ActionContext);
  const path=usePathname();
  const [openLoginDialog,setOpenLoginDialog]=useState(false);
  console.log(path?.includes('workspace'))

  const onActionBtn=(action)=>{
    setAction({
      actionType:action,
      timeStamp:Date.now()
    })
  }

  return (
    <div
      className="fixed left-1/2 top-6 z-30 -translate-x-1/2 w-[95vw] max-w-4xl mx-auto
        flex justify-between items-center
        px-4 py-2 md:px-8 md:py-3
        rounded-2xl shadow-xl border border-[#1F2937]
        bg-[#111827]/80 backdrop-blur
        transition-all duration-300
        "
      style={{
        // fallback for browsers that don't support backdrop-blur
        backgroundColor: 'rgba(17,24,39,0.8)'
      }}
    >
      <Link href={'/'} className="flex items-center gap-2">
        <Image src={'/logo.png'} alt='Logo' width={40} height={40} />
      </Link>
      {!userDetail?.name  ? <div className='flex gap-3'>
            <Button variant="ghost" onClick={setOpenLoginDialog} className="text-[#F1F5F9] hover:text-[#3B82F6] transition-all">Sign In</Button>
            <Button onClick={setOpenLoginDialog}
            className="bg-[#3B82F6] text-[#0A0E17] hover:bg-[#60A5FA] transition-all font-semibold">Get Started</Button>
        </div>:
        path?.includes('workspace')&&
        <div className='flex gap-2 items-center'>
          <Button variant="ghost" onClick={()=>onActionBtn('export')} className="text-[#F1F5F9] hover:text-[#3B82F6] transition-all"><LucideDownload/> Export</Button>
          <Button className="bg-[#3B82F6] text-[#0A0E17] hover:bg-[#60A5FA] transition-all font-semibold"
          onClick={()=>onActionBtn('deploy')}><Rocket/>  Deploy </Button>
        </div>
        }
          {userDetail&& <Image src={userDetail?.picture} alt='user' width={30} height={30}
         className='rounded-full w-[30px] cursor-pointer border-2 border-[#1F2937] hover:border-[#3B82F6] transition-all'
         onClick={toggleSidebar}
         />}

         <SignInDialog openDialog={openLoginDialog}  closeDialog={setOpenLoginDialog} />
    </div>
  )
}

export default Header