import { appConstants} from './src/helpers/app-components';


export function alert(state = {}, actions){
    switch (action.type){
        case appConstants.SUCCESS:
            return{
                type:'alert-success',
                message: action.message
            };
            case appConstants.ERROR:
                return{
                    type:'alert-danger',
                    message: action.message
                };
                case appConstants.CLEAR:
                    return{};
                    default:
                        return state
    }
}