import { useState } from 'react';


function GalleryItem ({id, path, likes, desc, updateLikes}) {
    
    const [toggleDesc, setToggleDesc] = useState(false);

    const handleClick = () => {
        console.log('we clickin', id)
        updateLikes(id)
    }

    const handleToggle = () => {

        setToggleDesc(!toggleDesc)
    }

    return(
        <>  
            <div key={id}>
                {toggleDesc ? <p onClick={handleToggle}>{desc}</p> : <img onClick={handleToggle} src={path} alt={desc}/>}
                <button onClick={handleClick}>do you liek et?</button>
                <p>we have {likes} lieks :)</p>
            </div>
        </>
    )
}

export default GalleryItem