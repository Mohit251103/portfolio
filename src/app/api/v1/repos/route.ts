import { Octokit } from "@octokit/rest"
import { NextRequest, NextResponse } from "next/server"

const repos = ["blogio", "yt-filter", "go_cli"]
export const GET = async (req: NextRequest) => {
    try {
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN
        })

        let unresolved_repo = repos.map((repo) => {
            return octokit.repos.get({
                owner:"mohit251103",
                repo: repo
            })
        })
        const resolved_repo = await Promise.all(unresolved_repo)
        const unresolved_lang = resolved_repo.map((repo) => {
            return octokit.request(repo.data.languages_url)
        })
        const resolved_lang = (await Promise.all(unresolved_lang)).map((response) => {
            return response.data
        })

        const response = resolved_repo.map((repo, index) => {
            return { ...repo, languages: resolved_lang[index] }
        })
        return NextResponse.json({ data: response, status:200 })
    } catch (error) {
        return NextResponse.json({message: error, status: 500})
    }
}