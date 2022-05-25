import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



export const imageBaseUrl = 'https://bellefu.inmotionhub.xyz/'
export const productImageUrl = 'https://bellefu.inmotionhub.xyz/get/product/image/'
export const shopApi = 'https://bellefu.inmotionhub.xyz/api/shop/'

export const UserAvataUrl = 'https://bellefu.inmotionhub.xyz/get/user/images/'


export const apiData = 'https://bellefu.inmotionhub.xyz/api/general/'

export const indexAPI = 'https://bellefu.inmotionhub.xyz/api/web30/get/web/index'

export const CategoryImage = 'https://bellefu.inmotionhub.xyz/category/image/'

export const sliderImage = 'https://bellefu.inmotionhub.xyz/slides/image/'

export const webApi = 'https://bellefu.inmotionhub.xyz/api/web30/'


export default function Loader({ isLoading }) {

    return (
        <Backdrop
            sx={{ color: '#FFA500', zIndex: '100', textAlign: 'center' }}
            open={isLoading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}