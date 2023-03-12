import { BugIcon, DeviceDesktopIcon, LawIcon, RepoForkedIcon } from '@primer/octicons-react'
import GithubAPI from '@/modules/GithubAPI'

export default async function Home () {
    const repoInfo = await GithubAPI.getRepoInfo()
    return (
        <div className='container mx-auto py-8'>
            <h1 className='text-3xl font-bold mb-4'>{repoInfo.name}</h1>
            <p className='text-lg mb-4'>{repoInfo.description}</p>
            <p className='text-lg mb-4'>This repository was created by <span className='font-semibold'>{repoInfo.owner.login}</span></p>

            <div className='relative overflow-x-auto w-96'>
                <table className='w-full text-sm text-left text-gray-500'>
                    <tbody>
                        <tr className='bg-white border-b'>
                            <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                <LawIcon size={24} className='mr-2' />
                                License
                            </th>
                            <td className='px-6 py-4'>
                                {repoInfo.license.name}
                            </td>
                        </tr>
                        <tr className='bg-white border-b'>
                            <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                <DeviceDesktopIcon size={24} className='mr-2' />
                                Language
                            </th>
                            <td className='px-6 py-4'>
                                {repoInfo.language}
                            </td>
                        </tr>
                        <tr className='bg-white border-b'>
                            <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                <RepoForkedIcon size={24} className='mr-2' />
                                Forks
                            </th>
                            <td className='px-6 py-4'>
                                {repoInfo.forks}
                            </td>
                        </tr>
                        <tr className='bg-white border-b'>
                            <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                <BugIcon size={24} className='mr-2' />
                                Issues
                            </th>
                            <td className='px-6 py-4'>
                                {repoInfo.open_issues}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
