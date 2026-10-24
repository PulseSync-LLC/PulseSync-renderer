
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7f1e6b1d-7b96-51da-8d7e-c7c6c992b2f5")}catch(e){}}();
import{a as e}from"./7467d20d835cfffe.js";import{K as t,W as n}from"./7dda8cf74ffc1a0a.js";import{D as r}from"./a22313dc8c595d29.js";import{a as i,i as a,kn as o,o as s}from"./35a2a46e8f0becf6.js";import{r as c}from"./ca4c4974938b71bc.js";var l=r`
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
`,u=e(t(),1),d=`MarkdownContent-module__markdown__MF4xQm`,f=n(),p=e=>e.toLowerCase().trim().replace(/\s+/g,`-`).replace(/[^\wа-яё0-9-]/gi,``),m=e=>({children:t,...n})=>{let r=p(u.Children.toArray(t).join(``)),i=`h${e}`;return(0,f.jsx)(i,{id:r,...n,children:t})},h={h1:m(1),h2:m(2),h3:m(3),h4:m(4),h5:m(5),h6:m(6)};function g({children:e,className:t,components:n,allowHtml:r=!0}){return(0,f.jsx)(`div`,{className:o(d,t),children:(0,f.jsx)(s,{skipHtml:!r,remarkPlugins:[a,i],rehypePlugins:r?[c]:[],components:{...h,...n},children:e})})}export{l as n,g as t};
//# debugId=7f1e6b1d-7b96-51da-8d7e-c7c6c992b2f5
