import Commit from '@/components/Commit'
import GithubAPI from '@/modules/GithubAPI'

export default async function Home () {
    const data = await GithubAPI.getCommits()

    return (
        <div className='p-4'>
            <h1 className='text-xl'>Commits</h1>
            <div className='w-9/12'>
                <ol className=''>
                    {data?.map((commit) => (
                        <Commit key={commit.sha} data={commit} />
                    ))}
                </ol>
            </div>
        </div>
    )
}
