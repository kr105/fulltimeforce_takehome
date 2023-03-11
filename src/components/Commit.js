import { GitCommitIcon } from '@primer/octicons-react'

function Commit ({ data }) {
    return (
        <li className='grid grid-cols-12 grid-flow-col my-2'>
            <div className='col-span-1 flex flex-col mx-auto place-items-center'>
                <div className='left-1/2 h-3/6 w-0.5 bg-gray-300' />
                <GitCommitIcon size={16} />
                <div className='left-1/2 h-3/6 w-0.5 bg-gray-300' />
            </div>
            <div className='col-span-11 h-20'>
                <div className='border rounded h-full p-4'>
                    <h3 className='font-bold'>{data.commit.message}</h3>
                    <div className='flex flex-row items-baseline'>
                        <p className='mr-2'>{data.commit.committer.name}</p>
                        <p className='text-xs'>{data.commit.committer.date}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Commit
