
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="edfcc110-c472-52e3-9953-2e6b86b5397c")}catch(e){}}();
import{a as e}from"./7467d20d835cfffe.js";import{f as t,u as n}from"./5e3d9168ad93f6c3.js";import{a as r,bn as i,hn as a,i as o,o as s}from"./4cb2134588dabf98.js";import{n as c}from"./29cf826d6342f1a5.js";var l=i`
    query GetStoreAddons($page: Int = 1, $pageSize: Int = 30, $search: String, $type: String, $sortBy: String, $sortOrder: String) {
        getStoreAddons(page: $page, pageSize: $pageSize, search: $search, type: $type, sortBy: $sortBy, sortOrder: $sortOrder) {
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
`,u=e(t(),1),d=`MarkdownContent-module__markdown__MF4xQm`,f=n(),p=e=>e.toLowerCase().trim().replace(/\s+/g,`-`).replace(/[^\wа-яё0-9-]/gi,``),m=e=>({children:t,...n})=>{let r=p(u.Children.toArray(t).join(``)),i=`h${e}`;return(0,f.jsx)(i,{id:r,...n,children:t})},h={h1:m(1),h2:m(2),h3:m(3),h4:m(4),h5:m(5),h6:m(6)};function g({children:e,className:t,components:n,allowHtml:i=!0}){return(0,f.jsx)(`div`,{className:a(d,t),children:(0,f.jsx)(s,{skipHtml:!i,remarkPlugins:[o,r],rehypePlugins:i?[c]:[],components:{...h,...n},children:e})})}export{l as n,g as t};
//# debugId=edfcc110-c472-52e3-9953-2e6b86b5397c
