
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c04be555-6317-5727-bc81-0d02993afb4d")}catch(e){}}();
import{O as e}from"./25cff88803ddac7a.js";var t=e`
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
//# debugId=c04be555-6317-5727-bc81-0d02993afb4d
