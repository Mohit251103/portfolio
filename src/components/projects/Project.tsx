"use client"
import { Octokit } from "@octokit/rest"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

type IOctokitResponse = {
    name: string;
    html_url: string;
    description: string | null;
    homepage: string | null
}

const Project = () => {
    const owner = "mohit251103"
    const repos = ["blogio", "yt-filter"]
    // const [projects, setProjects] = useState<IOctokitResponse[]>()
    const octokit = new Octokit()

    const raw = [
        {
            url: 'https://api.github.com/repos/mohit251103/blogio',
            status: 200,
            headers: {
                'accept-ranges': 'bytes',
                'access-control-allow-origin': '*',
                'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
                'cache-control': 'public, max-age=60, s-maxage=60',
                'content-encoding': 'gzip',
                'content-length': '1298',
                'content-security-policy': "default-src 'none'",
                'content-type': 'application/json; charset=utf-8',
                date: 'Sat, 07 Dec 2024 13:04:37 GMT',
                etag: 'W/"773deeaf6248078a1e6b37cf3a7bdda07e72e8a3c8e906a3bf11cc73b3a042c9"',
                'last-modified': 'Tue, 03 Dec 2024 17:15:39 GMT',
                'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
                server: 'github.com',
                'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
                vary: 'Accept,Accept-Encoding, Accept, X-Requested-With',
                'x-content-type-options': 'nosniff',
                'x-frame-options': 'deny',
                'x-github-api-version-selected': '2022-11-28',
                'x-github-media-type': 'github.v3; format=json',
                'x-github-request-id': 'C3B0:C3C35:743CD6:898DE6:675447E5',
                'x-ratelimit-limit': '60',
                'x-ratelimit-remaining': '49',
                'x-ratelimit-reset': '1733578495',
                'x-ratelimit-resource': 'core',
                'x-ratelimit-used': '11',
                'x-xss-protection': '0'
            },
            data: {
                id: 863710552,
                node_id: 'R_kgDOM3stWA',
                name: 'blogio',
                full_name: 'Mohit251103/blogio',
                private: false,
                owner: [Object],
                html_url: 'https://github.com/Mohit251103/blogio',
                description: null,
                fork: false,
                url: 'https://api.github.com/repos/Mohit251103/blogio',
                forks_url: 'https://api.github.com/repos/Mohit251103/blogio/forks',
                keys_url: 'https://api.github.com/repos/Mohit251103/blogio/keys{/key_id}',
                collaborators_url: 'https://api.github.com/repos/Mohit251103/blogio/collaborators{/collaborator}',
                teams_url: 'https://api.github.com/repos/Mohit251103/blogio/teams',
                hooks_url: 'https://api.github.com/repos/Mohit251103/blogio/hooks',
                issue_events_url: 'https://api.github.com/repos/Mohit251103/blogio/issues/events{/number}',
                events_url: 'https://api.github.com/repos/Mohit251103/blogio/events',
                assignees_url: 'https://api.github.com/repos/Mohit251103/blogio/assignees{/user}',
                branches_url: 'https://api.github.com/repos/Mohit251103/blogio/branches{/branch}',
                tags_url: 'https://api.github.com/repos/Mohit251103/blogio/tags',
                blobs_url: 'https://api.github.com/repos/Mohit251103/blogio/git/blobs{/sha}',
                git_tags_url: 'https://api.github.com/repos/Mohit251103/blogio/git/tags{/sha}',
                git_refs_url: 'https://api.github.com/repos/Mohit251103/blogio/git/refs{/sha}',
                trees_url: 'https://api.github.com/repos/Mohit251103/blogio/git/trees{/sha}',
                statuses_url: 'https://api.github.com/repos/Mohit251103/blogio/statuses/{sha}',
                languages_url: 'https://api.github.com/repos/Mohit251103/blogio/languages',
                stargazers_url: 'https://api.github.com/repos/Mohit251103/blogio/stargazers',
                contributors_url: 'https://api.github.com/repos/Mohit251103/blogio/contributors',
                subscribers_url: 'https://api.github.com/repos/Mohit251103/blogio/subscribers',
                subscription_url: 'https://api.github.com/repos/Mohit251103/blogio/subscription',
                commits_url: 'https://api.github.com/repos/Mohit251103/blogio/commits{/sha}',
                git_commits_url: 'https://api.github.com/repos/Mohit251103/blogio/git/commits{/sha}',
                comments_url: 'https://api.github.com/repos/Mohit251103/blogio/comments{/number}',
                issue_comment_url: 'https://api.github.com/repos/Mohit251103/blogio/issues/comments{/number}',
                contents_url: 'https://api.github.com/repos/Mohit251103/blogio/contents/{+path}',
                compare_url: 'https://api.github.com/repos/Mohit251103/blogio/compare/{base}...{head}',
                merges_url: 'https://api.github.com/repos/Mohit251103/blogio/merges',
                archive_url: 'https://api.github.com/repos/Mohit251103/blogio/{archive_format}{/ref}',
                downloads_url: 'https://api.github.com/repos/Mohit251103/blogio/downloads',
                issues_url: 'https://api.github.com/repos/Mohit251103/blogio/issues{/number}',
                pulls_url: 'https://api.github.com/repos/Mohit251103/blogio/pulls{/number}',
                milestones_url: 'https://api.github.com/repos/Mohit251103/blogio/milestones{/number}',
                notifications_url: 'https://api.github.com/repos/Mohit251103/blogio/notifications{?since,all,participating}',
                labels_url: 'https://api.github.com/repos/Mohit251103/blogio/labels{/name}',
                releases_url: 'https://api.github.com/repos/Mohit251103/blogio/releases{/id}',
                deployments_url: 'https://api.github.com/repos/Mohit251103/blogio/deployments',
                created_at: '2024-09-26T19:13:11Z',
                updated_at: '2024-12-03T17:15:39Z',
                pushed_at: '2024-12-03T17:15:20Z',
                git_url: 'git://github.com/Mohit251103/blogio.git',
                ssh_url: 'git@github.com:Mohit251103/blogio.git',
                clone_url: 'https://github.com/Mohit251103/blogio.git',
                svn_url: 'https://github.com/Mohit251103/blogio',
                homepage: 'https://blogio-by-mohit.vercel.app',
                size: 957,
                stargazers_count: 1,
                watchers_count: 1,
                language: 'TypeScript',
                has_issues: true,
                has_projects: true,
                has_downloads: true,
                has_wiki: true,
                has_pages: false,
                has_discussions: false,
                forks_count: 0,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 0,
                license: null,
                allow_forking: true,
                is_template: false,
                web_commit_signoff_required: false,
                topics: [Array],
                visibility: 'public',
                forks: 0,
                open_issues: 0,
                watchers: 1,
                default_branch: 'main',
                temp_clone_token: null,
                network_count: 0,
                subscribers_count: 1
            }
        },
        {
            url: 'https://api.github.com/repos/mohit251103/yt-filter',
            status: 200,
            headers: {
                'accept-ranges': 'bytes',
                'access-control-allow-origin': '*',
                'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
                'cache-control': 'public, max-age=60, s-maxage=60',
                'content-encoding': 'gzip',
                'content-length': '1479',
                'content-security-policy': "default-src 'none'",
                'content-type': 'application/json; charset=utf-8',
                date: 'Sat, 07 Dec 2024 13:04:37 GMT',
                etag: 'W/"bfcb6b4b2cb3fd4f50996e8425c0de8b75946b32c32763df930e7d06dbc33fd7"',
                'last-modified': 'Thu, 05 Dec 2024 17:50:35 GMT',
                'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
                server: 'github.com',
                'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
                vary: 'Accept,Accept-Encoding, Accept, X-Requested-With',
                'x-content-type-options': 'nosniff',
                'x-frame-options': 'deny',
                'x-github-api-version-selected': '2022-11-28',
                'x-github-media-type': 'github.v3; format=json',
                'x-github-request-id': 'C3B6:BB44D:7D0D7D:925E96:675447E5',
                'x-ratelimit-limit': '60',
                'x-ratelimit-remaining': '48',
                'x-ratelimit-reset': '1733578495',
                'x-ratelimit-resource': 'core',
                'x-ratelimit-used': '12',
                'x-xss-protection': '0'
            },
            data: {
                id: 825670209,
                node_id: 'R_kgDOMTa6QQ',
                name: 'yt-filter',
                full_name: 'Mohit251103/yt-filter',
                private: false,
                owner: [Object],
                html_url: 'https://github.com/Mohit251103/yt-filter',
                description: 'Getting distracted by unwanted videos on youtube feeds. Well Filtered. allows you to create different spaces ( feeds ) for each and every topic of your choice and get rid of unwanted videos and shorts.  So if you want to focus on learning or want a separate feed space for entertainment then you can have it.',
                fork: false,
                url: 'https://api.github.com/repos/Mohit251103/yt-filter',
                forks_url: 'https://api.github.com/repos/Mohit251103/yt-filter/forks',
                keys_url: 'https://api.github.com/repos/Mohit251103/yt-filter/keys{/key_id}',
                collaborators_url: 'https://api.github.com/repos/Mohit251103/yt-filter/collaborators{/collaborator}',
                teams_url: 'https://api.github.com/repos/Mohit251103/yt-filter/teams',
                hooks_url: 'https://api.github.com/repos/Mohit251103/yt-filter/hooks',
                issue_events_url: 'https://api.github.com/repos/Mohit251103/yt-filter/issues/events{/number}',
                events_url: 'https://api.github.com/repos/Mohit251103/yt-filter/events',
                assignees_url: 'https://api.github.com/repos/Mohit251103/yt-filter/assignees{/user}',
                branches_url: 'https://api.github.com/repos/Mohit251103/yt-filter/branches{/branch}',
                tags_url: 'https://api.github.com/repos/Mohit251103/yt-filter/tags',
                blobs_url: 'https://api.github.com/repos/Mohit251103/yt-filter/git/blobs{/sha}',
                git_tags_url: 'https://api.github.com/repos/Mohit251103/yt-filter/git/tags{/sha}',
                git_refs_url: 'https://api.github.com/repos/Mohit251103/yt-filter/git/refs{/sha}',
                trees_url: 'https://api.github.com/repos/Mohit251103/yt-filter/git/trees{/sha}',
                statuses_url: 'https://api.github.com/repos/Mohit251103/yt-filter/statuses/{sha}',
                languages_url: 'https://api.github.com/repos/Mohit251103/yt-filter/languages',
                stargazers_url: 'https://api.github.com/repos/Mohit251103/yt-filter/stargazers',
                contributors_url: 'https://api.github.com/repos/Mohit251103/yt-filter/contributors',
                subscribers_url: 'https://api.github.com/repos/Mohit251103/yt-filter/subscribers',
                subscription_url: 'https://api.github.com/repos/Mohit251103/yt-filter/subscription',
                commits_url: 'https://api.github.com/repos/Mohit251103/yt-filter/commits{/sha}',
                git_commits_url: 'https://api.github.com/repos/Mohit251103/yt-filter/git/commits{/sha}',
                comments_url: 'https://api.github.com/repos/Mohit251103/yt-filter/comments{/number}',
                issue_comment_url: 'https://api.github.com/repos/Mohit251103/yt-filter/issues/comments{/number}',
                contents_url: 'https://api.github.com/repos/Mohit251103/yt-filter/contents/{+path}',
                compare_url: 'https://api.github.com/repos/Mohit251103/yt-filter/compare/{base}...{head}',
                merges_url: 'https://api.github.com/repos/Mohit251103/yt-filter/merges',
                archive_url: 'https://api.github.com/repos/Mohit251103/yt-filter/{archive_format}{/ref}',
                downloads_url: 'https://api.github.com/repos/Mohit251103/yt-filter/downloads',
                issues_url: 'https://api.github.com/repos/Mohit251103/yt-filter/issues{/number}',
                pulls_url: 'https://api.github.com/repos/Mohit251103/yt-filter/pulls{/number}',
                milestones_url: 'https://api.github.com/repos/Mohit251103/yt-filter/milestones{/number}',
                notifications_url: 'https://api.github.com/repos/Mohit251103/yt-filter/notifications{?since,all,participating}',
                labels_url: 'https://api.github.com/repos/Mohit251103/yt-filter/labels{/name}',
                releases_url: 'https://api.github.com/repos/Mohit251103/yt-filter/releases{/id}',
                deployments_url: 'https://api.github.com/repos/Mohit251103/yt-filter/deployments',
                created_at: '2024-07-08T09:28:58Z',
                updated_at: '2024-12-05T17:50:35Z',
                pushed_at: '2024-12-05T17:50:31Z',
                git_url: 'git://github.com/Mohit251103/yt-filter.git',
                ssh_url: 'git@github.com:Mohit251103/yt-filter.git',
                clone_url: 'https://github.com/Mohit251103/yt-filter.git',
                svn_url: 'https://github.com/Mohit251103/yt-filter',
                homepage: 'https://yt-filter.vercel.app',
                size: 957,
                stargazers_count: 1,
                watchers_count: 1,
                language: 'TypeScript',
                has_issues: true,
                has_projects: true,
                has_downloads: true,
                has_wiki: true,
                has_pages: false,
                has_discussions: false,
                forks_count: 0,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 0,
                license: null,
                allow_forking: true,
                is_template: false,
                web_commit_signoff_required: false,
                topics: [Array],
                visibility: 'public',
                forks: 0,
                open_issues: 0,
                watchers: 1,
                default_branch: 'main',
                temp_clone_token: null,
                network_count: 0,
                subscribers_count: 2
            }
        }
    ]

    const projects = raw.map((project) => {
        return {
            name: project.data.name,
            html_url: project.data.html_url,
            description: project.data.description,
            homepage: project.data.homepage
        }
    })

    // const getProjects = useMemo(() => {
    //     const getRepo = async () => {
    //         try {
    //             let unresolved_repo = repos.map((repo) => {
    //                 return octokit.repos.get({
    //                     owner,
    //                     repo: repo
    //                 })
    //             })
    //             const resolved_repo = await Promise.all(unresolved_repo)
    //             return resolved_repo
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     return getRepo();
    // }, [owner, repos])

    // useEffect(() =>{
    //     getProjects
    //         .then((res) => {
    //             setProjects(res?.map((project) => {
    //                 return {
    //                     name: project.data.name,
    //                     html_url: project.data.html_url,
    //                     description: project.data.description,
    //                     homepage: project.data.homepage
    //                 }
    //             }));
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [])

    // if (!projects) {
    //     return <div>Loading...</div>
    // }

    return (
        <div id="projects" key="Projects" className="w-full flex-col items-center mt-12">
            <h2 className="text-2xl font-bold">Projects</h2>
            <div className="flex-col items-center w-full">
                {projects?.map((project: IOctokitResponse, index: number) => {
                    return <div key={index} className="w-full flex justify-start items-center p-4 rounded-md bg-secondary text-secondary-foreground my-2">
                        <img src="https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg" alt="github" className="rounded-md h-full w-[30%]" />
                        <div className="flex-col p-2 ml-2 gap-y-2 relative">
                            <p className="text-xl font-bold">{project.name}</p>
                            <p className="text-md">{project.description}</p>
                            <div className="flex gap-x-2 mt-4">
                                <Link href={project.homepage as string} className="rounded-md bg-background hover:opacity-90 p-1 text-foreground text-xs" referrerPolicy="no-referrer" target="_blank">Live Preview</Link>
                                <Link href={project.html_url} className="rounded-md bg-none border hover:bg-muted p-1 text-xs" referrerPolicy="no-referrer" target="_blank">Github</Link>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Project