import { 
    SUBSCRIBE, 
    UNSUBSCRIBE, 
    SET_USERS, 
    SET_PAGE, 
    TOGGLE_LOADING_USERS, 
    TOGGLE_FOLLOWING_ON_USER,
    SET_HAVE_USERS
} from './types';

const initialState = {
    users: [],
    page: 1,
    limit: 8,
    haveUsers: true,
    isLoadingUsers: false,
    followingInProgress: []
};

export default (state = initialState, action) => {

    switch(action.type) {
        case SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u._id === action.userId) {
                        return {
                            ...u, 
                            subscribed: true, 
                            subscribers: u.subscribers + 1 
                        }
                    } else {
                        return u;
                    }
                })
            }
        case UNSUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u._id === action.userId) {
                        return {
                            ...u, 
                            subscribed: false,
                            subscribers: u.subscribers - 1 
                        }
                    } else {
                        return u;
                    }
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        case TOGGLE_LOADING_USERS:
            return {
                ...state,
                isLoadingUsers: action.loading
            }
        case TOGGLE_FOLLOWING_ON_USER:
            return {
                ...state,
                followingInProgress: action.inProgress 
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        case SET_HAVE_USERS: {
            return {
                ...state,
                haveUsers: action.haveUsers
            }
        }
        default: return state;
    }

}