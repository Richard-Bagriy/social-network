import { usersAPI } from '../../api/api';
import { 
    toggleLoadingUsers, 
    setPage, 
    setUsers,
    toggleFollowingOnUser,
    followAC,
    unfollowAC
} from './actions';

export const getUsers = (limit, page) => (dispatch) =>{
    
    dispatch(toggleLoadingUsers(true));
    dispatch(setPage(page + 1));

    usersAPI.getUsers(limit, page).then(data => {
        dispatch(setUsers(data.items));
        dispatch(toggleLoadingUsers(false));
    });
}

export const follow = (id) => (dispatch) => {

    dispatch(toggleFollowingOnUser(true, id));

    usersAPI.follow(id).then(code => {
        if (code === 0) {
            dispatch(followAC(id));
            dispatch(toggleFollowingOnUser(false, id));
        }
    })
}

export const unfollow = (id) => (dispatch) => {
    dispatch(toggleFollowingOnUser(true, id));

    usersAPI.unfollow(id).then(code => {
        if (code === 0) {
            dispatch(unfollowAC(id));
            dispatch(toggleFollowingOnUser(false, id));
        }
    })
}