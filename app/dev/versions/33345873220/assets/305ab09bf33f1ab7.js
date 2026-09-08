
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b08d1831-70b2-5915-8ced-b01816286ec3")}catch(e){}}();
import{bn as e}from"./4cb2134588dabf98.js";var t=e`
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
//# debugId=b08d1831-70b2-5915-8ced-b01816286ec3
