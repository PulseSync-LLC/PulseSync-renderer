
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4c6b9dbe-a3f1-57ed-930f-bd679a25dde1")}catch(e){}}();
import{a as e}from"./7467d20d835cfffe.js";import{K as t,W as n}from"./dce3d52f0bc38f9e.js";import{O as r}from"./6ea0bcdd86dd1f23.js";import{_n as i,a,i as o,o as s}from"./a584508c336828af.js";import{n as c}from"./fcd3d99a5e5a1fc6.js";var l=r`
    query GetStoreAddons(
        $page: Int = 1
        $pageSize: Int = 30
        $search: String
        $type: String
        $sortBy: String
        $sortOrder: String
        $releaseChannel: String
    ) {
        getStoreAddons(
            page: $page
            pageSize: $pageSize
            search: $search
            type: $type
            sortBy: $sortBy
            sortOrder: $sortOrder
            releaseChannel: $releaseChannel
        ) {
            totalCount
            totalPages
            addons {
                id
                name
                type
                downloadCount
                ratingAverage
                ratingCount
                myRating
                submittedById
                submittedByUsername
                submittedByNickname
                currentRelease {
                    id
                    version
                    visibility
                    releaseChannels
                    description
                    authors
                    changelog
                    tags
                    usedAiDuringDevelopment
                    usesOfficialTemplate
                    avatarUrl
                    bannerUrl
                    previewUrl
                    bannerLeftColor
                    bannerRightColor
                    downloadUrl
                    githubUrl
                    approvedAt
                    assetsPurgedAt
                    status
                    moderationNote
                    createdAt
                    updatedAt
                }
                releases {
                    id
                    version
                    visibility
                    releaseChannels
                    description
                    authors
                    changelog
                    tags
                    usedAiDuringDevelopment
                    usesOfficialTemplate
                    avatarUrl
                    bannerUrl
                    previewUrl
                    bannerLeftColor
                    bannerRightColor
                    downloadUrl
                    githubUrl
                    approvedAt
                    assetsPurgedAt
                    status
                    moderationNote
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
        }
    }
`,u=e(t(),1),d=`MarkdownContent-module__markdown__MF4xQm`,f=n(),p=e=>e.toLowerCase().trim().replace(/\s+/g,`-`).replace(/[^\wа-яё0-9-]/gi,``),m=e=>({children:t,...n})=>{let r=p(u.Children.toArray(t).join(``)),i=`h${e}`;return(0,f.jsx)(i,{id:r,...n,children:t})},h={h1:m(1),h2:m(2),h3:m(3),h4:m(4),h5:m(5),h6:m(6)};function g({children:e,className:t,components:n,allowHtml:r=!0}){return(0,f.jsx)(`div`,{className:i(d,t),children:(0,f.jsx)(s,{skipHtml:!r,remarkPlugins:[o,a],rehypePlugins:r?[c]:[],components:{...h,...n},children:e})})}export{l as n,g as t};
//# debugId=4c6b9dbe-a3f1-57ed-930f-bd679a25dde1
