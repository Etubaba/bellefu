import Body from '../components/ecommerce/Body'

import Head from 'next/head'


const Shops = ({ shops }) => {

    const shop = shops.data

    console.log('shop=>', shops)
    return (
        <div>
            <Head>
                <title>Bellefu Shop</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="px-2">
                <Body
                    shops={shop}
                />
            </div>

        </div>
    )
}

export default Shops;

//get shop data from api
export async function getServerSideProps() {
    const url = 'https://bellefu.inmotionhub.xyz/api/shop/view'
    const res = await fetch(`${url}`)
    const shops = await res.json()

    return {
        props: {
            shops
        }
    }
}