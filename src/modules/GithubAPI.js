const repoOwner = process.env.GITHUB_REPO_OWNER || 'kr105'
const repoName = process.env.GITHUB_REPO_NAME || 'fulltimeforce_takehome'
const githubToken = process.env.GITHUB_TOKEN || ''

async function fetchGithub (url) {
    const authHeader = {
        Authorization: `Bearer ${githubToken}`
    }

    return fetch(
        url,
        {
            method: 'GET',
            headers: githubToken ? authHeader : undefined, // Include token only if present
            next: {
                revalidate: 10
            }
        }
    )
}

async function getCommits () {
    const data = await fetchGithub(`https://api.github.com/repos/${repoOwner}/${repoName}/commits`)
    return data.json()
}

async function getRepoInfo () {
    const data = await fetchGithub(`https://api.github.com/repos/${repoOwner}/${repoName}`)
    return data.json()
}

const exports = { getCommits, getRepoInfo }
export default exports
