import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList ({allPics}) {
    return(
        <>
            {allPics.map(picture => 
                <GalleryItem onePic={picture}/>
                )}
        </>
    )
}