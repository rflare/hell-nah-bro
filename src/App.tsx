"use client"
import { useState } from "react"

export default function Page() {
    const [noCount, setNoCount] = useState(0)
    const [yesPressed, setYesPressed] = useState(false)
    const yesButtonSize = noCount * 20 + 16

    const handleNoClick = () => {
        setNoCount(noCount + 1)
    }

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "NO!!",
            "Go away damnit",
            "Assault rifle (30 bullets remaining)",
            "Kick'em in the nuts",
            "L Rizz Cosmic Ripper",
            "It didn't work",
            "Try calling the cops",
            "They didn't answer",
            "Sprint away",
            "Get trapped in an alley",
            "he starts sniffing",
            "Yell with all your lungs",
            "Nobody can hear your screams",
            "It's already too late"
        ]

        return phrases[Math.min(noCount, phrases.length - 1)]
    }

    return (
        <div className="-mt-16 flex h-screen flex-col items-center justify-center">
            {yesPressed ? (
                <>

                    <img 
                        src="https://i.ytimg.com/vi/I8Rg1BjpzWc/maxresdefault.jpg" 
                        className="h-[200px]"
                    />
                    <div className="my-5 text-4xl font-bold">You now face your inevitable doom as he touches your ...</div>

                </>
            ) : (
                <>

                    <img
                        className="h-[200px]"
                        src="https://i.ytimg.com/vi/I8Rg1BjpzWc/maxresdefault.jpg"
                    />
                    <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
                    <div className="flex items-center">

                        <button
                            className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
                            style={{ fontSize: yesButtonSize }}
                            onClick={() => setYesPressed(true)}
                        >
                            Yes
                        </button>

                        <button
                            onClick={handleNoClick}
                            className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                        >
                            {noCount === 0 ? "No" : getNoButtonText()}
                        </button>

                    </div>
                </>
            )}
        </div>
    )
}
