
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="07d5f414-2186-558c-9e7a-9508a9ce2fe9")}catch(e){}}();
import{O as e}from"./4ab7db46d8898b99.js";var t=e`
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
//# debugId=07d5f414-2186-558c-9e7a-9508a9ce2fe9
