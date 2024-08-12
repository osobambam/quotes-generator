import React from 'react'
import './randomQuotes.css'

export default function randomQuotes(){
    const [quotes, setQuotes] = React.useState([{
        text: 'Lived it. Loved it. Farewell to the beautiful game.',
        author: 'Xabi Alonso'
    }])

    const [currentQuote, setCurrentQuote] = React.useState(quotes[0])
    //const [currentQuote, setCurrentQuote] = React.useState(0)

    React.useEffect(function(){
        fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(data => setQuotes(data))
    },[])

    function refresh(){
        const random = [Math.floor(Math.random() * quotes.length)]
        setCurrentQuote(quotes[random])
        //setCurrentQuote(random)
    }

    return(
        <div className='container'>
            <div className="quote">{currentQuote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">{currentQuote.author}</div>
                    <div className="icons">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='reload' onClick={refresh}><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='twitter'><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}