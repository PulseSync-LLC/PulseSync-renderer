
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="425776a8-b02f-5156-a0a7-65683182fd3e")}catch(e){}}();
import{O as e}from"./933d425a0b7d2cf3.js";var t=e`
    query GetAllUsers($page: Int!, $perPage: Int!, $sorting: [SortOptionInput!], $search: String) {
        getUsersWithPagination(newCalc: true, page: $page, pageSize: $perPage, sortOptions: $sorting, search: $search) {
            totalCount
            totalPages

            users {
                id
                avatarHash
                avatarType
                nickname
                username
                createdAt
                bannerHash
                bannerType
                perms
                status
                lastOnline
                currentTrack
                ban {
                    uuid
                    createdAt
                }
                badges {
                    uuid
                    name
                    type
                    level
                    createdAt
                }
                subscription {
                    uuid
                    name
                    type
                    createdAt
                    expireAt
                }
                levelInfoV2 {
                    totalPoints
                }
            }
        }
    }
`;export{t};
//# debugId=425776a8-b02f-5156-a0a7-65683182fd3e
