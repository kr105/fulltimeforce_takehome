const repoOwner = process.env.GITHUB_REPO_OWNER || 'kr105'
const repoName = process.env.GITHUB_REPO_NAME || 'fulltimeforce_takehome'
const githubToken = process.env.GITHUB_TOKEN || ''

async function getCommits () {
    const data = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/commits`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${githubToken}`
            },
            next: {
                revalidate: 10
            }
        }
    )
    return data.json()
}

const exports = { getCommits }
export default exports
