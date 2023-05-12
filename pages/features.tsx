import Head from 'next/head'
import Image from 'next/legacy/image';
import Badge from 'react-bootstrap/Badge';

export default function Features()
{
    return (
        <>
        <Head>
        <title>MVR-功能介紹</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <div className='m-4 p-3 bg-gradient rounded'>
                <h1 className='fw-bold text-white text-center mt-2'>功能介紹</h1>
                <div>
                    <div className='d-flex gap-3 mb-4'>
                        <div className='w-25'>
                            <Image src="/features_img/player.PNG" alt="player" width="400" height="400" className='rounded'/>
                        </div>
                        <div className='w-75'>
                            <Badge bg='secondary' className='fs-2 my-1'>自訂樣貌</Badge>                       
                            <p className='fs-4 text-white'>可以透過選單修改角色的膚色、臉部與衣服裝扮，讓使用者創造最貼近自己理想樣貌的分身，提升使用時的帶入感</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='d-flex gap-3 mb-4'>
                        <div className='w-25'>
                            <Image src="/features_img/place_object.PNG" alt="placeObject" width="400" height="400" className='rounded'/>
                        </div>
                        <div className='w-75'>
                            <Badge bg='secondary' className='fs-2 my-1'>自訂環境</Badge>
                            <p className='fs-4 text-white'>可以任意放置物件到環境中，也能更改物件的大小與顏色，讓使用者能創造最舒適的空間、擺設，能更放鬆的使用此系統，提升使用的沉浸體驗感</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='d-flex gap-3 mb-4'>
                        <div className='w-25'>
                            <Image src="/features_img/play_guitar.PNG" alt="playGuitar" width="450" height="450" className='rounded'/>
                        </div>
                        <div className='w-75'>
                            <Badge bg='secondary' className='fs-2 my-1'>操作虛擬樂器</Badge>
                            <p className='fs-4 text-white'>可以透過樂器物件自由的演奏、彈唱，實現因現實世界因素而無法自由表現的慾望，更能與朋友共同演奏、合音，增進彼此默契與感情</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='d-flex gap-3 mb-4'>
                        <div className='w-25'>
                            <Image src="/features_img/buy_object.PNG" alt="buying" width="450" height="360" className='rounded'/>
                        </div>
                        <div className='w-75'>
                            <Badge bg='secondary' className='fs-2 my-1'>商店選購</Badge>
                            <p className='fs-4 text-white'>能在商店街中任意選購想要的裝扮、配件等配備，在有特殊活動時也能從中購買限時開放的合作商品與道具，並有使用AI技術的虛擬人物提供服務</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='d-flex gap-3 mb-4'>
                        <div className='w-25'>
                            <Image src="/features_img/event.PNG" alt="event" width="450" height="400" className='rounded'/>
                        </div>
                        <div className='w-75'>
                            <Badge bg='secondary' className='fs-2 my-1'>大型演唱會</Badge>
                            <p className='fs-4 text-white'>能在特殊時段加入與歌手合作的大型演唱會，享受歌手表演的同時，也能結交有共同興趣的朋友，創造豐富的娛樂時光</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='d-flex gap-3 mb-4'>
                        <div className='w-25'>
                            <Image src="/features_img/AI.jpg" alt="AI" width="450" height="300" className='rounded'/>
                        </div>
                        <div className='w-75'>
                            <Badge bg='secondary' className='fs-2 my-1'>AI客服</Badge>
                            <p className='fs-4 text-white'>我們提供了使用AI技術的客服機器人，因應使用者多場景多管道的互動模式，透過以雲端運算、人工智慧、大數據等新數位技術為基礎和客戶服務的融合、進化提供比傳統人力客服更強大的使用者體驗</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}