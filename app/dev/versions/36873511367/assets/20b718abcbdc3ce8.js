
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d4b97d8c-b41b-54b2-9ab9-6e82fb2c49e9")}catch(e){}}();
import{O as e}from"./486840d272a2bc21.js";var t=e`
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
//# debugId=d4b97d8c-b41b-54b2-9ab9-6e82fb2c49e9
