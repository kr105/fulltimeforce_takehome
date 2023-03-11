import { GitCommitIcon } from '@primer/octicons-react'
import Image from 'next/image'
import date from 'date-and-time'

function Commit ({ data }) {
    const originalDate = new Date(data.commit.committer.date)
    const parsedDate = date.format(originalDate, 'YYYY/MM/DD HH:mm:ss')

    return (
        <li className='grid grid-cols-12 grid-flow-col my-2'>
            <div className='col-span-1 flex flex-col mx-auto place-items-center'>
                <div className='left-1/2 h-3/6 w-0.5 bg-gray-300' />
                <GitCommitIcon size={16} />
                <div className='left-1/2 h-3/6 w-0.5 bg-gray-300' />
            </div>
            <div className='col-span-11 h-20'>
                <div className='flex flex-row border rounded h-full p-4 '>
                    <div className='pr-3 my-auto'>
                        <Image className='rounded-full' src={data.committer.avatar_url} width={35} height={35} alt='' />
                    </div>
                    <div className=''>
                        <h3 className='font-bold'>{data.commit.message}</h3>
                        <div className='flex flex-row items-baseline'>
                            <p className='mr-2'>{data.commit.committer.name}</p>
                            <p className='text-xs'>On {parsedDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Commit
