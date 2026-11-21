
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f4e95cf6-e8f4-5063-9e1c-a498ee5dfd4f")}catch(e){}}();
import{a as e}from"./56689dc2ec3d255a.js";import{G as t,q as n}from"./3d96a81eb16a3ab8.js";import{E as r}from"./893f21fb28078d55.js";import{a as i,i as a,kn as o,o as s}from"./512f3ecc66153f7c.js";import{r as c}from"./837c4a8c2298b11b.js";var l=r`
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
`,u=e(n(),1),d=`MarkdownContent-module__markdown__MF4xQm`,f=t(),p=e=>e.toLowerCase().trim().replace(/\s+/g,`-`).replace(/[^\wа-яё0-9-]/gi,``),m=e=>({children:t,...n})=>{let r=p(u.Children.toArray(t).join(``)),i=`h${e}`;return(0,f.jsx)(i,{id:r,...n,children:t})},h={h1:m(1),h2:m(2),h3:m(3),h4:m(4),h5:m(5),h6:m(6)};function g({children:e,className:t,components:n,allowHtml:r=!0}){return(0,f.jsx)(`div`,{className:o(d,t),children:(0,f.jsx)(s,{skipHtml:!r,remarkPlugins:[a,i],rehypePlugins:r?[c]:[],components:{...h,...n},children:e})})}export{l as n,g as t};
//# debugId=f4e95cf6-e8f4-5063-9e1c-a498ee5dfd4f
