import  { appConstants} from './src/helpers/app-components';

let user = JSON.parse(localStorage.getItem('user'));
const intialState = user ? {logged:true,user}: {};

export function authentication(state = intialState,action){
    switch(action.type){
        case appConstants.LOGIN_REQUEST:
            return{
                logginIn:true,
                user:action.user
            };
            case  appConstant.LOGIN_SUCCESS:
                return{
                    logginIn:true,
                    user:action.user
                };
                case appConstants.LOGIN_SUCCESS:
                    return{
                        logginIn: true,
                        user:action.user
                    };
                    case appConstants.LOGIN_FAILURE:
                        return{};
                        case appConstants.LOGOUT:
                            return {};
                            case appConstants.LOGOUT:
                                return{};
                                default:
                                    return state
    }
}