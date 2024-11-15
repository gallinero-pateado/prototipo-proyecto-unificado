import Sidebar from '../NavComponents/Sidebar';
import {RoomiesFavList} from '../FavComponents/RoomieFavList';


const FavProfile = () =>{
    return(
        <div className="flex-direction-column">
            {/* Sidebar ocupa 1/4 del ancho */}
            <Sidebar/>
            {/* Profile ocupa 3/4 del ancho */}
            <RoomiesFavList />
        </div>
    )
}

export default FavProfile;

