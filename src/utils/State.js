const State = {
    Apply: {
        PENDING: 0,
        APPROVED: 1,
        REJECTED: 2,
        WORKING: 3,
    },
    Level: {
        LOW: 0,
        MEDIUM: 1,
        HIGH: 2,
    },
    Permission: {
        SHOW: 0,
        HIDDEN: 1,
    },
    Profile: {
        SHOW: 0,
        HIDDEN: 1,
    },
    Freelancer: {
        SHOW: 0,
        HIDDEN: 1,
    },
    Language: {
        SHOW: 0,
        HIDDEN: 1,
    },
    Recruiter: {
        SHOW: 0,
        HIDDEN: 1,
    },
    Skill: {
        SHOW: 0,
        HIDDEN: 1,
    },
    Staff: {
        SHOW: 0,
        HIDDEN: 1,
    },
    Product: {
        SHOW: 0,
        HIDDEN: 1,
    },
    Account: {
        USE: 0,
        BLOCK: 1,
    },
    Wallet: {
        USE: 0,
        BLOCK: 1,
    },
    HistoryTransaction: {
        USE: 0,
        DELETE: 1,
    },
    JobPost: {
        PENDING: 0,
        APPROVED: 1,
        REJECTED: 2,
        LOADING: 3,
        PUBLISHED: 4,
        STARTED: 5,
        CANCELED: 6,
        FINISHED: 7,
        HIDDEN: 8,
        DELETED: 9,
        DOING: 10,
        EDITING: 11
    },
};

export default State;